import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { MagneticButton } from "@/components/ui-custom/MagneticButton";
import { Reveal, SplitWords } from "@/components/ui-custom/Reveal";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] min-h-[720px] w-full overflow-hidden bg-[#0B1220] text-white"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/sportski-objekti-osijek-preload-image.jpg"
        >
          <source src="/video/sportski-objekti-osijek.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Zatamnjenje samo na vrhu zbog čitljivosti navigacije */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[180px] bg-gradient-to-b from-black/55 via-black/25 to-transparent md:h-[200px]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="container-editorial relative z-[2] flex h-full flex-col pb-28 pt-28 md:pb-32 md:pt-32"
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-white/40" />

          <p className="text-eyebrow text-white/60">Osijek · Hrvatska</p>
        </div>

        <div className="flex flex-1 flex-col justify-center pb-20 pt-8 md:pb-24 md:pt-10">
          <h1 className="text-display text-[clamp(4.25rem,8vw,8.5rem)] leading-[0.86] tracking-[-0.045em] text-white">
            <SplitWords text="ŠPORTSKI" />

            <br />

            <SplitWords text="OBJEKTI" delay={0.15} />

            <br />

            <span className="text-serif text-[0.58em] italic tracking-normal text-white/85">
              <SplitWords text="Osijek." delay={0.35} />
            </span>
          </h1>

          <Reveal delay={1}>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <MagneticButton to="/objekti" variant="primary">
                Istraži objekte
              </MagneticButton>

              <MagneticButton
                to="/o-nama"
                variant="outline"
                icon={false}
                className="!border-white/30 !text-white hover:!bg-white hover:!text-[#0B1220]"
              >
                O instituciji
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-editorial pointer-events-none absolute inset-x-0 bottom-7 z-20 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 md:bottom-9 md:text-[11px]"
      >
        <span>Osijek</span>

        <div className="hidden items-center gap-3 md:flex">
          <span>Scroll</span>

          <span className="relative block h-8 w-px overflow-hidden bg-white/15">
            <span className="scroll-indicator absolute inset-x-0 top-0 h-2 bg-white/45" />
          </span>
        </div>

        <span>{new Date().getFullYear()}</span>
      </motion.div>
    </section>
  );
}
