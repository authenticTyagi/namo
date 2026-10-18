# TASKS

_Last updated: 2026-10-10. Newest priorities first. Move finished items to PROJECT_LOG.md with a date._

## Now
- [ ] **T-0** Owner: (1) open /admin/translations and, with a native reader, approve or reject the 18 bn/te/mr drafts of 6 entries; (2) in Vercel, enable Speed Insights for the project (T-6); (3) watch a few reels from `scripts/video/out/` and post from `posting-plan-*.csv`. (4) review the new PLFS and exam-integrity (paper-leak law) entries and editorials in the admin queue. Everything else is shipped (2026-10-18).

## Next (performance and architecture, from the 2026-10-10 audit)
- [x] **T-1** Category and comparison detail pages: SSG + ISR (2026-10-10).
- [x] **T-1b** Done 2026-10-18 (`b659023`, live): entry and editorial pages are SSG + 1h ISR, verified `PRERENDER` then `HIT` on Vercel; comments/session load client-side from `/api/comments`. Owner ran the signed-in checks (post, report, sign-in round trip) after deploy and reported "Done" with no problems (their summary, not a line-by-line record).
- [x] **T-2** Verified 2026-10-18: production serves Brotli (`Content-Encoding: br`); recorded in ARCHITECTURE.md. Do not add app-level compression on Vercel.
- [x] **T-3** Rate limit comment/feedback/search endpoints.
- [x] **T-4** Cache-Control / security headers (CSP, HSTS, Referrer-Policy) in `next.config.ts`.
- [x] **T-5** Tests: `npm test` (Node built-in runner via tsx, no new dependency; runs in CI). Done 2026-10-18, 36 tests: sourcing bar + confidence, locale fallback, pipeline auth, seed change-detection/reset rule (`src/lib/review-status.ts`, shared by both seed scripts), and source-level contract tests that the admin edit actions still reset to `pending_review` and approve/reject still guard on it. **Gap, not fixed:** `seed-comparisons.ts` only compares a comparison's text fields, so a seed run that changes only a country value or a source would not reset a published comparison to review. Admin edit actions need a DB to test for real (contract tests only check the line is present).
- [x] **T-6** Done 2026-10-18: `<SpeedInsights />` added (`@vercel/speed-insights@2.0.0`). **Owner step:** enable Speed Insights in the Vercel project, then read real-user LCP/INP/CLS there after a few days of traffic.

## Content backlog (see PROJECT_LOG.md for context)
- [x] The 2026-10-01 shortlist is exhausted: metro rail and Namami Gange (both published) were the last two, both 2026-10-18. Follow-up for Namami Gange: if the Lok Sabha reply or a PIB release and the CAG Uttarakhand report can be reached, replace the press-report sources with them and raise confidence.
- [ ] **Fresh shortlist (2026-10-18), aimed at thin categories** (coverage now: economy 27, foreign 10, governance 9, environment 9, education 9, space 7, then 5 each agriculture/welfare/defence/prices, 4 each health/women-child, sports 2). Search-checked only; nothing drafted. Ranked:
  1. ~~**TB elimination** (health)~~ **Drafted 2026-10-18**, pending review (see T-0). Follow-up: treatment success, drug-resistant TB, funding, nutrition support and the national 2025 target were not read; WHO India profile not opened. Original note: WHO Global TB Report 2025 via secondary coverage: incidence 237 to 187 per lakh (2015 to 2024), treatment coverage 53% to ~92%, mortality 28 to 21. Neutral body, but modelled estimates and 2015 baselines differ between reports; open the WHO report itself.
  2. **MGNREGA replaced by VB-G RAM G** (welfare): in force from 1 Jul 2026 (125 days, wages 100% central, other costs 60:40). Contested; early wage-delay reports from one district only; sources so far are news and opinion. Needs the Act text/PIB and a both-sides treatment (RULES #5).
  3. ~~**PMGKAY free grain** (welfare)~~ **Drafted 2026-10-18**, pending review. Original note: 81.35 crore beneficiaries, ₹11.80 lakh crore over 5 years from Jan 2024 (Cabinet decision, official). Need current-year data and leakage/beneficiary-list evidence for the honest counterweight.
  4. ~~**Anaemia**~~ **Drafted 2026-10-18**, pending review (NFHS-6 fact sheet dropped anaemia; if the owner can supply the official NFHS-5 fact sheet text, confidence can rise). Original note: not yet searched; check whether a newer NFHS exists.
  5. ~~**PLFS annual report 2025**~~ **Drafted 2026-10-18**, pending review; original note (MoSPI press note found): unemployment 3.1%, female LFPR 40.0%, urban female unemployment 6.4%, youth 9.9%. Overlaps the existing female-LFPR entry; some secondary sites misquote figures, use the MoSPI note only.
  6. ~~**Bank asset quality** (economy)~~ **Drafted 2026-10-18**, pending review (see T-0). Follow-ups: RBI's own FSR/Trend and Progress tables are behind a bot check (open them in a browser and supply the text, or the figures stay press/PIB-sourced); public cost of PSB recapitalisation is not quantified anywhere I could read.
  6b. **Gen Z / education follow-ups (2026-10-18)**: exam-integrity entry drafted (see T-0). Not drafted for lack of official sources: PM Internship Scheme (needs pminternship.mca.gov.in or a Parliament reply; stipend figures conflict), CBSE two board exams (needs the CBSE circular and result release), Tele-MANAS/student mental health (needs the Lok Sabha reply of Aug 2026). If the owner can paste text from those pages, each becomes a quick entry.
  7. Unchecked ideas: Mudra loans, Lakhpati Didi, PM-KUSUM/fertiliser subsidy, Commonwealth Games 2030 / Olympic 2036 bid (sports), ABDM digital health.
- [ ] India vs the World (30 comparisons, all published, as of 2026-10-18): remaining ideas are adult literacy, physicians/beds per 1,000 (India's latest value is 2020, stale), exports % GDP, researchers per million (India 2020, sparse peer data). Agent `comparisons` mode built 2026-10-18 (manual workflow only; needs the repo secrets to run).
- [~] Locale coverage for bn/te/mr translations. Gate built 2026-10-18 (`translation_drafts`, `/api/pipeline/translation-ingest`, `/admin/translations`). Pilot drafts submitted for a small set of entries; they wait in /admin/translations for the owner and a native reader. Next batches of entries only after the pilot is judged. UI strings are already complete in all locales; category names are still English in bn/te/mr.
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
- [~] Short-video series: **480 text-on-music reels rendered and verified 2026-10-18 (all play, 1080x1920 with audio, 14-44 s, median 26 s; 18 reels re-rendered after removing lines that referred to "this site" or "the entry")** (`scripts/video/`, see PROJECT_LOG). Owner to: watch a sample, have a native reader check the Hindi hooks, choose which to post (INDEX.csv + posting-plan CSVs in `scripts/video/out/`). Open: voiced variant (Piper models downloaded, owner must judge a sample), re-run `export-content.mjs` + `build_specs.py` + `reel.py --skip-existing` whenever new pages are published.
- [ ] Pre-generated TTS audio at approval time (only if read-aloud is used)
- [ ] Deepen bn/te/mr translations
