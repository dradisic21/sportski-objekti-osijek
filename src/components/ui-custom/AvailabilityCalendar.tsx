import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CALENDAR_VENUES = [
  "Dvorana Gradski vrt",
  "Gradski bazeni",
  "ŠRC Copacabana",
  "Sportska dvorana Jug",
  "Teniski centar",
] as const;

export type CalendarVenue = (typeof CALENDAR_VENUES)[number];

export type SlotStatus = "slobodno" | "djelomicno" | "zauzeto" | "zatvoreno";

const STATUS_META: Record<
  SlotStatus,
  { label: string; dot: string; chip: string; ring: string }
> = {
  slobodno: {
    label: "Slobodno",
    dot: "bg-[oklch(0.72_0.09_180)]",
    chip: "bg-[oklch(0.96_0.03_180)] text-[oklch(0.35_0.08_180)]",
    ring: "ring-[oklch(0.85_0.06_180)]",
  },
  djelomicno: {
    label: "Djelomično zauzeto",
    dot: "bg-[oklch(0.78_0.09_75)]",
    chip: "bg-[oklch(0.96_0.03_75)] text-[oklch(0.40_0.08_75)]",
    ring: "ring-[oklch(0.85_0.06_75)]",
  },
  zauzeto: {
    label: "Zauzeto",
    dot: "bg-[oklch(0.55_0.02_260)]",
    chip: "bg-[oklch(0.94_0.005_260)] text-[oklch(0.35_0.02_260)]",
    ring: "ring-[oklch(0.80_0.01_260)]",
  },
  zatvoreno: {
    label: "Zatvoreno zbog događanja",
    dot: "bg-[oklch(0.62_0.10_290)]",
    chip: "bg-[oklch(0.95_0.03_290)] text-[oklch(0.38_0.10_290)]",
    ring: "ring-[oklch(0.83_0.06_290)]",
  },
};

// Deterministic mock — later replace with PHP REST fetch.
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0);
}

function statusFor(venue: string, date: Date, hour?: number): SlotStatus {
  const key = `${venue}|${date.getFullYear()}-${date.getMonth()}-${date.getDate()}${hour !== undefined ? `|${hour}` : ""}`;
  const n = hash(key) % 100;
  if (n < 8) return "zatvoreno";
  if (n < 28) return "zauzeto";
  if (n < 58) return "djelomicno";
  return "slobodno";
}

const HOURS = [8, 10, 12, 14, 16, 18, 20];
const MONTHS_HR = ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"];
const DAYS_HR = ["P", "U", "S", "Č", "P", "S", "N"];

function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function sameDay(a: Date, b: Date) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }

export interface CalendarSelection {
  venue: CalendarVenue;
  date: Date;
  time: string;
}

interface Props {
  onSelectSlot: (sel: CalendarSelection) => void;
}

export function AvailabilityCalendar({ onSelectSlot }: Props) {
  const today = useMemo(() => new Date(), []);
  const [venue, setVenue] = useState<CalendarVenue>(CALENDAR_VENUES[0]);
  const [cursor, setCursor] = useState<Date>(startOfMonth(today));
  const [selectedDay, setSelectedDay] = useState<Date | null>(today);

  const days = useMemo(() => {
    const first = startOfMonth(cursor);
    const startDow = (first.getDay() + 6) % 7; // Monday = 0
    const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < startDow; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [cursor]);

  function shiftMonth(delta: number) {
    setCursor((c) => new Date(c.getFullYear(), c.getMonth() + delta, 1));
  }
  function goToday() {
    setCursor(startOfMonth(today));
    setSelectedDay(today);
  }

  const daySlots = selectedDay
    ? HOURS.map((h) => ({ hour: h, status: statusFor(venue, selectedDay, h) }))
    : [];

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-[0_1px_40px_-20px_rgba(15,20,30,0.25)] md:p-8">
      {/* Toolbar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => shiftMonth(-1)}
            aria-label="Prethodni mjesec"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-background"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => shiftMonth(1)}
            aria-label="Sljedeći mjesec"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-background"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={goToday}
            className="rounded-full border border-line px-4 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            Danas
          </button>
          <div className="ml-2">
            <p className="text-eyebrow text-ink-muted">Mjesec</p>
            <p className="text-display text-xl text-ink md:text-2xl">
              {MONTHS_HR[cursor.getMonth()]} <span className="text-ink-muted">{cursor.getFullYear()}</span>
            </p>
          </div>
        </div>

        <div className="w-full md:w-72">
          <label className="text-eyebrow text-ink-muted">Objekt</label>
          <select
            value={venue}
            onChange={(e) => setVenue(e.target.value as CalendarVenue)}
            className="mt-2 w-full rounded-lg border border-line bg-background px-3 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none"
          >
            {CALENDAR_VENUES.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-7 gap-1 pb-2 text-center font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            {DAYS_HR.map((d, i) => <div key={i}>{d}</div>)}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={cursor.toISOString() + venue}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-7 gap-1"
            >
              {days.map((d, i) => {
                if (!d) return <div key={i} className="aspect-square" />;
                const status = statusFor(venue, d);
                const meta = STATUS_META[status];
                const isToday = sameDay(d, today);
                const isSelected = selectedDay && sameDay(d, selectedDay);
                const isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                return (
                  <button
                    key={i}
                    onClick={() => !isPast && setSelectedDay(d)}
                    disabled={isPast}
                    className={`group relative aspect-square rounded-lg border p-1.5 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-ink bg-ink text-background"
                        : isPast
                          ? "border-transparent text-ink-muted/50"
                          : `border-line bg-background hover:-translate-y-0.5 hover:shadow-md ${isToday ? "ring-1 " + meta.ring : ""}`
                    }`}
                  >
                    <span className={`text-xs font-medium ${isSelected ? "text-background" : "text-ink"} ${isPast ? "!text-ink-muted/50" : ""}`}>
                      {d.getDate()}
                    </span>
                    {!isPast && (
                      <span className={`absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full ${isSelected ? "bg-background/70" : meta.dot}`} />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-3">
            {(Object.keys(STATUS_META) as SlotStatus[]).map((s) => (
              <div key={s} className="flex items-center gap-2 text-[11px] text-ink-soft">
                <span className={`h-2 w-2 rounded-full ${STATUS_META[s].dot}`} />
                {STATUS_META[s].label}
              </div>
            ))}
          </div>
        </div>

        {/* Day detail */}
        <div className="lg:col-span-2">
          <p className="text-eyebrow text-ink-muted">Termini</p>
          <p className="text-display mt-2 text-2xl text-ink">
            {selectedDay
              ? selectedDay.toLocaleDateString("hr-HR", { weekday: "long", day: "numeric", month: "long" })
              : "Odaberi dan"}
          </p>
          <p className="mt-1 text-xs text-ink-muted">{venue}</p>

          <ul className="mt-5 space-y-2">
            {daySlots.map(({ hour, status }) => {
              const meta = STATUS_META[status];
              const disabled = status === "zauzeto" || status === "zatvoreno";
              const time = `${String(hour).padStart(2, "0")}:00`;
              return (
                <li key={hour}>
                  <button
                    disabled={disabled || !selectedDay}
                    onClick={() =>
                      selectedDay && onSelectSlot({ venue, date: selectedDay, time })
                    }
                    className={`group flex w-full items-center justify-between rounded-lg border border-line bg-background px-4 py-3 text-left transition-all ${
                      disabled
                        ? "opacity-55"
                        : "hover:-translate-y-0.5 hover:border-ink hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                      <span className="font-mono text-sm text-ink">{time}</span>
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${meta.chip}`}>
                      {meta.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
