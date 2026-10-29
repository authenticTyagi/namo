import { sql } from "drizzle-orm";
import { db } from "@/db";
import { reelPosts } from "@/db/schema";
import { getConfig, REFRESHED_KEY } from "@/lib/instagram";

export const HEALTH_KEY = "ig_last_run";
export const MAX_ATTEMPTS = 3;

const HOUR = 60 * 60 * 1000;

export type InstagramHealth = {
  ok: boolean;
  problems: string[];
  warnings: string[];
  queued: number;
  posted: number;
  lastRunAt: string | null;
};

/** Pure decision so it can be tested: what is wrong, given the facts. */
export function judgeHealth(f: {
  now: number;
  lastRunAt: string | null;
  lastNote?: string;
  queued: number;
  exhaustedFailures: number;
  tokenRefreshedAt: string | null;
}): { problems: string[]; warnings: string[] } {
  const problems: string[] = [];
  const warnings: string[] = [];
  const lastRun = f.lastRunAt ? new Date(f.lastRunAt).getTime() : null;
  // The cron is daily: more than 30 hours of silence while reels wait means it is not running.
  if (f.queued > 0 && (lastRun === null || f.now - lastRun > 30 * HOUR)) {
    problems.push("The daily Instagram cron has not run in over 30 hours.");
  }
  if (f.exhaustedFailures > 0) problems.push(`${f.exhaustedFailures} reel(s) failed ${MAX_ATTEMPTS} times and will not be retried.`);
  if (f.lastNote?.startsWith("token refresh failed")) problems.push(f.lastNote);
  if (f.tokenRefreshedAt) {
    const age = f.now - new Date(f.tokenRefreshedAt).getTime();
    if (age > 45 * 24 * HOUR) problems.push("The Instagram token has not refreshed in over 45 days; it expires at 60.");
  }
  if (f.queued < 6) warnings.push(`Only ${f.queued} reel(s) are queued; release more.`);
  return { problems, warnings };
}

export async function getInstagramHealth(now = Date.now()): Promise<InstagramHealth> {
  const [counts] = await db
    .select({
      queued: sql<number>`count(*) filter (where ${reelPosts.status} in ('queued','posting'))::int`,
      posted: sql<number>`count(*) filter (where ${reelPosts.status} = 'posted')::int`,
      exhausted: sql<number>`count(*) filter (where ${reelPosts.status} = 'failed' and (case when ${reelPosts.error} ~ '^#[0-9] ' then substring(${reelPosts.error} from 2 for 1)::int else 99 end) >= ${MAX_ATTEMPTS})::int`,
    })
    .from(reelPosts);
  const last = await getConfig(HEALTH_KEY);
  const refreshed = await getConfig(REFRESHED_KEY);
  let lastRunAt: string | null = null;
  let lastNote: string | undefined;
  if (last) {
    try {
      const j = JSON.parse(last.value) as { at?: string; note?: string };
      lastRunAt = j.at ?? null;
      lastNote = j.note;
    } catch {
      // ignore a malformed heartbeat
    }
  }
  const { problems, warnings } = judgeHealth({
    now,
    lastRunAt,
    lastNote,
    queued: counts.queued,
    exhaustedFailures: counts.exhausted,
    tokenRefreshedAt: refreshed?.value ?? null,
  });
  return { ok: problems.length === 0, problems, warnings, queued: counts.queued, posted: counts.posted, lastRunAt };
}
