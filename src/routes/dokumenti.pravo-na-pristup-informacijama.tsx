import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute(
  "/dokumenti/pravo-na-pristup-informacijama"
)({
  head: () => ({
    meta: [
      {
        title:
          "Pravo na pristup informacijama — Športski objekti Osijek",
      },
      {
        name: "description",
        content:
          "Dokumenti, obrasci i kontakt službenika za informiranje.",
      },
      {
        property: "og:title",
        content:
          "Pravo na pristup informacijama — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/dokumenti/pravo-na-pristup-informacijama",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/dokumenti/pravo-na-pristup-informacijama",
      },
    ],
  }),

  component: () => (
    <DocCategoryPage
      slug="pravo-na-pristup-informacijama"
      extras={["Kontakt službenika za informiranje"]}
    />
  ),
});