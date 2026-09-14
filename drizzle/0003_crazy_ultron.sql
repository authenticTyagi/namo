CREATE TYPE "public"."feedback_category" AS ENUM('report_issue', 'suggest_source', 'other');--> statement-breakpoint
CREATE TYPE "public"."feedback_status" AS ENUM('new', 'read', 'resolved');--> statement-breakpoint
CREATE TABLE "feedback_submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"category" "feedback_category" NOT NULL,
	"message" text NOT NULL,
	"name" text,
	"email" text,
	"related_entry_slug" text,
	"status" "feedback_status" DEFAULT 'new' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
