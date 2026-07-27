import {
    Clock,
    Mail,
    MapPin,
    Phone,
  } from "lucide-react";
  
  import { SiteRepo } from "@/lib/repositories";
  
  interface ContactInfoSectionProps {
    settings: ReturnType<typeof SiteRepo.settings>;
    departments: ReturnType<
      typeof SiteRepo.departments
    >;
  }
  
  export function ContactInfoSection({
    settings,
    departments,
  }: ContactInfoSectionProps) {
    return (
      <div className="lg:col-span-5">
        <p className="text-eyebrow text-ink-muted">
          Sjedište
        </p>
  
        <ul className="mt-6 space-y-4 text-base text-ink">
          <li className="flex items-start gap-3">
            <MapPin
              size={18}
              strokeWidth={1.5}
              className="mt-1 text-accent"
            />
  
            {settings.address}
          </li>
  
          <li className="flex items-start gap-3">
            <Phone
              size={18}
              strokeWidth={1.5}
              className="mt-1 text-accent"
            />
  
            <a
              href={`tel:${settings.phone.replace(
                /\s/g,
                "",
              )}`}
              className="hover:text-accent"
            >
              {settings.phone}
            </a>
          </li>
  
          <li className="flex items-start gap-3">
            <Mail
              size={18}
              strokeWidth={1.5}
              className="mt-1 text-accent"
            />
  
            <a
              href={`mailto:${settings.email}`}
              className="hover:text-accent"
            >
              {settings.email}
            </a>
          </li>
  
          <li className="flex items-start gap-3">
            <Clock
              size={18}
              strokeWidth={1.5}
              className="mt-1 text-accent"
            />
  
            {settings.officeHours}
          </li>
        </ul>
  
        <div className="mt-12">
          <p className="text-eyebrow text-ink-muted">
            Odjeli
          </p>
  
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {departments.map((department) => (
              <li
                key={department.id}
                className="grid grid-cols-2 items-baseline gap-4 py-4"
              >
                <div>
                  <p className="text-sm text-ink">
                    {department.name}
                  </p>
  
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                    {department.person}
                  </p>
                </div>
  
                <div className="text-right">
                  <a
                    href={`mailto:${department.email}`}
                    className="block text-sm text-ink hover:text-accent"
                  >
                    {department.email}
                  </a>
  
                  {department.phone && (
                    <a
                      href={`tel:${department.phone}`}
                      className="block text-xs text-ink-muted hover:text-accent"
                    >
                      {department.phone}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="mt-12">
          <p className="text-eyebrow text-ink-muted">
            Podaci o društvu
          </p>
  
          <dl className="mt-4 space-y-2 text-xs text-ink-muted">
            <div>
              <dt className="inline font-mono">
                Naziv:{" "}
              </dt>
  
              <dd className="inline text-ink-soft">
                {settings.legalName}
              </dd>
            </div>
  
            <div>
              <dt className="inline font-mono">
                OIB:{" "}
              </dt>
  
              <dd className="inline text-ink-soft">
                {settings.oib}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }