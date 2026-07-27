import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute(
  "/dokumenti/sponzorstva-i-donacije"
)({
  head: () => ({
    meta: [
      {
        title: "Sponzorstva i donacije — Športski objekti Osijek",
      },
      {
        name: "description",
        content: "Dokumentacija o sponzorstvima i donacijama.",
      },
      {
        property: "og:title",
        content: "Sponzorstva i donacije — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/dokumenti/sponzorstva-i-donacije",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/dokumenti/sponzorstva-i-donacije",
      },
    ],
  }),

  component: () => (
    <DocCategoryPage slug="sponzorstva-i-donacije" />
  ),
});