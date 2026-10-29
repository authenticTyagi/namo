import { getInstagramHealth } from "@/lib/instagram-health";

export const dynamic = "force-dynamic";

/**
 * Public, read-only health of the Instagram posting job: 200 when fine, 503 with the problems
 * when something needs attention. It exposes counts and plain-language problems only (no
 * tokens, captions or slugs), so a free uptime monitor can poll it and email the owner.
 */
export async function GET() {
  try {
    const h = await getInstagramHealth();
    return Response.json(h, { status: h.ok ? 200 : 503, headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ ok: false, problems: ["Health check could not read the database."] }, { status: 503 });
  }
}
