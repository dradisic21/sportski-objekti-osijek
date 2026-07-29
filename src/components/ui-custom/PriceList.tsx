import type { PriceItem } from "@/lib/types";

const fmt = (n: number) =>
  new Intl.NumberFormat("hr-HR", { style: "currency", currency: "EUR" }).format(
    n
  );

export function PriceList({ items }: { items: PriceItem[] }) {
  const active = items.filter((i) => i.active);
  return (
    <ul className="divide-y divide-line border-y border-line">
      {active.map((p) => (
        <li
          key={p.id}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 py-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)_auto]"
        >
          <div className="min-w-0">
            <p className="font-medium text-ink">{p.name}</p>
            {p.description && (
              <p className="mt-1 text-sm text-ink-muted">{p.description}</p>
            )}
            {p.category && (
              <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                {p.category}
              </span>
            )}
          </div>
          <div className="hidden text-sm text-ink-muted md:block">
            {p.note ?? "—"}
          </div>
          <div className="text-right">
            <div className="text-display text-2xl text-ink">
              {p.price === 0 ? "Besplatno" : `${fmt(p.price)} + PDV`}
            </div>

            {p.price > 0 && p.unit && p.unit.trim().length > 0 && (
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                / {p.unit}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
