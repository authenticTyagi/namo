ALTER TABLE "entries" ALTER COLUMN "status" SET DEFAULT 'pending_review';--> statement-breakpoint
CREATE INDEX "comparison_points_comparison_id_idx" ON "comparison_points" USING btree ("comparison_id");--> statement-breakpoint
CREATE INDEX "comparison_sources_comparison_id_idx" ON "comparison_sources" USING btree ("comparison_id");--> statement-breakpoint
CREATE INDEX "comparisons_status_idx" ON "comparisons" USING btree ("status");--> statement-breakpoint
CREATE INDEX "comparisons_category_id_idx" ON "comparisons" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX "comparisons_related_entry_id_idx" ON "comparisons" USING btree ("related_entry_id");--> statement-breakpoint
CREATE INDEX "editorials_status_idx" ON "editorials" USING btree ("status");--> statement-breakpoint
CREATE INDEX "editorials_related_entry_id_idx" ON "editorials" USING btree ("related_entry_id");--> statement-breakpoint
CREATE INDEX "entries_status_idx" ON "entries" USING btree ("status");--> statement-breakpoint
CREATE INDEX "entries_category_id_idx" ON "entries" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX "entry_stats_entry_id_idx" ON "entry_stats" USING btree ("entry_id");--> statement-breakpoint
CREATE INDEX "sources_entry_id_idx" ON "sources" USING btree ("entry_id");