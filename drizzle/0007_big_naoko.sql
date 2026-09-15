CREATE TYPE "public"."trusted_source_platform" AS ENUM('website', 'twitter_x', 'youtube', 'instagram', 'facebook', 'other');--> statement-breakpoint
CREATE TABLE "trusted_sources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"label" text NOT NULL,
	"handle_or_url" text NOT NULL,
	"platform" "trusted_source_platform" NOT NULL,
	"credibility_tier" "credibility_tier" NOT NULL,
	"is_video_source" boolean DEFAULT false NOT NULL,
	"notes" text,
	"added_by" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "trusted_sources_handle_or_url_unique" UNIQUE("handle_or_url")
);
--> statement-breakpoint
ALTER TABLE "trusted_sources" ADD CONSTRAINT "trusted_sources_added_by_users_id_fk" FOREIGN KEY ("added_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;