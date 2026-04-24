import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { allArticles, categoryMeta } from "./[locale]/learn/_articles/article-registry";
import { routeLocales, locales, type Locale } from "@/lib/i18n-registry";

const BASE = "https://www.searchfundmarket.com";

function buildAlternates(path: string, availableLocales: Locale[]) {
  const languages: Record<string, string> = {};
  for (const l of availableLocales) {
    languages[l] = `${BASE}/${l}${path === "/" ? "" : path}`;
  }
  // x-default points to English
  languages["x-default"] = `${BASE}/en${path === "/" ? "" : path}`;
  return { languages };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  // --- Static multilingual pages ---
  const multilingualPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "daily" },
    { path: "/listings", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.4, changeFrequency: "monthly" },
    { path: "/auth/signin", priority: 0.4, changeFrequency: "monthly" },
    { path: "/auth/signup", priority: 0.5, changeFrequency: "monthly" },
  ];

  for (const page of multilingualPages) {
    const available = routeLocales[page.path] ?? locales;
    for (const locale of available) {
      entries.push({
        url: `${BASE}/${locale}${page.path === "/" ? "" : page.path}`,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: buildAlternates(page.path, available),
      });
    }
  }

  // --- English-only static pages ---
  const englishOnlyPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/the-eta-journey", priority: 0.9, changeFrequency: "weekly" },
    { path: "/searchers", priority: 0.8, changeFrequency: "daily" },
    { path: "/investors", priority: 0.8, changeFrequency: "daily" },
    { path: "/community", priority: 0.7, changeFrequency: "daily" },
    { path: "/learn", priority: 0.9, changeFrequency: "weekly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/about/editorial-policy", priority: 0.4, changeFrequency: "monthly" },
  ];

  for (const page of englishOnlyPages) {
    entries.push({
      url: `${BASE}/en${page.path}`,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: buildAlternates(page.path, ["en"]),
    });
  }

  // --- Learn article pages (English only) ---
  for (const article of allArticles) {
    entries.push({
      url: `${BASE}/en/learn/${article.slug}`,
      lastModified: article.dateModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: buildAlternates(`/learn/${article.slug}`, ["en"]),
    });
  }

  // --- Learn category pages (English only) ---
  for (const cat of categoryMeta) {
    entries.push({
      url: `${BASE}/en/learn/category/${cat.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: buildAlternates(`/learn/category/${cat.slug}`, ["en"]),
    });
  }

  // --- Glossary (English only) ---
  entries.push({
    url: `${BASE}/en/learn/glossary`,
    changeFrequency: "monthly",
    priority: 0.6,
    alternates: buildAlternates("/learn/glossary", ["en"]),
  });

  // --- Dynamic user profile pages (English only) ---
  try {
    const [searchers, investors, sellers] = await Promise.all([
      prisma.searcherProfile.findMany({
        where: { isPublic: true, slug: { not: null } },
        select: { slug: true, user: { select: { updatedAt: true } } },
      }),
      prisma.investorProfile.findMany({
        where: { isPublic: true, slug: { not: null } },
        select: { slug: true, user: { select: { updatedAt: true } } },
      }),
      prisma.sellerProfile.findMany({
        where: { isPublic: true, slug: { not: null } },
        select: { slug: true, user: { select: { updatedAt: true } } },
      }),
    ]);

    for (const p of searchers.filter((p) => p.slug)) {
      entries.push({
        url: `${BASE}/en/searchers/${p.slug}`,
        lastModified: p.user.updatedAt,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
    for (const p of investors.filter((p) => p.slug)) {
      entries.push({
        url: `${BASE}/en/investors/${p.slug}`,
        lastModified: p.user.updatedAt,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
    for (const p of sellers.filter((p) => p.slug)) {
      entries.push({
        url: `${BASE}/en/sellers/${p.slug}`,
        lastModified: p.user.updatedAt,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  } catch {
    // DB unavailable — skip profile pages
  }

  return entries;
}
