import { MagneticButton } from "@/components/ui-custom/MagneticButton";
import { Reveal, SplitWords } from "@/components/ui-custom/Reveal";

export function FacilitiesIntroSection() {
  return (
    <section className="overflow-x-clip py-24 md:py-32">
      <div className="container-editorial grid min-w-0 grid-cols-1 items-center gap-10 md:grid-cols-12">
        <div className="min-w-0 md:col-span-6">
          <div className="relative aspect-[4/5] w-full max-w-full overflow-hidden">
            <img
              src="/images/facilities/about-us-facilities.jpg"
              alt="Športski objekti Osijek"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/80">
                Mreža objekata
              </span>

              <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-white/80">
                24+
              </span>
            </div>
          </div>
        </div>

        <div className="min-w-0 md:col-span-6">
          <Reveal>
            <p className="text-eyebrow text-ink-muted">Sportski objekti</p>

            <h2 className="text-display mt-6 max-w-full break-words text-4xl text-ink sm:text-5xl md:text-6xl">
              <SplitWords text="Grad koji trenira" />

              <br />

              <em className="text-accent">
                <SplitWords text="svaki dan." delay={0.2} />
              </em>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Od centralne dvorane Gradski vrt, olimpijskih bazena i terena uz
              Dravu do mreže rekreacijskih prostora — infrastruktura je otvorena
              za klubove, škole i sve stanovnike Osijeka.
            </p>

            <div className="mt-8 max-w-full">
              <MagneticButton to="/objekti">Istraži sve objekte</MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
