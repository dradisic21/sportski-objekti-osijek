import { MagneticButton } from "@/components/ui-custom/MagneticButton";
import { PageHero } from "@/components/ui-custom/PageHero";

export function AboutHeroSection() {
  return (
    <PageHero
      eyebrow="O društvu"
      title="Upravljamo prostorima u kojima grad živi."
      intro="Športski objekti d.o.o. trgovačko je društvo u vlasništvu Grada Osijeka. Održavamo i upravljamo mrežom sportskih dvorana, bazena, terena i rekreacijskih prostora — svakodnevno otvorenih za sve generacije Osječanki i Osječana."
    >
      <MagneticButton to="/kontakt">
        Kontakt
      </MagneticButton>
    </PageHero>
  );
}