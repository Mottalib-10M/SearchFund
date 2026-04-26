import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/meta-snippets";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("about/editorial-policy", locale);
}

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
        Editorial Policy
      </h1>

      <div className="mt-8 space-y-8 text-sm text-apple-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-apple-black mb-3">
            Who writes our content
          </h2>
          <p>
            All articles on SearchFundMarket are produced by our editorial team, which
            brings together professionals with direct experience in Entrepreneurship
            Through Acquisition (ETA), including former searchers, investors, and
            advisors who have participated in search fund transactions across Europe and
            the United States.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-apple-black mb-3">
            Research methodology
          </h2>
          <p>
            Our content is grounded in peer-reviewed academic research, proprietary
            industry data, and practitioner interviews. We draw primarily from the
            following institutions:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>
              <strong>Stanford Graduate School of Business</strong> - The 2024 Search
              Fund Study, covering 681 funds and 40 years of performance data
            </li>
            <li>
              <strong>IESE Business School</strong> - International Search Fund Study,
              with a focus on European and Latin American markets
            </li>
            <li>
              <strong>INSEAD</strong> - European Search Fund Research, analyzing deal
              characteristics and success factors in EU markets
            </li>
            <li>
              <strong>HEC Paris</strong> - Research on entrepreneurial acquisition in
              France and the Francophone ecosystem
            </li>
            <li>
              <strong>SDA Bocconi</strong> - Search fund activity and succession
              dynamics in Italy
            </li>
            <li>
              <strong>CBS Copenhagen</strong> - Nordic search fund ecosystem research
            </li>
          </ul>
          <p className="mt-3">
            Where relevant, articles include numbered references to their specific
            academic sources.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-apple-black mb-3">
            Update cadence
          </h2>
          <p>
            All articles are reviewed at least every six months. When new research is
            published (such as the annual Stanford study), affected articles are updated
            within 30 days. The &ldquo;Updated&rdquo; date on each article reflects the
            most recent editorial review.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-apple-black mb-3">
            Editorial independence
          </h2>
          <p>
            SearchFundMarket does not publish paid content, sponsored articles, or
            affiliate-driven recommendations. Our editorial team operates independently
            from any commercial relationships. No investor, fund, or advisory firm has
            editorial influence over our content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-apple-black mb-3">
            Corrections policy
          </h2>
          <p>
            If you identify a factual error, outdated data, or misleading information
            in any of our articles, please{" "}
            <Link href="/en/contact" className="text-apple-accent hover:underline">
              contact us
            </Link>
            . We review all feedback and publish corrections promptly. Substantive
            corrections are noted at the top of the affected article.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-apple-black mb-3">
            Disclaimer
          </h2>
          <p>
            All content on SearchFundMarket is educational in nature. Nothing published
            on this platform constitutes financial, legal, tax, or investment advice.
            Readers should always consult qualified professional advisors before making
            investment or acquisition decisions.
          </p>
        </section>
      </div>
    </div>
  );
}
