import Link from "next/link";
import { getAllEditorialsForAdmin } from "@/db/queries/admin";
import { EditorialPublishToggleButton } from "./EditorialPublishToggleButton";
import { SearchFilterTable, type FilterableRow } from "@/components/admin/SearchFilterTable";

const STATUS_STYLES: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  pending_review: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  rejected: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
  draft: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400",
};

export default async function AdminEditorialsPage() {
  const all = await getAllEditorialsForAdmin();

  const rows: FilterableRow[] = all.map((editorial) => ({
    key: editorial.id,
    searchText: `${editorial.headlineEn} ${editorial.relatedEntrySlug} ${editorial.tone} ${editorial.status}`.toLowerCase(),
    node: (
      <tr key={editorial.id} className="border-b border-neutral-100 dark:border-neutral-900">
        <td className="py-3 pr-4">{editorial.headlineEn}</td>
        <td className="py-3 pr-4 text-neutral-500">{editorial.relatedEntrySlug}</td>
        <td className="py-3 pr-4 text-neutral-500">{editorial.tone}</td>
        <td className="py-3 pr-4">
          <span className={`rounded-full px-2 py-0.5 text-xs ${STATUS_STYLES[editorial.status] ?? ""}`}>
            {editorial.status}
          </span>
        </td>
        <td className="py-3 pr-4">
          <div className="flex items-center gap-2">
            <Link
              href={`/admin/editorials/${editorial.id}/edit`}
              className="rounded-md border border-neutral-300 px-2.5 py-1 text-xs hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              Edit
            </Link>
            {(editorial.status === "published" || editorial.status === "draft") && (
              <EditorialPublishToggleButton
                editorialId={editorial.id}
                isPublished={editorial.status === "published"}
              />
            )}
          </div>
        </td>
      </tr>
    ),
  }));

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Editorials</h1>
        <Link
          href="/admin/editorials/new"
          className="rounded-md bg-brand px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-hover"
        >
          New editorial
        </Link>
      </div>
      <p className="mt-1 text-sm text-neutral-500">
        A scheduled GitHub Actions agent drafts editorials daily once its
        API key secret is set (see PROJECT_LOG.md) — &quot;New
        editorial&quot; is still here for writing one by hand anytime.
        Pending items to approve/reject live in the unified{" "}
        <Link href="/admin/review" className="underline">
          Review queue
        </Link>{" "}
        — this page is the full list, with edit and unpublish for anything
        already live.
      </p>

      <div className="mt-8">
        <SearchFilterTable
          minWidthClass="min-w-[560px]"
          placeholder="Search by headline, entry, tone, or status…"
          rows={rows}
          theadRow={
            <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
              <th className="py-2 pr-4 font-medium">Headline</th>
              <th className="py-2 pr-4 font-medium">About</th>
              <th className="py-2 pr-4 font-medium">Tone</th>
              <th className="py-2 pr-4 font-medium">Status</th>
              <th className="py-2 pr-4 font-medium"></th>
            </tr>
          }
        />
      </div>
    </div>
  );
}
