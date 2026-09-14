import { useEffect, useMemo, useState } from "react";

import { DocumentList } from "@/components/ui-custom/DocumentList";
import { PageHero } from "@/components/ui-custom/PageHero";

import {
  getPublicDocumentCategoryBySlug,
  listPublicDocumentsByCategorySlug,
  listPublicDocumentSubcategoriesByCategoryId,
} from "@/lib/repositories/publicDocumentsRepository";

import type {
  DocumentCategory,
  DocumentItem,
  DocumentSubcategory,
} from "@/lib/types";

interface DocCategoryPageProps {
  slug: string;
  extras?: string[];
}

export function DocCategoryPage({ slug, extras = [] }: DocCategoryPageProps) {
  const [category, setCategory] = useState<DocumentCategory | null>(null);

  const [documents, setDocuments] = useState<DocumentItem[]>([]);

  const [subcategories, setSubcategories] = useState<DocumentSubcategory[]>([]);

  const [selectedSubcategory, setSelectedSubcategory] = useState("all");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const categoryData = await getPublicDocumentCategoryBySlug(slug);

        if (!categoryData) {
          setCategory(null);
          setDocuments([]);
          setSubcategories([]);
          return;
        }

        const [documentData, subcategoryData] = await Promise.all([
          listPublicDocumentsByCategorySlug(slug),

          listPublicDocumentSubcategoriesByCategoryId(categoryData.id),
        ]);

        setCategory(categoryData);
        setDocuments(documentData);
        setSubcategories(subcategoryData);
        setSelectedSubcategory("all");
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [slug]);

  const filteredDocuments = useMemo(() => {
    if (selectedSubcategory === "all") {
      return documents;
    }

    return documents.filter(
      (document) => document.subcategoryId === selectedSubcategory
    );
  }, [documents, selectedSubcategory]);

  if (loading) {
    return (
      <>
        <PageHero
          eyebrow="Dokumenti"
          title="Dokumenti"
          intro="Učitavanje dokumentacije..."
        />

        <section className="py-24">
          <div className="container-editorial">
            <p className="text-sm text-ink-muted">Učitavanje...</p>
          </div>
        </section>
      </>
    );
  }

  if (!category) {
    return (
      <>
        <PageHero
          eyebrow="Dokumenti"
          title="Dokumenti"
          intro="Tražena kategorija nije pronađena."
        />

        <section className="py-24">
          <div className="container-editorial">
            <p className="text-sm text-ink-muted">Kategorija nije pronađena.</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Dokumenti"
        title={category.name}
        intro={category.description ?? "Pregled javno dostupne dokumentacije."}
      />

      <section className="py-24">
        <div className="container-editorial">
          {subcategories.length > 0 && (
            <div className="mb-12 border-y border-line py-5">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory("all")}
                  className={`cursor-pointer text-sm transition-colors ${
                    selectedSubcategory === "all"
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  Svi
                </button>

                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    type="button"
                    onClick={() => setSelectedSubcategory(subcategory.id)}
                    className={`cursor-pointer text-sm transition-colors ${
                      selectedSubcategory === subcategory.id
                        ? "text-ink"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredDocuments.length > 0 ? (
            <DocumentList documents={filteredDocuments} showCategory={false} />
          ) : (
            <div className="border-y border-line py-12">
              <p className="text-sm text-ink-muted">
                Trenutno nema objavljenih dokumenata u odabranom odjeljku.
              </p>
            </div>
          )}

          {extras.length > 0 && subcategories.length === 0 && (
            <div className="mt-12">
              {extras.map((extra) => (
                <div
                  key={extra}
                  className="border-b border-line py-4 text-sm text-ink"
                >
                  {extra}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
