import { getStaleEntries } from "@/db/queries/admin";
import { FreshnessBulkSection, type FreshnessItem } from "./FreshnessBulkSection";

export default async function AdminFreshnessPage() {
  const entries = await getStaleEntries();

  const items: FreshnessItem[] = entries.map((entry) => ({
    id: entry.id,
    titleEn: entry.titleEn,
    categoryNameEn: entry.categoryNameEn,
    lastVerifiedDate: entry.lastVerifiedDate,
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold">Needs a fact re-check ({entries.length})</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Published entries whose facts haven&apos;t been confirmed in 6+ months, or never since
        publishing. Nothing here has been unpublished or flagged as wrong — this is just a
        freshness prompt, oldest first. If you&apos;ve confirmed the figures and sources are still
        current, select a row (or several) and <strong>Mark as re-verified</strong> — this only
        bumps the verified date and does NOT touch the published page. If something actually needs
        correcting, use <strong>Review &amp; edit</strong> instead — saving an edit sends it back
        through review, same as any other content change.
      </p>

      {entries.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-400">Everything published has been checked within the last 6 months.</p>
      ) : (
        <div className="mt-6">
          <FreshnessBulkSection items={items} />
        </div>
      )}
    </div>
  );
}
