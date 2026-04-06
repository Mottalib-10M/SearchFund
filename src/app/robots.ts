import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/auth/onboarding", "/admin/"],
    },
    sitemap: "https://www.searchfundmarket.com/sitemap.xml",
  };
}
