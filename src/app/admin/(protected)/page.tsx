import Link from "next/link";
import {
  ClipboardCheck,
  FileText,
  RefreshCw,
  MessageSquare,
  Link2,
  Inbox,
  type LucideIcon,
} from "lucide-react";
import { getDashboardCounts } from "@/db/queries/admin";

export default async function AdminDashboardPage() {
  const counts = await getDashboardCounts();
  const needsReview = counts.pendingReview + counts.pendingReviewEditorials + counts.pendingReviewComparisons;

  const tiles: { label: string; value: number; href: string; icon: LucideIcon; needsAttention?: boolean }[] = [
    // One combined tile instead of three separate "pending X" tiles — the
    // unified /admin/review page is where all three actually get triaged,
    // so the dashboard doesn't need to enumerate them separately too.
    {
      label: "Needs review (entries + editorials + comparisons)",
      value: needsReview,
      href: "/admin/review",
      icon: ClipboardCheck,
      needsAttention: needsReview > 0,
    },
    { label: "Published entries", value: counts.published, href: "/admin/entries", icon: FileText },
    {
      label: "Entries needing a fact re-check",
      value: counts.staleEntries,
      href: "/admin/freshness",
      icon: RefreshCw,
      needsAttention: counts.staleEntries > 0,
    },
    {
      label: "Flagged comments",
      value: counts.flaggedComments,
      href: "/admin/comments",
      icon: MessageSquare,
      needsAttention: counts.flaggedComments > 0,
    },
    { label: "New source submissions", value: counts.newSourceSubmissions, href: "/admin/sources", icon: Link2 },
    { label: "New feedback", value: counts.newFeedback, href: "/admin/feedback", icon: Inbox },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile) => {
          const Icon = tile.icon;
          return (
            <Link
              key={tile.label}
              href={tile.href}
              className={`rounded-lg border p-4 transition hover:border-neutral-400 dark:hover:border-neutral-600 ${
                tile.needsAttention
                  ? "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20"
                  : "border-neutral-200 dark:border-neutral-800"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${tile.needsAttention ? "text-amber-600 dark:text-amber-400" : "text-neutral-400"}`}
              />
              <p className="mt-2 text-3xl font-bold tabular-nums">{tile.value}</p>
              <p className="mt-1 text-sm text-neutral-500">{tile.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
