import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { users, accounts, sessions, verificationTokens } from "@/db/schema";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "admin" | "viewer";
    } & DefaultSession["user"];
  }
}

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const { handlers, auth, signIn, signOut } = NextAuth({
  // DrizzleAdapter's second argument must be this exact table-reference
  // shape, not the whole schema module — passing `schema` directly makes
  // the adapter silently fall back to its own default (nonexistent) table
  // names ("user", "account", ...) and fail at the first sign-in.
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  session: { strategy: "database" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/admin/signin",
  },
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      session.user.role = (user as typeof users.$inferSelect).role;
      return session;
    },
  },
  events: {
    // Fires after the user row exists (unlike `signIn`, which runs before
    // a first-time row is created) — idempotent, so this also covers
    // promoting a newly-added ADMIN_EMAILS entry on their next login.
    async signIn({ user }) {
      if (!user.email || !user.id) return;
      const shouldBeAdmin = ADMIN_EMAILS.includes(user.email.toLowerCase());
      const currentRole = (user as typeof users.$inferSelect).role;
      if (shouldBeAdmin && currentRole !== "admin") {
        await db.update(users).set({ role: "admin" }).where(eq(users.id, user.id));
      }
    },
  },
});
