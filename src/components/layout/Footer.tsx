import { Link } from "@tanstack/react-router";
import { SiteRepo, VenueRepo } from "@/lib/repositories";
import { ArrowUpRight, Cookie } from "lucide-react";
import { openCookieSettings } from "@/components/ui-custom/CookieConsent";
import { Logo } from "@/components/logo/logo";

export function Footer() {
  const s = SiteRepo.settings();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-40 overflow-hidden bg-[#0B1220] text-white">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#2563EB]/25 blur-[160px]"
      />

      <div className="container-editorial relative pt-28 pb-14">
        {/* Colossal wordmark */}
        <div className="border-b border-white/10 pb-16">
          <p className="text-eyebrow text-white/50">
            Sport · Rekreacija · Zajednica
          </p>
          <h2 className="text-display mt-8 text-[clamp(3.5rem,12vw,11rem)] leading-[0.88] text-white">
            Prostori u kojima
            <br />
            <span className="text-serif italic text-white/70">
              Osijek živi.
            </span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/kontakt"
              className="magnetic-btn bg-white text-[#0B1220] hover:bg-[#60A5FA] hover:text-white"
            >
              Kontaktirajte nas <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
            <Link
              to="/objekti"
              className="magnetic-btn border border-white/25 text-white hover:border-white"
            >
              Svi objekti
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-14 pt-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Logo inverted className="shrink-0" />
            </div>
            <address className="mt-8 space-y-2 text-sm not-italic text-white/70">
              <p className="text-white">{s.legalName}</p>
              <p>{s.address}</p>
              <p>
                <a
                  href={`tel:${s.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#60A5FA]"
                >
                  {s.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${s.email}`} className="hover:text-[#60A5FA]">
                  {s.email}
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="text-eyebrow text-white/40">Navigacija</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-[#60A5FA]">
                  Naslovnica
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="hover:text-[#60A5FA]">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/objekti" className="hover:text-[#60A5FA]">
                  Objekti
                </Link>
              </li>
              <li>
                <Link to="/dokumenti" className="hover:text-[#60A5FA]">
                  Dokumenti
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-[#60A5FA]">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-eyebrow text-white/40">Objekti</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {VenueRepo.all()
                .slice(0, 6)
                .map((v) => (
                  <li key={v.id}>
                    <Link
                      to="/objekti/$slug"
                      params={{ slug: v.slug }}
                      className="hover:text-[#60A5FA]"
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-eyebrow text-white/40">Uredovno vrijeme</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Pon — Pet</span>
                <span className="font-mono text-xs">08:00 – 16:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Subota</span>
                <span className="font-mono text-xs">09:00 – 13:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Nedjelja</span>
                <span className="font-mono text-xs text-white/50">
                  Zatvoreno
                </span>
              </li>
            </ul>
            <p className="mt-6 text-xs text-white/50">
              Radno vrijeme pojedinih dvorana i bazena vidljivo je na stranici
              svakog objekta.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              © {year} {s.legalName}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              Developed by{" "}
              <a
                href="https://www.idirection.hr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-white/70 transition-all duration-500 hover:text-white"
              >
                <span className="relative inline-block transition-transform duration-500 group-hover:-translate-y-px">
                  iDIRECTION
                </span>
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full" />
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <li>
              <Link
                to="/politika-privatnosti"
                className="font-mono text-[11px] uppercase tracking-widest text-white/50 hover:text-[#60A5FA]"
              >
                Politika privatnosti
              </Link>
            </li>
            <li>
              <Link
                to="/uvjeti-koristenja"
                className="font-mono text-[11px] uppercase tracking-widest text-white/50 hover:text-[#60A5FA]"
              >
                Uvjeti korištenja
              </Link>
            </li>
            <li>
              <Link
                to="/kolacici"
                className="font-mono text-[11px] uppercase tracking-widest text-white/50 hover:text-[#60A5FA]"
              >
                Kolačići
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={openCookieSettings}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/70 transition-colors hover:border-white/60 hover:text-white"
              >
                <Cookie size={11} strokeWidth={1.5} />
                Postavke kolačića
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
