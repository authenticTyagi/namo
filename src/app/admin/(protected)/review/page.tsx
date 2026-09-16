import {
  getPendingReviewEntries,
  getPendingReviewEditorials,
  getPendingReviewComparisons,
} from "@/db/queries/admin";
import { BulkReviewSection, type ReviewItem } from "./BulkReviewSection";

export default async function AdminReviewPage() {
  const [entries, editorials, comparisons] = await Promise.all([
    getPendingReviewEntries(),
    getPendingReviewEditorials(),
    getPendingReviewComparisons(),
  ]);

  const total = entries.length + editorials.length + comparisons.length;

  const entryItems: ReviewItem[] = entries.map((e) => ({
    id: e.id,
    eyebrow: e.categoryNameEn,
    title: e.titleEn,
    snippet: e.summaryEn,
    meta: e.confidenceScore ? `Confidence: ${e.confidenceScore}` : undefined,
  }));

  const editorialItems: ReviewItem[] = editorials.map((ed) => ({
    id: ed.id,
    eyebrow: `About: ${ed.relatedEntryTitleEn} · ${ed.tone}`,
    title: ed.headlineEn,
    snippet: ed.bodyEn,
  }));

  const comparisonItems: ReviewItem[] = comparisons.map((c) => ({
    id: c.id,
    eyebrow: `${c.categoryNameEn} · ${c.metricLabelEn}`,
    title: c.titleEn,
    snippet: c.narrativeEn,
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold">Review queue</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Everything awaiting your approval, in one place — entries,
        editorials, and comparisons together, so you don&apos;t have to
        click between three pages. Approve or reject inline, or check a few
        boxes and use the bulk buttons above a section. Each item&apos;s own
        admin page (Entries / Editorials / Comparisons in the sidebar) still
        has the full list, edit form, and detail if you need it.
      </p>

      {total === 0 ? (
        <p className="mt-8 text-sm text-neutral-400">Nothing to review right now — you&apos;re all caught up.</p>
      ) : (
        <div className="mt-6 space-y-10">
          {entryItems.length > 0 && (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Entries ({entryItems.length})
              </h2>
              <BulkReviewSection type="entry" items={entryItems} />
            </section>
          )}

          {editorialItems.length > 0 && (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Editorials ({editorialItems.length})
              </h2>
              <BulkReviewSection type="editorial" items={editorialItems} />
            </section>
          )}

          {comparisonItems.length > 0 && (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Comparisons ({comparisonItems.length})
              </h2>
              <BulkReviewSection type="comparison" items={comparisonItems} />
            </section>
          )}
        </div>
      )}
    </div>
  );
}
