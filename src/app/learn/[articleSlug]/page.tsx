import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ articleSlug: string }>;
};

const articlesMeta: Record<
  string,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  "getting-started": {
    title: "What is a Search Fund? A Complete Guide to the ETA Model",
    description:
      "Everything about the search fund model: fundraising, acquisition, operations, and exit. Learn how ETA works with key statistics and data from 40 years.",
    ogTitle: "What is a Search Fund? The Complete Guide to Entrepreneurship Through Acquisition",
    ogDescription:
      "From fundraising to exit — understand how search funds work, key statistics, and why ETA is one of the best paths to becoming a CEO.",
  },
  "stanford-2024-study": {
    title: "Stanford 2024 Search Fund Study — Key Takeaways & Data",
    description:
      "Deep dive into the landmark 2024 Stanford GSB study: 681 search funds, 35% IRR, 4.5x ROIC. Explore record growth, sector trends, and key success factors.",
    ogTitle: "Stanford 2024 Search Fund Study: 681 Funds, 35% IRR — What the Data Shows",
    ogDescription:
      "The most comprehensive search fund dataset ever: 35% IRR, 4.5x returns, record 94 new funds in 2023. Key takeaways for searchers and investors.",
  },
  "search-fund-returns": {
    title: "Search Fund Returns & Performance Data (1984–2024)",
    description:
      "40 years of search fund performance data: 35% IRR, 4.5x ROIC, and a 63% acquisition rate. Compare returns to PE, VC, and other alternative asset classes.",
    ogTitle: "Search Fund Returns: 35% IRR Over 40 Years — Performance Data & Benchmarks",
    ogDescription:
      "How do search funds compare to PE and VC? Explore 40 years of return data, acquisition rates, and deal characteristics.",
  },
  "eta-europe": {
    title: "ETA in Europe: The Search Fund Opportunity & Key Markets",
    description:
      "Why Europe is the fastest-growing market for search funds: 23M SMEs, lower multiples, and less competition. Explore key markets and leading ETA institutions.",
    ogTitle: "ETA in Europe: Why Search Funds Are Booming Across the Continent",
    ogDescription:
      "23 million SMEs, a massive succession wave, and lower multiples than the US. Discover why Europe is the new frontier for ETA.",
  },
  "eta-france": {
    title: "Acquire a Business in France: The Complete ETA Guide",
    description:
      "A complete guide to acquiring a business in France: legal structures, BPI France financing, deal sourcing, and due diligence essentials for ETA entrepreneurs.",
    ogTitle: "ETA in France: The Complete Guide to Acquiring a Business",
    ogDescription:
      "700,000 businesses changing hands, strong financing options, and a thriving ETA ecosystem. Learn how to acquire a company in France.",
  },
  "eta-germany": {
    title: "ETA in Germany: Acquire Mittelstand SMEs — Full Guide",
    description:
      "Navigate the German Mittelstand: 3.5M SMEs, 190K succession opportunities. Learn how to find, acquire, and operate businesses in Europe's largest economy.",
    ogTitle: "ETA in Germany: Acquiring Mittelstand Companies — A Complete Guide",
    ogDescription:
      "190,000 German businesses need successors by 2026. Discover how to tap into the Mittelstand — world-class companies at attractive valuations.",
  },
  "finding-investors": {
    title: "How to Find Search Fund Investors — A Practical Guide",
    description:
      "Proven strategies for raising search capital: investor types, approach tactics, what they look for, and key ETA conferences to attend. Start fundraising.",
    ogTitle: "How to Find & Convince Search Fund Investors to Back Your Search",
    ogDescription:
      "Ex-searchers, family offices, institutional investors — learn how to approach them, what they look for, and how to close your fundraise.",
  },
  "self-funded-vs-traditional": {
    title: "Self-Funded vs. Traditional Search Fund — Comparison",
    description:
      "Compare the two main ETA models side by side: equity split, risk profile, deal size, and flexibility. Find which search fund path fits your situation and goals.",
    ogTitle: "Self-Funded Search vs. Traditional Search Fund — Which Path Is Right for You?",
    ogDescription:
      "20% equity vs. 80%. Lower risk vs. more control. Compare the economics and trade-offs of both search fund models.",
  },
  "due-diligence-checklist": {
    title: "ETA Due Diligence Checklist — Complete Acquisition Guide",
    description:
      "A comprehensive due diligence checklist for search fund acquisitions. Financial, legal, operational, commercial, and cultural assessments covered step by step.",
    ogTitle: "The Complete Due Diligence Checklist for Search Fund Acquisitions",
    ogDescription:
      "Don't miss anything before signing. Financial, legal, operational, and commercial due diligence — every item you need to check.",
  },
  "first-100-days": {
    title: "Search Fund CEO: The First 100 Days After Acquisition",
    description:
      "What to do in your first 100 days as CEO: build trust, diagnose the business, execute quick wins, and set your strategic direction. A practical guide.",
    ogTitle: "Your First 100 Days as Search Fund CEO — A Step-by-Step Playbook",
    ogDescription:
      "The critical first 100 days after acquiring a company. Learn what to do (and what to avoid) from successful search fund operators.",
  },
  "eta-reading-list": {
    title: "Essential ETA Reading List — Books, Studies & Resources",
    description:
      "Must-read books, studies, podcasts, and conferences for search fund entrepreneurs. From Stanford primers to INSEAD research — start your ETA education.",
    ogTitle: "The Essential ETA Reading List for Aspiring Search Fund Entrepreneurs",
    ogDescription:
      "Stanford studies, INSEAD research, HBR guides, top podcasts, and key conferences. Everything you need to read before launching your search.",
  },
  "business-valuation": {
    title: "How to Value a Small Business — SME Acquisition Guide",
    description:
      "Master SME valuation for search fund acquisitions: EBITDA multiples, DCF analysis, asset-based approaches, adjusted EBITDA calculations, and common pitfalls.",
    ogTitle: "How to Value a Small Business — Valuation Guide for Search Fund Acquisitions",
    ogDescription:
      "EBITDA multiples, DCF, adjusted EBITDA — learn the valuation methods that matter for SME acquisitions and avoid overpaying.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleSlug } = await params;
  const article = articlesMeta[articleSlug];

  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.ogTitle,
      description: article.ogDescription,
    },
  };
}

// ---------------------------------------------------------------------------
// Article components
// ---------------------------------------------------------------------------

