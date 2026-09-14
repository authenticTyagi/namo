import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["hi", "en", "bn", "te", "mr"],
  defaultLocale: "hi",
});

export type Locale = (typeof routing.locales)[number];
