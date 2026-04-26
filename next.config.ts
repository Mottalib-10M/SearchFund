import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * 301 redirects for 41 deleted articles (April 2026 content audit).
 * Each entry maps a removed slug → its best replacement.
 *   A = near-duplicate consolidated into the stronger twin
 *   B = thin template redirected to parent-category article
 *   C = weak comparison redirected to best alternative
 */
const articleRedirects: Array<{ old: string; new: string }> = [
  // ── Category A: near-duplicates (19) ──────────────────────────────────
  { old: "acquiring-landscaping-business", new: "landscaping-acquisition" },
  { old: "acquiring-plumbing-business", new: "plumbing-acquisition" },
  { old: "acquiring-veterinary-practice", new: "veterinary-practice-acquisition" },
  { old: "acquiring-distribution-company", new: "distribution-wholesale-acquisition" },
  { old: "acquiring-logistics-company", new: "logistics-transportation-acquisition" },
  { old: "acquiring-it-services-firm", new: "it-services-acquisition" },
  { old: "acquiring-restaurant-business", new: "restaurant-acquisition" },
  { old: "acquiring-franchise-business", new: "franchise-acquisition" },
  { old: "acquiring-insurance-brokerage", new: "acquiring-insurance-agency" },
  { old: "acquiring-accounting-firm", new: "acquiring-accounting-practice" },
  { old: "acquiring-construction-company", new: "construction-acquisition" },
  { old: "acquiring-waste-management", new: "waste-management-acquisition" },
  { old: "acquiring-electrical-business", new: "acquiring-electrical-contractor" },
  { old: "dental-practice-acquisition", new: "acquiring-dental-practice" },
  { old: "hvac-acquisition", new: "acquiring-hvac-business" },
  { old: "staffing-agency-acquisition", new: "acquiring-staffing-agency" },
  { old: "digital-marketing-agency-acquisition", new: "acquiring-digital-marketing-agency" },
  { old: "eta-vs-franchise-deep", new: "eta-vs-franchise-comparison" },
  { old: "eta-latin-america", new: "eta-latin-america-overview" },

  // ── Category B: thin templates → parent category (16) ─────────────────
  { old: "optometry-practice-acquisition", new: "healthcare-acquisition" },
  { old: "physical-therapy-acquisition", new: "healthcare-acquisition" },
  { old: "behavioral-health-acquisition", new: "healthcare-acquisition" },
  { old: "pool-service-acquisition", new: "home-services-acquisition" },
  { old: "pet-services-acquisition", new: "home-services-acquisition" },
  { old: "web-hosting-acquisition", new: "saas-acquisition" },
  { old: "marketplace-acquisition", new: "ecommerce-acquisition" },
  { old: "media-publishing-acquisition", new: "industry-selection-framework" },
  { old: "packaging-labeling-acquisition", new: "manufacturing-acquisition" },
  { old: "metal-fabrication-acquisition", new: "manufacturing-acquisition" },
  { old: "energy-services-acquisition", new: "home-services-acquisition" },
  { old: "fire-protection-acquisition", new: "home-services-acquisition" },
  { old: "food-beverage-manufacturing-acquisition", new: "manufacturing-acquisition" },
  { old: "engineering-architecture-acquisition", new: "professional-services-acquisition" },
  { old: "wealth-management-acquisition", new: "financial-services-acquisition" },
  { old: "consulting-firm-acquisition", new: "professional-services-acquisition" },

  // ── Category C: weak comparisons → best alternative (6) ───────────────
  { old: "eta-vs-private-credit", new: "eta-vs-private-equity" },
  { old: "eta-vs-angel-investing", new: "is-eta-right-for-you" },
  { old: "eta-vs-lower-middle-market-pe", new: "eta-vs-private-equity" },
  { old: "organic-vs-acquisitive-growth", new: "buy-and-build" },
  { old: "service-vs-product-businesses", new: "industry-selection-framework" },
  { old: "product-line-extension", new: "cross-selling-upselling" },
];

const nextConfig: NextConfig = {
  redirects: async () => [
    // Existing redirects
    {
      source: "/listings/new",
      destination: "/listings",
      permanent: true,
    },
    {
      source: "/listings/:slug",
      destination: "/listings",
      permanent: true,
    },

    // Deleted-article 301s — one rule per slug with :locale prefix
    ...articleRedirects.flatMap(({ old: oldSlug, new: newSlug }) => [
      {
        source: `/:locale(en|fr|es|it|pt)/learn/${oldSlug}`,
        destination: `/:locale/learn/${newSlug}`,
        permanent: true,
      },
    ]),
  ],
};

export default withNextIntl(nextConfig);
