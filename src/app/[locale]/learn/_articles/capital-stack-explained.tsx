import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function CapitalStackExplainedArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        The Capital Stack Explained: From Senior Debt to Equity in SME Acquisitions
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">22 min read</p>

      <div className={bodyClass}>
        <p>
          Every SME acquisition is financed by a stack of capital layers &mdash;
          each with different costs, risk profiles, repayment priorities, and
          control implications. Whether you are structuring a $1.5M SBA-backed
          deal or a $15M traditional search fund acquisition, the way you
          arrange senior debt, subordinated debt, seller notes, preferred
          equity, and common equity determines your returns, your downside
          exposure, and your operating flexibility for years after closing.
          According to Stanford&rsquo;s 2024 Search Fund Study, the median
          search fund acquisition uses roughly 55&ndash;65% debt and
          35&ndash;45% equity &mdash; but these ratios vary dramatically based
          on deal size, business stability, and the acquirer&rsquo;s model.
          This guide breaks down every layer of the capital stack, walks
          through a $5M worked example, compares SBA-backed versus
          conventional structures, and shows exactly how leverage amplifies
          both returns and risk.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>What is the capital stack?</h2>
        <p>
          The capital stack is the complete set of financing sources used to
          fund a business acquisition, organized from the most senior (lowest
          risk, lowest return) to the most junior (highest risk, highest
          return). In a liquidation or sale, capital is repaid in strict
          priority order &mdash; a concept known as the{" "}
          <strong>waterfall</strong>. Senior secured debt gets paid first; common
          equity gets paid last. This priority structure determines the
          risk&ndash;return tradeoff at every layer.
        </p>
        <p>
          For SME acquisitions, the stack typically contains five layers:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Senior secured debt</strong> &mdash; first claim on assets
            and cash flow
          </li>
          <li>
            <strong>Subordinated (mezzanine) debt</strong> &mdash; junior to
            senior debt, senior to equity
          </li>
          <li>
            <strong>Seller financing</strong> &mdash; deferred purchase price
            structured as a loan from the seller
          </li>
          <li>
            <strong>Preferred equity</strong> &mdash; ownership with
            liquidation preference over common equity
          </li>
          <li>
            <strong>Common equity</strong> &mdash; residual ownership that
            absorbs losses first and captures upside last
          </li>
        </ol>
        <p>
          Not every deal uses all five layers. A self-funded SBA acquisition
          may use only three (SBA loan, seller note, buyer equity), while a
          large search fund deal might include all five. The art of deal
          structuring lies in choosing the right combination to minimize cost
          of capital while maintaining adequate cash flow coverage and
          operational flexibility. For a broader look at financing options, see
          our{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing guide
          </Link>.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Layer 1: Senior secured debt</h2>
        <p>
          Senior secured debt occupies the top of the capital stack and
          represents the safest position for lenders. It is collateralized by
          the business&rsquo;s assets (accounts receivable, equipment,
          inventory, and sometimes real estate), and lenders have the first
          claim on all cash flows and liquidation proceeds. Because of this
          protected position, senior debt carries the lowest interest rate in
          the stack &mdash; typically 5&ndash;10% depending on the instrument
          and borrower profile.
        </p>
        <p>
          In SME acquisitions, senior debt usually accounts for 50&ndash;80% of
          the total purchase price. There are three primary sources:
        </p>

        <h3 className={h3Class}>SBA 7(a) loans</h3>
        <p>
          The SBA 7(a) program is the dominant financing tool for U.S. small
          business acquisitions under $5M. The U.S. Small Business
          Administration guarantees 75&ndash;85% of the loan amount to the
          lender, enabling banks to extend credit to first-time buyers who
          lack a long commercial lending history. Key terms include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Maximum amount:</strong> $5M ($5.5M with certain add-ons)
          </li>
          <li>
            <strong>Term:</strong> 10 years for business acquisitions; up to 25
            years if the transaction includes real estate
          </li>
          <li>
            <strong>Interest rate:</strong> Prime + 2.25&ndash;2.75% (variable)
          </li>
          <li>
            <strong>Equity injection:</strong> Minimum 10% of total project
            cost, though many lenders require 15&ndash;20%
          </li>
          <li>
            <strong>Collateral:</strong> All business assets plus a personal
            guarantee from any owner with 20%+ equity
          </li>
          <li>
            <strong>Leverage capacity:</strong> Up to 4x seller&rsquo;s
            discretionary earnings (SDE) for strong businesses
          </li>
        </ul>
        <p>
          The SBA&rsquo;s guarantee structure means buyers can acquire
          profitable businesses with as little as 10% cash down &mdash; a
          leverage ratio that would be impossible with conventional lending.
          For a detailed walkthrough, see our{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA 7(a) loans complete guide
          </Link>.
        </p>

        <h3 className={h3Class}>Conventional bank loans</h3>
        <p>
          For deals above $5M or acquirers who don&rsquo;t meet SBA
          eligibility criteria, conventional commercial bank loans are the
          standard alternative. Terms are tighter than SBA financing:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Amount:</strong> $500K&ndash;$50M+
          </li>
          <li>
            <strong>Term:</strong> 5&ndash;7 years (shorter than SBA)
          </li>
          <li>
            <strong>Interest rate:</strong> SOFR + 2&ndash;4%
          </li>
          <li>
            <strong>Leverage:</strong> Typically 2.5&ndash;3.5x EBITDA
          </li>
          <li>
            <strong>Covenants:</strong> Financial covenants on leverage ratio,
            fixed charge coverage, and sometimes minimum EBITDA levels
          </li>
          <li>
            <strong>Equity requirement:</strong> 25&ndash;40% of purchase price
          </li>
        </ul>
        <p>
          Conventional loans demand a stronger personal balance sheet and
          track record but offer more flexibility on deal size and structure.
          Amortization schedules are typically faster, which means higher
          annual debt service but faster equity buildup.
        </p>

        <h3 className={h3Class}>Private credit and direct lending</h3>
        <p>
          The private credit market reached $1.5 trillion in assets under
          management in 2024 and is projected to exceed $2.6 trillion by 2029,
          according to industry data. For mid-market acquisitions ($5M&ndash;$100M+),
          private credit funds offer senior debt with more flexible covenant
          packages than banks:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Term:</strong> 5&ndash;7 years
          </li>
          <li>
            <strong>Interest rate:</strong> SOFR + 4&ndash;7%
          </li>
          <li>
            <strong>Leverage:</strong> 3&ndash;5x EBITDA
          </li>
          <li>
            <strong>Advantages:</strong> Speed of execution, fewer covenants,
            willingness to underwrite recurring-revenue models aggressively
          </li>
          <li>
            <strong>Best for:</strong> Sponsor-backed search fund
            acquisitions and traditional search funds acquiring businesses
            above the SBA ceiling
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          Layer 2: Subordinated and mezzanine debt
        </h2>
        <p>
          Subordinated debt &mdash; often called mezzanine debt or junior
          capital &mdash; sits below senior debt in the repayment waterfall but
          above equity. Because mezzanine lenders take a junior position
          (typically unsecured or with a second lien), they demand
          substantially higher returns than senior lenders. Industry data
          shows blended all-in returns of 12&ndash;20% through a combination
          of cash interest, payment-in-kind (PIK) interest, and equity
          warrants.
        </p>
        <p>
          Mezzanine financing becomes relevant when the senior lender hits
          its lending limit &mdash; usually 60&ndash;80% of purchase price
          &mdash; but the buyer needs additional leverage beyond what equity
          alone can provide. Key characteristics:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical amount:</strong> 0.5&ndash;1.5x EBITDA, or
            10&ndash;20% of purchase price
          </li>
          <li>
            <strong>Cash interest rate:</strong> 8&ndash;12%
          </li>
          <li>
            <strong>PIK component:</strong> 2&ndash;6% additional interest that
            compounds and is paid at maturity rather than quarterly
          </li>
          <li>
            <strong>Equity kicker:</strong> Warrants granting 2&ndash;10% of
            fully diluted equity, aligning the mezzanine lender with upside
          </li>
          <li>
            <strong>Maturity:</strong> 5&ndash;7 years, often with bullet
            repayment (interest-only during the term, principal due at maturity)
          </li>
          <li>
            <strong>Subordination agreement:</strong> The mezzanine lender
            contractually agrees not to enforce remedies until the senior
            lender is satisfied &mdash; a critical protection for the senior
            lender that makes the overall structure viable
          </li>
        </ul>
        <p>
          For buyers, mezzanine debt reduces equity dilution. For a deeper
          look at how subordinated debt layers into acquisition structures, see
          our{" "}
          <Link href="/learn/mezzanine-financing" className="text-apple-accent hover:underline">
            mezzanine financing guide
          </Link>.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Layer 3: Seller financing</h2>
        <p>
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            Seller financing
          </Link>{" "}
          is arguably the most versatile tool in SME deal structuring. The
          seller agrees to defer a portion of the purchase price, effectively
          lending money to the buyer in the form of a promissory note. Seller
          notes typically occupy a subordinated position &mdash; junior to
          senior bank debt but senior to equity &mdash; placing them in the
          middle of the capital stack.
        </p>
        <p>
          Seller financing matters for three reasons. First, it reduces the
          equity the buyer needs to bring to the table. Second, it signals
          the seller&rsquo;s confidence in the ongoing performance of the
          business &mdash; the seller only gets repaid if the business
          continues generating cash. Third, it provides powerful alignment
          during the transition period when the seller is often still involved
          operationally.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical amount:</strong> 5&ndash;20% of purchase price
            (sometimes as high as 30% in buyer-friendly deals)
          </li>
          <li>
            <strong>Interest rate:</strong> 4&ndash;8%, though rates of
            6&ndash;10% are increasingly common as base rates have risen
          </li>
          <li>
            <strong>Term:</strong> 3&ndash;7 years
          </li>
          <li>
            <strong>Standby requirements:</strong> SBA-backed transactions
            require seller notes to be on &ldquo;full standby&rdquo; for the
            first 24 months &mdash; no principal or interest payments during
            this period. Some lenders accept &ldquo;partial standby&rdquo;
            where interest-only payments are permitted
          </li>
          <li>
            <strong>Tax benefit to seller:</strong> Installment sale treatment
            under IRC Section 453 allows the seller to defer capital gains
            recognition over the payment schedule rather than recognizing the
            full gain in year one
          </li>
        </ul>
        <p>
          A well-negotiated seller note can count toward the SBA&rsquo;s 10%
          equity injection requirement if structured on full standby, further
          reducing the buyer&rsquo;s cash outlay at closing.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          Layer 4: Preferred equity
        </h2>
        <p>
          Preferred equity sits between debt and common equity in the capital
          stack. Preferred equity holders receive their invested capital back
          (plus any accrued return) before common equity holders in a
          liquidation or sale event, but after all debt is repaid. This
          layer is especially prominent in traditional search fund structures,
          where search-phase investors convert their capital into preferred
          equity at acquisition.
        </p>
        <p>
          In the standard search fund model documented in Stanford&rsquo;s
          research, investors who funded the search phase receive a{" "}
          <strong>1.5x step-up</strong> on their invested capital &mdash;
          meaning a $25,000 search-phase investment converts to $37,500 of
          acquisition equity. These investors also receive the right of first
          refusal to participate in the acquisition round on a pro-rata basis.
          For a detailed breakdown of investor economics, see our{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            search fund investor economics
          </Link>{" "}
          guide.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Liquidation preference:</strong> Preferred holders receive
            1x&ndash;1.5x their invested capital before any distribution to
            common equity
          </li>
          <li>
            <strong>Participating vs. non-participating:</strong> Participating
            preferred receives its liquidation preference{" "}
            <em>and</em> shares in the remaining proceeds alongside common
            equity. Non-participating preferred must choose between its
            preference and its pro-rata share
          </li>
          <li>
            <strong>Dividends:</strong> Some preferred equity structures include
            a cumulative dividend (typically 6&ndash;10%) that accrues and must
            be paid before common equity distributions
          </li>
        </ul>
        <p>
          For detailed mechanics on how preferred and common equity interact,
          see our{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap tables and equity guide
          </Link>.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Layer 5: Common equity</h2>
        <p>
          Common equity is the foundation of the capital stack &mdash; the
          highest-risk, highest-return layer. Common equity holders absorb
          losses first (after all debt and preferred equity claims are
          satisfied) but capture all residual upside. In an SME acquisition,
          the common equity check represents the buyer&rsquo;s &ldquo;skin in
          the game.&rdquo;
        </p>
        <p>
          How common equity is split depends on the acquisition model:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Self-funded acquirer:</strong> Retains 80&ndash;100% of
            common equity, since no external equity investors are involved.
            The full equity injection comes from personal savings, a{" "}
            <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
              HELOC, retirement rollover (ROBS), or SBA equity injection
            </Link>
          </li>
          <li>
            <strong>Traditional search fund CEO:</strong> Typically receives
            20&ndash;25% of common equity (for a solo searcher) or up to 30%
            (for a two-person team), vesting in three equal tranches &mdash;
            one-third at closing, one-third over 4&ndash;5 years of service,
            and one-third upon achieving specified IRR targets at exit
          </li>
          <li>
            <strong>Search fund investors:</strong> Hold the remaining
            70&ndash;80% of common equity, with protections through preferred
            equity conversion and board control
          </li>
        </ul>
        <p>
          Common equity has no guaranteed return. Equity holders get paid only
          after every debt obligation is met and every preferred distribution
          is satisfied. But in a successful outcome, common equity captures
          100% of the value created above the debt and preferred layers &mdash;
          which is why leverage amplification (discussed below) is so powerful.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          SBA stack vs. conventional stack: A side-by-side comparison
        </h2>
        <p>
          The two most common capital stack structures in SME acquisitions
          look fundamentally different. Understanding these differences is
          essential for deciding which path to pursue.
        </p>

        <h3 className={h3Class}>
          SBA-backed stack (typical $2M&ndash;$5M deal)
        </h3>
        <ul className={ulClass}>
          <li>
            <strong>SBA 7(a) senior debt:</strong> 75&ndash;80% of purchase
            price
          </li>
          <li>
            <strong>Seller note (on standby):</strong> 5&ndash;15% of purchase
            price
          </li>
          <li>
            <strong>Buyer equity injection:</strong> 10&ndash;15% of purchase
            price (can include ROBS, HELOC, or personal cash)
          </li>
          <li>
            <strong>Mezzanine/preferred equity:</strong> Rarely used; the SBA
            guarantee replaces the need for junior capital
          </li>
        </ul>
        <p>
          The SBA stack is notable for its high leverage ratio (up to 90%
          debt) and low cost of debt (Prime + 2.25&ndash;2.75%). The tradeoff
          is the personal guarantee, the $5M loan ceiling, SBA eligibility
          requirements, and longer closing timelines (60&ndash;90 days).
        </p>

        <h3 className={h3Class}>
          Conventional/search fund stack (typical $5M&ndash;$30M deal)
        </h3>
        <ul className={ulClass}>
          <li>
            <strong>Senior bank debt:</strong> 40&ndash;60% of purchase price
          </li>
          <li>
            <strong>Mezzanine debt (if used):</strong> 5&ndash;15% of purchase
            price
          </li>
          <li>
            <strong>Seller note:</strong> 5&ndash;15% of purchase price
          </li>
          <li>
            <strong>Investor equity (preferred + common):</strong>
            25&ndash;40% of purchase price
          </li>
        </ul>
        <p>
          Conventional stacks involve more equity (lowering leverage and
          therefore returns) but offer greater flexibility on deal size,
          covenant negotiation, and speed of execution. The cost of debt is
          higher (SOFR + 2&ndash;7% depending on seniority), but the absence
          of SBA restrictions on business type, owner experience, and loan
          size makes this the path for larger acquisitions. For more on how
          to choose between these models, see our{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded vs. traditional search comparison
          </Link>.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          Worked example: A $5M acquisition
        </h2>
        <p>
          Let&rsquo;s walk through a concrete example. Assume you are
          acquiring a B2B services business with $1.25M of adjusted EBITDA
          at a 4.0x multiple, for a total purchase price of $5.0M.
        </p>

        <h3 className={h3Class}>Scenario A: SBA-backed stack</h3>
        <ul className={ulClass}>
          <li>
            <strong>SBA 7(a) loan:</strong> $4.0M (80%) at Prime + 2.75%
            (assume 10.25% all-in), 10-year amortization. Annual debt service:
            ~$540K
          </li>
          <li>
            <strong>Seller note:</strong> $500K (10%) at 6%, 5-year term, on
            full standby for 24 months. Annual debt service after standby:
            ~$118K
          </li>
          <li>
            <strong>Buyer equity injection:</strong> $500K (10%) from personal
            savings and ROBS
          </li>
        </ul>
        <p>
          <strong>Year-1 debt service coverage ratio (DSCR):</strong>{" "}
          $1.25M EBITDA / $540K senior debt service = <strong>2.31x</strong>{" "}
          (comfortable; lenders typically require a minimum of 1.25x).
          After the seller note comes off standby in year 3, total annual
          debt service rises to ~$658K, producing a DSCR of 1.90x (still
          healthy, assuming no EBITDA growth).
        </p>
        <p>
          <strong>Equity return scenario:</strong> If EBITDA grows 5%
          annually and you exit at 4.5x EBITDA in year 5, the business sells
          for approximately $7.18M. After repaying remaining debt of roughly
          $2.7M, your equity value is approximately $4.48M on a $500K
          investment &mdash; a <strong>55% IRR</strong> and{" "}
          <strong>9.0x cash-on-cash return</strong>.
        </p>

        <h3 className={h3Class}>Scenario B: Conventional search fund stack</h3>
        <ul className={ulClass}>
          <li>
            <strong>Senior bank debt:</strong> $2.75M (55%) at SOFR + 3.5%
            (assume 8.5% all-in), 5-year term with 7-year amortization.
            Annual debt service: ~$520K
          </li>
          <li>
            <strong>Seller note:</strong> $500K (10%) at 7%, 5-year term.
            Annual debt service: ~$118K
          </li>
          <li>
            <strong>Investor equity:</strong> $1.75M (35%) from search fund
            investors
          </li>
        </ul>
        <p>
          <strong>Year-1 DSCR:</strong> $1.25M / $638K = <strong>1.96x</strong>.
          Under the same exit assumptions (4.5x EBITDA in year 5), equity
          value is approximately $4.79M on $1.75M invested &mdash; a{" "}
          <strong>22% IRR</strong> and <strong>2.7x cash-on-cash return</strong>.
        </p>
        <p>
          The SBA stack produces dramatically higher returns on equity
          because of greater leverage (90% vs. 65% debt). But the SBA buyer
          bears a personal guarantee on $4M of debt, while the search fund
          investors&rsquo; exposure is limited to their equity check. Risk and
          return are always two sides of the same coin.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          How the capital stack affects returns: Leverage amplification
        </h2>
        <p>
          Leverage is the mechanism through which the capital stack
          transforms modest operational improvements into outsized equity
          returns. The math is straightforward: when you finance an
          acquisition with debt, the lender&rsquo;s capital magnifies the
          equity investor&rsquo;s exposure to both gains and losses.
        </p>
        <p>
          Consider a $5M acquisition with $1M of equity (80% leverage).
          If the business value increases by 20% to $6M, the equity value
          doubles from $1M to $2M &mdash; a 100% return on a 20% value
          increase. This is the power of leverage amplification.
        </p>
        <p>
          But leverage cuts both ways. Using the same 80% leverage example,
          a 20% decline in business value wipes out 100% of the equity.
          Here is how leverage ratios affect equity sensitivity:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>50% leverage (2:1 debt-to-equity):</strong> A 10%
            increase in business value produces a 20% equity return; a 10%
            decrease produces a 20% equity loss
          </li>
          <li>
            <strong>70% leverage (2.3:1):</strong> A 10% increase produces a
            33% equity return; a 10% decrease produces a 33% equity loss
          </li>
          <li>
            <strong>80% leverage (4:1):</strong> A 10% increase produces a
            50% equity return; a 10% decrease produces a 50% equity loss
          </li>
          <li>
            <strong>90% leverage (9:1, typical SBA stack):</strong> A 10%
            increase produces a 100% equity return; a 10% decrease produces
            a 100% equity loss
          </li>
        </ul>
        <p>
          This is why DSCR matters so much. Research from the Federal Reserve
          Small Business Credit Survey found that businesses with total debt
          service exceeding 35% of gross revenue at origination default at
          rates 2.3x higher than businesses where debt service stays below
          20% of revenue. The capital stack is not just a return optimization
          exercise &mdash; it is fundamentally a risk management decision.
          For detailed return modeling, see our{" "}
          <Link href="/learn/financial-modeling-for-acquisitions" className="text-apple-accent hover:underline">
            financial modeling for acquisitions
          </Link>{" "}
          guide.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Risks at each layer of the stack</h2>
        <p>
          Every layer of the capital stack carries distinct risks for both the
          capital provider and the acquirer. Understanding these risks is
          essential for structuring deals that survive downturns.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Senior debt risks:</strong> Covenant breach from EBITDA
            decline (triggering acceleration or forced sale), interest rate
            increases on variable-rate loans, personal guarantee exposure for
            SBA and conventional loans. Loans originated at DSCR of 1.5x or
            higher default at roughly one-third the rate of loans originated
            at 1.1&ndash;1.25x DSCR
          </li>
          <li>
            <strong>Mezzanine debt risks:</strong> PIK interest compounds
            rapidly &mdash; a $500K mezzanine note at 15% PIK grows to $1M in
            under 5 years. Equity warrants dilute common holders. In
            distress, mezzanine lenders may push for restructuring or
            conversion to equity
          </li>
          <li>
            <strong>Seller note risks:</strong> Seller default remedies are
            often limited by standby and subordination agreements. If the
            business underperforms, the seller note is the first debt
            instrument to face non-payment, creating relationship tension
            during the transition period
          </li>
          <li>
            <strong>Preferred equity risks:</strong> Liquidation preferences
            can consume most or all exit proceeds in a downside scenario.
            Participating preferred structures can result in investors
            receiving significantly more than their invested capital before
            common holders see any return
          </li>
          <li>
            <strong>Common equity risks:</strong> Total loss of invested
            capital is possible if the business declines significantly.
            Common equity holders have the weakest structural protections and
            depend entirely on the business generating value above all
            senior claims
          </li>
        </ul>
        <p>
          The best protection against capital-stack risk is conservative
          underwriting: target a minimum 1.5x DSCR at closing, stress-test
          your model for a 20&ndash;30% EBITDA decline, and maintain at least
          three months of operating expenses in cash reserves post-close. For
          more on managing post-acquisition financial risk, see our guide on{" "}
          <Link href="/learn/debt-structure-optimization" className="text-apple-accent hover:underline">
            debt structure optimization
          </Link>.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>
          How search funds structure their stack differently
        </h2>
        <p>
          Traditional search funds have a distinctive capital stack structure
          that differs from both self-funded SBA deals and conventional
          private equity acquisitions. Understanding these differences is
          important whether you are a searcher structuring your deal or an{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            investor evaluating a cap table
          </Link>.
        </p>
        <p>
          <strong>Search-phase capital.</strong> The median search fund raises
          $500K&ndash;$550K during the search phase from 10&ndash;20
          investors, each purchasing units at $20K&ndash;$50K. This capital
          covers the searcher&rsquo;s salary, deal-sourcing expenses, and
          operating costs for an 18&ndash;30 month search. At acquisition,
          search capital converts to equity at a 1.5x step-up &mdash;
          rewarding early-stage investors for their higher risk.
        </p>
        <p>
          <strong>Acquisition-phase capital.</strong> A typical B2B services
          search fund acquisition deploys approximately 30&ndash;40% senior
          debt, 10&ndash;20% seller financing, and 40&ndash;60% investor
          equity. Search fund stacks tend to be less leveraged than SBA-backed
          deals because (a) deal sizes often exceed the $5M SBA ceiling, (b)
          search fund investors prefer operational flexibility over return
          maximization through leverage, and (c) lower leverage provides a
          larger EBITDA cushion to service debt during the CEO&rsquo;s
          learning curve.
        </p>
        <p>
          <strong>Equity structure.</strong> The searcher-CEO receives
          20&ndash;30% of common equity, vesting in three tranches (closing,
          time-based, and performance-based). Investors hold 70&ndash;80% of
          common equity plus preferred equity positions with liquidation
          preferences. This creates a capital stack where the CEO&rsquo;s
          economic interest is entirely in common equity &mdash; maximally
          aligned with long-term value creation.
        </p>
        <p>
          For a complete picture of how search fund economics work at each
          phase, see our{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            search fund investor economics
          </Link>{" "}
          guide and our analysis of{" "}
          <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
            entity structure choices
          </Link>{" "}
          that affect how the stack is taxed.
        </p>

        {/* ---------------------------------------------------------------- */}
        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>
          What is the ideal debt-to-equity ratio for an SME acquisition?
        </h3>
        <p>
          There is no single ideal ratio &mdash; it depends on business
          stability, cash flow predictability, and the acquirer&rsquo;s risk
          tolerance. As a general framework: businesses with recurring revenue
          and stable margins can support 70&ndash;80% debt (3&ndash;4x
          EBITDA leverage), while cyclical or project-based businesses should
          target 50&ndash;60% debt (2&ndash;3x EBITDA). The critical
          constraint is DSCR: your total annual debt service should not exceed
          65&ndash;70% of trailing EBITDA, leaving a minimum 1.3&ndash;1.5x
          coverage cushion. SBA lenders typically require a minimum DSCR of
          1.15&ndash;1.25x, though conservative structuring targets 1.5x or
          higher.
        </p>

        <h3 className={h3Class}>
          Can I use seller financing to reduce my equity injection?
        </h3>
        <p>
          Yes, and this is one of seller financing&rsquo;s most powerful
          applications. In SBA-backed deals, a seller note structured on full
          standby (no payments for 24 months) can count toward the 10% equity
          injection requirement, effectively allowing the buyer to close with
          as little as 5% cash out of pocket. In non-SBA deals, seller
          financing directly reduces the equity check by filling the gap
          between senior debt capacity and the purchase price. A 10&ndash;15%
          seller note can cut the buyer&rsquo;s required equity by 25&ndash;40%.
          For negotiation strategies, see our{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller financing guide
          </Link>.
        </p>

        <h3 className={h3Class}>
          How does the capital stack affect my ability to make operational
          changes post-acquisition?
        </h3>
        <p>
          Heavily leveraged stacks constrain operational flexibility. High
          debt service consumes cash that could otherwise fund growth
          initiatives, hiring, or capital expenditures. Loan covenants may
          restrict additional borrowing, capital expenditures above certain
          thresholds, or dividend distributions. Mezzanine lenders may
          require board observation rights or approval for material decisions.
          Conversely, equity-heavy stacks offer maximum flexibility but dilute
          the acquirer&rsquo;s ownership and returns. The best structures
          balance leverage for return amplification with enough cash flow
          headroom to fund post-acquisition value-creation initiatives.
        </p>

        <h3 className={h3Class}>
          What happens to the capital stack if the business
          underperforms after acquisition?
        </h3>
        <p>
          Underperformance triggers a cascade of consequences up the capital
          stack. First, free cash flow shrinks, reducing the buffer above
          debt service. If DSCR drops below covenant minimums (typically 1.1&ndash;1.25x),
          senior lenders may declare a default, accelerate repayment, or
          demand additional collateral. Mezzanine lenders may trigger
          conversion rights or push for restructuring. Seller note payments
          may be deferred or renegotiated. In severe cases, equity is wiped
          out entirely and the business is either sold to satisfy creditors or
          restructured through a workout. The key protection is building
          conservative projections: stress-test your capital stack for a
          25&ndash;30% EBITDA decline and ensure the business can still
          service senior debt at that reduced level.
        </p>

        <h3 className={h3Class}>
          Should I prioritize paying down debt or reinvesting in the
          business post-acquisition?
        </h3>
        <p>
          This is one of the most important post-acquisition capital
          allocation decisions, and the answer depends on the spread between
          your cost of debt and the return on reinvested capital. If your
          senior debt costs 8&ndash;10% and you can generate 20&ndash;30%+
          returns by investing in sales, operations, or technology, the math
          favors reinvestment. However, if you are carrying high-cost
          mezzanine debt at 12&ndash;18%, paying that down first almost
          always makes sense &mdash; few operational initiatives can reliably
          generate risk-adjusted returns above 15%. A practical approach:
          maintain minimum required debt payments, accelerate mezzanine
          paydown, and deploy remaining free cash into the highest-ROI growth
          initiatives identified in your{" "}
          <Link href="/learn/financial-modeling-for-acquisitions" className="text-apple-accent hover:underline">
            financial model
          </Link>.
        </p>
      </div>
    </article>
  );
}
