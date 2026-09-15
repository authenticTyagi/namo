import Link from "next/link";
import { getAllComparisonsForAdmin, getPendingReviewComparisons } from "@/db/queries/admin";
import { ComparisonReviewActions } from "./ComparisonReviewActions";

const STATUS_STYLES: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  pending_review: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  rejected: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
  draft: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
};

export default async function AdminComparisonsPage() {
  const [pending, all] = await Promise.all([
    getPendingReviewComparisons(),
    getAllComparisonsForAdmin(),
  ]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">India in the World — comparisons</h1>
        <Link
          href="/admin/comparisons/new"
          className="rounded-md bg-[#184f95] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#123c73]"
        >
          New comparison
        </Link>
      </div>
      <p className="mt-1 text-sm text-neutral-500">
        Cross-country comparisons, sourced to neutral international bodies
        (World Bank, IMF, UN agencies) rather than Indian government data.
        No drafting pipeline exists for this yet — everything is hand-authored
        via &quot;New comparison&quot; and still lands here as pending review.
      </p>

      <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        Pending review ({pending.length})
      </h2>
      {pending.length === 0 ? (
        <p className="mt-3 text-sm text-neutral-400">Nothing to review right now.</p>
      ) : (
        <div className="mt-3 space-y-4">
          {pending.map((c) => (
            <div key={c.id} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500">
                    {c.categoryNameEn} · {c.metricLabelEn}
                  </p>
                  <h3 className="font-semibold">{c.titleEn}</h3>
                  <p className="mt-1 text-sm text-neutral-500 line-clamp-3">{c.narrativeEn}</p>
                </div>
                <ComparisonReviewActions comparisonId={c.id} />
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        All comparisons ({all.length})
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
              <th className="py-2 pr-4 font-medium">Title</th>
              <th className="py-2 pr-4 font-medium">Category</th>
              <th className="py-2 pr-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {all.map((c) => (
              <tr key={c.id} className="border-b border-neutral-100 dark:border-neutral-900">
                <td className="py-3 pr-4">{c.titleEn}</td>
                <td className="py-3 pr-4 text-neutral-500">{c.categoryNameEn}</td>
                <td className="py-3 pr-4">
                  <span className={`rounded-full px-2 py-0.5 text-xs ${STATUS_STYLES[c.status] ?? ""}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
