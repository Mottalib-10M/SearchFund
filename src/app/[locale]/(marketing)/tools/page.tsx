import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tools } from "./_data";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Free ETA Tools & Calculators | SearchFundMarket",
    description: `${tools.length} free interactive tools for search fund entrepreneurs — EBITDA multiples, capital planning, cap table simulation, LBO modeling, and business valuation.`,
    alternates: { canonical: `${BASE}/${locale}/tools` },
  };
}

export default async function ToolsPage({ params }: Props) {
  const { locale } = await params;
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            collectionPageSchema(
              "ETA Tools & Calculators",
              "Free interactive tools for search fund entrepreneurs",
              `${BASE}/${locale}/tools`,
            ),
          ),
        }}
      />

      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Tools &amp; Calculators
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">
        Free interactive tools to help you plan, model, and execute your
        acquisition. No sign-up required.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${locale}/tools/${tool.slug}`}
            className="group block rounded-2xl border border-apple-gray-200 p-6 hover:border-apple-accent/30 hover:bg-apple-accent/[0.02] transition-all"
          >
            <h2 className="text-lg font-semibold text-apple-black group-hover:text-apple-accent transition-colors">
              {tool.name}
            </h2>
            <p className="text-sm text-apple-gray-700 mt-2">
              {tool.description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm text-apple-accent mt-4 group-hover:gap-2 transition-all">
              Open tool <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>

      <section className="mt-16 border-t border-apple-gray-100 pt-10">
        <h2 className="text-lg font-semibold text-apple-black">Disclaimer</h2>
        <p className="mt-2 text-xs text-apple-gray-500 leading-relaxed max-w-3xl">
          These tools are provided for educational and planning purposes only.
          They do not constitute financial, legal, or investment advice. Results
          are estimates based on general market data and should not be relied upon
          for making investment decisions. Always consult qualified professional
          advisors before proceeding with any acquisition or investment.
        </p>
      </section>
    </div>
  );
}
