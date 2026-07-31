import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

import { ContactField } from "@/components/contact/ContactField";
import {
  CONTACT_INQUIRY_TYPES,
  type ContactFormErrors,
  type ContactFormState,
  type ContactFormStatus,
} from "@/lib/types";
import { CALENDAR_VENUES } from "@/components/ui-custom/AvailabilityCalendar";
import { Reveal } from "@/components/ui-custom/Reveal";
import { VenueRepo } from "@/lib/repositories";

interface ContactFormProps {
  form: ContactFormState;
  setForm: React.Dispatch<React.SetStateAction<ContactFormState>>;
  status: ContactFormStatus;
  errors: ContactFormErrors;
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
  venues: ReturnType<typeof VenueRepo.all>;
}

export function ContactForm({
  form,
  setForm,
  status,
  errors,
  submit,
  venues,
}: ContactFormProps) {
  return (
    <div className="lg:col-span-7">
      <Reveal>
        <div className="rounded border border-line bg-surface p-6 md:p-10">
          {status === "sent" ? (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="py-20 text-center"
            >
              <CheckCircle2
                size={40}
                strokeWidth={1.2}
                className="mx-auto text-accent"
              />

              <h3 className="text-display mt-6 text-4xl text-ink">
                Poruka je poslana.
              </h3>

              <p className="mt-3 text-sm text-ink-muted">
                Odgovorit ćemo vam u najkraćem mogućem roku.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-6">
              <p className="text-eyebrow text-ink-muted">Pošaljite upit</p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <ContactField
                  label="Ime i prezime"
                  name="name"
                  value={form.name}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      name: value,
                    })
                  }
                  error={errors.name}
                  required
                />

                <ContactField
                  label="E-mail"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      email: value,
                    })
                  }
                  error={errors.email}
                  required
                />

                <ContactField
                  label="Telefon"
                  name="phone"
                  value={form.phone}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      phone: value,
                    })
                  }
                />

                <ContactField
                  label="Predmet"
                  name="subject"
                  value={form.subject}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      subject: value,
                    })
                  }
                  error={errors.subject}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="venue"
                    className="text-eyebrow text-ink-muted"
                  >
                    Objekt
                  </label>

                  <select
                    id="venue"
                    value={form.venue}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        venue: event.target.value,
                      })
                    }
                    className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-ink focus:border-accent focus:outline-none"
                  >
                    <option value="">— Nije odabrano —</option>

                    {CALENDAR_VENUES.map((venue) => (
                      <option key={venue} value={venue}>
                        {venue}
                      </option>
                    ))}

                    {venues.map((venue) => (
                      <option key={venue.id} value={venue.name}>
                        {venue.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="text-eyebrow text-ink-muted"
                  >
                    Vrsta upita
                  </label>

                  <select
                    id="inquiryType"
                    value={form.inquiryType}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        inquiryType: event.target.value,
                      })
                    }
                    className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-ink focus:border-accent focus:outline-none"
                  >
                    <option value="">— Odaberi —</option>

                    {CONTACT_INQUIRY_TYPES.map((inquiryType) => (
                      <option key={inquiryType} value={inquiryType}>
                        {inquiryType}
                      </option>
                    ))}
                  </select>
                </div>

                <ContactField
                  label="Datum"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      date: value,
                    })
                  }
                />

                <ContactField
                  label="Vrijeme"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      time: value,
                    })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-eyebrow text-ink-muted"
                >
                  Poruka *
                </label>

                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      message: event.target.value,
                    })
                  }
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-ink focus:border-accent focus:outline-none"
                />

                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <label className="flex items-start gap-3 text-xs text-ink-soft">
                <input
                  type="checkbox"
                  checked={form.gdpr}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      gdpr: event.target.checked,
                    })
                  }
                  className="mt-0.5 h-4 w-4 rounded border-line accent-accent"
                />

                <span>
                  Suglasan/na sam s obradom osobnih podataka u svrhu odgovora na
                  upit u skladu s{" "}
                  <a
                    href="/politika-privatnosti"
                    className="underline hover:text-accent"
                  >
                    Izjavom o privatnosti
                  </a>{" "}
                  i{" "}
                  <a
                    href="/uvjeti-koristenja"
                    className="underline hover:text-accent"
                  >
                    Uvjetima korištenja
                  </a>
                  .
                </span>
              </label>

              {errors.gdpr && (
                <p className="text-xs text-destructive">{errors.gdpr}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-background transition-all hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
              >
                {status === "sending" ? "Šalje se…" : "Pošalji poruku"}

                <Send size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
}
