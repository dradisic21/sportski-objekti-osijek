import { useEffect, useMemo, useState } from "react";
import {
  Download,
  FileText,
  Search,
} from "lucide-react";

import type { DocumentItem } from "@/lib/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const DOCUMENTS_PER_PAGE = 20;

function getPaginationItems(
  currentPage: number,
  totalPages: number,
): Array<number | "ellipsis-start" | "ellipsis-end"> {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );
  }

  if (currentPage <= 4) {
    return [
      1,
      2,
      3,
      4,
      5,
      "ellipsis-end",
      totalPages,
    ];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "ellipsis-start",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "ellipsis-start",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-end",
    totalPages,
  ];
}

export function DocumentList({
  documents,
  showCategory = true,
}: {
  documents: DocumentItem[];
  showCategory?: boolean;
}) {
  const [q, setQ] = useState("");
  const [year, setYear] =
    useState<string>("all");
  const [currentPage, setCurrentPage] =
    useState(1);

  const years = useMemo(
    () =>
      Array.from(
        new Set(
          documents.map(
            (document) => document.year,
          ),
        ),
      ).sort((a, b) => b - a),
    [documents],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = q
      .trim()
      .toLowerCase();

    return [...documents]
      .filter((document) =>
        year === "all"
          ? true
          : document.year === Number(year),
      )
      .filter((document) =>
        normalizedQuery
          ? document.title
              .toLowerCase()
              .includes(normalizedQuery)
          : true,
      )
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime(),
      );
  }, [documents, q, year]);

  const totalPages = Math.ceil(
    filtered.length / DOCUMENTS_PER_PAGE,
  );

  const paginatedDocuments = useMemo(() => {
    const startIndex =
      (currentPage - 1) *
      DOCUMENTS_PER_PAGE;

    return filtered.slice(
      startIndex,
      startIndex + DOCUMENTS_PER_PAGE,
    );
  }, [filtered, currentPage]);

  const paginationItems = useMemo(
    () =>
      getPaginationItems(
        currentPage,
        totalPages,
      ),
    [currentPage, totalPages],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [q, year]);

  useEffect(() => {
    if (
      totalPages > 0 &&
      currentPage > totalPages
    ) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const changePage = (page: number) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: window.scrollY,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-line py-6 md:flex-row md:items-center md:justify-between">
        <div className="relative flex items-center gap-3">
          <Search
            size={16}
            strokeWidth={1.5}
            className="text-ink-muted"
          />

          <input
            aria-label="Pretraži dokumente"
            value={q}
            onChange={(event) =>
              setQ(event.target.value)
            }
            placeholder="Pretraži dokumente…"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none md:w-80"
          />
        </div>

        <div className="flex items-center gap-2">
          <label
            className="text-eyebrow text-ink-muted"
            htmlFor="year"
          >
            Godina
          </label>

          <select
            id="year"
            value={year}
            onChange={(event) =>
              setYear(event.target.value)
            }
            className="rounded border border-line bg-transparent px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="all">Sve</option>

            {years.map((yearOption) => (
              <option
                key={yearOption}
                value={yearOption}
              >
                {yearOption}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className="divide-y divide-line">
        {paginatedDocuments.map(
          (document) => (
            <li
              key={document.id}
              className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 py-6"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center border border-line font-mono text-[10px] text-ink-muted">
                {document.fileType}
              </div>

              <div className="min-w-0">
                <p className="text-base text-ink">
                  {document.title}
                </p>

                <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  <span>
                    {new Date(
                      document.publishedAt,
                    ).toLocaleDateString(
                      "hr-HR",
                    )}
                  </span>

                  {showCategory &&
                    document.categoryName && (
                      <span>
                        {
                          document.categoryName
                        }
                      </span>
                    )}

                  {document.size && (
                    <span>
                      {document.size}
                    </span>
                  )}
                </p>
              </div>

              <a
                href={document.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-ink hover:text-accent"
                aria-label={`Otvori ${document.title}`}
              >
                <span className="hidden md:inline">
                  Otvori
                </span>

                <Download
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </li>
          ),
        )}

        {filtered.length === 0 && (
          <li className="flex flex-col items-center gap-3 py-16 text-center text-ink-muted">
            <FileText
              size={20}
              strokeWidth={1.5}
            />

            <p className="text-sm">
              Nema dokumenata za odabrane
              filtere.
            </p>
          </li>
        )}
      </ul>

      {totalPages > 1 && (
        <Pagination className="mt-10 border-t border-line pt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                aria-disabled={
                  currentPage === 1
                }
                onClick={(event) => {
                  event.preventDefault();

                  changePage(
                    currentPage - 1,
                  );
                }}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-40"
                    : undefined
                }
              />
            </PaginationItem>

            {paginationItems.map(
              (item) => {
                if (
                  item ===
                    "ellipsis-start" ||
                  item ===
                    "ellipsis-end"
                ) {
                  return (
                    <PaginationItem
                      key={item}
                    >
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                return (
                  <PaginationItem
                    key={item}
                  >
                    <PaginationLink
                      href="#"
                      isActive={
                        currentPage === item
                      }
                      aria-label={`Idi na stranicu ${item}`}
                      onClick={(event) => {
                        event.preventDefault();

                        changePage(item);
                      }}
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                );
              },
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                aria-disabled={
                  currentPage === totalPages
                }
                onClick={(event) => {
                  event.preventDefault();

                  changePage(
                    currentPage + 1,
                  );
                }}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-40"
                    : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}