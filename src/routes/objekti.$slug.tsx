import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Venue, VenueSection } from "@/lib/types";
import { VenueRepo } from "@/lib/repositories";
import { Reveal, SplitWords } from "@/components/ui-custom/Reveal";
import { PriceList } from "@/components/ui-custom/PriceList";
import { MagneticButton } from "@/components/ui-custom/MagneticButton";
import { FacilityNotFound } from "@/components/errors/FacilityNotFound";
import { loadVenueWithPrices } from "@/lib/repositories/publicPriceRepository";

export const Route = createFileRoute("/objekti/$slug")({
  loader: async ({ params }) => {
    const hardcodedVenue = VenueRepo.bySlug(params.slug);

    if (!hardcodedVenue) {
      throw notFound();
    }

    try {
      const venue = await loadVenueWithPrices(hardcodedVenue);

      return { venue };
    } catch (error) {
      console.error(
        `Učitavanje cijena za objekt "${hardcodedVenue.slug}" nije uspjelo:`,
        error
      );

      return {
        venue: {
          ...hardcodedVenue,
          prices: [],
          sections: hardcodedVenue.sections?.map((section) => ({
            ...section,
            prices: [],
          })),
        },
      };
    }
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Objekt nije pronađen",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const venue = loaderData.venue;

    return {
      meta: [
        {
          title: `${venue.name} — Športski objekti Osijek`,
        },
        {
          name: "description",
          content: venue.shortDescription,
        },
        {
          property: "og:title",
          content: venue.name,
        },
        {
          property: "og:description",
          content: venue.shortDescription,
        },
        {
          property: "og:url",
          content: `/objekti/${venue.slug}`,
        },
      ],

      links: [
        {
          rel: "canonical",
          href: `/objekti/${venue.slug}`,
        },
      ],
    };
  },

  component: VenueDetail,
  notFoundComponent: FacilityNotFound,
});

const bookingUrls = {
  "teniski-centar-perivoj-kralja-tomislava": "https://www.sporty.plus/hr",
  "nogometni-kavez": "https://theplayoff.app/",
} as const;

function getBookingUrl(slug?: string) {
  if (!slug) {
    return null;
  }
  return bookingUrls[slug as keyof typeof bookingUrls] ?? null;
}

function VenueDetail() {
  const { venue } = Route.useLoaderData() as {
    venue: Venue;
  };

  const category = VenueRepo.category(venue.category);

  const sectionsWithPrices =
    venue.sections?.filter((section) => (section.prices?.length ?? 0) > 0) ??
    [];

  return (
    <>
      <VenueHero venue={venue} categoryName={category?.name} />

      <VenueOverview venue={venue} />

      {venue.gallery && venue.gallery.length > 0 && (
        <VenueGallery name={venue.name} images={venue.gallery} />
      )}

      {venue.sections && venue.sections.length > 0 && (
        <VenueSections sections={venue.sections} />
      )}

      <VenueLocation venue={venue} />

      <VenuePrices venue={venue} sectionsWithPrices={sectionsWithPrices} />

      <VenueCta />
    </>
  );
}

type VenueHeroProps = {
  venue: Venue;
  categoryName?: string;
};

