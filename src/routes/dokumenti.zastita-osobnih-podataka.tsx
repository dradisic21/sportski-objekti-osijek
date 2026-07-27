import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute(
  "/dokumenti/zastita-osobnih-podataka"
)({
  head: () => ({
    meta: [
      {
        title: "Zaštita osobnih podataka — Športski objekti Osijek",
      },
      {
        name: "description",
        content:
          "Dokumenti i informacije povezani sa zaštitom osobnih podataka.",
      },
      {
        property: "og:title",
        content: "Zaštita osobnih podataka — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/dokumenti/zastita-osobnih-podataka",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/dokumenti/zastita-osobnih-podataka",
      },
    ],
  }),

  component: () => (
    <DocCategoryPage slug="zastita-osobnih-podataka" />
  ),
});