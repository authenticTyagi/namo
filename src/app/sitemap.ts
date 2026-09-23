import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { getSitemapData } from "@/db/queries/sitemap";

const LOCALES = routing.locales;

// Every locale-prefixed variant of a path, as alternates.languages — so a
// search engine sees all language versions of the same URL as one listing
// instead of unrelated ones, and can offer the right one per searcher's
// language. hi/en always have their own real content; bn/te/mr only get an
// alternate when `extraLocales` says a real translation actually exists —
// otherwise that locale is served as English-fallback text, and listing it
// here would tell search engines it's a distinct page when it's actually
// duplicate content (see SitemapData's doc comment).
function localizedUrls(
  path: string,
  extraLocales: string[] = [],
): { url: string; hreflang: Record<string, string> } {
  const includedLocales = LOCALES.filter(
    (l) => l === "hi" || l === "en" || extraLocales.includes(l),
  );
  const hreflang: Record<string, string> = {};
  for (const locale of includedLocales) {
    hreflang[locale] = `${SITE_URL}/${locale}${path}`;
  }
  return { url: hreflang[routing.defaultLocale], hreflang };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getSitemapData();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // These pages' UI chrome is genuinely hand-translated into bn/te/mr
  // (messages/{bn,te,mr}.json) — real distinct content per locale.
  const staticPaths: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "daily" },
    { path: "/overview", priority: 0.9, changeFrequency: "daily" },
    { path: "/categories", priority: 0.8, changeFrequency: "weekly" },
    { path: "/editorials", priority: 0.7, changeFrequency: "daily" },
    { path: "/india-in-the-world", priority: 0.7, changeFrequency: "weekly" },
  ];

  // These are hi/en-only by design (see resolveStaticPageContent) — bn/te/mr
  // serve English-fallback prose, so they get no separate hreflang alternate.
  const hiEnOnlyStaticPaths: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "/about", priority: 0.3, changeFrequency: "monthly" },
    { path: "/methodology", priority: 0.4, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.1, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.1, changeFrequency: "monthly" },
  ];

  for (const { path, priority, changeFrequency } of hiEnOnlyStaticPaths) {
    const { url, hreflang } = localizedUrls(path, []);
    entries.push({ url, lastModified: now, changeFrequency, priority, alternates: { languages: hreflang } });
  }

  for (const { path, priority, changeFrequency } of staticPaths) {
    const { url, hreflang } = localizedUrls(path);
    entries.push({
      url,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages: hreflang },
    });
  }

  for (const category of data.categorySlugs) {
    const { url, hreflang } = localizedUrls(`/category/${category.slug}`, category.extraLocales);
    entries.push({ url, lastModified: now, changeFrequency: "weekly", priority: 0.6, alternates: { languages: hreflang } });
  }

  for (const entry of data.entrySlugs) {
    const { url, hreflang } = localizedUrls(`/entry/${entry.slug}`, entry.extraLocales);
    entries.push({
      url,
      lastModified: entry.lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: hreflang },
    });
  }

  for (const editorial of data.editorialSlugs) {
    // No bn/te/mr translation table exists for editorials — always hi/en only.
    const { url, hreflang } = localizedUrls(`/editorial/${editorial.slug}`, []);
    entries.push({
      url,
      lastModified: editorial.lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: hreflang },
    });
  }

  for (const comparison of data.comparisonSlugs) {
    // No bn/te/mr translation table exists for comparisons — always hi/en only.
    const { url, hreflang } = localizedUrls(`/india-in-the-world/${comparison.slug}`, []);
    entries.push({
      url,
      lastModified: comparison.lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: hreflang },
    });
  }

  return entries;
}
