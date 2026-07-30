import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import { PageHero } from "@/components/ui-custom/PageHero";
import { DocumentList } from "@/components/ui-custom/DocumentList";
import {
  getPublicDocumentCategoryBySlug,
  listPublicDocumentsByCategorySlug,
} from "@/lib/repositories/publicDocumentsRepository";
import type {
  DocumentCategory,
  DocumentItem,
} from "@/lib/types";

interface DocCategoryPageProps {
  slug: string;
  extras?: string[];
}

export function DocCategoryPage({
  slug,
  extras,
}: DocCategoryPageProps) {
  const [cat, setCat] =
    useState<DocumentCategory | null>(null);

  const [docs, setDocs] = useState<
    DocumentItem[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<
    string | null
  >(null);

  useEffect(() => {
    let active = true;

    async function loadData() {
      setLoading(true);
      setError(null);

      try {
        const [category, documents] =
          await Promise.all([
            getPublicDocumentCategoryBySlug(
              slug,
            ),
            listPublicDocumentsByCategorySlug(
              slug,
            ),
          ]);

        if (!active) {
          return;
        }

        setCat(category);
        setDocs(documents);
      } catch (loadError) {
        if (!active) {
          return;
        }

        setCat(null);
        setDocs([]);

        setError(
          loadError instanceof Error
            ? loadError.message
            : "Učitavanje dokumenata nije uspjelo.",
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadData();

    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="container-editorial py-40 text-center">
        <p className="text-sm text-ink-muted">
          Učitavanje dokumenata...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-editorial py-40 text-center">
        <p className="text-eyebrow text-destructive">
          Pogreška
        </p>

        <h1 className="text-display mt-6 text-4xl text-ink">
          Dokumenti se trenutno ne mogu učitati.
        </h1>

        <p className="mt-4 text-sm text-ink-muted">
          {error}
        </p>
      </div>
    );
  }

  if (!cat) {
    return (
      <div className="container-editorial py-40 text-center">
        <p className="text-eyebrow text-ink-muted">
          404
        </p>

        <h1 className="text-display mt-6 text-6xl text-ink">
          Kategorija nije pronađena.
        </h1>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Dokumenti"
        title={cat.name}
        intro={cat.description}
      >
        <Link
          to="/dokumenti"
          className="inline-flex items-center gap-2 border-b border-line pb-1 text-sm text-ink hover:border-accent hover:text-accent"
        >
          ← Sve kategorije
        </Link>
      </PageHero>

      {extras && extras.length > 0 && (
        <section className="border-y border-line bg-surface py-16">
          <div className="container-editorial">
            <p className="text-eyebrow text-ink-muted">
              Sadrži
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
              {extras.map((extra) => (
                <li
                  key={extra}
                  className="border-b border-line py-3 text-sm text-ink-soft"
                >
                  · {extra}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container-editorial">
          <DocumentList
            documents={docs}
            showCategory={false}
          />
        </div>
      </section>
    </>
  );
}