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
