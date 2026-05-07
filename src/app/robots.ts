import type { MetadataRoute } from "next";

const locales = ["en", "fr", "es", "it", "pt"];
const protectedPaths = [
  "/dashboard",
  "/admin",
  "/auth/onboarding",
  "/auth/verify-request",
  "/auth/deactivated",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        // Block without locale prefix (middleware redirects these anyway)
        ...protectedPaths,
        // Block with each locale prefix
        ...locales.flatMap((l) => protectedPaths.map((p) => `/${l}${p}`)),
      ],
    },
    sitemap: "https://www.searchfundmarket.com/sitemap.xml",
  };
}
