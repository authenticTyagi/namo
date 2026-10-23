// Security and auth agent. Turns the SECURITY.md checklist into repeatable checks.
// Read-only: it probes the public site without credentials and scans the repo.

import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { SITE, finding, get } from "../lib.mjs";

const REQUIRED_HEADERS = {
  "strict-transport-security": /max-age=\d{7,}/,
  "x-content-type-options": /nosniff/i,
  "referrer-policy": /.+/,
  "content-security-policy": /frame-ancestors/,
  "permissions-policy": /.+/,
};

// Files allowed to use dangerouslySetInnerHTML (JSON-LD via jsonLdString, theme init).
const INNER_HTML_ALLOW = [
  "src/components/Breadcrumbs.tsx",
  "src/app/[locale]/entry/[entrySlug]/page.tsx",
  "src/app/[locale]/layout.tsx",
  "src/app/[locale]/india-in-the-world/[comparisonSlug]/page.tsx",
  "src/app/[locale]/editorial/[editorialSlug]/page.tsx",
];

// Server-action files that are public by design and rate-limited or session-checked in the query layer.
const PUBLIC_ACTION_FILES = ["src/app/[locale]/feedback/actions.ts", "src/components/comments/actions.ts", "src/components/comments/SignInToComment.tsx"];

const SECRET_PATTERNS = [
  [/sk-ant-[A-Za-z0-9_-]{20,}/, "Anthropic API key"],
  [/AIza[0-9A-Za-z_-]{35}/, "Google API key"],
  [/GOCSPX-[A-Za-z0-9_-]{20,}/, "Google OAuth client secret"],
  [/ghp_[A-Za-z0-9]{36}/, "GitHub token"],
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, "private key"],
  [/postgres(?:ql)?:\/\/[^\s:@/"']+:(?!password@|\$|\{)[^\s@/"']{6,}@(?!localhost\.placeholder)/, "database URL with a password"],
];

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p.replace(/\\/g, "/"));
  }
  return out;
}

function auditDependencies(findings, metrics) {
  let json;
  try {
    // npm audit exits non-zero when it finds something; the JSON is on stdout either way.
    try {
      json = execFileSync("npm", ["audit", "--omit=dev", "--json"], { encoding: "utf8", shell: process.platform === "win32" });
    } catch (e) {
      json = e.stdout?.toString() ?? "";
    }
    const parsed = JSON.parse(json);
    const v = parsed.metadata?.vulnerabilities ?? {};
    metrics.vulnerabilities = v;
    for (const sev of ["critical", "high", "moderate", "low"]) {
      if (v[sev] > 0) {
        const names = Object.entries(parsed.vulnerabilities ?? {})
          .filter(([, d]) => d.severity === sev)
          .map(([n]) => n)
          .slice(0, 8)
          .join(", ");
        findings.push(
          finding(sev === "moderate" ? "medium" : sev, "dependencies", `npm audit reports ${v[sev]} ${sev} vulnerabilit${v[sev] === 1 ? "y" : "ies"} in production dependencies`, {
            evidence: names,
            suggestion: "Run `npm audit` locally; for a patch-level fix `npm install <pkg>@<fixed> --save-exact`, then npm test, tsc and build. Next.js: patch bumps only (RULES #14).",
          }),
        );
      }
    }
  } catch (e) {
    findings.push(finding("medium", "dependencies", `npm audit could not be run or parsed: ${e.message}`));
  }
}

async function checkNextPatch(findings, metrics) {
  try {
    const pkg = JSON.parse(readFileSync("package.json", "utf8"));
    const current = pkg.dependencies.next;
    const minor = current.split(".").slice(0, 2).join(".");
    let all;
    try {
      all = JSON.parse(execFileSync("npm", ["view", "next", "versions", "--json"], { encoding: "utf8", shell: process.platform === "win32" }));
    } catch (e) {
      findings.push(finding("low", "dependencies", `npm registry unreachable, so newer Next patches were not checked: ${String(e.message).split("\n")[0]}`));
      return;
    }
    const versions = all.filter((v) => v.startsWith(minor + ".") && /^\d+\.\d+\.\d+$/.test(v));
    const num = (v) => v.split(".").map(Number);
    versions.sort((a, b) => {
      const [x, y] = [num(a), num(b)];
      return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
    });
    const latest = versions.at(-1);
    metrics.next = { pinned: current, latestPatch: latest };
    if (latest && latest !== current) {
      findings.push(
        finding("medium", "dependencies", `Next.js ${current} is pinned but ${latest} is available in the same minor`, {
          suggestion: `Read the release notes for security fixes; if any, \`npm install next@${latest} eslint-config-next@${latest} --save-exact\`, run tests and build, and update RULES.md #14 and ARCHITECTURE.md.`,
        }),
      );
    }
  } catch (e) {
    findings.push(finding("low", "dependencies", `Could not check for newer Next.js patches: ${e.message}`));
  }
}

