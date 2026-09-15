import type { ComparisonPoint } from "@/db/queries/comparisons";

/**
 * Horizontal ranked bar chart for a cross-country comparison — India's own
 * bar gets the brand accent, every other country a recessive neutral, so
 * the eye finds India first without needing a category-color legend (this
 * isn't the content-category palette from src/lib/category-colors.ts; the
 * "series" here is countries, and there's exactly one that matters to
 * highlight). Points are pre-sorted by value descending so the chart also
 * doubles as an implicit rank. Thin (h-2.5) rounded bars, direct value
 * labels (no hover dependency), one shared linear scale — same mark specs
 * as StatBarRow.
 */
export function ComparisonBarChart({ points, unit }: { points: ComparisonPoint[]; unit: string | null }) {
  const sorted = [...points].sort((a, b) => b.valueNumeric - a.valueNumeric);
  const max = Math.max(...sorted.map((p) => p.valueNumeric), 1);

  return (
    <div className="space-y-3">
      {sorted.map((p) => (
        <div key={p.id} className="flex items-center gap-3">
          <span
            className={
              "w-28 shrink-0 text-sm sm:w-36 " +
              (p.isIndia
                ? "font-bold text-[#184f95] dark:text-[#3987e5]"
                : "font-medium text-neutral-600 dark:text-neutral-400")
            }
          >
            {p.countryName}
          </span>
          <div className="h-2.5 flex-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
            <div
              className={
                "h-2.5 rounded-full " +
                (p.isIndia ? "bg-[#184f95] dark:bg-[#3987e5]" : "bg-neutral-300 dark:bg-neutral-600")
              }
              style={{ width: `${Math.max((p.valueNumeric / max) * 100, 4)}%` }}
            />
          </div>
          <span
            className={
              "w-20 shrink-0 text-right text-sm font-extrabold tabular-nums sm:w-24 " +
              (p.isIndia ? "text-[#184f95] dark:text-[#3987e5]" : "")
            }
          >
            {p.value}
            {unit && !p.value.includes(unit) ? ` ${unit}` : ""}
          </span>
        </div>
      ))}
    </div>
  );
}
