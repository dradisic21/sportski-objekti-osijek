import { useMemo, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";

import { PageHero } from "@/components/ui-custom/PageHero";
import { NewsRepo } from "@/lib/repositories";

export const Route = createFileRoute("/novosti/")({
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
  const allNews = useMemo(() => NewsRepo.all(), []);
  const categories = useMemo(() => NewsRepo.categories(), []);


  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredNews = useMemo(() => {
    return [...allNews]
      .filter(
        (newsPost) =>
          category === "all" ||
          newsPost.category === category,
      )
      .sort(
        (firstPost, secondPost) =>
          new Date(secondPost.publishedAt).getTime() -
          new Date(firstPost.publishedAt).getTime(),
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
        intro="Najave sezone, obavijesti o cjenicima, projekti obnove i događanja. Ovaj arhiv priprema se za buduću sinkronizaciju s aplikacijom Grada Osijeka."
      />

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
                onClick={() =>
                  handleCategoryChange(categoryName)
                }
              >
                {categoryName}
              </FilterPill>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
              {filteredNews.length} zapisa
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-editorial">
          {visibleNews.length === 0 ? (
            <div className="border-y border-line py-24 text-center">
              <p className="text-display text-3xl text-ink">
                Nema rezultata.
              </p>

              <p className="mt-3 text-sm text-ink-muted">
                Pokušajte odabrati drugu kategoriju ili unijeti drugi pojam.
              </p>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {visibleNews.map((newsPost) => (
                <li key={newsPost.id}>
                  <Link
                    to="/novosti/$slug"
                    params={{
                      slug: newsPost.slug,
                    }}
                    className="group block"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[oklch(0.55_0.12_240)] via-[oklch(0.35_0.08_240)] to-[oklch(0.2_0.04_240)]">
                      <div className="h-full w-full transition-colors duration-300 group-hover:bg-black/10" />
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar
                          size={11}
                          strokeWidth={1.5}
                        />

                        {new Date(
                          newsPost.publishedAt,
                        ).toLocaleDateString("hr-HR")}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Clock
                          size={11}
                          strokeWidth={1.5}
                        />

                        {newsPost.readingMinutes ?? 3} min
                      </span>

                      <span>{newsPost.category}</span>
                    </div>

                    <h2 className="text-display mt-3 text-2xl text-ink transition-colors duration-300 group-hover:text-accent">
                      {newsPost.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {newsPost.excerpt}
                    </p>
                  </Link>
                </li>
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

interface FilterPillProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

function FilterPill({
  active,
  onClick,
  children,
}: FilterPillProps) {
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