export type ImpactType = "tangible" | "intangible" | "mixed";

export type CredibilityTier = "official_primary" | "reputable_media" | "secondary";

/** Shape returned by getPublishedEntriesByCategory — enough for a card. */
export interface EntrySummary {
  id: string;
  slug: string;
  titleHi: string;
  titleEn: string;
  summaryHi: string;
  summaryEn: string;
  impactType: ImpactType;
  publishDate: Date | null;
}

export interface EntrySource {
  id: string;
  url: string;
  publisher: string;
  title: string | null;
  retrievedDate: Date;
  publishedDate: Date | null;
  credibilityTier: CredibilityTier;
  credibilityNotes: string | null;
  language: string | null;
}

export interface EntryTag {
  id: string;
  slug: string;
  labelHi: string;
  labelEn: string;
}

export interface BodySection {
  heading: string;
  body: string;
}

/** A before/after (and optionally a 3rd "extra" point) comparison row. */
export interface EntryStat {
  id: string;
  sortOrder: number;
  statKey: string;
  metricLabelHi: string;
  metricLabelEn: string;
  beforeLabelHi: string;
  beforeLabelEn: string;
  beforeValueHi: string;
  beforeValueEn: string;
  beforeValueNumeric: string | null;
  afterLabelHi: string;
  afterLabelEn: string;
  afterValueHi: string;
  afterValueEn: string;
  afterValueNumeric: string | null;
  extraLabelHi: string | null;
  extraLabelEn: string | null;
  extraValueHi: string | null;
  extraValueEn: string | null;
  extraValueNumeric: string | null;
}

/** Shape returned by getPublishedEntryBySlug — full detail page. */
export interface EntryDetail extends EntrySummary {
  bodyHi: string;
  bodyEn: string;
  quickTakeHi: string | null;
  quickTakeEn: string | null;
  bodySectionsHi: BodySection[] | null;
  bodySectionsEn: BodySection[] | null;
  timelineStartDate: Date | null;
  timelineEndDate: Date | null;
  lastVerifiedDate: Date | null;
  sources: EntrySource[];
  tags: EntryTag[];
  stats: EntryStat[];
}
