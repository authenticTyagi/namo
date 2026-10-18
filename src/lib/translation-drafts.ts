import { z } from "zod";
import { EXTRA_LOCALES } from "@/lib/localized";

const text = z.string().trim().min(1);

export const translationDraftSchema = z.object({
  entrySlug: text,
  locale: z.enum(EXTRA_LOCALES),
  title: text,
  summary: text,
  quickTake: text,
  bodySections: z.array(z.object({ heading: text, body: text })).min(1),
  stats: z.array(
    z.object({
      statKey: text,
      metricLabel: text,
      beforeLabel: text,
      beforeValue: text,
      afterLabel: text,
      afterValue: text,
      extraLabel: z.string().trim().min(1).nullish(),
      extraValue: z.string().trim().min(1).nullish(),
    }),
  ),
  note: z.string().trim().min(1).max(300).optional(),
});

export type TranslationDraftInput = z.infer<typeof translationDraftSchema>;

/** Joins a quickTake + bodySections into the plain-text body field (same rule as scripts/seed.ts). */
export function deriveBody(quickTake: string, sections: { heading: string; body: string }[]): string {
  return [quickTake, ...sections.map((s) => `${s.heading}\n\n${s.body}`)].filter(Boolean).join("\n\n");
}

/**
 * Checks a draft against the English entry it translates. A translation must
 * keep the entry's structure: the same number of body sections, and one stats
 * object for every stat row (matched by statKey) with the extra label/value
 * present exactly where English has one. Returns human-readable problems.
 */
export function checkDraftAgainstEntry(
  draft: Pick<TranslationDraftInput, "bodySections" | "stats">,
  entry: { sectionCount: number; stats: { statKey: string; hasExtra: boolean }[] },
): string[] {
  const problems: string[] = [];
  if (draft.bodySections.length !== entry.sectionCount) {
    problems.push(`bodySections has ${draft.bodySections.length} sections, the English entry has ${entry.sectionCount}`);
  }
  const have = new Map(draft.stats.map((s) => [s.statKey, s]));
  for (const s of entry.stats) {
    const d = have.get(s.statKey);
    if (!d) {
      problems.push(`missing stats entry for statKey "${s.statKey}"`);
      continue;
    }
    if (s.hasExtra !== Boolean(d.extraLabel && d.extraValue)) {
      problems.push(`statKey "${s.statKey}": extraLabel/extraValue must be ${s.hasExtra ? "present" : "absent"} to match English`);
    }
  }
  for (const k of have.keys()) {
    if (!entry.stats.some((s) => s.statKey === k)) problems.push(`unknown statKey "${k}"`);
  }
  if (draft.stats.length !== new Set(draft.stats.map((s) => s.statKey)).size) problems.push("duplicate statKey in stats");
  return problems;
}
