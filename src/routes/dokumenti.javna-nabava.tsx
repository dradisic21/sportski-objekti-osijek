import { createFileRoute } from "@tanstack/react-router";

import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute(
  "/dokumenti/javna-nabava",
)({
  head: () => ({
    meta: [
      {
        title:
          "Javna nabava — Športski objekti Osijek",
      },
      {
        name: "description",
        content:
          "Planovi nabave, registar ugovora i pravilnik o jednostavnoj nabavi.",
      },
      {
        property: "og:title",
        content:
          "Javna nabava — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content:
          "/dokumenti/javna-nabava",
      },
    ],
    links: [
      {
        rel: "canonical",
        href:
          "/dokumenti/javna-nabava",
      },
    ],
  }),

  component: () => (
    <DocCategoryPage slug="javna-nabava" />
  ),
});