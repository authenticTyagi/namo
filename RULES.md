# RULES — non-negotiable

_Last updated: 2026-10-10. These are owner decisions. Change only on explicit owner instruction, and log the change in PROJECT_LOG.md. Fuller detail lives in GEMINI.md and `scripts/entries/*.md`._

## Editorial
1. Every claim is cited. Entry: >=1 `official_primary` source or >=2 sources. Comparison: neutral international bodies only, never Indian government sources. Editorial: anchored to a published entry.
2. Report mixed/negative data plainly. No spin, no softening. If India ranks last, say so.
3. No individual is named anywhere (politicians, private citizens). Exceptions are narrow, owner-approved, topic-scoped and not precedent: diaspora leaders; corruption and diplomacy lists (roles, not names, one editorial per entry, all pending_review).
4. Out of scope: active territorial/border disputes, active military conflicts, attributing violence to specific foreign countries/groups.
5. Sensitive topics (Ram Mandir, Article 370, etc.): neutral, judicially anchored, both-sides treatment.
6. Every item addresses a Micro lens and a Macro lens (capability/autonomy, never adversarial). Aggregates are paired with per-capita/normalized figures.
7. Editorial voice: historical context, civilizational pride, never grievance; no communal or partisan framing.
8. Never depict a person as a mascot or logo. The brand mark is the abstract checkmark seal.

## Process
9. The owner is the sole reviewer. Everything lands as `pending_review`. **Auto-publish is permanently disabled and must never be built.**
10. Editing published content resets it to `pending_review` (admin, `seed.ts`, `seed-comparisons.ts`).
11. Draft volume is sized to one person's review capacity.
12. Trusted YouTube research channels (Think School/Abhi, Niyu) tagged `official_primary` is intentional.
13. Verify against the live DB; do not trust agent self-reports.

## Engineering
14. Next.js stays pinned at 15.5.25. Read `node_modules/next/dist/docs/` if present before using Next APIs (see AGENTS.md).
15. Tailwind `dark:` is attribute-driven (`data-theme`); `/admin` has its own root layout, so ThemeInit must be wired into both.
16. Ads: off unless slot id set; never unconditional loading before consent; reserved heights to protect CLS.
17. Commit only when asked. Don't commit secrets (`.env.local`).

## Keeping docs current
After any meaningful change: add a dated entry to `PROJECT_LOG.md`, tick/add items in `TASKS.md`, and update `ARCHITECTURE.md` / `DESIGN.md` / `PRD.md` if the change touches them. Private, machine-specific notes go in the Claude project `MEMORY.md`, not the repo.
