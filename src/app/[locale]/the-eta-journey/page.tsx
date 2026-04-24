import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/json-ld";
import { journeyPhases } from "@/data/journey-phases";
import JourneyPageClient from "./JourneyPageClient";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "The Complete ETA Journey: Step-by-Step Guide | SearchFundMarket",
    description:
      "From preparing your search to exiting your acquired company — the complete visual guide to Entrepreneurship Through Acquisition. Articles, tools, and templates for every phase.",
    openGraph: {
      title: "The Complete ETA Journey: Step-by-Step Guide | SearchFundMarket",
      description:
        "From preparing your search to exiting your acquired company — the complete visual guide to Entrepreneurship Through Acquisition. Articles, tools, and templates for every phase.",
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
    name: "The Complete ETA Journey: From Corporate Career to CEO",
    description:
      "A step-by-step guide through every phase of Entrepreneurship Through Acquisition — from preparation to exit.",
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
