import { useEffect, useRef, useState, useMemo } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Venue } from "@/lib/types";
import { VenueRepo, DocumentRepo } from "@/lib/repositories";
import { Logo } from "@/components/logo/logo";
import { ThemeToggle } from "../ui-custom/ThemeToggle";

type MegaKey = "objekti" | "dokumenti";

const mainNav: Array<{
  label: string;
  to: string;
  mega?: MegaKey;
}> = [
  { label: "Naslovnica", to: "/" },
  { label: "O nama", to: "/o-nama" },
  { label: "Objekti", to: "/objekti", mega: "objekti" },
  { label: "Novosti", to: "/novosti" },
  { label: "Dokumenti", to: "/dokumenti", mega: "dokumenti" },
  { label: "Kontakt", to: "/kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaKey | null>(null);
  const [mobile, setMobile] = useState(false);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMobile(false);
    setActiveMega(null);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMega(null);
        setMobile(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!mobile) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobile]);

  const clearClose = () => {
    if (!closeTimer.current) {
      return;
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  const scheduleClose = () => {
    clearClose();

    closeTimer.current = setTimeout(() => {
      setActiveMega(null);
    }, 160);
  };

  const openMega = (key: MegaKey) => {
    clearClose();
    setActiveMega(key);
  };

  const toggleMobile = () => {
    setActiveMega(null);
    setMobile((current) => !current);
  };

  const venues = useMemo(
    () =>
      [
        "nsd-gradski-vrt",
        "gradski-bazeni",
        "srednjoskolsko-igraliste",
        "sd-zrinjevac",
        "stadion-gradski-vrt",
        "teniski-centar-perivoj-kralja-tomislava",
      ]
        .map((slug) => VenueRepo.bySlug(slug))
        .filter((venue): venue is Venue => venue !== undefined),
    []
  );

  const venueCats = useMemo(() => VenueRepo.categories(), []);
  const docCats = useMemo(() => DocumentRepo.categories(), []);

  const isHome = pathname === "/";

  const overHero = isHome && !scrolled && !activeMega && !mobile;

  const solidHeader = scrolled || activeMega || mobile;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ${
        mobile
          ? "bg-background"
          : overHero
            ? "bg-transparent"
            : scrolled || activeMega
              ? "bg-background/85 shadow-[0_1px_20px_-8px_rgba(15,20,30,0.15)] backdrop-blur-xl"
              : "bg-background/0"
      }`}
      onMouseLeave={scheduleClose}
    >
      {/* Header bar */}
      <div className="container-editorial relative z-50 flex h-16 items-center justify-between md:h-20">
        <Logo inverted={overHero} className="shrink-0" />

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Glavna navigacija"
        >
          {mainNav.map((item) => {
            const active =
              pathname === item.to ||
              (item.to !== "/" && pathname.startsWith(item.to));

            const isOpen = Boolean(item.mega) && activeMega === item.mega;

            return (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => {
                  if (item.mega) {
                    openMega(item.mega);
                  } else {
                    scheduleClose();
                  }
                }}
              >
                <Link
                  to={item.to}
                  aria-haspopup={item.mega ? "true" : undefined}
                  aria-expanded={
                    item.mega ? (isOpen ? "true" : "false") : undefined
                  }
                  aria-controls={item.mega ? "site-mega-menu" : undefined}
                  className={`group inline-flex items-center gap-1 px-4 py-2 text-sm transition-colors ${
                    overHero
                      ? active
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                      : active
                        ? "text-ink"
                        : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <span className="relative">
                    {item.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-px transition-all duration-500 ${
                        overHero ? "bg-white" : "bg-accent"
                      } ${
                        active || isOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>

                  {item.mega && (
                    <ChevronDown
                      size={12}
                      strokeWidth={1.5}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      } ${overHero ? "text-white/80" : ""}`}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Header actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle inverted={overHero} />

          <button
            type="button"
            onClick={toggleMobile}
            aria-label={mobile ? "Zatvori navigaciju" : "Otvori navigaciju"}
            aria-expanded={mobile}
            aria-controls="mobile-navigation"
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden ${
              overHero
                ? "border-white/30 text-white hover:border-white/60"
                : "border-line text-ink hover:border-ink/30"
            }`}
          >
            {mobile ? (
              <X size={16} strokeWidth={1.5} />
            ) : (
              <Menu size={16} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence initial={false}>
        {activeMega && (
          <motion.div
            key="mega-container"
            id="site-mega-menu"
            role="region"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden border-t border-line bg-background/95 backdrop-blur-xl lg:block"
            onMouseEnter={clearClose}
            onMouseLeave={scheduleClose}
          >
            <div aria-hidden className="absolute -top-4 left-0 right-0 h-4" />

            <div
              className="container-editorial py-10"
              style={{ minHeight: 420 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {activeMega === "objekti" && (
                  <motion.div
                    key="objekti"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{
                      duration: 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="grid grid-cols-12 gap-8"
                  >
                    <div className="col-span-3">
                      <p className="text-eyebrow text-ink-muted">Kategorije</p>

                      <ul className="mt-6 space-y-3">
                        <li>
                          <Link
                            to="/objekti"
                            className="text-display text-2xl text-ink transition-colors hover:text-accent"
                          >
                            Svi objekti →
                          </Link>
                        </li>

                        {venueCats.map((category) => (
                          <li key={category.id}>
                            <Link
                              to="/objekti"
                              hash={category.slug}
                              onClick={() => setActiveMega(null)}
                              className="text-sm text-ink-soft transition-colors hover:text-ink"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-9 grid grid-cols-3 gap-6">
                      {venues.map((venue) => (
                        <Link
                          key={venue.id}
                          to="/objekti/$slug"
                          params={{ slug: venue.slug }}
                          className="group block"
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-secondary">
                            <img
                              src={venue.heroImage}
                              alt={venue.name}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                          </div>

                          <div className="mt-3 flex items-baseline justify-between gap-4">
                            <span className="text-sm text-ink transition-colors group-hover:text-accent">
                              {venue.name}
                            </span>

                            <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                              {
                                venueCats
                                  .find(
                                    (category) =>
                                      category.slug === venue.category
                                  )
                                  ?.name.split(" ")[0]
                              }
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeMega === "dokumenti" && (
                  <motion.div
                    key="dokumenti"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{
                      duration: 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="grid grid-cols-12 gap-8"
                  >
                    <div className="col-span-4">
                      <p className="text-eyebrow text-ink-muted">
                        Dokumentacija
                      </p>

                      <Link
                        to="/dokumenti"
                        className="text-display mt-6 block text-3xl text-ink transition-colors hover:text-accent"
                      >
                        Svi dokumenti →
                      </Link>

                      <p className="mt-4 max-w-xs text-sm text-ink-muted">
                        Javno dostupni akti, natječaji, cjenici i financijska
                        izvješća.
                      </p>
                    </div>

                    <ul className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-4 self-start">
                      {docCats.map((category) => (
                        <li
                          key={category.id}
                          className="border-b border-line pb-3"
                        >
                          <Link
                            to={`/dokumenti/${category.slug}` as never}
                            className="group flex items-baseline justify-between gap-4"
                          >
                            <span className="text-base text-ink transition-colors group-hover:text-accent">
                              {category.name}
                            </span>

                            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                              →
                            </span>
                          </Link>

                          {category.description && (
                            <p className="mt-1 text-xs text-ink-muted">
                              {category.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobile && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobilna navigacija"
            initial={{
              x: "100%",
            }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 overflow-y-auto bg-background will-change-transform lg:hidden"
          >
            <div className="container-editorial min-h-full pt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.35,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-6 sm:py-8"
              >
                <nav aria-label="Mobilna navigacija">
                  <ul>
                    {mainNav.map((item) => {
                      const active =
                        pathname === item.to ||
                        (item.to !== "/" && pathname.startsWith(item.to));

                      return (
                        <li key={item.to} className="border-b border-line">
                          <Link
                            to={item.to}
                            className={`text-display flex min-h-[73px] items-center text-3xl transition-colors ${
                              active
                                ? "text-accent"
                                : "text-ink hover:text-accent"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Contact */}
                <div className="pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                    Kontakt
                  </p>

                  <div className="mt-4 space-y-2">
                    <a
                      href="mailto:info@sportski-objekti.hr"
                      className="block w-fit text-sm text-ink-soft transition-colors duration-300 hover:text-accent"
                    >
                      info@sportski-objekti.hr
                    </a>

                    <a
                      href="tel:+38531234567"
                      className="block w-fit text-sm text-ink-soft transition-colors duration-300 hover:text-accent"
                    >
                      +385 31 234 567
                    </a>
                  </div>
                </div>

                {/* Social media */}
                <div className="mt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                    Pratite nas
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-300 hover:text-accent"
                    >
                      Instagram
                      <span
                        aria-hidden
                        className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </a>

                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-300 hover:text-accent"
                    >
                      Facebook
                      <span
                        aria-hidden
                        className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </a>

                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-300 hover:text-accent"
                    >
                      YouTube
                      <span
                        aria-hidden
                        className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

                {/* Company information */}
                <div className="mt-10 border-t border-line pb-8 pt-6">
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Športski objekti d.o.o.
                    <br />
                    Osijek, Hrvatska
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
