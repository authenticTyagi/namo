#!/usr/bin/env node
// Scheduled content-drafting agent, run from GitHub Actions (see
// .github/workflows/draft-entries.yml and draft-editorials.yml) — the
// durable replacement for the Claude Code cloud routine, which is blocked
// by that environment's network-egress policy (see PROJECT_LOG.md). Runs
// on GitHub's own runners (open internet, no proxy allowlist), calls the
// Anthropic Messages API directly with the server-side web_search tool
// plus a small set of custom tools that hit this site's own pipeline HTTP
// API (/api/pipeline/*). Everything it produces lands as pending_review —
// this script never publishes anything itself.
//
// Required env: ANTHROPIC_API_KEY, CRON_SECRET, MODE ("entries" | "editorials").
// Optional env: SITE_BASE_URL (default https://modinekiyakyahai.com).

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "../..");

const MODE = process.env.MODE;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const CRON_SECRET = process.env.CRON_SECRET;
const SITE_BASE_URL = process.env.SITE_BASE_URL || "https://modinekiyakyahai.com";
const MODEL = "claude-sonnet-5";
const MAX_TURNS = 20;

if (!["entries", "editorials"].includes(MODE)) {
  console.error(`MODE must be "entries" or "editorials", got: ${MODE}`);
  process.exit(1);
}
if (!ANTHROPIC_API_KEY) {
  console.error("ANTHROPIC_API_KEY is required");
  process.exit(1);
}
if (!CRON_SECRET) {
  console.error("CRON_SECRET is required");
  process.exit(1);
}

async function readDoc(relPath) {
  try {
    return await readFile(path.join(REPO_ROOT, relPath), "utf-8");
  } catch {
    return `(${relPath} not found in this checkout)`;
  }
}

// ---------------------------------------------------------------------------
// Custom (client-executed) tools — thin wrappers around this site's own
// pipeline HTTP API, all CRON_SECRET-authed.
// ---------------------------------------------------------------------------

