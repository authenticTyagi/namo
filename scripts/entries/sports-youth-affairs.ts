/**
 * "Sports & Youth Affairs" category. Created 2026-09-30 — user asked whether
 * to cover "Sports, Games, Medals, Cups"; scoped carefully before drafting
 * anything (see PROJECT_LOG.md's 2026-09-30 entry) since raw medal-tally
 * boosterism is exactly the genre this site's own rules exist to be
 * skeptical of (medals are athletes' achievements, not government's). The
 * agreed scope: entries center on real government work — Khelo India
 * funding/infrastructure, TOPS athlete support — with aggregate medal
 * tallies (never individual athlete names, per the site's founding "no
 * individual named" rule) used as a prominent, honestly-caveated stat.
 *
 * This file intentionally exports an EMPTY entries array, matching the
 * governance-judiciary.ts precedent: entries are submitted via
 * /api/pipeline/ingest and live only in the database. This file exists so
 * db:seed still creates/upserts the category row itself.
 */
import type { ContentPack, EntryInput } from "./types";

export const category: ContentPack["category"] = {
  slug: "sports-youth-affairs",
  nameHi: "खेल एवं युवा मामले",
  nameEn: "Sports & Youth Affairs",
  descriptionHi:
    "खेलो इंडिया और टारगेट ओलंपिक पोडियम स्कीम जैसी सरकारी योजनाएं, बुनियादी ढांचा और फंडिंग — पदक तालिका का ईमानदार संदर्भ सहित, बिना किसी खिलाड़ी का नाम लिए।",
  descriptionEn:
    "Government schemes, infrastructure, and funding behind India's sporting record — Khelo India, TOPS — with medal tallies reported honestly in context, never naming individual athletes.",
  sortOrder: 13,
};

export const sportsYouthAffairsEntries: EntryInput[] = [];
