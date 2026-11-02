// Helper to build ingest payloads compactly. Every item lands pending_review.
export const sec = (pairs) => pairs.map(([heading, body]) => ({ heading, body }));
export function mk(o) {
  const entry = {
    categorySlug: o.cat, slug: o.slug,
    titleEn: o.tEn, titleHi: o.tHi, summaryEn: o.sEn, summaryHi: o.sHi,
    quickTakeEn: o.qEn, quickTakeHi: o.qHi,
    bodySectionsEn: sec(o.bEn), bodySectionsHi: sec(o.bHi),
    impactType: o.impact || "mixed",
    timelineStartDate: o.start, timelineEndDate: o.end,
    tags: o.tags.map(([slug, labelEn, labelHi]) => ({ slug, labelEn, labelHi })),
    sources: o.src.map(([url, publisher, title, credibilityTier, credibilityNotes]) => ({
      url, publisher, title, credibilityTier, language: "en", credibilityNotes })),
    stats: (o.stats || []).map((s, i) => ({
      statKey: `${o.slug.slice(0, 40)}-${i}`, sortOrder: i,
      metricLabelEn: s.m[0], metricLabelHi: s.m[1],
      beforeLabelEn: s.b[0], beforeLabelHi: s.b[1], beforeValueEn: s.b[2], beforeValueHi: s.b[2], beforeValueNumeric: s.b[3],
      afterLabelEn: s.a[0], afterLabelHi: s.a[1], afterValueEn: s.a[2], afterValueHi: s.a[2], afterValueNumeric: s.a[3],
    })),
    sourceSignals: { numericConsistency: o.consistent ?? true, contradictionFound: o.contradiction ?? false },
  };
  const editorial = {
    relatedEntrySlug: o.slug, slug: o.eSlug,
    headlineEn: o.eHEn, headlineHi: o.eHHi, tone: o.tone || "mixed",
    bodyEn: o.eEn, bodyHi: o.eHi,
  };
  return { entry, editorial };
}
