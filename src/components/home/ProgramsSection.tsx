import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Trophy,
  Users,
  Waves,
} from "lucide-react";

import { Reveal, SplitWords } from "@/components/ui-custom/Reveal";

const programs = [
  {
    icon: Waves,
    title: "Škola plivanja",
    venue: "Gradski bazeni",
    schedule: "Pon · Sri · Pet",
    time: "17:00 – 19:00",
    color: "from-[#2563EB] to-[#60A5FA]",
  },
  {
    icon: Dumbbell,
    title: "Rekreativna dvorana",
    venue: "Dvorana Gradski vrt",
    schedule: "Uto · Čet",
    time: "19:00 – 21:00",
    color: "from-[#111827] to-[#374151]",
  },
  {
    icon: Users,
    title: "Sport za sve",
    venue: "SD Zrinjevac",
    schedule: "Sub · Ned",
    time: "09:00 – 12:00",
    color: "from-[#0B1220] to-[#2563EB]",
  },
  {
    icon: Trophy,
    title: "Škola tenisa",
    venue: "Tereni Pampas",
    schedule: "Pon – Pet",
    time: "16:00 – 20:00",
    color: "from-[#60A5FA] to-[#0B1220]",
  },
];

export function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-editorial relative">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-7">
            <p className="text-eyebrow text-accent">
              Programi · Rasporedi
            </p>

            <h2 className="text-display mt-6 text-5xl text-ink md:text-7xl">
              <SplitWords text="Rasporedi i" />

              <br />

              <em className="text-serif text-ink-soft">
                <SplitWords text="programi." delay={0.2} />
              </em>
            </h2>

            <p className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">
              Tjedni termini javnih programa, škola sporta i
              rekreativnih grupa u našim objektima. Sve dostupno
              na jednom mjestu.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 md:text-right">
            <Link
              to="/objekti"
              className="inline-flex items-center gap-2 border-b border-line pb-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Prikaži sve rasporede
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <Reveal key={program.title} delay={index * 0.06}>
                <Link
                  to="/kontakt"
                  className="group block cursor-pointer"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-background transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(15,20,30,0.2)]">
                    <div
                      className={`relative h-40 bg-gradient-to-br ${program.color}`}
                    >
                      <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[#111827]">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-widest text-white/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-display text-xl text-ink">
                        {program.title}
                      </h3>

                      <p className="mt-1 text-xs text-ink-muted">
                        {program.venue}
                      </p>

                      <div className="mt-6 space-y-2 border-t border-line pt-4 text-sm text-ink-soft">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                            Dani
                          </span>

                          <span>{program.schedule}</span>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                            Vrijeme
                          </span>

                          <span>{program.time}</span>
                        </div>
                      </div>

                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink transition-colors group-hover:text-accent">
                        Prijava

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.5}
                          className="transition-transform group-hover:rotate-45"
                        />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}