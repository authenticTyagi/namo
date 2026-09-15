import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { getSitemapData } from "@/db/queries/sitemap";

const LOCALES = routing.locales;

// Every locale-prefixed variant of a path, as alternates.languages — so a
// search engine sees all 5 language versions of the same URL as one
// listing instead of 5 unrelated ones, and can offer the right one per
// searcher's language.
function localizedUrls(path: string): { url: string; hreflang: Record<string, string> } {
  const hreflang: Record<string, string> = {};
  for (const locale of LOCALES) {
    hreflang[locale] = `${SITE_URL}/${locale}${path}`;
  }
  return { url: hreflang[routing.defaultLocale], hreflang };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getSitemapData();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  const staticPaths: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "daily" },
    { path: "/overview", priority: 0.9, changeFrequency: "daily" },
    { path: "/categories", priority: 0.8, changeFrequency: "weekly" },
    { path: "/editorials", priority: 0.7, changeFrequency: "daily" },
    { path: "/india-in-the-world", priority: 0.7, changeFrequency: "weekly" },
    { path: "/about", priority: 0.3, changeFrequency: "monthly" },
    { path: "/methodology", priority: 0.4, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.1, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.1, changeFrequency: "monthly" },
  ];

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

  for (const slug of data.categorySlugs) {
    const { url, hreflang } = localizedUrls(`/category/${slug}`);
    entries.push({ url, lastModified: now, changeFrequency: "weekly", priority: 0.6, alternates: { languages: hreflang } });
  }

  for (const entry of data.entrySlugs) {
    const { url, hreflang } = localizedUrls(`/entry/${entry.slug}`);
    entries.push({
      url,
      lastModified: entry.lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: hreflang },
    });
  }

  for (const editorial of data.editorialSlugs) {
    const { url, hreflang } = localizedUrls(`/editorial/${editorial.slug}`);
    entries.push({
      url,
      lastModified: editorial.lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: hreflang },
    });
  }

  for (const comparison of data.comparisonSlugs) {
    const { url, hreflang } = localizedUrls(`/india-in-the-world/${comparison.slug}`);
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