const h1Class = "text-3xl font-semibold text-apple-black tracking-tight";
const h2Class = "text-xl font-semibold text-apple-black mt-8";
const h3Class = "text-lg font-semibold text-apple-black mt-6";
const bodyClass = "mt-8 space-y-6 text-apple-gray-700 leading-relaxed";
const ulClass = "list-disc list-inside space-y-2 mt-3";
const olClass = "list-decimal list-inside space-y-2 mt-3";

function GettingStartedArticle() {
  return (
    <article>
      <h1 className={h1Class}>What is a Search Fund? Complete Guide</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          A search fund is an investment vehicle through which an entrepreneur
          (the &ldquo;searcher&rdquo;) raises a pool of capital from investors
          to fund the search for, acquisition of, and operation of a single
          privately held company. The model was pioneered at Stanford Graduate
          School of Business in 1984 and has since grown into a well-established
          path for aspiring CEOs who want to skip the corporate ladder and go
          straight to running their own company.
        </p>

        <h2 className={h2Class}>How the model works</h2>
        <p>
          The search fund model follows a structured, multi-phase lifecycle that
          typically spans five to eight years from inception to exit. Each phase
          has distinct objectives, milestones, and challenges.
        </p>

        <h3 className={h3Class}>Phase 1: Fundraising the search capital</h3>
        <p>
          The entrepreneur begins by raising search capital, typically between
          $400,000 and $600,000 (or the equivalent in euros), from a group of
          10 to 20 investors. These investors each contribute a relatively small
          amount in exchange for the right (but not the obligation) to invest in
          the eventual acquisition. Search capital covers the entrepreneur&apos;s
          salary, travel, deal sourcing, legal costs, and other expenses during
          the search period, which typically lasts 18 to 24 months.
        </p>

        <h3 className={h3Class}>Phase 2: The search</h3>
        <p>
          Once funded, the searcher begins a full-time, systematic search for an
          acquisition target. This involves reviewing hundreds of potential
          companies, reaching out to business owners, brokers, and
          intermediaries, and conducting preliminary due diligence on promising
          leads. Searchers typically evaluate 50 to 100 companies in detail and
          may submit multiple letters of intent before finding the right fit.
        </p>

        <h3 className={h3Class}>Phase 3: Acquisition</h3>
        <p>
          When a suitable target is identified, the searcher negotiates the
          deal, conducts thorough due diligence, and raises acquisition capital.
          Acquisition multiples for search fund deals usually range from
          3x to 6x EBITDA. The searcher typically receives a significant equity
          stake (often 20-30% of the company) as part of the deal economics.
        </p>

        <h3 className={h3Class}>Phase 4: Operations</h3>
        <p>
          After closing the deal, the searcher steps in as CEO and begins
          operating the company. This phase typically lasts four to seven years
          and involves implementing operational improvements, growing revenue,
          and professionalizing the organization.
        </p>

        <h3 className={h3Class}>Phase 5: Exit</h3>
        <p>
          The typical exit occurs five to seven years after the acquisition,
          usually through a sale to a strategic buyer, a private equity fund, or
          another search fund entrepreneur. The most successful search fund
          acquisitions have generated returns of 3x to 10x on invested capital.
        </p>

        <h2 className={h2Class}>History and origins</h2>
        <p>
          The search fund concept was created in 1984 by H. Irving Grousbeck, a
          professor at Stanford Graduate School of Business, as an alternative
          path for MBA graduates who wanted to become CEOs. The concept crossed the
          Atlantic in the early 2010s, when MBA graduates from IESE, INSEAD, HEC
          Paris, and London Business School began raising search funds focused on
          European markets. INSEAD has played a pivotal role in this expansion,
          establishing its dedicated ETA & Search Funds Hub — one of the most
          comprehensive platforms for ETA research, education, and community building
          in Europe and globally. Today, INSEAD alumni are among the most active
          search fund entrepreneurs and investors in Europe, Africa, and Asia.
        </p>

        <h2 className={h2Class}>Types of search funds</h2>

        <h3 className={h3Class}>Traditional search fund</h3>
        <p>
          The classic model: the searcher raises search capital from a group of
          investors, spends 18 to 24 months searching, and those investors have
          the right of first refusal on the acquisition financing.
        </p>

        <h3 className={h3Class}>Self-funded search</h3>
        <p>
          The entrepreneur finances the search period out of personal savings or
          by working part-time while searching. The advantage is greater equity
          retention and flexibility. Self-funded searches have become
          increasingly popular in Europe.
        </p>

        <h3 className={h3Class}>Search fund accelerator</h3>
        <p>
          Accelerator programs provide structured support, mentorship, a
          community of peers, and sometimes search capital in exchange for a
          share of the deal economics. These programs have helped lower the
          barrier to entry for first-time searchers.
        </p>

        <h2 className={h2Class}>Key statistics</h2>
        <ul className={ulClass}>
          <li>Over 680 search funds have been raised globally since 1984.</li>
          <li>A record 94 search funds launched in 2023 alone.</li>
          <li>Approximately 63% of searchers successfully acquire a company.</li>
          <li>Aggregate pre-tax IRR of 35.1% and 4.5x return on invested capital.</li>
          <li>Average search length: 20 months.</li>
          <li>European search funds have grown from fewer than 10 per year in 2010 to over 80 per year as of 2024.</li>
        </ul>
      </div>
    </article>
  );
}

