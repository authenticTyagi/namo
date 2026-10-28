// Uploads rendered reels to the public Vercel Blob store and adds them to the Instagram queue.
//
//   node --env-file=.env.local scripts/video/enqueue.mjs add [--lang en] [--limit 20]
//   node --env-file=.env.local scripts/video/enqueue.mjs release 10     # let the next 10 held reels post
//   node --env-file=.env.local scripts/video/enqueue.mjs status
//
// Needs DATABASE_URL and CRON_SECRET in the environment (uploads go through /api/pipeline/reel-upload). New rows start as "held":
// the daily cron only posts "queued" rows, so nothing goes out until `release` is run by the owner.
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, "out");
const sql = neon(process.env.DATABASE_URL);

const CTA = {
  en: "Follow @modinekiyakyahai for one sourced fact a day.",
  hi: "रोज़ एक सोर्स वाला तथ्य: @modinekiyakyahai को फॉलो करें।",
};

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};

function parseCsv(text) {
  const [, ...rows] = text.replace(/^﻿/, "").trim().split(/\r?\n/);
  return rows.map((r) => {
    // hooks may contain commas, but file/type/category/page never do: split from both ends.
    const parts = r.split(",");
    const order = parts[0];
    const file = parts[1];
    const page = parts[parts.length - 1];
    return { order: Number(order), file, page };
  });
}

// Strengthens the stored caption: a follow line, then the existing link-in-bio line and hashtags.
function buildCaption(raw, lang) {
  return raw.replace(/\r/g, "").replace("Full story and sources: link in bio", `${CTA[lang] ?? CTA.en}\n\nFull story and sources: link in bio (modinekiyakyahai.com)`).trim();
}

async function add() {
  const lang = arg("lang", "en");
  const limit = Number(arg("limit", "1000"));
  const site = process.env.SITE_URL ?? "https://modinekiyakyahai.com";
  const plan = parseCsv(readFileSync(path.join(OUT, `posting-plan-${lang}.csv`), "utf8")).slice(0, limit);
  const [{ max }] = await sql`select coalesce(max(position), 0) as max from reel_posts`;
  let position = Number(max);
  let added = 0;
  for (const r of plan) {
    const slug = r.file.replace(/\.mp4$/, "");
    const exists = await sql`select 1 from reel_posts where slug = ${slug}`;
    if (exists.length) continue;
    const mp4 = path.join(OUT, r.file);
    const txt = path.join(OUT, `${slug}.txt`);
    if (!existsSync(mp4) || !existsSync(txt)) {
      console.warn(`skip ${slug}: file missing`);
      continue;
    }
    position += 1;
    const form = new FormData();
    form.set("file", new Blob([readFileSync(mp4)], { type: "video/mp4" }), r.file);
    form.set("slug", slug);
    form.set("language", lang);
    form.set("position", String(position));
    form.set("caption", buildCaption(readFileSync(txt, "utf8"), lang));
    const res = await fetch(`${site}/api/pipeline/reel-upload`, {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.CRON_SECRET}` },
      body: form,
    });
    if (!res.ok) throw new Error(`upload failed for ${slug}: ${res.status} ${await res.text()}`);
    added += 1;
    console.log(`held #${position}: ${slug}`);
  }
  console.log(`added ${added} reel(s) as held`);
}

async function release() {
  const n = Number(process.argv[3]);
  if (!Number.isInteger(n) || n < 1) throw new Error("usage: release <count>");
  const rows = await sql`update reel_posts set status = 'queued'
    where id in (select id from reel_posts where status = 'held' order by position limit ${n})
    returning slug, position`;
  rows.forEach((r) => console.log(`queued #${r.position}: ${r.slug}`));
  console.log(`released ${rows.length}`);
}

async function status() {
  const rows = await sql`select status, count(*)::int as n from reel_posts group by status order by status`;
  rows.forEach((r) => console.log(`${r.status}: ${r.n}`));
}

const cmd = process.argv[2];
if (cmd === "add") await add();
else if (cmd === "release") await release();
else if (cmd === "status") await status();
else console.log("usage: enqueue.mjs add|release <n>|status");