async function pipelineFetch(method, endpoint, body) {
  const res = await fetch(`${SITE_BASE_URL}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${CRON_SECRET}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }
  return { status: res.status, body: json };
}

const TOOL_HANDLERS = {
  list_existing_entries: async () => pipelineFetch("GET", "/api/pipeline/existing-slugs"),
  list_trusted_sources: async () => pipelineFetch("GET", "/api/pipeline/trusted-sources"),
  list_editorial_candidates: async () => pipelineFetch("GET", "/api/pipeline/editorial-candidates"),
  submit_entry: async (input) => pipelineFetch("POST", "/api/pipeline/ingest", input),
  submit_editorial: async (input) => pipelineFetch("POST", "/api/pipeline/editorial-ingest", input),
};

const TOOL_DEFS = {
  web_search: { type: "web_search_20250305", name: "web_search", max_uses: 10 },
  list_existing_entries: {
    name: "list_existing_entries",
    description:
      "Get every entry's slug/title/category regardless of status (published, pending, rejected). Call this FIRST, before researching anything, so you never re-cover a topic that's already there or was already rejected.",
    input_schema: { type: "object", properties: {}, required: [] },
  },
  list_trusted_sources: {
    name: "list_trusted_sources",
    description:
      "Get the admin-curated whitelist of pre-vetted handles/channels and their credibility tier. Check a candidate source's publisher against this before assigning a tier yourself.",
    input_schema: { type: "object", properties: {}, required: [] },
  },
  list_editorial_candidates: {
    name: "list_editorial_candidates",
    description: "Get published entries that have no editorial yet — the pool you may write about.",
    input_schema: { type: "object", properties: {}, required: [] },
  },
  submit_entry: {
    name: "submit_entry",
    description:
      "Submit one drafted entry. Lands as pending_review. Returns 409 on a duplicate slug (pick a different one and retry once), 400 on validation/sourcing-bar failure (read the error, fix or skip).",
    input_schema: {
      type: "object",
      properties: {
        categorySlug: { type: "string" },
        slug: { type: "string" },
        titleHi: { type: "string" },
        titleEn: { type: "string" },
        summaryHi: { type: "string" },
        summaryEn: { type: "string" },
        quickTakeHi: { type: "string" },
        quickTakeEn: { type: "string" },
        bodySectionsHi: {
          type: "array",
          items: {
            type: "object",
            properties: { heading: { type: "string" }, body: { type: "string" } },
            required: ["heading", "body"],
          },
        },
        bodySectionsEn: {
          type: "array",
          items: {
            type: "object",
            properties: { heading: { type: "string" }, body: { type: "string" } },
            required: ["heading", "body"],
          },
        },
        impactType: { type: "string", enum: ["tangible", "intangible", "mixed"] },
        timelineStartDate: { type: "string" },
        timelineEndDate: { type: "string" },
        tags: {
          type: "array",
          items: {
            type: "object",
            properties: {
              slug: { type: "string" },
              labelHi: { type: "string" },
              labelEn: { type: "string" },
            },
            required: ["slug", "labelHi", "labelEn"],
          },
        },
        sources: {
          type: "array",
          items: {
            type: "object",
            properties: {
              url: { type: "string" },
              publisher: { type: "string" },
              title: { type: "string" },
              credibilityTier: {
                type: "string",
                enum: ["official_primary", "reputable_media", "secondary"],
              },
              language: { type: "string" },
            },
            required: ["url", "publisher", "credibilityTier"],
          },
        },
        stats: { type: "array", items: { type: "object" } },
        sourceSignals: {
          type: "object",
          properties: {
            numericConsistency: { type: "boolean" },
            contradictionFound: { type: "boolean" },
          },
          required: ["numericConsistency", "contradictionFound"],
        },
      },
      required: [
        "categorySlug",
        "slug",
        "titleHi",
        "titleEn",
        "summaryHi",
        "summaryEn",
        "quickTakeHi",
        "quickTakeEn",
        "bodySectionsHi",
        "bodySectionsEn",
        "impactType",
        "timelineStartDate",
        "timelineEndDate",
        "sources",
        "sourceSignals",
      ],
    },
  },
  submit_editorial: {
    name: "submit_editorial",
    description:
      "Submit one drafted editorial about an already-published entry. Lands as pending_review. Returns 409 if the entry already has a non-rejected editorial or the slug is taken, 400 on validation failure.",
    input_schema: {
      type: "object",
      properties: {
        relatedEntrySlug: { type: "string" },
        slug: { type: "string" },
        headlineHi: { type: "string" },
        headlineEn: { type: "string" },
        bodyHi: { type: "string" },
        bodyEn: { type: "string" },
        tone: { type: "string", enum: ["positive", "negative", "neutral", "mixed"] },
      },
      required: ["relatedEntrySlug", "slug", "headlineHi", "headlineEn", "bodyHi", "bodyEn", "tone"],
    },
  },
};

async function buildSystemPrompt() {
  const officialSources = await readDoc("scripts/entries/OFFICIAL_SOURCES.md");
  const microMacro = await readDoc("scripts/entries/MICRO_MACRO_LENS.md");

  const shared = `You are a scheduled research agent for modinekiyakyahai.com, a sourced,
fact-checked bilingual (Hindi/English) reference site documenting verifiable
Government of India work since 2014 — explicitly NOT a propaganda site, NOT
affiliated with any party, every claim cited, mixed/negative data reported
honestly. You have web_search and three read tools (list_existing_entries,
list_trusted_sources${MODE === "editorials" ? ", list_editorial_candidates" : ""}).
Everything you submit lands as pending_review — a human reviews and
publishes it. You never publish directly.

--- Official sources reference (scripts/entries/OFFICIAL_SOURCES.md) ---
${officialSources}

--- Micro/macro lens requirement (scripts/entries/MICRO_MACRO_LENS.md) ---
${microMacro}
`;

  if (MODE === "entries") {
    return `${shared}
YOUR JOB THIS RUN: find 1-2 NEW, well-sourced developments and submit them
as draft entries via submit_entry.

SOURCING BAR (hard rule, enforced server-side — the API will reject
anything that doesn't meet this): every entry needs EITHER (a) at least
one official/primary source OR (b) at least two independent sources of
any kind. If you cannot clear this bar for a topic, SKIP IT ENTIRELY. Do
not weaken a claim to fit thin sourcing.

CATEGORIES (use the exact slug; only these exist, you cannot create a new
one): economy-infra-digital, space-science, foreign-policy-diplomacy,
defense-security, currency-prices-inflation, welfare-social-schemes,
agriculture-farmer-welfare, environment-renewable-energy,
education-skill-development, health-infrastructure. currency-prices-
inflation and any welfare/subsidy topic must be reported honestly
including mixed or negative data — these are not wins-only categories.

WORKFLOW:
1. Call list_existing_entries FIRST. Do not research or draft a topic that
   substantially overlaps an existing slug/title in any status (published,
   pending, or rejected — don't resubmit a previously-rejected topic unless
   you have materially stronger sourcing).
2. Call list_trusted_sources and check any candidate source's publisher
   against it before assigning a credibility tier yourself.
3. Research up to 2 candidate topics this run (hard cap — a human clears
   this queue manually, keep it small).
4. For each topic that clears the sourcing bar, call submit_entry.
   bodySectionsHi/En should apply the micro/macro lens above where a
   genuine angle exists — don't manufacture one that isn't there. On a
   409 (duplicate slug), pick a different slug and retry once. On a 400,
   read the error and fix-or-skip — don't retry blindly.
5. sourceSignals is your own honest self-assessment: numericConsistency
   true only if every source with figures agrees; contradictionFound true
   if any credible source disputes the claim, even if you still submit.

An empty run (nothing clears the bar) is a fine outcome, not a failure.`;
  }

  const editorialVoice = await readDoc("scripts/entries/EDITORIAL_VOICE.md");
  return `${shared}
--- Editorial voice spec (scripts/entries/EDITORIAL_VOICE.md) — required reading ---
${editorialVoice}

YOUR JOB THIS RUN: find 1-2 published entries with no editorial yet and
write one editorial each, in the voice above, then submit via
submit_editorial.

WORKFLOW:
1. Call list_editorial_candidates — published entries with no editorial
   yet. Pick up to 2 this run (hard cap).
2. Call list_existing_entries and list_trusted_sources for context/
   sourcing checks on anything you cite beyond the entry itself.
3. Write each editorial in the exact voice and boundaries documented
   above — tone is your own honest read of the entry (positive/negative/
   neutral/mixed, never forced positive), and apply the micro/macro lens
   where a genuine angle exists. On a 409, the entry already has one —
   skip it. On a 400, read the error and fix-or-skip.

An empty run (nothing worth writing this run) is a fine outcome, not a
failure.`;
}

// ---------------------------------------------------------------------------
// Agentic loop
// ---------------------------------------------------------------------------

async function callAnthropic(messages, tools, system) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      system,
      messages,
      tools,
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${errText}`);
  }
  return res.json();
}

