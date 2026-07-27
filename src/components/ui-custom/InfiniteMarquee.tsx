export function InfiniteMarquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line py-8">
      <div className="marquee-track flex min-w-max items-center gap-16 whitespace-nowrap">
        {doubled.map((it, i) => (
          <span
          key={i}
          className="inline-flex items-center gap-10 text-display text-[clamp(2.5rem,6vw,5rem)] uppercase text-ink"
        >
          <span>{it}</span>
        
          <span className="h-4 w-4 shrink-0 rounded-full bg-accent" />
        </span>
        ))}
      </div>
    </div>
  );
}
