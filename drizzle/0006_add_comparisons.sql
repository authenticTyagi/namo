CREATE TABLE "comparison_points" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"comparison_id" uuid NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"is_india" boolean DEFAULT false NOT NULL,
	"country_name_hi" text NOT NULL,
	"country_name_en" text NOT NULL,
	"value_hi" text NOT NULL,
	"value_en" text NOT NULL,
	"value_numeric" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "comparison_sources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"comparison_id" uuid NOT NULL,
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
CREATE TABLE "comparisons" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"category_id" uuid NOT NULL,
	"related_entry_id" uuid,
	"title_hi" text NOT NULL,
	"title_en" text NOT NULL,
	"metric_label_hi" text NOT NULL,
	"metric_label_en" text NOT NULL,
	"unit_hi" text,
	"unit_en" text,
	"narrative_hi" text NOT NULL,
	"narrative_en" text NOT NULL,
	"status" "entry_status" DEFAULT 'pending_review' NOT NULL,
	"source_of_creation" "source_of_creation" DEFAULT 'manual' NOT NULL,
	"publish_date" timestamp,
	"created_by" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "comparisons_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "comparison_points" ADD CONSTRAINT "comparison_points_comparison_id_comparisons_id_fk" FOREIGN KEY ("comparison_id") REFERENCES "public"."comparisons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comparison_sources" ADD CONSTRAINT "comparison_sources_comparison_id_comparisons_id_fk" FOREIGN KEY ("comparison_id") REFERENCES "public"."comparisons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comparisons" ADD CONSTRAINT "comparisons_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comparisons" ADD CONSTRAINT "comparisons_related_entry_id_entries_id_fk" FOREIGN KEY ("related_entry_id") REFERENCES "public"."entries"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comparisons" ADD CONSTRAINT "comparisons_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;