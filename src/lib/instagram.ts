// Publishes a reel through the Instagram API with Instagram login (graph.instagram.com).
// Flow: create a REELS container from a public video URL, wait until Instagram has
// processed it, then publish. See the "Content Publishing" docs.
const GRAPH = "https://graph.instagram.com/v23.0";

async function graph(path: string, init: RequestInit, token: string) {
  const res = await fetch(`${GRAPH}${path}`, {
    ...init,
    headers: { ...init.headers, Authorization: `Bearer ${token}` },
  });
  const body = (await res.json()) as Record<string, unknown>;
  if (!res.ok) throw new Error(`Instagram API ${res.status}: ${JSON.stringify(body.error ?? body)}`);
  return body;
}

export async function publishReel(opts: {
  userId: string;
  token: string;
  videoUrl: string;
  caption: string;
  pollMs?: number;
  maxPolls?: number;
}): Promise<string> {
  const { userId, token, videoUrl, caption, pollMs = 5000, maxPolls = 40 } = opts;

  const created = await graph(
    `/${userId}/media`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ media_type: "REELS", video_url: videoUrl, caption, share_to_feed: true }),
    },
    token,
  );
  const containerId = String(created.id);

  for (let i = 0; i < maxPolls; i++) {
    const s = await graph(`/${containerId}?fields=status_code,status`, { method: "GET" }, token);
    if (s.status_code === "FINISHED") break;
    if (s.status_code === "ERROR" || s.status_code === "EXPIRED") {
      throw new Error(`Container ${s.status_code}: ${String(s.status ?? "")}`);
    }
    if (i === maxPolls - 1) throw new Error("Container still processing after timeout");
    await new Promise((r) => setTimeout(r, pollMs));
  }

  const published = await graph(
    `/${userId}/media_publish`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ creation_id: containerId }),
    },
    token,
  );
  return String(published.id);
}

// --- Token upkeep -----------------------------------------------------------------------
// Instagram long-lived tokens last 60 days and can be refreshed once they are 24 hours old.
// Vercel env vars cannot be changed from inside the site, so the refreshed token is kept in
// pipeline_config; IG_ACCESS_TOKEN (env) is only the starting value. Refresh every 30 days.
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { pipelineConfig } from "@/db/schema";

const TOKEN_KEY = "ig_access_token";
export const REFRESHED_KEY = "ig_token_refreshed_at";
const REFRESH_EVERY_MS = 30 * 24 * 60 * 60 * 1000;

export async function getConfig(key: string): Promise<{ value: string; updatedAt: Date } | null> {
  const [row] = await db.select().from(pipelineConfig).where(eq(pipelineConfig.key, key)).limit(1);
  return row ? { value: row.value, updatedAt: row.updatedAt } : null;
}

export async function setConfig(key: string, value: string) {
  await db
    .insert(pipelineConfig)
    .values({ key, value })
    .onConflictDoUpdate({ target: pipelineConfig.key, set: { value, updatedAt: new Date() } });
}

/** Returns the token to use now, refreshing it first when it is 30 or more days old. */
export async function getInstagramToken(): Promise<{ token: string; note?: string }> {
  const stored = await getConfig(TOKEN_KEY);
  const refreshedAt = await getConfig(REFRESHED_KEY);
  const token = stored?.value ?? process.env.IG_ACCESS_TOKEN;
  if (!token) throw new Error("Instagram token is not configured");

  if (!refreshedAt) {
    // First run: the env token was generated recently, so start the 30-day clock now.
    await setConfig(REFRESHED_KEY, new Date().toISOString());
    return { token };
  }
  if (Date.now() - new Date(refreshedAt.value).getTime() < REFRESH_EVERY_MS) return { token };

  try {
    const res = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`,
    );
    const body = (await res.json()) as { access_token?: string; error?: unknown };
    if (!res.ok || !body.access_token) throw new Error(JSON.stringify(body.error ?? body));
    await setConfig(TOKEN_KEY, body.access_token);
    await setConfig(REFRESHED_KEY, new Date().toISOString());
    return { token: body.access_token, note: "token refreshed" };
  } catch (e) {
    // Keep posting with the current token; surface the problem in the run response.
    return { token, note: `token refresh failed: ${e instanceof Error ? e.message : String(e)}` };
  }
}
