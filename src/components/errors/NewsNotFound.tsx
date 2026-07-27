import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function NewsNotFound() {
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <section className="fixed inset-0 z-[9999] overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-secondary blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-editorial relative z-10 flex h-dvh w-full flex-col justify-between py-8 md:py-12">
        <div className="flex items-center justify-between border-b border-line pb-5">
          <Link
            to="/"
            aria-label="Natrag na naslovnicu"
            className="group flex items-center gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-ink font-mono text-[9px] font-medium uppercase tracking-wider text-background transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              SO
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-ink-muted">
                Osijek
              </p>

              <p className="text-sm font-medium text-ink">
                Športski objekti
              </p>
            </div>
          </Link>

          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink-muted">
            Greška 404
          </p>
        </div>

        <div className="grid min-h-0 flex-1 items-center gap-10 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:gap-16 lg:py-10">
          <div>
            <p className="text-eyebrow text-accent">
              Novost nije pronađena
            </p>

            <p
              aria-hidden="true"
              className="text-display mt-5 text-[clamp(5rem,13vw,11rem)] leading-[0.76] tracking-[-0.07em] text-ink"
            >
              404
            </p>

            <h1 className="text-display mt-8 max-w-3xl text-[clamp(2.4rem,5vw,5rem)] leading-[0.96] tracking-[-0.04em] text-ink">
              Tražena novost više nije dostupna.
            </h1>
          </div>

          <div className="border-t border-line pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="max-w-md text-sm leading-6 text-ink-soft md:text-base md:leading-7">
              Novost koju pokušavate otvoriti ne postoji, uklonjena je ili je
              njezina poveznica promijenjena. Vratite se na pregled svih
              novosti ili nastavite na naslovnicu.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/novosti"
                className="group inline-flex min-h-12 items-center justify-between gap-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <span>Sve novosti</span>

                <ArrowLeft
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </Link>

              <Link
                to="/"
                className="group inline-flex min-h-12 items-center justify-between gap-8 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink hover:bg-secondary"
              >
                <span>Naslovnica</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            Nije moguće pronaći traženu novost.
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            Sport · Rekreacija · Zajednica
          </p>
        </div>
      </div>
    </section>
  );
}