import { motion } from "framer-motion";

import { SplitWords } from "@/components/ui-custom/Reveal";

const timeline = [
  {
    year: "1980",
    title: "Osnivanje",
    body:
      "Grad Osijek preuzima upravljanje sportskim objektima kroz javnu ustanovu.",
  },
  {
    year: "1998",
    title: "Novi bazenski kompleks",
    body:
      "Otvoreni Gradski bazeni s olimpijskim bazenom duljine 50 metara.",
  },
  {
    year: "2008",
    title: "Dvorana Gradski vrt",
    body:
      "Puštena je u rad centralna gradska sportska dvorana.",
  },
  {
    year: "2018",
    title: "Preustroj u društvo",
    body:
      "Preoblikovanje u trgovačko društvo Grada Osijeka.",
  },
  {
    year: "2025",
    title: "Rekonstrukcija Juga",
    body:
      "Modernizacija Sportske dvorane Jug.",
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 md:py-40">
      <div className="container-editorial">
        <p className="text-eyebrow text-ink-muted">
          Kroz godine
        </p>

        <h2 className="text-display mt-6 text-5xl text-ink md:text-6xl">
          <SplitWords text="Naša povijest." />
        </h2>

        <ol className="relative mt-16">
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-px bg-line md:left-1/2"
          />

          {timeline.map((item, index) => {
            const alignRight = index % 2 === 1;

            return (
              <motion.li
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative mb-16 pl-12 md:grid md:grid-cols-2 md:gap-16 md:pl-0 ${
                  alignRight ? "md:text-right" : ""
                }`}
              >
                <span className="absolute left-2 top-3 h-4 w-4 rounded-full border-2 border-accent bg-background md:left-[calc(50%-8px)]" />

                <div
                  className={
                    alignRight
                      ? "md:col-start-2 md:pl-12"
                      : "md:pr-12"
                  }
                >
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                    {item.year}
                  </p>

                  <h3 className="text-display mt-2 text-3xl text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft md:inline-block">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}