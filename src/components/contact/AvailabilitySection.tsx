import {
    AvailabilityCalendar,
    type CalendarSelection,
  } from "@/components/ui-custom/AvailabilityCalendar";
  import { Reveal } from "@/components/ui-custom/Reveal";
  
  interface AvailabilitySectionProps {
    onSelectSlot: (
      selection: CalendarSelection,
    ) => void;
  }
  
  export function AvailabilitySection({
    onSelectSlot,
  }: AvailabilitySectionProps) {
    return (
      <section className="border-t border-line py-24">
        <div className="container-editorial">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 md:col-span-8">
              <p className="text-eyebrow text-ink-muted">
                Kalendar
              </p>
  
              <h2 className="text-display mt-4 text-4xl text-ink md:text-6xl">
                Provjerite dostupnost termina
              </h2>
  
              <p className="mt-4 max-w-2xl text-base text-ink-soft">
                Pregledajte okvirnu zauzetost objekata i
                pošaljite upit za željeni termin.
              </p>
            </div>
          </div>
  
          <div className="mt-10">
            <Reveal>
              <AvailabilityCalendar
                onSelectSlot={onSelectSlot}
              />
            </Reveal>
          </div>
  
          <p className="mt-6 max-w-3xl text-xs italic text-ink-muted">
            Prikazana dostupnost je informativna.
            Termin je potvrđen tek nakon odgovora
            djelatnika Športskih objekata.
          </p>
        </div>
      </section>
    );
  }