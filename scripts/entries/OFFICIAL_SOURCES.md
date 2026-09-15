# Official government social media handles (verified)

A "safe list" of Government of India social media accounts that may be cited
as `credibilityTier: "official_primary"` sources — the same tier as a PIB
press release or a ministry's own website — when a post from one of these
**exact handles** is the actual evidence for a claim (e.g. a ministry
announcing a figure on X before any press release exists).

## Why this exists

Content-authoring so far (see `scripts/entries/*.ts`) has only ever cited
`.gov.in` domains, `pib.gov.in`, and Prasar Bharati outlets (News on Air, DD
News) as `official_primary`. That's correct but incomplete — a lot of
real-time government communication (mission updates, policy announcements,
data releases) happens on social media first, sometimes without ever getting
a matching press release. This list lets that content be cited too, without
opening the door to citing *any* social post as if it were official (fake
and parody accounts of Indian ministries and officials are common — verify
against this list, don't trust a checkmark alone).

## How to cite one

- Fetch the **actual post URL** (not just the profile) — same rule as any
  other source: never cite a claim you haven't actually read at the source.
- `credibilityTier: "official_primary"`.
- Add a `credibilityNotes` note: `"Official verified government handle (see
  scripts/entries/OFFICIAL_SOURCES.md)."` — so a future reader/reviewer can
  see why a social media URL was trusted.
- Posts can be deleted. Where practical, prefer a source that also has a
  press-release or news-article backup; if a tweet is truly the only
  evidence, note that explicitly rather than silently relying on something
  that could vanish.
- If a handle changes (rebrand, new administration takes over the account)
  or the platform itself changes domain (Twitter → X happened once already),
  update this file — don't assume a handle listed here in the past is still
  accurate without a quick check.

## Verified handles (as of 2026-09-15)

Each entry below was cross-checked against the organization's own `.gov.in`
site or a reputable secondary source (Wikipedia's infobox, etc.) describing
it as the official account — not just assumed from the name.

| Organization | Handle | Platform | Covers |
|---|---|---|---|
| Prime Minister's Office | `@PMOIndia` | X | Any category — PM/government announcements |
| Press Information Bureau (general) | `@PIB_India` | X | Any category — the nodal government media agency |
| Press Information Bureau (Hindi) | `@pibhindi` | X | Any category, Hindi-language posts |
| PIB Fact Check | `@PIBFactCheck` | X | Debunking/verifying viral claims — useful for methodology, not for sourcing positive claims |
| ISRO | `@isro` | X | Space & Science |
| Reserve Bank of India | `@RBI` | X | Currency, Prices & Inflation; Economy |
| Ministry of External Affairs (spokesperson) | `@MEAIndia` | X | Foreign Policy & Diplomacy |
| Ministry of External Affairs (public diplomacy) | `@IndianDiplomacy` | X | Foreign Policy & Diplomacy |
| Ministry of Defence (spokesperson) | `@SpokespersonMoD` | X | Defense & Security |
| NITI Aayog | `@NITIAayog` | X | Economy, Infra & Digital; policy generally |
| Ministry of Health & Family Welfare | `@MoHFW_INDIA` | X | Welfare & Social Schemes |

**Not yet verified / do not use without checking first:** DD News,
Doordarshan, MyGov India, NHAI, and any ministry not listed above. Their
official handles likely exist but weren't confirmed in this pass — verify
the same way (check the ministry's own `.gov.in` site links to it, or a
reliable secondary source naming it as official) before adding them here and
citing them.

## Extending this list

Verify a candidate handle before adding it:
1. Check whether the organization's own official website links to the
   handle (most ministries have a "connect with us" / social-media-updates
   page).
2. Or find a reputable secondary source (Wikipedia's infobox, a major
   outlet's profile of the organization) explicitly naming it as official.
3. Add a row here with the same evidentiary care as any other source in this
   project — this file is itself something a reader could check, so don't
   guess.
