import { MagneticButton } from "@/components/ui-custom/MagneticButton";
import { Reveal, SplitWords } from "@/components/ui-custom/Reveal";

export function CTASection() {
  return (
    <section className="py-24 md:py-40">
      <div className="container-editorial text-center">
        <Reveal>
          <p className="text-eyebrow text-ink-muted">
            Uključite se
          </p>
        </Reveal>

        <h2 className="text-display mt-8 text-[clamp(3rem,10vw,9rem)] text-ink">
          <SplitWords text="Vidimo se" />

          <br />

          <em className="text-accent">
            <SplitWords
              text="u pokretu."
              delay={0.25}
            />
          </em>
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <MagneticButton to="/objekti">
            Pregledaj objekte
          </MagneticButton>

          <MagneticButton
            to="/kontakt"
            variant="outline"
            icon={false}
          >
            Kontakt
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}