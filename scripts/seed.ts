/**
 * Seed script. Seeds every category + its entries from the content packs
 * below (one file per category under scripts/entries/) — hand-curated,
 * cited, reviewed content. Run with: npm run db:seed
 *
 * Idempotent: safe to re-run (upserts by slug).
 *
 * NOTE: src/db and dotenv are loaded dynamically (after config()) rather
 * than via top-level import, because static imports are hoisted above any
 * code in the module and would read process.env.DATABASE_URL before it's
 * been loaded from .env.local.
 */
import { config } from "dotenv";

config({ path: ".env.local" });

/** Joins a quickTake + bodySections into the legacy plain-text body field. */
function deriveBody(
  quickTake: string,
  sections: { heading: string; body: string }[],
): string {
  return [quickTake, ...sections.map((s) => `${s.heading}\n\n${s.body}`)]
    .filter(Boolean)
    .join("\n\n");
}

async function main() {
  const { db, isDbConfigured } = await import("../src/db");
  const { categories, tags, entries, entryTags, sources, entryStats } =
    await import("../src/db/schema");
  const { eq } = await import("drizzle-orm");

  if (!isDbConfigured) {
    console.error(
      "DATABASE_URL is not set. Copy .env.example to .env.local, fill in your Neon connection string, then re-run.",
    );
    process.exit(1);
  }

  // One content pack per category. Add a new { category, entries } import
  // here as new categories get drafted — nothing else in this script needs
  // to change.
  const { category: economyCategory, phase1Entries } = await import(
    "./entries/phase1"
  );
  const { category: spaceCategory, spaceEntries } = await import(
    "./entries/space"
  );
  const { category: foreignPolicyCategory, foreignPolicyEntries } = await import(
    "./entries/foreign-policy"
  );
  const { category: defenseCategory, defenseEntries } = await import(
    "./entries/defense"
  );
  const { category: currencyCategory, currencyPricesEntries } = await import(
    "./entries/currency-prices"
  );
  const { category: welfareCategory, welfareEntries } = await import(
    "./entries/welfare"
  );
  const { category: agricultureCategory, agricultureEntries } = await import(
    "./entries/agriculture"
  );
  const { category: environmentCategory, environmentEntries } = await import(
    "./entries/environment"
  );
  const { category: educationCategory, educationEntries } = await import(
    "./entries/education"
  );
  const { category: healthInfrastructureCategory, healthInfrastructureEntries } = await import(
    "./entries/health-infrastructure"
  );
  const { category: womenChildDevelopmentCategory, womenChildDevelopmentEntries } = await import(
    "./entries/women-child-development"
  );
  const contentPacks = [
    { category: economyCategory, entries: phase1Entries },
    { category: spaceCategory, entries: spaceEntries },
    { category: foreignPolicyCategory, entries: foreignPolicyEntries },
    { category: defenseCategory, entries: defenseEntries },
    { category: currencyCategory, entries: currencyPricesEntries },
    { category: welfareCategory, entries: welfareEntries },
    { category: agricultureCategory, entries: agricultureEntries },
    { category: environmentCategory, entries: environmentEntries },
    { category: educationCategory, entries: educationEntries },
    { category: healthInfrastructureCategory, entries: healthInfrastructureEntries },
    { category: womenChildDevelopmentCategory, entries: womenChildDevelopmentEntries },
  ];

  for (const { category, entries: packEntries } of contentPacks) {
    await db
      .insert(categories)
      .values(category)
      .onConflictDoUpdate({
        target: categories.slug,
        set: {
          nameHi: category.nameHi,
          nameEn: category.nameEn,
          descriptionHi: category.descriptionHi,
          descriptionEn: category.descriptionEn,
          sortOrder: category.sortOrder,
        },
      });
    console.log(`Upserted category: ${category.slug}`);

    const [categoryRow] = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, category.slug))
      .limit(1);

    for (const entryInput of packEntries) {
      const bodyHi = deriveBody(entryInput.quickTakeHi, entryInput.bodySectionsHi);
      const bodyEn = deriveBody(entryInput.quickTakeEn, entryInput.bodySectionsEn);

      // Detect a content edit to an already-published entry so re-seeding
      // sends it back to pending_review, same as the admin edit form does.
      // Without this, editing a published entry's content-pack file and
      // re-running db:seed would silently keep it live with stale review
      // history — a real gap found and fixed 2026-09-23 (see PROJECT_LOG).
      const [existing] = await db
        .select({
          status: entries.status,
          titleHi: entries.titleHi,
          titleEn: entries.titleEn,
          summaryHi: entries.summaryHi,
          summaryEn: entries.summaryEn,
          bodyHi: entries.bodyHi,
          bodyEn: entries.bodyEn,
          impactType: entries.impactType,
          timelineStartDate: entries.timelineStartDate,
          timelineEndDate: entries.timelineEndDate,
        })
        .from(entries)
        .where(eq(entries.slug, entryInput.slug))
        .limit(1);

      const contentChanged =
        !!existing &&
        (existing.titleHi !== entryInput.titleHi ||
          existing.titleEn !== entryInput.titleEn ||
          existing.summaryHi !== entryInput.summaryHi ||
          existing.summaryEn !== entryInput.summaryEn ||
          existing.bodyHi !== bodyHi ||
          existing.bodyEn !== bodyEn ||
          existing.impactType !== entryInput.impactType ||
          existing.timelineStartDate?.getTime() !==
            new Date(entryInput.timelineStartDate).getTime() ||
          existing.timelineEndDate?.getTime() !==
            new Date(entryInput.timelineEndDate).getTime());

      const shouldResetStatus = existing?.status === "published" && contentChanged;
      if (shouldResetStatus) {
        console.log(
          `  -> ${entryInput.slug} was published and content changed; resetting to pending_review`,
        );
      }

      const [entry] = await db
        .insert(entries)
        .values({
          categoryId: categoryRow.id,
          slug: entryInput.slug,
          titleHi: entryInput.titleHi,
          titleEn: entryInput.titleEn,
          summaryHi: entryInput.summaryHi,
          summaryEn: entryInput.summaryEn,
          bodyHi,
          bodyEn,
          quickTakeHi: entryInput.quickTakeHi,
          quickTakeEn: entryInput.quickTakeEn,
          bodySectionsHi: entryInput.bodySectionsHi,
          bodySectionsEn: entryInput.bodySectionsEn,
          impactType: entryInput.impactType,
          // pending_review, not published — a brand-new entry always needs
          // the same admin approval as an editorial/comparison/pipeline
          // submission before it's public. Previously this inserted straight
          // to "published", which was an inconsistency with the rest of the
          // site's review discipline — fixed 2026-09-15. The onConflictDoUpdate
          // below normally leaves status alone too, EXCEPT it resets an
          // already-published row back to pending_review when the content
          // actually changed (shouldResetStatus, computed above) — fixed
          // 2026-09-23, see PROJECT_LOG.
          status: "pending_review",
          timelineStartDate: new Date(entryInput.timelineStartDate),
          timelineEndDate: new Date(entryInput.timelineEndDate),
          lastVerifiedDate: new Date(),
          sourceOfCreation: "manual",
        })
        .onConflictDoUpdate({
          target: entries.slug,
          set: {
            titleHi: entryInput.titleHi,
            titleEn: entryInput.titleEn,
            summaryHi: entryInput.summaryHi,
            summaryEn: entryInput.summaryEn,
            bodyHi,
            bodyEn,
            quickTakeHi: entryInput.quickTakeHi,
            quickTakeEn: entryInput.quickTakeEn,
            bodySectionsHi: entryInput.bodySectionsHi,
            bodySectionsEn: entryInput.bodySectionsEn,
            impactType: entryInput.impactType,
            timelineStartDate: new Date(entryInput.timelineStartDate),
            timelineEndDate: new Date(entryInput.timelineEndDate),
            lastVerifiedDate: new Date(),
            updatedAt: new Date(),
            ...(shouldResetStatus ? { status: "pending_review" as const } : {}),
          },
        })
        .returning();

      // Re-sync sources/tags/stats for this entry (delete + insert, simplest
      // for a re-runnable seed script at this scale).
      await db.delete(sources).where(eq(sources.entryId, entry.id));
      if (entryInput.sources.length > 0) {
        await db.insert(sources).values(
          entryInput.sources.map((s) => ({
            entryId: entry.id,
            url: s.url,
            publisher: s.publisher,
            title: s.title ?? null,
            credibilityTier: s.credibilityTier,
            credibilityNotes: s.credibilityNotes ?? null,
            language: s.language ?? null,
          })),
        );
      }

      const tagIds: string[] = [];
      for (const tagInput of entryInput.tags) {
        const [tag] = await db
          .insert(tags)
          .values(tagInput)
          .onConflictDoUpdate({
            target: tags.slug,
            set: { labelHi: tagInput.labelHi, labelEn: tagInput.labelEn },
          })
          .returning();
        tagIds.push(tag.id);
      }
      await db.delete(entryTags).where(eq(entryTags.entryId, entry.id));
      if (tagIds.length > 0) {
        await db
          .insert(entryTags)
          .values(tagIds.map((tagId) => ({ entryId: entry.id, tagId })));
      }

      await db.delete(entryStats).where(eq(entryStats.entryId, entry.id));
      if (entryInput.stats.length > 0) {
        await db.insert(entryStats).values(
          entryInput.stats.map((s, i) => ({
            entryId: entry.id,
            sortOrder: s.sortOrder ?? i,
            statKey: s.statKey,
            metricLabelHi: s.metricLabelHi,
            metricLabelEn: s.metricLabelEn,
            beforeLabelHi: s.beforeLabelHi,
            beforeLabelEn: s.beforeLabelEn,
            beforeValueHi: s.beforeValueHi,
            beforeValueEn: s.beforeValueEn,
            beforeValueNumeric: s.beforeValueNumeric?.toString() ?? null,
            afterLabelHi: s.afterLabelHi,
            afterLabelEn: s.afterLabelEn,
            afterValueHi: s.afterValueHi,
            afterValueEn: s.afterValueEn,
            afterValueNumeric: s.afterValueNumeric?.toString() ?? null,
            extraLabelHi: s.extraLabelHi ?? null,
            extraLabelEn: s.extraLabelEn ?? null,
            extraValueHi: s.extraValueHi ?? null,
            extraValueEn: s.extraValueEn ?? null,
            extraValueNumeric: s.extraValueNumeric?.toString() ?? null,
          })),
        );
      }

      console.log(
        `Upserted entry: ${entry.slug} (${entryInput.sources.length} sources, ${tagIds.length} tags, ${entryInput.stats.length} stats)`,
      );
    }
  }

  const totalEntries = contentPacks.reduce((n, p) => n + p.entries.length, 0);
  console.log(`Seed complete. ${contentPacks.length} categories, ${totalEntries} entries seeded.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
