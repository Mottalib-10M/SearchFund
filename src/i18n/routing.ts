import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "es", "it", "pt"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
