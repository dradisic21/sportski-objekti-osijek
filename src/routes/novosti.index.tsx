import { useMemo, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";

import { PageHero } from "@/components/ui-custom/PageHero";
import {
  listPublicNews,
  type PublicNewsPost,
} from "@/lib/repositories/publicNewsRepository";

export const Route = createFileRoute("/novosti/")({
  loader: async () => {
    try {
      const news = await listPublicNews();

      return {
        news,
        loadError: null,
      };
    } catch (error) {
      console.error(
        "Učitavanje novosti s javnog frontenda nije uspjelo:",
        error
      );

      return {
        news: [] as PublicNewsPost[],
        loadError:
          error instanceof Error
            ? error.message
            : "Učitavanje novosti nije uspjelo.",
      };
    }
  },

  head: () => ({
    meta: [
      {
        title: "Novosti — Športski objekti Osijek",
      },
      {
        name: "description",
        content:
          "Najave, obavijesti, projekti i događanja iz sportskih objekata Grada Osijeka.",
      },
      {
        property: "og:title",
        content: "Novosti — Športski objekti Osijek",
      },
      {
        property: "og:url",
        content: "/novosti",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/novosti",
      },
    ],
  }),

  component: NewsIndex,
});

const PAGE_SIZE = 6;

function NewsIndex() {
  const { news: allNews, loadError } = Route.useLoaderData();

  const [category, setCategory] = useState("all");

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    return Array.from(
      new Set(
        allNews.map((newsPost) => newsPost.category.trim()).filter(Boolean)
      )
    ).sort((firstCategory, secondCategory) =>
      firstCategory.localeCompare(secondCategory, "hr")
    );
  }, [allNews]);

  const filteredNews = useMemo(() => {
    return allNews.filter(
      (newsPost) => category === "all" || newsPost.category === category
    );
  }, [allNews, category]);

  const visibleNews = filteredNews.slice(0, visibleCount);

  const hasMore = visibleCount < filteredNews.length;

  const handleCategoryChange = (nextCategory: string) => {
    setCategory(nextCategory);
    setVisibleCount(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((currentCount) => currentCount + PAGE_SIZE);
  };

  return (
    <>
      <PageHero
        eyebrow="Novosti"
        title="Aktualno iz naših objekata."
        intro="Najave sezone, obavijesti o cjenicima, projekti obnove i događanja iz sportskih objekata Grada Osijeka."
      />

      {categories.length > 0 && (
        <section className="sticky top-16 z-30 border-y border-line bg-background/85 backdrop-blur-xl md:top-20">
          <div className="container-editorial flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterPill
                active={category === "all"}
                onClick={() => handleCategoryChange("all")}
              >
                Sve
              </FilterPill>

              {categories.map((categoryName) => (
                <FilterPill
                  key={categoryName}
                  active={category === categoryName}
                  onClick={() => handleCategoryChange(categoryName)}
                >
                  {categoryName}
                </FilterPill>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                {filteredNews.length} {getRecordLabel(filteredNews.length)}
              </span>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container-editorial">
          {loadError ? (
            <NewsErrorState />
          ) : visibleNews.length === 0 ? (
            <NewsEmptyState hasCategoryFilter={category !== "all"} />
          ) : (
            <ul className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {visibleNews.map((newsPost) => (
                <NewsCard key={newsPost.id} newsPost={newsPost} />
              ))}
            </ul>
          )}

          {hasMore && (
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="rounded-full border border-line px-8 py-3 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
              >
                Učitaj više
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function NewsCard({ newsPost }: { newsPost: PublicNewsPost }) {
  return (
    <li>
      <Link
        to="/novosti/$slug"
        params={{
          slug: newsPost.slug,
        }}
        className="group block"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[oklch(0.55_0.12_240)] via-[oklch(0.35_0.08_240)] to-[oklch(0.2_0.04_240)]">
          {newsPost.featuredImageUrl ? (
            <img
              src={newsPost.featuredImageUrl}
              alt={newsPost.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full" />
          )}

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

          {newsPost.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-ink backdrop-blur-md">
              Istaknuto
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Calendar size={11} strokeWidth={1.5} />

            {formatPublishedDate(newsPost.publishedAt)}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock size={11} strokeWidth={1.5} />
            {newsPost.readingMinutes} min
          </span>

          <span>{newsPost.category}</span>
        </div>

        <h2 className="text-display mt-3 text-2xl text-ink transition-colors duration-300 group-hover:text-accent">
          {newsPost.title}
        </h2>

        {newsPost.excerpt && (
          <p className="mt-2 text-sm leading-6 text-ink-soft">
            {newsPost.excerpt}
          </p>
        )}
      </Link>
    </li>
  );
}

function NewsEmptyState({ hasCategoryFilter }: { hasCategoryFilter: boolean }) {
  return (
    <div className="border-y border-line py-24 text-center">
      <p className="text-display text-3xl text-ink">
        {hasCategoryFilter
          ? "Nema novosti u ovoj kategoriji."
          : "Trenutno nema objavljenih novosti."}
      </p>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink-muted">
        {hasCategoryFilter
          ? "Odaberite drugu kategoriju kako biste pregledali dostupne novosti."
          : "Nove obavijesti, najave, događaji i projekti bit će objavljeni ovdje."}
      </p>
    </div>
  );
}

function NewsErrorState() {
  return (
    <div className="border-y border-line py-24 text-center">
      <p className="text-display text-3xl text-ink">
        Novosti trenutačno nisu dostupne.
      </p>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink-muted">
        Pokušajte ponovno učitati stranicu.
      </p>
    </div>
  );
}

function formatPublishedDate(value: string): string {
  return new Intl.DateTimeFormat("hr-HR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

function getRecordLabel(count: number): string {
  if (count === 1) {
    return "zapis";
  }

  if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 12 || count % 100 > 14)
  ) {
    return "zapisa";
  }

  return "zapisa";
}

interface FilterPillProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

function FilterPill({ active, onClick, children }: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs transition-colors ${
        active
          ? "border-ink bg-ink text-background"
          : "border-line text-ink-soft hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
