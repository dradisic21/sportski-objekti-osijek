import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-custom/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { SiteRepo } from "@/lib/repositories";

export const Route = createFileRoute("/politika-privatnosti")({
  head: () => ({
    meta: [
      { title: "Politika privatnosti — Športski objekti Osijek" },
      { name: "description", content: "Kako prikupljamo, koristimo i štitimo vaše osobne podatke u skladu s Općom uredbom o zaštiti podataka (GDPR)." },
      { property: "og:title", content: "Politika privatnosti — Športski objekti Osijek" },
      { property: "og:description", content: "Transparentnost, sigurnost i vaša prava u skladu s GDPR-om." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const s = SiteRepo.settings();
  return (
    <>
      <PageHero
        eyebrow="Privatnost"
        title="Politika privatnosti."
        intro="Obveza čuvanja povjerenja: transparentno objašnjavamo koje podatke prikupljamo, zašto i koja su vaša prava."
      />

      <section className="pb-24 md:pb-40">
        <div className="container-editorial grid grid-cols-12 gap-10">
          <aside className="col-span-12 md:col-span-4">
            <div className="sticky top-28 space-y-4">
              <p className="text-eyebrow text-ink-muted">Sadržaj</p>
              <ol className="space-y-2 text-sm text-ink-soft">
                <li><a href="#voditelj" className="hover:text-accent">1. Voditelj obrade</a></li>
                <li><a href="#podaci" className="hover:text-accent">2. Podaci koje prikupljamo</a></li>
                <li><a href="#svrha" className="hover:text-accent">3. Svrha i pravni temelj</a></li>
                <li><a href="#rok" className="hover:text-accent">4. Rok čuvanja</a></li>
                <li><a href="#primatelji" className="hover:text-accent">5. Primatelji podataka</a></li>
                <li><a href="#prava" className="hover:text-accent">6. Vaša prava</a></li>
                <li><a href="#sigurnost" className="hover:text-accent">7. Sigurnost</a></li>
                <li><a href="#kontakt" className="hover:text-accent">8. Kontakt</a></li>
              </ol>
            </div>
          </aside>

          <article className="col-span-12 space-y-14 text-base leading-relaxed text-ink-soft md:col-span-8">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                Zadnja izmjena: 01. siječnja {new Date().getFullYear()}
              </p>
            </Reveal>

            <section id="voditelj">
              <h2 className="text-display text-3xl text-ink md:text-4xl">1. Voditelj obrade osobnih podataka</h2>
              <div className="mt-4 rounded-xl border border-line bg-secondary/40 p-5 text-sm">
                <p className="font-medium text-ink">{s.legalName}</p>
                <p className="mt-1">{s.address}</p>
                <p className="mt-1">OIB: {s.oib}</p>
                <p className="mt-1">E-pošta: <a href={`mailto:${s.email}`} className="underline underline-offset-4 hover:text-accent">{s.email}</a></p>
                <p>Telefon: {s.phone}</p>
              </div>
              <p className="mt-4">
                Društvo štiti privatnost svojih posjetitelja, korisnika sportskih objekata i poslovnih partnera u skladu s
                Uredbom (EU) 2016/679 (Opća uredba o zaštiti podataka — GDPR) i Zakonom o provedbi Opće uredbe o zaštiti
                podataka (NN 42/2018).
              </p>
            </section>

            <section id="podaci">
              <h2 className="text-display text-3xl text-ink md:text-4xl">2. Podaci koje prikupljamo</h2>
              <ul className="mt-4 space-y-3">
                <li className="border-l border-line pl-4">
                  <span className="font-medium text-ink">Kontaktni podaci</span> — ime, prezime, e-pošta, telefon, sadržaj poruke
                  koje dostavljate putem kontakt obrasca ili upita za najam prostora.
                </li>
                <li className="border-l border-line pl-4">
                  <span className="font-medium text-ink">Podaci o najmu</span> — naziv organizacije, željeni termin, objekt i vrsta
                  aktivnosti navedeni u upitu.
                </li>
                <li className="border-l border-line pl-4">
                  <span className="font-medium text-ink">Tehnički podaci</span> — anonimizirana IP adresa, vrsta preglednika i
                  uređaja, stranice koje ste posjetili — isključivo uz vašu suglasnost za analitičke kolačiće.
                </li>
              </ul>
            </section>

            <section id="svrha">
              <h2 className="text-display text-3xl text-ink md:text-4xl">3. Svrha i pravni temelj obrade</h2>
              <p className="mt-4">Podatke obrađujemo isključivo za sljedeće svrhe:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>odgovaranje na vaše upite i komunikaciju vezanu uz najam prostora <em>(privola korisnika)</em>;</li>
                <li>izvršavanje ugovora o najmu ili korištenju sportskih objekata <em>(izvršenje ugovora)</em>;</li>
                <li>ispunjavanje zakonskih obveza — porezni, računovodstveni i propisi o javnoj nabavi <em>(zakonska obveza)</em>;</li>
                <li>unapređenje sadržaja i funkcionalnosti web stranice <em>(privola za analitičke kolačiće)</em>.</li>
              </ul>
            </section>

            <section id="rok">
              <h2 className="text-display text-3xl text-ink md:text-4xl">4. Rok čuvanja podataka</h2>
              <p className="mt-4">
                Osobne podatke čuvamo isključivo koliko je potrebno za ispunjenje svrhe za koju su prikupljeni, a najviše u
                zakonom propisanim rokovima. Podatke iz kontakt upita čuvamo najduže 12 mjeseci od zadnje komunikacije,
                osim ako je uspostavljen ugovorni odnos.
              </p>
            </section>

            <section id="primatelji">
              <h2 className="text-display text-3xl text-ink md:text-4xl">5. Primatelji podataka</h2>
              <p className="mt-4">
                Vaše podatke ne prosljeđujemo trećim stranama izvan Europske unije. Iznimno, dijelimo ih s obrađivačima s
                kojima imamo ugovor (pružatelji hostinga, informatičkog održavanja) uz stroge sigurnosne mjere, te s
                nadležnim državnim tijelima kada je to zakonom propisano.
              </p>
            </section>

            <section id="prava">
              <h2 className="text-display text-3xl text-ink md:text-4xl">6. Vaša prava</h2>
              <p className="mt-4">Kao ispitanik, u skladu s GDPR-om, imate sljedeća prava:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>pristup vlastitim podacima i informaciju o načinu obrade;</li>
                <li>ispravak netočnih ili nepotpunih podataka;</li>
                <li>brisanje podataka („pravo na zaborav");</li>
                <li>ograničenje obrade;</li>
                <li>prenosivost podataka;</li>
                <li>prigovor na obradu;</li>
                <li>povlačenje privole u bilo kojem trenutku;</li>
                <li>podnošenje pritužbe Agenciji za zaštitu osobnih podataka (AZOP).</li>
              </ul>
            </section>

            <section id="sigurnost">
              <h2 className="text-display text-3xl text-ink md:text-4xl">7. Sigurnost podataka</h2>
              <p className="mt-4">
                Primjenjujemo primjerene tehničke i organizacijske mjere zaštite: šifriranu komunikaciju (HTTPS), kontrolu
                pristupa, redovite sigurnosne nadogradnje i evidencije aktivnosti. Podaci se pohranjuju na poslužiteljima
                unutar Europskog gospodarskog prostora.
              </p>
            </section>

            <section id="kontakt">
              <h2 className="text-display text-3xl text-ink md:text-4xl">8. Kontakt za zaštitu podataka</h2>
              <p className="mt-4">
                Za ostvarivanje svojih prava, opoziv privole ili bilo koje pitanje vezano uz zaštitu osobnih podataka
                obratite nam se na <a href={`mailto:${s.email}`} className="underline underline-offset-4 hover:text-accent">{s.email}</a>{" "}
                ili putem <Link to="/kontakt" className="underline underline-offset-4 hover:text-accent">kontakt obrasca</Link>.
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                Nadzorno tijelo: Agencija za zaštitu osobnih podataka, Selska cesta 136, 10000 Zagreb —{" "}
                <a href="https://azop.hr" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">azop.hr</a>.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
