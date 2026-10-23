// Reader-nudges agent: suggests notifications and helper functions that would
// help users, and DRAFTS the text. It sends nothing. The site has no mail
// provider, push or WhatsApp integration, and no consent flow, so every item
// here is a proposal for the owner (RULES #9, privacy rules).

import { SITE, finding, get, opsStats } from "../lib.mjs";

/** Which reader-helper features does the live entry page already show? */
export function detectHelpers(html) {
  const has = (re) => re.test(html);
  return {
    sourcesList: has(/sources?/i) && has(/<a[^>]+href="https?:/i),
    lastVerified: has(/last verified|verified on|अंतिम सत्यापन/i),
    reportAnIssue: has(/feedback|report an issue|त्रुटि/i),
    whatsappShare: has(/wa\.me|whatsapp/i),
    readAloud: has(/read aloud|listen|सुनें/i),
    quickTake: has(/quick take|संक्षेप/i),
    breadcrumbs: has(/aria-label="breadcrumb"/i),
  };
}

export function draftDigest(items) {
  if (!items.length) return null;
  const en = items.map((i) => `• ${i.titleEn}\n  ${process.env.SITE_BASE_URL || SITE}/en/entry/${i.slug}`).join("\n");
  const hi = items.map((i) => `• ${i.titleHi}\n  ${process.env.SITE_BASE_URL || SITE}/hi/entry/${i.slug}`).join("\n");
  return `**English**\n\n\`\`\`\nNew on Modi Ne Kiya Kya Hai (every claim sourced):\n${en}\n\`\`\`\n\n**हिंदी**\n\n\`\`\`\nमोदी ने क्या किया है पर नया (हर दावे का स्रोत):\n${hi}\n\`\`\``;
}

export async function run() {
  const findings = [];
  const notes = [];
  const metrics = {};
  let extra = "";

  const { stats, reason } = await opsStats();
  if (stats) {
    metrics.recentPublished = stats.recentPublished.length;
    const draft = draftDigest(stats.recentPublished.slice(0, 5));
    if (draft) {
      findings.push(finding("info", "digest", `${stats.recentPublished.length} entr${stats.recentPublished.length === 1 ? "y was" : "ies were"} published in the last 14 days: a weekly "what's new" digest is ready to copy`, { suggestion: "Paste it into WhatsApp channels or a newsletter yourself; nothing was sent." }));
      extra += `### Draft: what's new (NOT SENT)\n\n${draft}\n`;
    }
    if (stats.staleEntries > 0) {
      findings.push(finding("info", "freshness", `${stats.staleEntries} entries are overdue for re-verification`, { suggestion: "Show a visible 'last verified' date on each entry so readers can judge freshness themselves, and a short 'what changed' note after any correction." }));
    }
    if ((stats.counts.feedback.new ?? 0) > 0) findings.push(finding("info", "responsiveness", `${stats.counts.feedback.new} readers are waiting for a response to feedback`, { suggestion: "Add an optional email field acknowledgement ('thanks, we read it') so senders know it arrived." }));
  } else notes.push(reason);

  const sm = await get(`${SITE}/sitemap.xml`);
  const entryUrl = [...sm.body.matchAll(/<loc>([^<]*\/en\/entry\/[^<]+)<\/loc>/g)][0]?.[1];
  if (entryUrl) {
    const page = await get(entryUrl);
    const helpers = detectHelpers(page.body);
    metrics.helpers = helpers;
    const missing = Object.entries(helpers).filter(([, v]) => !v).map(([k]) => k);
    if (missing.length) findings.push(finding("low", "helpers", `Reader helpers not detected on a sample entry page: ${missing.join(", ")}`, { evidence: entryUrl, suggestion: "Heuristic text match; confirm in the browser before building anything." }));
  }

  findings.push(
    finding("info", "proposals", "Helper functions and notifications worth considering, none built", {
      suggestion:
        "1) 'Related entries' and 'what changed' links on each page. 2) A bookmark/read-later list in the browser (no account). 3) Email or WhatsApp weekly digest with explicit opt-in (needs a mail provider and consent copy, TASKS). 4) A correction notice banner when a published entry is edited. 5) 'Compare with the world' link from each entry that has a matching comparison. 6) A 'verify this claim' search landing page.",
    }),
  );

  notes.push("This agent drafts text and proposes features only. It has no way to send anything, by design: there is no mail provider, push channel, or consent record on the site.");
  notes.push("Checks: recent publications for a digest, overdue verification, waiting feedback, reader helpers detected on a sample entry page.");
  return { findings, metrics, notes, extra };
}
