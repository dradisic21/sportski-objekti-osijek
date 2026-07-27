import { useMemo, useState } from "react";

export type SortDir = "asc" | "desc";

export interface CollectionFilterOptions<T> {
  data: T[];
  searchFields: (item: T) => string;
  categoryOf?: (item: T) => string | undefined;
  sortAccessor?: (item: T) => string | number;
  sortDir?: SortDir;
  pageSize?: number;
}

export function useCollectionFilter<T>({
  data,
  searchFields,
  categoryOf,
  sortAccessor,
  sortDir = "desc",
  pageSize = 6,
}: CollectionFilterOptions<T>) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [dir, setDir] = useState<SortDir>(sortDir);
  const [visible, setVisible] = useState(pageSize);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = data
      .filter((item) => (category === "all" || !categoryOf ? true : categoryOf(item) === category))
      .filter((item) => (q ? searchFields(item).toLowerCase().includes(q) : true));

    if (!sortAccessor) return base;
    return [...base].sort((a, b) => {
      const av = sortAccessor(a);
      const bv = sortAccessor(b);
      if (av < bv) return dir === "asc" ? -1 : 1;
      if (av > bv) return dir === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, query, category, categoryOf, searchFields, sortAccessor, dir]);

  const paged = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return {
    query,
    setQuery: (v: string) => {
      setQuery(v);
      setVisible(pageSize);
    },
    category,
    setCategory: (v: string) => {
      setCategory(v);
      setVisible(pageSize);
    },
    dir,
    setDir,
    filtered,
    paged,
    hasMore,
    loadMore: () => setVisible((v) => v + pageSize),
    total: filtered.length,
    reset: () => {
      setQuery("");
      setCategory("all");
      setVisible(pageSize);
    },
  };
}
