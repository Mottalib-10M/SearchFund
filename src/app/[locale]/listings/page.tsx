import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WaitlistForm from "@/components/listings/WaitlistForm";
import { buildMetadata } from "@/lib/meta-snippets";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("listings", locale);
}

export default function ListingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <h1 className="text-4xl md:text-5xl font-semibold text-apple-black tracking-tight leading-tight">
        A curated marketplace for European SME acquisitions - launching 2026
      </h1>
      <p className="text-lg text-apple-gray-700 mt-6 leading-relaxed">
        SearchFundMarket is building a curated marketplace connecting search fund entrepreneurs, investors,
        and business sellers across Europe. Every listing will be vetted for quality, with verified financials,
        clear deal terms, and full confidentiality protections - with no broker commissions.
      </p>

      {/* What makes a great target */}
      <div className="mt-12 bg-apple-gray-100 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-apple-black">
          What makes a great search fund acquisition target?
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-apple-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-apple-accent mt-0.5 shrink-0">&#10003;</span>
            <span><strong>Stable, recurring revenue</strong> - businesses with long-term contracts, subscription models, or repeat customers provide predictable cash flows that make debt financing feasible.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-apple-accent mt-0.5 shrink-0">&#10003;</span>
            <span><strong>EBITDA between &euro;500K and &euro;3M</strong> - this sweet spot is large enough to support professional management but small enough to avoid PE competition.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-apple-accent mt-0.5 shrink-0">&#10003;</span>
            <span><strong>Fragmented industry with consolidation potential</strong> - sectors like business services, healthcare, education, and niche manufacturing often offer bolt-on acquisition opportunities post-close.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-apple-accent mt-0.5 shrink-0">&#10003;</span>
            <span><strong>Owner-dependent with transition runway</strong> - a founder looking to retire over 12-18 months who can mentor the incoming CEO-operator.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-apple-accent mt-0.5 shrink-0">&#10003;</span>
            <span><strong>Defensible market position</strong> - regulatory licenses, exclusive distribution agreements, geographic density, or specialized expertise that create barriers to entry.</span>
          </li>
        </ul>
      </div>

      {/* Waitlist form */}
      <div className="mt-12 border border-apple-gray-300/50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-apple-black">
          Join the waitlist
        </h2>
        <p className="text-sm text-apple-gray-700 mt-2">
          Be the first to know when the marketplace launches. We&apos;ll notify you with early access.
        </p>
        <WaitlistForm />
      </div>

      {/* CTA to learn */}
      <div className="mt-12 text-center">
        <p className="text-apple-gray-700">
          While you wait, explore our Learning Hub with{" "}
          <strong>60+ in-depth guides</strong> on ETA.
        </p>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-apple-accent font-medium hover:underline mt-3"
        >
          Explore the Learning Hub
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
