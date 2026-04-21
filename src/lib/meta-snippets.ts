import type { Metadata } from "next";
import { getAvailableLocales } from "./i18n-registry";

/* eslint-disable @typescript-eslint/no-require-imports */
const snippets = require("../../content/meta-snippets.json");

const BASE = "https://www.searchfundmarket.com";

type SnippetEntry = {
  title: string;
  description: string;
};

type SnippetData = Record<
  string,
  Record<string, SnippetEntry>
>;

const data = snippets as SnippetData;

/**
 * Get the optimized title and description for a route + locale.
 * Falls back to English if the locale-specific snippet doesn't exist.
 */
export function getSnippet(
  route: string,
  locale: string
): SnippetEntry | null {
  const entry = data[route];
  if (!entry) return null;
  return entry[locale] ?? entry["en"] ?? null;
}

/**
 * Build a complete Metadata object from meta-snippets.json.
 * Includes title, description, openGraph, and alternates (canonical + hreflang).
 */
export function buildMetadata(
  route: string,
  locale: string,
  overrides?: Partial<Metadata>
): Metadata {
  const snippet = getSnippet(route, locale);
  const path = route === "home" ? "" : `/${route}`;
  const availableLocales = getAvailableLocales(path || "/");

  const base: Metadata = {
    title: snippet?.title ?? route,
    description: snippet?.description,
    openGraph: {
      title: snippet?.title,
      description: snippet?.description,
    },
    alternates: {
      canonical: `${BASE}/${locale}${path}`,
      languages: Object.fromEntries([
        ...availableLocales.map((l) => [l, `${BASE}/${l}${path}`]),
        ...(availableLocales.length > 1
          ? [["x-default", `${BASE}/en${path}`]]
          : []),
      ]),
    },
  };

  if (!overrides) return base;

  // Merge overrides (shallow merge of top-level + openGraph)
  return {
    ...base,
    ...overrides,
    openGraph: {
      ...base.openGraph,
      ...(overrides.openGraph as Record<string, unknown>),
    },
    alternates: overrides.alternates ?? base.alternates,
  };
}
