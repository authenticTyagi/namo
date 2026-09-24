import { redirect } from "next/navigation";
import { getEntriesEligibleForEditorial } from "@/db/queries/admin";
import { createEditorial } from "../actions";

export default async function NewEditorialPage() {
  const eligibleEntries = await getEntriesEligibleForEditorial();

  async function create(formData: FormData) {
    "use server";
    await createEditorial(formData);
    redirect("/admin/editorials");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold">New editorial</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Lands as pending review, same as everything else — nothing publishes
        until it&apos;s approved from the editorials queue.
      </p>

      {eligibleEntries.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-400">
          No published entries are currently eligible — every published entry
          already has a published or pending-review editorial about it.
        </p>
      ) : (
        <form action={create} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium">Related entry</label>
            <select
              name="relatedEntryId"
              required
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              <option value="">Select an entry…</option>
              {eligibleEntries.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.titleEn} ({e.slug})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Tone</label>
            <select
              name="tone"
              required
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              <option value="positive">Positive</option>
              <option value="negative">Negative</option>
              <option value="neutral">Neutral</option>
              <option value="mixed">Mixed</option>
            </select>
            <p className="mt-1 text-xs text-neutral-400">
              The editorial&apos;s own honest take — never forced to be
              flattering.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Headline (Hindi)</label>
              <input
                name="headlineHi"
                required
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Headline (English)</label>
              <input
                name="headlineEn"
                required
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Body (Hindi)</label>
              <textarea
                name="bodyHi"
                required
                rows={10}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Body (English)</label>
              <textarea
                name="bodyEn"
                required
                rows={10}
                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
          >
            Submit for review
          </button>
        </form>
      )}
    </div>
  );
}
