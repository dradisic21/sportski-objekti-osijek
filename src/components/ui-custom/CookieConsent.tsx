import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Cookie, Shield, Sliders, BarChart3, Megaphone, Check, X, ChevronDown } from "lucide-react";

const STORAGE_KEY = "sportski-objekti-cookie-preferences";
const VERSION = 1;
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export type CookiePreferences = {
  essential: true;
  functional: boolean;
  analytical: boolean;
  marketing: boolean;
  version: number;
  updatedAt: string;
};

const defaultPrefs: CookiePreferences = {
  essential: true,
  functional: false,
  analytical: false,
  marketing: false,
  version: VERSION,
  updatedAt: "",
};

type Category = {
  id: keyof Omit<CookiePreferences, "version" | "updatedAt">;
  icon: typeof Cookie;
  name: string;
  short: string;
  description: string;
  required?: boolean;
  cookies: { name: string; provider: string; duration: string; purpose: string }[];
};

const CATEGORIES: Category[] = [
  {
    id: "essential",
    icon: Shield,
    name: "Nužni kolačići",
    short: "Uvijek aktivno",
    description:
      "Neophodni za temeljno funkcioniranje web stranice — sigurnost, ravnomjerno učitavanje sadržaja i pamćenje vaših postavki privatnosti. Bez njih stranica ne može ispravno raditi.",
    required: true,
    cookies: [
      { name: STORAGE_KEY, provider: "sportski-objekti.hr", duration: "12 mjeseci", purpose: "Pamćenje vaših postavki kolačića" },
      { name: "theme", provider: "sportski-objekti.hr", duration: "12 mjeseci", purpose: "Pamćenje odabrane teme (svijetla/tamna)" },
    ],
  },
  {
    id: "functional",
    icon: Sliders,
    name: "Funkcionalni kolačići",
    short: "Poboljšano iskustvo",
    description:
      "Omogućuju napredne funkcionalnosti poput pamćenja odabranog objekta u kalendaru dostupnosti, pretraga i personalizacije korisničkog sučelja.",
    cookies: [
      { name: "so_last_venue", provider: "sportski-objekti.hr", duration: "30 dana", purpose: "Zadnji pregledani objekt" },
      { name: "so_filters", provider: "sportski-objekti.hr", duration: "Sesija", purpose: "Aktivni filtri u pretrazi" },
    ],
  },
  {
    id: "analytical",
    icon: BarChart3,
    name: "Analitički kolačići",
    short: "Statistika posjeta",
    description:
      "Prikupljaju anonimne podatke o načinu na koji posjetitelji koriste stranicu — koje objekte najčešće pregledavaju, koliko dugo se zadržavaju i odakle dolaze. Pomažu nam u unapređenju usluge.",
    cookies: [
      { name: "_ga", provider: "Google Analytics", duration: "24 mjeseca", purpose: "Anonimno prepoznavanje posjetitelja" },
      { name: "_ga_*", provider: "Google Analytics", duration: "24 mjeseca", purpose: "Statistika sesija" },
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    name: "Marketinški kolačići",
    short: "Prilagođeni sadržaji",
    description:
      "Koriste se za prikaz relevantnih obavijesti o sportskim programima i događanjima kroz vanjske platforme društvenih mreža.",
    cookies: [
      { name: "_fbp", provider: "Meta Platforms", duration: "3 mjeseca", purpose: "Identifikator za oglasni sustav" },
    ],
  },
];

function loadPrefs(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    if (parsed.version !== VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function savePrefs(p: CookiePreferences) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
  }
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [banner, setBanner] = useState(false);
  const [settings, setSettings] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [prefs, setPrefs] = useState<CookiePreferences>(defaultPrefs);

  useEffect(() => {
    setMounted(true);
    const stored = loadPrefs();
    if (stored) setPrefs(stored);
    else setBanner(true);

    const onOpen = () => {
      const s = loadPrefs();
      if (s) setPrefs(s);
      setSettings(true);
      setBanner(false);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
  }, []);

  if (!mounted) return null;

  const commit = (p: CookiePreferences) => {
    const next = { ...p, essential: true as const, version: VERSION, updatedAt: new Date().toISOString() };
    savePrefs(next);
    setPrefs(next);
    setBanner(false);
    setSettings(false);
  };

  const acceptAll = () => commit({ ...defaultPrefs, functional: true, analytical: true, marketing: true });
  const rejectOptional = () => commit({ ...defaultPrefs });
  const saveCurrent = () => commit(prefs);

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {banner && !settings && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-3 z-[80] md:inset-x-auto md:bottom-6 md:left-6 md:right-6 md:mx-auto md:max-w-[880px]"
            role="dialog"
            aria-live="polite"
            aria-label="Postavke kolačića"
          >
            <div className="grain-overlay overflow-hidden rounded-2xl border border-line bg-surface/95 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(15,20,30,0.35)]">
              <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:p-8">
                <div className="hidden md:block">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/10 text-accent">
                    <Cookie size={22} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-eyebrow text-ink-muted">Privatnost · Kolačići</p>
                  <h2 className="text-display mt-2 text-2xl text-ink md:text-3xl">
                    Poštujemo vaš izbor.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm text-ink-soft md:text-[15px]">
                    Koristimo kolačiće kako bi stranica ispravno radila te — uz vaš pristanak — za analitiku posjeta
                    i unapređenje sadržaja. Detalje pronađite u{" "}
                    <Link to="/kolacici" className="underline decoration-line underline-offset-4 hover:text-accent">politici kolačića</Link>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:flex-col md:items-stretch md:gap-2">
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Prihvati sve
                  </button>
                  <button
                    type="button"
                    onClick={rejectOptional}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-ink transition-colors hover:border-ink"
                  >
                    Odbij neobvezne
                  </button>
                  <button
                    type="button"
                    onClick={() => setSettings(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    Postavke
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings modal / sheet */}
      <AnimatePresence>
        {settings && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center md:items-center md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Detaljne postavke kolačića"
          >
            <div
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
              onClick={() => setSettings(false)}
            />
            <motion.div
              initial={{ y: 60, opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl border border-line bg-surface shadow-[0_-30px_80px_-20px_rgba(15,20,30,0.4)] md:max-w-[720px] md:rounded-3xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-6 md:px-8 md:py-7">
                <div>
                  <p className="text-eyebrow text-ink-muted">Postavke privatnosti</p>
                  <h2 className="text-display mt-2 text-2xl text-ink md:text-3xl">Upravljanje kolačićima</h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    Odaberite kategorije kolačića koje želite dopustiti. Svoj izbor možete promijeniti u bilo kojem trenutku.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSettings(false)}
                  aria-label="Zatvori"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink hover:text-ink"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Categories */}
              <div className="flex-1 overflow-y-auto px-6 py-4 md:px-8">
                <ul className="divide-y divide-line">
                  {CATEGORIES.map((cat) => {
                    const enabled = prefs[cat.id];
                    const isOpen = expanded === cat.id;
                    const Icon = cat.icon;
                    return (
                      <li key={cat.id} className="py-5">
                        <div className="flex items-start justify-between gap-4">
                          <button
                            type="button"
                            onClick={() => setExpanded(isOpen ? null : cat.id)}
                            className="flex flex-1 items-start gap-4 text-left"
                          >
                            <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-ink">
                              <Icon size={16} strokeWidth={1.5} />
                            </span>
                            <span className="flex-1">
                              <span className="flex items-center gap-3">
                                <span className="text-base font-medium text-ink">{cat.name}</span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                                  {cat.short}
                                </span>
                              </span>
                              <span className="mt-1 block text-sm text-ink-soft">{cat.description}</span>
                              <span className="mt-2 inline-flex items-center gap-1 text-xs text-ink-muted hover:text-ink">
                                <ChevronDown size={12} strokeWidth={1.5} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                {isOpen ? "Sakrij detalje" : "Prikaži kolačiće"}
                              </span>
                            </span>
                          </button>
                          <Toggle
                            disabled={cat.required}
                            checked={enabled}
                            onChange={(v) => setPrefs((p) => ({ ...p, [cat.id]: v }) as CookiePreferences)}
                            label={`${cat.name} kolačići`}
                          />
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 ml-0 overflow-hidden rounded-lg border border-line md:ml-14">
                                <table className="w-full text-left text-xs">
                                  <thead className="bg-secondary text-ink-muted">
                                    <tr>
                                      <th className="px-3 py-2 font-mono uppercase tracking-widest">Naziv</th>
                                      <th className="px-3 py-2 font-mono uppercase tracking-widest">Pružatelj</th>
                                      <th className="px-3 py-2 font-mono uppercase tracking-widest">Trajanje</th>
                                      <th className="px-3 py-2 font-mono uppercase tracking-widest">Svrha</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-line">
                                    {cat.cookies.map((c) => (
                                      <tr key={c.name} className="align-top text-ink-soft">
                                        <td className="px-3 py-2 font-mono text-[11px] text-ink">{c.name}</td>
                                        <td className="px-3 py-2">{c.provider}</td>
                                        <td className="px-3 py-2">{c.duration}</td>
                                        <td className="px-3 py-2">{c.purpose}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 rounded-xl border border-line bg-secondary/50 p-4 text-xs text-ink-soft">
                  Više informacija:{" "}
                  <Link to="/kolacici" className="underline underline-offset-4 hover:text-accent">Politika kolačića</Link>{" · "}
                  <Link to="/politika-privatnosti" className="underline underline-offset-4 hover:text-accent">Politika privatnosti</Link>{" · "}
                  <Link to="/uvjeti-koristenja" className="underline underline-offset-4 hover:text-accent">Uvjeti korištenja</Link>
                </div>
              </div>

              {/* Footer actions */}
              <div className="flex flex-col-reverse gap-2 border-t border-line bg-background/60 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
                <button
                  type="button"
                  onClick={rejectOptional}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-ink transition-colors hover:border-ink"
                >
                  Odbij neobvezne
                </button>
                <div className="flex flex-col gap-2 md:flex-row">
                  <button
                    type="button"
                    onClick={saveCurrent}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink px-5 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-background"
                  >
                    <Check size={14} strokeWidth={1.5} /> Spremi izbor
                  </button>
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Prihvati sve
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative mt-1 inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-accent" : "bg-line-strong"
      } ${disabled ? "opacity-60" : ""}`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 34 }}
        className={`inline-block h-5 w-5 rounded-full bg-white shadow-md ${checked ? "ml-6" : "ml-1"}`}
      />
    </button>
  );
}
