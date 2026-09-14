import { createHash, timingSafeEqual } from "crypto";

/**
 * Auth for the /api/pipeline/* routes, called by the scheduled drafting
 * routine (a non-browser caller with no session/cookies) via a shared
 * secret. Compared as fixed-length SHA-256 digests rather than raw strings
 * — timingSafeEqual on variable-length buffers throws instead of
 * comparing, which would itself leak length information.
 */
export function isAuthorizedPipelineRequest(request: Request): boolean {
  const expected = process.env.CRON_SECRET;
  if (!expected) return false; // fail closed if unset, even locally

  const header = request.headers.get("authorization") ?? "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) return false;

  const expectedHash = createHash("sha256").update(expected).digest();
  const actualHash = createHash("sha256").update(token).digest();
  return timingSafeEqual(expectedHash, actualHash);
}
