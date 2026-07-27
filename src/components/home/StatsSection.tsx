import { AnimatedCounter } from "@/components/ui-custom/AnimatedCounter";
import { Reveal } from "@/components/ui-custom/Reveal";

const stats = [
  {
    value: 24,
    suffix: "+",
    label: "Sportskih objekata",
  },
  {
    value: 68,
    suffix: "",
    label: "Javnih igrališta",
  },
  {
    value: 12,
    suffix: "k+",
    label: "Mjesečnih korisnika",
  },
  {
    value: 250,
    suffix: "+",
    label: "Sportskih događaja",
  },
  {
    value: 45,
    suffix: "",
    label: "Godina djelovanja",
  },
];

export function StatsSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-5">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div className="border-l border-line pl-4">
                <div className="text-display text-[clamp(2.5rem,5vw,4rem)] text-ink">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <p className="mt-3 text-xs text-ink-muted md:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}