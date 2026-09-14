CREATE TABLE "entry_stat_translations" (
	"entry_stat_id" uuid NOT NULL,
	"locale" text NOT NULL,
	"metric_label" text NOT NULL,
	"before_label" text NOT NULL,
	"before_value" text NOT NULL,
	"after_label" text NOT NULL,
	"after_value" text NOT NULL,
	"extra_label" text,
	"extra_value" text,
	CONSTRAINT "entry_stat_translations_entry_stat_id_locale_pk" PRIMARY KEY("entry_stat_id","locale")
);
--> statement-breakpoint
CREATE TABLE "entry_translations" (
	"entry_id" uuid NOT NULL,
	"locale" text NOT NULL,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"body" text NOT NULL,
	"quick_take" text,
	"body_sections" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "entry_translations_entry_id_locale_pk" PRIMARY KEY("entry_id","locale")
);
--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "name_bn" text;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "name_te" text;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "name_mr" text;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "description_bn" text;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "description_te" text;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "description_mr" text;--> statement-breakpoint
ALTER TABLE "tags" ADD COLUMN "label_bn" text;--> statement-breakpoint
ALTER TABLE "tags" ADD COLUMN "label_te" text;--> statement-breakpoint
ALTER TABLE "tags" ADD COLUMN "label_mr" text;--> statement-breakpoint
ALTER TABLE "entry_stat_translations" ADD CONSTRAINT "entry_stat_translations_entry_stat_id_entry_stats_id_fk" FOREIGN KEY ("entry_stat_id") REFERENCES "public"."entry_stats"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "entry_translations" ADD CONSTRAINT "entry_translations_entry_id_entries_id_fk" FOREIGN KEY ("entry_id") REFERENCES "public"."entries"("id") ON DELETE cascade ON UPDATE no action;