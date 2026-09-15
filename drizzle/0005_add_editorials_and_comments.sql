CREATE TYPE "public"."editorial_status" AS ENUM('pending_review', 'published', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."editorial_tone" AS ENUM('positive', 'negative', 'neutral', 'mixed');--> statement-breakpoint
CREATE TYPE "public"."pipeline_run_type" AS ENUM('drafting', 'editorial');--> statement-breakpoint
CREATE TABLE "editorials" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"related_entry_id" uuid NOT NULL,
	"headline_hi" text NOT NULL,
	"headline_en" text NOT NULL,
	"body_hi" text NOT NULL,
	"body_en" text NOT NULL,
	"tone" "editorial_tone" NOT NULL,
	"status" "editorial_status" DEFAULT 'pending_review' NOT NULL,
	"source_of_creation" "source_of_creation" DEFAULT 'manual' NOT NULL,
	"publish_date" timestamp,
	"created_by" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "editorials_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "entry_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "editorial_id" uuid;--> statement-breakpoint
ALTER TABLE "pipeline_runs" ADD COLUMN "run_type" "pipeline_run_type";--> statement-breakpoint
ALTER TABLE "editorials" ADD CONSTRAINT "editorials_related_entry_id_entries_id_fk" FOREIGN KEY ("related_entry_id") REFERENCES "public"."entries"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "editorials" ADD CONSTRAINT "editorials_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_editorial_id_editorials_id_fk" FOREIGN KEY ("editorial_id") REFERENCES "public"."editorials"("id") ON DELETE cascade ON UPDATE no action;