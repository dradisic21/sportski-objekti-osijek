import { useRef, useState } from "react";

import { AvailabilitySection } from "@/components/contact/AvailabilitySection";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactMapSection } from "@/components/contact/ContactMapSection";
import type { CalendarSelection } from "@/components/ui-custom/AvailabilityCalendar";
import { SiteRepo, VenueRepo } from "@/lib/repositories";
import type {
  ContactFormErrors,
  ContactFormState,
  ContactFormStatus,
} from "@/lib/types";


export function ContactPage() {
  const settings = SiteRepo.settings();
  const departments = SiteRepo.departments();
  const venues = VenueRepo.all();
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    venue: "",
    date: "",
    time: "",
    inquiryType: "",
    message: "",
    gdpr: false,
  });
  
  const [status, setStatus] =
    useState<ContactFormStatus>("idle");
  
  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  function validate(): boolean {
    const nextErrors: ContactFormErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Unesite ime i prezime.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Neispravan e-mail.";
    }

    if (form.subject.trim().length < 2) {
      nextErrors.subject = "Unesite predmet.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message =
        "Poruka mora imati barem 10 znakova.";
    }

    if (!form.gdpr) {
      nextErrors.gdpr = "Potrebna je suglasnost.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function submit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("sending");

    await new Promise((resolve) =>
      setTimeout(resolve, 900),
    );

    setStatus("sent");
  }

  function handleSlotSelect(
    selection: CalendarSelection,
  ) {
    const iso = `${selection.date.getFullYear()}-${String(
      selection.date.getMonth() + 1,
    ).padStart(2, "0")}-${String(
      selection.date.getDate(),
    ).padStart(2, "0")}`;

    setForm((previous) => ({
      ...previous,
      venue: selection.venue,
      date: iso,
      time: selection.time,
      inquiryType:
        previous.inquiryType || "Upit za termin",
      subject:
        previous.subject ||
        `Upit za termin — ${selection.venue}`,
    }));

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <ContactHeroSection />

      {/* <AvailabilitySection
        onSelectSlot={handleSlotSelect}
      /> */}

      <section
        id="kontakt-forma"
        ref={formRef}
        className="border-t border-line py-24"
      >
        <div className="container-editorial grid grid-cols-1 gap-16 lg:grid-cols-12">
          <ContactInfoSection
            settings={settings}
            departments={departments}
          />

          <ContactForm
            form={form}
            setForm={setForm}
            status={status}
            errors={errors}
            submit={submit}
            venues={venues}
          />
        </div>
      </section>

      <ContactMapSection
        address={settings.address}
      />
    </>
  );
}