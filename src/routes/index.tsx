import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/home/CTASection";
import { FeaturedVenuesSection } from "@/components/home/FeaturedVenuesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { StatsSection } from "@/components/home/StatsSection";
import { InfiniteMarquee } from "@/components/ui-custom/InfiniteMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Športski objekti d.o.o. Osijek",
      },
      {
        name: "description",
        content:
          "Sportske dvorane, bazeni, tereni i rekreacijski prostori u kojima Osijek trenira, natječe se, rekreira i susreće.",
      },
      {
        property: "og:title",
        content: "Športski objekti d.o.o. Osijek",
      },
      {
        property: "og:description",
        content:
          "Prostori u kojima Osijek trenira, natječe se, rekreira i susreće.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Sport",
  "Rekreacija",
  "Zajednica",
  "Osijek",
  "Pokret",
  "Zdravlje",
  "Natjecanje",
];

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <NewsSection />
      {/* <ProgramsSection /> */}
      <FeaturedVenuesSection />
      <InfiniteMarquee items={marqueeItems} />
      <QuickLinksSection />
      <CTASection />
    </>
  );
}