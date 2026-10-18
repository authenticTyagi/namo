import { test } from "node:test";
import assert from "node:assert/strict";
import { computeConfidence, passesSourcingBar } from "./sourcing";

const src = (credibilityTier: "official_primary" | "reputable_media" | "secondary") => ({ credibilityTier });
const clean = { numericConsistency: true, contradictionFound: false };

test("sourcing bar: one official_primary source is enough", () => {
  assert.equal(passesSourcingBar([src("official_primary")]), true);
});

test("sourcing bar: a single non-official source fails", () => {
  assert.equal(passesSourcingBar([src("reputable_media")]), false);
  assert.equal(passesSourcingBar([src("secondary")]), false);
});

test("sourcing bar: two sources of any tier pass", () => {
  assert.equal(passesSourcingBar([src("secondary"), src("secondary")]), true);
  assert.equal(passesSourcingBar([src("reputable_media"), src("secondary")]), true);
});

test("sourcing bar: no sources fails", () => {
  assert.equal(passesSourcingBar([]), false);
});

test("confidence: three official sources, consistent, no contradiction is 1", () => {
  const c = computeConfidence([src("official_primary"), src("official_primary"), src("official_primary")], clean);
  assert.equal(c, 1);
});

test("confidence: a contradiction lowers it by 0.4", () => {
  const sources = [src("official_primary"), src("reputable_media")];
  const base = computeConfidence(sources, clean);
  const contradicted = computeConfidence(sources, { ...clean, contradictionFound: true });
  assert.ok(Math.abs(base - contradicted - 0.4) < 1e-9);
});

test("confidence: weaker tiers score lower", () => {
  const strong = computeConfidence([src("official_primary"), src("official_primary")], clean);
  const weak = computeConfidence([src("secondary"), src("secondary")], clean);
  assert.ok(weak < strong);
});

test("confidence: a source count above three adds nothing", () => {
  const three = computeConfidence(Array(3).fill(src("secondary")), clean);
  const six = computeConfidence(Array(6).fill(src("secondary")), clean);
  assert.equal(three, six);
});

test("confidence: clamped to [0, 1]", () => {
  const low = computeConfidence([src("secondary")], { numericConsistency: false, contradictionFound: true });
  assert.equal(low, 0);
  const high = computeConfidence(Array(3).fill(src("official_primary")), clean);
  assert.ok(high <= 1);
});
