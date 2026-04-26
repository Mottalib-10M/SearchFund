import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function WhatIsMyBusinessWorthArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Is My Business Worth? How to Calculate Your Company&rsquo;s True Value
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          Every business owner eventually asks the same question: what is my business actually worth? The answer
          determines whether you can retire comfortably, attract the right buyer, or negotiate from a position of
          strength. According to the{" "}
          <a href="https://www.bizbuysell.com/insight-report/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            BizBuySell 2025 Insight Report
          </a>, the median small business sold for $350,000 last year, but that figure masks a wide range
          from sub-$100K Main Street shops to $10M+ lower middle market companies. This guide walks you through
          the exact methods buyers use to value a business, what drives your multiple up or down, and how to
          maximize your sale price before going to market.
        </p>

        {/* ─── SECTION 1 ─── */}
        <h2 className={h2Class}>The Core Formula: Multiples of Earnings</h2>
        <p>
          The vast majority of small and mid-size businesses are valued using a straightforward formula:
          <strong> Business Value = Adjusted Earnings x Multiple</strong>. The &ldquo;adjusted earnings&rdquo;
          component is either SDE (Seller&rsquo;s Discretionary Earnings) for owner-operated businesses or EBITDA
          (Earnings Before Interest, Taxes, Depreciation &amp; Amortization) for businesses with a management team
          in place. Understanding which metric applies to your situation is the single most important step in
          getting an accurate valuation.
        </p>
        <p>
          For businesses under roughly $1M in annual revenue, buyers typically use SDE because the owner&rsquo;s
          compensation is the largest discretionary expense. SDE adds back the owner&rsquo;s salary, personal
          benefits, and one-time expenses to arrive at total economic benefit to a single owner-operator.
          Businesses above that threshold, especially those with $1M+ EBITDA and a management layer
          use EBITDA because the buyer is purchasing a going concern that operates independently. The{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
            adjusted EBITDA calculation
          </Link>{" "}
          involves normalizing for non-recurring items, above-market owner compensation, and personal expenses
          run through the business.
        </p>
        <p>
          Data from the{" "}
          <a href="https://www.bizbuysell.com/learning-center/industry-valuation-multiples/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            BizBuySell Valuation Benchmarks
          </a>{" "}
          shows that average SDE multiples across all industries cluster around 2.57x, while revenue multiples
          average 0.67x. But these averages obscure enormous variation by industry, size, and growth rate. A
          well-run SaaS company might trade at 8-12x EBITDA, while a restaurant might sell at 1.8-2.5x
          SDE. Understanding where your business falls on this spectrum is what separates a realistic expectation
          from a painful surprise during negotiations.
        </p>

        {/* ─── SECTION 2 ─── */}
        <h2 className={h2Class}>Five Valuation Methods Buyers Actually Use</h2>
        <p>
          Buyers do not rely on a single approach. Most sophisticated acquirers, whether search fund
          operators, private equity firms, or strategic buyers, triangulate across multiple methods before
          settling on a price range. Here are the five you need to understand.
        </p>

        <h3 className={h3Class}>1. Earnings Multiple (Most Common)</h3>
        <p>
          This is the workhorse method for Main Street and lower middle market deals. You calculate adjusted
          SDE or EBITDA, then multiply by an industry-appropriate factor. For a service business generating
          $200,000 in SDE, a 2.5x multiple produces a $500,000 valuation. For a manufacturing firm with $2M
          in EBITDA, a 4.5x multiple yields $9M. See our{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            EBITDA multiples by industry
          </Link>{" "}
          guide for current benchmarks across 20+ sectors.
        </p>

        <h3 className={h3Class}>2. Comparable Transactions</h3>
        <p>
          This method examines what similar businesses actually sold for, not theoretical multiples, but
          closed transactions. Databases like BizBuySell, DealStats (formerly Pratt&rsquo;s Stats), and
          PitchBook aggregate transaction data. The challenge for small businesses is that deal data below $5M
          is sparse and inconsistent. According to the{" "}
          <a href="https://www.prnewswire.com/news-releases/the-ibba-and-ma-source-announce-the-results-of-the-market-pulse-q3-2025-survey-302617915.html" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            IBBA Market Pulse Q3 2025 Survey
          </a>, the{" "}
          <a href="https://digitalcommons.pepperdine.edu/gsbm_pcm_pcmr/18/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Pepperdine 2025 Private Capital Markets Report
          </a>{" "}
          found that recast EBITDA multiples remain the preferred valuation approach for 76% of M&amp;A
          advisors, with guideline company transactions carrying the largest weight (33%) in the final
          valuation.
        </p>

        <h3 className={h3Class}>3. Discounted Cash Flow (DCF)</h3>
        <p>
          DCF projects your future cash flows over 5-10 years and discounts them back to present value
          using a rate that reflects the risk of your business. For small, privately held businesses, that
          discount rate typically ranges from 20% to 40%, far higher than the 8-12% used for
          public companies, because private businesses carry concentration risk, limited liquidity, and
          key-person exposure. Our{" "}
          <Link href="/learn/dcf-valuation-small-business" className="text-apple-accent hover:underline">
            DCF valuation for small businesses
          </Link>{" "}
          guide explains how to build a defensible model without overcounting growth assumptions.
        </p>

        <h3 className={h3Class}>4. Asset-Based Valuation</h3>
        <p>
          This method sums the fair market value of all tangible and intangible assets, then subtracts
          liabilities. It is most useful for asset-heavy businesses (manufacturing, real estate holding
          companies, distribution) or for businesses being liquidated. For a going concern with strong
          earnings, asset-based valuations typically produce the lowest number and serve as a floor.
        </p>

        <h3 className={h3Class}>5. Revenue Multiple</h3>
        <p>
          Revenue multiples are used when earnings are negative or volatile but revenue is growing rapidly.
          This is common in SaaS (3-8x ARR), e-commerce (0.5-2x revenue), and early-stage
          businesses. The{" "}
          <a href="https://www.shopify.com/blog/business-valuation" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Shopify 2026 valuation benchmarks
          </a>{" "}
          report software multiples at 10.59x EBITDA and e-commerce marketplace services at 9.41x, though
          these figures represent larger enterprises and should be adjusted downward for small businesses.
        </p>

        {/* ─── SECTION 3 ─── */}
        <h2 className={h2Class}>What Multiple Should You Expect? Industry Benchmarks for 2025</h2>
        <p>
          Your industry is the single biggest determinant of your multiple, but size and growth rate matter
          almost as much. Here is what the data shows for businesses with $500K-$5M in annual
          earnings, based on the{" "}
          <a href="https://www.bizbuysell.com/insight-report/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            BizBuySell 2025 data
          </a>{" "}
          and the{" "}
          <a href="https://www.ibba.org/resource-center/industry-research/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            IBBA Market Pulse surveys
          </a>:
        </p>
        <ul className={ulClass}>
          <li><strong>Technology &amp; SaaS:</strong> 5-12x EBITDA. Recurring revenue, high margins, and scalability drive the premium. SDE multiples for small tech firms average just above 3x</li>
          <li><strong>Healthcare services:</strong> 4-8x EBITDA. Regulatory moats and aging demographics sustain demand</li>
          <li><strong>Professional services</strong> (accounting, consulting, staffing): 3-5x EBITDA. Heavily dependent on whether client relationships transfer with the sale</li>
          <li><strong>Manufacturing:</strong> 3-5x EBITDA. The BizBuySell 2025 data shows a median sale price of $650,000 for manufacturing, with median cash flow of $254,489</li>
          <li><strong>Home services</strong> (HVAC, plumbing, electrical): 3-5x EBITDA for well-run operations with recurring maintenance contracts. Lower for project-based firms</li>
          <li><strong>Service businesses (general):</strong> 1.69-3.04x SDE. The median sale price rose 5% to $340,000 in 2025 with average cash flow multiples of 2.52x</li>
          <li><strong>Restaurants &amp; food service:</strong> 1.5-2.5x SDE. Thin margins and high owner involvement suppress multiples</li>
          <li><strong>Retail:</strong> 1.5-2.5x SDE. The BizBuySell data shows median sale prices fell 2% to $250,000 in 2025</li>
        </ul>
        <p>
          Size creates a step-function effect on multiples. The IBBA Q4 2024 survey found that businesses
          valued between $5M and $50M traded at an average of 6.0x EBITDA, on par with the hot market
          of Q4 2021. Businesses valued between $1M and $2M traded at materially lower multiples, and
          sub-$1M businesses lower still. The{" "}
          <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
            cost of buying a business
          </Link>{" "}
          is directly tied to these multiples.
        </p>

        {/* ─── SECTION 4 ─── */}
        <h2 className={h2Class}>Eight Factors That Drive Your Valuation Up, or Down</h2>
        <p>
          Two businesses in the same industry with identical revenue can sell at vastly different multiples.
          The difference comes down to risk and transferability. Here are the eight factors that matter most
          to buyers.
        </p>

        <h3 className={h3Class}>Factors that increase your value</h3>
        <ol className={olClass}>
          <li>
            <strong>Recurring revenue.</strong> Contracts, subscriptions, and maintenance agreements reduce
            acquisition risk. Businesses with 70%+ recurring revenue command 1-2x higher multiples
            than project-based peers. Our{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              recurring revenue models
            </Link>{" "}
            guide explains how to build predictability into your revenue streams.
          </li>
          <li>
            <strong>Diversified customer base.</strong> No single customer should represent more than 10% of
            revenue. When a customer accounts for 30%+ of revenue, buyers see a risk that can slash multiples
            by 1-2 full turns. Read more about{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration risk
            </Link>{" "}
            and how to mitigate it before a sale.
          </li>
          <li>
            <strong>Management independence.</strong> If the business runs without you, with a general
            manager, department heads, and documented processes, buyers pay a premium because they are
            buying a self-sustaining operation rather than a job. The{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner-dependent business
            </Link>{" "}
            article explores how to reduce this risk.
          </li>
          <li>
            <strong>Growth trajectory.</strong> Consistent revenue and profit growth over 3+ years signals
            a durable business. The{" "}
            <a href="https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              2024 Stanford Search Fund Study
            </a>{" "}
            found that the median acquired company had a 25% EBITDA growth rate at the time of purchase.
          </li>
        </ol>

        <h3 className={h3Class}>Factors that decrease your value</h3>
        <ol className={olClass}>
          <li>
            <strong>Owner dependence.</strong> If you are the primary salesperson, technician, and manager,
            the business is essentially you. Buyers apply steep discounts, often 30-50% below
            comparable businesses with management teams, because they need to replace your
            institutional knowledge after closing.
          </li>
          <li>
            <strong>Declining revenue.</strong> Even if profits are stable, a shrinking top line signals
            market erosion or competitive pressure. Buyers project trends forward, and a decline suggests
            earnings will follow.
          </li>
          <li>
            <strong>Poor financial records.</strong> Mixing personal and business expenses, operating with
            cash-basis accounting, or lacking historical financials creates uncertainty. Buyers discount
            uncertainty aggressively. According to a{" "}
            <a href="https://www.boxwoodpartners.com/press-releases/how-quality-of-earnings-impacts-your-sale-priceand-how-to-get-ahead-of-it" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              Boxwood Partners analysis
            </a>, finding $500K in questionable adjustments at a 12x multiple translates to a $6M reduction
            in purchase price. A{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              quality of earnings report
            </Link>{" "}
            is the buyer&rsquo;s primary tool for validating, or challenging, your numbers.
          </li>
          <li>
            <strong>Deferred maintenance and capex.</strong> Aging equipment, outdated technology, or
            facilities needing renovation represent future cash outlays the buyer must absorb. These get
            subtracted from the purchase price dollar-for-dollar or structured as seller holdbacks.
          </li>
        </ol>

        {/* ─── SECTION 5 ─── */}
        <h2 className={h2Class}>How to Calculate Your Business Value: A Step-by-Step Walkthrough</h2>
        <p>
          Here is the process a buyer or M&amp;A advisor follows when valuing a small business.
          Working through these steps yourself gives you a realistic baseline before engaging
          professionals.
        </p>

        <h3 className={h3Class}>Step 1: Recast your financials</h3>
        <p>
          Start with your last three years of tax returns and profit &amp; loss statements. Add back
          owner salary, personal expenses (vehicle, insurance, travel, meals), one-time costs (lawsuits,
          remodels, equipment replacements), and above-market rent paid to owner-owned property. If
          family members are on payroll above their market-rate compensation, add back the excess. The
          result is your adjusted SDE or EBITDA.
        </p>
        <p>
          A word of caution: aggressive add-backs invite scrutiny. A buyer&rsquo;s{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial due diligence
          </Link>{" "}
          team will challenge every adjustment. If you add back $300K in &ldquo;discretionary&rdquo;
          expenses but cannot document them, you lose credibility and potentially the deal.
        </p>

        <h3 className={h3Class}>Step 2: Identify your multiple range</h3>
        <p>
          Research comparable transactions in your industry using BizBuySell, DealStats, or industry
          association data. Adjust for size (smaller businesses get lower multiples), geography (urban
          businesses often trade higher than rural), and trend (growing businesses get premiums, declining
          businesses get discounts). Our{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            industry multiples reference
          </Link>{" "}
          is a good starting point.
        </p>

        <h3 className={h3Class}>Step 3: Apply the formula</h3>
        <p>
          Multiply your adjusted earnings by the low end and high end of your multiple range to
          establish a valuation corridor. For example, a landscaping company with $400,000 in SDE
          and a multiple range of 2.0-3.0x would have a valuation range of $800,000 to
          $1,200,000. The final price within that range depends on the factors discussed above:
          customer concentration, owner dependence, growth trend, and competitive dynamics of the sale
          process.
        </p>

        <h3 className={h3Class}>Step 4: Cross-check with other methods</h3>
        <p>
          Run a DCF analysis using conservative growth assumptions to see if it confirms your
          multiple-based valuation. Check asset values to establish a floor. If your DCF produces a
          number far above or below your multiple-based estimate, investigate why, the
          discrepancy often reveals important assumptions about growth or risk.
        </p>

        {/* ─── SECTION 6 ─── */}
        <h2 className={h2Class}>How to Maximize Your Business&rsquo;s Sale Price</h2>
        <p>
          The best time to increase your business&rsquo;s value is 18-24 months before you plan to sell.
          Rushed sales leave money on the table. Here are the highest-impact moves, in order of priority.
        </p>
        <p>
          <strong>Clean up your financials.</strong> Eliminate personal expenses from the business. Maintain
          consistent accrual-basis bookkeeping. Consider commissioning a reviewed financial statement or a
          sell-side quality of earnings report. When buyers see clean, well-organized financials, they perceive
          lower risk, and lower risk translates directly to higher multiples. The{" "}
          <a href="https://digitalcommons.pepperdine.edu/gsbm_pcm_pcmr/18/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
            Pepperdine 2025 report
          </a>{" "}
          found that 31% of M&amp;A engagements failed to close, with valuation gaps cited as the primary
          reason in 26% of cases. Clean financials reduce the risk of post-LOI price renegotiation.
        </p>
        <p>
          <strong>Build a management team.</strong> The single highest-value action you can take is making
          yourself replaceable. Hire or promote a general manager. Document standard operating procedures.
          Transition key customer relationships to account managers. A business that runs without the owner
          shifts from the &ldquo;job&rdquo; category (2-3x SDE) to the &ldquo;business&rdquo;
          category (4-6x EBITDA), often doubling or tripling the enterprise value.
        </p>
        <p>
          <strong>Lock in contracts.</strong> Convert verbal agreements to written contracts with customers and
          suppliers. Extend lease terms. Renew key vendor agreements. Every contract that survives the sale
          reduces buyer risk. Our{" "}
          <Link href="/learn/prepare-business-for-sale" className="text-apple-accent hover:underline">
            prepare your business for sale
          </Link>{" "}
          checklist covers the full list of operational improvements.
        </p>
        <p>
          <strong>Run a competitive process.</strong> Engaging 3-5 qualified buyers through a structured
          sale process typically increases the final price by 10-20% compared to negotiating with a
          single buyer. Different buyer types, strategic acquirers, private equity firms,{" "}
          <Link href="/learn/selling-to-search-fund" className="text-apple-accent hover:underline">
            search fund operators
          </Link>, and individual buyers, value different attributes, and competition creates urgency
          that prevents low-ball offers.
        </p>

        {/* ─── SECTION 7 ─── */}
        <h2 className={h2Class}>Who Can Value Your Business, and What It Costs</h2>
        <p>
          The right professional depends on your business size and the purpose of the valuation. Here are
          your options, from least to most expensive.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Online valuation tools ($0-$500):</strong> Automated calculators from BizBuySell,
            BizEx, or MassMutual provide rough estimates based on industry averages and basic financial
            inputs. Useful for initial orientation, but they miss nuances like customer concentration,
            management depth, and competitive positioning. Treat these as a starting point, not a final
            answer.
          </li>
          <li>
            <strong>Business broker opinion of value ($0-$2,000):</strong> Brokers provide free or
            low-cost estimates, often as part of a listing engagement pitch. Be aware that some brokers
            inflate valuations to win listings. A broker&rsquo;s opinion is most useful when paired with
            comparable transaction data from their own closed deals.
          </li>
          <li>
            <strong>Certified valuation analyst ($5,000-$15,000):</strong> Credentialed professionals
            (CVA, ABV, or ASA designations) produce formal valuation reports that hold up in legal and tax
            proceedings. The{" "}
            <a href="https://www.nacva.com/26bv0309upp" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              National Association of Certified Valuators and Analysts
            </a>{" "}
            maintains a directory of credentialed professionals. A formal valuation is recommended for
            businesses worth more than $1M or when estate planning, divorce, or partner disputes are
            involved.
          </li>
          <li>
            <strong>M&amp;A advisor ($15,000+ retainer plus success fee):</strong> For businesses above $3M
            in enterprise value, an M&amp;A advisor provides a market-based valuation range, runs the sale
            process, and negotiates deal terms. Advisors typically charge a monthly retainer plus a success
            fee of 3-10% of the transaction value, with the percentage decreasing as deal size
            increases.
          </li>
        </ul>

        {/* ─── SECTION 8 ─── */}
        <h2 className={h2Class}>Deal Structure: Why the Sale Price Is Not the Whole Story</h2>
        <p>
          A common mistake sellers make is focusing exclusively on the headline purchase price. In
          practice, deal structure can be just as important as the number. A $5M offer with 80% at
          closing and a clean asset purchase is often more valuable than a $6M offer with 50% at
          closing and 50% in a three-year{" "}
          <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
            earn-out
          </Link>{" "}
          tied to aggressive performance targets.
        </p>
        <p>
          Common deal structure components include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cash at closing:</strong> The cleanest form of proceeds. Most sellers prioritize
            maximizing cash at close, even if it means accepting a slightly lower total price.
          </li>
          <li>
            <strong>Seller financing:</strong> The seller carries a note for 10-30% of the purchase
            price, typically at 5-8% interest over 3-7 years. According to the{" "}
            <a href="https://www.bizbuysell.com/insight-report/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">
              BizBuySell data
            </a>, roughly 75-90% of Main Street transactions include some form of{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>. Offering it can widen your buyer pool and often justifies a higher total price.
          </li>
          <li>
            <strong>Earn-outs:</strong> A portion of the price is contingent on future performance
            (typically revenue or EBITDA targets over 1-3 years). Earn-outs bridge valuation gaps
            but introduce risk that you will not receive the full amount.
          </li>
          <li>
            <strong>Working capital adjustments:</strong> The{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
              working capital peg
            </Link>{" "}
            ensures the business is delivered with a normalized level of current assets. Shortfalls reduce
            the seller&rsquo;s proceeds at closing; surpluses increase them.
          </li>
        </ul>

        {/* ─── FAQ ─── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How do I calculate what my business is worth quickly?</h3>
        <p>
          Start with your adjusted SDE or EBITDA from the last 12 months. Multiply by an
          industry-appropriate multiple (typically 2-4x SDE for Main Street businesses, 3-6x
          EBITDA for lower middle market). This gives you a rough range within 15 minutes. For more
          precision, cross-check with comparable transactions and a{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            formal valuation approach
          </Link>. Online calculators from BizBuySell or BizEx can also provide a baseline estimate.
        </p>

        <h3 className={h3Class}>What is the difference between SDE and EBITDA for valuing a business?</h3>
        <p>
          SDE (Seller&rsquo;s Discretionary Earnings) adds back the owner&rsquo;s total compensation,
          personal benefits, and one-time expenses to show the total economic benefit available to a
          single owner-operator. EBITDA strips out only interest, taxes, depreciation, and amortization
          it does not add back the owner&rsquo;s salary. SDE is used for businesses where the
          owner is the primary operator (typically under $1-2M in revenue). EBITDA is used when a
          management team is in place and the owner&rsquo;s salary is a market-rate expense. The choice
          between these two metrics can shift your valuation by 20-40%, so getting it right matters.
        </p>

        <h3 className={h3Class}>Do I need a professional appraisal to sell my business?</h3>
        <p>
          Not always. For businesses under $500K in value, a broker&rsquo;s opinion and comparable
          transaction data may be sufficient. For businesses above $1M, a formal valuation from a
          credentialed professional (CVA, ABV, or ASA) provides credibility with buyers and lenders.
          Formal appraisals are required for estate planning, divorce proceedings, and certain IRS
          filings. Even when not legally required, a professional valuation often pays for itself by
          anchoring negotiations with documented, defensible numbers.
        </p>

        <h3 className={h3Class}>How long does it take to value and sell a business?</h3>
        <p>
          A professional valuation typically takes 2-6 weeks. The sale process itself takes 6-12
          months from listing to closing for most small businesses. The Pepperdine 2025 report noted that
          31% of engagements never close, most often due to valuation gaps between buyer and seller
          expectations. Starting your{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit planning
          </Link>{" "}
          18-24 months before your target sale date gives you time to improve financials, build
          management depth, and position the business for maximum value.
        </p>

        <h3 className={h3Class}>Can I value my business based on revenue alone?</h3>
        <p>
          Revenue-based valuations are used in specific circumstances: businesses with negative or volatile
          earnings, high-growth companies reinvesting all profits, and SaaS businesses where ARR
          (Annual Recurring Revenue) is the industry-standard metric. For a profitable small business,
          earnings-based methods are more accurate because they reflect what the buyer will actually earn.
          A business with $2M in revenue but only $100K in profit is worth far less than a business with
          $1M in revenue and $400K in profit. Revenue multiples can be useful as a quick cross-check,
          but they should never be the sole basis for setting an asking price.
        </p>
      </div>
    </article>
  );
}
