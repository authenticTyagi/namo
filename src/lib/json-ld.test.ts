import test from "node:test";
import assert from "node:assert/strict";
import { jsonLdString } from "./json-ld";

test("escapes script-closing sequences without changing the parsed value", () => {
  const value = { headline: "</script><script>alert(1)</script>", n: 3 };
  const out = jsonLdString(value);
  assert.ok(!out.includes("<"));
  assert.deepEqual(JSON.parse(out), value);
});
