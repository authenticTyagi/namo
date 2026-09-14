import { db, isDbConfigured } from "@/db";
import { categories } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export async function getActiveCategories() {
  if (!isDbConfigured) return [];
  return db
    .select()
    .from(categories)
    .where(eq(categories.isActive, true))
    .orderBy(asc(categories.sortOrder));
}

export async function getCategoryBySlug(slug: string) {
  if (!isDbConfigured) return null;
  const [category] = await db
    .select()
    .from(categories)
    .where(eq(categories.slug, slug))
    .limit(1);
  return category ?? null;
}
