/**
 * Shared types for content pack files (one file per category, e.g.
 * phase1.ts for "Economy, Infra & Digital", space.ts for "Space &
 * Science"). Each pack exports a `category` and its `entries`; seed.ts
 * loops over an array of packs.
 */

export type CredibilityTier = "official_primary" | "reputable_media" | "secondary";

export interface SourceInput {
  url: string;
  publisher: string;
  title?: string;
  credibilityTier: CredibilityTier;
  language?: string;
  credibilityNotes?: string;
}

export interface TagInput {
  slug: string;
  labelHi: string;
  labelEn: string;
}

export interface BodySectionInput {
  heading: string;
  body: string;
}

export interface EntryStatInput {
  statKey: string;
  sortOrder?: number;
  metricLabelHi: string;
  metricLabelEn: string;
  beforeLabelHi: string;
  beforeLabelEn: string;
  beforeValueHi: string;
  beforeValueEn: string;
  beforeValueNumeric?: number;
  afterLabelHi: string;
  afterLabelEn: string;
  afterValueHi: string;
  afterValueEn: string;
  afterValueNumeric?: number;
  extraLabelHi?: string;
  extraLabelEn?: string;
  extraValueHi?: string;
  extraValueEn?: string;
  extraValueNumeric?: number;
}

export interface EntryInput {
  slug: string;
  titleHi: string;
  titleEn: string;
  summaryHi: string;
  summaryEn: string;
  quickTakeHi: string;
  quickTakeEn: string;
  bodySectionsHi: BodySectionInput[];
  bodySectionsEn: BodySectionInput[];
  impactType: "tangible" | "intangible" | "mixed";
  timelineStartDate: string; // ISO date
  timelineEndDate: string; // ISO date
  tags: TagInput[];
  sources: SourceInput[];
  stats: EntryStatInput[];
}

export interface CategoryInput {
  slug: string;
  nameHi: string;
  nameEn: string;
  descriptionHi: string;
  descriptionEn: string;
  sortOrder: number;
}

export interface ContentPack {
  category: CategoryInput;
  entries: EntryInput[];
}
