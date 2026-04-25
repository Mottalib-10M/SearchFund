import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAvsStartupsArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Startups vs. Franchises: Choosing Your Path</h1>
      <p className="text-sm text-apple-gray-500 mt-3">7 min read</p>

      <div className={bodyClass}>
        <p>
          If you&apos;re an ambitious professional dreaming of business ownership,
          you face three primary paths: launching a startup, buying a franchise, or
          acquiring an existing business through Entrepreneurship Through Acquisition
          (ETA). Each route carries fundamentally different risk profiles, capital
          requirements, timelines, and lifestyle implications. Understanding these
          differences is essential to choosing the path that aligns with your
          personality, resources, and goals.
        </p>
        <p>
          This guide provides a rigorous, data-driven comparison across every
          dimension that matters - so you can make the most informed decision of
          your career.
        </p>

        <h2 className={h2Class}>Risk profiles: the numbers don&apos;t lie</h2>
        <p>
          Risk is the single most important variable separating these three paths.
          The failure rates diverge dramatically, and understanding why helps you
          assess which level of risk you can genuinely absorb.
        </p>

        <h3 className={h3Class}>Startups: high risk, asymmetric reward</h3>
        <p>
          Approximately 90% of startups fail, according to data compiled by CB
          Insights and the Bureau of Labor Statistics. Of those that survive, the
          median outcome is modest - most &quot;successful&quot; startups never
          achieve venture-scale returns. The top 1% of outcomes (unicorns, major
          acquisitions) drive the bulk of total startup returns, creating a
          power-law distribution that makes the expected value calculation deeply
          misleading for any individual founder.
        </p>

        <h3 className={h3Class}>Franchises: structured predictability</h3>
        <p>
          Franchise failure rates sit around 15% over a five-year period, according
          to FRANdata research. This lower failure rate reflects the value of proven
          systems, brand recognition, and corporate support. However, the
          &quot;failure&quot; definition varies - many franchise owners who technically
          survive are earning below their opportunity cost, making their
          &quot;success&quot; economically questionable.
        </p>

        <h3 className={h3Class}>ETA / Search funds: calculated risk with downside protection</h3>
        <p>
          Search fund failure rates hover around 33%, based on Stanford Graduate
          School of Business study data spanning four decades. See our{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns analysis</Link> for
          the complete performance picture. This means roughly
          two-thirds of searchers successfully acquire and operate a company. When
          a search fund does fail, it&apos;s most often because the searcher couldn&apos;t
          find a suitable acquisition target within the search window - not because
          the acquired company collapsed. Post-acquisition failure rates are
          significantly lower, in the range of 10-15%.
        </p>

        <h2 className={h2Class}>Capital requirements: what it actually costs</h2>
        <p>
          The capital structures across these three paths are entirely different
          animals, and they shape everything from investor dynamics to personal
          financial exposure.
        </p>

        <h3 className={h3Class}>Startup capital</h3>
        <ul className={ulClass}>
          <li>
            <strong>Range:</strong> $0 to $2M+ at the seed stage, with many
            bootstrapped ventures starting on less than $50K
          </li>
          <li>
            <strong>Sources:</strong> Personal savings, friends and family, angel
            investors, accelerators (Y Combinator, Techstars), seed-stage VCs
          </li>
          <li>
            <strong>Dilution risk:</strong> High. Multiple rounds of funding can
            reduce a founder&apos;s equity from 100% to under 10% by the time of exit
          </li>
          <li>
            <strong>Personal guarantee exposure:</strong> Typically low in
            venture-backed startups; higher in bootstrapped businesses
          </li>
        </ul>

        <h3 className={h3Class}>Franchise capital</h3>
        <ul className={ulClass}>
          <li>
            <strong>Range:</strong> $100K to $2M total investment, depending on the
            brand and territory. A McDonald&apos;s franchise requires $1M-$2.2M; a
            service-based franchise may require $100K-$300K
          </li>
          <li>
            <strong>Sources:</strong> Personal savings, SBA loans (up to $5M),
            franchisor financing programs
          </li>
          <li>
            <strong>Ongoing fees:</strong> Royalty fees of 4-8% of gross revenue plus
            marketing fund contributions of 1-4% - these are perpetual costs
          </li>
          <li>
            <strong>Personal guarantee exposure:</strong> High. SBA loans require
            personal guarantees
          </li>
        </ul>

        <h3 className={h3Class}>ETA / Search fund capital</h3>
        <ul className={ulClass}>
          <li>
            <strong>Total deal size:</strong> $5M to $20M enterprise value for a
            typical search fund acquisition, with $1M-$5M in equity and the balance
            in SBA or seller financing
          </li>
          <li>
            <strong>Search capital:</strong> $400K-$600K raised from 10-20 investors
            for a traditional search, or $0-$100K personal investment for a
            self-funded search
          </li>
          <li>
            <strong>Searcher equity:</strong> 20-30% of the acquired company,
            typically vesting over 4-5 years. This is earned equity - you&apos;re not
            buying it, you&apos;re earning it through sweat and execution
          </li>
          <li>
            <strong>Personal guarantee exposure:</strong> Moderate. SBA 7(a) loans
            require personal guarantees, but the acquired company&apos;s cash flows
            service the debt
          </li>
        </ul>

        <h2 className={h2Class}>Time to profitability</h2>
        <p>
          How quickly each path generates meaningful income is a critical
          consideration, especially for professionals with families, mortgages, or
          limited savings runway.
        </p>

        <h3 className={h3Class}>Startups: the long road</h3>
        <p>
          Most startups take 3-7 years to reach profitability, and many never do.
          Founder salaries during the early years are often $0-$80K - well below
          what these individuals could earn in corporate roles. The median time
          from founding to meaningful exit (acquisition or IPO) is 7-10 years for
          venture-backed companies, and the vast majority of founders never see
          a liquidity event.
        </p>

        <h3 className={h3Class}>Franchises: predictable ramp</h3>
        <p>
          Most franchise locations reach operational breakeven within 12-24 months.
          Owner-operator income typically ranges from $60K to $150K per year for a
          single unit, depending on the brand and market. Multi-unit operators can
          earn significantly more, but scaling requires additional capital and
          management complexity.
        </p>

        <h3 className={h3Class}>ETA: profitable from day one</h3>
        <p>
          Search fund acquisitions are, by definition, profitable from the moment
          of closing. You&apos;re buying a company with existing revenue, customers, and
          cash flow. Searcher-CEO compensation typically starts at $150K-$250K in
          base salary plus performance bonuses, with total compensation growing
          as the company grows. The median holding period before exit is 5-7 years,
          at which point the equity returns can be transformative.
        </p>

        <h2 className={h2Class}>Control and autonomy</h2>
        <p>
          The degree of control you have over strategy, operations, and daily
          decisions varies enormously across these three models.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Startups:</strong> Full creative and strategic control. You
            define the product, the market, the brand, the culture - everything.
            This freedom is intoxicating but can also be paralyzing without
            guardrails
          </li>
          <li>
            <strong>Franchises:</strong> Limited control. The franchisor dictates
            products, pricing, marketing, store design, and operational procedures.
            You&apos;re executing someone else&apos;s playbook, not writing your own.
            Territorial restrictions further constrain growth options
          </li>
          <li>
            <strong>ETA:</strong> Full operational control post-acquisition. You
            have a board of directors (typically your investors), but you are the
            CEO making daily and strategic decisions. The key difference from a
            startup is that you inherit an existing system - employees, customers,
            processes - rather than building from zero
          </li>
        </ul>

        <h2 className={h2Class}>Exit potential and wealth creation</h2>
        <p>
          The terminal value of each path determines whether business ownership
          becomes a wealth-creation vehicle or simply a well-paying job.
        </p>

        <h3 className={h3Class}>Startup exits</h3>
        <p>
          The theoretical upside of startups is unlimited - a unicorn outcome can
          generate hundreds of millions in founder wealth. In practice, the median
          venture-backed startup exit is around $50M in enterprise value, and the
          founder&apos;s diluted share is often 5-15% by that point. For the rare
          founder who achieves a $100M+ exit, the payoff is extraordinary. For the
          90% who fail, the payoff is zero or negative.
        </p>

        <h3 className={h3Class}>Franchise exits</h3>
        <p>
          Franchise resale values are typically modest - 2-4x annual cash flow for
          a single unit. A franchise generating $150K in annual owner benefit might
          sell for $300K-$600K. Multi-unit portfolios command better multiples but
          require years of scaling. The franchise model is better understood as an
          income vehicle than a wealth-creation vehicle.
        </p>

        <h3 className={h3Class}>ETA exits</h3>
        <p>
          Stanford data shows that the median search fund acquisition generates a
          5.4x return on invested capital, with top-quartile deals exceeding 10x - read
          more about{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why investors back search funds</Link>.
          A searcher who acquires a $10M company, grows it to $20M in enterprise
          value over five years, and holds 25% equity would realize $5M in personal
          wealth - a realistic, achievable outcome. The 2024 Stanford Search Fund
          Study reports aggregate returns of 8.9x on invested capital and 33.7%
          IRR across the asset class.
        </p>

        <h2 className={h2Class}>Personal fit assessment framework</h2>
        <p>
          The right path depends less on which model is &quot;best&quot; in the
          abstract and more on which model fits your specific profile. Use this
          framework to assess your alignment.
        </p>

        <h3 className={h3Class}>Risk tolerance</h3>
        <ul className={ulClass}>
          <li>
            <strong>High risk tolerance + big vision:</strong> Startup. You need to
            be comfortable with years of uncertainty and the real possibility of
            total loss
          </li>
          <li>
            <strong>Low risk tolerance + steady income need:</strong> Franchise.
            The system reduces uncertainty, and cash flow is relatively predictable
          </li>
          <li>
            <strong>Moderate risk tolerance + strong upside desire:</strong> ETA.
            You accept meaningful risk but want it grounded in existing cash flows
            and proven business models
          </li>
        </ul>

        <h3 className={h3Class}>Creativity vs. operations orientation</h3>
        <p>
          If you&apos;re driven by inventing something new - a product, a market, a
          category - startups are your natural home. If you thrive on optimizing
          existing systems, managing people, and driving incremental improvements,
          ETA is a better fit. Franchises suit operators who are comfortable
          following established procedures with minimal deviation.
        </p>

        <h3 className={h3Class}>Capital access and financial position</h3>
        <ul className={ulClass}>
          <li>
            <strong>Limited capital, strong network:</strong>{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">Traditional search fund</Link>{" "}
            (investors fund the search)
          </li>
          <li>
            <strong>Moderate personal capital ($100K-$500K):</strong>{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">Self-funded search</Link> or franchise
          </li>
          <li>
            <strong>Minimal capital, strong technical skills:</strong> Bootstrapped
            startup
          </li>
        </ul>

        <h3 className={h3Class}>Experience and background</h3>
        <p>
          An MBA from a top program (Stanford, Harvard, INSEAD, IESE, Wharton) is
          a significant advantage in ETA because it provides access to the investor
          network, alumni deal flow, and credibility with sellers. In startups, an
          MBA is less relevant - domain expertise and technical skills matter more.
          In franchises, an MBA is largely irrelevant; operational discipline and
          sales ability drive success.
        </p>

        <h2 className={h2Class}>Lifestyle considerations</h2>
        <p>
          Business ownership is not just a career decision - it&apos;s a lifestyle
          decision that affects your family, health, and daily experience.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Startups:</strong> 60-80+ hour weeks for years. High emotional
            volatility. Geographic flexibility (especially for tech). Social
            isolation is common during intense building phases
          </li>
          <li>
            <strong>Franchises:</strong> 50-60 hour weeks initially, potentially
            reducing to 40 hours once systems are established. Geographically fixed
            to your territory. Predictable daily routine
          </li>
          <li>
            <strong>ETA:</strong> 50-60 hour weeks as CEO. You inherit an existing
            team and rhythm. Geographic flexibility is limited - you go where the
            company is located, which may mean relocating to a smaller city or
            rural area. The stability of existing cash flow reduces (but does not
            eliminate) financial stress
          </li>
        </ul>

        <h2 className={h2Class}>Making the decision</h2>
        <p>
          There is no universally &quot;right&quot; answer. The best path is the one
          that matches your risk profile, financial position, skills, and life
          stage. If you crave creation and can absorb total loss, start something.
          If you want predictability and a proven system, buy a franchise. If you
          want to be CEO of a real, profitable company with meaningful equity
          upside - and you have the operational mindset and financial modeling
          skills to underwrite a deal - ETA is the most compelling risk-adjusted
          path to business ownership available today. Our{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">getting started guide</Link> can
          help you take the first step.
        </p>
        <p>
          Whatever you choose, commit fully. Half-hearted pursuit of any of these
          paths leads to the same place: regret. Do the analysis, make the
          decision, and execute with conviction.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Can I combine ETA with a startup approach, for example, acquiring a business and then innovating its product?</h3>
        <p>
          Yes, and this hybrid approach is increasingly common among search fund operators. The{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">Stanford 2024 Search Fund Study</Link>{" "}
          documents multiple cases where searchers acquired traditional service businesses and then layered technology-enabled improvements, mobile workforce management, proprietary software tools, e-commerce channels, that transformed the company&rsquo;s competitive position and exit multiple. The key advantage of this approach over a pure startup is that you innovate on top of existing cash flows, customers, and a proven business model, dramatically reducing the binary risk of a startup. EndoChoice, one of the most famous search fund success stories, followed exactly this pattern: acquiring a small medical device company and then investing aggressively in R&amp;D and product development to build a differentiated competitor in the endoscopy market.
        </p>

        <h3 className={h3Class}>Is an MBA necessary for ETA, or can I pursue it without one?</h3>
        <p>
          An MBA is not strictly necessary, but it provides significant advantages in the traditional search fund path. According to Stanford and Harvard research, roughly 70% of active searchers hold an MBA, with graduates from Stanford, Harvard, INSEAD, IESE, Wharton, and Booth disproportionately represented. The MBA advantage lies primarily in investor access (the most active search fund investors recruit through these programs), structured learning (dedicated ETA coursework, financial modeling, and negotiation training), and peer networks. However, approximately 30% of successful searchers do not have an MBA. Non-MBA searchers succeed by using deep industry experience, strong operating backgrounds, and{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">self-funded search structures</Link>{" "}
          that do not require institutional investor backing. The trade-off is clear: no $200K+ MBA investment and no two-year delay, but harder access to traditional investors and fewer built-in peers.
        </p>

        <h3 className={h3Class}>What are the realistic income expectations for each path in the first five years?</h3>
        <p>
          Income trajectories differ dramatically across the three paths. Startup founders typically earn $0-$80K in years one through three, with income rising to $100K-$200K only if the company reaches meaningful scale, the 90% who fail may earn nothing. Franchise owner-operators reach operational breakeven within 12-24 months, with annual income typically ranging from $60K to $150K for a single unit. ETA offers the most immediate income: search fund CEOs earn $150K-$250K in base salary from day one post-acquisition, with total compensation growing as the company grows. More importantly, the equity component of ETA distinguishes it from both alternatives. A searcher holding 25% equity in a company that grows from $10M to $20M in enterprise value over five years would realize approximately $2.5M in personal wealth at exit, an outcome that is realistic and well-documented in the Stanford data.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>
            <a href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Stanford Graduate School of Business, 2024 Search Fund Study
            </a>
          </li>
          <li>
            <a href="https://www.cbinsights.com/research/startup-failure-reasons-top/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              CB Insights, Top Reasons Startups Fail (Research Report)
            </a>
          </li>
          <li>
            <a href="https://www.franchise.org/franchising-economic-outlook/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              International Franchise Association, Franchise Business Economic Outlook
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
