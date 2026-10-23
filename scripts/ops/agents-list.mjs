// Registry of ops agents: name -> issue title and module. Kept apart from
// run.mjs (which executes on import) so tests can load it.
export const AGENTS = {
  security: { title: "[ops] Security and auth digest", mod: "./agents/security.mjs" },
  infra: { title: "[ops] Backend and infra digest", mod: "./agents/infra.mjs" },
  frontend: { title: "[ops] Front end and GUI digest", mod: "./agents/frontend.mjs" },
  performance: { title: "[ops] Performance digest", mod: "./agents/performance.mjs" },
  business: { title: "[ops] Business digest", mod: "./agents/business.mjs" },
  scaling: { title: "[ops] Scaling digest", mod: "./agents/scaling.mjs" },
  growth: { title: "[ops] Features and growth digest", mod: "./agents/growth.mjs" },
  nudges: { title: "[ops] Reader nudges digest (drafts only, nothing is sent)", mod: "./agents/nudges.mjs" },
};
