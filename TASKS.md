# TASKS

_Last updated: 2026-10-10. Newest priorities first. Move finished items to PROJECT_LOG.md with a date._

## Now
- [ ] **T-0** Owner review of all `pending_review` items (entries, editorials, comparisons), including the 2026-10-09 corruption and diplomacy lists.

## Next (performance and architecture, from the 2026-10-10 audit)
- [ ] **T-1** Cache public pages: ISR (`revalidate`) or `unstable_cache` on entry/editorial/category/home queries, with `revalidatePath` already present on admin actions. Biggest win: every view currently hits Neon.
- [ ] **T-2** Verify real response encoding in production (`curl -H "Accept-Encoding: br, gzip, zstd" -I`) and record the result in ARCHITECTURE.md. Do not add app-level compression on Vercel.
- [ ] **T-3** Rate limit comment/feedback/search endpoints.
- [ ] **T-4** Cache-Control / security headers (CSP, HSTS, Referrer-Policy) in `next.config.ts`.
- [ ] **T-5** Add tests: source-bar validation, status-reset-on-edit, locale fallback.
- [ ] **T-6** Real-user Core Web Vitals reporting.

## Content backlog (see PROJECT_LOG.md for context)
- [ ] Uncovered shortlisted topics: Namami Gange, metro rail.
- [ ] Locale coverage for bn/te/mr translations.
- [ ] Freshness re-verification of old published entries (detection exists; re-drafting not built).

## Decided: not doing
- Bloom filter (no measurable benefit at this data size; see ARCHITECTURE.md).
- Auto-publishing (RULES.md #9).
- Next.js 16 canary upgrade.
