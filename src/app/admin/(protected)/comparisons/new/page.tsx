import { redirect } from "next/navigation";
import { db } from "@/db";
import { categories } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { getAllEntriesForAdmin } from "@/db/queries/admin";
import { createComparison } from "../actions";

const COUNTRY_ROWS = 6;
const SOURCE_ROWS = 4;

export default async function NewComparisonPage() {
  const [categoryList, allEntries] = await Promise.all([
    db.select().from(categories).where(eq(categories.isActive, true)).orderBy(asc(categories.sortOrder)),
    getAllEntriesForAdmin(),
  ]);
  const publishedEntries = allEntries.filter((e) => e.status === "published");

  async function create(formData: FormData) {
    "use server";

    const countries = [];
    for (let i = 0; i < COUNTRY_ROWS; i++) {
      const nameEn = String(formData.get(`country_${i}_nameEn`) ?? "").trim();
      if (!nameEn) continue;
      countries.push({
        nameHi: String(formData.get(`country_${i}_nameHi`) ?? "").trim() || nameEn,
        nameEn,
        valueHi: String(formData.get(`country_${i}_valueHi`) ?? "").trim(),
        valueEn: String(formData.get(`country_${i}_valueEn`) ?? "").trim(),
        valueNumeric: String(formData.get(`country_${i}_valueNumeric`) ?? "").trim(),
        isIndia: formData.get(`country_${i}_isIndia`) === "on",
      });
    }

    const sources = [];
    for (let i = 0; i < SOURCE_ROWS; i++) {
      const url = String(formData.get(`source_${i}_url`) ?? "").trim();
      if (!url) continue;
      sources.push({
        url,
        publisher: String(formData.get(`source_${i}_publisher`) ?? "").trim(),
        title: String(formData.get(`source_${i}_title`) ?? "").trim(),
        credibilityTier: String(formData.get(`source_${i}_tier`) ?? "official_primary") as
          | "official_primary"
          | "reputable_media"
          | "secondary",
      });
    }

    await createComparison({
      categoryId: String(formData.get("categoryId") ?? ""),
      relatedEntryId: String(formData.get("relatedEntryId") ?? "") || null,
      titleHi: String(formData.get("titleHi") ?? "").trim(),
      titleEn: String(formData.get("titleEn") ?? "").trim(),
      metricLabelHi: String(formData.get("metricLabelHi") ?? "").trim(),
      metricLabelEn: String(formData.get("metricLabelEn") ?? "").trim(),
      unitHi: String(formData.get("unitHi") ?? "").trim(),
      unitEn: String(formData.get("unitEn") ?? "").trim(),
      narrativeHi: String(formData.get("narrativeHi") ?? "").trim(),
      narrativeEn: String(formData.get("narrativeEn") ?? "").trim(),
      countries,
      sources,
    });
    redirect("/admin/comparisons");
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold">New comparison</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Lands as pending review. Cite neutral international sources (World
        Bank, IMF, UN agencies) — not Indian government data, that&apos;s the
        whole point of this content type.
      </p>

      <form action={create} className="mt-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select name="categoryId" required className={inputClass}>
              <option value="">Select a category…</option>
              {categoryList.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nameEn}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Related entry (optional)</label>
            <select name="relatedEntryId" className={inputClass}>
              <option value="">None</option>
              {publishedEntries.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.titleEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Title (Hindi)</label>
            <input name="titleHi" required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium">Title (English)</label>
            <input name="titleEn" required className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Metric label (Hindi)</label>
            <input name="metricLabelHi" required placeholder="e.g. नवीकरणीय ऊर्जा क्षमता" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium">Metric label (English)</label>
            <input name="metricLabelEn" required placeholder="e.g. Renewable energy capacity" className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Unit (Hindi, optional)</label>
            <input name="unitHi" placeholder="e.g. %" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium">Unit (English, optional)</label>
            <input name="unitEn" placeholder="e.g. %" className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Narrative (Hindi)</label>
            <textarea name="narrativeHi" required rows={8} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium">Narrative (English)</label>
            <textarea name="narrativeEn" required rows={8} className={inputClass} />
          </div>
        </div>

        <fieldset className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <legend className="px-1 text-sm font-semibold">Countries (at least 2, one marked India)</legend>
          <div className="mt-3 space-y-4">
            {Array.from({ length: COUNTRY_ROWS }).map((_, i) => (
              <div key={i} className="grid gap-2 sm:grid-cols-6 sm:items-center">
                <input name={`country_${i}_nameEn`} placeholder="Country (English)" className={inputClass} />
                <input name={`country_${i}_nameHi`} placeholder="Country (Hindi)" className={inputClass} />
                <input name={`country_${i}_valueEn`} placeholder="Value display (English)" className={inputClass} />
                <input name={`country_${i}_valueHi`} placeholder="Value display (Hindi)" className={inputClass} />
                <input
                  name={`country_${i}_valueNumeric`}
                  type="number"
                  step="any"
                  placeholder="Numeric value"
                  className={inputClass}
                />
                <label className="flex items-center gap-1.5 text-xs">
                  <input type="checkbox" name={`country_${i}_isIndia`} />
                  India
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <legend className="px-1 text-sm font-semibold">Sources (at least 1)</legend>
          <div className="mt-3 space-y-4">
            {Array.from({ length: SOURCE_ROWS }).map((_, i) => (
              <div key={i} className="grid gap-2 sm:grid-cols-4">
                <input name={`source_${i}_url`} placeholder="URL" className={inputClass} />
                <input name={`source_${i}_publisher`} placeholder="Publisher" className={inputClass} />
                <input name={`source_${i}_title`} placeholder="Title (optional)" className={inputClass} />
                <select name={`source_${i}_tier`} defaultValue="official_primary" className={inputClass}>
                  <option value="official_primary">Official / primary</option>
                  <option value="reputable_media">Reputable media</option>
                  <option value="secondary">Secondary</option>
                </select>
              </div>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="rounded-md bg-[#184f95] px-4 py-2 text-sm font-medium text-white hover:bg-[#123c73]"
        >
          Submit for review
        </button>
      </form>
    </div>
  );
}
