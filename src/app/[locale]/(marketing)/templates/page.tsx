import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { templates } from "./_data";
import { safeJsonLd, collectionPageSchema } from "@/lib/json-ld";

const BASE = "https://www.searchfundmarket.com";

const PHASE_LABELS: Record<string, string> = {
  prepare: "Prepare",
  fundraise: "Fundraise",
  search: "Search",
  acquire: "Acquire",
  operate: "Operate",
  exit: "Exit",
};

const PHASE_COLORS: Record<string, string> = {
  prepare: "#5856D6",
  fundraise: "#0071E3",
  search: "#32ADE6",
  acquire: "#34C759",
  operate: "#FF9F0A",
  exit: "#AF52DE",
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Free M&A Templates: LOI, DD Checklist & PPM [Free] | SFM",
    description:
      "Don't start from a blank page. Download free, ready-to-use templates — Letter of Intent, Due Diligence Checklist, and PPM — built for search fund entrepreneurs.",
    alternates: { canonical: `${BASE}/${locale}/templates` },
  };
}

export default async function TemplatesPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            collectionPageSchema(
              "M&A Templates for Search Fund Entrepreneurs",
              "Free templates for LOI, due diligence, and PPM  -  tailored for search fund and SME acquisitions.",
              `${BASE}/${locale}/templates`,
            ),
          ),
        }}
      />

      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        Templates &amp; Checklists
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl">
        Free, practitioner-grade templates for every stage of the acquisition
        process. Adapted from industry best practices and the Stanford Search
        Fund Primer.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Link
            key={template.slug}
            href={`/${locale}/templates/${template.slug}`}
            className="group block rounded-2xl border border-apple-gray-200 p-6 hover:border-apple-accent/30 hover:bg-apple-accent/[0.02] transition-all"
          >
            <div className="flex items-start justify-between">
              <FileText className="h-6 w-6 text-apple-gray-400 group-hover:text-apple-accent transition-colors" />
              <span
                className="text-xs font-medium rounded-full px-2.5 py-0.5 text-white"
                style={{ backgroundColor: PHASE_COLORS[template.phase] }}
              >
                {PHASE_LABELS[template.phase]}
              </span>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-apple-black group-hover:text-apple-accent transition-colors leading-snug">
              {template.title.replace(/ \(.*\)/, "").replace(/ for .*/, "")}
            </h2>
            <p className="text-sm text-apple-gray-700 mt-2 line-clamp-3">
              {template.description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm text-apple-accent mt-4 group-hover:gap-2 transition-all">
              View template <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>

      <section className="mt-16 border-t border-apple-gray-100 pt-10">
        <h2 className="text-lg font-semibold text-apple-black">Disclaimer</h2>
        <p className="mt-2 text-xs text-apple-gray-500 leading-relaxed max-w-3xl">
          These templates are provided for educational and planning purposes
          only. They do not constitute legal, financial, or investment advice.
          Every acquisition is unique and subject to the laws of the applicable
          jurisdiction. Always consult qualified professional advisors before
          using any template in a real transaction.
        </p>
      </section>
    </div>
  );
}
