ALTER TABLE "editorials" ALTER COLUMN "status" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "editorials" ALTER COLUMN "status" SET DATA TYPE "public"."entry_status" USING "status"::text::"public"."entry_status";--> statement-breakpoint
ALTER TABLE "editorials" ALTER COLUMN "status" SET DEFAULT 'pending_review';--> statement-breakpoint
DROP TYPE "public"."editorial_status";