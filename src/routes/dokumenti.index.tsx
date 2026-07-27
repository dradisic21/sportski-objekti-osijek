import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui-custom/PageHero";
import { DocumentList } from "@/components/ui-custom/DocumentList";
import { DocumentRepo } from "@/lib/repositories";
import { Reveal } from "@/components/ui-custom/Reveal";

export const Route = createFileRoute("/dokumenti/")({
  head: () => ({
    meta: [
      { title: "Dokumenti — Športski objekti Osijek" },
      { name: "description", content: "Javno dostupna dokumentacija: javna nabava, natječaji, pravilnici, cjenici i financijska izvješća." },
      { property: "og:title", content: "Dokumenti — Športski objekti Osijek" },
      { property: "og:url", content: "/dokumenti" },
    ],
    links: [{ rel: "canonical", href: "/dokumenti" }],
  }),
  component: DocsIndex,
});

function DocsIndex() {
  const cats = DocumentRepo.categories();
  const all = DocumentRepo.all();

  return (
    <>
      <PageHero
        eyebrow="Transparentnost"
        title="Sva dokumentacija na jednom mjestu."
        intro="Javno dostupni akti, planovi, natječaji i izvješća. Pregledajte po kategoriji ili pretražite cijeli arhiv."
      />

      {/* Category grid */}
      <section className="border-y border-line bg-surface py-16">
        <div className="container-editorial">
          <p className="text-eyebrow text-ink-muted">Kategorije</p>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {cats.map((c) => (
              <li key={c.id}>
                <Reveal>
                  <Link
                    to={"/dokumenti/" + c.slug as never}
                    className="group flex items-center justify-between border-b border-line py-6"
                  >
                    <div>
                      <p className="text-display text-2xl text-ink group-hover:text-accent">{c.name}</p>
                      {c.description && <p className="mt-1 text-sm text-ink-muted">{c.description}</p>}
                    </div>
                    <ArrowUpRight size={18} strokeWidth={1.5} className="text-ink-muted transition-all group-hover:rotate-45 group-hover:text-accent" />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* All documents */}
      <section className="py-24">
        <div className="container-editorial">
          <p className="text-eyebrow text-ink-muted">Cijeli arhiv</p>
          <h2 className="text-display mt-4 text-4xl text-ink md:text-5xl">Svi dokumenti</h2>
          <div className="mt-10">
            <DocumentList documents={all} />
          </div>
        </div>
      </section>
    </>
  );
}
