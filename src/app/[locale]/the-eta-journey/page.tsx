import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/json-ld";
import { journeyPhases } from "@/data/journey-phases";
import JourneyPageClient from "@/components/journey/JourneyPageClient";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "How to Buy a Business in 6 Steps: The ETA Framework",
    description:
      "Prepare, fundraise, search, acquire, operate, exit. Each phase broken down with dedicated guides, interactive tools, templates, and common mistakes to avoid.",
    openGraph: {
      title: "How to Buy a Business in 6 Steps: The ETA Framework",
      description:
        "Prepare, fundraise, search, acquire, operate, exit. Each phase broken down with dedicated guides, interactive tools, templates, and common mistakes to avoid.",
      type: "website",
    },
    alternates: {
      canonical: `${BASE}/${locale}/the-eta-journey`,
      languages: {
        en: `${BASE}/en/the-eta-journey`,
        fr: `${BASE}/fr/the-eta-journey`,
        es: `${BASE}/es/the-eta-journey`,
        it: `${BASE}/it/the-eta-journey`,
        pt: `${BASE}/pt/the-eta-journey`,
        "x-default": `${BASE}/en/the-eta-journey`,
      },
    },
  };
}

export default function TheEtaJourneyPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "The 6 Phases of Entrepreneurship Through Acquisition (ETA)",
    description:
      "Step-by-step guide to buying, running, and exiting a company through a search fund. Covers preparation, fundraising, deal sourcing, acquisition, operations, and exit strategies.",
    totalTime: "P7Y",
    step: journeyPhases.map((phase, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: phase.id.charAt(0).toUpperCase() + phase.id.slice(1),
      url: `${BASE}/en/the-eta-journey#${phase.id}`,
      itemListElement: phase.articles.map((article) => ({
        "@type": "HowToDirection",
        text: article.slug.replace(/-/g, " "),
      })),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(howToSchema) }}
      />
      <JourneyPageClient />
    </>
  );
}
