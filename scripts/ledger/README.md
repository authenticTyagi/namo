# Union government actions ledger, 2014 to date

Owner request (2026-11-02): list everything the Union government did or tried since 2014, big or small, positive or negative, national or international.

**What this is.** A starter dataset (`union-government-actions-2014-2026.csv`, ~110 rows). Each row is one law, scheme, policy, reversal or international act, with a neutral `status` (implemented, ongoing, repealed, struck_down, lapsed, pending, concluded...). There is no positive/negative column: RULES 8a says the site describes change and never credits or blames a government, party or scheme. Outcome judgements belong in the linked entry, where they are sourced and both-sided.

**What this is not.** It is not complete. "Everything" is thousands of decisions (every Bill, ordinance, Cabinet approval, treaty). It is also not yet verified: rows marked `from_memory_needs_source` were written from the author's recollection and must each get a primary source (PIB release, Gazette notification, Act text, court order) before anything is published. `sourced_on_site` rows link to an entry that already carries sources.

**Rules that apply.** No individual is named (RULES 3): the actor is "the Union government" or a ministry. Active military conflicts and attributing violence to foreign groups are out of scope (RULES 4), so operations of that kind are deliberately absent. Everything stays `pending_review` until the owner approves (RULES 9).

**How to extend.** Add rows by year and domain; attach a source URL column when verifying; run through PIB's year-end reviews, Gazette of India and PRS Legislative Research Bill tracker for completeness. Suggested next step: a `/ledger` page (filter by year, domain, status) rendered from verified rows only. Not built; needs an owner decision on scope and review workload.
