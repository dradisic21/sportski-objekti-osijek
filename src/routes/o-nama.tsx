import { createFileRoute } from "@tanstack/react-router";

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStatsSection } from "@/components/about/AboutStatsSection";
import { FacilitiesIntroSection } from "@/components/about/FacilitiesIntroSection";
import { LegalInfoSection } from "@/components/about/LegalInfoSection";
import { ManagementSection } from "@/components/about/ManagementSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { StandardsSection } from "@/components/about/StandardsSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { ValuesSection } from "@/components/about/ValuesSection";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      {
        title: "O nama — Športski objekti d.o.o. Osijek",
      },
      {
        name: "description",
        content:
          "Trgovačko društvo Grada Osijeka koje upravlja sportskim objektima, dvoranama, bazenima i rekreacijskim prostorima.",
      },
      {
        property: "og:title",
        content: "O nama — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/o-nama",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/o-nama",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <AboutStatsSection />
      <TimelineSection />
      <ManagementSection />
      <FacilitiesIntroSection />
      <StandardsSection />
      <LegalInfoSection />
    </>
  );
}