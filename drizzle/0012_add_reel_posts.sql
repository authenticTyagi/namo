CREATE TABLE "reel_posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"video_url" text NOT NULL,
	"caption" text NOT NULL,
	"language" text NOT NULL,
	"position" integer NOT NULL,
	"status" text DEFAULT 'queued' NOT NULL,
	"ig_media_id" text,
	"error" text,
	"posted_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "reel_posts_slug_uq" ON "reel_posts" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "reel_posts_status_position_idx" ON "reel_posts" USING btree ("status","position");