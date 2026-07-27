import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute("/dokumenti/nadzorni-odbor")({
  head: () => ({
    meta: [
      {
        title: "Nadzorni odbor — Športski objekti Osijek",
      },
      {
        name: "description",
        content: "Zapisnici i odluke Nadzornog odbora.",
      },
      {
        property: "og:title",
        content: "Nadzorni odbor — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/dokumenti/nadzorni-odbor",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/dokumenti/nadzorni-odbor",
      },
    ],
  }),

  component: () => (
    <DocCategoryPage
      slug="nadzorni-odbor"
      extras={["Zapisnici", "Odluke"]}
    />
  ),
});