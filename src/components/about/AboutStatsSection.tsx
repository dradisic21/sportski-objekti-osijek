import { AnimatedCounter } from "@/components/ui-custom/AnimatedCounter";
import { Reveal } from "@/components/ui-custom/Reveal";

const stats = [
  {
    value: 45,
    suffix: "",
    label: "Godina djelovanja",
  },
  {
    value: 24,
    suffix: "+",
    label: "Sportskih objekata",
  },
  {
    value: 100,
    suffix: "+",
    label: "Zaposlenih i suradnika",
  },
  {
    value: 12,
    suffix: "k+",
    label: "Mjesečnih korisnika",
  },
];

export function AboutStatsSection() {
  return (
    <section className="bg-ink py-24 text-background md:py-32">
      <div className="container-editorial grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.06}
          >
            <div className="border-l border-background/20 pl-4">
              <div className="text-display whitespace-nowrap text-[clamp(2.5rem,5vw,4rem)]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <p className="mt-3 max-w-[12rem] text-xs text-background/60 md:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}