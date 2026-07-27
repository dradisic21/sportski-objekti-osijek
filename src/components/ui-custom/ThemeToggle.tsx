import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "so-theme";

function applyTheme(theme: "light" | "dark") {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle({ inverted = false }: { inverted?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as
      | "light"
      | "dark"
      | null;
    const initial = stored ?? "light";
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      aria-label={isDark ? "Uključi svijetlu temu" : "Uključi tamnu temu"}
      aria-pressed={isDark}
      className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border transition-colors duration-500 ${
        inverted
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-line text-ink hover:bg-secondary"
      }`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 ${
          isDark ? "bg-accent/15 opacity-100" : ""
        }`}
      />
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ y: -14, opacity: 0, rotate: -60 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 14, opacity: 0, rotate: 60 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="grid place-items-center"
          >
            {isDark ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
