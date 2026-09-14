import { LOCALE_INTL_TAG, type Locale } from "@/lib/localized";

/**
 * A plain chronological strip above the entry body. Kept deliberately simple
 * (a horizontal line of dated milestones) so it reads clearly regardless of
 * the viewer's age or familiarity with data visualizations.
 */
export function Timeline({
  startDate,
  endDate,
  locale,
}: {
  startDate: Date | null;
  endDate: Date | null;
  locale: Locale;
}) {
  if (!startDate) return null;

  const format = (d: Date) =>
    new Intl.DateTimeFormat(LOCALE_INTL_TAG[locale], {
      year: "numeric",
      month: "short",
    }).format(d);

  return (
    <div className="mb-6 flex items-center gap-3 text-sm text-neutral-500">
      <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
      <span>{format(startDate)}</span>
      {endDate && (
        <>
          <span className="h-px flex-1 max-w-16 bg-neutral-300 dark:bg-neutral-700" />
          <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
          <span>{format(endDate)}</span>
        </>
      )}
    </div>
  );
}
