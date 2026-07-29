import { supabase } from "@/lib/supabase";
import type { PriceItem, Venue } from "@/lib/types";

export interface PublicPriceItem extends PriceItem {
  priceLabel: string;
  timeRange?: string;
}

type VenueReferenceRow = {
  id: string;
  slug: string;
};

type PriceItemRow = {
  id: string;
  venue_id: string;
  name: string;
  price: number | string | null;
  price_no_vat: number | string | null;
  price_with_vat: number | string | null;
  vat_type: string | null;
  currency: string | null;
  unit_label: string | null;
  time_range: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
};

function toNumber(value: number | string | null): number | null {
  if (value === null || value === "") {
    return null;
  }

  const parsedValue = Number(value);

  return Number.isFinite(parsedValue) ? parsedValue : null;
}

function formatCurrency(
  value: number | string | null,
  currency = "EUR",
): string {
  const numericValue = toNumber(value);

  if (numericValue === null) {
    return "Cijena na upit";
  }

  return new Intl.NumberFormat("hr-HR", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue);
}

function formatUnit(unitLabel: string | null): string {
  const normalizedUnit = unitLabel?.trim();

  if (!normalizedUnit) {
    return "";
  }

  return `/${normalizedUnit}`;
}

function createPriceLabel(row: PriceItemRow): string {
  const currency = row.currency ?? "EUR";
  const unit = formatUnit(row.unit_label);

  switch (row.vat_type) {
    case "plus_vat":
      return `${formatCurrency(row.price, currency)} + PDV${unit}`;

    case "no_vat":
      return `${formatCurrency(row.price, currency)}${unit}`;

    case "vat_included":
      return `${formatCurrency(row.price, currency)} s PDV-om${unit}`;

    case "dual": {
      const priceNoVat = formatCurrency(row.price_no_vat, currency);
      const priceWithVat = formatCurrency(row.price_with_vat, currency);

      return `${priceNoVat} bez PDV-a / ${priceWithVat} s PDV-om${unit}`;
    }

    default:
      return `${formatCurrency(row.price, currency)}${unit}`;
  }
}

function getPrimaryPrice(row: PriceItemRow): number {
  const standardPrice = toNumber(row.price);

  if (standardPrice !== null) {
    return standardPrice;
  }

  const priceNoVat = toNumber(row.price_no_vat);

  if (priceNoVat !== null) {
    return priceNoVat;
  }

  const priceWithVat = toNumber(row.price_with_vat);

  if (priceWithVat !== null) {
    return priceWithVat;
  }

  return 0;
}

function mapPublicPriceItem(row: PriceItemRow): PublicPriceItem {
  return {
    id: row.id,
    name: row.name,

    price: getPrimaryPrice(row),
    unit: row.unit_label?.trim() ?? "",
    active: row.is_active,

    priceLabel: createPriceLabel(row),
    timeRange: row.time_range?.trim() || undefined,
  };
}

function getVenuePriceSlugs(venue: Venue): string[] {
  const sectionSlugs =
    venue.sections?.map((section) => section.slug ?? section.id) ?? [];

  return Array.from(new Set([venue.slug, ...sectionSlugs]));
}

export async function loadVenueWithPrices(
  venue: Venue,
): Promise<Venue> {
  const slugs = getVenuePriceSlugs(venue);

  const { data: venueRows, error: venuesError } = await supabase
    .from("venues")
    .select("id, slug")
    .in("slug", slugs);

  if (venuesError) {
    throw new Error(
      `Učitavanje objekata za cjenik nije uspjelo: ${venuesError.message}`,
    );
  }

  const references = (venueRows ?? []) as VenueReferenceRow[];

  if (references.length === 0) {
    return {
      ...venue,
      prices: [],
      sections: venue.sections?.map((section) => ({
        ...section,
        prices: [],
      })),
    };
  }

  const venueIds = references.map((item) => item.id);

  const { data: priceRows, error: pricesError } = await supabase
    .from("price_items")
    .select(`
      id,
      venue_id,
      name,
      price,
      price_no_vat,
      price_with_vat,
      vat_type,
      currency,
      unit_label,
      time_range,
      is_active,
      sort_order,
      created_at
    `)
    .in("venue_id", venueIds)
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (pricesError) {
    throw new Error(
      `Učitavanje cijena nije uspjelo: ${pricesError.message}`,
    );
  }

  const rows = (priceRows ?? []) as PriceItemRow[];

  const venueIdBySlug = new Map<string, string>(
    references.map((item) => [item.slug, item.id]),
  );

  const pricesByVenueId = new Map<string, PublicPriceItem[]>();

  for (const row of rows) {
    const currentPrices = pricesByVenueId.get(row.venue_id) ?? [];

    currentPrices.push(mapPublicPriceItem(row));

    pricesByVenueId.set(row.venue_id, currentPrices);
  }

  const mainVenueId = venueIdBySlug.get(venue.slug);

  const mainVenuePrices: PriceItem[] = mainVenueId
    ? pricesByVenueId.get(mainVenueId) ?? []
    : [];

  return {
    ...venue,

    prices: mainVenuePrices,

    sections: venue.sections?.map((section) => {
      const sectionSlug = section.slug ?? section.id;
      const sectionVenueId = venueIdBySlug.get(sectionSlug);

      const sectionPrices: PriceItem[] = sectionVenueId
        ? pricesByVenueId.get(sectionVenueId) ?? []
        : [];

      return {
        ...section,
        prices: sectionPrices,
      };
    }),
  };
}