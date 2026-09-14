export type ImpactType = "tangible" | "intangible" | "mixed";

export type CredibilityTier = "official_primary" | "reputable_media" | "secondary";

/**
 * Shape returned by getPublishedEntriesByCategory / searchPublishedEntries
 * — enough for a card. `title`/`summary` are already resolved for the
 * requested locale by the query layer (hi/en columns, or an
 * entryTranslations row for bn/te/mr, falling back to English/Hindi) —
 * see src/lib/localized.ts. Components never branch on locale for text.
 */
export interface EntrySummary {
  id: string;
  slug: string;
  title: string;
  summary: string;
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
  label: string;
}

export interface BodySection {
  heading: string;
  body: string;
}

/** A before/after (and optionally a 3rd "extra" point) comparison row, already locale-resolved. */
export interface EntryStat {
  id: string;
  sortOrder: number;
  statKey: string;
  metricLabel: string;
  beforeLabel: string;
  beforeValue: string;
  beforeValueNumeric: string | null;
  afterLabel: string;
  afterValue: string;
  afterValueNumeric: string | null;
  extraLabel: string | null;
  extraValue: string | null;
  extraValueNumeric: string | null;
}

/** Shape returned by getPublishedEntryBySlug — full detail page, locale-resolved. */
export interface EntryDetail extends EntrySummary {
  body: string;
  quickTake: string | null;
  bodySections: BodySection[] | null;
  timelineStartDate: Date | null;
  timelineEndDate: Date | null;
  lastVerifiedDate: Date | null;
  sources: EntrySource[];
  tags: EntryTag[];
  stats: EntryStat[];
}
