import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function BusinessValuationArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Value a Small Business for Acquisition</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Valuation is both an art and a science. For search fund entrepreneurs
          acquiring small and medium businesses, understanding the key valuation
          methodologies — and their limitations — is essential to negotiating a
          fair price.
        </p>

        <p>
          Unlike public company valuations, which benefit from liquid markets,
          comparable transaction databases, and analyst coverage, small
          business valuations require significant judgment. The universe of
          comparable transactions is limited, financial statements may not be
          audited, and the business&apos;s performance is often deeply
          intertwined with the departing owner. This guide walks you through
          the primary valuation methods used in search fund acquisitions,
          the adjustments that matter most, and the common mistakes that lead
          searchers to overpay.
        </p>

        <h2 className={h2Class}>EBITDA multiples: The primary method</h2>
        <p>
          The most common valuation approach in search fund acquisitions is
          applying a multiple to the company&apos;s adjusted EBITDA. In the search
          fund world, typical multiples range from 3x to 6x EBITDA depending on:
        </p>
        <ul className={ulClass}>
          <li><strong>Company size:</strong> Larger companies command higher multiples.</li>
          <li><strong>Growth rate:</strong> Faster-growing businesses justify premium valuations.</li>
          <li><strong>Recurring revenue:</strong> Subscription or contract-based revenue is valued more highly than project-based revenue.</li>
          <li><strong>Customer concentration:</strong> Diversified customer bases reduce risk and support higher multiples.</li>
          <li><strong>Industry:</strong> Technology and healthcare companies typically command higher multiples than manufacturing or construction.</li>
          <li><strong>Geography:</strong> European SMEs generally trade at lower multiples than comparable US businesses.</li>
        </ul>

        <p>
          To understand these ranges more concretely, consider the following
          benchmarks from the search fund ecosystem. A business with $1
          million to $2 million of EBITDA in a stable, non-cyclical industry
          with moderate growth and a diversified customer base will typically
          trade at 4x to 5x EBITDA. That same business with a single customer
          representing 30% of revenue might trade at 3x to 3.5x. And a
          software or tech-enabled services business with 80%+ recurring
          revenue and 15%+ annual growth might command 5.5x to 7x or higher.
        </p>

        <p>
          <strong>What drives the multiple higher:</strong> strong revenue
          growth (10%+ annually), high gross margins (50%+), minimal customer
          concentration (no customer above 10% of revenue), recurring or
          contractual revenue, low capital expenditure requirements, a
          defensible competitive position (regulatory moat, long-term
          contracts, high switching costs), and a management team that can
          operate independently of the owner.
        </p>

        <p>
          <strong>What drives the multiple lower:</strong> flat or declining
          revenue, low margins, high customer concentration, project-based
          or transactional revenue, significant capex requirements, owner
          dependency, cyclical end markets, and limited barriers to entry.
        </p>

        <h2 className={h2Class}>Adjusted EBITDA: The foundation</h2>
        <p>
          Before applying a multiple, you must calculate the &ldquo;true&rdquo;
          EBITDA by making normalization adjustments. A professional <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">Quality of Earnings analysis</Link> is the best way to validate these numbers:
        </p>
        <ul className={ulClass}>
          <li><strong>Owner compensation:</strong> Replace the owner&apos;s salary with market-rate CEO compensation.</li>
          <li><strong>Personal expenses:</strong> Remove any personal expenses run through the business (vehicles, travel, family members on payroll).</li>
          <li><strong>One-time items:</strong> Strip out non-recurring revenues and expenses (litigation, restructuring, COVID impacts).</li>
          <li><strong>Related-party transactions:</strong> Normalize any below-market or above-market deals with related entities.</li>
          <li><strong>Deferred maintenance:</strong> Add back any capex that has been deferred and will need to be spent.</li>
        </ul>

        <p>
          The normalization process is where most valuation disputes arise
          between buyers and sellers. A seller may claim $2 million of
          adjusted EBITDA, but after a thorough QoE analysis, the true number
          might be $1.5 million — a difference of $2 million or more in
          enterprise value at a 4x multiple.
        </p>

        <p>
          <strong>Owner compensation adjustments</strong> are typically the
          largest single item. Many small business owners pay themselves well
          below (or well above) market-rate CEO compensation. An owner who
          takes $400,000 in salary but whose role would require a $200,000
          replacement CEO creates a $200,000 add-back to EBITDA. Conversely,
          an owner who pays themselves $80,000 while functioning as CEO, head
          of sales, and CFO simultaneously may require $300,000 or more in
          combined replacement salary — a negative adjustment that reduces
          adjusted EBITDA.
        </p>

        <p>
          <strong>One-time and non-recurring expenses</strong> require careful
          scrutiny. Sellers will naturally try to classify as many expenses
          as possible as &ldquo;one-time,&rdquo; but a pattern of annual
          &ldquo;one-time&rdquo; expenses is, by definition, recurring. Ask
          yourself: if this expense occurred in at least two of the last
          five years, is it really non-recurring? Be especially skeptical
          of large one-time add-backs in the most recent year, as sellers
          may be managing their financials to maximize the adjustment.
        </p>

        <p>
          <strong>Related-party transactions</strong> are common in private
          businesses. The owner may lease the building from a separate entity
          they control at above-market rates, employ family members in roles
          that would not exist under new ownership, or purchase supplies from
          a related business at non-market prices. Each of these needs to be
          normalized to reflect what the business would look like under
          independent, arm&apos;s-length operation.
        </p>

        <p>
          <strong>Discretionary spending.</strong> Some owners run personal
          expenses through the business — country club memberships, luxury
          vehicles, personal travel, charitable donations, and other
          expenses that would not continue under new ownership. These are
          legitimate add-backs, but they also raise a question: if the
          owner has been treating the business as a personal piggy bank,
          what other financial discipline issues might exist?
        </p>

        <h2 className={h2Class}>Discounted cash flow (DCF)</h2>
        <p>
          DCF analysis projects the company&apos;s future free cash flows and
          discounts them back to present value. While theoretically rigorous,
          DCF is sensitive to assumptions about growth rates, margins, and
          discount rates. It is most useful as a sanity check on the multiple-based
          valuation rather than the primary valuation method for SME acquisitions.
        </p>

        <p>
          The reason DCF is less commonly used as a primary valuation method
          for search fund acquisitions is simple: the model is only as good
          as its inputs, and small businesses rarely have the kind of
          reliable, long-range projections that make a DCF meaningful. A
          small change in the assumed terminal growth rate or discount rate
          can swing the valuation by 30% or more. Most sellers and their
          brokers are not sophisticated enough to engage in a DCF-based
          negotiation, and most SBA lenders do not use DCF to underwrite
          their loans.
        </p>

        <p>
          <strong>When to use a DCF.</strong> That said, DCF can be valuable
          in specific situations. If the business has a large backlog of
          contracted revenue that makes future cash flows highly predictable,
          a DCF can capture that value better than a simple multiple. If you
          are planning significant capital investments that will reduce
          near-term cash flow but increase long-term value, a DCF can
          justify paying a higher multiple today. And if the business is
          in a period of rapid transition — growing or shrinking
          significantly — a DCF can model the trajectory more accurately
          than applying a static multiple to a single year&apos;s EBITDA.
        </p>

        <p>
          <strong>Practical DCF tips.</strong> If you do use a DCF, project
          cash flows for 5 to 7 years. Use a discount rate of 20-30% to
          reflect the illiquidity and risk of a small private business (this
          is significantly higher than what you would use for a public
          company). Apply a terminal multiple of 3x to 5x EBITDA rather than
          a perpetuity growth model, as the terminal value assumption is the
          largest driver of the valuation. And always present the DCF
          alongside a multiple-based valuation — the two should tell a
          consistent story.
        </p>

        <h2 className={h2Class}>Asset-based valuation</h2>
        <p>
          For asset-heavy businesses (manufacturing, real estate, distribution),
          an asset-based approach may be appropriate. This method values the
          company based on the fair market value of its tangible and intangible
          assets minus liabilities. It typically sets a floor for the valuation.
        </p>

        <p>
          <strong>When asset-based valuation matters.</strong> Asset-based
          valuation is most relevant in several scenarios: when the business
          owns significant real estate or land that has appreciated in value,
          when the company has specialized equipment or machinery that holds
          its resale value, when the business is marginally profitable but
          sits on a valuable asset base, or when you are evaluating a
          business in distress where the going-concern value may be lower
          than the liquidation value.
        </p>

        <p>
          In manufacturing businesses, it is common to commission an
          independent equipment appraisal to determine the fair market value
          and orderly liquidation value of the company&apos;s machinery.
          For businesses that include real estate, you will need a commercial
          appraisal. These valuations can be eye-opening — the book value
          of assets on the balance sheet often bears little resemblance to
          their actual market value, especially for fully depreciated
          equipment that still has years of useful life remaining.
        </p>

        <p>
          <strong>Practical consideration:</strong> Even when you are
          primarily using an EBITDA multiple to value the business, the
          asset-based valuation serves as an important floor. If the
          enterprise value implied by the EBITDA multiple is significantly
          below the liquidation value of the assets, the multiple may be
          too low — or the business is underearning relative to its asset
          base, which could represent an opportunity for operational
          improvement.
        </p>

        <h2 className={h2Class}>&ldquo;What multiple should I pay?&rdquo;</h2>
        <p>
          This is the question every searcher asks, and there is no single
          right answer. However, you can build a framework for determining
          the appropriate multiple based on the specific characteristics of
          the business you are evaluating. Consider the following factors.
        </p>

        <ul className={ulClass}>
          <li><strong>Revenue growth trajectory:</strong> Is the business growing at 10%+ annually, flat, or declining? A growing business in a growing market justifies 5x+ EBITDA. A flat business in a stable market warrants 4x to 4.5x. A declining business should trade at 3x to 3.5x at most.</li>
          <li><strong>Gross and EBITDA margins:</strong> Higher margins provide a larger cushion for debt service and operational missteps. Businesses with 20%+ EBITDA margins are generally safer leveraged acquisitions and support higher multiples.</li>
          <li><strong>Customer concentration:</strong> As a rule of thumb, discount the multiple by 0.25x to 0.5x for each 10% of revenue concentrated in a single customer above the 10% threshold. A business with 25% concentration in its largest customer should trade at 0.5x to 1x lower than an otherwise identical business with no customer above 10%.</li>
          <li><strong>Owner dependency:</strong> If the business cannot function without the current owner — because the owner holds all the customer relationships, makes all the key decisions, or possesses irreplaceable technical knowledge — the business is worth less. You are buying a job, not a company. Discount the multiple by 0.5x to 1x for high owner dependency.</li>
          <li><strong>Recurring vs. transactional revenue:</strong> A business with 80%+ recurring or contracted revenue is worth 1x or more higher in multiple than a comparable business with entirely transactional revenue. Recurring revenue provides predictability that supports leverage.</li>
          <li><strong>Capital intensity:</strong> Businesses that require ongoing capital expenditures (equipment replacement, vehicle fleets, technology upgrades) should trade at lower multiples than asset-light businesses, all else equal. Free cash flow conversion from EBITDA is what matters.</li>
        </ul>

        <p>
          A practical approach: start with a baseline multiple of 4x EBITDA
          for a typical search fund acquisition target (stable revenue, decent
          margins, manageable customer concentration). Then adjust up or down
          by 0.25x to 0.5x for each factor above. This gives you a range that
          you can defend to your investors and use as an anchor in negotiations
          with the seller.
        </p>

        <h2 className={h2Class}>Common valuation pitfalls</h2>
        <ul className={ulClass}>
          <li><strong>Overpaying due to deal fatigue:</strong> After months of <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">deal sourcing</Link>, the pressure to close a deal can lead to overpaying. Maintain discipline.</li>
          <li><strong>Ignoring working capital:</strong> The purchase price should include a normal level of working capital. Negotiate the target clearly during <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>.</li>
          <li><strong>Not adjusting for cyclicality:</strong> Some businesses have peak-year earnings that don&apos;t reflect normalized performance.</li>
          <li><strong>Underestimating transition costs:</strong> Budget for the seller&apos;s transition period, systems upgrades, and early operational improvements. Understanding your <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link> options helps ensure adequate capital.</li>
        </ul>

        <p>
          Beyond the pitfalls listed above, several additional mistakes
          commonly plague search fund entrepreneurs during the valuation
          process.
        </p>

        <p>
          <strong>Falling in love with a deal.</strong> After months of
          searching and dozens of dead ends, finding a business that meets
          most of your criteria can feel like finding water in a desert.
          This emotional attachment clouds your judgment and makes you
          rationalize a higher price. The antidote is to always maintain
          a pipeline of multiple opportunities and to have a trusted advisor
          or board member serve as a dispassionate check on your enthusiasm.
          If you find yourself arguing to your investors that the business is
          &ldquo;worth it&rdquo; despite the numbers not quite working, you
          have probably fallen in love.
        </p>

        <p>
          <strong>Ignoring working capital in the purchase price.</strong>
          Many first-time acquirers focus exclusively on the enterprise value
          and forget that the business needs adequate working capital to
          operate on day one. If the seller drains the working capital before
          closing — running down inventory, accelerating collections, or
          delaying payables — you may need to inject additional cash
          immediately after the acquisition. Negotiate a clear working
          capital peg in the LOI and build a true-up mechanism into the
          purchase agreement.
        </p>

        <p>
          <strong>Over-relying on projections.</strong> Sellers (and their
          brokers) love to present projections showing hockey-stick growth.
          Never pay for projected performance. Value the business based on
          its trailing 12-month or average historical earnings. If the
          seller believes the growth projections are credible, offer an
          earn-out tied to achieving those targets — this aligns incentives
          and protects you from overpaying for growth that never materializes.
        </p>

        <p>
          <strong>Comparing to wrong benchmarks.</strong> Search fund
          acquisitions are not private equity buyouts. Comparing your 4x
          EBITDA acquisition to middle-market PE deals that trade at 8x to
          12x is misleading. Search fund targets are smaller, less
          diversified, more owner-dependent, and less liquid. The appropriate
          benchmark is other search fund transactions, not Axial or PitchBook
          data for larger deals.
        </p>

        <p>
          <strong>Failing to stress-test the valuation.</strong> Before
          finalizing your offer price, run a downside scenario. What happens
          if revenue declines 10-15% in the first year? Can you still service
          your SBA loan? What if the largest customer leaves? What if you
          lose a key employee and need to hire a replacement at a higher
          salary? A good valuation is one that works not just in the base
          case, but in a range of plausible negative scenarios. Your
          investors and lender will ask these questions — have the answers
          ready before they do.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What EBITDA multiple should I pay for a small business?</h3>
        <p>
          According to the Stanford GSB 2024 Search Fund Study, the median
          acquisition multiple for search fund deals is approximately 5.5x
          EBITDA, though the range spans from 3x to 8x depending on business
          quality. Start with a baseline of 4x for a stable, modestly growing
          business with manageable customer concentration. Adjust upward by
          0.25&ndash;0.5x for each positive factor (high recurring revenue,
          strong growth, low owner dependency) and downward for each risk
          factor (customer concentration, declining revenue, high capex).
          The multiple should produce a deal that services its debt at 1.25x+
          DSCR under realistic assumptions.
        </p>

        <h3 className={h3Class}>How is small business valuation different from public company valuation?</h3>
        <p>
          Small business valuation relies heavily on EBITDA multiples rather
          than DCF or comparable public company analysis. Key differences
          include: illiquidity discounts of 20&ndash;40%, the need for
          extensive normalization adjustments (owner compensation, personal
          expenses, related-party transactions), limited comparable
          transaction data, and the absence of audited financials. IESE
          Business School&rsquo;s research on international search funds
          notes that European SME multiples tend to be 1&ndash;2x lower than
          US equivalents for similar businesses, reflecting differences in
          market depth and financing availability.
        </p>

        <h3 className={h3Class}>Should I use a Quality of Earnings report for valuation?</h3>
        <p>
          Yes. A{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings
          </Link>{" "}
          report independently validates the seller&rsquo;s adjusted EBITDA
          and typically catches 10&ndash;30% of claimed add-backs as
          unsupported. At a cost of $15K&ndash;$50K, it is one of the
          highest-ROI investments in the acquisition process. Engage a QoE
          provider as soon as the LOI is signed, not at the end of
          diligence. Lenders require a QoE for loan underwriting, and the
          validated EBITDA becomes the basis for your final purchase price
          negotiation.
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
