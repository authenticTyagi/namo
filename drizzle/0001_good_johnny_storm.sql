CREATE TABLE "entry_stats" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"entry_id" uuid NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"stat_key" text NOT NULL,
	"metric_label_hi" text NOT NULL,
	"metric_label_en" text NOT NULL,
	"before_label_hi" text NOT NULL,
	"before_label_en" text NOT NULL,
	"before_value_hi" text NOT NULL,
	"before_value_en" text NOT NULL,
	"before_value_numeric" numeric,
	"after_label_hi" text NOT NULL,
	"after_label_en" text NOT NULL,
	"after_value_hi" text NOT NULL,
	"after_value_en" text NOT NULL,
	"after_value_numeric" numeric,
	"extra_label_hi" text,
	"extra_label_en" text,
	"extra_value_hi" text,
	"extra_value_en" text,
	"extra_value_numeric" numeric,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "quick_take_hi" text;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "quick_take_en" text;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "body_sections_hi" jsonb;--> statement-breakpoint
ALTER TABLE "entries" ADD COLUMN "body_sections_en" jsonb;--> statement-breakpoint
ALTER TABLE "entry_stats" ADD CONSTRAINT "entry_stats_entry_id_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."entries"("id") ON DELETE cascade ON UPDATE no action;