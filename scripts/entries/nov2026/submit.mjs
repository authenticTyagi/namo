// Usage: node scripts/entries/nov2026/submit.mjs [baseUrl]
// Posts every entry then its editorial to the pipeline ingest routes. Everything lands pending_review.
import { config } from "dotenv";
import { all } from "./validate.mjs";
config({ path: ".env.local" });
const base = process.argv[2] || "https://modinekiyakyahai.com";
async function post(url, body) {
  for (let i = 0; i < 4; i++) {
    try { return await fetch(url, { method: "POST", headers: h, body: JSON.stringify(body) }); }
    catch (e) { await new Promise((r) => setTimeout(r, 1500 * (i + 1))); }
  }
  return { status: 0, ok: false, text: async () => "network failure" };
}
const h = { "content-type": "application/json", authorization: `Bearer ${process.env.CRON_SECRET}` };
for (const { entry, editorial } of all) {
  const r = await post(`${base}/api/pipeline/ingest`, entry);
  const t = await r.text();
  console.log("ENTRY", r.status, entry.slug.slice(0, 60), r.ok ? t.slice(0, 120) : t.slice(0, 400));
  if (!r.ok && r.status !== 409) continue;
  const e = await post(`${base}/api/pipeline/editorial-ingest`, editorial);
  console.log("  EDIT", e.status, r.ok || e.ok ? (await e.text()).slice(0, 100) : "");
}