function Stanford2024Article() {
  return (
    <article>
      <h1 className={h1Class}>Stanford 2024 Search Fund Study: Key Takeaways</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          The Stanford Graduate School of Business published its landmark 2024
          Search Fund Study, analyzing data from 681 qualifying search funds
          raised in the United States and Canada since 1984. This study, produced
          by the Center for Entrepreneurial Studies, is the most comprehensive
          dataset on search fund performance ever compiled.
        </p>

        <h2 className={h2Class}>Record-breaking growth</h2>
        <p>
          A record 94 search funds were launched in 2023 — the highest number in
          history. This represents a dramatic acceleration from the early days:
          fewer than 20 funds per year were raised before 2010. The surge
          reflects growing awareness of the ETA model, a maturing investor base,
          and the increasing number of MBA programs that teach entrepreneurship
          through acquisition.
        </p>

        <h2 className={h2Class}>Headline performance numbers</h2>
        <ul className={ulClass}>
          <li><strong>35.1% aggregate pre-tax IRR</strong> — across all search funds that have reached a conclusion.</li>
          <li><strong>4.5x aggregate pre-tax ROIC</strong> — return on invested capital, including both search and acquisition capital.</li>
          <li><strong>63% acquisition rate</strong> — of search funds that concluded their search, 63% successfully acquired a company.</li>
          <li><strong>20-month average search length</strong> — reverting to historical norms after a shorter 17-month average during 2020-2021.</li>
          <li><strong>$14.4M median purchase price</strong> — down slightly from $16.5M in the prior study, likely due to tighter monetary policy.</li>
        </ul>

        <h2 className={h2Class}>Sector concentration</h2>
        <p>
          Since 2014, healthcare and business services companies have accounted
          for roughly half of all search fund acquisitions. Technology and
          software companies represent the next-largest category. The preference
          for recurring-revenue, low-cyclicality businesses remains a defining
          characteristic of the asset class.
        </p>

        <h2 className={h2Class}>What makes searchers successful?</h2>
        <p>The Stanford data reveals several factors correlated with better outcomes:</p>
        <ul className={ulClass}>
          <li><strong>Industry experience</strong> — searchers with prior experience in their target sector tend to acquire faster and operate more effectively.</li>
          <li><strong>Geographic focus</strong> — concentrated geographic searches reduce travel costs and build deeper broker/intermediary networks.</li>
          <li><strong>Investor quality</strong> — experienced search fund investors provide mentorship, board guidance, and operational support that materially improves outcomes.</li>
          <li><strong>Deal discipline</strong> — the most successful searchers maintain strict acquisition criteria and resist the pressure to close a deal for the sake of completing the search.</li>
        </ul>

        <h2 className={h2Class}>Implications for European searchers</h2>
        <p>
          While the Stanford study focuses on US and Canadian funds, its lessons
          are highly relevant to Europe. European search funds benefit from lower
          acquisition multiples (3-5x EBITDA vs. 4-7x in the US), less
          competition, and a massive wave of SME succession opportunities. The
          IESE International Search Fund Study and INSEAD&apos;s ETA & Search Funds
          Hub provide complementary data for the European market. INSEAD, through
          its Fontainebleau, Singapore, and Abu Dhabi campuses, has become a
          global leader in ETA education, producing research, case studies, and a
          growing alumni network of searchers and investors operating across
          multiple continents.
        </p>

        <h2 className={h2Class}>Source</h2>
        <p>
          The full study is available through the Stanford Graduate School of
          Business Center for Entrepreneurial Studies.
        </p>
      </div>
    </article>
  );
}

function SearchFundReturnsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Returns & Performance Data</h1>
      <p className="text-sm text-apple-gray-500 mt-3">8 min read</p>

      <div className={bodyClass}>
        <p>
          Search funds have established themselves as one of the
          highest-performing alternative investment strategies over the past four
          decades. Here we compile the key performance data from major studies
          by Stanford GSB, IESE Business School, INSEAD&apos;s ETA & Search Funds
          Hub, and other leading research institutions.
        </p>

        <h2 className={h2Class}>Aggregate returns (1984-2023)</h2>
        <ul className={ulClass}>
          <li><strong>35.1% pre-tax IRR</strong> — aggregate across all US/Canadian search funds (Stanford 2024).</li>
          <li><strong>4.5x pre-tax ROIC</strong> — aggregate return on all invested capital.</li>
          <li><strong>Outperforms PE and VC</strong> — search funds have consistently outperformed both private equity and venture capital benchmarks on a risk-adjusted basis.</li>
        </ul>

        <h2 className={h2Class}>Acquisition success rates</h2>
        <ul className={ulClass}>
          <li>63% of funded searchers successfully acquire a company.</li>
          <li>37% of searchers return remaining capital to investors without completing an acquisition.</li>
          <li>Of those who acquire, approximately 70% generate positive returns for investors.</li>
        </ul>

        <h2 className={h2Class}>Typical deal characteristics</h2>
        <ul className={ulClass}>
          <li><strong>Median purchase price:</strong> $14.4M (US/Canada), lower in Europe.</li>
          <li><strong>Typical EBITDA:</strong> $1M - $3M at acquisition.</li>
          <li><strong>Acquisition multiples:</strong> 3x - 6x EBITDA.</li>
          <li><strong>Holding period:</strong> 5-7 years before exit.</li>
          <li><strong>Searcher equity:</strong> 20-30% of the acquired company.</li>
        </ul>

        <h2 className={h2Class}>Comparison to other asset classes</h2>
        <p>
          Search funds offer a compelling risk-return profile. While individual
          fund outcomes vary widely, the aggregate performance data places
          search funds among the top-performing asset classes in private markets.
          The combination of active management, aligned incentives, and small
          company premiums drives this outperformance.
        </p>

        <h2 className={h2Class}>European performance</h2>
        <p>
          While less data is available for European search funds given their
          shorter history, early results are promising. Lower entry valuations
          and a larger pool of succession-driven transactions suggest that
          European funds may ultimately deliver returns comparable to or better
          than their US counterparts. INSEAD&apos;s ETA & Search Funds Hub is
          actively building the most comprehensive dataset on European search
          fund performance, tracking deals across France, DACH, Benelux, and
          the Nordics — providing investors with the data they need to support
          European searchers with confidence.
        </p>
      </div>
    </article>
  );
}

function ETAEuropeArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Europe: The Opportunity</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Europe represents the fastest-growing and most promising market for
          Entrepreneurship Through Acquisition. With millions of SMEs facing
          ownership transitions, lower competition than the US, and maturing
          support infrastructure, European search funds are entering a golden era.
        </p>

        <h2 className={h2Class}>The succession crisis</h2>
        <p>
          Europe is home to approximately 23 million SMEs, many of which are
          owned by baby boomers approaching retirement with no succession plan.
          In France alone, an estimated 700,000 businesses will need to change
          ownership in the next decade. Germany&apos;s Mittelstand includes tens of
          thousands of family-owned businesses facing similar challenges. Italy,
          Spain, Portugal, and the Nordics present comparable dynamics.
        </p>
        <p>
          This wave of ownership transitions creates an unprecedented
          opportunity for search fund entrepreneurs to step in as successors,
          preserving jobs and companies while building personal wealth.
        </p>

        <h2 className={h2Class}>Why Europe is attractive for ETA</h2>
        <ul className={ulClass}>
          <li><strong>Lower acquisition multiples:</strong> European SMEs typically trade at 3-5x EBITDA, compared to 4-7x in the US.</li>
          <li><strong>Less competition:</strong> Fewer searchers relative to the number of available targets.</li>
          <li><strong>Fragmented markets:</strong> Many European industries remain highly fragmented, creating consolidation opportunities.</li>
          <li><strong>Strong legal frameworks:</strong> Well-established business law, labor protections, and corporate governance standards.</li>
          <li><strong>Growing investor ecosystem:</strong> An increasing number of search fund investors, accelerators, and support organizations across Europe.</li>
        </ul>

        <h2 className={h2Class}>Key markets</h2>

        <h3 className={h3Class}>France</h3>
        <p>
          France has the largest and most active search fund ecosystem in
          continental Europe, driven by world-renowned business schools —
          particularly INSEAD (Fontainebleau), HEC Paris, and ESSEC — alongside
          government incentives for business transfers and a deep pool of SMEs.
          INSEAD&apos;s proximity to Paris and its global network have made it a
          launchpad for searchers targeting French and pan-European acquisitions.
        </p>

        <h3 className={h3Class}>Germany</h3>
        <p>
          The Mittelstand represents a massive but harder-to-access opportunity.
          Language and cultural barriers mean less competition, but searchers need
          German fluency and local networks to succeed.
        </p>

        <h3 className={h3Class}>Spain & Portugal</h3>
        <p>
          The Iberian peninsula has a growing ETA community, supported by IESE
          Business School in Barcelona — one of the world&apos;s leading centers for
          search fund education and research.
        </p>

        <h3 className={h3Class}>United Kingdom & Nordics</h3>
        <p>
          The UK benefits from strong professional services infrastructure and
          an active PE ecosystem. The Nordic countries offer high-quality
          businesses with strong governance and transparent financials.
        </p>

        <h2 className={h2Class}>Key institutions supporting ETA in Europe</h2>
        <ul className={ulClass}>
          <li><strong>INSEAD</strong> — a global leader in ETA through its dedicated ETA & Search Funds Hub. INSEAD provides world-class research, case studies, and an annual ETA conference that brings together entrepreneurs, investors, and board members from around the world. With campuses in Fontainebleau, Singapore, and Abu Dhabi, INSEAD alumni are driving ETA adoption across Europe, the Middle East, Africa, and Asia.</li>
          <li><strong>IESE Business School</strong> — publishes the International Search Fund Study and hosts the annual Search Fund Conference in Barcelona.</li>
          <li><strong>HEC Paris</strong> — offers ETA-focused courses and hosts a growing search fund alumni network.</li>
          <li><strong>London Business School</strong> — provides ETA electives through MBA and EMBA programs.</li>
        </ul>
      </div>
    </article>
  );
}

function ETAFranceArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in France: How to Acquire a Business</h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          France is one of the most dynamic markets for Entrepreneurship Through
          Acquisition in Europe. With approximately 700,000 businesses expected
          to change hands in the coming decade and strong government support for
          business transfers, France offers exceptional opportunities for search
          fund entrepreneurs. The presence of top-tier business schools like
          INSEAD in Fontainebleau, HEC Paris, and ESSEC has created a thriving
          ecosystem of searchers, investors, and advisors. INSEAD alumni in
          particular have been at the forefront of ETA in France, leveraging
          the school&apos;s global network to connect with international investors
          while targeting French SMEs.
        </p>

        <h2 className={h2Class}>The French market landscape</h2>
        <p>
          France has over 3.9 million SMEs, representing 99.9% of all companies.
          Many are owned by founders in their late 50s and 60s who have no family
          successor. The French government actively encourages business transfers
          through tax incentives, financing programs (BPI France), and regulatory
          frameworks designed to facilitate ownership transitions.
        </p>

        <h2 className={h2Class}>Legal structures for acquisition</h2>
        <h3 className={h3Class}>Share purchase (cession de parts/actions)</h3>
        <p>
          The most common structure in search fund acquisitions. The buyer
          acquires the shares of the existing company, taking over all assets,
          liabilities, contracts, and employees. This provides continuity for
          clients, suppliers, and staff.
        </p>

        <h3 className={h3Class}>Asset purchase (cession de fonds de commerce)</h3>
        <p>
          Less common for search funds but sometimes used for specific situations.
          The buyer acquires the business assets (goodwill, equipment, inventory,
          contracts) but not the corporate entity or its liabilities.
        </p>

        <h3 className={h3Class}>Holding company structure</h3>
        <p>
          Most search fund acquisitions in France are structured through a
          holding company (holding de reprise) that acquires the target. This
          enables tax-efficient debt service through the &ldquo;integration
          fiscale&rdquo; regime and facilitates future add-on acquisitions.
        </p>

        <h2 className={h2Class}>Financing an acquisition in France</h2>
        <ul className={ulClass}>
          <li><strong>Senior debt:</strong> French banks (BNP, SG, CM-CIC, Banque Populaire) actively finance acquisitions, typically lending 3-4x EBITDA.</li>
          <li><strong>BPI France:</strong> The public investment bank offers co-lending and guarantee programs that reduce risk for commercial banks.</li>
          <li><strong>Seller financing (credit vendeur):</strong> Common in French transactions, typically 15-30% of the price deferred over 2-3 years.</li>
          <li><strong>Search fund investor equity:</strong> The balance is funded by search fund investors through equity.</li>
        </ul>

        <h2 className={h2Class}>Key considerations</h2>
        <ul className={ulClass}>
          <li><strong>Labor law:</strong> French labor regulations are protective of employees. All employment contracts transfer automatically with the business.</li>
          <li><strong>Works council (CSE):</strong> Companies with 11+ employees must inform and consult the CSE before a change of ownership.</li>
          <li><strong>Garantie d&apos;actif et de passif (GAP):</strong> The French equivalent of representations and warranties, essential for buyer protection.</li>
          <li><strong>Earn-out clauses:</strong> Common to bridge valuation gaps and ensure a smooth transition period with the seller.</li>
        </ul>

        <h2 className={h2Class}>Deal sourcing in France</h2>
        <p>
          Successful searchers in France use a combination of direct outreach to
          business owners, intermediary networks (brokers, accountants, notaries),
          and online platforms. Key intermediary networks include CRA
          (Cédants et Repreneurs d&apos;Affaires), BPI France&apos;s transmission platform,
          and regional chambers of commerce.
        </p>
      </div>
    </article>
  );
}

function ETAGermanyArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Germany: The Mittelstand Opportunity</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Germany&apos;s Mittelstand — the backbone of Europe&apos;s largest economy — represents
          one of the most compelling opportunities for search fund entrepreneurs.
          With over 3.5 million SMEs, a massive succession wave, and
          world-class companies operating in niche markets, Germany is a
          frontier market for ETA.
        </p>

        <h2 className={h2Class}>Understanding the Mittelstand</h2>
        <p>
          The Mittelstand refers to the small and medium-sized enterprises that
          form the heart of the German economy. These companies are often
          family-owned, have operated for decades, are market leaders in their
          niches, and are deeply rooted in their local communities. Many are
          &ldquo;hidden champions&rdquo; — global market leaders in specialized
          products or services that few outside the industry know about.
        </p>

        <h2 className={h2Class}>The succession challenge</h2>
        <p>
          According to the IfM Bonn (Institut für Mittelstandsforschung),
          approximately 190,000 German companies face a leadership succession
          between 2022 and 2026. Many of these are profitable businesses with
          strong market positions but no family successor willing or able to take over.
        </p>

        <h2 className={h2Class}>Key characteristics of German SME acquisitions</h2>
        <ul className={ulClass}>
          <li><strong>Lower multiples:</strong> German SMEs outside of tech typically trade at 3-5x EBITDA, below European PE benchmarks.</li>
          <li><strong>Strong financials:</strong> German companies tend to have conservative balance sheets, low debt, and high cash reserves.</li>
          <li><strong>Skilled workforce:</strong> The German dual education system (Ausbildung) produces highly skilled workers who stay with companies for decades.</li>
          <li><strong>Export orientation:</strong> Many Mittelstand companies derive 30-70% of revenue from exports, providing geographic diversification.</li>
        </ul>

        <h2 className={h2Class}>Financing in Germany</h2>
        <p>
          German banks (Sparkassen, Volksbanken, Deutsche Bank) are experienced
          in financing SME acquisitions. The KfW (Kreditanstalt für Wiederaufbau)
          offers attractive programs for business succession including subsidized
          loans through the ERP-Gründerkredit and ERP-Kapital für Gründung programs.
        </p>

        <h2 className={h2Class}>Challenges for search fund entrepreneurs</h2>
        <ul className={ulClass}>
          <li><strong>Language:</strong> German fluency is essential. Most Mittelstand owners do not conduct business in English.</li>
          <li><strong>Trust building:</strong> German sellers place enormous value on personal relationships and the buyer&apos;s commitment to preserving the company culture.</li>
          <li><strong>Works council (Betriebsrat):</strong> Companies with 5+ employees can form a works council, which has co-determination rights on many operational matters.</li>
          <li><strong>Deal culture:</strong> Transactions move more slowly than in Anglo-Saxon markets. Patience and persistence are essential.</li>
        </ul>
      </div>
    </article>
  );
}

function FindingInvestorsArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Find Search Fund Investors</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Raising search capital is the first major milestone for a traditional
          search fund entrepreneur. This guide covers the landscape of search
          fund investors, how to approach them, and what they look for in a
          searcher.
        </p>

        <h2 className={h2Class}>Types of search fund investors</h2>

        <h3 className={h3Class}>Ex-searchers</h3>
        <p>
          Former search fund entrepreneurs who have successfully acquired and
          operated companies. They provide the most relevant mentorship and
          often invest in 5-15 search funds simultaneously. They understand
          the challenges firsthand and are typically the most helpful board members.
        </p>

        <h3 className={h3Class}>Family offices</h3>
        <p>
          Wealthy families looking for alternative investment strategies.
          Family offices often invest patient capital with longer time horizons
          and can be flexible on deal structures. Many European family offices
          have embraced the search fund model.
        </p>

        <h3 className={h3Class}>Institutional investors</h3>
        <p>
          Dedicated search fund investment firms have emerged in both the US
          and Europe. These include firms like Pacific Lake Partners, Relay
          Investments, and others who invest professionally across multiple
          search funds.
        </p>

        <h3 className={h3Class}>Angel investors</h3>
        <p>
          High-net-worth individuals, often entrepreneurs themselves, who invest
          smaller amounts in individual search funds. They may bring valuable
          industry expertise or networks.
        </p>

        <h2 className={h2Class}>How to approach investors</h2>
        <ol className={olClass}>
          <li><strong>Build your thesis first.</strong> Define your target geography, sectors, size criteria, and value creation plan before approaching investors.</li>
          <li><strong>Leverage your network.</strong> Start with your MBA alumni network, professors, and personal connections to get warm introductions.</li>
          <li><strong>Prepare a compelling PPM.</strong> Your Private Placement Memorandum should cover your background, search thesis, target criteria, and the economics of the search fund structure.</li>
          <li><strong>Meet investors in person.</strong> Attend the INSEAD ETA Conference, IESE Search Fund Conference, Stanford CEO Conference, and ETA networking events. INSEAD&apos;s ETA & Search Funds Hub also provides curated introductions between searchers and investors.</li>
          <li><strong>Be persistent but respectful.</strong> Expect the process to take 2-4 months. Most investors pass on many searchers before committing.</li>
        </ol>

        <h2 className={h2Class}>What investors look for</h2>
        <ul className={ulClass}>
          <li><strong>Leadership qualities:</strong> Humility, resilience, intellectual curiosity, and the ability to build trust with sellers and employees.</li>
          <li><strong>Relevant experience:</strong> Prior operating, consulting, or industry experience that will help you evaluate and run a business.</li>
          <li><strong>Clear thesis:</strong> A well-defined search strategy with realistic criteria and a credible value creation plan.</li>
          <li><strong>Coachability:</strong> Willingness to listen to experienced board members and adapt your approach based on their guidance.</li>
        </ul>
      </div>
    </article>
  );
}

