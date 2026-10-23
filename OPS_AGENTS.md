# OPS_AGENTS — the eight monitoring agents

_Built 2026-10-23. Code in `scripts/ops/`, schedule in `.github/workflows/ops-agents.yml`, tests in `src/lib/ops-agents.test.ts`._

## What they are
Eight small read-only Node programs (no dependencies). Each inspects the live site, the repo, or the database aggregates, then writes **one rolling GitHub issue** (its digest, labelled `ops-agent`) and a report artifact. They are deterministic checks, not language-model calls, so they cost nothing and cannot invent findings.

**Contract (unchanged, RULES #9, #11, #13):** read-only · never push to `master` · never publish or edit content · never touch secrets (they only use `GITHUB_TOKEN` and the existing `CRON_SECRET`) · one digest per agent, not a stream of alerts · a failing check is a finding in the digest, not a failed workflow, so there is no failure-email spam.

**"Fix" authority:** the agents report and name the exact next step. They do not edit code. To act on a digest, ask Claude Code ("fix the security digest") or a human engineer; the change then goes through the normal commit, CI and review path. This is deliberate: an unattended agent with write access to production code is a larger risk than the issues it would fix.

## Ranking (build and attention order)
| Rank | Agent | Schedule | Why this rank |
|---|---|---|---|
| 1 | **security** | daily | Highest harm if missed, cheapest to automate. Already caught a real gap (X-Powered-By) and would have caught the critical Next advisory. |
| 2 | **infra** | daily | Site down or database misconfigured is immediate, visible harm. |
| 3 | **frontend** | weekly | Reader-facing quality and SEO. First run found missing canonical and hreflang tags on most pages. |
| 4 | **performance** | weekly | Speed drives reach and ad revenue; trend vs last run catches regressions early. |
| 5 | **business** | weekly | Keeps the single-reviewer queue, coverage and trust signals honest. First run found 32 published entries below 0.50 confidence. |
| 6 | **scaling** | weekly | No pressure today (database 13 of 512 MB), but it sets the baseline so growth is seen early. |
| 7 | **growth** | weekly | Useful, but limited until a behaviour-data source exists (it says so). |
| 8 | **nudges** | weekly | Drafts only; nothing can be sent until a mail provider and consent flow exist. |

## What each one checks
- **security** — `npm audit`; newer Next patch in the pinned minor; live security headers; unauthenticated probes of every `/api/pipeline/*` route and `/admin`; every exported server action has an admin check (the layout redirect does not protect actions); `dangerouslySetInnerHTML` allow-list; secret patterns in tracked files; public source maps; `/api/health` leaks. Not covered: CodeQL results, admin MFA, account settings, penetration testing.
- **infra** — core URLs and health; 20 sampled sitemap URLs; edge-cache hit on a repeat request; TLS expiry; latest CI result and Dependabot backlog (GitHub API); database reachability. Not covered: Vercel logs and error rates, Neon metrics.
- **frontend** — about 20 sampled pages in hi and en: lang, title, description, canonical, viewport, og:image, noindex, single h1, image alt, unnamed buttons, JSON-LD validity, leaked `undefined`/`NaN`, thin pages, 40 internal links. Not covered: visual layout, contrast, dark mode, keyboard flow (needs a real browser; add Playwright when wanted).
- **performance** — median-of-3 TTFB, HTML and JavaScript transfer size (brotli-estimated), compression, caching, PageSpeed Insights lab and real-user data, trend vs last run.
- **business** — review-queue size and age, editorial coverage, thin categories, low-confidence and stale content, unread feedback, flagged comments, translation backlog, drafting-automation state, ads state. Not covered: revenue and traffic.
- **scaling** — database size against a limit (default 512 MB, set `DB_LIMIT_MB`), growth rate and days to limit, sitemap size (build time), cache hit ratio, user and comment growth.
- **growth** — engagement proxies, coverage gaps, the open growth backlog ranked by effort. Says plainly that behaviour analytics are not connected and lists the three ways to connect them.
- **nudges** — drafts a "what's new" digest in English and Hindi from recent publications, flags overdue verification and waiting feedback, checks which reader helpers exist. **Sends nothing.**

## Running them
- Automatically: daily 02:30 UTC (security, infra) and Mondays 03:30 UTC (the other six). Nothing runs until the workflow is on the default branch, which it now is.
- By hand from GitHub: Actions → "Ops agents" → Run workflow → pick agents or `all`.
- Locally: `node scripts/ops/run.mjs security --local` prints a report and touches nothing. With `CRON_SECRET` exported the database-driven checks run too.

## Owner steps to switch everything on
1. Repository secret **`CRON_SECRET`** (same value as in Vercel). Without it security, infra (partly), frontend and performance work; business, scaling, growth and nudges report "database figures skipped". The older drafting workflows noted this secret was never added; check **Settings → Secrets and variables → Actions**.
2. Optional secret **`PSI_API_KEY`** (free Google PageSpeed key) so lab and real-user speed data is not rate limited.
3. Optional variable **`DB_LIMIT_MB`** if the Neon plan is not 512 MB.
4. Run the workflow once by hand and read the issues it opens.
5. If Actions cannot create issues, enable **Settings → Actions → General → Workflow permissions → Read and write**.

## First-run findings (2026-10-23, production)
- **frontend:** most pages have no canonical link and no hreflang `<link>` tags (the sitemap has them; the pages do not). Fix needs care: `bn/te/mr` fall back to English text and should canonicalise to `/en`. `/en/search` is deliberately `noindex`. Long Hindi titles exceed 60 characters.
- **business:** 32 published entries have confidence under 0.50; thin categories are Sports, Defense, Currency/Prices, Women and Child, Agriculture; 18 translation drafts await a native reader; scheduled drafting is off.
- **security:** only `X-Powered-By` exposed (fixed in this change) and the known absence of a script-src CSP.
- **performance/infra/scaling:** healthy. About 160 kB JavaScript transferred, TTFB about 80 ms on an edge hit, database 13 of 512 MB, certificate 51 days left, edge cache hit ratio 100%.

## Adding or changing an agent
Create `scripts/ops/agents/<name>.mjs` exporting `async run({ previous })` that returns `{ findings, metrics, notes }`, register it in `scripts/ops/agents-list.mjs`, add a test for any pure logic in `src/lib/ops-agents.test.ts`, and add it to the workflow schedule. Keep severities honest: `critical` and `high` should mean act now. Never add write access, auto-merge, or any step that publishes content.
