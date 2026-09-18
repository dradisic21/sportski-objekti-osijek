import type { PriceItem } from "@/lib/types";

type PriceListItem = PriceItem & {
  priceLabel?: string;
};

type PriceListProps = {
  items: PriceListItem[];
  venueSlug?: string;
};

const fmt = (n: number) =>
  new Intl.NumberFormat("hr-HR", {
    style: "currency",
    currency: "EUR",
  }).format(n);

const POOL_GROUPS = [
  {
    key: "POJEDINAČNE ULAZNICE",
    label: "POJEDINAČNE ULAZNICE",
  },
  {
    key: "OBITELJSKA ULAZNICA",
    label:
      "OBITELJSKA ULAZNICA (najviše dvije odrasle osobe i najmanje 1 dijete)",
  },
  {
    key: "NARUKVICE",
    label: "NARUKVICE",
  },
  {
    key: "NAJAM STAZE",
    label: "NAJAM STAZE (60 minuta, najviše 12 osoba, cijena po stazi)",
  },
  {
    key: "GRUPNE ULAZNICE",
    label: "GRUPNE ULAZNICE (cijena po osobi, najmanje 10 osoba, uz najavu)",
  },
  {
    key: "SAUNA",
    label: "SAUNA",
  },
  {
    key: "TOBOGAN",
    label: "TOBOGAN",
  },
];

export function PriceList({ items, venueSlug }: PriceListProps) {
  const active = items.filter((item) => item.active);

  const isGradskiBazeni = venueSlug === "gradski-bazeni";

  const getDisplayPrice = (item: PriceListItem) => {
    if (item.price === 0) {
      return "Besplatno";
    }

    return item.priceLabel || fmt(item.price);
  };

  const renderPriceItem = (p: PriceListItem) => (
    <li
      key={p.id}
      className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-2 py-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)_auto] md:items-baseline"
    >
      <div className="min-w-0">
        <p className="font-medium text-ink">{p.name}</p>

        {p.category && (
          <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            {p.category}
          </span>
        )}

        {p.note && (
          <p className="mt-2 text-sm leading-relaxed text-ink-muted md:hidden">
            {p.note}
          </p>
        )}
      </div>

      <div className="hidden text-sm leading-relaxed text-ink-muted md:block">
        {p.note}
      </div>

      <div className="text-right">
        <div className="text-display text-2xl text-ink">
          {getDisplayPrice(p)}
        </div>

        {p.price > 0 && p.unit && p.unit.trim().length > 0 && (
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            / {p.unit}
          </div>
        )}
      </div>
    </li>
  );

  //  * GRADSKI BAZENI

  if (isGradskiBazeni) {
    const regularItems = active.filter(
      (item) => item.description !== "BLAGAJNA UPRAVE"
    );

    const officeItems = active.filter(
      (item) => item.description === "BLAGAJNA UPRAVE"
    );

    return (
      <div>
        {POOL_GROUPS.map((group) => {
          const groupItems = regularItems.filter(
            (item) => item.description === group.key
          );

          if (groupItems.length === 0) {
            return null;
          }

          return (
            <div key={group.key}>
              <div className="border-t border-line py-6">
                <p className="text-xl font-bold leading-tight text-ink md:text-2xl">
                  {group.label}
                </p>
              </div>

              <ul className="divide-y divide-line border-b border-line">
                {groupItems.map(renderPriceItem)}
              </ul>
            </div>
          );
        })}

        {officeItems.length > 0 && (
          <div className="mt-12">
            <p className="mb-6 text-lg font-medium text-ink">
              Na blagajni uprave Športskih objekata d.o.o. se mogu kupiti:
            </p>

            <ul className="divide-y divide-line border-y border-line">
              {officeItems.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between gap-6 py-6"
                >
                  <p className="font-medium text-ink">{p.name}</p>

                  <div className="shrink-0 text-right">
                    <div className="text-display text-2xl text-ink">
                      {getDisplayPrice(p)}
                    </div>

                    {p.price > 0 && p.unit && p.unit.trim().length > 0 && (
                      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                        / {p.unit}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  //  * SVI OSTALI OBJEKTI
  return (
    <ul className="divide-y divide-line border-y border-line">
      {active.map(renderPriceItem)}
    </ul>
  );
}
