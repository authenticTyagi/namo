"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { trustedSources } from "@/db/schema";
import { auth } from "@/auth";

const PLATFORMS = ["website", "twitter_x", "youtube", "instagram", "facebook", "other"] as const;
type Platform = (typeof PLATFORMS)[number];

const TIERS = ["official_primary", "reputable_media", "secondary"] as const;
type Tier = (typeof TIERS)[number];

async function requireAdmin() {
  const session = await auth();
  if (session?.user.role !== "admin") throw new Error("Forbidden");
  return session;
}

export async function createTrustedSource(formData: FormData) {
  const session = await requireAdmin();

  const label = String(formData.get("label") ?? "").trim();
  const handleOrUrl = String(formData.get("handleOrUrl") ?? "").trim();
  const platformRaw = String(formData.get("platform") ?? "").trim();
  const tierRaw = String(formData.get("credibilityTier") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const isVideoSource = formData.get("isVideoSource") === "on";

  if (!label || !handleOrUrl || !platformRaw || !tierRaw) {
    throw new Error("Label, handle/URL, platform, and credibility tier are required");
  }
  if (!PLATFORMS.includes(platformRaw as Platform)) throw new Error("Invalid platform");
  if (!TIERS.includes(tierRaw as Tier)) throw new Error("Invalid credibility tier");

  await db.insert(trustedSources).values({
    label,
    handleOrUrl,
    platform: platformRaw as Platform,
    credibilityTier: tierRaw as Tier,
    notes: notes || null,
    isVideoSource,
    addedBy: session.user.id ?? null,
  });

  revalidatePath("/admin/trusted-sources");
}

export async function deleteTrustedSource(id: string) {
  await requireAdmin();

  await db.delete(trustedSources).where(eq(trustedSources.id, id));

  revalidatePath("/admin/trusted-sources");
}
