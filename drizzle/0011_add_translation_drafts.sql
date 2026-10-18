CREATE TABLE "translation_drafts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entry_id" uuid NOT NULL,
	"locale" text NOT NULL,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"quick_take" text NOT NULL,
	"body_sections" jsonb NOT NULL,
	"stats" jsonb NOT NULL,
	"note" text,
	"status" "entry_status" DEFAULT 'pending_review' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "translation_drafts" ADD CONSTRAINT "translation_drafts_entry_id_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."entries"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "translation_drafts_entry_locale_uq" ON "translation_drafts" USING btree ("entry_id","locale");--> statement-breakpoint
CREATE INDEX "translation_drafts_status_idx" ON "translation_drafts" USING btree ("status");