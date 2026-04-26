import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/json-ld";
import { journeyPhases } from "@/data/journey-phases";
import JourneyPageClient from "./JourneyPageClient";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "The 6 Phases of ETA: How to Buy, Run & Exit a Company | SearchFundMarket",
    description:
      "Step-by-step guide to Entrepreneurship Through Acquisition (ETA). Learn the 6 phases: prepare, fundraise, search, acquire, operate, and exit. Includes calculators, templates, and expert insights.",
    openGraph: {
      title: "The 6 Phases of ETA: How to Buy, Run & Exit a Company | SearchFundMarket",
      description:
        "Step-by-step guide to Entrepreneurship Through Acquisition (ETA). Learn the 6 phases: prepare, fundraise, search, acquire, operate, and exit. Includes calculators, templates, and expert insights.",
      type: "website",
    },
    alternates: {
      canonical: `${BASE}/${locale}/the-eta-journey`,
      languages: {
        en: `${BASE}/en/the-eta-journey`,
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
