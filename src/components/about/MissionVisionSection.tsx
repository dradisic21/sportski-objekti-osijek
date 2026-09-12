import { Reveal } from "@/components/ui-custom/Reveal";

export function MissionVisionSection() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-editorial grid grid-cols-1 gap-16 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <p className="text-eyebrow text-ink-muted">
            Misija Športski objekti d.o.o.
          </p>

          <p className="text-display mt-6 text-xl text-ink md:text-2xl">
            Djelatnost Športskih objekata d.o.o. je rad sportskih objekata,
            njihovo održavanje i čišćenje, a uz to i poslovi planiranja,
            izgradnje, održavanja i korištenja sportskih građevina značajnih za
            jedinicu lokalne samouprave, ali i provođenje sportskih aktivnosti
            djece, mladeži i studenata, djelovanja sportskih udruga, sportskih
            zajednica i saveza, sportska priprema, domaća i međunarodna
            natjecanja, sportsko rekreacijske aktivnosti građana, sportske
            aktivnosti osoba s teškoćama u razvoju i osoba s invaliditetom.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-eyebrow text-ink-muted">
            Vizija Športski objekti d.o.o.
          </p>

          <p className="text-display mt-6 text-xl text-ink md:text-2xl">
            Športski objekti d.o.o. provode svoju djelatnost, a sve kako bi se
            ispunilo približavanje sportskih projekata građanima i ostalim
            korisnicima razvijanjem blizine i lokalnog pristupa kao obilježja
            sporta, podigla svijest o općoj koristi tjelesnih, motoričkih i
            sportskih aktivnosti, kako bi se sport približio kao istinsko prava
            građana i korisnika, kao alat za socijalizaciju i uključenost,
            poboljšala kvaliteta života, obrazovnih prilika i psihofizičke
            dobrobiti, naročito za osobe sa invaliditetom, pružila potpora u
            cilju osiguravanja potpune pristupačnosti sportskih objekata svim
            građanima, bez isključivanja na temelju dobi, spola, nacionalnosti i
            statusa, a kako bi se omogućila njihova slobodna uporaba i proširila
            vremenska razdoblja dostupnosti javnosti.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
