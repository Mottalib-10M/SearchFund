import { allArticles, categoryMeta } from "@/app/[locale]/learn/_articles/article-registry";
import { hasFRVersion } from "@/app/[locale]/learn/_articles/fr-registry";

// ---------------------------------------------------------------------------
// Locale types
// ---------------------------------------------------------------------------

export type Locale = "en" | "fr" | "es" | "it" | "pt";
export const locales: Locale[] = ["en", "fr", "es", "it", "pt"];
export const defaultLocale: Locale = "en";

// ---------------------------------------------------------------------------
// Route → available locales mapping
// ---------------------------------------------------------------------------

const multilingualRoutes: Record<string, Locale[]> = {
  "/": ["en", "fr", "es", "it", "pt"],
  "/listings": ["en", "fr", "es", "it", "pt"],
  "/about": ["en", "fr", "es", "it", "pt"],
  "/contact": ["en", "fr", "es", "it", "pt"],
  "/auth/signin": ["en", "fr", "es", "it", "pt"],
  "/auth/signup": ["en", "fr", "es", "it", "pt"],
};

const englishOnlyStatic: string[] = [
  "/learn",
  "/learn/glossary",
  "/searchers",
  "/investors",
  "/community",
  "/privacy",
  "/terms",
  "/about/editorial-policy",
  "/about/our-mission",
  "/search-fund-statistics",
];

// Build full routeLocales map
function buildRouteLocales(): Record<string, Locale[]> {
  const map: Record<string, Locale[]> = { ...multilingualRoutes };

  // English-only static pages
  for (const route of englishOnlyStatic) {
    map[route] = ["en"];
  }

  // Articles: English only unless a FR version exists
  for (const article of allArticles) {
    map[`/learn/${article.slug}`] = hasFRVersion(article.slug)
      ? ["en", "fr"]
      : ["en"];
  }

  // All categories: English only
  for (const cat of categoryMeta) {
    map[`/learn/category/${cat.slug}`] = ["en"];
  }

  return map;
}

export const routeLocales: Record<string, Locale[]> = buildRouteLocales();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getAvailableLocales(path: string): Locale[] {
  return routeLocales[path] ?? ["en"];
}

export function pageExistsInLocale(path: string, locale: Locale): boolean {
  const available = routeLocales[path];
  if (!available) return locale === "en"; // unknown routes default to English only
  return available.includes(locale);
}
