import { put } from "@vercel/blob";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { reelPosts } from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

const MAX_BYTES = 4 * 1024 * 1024; // Vercel's function body limit is 4.5 MB
const SLUG = /^[a-z0-9-]{1,200}$/;

/**
 * Stores one rendered reel in the public Blob store and adds it to the Instagram queue as
 * "held". The daily cron only posts "queued" rows, so nothing is published until the owner
 * releases it (scripts/video/enqueue.mjs release N).
 */
export async function POST(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const form = await request.formData();
  const file = form.get("file");
  const slug = String(form.get("slug") ?? "");
  const language = String(form.get("language") ?? "");
  const caption = String(form.get("caption") ?? "");
  const position = Number(form.get("position"));

  if (!(file instanceof File) || file.type !== "video/mp4") {
    return Response.json({ error: "file must be an mp4" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) return Response.json({ error: "file too large" }, { status: 413 });
  if (!SLUG.test(slug) || !["en", "hi"].includes(language) || !caption || caption.length > 2200 || !Number.isInteger(position)) {
    return Response.json({ error: "invalid fields" }, { status: 400 });
  }

  const [existing] = await db.select({ id: reelPosts.id }).from(reelPosts).where(eq(reelPosts.slug, slug)).limit(1);
  if (existing) return Response.json({ skipped: slug });

  const blob = await put(`reels/${slug}.mp4`, file, {
    access: "public",
    contentType: "video/mp4",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  await db.insert(reelPosts).values({ slug, videoUrl: blob.url, caption, language, position, status: "held" });
  return Response.json({ held: slug, position });
}
