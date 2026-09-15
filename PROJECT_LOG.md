# Project Log — Modi Ne Kiya Kya Hai

**Read this file first in any new session on this project.** It's the persistent memory the user explicitly asked for — what's done, what's broken, what's next — so context survives across sessions instead of resetting every time.

Live site: https://modinekiyakyahai.com (also .vercel.app, www.). Repo: https://github.com/authenticTyagi/namo. Admin: https://modinekiyakyahai.com/admin (Google sign-in, `ADMIN_EMAILS` env var gates access).

## What this project is

A sourced, fact-checked, bilingual (Hindi/English) reference site documenting verifiable government work under PM Modi's leadership. Core commitment, non-negotiable: **every claim is cited, nothing is published without a source, mixed/negative data is reported honestly (not spun)**. Explicitly NOT a propaganda site, NOT affiliated with any government body or political party — see `/methodology` and `/about`. No individual is named anywhere on the site (deliberate privacy choice by the owner).

## Stack

Next.js 15.5.25 (pinned stable — npm's `latest` tag currently resolves to a 16 canary, don't let create-next-app grab it again), Tailwind v4, next-intl (5 locales: hi default, en, bn, te, mr), Drizzle ORM + Neon Postgres, NextAuth v5 + Google OAuth, Vercel hosting with GitHub auto-deploy connected (push to `master` → deploys automatically, no manual `vercel --prod` needed anymore).

## Current state (as of 2026-09-15)

- **6 categories, 22 entries** (correction: 22, not 26 — recount), all cited, all with before/after stat comparisons: Economy-Infra-Digital (8), Space & Science (3), Foreign Policy & Diplomacy (3), Defense & Security (2), Currency/Prices/Inflation (2), Welfare & Social Schemes (4: Ayushman Bharat, Swachh Bharat, PMAY, Jal Jeevan Mission)
- **Admin panel** (`/admin`): dashboard, entries list (publish/unpublish), review queue (empty, ready for pipeline output), sources intake, feedback inbox — all working, Google-auth-gated
- **Public feedback form** (`/feedback`): replaces the old broken mailto link
- **Automation pipeline API** (`/api/pipeline/ingest`, `/api/pipeline/existing-slugs`): built, tested, verified working end-to-end against production. Server-enforced sourcing bar (≥1 official_primary source OR ≥2 total), server-owned confidence scoring, always lands as `pending_review`
- **Overview page** (`/overview`): every stat from every entry in one place, category-colored accents, scroll-reveal
- Mobile nav (hamburger menu), Facebook share button, cookie-consent banner (for future AdSense) all shipped
- **5-locale architecture** (2026-09-15): site now routes `/hi /en /bn /te /mr`. bn/te/mr fall back to English (then Hindi) for entry/category content until hand-authored — that's a deliberate separate follow-up pass, not done yet. UI chrome (nav, buttons, form labels) IS hand-translated into all 3 new languages already (`messages/{bn,te,mr}.json`). `LanguagePicker.tsx` (replaced the old hi/en `LanguageToggle`) shows all 5 in a dropdown, native names, so the picker itself doesn't gate on content being ready. Legal/policy pages (About/Methodology/Terms/Privacy) stay hi/en-only by design — need owner review before another language. See `src/lib/localized.ts` for the resolution/fallback logic and `src/db/schema.ts`'s `entryTranslations`/`entryStatTranslations` tables (empty, additive, ready for the future content pass) plus `categories`/`tags`' new `nameBn/Te/Mr` etc. columns.
- **AdSense verification meta tag** (2026-09-15): `ca-pub-6506096146746148` added via the `[locale]` layout's `metadata.other` — publisher ID provided, but ad units/slots themselves aren't built yet (waiting on account approval).
- **Editorials + comments (Phase 2)** (2026-09-15): `/editorials` and `/editorial/[slug]` — opinion pieces about a specific already-published entry (`relatedEntryId`), tone is honest (positive/negative/neutral/mixed, never forced positive), looser sourcing bar than entries (no per-claim citation requirement — anchored by the entry it's about instead). Comments live under editorials (`src/components/comments/`) — Google sign-in required to post (a public, non-admin entry point into the existing NextAuth flow, `SignInToComment.tsx`), report button feeds `/admin/comments` moderation queue. `/admin/editorials` review queue + `/admin/editorials/new` manual-creation form (needed because the editorial drafting agent has no working automation yet — see issue #2 below, same root cause). Pipeline API exists (`/api/pipeline/editorial-ingest`, `/api/pipeline/editorial-candidates`) and is tested end-to-end, but nothing calls it on a schedule yet.

## Known issues / open items

1. ~~Admin login blocked on the custom domain~~ **FIXED 2026-09-15**: user added `https://modinekiyakyahai.com/api/auth/callback/google` and the `www.` variant as authorized redirect URIs in Google Cloud Console. Verified end-to-end (both apex and `www.`) by simulating the actual NextAuth sign-in flow via curl — CSRF token → POST `/api/auth/signin/google` → followed the real redirect to `accounts.google.com` → confirmed it now renders the Google sign-in page instead of `Error 400: redirect_uri_mismatch`.
2. **Cloud drafting routine is blocked and disabled.** Created (`trig_01NoDrHQv29wBh3ssQQRZ2to`) but its cloud sandbox's network egress proxy blocks `modinekiyakyahai.com` entirely (org policy allowlist — only Anthropic's own API + npm/PyPI registries by default). User tried adding the domain via claude.ai portal capabilities/network-egress settings twice; identical failure both times (byte-identical proxy allowlist response), so whatever was changed isn't reaching this routine's environment (`env_01LGzWqzQV4cPUXF4hnadmfe`). **Routine is currently disabled** to avoid silent daily failures. Re-enable via `RemoteTrigger action:update, body:{enabled:true}` once the egress issue is actually confirmed fixed (retest with `action:run` + `get_run_log` before trusting it). The editorial pipeline built 2026-09-15 (`/api/pipeline/editorial-ingest`) has no scheduled runner at all yet for the exact same reason — same fix unblocks both.
3. **Local cron bridge active as a stopgap**: job `a102b420`, fires daily ~9:07am IST, but is SESSION-ONLY (dies if this Claude Code session/terminal closes) and auto-expires after 7 days regardless (created 2026-09-14). Not a real long-term solution — don't assume it's still running in a future session without checking `CronList`.
4. **`pipelineConfig`-driven auto-publish threshold**: intentionally unwired. Every pipeline-drafted entry lands as `pending_review` regardless of confidence score, until there's real calibration data from actual runs.
5. **Freshness re-verification of existing entries**: not built. Same pattern as the drafting pipeline would apply (a scheduled check on `lastVerifiedDate` age), just not done yet.
6. **AdSense**: consent banner + verification meta tag shipped (publisher ID `ca-pub-6506096146746148`, 2026-09-15). Actual ad units/slots not built yet — waiting on account approval.
7. **GitHub Actions/CI**: none set up; relying on Vercel's own build-time type-check+lint as the only gate.

