import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ExitStrategiesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Exit Strategies for Search Fund CEOs</h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          The exit is where search fund returns are realized. After years of
          searching, acquiring, and operating a business, how you structure and
          execute your exit determines the ultimate return for you and your
          investors. According to Stanford&apos;s 2024 search fund study, the
          median hold period is approximately five years, and the best exits
          achieve 5&ndash;10x return on invested capital. This guide covers
          every exit path available to a search fund CEO, how to prepare, and
          how to maximize value.
        </p>

        <h2 className={h2Class}>Strategic sale: the most common exit</h2>
        <p>
          A strategic sale &mdash; selling to a larger company in the same or
          adjacent industry &mdash; accounts for approximately 60&ndash;70% of
          successful search fund exits. Strategic buyers pay premiums because
          they can extract synergies: eliminating redundant overhead, cross-
          selling to their existing customer base, or acquiring capabilities
          they lack.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical multiples:</strong> 6&ndash;10x EBITDA for well-
            positioned companies, compared to the 4&ndash;6x entry multiple
            typical of search fund acquisitions.
          </li>
          <li>
            <strong>Synergy premium:</strong> strategic buyers may pay 15&ndash;
            30% above financial buyer valuations because they can model cost
            savings and revenue synergies.
          </li>
          <li>
            <strong>Process:</strong> typically runs through an investment
            banker who creates a competitive auction among three to eight
            qualified strategic buyers.
          </li>
          <li>
            <strong>Timeline:</strong> six to nine months from banker
            engagement to close, including three to four months of marketing
            and two to three months of due diligence and negotiation.
          </li>
          <li>
            <strong>Considerations:</strong> the buyer often wants the CEO to
            stay for 12&ndash;24 months post-close. This can add significant
            value through an earnout or retention payment.
          </li>
        </ul>

        <h3 className={h3Class}>Identifying strategic buyers early</h3>
        <p>
          The best search fund CEOs start building relationships with potential
          strategic acquirers years before they plan to exit. Attend industry
          conferences, join trade associations, and monitor competitors and
          adjacent players. When a large competitor approaches you about
          partnering, that is a signal they may be a future buyer. Build the
          relationship without showing your hand.
        </p>

        <h2 className={h2Class}>Private equity sale</h2>
        <p>
          Selling to a private equity fund is the second most common exit path,
          particularly attractive for businesses that have reached $3M&ndash;$8M
          EBITDA during the hold period. PE buyers are disciplined,
          process-driven, and typically offer clean transactions with certainty
          of close.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical multiples:</strong> 5&ndash;8x EBITDA, generally
            lower than strategic buyers unless the business is in a hot sector
            or has exceptional growth characteristics.
          </li>
          <li>
            <strong>The &quot;second bite of the apple&quot;:</strong> PE buyers
            often ask the CEO to roll 15&ndash;30% of their equity into the new
            entity. This creates a second wealth-creation opportunity: your
            rolled equity benefits from the PE firm&apos;s leverage and
            operational playbook. In many cases, the second bite is worth as
            much as or more than the first.
          </li>
          <li>
            <strong>Management continuity:</strong> PE buyers almost always want
            the existing CEO to stay. This is attractive for search fund CEOs
            who want to continue operating with additional resources and
            support.
          </li>
          <li>
            <strong>Due diligence depth:</strong> PE buyers conduct extremely
            thorough due diligence, often taking three to four months. They
            will hire their own QoE provider and may bring in operational
            consultants.
          </li>
        </ul>

        <h2 className={h2Class}>Management buyout (MBO)</h2>
        <p>
          In an MBO, the existing management team (excluding the search fund
          CEO) purchases the business, sometimes with financial backing from a
          new lender or investor. This path is less common in search fund exits
          but can work well when the CEO has built a strong management team and
          wants a clean exit.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical multiples:</strong> 3.5&ndash;5.5x EBITDA, generally
            below strategic or PE valuations because the buyer has limited
            capital and negotiating leverage.
          </li>
          <li>
            <strong>Structure:</strong> often involves significant seller
            financing (30&ndash;50% of the purchase price) because the
            management team lacks equity to contribute.
          </li>
          <li>
            <strong>Advantages:</strong> fast execution (two to three months),
            minimal business disruption, preservation of culture and
            employment.
          </li>
          <li>
            <strong>Risks:</strong> lower price, seller financing exposure, and
            potential for the management team to struggle with the financial
            burden.
          </li>
        </ul>

        <h2 className={h2Class}>Dividend recapitalization</h2>
        <p>
          A dividend recap involves refinancing the company&apos;s debt at
          higher levels and distributing the excess cash to shareholders. This
          is not a full exit but can return a significant portion of invested
          capital while the CEO continues to operate the business.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical leverage:</strong> 3&ndash;4x EBITDA total debt,
            depending on the business&apos;s cash flow stability and lender
            appetite.
          </li>
          <li>
            <strong>When it works:</strong> businesses with stable, predictable
            cash flow, low capex requirements, and strong debt service
            coverage (above 1.5x).
          </li>
          <li>
            <strong>Investor impact:</strong> a dividend recap can return
            50&ndash;100% of invested capital while investors retain their
            equity positions. This de-risks the investment and resets the
            return clock.
          </li>
          <li>
            <strong>Timing:</strong> typically done two to four years into the
            hold period, often after the business has been stabilized and
            delevered from the initial acquisition financing.
          </li>
          <li>
            <strong>Caution:</strong> over-leveraging for a dividend recap can
            leave the business vulnerable to downturns. Conservative search
            fund investors may push back on aggressive recaps.
          </li>
        </ul>

        <h2 className={h2Class}>IPO: rare but not impossible</h2>
        <p>
          An initial public offering is the rarest exit path for search fund
          companies, representing fewer than 5% of exits. The public markets
          generally require $50M+ in revenue and a compelling growth story.
          However, for the exceptional search fund acquisition that scales
          dramatically through organic growth and a <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build</Link> strategy, an IPO can generate
          extraordinary returns.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Requirements:</strong> typically $50M+ revenue, $10M+
            EBITDA, strong growth trajectory, audited financials for three
            years, and a credible story for public investors.
          </li>
          <li>
            <strong>Costs:</strong> $1M&ndash;$3M in legal, accounting, and
            underwriting fees, plus ongoing public company costs of $1M&ndash;
            $2M annually.
          </li>
          <li>
            <strong>Timeline:</strong> 12&ndash;18 months of preparation before
            filing, then three to six months to complete the offering.
          </li>
          <li>
            <strong>Liquidity constraints:</strong> founders and early investors
            are typically locked up for 180 days post-IPO and may face
            additional contractual restrictions.
          </li>
        </ul>

        <h2 className={h2Class}>Exit timeline planning</h2>
        <p>
          The best exits are planned 18&ndash;24 months in advance. Rushing an
          exit process almost always leaves money on the table.
        </p>

        <h3 className={h3Class}>18&ndash;24 months before target exit</h3>
        <ul className={ulClass}>
          <li>Align with your <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board</Link> and investors on timing and expectations.</li>
          <li>
            Begin addressing any business weaknesses that will reduce
            valuation: customer concentration, key person dependency,
            incomplete financials.
          </li>
          <li>
            Invest in growth initiatives that will show up in trailing twelve-
            month financials by the time you go to market.
          </li>
          <li>Start researching and interviewing investment bankers.</li>
        </ul>

        <h3 className={h3Class}>12&ndash;18 months before target exit</h3>
        <ul className={ulClass}>
          <li>Engage an investment banker and begin preparation work.</li>
          <li>
            Hire a QoE provider to do a sell-side QoE, identifying and
            resolving issues before buyers find them.
          </li>
          <li>
            Ensure your financials are clean, audited (or reviewed), and tell a
            compelling story.
          </li>
          <li>
            Build a management team that can operate without you. Buyers pay
            more when the CEO is replaceable.
          </li>
        </ul>

        <h3 className={h3Class}>6&ndash;12 months before target exit</h3>
        <ul className={ulClass}>
          <li>Launch the formal sale process.</li>
          <li>
            Prepare the confidential information memorandum (CIM) with your
            banker.
          </li>
          <li>
            Identify and approach potential buyers, managing the process to
            create competitive tension.
          </li>
          <li>
            Maintain business performance &mdash; nothing kills a deal faster
            than declining results during the sale process.
          </li>
        </ul>

        <h2 className={h2Class}>Exit readiness checklist</h2>
        <p>
          Before launching any exit process, ensure your business meets these
          criteria. Each gap represents a potential discount to your
          valuation.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Clean financials:</strong> three years of audited or reviewed
            financials, with clearly documented adjustments and a
            supportable EBITDA narrative.
          </li>
          <li>
            <strong>Documented processes:</strong> SOPs, employee handbooks,
            documented workflows. Buyers want a business that runs on systems,
            not on the CEO&apos;s personal knowledge.
          </li>
          <li>
            <strong>Management depth:</strong> a capable management team that
            can run the business without the CEO for 90 days. This is the
            ultimate test of organizational maturity.
          </li>
          <li>
            <strong>Reduced owner dependence:</strong> no single customer
            relationship, vendor relationship, or technical capability should
            depend exclusively on the CEO.
          </li>
          <li>
            <strong>Diversified revenue:</strong> no single customer above
            15&ndash;20% of revenue. A diversified customer base commands a
            premium multiple.
          </li>
          <li>
            <strong>Growth trajectory:</strong> buyers pay the highest multiples
            for businesses that are growing. Even 5&ndash;10% annual revenue
            growth significantly improves valuation.
          </li>
          <li>
            <strong>Recurring revenue:</strong> the higher the percentage of
            recurring or contractual revenue, the higher the multiple.
            Businesses with 70%+ recurring revenue routinely trade at 1&ndash;2x
            higher multiples than project-based businesses.
          </li>
        </ul>

        <h2 className={h2Class}>Maximizing valuation at exit</h2>
        <p>
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">Valuation</Link> is driven by three factors: the level of EBITDA, the
          quality and trajectory of earnings, and the competitive dynamics of
          the sale process.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Growth trajectory matters most.</strong> A $3M EBITDA
            business growing at 15% per year will trade at a materially higher
            multiple than a $4M EBITDA business that is flat. Buyers are
            buying the future, not the past.
          </li>
          <li>
            <strong>Margin expansion signals operational excellence.</strong>{" "}
            If you have improved margins from 15% to 22% during your hold
            period, that demonstrates pricing power, operational discipline,
            and scalability.
          </li>
          <li>
            <strong>Customer diversification reduces risk premium.</strong>{" "}
            Reducing your top customer from 25% to 12% of revenue can add
            0.5&ndash;1x to your multiple.
          </li>
          <li>
            <strong>Competitive processes yield higher prices.</strong> An
            investment banker who creates genuine competition among three to
            five bidders will generate 15&ndash;25% higher valuations than a
            bilateral negotiation.
          </li>
        </ul>

        <h2 className={h2Class}>Selecting an investment banker</h2>
        <p>
          For most search fund exits, you will want a lower middle-market
          investment bank with experience in your industry. Our guide to <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">working with advisors</Link> covers how to evaluate and engage professional service providers. Fees typically
          follow a modified Lehman formula, with a retainer of $25K&ndash;$75K
          and a success fee of 2&ndash;5% of enterprise value. For a $20M exit,
          total banking fees might be $500K&ndash;$800K.
        </p>
        <ul className={ulClass}>
          <li>
            Interview three to five banks and ask for references from
            completed transactions in your size range and industry.
          </li>
          <li>
            Evaluate their buyer relationships: who are the specific buyers
            they would approach for your business?
          </li>
          <li>
            Understand their process and timeline. A good banker should be
            able to articulate a clear week-by-week plan.
          </li>
          <li>
            Negotiate the retainer, success fee, and tail period (the period
            after the engagement ends during which the banker earns a fee if
            you sell to a buyer they introduced).
          </li>
        </ul>

        <h2 className={h2Class}>Tax planning for exit</h2>
        <p>
          Exit <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax planning</Link> should begin at least 12 months before the sale.
          The difference between ordinary income and long-term capital gains
          treatment can represent millions of dollars.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Asset vs. stock sale:</strong> buyers prefer asset purchases
            for the tax step-up. Sellers prefer stock sales for capital gains
            treatment. The structure significantly affects after-tax proceeds.
          </li>
          <li>
            <strong>QSBS exclusion:</strong> if your acquisition entity is a
            C-Corp and the stock qualifies under Section 1202, you may be able
            to exclude up to $10M (or 10x your cost basis) from capital gains
            tax.
          </li>
          <li>
            <strong>Installment sales:</strong> spreading the gain over
            multiple years can reduce your effective tax rate by keeping you in
            lower brackets.
          </li>
          <li>
            <strong>Opportunity Zone reinvestment:</strong> rolling gains into
            Qualified Opportunity Zone funds can defer and partially reduce
            capital gains tax.
          </li>
          <li>
            <strong>State tax planning:</strong> if you are in a high-tax state,
            consider whether relocation or entity restructuring before the
            sale can reduce state income tax exposure.
          </li>
        </ul>

        <h2 className={h2Class}>Typical multiples: entry vs. exit</h2>
        <p>
          The multiple arbitrage between entry and exit is one of the core
          drivers of search fund returns. According to industry data, the
          typical search fund acquires a business at 4&ndash;6x EBITDA and
          exits at 6&ndash;10x EBITDA, creating 2&ndash;4x of multiple
          expansion in addition to any EBITDA growth during the hold period.
        </p>
        <p>
          For example, a business acquired at $2M EBITDA and 5x ($10M
          enterprise value) that grows to $4M EBITDA and exits at 7.5x ($30M
          enterprise value) delivers a 3x return on enterprise value. After
          accounting for leverage and equity structure, investor returns can
          reach 5&ndash;10x or more.
        </p>

        <p>
          The most successful search fund exits share common traits: they are
          planned well in advance, supported by clean financials and strong
          management teams, and executed through competitive processes that
          maximize buyer interest. Whether you pursue a strategic sale, PE
          exit, or alternative path, the key is to start preparing early and
          align your board on the strategy before launching the process.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the average hold period and return multiple for search fund exits?</h3>
        <p>
          According to Stanford GSB's 2024 Search Fund Study, the median hold period for search fund acquisitions is approximately 5 years, with a range of 3-8 years. The median return on invested capital (ROIC) for successful exits is 3.0-5.0x, with top-quartile exits achieving 7-10x or higher. The aggregate IRR across all search fund investments (including failures) is approximately 33%, making search funds one of the highest-returning asset classes in private equity. However, these averages mask significant variance: roughly 25-30% of search funds do not complete an acquisition, and another 20-25% of acquired companies underperform expectations. The exits that drive aggregate returns tend to be businesses that achieved both EBITDA growth and{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">multiple expansion</Link> during the hold period.
        </p>

        <h3 className={h3Class}>When should a search fund CEO start planning their exit?</h3>
        <p>
          Exit planning should begin 18-24 months before your target exit date. At the 24-month mark, align with your board and investors on timing and value expectations, then begin addressing any business weaknesses that could reduce valuation -- customer concentration above 15-20%, key-person dependencies, or incomplete financial records. At 12-18 months, engage an investment banker, commission a sell-side{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">Quality of Earnings</Link> report, and ensure your management team can operate the business without you for 90 days. Rushing an exit typically leaves 15-25% of value on the table compared to a well-planned competitive process.
        </p>

        <h3 className={h3Class}>How much does it cost to hire an investment banker for a search fund exit?</h3>
        <p>
          For lower middle-market exits ($10-50M enterprise value), investment banking fees typically include a monthly retainer of $25,000-$75,000 for 4-6 months and a success fee of 2-5% of enterprise value. Using a modified Lehman formula, a $20M exit might generate total banking fees of $500,000-$800,000. While expensive, a well-run competitive process typically generates 15-25% higher valuations than a bilateral negotiation, more than justifying the cost. Interview 3-5 banks, focusing on their specific buyer relationships in your industry, recent comparable transaction experience, and references from completed deals in your size range. The right banker can mean the difference between a 5.5x and a 7.5x exit multiple.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>2024 Search Fund Study: Selected Observations</em> (2024)</li>
          <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
          <li>Pepperdine Graziadio Business School, <em>Private Capital Markets Report</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
