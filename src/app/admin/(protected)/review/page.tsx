import { getPendingReviewEntries } from "@/db/queries/admin";
import { ReviewActions } from "./ReviewActions";

export default async function AdminReviewPage() {
  const pending = await getPendingReviewEntries();

  return (
    <div>
      <h1 className="text-2xl font-bold">Review queue</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Entries with status &quot;pending review&quot; — nothing here yet since
        the autonomous drafting pipeline hasn&apos;t been built. This is ready
        for when it is.
      </p>

      {pending.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-400">Nothing to review right now.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {pending.map((entry) => (
            <div
              key={entry.id}
              className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500">{entry.categoryNameEn}</p>
                  <h2 className="font-semibold">{entry.titleEn}</h2>
                  <p className="mt-1 text-sm text-neutral-500">{entry.summaryEn}</p>
                  {entry.confidenceScore && (
                    <p className="mt-1 text-xs text-neutral-400">
                      Confidence: {entry.confidenceScore}
                    </p>
                  )}
                </div>
                <ReviewActions entryId={entry.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
