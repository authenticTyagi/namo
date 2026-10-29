import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (p: string) => readFileSync(p, "utf8");

test("the Instagram cron and the reel upload route both require the pipeline secret", () => {
  for (const p of ["src/app/api/cron/instagram/route.ts", "src/app/api/pipeline/reel-upload/route.ts"]) {
    const src = read(p);
    assert.match(src, /if \(!isAuthorizedPipelineRequest\(request\)\)/, p);
  }
});

test("the cron only claims queued reels, never held ones", () => {
  const src = read("src/app/api/cron/instagram/route.ts");
  assert.match(src, /eq\(reelPosts\.status, "queued"\)/);
  assert.doesNotMatch(src, /"held"/);
});

test("uploaded reels always start as held", () => {
  const src = read("src/app/api/pipeline/reel-upload/route.ts");
  assert.match(src, /status: "held"/);
});

import { judgeHealth } from "./instagram-health";

const H = 60 * 60 * 1000;
const base = {
  now: Date.UTC(2026, 10, 1),
  lastRunAt: new Date(Date.UTC(2026, 10, 1) - 5 * H).toISOString(),
  queued: 40,
  exhaustedFailures: 0,
  tokenRefreshedAt: new Date(Date.UTC(2026, 10, 1) - 3 * 24 * H).toISOString(),
};

test("health is clean on a normal day", () => {
  const r = judgeHealth(base);
  assert.deepEqual(r.problems, []);
  assert.deepEqual(r.warnings, []);
});

test("health flags a silent cron, exhausted failures, a failed token refresh and a stale token", () => {
  assert.equal(judgeHealth({ ...base, lastRunAt: new Date(base.now - 40 * H).toISOString() }).problems.length, 1);
  assert.equal(judgeHealth({ ...base, lastRunAt: null }).problems.length, 1);
  assert.equal(judgeHealth({ ...base, exhaustedFailures: 2 }).problems.length, 1);
  assert.equal(judgeHealth({ ...base, lastNote: "token refresh failed: x" }).problems.length, 1);
  assert.equal(judgeHealth({ ...base, tokenRefreshedAt: new Date(base.now - 50 * 24 * H).toISOString() }).problems.length, 1);
});

test("an empty queue is not a cron failure, but a low queue warns", () => {
  const r = judgeHealth({ ...base, queued: 0, lastRunAt: null });
  assert.deepEqual(r.problems, []);
  assert.equal(r.warnings.length, 1);
});

test("the cron retries failed reels and records a heartbeat", () => {
  const src = readFileSync("src/app/api/cron/instagram/route.ts", "utf8");
  assert.match(src, /MAX_ATTEMPTS/);
  assert.match(src, /recordRun/);
});
