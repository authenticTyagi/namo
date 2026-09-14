import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export const isDbConfigured = Boolean(process.env.DATABASE_URL);

if (!isDbConfigured) {
  // Don't throw at import time: this lets the site scaffold run (npm run dev)
  // and render empty states before the user has created a Neon project and
  // supplied DATABASE_URL in .env.local. Query helpers in src/db/queries/*
  // check `isDbConfigured` and return empty results instead of calling `db`.
  console.warn(
    "[db] DATABASE_URL is not set — running with an empty dataset. Copy .env.example to .env.local and fill it in once you have a Neon connection string.",
  );
}

// A syntactically-valid but unreachable placeholder — satisfies neon()'s
// format check at import time without ever being connected to (query
// helpers all check isDbConfigured before issuing a real query).
const sql = neon(
  process.env.DATABASE_URL ?? "postgresql://user:password@localhost.placeholder/db",
);

export const db = drizzle(sql, { schema });
