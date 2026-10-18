# TASKS

_Last updated: 2026-10-10. Newest priorities first. Move finished items to PROJECT_LOG.md with a date._

## Now
- [ ] **T-0** Owner review of all `pending_review` items (entries, editorials, comparisons), including the 2026-10-09 corruption and diplomacy lists and the 9 new India-vs-the-World comparisons (2026-10-18).

## Next (performance and architecture, from the 2026-10-10 audit)
- [x] **T-1** Category and comparison detail pages: SSG + ISR (2026-10-10).
- [ ] **T-1b** Entry and editorial detail pages (the highest-traffic pages) are still per-request because `CommentSection` reads the session. Fix: render comments client-side (fetch session + comments from an API route) so the page itself is cacheable. Touches auth/comments UX, so needs owner go-ahead.
- [ ] **T-2** Verify real response encoding in production (`curl -H "Accept-Encoding: br, gzip, zstd" -I`) and record the result in ARCHITECTURE.md. Do not add app-level compression on Vercel. Local `next start` returns gzip (no Brotli).
- [x] **T-3** Rate limit comment/feedback/search endpoints.
- [x] **T-4** Cache-Control / security headers (CSP, HSTS, Referrer-Policy) in `next.config.ts`.
- [ ] **T-5** Add tests: source-bar validation, status-reset-on-edit, locale fallback.
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
