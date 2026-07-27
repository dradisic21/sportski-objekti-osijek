import { createFileRoute } from "@tanstack/react-router";

import { FacilitiesPage } from "@/components/facilities/FacilitiesPage";

export const Route = createFileRoute("/objekti/")({
  head: () => ({
    meta: [
      {
        title: "Svi objekti — Športski objekti Osijek",
      },
      {
        name: "description",
        content:
          "Sportske dvorane, bazeni, tereni i rekreacijski centri kojima upravlja Grad Osijek.",
      },
      {
        property: "og:title",
        content: "Sportski objekti Osijeka",
      },
      {
        property: "og:url",
        content: "/objekti",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/objekti",
      },
    ],
  }),
  component: FacilitiesIndexPage,
});

function FacilitiesIndexPage() {
  return <FacilitiesPage />;
}