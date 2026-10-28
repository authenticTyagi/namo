import { and, asc, eq, inArray } from "drizzle-orm";
import { db } from "@/db";
import { reelPosts } from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";
import { getInstagramToken, publishReel } from "@/lib/instagram";

// Videos take a while for Instagram to process; allow the function to wait.
export const maxDuration = 300;

const PER_RUN = Math.min(Math.max(Number(process.env.IG_POSTS_PER_RUN ?? 3), 1), 5);

/**
 * Posts the next queued reels (IG_POSTS_PER_RUN, default 3). Vercel Hobby only allows a
 * daily cron, so each run posts a small burst. Called by Vercel Cron (vercel.json), which
 * sends `Authorization: Bearer $CRON_SECRET`. Rows are claimed (status -> posting) before
 * any API call so an overlapping run cannot post the same reel twice; the reels are
 * processed in parallel so a burst stays inside the function time limit.
 */
export async function GET(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = process.env.IG_USER_ID;
  if (!userId) return Response.json({ error: "Instagram is not configured" }, { status: 503 });
  let auth: { token: string; note?: string };
  try {
    auth = await getInstagramToken();
  } catch {
    return Response.json({ error: "Instagram is not configured" }, { status: 503 });
  }
  const { token, note } = auth;

  const next = await db
    .select()
    .from(reelPosts)
    .where(eq(reelPosts.status, "queued"))
    .orderBy(asc(reelPosts.position))
    .limit(PER_RUN);
  if (next.length === 0) return Response.json({ posted: [], note: note ?? "queue empty" });

  const claimed = await db
    .update(reelPosts)
    .set({ status: "posting" })
    .where(and(inArray(reelPosts.id, next.map((r) => r.id)), eq(reelPosts.status, "queued")))
    .returning({ id: reelPosts.id });
  const mine = new Set(claimed.map((c) => c.id));
  const batch = next.filter((r) => mine.has(r.id));

  const results = await Promise.all(
    batch.map(async (reel) => {
      try {
        const mediaId = await publishReel({ userId, token, videoUrl: reel.videoUrl, caption: reel.caption });
        await db
          .update(reelPosts)
          .set({ status: "posted", igMediaId: mediaId, postedAt: new Date(), error: null })
          .where(eq(reelPosts.id, reel.id));
        return { slug: reel.slug, igMediaId: mediaId };
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        await db.update(reelPosts).set({ status: "failed", error: message.slice(0, 500) }).where(eq(reelPosts.id, reel.id));
        return { slug: reel.slug, error: message };
      }
    }),
  );

  const failed = results.filter((r) => "error" in r);
  return Response.json({ posted: results.filter((r) => !("error" in r)), failed, note }, { status: failed.length ? 207 : 200 });
}
