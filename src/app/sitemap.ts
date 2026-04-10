import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { allArticles, categoryMeta } from "./learn/_articles/article-registry";

const BASE = "https://www.searchfundmarket.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/listings`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/searchers`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/investors`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/community`, changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/learn`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/auth/signin`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/auth/signup`, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Dynamic listing pages
  let listingPages: MetadataRoute.Sitemap = [];
  try {
    const listings = await prisma.listing.findMany({
      where: { status: "ACTIVE" },
      select: { slug: true, publishedAt: true },
      orderBy: { publishedAt: "desc" },
    });
    listingPages = listings.map((l) => ({
      url: `${BASE}/listings/${l.slug}`,
      lastModified: l.publishedAt ?? undefined,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    // DB unavailable at build time — skip dynamic pages
  }

  // Dynamic user profile pages (searchers & investors with public profiles)
  let profilePages: MetadataRoute.Sitemap = [];
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
    profilePages = [
      ...searchers
        .filter((p) => p.slug)
        .map((p) => ({
          url: `${BASE}/searchers/${p.slug}`,
          lastModified: p.user.updatedAt,
          changeFrequency: "monthly" as const,
          priority: 0.5,
        })),
      ...investors
        .filter((p) => p.slug)
        .map((p) => ({
          url: `${BASE}/investors/${p.slug}`,
          lastModified: p.user.updatedAt,
          changeFrequency: "monthly" as const,
          priority: 0.5,
        })),
      ...sellers
        .filter((p) => p.slug)
        .map((p) => ({
          url: `${BASE}/sellers/${p.slug}`,
          lastModified: p.user.updatedAt,
          changeFrequency: "monthly" as const,
          priority: 0.5,
        })),
    ];
  } catch {
    // DB unavailable — skip
  }

  // Learn article pages
  const articlePages: MetadataRoute.Sitemap = allArticles.map((a) => ({
    url: `${BASE}/learn/${a.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Learn category pages
  const categoryPages: MetadataRoute.Sitemap = categoryMeta.map((c) => ({
    url: `${BASE}/learn/category/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Glossary page
  const glossaryPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/learn/glossary`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [...staticPages, ...articlePages, ...categoryPages, ...glossaryPage, ...listingPages, ...profilePages];
}
