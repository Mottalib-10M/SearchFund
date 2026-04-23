import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function WhatIsETAArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Is Entrepreneurship Through Acquisition (ETA)?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Entrepreneurship Through Acquisition, commonly known as ETA, is a path
          to business ownership where an individual acquires an existing,
          profitable company rather than starting one from scratch. Unlike
          traditional entrepreneurship, which involves building a product,
          finding customers, and proving a business model from zero, ETA allows
          aspiring business owners to step into a company that already has
          revenue, employees, customers, and established operations.
        </p>

        <p>
          The concept was formalized at Stanford Graduate School of Business in
          1984 when the first search fund was established. Since then, the model
          has expanded dramatically: the{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            2024 Stanford GSB study
          </Link>{" "}
          tracked 681 search funds over 40 years, and IESE&rsquo;s International
          Search Fund Study documented rapid growth across Europe, Latin America,
          and Asia. ETA has evolved from a niche academic concept into a
          mainstream career path for ambitious professionals.
        </p>

        <h2 className={h2Class}>Why ETA exists: the ownership gap</h2>
        <p>
          ETA emerged to solve a structural problem in the economy. Millions of
          small and medium-sized enterprises (SMEs) worldwide are owned by baby
          boomers approaching retirement. In the United States alone, 10 million
          businesses are owned by people over 55, representing trillions of
          dollars in enterprise value. In Europe, the European Commission
          estimates that 450,000 businesses change hands each year, with many
          struggling to find qualified successors.
        </p>
        <p>
          At the same time, a growing population of talented, ambitious
          professionals want to own and run businesses but lack the capital,
          connections, or appetite for the extreme risk of starting from nothing.
          ETA bridges these two groups: it connects experienced operators with
          businesses that need new leadership, creating value for sellers,
          buyers, investors, and employees alike. The{" "}
          <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
            baby boomer succession crisis
          </Link>{" "}
          is accelerating this trend globally.
        </p>

        <h2 className={h2Class}>The main ETA models</h2>
        <p>
          ETA is not a single approach but rather a family of strategies for
          acquiring businesses. The most common models include:
        </p>

        <h3 className={h3Class}>Traditional search fund</h3>
        <p>
          The original ETA model, pioneered at Stanford. A searcher raises a
          small pool of capital (typically $400,000&ndash;$600,000) from 10&ndash;20
          investors to fund a two-year search for an acquisition target. Upon
          finding a suitable company, the searcher raises additional equity from
          the same investors to complete the purchase. The searcher becomes CEO
          and earns 20&ndash;30% of the equity through a step-up mechanism. This
          model is covered in depth in our{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            complete guide to search funds
          </Link>.
        </p>

        <h3 className={h3Class}>Self-funded search</h3>
        <p>
          A growing alternative where the searcher uses personal savings and
          bootstrapped deal-sourcing to find an acquisition target without
          raising institutional search capital. The searcher typically retains
          more equity (often 50&ndash;100%) but bears more personal financial risk.
          Self-funded searchers usually target smaller deals ($500K&ndash;$3M
          enterprise value) and rely more heavily on{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            SBA loans and seller financing
          </Link>{" "}
          to fund the acquisition. Learn more in our{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded vs. traditional comparison
          </Link>.
        </p>

        <h3 className={h3Class}>Independent sponsor</h3>
        <p>
          Sometimes called a &ldquo;fundless sponsor,&rdquo; this model sits
          between traditional search funds and private equity. The independent
          sponsor sources deals without committed capital, then raises equity
          deal-by-deal from investors once a specific target is identified. This
          model allows for larger transactions ($5M&ndash;$50M enterprise value)
          and sometimes involves hiring a management team rather than the
          sponsor operating as CEO.
        </p>

        <h3 className={h3Class}>Search fund accelerators and holding companies</h3>
        <p>
          A newer model where an institutional platform provides capital,
          back-office support, and mentorship to multiple searchers
          simultaneously. Examples include Relay Investments, Pacific Lake
          Partners, and Enduring Ventures. These platforms reduce the
          fundraising burden for searchers but typically take a larger equity
          share.
        </p>

        <h2 className={h2Class}>Who pursues ETA?</h2>
        <p>
          The typical ETA practitioner is a 28&ndash;38 year old professional with
          five to ten years of operating experience in management consulting,
          finance, technology, or industry operations. About 85% of traditional
          searchers hold MBAs from top programs, though the self-funded path is
          increasingly attracting professionals without graduate degrees.
        </p>
        <p>
          What unites ETA practitioners is a desire for direct business
          ownership, operating control, and the opportunity to build long-term
          wealth through running a company. Unlike venture-backed founders who
          may spend years in unprofitable growth mode, ETA operators acquire
          profitable businesses and earn a CEO-level salary from day one.
          According to the{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
            searcher compensation data
          </Link>,
          post-acquisition CEO salaries average $200K&ndash;$300K, with total
          wealth creation potential of $3M&ndash;$10M+ at exit.
        </p>

        <h2 className={h2Class}>The ETA lifecycle</h2>
        <p>
          Regardless of the specific model, most ETA journeys follow a similar
          lifecycle:
        </p>

        <h3 className={h3Class}>1. Preparation (3&ndash;6 months)</h3>
        <p>
          The aspiring acquirer studies the ETA model, develops an investment
          thesis (target industries, geographies, company sizes), builds a
          network of mentors and investors, and prepares the legal and financial
          foundation for the search. Read our{" "}
          <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
            pre-search preparation guide
          </Link>{" "}
          for a detailed playbook.
        </p>

        <h3 className={h3Class}>2. Fundraising (2&ndash;4 months, traditional only)</h3>
        <p>
          Traditional searchers raise search capital by writing a{" "}
          <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
            Private Placement Memorandum (PPM)
          </Link>{" "}
          and presenting to prospective investors. The fundraising process
          typically involves meeting 50&ndash;100+ investors to secure commitments
          from 10&ndash;20. Our guide on{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            finding search fund investors
          </Link>{" "}
          covers the full process.
        </p>

        <h3 className={h3Class}>3. Search (12&ndash;24 months)</h3>
        <p>
          The searcher identifies, evaluates, and approaches potential
          acquisition targets. A typical search involves reviewing 200&ndash;300
          companies, conducting 50&ndash;100 management meetings, submitting
          5&ndash;15{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letters of Intent (LOIs)
          </Link>,
          and ultimately closing on one acquisition. The{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies
          </Link>{" "}
          guide covers the most effective approaches.
        </p>

        <h3 className={h3Class}>4. Due diligence and closing (2&ndash;4 months)</h3>
        <p>
          Once an LOI is signed, the searcher conducts comprehensive financial,
          legal, operational, and commercial{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>.
          The capital stack is finalized (equity, debt, and{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller financing
          </Link>),
          legal documents are negotiated, and the acquisition closes.
        </p>

        <h3 className={h3Class}>5. Operations and value creation (3&ndash;7 years)</h3>
        <p>
          The new CEO-operator runs the business, implements improvements, and
          grows the company. The{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days
          </Link>{" "}
          are critical for establishing trust with the team, understanding the
          business deeply, and identifying quick wins. Common value creation
          levers include revenue growth, operational efficiency, add-on
          acquisitions ({" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build strategy
          </Link>),
          and digital transformation.
        </p>

        <h3 className={h3Class}>6. Exit (year 5&ndash;7+)</h3>
        <p>
          Most ETA exits occur through strategic sales, private equity
          transactions, or management buyouts. Read our{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit strategies guide
          </Link>{" "}
          for a full breakdown of options and timing.
        </p>

        <h2 className={h2Class}>ETA performance data</h2>
        <p>
          The track record of ETA is remarkably strong. According to the{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            search fund returns data
          </Link>,
          traditional search funds have generated a 35% aggregate IRR and 4.5x
          return on invested capital over 40 years. This makes search funds one
          of the highest-returning asset classes in private markets.
        </p>
        <p>
          Key performance metrics from the Stanford 2024 study:
        </p>
        <ul className={ulClass}>
          <li>681 search funds tracked since 1984</li>
          <li>Approximately 67% of funds successfully acquire a company</li>
          <li>35% aggregate IRR for investors (pre-tax)</li>
          <li>4.5x aggregate return on invested capital</li>
          <li>Median acquisition enterprise value: $8&ndash;$15 million</li>
          <li>Median hold period: 5&ndash;7 years</li>
          <li>Record 94 new search funds launched in 2023 alone</li>
        </ul>
        <p>
          It is important to note that these returns are heavily skewed by top
          performers. The median search fund return is more modest, and roughly
          one-third of acquisitions lose money for investors. ETA is not a
          guaranteed path to wealth &mdash; it requires exceptional execution,
          discipline, and a strong company match.
        </p>

        <h2 className={h2Class}>ETA vs. other paths to business ownership</h2>
        <p>
          How does ETA compare to starting a startup, buying a franchise, or
          joining a large corporation? Here is a high-level comparison:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>ETA vs. startups:</strong> ETA has a significantly lower
            failure rate (~33% for search funds vs. ~90% for startups) because
            you acquire a proven business with existing cash flows. However,
            growth potential may be more limited than a venture-scale startup.
            See our detailed{" "}
            <Link href="/learn/eta-vs-startups" className="text-apple-accent hover:underline">
              ETA vs. startups comparison
            </Link>.
          </li>
          <li>
            <strong>ETA vs. private equity:</strong> ETA deals are smaller ($1&ndash;$20M
            vs. $100M+), involve a single operator-CEO, and use step-up equity
            rather than 2/20 fee structures. Returns have historically been
            higher on an IRR basis. See our{" "}
            <Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">
              ETA vs. PE analysis
            </Link>.
          </li>
          <li>
            <strong>ETA vs. franchises:</strong> ETA offers more autonomy and
            upside than franchising but requires more skill in sourcing and
            operating. Franchise failure rates are lower (~15%) but so is the
            return potential.
          </li>
          <li>
            <strong>ETA vs. real estate:</strong> Both are tangible asset
            investments with leverage. ETA offers higher potential returns but
            requires active management. Real estate is more passive but has
            lower return potential. See our{" "}
            <Link href="/learn/eta-vs-real-estate" className="text-apple-accent hover:underline">
              ETA vs. real estate comparison
            </Link>.
          </li>
        </ul>

        <h2 className={h2Class}>ETA around the world</h2>
        <p>
          While ETA originated in the United States, the model is now global.
          The fastest-growing region is{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            Europe
          </Link>,
          where 23 million SMEs and a massive baby boomer succession wave are
          creating unprecedented acquisition opportunities at lower multiples
          than the US market. Key European ETA markets include:
        </p>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
              France
            </Link>{" "}
            &mdash; the largest European market with strong government support
            (Bpifrance)
          </li>
          <li>
            <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
              Germany
            </Link>{" "}
            &mdash; the Mittelstand offers world-class industrial SMEs
          </li>
          <li>
            <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">
              United Kingdom
            </Link>{" "}
            &mdash; the most developed English-speaking European ETA market
          </li>
          <li>
            <Link href="/learn/eta-spain" className="text-apple-accent hover:underline">
              Spain
            </Link>{" "}
            &mdash; IESE is a global hub for ETA education and research
          </li>
          <li>
            <Link href="/learn/eta-italy" className="text-apple-accent hover:underline">
              Italy
            </Link>{" "}
            &mdash; family business succession creates massive deal flow
          </li>
        </ul>

        <h2 className={h2Class}>What makes a good ETA acquisition target?</h2>
        <p>
          Not every business is suitable for acquisition through ETA. The ideal
          target typically has the following characteristics:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Enterprise value of $2M&ndash;$20M:</strong> Large enough to
            support a CEO salary and investor returns, small enough that
            competition from PE firms is limited
          </li>
          <li>
            <strong>Stable, recurring revenue:</strong> Subscription models, long-term
            contracts, or habitual repeat customers
          </li>
          <li>
            <strong>EBITDA margins of 15&ndash;25%+:</strong> Sufficient cash flow
            to service acquisition debt and fund growth
          </li>
          <li>
            <strong>Low customer concentration:</strong> No single customer
            should represent more than 15&ndash;20% of revenue
          </li>
          <li>
            <strong>Owner-dependent operations:</strong> A business where the
            owner is involved in day-to-day management (creating the succession
            need) but where the business can survive the transition with the
            right new leader
          </li>
          <li>
            <strong>Growth potential:</strong> Clear levers for revenue growth,
            margin expansion, or add-on acquisitions that the new operator can
            execute
          </li>
        </ul>
        <p>
          Industries commonly targeted include{" "}
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
            SaaS
          </Link>,{" "}
          <Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">
            healthcare services
          </Link>,{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services
          </Link>,{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services
          </Link>,{" "}
          <Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">
            manufacturing
          </Link>, and{" "}
          <Link href="/learn/education-acquisition" className="text-apple-accent hover:underline">
            education
          </Link>.
        </p>

        <h2 className={h2Class}>How to get started with ETA</h2>
        <p>
          If you are considering ETA as a career path, here are the key steps:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Educate yourself:</strong> Read the Stanford and IESE
            studies, explore our{" "}
            <Link href="/learn/eta-reading-list" className="text-apple-accent hover:underline">
              essential ETA reading list
            </Link>,
            and connect with the ETA community through conferences and online
            forums
          </li>
          <li>
            <strong>Develop your thesis:</strong> Decide which industries,
            geographies, and deal sizes interest you
          </li>
          <li>
            <strong>Choose your model:</strong> Traditional search fund,
            self-funded, or independent sponsor — each has trade-offs in terms
            of equity, risk, and support
          </li>
          <li>
            <strong>Build your network:</strong> Connect with experienced
            searchers, investors, and advisors. Our{" "}
            <Link href="/learn/advisory-board" className="text-apple-accent hover:underline">
              advisory board guide
            </Link>{" "}
            explains how to build your support network
          </li>
          <li>
            <strong>Prepare financially:</strong> Ensure you have adequate
            personal runway and understand the{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              economics of search fund equity
            </Link>
          </li>
        </ul>

        <h2 className={h2Class}>The future of ETA</h2>
        <p>
          ETA is at an inflection point. Record numbers of new search funds are
          being launched each year (94 in 2023 alone). Institutional investors
          are increasingly allocating to the asset class. New models like search
          fund accelerators and holding companies are lowering barriers to entry.
          And the baby boomer succession wave is creating an unprecedented supply
          of quality businesses available for acquisition.
        </p>
        <p>
          The model is also becoming more diverse and inclusive. While
          historically dominated by MBA graduates from elite programs, the{" "}
          <Link href="/learn/women-in-eta" className="text-apple-accent hover:underline">
            growing participation of women and underrepresented groups
          </Link>{" "}
          is broadening the talent pool. Self-funded models are making ETA
          accessible to professionals without MBA backgrounds. And
          international expansion is bringing the model to new markets and
          cultures.
        </p>
        <p>
          Whether you are a young professional looking for an alternative to the
          corporate track, an experienced executive seeking ownership, or an
          investor looking for outsized returns, ETA offers a proven,
          data-backed path to building wealth through business ownership.
        </p>
      </div>
    </article>
  );
}
