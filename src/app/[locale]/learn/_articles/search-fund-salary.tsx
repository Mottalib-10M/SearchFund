import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundSalaryArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Search Fund Salary: How Much Do Searchers Earn?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund compensation is structured unlike any other entrepreneurial
          path. During the search phase, you earn a modest salary funded by
          investors &mdash; typically $100,000 to $150,000 per year &mdash; while
          hunting full-time for an acquisition target. After closing, your pay
          resets to a CEO-level base of $150,000 to $250,000 or more. But the
          real wealth creation comes from equity: successful searchers who
          navigate both phases walk away with $3.5 million to $10 million or more
          in total economic value over a five-to-seven-year cycle, according to
          Stanford GSB data. This guide breaks down every layer of search fund
          compensation so you can model the true risk-reward trade-off before
          committing to the{" "}
          <Link href="/learn/is-eta-right-for-you" className="text-apple-accent hover:underline">
            entrepreneurship-through-acquisition path
          </Link>.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Search-Phase Salary: What Investors Pay You to Hunt</h2>

        <p>
          In a traditional search fund, investor capital covers the searcher&rsquo;s
          salary throughout the deal-sourcing period. The 2024 Stanford Search
          Fund Study &mdash; which tracked 152 searchers who launched in 2022 and
          2023 &mdash; reported a mean search salary of $139,000, up from $120,000
          in the 2020&ndash;2021 cohort. Individual figures ranged from $60,000 to
          $250,000, with the median clustering around $130,000.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Solo searchers:</strong> Average salary of roughly $115,000
            to $140,000 per year, depending on geography and cost of living.
            Searchers in New York, San Francisco, and Boston trend toward the
            higher end; those in lower-cost metros often accept $100,000 to
            $120,000.
          </li>
          <li>
            <strong>Partnered searchers:</strong> Each partner typically draws
            a salary in the same range as solo searchers &mdash; approximately
            $100,000 to $130,000 per person &mdash; because the total search
            capital raised is higher (median of $620,000 for a duo versus
            $425,000 for a solo fund).
          </li>
          <li>
            <strong>Sponsored-model searchers:</strong> When a single
            institutional investor or search fund accelerator backs the search,
            salaries tend to be lower &mdash; $80,000 to $100,000 &mdash;
            because the sponsor provides infrastructure, deal flow, and
            mentorship that reduce overall search expenses.
          </li>
        </ul>

        <p>
          The salary is deliberately set below what most searchers earned before
          business school. Former management consultants, investment bankers, and
          PE associates typically take a 30% to 50% pay cut to enter ETA. That
          gap is intentional: investors want you focused on finding a great
          acquisition, not comfortable enough to extend the timeline
          indefinitely.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>How Search-Phase Salary Is Set</h2>

        <p>
          There is no universal formula, but several factors shape the number
          that ends up in your{" "}
          <Link href="/learn/search-fund-term-sheet" className="text-apple-accent hover:underline">
            term sheet
          </Link>:
        </p>

        <ol className={olClass}>
          <li>
            <strong>Investor expectations.</strong> Search fund investors have
            seen hundreds of deals. Most have informal benchmarks &mdash;
            typically $110,000 to $140,000 &mdash; that they consider reasonable.
            Asking for $200,000 as a first-time searcher will raise eyebrows
            and may signal misaligned priorities.
          </li>
          <li>
            <strong>Cost of living.</strong> Geography matters. Investors
            understand that a searcher based in Manhattan has higher fixed costs
            than one in Nashville. Salary adjustments of 10% to 20% for
            high-cost markets are common and accepted.
          </li>
          <li>
            <strong>Searcher experience.</strong> A searcher with seven years of
            operating experience or a track record of successful transactions may
            negotiate toward $150,000. A fresh MBA with two years of consulting
            will generally land closer to $110,000 to $120,000.
          </li>
          <li>
            <strong>Total budget discipline.</strong> Salary typically represents
            about 40% of total search capital. If you raise $450,000 for a
            24-month search, roughly $240,000 to $280,000 is earmarked for
            salary, with the rest covering travel, due diligence, legal fees,
            CRM subscriptions, and accounting.
          </li>
          <li>
            <strong>Partnership dynamics.</strong> In a two-person search, total
            compensation expense is higher, which means the fund must raise more
            capital. Investors scrutinize duo budgets carefully because higher
            burn rates shorten the effective runway.
          </li>
        </ol>

        <p>
          The negotiation is straightforward: propose a number backed by your
          local cost-of-living data and the overall budget, demonstrate that the
          total raise provides adequate runway for 24 months, and be transparent
          about how you arrived at the figure. Building a credible{" "}
          <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">
            fundraising deck
          </Link>{" "}
          with a detailed budget breakdown reinforces your professionalism and
          makes the salary conversation easier.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Benefits and Expenses Covered During the Search</h2>

        <p>
          Beyond base salary, the search fund covers a defined set of expenses.
          Understanding what is &mdash; and is not &mdash; included prevents
          surprises during the most financially lean period of the ETA journey.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Health insurance:</strong> Most searchers self-fund health
            coverage through COBRA (if transitioning from a prior employer) or
            ACA marketplace plans. Some search funds reimburse premiums as a
            line-item expense, but this varies by investor group. Budget $500 to
            $1,500 per month depending on plan type and family status.
          </li>
          <li>
            <strong>Travel and deal sourcing:</strong> Flights, hotels, and
            meals related to visiting acquisition targets, meeting brokers, and
            attending industry conferences are reimbursed from search capital.
            Active searchers may spend $1,500 to $3,000 per month on travel.
          </li>
          <li>
            <strong>Professional services:</strong> Legal fees (most search fund
            attorneys defer fees until acquisition close), accounting ($8,000 to
            $18,000 over the search), and due diligence costs for deals that
            reach the LOI stage are covered.
          </li>
          <li>
            <strong>Technology and tools:</strong> CRM software, data
            subscriptions, deal aggregation platforms, and email tools are
            standard reimbursable expenses &mdash; typically $500 to $1,000 per
            month.
          </li>
          <li>
            <strong>What is not covered:</strong> There is no 401(k) match, no
            annual bonus, no equity vesting during the search phase, no gym
            membership or lifestyle perks. The search phase is lean by design.
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Post-Acquisition CEO Compensation</h2>

        <p>
          Once you close an acquisition and step into the CEO role, compensation
          resets to market rates for small-company chief executives. The 2024
          Stanford study reported a median post-acquisition CEO salary of
          $190,000. However, the range is wide and depends on the size and
          profitability of the acquired business.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>$1M&ndash;$3M EBITDA companies:</strong> Base salary of
            $150,000 to $220,000. At this scale, the CEO wears many hats &mdash;
            head of sales, chief financial decision-maker, and primary people
            manager. Board members expect the salary to reflect the company&rsquo;s
            cash-flow reality.
          </li>
          <li>
            <strong>$3M&ndash;$5M EBITDA companies:</strong> Base salary of
            $200,000 to $270,000. The business can support a small executive
            team, freeing the CEO to focus on strategy, key customer
            relationships, and growth initiatives.
          </li>
          <li>
            <strong>$5M+ EBITDA companies:</strong> Base salary of $250,000 to
            $350,000 or more. Compensation benchmarks at this level approach
            those of lower-middle-market PE portfolio company CEOs.
          </li>
        </ul>

        <p>
          CEO salaries are approved by the board of directors, which typically
          includes investor representatives. Benchmarking against third-party
          compensation surveys for similarly sized companies in the same industry
          and region is the best way to anchor the discussion. Investors want the
          CEO fairly compensated &mdash; not distracted by financial stress, but
          not overpaid relative to the company&rsquo;s earnings power.
        </p>

        <h3 className={h3Class}>Annual bonuses and performance incentives</h3>
        <p>
          Most search fund CEOs receive a performance-based bonus of 20% to 50%
          of base salary. Common metrics include EBITDA growth, revenue targets,
          customer retention, and specific strategic milestones approved by the
          board. A well-structured bonus plan aligns the CEO&rsquo;s short-term
          incentives with the long-term value creation that drives equity
          returns. Board-approved{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            equity structures
          </Link>{" "}
          ensure that both salary and bonus sit within a coherent total
          compensation framework.
        </p>

        <h3 className={h3Class}>How compensation evolves over the hold period</h3>
        <p>
          CEO pay is not static. In Year 1, the focus is on stabilizing
          operations and learning the business &mdash; compensation sits at the
          lower end of the range. By Years 2 and 3, as the CEO delivers results,
          base salary increases of 5% to 10% annually are common. By Years 4 and
          5, total cash compensation (salary plus bonus) may be 40% to 60%
          higher than at acquisition. This progression reflects both the CEO&rsquo;s
          growing expertise and the company&rsquo;s improved ability to support
          higher executive pay.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Equity: Where the Real Wealth Is Created</h2>

        <p>
          Cash compensation matters, but equity is the engine of search fund
          wealth creation. In a traditional search fund, the searcher earns 20%
          to 30% of the acquired company&rsquo;s fully diluted equity, vested across
          three tranches. The 2024 Stanford study reported average equity value
          of $5.7 million per entrepreneur for searchers who had exited their
          businesses.
        </p>

        <h3 className={h3Class}>The three-tranche structure</h3>
        <ol className={olClass}>
          <li>
            <strong>Acquisition tranche (roughly one-third):</strong> Vests
            immediately upon closing the deal. This tranche &mdash; typically
            8% to 10% of fully diluted equity &mdash; rewards the searcher for
            identifying, negotiating, and completing the acquisition.
          </li>
          <li>
            <strong>Time-based tranche (roughly one-third):</strong> Vests
            monthly or quarterly over three to five years. It ensures the
            searcher remains committed through the critical operating period.
            Most structures include a one-year cliff and accelerated vesting on
            a change of control.
          </li>
          <li>
            <strong>Performance tranche (roughly one-third):</strong> Vests only
            if investor returns hit specific IRR thresholds &mdash; commonly 25%
            to 35% IRR for full vesting, with partial vesting at lower hurdles.
            This tranche directly ties the searcher&rsquo;s upside to investor
            outcomes, creating deep alignment.
          </li>
        </ol>

        <p>
          Investors also receive a &ldquo;step-up&rdquo; on their initial search capital,
          typically converting at 1.5x its original value into equity at
          acquisition. This mechanism compensates investors for the risk of the
          search phase and is a standard feature of the{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            search fund investor economics
          </Link>{" "}
          model.
        </p>

        <h3 className={h3Class}>Modeling equity value at exit</h3>
        <p>
          Consider a traditional searcher who acquires a company at $10 million
          enterprise value ($4 million equity, $6 million debt) and earns 25%
          equity across all three tranches. Over five years, the CEO grows EBITDA
          from $2 million to $3.5 million and exits at 5.5x EBITDA &mdash; a
          $19.25 million enterprise value. After repaying $4 million in remaining
          debt, equity value is approximately $15.25 million. The searcher&rsquo;s
          25% share is worth roughly $3.8 million. Add five years of CEO cash
          compensation ($1.2 million to $1.5 million total), and the searcher&rsquo;s
          total economic outcome lands between $5.0 million and $5.3 million.
        </p>
        <p>
          Top-quartile outcomes are significantly larger. The 2024 Stanford study
          reported an aggregate pre-tax IRR of 35.1% and a 4.5x return on
          invested capital across all search funds that reached a conclusion.
          Exited companies specifically delivered a 42.9% IRR. For a deeper dive
          into historical performance, see our guide to{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            search fund returns and performance data
          </Link>.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Self-Funded Searchers: A Different Compensation Model</h2>

        <p>
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            Self-funded searchers
          </Link>{" "}
          forgo investor capital during the search phase in exchange for
          dramatically higher equity ownership at acquisition. The trade-off
          reshapes every layer of compensation.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Search-phase salary: zero.</strong> Self-funded searchers
            receive no salary during the search. They finance living expenses
            from personal savings, a working spouse&rsquo;s income, part-time
            consulting, or a combination. Personal burn rates of $3,000 to
            $10,000 per month &mdash; depending on location, family situation,
            and lifestyle &mdash; mean total out-of-pocket costs of $50,000 to
            $150,000 over a 6-to-18-month search.
          </li>
          <li>
            <strong>Post-acquisition CEO salary:</strong> Once the deal closes,
            self-funded CEOs typically pay themselves a market-rate salary
            similar to the traditional model &mdash; $150,000 to $250,000
            depending on company size. Because they control the board (or are
            the sole owner), they have more discretion over their own pay, but
            prudent operators keep salaries conservative to preserve cash for
            debt service and reinvestment.
          </li>
          <li>
            <strong>Equity ownership: 50% to 100%.</strong> The defining
            advantage. Without institutional investors taking 70% to 80% of
            the equity, self-funded searchers retain majority or full ownership.
            This means a smaller acquisition &mdash; say a $3 million to $5
            million enterprise value business financed with SBA 7(a) debt and
            seller notes &mdash; can still produce life-changing wealth if
            operated well over five to seven years.
          </li>
          <li>
            <strong>Long-term cash flow:</strong> Self-funded owners who grow a
            business and pay down acquisition debt can eventually generate
            $250,000 to $500,000 per year in combined salary, distributions, and
            debt-free cash flow &mdash; without ever selling the business.
          </li>
        </ul>

        <p>
          The self-funded model suits searchers with a higher risk tolerance,
          personal savings or financial support, and a preference for long-term
          ownership over a five-to-seven-year exit cycle.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Total Compensation Over the Full Lifecycle</h2>

        <p>
          To evaluate search fund compensation accurately, you need to model the
          entire seven-year arc &mdash; from the first day of the search through
          exit.
        </p>

        <h3 className={h3Class}>Traditional search fund: seven-year scenario</h3>
        <ul className={ulClass}>
          <li>Search-phase salary (2 years at $130K): <strong>$260,000</strong></li>
          <li>CEO base salary (5 years, growing from $190K to $275K): <strong>$1,175,000</strong></li>
          <li>Bonuses (5 years at 25% of base): <strong>$295,000</strong></li>
          <li>Equity at exit (25% of $30M equity value): <strong>$7,500,000</strong></li>
          <li><strong>Total seven-year compensation: approximately $9.2 million</strong></li>
          <li><strong>Annualized: approximately $1.3 million per year</strong></li>
        </ul>
        <p>
          This scenario assumes the searcher acquires a company, all three
          equity tranches vest, and the business achieves a strong but not
          exceptional exit. The median outcome is lower &mdash; Stanford data
          suggests $3.5 million to $4.5 million in total economic value for the
          median successful searcher &mdash; because the distribution is
          right-skewed by a handful of exceptional exits.
        </p>

        <h3 className={h3Class}>Self-funded search: seven-year scenario</h3>
        <ul className={ulClass}>
          <li>Search-phase salary (1.5 years): <strong>$0</strong></li>
          <li>Personal search expenses: <strong>($100,000)</strong></li>
          <li>CEO salary (5.5 years at $175K average): <strong>$962,500</strong></li>
          <li>Owner distributions (years 4&ndash;7 after debt paydown): <strong>$400,000</strong></li>
          <li>Equity at exit (75% of $12M equity value): <strong>$9,000,000</strong></li>
          <li><strong>Total seven-year compensation: approximately $10.3 million</strong></li>
          <li><strong>Annualized: approximately $1.5 million per year</strong></li>
        </ul>
        <p>
          The self-funded model can deliver comparable or superior total returns
          on a smaller acquisition because the searcher retains a far larger
          equity share. However, the personal capital at risk ($100,000 to
          $200,000 in search costs plus potential personal guarantees on SBA
          debt) makes the downside scenario materially more painful than in the
          traditional model, where the worst outcome is limited to two years of
          below-market salary.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          What is the typical salary during the search phase?
        </h3>
        <p>
          For traditional search funds in the United States, the typical range is
          $100,000 to $150,000 per year, with the 2024 Stanford study reporting a
          mean of $139,000 for searchers who launched in 2022&ndash;2023. The exact
          figure depends on geography, cost of living, and how much total search
          capital you raise. Self-funded searchers earn no salary during the
          search and finance their living expenses personally.
        </p>

        <h3 className={h3Class}>
          How much do search fund CEOs earn after acquiring a company?
        </h3>
        <p>
          Post-acquisition CEO base salaries typically range from $150,000 to
          $300,000, depending on the EBITDA of the acquired business. The
          Stanford study median was $190,000. Annual bonuses of 20% to 50% of
          base salary are common, bringing total cash compensation to $200,000
          to $400,000 or more by Year 3. Salary grows as the CEO demonstrates
          operational results and the company&rsquo;s earnings improve.
        </p>

        <h3 className={h3Class}>
          How much equity do searchers typically receive?
        </h3>
        <p>
          In a traditional search fund, the searcher earns 20% to 30% of the
          acquired company&rsquo;s fully diluted equity, vested in three tranches
          (acquisition, time-based, and performance-based). Self-funded searchers
          retain 50% to 100% of equity because they do not dilute ownership with
          institutional search investors. For a complete breakdown of equity
          mechanics, see our{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap tables and equity guide
          </Link>.
        </p>

        <h3 className={h3Class}>
          Is the pay cut during the search phase worth it?
        </h3>
        <p>
          For searchers who successfully acquire and operate a business, the
          lifetime economic outcome &mdash; typically $3.5 million to $10 million
          or more over seven years &mdash; far exceeds what most professionals
          earn on a traditional corporate or consulting career path over the same
          period. However, approximately 37% of traditional searchers never
          complete an acquisition, and their economic return is limited to the
          search-phase salary (roughly $250,000 to $300,000 total). The decision
          hinges on your risk tolerance, financial cushion, and conviction in
          your ability to find and close a deal.
        </p>

        <h3 className={h3Class}>
          How does search fund pay compare to private equity or consulting?
        </h3>
        <p>
          In years one and two, search fund compensation is significantly lower
          than PE associate or consulting manager pay ($150,000 to $300,000).
          The gap closes by years three and four as the CEO salary plus bonus
          reaches $250,000 to $400,000. The inflection point comes at exit: a
          successful searcher&rsquo;s equity payout of $3 million to $8 million
          dwarfs the cumulative savings of most PE or consulting professionals
          over the same period. The key difference is that search fund
          compensation is concentrated in a single, high-variance equity event
          rather than distributed as steady annual cash flow.
        </p>

        {/* ---------------------------------------------------------------- */}
        <p>
          Search fund compensation rewards patience, risk tolerance, and
          operational excellence. The search phase requires accepting
          below-market pay and career uncertainty. The post-acquisition phase
          offers competitive CEO salary, meaningful bonuses, and equity upside
          that can produce generational wealth. To evaluate whether this
          risk-reward profile fits your personal situation, explore our guides
          on{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            search fund returns
          </Link>,{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            investor economics
          </Link>, and{" "}
          <Link href="/learn/is-eta-right-for-you" className="text-apple-accent hover:underline">
            whether ETA is the right path for you
          </Link>.
        </p>
      </div>
    </article>
  );
}
