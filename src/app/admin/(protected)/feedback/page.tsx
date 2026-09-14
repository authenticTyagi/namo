import { getFeedbackSubmissions } from "@/db/queries/feedback";
import { FeedbackStatusButtons } from "./FeedbackStatusButtons";

const STATUS_STYLES: Record<string, string> = {
  new: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  read: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  resolved: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
};

const CATEGORY_LABELS: Record<string, string> = {
  report_issue: "Report an issue",
  suggest_source: "Suggested source",
  other: "Other",
};

export default async function AdminFeedbackPage() {
  const submissions = await getFeedbackSubmissions();

  return (
    <div>
      <h1 className="text-2xl font-bold">Feedback ({submissions.length})</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Public submissions from the /feedback form on the live site.
      </p>

      <div className="mt-6 space-y-3">
        {submissions.length === 0 && (
          <p className="text-sm text-neutral-400">Nothing submitted yet.</p>
        )}
        {submissions.map((f) => (
          <div key={f.id} className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800">
            <div className="flex items-start justify-between gap-3">
              <span className="font-medium">{CATEGORY_LABELS[f.category]}</span>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${STATUS_STYLES[f.status]}`}>
                {f.status}
              </span>
            </div>
            <p className="mt-1 whitespace-pre-wrap text-neutral-600 dark:text-neutral-400">
              {f.message}
            </p>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-neutral-400">
              {f.name && <span>From: {f.name}</span>}
              {f.email && <span>Email: {f.email}</span>}
              {f.relatedEntrySlug && <span>Entry: {f.relatedEntrySlug}</span>}
              <span>{f.createdAt.toLocaleString()}</span>
            </div>
            <FeedbackStatusButtons id={f.id} status={f.status} />
          </div>
        ))}
      </div>
    </div>
  );
}
