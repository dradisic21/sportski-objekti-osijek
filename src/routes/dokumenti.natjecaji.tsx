import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute("/dokumenti/natjecaji")({
  head: () => ({
    meta: [
      { title: "Natječaji — Športski objekti Osijek" },
      { name: "description", content: "Otvoreni i zatvoreni natječaji Društva." },
      { property: "og:url", content: "/dokumenti/natjecaji" },
    ],
    links: [{ rel: "canonical", href: "/dokumenti/natjecaji" }],
  }),
  component: () => <DocCategoryPage slug="natjecaji" />,
});
