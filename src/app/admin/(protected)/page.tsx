import Link from "next/link";
import { getDashboardCounts } from "@/db/queries/admin";

export default async function AdminDashboardPage() {
  const counts = await getDashboardCounts();

  const tiles = [
    { label: "Pending review", value: counts.pendingReview, href: "/admin/review" },
    { label: "New source submissions", value: counts.newSourceSubmissions, href: "/admin/sources" },
    { label: "New feedback", value: counts.newFeedback, href: "/admin/feedback" },
    { label: "Published entries", value: counts.published, href: "/admin/entries" },
    { label: "Pending editorials", value: counts.pendingReviewEditorials, href: "/admin/editorials" },
    { label: "Flagged comments", value: counts.flaggedComments, href: "/admin/comments" },
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
