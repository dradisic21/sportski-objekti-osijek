import { motion } from "framer-motion";

import { VenueCard } from "@/components/ui-custom/VenueCard";
import type { Venue } from "@/lib/types";

interface FacilityCategory {
  id: string;
  slug: string;
  name: string;
  description?: string;
}

interface FacilitiesGridSectionProps {
  categories: FacilityCategory[];
  facilities: Venue[];
  activeCategory: string;
}

const getObjectLabel = (count: number) => {
  if (count === 1) return "objekat";
  return "objekata";
};

export function FacilitiesGridSection({
  categories,
  facilities,
  activeCategory,
}: FacilitiesGridSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial">
        {categories
          .filter((category) =>
            activeCategory === "all" ? true : category.slug === activeCategory
          )
          .map((category, categoryIndex) => {
            const categoryFacilities = facilities.filter(
              (facility) => facility.category === category.slug
            );

            if (categoryFacilities.length === 0) {
              return null;
            }

            return (
              <motion.div
                id={category.slug}
                key={category.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-24 scroll-mt-32"
              >
                <div className="mb-10 flex items-end justify-between border-b border-line pb-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                      Kategorija · {String(categoryIndex + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-display mt-2 text-4xl text-ink md:text-5xl">
                      {category.name}
                    </h2>

                    {category.description && (
                      <p className="mt-2 max-w-lg text-sm text-ink-soft">
                        {category.description}
                      </p>
                    )}
                  </div>

                  <span className="font-mono text-xs text-ink-muted">
                    {categoryFacilities.length}{" "}
                    {getObjectLabel(categoryFacilities.length)}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryFacilities.map((facility, index) => (
                    <VenueCard
                      key={facility.id}
                      venue={facility}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}

        {facilities.length === 0 && (
          <div className="border-y border-line py-24 text-center">
            <p className="text-display text-3xl text-ink">Nema rezultata.</p>

            <p className="mt-3 text-sm text-ink-muted">
              Pokušajte drugačiju kombinaciju filtera.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