function SelfFundedVsTraditionalArticle() {
  return (
    <article>
      <h1 className={h1Class}>Self-Funded Search vs. Traditional Search Fund</h1>
      <p className="text-sm text-apple-gray-500 mt-3">9 min read</p>

      <div className={bodyClass}>
        <p>
          Aspiring search fund entrepreneurs face a fundamental choice: raise
          a traditional search fund with investor capital, or self-fund the search
          from personal resources. Each path has distinct advantages, risks, and
          economics. This guide helps you decide which model is right for you.
        </p>

        <h2 className={h2Class}>Traditional search fund</h2>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> $400K-$600K raised from 10-20 investors covers salary, expenses, and deal costs for 18-24 months.</li>
          <li><strong>Searcher equity:</strong> Typically 20-25% of the acquired company, vesting over 4-5 years.</li>
          <li><strong>Investor support:</strong> Access to experienced board members, mentorship, and a built-in network for acquisition financing.</li>
          <li><strong>Structure:</strong> Investors have the right of first refusal on the acquisition equity.</li>
          <li><strong>Risk:</strong> Lower personal financial risk. If no acquisition is made, the investor capital is returned (net of expenses).</li>
        </ul>

        <h2 className={h2Class}>Self-funded search</h2>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> Funded from personal savings or part-time work. Typically $50K-$150K in out-of-pocket costs.</li>
          <li><strong>Searcher equity:</strong> Potentially 50-80% of the acquired company, depending on deal structure and investor involvement.</li>
          <li><strong>Flexibility:</strong> No obligation to specific investors. Freedom to pursue any deal size, structure, or timeline.</li>
          <li><strong>Structure:</strong> Acquisition financing raised on a deal-by-deal basis using SBA loans (US), bank debt, and/or investor equity.</li>
          <li><strong>Risk:</strong> Higher personal financial risk. The searcher bears all costs if no deal closes.</li>
        </ul>

        <h2 className={h2Class}>Key differences at a glance</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-apple-gray-300">
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Factor</th>
                <th className="text-left py-2 pr-4 text-apple-black font-medium">Traditional</th>
                <th className="text-left py-2 text-apple-black font-medium">Self-funded</th>
              </tr>
            </thead>
            <tbody className="text-apple-gray-700">
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Searcher equity</td><td className="py-2 pr-4">20-25%</td><td className="py-2">50-80%</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Personal financial risk</td><td className="py-2 pr-4">Low</td><td className="py-2">High</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Investor support</td><td className="py-2 pr-4">Strong</td><td className="py-2">Variable</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Deal size</td><td className="py-2 pr-4">$5M-$30M</td><td className="py-2">$1M-$10M</td></tr>
              <tr className="border-b border-apple-gray-100"><td className="py-2 pr-4">Timeline flexibility</td><td className="py-2 pr-4">18-24 months</td><td className="py-2">Unlimited</td></tr>
              <tr><td className="py-2 pr-4">MBA required?</td><td className="py-2 pr-4">Usually</td><td className="py-2">No</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2Class}>Which path is right for you?</h2>
        <p>
          Choose the <strong>traditional model</strong> if you value mentorship,
          want to pursue larger deals, and prefer lower personal financial risk.
          Choose the <strong>self-funded model</strong> if you want maximum equity
          retention, flexibility on timing and deal criteria, and are comfortable
          with higher personal risk.
        </p>
      </div>
    </article>
  );
}

function DueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA Due Diligence Checklist</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          Due diligence is the most critical phase of any search fund
          acquisition. This comprehensive checklist covers every area you need
          to investigate before signing a purchase agreement.
        </p>

        <h2 className={h2Class}>Financial due diligence</h2>
        <ul className={ulClass}>
          <li>3-5 years of audited financial statements (P&L, balance sheet, cash flow).</li>
          <li>Quality of earnings (QoE) analysis — separate recurring vs. non-recurring items.</li>
          <li>Revenue breakdown by customer, product/service, and geography.</li>
          <li>Customer concentration analysis (top 10 customers as % of revenue).</li>
          <li>Working capital analysis and seasonal patterns.</li>
          <li>Capital expenditure history and future requirements.</li>
          <li>Debt schedule, covenants, and off-balance-sheet liabilities.</li>
          <li>Owner add-backs and normalization adjustments to EBITDA.</li>
          <li>Tax returns and any ongoing disputes with tax authorities.</li>
        </ul>

        <h2 className={h2Class}>Legal due diligence</h2>
        <ul className={ulClass}>
          <li>Corporate formation documents, bylaws, and shareholder agreements.</li>
          <li>All material contracts (customers, suppliers, leases, licenses).</li>
          <li>Intellectual property — patents, trademarks, trade secrets, software licenses.</li>
          <li>Pending or threatened litigation and historical legal disputes.</li>
          <li>Regulatory compliance and industry-specific permits/licenses.</li>
          <li>Environmental liabilities and compliance history.</li>
          <li>Insurance policies and claims history.</li>
        </ul>

        <h2 className={h2Class}>Operational due diligence</h2>
        <ul className={ulClass}>
          <li>Organizational chart and key employee identification.</li>
          <li>Employee contracts, benefits, and compensation structures.</li>
          <li>Key person dependencies — what happens if critical staff leave?</li>
          <li>Technology stack, IT infrastructure, and cybersecurity posture.</li>
          <li>Facilities, equipment condition, and lease terms.</li>
          <li>Supply chain dependencies and vendor relationships.</li>
          <li>Quality management systems and certifications (ISO, etc.).</li>
        </ul>

        <h2 className={h2Class}>Commercial due diligence</h2>
        <ul className={ulClass}>
          <li>Market size, growth trends, and competitive landscape.</li>
          <li>Customer interviews — satisfaction, switching costs, contract renewal rates.</li>
          <li>Sales pipeline and new business development process.</li>
          <li>Pricing power and margin sustainability.</li>
          <li>Competitive moat — what makes this business defensible?</li>
          <li>Growth opportunities — organic expansion, add-on acquisitions, new markets.</li>
        </ul>

        <h2 className={h2Class}>Cultural & transition due diligence</h2>
        <ul className={ulClass}>
          <li>Seller&apos;s motivation and timeline for transition.</li>
          <li>Company culture and employee morale assessment.</li>
          <li>Transition plan — how long will the seller stay to ensure continuity?</li>
          <li>Relationships with key stakeholders (customers, suppliers, community).</li>
          <li>Identify potential risks of ownership change on business relationships.</li>
        </ul>
      </div>
    </article>
  );
}

