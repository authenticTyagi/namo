// Entries, editorials, and comparisons all share the same status enum in
// the DB now (draft/pending_review/published/rejected — consolidated
// 2026-09-29, see PROJECT_LOG.md), so one badge replaces the 3
// near-identical STATUS_STYLES maps that used to live in their own admin
// list pages.
const STATUS_STYLES: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  pending_review: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  rejected: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
  draft: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
};

const STATUS_LABELS: Record<string, string> = {
  published: "Published",
  pending_review: "Pending review",
  rejected: "Rejected",
  draft: "Draft",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[status] ?? "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"}`}
    >
      {STATUS_LABELS[status] ?? status}
    </span>
  );
}
