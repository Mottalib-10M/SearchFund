import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearcherCompensationArticle() {
  return (
    <article>
      <h1 className={h1Class}>Searcher Compensation: Salary, Equity &amp; Economics</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Understanding searcher compensation is essential whether you are
          launching a search fund, evaluating the ETA path against other career
          options, or investing in a searcher. The economics are unlike any
          other entrepreneurial model — combining a modest salary during the
          search phase with significant equity upside upon a successful
          acquisition and exit. This guide breaks down every component of
          searcher compensation, from search-phase salary through lifetime
          wealth creation, with specific numbers drawn from Stanford GSB data
          and industry benchmarks.
        </p>

        <h2 className={h2Class}>Search-phase compensation</h2>

        <h3 className={h3Class}>Salary during the search</h3>
        <p>
          In a traditional search fund, the searcher&apos;s salary during the
          search phase is funded by investor capital. The typical range is
          $100,000 to $140,000 per year, with most searchers falling around
          $110,000-$120,000. This salary is designed to cover reasonable living
          expenses while allowing the searcher to focus full-time on deal
          sourcing and evaluation. It is not designed to match pre-search
          compensation — most searchers take a 30-50% pay cut from their prior
          roles in consulting, investment banking, or private equity.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical range:</strong> $100K-$140K annually, depending on
            geography and cost of living. Bay Area and New York searchers tend
            toward the higher end; searchers in lower-cost markets trend lower.
          </li>
          <li>
            <strong>Duration:</strong> The search phase typically lasts 18-24
            months. Total search capital raised ($400K-$600K) must cover salary
            plus all search expenses (travel, CRM, legal, accounting, data
            subscriptions) for this period.
          </li>
          <li>
            <strong>Benefits:</strong> Search-phase benefits are minimal. Most
            searchers self-fund health insurance through COBRA or ACA marketplace
            plans. There is no 401(k), no bonus, and no equity vesting during
            the search.
          </li>
          <li>
            <strong>Expense reimbursement:</strong> Travel to evaluate potential
            acquisitions, conference attendance, and deal-related expenses are
            typically reimbursed from the search fund, separate from salary.
          </li>
        </ul>

        <h3 className={h3Class}>The 24-month runway</h3>
        <p>
          Search funds are designed to provide approximately 24 months of runway.
          If a searcher has not identified and closed an acquisition within this
          window, the fund is typically wound down and remaining capital returned
          to investors. Approximately 37% of searchers do not complete an
          acquisition, according to Stanford data. For these searchers, the
          economic outcome is limited to the salary earned during the search — a
          meaningful opportunity cost given the career risk involved.
        </p>

        <h2 className={h2Class}>Post-acquisition CEO compensation</h2>

        <h3 className={h3Class}>Base salary as CEO</h3>
        <p>
          Once the acquisition closes and the searcher becomes CEO of the
          acquired company, compensation resets to market rates for small
          company CEOs. The typical range is $180,000 to $300,000, depending on
          the size of the acquired company, its geographic market, and the
          competitive landscape for executive talent.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>$1M-$3M EBITDA companies:</strong> $180K-$220K base salary
            is typical. At this size, the CEO is also the chief salesperson,
            head of HR, and often the CFO.
          </li>
          <li>
            <strong>$3M-$5M EBITDA companies:</strong> $220K-$270K base salary.
            The company can usually afford a small executive team, allowing the
            CEO to focus on strategy and key relationships.
          </li>
          <li>
            <strong>$5M+ EBITDA companies:</strong> $250K-$300K+ base salary.
            Companies at this scale have more professional management teams and
            compensation benchmarks closer to lower middle-market PE portfolio
            companies.
          </li>
        </ul>

        <h3 className={h3Class}>Annual bonus</h3>
        <p>
          Most search fund CEOs have a performance-based bonus tied to EBITDA
          growth, revenue targets, or other operational metrics. Typical bonus
          structures range from 20-50% of base salary at target, with the
          specific metrics and thresholds approved by the board of directors.
          Bonus structures should be designed to incentivize profitable growth
          and operational improvement without encouraging excessive risk-taking.
        </p>

        <h2 className={h2Class}>Equity structure: the three tranches</h2>
        <p>
          The equity component is where the real wealth creation occurs in a
          search fund. Searcher equity is typically structured in three
          tranches, each with different vesting conditions. In a traditional
          search fund, total searcher equity ranges from 20-30% of the
          fully diluted shares of the acquired company.
        </p>

        <h3 className={h3Class}>First tranche: acquisition equity (approximately 1/3 of total)</h3>
        <p>
          The first tranche vests immediately upon the closing of an
          acquisition. It rewards the searcher for successfully identifying,
          negotiating, and closing a deal. In a typical structure, this
          represents approximately one-third of the total equity grant — roughly
          8-10% of the company on a fully diluted basis. This tranche
          compensates the searcher for the risk and effort of the search phase
          and aligns their interests with investors from day one.
        </p>

        <h3 className={h3Class}>Second tranche: time-based vesting (approximately 1/3 of total)</h3>
        <p>
          The second tranche vests over time, typically on a straight-line basis
          over 3-4 years following the acquisition. This structure ensures the
          searcher remains committed to operating the business through the
          critical early years. Vesting is usually monthly or quarterly, with a
          one-year cliff. If the searcher leaves or is terminated for cause
          before full vesting, unvested shares are forfeited. This tranche
          represents approximately 8-10% of the company and creates a strong
          retention incentive.
        </p>

        <h3 className={h3Class}>Third tranche: performance-based vesting (approximately 1/3 of total)</h3>
        <p>
          The third tranche vests only if the searcher achieves specific
          performance thresholds, typically tied to investor returns. The most
          common structure ties vesting to IRR hurdles — for example, full
          vesting of the performance tranche requires achieving a 25-30% IRR
          for investors, with partial vesting at lower thresholds (e.g., 50%
          vesting at 20% IRR). Some structures use MOIC (multiple on invested
          capital) targets instead of or in addition to IRR hurdles. This
          tranche represents approximately 8-10% of the company and directly
          aligns the searcher&apos;s equity upside with investor returns.
        </p>

        <h2 className={h2Class}>Lifetime economics: the wealth creation math</h2>

        <h3 className={h3Class}>Traditional search fund example</h3>
        <p>
          Consider a searcher who acquires a company for $10M enterprise value,
          with a capital structure of $4M equity and $6M debt. The searcher
          receives 25% total equity across three tranches. Over a 5-year hold
          period, the searcher grows EBITDA from $2M to $3.5M and exits at
          5.5x EBITDA ($19.25M). After repaying $4M in remaining debt, equity
          value is approximately $15.25M. The searcher&apos;s 25% share is worth
          approximately $3.8M. Add in 5 years of CEO compensation ($1.2M-$1.5M
          total), and the searcher&apos;s total economic outcome is $5.0M-$5.3M.
        </p>
        <p>
          According to the 2024 Stanford Search Fund Study, the average
          successful traditional searcher generates approximately $6.4M in
          lifetime economic value (equity gains plus salary). This figure
          includes both the search-phase salary and post-acquisition compensation.
          The median is lower — approximately $3.5M-$4.5M — reflecting the
          right-skewed distribution where a few exceptional outcomes pull the
          average up significantly.
        </p>

        <h3 className={h3Class}>The distribution of outcomes</h3>
        <p>
          It is important to understand that search fund economics are not
          evenly distributed. Approximately 37% of searchers never acquire a
          company and earn only their search-phase salary ($200K-$280K total
          over the search period). Of those who do acquire, roughly 30% achieve
          returns below the investors&apos; hurdle rate, meaning the performance
          tranche does not fully vest. The top quartile of acquisitions generate
          the vast majority of total returns, with some producing $10M-$30M+
          in searcher equity value.
        </p>

        <h2 className={h2Class}>Self-funded search economics</h2>
        <p>
          Self-funded searchers forgo institutional search capital in exchange
          for significantly higher equity ownership in the acquired company.
          The trade-off is real and substantial.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Equity ownership:</strong> Self-funded searchers typically
            retain 50-80% of the equity, compared to 20-30% in a traditional
            search fund. The exact percentage depends on how much outside
            equity is needed for the acquisition.
          </li>
          <li>
            <strong>Search-phase income:</strong> Zero. Self-funded searchers
            finance their living expenses from personal savings, a working
            spouse&apos;s income, or part-time consulting. This personal
            financial risk is the price of higher equity ownership.
          </li>
          <li>
            <strong>Acquisition financing:</strong> Self-funded searchers
            typically use more SBA debt (up to $5M through SBA 7(a) loans) and
            seller financing, reducing the need for outside equity. This higher
            leverage amplifies returns on success but increases financial risk.
          </li>
          <li>
            <strong>Lifetime economics example:</strong> A self-funded searcher
            who acquires a $4M company with 70% equity ownership, grows it to
            $8M in value over 5 years, and exits with $5.6M in equity value
            ($8M x 70%). Even after accounting for $0 search-phase income, the
            total economic outcome can significantly exceed the traditional
            model — but the risk-adjusted return must account for the
            probability of not completing an acquisition.
          </li>
        </ul>

        <h2 className={h2Class}>Tax planning for searcher compensation</h2>

        <h3 className={h3Class}>Qualified Small Business Stock (QSBS)</h3>
        <p>
          Section 1202 of the Internal Revenue Code allows holders of Qualified
          Small Business Stock to exclude up to 100% of capital gains from
          federal income tax, up to the greater of $10M or 10x the adjusted
          basis of the stock. To qualify, the company must be a C-corporation
          with gross assets under $50M at the time the stock is issued, and the
          stock must be held for at least 5 years. For a searcher whose equity
          is worth $5M+ at exit, QSBS exclusion can save $1M-$2M in federal
          taxes. Structuring the acquisition entity as a C-corp from the outset
          is critical to preserving this benefit.
        </p>

        <h3 className={h3Class}>83(b) elections</h3>
        <p>
          When a searcher receives equity that is subject to vesting, the
          default tax treatment is to recognize ordinary income as each tranche
          vests, based on the fair market value at the time of vesting. An 83(b)
          election allows the searcher to recognize income at the time of grant
          rather than at vesting, based on the fair market value at grant. If
          the stock is worth relatively little at grant (which is typically the
          case at the time of acquisition) and appreciates significantly over
          the vesting period, an 83(b) election converts what would be ordinary
          income into long-term capital gains. The election must be filed with
          the IRS within 30 days of the equity grant — missing this deadline is
          irrevocable.
        </p>

        <h3 className={h3Class}>Long-term capital gains treatment</h3>
        <p>
          Equity held for more than one year qualifies for long-term capital
          gains treatment at federal rates of 0%, 15%, or 20% (plus 3.8% net
          investment income tax for high earners), compared to ordinary income
          rates of up to 37%. Given that most search fund hold periods are 5-7
          years, the long-term capital gains rate applies to the vast majority
          of searcher equity gains. Combined with QSBS exclusion, the effective
          tax rate on searcher equity can be reduced to near zero in the best
          case.
        </p>

        <h2 className={h2Class}>Compensation negotiation with the board</h2>
        <p>
          Post-acquisition CEO compensation is approved by the board of
          directors, which typically includes investor representatives. Key
          negotiation points include base salary benchmarking (use relevant comp
          data from similar-sized companies in the same industry and geography),
          bonus structure (ensure targets are achievable and aligned with
          value creation), equity terms (vesting schedules, acceleration on
          change of control, good leaver/bad leaver provisions), and severance
          protections (typically 6-12 months of base salary if terminated
          without cause).
        </p>
        <p>
          The best approach is to anchor comp discussions to market data and
          third-party benchmarks rather than personal financial needs. Investors
          want the CEO to be fairly compensated and focused on building value,
          not distracted by financial stress. At the same time, excessive
          compensation at a small company signals misaligned priorities and can
          erode board trust.
        </p>

        <h2 className={h2Class}>Benefits and perks</h2>
        <ul className={ulClass}>
          <li>
            <strong>Health insurance:</strong> The acquired company typically
            provides health insurance for the CEO and family, either through
            the company&apos;s group plan or a reimbursement arrangement.
          </li>
          <li>
            <strong>Retirement plans:</strong> Most acquired companies have or
            can establish a 401(k) plan with employer matching. As a
            highly-compensated employee, the CEO&apos;s contributions may be
            limited by nondiscrimination testing, but employer contributions
            and profit-sharing can be meaningful.
          </li>
          <li>
            <strong>Vehicle and travel:</strong> If the business requires
            regular travel or client visits, a company vehicle or car allowance
            ($800-$1,200/month) is common.
          </li>
          <li>
            <strong>Professional development:</strong> Continuing education,
            executive coaching, and conference attendance are typically covered
            by the company and are valuable investments in the CEO&apos;s
            effectiveness.
          </li>
        </ul>

        <h2 className={h2Class}>How compensation evolves through the hold period</h2>
        <p>
          Searcher compensation is not static. In Year 1, the focus is on
          learning the business and stabilizing operations — compensation
          is typically at the lower end of the range with modest bonus
          opportunity. By Years 2-3, as the CEO demonstrates results and the
          company grows, base salary increases of 5-10% annually are common,
          and bonus targets may expand. In Years 4-5, as the company approaches
          exit readiness, the CEO&apos;s total compensation (salary + bonus)
          may be 40-60% higher than at acquisition. The time-based equity
          tranche should be fully vested by Year 3-4, and the performance
          tranche vesting becomes increasingly visible as exit approaches.
        </p>

        <h2 className={h2Class}>The bottom line</h2>
        <p>
          Searcher compensation is a carefully balanced system that rewards risk
          and performance. The search phase requires accepting below-market
          salary and career uncertainty. The post-acquisition phase offers
          competitive CEO compensation plus significant equity upside. For
          successful searchers who acquire well, operate effectively, and exit
          at attractive multiples, the lifetime economic outcome of $3.5M-$10M+
          compares favorably to almost any other career path available to
          MBA-level professionals. The key is understanding the full picture —
          including the 37% probability of not acquiring — and making an
          informed decision about whether the risk-reward profile fits your
          personal financial situation and career goals.
        </p>
      </div>
    </article>
  );
}