function First100DaysArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund CEO: The First 100 Days</h1>
      <p className="text-sm text-apple-gray-500 mt-3">9 min read</p>

      <div className={bodyClass}>
        <p>
          The first 100 days after acquiring a company are critical. How you
          navigate this period will set the tone for your entire tenure as CEO.
          Here is a structured approach based on insights from successful search
          fund operators and research from Stanford, IESE, and INSEAD&apos;s ETA &
          Search Funds Hub.
        </p>

        <h2 className={h2Class}>Days 1-30: Listen, learn, and build trust</h2>
        <ul className={ulClass}>
          <li><strong>Meet everyone.</strong> Hold one-on-one conversations with every employee, key customer, and major supplier. Listen more than you talk.</li>
          <li><strong>Shadow the seller.</strong> Spend time with the previous owner understanding daily operations, key relationships, and unwritten rules.</li>
          <li><strong>Map the organization.</strong> Understand reporting lines, decision-making processes, and informal power structures.</li>
          <li><strong>Don&apos;t make changes yet.</strong> Resist the urge to implement improvements. You need to understand the business deeply before changing anything.</li>
          <li><strong>Establish a communication rhythm.</strong> Set up regular team meetings and create open channels for feedback.</li>
        </ul>

        <h2 className={h2Class}>Days 30-60: Diagnose and plan</h2>
        <ul className={ulClass}>
          <li><strong>Identify quick wins.</strong> Look for low-risk improvements that will build credibility with the team — fixing broken processes, addressing long-standing frustrations.</li>
          <li><strong>Assess the management team.</strong> Determine who your key leaders are, where gaps exist, and who may need additional support or development.</li>
          <li><strong>Review financial controls.</strong> Ensure accurate, timely financial reporting. Many SMEs have weak financial infrastructure.</li>
          <li><strong>Set up a board.</strong> Establish a formal board with your investors and independent directors. Use them as a strategic resource.</li>
          <li><strong>Draft your 100-day plan.</strong> Based on your observations, create a prioritized action plan for the next phase.</li>
        </ul>

        <h2 className={h2Class}>Days 60-100: Execute first initiatives</h2>
        <ul className={ulClass}>
          <li><strong>Implement quick wins.</strong> Start with the highest-impact, lowest-risk improvements you identified.</li>
          <li><strong>Upgrade financial reporting.</strong> Implement monthly management reporting, KPI dashboards, and cash flow forecasting.</li>
          <li><strong>Address critical hires.</strong> If key positions need to be filled (CFO, sales manager, etc.), begin the recruiting process.</li>
          <li><strong>Communicate your vision.</strong> Share your strategic direction with the team. Be transparent about your goals and how you plan to achieve them.</li>
          <li><strong>Build your external network.</strong> Join industry associations, attend conferences, and build relationships with potential acquisition targets for future add-ons.</li>
        </ul>

        <h2 className={h2Class}>Common mistakes to avoid</h2>
        <ul className={ulClass}>
          <li>Changing too much too fast — you will lose the trust of employees and customers.</li>
          <li>Ignoring the company culture — the culture is a key asset you paid for.</li>
          <li>Micromanaging — empower your team rather than trying to do everything yourself.</li>
          <li>Underinvesting in the transition period with the seller.</li>
          <li>Neglecting customer relationships in favor of internal operations.</li>
        </ul>
      </div>
    </article>
  );
}

function ETAReadingListArticle() {
  return (
    <article>
      <h1 className={h1Class}>Essential ETA Reading List</h1>
      <p className="text-sm text-apple-gray-500 mt-3">6 min read</p>

      <div className={bodyClass}>
        <p>
          Whether you are just discovering ETA or preparing to launch your
          search, these resources are essential reading for every aspiring search
          fund entrepreneur.
        </p>

        <h2 className={h2Class}>Foundational studies</h2>
        <ul className={ulClass}>
          <li><strong>Stanford Search Fund Primer</strong> — The definitive introduction to the search fund model, published by Stanford&apos;s Center for Entrepreneurial Studies. Covers the benefits, challenges, structure, and execution of a search fund.</li>
          <li><strong>2024 Stanford Search Fund Study</strong> — The most comprehensive dataset on search fund performance, analyzing 681 funds from 1984-2023. Key findings: 35.1% IRR, 4.5x ROIC, 63% acquisition rate.</li>
          <li><strong>IESE International Search Fund Study</strong> — Extends the Stanford data to cover international (primarily European) search funds. Essential for understanding the European ETA landscape.</li>
          <li><strong>INSEAD ETA & Search Funds Hub</strong> — INSEAD&apos;s dedicated research and resource platform for ETA, connecting entrepreneurs, investors, and board members globally.</li>
        </ul>

        <h2 className={h2Class}>Essential books</h2>
        <ul className={ulClass}>
          <li><strong>&ldquo;HBR Guide to Buying a Small Business&rdquo;</strong> by Richard S. Ruback & Royce Yudkoff — Two Harvard professors lay out a practical framework for acquiring a small business. The most widely recommended book for aspiring searchers.</li>
          <li><strong>&ldquo;Buy Then Build&rdquo;</strong> by Walker Deibel — A comprehensive guide to entrepreneurship through acquisition, covering the full lifecycle from search to operations.</li>
          <li><strong>&ldquo;The Search Fund Handbook&rdquo;</strong> — Practical guidance for every phase of the search fund process, from fundraising to exit.</li>
          <li><strong>&ldquo;A Practical Guide to Buying a Business&rdquo;</strong> by Robert Chalfin — Focused on the mechanics of deal structuring, negotiation, and closing.</li>
        </ul>

        <h2 className={h2Class}>Academic research</h2>
        <ul className={ulClass}>
          <li><strong>&ldquo;Entrepreneurship through acquisition: A scoping review&rdquo;</strong> — Published in Management Review Quarterly (Springer), this paper provides a systematic review of academic literature on ETA.</li>
          <li><strong>Yale School of Management</strong> — &ldquo;Evolution of a Search Fund CEO and Company&rdquo; — examines how search fund CEOs develop as leaders over time.</li>
          <li><strong>University of Chicago Booth</strong> — &ldquo;The Evolution of Entrepreneurship Through Acquisition&rdquo; — traces the history and development of the ETA asset class.</li>
        </ul>

        <h2 className={h2Class}>Podcasts & communities</h2>
        <ul className={ulClass}>
          <li><strong>INSEAD ETA and Search Funds Podcast</strong> — Interviews with searchers, operators, and investors from the INSEAD network.</li>
          <li><strong>Think Like an Owner</strong> — Popular podcast featuring interviews with search fund entrepreneurs and small business operators.</li>
          <li><strong>Searchfunder.com</strong> — The largest online community for search fund entrepreneurs, with forums, resources, and deal discussions.</li>
          <li><strong>SearchFundMarket</strong> — Connect with searchers, investors, and sellers across Europe.</li>
        </ul>

        <h2 className={h2Class}>Key conferences</h2>
        <ul className={ulClass}>
          <li><strong>INSEAD ETA Conference</strong> (Fontainebleau) — A leading annual event connecting the global INSEAD ETA community, featuring panels with searchers, investors, and operators from across Europe, Africa, and Asia.</li>
          <li><strong>IESE Search Fund Conference</strong> (Barcelona) — The premier European ETA conference, held annually.</li>
          <li><strong>Stanford Search Fund CEO Conference</strong> (Stanford) — The original and most prestigious search fund gathering.</li>
        </ul>
      </div>
    </article>
  );
}

function BusinessValuationArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Value a Small Business for Acquisition</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Valuation is both an art and a science. For search fund entrepreneurs
          acquiring small and medium businesses, understanding the key valuation
          methodologies — and their limitations — is essential to negotiating a
          fair price.
        </p>

        <h2 className={h2Class}>EBITDA multiples: The primary method</h2>
        <p>
          The most common valuation approach in search fund acquisitions is
          applying a multiple to the company&apos;s adjusted EBITDA. In the search
          fund world, typical multiples range from 3x to 6x EBITDA depending on:
        </p>
        <ul className={ulClass}>
          <li><strong>Company size:</strong> Larger companies command higher multiples.</li>
          <li><strong>Growth rate:</strong> Faster-growing businesses justify premium valuations.</li>
          <li><strong>Recurring revenue:</strong> Subscription or contract-based revenue is valued more highly than project-based revenue.</li>
          <li><strong>Customer concentration:</strong> Diversified customer bases reduce risk and support higher multiples.</li>
          <li><strong>Industry:</strong> Technology and healthcare companies typically command higher multiples than manufacturing or construction.</li>
          <li><strong>Geography:</strong> European SMEs generally trade at lower multiples than comparable US businesses.</li>
        </ul>

        <h2 className={h2Class}>Adjusted EBITDA: The foundation</h2>
        <p>
          Before applying a multiple, you must calculate the &ldquo;true&rdquo;
          EBITDA by making normalization adjustments:
        </p>
        <ul className={ulClass}>
          <li><strong>Owner compensation:</strong> Replace the owner&apos;s salary with market-rate CEO compensation.</li>
          <li><strong>Personal expenses:</strong> Remove any personal expenses run through the business (vehicles, travel, family members on payroll).</li>
          <li><strong>One-time items:</strong> Strip out non-recurring revenues and expenses (litigation, restructuring, COVID impacts).</li>
          <li><strong>Related-party transactions:</strong> Normalize any below-market or above-market deals with related entities.</li>
          <li><strong>Deferred maintenance:</strong> Add back any capex that has been deferred and will need to be spent.</li>
        </ul>

        <h2 className={h2Class}>Discounted cash flow (DCF)</h2>
        <p>
          DCF analysis projects the company&apos;s future free cash flows and
          discounts them back to present value. While theoretically rigorous,
          DCF is sensitive to assumptions about growth rates, margins, and
          discount rates. It is most useful as a sanity check on the multiple-based
          valuation rather than the primary valuation method for SME acquisitions.
        </p>

        <h2 className={h2Class}>Asset-based valuation</h2>
        <p>
          For asset-heavy businesses (manufacturing, real estate, distribution),
          an asset-based approach may be appropriate. This method values the
          company based on the fair market value of its tangible and intangible
          assets minus liabilities. It typically sets a floor for the valuation.
        </p>

        <h2 className={h2Class}>Common valuation pitfalls</h2>
        <ul className={ulClass}>
          <li><strong>Overpaying due to deal fatigue:</strong> After months of searching, the pressure to close a deal can lead to overpaying. Maintain discipline.</li>
          <li><strong>Ignoring working capital:</strong> The purchase price should include a normal level of working capital. Negotiate the target clearly.</li>
          <li><strong>Not adjusting for cyclicality:</strong> Some businesses have peak-year earnings that don&apos;t reflect normalized performance.</li>
          <li><strong>Underestimating transition costs:</strong> Budget for the seller&apos;s transition period, systems upgrades, and early operational improvements.</li>
        </ul>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

const articleComponents: Record<string, () => React.JSX.Element> = {
  "getting-started": GettingStartedArticle,
  "stanford-2024-study": Stanford2024Article,
  "search-fund-returns": SearchFundReturnsArticle,
  "eta-europe": ETAEuropeArticle,
  "eta-france": ETAFranceArticle,
  "eta-germany": ETAGermanyArticle,
  "finding-investors": FindingInvestorsArticle,
  "self-funded-vs-traditional": SelfFundedVsTraditionalArticle,
  "due-diligence-checklist": DueDiligenceArticle,
  "first-100-days": First100DaysArticle,
  "eta-reading-list": ETAReadingListArticle,
  "business-valuation": BusinessValuationArticle,
};

export default async function ArticlePage({ params }: Props) {
  const { articleSlug } = await params;
  const meta = articlesMeta[articleSlug];

  if (!meta) notFound();

  const ArticleComponent = articleComponents[articleSlug];

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        href="/learn"
        className="text-apple-accent text-sm hover:underline inline-block mb-8"
      >
        &larr; Back to Learn
      </Link>

      {ArticleComponent ? <ArticleComponent /> : (
        <article>
          <h1 className="text-3xl font-semibold text-apple-black tracking-tight">
            {meta.title}
          </h1>
          <div className="mt-8 rounded-xl border border-apple-gray-100 bg-apple-gray-100/50 p-8 text-center">
            <p className="text-apple-gray-500">
              This article is coming soon. Check back later.
            </p>
          </div>
        </article>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 pt-8 border-t border-apple-gray-100">
        <p className="text-apple-gray-700">
          Ready to start your search?{" "}
          <Link
            href="/auth/signup"
            className="text-apple-accent font-medium hover:underline"
          >
            Join SearchFundMarket &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
