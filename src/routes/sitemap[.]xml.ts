import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { VenueRepo, DocumentRepo, NewsRepo } from "@/lib/repositories";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: string;
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/o-nama", changefreq: "monthly", priority: "0.8" },
          { path: "/objekti", changefreq: "weekly", priority: "0.9" },
          { path: "/dokumenti", changefreq: "weekly", priority: "0.8" },
          { path: "/kontakt", changefreq: "yearly", priority: "0.7" },
          { path: "/novosti", changefreq: "weekly", priority: "0.8" },
          ...VenueRepo.all().map((v) => ({ path: `/objekti/${v.slug}`, changefreq: "monthly", priority: "0.7" })),
          ...DocumentRepo.categories().map((c) => ({ path: `/dokumenti/${c.slug}`, changefreq: "weekly", priority: "0.6" })),
          ...NewsRepo.all().map((n) => ({ path: `/novosti/${n.slug}`, changefreq: "monthly", priority: "0.6" })),
        ];

        const urls = entries
          .map((e) =>
            [
              "  <url>",
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              "  </url>",
            ].filter(Boolean).join("\n")
          )
          .join("\n");

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
