import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute("/dokumenti/cjenici")({
  head: () => ({
    meta: [
      { title: "Cjenici — Športski objekti Osijek" },
      { name: "description", content: "Aktualni cjenici korištenja sportskih objekata." },
      { property: "og:url", content: "/dokumenti/cjenici" },
    ],
    links: [{ rel: "canonical", href: "/dokumenti/cjenici" }],
  }),
  component: () => <DocCategoryPage slug="cjenici" />,
});
