// Business agent: review-queue health, coverage gaps, trust signals (stale or
// low-confidence content, unanswered feedback, moderation), automation state
// and monetisation state. Suggest/raise only; it decides nothing and publishes
// nothing (RULES #9, #11).

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { SITE, finding, get, opsStats } from "../lib.mjs";

const QUEUE_WARN = 15;
const QUEUE_AGE_WARN_DAYS = 14;
const THIN_CATEGORY = 6;

function draftingScheduleState() {
  const dir = ".github/workflows";
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => /^draft-.*\.yml$/.test(f))
    .map((f) => {
      const src = readFileSync(`${dir}/${f}`, "utf8");
      const active = /^\s{2}schedule:/m.test(src);
      return { workflow: f, scheduled: active };
    });
}

export async function run() {
  const findings = [];
  const notes = [];
  const metrics = {};

  const { stats, reason } = await opsStats();
  if (!stats) {
    notes.push(reason);
    findings.push(finding("medium", "data", "Business figures could not be read from the database", { evidence: reason, suggestion: "Add the CRON_SECRET repository secret (same value as Vercel) so ops-stats can be read." }));
  } else {
    const e = stats.counts.entries;
    const ed = stats.counts.editorials;
    const cmp = stats.counts.comparisons;
    const pending = (e.pending_review ?? 0) + (ed.pending_review ?? 0) + (cmp.pending_review ?? 0);
    metrics.published = { entries: e.published ?? 0, editorials: ed.published ?? 0, comparisons: cmp.published ?? 0 };
    metrics.pendingReview = pending;
    metrics.oldestPendingAgeDays = stats.oldestPendingAgeDays;

    if (pending >= QUEUE_WARN) findings.push(finding("medium", "review-queue", `${pending} items are waiting for the owner's review`, { evidence: `entries ${e.pending_review ?? 0}, editorials ${ed.pending_review ?? 0}, comparisons ${cmp.pending_review ?? 0}`, suggestion: "Pause drafting until the queue is below the weekly review capacity (RULES #11)." }));
    if (stats.oldestPendingAgeDays != null && stats.oldestPendingAgeDays > QUEUE_AGE_WARN_DAYS) findings.push(finding("low", "review-queue", `The oldest pending item is ${stats.oldestPendingAgeDays} days old`, { suggestion: "Review it, reject it, or note why it is parked." }));
    if ((ed.published ?? 0) < (e.published ?? 0) * 0.8) findings.push(finding("info", "coverage", `Editorials cover ${ed.published ?? 0} of ${e.published ?? 0} published entries`, { suggestion: "Run the editorial drafting agent for entries without one (editorial-candidates)." }));

    const thin = stats.categories.filter((c) => c.published < THIN_CATEGORY);
    metrics.thinCategories = thin.map((c) => `${c.nameEn}: ${c.published}`);
    if (thin.length) findings.push(finding("info", "coverage", `Thin categories (under ${THIN_CATEGORY} published): ${thin.map((c) => `${c.nameEn} ${c.published}`).join(", ")}`, { suggestion: "Pick the next topics from these categories (TASKS.md shortlist) rather than the already-deep ones." }));

    if (stats.lowConfidencePublished > 0) findings.push(finding("medium", "trust", `${stats.lowConfidencePublished} published entr${stats.lowConfidencePublished === 1 ? "y has" : "ies have"} a confidence score under 0.50`, { suggestion: "Open /admin, filter published by confidence, and raise the sourcing or add a caveat banner." }));
    if (stats.staleEntries > 0) findings.push(finding(stats.staleEntries > 20 ? "medium" : "low", "freshness", `${stats.staleEntries} published entries were not verified in the last 180 days`, { suggestion: "Work through /admin/freshness oldest first. Re-drafting is not automated yet (TASKS)." }));

    const fb = stats.counts.feedback;
    const newReports = stats.newFeedbackByCategory?.report_issue ?? 0;
    if (newReports > 0) findings.push(finding("high", "feedback", `${newReports} unread "report an issue" submission(s)`, { suggestion: "Read /admin/feedback; a reader may have found a factual error." }));
    if ((fb.new ?? 0) > newReports) findings.push(finding("low", "feedback", `${(fb.new ?? 0) - newReports} other unread feedback item(s)`));
    if ((stats.counts.comments.flagged ?? 0) > 0) findings.push(finding("medium", "moderation", `${stats.counts.comments.flagged} flagged comment(s) await moderation`, { suggestion: "Open /admin/comments." }));
    const tp = stats.counts.translationQueue.pending_review ?? 0;
    if (tp > 0) findings.push(finding("info", "translations", `${tp} bn/te/mr translation draft(s) await a native reader`, { suggestion: "Review at /admin/translations." }));
  }

  // Automation state, read from the repo.
  const wf = draftingScheduleState();
  metrics.draftingSchedules = wf;
  const off = wf.filter((w) => !w.scheduled);
  if (off.length) findings.push(finding("info", "automation", `Scheduled drafting is off for ${off.map((w) => w.workflow).join(", ")}`, { suggestion: "Intentional since 2026-09-29. To resume, add ANTHROPIC_API_KEY and CRON_SECRET secrets, run once by hand, then restore the schedule block." }));

  // Monetisation state.
  const ads = await get(`${SITE}/ads.txt`);
  const home = await get(`${SITE}/en`);
  const adsOn = /adsbygoogle|pagead2/.test(home.body);
  metrics.adsScriptLoaded = adsOn;
  metrics.adsTxtLines = ads.status === 200 ? ads.body.split("\n").filter((l) => l.trim() && !l.startsWith("#")).length : 0;
  if (adsOn && metrics.adsTxtLines === 0) findings.push(finding("high", "ads", "Ads load but ads.txt has no entries", { suggestion: "Add the publisher line to src/app/ads.txt; unauthorised inventory earns nothing." }));
  if (!adsOn) notes.push("Ads are off (no AdSense script on the home page). That is the intended state until the account is approved and the slot id is set (RULES #16).");

  notes.push("Checks: review queue size and age, editorial coverage, thin categories, low-confidence and stale content, unread feedback, flagged comments, translation backlog, drafting automation state, ads state.");
  notes.push("Not covered: revenue, traffic and conversion (no analytics read access), competitor and market data.");
  return { findings, metrics, notes };
}
