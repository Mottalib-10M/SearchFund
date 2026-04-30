import type { ArticleMeta } from "@/app/[locale]/learn/_articles/article-registry";

const BASE = "https://www.searchfundmarket.com";

// ---------------------------------------------------------------------------
// XSS-safe JSON-LD serializer
// ---------------------------------------------------------------------------

export function safeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

// ---------------------------------------------------------------------------
// Organization (global)
// ---------------------------------------------------------------------------

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SearchFundMarket",
    url: BASE,
    logo: `${BASE}/favicon.svg`,
    description:
      "The most complete knowledge platform for Entrepreneurship Through Acquisition (ETA). Guides, data, and tools for search fund entrepreneurs worldwide.",
    sameAs: [
      "https://www.linkedin.com/company/searchfundmarket",
    ],
  };
}

// ---------------------------------------------------------------------------
// WebSite with SearchAction (global)
// ---------------------------------------------------------------------------

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SearchFundMarket",
    url: BASE,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/en/learn?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ---------------------------------------------------------------------------
// Article (per article page)
// ---------------------------------------------------------------------------

export function articleSchema(meta: ArticleMeta, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.ogTitle,
    description: meta.ogDescription,
    url: `${BASE}/${locale}/learn/${meta.slug}`,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    author: {
      "@type": "Organization",
      name: "SearchFundMarket Editorial Team",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "SearchFundMarket",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/${locale}/learn/${meta.slug}`,
    },
    image: `${BASE}/${locale}/learn/${meta.slug}/opengraph-image`,
    inLanguage: locale,
    ...(meta.sources && meta.sources.length > 0
      ? {
          citation: meta.sources.map((s) => ({
            "@type": "CreativeWork",
            name: `${s.name}: ${s.title}`,
            ...(s.url ? { url: s.url } : {}),
            ...(s.year ? { datePublished: String(s.year) } : {}),
          })),
        }
      : {}),
  };
}

// ---------------------------------------------------------------------------
// FAQPage (for article FAQ sections)
// ---------------------------------------------------------------------------

interface FAQItem {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// BreadcrumbList
// ---------------------------------------------------------------------------

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// CollectionPage (learn hub, category pages)
// ---------------------------------------------------------------------------

export function collectionPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: "SearchFundMarket",
      url: BASE,
    },
  };
}

// ---------------------------------------------------------------------------
// DefinedTermSet (glossary)
// ---------------------------------------------------------------------------

interface GlossaryTerm {
  term: string;
  definition: string;
}

// ---------------------------------------------------------------------------
// Dataset (data page)
// ---------------------------------------------------------------------------

export function datasetSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Search Fund Industry Statistics",
    description:
      "Aggregated search fund industry data including returns, deal metrics, growth trends, and market demographics. Sourced from Stanford GSB 2024, IESE 2024, and Yale SOM 2025 academic studies.",
    url: `${BASE}/${locale}/search-fund-statistics`,
    creator: {
      "@type": "Organization",
      name: "SearchFundMarket",
      url: BASE,
    },
    dateModified: "2025-01-15",
    license: "https://creativecommons.org/licenses/by-nc/4.0/",
    isBasedOn: [
      {
        "@type": "CreativeWork",
        name: "Stanford GSB: 2024 Search Fund Study: Selected Observations",
        url: "https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study",
      },
      {
        "@type": "CreativeWork",
        name: "IESE Business School: 2024 International Search Fund Study",
        url: "https://www.iese.edu/entrepreneurship/search-funds/",
      },
      {
        "@type": "CreativeWork",
        name: "Yale SOM: How Are Search Fund Investors Really Faring?",
        url: "https://som.yale.edu/sites/default/files/2025-10/How%20are%20Search%20Fund%20Investors%20Really%20Faring.pdf",
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// DefinedTermSet (glossary)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// EducationalOrganization (MBA program profiles)
// ---------------------------------------------------------------------------

interface EducationalOrgInput {
  name: string;
  url: string;
  location: string;
  description: string;
}

export function educationalOrganizationSchema(org: EducationalOrgInput) {
  return {
    "@type": "EducationalOrganization",
    name: org.name,
    url: org.url,
    address: org.location,
    description: org.description,
  };
}

// ---------------------------------------------------------------------------
// ItemList (for hub pages listing multiple items)
// ---------------------------------------------------------------------------

export function itemListSchema(
  items: Record<string, unknown>[],
  name?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item,
    })),
  };
}

// ---------------------------------------------------------------------------
// DefinedTermSet (glossary)
// ---------------------------------------------------------------------------

export function definedTermSetSchema(terms: GlossaryTerm[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "ETA Glossary",
    description: "Searchable A-Z dictionary of 60+ ETA and acquisition terms.",
    url,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };
}
