# PRD — Modi Ne Kiya Kya Hai

_Last updated: 2026-10-10. Update this file when scope, audience or success criteria change._

## Product
A sourced, fact-checked, multi-locale (hi default, en, bn, te, mr) reference site documenting verifiable
government work under PM Modi's leadership. Not propaganda, not affiliated with any government body or party.
Live: https://modinekiyakyahai.com

## Problem
Claims about government work are either unsourced boosterism or unsourced attack. Readers have no single place
that states what was done, with citations, and reports mixed or negative outcomes honestly.

## Users
- Curious citizens who want a cited answer ("what did X scheme actually do?").
- Students/journalists who need primary-source links.
- The owner, who is the sole reviewer/publisher (see RULES.md).

## Content types
| Type | Purpose | Source bar |
|---|---|---|
| Entry | One scheme/event/outcome, with stats and verdict | >=1 `official_primary` source OR >=2 sources |
| Editorial | Opinion anchored to a published entry (`relatedEntryId`) | Anchored by the entry |
| Comparison ("India in the World") | India vs peers | Neutral international bodies only (World Bank, IMF, IEA, UNDP, WHO...) |

Every piece carries a Micro lens (daily-life change) and a Macro lens (capability/autonomy), and any aggregate
stat is paired with its per-capita/normalized equivalent.

## Goals
1. Every published claim is cited and independently checkable.
2. Honest verdicts (positive / mixed / negative), never spun.
3. Fast, readable, accessible on low-end phones and slow networks (India mobile reality).
4. Sustainable review load: output never exceeds one person's review capacity.

## Non-goals
- Auto-publishing, ever.
- Naming individuals (narrow documented exceptions only — see RULES.md).
- Active territorial disputes, active conflicts, attributing violence to specific foreign groups.
- Partisan or communal framing.

## Success metrics (to instrument — currently only Vercel Analytics exists)
- Share of published items passing the source bar: 100%.
- Review-queue age: no item pending > 14 days (target; owner may change).
- Core Web Vitals on mobile: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Locale coverage: share of entries with bn/te/mr translations.

## Monetization
Google AdSense, consent-gated (Funding Choices), layout-safe `AdSlot`, off unless a slot id is set.
Ads must never degrade CLS/performance beyond the measured budget (see PROJECT_LOG 2026-10-09).

## Source of truth for history
`PROJECT_LOG.md` (what happened and why), `TASKS.md` (what's next), `RULES.md` (what must stay true).
