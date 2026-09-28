/**
 * "Governance & Judiciary" category. Created 2026-09-29 — this had been a
 * documented gap since 2026-09-24: Ram Mandir and Article 370/35A were
 * drafted that session but had nowhere real to go (creating a category
 * needed direct DB access, unavailable that session), so they were filed
 * under `economy-infra-digital` as a stopgap, matching the earlier
 * Aadhaar-verdict precedent. See PROJECT_LOG.md's 2026-09-24 and
 * 2026-09-29 entries.
 *
 * This file intentionally exports an EMPTY entries array. The category's
 * actual entries (constitutional/judicial content — Article 370, the Ram
 * Mandir verdict, the Aadhaar Supreme Court verdict, the CAG audits) were
 * all submitted via /api/pipeline/ingest, not a content-pack file, so they
 * live only in the database and are re-filed there directly (categoryId
 * update), not via db:seed. This file exists so db:seed still creates/
 * upserts the category row itself, and so future entries CAN be added here
 * the normal content-pack way if that's ever preferred.
 */
import type { ContentPack, EntryInput } from "./types";

export const category: ContentPack["category"] = {
  slug: "governance-judiciary",
  nameHi: "शासन एवं न्यायपालिका",
  nameEn: "Governance & Judiciary",
  descriptionHi:
    "संवैधानिक फ़ैसले, सर्वोच्च न्यायालय के निर्णय, और CAG/संसदीय जवाबदेही निष्कर्ष — बिना किसी पक्ष को दोषी या सही ठहराए, स्रोत सहित।",
  descriptionEn:
    "Constitutional actions, Supreme Court verdicts, and CAG/parliamentary accountability findings — sourced, without adjudicating either side.",
  sortOrder: 12,
};

export const governanceJudiciaryEntries: EntryInput[] = [];
