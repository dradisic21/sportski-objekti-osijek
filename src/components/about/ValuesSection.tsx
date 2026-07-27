import { Reveal, SplitWords } from "@/components/ui-custom/Reveal";

const values = [
  {
    number: "01",
    title: "Otvorenost",
    description:
      "Objekti dostupni svim generacijama, klubovima i školama grada.",
  },
  {
    number: "02",
    title: "Kvaliteta",
    description:
      "Standardi održavanja koji zadržavaju objekte na profesionalnoj razini.",
  },
  {
    number: "03",
    title: "Transparentnost",
    description:
      "Javno objavljeni akti, natječaji, cjenici i financijska izvješća.",
  },
  {
    number: "04",
    title: "Zajednica",
    description:
      "Prostori za sport, kulturu i susrete koji oblikuju identitet grada.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <p className="text-eyebrow text-ink-muted">
          Vrijednosti
        </p>

        <h2 className="text-display mt-6 text-5xl text-ink md:text-6xl">
          <SplitWords text="Ono što nas vodi." />
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal
              key={value.number}
              delay={index * 0.06}
            >
              <article className="border-t border-line pt-6">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  {value.number}
                </span>

                <h3 className="text-display mt-4 text-2xl text-ink">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}