async function main() {
  const system = await buildSystemPrompt();
  const tools =
    MODE === "entries"
      ? [TOOL_DEFS.web_search, TOOL_DEFS.list_existing_entries, TOOL_DEFS.list_trusted_sources, TOOL_DEFS.submit_entry]
      : [
          TOOL_DEFS.web_search,
          TOOL_DEFS.list_existing_entries,
          TOOL_DEFS.list_trusted_sources,
          TOOL_DEFS.list_editorial_candidates,
          TOOL_DEFS.submit_editorial,
        ];

  const messages = [
    {
      role: "user",
      content: `Begin your ${MODE} drafting run now, following the workflow in your system prompt.`,
    },
  ];

  console.log(`[run-agent] mode=${MODE} model=${MODEL} site=${SITE_BASE_URL}`);

  for (let turn = 1; turn <= MAX_TURNS; turn++) {
    const response = await callAnthropic(messages, tools, system);
    messages.push({ role: "assistant", content: response.content });

    for (const block of response.content) {
      if (block.type === "text" && block.text.trim()) {
        console.log(`[turn ${turn}] ${block.text.trim()}`);
      }
      if (block.type === "server_tool_use") {
        console.log(`[turn ${turn}] web_search: ${JSON.stringify(block.input)}`);
      }
    }

    if (response.stop_reason !== "tool_use") {
      console.log(`[run-agent] done — stop_reason=${response.stop_reason}`);
      return;
    }

    const clientToolUses = response.content.filter(
      (b) => b.type === "tool_use" && TOOL_HANDLERS[b.name],
    );
    if (clientToolUses.length === 0) {
      // Only server tools (web_search) were used this turn — the API
      // already resolved those; just continue the loop.
      continue;
    }

    const toolResults = [];
    for (const use of clientToolUses) {
      console.log(`[turn ${turn}] tool_use ${use.name}: ${JSON.stringify(use.input).slice(0, 300)}`);
      let result;
      try {
        result = await TOOL_HANDLERS[use.name](use.input);
      } catch (err) {
        result = { status: 0, body: { error: err instanceof Error ? err.message : String(err) } };
      }
      console.log(`[turn ${turn}] -> ${result.status} ${JSON.stringify(result.body).slice(0, 300)}`);
      toolResults.push({
        type: "tool_result",
        tool_use_id: use.id,
        content: JSON.stringify(result.body),
        is_error: result.status !== 200 && result.status !== 201,
      });
    }
    messages.push({ role: "user", content: toolResults });
  }

  console.log(`[run-agent] hit MAX_TURNS=${MAX_TURNS} without finishing — stopping.`);
}

main().catch((err) => {
  console.error("[run-agent] fatal:", err);
  process.exit(1);
});
