import {
  pgTable,
  text,
  timestamp,
  integer,
  numeric,
  boolean,
  primaryKey,
  pgEnum,
  uuid,
  jsonb,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export const impactTypeEnum = pgEnum("impact_type", [
  "tangible",
  "intangible",
  "mixed",
]);

export const entryStatusEnum = pgEnum("entry_status", [
  "draft",
  "pending_review",
  "published",
  "rejected",
]);

export const sourceOfCreationEnum = pgEnum("source_of_creation", [
  "manual",
  "pipeline",
]);

export const credibilityTierEnum = pgEnum("credibility_tier", [
  "official_primary",
  "reputable_media",
  "secondary",
]);

export const userRoleEnum = pgEnum("user_role", ["admin", "viewer"]);

export const commentStatusEnum = pgEnum("comment_status", [
  "visible",
  "flagged",
  "removed",
]);

export const moderationResolutionEnum = pgEnum("moderation_resolution", [
  "dismissed",
  "removed",
]);

export const pipelineRunStatusEnum = pgEnum("pipeline_run_status", [
  "success",
  "partial",
  "failed",
]);

// ---------------------------------------------------------------------------
// Content model
// ---------------------------------------------------------------------------

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  nameHi: text("name_hi").notNull(),
  nameEn: text("name_en").notNull(),
  descriptionHi: text("description_hi"),
  descriptionEn: text("description_en"),
  sortOrder: integer("sort_order").notNull().default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const tags = pgTable("tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  labelHi: text("label_hi").notNull(),
  labelEn: text("label_en").notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name"),
  image: text("image"),
  // Required by @auth/drizzle-adapter's Postgres users-table shape — the
  // OAuth login handler always writes emailVerified (null for a fresh
  // account) on createUser, so this must exist even though we don't use
  // email/password verification ourselves.
  emailVerified: timestamp("email_verified"),
  role: userRoleEnum("role").notNull().default("viewer"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const entries = pgTable("entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => categories.id),
  slug: text("slug").notNull().unique(),

  titleHi: text("title_hi").notNull(),
  titleEn: text("title_en").notNull(),
  summaryHi: text("summary_hi").notNull(),
  summaryEn: text("summary_en").notNull(),
  bodyHi: text("body_hi").notNull(),
  bodyEn: text("body_en").notNull(),

  impactType: impactTypeEnum("impact_type").notNull(),
  status: entryStatusEnum("status").notNull().default("draft"),
  confidenceScore: numeric("confidence_score", { precision: 3, scale: 2 }),

  timelineStartDate: timestamp("timeline_start_date"),
  timelineEndDate: timestamp("timeline_end_date"),
  publishDate: timestamp("publish_date"),
  lastVerifiedDate: timestamp("last_verified_date"),

  ogImageNote: text("og_image_note"),
  sourceOfCreation: sourceOfCreationEnum("source_of_creation")
    .notNull()
    .default("manual"),
  createdBy: uuid("created_by").references(() => users.id),

  // Readable-body rework: nullable, additive. When present, the entry page
  // renders quickTake + bodySections instead of the plain bodyHi/bodyEn
  // block; bodyHi/bodyEn stay NOT NULL and are auto-derived from these by
  // scripts/seed.ts, so there's no double-authoring and old rows/consumers
  // are unaffected.
  quickTakeHi: text("quick_take_hi"),
  quickTakeEn: text("quick_take_en"),
  bodySectionsHi: jsonb("body_sections_hi").$type<
    { heading: string; body: string }[]
  >(),
  bodySectionsEn: jsonb("body_sections_en").$type<
    { heading: string; body: string }[]
  >(),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const entryTags = pgTable(
  "entry_tags",
  {
    entryId: uuid("entry_id")
      .notNull()
      .references(() => entries.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.entryId, t.tagId] })],
);

export const sources = pgTable("sources", {
  id: uuid("id").primaryKey().defaultRandom(),
  entryId: uuid("entry_id")
    .notNull()
    .references(() => entries.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  publisher: text("publisher").notNull(),
  title: text("title"),
  retrievedDate: timestamp("retrieved_date").notNull().defaultNow(),
  publishedDate: timestamp("published_date"),
  credibilityTier: credibilityTierEnum("credibility_tier").notNull(),
  credibilityNotes: text("credibility_notes"),
  language: text("language"),
});

/**
 * Before/after (and occasionally a 3rd "extra" point, e.g. a peak figure)
 * comparison rows shown on an entry page. Backed by the same `sources`
 * already attached to that entry — no separate stats-to-sources join table,
 * since for hand-curated content the citations covering a stat are just the
 * entry's existing citations (add a new `sources` row on the entry itself
 * when a stat needs a citation the entry didn't already have, e.g. a
 * pre-2014 baseline figure).
 */
export const entryStats = pgTable("entry_stats", {
  id: uuid("id").primaryKey().defaultRandom(),
  entryId: uuid("entry_id")
    .notNull()
    .references(() => entries.id, { onDelete: "cascade" }),
  sortOrder: integer("sort_order").notNull().default(0),
  statKey: text("stat_key").notNull(), // stable id, useful once the Phase 3 pipeline drafts stats too

  metricLabelHi: text("metric_label_hi").notNull(),
  metricLabelEn: text("metric_label_en").notNull(),

  // Label is per-entry, never hardcoded "2014" — many entries didn't exist
  // before 2014/2016, so the label says e.g. "Launched, Aug 2014" instead.
  beforeLabelHi: text("before_label_hi").notNull(),
  beforeLabelEn: text("before_label_en").notNull(),
  beforeValueHi: text("before_value_hi").notNull(), // display string, e.g. "0" / "₹0" / "12 किमी/दिन"
  beforeValueEn: text("before_value_en").notNull(),
  beforeValueNumeric: numeric("before_value_numeric"), // only used by the 3-point bar-chart case

  afterLabelHi: text("after_label_hi").notNull(),
  afterLabelEn: text("after_label_en").notNull(),
  afterValueHi: text("after_value_hi").notNull(),
  afterValueEn: text("after_value_en").notNull(),
  afterValueNumeric: numeric("after_value_numeric"),

  // Optional 3rd point (currently only the highways entry uses this, for its
  // single-day peak figure) — kept on this row rather than a generic child
  // "points" table since this shape appears once.
  extraLabelHi: text("extra_label_hi"),
  extraLabelEn: text("extra_label_en"),
  extraValueHi: text("extra_value_hi"),
  extraValueEn: text("extra_value_en"),
  extraValueNumeric: numeric("extra_value_numeric"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Auth.js adapter tables (NextAuth v5 / @auth/drizzle-adapter shape)
// ---------------------------------------------------------------------------

export const accounts = pgTable(
  "accounts",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("provider_account_id").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (t) => [primaryKey({ columns: [t.provider, t.providerAccountId] })],
);

export const sessions = pgTable("sessions", {
  sessionToken: text("session_token").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires").notNull(),
});

export const verificationTokens = pgTable(
  "verification_tokens",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires").notNull(),
  },
  (t) => [primaryKey({ columns: [t.identifier, t.token] })],
);

// ---------------------------------------------------------------------------
// Comments & moderation
// ---------------------------------------------------------------------------

export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  entryId: uuid("entry_id")
    .notNull()
    .references(() => entries.id, { onDelete: "cascade" }),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  body: text("body").notNull(),
  status: commentStatusEnum("status").notNull().default("visible"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const moderationFlags = pgTable("moderation_flags", {
  id: uuid("id").primaryKey().defaultRandom(),
  commentId: uuid("comment_id")
    .notNull()
    .references(() => comments.id, { onDelete: "cascade" }),
  reporterUserId: uuid("reporter_user_id").references(() => users.id),
  reason: text("reason"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  resolvedAt: timestamp("resolved_at"),
  resolvedBy: uuid("resolved_by").references(() => users.id),
  resolution: moderationResolutionEnum("resolution"),
});

// ---------------------------------------------------------------------------
// Autonomous pipeline (Phase 3) — schema exists now, unused until then
// ---------------------------------------------------------------------------

export const pipelineRuns = pgTable("pipeline_runs", {
  id: uuid("id").primaryKey().defaultRandom(),
  startedAt: timestamp("started_at").notNull().defaultNow(),
  finishedAt: timestamp("finished_at"),
  status: pipelineRunStatusEnum("status").notNull(),
  entriesCreated: integer("entries_created").notNull().default(0),
  entriesAutoPublished: integer("entries_auto_published").notNull().default(0),
  entriesFlaggedForReview: integer("entries_flagged_for_review")
    .notNull()
    .default(0),
  notes: text("notes"),
  triggeredBy: text("triggered_by"),
});

export const pipelineConfig = pgTable("pipeline_config", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  updatedBy: uuid("updated_by").references(() => users.id),
});

// ---------------------------------------------------------------------------
// Source submissions — the admin's way of handing the site trustworthy
// sources/topics directly (via /admin/sources) instead of only in chat.
// ---------------------------------------------------------------------------

export const sourceSubmissionStatusEnum = pgEnum("source_submission_status", [
  "new",
  "reviewed",
  "used",
  "dismissed",
]);

export const sourceSubmissions = pgTable("source_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  url: text("url").notNull(),
  note: text("note").notNull(),
  topicHint: text("topic_hint"),
  status: sourceSubmissionStatusEnum("status").notNull().default("new"),
  createdBy: uuid("created_by").references(() => users.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Relations
// ---------------------------------------------------------------------------

export const categoriesRelations = relations(categories, ({ many }) => ({
  entries: many(entries),
}));

export const entriesRelations = relations(entries, ({ one, many }) => ({
  category: one(categories, {
    fields: [entries.categoryId],
    references: [categories.id],
  }),
  createdByUser: one(users, {
    fields: [entries.createdBy],
    references: [users.id],
  }),
  entryTags: many(entryTags),
  sources: many(sources),
  stats: many(entryStats),
  comments: many(comments),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  entryTags: many(entryTags),
}));

export const entryTagsRelations = relations(entryTags, ({ one }) => ({
  entry: one(entries, {
    fields: [entryTags.entryId],
    references: [entries.id],
  }),
  tag: one(tags, {
    fields: [entryTags.tagId],
    references: [tags.id],
  }),
}));

export const sourcesRelations = relations(sources, ({ one }) => ({
  entry: one(entries, {
    fields: [sources.entryId],
    references: [entries.id],
  }),
}));

export const entryStatsRelations = relations(entryStats, ({ one }) => ({
  entry: one(entries, {
    fields: [entryStats.entryId],
    references: [entries.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  comments: many(comments),
  entries: many(entries),
}));

export const commentsRelations = relations(comments, ({ one, many }) => ({
  entry: one(entries, {
    fields: [comments.entryId],
    references: [entries.id],
  }),
  user: one(users, {
    fields: [comments.userId],
    references: [users.id],
  }),
  flags: many(moderationFlags),
}));

export const moderationFlagsRelations = relations(
  moderationFlags,
  ({ one }) => ({
    comment: one(comments, {
      fields: [moderationFlags.commentId],
      references: [comments.id],
    }),
    reporter: one(users, {
      fields: [moderationFlags.reporterUserId],
      references: [users.id],
    }),
    resolver: one(users, {
      fields: [moderationFlags.resolvedBy],
      references: [users.id],
    }),
  }),
);
