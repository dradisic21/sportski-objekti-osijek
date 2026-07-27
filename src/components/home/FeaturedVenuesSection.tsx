import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { SplitWords } from "@/components/ui-custom/Reveal";
import { VenueRepo } from "@/lib/repositories";

export function FeaturedVenuesSection() {
  const featured = VenueRepo.featured();

  return (
    <section className="py-24 md:py-40">
      <div className="container-editorial">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="text-eyebrow text-ink-muted">
              Odabrani objekti
            </p>

            <h2 className="text-display mt-6 text-5xl text-ink md:text-7xl">
              <SplitWords text="Prostori koji" />

              <br />

              <em className="text-accent">
                <SplitWords
                  text="oblikuju grad."
                  delay={0.2}
                />
              </em>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-4 md:text-right">
            <Link
              to="/objekti"
              className="inline-flex items-center gap-2 border-b border-line pb-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Svi objekti
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-40">
          {featured.map((venue, index) => {
            const flip = index % 2 === 1;

            const categoryName =
              VenueRepo.category(venue.category)?.name ??
              "Sportski objekt";

            const hasHeroImage =
              Boolean(venue.heroImage) &&
              (venue.heroImage.startsWith("/") ||
                venue.heroImage.startsWith("http://") ||
                venue.heroImage.startsWith("https://"));

            return (
              <article
                key={venue.id}
                className="grid grid-cols-12 items-center gap-y-10 md:gap-x-12 md:gap-y-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`col-span-12 md:col-span-7 ${
                    flip
                      ? "md:col-start-6"
                      : "md:col-start-1"
                  }`}
                >
                  <Link
                    to="/objekti/$slug"
                    params={{ slug: venue.slug }}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      {hasHeroImage ? (
                        <img
                          src={venue.heroImage}
                          alt={venue.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.42_0.055_255)] via-[oklch(0.28_0.04_255)] to-[oklch(0.16_0.025_255)]" />
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/15" />

                      <div className="absolute left-6 top-6">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(featured.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`col-span-12 md:col-span-5 ${
                    flip
                      ? "md:col-start-1 md:row-start-1"
                      : "md:col-start-8"
                  }`}
                >
                  <p className="text-eyebrow text-ink-muted">
                    {categoryName}
                  </p>

                  <h3 className="text-display mt-4 text-4xl leading-[1.05] text-ink md:text-5xl">
                    {venue.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                    {venue.description}
                  </p>

                  {venue.activities.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {venue.activities
                        .slice(0, 4)
                        .map((activity) => (
                          <li
                            key={activity}
                            className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft"
                          >
                            {activity}
                          </li>
                        ))}
                    </ul>
                  )}

                  <Link
                    to="/objekti/$slug"
                    params={{ slug: venue.slug }}
                    className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Otkrij objekt
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </Link>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}