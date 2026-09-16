import { notFound, redirect } from "next/navigation";
import { getEditorialByIdForAdmin } from "@/db/queries/admin";
import { updateEditorial } from "../../actions";

export default async function EditEditorialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const editorial = await getEditorialByIdForAdmin(id);
  if (!editorial) notFound();

  async function update(formData: FormData) {
    "use server";
    await updateEditorial(id, formData);
    redirect("/admin/editorials");
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold">Edit editorial</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Saving resets this to <strong>pending review</strong>, even if it&apos;s
        currently published — a content change needs fresh approval before
        it&apos;s public again.
      </p>

      <form action={update} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium">Tone</label>
          <select name="tone" required defaultValue={editorial.tone} className={inputClass}>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="neutral">Neutral</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Headline (Hindi)</label>
            <input name="headlineHi" required defaultValue={editorial.headlineHi} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium">Headline (English)</label>
            <input name="headlineEn" required defaultValue={editorial.headlineEn} className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Body (Hindi)</label>
            <textarea
              name="bodyHi"
              required
              rows={12}
              defaultValue={editorial.bodyHi}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Body (English)</label>
            <textarea
              name="bodyEn"
              required
              rows={12}
              defaultValue={editorial.bodyEn}
              className={inputClass}
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-md bg-[#184f95] px-4 py-2 text-sm font-medium text-white hover:bg-[#123c73]"
        >
          Save (resets to pending review)
        </button>
      </form>
    </div>
  );
}