## Explicitly out of scope so far (deferred, not forgotten)

- Public comments on entries specifically — comments now exist and are live, but only under editorials (2026-09-15), matching what was actually asked for. The schema (`comments.entryId`) already supports entry comments too; just no UI section for it yet.
- Rich in-admin content editor (new/edited entries still go through `scripts/entries/*.ts` content-pack files + `npm run db:seed`, not a web form)
- `/admin/pipeline` page showing `pipelineRuns` history (visible via `npm run db:studio` for now)
- **Hand-authored Bengali/Telugu/Marathi content for the 22 existing entries** — the architecture landed 2026-09-15 (`entryTranslations`/`entryStatTranslations` tables, empty) but writing the actual translated content is a separate future pass. Until then every bn/te/mr entry page correctly falls back to English. Same content-authoring discipline should apply when this happens — no machine translation for factual claims, cross-check numbers, etc.
- Translating the legal/policy static pages (About/Methodology/Terms/Privacy) into bn/te/mr — needs owner review, not auto-generated.

## Content authoring pattern (for adding new categories/entries)

One file per category under `scripts/entries/` (e.g. `phase1.ts`, `space.ts`, `foreign-policy.ts`, `defense.ts`, `currency-prices.ts`), each exporting `category` + an entries array, sharing types from `scripts/entries/types.ts`. Every entry: `quickTakeHi/En` (one-line hook) + `bodySectionsHi/En` (2-4 `{heading, body}` sections, NOT a single paragraph) + `stats[]` (before/after comparisons, `2014-or-launch` baseline vs now — research the real pre-2014 figure, don't guess) + `sources[]` (real URLs, tiered `official_primary`/`reputable_media`/`secondary`) + `tags[]`. Add the new pack to the `contentPacks` array in `scripts/seed.ts`. Add an icon per entry in `src/lib/entry-icons.ts` (verify the lucide-react icon name actually exists first — `node -e "console.log(typeof require('lucide-react').IconName)"`). Run `npm run db:seed` then deploy.

Research pattern that's worked well: WebSearch for current figures, cross-check across ≥2 independent sources, explicitly search for the pre-2014 baseline separately (don't derive/estimate it silently), flag any figure that varies across sources rather than picking the most flattering one.

## Categories not yet covered (candidates for next expansion)

Welfare & social schemes (Ayushman Bharat, Swachh Bharat, PMAY housing, Jal Jeevan Mission), Education (NEP 2020, digital literacy), Agriculture (PM-KISAN, MSP), Environment & renewable energy (solar capacity, EV push), Women & child development, Health infrastructure (AIIMS expansion, generic medicine stores). Pick based on: (a) strong official/primary sourcing available, (b) not yet duplicating an existing entry's topic (check `getAllEntrySlugsForDedupe` output or just the 5 existing category pages).

## Session infra notes

- `npx vercel@latest` works but is NOT on PATH directly — always prefix with `npx --yes vercel`. Frequent harmless `Error: Failed to get package info: Error: Failed to fetch dist-tags from npm` noise on every invocation — ignore it, it doesn't affect the actual command.
- `npx auth secret` hangs (interactive prompt issue) — generate secrets via `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` instead.
- Neon CLI (`npx neon@latest`) works; `neonctl`'s OAuth flow has a strict 60s window, retry fast if it times out.
- All secrets live in `.env.local` (gitignored) and Vercel's Production env vars — both need updating when adding a new one (`vercel env add NAME production`).
