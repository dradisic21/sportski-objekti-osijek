import { MagneticButton } from "@/components/ui-custom/MagneticButton";
import { Reveal, SplitWords } from "@/components/ui-custom/Reveal";

export function FacilitiesIntroSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial grid grid-cols-12 items-center gap-10">
        <div className="col-span-12 md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[oklch(0.35_0.08_240)] via-[oklch(0.5_0.13_220)] to-[oklch(0.25_0.05_240)]">
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                Mreža objekata
              </span>

              <span className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                24+
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <Reveal>
            <p className="text-eyebrow text-ink-muted">
              Sportski objekti
            </p>

            <h2 className="text-display mt-6 text-4xl text-ink md:text-6xl">
              <SplitWords text="Grad koji trenira" />

              <br />

              <em className="text-accent">
                <SplitWords
                  text="svaki dan."
                  delay={0.2}
                />
              </em>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Od centralne dvorane Gradski vrt, olimpijskih
              bazena i terena uz Dravu do mreže rekreacijskih
              prostora — infrastruktura je otvorena za klubove,
              škole i sve stanovnike Osijeka.
            </p>

            <div className="mt-8">
              <MagneticButton to="/objekti">
                Istraži sve objekte
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}