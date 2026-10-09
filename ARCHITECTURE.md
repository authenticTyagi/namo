# ARCHITECTURE

_Last updated: 2026-10-10. Update when the stack, data flow, caching or delivery changes._

## Stack
- Next.js **15.5.25 (pinned; do not move to 16 canary)**, React 19, TypeScript, Tailwind v4.
- Neon Postgres via `@neondatabase/serverless` + Drizzle ORM (`src/db/schema.ts`, migrations in `drizzle/`).
- next-intl: locales `hi` (default), `en`, `bn`, `te`, `mr`; fallback bn/te/mr -> en -> hi.
- NextAuth v5 + Google OAuth; `/admin` gated by `ADMIN_EMAILS`.
- Hosting: Vercel. CI: `.github/workflows/ci.yml` (npm install -> lint -> tsc -> build).
- Analytics: `@vercel/analytics`. Ads: AdSense behind consent (`ConsentBanner`, `AdSlot`).

## Layout
```
src/app/[locale]/…   public site (entry, editorial, category, india-in-the-world, search, about…)
src/app/admin/…      English-only admin, own root layout (must wire ThemeInit separately)
src/app/api/         auth, health, pipeline
src/db/schema.ts     tables; src/db/queries/*  all reads/writes
src/middleware.ts    next-intl locale routing (excludes api, admin, _next, static files)
scripts/             seed.ts, seed-comparisons.ts, entries/*.ts (content), pipeline/run-agent.mjs
```

## Data model (core)
categories, tags, entries (+entryTags, sources, entryStats, entryTranslations, entryStatTranslations),
editorials, comparisons (+comparisonPoints, comparisonSources), users/accounts/sessions, comments +
moderationFlags, pipelineRuns/pipelineConfig/sourceSubmissions/trustedSources, feedbackSubmissions.
Status enum drives visibility: only `published` is public; everything starts `pending_review`.
Indexes exist on status, category, related-entry and child-table foreign keys.

## Content pipeline
Draft (agents/scripts) -> DB as `pending_review` -> owner review in `/admin/review` -> `published`.
Editing published content resets it to `pending_review`. No auto-publish path exists or may be added.

## Delivery and performance (honest current state)
| Concern | State |
|---|---|
| Compression | `compress: true` is the Next default (gzip when self-hosted). On Vercel the CDN negotiates Brotli/gzip automatically. No app-level zstd; not configured, not verified on the edge. |
| Caching | Home, list and info pages are SSG. Category and comparison detail pages are SSG + ISR (`revalidate = 3600`, `generateStaticParams` from `getSitemapData`); verified `x-nextjs-cache: HIT`. Admin actions call `revalidatePath("/[locale]", "layout")`, so publish/unpublish shows immediately. **Entry and editorial detail pages are still per-request** because `CommentSection` calls `auth()` (cookies) — see TASKS.md T-1b. |
| Bloom filter | Not used. See "Bloom filter" below. |
| Search | Postgres query over all content types, all-words match, ranked, noindex (`src/db/queries/search.ts`). |
| Images/OG | `next/og` ImageResponse for icons and opengraph. |
| i18n SEO | Canonical + hreflang alternates generated per locale presence. |

## Bloom filter — decision
A Bloom filter answers "definitely not present / maybe present" cheaply. Candidate uses here: rejecting
nonexistent slugs before a DB hit, or de-duplicating drafted slugs. Current data is ~100–200 rows with
indexed lookups, and `existing-slugs` dedupe is exact and cheap. A Bloom filter adds false positives and
complexity for no measurable gain. **Not adopted.** Revisit only if slug-404 traffic measurably loads the DB;
the simpler fix is ISR + `notFound()` caching.

## Known gaps
- Entry/editorial detail pages not cached (T-1b). No rate limiting on comment/feedback/search endpoints (T-3).
- No real-user performance monitoring beyond Vercel Analytics (T-6).
- No automated tests beyond lint/tsc/build (T-5).
