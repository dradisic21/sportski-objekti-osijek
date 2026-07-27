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
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/sportski-objekti-osijek-preload-image.jpg"
        >
          <source
            src="/video/sportski-objekti-osijek.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-[#0B1220]/95" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,18,32,0.62)_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22><filter%20id=%22n%22><feTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%222%22/></filter><rect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22%20opacity=%220.35%22/></svg>')] opacity-[0.06] mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="container-editorial relative flex h-full flex-col pb-28 pt-28 md:pb-32 md:pt-32"
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-white/40" />

          <p className="text-eyebrow text-white/60">
            Osijek · Hrvatska
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-center pb-20 pt-8 md:pb-24 md:pt-10">
          <h1 className="text-display text-[clamp(4.25rem,8vw,8.5rem)] leading-[0.86] tracking-[-0.045em] text-white">
            <SplitWords text="ŠPORTSKI" />

            <br />

            <SplitWords
              text="OBJEKTI"
              delay={0.15}
            />

            <br />

            <span className="text-serif text-[0.58em] italic tracking-normal text-white/85">
              <SplitWords
                text="Osijek."
                delay={0.35}
              />
            </span>
          </h1>

          <Reveal delay={1}>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <MagneticButton
                to="/objekti"
                variant="primary"
              >
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