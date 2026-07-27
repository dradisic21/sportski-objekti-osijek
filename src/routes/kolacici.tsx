import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-custom/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { openCookieSettings } from "@/components/ui-custom/CookieConsent";
import { Cookie, Shield, Sliders, BarChart3, Megaphone, Settings2 } from "lucide-react";

export const Route = createFileRoute("/kolacici")({
  head: () => ({
    meta: [
      { title: "Politika kolačića — Športski objekti Osijek" },
      { name: "description", content: "Vrste kolačića koje koristimo, njihova svrha, trajanje i način na koji možete upravljati svojim postavkama privatnosti." },
      { property: "og:title", content: "Politika kolačića — Športski objekti Osijek" },
      { property: "og:description", content: "Transparentne informacije o kolačićima na sportski-objekti.hr." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: CookiesPage,
});

const groups = [
  {
    icon: Shield,
    title: "Nužni kolačići",
    body: "Osiguravaju osnovnu funkcionalnost stranice — sigurnost sesije, ravnomjerno prikazivanje sadržaja i pamćenje vaših postavki privatnosti. Aktivni su uvijek i ne mogu se isključiti jer bez njih stranica ne bi ispravno radila.",
  },
  {
    icon: Sliders,
    title: "Funkcionalni kolačići",
    body: "Omogućuju napredne funkcionalnosti poput pamćenja odabranog objekta u kalendaru dostupnosti, aktivnih filtara u pretrazi objekata te odabrane teme sučelja.",
  },
  {
    icon: BarChart3,
    title: "Analitički kolačići",
    body: "Prikupljaju anonimne podatke o načinu korištenja stranice: koje se stranice najčešće posjećuju, koliko dugo korisnici ostaju na pojedinim sekcijama i s kojih uređaja pristupaju. Podaci se koriste isključivo za unapređenje sadržaja i strukture stranice.",
  },
  {
    icon: Megaphone,
    title: "Marketinški kolačići",
    body: "Postavljaju ih vanjske platforme društvenih mreža radi prikaza relevantnih obavijesti o sportskim programima i događanjima na drugim web stranicama.",
  },
];

function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Privatnost"
        title="Politika kolačića."
        intro="Objašnjavamo koje kolačiće koristimo, zašto ih koristimo i kako u svakom trenutku možete promijeniti svoje postavke."
      />

      <section className="pb-24 md:pb-40">
        <div className="container-editorial grid grid-cols-12 gap-10">
          <aside className="col-span-12 md:col-span-4">
            <div className="sticky top-28 space-y-4">
              <p className="text-eyebrow text-ink-muted">Sadržaj</p>
              <ol className="space-y-2 text-sm text-ink-soft">
                <li><a href="#sto-su-kolacici" className="hover:text-accent">1. Što su kolačići</a></li>
                <li><a href="#vrste" className="hover:text-accent">2. Vrste kolačića koje koristimo</a></li>
                <li><a href="#upravljanje" className="hover:text-accent">3. Upravljanje postavkama</a></li>
                <li><a href="#treci" className="hover:text-accent">4. Kolačići trećih strana</a></li>
                <li><a href="#preglednik" className="hover:text-accent">5. Postavke u pregledniku</a></li>
                <li><a href="#izmjene" className="hover:text-accent">6. Izmjene politike</a></li>
              </ol>
              <button
                type="button"
                onClick={openCookieSettings}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-background"
              >
                <Settings2 size={14} strokeWidth={1.5} />
                Otvori postavke kolačića
              </button>
            </div>
          </aside>

          <article className="col-span-12 space-y-14 text-base leading-relaxed text-ink-soft md:col-span-8">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                Zadnja izmjena: 01. siječnja {new Date().getFullYear()}
              </p>
            </Reveal>

            <section id="sto-su-kolacici">
              <h2 className="text-display text-3xl text-ink md:text-4xl">1. Što su kolačići</h2>
              <p className="mt-4">
                Kolačići (eng. <em>cookies</em>) su male tekstualne datoteke koje web stranica sprema u vaš preglednik
                prilikom posjete. Omogućuju da stranica prepozna vaš uređaj i zapamti određene postavke između posjeta —
                primjerice odabranu temu sučelja ili zadnji pregledani objekt.
              </p>
              <p className="mt-4">
                Kolačići sami po sebi nisu zlonamjerni i ne mogu prenositi viruse ni pristupati vašim osobnim datotekama.
              </p>
            </section>

            <section id="vrste">
              <h2 className="text-display text-3xl text-ink md:text-4xl">2. Vrste kolačića koje koristimo</h2>
              <ul className="mt-8 space-y-6">
                {groups.map((g) => {
                  const Icon = g.icon;
                  return (
                    <li key={g.title} className="grid grid-cols-[auto_1fr] items-start gap-5 border-l border-line pl-5">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-ink">
                        <Icon size={16} strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="text-lg font-medium text-ink">{g.title}</h3>
                        <p className="mt-2 text-sm">{g.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section id="upravljanje">
              <h2 className="text-display text-3xl text-ink md:text-4xl">3. Upravljanje postavkama</h2>
              <p className="mt-4">
                Vaš izbor pohranjujemo lokalno u vašem pregledniku pod ključem
                <code className="mx-1 rounded bg-secondary px-2 py-1 font-mono text-xs">sportski-objekti-cookie-preferences</code>.
                Postavke možete promijeniti u bilo kojem trenutku klikom na gumb ispod ili poveznicu
                <em> „Postavke kolačića"</em> u podnožju stranice.
              </p>
              <button
                type="button"
                onClick={openCookieSettings}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Cookie size={14} strokeWidth={1.5} />
                Otvori postavke kolačića
              </button>
            </section>

            <section id="treci">
              <h2 className="text-display text-3xl text-ink md:text-4xl">4. Kolačići trećih strana</h2>
              <p className="mt-4">
                Pojedini kolačići postavljaju se od strane vanjskih pružatelja usluga (Google Analytics, Meta Platforms) i
                podliježu politikama privatnosti tih pružatelja. Podaci se prenose isključivo ako ste dali suglasnost za
                pripadajuću kategoriju.
              </p>
            </section>

            <section id="preglednik">
              <h2 className="text-display text-3xl text-ink md:text-4xl">5. Postavke u pregledniku</h2>
              <p className="mt-4">
                Sve kolačiće možete blokirati ili obrisati i putem postavki vlastitog preglednika. Napominjemo da u tom
                slučaju određene funkcionalnosti stranice možda neće raditi kako je predviđeno.
              </p>
            </section>

            <section id="izmjene">
              <h2 className="text-display text-3xl text-ink md:text-4xl">6. Izmjene politike</h2>
              <p className="mt-4">
                Ovu politiku možemo povremeno ažurirati kako bismo je uskladili s novim zakonskim propisima ili
                tehnološkim promjenama. Datum posljednje izmjene naveden je na vrhu dokumenta.
              </p>
              <p className="mt-6 text-sm text-ink-muted">
                Za pitanja vezana uz obradu osobnih podataka pogledajte{" "}
                <Link to="/politika-privatnosti" className="underline underline-offset-4 hover:text-accent">Politiku privatnosti</Link>{" "}
                ili nam se obratite putem <Link to="/kontakt" className="underline underline-offset-4 hover:text-accent">kontakt stranice</Link>.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
