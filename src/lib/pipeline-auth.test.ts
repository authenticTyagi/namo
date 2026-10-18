import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { isAuthorizedPipelineRequest } from "./pipeline-auth";

const req = (authorization?: string) =>
  new Request("http://localhost/api/pipeline/x", {
    headers: authorization === undefined ? {} : { authorization },
  });

let saved: string | undefined;
beforeEach(() => {
  saved = process.env.CRON_SECRET;
});
afterEach(() => {
  if (saved === undefined) delete process.env.CRON_SECRET;
  else process.env.CRON_SECRET = saved;
});

test("fails closed when CRON_SECRET is unset, even with a matching-looking header", () => {
  delete process.env.CRON_SECRET;
  assert.equal(isAuthorizedPipelineRequest(req("Bearer ")), false);
  assert.equal(isAuthorizedPipelineRequest(req("Bearer undefined")), false);
  assert.equal(isAuthorizedPipelineRequest(req("Bearer anything")), false);
});

test("accepts the exact bearer token", () => {
  process.env.CRON_SECRET = "s3cret-value";
  assert.equal(isAuthorizedPipelineRequest(req("Bearer s3cret-value")), true);
});

test("rejects missing, wrong-scheme, wrong-token and different-length tokens", () => {
  process.env.CRON_SECRET = "s3cret-value";
  assert.equal(isAuthorizedPipelineRequest(req()), false);
  assert.equal(isAuthorizedPipelineRequest(req("Basic s3cret-value")), false);
  assert.equal(isAuthorizedPipelineRequest(req("s3cret-value")), false);
  assert.equal(isAuthorizedPipelineRequest(req("Bearer s3cret-valuf")), false);
  assert.equal(isAuthorizedPipelineRequest(req("Bearer short")), false);
  assert.equal(isAuthorizedPipelineRequest(req("Bearer s3cret-value-and-more")), false);
});
