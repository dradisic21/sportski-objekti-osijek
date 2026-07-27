import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute("/dokumenti/pravilnici")({
  head: () => ({
    meta: [
      { title: "Pravilnici — Športski objekti Osijek" },
      { name: "description", content: "Interni pravilnici, akti i odluke Društva." },
      { property: "og:url", content: "/dokumenti/pravilnici" },
    ],
    links: [{ rel: "canonical", href: "/dokumenti/pravilnici" }],
  }),
  component: () => <DocCategoryPage slug="pravilnici" />,
});
