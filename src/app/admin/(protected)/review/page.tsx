import {
  getPendingReviewEntries,
  getPendingReviewEditorials,
  getPendingReviewComparisons,
} from "@/db/queries/admin";
import { UnifiedReviewActions } from "./UnifiedReviewActions";

const TONE_STYLES: Record<string, string> = {
  positive: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  negative: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  neutral: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  mixed: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
};

export default async function AdminReviewPage() {
  const [entries, editorials, comparisons] = await Promise.all([
    getPendingReviewEntries(),
    getPendingReviewEditorials(),
    getPendingReviewComparisons(),
  ]);

  const total = entries.length + editorials.length + comparisons.length;

  return (
    <div>
      <h1 className="text-2xl font-bold">Review queue</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Everything awaiting your approval, in one place — entries,
        editorials, and comparisons together, so you don&apos;t have to
        click between three pages. Approve or reject inline; each item&apos;s
        own admin page (Entries / Editorials / Comparisons in the sidebar)
        still has the full list and detail if you need it.
      </p>

      {total === 0 ? (
        <p className="mt-8 text-sm text-neutral-400">Nothing to review right now — you&apos;re all caught up.</p>
      ) : (
        <div className="mt-6 space-y-10">
          {entries.length > 0 && (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Entries ({entries.length})
              </h2>
              <div className="space-y-4">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs text-neutral-500">{entry.categoryNameEn}</p>
                        <h3 className="font-semibold">{entry.titleEn}</h3>
                        <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{entry.summaryEn}</p>
                        {entry.confidenceScore && (
                          <p className="mt-1 text-xs text-neutral-400">
                            Confidence: {entry.confidenceScore}
                          </p>
                        )}
                      </div>
                      <UnifiedReviewActions id={entry.id} type="entry" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {editorials.length > 0 && (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Editorials ({editorials.length})
              </h2>
              <div className="space-y-4">
                {editorials.map((editorial) => (
                  <div
                    key={editorial.id}
                    className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs text-neutral-500">
                          About: {editorial.relatedEntryTitleEn} ·{" "}
                          <span
                            className={`rounded-full px-1.5 py-0.5 ${TONE_STYLES[editorial.tone] ?? ""}`}
                          >
                            {editorial.tone}
                          </span>
                        </p>
                        <h3 className="font-semibold">{editorial.headlineEn}</h3>
                        <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{editorial.bodyEn}</p>
                      </div>
                      <UnifiedReviewActions id={editorial.id} type="editorial" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {comparisons.length > 0 && (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Comparisons ({comparisons.length})
              </h2>
              <div className="space-y-4">
                {comparisons.map((comparison) => (
                  <div
                    key={comparison.id}
                    className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs text-neutral-500">
                          {comparison.categoryNameEn} · {comparison.metricLabelEn}
                        </p>
                        <h3 className="font-semibold">{comparison.titleEn}</h3>
                        <p className="mt-1 text-sm text-neutral-500 line-clamp-2">{comparison.narrativeEn}</p>
                      </div>
                      <UnifiedReviewActions id={comparison.id} type="comparison" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
