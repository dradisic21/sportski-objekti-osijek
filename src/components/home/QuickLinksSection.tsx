import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

import { SplitWords } from "@/components/ui-custom/Reveal";

const quickLinks = [
  {
    icon: Clock,
    label: "Radno vrijeme",
    to: "/kontakt",
    note: "Sve dvorane i bazeni",
  },
  {
    icon: MapPin,
    label: "Lokacije",
    href: "https://www.google.com/maps/d/view?mid=1OAAA8yGjn2Sc70C1acyM7akFco15INk",
    note: "Lokacije objekata u gradu",
  },
  {
    icon: Calendar,
    label: "Najam prostora",
    to: "/kontakt",
    note: "Termini i uvjeti",
  },
  {
    icon: ArrowRight,
    label: "Dokumenti",
    to: "/dokumenti",
    note: "Izvješća, natječaji, akti",
  },
];

export function QuickLinksSection() {
  return (
    <section className="bg-ink py-24 text-background md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="text-eyebrow text-background/60">Brz pristup</p>

            <h2 className="text-display mt-6 text-5xl md:text-6xl">
              <SplitWords text="Sve informacije" />

              <br />

              <em className="text-accent">
                <SplitWords text="na jednom mjestu." delay={0.2} />
              </em>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="grid grid-cols-1 divide-y divide-background/15 border-y border-background/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-6 p-6 sm:p-8"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            size={20}
                            strokeWidth={1.5}
                            className="shrink-0 text-accent"
                          />

                          <div>
                            <p className="text-lg text-background">
                              {item.label}
                            </p>

                            <p className="mt-1 text-xs text-background/60">
                              {item.note}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                          className="shrink-0 text-background/60 transition-all group-hover:rotate-45 group-hover:text-accent"
                        />
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        className="group flex items-center justify-between gap-6 p-6 sm:p-8"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            size={20}
                            strokeWidth={1.5}
                            className="shrink-0 text-accent"
                          />

                          <div>
                            <p className="text-lg text-background">
                              {item.label}
                            </p>

                            <p className="mt-1 text-xs text-background/60">
                              {item.note}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                          className="shrink-0 text-background/60 transition-all group-hover:rotate-45 group-hover:text-accent"
                        />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
