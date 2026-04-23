import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundLifecycleArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        The Search Fund Lifecycle: From Raise to Exit
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          A search fund follows a structured lifecycle that typically spans
          7&ndash;10 years from initial fundraise to exit. Understanding each
          stage &mdash; the timelines, milestones, economics, and common
          pitfalls &mdash; is essential for both searchers planning their
          journey and investors evaluating the asset class.
        </p>
        <p>
          This guide maps the complete search fund lifecycle based on data
          from the{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            Stanford 2024 study
          </Link>{" "}
          and{" "}
          <Link href="/learn/european-search-fund-research" className="text-apple-accent hover:underline">
            IESE/INSEAD research
          </Link>,
          covering the traditional search fund model. Self-funded searchers
          follow a compressed version (see our{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded vs. traditional
          </Link>{" "}
          comparison).
        </p>

        <h2 className={h2Class}>The five stages at a glance</h2>
        <ol className={olClass}>
          <li><strong>Fundraise</strong> &mdash; Raise search capital from investors (3&ndash;6 months)</li>
          <li><strong>Search</strong> &mdash; Source, evaluate, and select a target (12&ndash;24 months)</li>
          <li><strong>Acquisition</strong> &mdash; Negotiate, finance, and close the deal (3&ndash;9 months)</li>
          <li><strong>Operations</strong> &mdash; Run and grow the acquired company (4&ndash;7 years)</li>
          <li><strong>Exit</strong> &mdash; Sell or recapitalize the business</li>
        </ol>
        <p>
          The total timeline from fundraise to exit averages 7&ndash;8 years,
          with the operating phase being the longest and most
          value-creating period.
        </p>

        <h2 className={h2Class}>Stage 1: Fundraise (3&ndash;6 months)</h2>

        <h3 className={h3Class}>What happens</h3>
        <p>
          The searcher raises $400K&ndash;$600K in search capital from
          10&ndash;20 investors. This capital funds the searcher&rsquo;s
          salary, deal expenses, travel, legal costs, and basic operations
          during the search phase.
        </p>

        <h3 className={h3Class}>Key deliverables</h3>
        <ul className={ulClass}>
          <li>
            <strong>
              <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
                Private Placement Memorandum (PPM)
              </Link>:
            </strong>{" "}
            The legal and marketing document describing the fund, the
            searcher&rsquo;s background, investment thesis, and terms
          </li>
          <li>
            <strong>
              <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">
                Fundraising deck
              </Link>:
            </strong>{" "}
            A concise presentation for investor meetings
          </li>
          <li><strong>Legal formation:</strong> LP or LLC entity,{" "}
            <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
              legal structure
            </Link>,
            subscription agreements
          </li>
          <li>
            <strong>Investor commitments:</strong> Capital commitments from
            search fund investors (typically $25K&ndash;$50K per investor)
          </li>
        </ul>

        <h3 className={h3Class}>Economics</h3>
        <ul className={ulClass}>
          <li>Search capital is typically structured as a convertible note or preferred equity</li>
          <li>Investors who participate in the search round get a &ldquo;step-up&rdquo; — the right to invest in the acquisition at 1.5x their pro-rata share</li>
          <li>Searcher receives a modest salary ($80K&ndash;$120K) during the search phase</li>
        </ul>

        <h3 className={h3Class}>Common mistakes</h3>
        <ul className={ulClass}>
          <li>Raising too little capital (running out of runway during the search)</li>
          <li>Over-concentrating the investor base (1&ndash;2 large investors who can control the process)</li>
          <li>Underestimating the time required to close the fundraise</li>
          <li>Neglecting to establish a clear{" "}
            <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
              industry thesis
            </Link>{" "}
            before approaching investors
          </li>
        </ul>

        <h2 className={h2Class}>Stage 2: Search (12&ndash;24 months)</h2>

        <h3 className={h3Class}>What happens</h3>
        <p>
          The searcher works full-time to identify, evaluate, and select
          an acquisition target. This is the most intensive phase of the
          lifecycle. The median search duration is 18&ndash;20 months, with
          approximately 30% of searchers not completing an acquisition.
        </p>

        <h3 className={h3Class}>Key activities</h3>
        <ul className={ulClass}>
          <li>
            <strong>
              <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
                Deal sourcing
              </Link>:
            </strong>{" "}
            Building a pipeline through brokers, direct outreach, and
            referral networks
          </li>
          <li><strong>Initial screening:</strong> Reviewing 100&ndash;200+ opportunities to find 5&ndash;10 serious candidates</li>
          <li><strong>Management meetings:</strong> Meeting with business owners, touring operations, building rapport</li>
          <li>
            <strong>
              <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
                LOI submission
              </Link>:
            </strong>{" "}
            Submitting 2&ndash;5 Letters of Intent before closing one deal
          </li>
          <li><strong>Investor updates:</strong> Monthly or bi-monthly reports to the investor group</li>
        </ul>

        <h3 className={h3Class}>Typical funnel metrics</h3>
        <ul className={ulClass}>
          <li>Opportunities reviewed: 150&ndash;300</li>
          <li>First meetings/calls: 30&ndash;60</li>
          <li>Deep dives: 10&ndash;20</li>
          <li>LOIs submitted: 2&ndash;5</li>
          <li>LOIs accepted: 1</li>
        </ul>

        <h3 className={h3Class}>Common mistakes</h3>
        <ul className={ulClass}>
          <li>Casting too narrow a net (overly restrictive criteria early on)</li>
          <li>Failing to build broker relationships (brokers control 50&ndash;70% of deal flow)</li>
          <li>
            <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
              Falling in love with a deal
            </Link>{" "}
            and ignoring red flags during diligence
          </li>
          <li>Poor time management &mdash; spreading too thin across too many opportunities</li>
        </ul>

        <h2 className={h2Class}>Stage 3: Acquisition (3&ndash;9 months)</h2>

        <h3 className={h3Class}>What happens</h3>
        <p>
          Once an LOI is accepted, the searcher conducts full due
          diligence, secures acquisition financing, and closes the
          transaction. This stage runs from LOI acceptance to closing day.
        </p>

        <h3 className={h3Class}>Key activities</h3>
        <ul className={ulClass}>
          <li>
            <strong>
              <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
                Due diligence
              </Link>:
            </strong>{" "}
            Financial, legal, operational, commercial, and HR analysis
          </li>
          <li>
            <strong>
              <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
                Quality of earnings (QoE)
              </Link>:
            </strong>{" "}
            Third-party financial analysis to validate seller&rsquo;s reported earnings
          </li>
          <li>
            <strong>
              <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
                Financing
              </Link>:
            </strong>{" "}
            Securing senior debt (SBA or bank), equity commitments, and any seller financing
          </li>
          <li>
            <strong>
              <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
                Negotiation
              </Link>:
            </strong>{" "}
            Purchase price adjustments, reps &amp; warranties, working capital, and{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-out structures
            </Link>
          </li>
          <li><strong>Closing:</strong> Final document execution, wire transfers, and ownership transfer</li>
        </ul>

        <h3 className={h3Class}>Economics at acquisition</h3>
        <p>
          The median search fund acquisition is $10&ndash;$30M in enterprise
          value. A typical capital structure:
        </p>
        <ul className={ulClass}>
          <li>Senior debt: 50&ndash;65% of enterprise value</li>
          <li>Equity (from search fund investors): 25&ndash;40%</li>
          <li>Seller financing: 5&ndash;15% (see{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing guide
            </Link>)
          </li>
        </ul>

        <h3 className={h3Class}>Searcher equity</h3>
        <p>
          Upon closing, the searcher receives approximately 20&ndash;25%
          of equity, typically vesting over 4&ndash;5 years. Combined with
          the step-up economics for search investors, this creates a
          powerful alignment mechanism. See our{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap tables &amp; equity guide
          </Link>{" "}
          for detailed mechanics and our{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
            searcher compensation
          </Link>{" "}
          breakdown.
        </p>

        <h2 className={h2Class}>Stage 4: Operations (4&ndash;7 years)</h2>

        <h3 className={h3Class}>What happens</h3>
        <p>
          The searcher becomes CEO and runs the acquired business. This is
          the longest phase and where the majority of value creation (or
          destruction) occurs. The first 100 days are critical for
          establishing credibility, understanding operations, and building
          trust with the team.
        </p>

        <h3 className={h3Class}>Key phases within operations</h3>
        <ul className={ulClass}>
          <li>
            <strong>
              <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
                First 100 days
              </Link>:
            </strong>{" "}
            Learn the business, build relationships, avoid premature changes
          </li>
          <li>
            <strong>
              <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
                Management transition
              </Link>:
            </strong>{" "}
            Integrate with existing team, establish new governance
          </li>
          <li>
            <strong>Stabilization (Year 1&ndash;2):</strong> Systematize
            operations, hire key roles, implement technology
          </li>
          <li>
            <strong>Growth (Year 2&ndash;5):</strong> Execute on{" "}
            <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">
              revenue growth
            </Link>,{" "}
            <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">
              digital transformation
            </Link>, and potentially{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>{" "}
            add-on acquisitions
          </li>
          <li><strong>Exit preparation (Year 4&ndash;6):</strong> Professionalize reporting, reduce owner dependency, optimize for exit</li>
        </ul>

        <h3 className={h3Class}>Board governance</h3>
        <p>
          Search fund CEOs work with an active{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">
            board of directors
          </Link>{" "}
          (typically 3&ndash;5 members including investor representatives
          and independent directors). The board provides strategic
          guidance, accountability, and investor oversight.
        </p>

        <h3 className={h3Class}>Common operational challenges</h3>
        <ul className={ulClass}>
          <li>Transitioning from &ldquo;searcher&rdquo; to &ldquo;operator&rdquo; mindset</li>
          <li>Managing existing employees who may resist change</li>
          <li>Balancing growth investments with debt service obligations</li>
          <li>Hiring and retaining key management talent</li>
          <li>Maintaining discipline on{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
              working capital
            </Link>{" "}
            and cash flow</li>
        </ul>

        <h2 className={h2Class}>Stage 5: Exit</h2>

        <h3 className={h3Class}>What happens</h3>
        <p>
          After 4&ndash;7 years of operations, the business is sold or
          recapitalized, generating returns for investors and the
          searcher-CEO. The{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit strategy
          </Link>{" "}
          is typically determined 1&ndash;2 years before execution.
        </p>

        <h3 className={h3Class}>Common exit paths</h3>
        <ul className={ulClass}>
          <li><strong>Strategic sale:</strong> Selling to a larger company in the same or adjacent industry (most common, highest multiples)</li>
          <li><strong>Private equity sale:</strong> Selling to a PE firm (common for businesses with $3M+ EBITDA)</li>
          <li><strong>Recapitalization:</strong> Refinancing to return capital to investors while the CEO continues operating</li>
          <li><strong>Management buyout:</strong> Selling to the existing management team</li>
          <li><strong>ESOP:</strong> Selling to an Employee Stock Ownership Plan (tax-advantaged in the US)</li>
        </ul>

        <h3 className={h3Class}>Return economics</h3>
        <p>
          According to the{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            Stanford data
          </Link>,
          the median search fund has generated approximately 35% IRR and
          5.5x MOIC for investors. For the searcher-CEO, a successful
          exit on a $20M acquisition can generate $5&ndash;$15M+ in
          personal wealth through equity appreciation.
        </p>
        <p>
          See our{" "}
          <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
            search fund statistics
          </Link>{" "}
          for comprehensive return data across all funds.
        </p>

        <h2 className={h2Class}>Timeline summary</h2>
        <ul className={ulClass}>
          <li><strong>Month 0&ndash;6:</strong> Fundraise — raise search capital, form entity</li>
          <li><strong>Month 6&ndash;24:</strong> Search — source deals, submit LOIs</li>
          <li><strong>Month 18&ndash;30:</strong> Acquisition — due diligence, financing, close</li>
          <li><strong>Year 2&ndash;8:</strong> Operations — run and grow the business</li>
          <li><strong>Year 6&ndash;10:</strong> Exit — sell or recapitalize</li>
        </ul>
        <p>
          Note that stages overlap: the acquisition stage begins during
          the search (when an LOI is accepted), and exit planning begins
          during operations.
        </p>

        <h2 className={h2Class}>Self-funded search: a compressed lifecycle</h2>
        <p>
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            Self-funded searchers
          </Link>{" "}
          skip Stage 1 (no institutional fundraise) and often compress
          the timeline significantly. They search part-time while employed,
          target smaller businesses ($1&ndash;$5M enterprise value),
          and use{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA loans
          </Link>{" "}
          or{" "}
          <Link href="/learn/buy-business-no-money-down" className="text-apple-accent hover:underline">
            creative financing
          </Link>{" "}
          to fund the acquisition. The trade-off: less institutional support
          but more equity ownership and operational flexibility.
        </p>

        <h2 className={h2Class}>What makes each stage succeed</h2>
        <ul className={ulClass}>
          <li><strong>Fundraise:</strong> A compelling personal brand, clear thesis, and broad investor network</li>
          <li><strong>Search:</strong> Disciplined deal sourcing, rigorous screening criteria, and emotional discipline to walk away from bad deals</li>
          <li><strong>Acquisition:</strong> Thorough diligence, creative deal structuring, and strong relationships with lenders and advisors</li>
          <li><strong>Operations:</strong> Humility in the first year, decisive leadership once established, and strategic investment in growth</li>
          <li><strong>Exit:</strong> Timing, preparation, and choosing the right exit path for the business and market conditions</li>
        </ul>
      </div>
    </article>
  );
}
