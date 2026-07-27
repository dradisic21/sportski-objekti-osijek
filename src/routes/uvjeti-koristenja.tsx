import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-custom/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { SiteRepo } from "@/lib/repositories";
import { AlertTriangle, ShieldCheck, Scale } from "lucide-react";

export const Route = createFileRoute("/uvjeti-koristenja")({
  head: () => ({
    meta: [
      { title: "Uvjeti korištenja — Športski objekti Osijek" },
      { name: "description", content: "Uvjeti korištenja web stranice sportski-objekti.hr, odricanje odgovornosti za cjenike i informacije te odredbe o višoj sili." },
      { property: "og:title", content: "Uvjeti korištenja — Športski objekti Osijek" },
      { property: "og:description", content: "Pravni okvir korištenja web stranice i informativnog sadržaja." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const s = SiteRepo.settings();
  return (
    <>
      <PageHero
        eyebrow="Pravno"
        title="Uvjeti korištenja."
        intro="Pravila korištenja web stranice, odgovornost za sadržaj i informacije o obvezujućim dokumentima."
      />

      <section className="pb-24 md:pb-40">
        <div className="container-editorial grid grid-cols-12 gap-10">
          <aside className="col-span-12 md:col-span-4">
            <div className="sticky top-28 space-y-4">
              <p className="text-eyebrow text-ink-muted">Sadržaj</p>
              <ol className="space-y-2 text-sm text-ink-soft">
                <li><a href="#opce" className="hover:text-accent">1. Opće odredbe</a></li>
                <li><a href="#sadrzaj" className="hover:text-accent">2. Sadržaj stranice</a></li>
                <li><a href="#cjenici" className="hover:text-accent">3. Cjenici i rezervacije</a></li>
                <li><a href="#intelektualno" className="hover:text-accent">4. Intelektualno vlasništvo</a></li>
                <li><a href="#odgovornost" className="hover:text-accent">5. Ograničenje odgovornosti</a></li>
                <li><a href="#visa-sila" className="hover:text-accent">6. Viša sila</a></li>
                <li><a href="#izmjene" className="hover:text-accent">7. Izmjene uvjeta</a></li>
                <li><a href="#pravo" className="hover:text-accent">8. Mjerodavno pravo</a></li>
              </ol>
            </div>
          </aside>

          <article className="col-span-12 space-y-14 text-base leading-relaxed text-ink-soft md:col-span-8">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                Zadnja izmjena: 01. siječnja {new Date().getFullYear()}
              </p>
            </Reveal>

            <section id="opce">
              <h2 className="text-display text-3xl text-ink md:text-4xl">1. Opće odredbe</h2>
              <p className="mt-4">
                Ovi Uvjeti korištenja uređuju korištenje web stranice <span className="font-mono text-ink">sportski-objekti.hr</span> u
                vlasništvu društva <span className="text-ink">{s.legalName}</span>, OIB {s.oib}. Pristupom stranici i njenim
                korištenjem prihvaćate ove uvjete u cijelosti. Ako se s uvjetima ne slažete, molimo Vas da ne koristite
                stranicu.
              </p>
            </section>

            <section id="sadrzaj">
              <h2 className="text-display text-3xl text-ink md:text-4xl">2. Sadržaj stranice</h2>
              <p className="mt-4">
                Sadržaj objavljen na stranici informativnog je karaktera. Nastojimo osigurati točnost, potpunost i
                pravovremenost svih objavljenih informacija, no ne jamčimo da će sadržaj u svakom trenutku biti bez
                pogrešaka. Za obvezujuće informacije preporučujemo da se izravno obratite našoj službi na{" "}
                <a href={`mailto:${s.email}`} className="underline underline-offset-4 hover:text-accent">{s.email}</a>.
              </p>
            </section>

            <section id="cjenici" className="scroll-mt-28">
              <div className="rounded-2xl border border-line bg-secondary/40 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <AlertTriangle size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h2 className="text-display text-3xl text-ink md:text-4xl">3. Cjenici i rezervacije</h2>
                    <p className="mt-4">
                      Cjenici objavljeni na stranici <span className="text-ink">informativnog</span> su karaktera i mogu
                      se mijenjati bez prethodne najave. Konačna cijena i uvjeti najma utvrđuju se pisanom ponudom ili
                      ugovorom između korisnika i društva.
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li>Prikazane cijene izražene su u eurima (EUR), uključujući PDV, osim ako je izričito naznačeno drugačije.</li>
                      <li>Popusti za sportske klubove, škole i članove obitelji ostvaruju se prema važećim internim aktima društva.</li>
                      <li>Kalendar dostupnosti prikazan na stranici <em>informativna</em> je projekcija zauzetosti — konačna potvrda termina vrši se isključivo pisanim putem.</li>
                      <li>Rezervacija termina smatra se potvrđenom nakon zaprimljene pisane potvrde i uplate akontacije, gdje je predviđena.</li>
                    </ul>
                    <p className="mt-4 text-sm">
                      Službeni cjenici i pravilnici dostupni su na stranici{" "}
                      <Link to="/dokumenti" className="underline underline-offset-4 hover:text-accent">Dokumenti</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="intelektualno">
              <h2 className="text-display text-3xl text-ink md:text-4xl">4. Intelektualno vlasništvo</h2>
              <p className="mt-4">
                Sav sadržaj stranice — tekstovi, fotografije, video zapisi, grafički elementi, logotipi i programsko
                rješenje — zaštićen je autorskim pravima i drugim propisima o intelektualnom vlasništvu. Nije dopušteno
                preuzimanje, umnožavanje ili distribucija sadržaja u komercijalne svrhe bez prethodne pisane suglasnosti
                društva.
              </p>
            </section>

            <section id="odgovornost">
              <div className="flex items-start gap-4">
                <span className="mt-2 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-ink">
                  <ShieldCheck size={16} strokeWidth={1.5} />
                </span>
                <div>
                  <h2 className="text-display text-3xl text-ink md:text-4xl">5. Ograničenje odgovornosti</h2>
                  <p className="mt-4">
                    Društvo ne odgovara za bilo kakvu izravnu ili neizravnu štetu koja može nastati uslijed korištenja
                    ili nemogućnosti korištenja stranice, uključujući privremenu nedostupnost, tehničke greške ili
                    netočne informacije. Poveznice na vanjske stranice postavljene su radi lakšeg pristupa informacijama
                    i društvo ne odgovara za njihov sadržaj.
                  </p>
                </div>
              </div>
            </section>

            <section id="visa-sila" className="scroll-mt-28">
              <div className="rounded-2xl border border-line p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-ink">
                    <Scale size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h2 className="text-display text-3xl text-ink md:text-4xl">6. Viša sila</h2>
                    <p className="mt-4">
                      Društvo ne odgovara za neispunjenje ili djelomično ispunjenje obveza uzrokovano događajima više
                      sile — okolnostima koje su nastupile nakon zaključenja ugovora, koje se nisu mogle spriječiti,
                      izbjeći ili otkloniti. U višu silu ubrajaju se osobito: prirodne nepogode (poplave, potresi,
                      olujno nevrijeme), epidemije i pandemije, ratna stanja, terorističke aktivnosti, štrajkovi,
                      odluke nadležnih državnih tijela te prekidi u opskrbi energijom ili vodom.
                    </p>
                    <p className="mt-4">
                      U slučaju nastupa više sile, društvo se obvezuje bez odgode obavijestiti korisnike o nastaloj
                      situaciji te ponuditi zamjenske termine ili povrat uplaćenih sredstava, sukladno okolnostima.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="izmjene">
              <h2 className="text-display text-3xl text-ink md:text-4xl">7. Izmjene uvjeta</h2>
              <p className="mt-4">
                Zadržavamo pravo izmjene ovih uvjeta u bilo kojem trenutku. Izmjene stupaju na snagu danom objave na
                ovoj stranici. Nastavak korištenja stranice nakon izmjene smatra se prihvaćanjem novih uvjeta.
              </p>
            </section>

            <section id="pravo">
              <h2 className="text-display text-3xl text-ink md:text-4xl">8. Mjerodavno pravo i nadležnost</h2>
              <p className="mt-4">
                Na ove uvjete i njihovo tumačenje primjenjuje se pravo Republike Hrvatske. Za sve sporove koji bi mogli
                proizaći iz korištenja stranice ugovara se nadležnost stvarno nadležnog suda u Osijeku.
              </p>
              <p className="mt-6 text-sm text-ink-muted">
                Za dodatna pitanja obratite nam se putem{" "}
                <Link to="/kontakt" className="underline underline-offset-4 hover:text-accent">kontakt stranice</Link>{" "}
                ili pogledajte našu{" "}
                <Link to="/politika-privatnosti" className="underline underline-offset-4 hover:text-accent">Politiku privatnosti</Link>.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