async function checkHeaders(findings) {
  const res = await get(`${SITE}/en`);
  if (res.status !== 200) {
    findings.push(finding("high", "headers", `Home page did not return 200 (got ${res.status || res.error})`));
    return res;
  }
  for (const [h, re] of Object.entries(REQUIRED_HEADERS)) {
    const v = res.headers.get(h);
    if (!v || !re.test(v)) {
      findings.push(finding("high", "headers", `Security header \`${h}\` is missing or weaker than expected`, { evidence: v ?? "(absent)", suggestion: "Restore it in next.config.ts headers()." }));
    }
  }
  const powered = res.headers.get("x-powered-by");
  if (powered) findings.push(finding("low", "headers", "X-Powered-By header is exposed", { evidence: powered, suggestion: "Set `poweredByHeader: false` in next.config.ts." }));
  const csp = res.headers.get("content-security-policy") ?? "";
  if (!/script-src/.test(csp)) {
    findings.push(
      finding("low", "headers", "No script-src CSP (known and deliberate while AdSense is planned)", {
        suggestion: "Add a nonce-based script-src before AdSense goes live (TASKS).",
      }),
    );
  }
  return res;
}

function pipelineRoutes() {
  return walk("src/app/api/pipeline")
    .filter((p) => p.endsWith("/route.ts"))
    .map((p) => p.replace("src/app", "").replace("/route.ts", ""));
}

async function checkUnauthenticatedProbes(findings, metrics) {
  const routes = pipelineRoutes();
  metrics.pipelineRoutesProbed = routes.length;
  for (const r of routes) {
    for (const method of ["GET", "POST"]) {
      const res = await get(`${SITE}${r}`, { method, headers: { "Content-Type": "application/json" }, body: method === "POST" ? "{}" : undefined });
      if (res.status === 0) continue;
      if (![401, 403, 404, 405].includes(res.status)) {
        findings.push(
          finding("critical", "auth", `Unauthenticated ${method} ${r} returned ${res.status}, expected 401`, {
            suggestion: "Check isAuthorizedPipelineRequest is the first statement of the handler.",
          }),
        );
      }
    }
  }
  const admin = await get(`${SITE}/admin`, { redirect: "manual" });
  const loc = admin.headers.get("location") ?? "";
  if (!(admin.status >= 300 && admin.status < 400 && /signin/.test(loc))) {
    findings.push(finding("critical", "auth", `/admin without a session did not redirect to sign-in (status ${admin.status}, location "${loc}")`));
  }
  const adminApi = await get(`${SITE}/admin/entries`, { redirect: "manual" });
  if (adminApi.status === 200) findings.push(finding("critical", "auth", "/admin/entries served 200 without a session"));
}

