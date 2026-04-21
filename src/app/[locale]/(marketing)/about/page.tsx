import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/meta-snippets";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("about", locale);
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-apple-black tracking-tight">
        About SearchFundMarket
      </h1>

      <p className="text-apple-gray-700 mt-6 text-lg leading-relaxed">
        SearchFundMarket is the first dedicated marketplace for search fund
        acquisitions in Europe. We connect search fund entrepreneurs looking to
        acquire and operate a small business, investors seeking to back them, and
        business owners ready to transition their company to the next generation
        of leadership.
      </p>

      <p className="text-apple-gray-700 mt-4 text-lg leading-relaxed">
        We believe the best acquisitions happen when the right people find each
        other. Our platform removes the friction, the brokers, and the noise
        &mdash; leaving only what matters: a great business and the right buyer.
      </p>

      {/* ── Our Mission ── */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-apple-black tracking-tight">
          Our Mission
        </h2>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          Acquisition entrepreneurship has long been concentrated in the United
          States, with a well-established ecosystem of MBA programs, investors,
          and advisors supporting the model. In Europe, the opportunity is just
          as large &mdash; arguably larger &mdash; but the infrastructure to
          connect searchers, sellers, and investors has been missing.
        </p>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          Our mission is to democratize access to acquisition entrepreneurship
          across Europe. We want to make it as easy for a searcher in Madrid to
          find a business in Lyon as it is for a searcher in Boston to find one
          in Dallas. We are building the connective tissue that the European
          search fund ecosystem needs to scale.
        </p>
      </section>

      {/* ── The ETA Model ── */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-apple-black tracking-tight">
          The ETA Model
        </h2>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          Entrepreneurship Through Acquisition (ETA) is a path to business
          ownership where an entrepreneur &mdash; often an MBA graduate &mdash;
          raises a small fund from investors to finance a search for a company to
          acquire and operate. Unlike traditional private equity, the searcher
          becomes the CEO, running the business day-to-day and building long-term
          value.
        </p>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          The typical search fund targets profitable small and medium-sized
          businesses with strong cash flows, loyal customers, and defensible
          market positions. These are companies with revenues between &euro;1M
          and &euro;10M and EBITDA margins that support acquisition financing.
          Sectors like B2B services, healthcare, education, and niche
          manufacturing are particularly attractive.
        </p>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          The model has produced exceptional returns for investors &mdash;
          historically averaging over 30% IRR in the US &mdash; while giving
          entrepreneurs a fast track to CEO-level responsibility and meaningful
          equity ownership.
        </p>
      </section>

      {/* ── Why Europe ── */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-apple-black tracking-tight">
          Why Europe
        </h2>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          Europe is home to millions of small and medium-sized businesses, many
          of which are family-owned and facing a generational succession
          challenge. Over the next decade, an estimated 2.4 million SMEs across
          the EU will need to transition ownership. Many of these businesses have
          no succession plan.
        </p>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          This creates a unique opportunity for search fund entrepreneurs. The
          supply of quality businesses is enormous, competition from private
          equity is lower than in the US for sub-&euro;5M EBITDA deals, and
          valuations are generally more attractive. Markets like France, Germany,
          Spain, the Netherlands, and the UK each present distinct opportunities
          for searchers with the right language skills and cultural
          understanding.
        </p>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          What has been missing is a centralized platform where these
          opportunities can be discovered, evaluated, and acted upon. That is
          what we are building.
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="mt-16 pt-12 border-t border-apple-gray-100">
        <h2 className="text-2xl font-semibold text-apple-black tracking-tight">
          Join the marketplace
        </h2>
        <p className="text-apple-gray-700 mt-4 leading-relaxed">
          Whether you are a searcher looking for your next acquisition, an
          investor seeking to back the next generation of operators, or a
          business owner exploring a sale &mdash; SearchFundMarket is where the
          European search fund community comes together.
        </p>
        <Link
          href="/auth/signup"
          className="text-apple-accent text-sm font-medium mt-6 inline-flex items-center gap-1 hover:underline"
        >
          Get started
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </section>
    </div>
  );
}
