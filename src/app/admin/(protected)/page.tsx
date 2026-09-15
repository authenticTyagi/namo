import Link from "next/link";
import { getDashboardCounts } from "@/db/queries/admin";

export default async function AdminDashboardPage() {
  const counts = await getDashboardCounts();
  const needsReview = counts.pendingReview + counts.pendingReviewEditorials + counts.pendingReviewComparisons;

  const tiles = [
    // One combined tile instead of three separate "pending X" tiles — the
    // unified /admin/review page is where all three actually get triaged,
    // so the dashboard doesn't need to enumerate them separately too.
    { label: "Needs review (entries + editorials + comparisons)", value: needsReview, href: "/admin/review" },
    { label: "Published entries", value: counts.published, href: "/admin/entries" },
    { label: "Flagged comments", value: counts.flaggedComments, href: "/admin/comments" },
    { label: "New source submissions", value: counts.newSourceSubmissions, href: "/admin/sources" },
    { label: "New feedback", value: counts.newFeedback, href: "/admin/feedback" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <Link
            key={tile.label}
            href={tile.href}
            className="rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <p className="text-3xl font-bold tabular-nums">{tile.value}</p>
            <p className="mt-1 text-sm text-neutral-500">{tile.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
