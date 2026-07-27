import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute("/dokumenti/financijska-izvjesca")({
  head: () => ({
    meta: [
      { title: "Financijska izvješća — Športski objekti Osijek" },
      { name: "description", content: "Godišnja financijska izvješća i bilance Društva." },
      { property: "og:url", content: "/dokumenti/financijska-izvjesca" },
    ],
    links: [{ rel: "canonical", href: "/dokumenti/financijska-izvjesca" }],
  }),
  component: () => <DocCategoryPage slug="financijska-izvjesca" />,
});
