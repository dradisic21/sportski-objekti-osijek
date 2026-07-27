import { createFileRoute } from "@tanstack/react-router";
import { DocCategoryPage } from "@/components/ui-custom/DocCategoryPage";

export const Route = createFileRoute(
  "/dokumenti/godisnja-financijska-izvjesca"
)({
  head: () => ({
    meta: [
      {
        title: "Godišnja financijska izvješća — Športski objekti Osijek",
      },
      {
        name: "description",
        content: "Godišnja financijska izvješća Društva.",
      },
      {
        property: "og:title",
        content: "Godišnja financijska izvješća — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/dokumenti/godisnja-financijska-izvjesca",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/dokumenti/godisnja-financijska-izvjesca",
      },
    ],
  }),

  component: () => <DocCategoryPage slug="godisnja-financijska-izvjesca" />,
});
