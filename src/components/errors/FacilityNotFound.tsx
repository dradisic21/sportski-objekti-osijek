import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function FacilityNotFound() {
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
    <section className="fixed inset-0 z-[9999] overflow-y-auto bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[170px]" />

        <div className="absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-secondary blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.15]" />

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container-editorial relative z-10 flex min-h-dvh w-full flex-col justify-between py-8 md:py-12">
        <div className="flex items-center justify-between border-b border-line pb-5">
          <Link
            to="/"
            aria-label="Natrag na naslovnicu"
            className="group flex items-center gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-ink font-mono text-[9px] font-medium uppercase tracking-wider text-background transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              SO
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-ink-muted">
                Osijek
              </p>

              <p className="text-sm font-medium text-ink">Športski objekti</p>
            </div>
          </Link>

          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
            Greška 404
          </p>
        </div>

        <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.65fr)] lg:gap-20 lg:py-20">
          <div>
            <p className="text-eyebrow text-accent">Objekt nije pronađen</p>

            <p
              aria-hidden="true"
              className="text-display mt-5 text-[clamp(7rem,17vw,14rem)] leading-[0.72] tracking-[-0.08em] text-ink"
            >
              404
            </p>

            <h1 className="text-display mt-10 max-w-4xl text-[clamp(2.8rem,5.5vw,5.8rem)] leading-[0.93] tracking-[-0.05em] text-ink">
              Traženi sportski objekt nije dostupan.
            </h1>
          </div>

          <div className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="max-w-md text-base leading-7 text-ink-soft">
              Objekt koji pokušavate otvoriti ne postoji, uklonjen je ili je
              njegova poveznica promijenjena. Vratite se na pregled svih
              sportskih objekata ili nastavite na naslovnicu.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              <Link
                to="/objekti"
                className="group inline-flex min-h-12 items-center justify-between gap-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <span>Svi objekti</span>

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
            Nije moguće pronaći traženi sportski objekt.
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            Sport · Rekreacija · Zajednica
          </p>
        </div>
      </div>
    </section>
  );
}
