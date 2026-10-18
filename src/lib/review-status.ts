/**
 * RULES #10: editing published content sends it back to pending_review.
 * The admin edit forms do that unconditionally; the seed scripts re-run over
 * existing rows, so they must first decide whether the content really
 * changed. That decision lives here so it is the same in both scripts and
 * can be tested without a database.
 */

export interface EntryContentFields {
  titleHi: string;
  titleEn: string;
  summaryHi: string;
  summaryEn: string;
  bodyHi: string;
  bodyEn: string;
  impactType: string;
  timelineStartDate: Date | null;
  timelineEndDate: Date | null;
}

/** `existing` is the stored row (dates as Date); `incoming` is the content pack (dates as parseable strings). */
export function entryContentChanged(
  existing: EntryContentFields | undefined,
  incoming: Omit<EntryContentFields, "timelineStartDate" | "timelineEndDate"> & {
    timelineStartDate: string;
    timelineEndDate: string;
  },
): boolean {
  if (!existing) return false;
  return (
    existing.titleHi !== incoming.titleHi ||
    existing.titleEn !== incoming.titleEn ||
    existing.summaryHi !== incoming.summaryHi ||
    existing.summaryEn !== incoming.summaryEn ||
    existing.bodyHi !== incoming.bodyHi ||
    existing.bodyEn !== incoming.bodyEn ||
    existing.impactType !== incoming.impactType ||
    existing.timelineStartDate?.getTime() !== new Date(incoming.timelineStartDate).getTime() ||
    existing.timelineEndDate?.getTime() !== new Date(incoming.timelineEndDate).getTime()
  );
}

export interface ComparisonContentFields {
  titleHi: string;
  titleEn: string;
  metricLabelHi: string;
  metricLabelEn: string;
  unitHi: string | null;
  unitEn: string | null;
  narrativeHi: string;
  narrativeEn: string;
}

/**
 * Compares the comparison's text fields only. Its data points and sources are
 * rewritten by the seed script without being compared, so a change to only a
 * country's value or a source is NOT detected here (known gap, see tests).
 */
export function comparisonContentChanged(
  existing: ComparisonContentFields | undefined,
  incoming: Omit<ComparisonContentFields, "unitHi" | "unitEn"> & {
    unitHi?: string | null;
    unitEn?: string | null;
  },
): boolean {
  if (!existing) return false;
  return (
    existing.titleHi !== incoming.titleHi ||
    existing.titleEn !== incoming.titleEn ||
    existing.metricLabelHi !== incoming.metricLabelHi ||
    existing.metricLabelEn !== incoming.metricLabelEn ||
    existing.unitHi !== (incoming.unitHi ?? null) ||
    existing.unitEn !== (incoming.unitEn ?? null) ||
    existing.narrativeHi !== incoming.narrativeHi ||
    existing.narrativeEn !== incoming.narrativeEn
  );
}

/** Only a published row whose content changed goes back to review. New, pending, draft and rejected rows keep their status. */
export function shouldResetToPendingReview(
  existingStatus: string | undefined,
  contentChanged: boolean,
): boolean {
  return existingStatus === "published" && contentChanged;
}
