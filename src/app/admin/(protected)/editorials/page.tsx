import Link from "next/link";
import { getAllEditorialsForAdmin, getPendingReviewEditorials } from "@/db/queries/admin";
import { EditorialReviewActions } from "./EditorialReviewActions";

const STATUS_STYLES: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  pending_review: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  rejected: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
};

export default async function AdminEditorialsPage() {
  const [pending, all] = await Promise.all([
    getPendingReviewEditorials(),
    getAllEditorialsForAdmin(),
  ]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Editorials</h1>
        <Link
          href="/admin/editorials/new"
          className="rounded-md bg-[#184f95] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#123c73]"
        >
          New editorial
        </Link>
      </div>
      <p className="mt-1 text-sm text-neutral-500">
        The automated drafting agent for editorials isn&apos;t running yet (same
        cloud network-egress block as the entries pipeline — see
        PROJECT_LOG.md). Use &quot;New editorial&quot; to write one by hand in
        the meantime; it still lands here as pending review, same as a
        pipeline submission would.
      </p>

      <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        Pending review ({pending.length})
      </h2>
      {pending.length === 0 ? (
        <p className="mt-3 text-sm text-neutral-400">Nothing to review right now.</p>
      ) : (
        <div className="mt-3 space-y-4">
          {pending.map((editorial) => (
            <div
              key={editorial.id}
              className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500">
                    About: {editorial.relatedEntryTitleEn} · Tone: {editorial.tone}
                  </p>
                  <h3 className="font-semibold">{editorial.headlineEn}</h3>
                  <p className="mt-1 text-sm text-neutral-500 line-clamp-3">{editorial.bodyEn}</p>
                </div>
                <EditorialReviewActions editorialId={editorial.id} />
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        All editorials ({all.length})
      </h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
              <th className="py-2 pr-4 font-medium">Headline</th>
              <th className="py-2 pr-4 font-medium">About</th>
              <th className="py-2 pr-4 font-medium">Tone</th>
              <th className="py-2 pr-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {all.map((editorial) => (
              <tr key={editorial.id} className="border-b border-neutral-100 dark:border-neutral-900">
                <td className="py-3 pr-4">{editorial.headlineEn}</td>
                <td className="py-3 pr-4 text-neutral-500">{editorial.relatedEntrySlug}</td>
                <td className="py-3 pr-4 text-neutral-500">{editorial.tone}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${STATUS_STYLES[editorial.status] ?? ""}`}
                  >
                    {editorial.status}
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
