import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all paths except static files, Next.js internals, API routes, and
  // /admin (an English-only internal tool outside the [locale] tree — see
  // src/app/admin/**, guarded by its own layout, not by this middleware).
  matcher: ["/((?!api|admin|_next|_vercel|.*\\..*).*)"],
};
