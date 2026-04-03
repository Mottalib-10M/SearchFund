import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ articleSlug: string }>;
};

const articlesMeta: Record<
  string,
  { title: string; description: string }
> = {
  "getting-started": {
    title: "What is a Search Fund? Complete Guide",
    description:
      "Everything you need to know about the search fund model, from fundraising to acquisition to operations.",
  },
  "eta-france": {
    title: "ETA in France: How to Acquire a Business",
    description:
      "A comprehensive guide to acquiring a business in France, covering legal structures, due diligence, and financing.",
  },
  "eta-germany": {
    title: "ETA in Germany: Complete Guide",
    description:
      "Navigate the German Mittelstand: how to find, acquire, and operate SMEs in Europe's largest economy.",
  },
  "finding-investors": {
    title: "How to Find Search Fund Investors",
    description:
      "Strategies for connecting with investors who back search fund entrepreneurs.",
  },
  "search-fund-returns": {
    title: "Search Fund Returns & Performance Data",
    description:
      "Analysis of search fund performance data, IRR benchmarks, and success factors.",
  },
  "due-diligence-checklist": {
    title: "ETA Due Diligence Checklist",
    description:
      "A practical checklist covering financial, legal, operational, and commercial due diligence.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleSlug } = await params;
  const article = articlesMeta[articleSlug];

  if (!article) return { title: "Article not found" };

  return {
    title: `${article.title} — Learn — SearchFundMarket`,
    description: article.description,
  };
}

function GettingStartedArticle() {
  return (
    <article>
      <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
        What is a Search Fund? Complete Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className="mt-8 space-y-6 text-apple-gray-700 leading-relaxed">
        <p>
          A search fund is an investment vehicle through which an entrepreneur
          (the &ldquo;searcher&rdquo;) raises a pool of capital from investors
          to fund the search for, acquisition of, and operation of a single
          privately held company. The model was pioneered at Stanford Graduate
          School of Business in 1984 and has since grown into a well-established
          path for aspiring CEOs who want to skip the corporate ladder and go
          straight to running their own company.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          How the model works
        </h2>
        <p>
          The search fund model follows a structured, multi-phase lifecycle that
          typically spans five to eight years from inception to exit. Each phase
          has distinct objectives, milestones, and challenges.
        </p>

        <h3 className="text-lg font-semibold text-apple-black mt-6">
          Phase 1: Fundraising the search capital
        </h3>
        <p>
          The entrepreneur begins by raising search capital, typically between
          $400,000 and $600,000 (or the equivalent in euros), from a group of
          10 to 20 investors. These investors each contribute a relatively small
          amount in exchange for the right (but not the obligation) to invest in
          the eventual acquisition. Search capital covers the entrepreneur's
          salary, travel, deal sourcing, legal costs, and other expenses during
          the search period, which typically lasts 18 to 24 months. The
          fundraising process itself usually takes two to four months and
          involves presenting a detailed search thesis to potential backers.
        </p>

        <h3 className="text-lg font-semibold text-apple-black mt-6">
          Phase 2: The search
        </h3>
        <p>
          Once funded, the searcher begins a full-time, systematic search for an
          acquisition target. This involves reviewing hundreds of potential
          companies, reaching out to business owners, brokers, and
          intermediaries, and conducting preliminary due diligence on promising
          leads. Searchers typically evaluate 50 to 100 companies in detail and
          may submit multiple letters of intent before finding the right fit.
          The ideal target is a profitable small or medium enterprise (SME) with
          stable cash flows, a defensible market position, and a retiring owner
          who is looking for a succession solution.
        </p>

        <h3 className="text-lg font-semibold text-apple-black mt-6">
          Phase 3: Acquisition
        </h3>
        <p>
          When a suitable target is identified, the searcher negotiates the
          deal, conducts thorough due diligence, and raises acquisition capital
          from the original investor group (and potentially new co-investors).
          The acquisition is typically structured with a combination of equity
          from search fund investors, seller financing, and senior debt from a
          bank. Acquisition multiples for search fund deals usually range from
          3x to 6x EBITDA, depending on the size, sector, and geography of the
          target company. The searcher typically receives a significant equity
          stake (often 20-30% of the company) as part of the deal economics,
          which vests over time and is tied to performance milestones.
        </p>

        <h3 className="text-lg font-semibold text-apple-black mt-6">
          Phase 4: Operations
        </h3>
        <p>
          After closing the deal, the searcher steps in as CEO and begins
          operating the company. This phase typically lasts four to seven years
          and involves implementing operational improvements, growing revenue,
          professionalizing the organization, and building a leadership team.
          Search fund CEOs often drive value creation through improved financial
          management, technology adoption, geographic expansion, add-on
          acquisitions, and talent upgrades. The support of experienced
          investors who have operated businesses themselves is a significant
          advantage during this phase.
        </p>

        <h3 className="text-lg font-semibold text-apple-black mt-6">
          Phase 5: Exit
        </h3>
        <p>
          The typical exit occurs five to seven years after the acquisition,
          usually through a sale to a strategic buyer, a private equity fund, or
          another search fund entrepreneur. Some searchers choose to hold their
          companies indefinitely as long-term operators. The most successful
          search fund acquisitions have generated returns of 3x to 10x on
          invested capital, with median returns across the asset class
          consistently outperforming most other private equity strategies.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          History and origins
        </h2>
        <p>
          The search fund concept was created in 1984 by H. Irving Grousbeck, a
          professor at Stanford Graduate School of Business, as an alternative
          path for MBA graduates who wanted to become CEOs without climbing the
          corporate ladder or starting a company from scratch. The first search
          funds were small experiments, but the model proved remarkably durable.
          By the early 2000s, dozens of search funds were being raised each year
          in the United States, and the Stanford Center for Entrepreneurial
          Studies began publishing detailed studies tracking their performance.
        </p>
        <p>
          The concept crossed the Atlantic in the early 2010s, when MBA
          graduates from IESE, INSEAD, HEC Paris, and London Business School
          began raising search funds focused on European markets. Today, Europe
          represents one of the fastest-growing regions for search fund
          activity, with particularly strong interest in France, Spain, Germany,
          the United Kingdom, and the Nordics.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          The European opportunity
        </h2>
        <p>
          Europe presents a compelling opportunity for search fund
          entrepreneurs. The continent has millions of SMEs, many of which are
          owned by aging founders with no clear succession plan. In France
          alone, an estimated 700,000 businesses will need to change ownership
          in the next decade. Germany's legendary Mittelstand -- the backbone of
          the European economy -- includes tens of thousands of family-owned
          businesses with revenues between EUR 1M and EUR 50M that face similar
          succession challenges.
        </p>
        <p>
          Compared to the United States, European search funds benefit from less
          competition (fewer searchers relative to the number of available
          targets), lower acquisition multiples, and the opportunity to
          consolidate highly fragmented markets. The European private equity
          ecosystem has also matured significantly, with a growing number of
          investors, lenders, and advisors who understand and support the search
          fund model.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Types of search funds
        </h2>

        <h3 className="text-lg font-semibold text-apple-black mt-6">
          Traditional search fund
        </h3>
        <p>
          The classic model described above: the searcher raises search capital
          from a group of investors, spends 18 to 24 months searching, and
          those investors have the right of first refusal on the acquisition
          financing. This model provides a salary during the search and
          institutional support, but the searcher gives up a significant portion
          of the economics to their investors.
        </p>

        <h3 className="text-lg font-semibold text-apple-black mt-6">
          Self-funded search
        </h3>
        <p>
          In a self-funded search, the entrepreneur finances the search period
          out of personal savings or by working part-time while searching. The
          advantage is that the searcher retains more equity and has greater
          flexibility in deal selection. The downside is the financial pressure
          and lack of an established investor network. Self-funded searches have
          become increasingly popular in Europe, where the cost of living and
          the availability of smaller deals make this approach more feasible.
        </p>

        <h3 className="text-lg font-semibold text-apple-black mt-6">
          Search fund accelerator
        </h3>
        <p>
          Accelerator programs like those offered by Searchfunder, Relay
          Investments, and others in Europe provide a middle ground. They
          offer structured support, mentorship, a community of peers, and
          sometimes search capital -- in exchange for a share of the deal
          economics. These programs have helped lower the barrier to entry for
          first-time searchers, particularly those without an MBA or established
          investor network.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Key statistics
        </h2>
        <p>
          According to the latest data from Stanford and IESE research studies,
          the search fund model has demonstrated strong, consistent performance:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            Over 600 search funds have been raised globally since 1984, with
            the pace of new fund formation accelerating rapidly since 2015.
          </li>
          <li>
            Approximately 55-65% of searchers successfully acquire a company
            within their funded search period.
          </li>
          <li>
            Median pre-tax IRR for search fund investors has historically been
            in the range of 30-35%, with a median return on invested capital
            of 2.5x to 3.5x.
          </li>
          <li>
            The average acquired company has revenue of EUR 5M to EUR 15M and
            EBITDA of EUR 1M to EUR 3M.
          </li>
          <li>
            European search funds have grown from fewer than 10 per year in
            2010 to over 80 per year as of 2024, making Europe the
            fastest-growing market for the model.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Getting started
        </h2>
        <p>
          If you are considering the search fund path, here are the key steps
          to get started:
        </p>
        <ol className="list-decimal list-inside space-y-2 mt-3">
          <li>
            <strong>Educate yourself.</strong> Read the foundational resources:
            the Stanford Search Fund Primer, the IESE International Search
            Fund Study, and the growing body of case studies and blog posts
            from successful searchers.
          </li>
          <li>
            <strong>Build your thesis.</strong> Define the type of company you
            want to acquire: which sectors, geographies, size range, and deal
            characteristics align with your skills and interests.
          </li>
          <li>
            <strong>Network relentlessly.</strong> Connect with other
            searchers, search fund investors, successful operators, brokers,
            and advisors. Attend conferences like the IESE Search Fund
            Conference, the Stanford Search Fund CEO Conference, and join
            online communities like SearchFundMarket.
          </li>
          <li>
            <strong>Decide on your model.</strong> Will you raise a
            traditional search fund, self-fund your search, or join an
            accelerator? Each path has trade-offs in terms of economics,
            support, and flexibility.
          </li>
          <li>
            <strong>Start the search.</strong> Whether funded or self-funded,
            the search is a full-time commitment. Be prepared for a marathon,
            not a sprint. The best searchers are systematic, persistent, and
            genuinely curious about the businesses they evaluate.
          </li>
        </ol>
        <p className="mt-4">
          The search fund model offers a unique path to business ownership for
          ambitious entrepreneurs who want to acquire and operate an existing
          profitable company rather than building one from scratch. With the
          right preparation, network, and mindset, it can be one of the most
          rewarding career paths in business.
        </p>
      </div>
    </article>
  );
}

function PlaceholderArticle({ title }: { title: string }) {
  return (
    <article>
      <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
        {title}
      </h1>
      <div className="mt-8 rounded-xl border border-apple-gray-100 bg-apple-gray-100/50 p-8 text-center">
        <p className="text-apple-gray-500">
          This article is coming soon. Check back later.
        </p>
      </div>
    </article>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { articleSlug } = await params;
  const meta = articlesMeta[articleSlug];

  if (!meta) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        href="/learn"
        className="text-apple-accent text-sm hover:underline inline-block mb-8"
      >
        &larr; Back to Learn
      </Link>

      {articleSlug === "getting-started" ? (
        <GettingStartedArticle />
      ) : (
        <PlaceholderArticle title={meta.title} />
      )}

      {/* Bottom CTA */}
      <div className="mt-16 pt-8 border-t border-apple-gray-100">
        <p className="text-apple-gray-700">
          Ready to start your search?{" "}
          <Link
            href="/get-started"
            className="text-apple-accent font-medium hover:underline"
          >
            Join SearchFundMarket &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
