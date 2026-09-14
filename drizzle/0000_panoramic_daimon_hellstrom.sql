CREATE TYPE "public"."comment_status" AS ENUM('visible', 'flagged', 'removed');--> statement-breakpoint
CREATE TYPE "public"."credibility_tier" AS ENUM('official_primary', 'reputable_media', 'secondary');--> statement-breakpoint
CREATE TYPE "public"."entry_status" AS ENUM('draft', 'pending_review', 'published', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."impact_type" AS ENUM('tangible', 'intangible', 'mixed');--> statement-breakpoint
CREATE TYPE "public"."moderation_resolution" AS ENUM('dismissed', 'removed');--> statement-breakpoint
CREATE TYPE "public"."pipeline_run_status" AS ENUM('success', 'partial', 'failed');--> statement-breakpoint
CREATE TYPE "public"."source_of_creation" AS ENUM('manual', 'pipeline');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('admin', 'viewer');--> statement-breakpoint
CREATE TABLE "accounts" (
	"user_id" uuid NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "accounts_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name_hi" text NOT NULL,
	"name_en" text NOT NULL,
	"description_hi" text,
	"description_en" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "comments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entry_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"body" text NOT NULL,
	"status" "comment_status" DEFAULT 'visible' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "entries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"category_id" uuid NOT NULL,
	"slug" text NOT NULL,
	"title_hi" text NOT NULL,
	"title_en" text NOT NULL,
	"summary_hi" text NOT NULL,
	"summary_en" text NOT NULL,
	"body_hi" text NOT NULL,
	"body_en" text NOT NULL,
	"impact_type" "impact_type" NOT NULL,
	"status" "entry_status" DEFAULT 'draft' NOT NULL,
	"confidence_score" numeric(3, 2),
	"timeline_start_date" timestamp,
	"timeline_end_date" timestamp,
	"publish_date" timestamp,
	"last_verified_date" timestamp,
	"og_image_note" text,
	"source_of_creation" "source_of_creation" DEFAULT 'manual' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "entries_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "entry_tags" (
	"entry_id" uuid NOT NULL,
	"tag_id" uuid NOT NULL,
	CONSTRAINT "entry_tags_entry_id_tag_id_pk" PRIMARY KEY("entry_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "moderation_flags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"comment_id" uuid NOT NULL,
	"reporter_user_id" uuid,
	"reason" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"resolved_at" timestamp,
	"resolved_by" uuid,
	"resolution" "moderation_resolution"
);
--> statement-breakpoint
CREATE TABLE "pipeline_config" (
	"key" text PRIMARY KEY NOT NULL,
	"value" text NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"updated_by" uuid
);
--> statement-breakpoint
CREATE TABLE "pipeline_runs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"started_at" timestamp DEFAULT now() NOT NULL,
	"finished_at" timestamp,
	"status" "pipeline_run_status" NOT NULL,
	"entries_created" integer DEFAULT 0 NOT NULL,
	"entries_auto_published" integer DEFAULT 0 NOT NULL,
	"entries_flagged_for_review" integer DEFAULT 0 NOT NULL,
	"notes" text,
	"triggered_by" text
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"session_token" text PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entry_id" uuid NOT NULL,
	"url" text NOT NULL,
	"publisher" text NOT NULL,
	"title" text,
	"retrieved_date" timestamp DEFAULT now() NOT NULL,
	"published_date" timestamp,
	"credibility_tier" "credibility_tier" NOT NULL,
	"credibility_notes" text,
	"language" text
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"label_hi" text NOT NULL,
	"label_en" text NOT NULL,
	CONSTRAINT "tags_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"image" text,
	"role" "user_role" DEFAULT 'viewer' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification_tokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verification_tokens_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_entry_id_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."entries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "entries" ADD CONSTRAINT "entries_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "entries" ADD CONSTRAINT "entries_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "entry_tags" ADD CONSTRAINT "entry_tags_entry_id_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."entries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "entry_tags" ADD CONSTRAINT "entry_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moderation_flags" ADD CONSTRAINT "moderation_flags_comment_id_comments_id_fk" FOREIGN KEY ("comment_id") REFERENCES "public"."comments"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moderation_flags" ADD CONSTRAINT "moderation_flags_reporter_user_id_users_id_fk" FOREIGN KEY ("reporter_user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moderation_flags" ADD CONSTRAINT "moderation_flags_resolved_by_users_id_fk" FOREIGN KEY ("resolved_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pipeline_config" ADD CONSTRAINT "pipeline_config_updated_by_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sources" ADD CONSTRAINT "sources_entry_id_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."entries"("id") ON DELETE cascade ON UPDATE no action;