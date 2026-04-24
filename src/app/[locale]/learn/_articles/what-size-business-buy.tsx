import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function WhatSizeBusinessBuyArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Size Business Should I Buy? A Data-Driven Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          The size of the business you acquire shapes every downstream
          decision &mdash; from the financing you can access, to the management
          complexity you inherit, to the multiples you pay and ultimately earn
          at exit. According to the 2024 Stanford Search Fund Study, the median
          acquired company had $2.2 million in EBITDA and sold for $14.4
          million at a 7.0x multiple. But that median masks enormous variation.
          Deals under $1 million in enterprise value trade at 3&ndash;4x
          earnings, while businesses above $5 million in EBITDA attract
          institutional private-equity buyers paying 8x or more. This guide
          uses current transaction data to help you identify the right size for
          your capital, experience, and risk tolerance &mdash; so you avoid the
          two most common mistakes: buying too small (and purchasing yourself a
          job) or buying too large (and competing against deep-pocketed PE
          firms).
        </p>

        {/* ── H2 #1 ── */}
        <h2 className={h2Class}>
          Why business size is the single most important filter
        </h2>
        <p>
          New acquirers often start their search by industry or geography.
          That is backwards. Size determines four things simultaneously:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Valuation multiple.</strong> Businesses with less than $1
            million in EBITDA typically trade at 3&ndash;4.5x, while those
            above $5 million trade at 6&ndash;8x or higher, according to
            GF Data&rsquo;s 2024 analysis of deals between $1 million and $10
            million, which found an average of 5.5x trailing EBITDA.
          </li>
          <li>
            <strong>Competitive intensity.</strong> Private-equity firms
            accounted for 59% of all transactions in the $5M&ndash;$50M range
            in 2024 (Capstone Partners Middle Market M&amp;A Valuations
            Index). Below $5 million in enterprise value, individual buyers
            and self-funded searchers face far less competition.
          </li>
          <li>
            <strong>Management depth.</strong> A $700K-EBITDA landscaping
            company likely has no management layer &mdash; you are the general
            manager from day one. A $3M-EBITDA services business almost
            certainly has department heads, a controller, and at least one
            operations manager. That distinction changes how much of your time
            goes to strategy versus putting out fires.
          </li>
          <li>
            <strong>Financing availability.</strong> The SBA 7(a) program caps
            individual loans at $5 million, which effectively limits
            SBA-financed acquisitions to businesses with roughly $1&ndash;$1.5
            million in EBITDA at standard leverage. Larger deals require
            conventional bank debt, mezzanine financing, or equity from{" "}
            <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
              search fund investors
            </Link>.
          </li>
        </ol>
        <p>
          Before you evaluate a single deal, answer the size question first.
          Everything else follows from it.
        </p>

        {/* ── H2 #2 ── */}
        <h2 className={h2Class}>
          The three acquisition tiers: revenue, EBITDA, and trade-offs
        </h2>

        <h3 className={h3Class}>
          Tier 1 &mdash; Main Street ($500K&ndash;$3M revenue, $100K&ndash;$750K EBITDA)
        </h3>
        <p>
          Main Street businesses are the bread and butter of the SBA lending
          market. They include single-location service companies, small
          specialty retailers, niche e-commerce brands, and local trades
          businesses (HVAC, plumbing, landscaping).
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical purchase price:</strong> $300K&ndash;$2.5M
          </li>
          <li>
            <strong>Valuation method:</strong> Seller&rsquo;s discretionary
            earnings (SDE), not EBITDA &mdash; because the owner&rsquo;s
            compensation is a significant portion of profit
          </li>
          <li>
            <strong>Multiples:</strong> 2.0&ndash;3.5x SDE (roughly
            equivalent to 3&ndash;4.5x EBITDA once you add back a market-rate
            manager salary)
          </li>
          <li>
            <strong>Financing:</strong>{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a) loans
            </Link>{" "}
            cover 80&ndash;90% of the purchase price; the SBA requires a
            minimum 10% equity injection, and as of June 2025, seller notes
            on full standby can count for up to half of that injection (SBA
            SOP 50 10 8)
          </li>
          <li>
            <strong>Employees:</strong> 3&ndash;20
          </li>
          <li>
            <strong>Competition:</strong> Low &mdash; mostly individual
            buyers, some search fund operators at the top end
          </li>
        </ul>
        <p>
          <strong>Key trade-off:</strong> Main Street deals are affordable
          and relatively easy to finance, but they usually lack a management
          layer. You will be the general manager, the head of sales, and often
          the top individual contributor. Below $500K in EBITDA, debt service
          plus a reasonable salary can consume all free cash flow, leaving no
          margin for error. If your goal is true CEO-level work &mdash;
          setting strategy and managing managers &mdash; you likely need to
          move up to Tier 2 or buy a Tier 1 business with a plan (and
          capital) to grow into Tier 2 within 18&ndash;24 months.
        </p>

        <h3 className={h3Class}>
          Tier 2 &mdash; Lower middle market ($3M&ndash;$10M revenue, $750K&ndash;$3M EBITDA)
        </h3>
        <p>
          This is where most self-funded searchers and many traditional search
          funds operate. Businesses at this size have crossed the
          &ldquo;professionalization threshold&rdquo; &mdash; they have at
          least a thin management team, documented processes, and enough
          revenue diversity to survive losing a single customer.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical purchase price:</strong> $2.5M&ndash;$15M
          </li>
          <li>
            <strong>Valuation method:</strong> EBITDA-based, with{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              add-backs and normalizations
            </Link>{" "}
            scrutinized closely
          </li>
          <li>
            <strong>Multiples:</strong> 3.5&ndash;5.5x EBITDA for most
            industries; recurring-revenue businesses (managed services, SaaS)
            can push 6&ndash;7x. See the full breakdown in our{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              EBITDA multiples by industry
            </Link>{" "}
            guide
          </li>
          <li>
            <strong>Financing:</strong> SBA 7(a) works for deals up to ~$5M
            in total purchase price. Above that threshold, conventional bank
            debt (typically 2.5&ndash;3.5x EBITDA leverage), seller
            financing (10&ndash;20% of the deal), and equity combine to fund
            the transaction. Learn more about{" "}
            <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
              capital requirements by deal size
            </Link>
          </li>
          <li>
            <strong>Employees:</strong> 20&ndash;75
          </li>
          <li>
            <strong>Competition:</strong> Moderate &mdash; self-funded
            searchers, traditional search funds, some family offices, and a
            growing number of PE add-on buyers (75% of PE deals in the
            $1M&ndash;$10M range were add-ons in 2024, per GF Data)
          </li>
        </ul>
        <p>
          <strong>Key trade-off:</strong> These businesses cost more and
          demand more sophisticated due diligence, but they also generate
          enough cash flow to service acquisition debt, pay a market-rate CEO
          salary, and fund reinvestment. The management layer &mdash; however
          thin &mdash; means you can focus on growth rather than daily
          operations from the start. The risk is overpaying: at 5x EBITDA on
          a $2M-EBITDA business, your $10M purchase price requires roughly
          $1M&ndash;$1.5M in equity, which is a meaningful commitment.
        </p>

        <h3 className={h3Class}>
          Tier 3 &mdash; Core middle market ($10M&ndash;$50M revenue, $3M&ndash;$10M+ EBITDA)
        </h3>
        <p>
          This is private-equity territory. Businesses here have
          professional management teams, established brands, and enough scale
          to serve as &ldquo;platform&rdquo; companies for buy-and-build
          strategies.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Typical purchase price:</strong> $15M&ndash;$60M+
          </li>
          <li>
            <strong>Multiples:</strong> 5&ndash;8x EBITDA; premium
            businesses (high recurring revenue, above-average growth, strong
            moats) trade at 8&ndash;10x. The North American middle-market
            median stood at 9.6x EV/EBITDA for the trailing twelve months
            ending Q1 2025 (Capstone Partners)
          </li>
          <li>
            <strong>Financing:</strong> Institutional bank debt, mezzanine
            capital, PE equity. SBA loans do not apply at this scale
          </li>
          <li>
            <strong>Employees:</strong> 75&ndash;300+
          </li>
          <li>
            <strong>Competition:</strong> Intense &mdash; roughly 80% of
            deals above $5M in EBITDA attracted three or more competing offers
            in 2024, and 16% attracted ten or more (Calder Group Q2 2025
            Market Update)
          </li>
        </ul>
        <p>
          <strong>Key trade-off:</strong> The upside is enormous &mdash;
          professional teams, scalable platforms, and multiple exit paths. But
          as an individual buyer, you face two structural disadvantages:
          PE firms move faster and pay higher multiples because they have
          committed capital, and the equity requirement ($3M&ndash;$10M+)
          puts these deals out of reach without institutional backing. If you
          target this tier, you will almost certainly need to operate as an{" "}
          <Link href="/learn/search-fund-vs-independent-sponsor" className="text-apple-accent hover:underline">
            independent sponsor
          </Link>{" "}
          or raise a traditional search fund with committed investor capital.
        </p>

        {/* ── H2 #3 ── */}
        <h2 className={h2Class}>
          The search fund sweet spot: $1.5M&ndash;$5M EBITDA
        </h2>
        <p>
          The 2024 Stanford Search Fund Study analyzed 681 funds formed since
          1984 and found that the most successful outcomes cluster around
          companies with $1.5M&ndash;$5M in EBITDA. The median acquired
          company had $2.2 million in EBITDA with a 27% EBITDA margin and 25%
          pre-acquisition EBITDA growth. The median purchase price was $14.4
          million at a 7.0x multiple.
        </p>
        <p>
          Why does this range work so well? Three reinforcing dynamics:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Below the PE radar.</strong> Most PE firms target
            companies with at least $3M&ndash;$5M in EBITDA as platforms. The
            $1.5M&ndash;$3M zone sits in a structural gap: too large for
            most individual &ldquo;lifestyle&rdquo; buyers, too small for
            institutional capital. That supply-demand imbalance creates
            better pricing for search fund acquirers.
          </li>
          <li>
            <strong>Sufficient cash flow for the capital stack.</strong> At
            $2M in EBITDA and a 4.5x multiple ($9M purchase price), a
            typical deal might be financed with $5.4M in senior debt (3x
            leverage), $1.35M in seller financing (15%), and $2.25M in
            equity (25%). Annual debt service of roughly $750K&ndash;$900K
            leaves $1.1M&ndash;$1.25M for a CEO salary, taxes, and
            reinvestment. That math works. At $500K in EBITDA, the same
            structure collapses.
          </li>
          <li>
            <strong>Enough management infrastructure.</strong> Companies at
            $2M+ in EBITDA typically have 25&ndash;50 employees, a controller
            or bookkeeper, and at least one operations or sales manager. That
            thin management layer is critical &mdash; it means the new CEO
            can focus on{" "}
            <Link href="/learn/what-makes-good-acquisition-target" className="text-apple-accent hover:underline">
              improving the business
            </Link>{" "}
            rather than running day-to-day operations alone.
          </li>
        </ol>
        <p>
          For a deeper look at what makes the economics attractive, see our
          guide to{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            search fund investor economics
          </Link>.
        </p>

        {/* ── H2 #4 ── */}
        <h2 className={h2Class}>
          How to match business size to your capital and experience
        </h2>
        <p>
          There is no universally &ldquo;right&rdquo; size. The right size
          for you depends on three variables:
        </p>

        <h3 className={h3Class}>Variable 1: Available capital</h3>
        <p>
          Start with how much equity you can realistically contribute. The
          rest of the capital stack works backward from there:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>$50K&ndash;$150K personal equity:</strong> Targets
            businesses in the $500K&ndash;$1.5M purchase-price range via SBA
            financing. Expect $200K&ndash;$500K EBITDA businesses.
          </li>
          <li>
            <strong>$150K&ndash;$500K personal equity:</strong> Opens up
            $1.5M&ndash;$5M purchase prices. Combined with SBA debt and
            seller financing, this covers most Tier 2 deals.
          </li>
          <li>
            <strong>$500K+ personal equity (or investor equity):</strong>{" "}
            Required for $5M+ deals. Traditional search funds solve this by
            raising $400K&ndash;$600K in search capital from 10&ndash;20
            investors who then have the right to fund the acquisition equity.
          </li>
        </ul>
        <p>
          For a full breakdown of what you need at each deal size, see{" "}
          <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
            How Much Money Do You Need to Buy a Business?
          </Link>
        </p>

        <h3 className={h3Class}>Variable 2: Operating experience</h3>
        <p>
          A first-time operator buying a 150-person manufacturing company
          faces a steep learning curve. Match the organizational complexity
          to your management experience:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Limited management experience:</strong> Start with
            Tier 1 (under 20 employees). You will learn general management
            by doing it, but the blast radius of mistakes is smaller.
          </li>
          <li>
            <strong>Mid-career with team leadership experience:</strong>{" "}
            Tier 2 (20&ndash;75 employees) is ideal. You understand how to
            manage managers and can leverage an existing team.
          </li>
          <li>
            <strong>Senior executive or prior acquisition experience:</strong>{" "}
            Tier 3 is viable, especially if you have industry-specific
            expertise and institutional backing.
          </li>
        </ul>

        <h3 className={h3Class}>Variable 3: Risk tolerance and timeline</h3>
        <p>
          Smaller deals close faster (60&ndash;90 days for Main Street vs.
          6&ndash;12 months for middle-market deals with institutional
          financing). They also require less personal guarantee exposure. But
          smaller businesses carry more concentration risk &mdash; fewer
          customers, fewer employees, and thinner margins for error. Larger
          businesses offer more stability but demand more capital at risk for
          a longer period. There is no free lunch at any size; the risks just
          shift in character.
        </p>

        {/* ── H2 #5 ── */}
        <h2 className={h2Class}>
          SBA versus conventional financing: how deal size changes the structure
        </h2>
        <p>
          The financing you use is directly tied to the size of the business
          you buy. Here is how the two primary paths compare:
        </p>

        <h3 className={h3Class}>SBA 7(a) financing (deals up to ~$5M)</h3>
        <ul className={ulClass}>
          <li>
            <strong>Maximum loan amount:</strong> $5 million per loan (as of
            2025&ndash;2026; the Made in America Manufacturing Finance Act
            doubles this to $10M for small manufacturers)
          </li>
          <li>
            <strong>Equity injection:</strong> Minimum 10% of the total
            project cost. As of June 2025, seller notes on full standby can
            satisfy up to half of the required injection &mdash; meaning the
            buyer&rsquo;s cash-out-of-pocket minimum is 5% (SBA SOP 50 10 8)
          </li>
          <li>
            <strong>Interest rates:</strong> Capped at Prime + 2.75% for
            loans above $350K with maturities over 7 years
          </li>
          <li>
            <strong>Repayment term:</strong> Up to 10 years for business
            acquisitions (25 years if substantial real estate is included)
          </li>
          <li>
            <strong>Best for:</strong> Main Street and lower Tier 2 deals
            with up to ~$1.5M in EBITDA at 3&ndash;3.5x leverage
          </li>
          <li>
            <strong>Limitation:</strong> The $5M cap means a business priced
            above $5.5M&ndash;$6M needs a supplemental financing source
            (conventional bank debt, seller financing, or investor equity)
          </li>
        </ul>
        <p>
          For a comprehensive walkthrough, read our{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA 7(a) loans complete guide
          </Link>.
        </p>

        <h3 className={h3Class}>
          Conventional bank debt + equity (deals above $5M)
        </h3>
        <ul className={ulClass}>
          <li>
            <strong>Leverage:</strong> Typically 2.5&ndash;3.5x EBITDA for
            senior debt; mezzanine or subordinated debt can add another
            1&ndash;1.5x
          </li>
          <li>
            <strong>Equity requirement:</strong> 20&ndash;35% of the
            purchase price, depending on the lender and business quality
          </li>
          <li>
            <strong>Interest rates:</strong> Market-rate; no SBA guarantee
            means higher rates and stricter covenants
          </li>
          <li>
            <strong>Seller financing:</strong> Increasingly common &mdash;
            60% of winning letters of intent in 2024 included a seller note
            (Calder Group). Typically 10&ndash;20% of the purchase price at
            below-market interest rates with a 2&ndash;5 year term
          </li>
          <li>
            <strong>Best for:</strong> Upper Tier 2 and Tier 3 deals,
            especially when combined with search fund or independent-sponsor
            equity
          </li>
        </ul>

        {/* ── H2 #6 ── */}
        <h2 className={h2Class}>
          Common sizing mistakes &mdash; and how to avoid them
        </h2>

        <h3 className={h3Class}>Mistake 1: Buying too small</h3>
        <p>
          Businesses below $500K in EBITDA present three compounding
          problems. First, after debt service (roughly $300K&ndash;$400K per
          year on a $1.5M loan) and a modest owner salary ($100K&ndash;$150K),
          there is no cash left for growth, hiring, or unexpected expenses.
          Second, there is no management infrastructure &mdash; you are the
          CEO, the sales lead, and the operations manager simultaneously.
          Third, exit options narrow: businesses under $1M in EBITDA have
          significantly fewer potential buyers, which compresses exit
          multiples.
        </p>
        <p>
          The exception: if you have deep industry expertise and a clear
          plan to grow the business to $1M+ in EBITDA within 2&ndash;3
          years, a smaller acquisition can be the right on-ramp. Just go in
          with realistic expectations about the workload and timeline.
        </p>

        <h3 className={h3Class}>Mistake 2: Buying too large</h3>
        <p>
          Above $5M in EBITDA, you are bidding against private-equity firms
          with committed capital, operating partners, and established lender
          relationships. The data backs this up: in 2024, roughly 80% of
          deals above $5M in EBITDA attracted three or more competing offers
          (Calder Group). You will pay a premium multiple, face more
          sophisticated sellers, and need to move fast &mdash; often
          submitting an LOI within 2&ndash;3 weeks of receiving the CIM.
        </p>
        <p>
          If you lack institutional backing and prior acquisition experience,
          competing at this level is an uphill battle. One alternative: buy
          a smaller platform ($2M&ndash;$3M EBITDA) and grow into the
          $5M+ range through organic growth and tuck-in acquisitions.
        </p>

        <h3 className={h3Class}>
          Mistake 3: Ignoring the EBITDA-to-revenue relationship
        </h3>
        <p>
          A $10M-revenue business sounds impressive, but if EBITDA margins
          are 5%, that is only $500K in cash flow &mdash; firmly in Tier 1
          territory. Conversely, a $4M-revenue business with 35% EBITDA
          margins generates $1.4M in cash flow and lives in Tier 2. Always
          anchor your size filter on EBITDA (or SDE for smaller deals),
          not revenue. Revenue is vanity; EBITDA is what services debt and
          funds your salary. For help calculating the right number, see our{" "}
          <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">
            business valuation guide
          </Link>.
        </p>

        {/* ── H2 #7 ── */}
        <h2 className={h2Class}>
          A practical sizing framework in five steps
        </h2>
        <ol className={olClass}>
          <li>
            <strong>Determine your maximum equity contribution.</strong>{" "}
            Include personal savings, home equity lines, retirement accounts
            (ROBS structures), and any committed investor capital.
          </li>
          <li>
            <strong>Back into a purchase-price range.</strong> If your equity
            is 10&ndash;25% of the deal, your maximum purchase price is 4x
            to 10x your equity. For example, $200K in equity supports a
            $800K&ndash;$2M purchase price.
          </li>
          <li>
            <strong>Convert to an EBITDA range.</strong> Divide your
            purchase-price range by the expected multiple for your target
            industry (consult our{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              industry multiples benchmarks
            </Link>).
            A $2M purchase price at 4x implies $500K in EBITDA.
          </li>
          <li>
            <strong>Stress-test the cash flow.</strong> Model annual debt
            service, a market-rate salary, taxes, and a 10&ndash;15% cash
            reserve. If the remaining free cash flow is negative or barely
            positive, the business is too small for that debt load.
          </li>
          <li>
            <strong>Validate against your experience.</strong> Compare the
            employee count, operational complexity, and industry dynamics
            against your background. Conduct thorough{" "}
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              financial due diligence
            </Link>{" "}
            before committing to any deal at any size.
          </li>
        </ol>

        {/* ── H2 #8 ── */}
        <h2 className={h2Class}>
          Frequently asked questions
        </h2>

        <h3 className={h3Class}>
          What is the minimum EBITDA I should target for a first acquisition?
        </h3>
        <p>
          For a self-funded buyer using SBA financing, $500K in EBITDA is a
          practical floor. Below that level, debt service plus a reasonable
          salary leaves no margin for reinvestment or unexpected expenses.
          The 2024 Stanford data shows that the median search fund
          acquisition had $2.2 million in EBITDA, but self-funded searchers
          (who use more leverage and less equity) often target the
          $500K&ndash;$1.5M range successfully. The key test: after annual
          debt service and a $120K&ndash;$150K salary, does at least 15% of
          EBITDA remain as free cash flow? If not, the business is too small
          for that capital structure.
        </p>

        <h3 className={h3Class}>
          Should I buy based on revenue or EBITDA?
        </h3>
        <p>
          Always anchor on EBITDA (or SDE for businesses under ~$1M in
          earnings). Revenue without profitability is meaningless for an
          acquisition &mdash; you cannot service debt with revenue, only with
          cash flow. A $5M-revenue business at 8% margins ($400K EBITDA) is
          a fundamentally different acquisition than a $3M-revenue business
          at 30% margins ($900K EBITDA), even though the first &ldquo;sounds
          bigger.&rdquo; The exception is high-growth SaaS or
          technology businesses, where revenue multiples are standard
          because buyers expect margins to expand post-acquisition. For
          traditional industries &mdash; services, manufacturing,
          distribution &mdash; EBITDA is the only metric that matters for
          sizing and pricing. Our{" "}
          <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">
            valuation guide for sellers
          </Link>{" "}
          explains how both metrics are used in practice.
        </p>

        <h3 className={h3Class}>
          How do I compete with private equity at larger deal sizes?
        </h3>
        <p>
          Below $3M in EBITDA, PE competition is limited &mdash; these
          deals are too small for most institutional funds. Between $3M and
          $5M, you will encounter PE add-on buyers (who already own a
          platform in your industry), but you can compete by offering
          sellers what PE firms often cannot: continuity. Many founders
          prefer selling to an individual operator who will preserve the
          culture and keep the team intact. Above $5M in EBITDA, competing
          without institutional capital is difficult. The best strategies
          are to focus on proprietary deal flow (approaching owners directly
          rather than through brokers), target industries that PE firms
          overlook, or partner with investors through a{" "}
          <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
            traditional search fund structure
          </Link>{" "}
          that gives you the capital to compete.
        </p>

        <h3 className={h3Class}>
          Can I start small and grow into a larger business through add-ons?
        </h3>
        <p>
          Yes, and this is an increasingly popular strategy. Buy a
          &ldquo;platform&rdquo; business at $1M&ndash;$2M in EBITDA (where
          multiples are 3.5&ndash;5x), then acquire smaller tuck-in
          businesses at 2&ndash;3.5x that integrate into your existing
          operations. This approach &mdash; sometimes called
          buy-and-build &mdash; generates &ldquo;multiple arbitrage&rdquo;:
          you buy small companies at low multiples, consolidate them into a
          larger entity, and eventually sell the combined platform at the
          higher multiple that larger businesses command. A $1.5M-EBITDA
          platform that grows to $4M through organic gains and two add-ons
          could see its exit multiple expand from 4x to 6&ndash;7x,
          creating significant equity value. The key is ensuring your
          initial platform acquisition has the management capacity,
          systems, and geographic reach to absorb bolt-on businesses. Review
          our checklist for{" "}
          <Link href="/learn/what-makes-good-acquisition-target" className="text-apple-accent hover:underline">
            what makes a good acquisition target
          </Link>{" "}
          to evaluate platform potential.
        </p>

        <h3 className={h3Class}>
          What if I have no money &mdash; can I still acquire a business?
        </h3>
        <p>
          Traditional search funds solve this problem: investors fund the
          search phase ($400K&ndash;$600K over 2 years) and then fund the
          acquisition equity ($2M&ndash;$10M+). The searcher contributes
          time and expertise, not capital, and receives 20&ndash;30% of the
          post-acquisition equity upon closing. This model specifically
          targets businesses in the $1.5M&ndash;$5M EBITDA range. If the
          search fund model is not available to you, creative structures
          like 100% seller financing, earnouts, or SBA loans with minimal
          equity injection (as low as 5% cash with the right seller note
          structure) can work for smaller deals. See our{" "}
          <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
            complete breakdown of capital requirements
          </Link>{" "}
          for every deal size and financing approach.
        </p>
      </div>
    </article>
  );
}
