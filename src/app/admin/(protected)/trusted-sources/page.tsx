import Link from "next/link";
import { getTrustedSources } from "@/db/queries/admin";
import { createTrustedSource } from "./actions";
import { DeleteTrustedSourceButton } from "./DeleteTrustedSourceButton";

const TIER_STYLES: Record<string, string> = {
  official_primary: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  reputable_media: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  secondary: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400",
};

const PLATFORM_LABELS: Record<string, string> = {
  website: "Website",
  twitter_x: "X / Twitter",
  youtube: "YouTube",
  instagram: "Instagram",
  facebook: "Facebook",
  other: "Other",
};

export default async function AdminTrustedSourcesPage() {
  const sources = await getTrustedSources();

  return (
    <div>
      <h1 className="text-2xl font-bold">Trusted sources</h1>
      <p className="mt-1 text-sm text-neutral-500">
        A standing whitelist of handles and channels the site treats as
        pre-vetted — the living, editable successor to the static{" "}
        <code className="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
          OFFICIAL_SOURCES.md
        </code>{" "}
        list. Individual claims still cite a specific URL, but research
        agents check that URL&apos;s publisher against this list to confirm
        its credibility tier. This is different from{" "}
        <Link href="/admin/sources" className="underline">
          Sources
        </Link>
        , which is a one-off &quot;here&apos;s a URL for this entry&quot; inbox.
      </p>

      <form
        action={createTrustedSource}
        className="mt-6 max-w-xl space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
      >
        <div>
          <label htmlFor="label" className="block text-xs font-medium text-neutral-500">
            Label — display name
          </label>
          <input
            id="label"
            name="label"
            type="text"
            required
            placeholder="PIB India"
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <div>
          <label htmlFor="handleOrUrl" className="block text-xs font-medium text-neutral-500">
            Handle or URL
          </label>
          <input
            id="handleOrUrl"
            name="handleOrUrl"
            type="text"
            required
            placeholder="https://x.com/PIB_India or https://youtube.com/@PIB"
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="platform" className="block text-xs font-medium text-neutral-500">
              Platform
            </label>
            <select
              id="platform"
              name="platform"
              required
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              {Object.entries(PLATFORM_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="credibilityTier" className="block text-xs font-medium text-neutral-500">
              Credibility tier
            </label>
            <select
              id="credibilityTier"
              name="credibilityTier"
              required
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              <option value="official_primary">Official / primary</option>
              <option value="reputable_media">Reputable media</option>
              <option value="secondary">Secondary</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input id="isVideoSource" name="isVideoSource" type="checkbox" className="rounded" />
          <label htmlFor="isVideoSource" className="text-sm text-neutral-600 dark:text-neutral-400">
            Video source — citations from this handle need a timestamp
          </label>
        </div>
        <div>
          <label htmlFor="notes" className="block text-xs font-medium text-neutral-500">
            Notes (optional) — why this is trusted, and at what tier
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
        >
          Add trusted source
        </button>
      </form>

      <div className="mt-8 space-y-3">
        {sources.length === 0 && (
          <p className="text-sm text-neutral-400">No trusted sources added yet.</p>
        )}
        {sources.map((s) => (
          <div
            key={s.id}
            className="rounded-lg border border-neutral-200 p-3 text-sm dark:border-neutral-800"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-medium">{s.label}</span>{" "}
                <span className="text-xs text-neutral-400">
                  {PLATFORM_LABELS[s.platform] ?? s.platform}
                  {s.isVideoSource && " · video"}
                </span>
              </div>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${TIER_STYLES[s.credibilityTier] ?? ""}`}
              >
                {s.credibilityTier}
              </span>
            </div>
            <a
              href={s.handleOrUrl.startsWith("http") ? s.handleOrUrl : `https://${s.handleOrUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block break-all text-xs text-neutral-500 underline"
            >
              {s.handleOrUrl}
            </a>
            {s.notes && <p className="mt-1 text-neutral-600 dark:text-neutral-400">{s.notes}</p>}
            <DeleteTrustedSourceButton id={s.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
