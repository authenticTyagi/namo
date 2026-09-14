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

/** Shape returned by getPublishedEntryBySlug — full detail page. */
export interface EntryDetail extends EntrySummary {
  bodyHi: string;
  bodyEn: string;
  timelineStartDate: Date | null;
  timelineEndDate: Date | null;
  lastVerifiedDate: Date | null;
  sources: EntrySource[];
  tags: EntryTag[];
}
