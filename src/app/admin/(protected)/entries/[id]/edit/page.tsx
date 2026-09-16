import { notFound, redirect } from "next/navigation";
import { db } from "@/db";
import { categories } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { getEntryByIdForAdmin } from "@/db/queries/admin";
import { updateEntry } from "../../actions";

const BODY_SECTION_ROWS = 8;
const TAG_ROWS = 8;
const SOURCE_ROWS = 8;
const STAT_ROWS = 6;

export default async function EditEntryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [data, categoryList] = await Promise.all([
    getEntryByIdForAdmin(id),
    db.select().from(categories).where(eq(categories.isActive, true)).orderBy(asc(categories.sortOrder)),
  ]);
  if (!data) notFound();
  const { entry, sources, tags, stats } = data;

  function toDateInput(d: Date | null) {
    return d ? d.toISOString().slice(0, 10) : "";
  }

  async function update(formData: FormData) {
    "use server";

    const bodySectionsHi = [];
    const bodySectionsEn = [];
    for (let i = 0; i < BODY_SECTION_ROWS; i++) {
      const headingHi = String(formData.get(`section_${i}_headingHi`) ?? "").trim();
      const bodyHi = String(formData.get(`section_${i}_bodyHi`) ?? "").trim();
      const headingEn = String(formData.get(`section_${i}_headingEn`) ?? "").trim();
      const bodyEn = String(formData.get(`section_${i}_bodyEn`) ?? "").trim();
      if (headingHi && bodyHi) bodySectionsHi.push({ heading: headingHi, body: bodyHi });
      if (headingEn && bodyEn) bodySectionsEn.push({ heading: headingEn, body: bodyEn });
    }

    const tagsInput = [];
    for (let i = 0; i < TAG_ROWS; i++) {
      const slug = String(formData.get(`tag_${i}_slug`) ?? "").trim();
      if (!slug) continue;
      tagsInput.push({
        slug,
        labelHi: String(formData.get(`tag_${i}_labelHi`) ?? "").trim() || slug,
        labelEn: String(formData.get(`tag_${i}_labelEn`) ?? "").trim() || slug,
      });
    }

    const sourcesInput = [];
    for (let i = 0; i < SOURCE_ROWS; i++) {
      const url = String(formData.get(`source_${i}_url`) ?? "").trim();
      if (!url) continue;
      sourcesInput.push({
        url,
        publisher: String(formData.get(`source_${i}_publisher`) ?? "").trim(),
        title: String(formData.get(`source_${i}_title`) ?? "").trim(),
        credibilityTier: String(formData.get(`source_${i}_tier`) ?? "official_primary") as
          | "official_primary"
          | "reputable_media"
          | "secondary",
      });
    }

    const statsInput = [];
    for (let i = 0; i < STAT_ROWS; i++) {
      const metricLabelEn = String(formData.get(`stat_${i}_metricLabelEn`) ?? "").trim();
      if (!metricLabelEn) continue;
      statsInput.push({
        statKey: String(formData.get(`stat_${i}_statKey`) ?? "").trim(),
        metricLabelHi: String(formData.get(`stat_${i}_metricLabelHi`) ?? "").trim(),
        metricLabelEn,
        beforeLabelHi: String(formData.get(`stat_${i}_beforeLabelHi`) ?? "").trim(),
        beforeLabelEn: String(formData.get(`stat_${i}_beforeLabelEn`) ?? "").trim(),
        beforeValueHi: String(formData.get(`stat_${i}_beforeValueHi`) ?? "").trim(),
        beforeValueEn: String(formData.get(`stat_${i}_beforeValueEn`) ?? "").trim(),
        beforeValueNumeric: String(formData.get(`stat_${i}_beforeValueNumeric`) ?? "").trim(),
        afterLabelHi: String(formData.get(`stat_${i}_afterLabelHi`) ?? "").trim(),
        afterLabelEn: String(formData.get(`stat_${i}_afterLabelEn`) ?? "").trim(),
        afterValueHi: String(formData.get(`stat_${i}_afterValueHi`) ?? "").trim(),
        afterValueEn: String(formData.get(`stat_${i}_afterValueEn`) ?? "").trim(),
        afterValueNumeric: String(formData.get(`stat_${i}_afterValueNumeric`) ?? "").trim(),
        extraLabelHi: String(formData.get(`stat_${i}_extraLabelHi`) ?? "").trim(),
        extraLabelEn: String(formData.get(`stat_${i}_extraLabelEn`) ?? "").trim(),
        extraValueHi: String(formData.get(`stat_${i}_extraValueHi`) ?? "").trim(),
        extraValueEn: String(formData.get(`stat_${i}_extraValueEn`) ?? "").trim(),
        extraValueNumeric: String(formData.get(`stat_${i}_extraValueNumeric`) ?? "").trim(),
      });
    }

    await updateEntry(id, {
      categoryId: String(formData.get("categoryId") ?? ""),
      titleHi: String(formData.get("titleHi") ?? "").trim(),
      titleEn: String(formData.get("titleEn") ?? "").trim(),
      summaryHi: String(formData.get("summaryHi") ?? "").trim(),
      summaryEn: String(formData.get("summaryEn") ?? "").trim(),
      quickTakeHi: String(formData.get("quickTakeHi") ?? "").trim(),
      quickTakeEn: String(formData.get("quickTakeEn") ?? "").trim(),
      bodySectionsHi,
      bodySectionsEn,
      impactType: String(formData.get("impactType") ?? "tangible") as
        | "tangible"
        | "intangible"
        | "mixed",
      timelineStartDate: String(formData.get("timelineStartDate") ?? ""),
      timelineEndDate: String(formData.get("timelineEndDate") ?? ""),
      tagsInput,
      sourcesInput,
      statsInput,
    });
    redirect("/admin/entries");
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900";
  const smallInputClass =
    "w-full rounded-md border border-neutral-300 px-2 py-1.5 text-xs dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold">Edit entry</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Saving resets this to <strong>pending review</strong>, even if it&apos;s
        currently published, and refreshes &quot;last verified.&quot; Blank
        body-section/tag/source/stat rows are dropped.
      </p>

      <form action={update} className="mt-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select name="categoryId" required defaultValue={entry.categoryId} className={inputClass}>
              {categoryList.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nameEn}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Impact type</label>
            <select name="impactType" required defaultValue={entry.impactType} className={inputClass}>
              <option value="tangible">Tangible</option>
              <option value="intangible">Intangible</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Title (Hindi)</label>
            <input name="titleHi" required defaultValue={entry.titleHi} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium">Title (English)</label>
            <input name="titleEn" required defaultValue={entry.titleEn} className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Summary (Hindi)</label>
            <textarea name="summaryHi" required rows={3} defaultValue={entry.summaryHi} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium">Summary (English)</label>
            <textarea name="summaryEn" required rows={3} defaultValue={entry.summaryEn} className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Quick take (Hindi)</label>
            <textarea name="quickTakeHi" rows={2} defaultValue={entry.quickTakeHi ?? ""} className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium">Quick take (English)</label>
            <textarea name="quickTakeEn" rows={2} defaultValue={entry.quickTakeEn ?? ""} className={inputClass} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Timeline start</label>
            <input
              type="date"
              name="timelineStartDate"
              defaultValue={toDateInput(entry.timelineStartDate)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Timeline end</label>
            <input
              type="date"
              name="timelineEndDate"
              defaultValue={toDateInput(entry.timelineEndDate)}
              className={inputClass}
            />
          </div>
        </div>

        <fieldset className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <legend className="px-1 text-sm font-semibold">Body sections</legend>
          <div className="mt-3 space-y-4">
            {Array.from({ length: BODY_SECTION_ROWS }).map((_, i) => {
              const hi = entry.bodySectionsHi?.[i];
              const en = entry.bodySectionsEn?.[i];
              return (
                <div key={i} className="grid gap-2 sm:grid-cols-2 border-t border-neutral-100 pt-3 first:border-t-0 first:pt-0 dark:border-neutral-900">
                  <div className="space-y-1">
                    <input
                      name={`section_${i}_headingHi`}
                      placeholder="Heading (Hindi)"
                      defaultValue={hi?.heading ?? ""}
                      className={smallInputClass}
                    />
                    <textarea
                      name={`section_${i}_bodyHi`}
                      placeholder="Body (Hindi)"
                      rows={3}
                      defaultValue={hi?.body ?? ""}
                      className={smallInputClass}
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      name={`section_${i}_headingEn`}
                      placeholder="Heading (English)"
                      defaultValue={en?.heading ?? ""}
                      className={smallInputClass}
                    />
                    <textarea
                      name={`section_${i}_bodyEn`}
                      placeholder="Body (English)"
                      rows={3}
                      defaultValue={en?.body ?? ""}
                      className={smallInputClass}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <legend className="px-1 text-sm font-semibold">Tags</legend>
          <div className="mt-3 space-y-2">
            {Array.from({ length: TAG_ROWS }).map((_, i) => {
              const t = tags[i];
              return (
                <div key={i} className="grid gap-2 sm:grid-cols-3">
                  <input name={`tag_${i}_slug`} placeholder="slug" defaultValue={t?.slug ?? ""} className={smallInputClass} />
                  <input
                    name={`tag_${i}_labelHi`}
                    placeholder="Label (Hindi)"
                    defaultValue={t?.labelHi ?? ""}
                    className={smallInputClass}
                  />
                  <input
                    name={`tag_${i}_labelEn`}
                    placeholder="Label (English)"
                    defaultValue={t?.labelEn ?? ""}
                    className={smallInputClass}
                  />
                </div>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <legend className="px-1 text-sm font-semibold">Sources (at least 1)</legend>
          <div className="mt-3 space-y-2">
            {Array.from({ length: SOURCE_ROWS }).map((_, i) => {
              const s = sources[i];
              return (
                <div key={i} className="grid gap-2 sm:grid-cols-4">
                  <input name={`source_${i}_url`} placeholder="URL" defaultValue={s?.url ?? ""} className={smallInputClass} />
                  <input
                    name={`source_${i}_publisher`}
                    placeholder="Publisher"
                    defaultValue={s?.publisher ?? ""}
                    className={smallInputClass}
                  />
                  <input
                    name={`source_${i}_title`}
                    placeholder="Title (optional)"
                    defaultValue={s?.title ?? ""}
                    className={smallInputClass}
                  />
                  <select
                    name={`source_${i}_tier`}
                    defaultValue={s?.credibilityTier ?? "official_primary"}
                    className={smallInputClass}
                  >
                    <option value="official_primary">Official / primary</option>
                    <option value="reputable_media">Reputable media</option>
                    <option value="secondary">Secondary</option>
                  </select>
                </div>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <legend className="px-1 text-sm font-semibold">Stats (before/after comparisons)</legend>
          <div className="mt-3 space-y-5">
            {Array.from({ length: STAT_ROWS }).map((_, i) => {
              const s = stats[i];
              return (
                <div key={i} className="space-y-2 border-t border-neutral-100 pt-3 first:border-t-0 first:pt-0 dark:border-neutral-900">
                  <div className="grid gap-2 sm:grid-cols-3">
                    <input name={`stat_${i}_statKey`} placeholder="stat key" defaultValue={s?.statKey ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_metricLabelHi`} placeholder="Metric label (Hindi)" defaultValue={s?.metricLabelHi ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_metricLabelEn`} placeholder="Metric label (English)" defaultValue={s?.metricLabelEn ?? ""} className={smallInputClass} />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-6">
                    <input name={`stat_${i}_beforeLabelHi`} placeholder="Before label (Hi)" defaultValue={s?.beforeLabelHi ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_beforeLabelEn`} placeholder="Before label (En)" defaultValue={s?.beforeLabelEn ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_beforeValueHi`} placeholder="Before value (Hi)" defaultValue={s?.beforeValueHi ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_beforeValueEn`} placeholder="Before value (En)" defaultValue={s?.beforeValueEn ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_beforeValueNumeric`} type="number" step="any" placeholder="Before # (opt.)" defaultValue={s?.beforeValueNumeric ?? ""} className={smallInputClass} />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-5">
                    <input name={`stat_${i}_afterLabelHi`} placeholder="After label (Hi)" defaultValue={s?.afterLabelHi ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_afterLabelEn`} placeholder="After label (En)" defaultValue={s?.afterLabelEn ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_afterValueHi`} placeholder="After value (Hi)" defaultValue={s?.afterValueHi ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_afterValueEn`} placeholder="After value (En)" defaultValue={s?.afterValueEn ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_afterValueNumeric`} type="number" step="any" placeholder="After # (opt.)" defaultValue={s?.afterValueNumeric ?? ""} className={smallInputClass} />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-5">
                    <input name={`stat_${i}_extraLabelHi`} placeholder="Extra label (Hi, opt.)" defaultValue={s?.extraLabelHi ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_extraLabelEn`} placeholder="Extra label (En, opt.)" defaultValue={s?.extraLabelEn ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_extraValueHi`} placeholder="Extra value (Hi, opt.)" defaultValue={s?.extraValueHi ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_extraValueEn`} placeholder="Extra value (En, opt.)" defaultValue={s?.extraValueEn ?? ""} className={smallInputClass} />
                    <input name={`stat_${i}_extraValueNumeric`} type="number" step="any" placeholder="Extra # (opt.)" defaultValue={s?.extraValueNumeric ?? ""} className={smallInputClass} />
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>

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
