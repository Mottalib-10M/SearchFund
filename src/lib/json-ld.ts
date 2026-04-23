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
      "The leading knowledge platform for Entrepreneurship Through Acquisition (ETA) in Europe.",
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
