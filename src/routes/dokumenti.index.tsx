import {
  createFileRoute,
  Link,
} from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { DocumentList } from "@/components/ui-custom/DocumentList";
import { PageHero } from "@/components/ui-custom/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import {
  listPublicDocumentCategories,
  listPublicDocuments,
} from "@/lib/repositories/publicDocumentsRepository";

export const Route = createFileRoute(
  "/dokumenti/",
)({
  loader: async () => {
    const [categories, documents] =
      await Promise.all([
        listPublicDocumentCategories(),
        listPublicDocuments(),
      ]);

    return {
      categories,
      documents,
    };
  },

  head: () => ({
    meta: [
      {
        title:
          "Dokumenti — Športski objekti Osijek",
      },
      {
        name: "description",
        content:
          "Javno dostupna dokumentacija: javna nabava, natječaji, pravilnici, cjenici i financijska izvješća.",
      },
      {
        property: "og:title",
        content:
          "Dokumenti — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/dokumenti",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/dokumenti",
      },
    ],
  }),

  component: DocsIndex,
});

function DocsIndex() {
  const {
    categories,
    documents,
  } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow="Transparentnost"
        title="Dokumenti i izvješća."
        intro="Javno dostupni akti, planovi, natječaji i izvješća. Pregledajte dokumentaciju prema kategoriji ili pretražite cijeli arhiv."
      />

      <section className="border-y border-line bg-surface py-16">
        <div className="container-editorial">
          <p className="text-eyebrow text-ink-muted">
            Kategorije
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.id}>
                <Reveal>
                  <Link
                    to={
                      `/dokumenti/${category.slug}` as never
                    }
                    className="group flex items-center justify-between border-b border-line py-6"
                  >
                    <div>
                      <p className="text-display text-2xl text-ink group-hover:text-accent">
                        {category.name}
                      </p>

                      {category.description && (
                        <p className="mt-1 text-sm text-ink-muted">
                          {
                            category.description
                          }
                        </p>
                      )}
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="text-ink-muted transition-all group-hover:rotate-45 group-hover:text-accent"
                    />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="container-editorial">
          <p className="text-eyebrow text-ink-muted">
            Cijeli arhiv
          </p>

          <h2 className="text-display mt-4 text-4xl text-ink md:text-5xl">
            Svi dokumenti
          </h2>

          <div className="mt-10">
            {documents.length > 0 ? (
              <DocumentList
                documents={documents}
              />
            ) : (
              <div className="rounded border border-line bg-surface px-6 py-10">
                <p className="text-sm text-ink-muted">
                  Trenutno nema objavljenih
                  dokumenata.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}