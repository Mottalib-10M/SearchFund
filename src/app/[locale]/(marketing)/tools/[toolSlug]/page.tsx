import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getToolBySlug, getAllToolSlugs } from "../_data";
import { safeJsonLd } from "@/lib/json-ld";
import EbitdaMultipleWidget from "../_widgets/EbitdaMultipleWidget";
import SearchCapitalWidget from "../_widgets/SearchCapitalWidget";
import CapTableWidget from "../_widgets/CapTableWidget";
import LBOWidget from "../_widgets/LBOWidget";
import ValuationWidget from "../_widgets/ValuationWidget";
import ValueCreationWidget from "../_widgets/ValueCreationWidget";
import ExitReturnsWidget from "../_widgets/ExitReturnsWidget";

const BASE = "https://www.searchfundmarket.com";

type Props = { params: Promise<{ locale: string; toolSlug: string }> };

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllToolSlugs().map((toolSlug) => ({ toolSlug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) return {};
  return {
    title: tool.ogTitle,
    description: tool.ogDescription,
    alternates: {
      canonical: `${BASE}/${locale}/tools/${toolSlug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD: WebApplication schema
// ---------------------------------------------------------------------------

function webAppSchema(tool: (typeof tools)[number], locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.ogDescription,
    url: `${BASE}/${locale}/tools/${tool.slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "SearchFundMarket",
      url: BASE,
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function ToolPage({ params }: Props) {
  const { locale, toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(webAppSchema(tool, locale)),
        }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-apple-gray-500 mb-6">
        <Link href={`/${locale}/tools`} className="hover:text-apple-accent">
          Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-apple-black">{tool.name}</span>
      </nav>

      {/* Intro */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-apple-black tracking-tight">
        {tool.name}
      </h1>
      <p className="text-apple-gray-500 mt-2 max-w-2xl text-base">
        {tool.description}
      </p>

      {/* Widget */}
      <div className="mt-8" id="calculator">
        <ToolWidget slug={toolSlug} />
      </div>

      {/* Educational content */}
      <EducationalContent slug={toolSlug} />

      {/* Footer disclaimer & related links */}
      <ToolFooter slug={toolSlug} locale={locale} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Widget switch
// ---------------------------------------------------------------------------

function ToolWidget({ slug }: { slug: string }) {
  switch (slug) {
    case "ebitda-multiple-estimator":
      return <EbitdaMultipleWidget />;
    case "search-capital-calculator":
      return <SearchCapitalWidget />;
    case "cap-table-simulator":
      return <CapTableWidget />;
    case "lbo-simulator":
      return <LBOWidget />;
    case "valuation-calculator":
      return <ValuationWidget />;
    case "value-creation-simulator":
      return <ValueCreationWidget />;
    case "exit-returns-calculator":
      return <ExitReturnsWidget />;
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Educational content per tool (rendered above the widget)
// ---------------------------------------------------------------------------

function EducationalContent({ slug }: { slug: string }) {
  switch (slug) {
    case "ebitda-multiple-estimator":
      return <EbitdaContent />;
    case "search-capital-calculator":
      return <SearchCapitalContent />;
    case "cap-table-simulator":
      return <CapTableContent />;
    case "lbo-simulator":
      return <LboContent />;
    case "valuation-calculator":
      return <ValuationContent />;
    case "value-creation-simulator":
      return <ValueCreationContent />;
    case "exit-returns-calculator":
      return <ExitReturnsContent />;
    default:
      return null;
  }
}

// ---- EBITDA Multiple Estimator content ----

function EbitdaContent() {
  return (
    <article className="mt-16 max-w-none">
      <section className="space-y-6 text-[15px] leading-relaxed text-apple-gray-700">
        <h2 className="text-xl font-semibold text-apple-black">
          What Are EBITDA Multiples?
        </h2>
        <p>
          EBITDA multiples are among the most widely used valuation benchmarks in
          mergers and acquisitions. EBITDA stands for Earnings Before Interest,
          Taxes, Depreciation, and Amortization &mdash; a proxy for the
          operating cash flow of a business. The multiple expresses how many
          times a buyer is willing to pay relative to that figure.
        </p>
        <p>
          For example, if a company generates $1&nbsp;million of EBITDA and
          comparable businesses trade at 6x, the implied enterprise value is
          $6&nbsp;million. Enterprise value includes both equity and net debt, so
          the actual equity price a buyer pays will be adjusted for the
          company&rsquo;s balance sheet.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Key Factors That Affect Multiples
        </h2>
        <p>
          While sector is the strongest determinant of EBITDA multiples, many
          company-specific factors push the multiple higher or lower:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Revenue growth rate.</strong> Companies growing above 15%
            annually typically command premium multiples.
          </li>
          <li>
            <strong>Recurring revenue.</strong> Subscription and contract-based
            revenue models reduce risk and increase multiples, sometimes by
            2&ndash;4x compared to project-based peers.
          </li>
          <li>
            <strong>Customer concentration.</strong> If a single customer
            represents more than 20% of revenue, buyers will discount the
            multiple to account for key-man risk.
          </li>
          <li>
            <strong>EBITDA margins.</strong> Higher margins signal pricing power
            and operational efficiency. Businesses with EBITDA margins above 20%
            generally attract higher multiples.
          </li>
          <li>
            <strong>Management depth.</strong> Companies that depend entirely on
            the owner trade at lower multiples because of transition risk. A
            strong second-tier management team adds value.
          </li>
          <li>
            <strong>Company size.</strong> Larger businesses are perceived as
            less risky and attract more buyer interest, which pushes multiples
            up. A $500K EBITDA business might trade at 4x while a $5M EBITDA
            business in the same sector trades at 7x.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Using Multiples in Acquisition Valuation
        </h2>
        <p>
          In a typical search fund or SME acquisition, the buyer starts by
          identifying the target&rsquo;s adjusted EBITDA &mdash; that is, EBITDA
          after normalizing for owner compensation, one-time expenses, and
          related-party transactions. This &ldquo;seller&rsquo;s discretionary
          earnings&rdquo; adjustment is critical because small business
          financials often reflect lifestyle decisions rather than market-rate
          operations.
        </p>
        <p>
          Once adjusted EBITDA is established, the buyer applies a multiple
          derived from comparable transactions. The result is an indicative
          enterprise value. From there, the buyer subtracts net debt (or adds net
          cash) and makes adjustments for working capital to arrive at an equity
          purchase price.
        </p>
        <p>
          Multiple-based valuation is particularly useful in the letter of intent
          (LOI) stage. It provides a fast, defensible starting point that both
          buyer and seller can understand. Detailed due diligence then refines
          the price through quality-of-earnings analysis, working capital
          true-ups, and risk-specific adjustments.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Limitations of Multiple-Based Valuation
        </h2>
        <p>
          EBITDA multiples are a useful shortcut, but they have real limitations
          that every acquirer should understand:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Backward-looking.</strong> Multiples are based on historical
            earnings. A business in decline may look cheap on a trailing multiple
            but be overvalued on a forward basis.
          </li>
          <li>
            <strong>Capital expenditure blindness.</strong> EBITDA ignores
            maintenance and growth capex. A manufacturing business with $2M
            EBITDA but $1M in required annual capex is not worth the same as a
            services business with equal EBITDA and minimal capex.
          </li>
          <li>
            <strong>Working capital differences.</strong> Companies with heavy
            inventory or receivable requirements tie up cash that EBITDA does not
            capture. Net working capital adjustments at closing help, but the
            multiple itself does not differentiate.
          </li>
          <li>
            <strong>Comparability.</strong> Every private business is unique.
            Sector averages provide guidance, but no two companies have identical
            risk profiles, growth prospects, or operational characteristics.
          </li>
        </ul>
        <p>
          For these reasons, experienced acquirers typically use multiples as one
          input alongside discounted cash flow analysis, precedent transactions,
          and a thorough assessment of downside scenarios.
        </p>
      </section>
    </article>
  );
}

// ---- Search Capital Calculator content ----

function SearchCapitalContent() {
  return (
    <article className="mt-16 max-w-none">
      <section className="space-y-6 text-[15px] leading-relaxed text-apple-gray-700">
        <h2 className="text-xl font-semibold text-apple-black">
          What Is Search Capital?
        </h2>
        <p>
          Search capital is the initial fund raised by a search fund
          entrepreneur to finance the search phase &mdash; the period between
          launching the fund and closing an acquisition. During this phase, the
          searcher is not earning traditional income. Instead, they dedicate
          their full-time efforts to sourcing, evaluating, and negotiating deals.
          The capital they raise covers living expenses, operating costs, and the
          legal and financial diligence required to move from prospect to
          closing.
        </p>
        <p>
          In a traditional search fund model, search capital typically comes from
          a group of investors (usually 10&ndash;20) who each contribute a small
          amount in exchange for the right &mdash; but not the obligation &mdash;
          to invest in the eventual acquisition. In a self-funded search, the
          entrepreneur covers these costs from personal savings or a smaller
          investor group.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          How Much Do Searchers Typically Raise?
        </h2>
        <p>
          According to the Stanford Search Fund Study and data from the
          International Search Fund Center (IESE), the median traditional search
          fund raises between $400,000 and $500,000 for the search phase. This
          amount has increased over the past decade alongside rising costs of
          living and longer average search durations.
        </p>
        <p>
          Self-funded searchers typically operate with $100,000 to $200,000 in
          capital, reflecting a leaner operating model but also greater personal
          financial risk. Accelerator-backed searchers fall somewhere in between,
          with search budgets of $250,000 to $400,000 funded by the accelerator
          in exchange for equity and a committed role in the acquisition
          financing.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          What the Capital Is Used For
        </h2>
        <p>
          Search capital covers three broad categories of expenses:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Personal runway.</strong> The searcher&rsquo;s living
            expenses during the search period. This includes housing, food,
            insurance, and any personal obligations. Setting realistic
            expectations here is critical &mdash; a searcher who underestimates
            personal burn rate may be forced to close the fund prematurely.
          </li>
          <li>
            <strong>Search operating costs.</strong> Day-to-day expenses related
            to the search itself: co-working or office space, deal sourcing
            tools and databases, CRM software, travel to meet targets and
            brokers, industry conferences, and ongoing advisory support from
            attorneys and accountants.
          </li>
          <li>
            <strong>LOI and due diligence costs.</strong> Each letter of intent
            triggers a wave of expenses: legal drafting and negotiation,
            quality-of-earnings analysis, environmental assessments, IT
            diligence, and other specialist reviews. It is common to submit
            2&ndash;4 LOIs before closing a deal, and each one can cost $10,000
            to $25,000 in professional fees.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          How to Budget for a Search
        </h2>
        <p>
          Start with a realistic time horizon. The median search duration is
          approximately 20&ndash;24 months, though some searches extend to 30
          months or longer. Build your budget assuming the longer end of that
          range &mdash; running out of capital before finding the right deal is
          the most common reason search funds fail.
        </p>
        <p>
          Next, itemize every expense category and assign monthly or per-event
          costs. Add a contingency buffer of at least 10&ndash;20%. This
          absorbs unexpected expenses: a deal that falls through late in
          diligence, a lease overlap, or an advisor engagement that exceeds the
          original scope. Investors expect to see a thoughtful budget that
          demonstrates financial discipline without being unrealistically lean.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Common Mistakes in Capital Planning
        </h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Underestimating search duration.</strong> Optimism bias leads
            many searchers to budget for 12&ndash;18 months. The reality is
            closer to 24 months on average. Plan for the base case, not the best
            case.
          </li>
          <li>
            <strong>Ignoring failed LOI costs.</strong> Each abandoned deal
            consumes capital with no return. Budget for at least 2&ndash;3
            unsuccessful LOIs in your plan.
          </li>
          <li>
            <strong>Lifestyle creep.</strong> Moving to a new city, upgrading
            travel, or taking on new personal expenses during the search quickly
            erodes runway.
          </li>
          <li>
            <strong>No contingency.</strong> A search without reserves is
            fragile. A single unexpected expense &mdash; a broken deal, a legal
            dispute, an extended timeline &mdash; can force a premature wind-down.
          </li>
          <li>
            <strong>Not separating search capital from acquisition
            capital.</strong> Search capital is spent during the search phase.
            Acquisition capital is raised separately once a deal is identified.
            Confusing the two leads to inaccurate fundraising targets and
            investor confusion.
          </li>
        </ul>
      </section>
    </article>
  );
}

// ---- Placeholder content for coming-soon tools ----

function CapTableContent() {
  return null;
}

function LboContent() {
  return null;
}

function ValuationContent() {
  return null;
}

// ---- Value Creation Simulator content ----

function ValueCreationContent() {
  return (
    <article className="mt-16 max-w-none">
      <section className="space-y-6 text-[15px] leading-relaxed text-apple-gray-700">
        <h2 className="text-xl font-semibold text-apple-black">
          How Search Fund Operators Create Value
        </h2>
        <p>
          Post-acquisition value creation in search fund companies typically
          comes from four levers: organic revenue growth, margin improvement
          (through pricing power and cost optimization), bolt-on acquisitions,
          and multiple expansion at exit.
        </p>
        <p>
          According to the Stanford Search Fund Study, the median search fund
          acquisition generates a 5.4x return on invested capital (MOIC) and a
          32.6% IRR. These returns are driven by buying at reasonable entry
          multiples (typically 4&ndash;6x EBITDA), growing EBITDA through
          operational improvements, and selling at higher exit multiples that
          reflect the company&rsquo;s improved scale and profitability.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          The Four Value Creation Levers
        </h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Revenue growth.</strong> Expanding the customer base, entering
            new markets, launching new products or services, and improving sales
            processes. Typical search fund companies grow revenue 8&ndash;15%
            annually under new management.
          </li>
          <li>
            <strong>Margin improvement.</strong> Pricing optimization (many
            acquired SMEs have not raised prices in years), vendor renegotiation,
            process automation, and overhead rationalization. A 2&ndash;5
            percentage point margin improvement on a $5M revenue business adds
            $100K&ndash;$250K to EBITDA.
          </li>
          <li>
            <strong>Bolt-on acquisitions.</strong> Acquiring smaller competitors
            at lower multiples (3&ndash;4x) and integrating them into the
            platform company. This arbitrage between bolt-on purchase multiples
            and the platform&rsquo;s exit multiple is a powerful value creation
            lever.
          </li>
          <li>
            <strong>Multiple expansion.</strong> As the company grows, improves
            margins, and diversifies its revenue base, it commands a higher
            valuation multiple at exit. A company bought at 5x EBITDA that exits
            at 7x generates 40% of its return from multiple expansion alone.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Using This Simulator
        </h2>
        <p>
          Set your entry parameters (revenue, EBITDA, hold period) and adjust
          each growth lever independently. The simulator projects year-by-year
          financials and shows you exactly how each lever contributes to the
          total enterprise value at exit through the value creation bridge.
        </p>
      </section>
    </article>
  );
}

// ---- Exit Returns Calculator content ----

function ExitReturnsContent() {
  return (
    <article className="mt-16 max-w-none">
      <section className="space-y-6 text-[15px] leading-relaxed text-apple-gray-700">
        <h2 className="text-xl font-semibold text-apple-black">
          Understanding Search Fund Exits
        </h2>
        <p>
          The exit is where search fund investors and operators realize their
          returns. The typical search fund holds a company for 5&ndash;7 years
          before pursuing a liquidity event. During this period, equity value
          grows through a combination of EBITDA growth, debt paydown, and
          potential multiple expansion.
        </p>
        <p>
          Returns to equity holders come from two streams: periodic
          distributions (dividends or management fees paid during the hold
          period) and the terminal exit value (equity value at the point of
          sale). The combination of these two streams determines the total
          return, MOIC, and IRR for investors.
        </p>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Exit Routes Compared
        </h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Financial sale.</strong> Selling to a private equity firm or
            another search fund. Typically priced at market multiples
            (5&ndash;8x EBITDA for SMEs). Clean process but competitive
            multiples.
          </li>
          <li>
            <strong>Strategic sale.</strong> Selling to a corporate buyer who
            values synergies (cost savings, market access, technology). Strategic
            buyers typically pay a 15&ndash;30% premium over financial buyers.
            Running a competitive auction maximizes strategic premiums.
          </li>
          <li>
            <strong>Dividend recapitalization.</strong> Refinancing the company
            to distribute capital to equity holders while retaining ownership.
            Useful when the operator wants to return investor capital without
            giving up the business. Typically leverages 2.5&ndash;3.5x EBITDA.
          </li>
          <li>
            <strong>Long-term hold.</strong> Continuing to operate and distribute
            cash flows. Some search fund operators choose this path when the
            business generates attractive cash yields and they enjoy the
            operating role.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-apple-black mt-8">
          Using This Calculator
        </h2>
        <p>
          Set your entry deal parameters (EBITDA, multiple, capital structure),
          operating assumptions (EBITDA growth, distributions), and exit terms.
          The calculator projects year-by-year cash flows, debt paydown, and
          compares three exit routes side by side with MOIC and IRR metrics.
        </p>
      </section>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Footer with disclaimer & related articles
// ---------------------------------------------------------------------------

function ToolFooter({ slug, locale }: { slug: string; locale: string }) {
  return (
    <footer className="mt-16 border-t border-apple-gray-100 pt-10 space-y-8">
      {/* Related articles */}
      <div>
        <h2 className="text-lg font-semibold text-apple-black">
          Related Articles
        </h2>
        <RelatedLinks slug={slug} locale={locale} />
      </div>

      {/* Disclaimer */}
      <div>
        <h2 className="text-lg font-semibold text-apple-black">Disclaimer</h2>
        <p className="mt-2 text-xs text-apple-gray-500 leading-relaxed max-w-3xl">
          This tool is provided for educational and planning purposes only. It
          does not constitute financial, legal, or investment advice. Results are
          estimates based on general market data and simplified assumptions.
          Actual outcomes will depend on deal-specific factors, market
          conditions, and professional due diligence. Always consult qualified
          M&amp;A advisors, accountants, and attorneys before making investment
          decisions.
        </p>
      </div>

      {/* Back link */}
      <div>
        <Link
          href={`/${locale}/tools`}
          className="text-sm text-apple-accent hover:underline"
        >
          &larr; All Tools &amp; Calculators
        </Link>
      </div>
    </footer>
  );
}

function RelatedLinks({ slug, locale }: { slug: string; locale: string }) {
  const links = getRelatedArticles(slug);
  if (links.length === 0) return null;

  return (
    <ul className="mt-3 space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={`/${locale}${link.href}`}
            className="text-sm text-apple-accent hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function getRelatedArticles(
  slug: string,
): { href: string; label: string }[] {
  switch (slug) {
    case "ebitda-multiple-estimator":
      return [
        {
          href: "/learn/how-to-value-a-small-business-for-acquisition",
          label: "How to Value a Small Business for Acquisition",
        },
        {
          href: "/learn/ebitda-adjustments-for-small-business-acquisitions",
          label: "EBITDA Adjustments for Small Business Acquisitions",
        },
        {
          href: "/learn/what-is-a-search-fund",
          label: "What Is a Search Fund?",
        },
      ];
    case "search-capital-calculator":
      return [
        {
          href: "/learn/how-to-raise-a-search-fund",
          label: "How to Raise a Search Fund",
        },
        {
          href: "/learn/search-fund-economics-explained",
          label: "Search Fund Economics Explained",
        },
        {
          href: "/learn/self-funded-vs-traditional-search-fund",
          label: "Self-Funded vs. Traditional Search Fund",
        },
      ];
    case "cap-table-simulator":
      return [
        {
          href: "/learn/search-fund-economics-explained",
          label: "Search Fund Economics Explained",
        },
      ];
    case "lbo-simulator":
      return [
        {
          href: "/learn/how-to-finance-a-small-business-acquisition",
          label: "How to Finance a Small Business Acquisition",
        },
      ];
    case "valuation-calculator":
      return [
        {
          href: "/learn/how-to-value-a-small-business-for-acquisition",
          label: "How to Value a Small Business for Acquisition",
        },
      ];
    case "value-creation-simulator":
      return [
        {
          href: "/learn/first-100-days",
          label: "The First 100 Days After Acquisition",
        },
        {
          href: "/learn/revenue-growth-playbook",
          label: "Revenue Growth Playbook for Acquired Companies",
        },
        {
          href: "/learn/buy-and-build",
          label: "Buy-and-Build Strategy for Search Funds",
        },
      ];
    case "exit-returns-calculator":
      return [
        {
          href: "/learn/exit-strategies",
          label: "Exit Strategies for Search Fund Entrepreneurs",
        },
        {
          href: "/learn/preparing-company-exit",
          label: "Preparing Your Company for Exit",
        },
        {
          href: "/learn/dividend-recapitalization",
          label: "Dividend Recapitalization Explained",
        },
      ];
    default:
      return [];
  }
}
