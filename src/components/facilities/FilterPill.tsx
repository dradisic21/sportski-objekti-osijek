import type { ReactNode } from "react";

interface FilterPillProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function FilterPill({
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