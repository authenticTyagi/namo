import Link from "next/link";
import { getAllComparisonsForAdmin } from "@/db/queries/admin";
import { ComparisonPublishToggleButton } from "./ComparisonPublishToggleButton";
import { SearchFilterTable, type FilterableRow } from "@/components/admin/SearchFilterTable";
import { StatusBadge } from "@/components/admin/StatusBadge";

export default async function AdminComparisonsPage() {
  const all = await getAllComparisonsForAdmin();

  const rows: FilterableRow[] = all.map((c) => ({
    key: c.id,
    searchText: `${c.titleEn} ${c.categoryNameEn} ${c.status}`.toLowerCase(),
    node: (
      <tr key={c.id} className="border-b border-neutral-100 dark:border-neutral-900">
        <td className="py-3 pr-4">{c.titleEn}</td>
        <td className="py-3 pr-4 text-neutral-500">{c.categoryNameEn}</td>
        <td className="py-3 pr-4">
          <StatusBadge status={c.status} />
        </td>
        <td className="py-3 pr-4">
          <div className="flex items-center gap-2">
            <Link
              href={`/admin/comparisons/${c.id}/edit`}
              className="rounded-md border border-neutral-300 px-2.5 py-1 text-xs hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Edit
            </Link>
            {(c.status === "published" || c.status === "draft") && (
              <ComparisonPublishToggleButton comparisonId={c.id} isPublished={c.status === "published"} />
            )}
          </div>
        </td>
      </tr>
    ),
  }));

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">India in the World — comparisons</h1>
        <Link
          href="/admin/comparisons/new"
          className="rounded-md bg-brand px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-hover"
        >
          New comparison
        </Link>
      </div>
      <p className="mt-1 text-sm text-neutral-500">
        Cross-country comparisons, sourced to neutral international bodies
        (World Bank, IMF, UN agencies) rather than Indian government data.
        No drafting pipeline exists for this yet — everything is hand-authored
        via &quot;New comparison.&quot; Pending items to approve/reject live in
        the unified{" "}
        <Link href="/admin/review" className="underline">
          Review queue
        </Link>{" "}
        — this page is the full list, with edit and unpublish for anything
        already live.
      </p>

      <div className="mt-8">
        <SearchFilterTable
          minWidthClass="min-w-[560px]"
          placeholder="Search by title, category, or status…"
          rows={rows}
          theadRow={
            <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
              <th className="py-2 pr-4 font-medium">Title</th>
              <th className="py-2 pr-4 font-medium">Category</th>
              <th className="py-2 pr-4 font-medium">Status</th>
              <th className="py-2 pr-4 font-medium"></th>
            </tr>
          }
        />
      </div>
    </div>
  );
}
