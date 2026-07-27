import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute("/dokumenti/skupstina")({
  head: () => ({
    meta: [
      {
        title: "Skupština — Športski objekti Osijek",
      },
      {
        name: "description",
        content: "Zapisnici i odluke Skupštine Društva.",
      },
      {
        property: "og:title",
        content: "Skupština — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/dokumenti/skupstina",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/dokumenti/skupstina",
      },
    ],
  }),

  component: () => (
    <DocCategoryPage
      slug="skupstina"
      extras={["Zapisnici", "Odluke"]}
    />
  ),
});