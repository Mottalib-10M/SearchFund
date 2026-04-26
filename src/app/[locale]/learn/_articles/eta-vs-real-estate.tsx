import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAvsRealEstateArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Real Estate Investing</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          Real estate has been the default alternative investment for
          generations: tangible, familiar, and deeply embedded in the
          wealth-building playbook of high-net-worth individuals. But
          Entrepreneurship Through Acquisition (ETA) offers a
          fundamentally different path to wealth through private asset
          ownership: buying a cash-flowing business rather than a
          cash-flowing property. Both strategies share important
          characteristics - use, active management, tax advantages,
          and direct control - yet differ in critical ways that determine
          which is the better fit for your capital, skills, and
          risk tolerance.
        </p>

        <h2 className={h2Class}>Valuation frameworks: cap rates vs. EBITDA multiples</h2>
        <p>
          Real estate investors think in cap rates - the ratio of net
          operating income (NOI) to property value. According to the NCREIF
          Property Index, commercial real estate cap rates in 2024 ranged
          from approximately 4.5% to 8.5% depending on asset class, location,
          and quality. A 6% cap rate
          means the property generates $60,000 of annual NOI per
          $1 million of value, equivalent to a 16.7x earnings multiple.
        </p>
        <p>
          ETA investors think in EBITDA multiples - the ratio of
          enterprise value to earnings before interest, taxes,
          depreciation, and amortization. The Stanford GSB 2024 Search
          Fund Study reports that acquisitions typically close at 3x to
          6x EBITDA, with the median around 4x to 5x. A 4x EBITDA multiple means the business generates
          $250,000 of annual EBITDA per $1 million of enterprise value,
          a dramatically higher cash-flow yield than even the most
          attractive real estate investments.
        </p>
        <p>
          This valuation gap is one of ETA&apos;s most compelling
          features. Buying a business at 4x EBITDA provides a 25%
          unlevered cash yield, compared to a 6% unlevered yield for
          a typical commercial property. Even after accounting for the
          higher operational risk of businesses versus properties, the
          earnings yield advantage of ETA is substantial.
        </p>

        <h2 className={h2Class}>Use comparison</h2>
        <p>
          Both strategies employ use, but the terms and
          implications differ significantly.
        </p>

        <h3 className={h3Class}>Real estate use</h3>
        <ul className={ulClass}>
          <li>
            <strong>Loan-to-value:</strong> Commercial real estate loans
            typically range from 65% to 80% LTV. Residential investment
            properties can reach 80% to 90% LTV with government-backed
            programs. This high use amplifies returns but also
            amplifies losses.
          </li>
          <li>
            <strong>Interest rates:</strong> Commercial mortgage rates
            have fluctuated between 5% and 8% in recent years. Loan terms
            are typically 5 to 10 years with 25 to 30 year amortization.
          </li>
          <li>
            <strong>Collateral:</strong> The property itself serves as
            collateral. In a worst-case scenario, the lender forecloses
            on the property but cannot pursue the borrower&apos;s other
            assets (in non-recourse structures).
          </li>
        </ul>

        <h3 className={h3Class}>ETA <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link></h3>
        <ul className={ulClass}>
          <li>
            <strong>Debt-to-total capitalization:</strong> Search fund
            acquisitions typically use 50% to 60% debt financing, lower
            than most real estate transactions. SBA 7(a) loans are the
            most common instrument, offering up to $5 million with 10-year
            terms and competitive rates.
          </li>
          <li>
            <strong>Seller financing:</strong> Many search fund
            acquisitions include 10% to 20% seller notes, which provide
            favorable terms and align the seller&apos;s interests with the
            buyer&apos;s success during the transition period.
          </li>
          <li>
            <strong>Personal guarantees:</strong> SBA loans and some
            conventional business acquisition loans require personal
            guarantees, creating meaningful downside exposure for the
            buyer that is less common in institutional real estate.
          </li>
        </ul>
        <p>
          The lower use in ETA reduces bankruptcy risk but also
          means that equity returns depend more heavily on operational
          improvement rather than financial engineering. In real estate,
          it is possible to generate attractive returns purely through
          use and modest appreciation. In ETA, the operator must
          actively grow the business to generate investor-grade returns.
        </p>

        <h2 className={h2Class}>Cash flow profiles</h2>
        <p>
          Both strategies generate cash flow from day one, which
          distinguishes them from venture capital and growth equity.
          However, the nature and growth potential of that cash flow
          differ meaningfully.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Real estate cash flow:</strong> Relatively
            predictable and growing at 2% to 4% annually through rent
            escalations (tied to CPI or fixed annual increases). A
            stabilized commercial property with creditworthy tenants
            on long-term leases offers near-bond-like cash flow
            predictability. The trade-off is limited upside: you
            cannot dramatically increase a property&apos;s NOI without
            capital-intensive renovations or repositioning.
          </li>
          <li>
            <strong>ETA cash flow:</strong> More variable but with
            significantly higher growth potential. A well-run search
            fund acquisition can grow EBITDA by 15% to 30% annually
            through revenue growth, margin expansion, and operational
            improvements. Stanford data shows that the median search
            fund more than doubles EBITDA during the hold period. See our analysis of{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns</Link> for
            the full picture. The
            trade-off is that business cash flows are more volatile,
            subject to customer concentration, competitive dynamics,
            and management execution risk.
          </li>
        </ul>

        <h3 className={h3Class}>Concrete return scenarios</h3>
        <p>
          Consider a $1 million investment in each strategy:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Real estate:</strong> $1 million equity into a
            $4 million property (75% LTV). Cap rate of 6% generates
            $240,000 NOI. After debt service of $180,000, annual cash
            flow is $60,000 (6% cash-on-cash). After five years, assuming
            3% annual NOI growth and stable cap rates, the property is
            worth approximately $4.6 million. After repaying the
            remaining $2.7 million mortgage, equity is approximately
            $1.9 million. Total return: 1.9x over five years,
            approximately 14% IRR.
          </li>
          <li>
            <strong>ETA:</strong> $1 million equity into a $2.5 million
            acquisition (60% debt). EBITDA of $625,000 (4x multiple).
            After debt service of $250,000 and CEO compensation, annual
            distributable cash is approximately $200,000. Over five
            years, the CEO grows EBITDA to $1.2 million. At a 5x exit
            multiple, enterprise value is $6 million. After repaying
            remaining debt of approximately $800,000 and accounting for
            the CEO&apos;s equity stake, investor equity is approximately
            $3.5 million to $4 million. Total return: 3.5x to 4x over
            five years, approximately 28% to 32% IRR.
          </li>
        </ul>

        <h2 className={h2Class}>Tax advantages</h2>
        <p>
          Both strategies offer meaningful tax benefits, though the
          mechanisms differ.
        </p>

        <h3 className={h3Class}>Real estate tax advantages</h3>
        <ul className={ulClass}>
          <li>
            <strong>Depreciation:</strong> Commercial properties can be
            depreciated over 39 years (27.5 years for residential). Cost
            segregation studies can accelerate depreciation by
            reclassifying building components, generating substantial
            paper losses that offset taxable income.
          </li>
          <li>
            <strong>1031 exchanges:</strong> Investors can defer capital
            gains taxes indefinitely by exchanging into like-kind
            properties. This is one of real estate&apos;s most powerful
            tax tools and has no direct equivalent in ETA.
          </li>
          <li>
            <strong>Mortgage interest deduction:</strong> Interest on
            acquisition debt is fully deductible, reducing effective
            borrowing costs.
          </li>
          <li>
            <strong>Opportunity Zones:</strong> Investments in designated
            Opportunity Zones offer capital gains deferral and potential
            elimination of gains on the new investment after 10 years.
          </li>
        </ul>

        <h3 className={h3Class}>ETA tax advantages</h3>
        <ul className={ulClass}>
          <li>
            <strong>Goodwill amortization:</strong> In an asset purchase
            (the most common ETA structure), the buyer can amortize
            goodwill and other intangible assets over 15 years under
            Section 197. In a typical search fund acquisition where
            goodwill represents 50% to 70% of the purchase price, this
            creates significant annual tax deductions.
          </li>
          <li>
            <strong>Interest deduction:</strong> Acquisition debt interest
            is deductible, subject to Section 163(j) limitations (30% of
            adjusted taxable income for businesses with gross receipts
            above $29 million).
          </li>
          <li>
            <strong>Qualified Small Business Stock (QSBS):</strong> If
            the acquisition is structured as a C-corp and meets QSBS
            requirements, investors may exclude up to $10 million or 10x
            their basis in capital gains upon exit, potentially the
            most powerful tax benefit available in any asset class. Our guide to{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax optimization in ETA</Link> covers
            QSBS and other strategies in detail.
          </li>
          <li>
            <strong>Bonus depreciation:</strong> Tangible assets acquired
            in the transaction (equipment, vehicles, fixtures) may qualify
            for accelerated depreciation, creating front-loaded tax
            deductions.
          </li>
        </ul>

        <h2 className={h2Class}>Management intensity</h2>
        <p>
          Both real estate and ETA require active management, but the
          nature and intensity of that management differ substantially.
        </p>
        <p>
          Real estate management is primarily logistical: maintaining
          the physical property, finding and screening tenants, collecting
          rent, managing contractors, and navigating local regulations.
          These tasks can be delegated to professional property management
          companies (typically charging 5% to 10% of gross rents),
          allowing investors to remain relatively passive.
        </p>
        <p>
          ETA management is fundamentally operational: leading a team
          of employees, making strategic decisions, managing customer
          relationships, improving processes, and growing revenue. This
          cannot be delegated to a management company. The search fund
          CEO is the full-time operator, and the quality of their
          leadership directly determines the investment&apos;s success or
          failure. For investors, ETA is a more passive experience (they
          provide governance but not day-to-day management), but the
          investment&apos;s outcome depends critically on an active
          human decision-maker.
        </p>

        <h2 className={h2Class}>Scalability and portfolio building</h2>
        <p>
          Real estate scales more naturally than ETA. An investor can
          acquire a single property, then a second, then a third,
          gradually building a portfolio. Each property operates somewhat
          independently, and property management companies handle the
          operational complexity. It is common for individual real estate
          investors to build portfolios of 10, 20, or even 50 or more
          properties.
        </p>
        <p>
          ETA does not scale in the same way for operators. A search
          fund CEO acquires and operates one business. Serial
          acquirers exist, but they are relatively rare and typically
          transition to a holding company or PE-like model after their
          first successful exit. For investors, scaling ETA means
          backing multiple searchers, which is straightforward but
          requires ongoing deal sourcing and due diligence for each
          new search fund investment.
        </p>

        <h2 className={h2Class}>REITs vs. direct real estate vs. ETA</h2>
        <ul className={ulClass}>
          <li>
            <strong>REITs:</strong> Publicly traded, fully liquid, and
            professionally managed. Returns have averaged approximately
            10% to 12% annually over the long term, comparable to public
            equities. REITs offer diversification and simplicity but no
            control, no tax advantages of direct ownership, and
            correlation with public equity markets.
          </li>
          <li>
            <strong>Direct real estate:</strong> Illiquid, management-
            intensive, and tax-advantaged. Expected returns of 12% to 18%
            annually with use. Offers tangible collateral and proven
            demand but limited operational upside.
          </li>
          <li>
            <strong>ETA:</strong> Illiquid, operationally dependent, and
            high-returning. Expected returns of 25% to 35% IRR for
            diversified portfolios. Offers the highest return potential
            but requires trust in an individual operator and tolerance
            for business-specific risk.
          </li>
        </ul>

        <h2 className={h2Class}>Risk comparison</h2>
        <ul className={ulClass}>
          <li>
            <strong>Downside protection:</strong> Real estate offers
            tangible collateral: the property has residual value even
            in a worst-case scenario. Business value can evaporate more
            quickly if customers leave, key employees depart, or the
            competitive environment shifts.
          </li>
          <li>
            <strong>Market risk:</strong> Real estate values are
            correlated with interest rates, credit markets, and local
            economic conditions. ETA returns are more driven by
            company-specific operational factors and less by
            macroeconomic variables.
          </li>
          <li>
            <strong>Operational risk:</strong> Real estate operational
            failures (bad tenants, deferred maintenance) are costly but
            rarely catastrophic. ETA operational failures (losing a key
            customer representing 30% of revenue, or a botched
            technology migration) can be existential.
          </li>
          <li>
            <strong>Regulatory risk:</strong> Real estate faces zoning
            changes, rent control, environmental regulations, and
            property tax increases. ETA faces industry-specific
            regulations that vary widely by sector.
          </li>
        </ul>

        <h2 className={h2Class}>Making the choice</h2>
        <p>
          Real estate is the better choice for investors who want
          tangible collateral, proven demand, scalable portfolio
          building, and powerful tax advantages (particularly 1031
          exchanges). It is the right strategy for those who prefer
          predictable cash flows growing at modest rates over decades.
        </p>
        <p>
          ETA is the better choice for investors who prioritize IRR,
          are comfortable with business risk, and{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">want exposure to the
          operational upside of growing a company</Link>. It is the right
          strategy for those who believe that a talented operator can
          create more value in a $5 million business than in a
          $5 million property.
        </p>
        <p>
          Many sophisticated investors hold both. Real estate provides
          the stable, tax-efficient foundation of passive income and
          slow appreciation. ETA provides the high-octane growth engine
          that can transform portfolio returns. A portfolio that
          combines commercial real estate (20% to 30% allocation) with
          a diversified search fund program (10% to 20% allocation)
          captures the best attributes of both strategies: tangible
          stability and operational alpha.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How do search fund returns compare to real estate investing?</h3>
        <p>
          Search funds have generated approximately 35% aggregate IRR
          according to Stanford GSB data, compared to 8-12% for
          diversified real estate portfolios and 15-20% for value-add
          real estate strategies. However, real estate offers tangible
          collateral, more favorable financing terms (30-year mortgages at
          high LTV), and more predictable cash flows. The right choice depends
          on your risk tolerance and management preference.
        </p>

        <h3 className={h3Class}>Can you combine ETA and real estate investing?</h3>
        <p>
          Yes. Many search fund acquisitions include real estate components
          such as owned facilities or land. Some searchers specifically target
          businesses where real estate is a significant asset (storage
          facilities, car washes, hotels). Additionally, post-exit search fund
          operators often allocate exit proceeds to real estate for portfolio
          diversification, combining the high-growth phase of ETA with the
          stability of property income.
        </p>

        <h3 className={h3Class}>Is real estate investing lower risk than search fund investing?</h3>
        <p>
          Generally yes. Real estate benefits from tangible collateral,
          favorable financing, inflation hedging, and lower operational
          complexity. Search funds offer higher potential returns but require
          deep operational involvement and carry higher idiosyncratic risk.
          On a risk-adjusted basis, real estate provides more consistent
          returns while search funds offer significantly more upside potential.
          For a deeper look at how to evaluate these trade-offs as an LP,
          see our <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">guide to search fund investing</Link>.
        </p>
      </div>
    </article>
  );
}
