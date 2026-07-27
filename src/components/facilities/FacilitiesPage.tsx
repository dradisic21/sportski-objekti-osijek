import { useMemo, useState } from "react";

import { VenueRepo } from "@/lib/repositories";

import { FacilitiesFiltersSection } from "./FacilitiesFiltersSection";
import { FacilitiesGridSection } from "./FacilitiesGridSection";
import { FacilitiesHeroSection } from "./FacilitiesHeroSection";

export type FacilityType = "all" | "indoor" | "outdoor";

export function FacilitiesPage() {
  const all = VenueRepo.all();
  const categories = VenueRepo.categories();

  const [cat, setCat] = useState<string>("all");
  const [type, setType] = useState<FacilityType>("all");

  const filtered = useMemo(
    () =>
      all
        .filter((facility) =>
          cat === "all"
            ? true
            : facility.category === cat,
        )
        .filter((facility) =>
          type === "all"
            ? true
            : type === "indoor"
              ? facility.indoor
              : !facility.indoor,
        ),
    [all, cat, type],
  );

  return (
    <>
      <FacilitiesHeroSection />

      <FacilitiesFiltersSection
        categories={categories}
        activeCategory={cat}
        activeType={type}
        onCategoryChange={setCat}
        onTypeChange={setType}
      />

      <FacilitiesGridSection
        categories={categories}
        facilities={filtered}
        activeCategory={cat}
      />
    </>
  );
}