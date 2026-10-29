import { and, asc, eq, inArray, sql } from "drizzle-orm";
import { db } from "@/db";
import { reelPosts } from "@/db/schema";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";
import { getInstagramToken, publishReel, setConfig } from "@/lib/instagram";
import { HEALTH_KEY, MAX_ATTEMPTS } from "@/lib/instagram-health";

// Videos take a while for Instagram to process; allow the function to wait.
export const maxDuration = 300;

const PER_RUN = Math.min(Math.max(Number(process.env.IG_POSTS_PER_RUN ?? 3), 1), 5);

/**
 * Posts the next queued reels (IG_POSTS_PER_RUN, default 3). Vercel Hobby only allows a
 * daily cron, so each run posts a small burst. Called by Vercel Cron (vercel.json), which
 * sends `Authorization: Bearer $CRON_SECRET`. Rows are claimed (status -> posting) before
 * any API call so an overlapping run cannot post the same reel twice; the reels are
 * processed in parallel so a burst stays inside the function time limit.
 *
 * A failed reel is retried on later runs: its error is stored as "#<attempt> <message>" and
 * rows that failed fewer than MAX_ATTEMPTS times go back to the queue at the start of a run
 * (they keep their position, so they post first). Each run records a heartbeat in
 * pipeline_config (HEALTH_KEY) that /api/health/instagram and the admin dashboard read.
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

  // Retry earlier failures (the attempt number lives in the error prefix "#n ").
  await db
    .update(reelPosts)
    .set({ status: "queued" })
    .where(
      and(
        eq(reelPosts.status, "failed"),
        sql`case when ${reelPosts.error} ~ '^#[0-9] ' then substring(${reelPosts.error} from 2 for 1)::int else 99 end < ${MAX_ATTEMPTS}`,
      ),
    );

  const next = await db
    .select()
    .from(reelPosts)
    .where(eq(reelPosts.status, "queued"))
    .orderBy(asc(reelPosts.position))
    .limit(PER_RUN);
  if (next.length === 0) {
    await recordRun({ posted: 0, failed: 0, note: note ?? "queue empty" });
    return Response.json({ posted: [], note: note ?? "queue empty" });
  }

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
        const prior = /^#(\d) /.exec(reel.error ?? "");
        const attempt = (prior ? Number(prior[1]) : 0) + 1;
        await db
          .update(reelPosts)
          .set({ status: "failed", error: `#${attempt} ${message}`.slice(0, 500) })
          .where(eq(reelPosts.id, reel.id));
        return { slug: reel.slug, error: message };
      }
    }),
  );

  const failed = results.filter((r) => "error" in r);
  await recordRun({ posted: results.length - failed.length, failed: failed.length, note });
  return Response.json({ posted: results.filter((r) => !("error" in r)), failed, note }, { status: failed.length ? 207 : 200 });
}

async function recordRun(run: { posted: number; failed: number; note?: string }) {
  try {
    await setConfig(HEALTH_KEY, JSON.stringify({ at: new Date().toISOString(), ...run }));
  } catch {
    // The heartbeat is best-effort; never fail a posting run because of it.
  }
}
