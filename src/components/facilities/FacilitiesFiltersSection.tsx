import type { FacilityType } from "./FacilitiesPage";
import { FilterPill } from "./FilterPill";

interface FacilityCategory {
  id: string;
  slug: string;
  name: string;
}

interface FacilitiesFiltersSectionProps {
  categories: FacilityCategory[];
  activeCategory: string;
  activeType: FacilityType;
  onCategoryChange: (category: string) => void;
  onTypeChange: (type: FacilityType) => void;
}

const facilityTypes: FacilityType[] = [
  "all",
  "indoor",
  "outdoor",
];

export function FacilitiesFiltersSection({
  categories,
  activeCategory,
  activeType,
  onCategoryChange,
  onTypeChange,
}: FacilitiesFiltersSectionProps) {
  return (
    <section className="sticky top-16 z-30 border-y border-line bg-background/85 backdrop-blur-xl md:top-20">
      <div className="container-editorial flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterPill
            active={activeCategory === "all"}
            onClick={() => onCategoryChange("all")}
          >
            Sve kategorije
          </FilterPill>

          {categories.map((category) => (
            <FilterPill
              key={category.id}
              active={activeCategory === category.slug}
              onClick={() =>
                onCategoryChange(category.slug)
              }
            >
              {category.name}
            </FilterPill>
          ))}
        </div>

        <div className="flex rounded-full border border-line p-1 text-xs">
          {facilityTypes.map((facilityType) => (
            <button
              key={facilityType}
              type="button"
              onClick={() =>
                onTypeChange(facilityType)
              }
              className={`rounded-full px-3 py-1 transition-colors ${
                activeType === facilityType
                  ? "bg-ink text-background"
                  : "text-ink-soft"
              }`}
            >
              {facilityType === "all"
                ? "Sve"
                : facilityType === "indoor"
                  ? "Zatvoreno"
                  : "Otvoreno"}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}