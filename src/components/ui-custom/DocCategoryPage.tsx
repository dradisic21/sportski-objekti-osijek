import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-custom/PageHero";
import { DocumentList } from "@/components/ui-custom/DocumentList";
import { DocumentRepo } from "@/lib/repositories";

export function DocCategoryPage({ slug, extras }: { slug: string; extras?: string[] }) {
  const cat = DocumentRepo.category(slug);
  const docs = DocumentRepo.byCategory(slug);

  if (!cat) {
    return (
      <div className="container-editorial py-40 text-center">
        <p className="text-eyebrow text-ink-muted">404</p>
        <h1 className="text-display mt-6 text-6xl text-ink">Kategorija nije pronađena.</h1>
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
        <Link to="/dokumenti" className="inline-flex items-center gap-2 border-b border-line pb-1 text-sm text-ink hover:border-accent hover:text-accent">
          ← Sve kategorije
        </Link>
      </PageHero>

      {extras && (
        <section className="border-y border-line bg-surface py-16">
          <div className="container-editorial">
            <p className="text-eyebrow text-ink-muted">Sadrži</p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
              {extras.map((e) => (
                <li key={e} className="border-b border-line py-3 text-sm text-ink-soft">· {e}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container-editorial">
          <DocumentList documents={docs} showCategory={false} />
        </div>
      </section>
    </>
  );
}
