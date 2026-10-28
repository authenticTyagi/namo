import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { reelPosts } from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";
import { publishReel } from "@/lib/instagram";

// Videos take a while for Instagram to process; allow the function to wait.
export const maxDuration = 300;

/**
 * Posts the next queued reel. Called once a day by Vercel Cron (vercel.json), which
 * sends `Authorization: Bearer $CRON_SECRET`. A reel is claimed (status -> posting)
 * before the API call so an overlapping run cannot post it twice.
 */
export async function GET(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const token = process.env.IG_ACCESS_TOKEN;
  const userId = process.env.IG_USER_ID;
  if (!token || !userId) return Response.json({ error: "Instagram is not configured" }, { status: 503 });

  const [next] = await db
    .select()
    .from(reelPosts)
    .where(eq(reelPosts.status, "queued"))
    .orderBy(asc(reelPosts.position))
    .limit(1);
  if (!next) return Response.json({ posted: null, note: "queue empty" });

  const claimed = await db
    .update(reelPosts)
    .set({ status: "posting" })
    .where(and(eq(reelPosts.id, next.id), eq(reelPosts.status, "queued")))
    .returning({ id: reelPosts.id });
  if (claimed.length === 0) return Response.json({ posted: null, note: "already claimed" });

  try {
    const mediaId = await publishReel({ userId, token, videoUrl: next.videoUrl, caption: next.caption });
    await db
      .update(reelPosts)
      .set({ status: "posted", igMediaId: mediaId, postedAt: new Date(), error: null })
      .where(eq(reelPosts.id, next.id));
    return Response.json({ posted: next.slug, igMediaId: mediaId });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    await db.update(reelPosts).set({ status: "failed", error: message.slice(0, 500) }).where(eq(reelPosts.id, next.id));
    return Response.json({ posted: null, failed: next.slug, error: message }, { status: 500 });
  }
}
