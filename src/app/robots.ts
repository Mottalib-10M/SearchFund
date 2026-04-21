import type { MetadataRoute } from "next";

const locales = ["en", "fr", "es", "it", "pt"];
const protectedPaths = ["/dashboard/", "/admin/", "/auth/onboarding"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        ...locales.flatMap((l) => protectedPaths.map((p) => `/${l}${p}`)),
      ],
    },
    sitemap: "https://www.searchfundmarket.com/sitemap.xml",
  };
}
