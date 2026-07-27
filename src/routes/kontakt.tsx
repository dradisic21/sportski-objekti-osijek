import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/components/contact/ContactPage";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      {
        title: "Kontakt — Športski objekti Osijek",
      },
      {
        name: "description",
        content:
          "Kontaktirajte upravu, rezervacije, javnu nabavu ili tehničku službu Društva.",
      },
      {
        property: "og:title",
        content: "Kontakt — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/kontakt",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/kontakt",
      },
    ],
  }),
  component: ContactPage,
});