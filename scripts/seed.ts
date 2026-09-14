/**
 * Seed script. Seeds the starting category (Economy, Infra & Digital) and
 * the Phase 1 entries in scripts/entries/phase1.ts — 8 hand-curated,
 * cited entries, reviewed and approved by the site owner. Run with:
 * npm run db:seed
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

async function main() {
  const { db, isDbConfigured } = await import("../src/db");
  const { categories, tags, entries, entryTags, sources } = await import(
    "../src/db/schema"
  );
  const { phase1Entries } = await import("./entries/phase1");
  const { eq } = await import("drizzle-orm");

  if (!isDbConfigured) {
    console.error(
      "DATABASE_URL is not set. Copy .env.example to .env.local, fill in your Neon connection string, then re-run.",
    );
    process.exit(1);
  }

  const seedCategories = [
    {
      slug: "economy-infra-digital",
      nameHi: "अर्थव्यवस्था, इंफ्रास्ट्रक्चर और डिजिटल",
      nameEn: "Economy, Infra & Digital",
      descriptionHi:
        "GDP और आर्थिक वृद्धि, सड़क/रेल/बंदरगाह, Digital India, UPI, स्टार्टअप इकोसिस्टम।",
      descriptionEn:
        "GDP and economic growth, roads/rail/ports, Digital India, UPI, the startup ecosystem.",
      sortOrder: 1,
    },
  ];

  for (const category of seedCategories) {
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
  }

  const [category] = await db
    .select()
    .from(categories)
    .where(eq(categories.slug, "economy-infra-digital"))
    .limit(1);

  for (const entryInput of phase1Entries) {
    const [entry] = await db
      .insert(entries)
      .values({
        categoryId: category.id,
        slug: entryInput.slug,
        titleHi: entryInput.titleHi,
        titleEn: entryInput.titleEn,
        summaryHi: entryInput.summaryHi,
        summaryEn: entryInput.summaryEn,
        bodyHi: entryInput.bodyHi,
        bodyEn: entryInput.bodyEn,
        impactType: entryInput.impactType,
        status: "published",
        timelineStartDate: new Date(entryInput.timelineStartDate),
        timelineEndDate: new Date(entryInput.timelineEndDate),
        publishDate: new Date(),
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
          bodyHi: entryInput.bodyHi,
          bodyEn: entryInput.bodyEn,
          impactType: entryInput.impactType,
          timelineStartDate: new Date(entryInput.timelineStartDate),
          timelineEndDate: new Date(entryInput.timelineEndDate),
          lastVerifiedDate: new Date(),
          updatedAt: new Date(),
        },
      })
      .returning();

    // Re-sync sources for this entry (delete + insert, simplest for a
    // re-runnable seed script at this scale).
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

    // Upsert tags, then re-sync the entry_tags join rows.
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

    console.log(`Upserted entry: ${entry.slug} (${entryInput.sources.length} sources, ${tagIds.length} tags)`);
  }

  console.log(`Seed complete. ${phase1Entries.length} entries seeded.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
