interface ContactMapSectionProps {
    address: string;
  }
  
  export function ContactMapSection({
    address,
  }: ContactMapSectionProps) {
    return (
      <section className="border-t border-line">
        <div className="relative h-[500px] overflow-hidden">
          <iframe
            title="Lokacija"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              address,
            )}&z=16&output=embed`}
            className="absolute inset-0 h-full w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

          <div className="container-editorial relative flex h-full items-end pb-12">
            <div className="max-w-xl rounded-xl bg-background/80 p-6 backdrop-blur-md">
              <p className="text-eyebrow text-ink-muted">
                Lokacija
              </p>
  
              <h2 className="text-display mt-2 text-3xl text-ink">
                {address}
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }