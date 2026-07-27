import { motion } from "framer-motion";

import { SplitWords } from "@/components/ui-custom/Reveal";
import { TeamRepo } from "@/lib/repositories";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3);
}

export function ManagementSection() {
  const management = TeamRepo.management();

  return (
    <section className="border-y border-line bg-surface py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex items-end justify-between border-b border-line pb-6">
          <div>
            <p className="text-eyebrow text-ink-muted">
              Uprava
            </p>

            <h2 className="text-display mt-4 text-5xl text-ink md:text-6xl">
              <SplitWords text="Ljudi iza objekata." />
            </h2>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {management.map((member, index) => (
            <motion.li
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-40px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="mx-auto grid aspect-square w-40 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[oklch(0.9_0.02_240)] to-[oklch(0.75_0.05_240)] transition-transform duration-700 group-hover:scale-[1.03]">
                <span className="text-display text-3xl text-ink/40">
                  {getInitials(member.name)}
                </span>
              </div>

              <div className="mt-6 text-center">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  {member.position}
                </p>

                <h3 className="text-display mt-2 text-2xl text-ink">
                  {member.name}
                </h3>

                {member.bio && (
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                    {member.bio}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}