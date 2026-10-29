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
