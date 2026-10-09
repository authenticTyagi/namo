# Gemini CLI Project Instructions — Modi Ne Kiya Kya Hai

Welcome to the **Modi Ne Kiya Kya Hai** repository. This file serves as the definitive guide for Gemini CLI (and any collaborative agents) regarding the project's mission, non-negotiable architectural/sourcing rules, and operational workflows.

---

## 1. Core Mission & Editorial Integrity (Non-Negotiable)

This project is a sourced, fact-checked, bilingual/multi-locale reference site documenting verifiable government work under PM Modi's leadership. It is **explicitly NOT a propaganda site** and is **NOT affiliated with any government body or political party**.

### Core Boundaries:
* **Strict Citation Rule:** Every claim MUST be cited. Nothing is published without verification.
* **Honest, Unspun Data:** Mixed/negative data must be reported honestly. Do not spin or soften negative outcomes.
* **Strict Privacy / No Names:** No individual (including politicians or private citizens) is named anywhere on the site (with a very narrow, documented exception for prominent diaspora CEOs, which includes explicit disclaimers of any government policy credit).
* **Declined Geopolitical Topics:** Active territorial/border disputes (e.g., POK, Kashmir disputes), active military conflicts, or attributing violence to specific foreign countries/groups are strictly out of scope. These stay declined to keep the site neutral and focused on policy.
* **Neutral, Judicial Framing:** Highly sensitive topics (e.g., Ram Mandir, Article 370 abrogation) must receive a neutral, judicially anchored, both-sides treatment (similar to CAG audits). State documented facts, opposition views, and uncomfortable truths (e.g., internet shutdowns) without taking a side or asserting site-level judgment.

---

## 2. Content Standards & The Micro/Macro Lens

Every content piece going forward (entry, editorial, or comparison) must address both of the following:

1. **Micro Lens:** What changed in an ordinary person's, household's, or small business's actual day-to-day life.
2. **Macro Lens:** What changed for India's standing, capability, or autonomy in the world (e.g., self-reliance, agenda-setting, reputation).
   * *Note:* Macro/sovereignty here means **capability and autonomy** (e.g., Atmanirbhar Bharat, defense self-reliance, G20 hosting), never adversarial characterization of other nations or territorial claims.
3. **Aggregate-Per-Capita Pairing:** Any aggregate statistic (e.g., GDP, foreign exchange reserves, defense budget, exports) **MUST be paired with its per-capita or normalized equivalent** and its primary source in the same post (e.g., aggregate GDP paired with per-capita GDP/PPP rank).

---

## 3. Strict Sourcing Rules

Sourcing criteria vary by content type:

### Entries:
* Must have **at least 1 `official_primary` source OR at least 2 total sources**.
* **Official Primary Sources:** Constitutionally independent bodies or key agencies:
  * CAG (Comptroller and Auditor General) audit reports.
  * Supreme Court or High Court judgments.
  * The 11 whitelisted official accounts on X/platforms (PMO, PIB General, PIB Hindi, PIB Fact Check, ISRO, RBI, MEA Spokesperson, MEA Public Diplomacy, MoD Spokesperson, NITI Aayog, MoHFW).
  * Parliament responses, official ministry releases, etc.

### Comparisons ("India in the World"):
* Sourced **ONLY to neutral international bodies** (World Bank, IMF, IEA, IRENA, UNDP, WHO, etc.).
* **NEVER use Indian government sources** for comparisons, to ensure external credibility and prevent bias.
* If India ranks last or poorly (e.g., renewable generation share or life expectancy), report it plainly and honestly.

### Editorials:
* Opinion/analysis pieces anchored to a specific, already-published entry (`relatedEntryId`).
* Looser sourcing bar (anchored by the entry itself).
* **Voice Persona:** Ground editorials in historical context (e.g., colonial-era extraction, license-raj scarcity, and the inherent difficulties of nation-building). Ground them in national/civilizational pride, **never grievance**. Avoid communal, partisan, or party-credit framing.

---

## 4. Operational and Database Discipline

### The Review Queue is Permanent:
* **Human-in-the-loop review is mandatory.** Every entry, editorial, and comparison must land in the database as `pending_review`.
* Auto-publishing based on high confidence scores or trusted sources is permanently disabled and should not be implemented.
* The owner is the sole reviewer. Cadence and volume of drafts should match sustainable human review capacity.

### Status Reset on Edit:
* Any modification of published content (via the admin panel, `seed.ts`, or `seed-comparisons.ts`) **must reset the item's status to `pending_review`**.
* A content change demands fresh eyes before going public again.

---

## 5. Technical Stack & Architecture

* **Framework:** Next.js 15.5.25 (pinned stable — do not upgrade to Next 16 canary).
* **Styling:** Tailwind CSS v4.
* **Database & ORM:** Neon Postgres + Drizzle ORM.
  * Migrations: Run migrations using `npx drizzle-kit migrate` or `npm run db:migrate`.
* **Authentication:** NextAuth.js (v5) + Google OAuth.
  * Gate access to `/admin` using the `ADMIN_EMAILS` environment variable.
* **Internationalization:** `next-intl` supporting 5 locales: `hi` (default), `en`, `bn`, `te`, `mr`.
  * Fallbacks: If `bn`, `te`, or `mr` content is missing, fall back to English then Hindi.
  * SEO alternates and canonical tags are automatically generated based on language presence.
* **Admin vs. App Theme Sync:**
  * Tailwind's `dark:` variant is attribute-driven (`data-theme="dark"`).
  * `/admin` has its own root `<html>` layout separate from the `[locale]` layout. Ensure `ThemeInit` and manual theme selection are wired into BOTH layouts to avoid breaking styling.

---

## 6. Sibling and Global Memory Routing

* Keep ./GEMINI.md for shared repository architecture, rules, and workflows.
* Keep machine-specific settings or local workflows in the private project `MEMORY.md`.
* Avoid duplicating facts across files.
