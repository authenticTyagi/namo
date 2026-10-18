import { getPendingTranslationDrafts } from "@/db/queries/admin";
import { LOCALE_NAMES, type Locale } from "@/lib/localized";
import { TranslationActions } from "./TranslationActions";

export default async function AdminTranslationsPage() {
  const drafts = await getPendingTranslationDrafts();

  return (
    <div>
      <h1 className="text-2xl font-bold">Translation review</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Bengali, Telugu and Marathi drafts of published entries. Nothing here is visible to readers until you
        approve it; approving copies it into the live translation tables and the page updates within the hour.
        The drafts are machine-written, so please have a native reader check them before approving.
      </p>

      {drafts.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-400">No translation drafts waiting.</p>
      ) : (
        <div className="mt-6 space-y-8">
          {drafts.map((d) => (
            <article key={d.id} className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    {LOCALE_NAMES[d.locale as Locale] ?? d.locale} · {d.entrySlug}
                  </div>
                  {d.note && <div className="mt-1 text-xs text-amber-600 dark:text-amber-400">{d.note}</div>}
                </div>
                <TranslationActions draftId={d.id} />
              </div>

              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-1 text-xs font-medium text-neutral-400">English</div>
                  <h2 className="font-semibold">{d.titleEn}</h2>
                  <p className="mt-2 text-sm">{d.summaryEn}</p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{d.quickTakeEn}</p>
                </div>
                <div lang={d.locale}>
                  <div className="mb-1 text-xs font-medium text-neutral-400">{LOCALE_NAMES[d.locale as Locale] ?? d.locale}</div>
                  <h2 className="font-semibold">{d.title}</h2>
                  <p className="mt-2 text-sm">{d.summary}</p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{d.quickTake}</p>
                </div>
              </div>

              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium">
                  All {d.bodySections.length} sections and {d.stats.length} stats
                </summary>
                <div className="mt-3 space-y-5">
                  {d.bodySections.map((s, i) => (
                    <div key={i} className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-semibold">{d.bodySectionsEn?.[i]?.heading}</h3>
                        <p className="mt-1 whitespace-pre-line text-sm text-neutral-700 dark:text-neutral-300">{d.bodySectionsEn?.[i]?.body}</p>
                      </div>
                      <div lang={d.locale}>
                        <h3 className="text-sm font-semibold">{s.heading}</h3>
                        <p className="mt-1 whitespace-pre-line text-sm text-neutral-700 dark:text-neutral-300">{s.body}</p>
                      </div>
                    </div>
                  ))}
                  <ul className="space-y-1 text-sm" lang={d.locale}>
                    {d.stats.map((s) => (
                      <li key={s.statKey}>
                        <span className="font-medium">{s.metricLabel}</span>: {s.beforeLabel} {s.beforeValue} → {s.afterLabel}{" "}
                        {s.afterValue}
                        {s.extraLabel ? ` · ${s.extraLabel} ${s.extraValue}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
