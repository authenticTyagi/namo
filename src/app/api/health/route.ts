import { isDbConfigured } from "@/db";

export function GET() {
  return Response.json({ ok: true, dbConfigured: isDbConfigured });
}
