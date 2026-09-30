import Link from "next/link";
import { getAllEntriesForAdmin } from "@/db/queries/admin";
import { SITE_URL } from "@/lib/constants";
import { PublishToggleButton } from "./PublishToggleButton";
import { SearchFilterTable, type FilterableRow } from "@/components/admin/SearchFilterTable";
import { StatusBadge } from "@/components/admin/StatusBadge";

export default async function AdminEntriesPage() {
  const entries = await getAllEntriesForAdmin();

  const rows: FilterableRow[] = entries.map((entry) => ({
    key: entry.id,
    searchText: `${entry.titleEn} ${entry.categoryNameEn} ${entry.status}`.toLowerCase(),
    node: (
      <tr key={entry.id} className="border-b border-neutral-100 dark:border-neutral-900">
        <td className="py-3 pr-4">{entry.titleEn}</td>
        <td className="py-3 pr-4 text-neutral-500">{entry.categoryNameEn}</td>
        <td className="py-3 pr-4">
          <StatusBadge status={entry.status} />
        </td>
        <td className="py-3 pr-4">
          {entry.status === "published" && (
            <a
              href={`${SITE_URL}/en/entry/${entry.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline text-neutral-500"
            >
              View →
            </a>
          )}
        </td>
        <td className="py-3 pr-4">
          <div className="flex items-center gap-2">
            <Link
              href={`/admin/entries/${entry.id}/edit`}
              className="rounded-md border border-neutral-300 px-2.5 py-1 text-xs hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Edit
            </Link>
            <PublishToggleButton entryId={entry.id} isPublished={entry.status === "published"} />
          </div>
        </td>
      </tr>
    ),
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold">Entries ({entries.length})</h1>
      <div className="mt-6">
        <SearchFilterTable
          minWidthClass="min-w-[640px]"
          placeholder="Search by title, category, or status…"
          rows={rows}
          theadRow={
            <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
              <th className="py-2 pr-4 font-medium">Title</th>
              <th className="py-2 pr-4 font-medium">Category</th>
              <th className="py-2 pr-4 font-medium">Status</th>
              <th className="py-2 pr-4 font-medium">Live</th>
              <th className="py-2 pr-4 font-medium"></th>
            </tr>
          }
        />
      </div>
    </div>
  );
}
