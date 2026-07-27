import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowUpRight,
  Award,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { SplitWords } from "@/components/ui-custom/Reveal";

const standards = [
  {
    icon: Award,
    title: "Kvaliteta",
    description:
      "Redoviti standardi održavanja koji dvorane i bazene drže na natjecateljskoj razini.",
  },
  {
    icon: ShieldCheck,
    title: "Sigurnost",
    description:
      "Certificirana oprema, obuka osoblja i protokoli hitnog postupanja.",
  },
  {
    icon: Accessibility,
    title: "Pristupačnost",
    description:
      "Prilagođeni ulazi, sanitarni čvorovi i oprema za osobe s invaliditetom.",
  },
  {
    icon: Sparkles,
    title: "Moderni objekti",
    description:
      "Kontinuirano ulaganje u obnovu, LED rasvjetu i energetsku učinkovitost.",
  },
  {
    icon: Users,
    title: "Profesionalno osoblje",
    description:
      "Voditelji, treneri, spasioci i tehnička služba u punom radnom vremenu.",
  },
];

export function StandardsSection() {
  return (
    <section className="bg-ink py-24 text-background md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="text-eyebrow text-background/60">
              Zašto mi
            </p>

            <h2 className="text-display mt-6 text-5xl md:text-6xl">
              <SplitWords text="Standard koji" />

              <br />

              <em className="text-accent">
                <SplitWords
                  text="ne popušta."
                  delay={0.2}
                />
              </em>
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-background/70">
              Ono što razlikuje javnu instituciju od običnog
              objekta jest briga o dugovječnosti, sigurnosti i
              pristupačnosti — svaki dan, za sve.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="divide-y divide-background/15 border-y border-background/15">
              {standards.map((standard, index) => {
                const Icon = standard.icon;

                return (
                  <li
                    key={standard.title}
                    className="flex items-start gap-6 py-8"
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-accent"
                    />

                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-display text-2xl">
                          {standard.title}
                        </h3>

                        <span className="font-mono text-[10px] uppercase tracking-widest text-background/50">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-background/70">
                        {standard.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 border-b border-background/40 pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                Razgovarajmo

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}