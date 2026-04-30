import { allArticles, categoryMeta } from "@/app/[locale]/learn/_articles/article-registry";
import { tools } from "@/app/[locale]/(marketing)/tools/_data";
import { templates } from "@/app/[locale]/(marketing)/templates/_data";
import { newsArticles } from "@/app/[locale]/(marketing)/news/_data/articles";
import { directoryCategories, getEntriesForCategory } from "@/app/[locale]/(marketing)/directory/_data";
import { allPrograms } from "@/app/[locale]/mba/_data/program-registry";

// ---------------------------------------------------------------------------
// Locale types
// ---------------------------------------------------------------------------

export type Locale = "en";
export const locales: Locale[] = ["en"];
export const defaultLocale: Locale = "en";

// ---------------------------------------------------------------------------
// Route → available locales mapping
// ---------------------------------------------------------------------------



function buildRouteLocales(): Record<string, Locale[]> {
  const map: Record<string, Locale[]> = {
    "/": ["en"],
    "/listings": ["en"],
    "/about": ["en"],
    "/contact": ["en"],
    "/auth/signin": ["en"],
    "/auth/signup": ["en"],
    "/learn": ["en"],
    "/learn/glossary": ["en"],
    "/searchers": ["en"],
    "/investors": ["en"],
    "/community": ["en"],
    "/privacy": ["en"],
    "/terms": ["en"],
    "/about/editorial-policy": ["en"],
    "/search-fund-statistics": ["en"],
    "/the-eta-journey": ["en"],
    "/tools": ["en"],
    "/templates": ["en"],
    "/news": ["en"],
    "/directory": ["en"],
    "/mba": ["en"],
  };

  for (const article of allArticles) {
    map[`/learn/${article.slug}`] = ["en"];
  }

  for (const cat of categoryMeta) {
    map[`/learn/category/${cat.slug}`] = ["en"];
  }

  for (const tool of tools) {
    map[`/tools/${tool.slug}`] = ["en"];
  }

  for (const template of templates) {
    map[`/templates/${template.slug}`] = ["en"];
  }

  for (const article of newsArticles) {
    map[`/news/${article.slug}`] = ["en"];
  }

  for (const cat of directoryCategories) {
    map[`/directory/${cat.slug}`] = ["en"];
    for (const entry of getEntriesForCategory(cat.slug)) {
      map[`/directory/${cat.slug}/${entry.slug}`] = ["en"];
    }
  }

  // MBA program profiles: English only
  for (const program of allPrograms) {
    map[`/mba/${program.slug}`] = ["en"];
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
  if (!available) return locale === "en";
  return available.includes(locale);
}
