import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function BusinessValuationArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Value a Small Business for Acquisition</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Valuation is both an art and a science. For search fund entrepreneurs
          acquiring small and medium businesses, understanding the key valuation
          methodologies — and their limitations — is essential to negotiating a
          fair price.
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

        <h2 className={h2Class}>Adjusted EBITDA: The foundation</h2>
        <p>
          Before applying a multiple, you must calculate the &ldquo;true&rdquo;
          EBITDA by making normalization adjustments:
        </p>
        <ul className={ulClass}>
          <li><strong>Owner compensation:</strong> Replace the owner&apos;s salary with market-rate CEO compensation.</li>
          <li><strong>Personal expenses:</strong> Remove any personal expenses run through the business (vehicles, travel, family members on payroll).</li>
          <li><strong>One-time items:</strong> Strip out non-recurring revenues and expenses (litigation, restructuring, COVID impacts).</li>
          <li><strong>Related-party transactions:</strong> Normalize any below-market or above-market deals with related entities.</li>
          <li><strong>Deferred maintenance:</strong> Add back any capex that has been deferred and will need to be spent.</li>
        </ul>

        <h2 className={h2Class}>Discounted cash flow (DCF)</h2>
        <p>
          DCF analysis projects the company&apos;s future free cash flows and
          discounts them back to present value. While theoretically rigorous,
          DCF is sensitive to assumptions about growth rates, margins, and
          discount rates. It is most useful as a sanity check on the multiple-based
          valuation rather than the primary valuation method for SME acquisitions.
        </p>

        <h2 className={h2Class}>Asset-based valuation</h2>
        <p>
          For asset-heavy businesses (manufacturing, real estate, distribution),
          an asset-based approach may be appropriate. This method values the
          company based on the fair market value of its tangible and intangible
          assets minus liabilities. It typically sets a floor for the valuation.
        </p>

        <h2 className={h2Class}>Common valuation pitfalls</h2>
        <ul className={ulClass}>
          <li><strong>Overpaying due to deal fatigue:</strong> After months of searching, the pressure to close a deal can lead to overpaying. Maintain discipline.</li>
          <li><strong>Ignoring working capital:</strong> The purchase price should include a normal level of working capital. Negotiate the target clearly.</li>
          <li><strong>Not adjusting for cyclicality:</strong> Some businesses have peak-year earnings that don&apos;t reflect normalized performance.</li>
          <li><strong>Underestimating transition costs:</strong> Budget for the seller&apos;s transition period, systems upgrades, and early operational improvements.</li>
        </ul>
      </div>
    </article>
  );
}
