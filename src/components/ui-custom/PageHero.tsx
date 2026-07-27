import { memo, type ReactNode } from "react";
import { Reveal, SplitWords } from "../ui-custom/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

export const PageHero = memo(function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-56 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container-editorial relative">
        <Reveal>
          <p className="text-eyebrow text-ink-muted">{eyebrow}</p>
        </Reveal>

        <h1 className="text-display mt-6 text-[clamp(3rem,8vw,7rem)] text-ink">
          <SplitWords text={title} />
        </h1>

        {intro && (
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft md:text-xl">
              {intro}
            </p>
          </Reveal>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
});
