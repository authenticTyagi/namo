export type CredibilityTier = "official_primary" | "reputable_media" | "secondary";

export interface SourceSignals {
  numericConsistency: boolean;
  contradictionFound: boolean;
}

const TIER_WEIGHT: Record<CredibilityTier, number> = {
  official_primary: 1.0,
  reputable_media: 0.7,
  secondary: 0.4,
};

export function computeConfidence(
  sourceList: { credibilityTier: CredibilityTier }[],
  signals: SourceSignals,
): number {
  const avgTierWeight =
    sourceList.reduce((sum, s) => sum + TIER_WEIGHT[s.credibilityTier], 0) / sourceList.length;
  const sourceCountFactor = Math.min(sourceList.length, 3) / 3;
  const numericConsistency = signals.numericConsistency ? 1 : 0;
  const contradictionPenalty = signals.contradictionFound ? 1 : 0;

  const raw =
    0.5 * avgTierWeight + 0.3 * sourceCountFactor + 0.2 * numericConsistency - 0.4 * contradictionPenalty;

  return Math.min(1, Math.max(0, raw));
}

/** RULES #1: an entry needs >=1 official_primary source OR >=2 sources of any kind. */
export function passesSourcingBar(sourceList: { credibilityTier: CredibilityTier }[]): boolean {
  const hasOfficialPrimary = sourceList.some((s) => s.credibilityTier === "official_primary");
  return hasOfficialPrimary || sourceList.length >= 2;
}
