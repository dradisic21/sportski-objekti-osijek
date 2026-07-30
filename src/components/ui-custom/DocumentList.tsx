import { useMemo, useState } from "react";
import {
  Download,
  FileText,
  Search,
} from "lucide-react";

import type { DocumentItem } from "@/lib/types";

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
    return [...documents]
      .filter((document) =>
        year === "all"
          ? true
          : document.year === Number(year),
      )
      .filter((document) =>
        q
          ? document.title
              .toLowerCase()
              .includes(q.toLowerCase())
          : true,
      )
      .sort((a, b) =>
        a.publishedAt < b.publishedAt ? 1 : -1,
      );
  }, [documents, q, year]);

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
        {filtered.map((document) => (
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
                  ).toLocaleDateString("hr-HR")}
                </span>

                {showCategory &&
                  document.categoryName && (
                    <span>
                      {document.categoryName}
                    </span>
                  )}

                {document.size && (
                  <span>{document.size}</span>
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
        ))}

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
    </div>
  );
}