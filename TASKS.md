# TASKS

_Last updated: 2026-10-10. Newest priorities first. Move finished items to PROJECT_LOG.md with a date._

## Now
- [ ] **T-0** Owner review of all `pending_review` items (entries, editorials, comparisons), including the 2026-10-09 corruption and diplomacy lists and the 9 new India-vs-the-World comparisons (2026-10-18).

## Next (performance and architecture, from the 2026-10-10 audit)
- [x] **T-1** Category and comparison detail pages: SSG + ISR (2026-10-10).
- [x] **T-1b** Done 2026-10-18 (`b659023`, live): entry and editorial pages are SSG + 1h ISR, verified `PRERENDER` then `HIT` on Vercel; comments/session load client-side from `/api/comments`. Owner ran the signed-in checks (post, report, sign-in round trip) after deploy and reported "Done" with no problems (their summary, not a line-by-line record).
- [x] **T-2** Verified 2026-10-18: production serves Brotli (`Content-Encoding: br`); recorded in ARCHITECTURE.md. Do not add app-level compression on Vercel.
- [x] **T-3** Rate limit comment/feedback/search endpoints.
- [x] **T-4** Cache-Control / security headers (CSP, HSTS, Referrer-Policy) in `next.config.ts`.
- [x] **T-5** Tests: `npm test` (Node built-in runner via tsx, no new dependency; runs in CI). Done 2026-10-18, 36 tests: sourcing bar + confidence, locale fallback, pipeline auth, seed change-detection/reset rule (`src/lib/review-status.ts`, shared by both seed scripts), and source-level contract tests that the admin edit actions still reset to `pending_review` and approve/reject still guard on it. **Gap, not fixed:** `seed-comparisons.ts` only compares a comparison's text fields, so a seed run that changes only a country value or a source would not reset a published comparison to review. Admin edit actions need a DB to test for real (contract tests only check the line is present).
- [ ] **T-6** Real-user Core Web Vitals reporting.

## Content backlog (see PROJECT_LOG.md for context)
- [ ] Uncovered shortlisted topics: Namami Gange, metro rail.
- [ ] India vs the World (26 comparisons, 9 pending review as of 2026-10-18): remaining ideas are adult literacy, physicians/beds per 1,000, exports % GDP, safely managed drinking water. Pause adding until the 9 are reviewed (RULES #11). Agent `comparisons` mode built 2026-10-18 (manual workflow only; needs the repo secrets to run).
- [ ] Locale coverage for bn/te/mr translations.
- [ ] Freshness re-verification of old published entries (detection exists; re-drafting not built).

## Decided: not doing
- Bloom filter (no measurable benefit at this data size; see ARCHITECTURE.md).
- Auto-publishing (RULES.md #9).
- Next.js 16 canary upgrade.

## Growth ideas (agreed 2026-10-13, not started unless ticked)
- [x] Read-aloud via browser speech synthesis (all 5 locales)
- [x] WhatsApp share always visible
- [ ] Weekly email/WhatsApp digest of newly approved entries (needs a mail provider + sign-up form + consent copy)
- [ ] "Verify this claim" search landing page
- [ ] Topic hub pages with FAQ schema (JSON-LD)
- [ ] Embeddable comparison charts with credit link
- [ ] Printable fact-sheet PDFs
- [ ] Short-video series (one sourced fact each) linking back
- [ ] Pre-generated TTS audio at approval time (only if read-aloud is used)
- [ ] Deepen bn/te/mr translations
