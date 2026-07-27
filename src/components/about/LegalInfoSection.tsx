import { MagneticButton } from "@/components/ui-custom/MagneticButton";
import { SiteRepo } from "@/lib/repositories";

export function LegalInfoSection() {
  const settings = SiteRepo.settings();

  const legalDetails = [
    {
      label: "Puni naziv",
      value: settings.legalName,
    },
    {
      label: "Sjedište",
      value: settings.address,
    },
    {
      label: "OIB",
      value: settings.oib,
    },
    {
      label: "Telefon",
      value: settings.phone,
    },
    {
      label: "E-mail",
      value: settings.email,
    },
    {
      label: "Osnivač",
      value: "Grad Osijek",
    },
  ];

  return (
    <section className="border-t border-line bg-surface py-24">
      <div className="container-editorial grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p className="text-eyebrow text-ink-muted">
            Podaci o društvu
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            {legalDetails.map((detail) => (
              <div
                key={detail.label}
                className="grid grid-cols-3 gap-4 border-b border-line pb-3"
              >
                <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  {detail.label}
                </dt>

                <dd className="col-span-2 break-words text-ink">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-display text-4xl text-ink md:text-5xl">
            Trebate više informacija?
          </h2>

          <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
            Za medijske upite, poslovnu suradnju ili najam
            prostora obratite se odjelu koji vam odgovara.
          </p>

          <div className="mt-8">
            <MagneticButton to="/kontakt">
              Kontakt odjeli
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}