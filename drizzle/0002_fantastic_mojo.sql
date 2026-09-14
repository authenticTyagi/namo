CREATE TYPE "public"."source_submission_status" AS ENUM('new', 'reviewed', 'used', 'dismissed');--> statement-breakpoint
CREATE TABLE "source_submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"url" text NOT NULL,
	"note" text NOT NULL,
	"topic_hint" text,
	"status" "source_submission_status" DEFAULT 'new' NOT NULL,
	"created_by" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email_verified" timestamp;--> statement-breakpoint
ALTER TABLE "source_submissions" ADD CONSTRAINT "source_submissions_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;