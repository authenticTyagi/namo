/**
 * Seeds "India in the World" comparisons from scripts/entries/comparison-*.json.
 * These were previously inserted via one-off, undocumented scripts each
 * session (see PROJECT_LOG.md) — this replaces that with a small, reusable,
 * idempotent script, since comparisons have no /api/pipeline ingest
 * endpoint the way entries and editorials do.
 *
 * Idempotent: safe to re-run (upserts by slug; points/sources are
 * delete+insert, same pattern as seed.ts). Always lands as pending_review
 * on first insert; never touches status on a re-run, so an already-
 * reviewed comparison isn't silently re-hidden or re-published by this
 * script — same discipline as seed.ts's entries loop.
 *
 * Run with: npx tsx scripts/seed-comparisons.ts [file1.json file2.json ...]
 * With no arguments, seeds every scripts/entries/comparison-*.json file.
 */
import { config } from "dotenv";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

config({ path: ".env.local" });

interface ComparisonCountryInput {
  countryNameHi: string;
  countryNameEn: string;
  valueHi: string;
  valueEn: string;
  valueNumeric: number;
  isIndia: boolean;
  sortOrder: number;
}

interface ComparisonSourceInput {
  url: string;
  publisher: string;
  title?: string;
  credibilityTier: "official_primary" | "reputable_media" | "secondary";
  language?: string;
  credibilityNotes?: string;
}

interface ComparisonInput {
  categorySlug: string;
  relatedEntrySlug?: string;
  slug: string;
  titleHi: string;
  titleEn: string;
  metricLabelHi: string;
  metricLabelEn: string;
  unitHi?: string;
  unitEn?: string;
  narrativeHi: string;
  narrativeEn: string;
  countries: ComparisonCountryInput[];
  sources: ComparisonSourceInput[];
}

async function main() {
  const { db, isDbConfigured } = await import("../src/db");
  const { categories, entries, comparisons, comparisonPoints, comparisonSources } =
    await import("../src/db/schema");
  const { eq } = await import("drizzle-orm");

  if (!isDbConfigured) {
    console.error("DATABASE_URL is not set. Copy .env.example to .env.local and fill it in.");
    process.exit(1);
  }

  const entriesDir = path.resolve(__dirname, "entries");
  const argFiles = process.argv.slice(2);
  const files =
    argFiles.length > 0
      ? argFiles
      : (await readdir(entriesDir)).filter(
          (f) => /^comparison-\d+\.json$/.test(f),
        );

  if (files.length === 0) {
    console.log("No comparison-*.json files found.");
    process.exit(0);
  }

  for (const file of files) {
    const filePath = path.isAbsolute(file) ? file : path.join(entriesDir, path.basename(file));
    const raw = await readFile(filePath, "utf-8");
    const input: ComparisonInput = JSON.parse(raw);

    const [category] = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, input.categorySlug))
      .limit(1);
    if (!category) {
      console.error(`Skipping ${file}: unknown categorySlug "${input.categorySlug}"`);
      continue;
    }

    let relatedEntryId: string | null = null;
    if (input.relatedEntrySlug) {
      const [entry] = await db
        .select({ id: entries.id })
        .from(entries)
        .where(eq(entries.slug, input.relatedEntrySlug))
        .limit(1);
      if (!entry) {
        console.error(`Skipping ${file}: unknown relatedEntrySlug "${input.relatedEntrySlug}"`);
        continue;
      }
      relatedEntryId = entry.id;
    }

    const [comparison] = await db
      .insert(comparisons)
      .values({
        slug: input.slug,
        categoryId: category.id,
        relatedEntryId,
        titleHi: input.titleHi,
        titleEn: input.titleEn,
        metricLabelHi: input.metricLabelHi,
        metricLabelEn: input.metricLabelEn,
        unitHi: input.unitHi ?? null,
        unitEn: input.unitEn ?? null,
        narrativeHi: input.narrativeHi,
        narrativeEn: input.narrativeEn,
        // pending_review on insert only — see file header. The
        // onConflictDoUpdate below never sets status.
        status: "pending_review",
        sourceOfCreation: "manual",
      })
      .onConflictDoUpdate({
        target: comparisons.slug,
        set: {
          categoryId: category.id,
          relatedEntryId,
          titleHi: input.titleHi,
          titleEn: input.titleEn,
          metricLabelHi: input.metricLabelHi,
          metricLabelEn: input.metricLabelEn,
          unitHi: input.unitHi ?? null,
          unitEn: input.unitEn ?? null,
          narrativeHi: input.narrativeHi,
          narrativeEn: input.narrativeEn,
          updatedAt: new Date(),
        },
      })
      .returning();

    await db.delete(comparisonPoints).where(eq(comparisonPoints.comparisonId, comparison.id));
    await db.insert(comparisonPoints).values(
      input.countries.map((c) => ({
        comparisonId: comparison.id,
        sortOrder: c.sortOrder,
        isIndia: c.isIndia,
        countryNameHi: c.countryNameHi,
        countryNameEn: c.countryNameEn,
        valueHi: c.valueHi,
        valueEn: c.valueEn,
        valueNumeric: c.valueNumeric.toString(),
      })),
    );

    await db.delete(comparisonSources).where(eq(comparisonSources.comparisonId, comparison.id));
    await db.insert(comparisonSources).values(
      input.sources.map((s) => ({
        comparisonId: comparison.id,
        url: s.url,
        publisher: s.publisher,
        title: s.title ?? null,
        credibilityTier: s.credibilityTier,
        language: s.language ?? null,
      })),
    );

    console.log(
      `Upserted comparison: ${comparison.slug} (${input.countries.length} countries, ${input.sources.length} sources)`,
    );
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
