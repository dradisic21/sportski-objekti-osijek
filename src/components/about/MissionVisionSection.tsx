import { Reveal } from "@/components/ui-custom/Reveal";

export function MissionVisionSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-editorial grid grid-cols-1 gap-16 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <p className="text-eyebrow text-ink-muted">
            Misija
          </p>

          <p className="text-display mt-6 text-3xl text-ink md:text-4xl">
            Održavati sportsku, rekreacijsku i društvenu
            infrastrukturu Grada Osijeka na razini koja omogućava
            vrhunska natjecanja i svakodnevnu rekreaciju.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-eyebrow text-ink-muted">
            Vizija
          </p>

          <p className="text-display mt-6 text-3xl text-ink md:text-4xl">
            Grad u kojem su sport i pokret dio svakodnevice —
            dostupni, kvalitetni i pravedni za sve.
          </p>
        </Reveal>
      </div>
    </section>
  );
}