function VenueHero({ venue, categoryName }: VenueHeroProps) {
  const heroIsImage =
    venue.heroImage.startsWith("/") ||
    venue.heroImage.startsWith("http://") ||
    venue.heroImage.startsWith("https://");

  return (
    <section className="relative pt-24">
      <div className="relative h-[70dvh] min-h-[560px] w-full overflow-hidden bg-ink">
        {heroIsImage ? (
          <>
            <img
              src={venue.heroImage}
              alt={venue.name}
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
          </>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${venue.heroImage}`}
          />
        )}

        <div className="container-editorial relative flex h-full flex-col justify-end pb-16">
          <Reveal>
            <Link
              to="/objekti"
              className="font-mono text-[11px] uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            >
              ← Svi objekti
            </Link>
          </Reveal>

          {(categoryName || venue.location?.name) && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/70"
            >
              {categoryName}

              {categoryName && venue.location?.name && <span> · </span>}

              {venue.location?.name}
            </motion.p>
          )}

          <h1 className="text-display mt-8 max-w-6xl text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-white">
            <SplitWords text={venue.name} />
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg"
          >
            {venue.shortDescription}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function VenueOverview({ venue }: { venue: Venue }) {
  return (
    <section className="border-b border-line py-24">
      <div className="container-editorial grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="text-eyebrow text-ink-muted">O objektu</p>

          <p className="text-display mt-6 text-2xl leading-relaxed text-ink md:text-3xl">
            {venue.description}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {venue.activities.length > 0 && (
              <div>
                <p className="text-eyebrow text-ink-muted">Aktivnosti</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {venue.activities.map((activity) => (
                    <li
                      key={activity}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {venue.facilities.length > 0 && (
              <div>
                <p className="text-eyebrow text-ink-muted">Sadržaji</p>

                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  {venue.facilities.map((facility) => (
                    <li key={facility} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        ·
                      </span>

                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {venue.accessibility && venue.accessibility.length > 0 && (
            <div className="mt-12">
              <p className="text-eyebrow text-ink-muted">Pristupačnost</p>

              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-ink-soft sm:grid-cols-2">
                {venue.accessibility.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-accent">
                      ·
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <VenueContactCard venue={venue} />
      </div>
    </section>
  );
}

function VenueContactCard({ venue }: { venue: Venue }) {
  const bookingUrl = getBookingUrl(venue.slug);

  return (
    <aside className="md:col-span-4">
      <div className="sticky top-28 rounded border border-line bg-surface p-6">
        <p className="text-eyebrow text-ink-muted">Kontakt objekta</p>

        <ul className="mt-6 space-y-5 text-sm text-ink">
          <li className="flex items-start gap-3">
            <MapPin
              size={16}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-accent"
            />

            <span>{venue.address}</span>
          </li>

          {venue.phone && (
            <li className="flex items-start gap-3">
              <Phone
                size={16}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-accent"
              />

              <a
                className="transition-colors hover:text-accent"
                href={`tel:${venue.phone.replace(/\s/g, "")}`}
              >
                {venue.phone}
              </a>
            </li>
          )}

          {venue.email && (
            <li className="flex items-start gap-3">
              <Mail
                size={16}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-accent"
              />

              <a
                className="break-all transition-colors hover:text-accent"
                href={`mailto:${venue.email}`}
              >
                {venue.email}
              </a>
            </li>
          )}
        </ul>

        {venue.openingHours && venue.openingHours.length > 0 && (
          <>
            <p className="text-eyebrow mt-8 text-ink-muted">Radno vrijeme</p>

            <ul className="mt-4 space-y-3 text-sm">
              {venue.openingHours.map((item) => (
                <li
                  key={`${item.day}-${item.hours}`}
                  className="border-b border-line pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="block text-ink-soft">{item.day}</span>

                  <span className="mt-1 block font-mono text-xs leading-5 text-ink">
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {bookingUrl && (
          <div className="mt-8">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Rezerviraj termin
            </a>
          </div>
        )}

        <div className="mt-8">
          <MagneticButton
            to="/kontakt"
            variant="primary"
            className="w-full justify-center"
          >
            Kontakt objekta
          </MagneticButton>
        </div>
      </div>
    </aside>
  );
}

type VenueGalleryProps = {
  name: string;
  images: string[];
};

function VenueGallery({ name, images }: VenueGalleryProps) {
  return (
    <section className="border-b border-line py-24">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-ink-muted">Galerija</p>

          <h2 className="text-display mt-4 text-4xl text-ink md:text-5xl">
            Fotografije objekta
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
          {images.map((image, index) => {
            const isFeaturedImage = index === 0;

            return (
              <figure
                key={`${image}-${index}`}
                className={
                  isFeaturedImage
                    ? "group relative overflow-hidden rounded bg-secondary md:col-span-8 md:row-span-2"
                    : "group relative overflow-hidden rounded bg-secondary md:col-span-4"
                }
              >
                <div
                  className={
                    isFeaturedImage
                      ? "aspect-[16/11] h-full min-h-[320px] md:aspect-auto md:min-h-[520px]"
                      : "aspect-[4/3]"
                  }
                >
                  <img
                    src={image}
                    alt={`${name} — fotografija ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VenueSections({ sections }: { sections: VenueSection[] }) {
  return (
    <section className="border-b border-line bg-surface py-24">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-ink-muted">Dijelovi objekta</p>

          <h2 className="text-display mt-4 text-4xl text-ink md:text-5xl">
            Dodatni sportski sadržaji
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-soft">
            Objekt obuhvaća dodatne sportske prostore koji mogu imati vlastite
            sadržaje, radno vrijeme, galeriju i poseban cjenik.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {sections.map((section, index) => (
            <VenueSectionCard
              key={section.id}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type VenueSectionCardProps = {
  section: VenueSection;
  index: number;
};

function VenueSectionCard({ section, index }: VenueSectionCardProps) {
  const sectionSlug = section.slug ?? section.id;
  const bookingUrl = getBookingUrl(sectionSlug);

  return (
    <article
      id={section.slug ?? section.id}
      className="scroll-mt-32 overflow-hidden rounded border border-line bg-background"
    >
      {section.gallery && section.gallery.length > 0 && (
        <div className="grid grid-cols-1 gap-1 md:h-[560px] md:grid-cols-[2fr_1fr] md:grid-rows-2">
          {section.gallery.slice(0, 3).map((image, imageIndex) => {
            const isFeaturedImage = imageIndex === 0;

            return (
              <figure
                key={`${section.id}-${image}-${imageIndex}`}
                className={[
                  "group relative min-h-0 overflow-hidden rounded bg-secondary",
                  isFeaturedImage ? "md:row-span-2" : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "h-full w-full",
                    isFeaturedImage
                      ? "aspect-[16/11] md:aspect-auto"
                      : "aspect-[4/3] md:aspect-auto",
                  ].join(" ")}
                >
                  <img
                    src={image}
                    alt={`${section.name} — fotografija ${imageIndex + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            );
          })}
        </div>
      )}

      <div className="p-6 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
              Dio objekta {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="text-display mt-4 text-3xl leading-tight text-ink md:text-5xl">
              {section.name}
            </h3>

            {section.shortDescription && (
              <p className="mt-4 text-lg leading-7 text-ink-soft">
                {section.shortDescription}
              </p>
            )}

            <p className="mt-7 text-sm leading-7 text-ink-soft md:text-base">
              {section.description}
            </p>

            {section.activities && section.activities.length > 0 && (
              <div className="mt-10">
                <p className="text-eyebrow text-ink-muted">Aktivnosti</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {section.activities.map((activity) => (
                    <li
                      key={activity}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.accessibility && section.accessibility.length > 0 && (
              <div className="mt-10">
                <p className="text-eyebrow text-ink-muted">Pristupačnost</p>

                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  {section.accessibility.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        ·
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="md:col-span-5">
            {section.facilities && section.facilities.length > 0 && (
              <div>
                <p className="text-eyebrow text-ink-muted">Sadržaji</p>

                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  {section.facilities.map((facility) => (
                    <li key={facility} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        ·
                      </span>

                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.openingHours && section.openingHours.length > 0 && (
              <div className="mt-10">
                <p className="text-eyebrow text-ink-muted">Radno vrijeme</p>

                <ul className="mt-4 space-y-3 text-sm">
                  {section.openingHours.map((item) => (
                    <li
                      key={`${section.id}-${item.day}-${item.hours}`}
                      className="border-b border-line pb-3 last:border-b-0"
                    >
                      <span className="block text-ink-soft">{item.day}</span>

                      <span className="mt-1 block font-mono text-xs leading-5 text-ink">
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {bookingUrl && (
              <div className="mt-10">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Rezerviraj termin
                </a>
              </div>
            )}

            {section.prices && section.prices.length > 0 && (
              <div className="mt-10 rounded border border-line bg-surface p-5">
                <p className="text-eyebrow text-ink-muted">Zaseban cjenik</p>

                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  Ovaj dio objekta ima vlastite cijene korištenja. Cijeli cjenik
                  prikazan je u nastavku stranice.
                </p>

                <a
                  href={`#cjenik-${section.slug ?? section.id}`}
                  className="mt-4 inline-flex font-mono text-[11px] uppercase tracking-widest text-accent transition-opacity hover:opacity-70"
                >
                  Pogledaj cjenik ↓
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function VenueLocation({ venue }: { venue: Venue }) {
  return (
    <section className="border-b border-line">
      <div className="relative h-[500px] overflow-hidden">
        <iframe
          title={`Lokacija objekta ${venue.name}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            venue.address
          )}&z=16&output=embed`}
          className="absolute inset-0 h-full w-full grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/35" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        <div className="container-editorial pointer-events-none relative flex h-full items-end pb-12">
          <a
            href={venue.location?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto block max-w-xl rounded-xl bg-background/80 p-6 backdrop-blur-md transition-colors hover:bg-background"
          >
            <p className="text-eyebrow text-ink-muted">Lokacija</p>

            <h2 className="text-display mt-2 text-3xl text-ink">
              {venue.address}
            </h2>

            {venue.location?.googleMaps && (
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent">
                Otvori u Google kartama →
              </p>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}

type VenuePricesProps = {
  venue: Venue;
  sectionsWithPrices: VenueSection[];
};

function VenuePrices({ venue, sectionsWithPrices }: VenuePricesProps) {
  if (venue.prices.length === 0 && sectionsWithPrices.length === 0) {
    return (
      <section id="cjenik" className="scroll-mt-28 py-24">
        <div className="container-editorial">
          <div className="rounded border border-dashed border-line bg-surface px-8 py-14 text-center">
            <h2 className="text-display text-3xl text-ink">
              Cjenik trenutno nije dostupan
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-sm leading-6 text-ink-soft">
              Trenutno nema objavljenih cijena za ovaj objekt. Za informacije o
              korištenju objekta, dostupnim terminima i uvjetima najma
              kontaktirajte nas.
            </p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="cjenik" className="scroll-mt-28 py-24">
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-eyebrow text-ink-muted">Cjenik</p>

            <h2 className="text-display mt-4 text-4xl text-ink md:text-5xl">
              Cijene korištenja
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-soft">
              Cjenik vrijedi za tekuću godinu. Za sportske klubove, udruge,
              organizirane skupine i posebne termine mogu biti dostupni dodatni
              uvjeti korištenja.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-6">
            <p className="text-eyebrow text-ink-muted">Glavni objekt</p>

            <h3 className="text-display mt-2 text-2xl text-ink md:text-3xl">
              {venue.name}
            </h3>
          </div>

          {venue.prices.length > 0 ? (
            <PriceList items={venue.prices} />
          ) : (
            <div className="rounded border border-dashed border-line bg-surface px-6 py-10 text-center">
              <p className="text-lg font-medium text-ink">
                Trenutno nema objavljenih cijena za ovaj objekt.
              </p>

              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Za informacije o korištenju objekta, dostupnim terminima i
                uvjetima najma kontaktirajte nas.
              </p>
            </div>
          )}
        </div>

        {sectionsWithPrices.map((section) => (
          <div
            key={`${section.id}-prices`}
            id={`cjenik-${section.slug ?? section.id}`}
            className="mt-16 scroll-mt-28 border-t border-line pt-12"
          >
            <div className="mb-6">
              <p className="text-eyebrow text-ink-muted">Dodatni dio objekta</p>

              <h3 className="text-display mt-2 text-2xl text-ink md:text-3xl">
                {section.name}
              </h3>

              {section.shortDescription && (
                <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
                  {section.shortDescription}
                </p>
              )}
            </div>

            <PriceList items={section.prices ?? []} />
          </div>
        ))}
      </div>
    </section>
  );
}

function VenueCta() {
  return (
    <section className="bg-ink py-24 text-background md:py-32">
      <div className="container-editorial text-center">
        <h2 className="text-display text-[clamp(2.5rem,7vw,6rem)]">
          Zainteresirani ste za korištenje?
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <MagneticButton to="/kontakt" variant="primary">
            Kontaktirajte nas
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