function checkServerActionGuards(findings, metrics) {
  const files = walk("src").filter((p) => /\.(ts|tsx)$/.test(p));
  const actionFiles = files.filter((p) => /["']use server["']/.test(readFileSync(p, "utf8")));
  metrics.serverActionFiles = actionFiles.length;
  for (const p of actionFiles) {
    const src = readFileSync(p, "utf8");
    if (p.includes("/admin/signin/")) continue; // calls signIn("google"), no data access
    if (p.endsWith("/admin/(protected)/actions.ts")) continue; // signOutAction only
    if (p.includes("/admin/")) {
      // A page-level inline action must call a guarded action or guard itself.
      const guarded = /requireAdmin\(|role\s*!==\s*"admin"|from\s+["'][^"']*actions["']/.test(src);
      if (!guarded) {
        findings.push(
          finding("high", "auth", `Server action in ${p} has no visible admin guard`, {
            suggestion: "Call requireAdmin() as the first line of every exported action. The layout redirect does NOT protect server actions.",
          }),
        );
      }
    } else if (!PUBLIC_ACTION_FILES.includes(p)) {
      findings.push(
        finding("high", "auth", `New public server action file ${p}`, {
          suggestion: "Confirm it is meant to be public, validate and rate-limit its input, then add it to PUBLIC_ACTION_FILES in scripts/ops/agents/security.mjs.",
        }),
      );
    }
  }
  // Every exported action in an admin actions file must be guarded: count exports vs guards.
  for (const p of actionFiles.filter((f) => f.includes("/admin/") && f.endsWith("/actions.ts"))) {
    if (p.endsWith("/admin/(protected)/actions.ts")) continue;
    const src = readFileSync(p, "utf8");
    const exported = [...src.matchAll(/export async function (\w+)/g)].map((m) => m[1]);
    for (const fn of exported) {
      const start = src.indexOf(`export async function ${fn}`);
      const next = src.indexOf("export async function", start + 10);
      const block = src.slice(start, next === -1 ? undefined : next);
      if (!/requireAdmin\(|role\s*!==\s*"admin"/.test(block)) {
        findings.push(finding("critical", "auth", `Exported action \`${fn}\` in ${p} has no admin check`, { suggestion: "Add `await requireAdmin()` as its first statement." }));
      }
    }
  }
}

function checkInnerHtml(findings) {
  for (const p of walk("src").filter((f) => /\.(tsx|jsx)$/.test(f))) {
    if (/dangerouslySetInnerHTML/.test(readFileSync(p, "utf8")) && !INNER_HTML_ALLOW.includes(p)) {
      findings.push(finding("medium", "xss", `dangerouslySetInnerHTML used in a file that is not on the allow-list: ${p}`, { suggestion: "Render as text, or sanitise and add the file to INNER_HTML_ALLOW with a justification." }));
    }
  }
}

function checkSecrets(findings) {
  let files = [];
  try {
    files = execFileSync("git", ["ls-files"], { encoding: "utf8" }).split("\n").filter(Boolean);
  } catch {
    findings.push(finding("low", "secrets", "Could not list git files for the secret scan"));
    return;
  }
  for (const f of files) {
    if (/package-lock\.json$|\.(png|jpg|jpeg|ico|woff2?|mp3|mp4|webp)$/i.test(f)) continue;
    let text;
    try {
      text = readFileSync(f, "utf8");
    } catch {
      continue;
    }
    for (const [re, label] of SECRET_PATTERNS) {
      if (re.test(text)) findings.push(finding("critical", "secrets", `Possible ${label} committed in ${f}`, { suggestion: "Rotate the secret immediately (RUNBOOK.md), then remove it from the file and history." }));
    }
  }
  if (!/^\.env\.local$/m.test(readFileSync(".gitignore", "utf8")) && !/\.env\*/.test(readFileSync(".gitignore", "utf8"))) {
    findings.push(finding("high", "secrets", ".gitignore does not appear to exclude .env.local"));
  }
}

async function checkSourceMaps(findings, home) {
  const scripts = [...(home.body.matchAll(/<script[^>]+src="([^"]+\.js)"/g) ?? [])].map((m) => m[1]).slice(0, 4);
  for (const s of scripts) {
    const url = s.startsWith("http") ? s : `${SITE}${s}`;
    if (!url.startsWith(SITE)) continue;
    const res = await get(`${url}.map`);
    if (res.status === 200 && res.body.includes('"mappings"')) {
      findings.push(finding("high", "source-maps", `Source map is publicly served: ${url}.map`, { suggestion: "Make sure productionBrowserSourceMaps is not enabled in next.config.ts." }));
    }
  }
}

async function checkHealthLeak(findings) {
  const res = await get(`${SITE}/api/health`);
  try {
    const keys = Object.keys(JSON.parse(res.body));
    const extra = keys.filter((k) => !["ok", "dbConfigured"].includes(k));
    if (extra.length) findings.push(finding("medium", "info-leak", `/api/health now exposes extra fields: ${extra.join(", ")}`, { suggestion: "Keep it to ok and dbConfigured." }));
  } catch {
    /* infra agent reports health failures */
  }
}

export async function run() {
  const findings = [];
  const metrics = {};
  auditDependencies(findings, metrics);
  await checkNextPatch(findings, metrics);
  const home = await checkHeaders(findings);
  await checkUnauthenticatedProbes(findings, metrics);
  checkServerActionGuards(findings, metrics);
  checkInnerHtml(findings);
  checkSecrets(findings);
  if (home?.status === 200) await checkSourceMaps(findings, home);
  await checkHealthLeak(findings);
  const notes = [
    "Checks: npm audit, newer Next patch, live security headers, unauthenticated probes of every pipeline route and /admin, server-action guards, innerHTML allow-list, secret patterns in tracked files, public source maps, health-route leaks.",
    "Not covered: CodeQL results (read the GitHub Security tab), MFA on admin Google accounts (owner), Vercel/Neon account settings, a real penetration test.",
    "Fix authority: none by design. Each finding names the exact next step; ask Claude Code to 'fix the security digest' to apply it on a branch.",
  ];
  return { findings, metrics, notes };
}
