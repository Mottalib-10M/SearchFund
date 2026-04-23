import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function CapitalStackExplainedArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        The Capital Stack Explained: Senior Debt to Equity
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The capital stack is the layered combination of debt and equity
          used to finance a business acquisition. Understanding how each
          layer works &mdash; its cost, risk, control implications, and
          typical terms &mdash; is essential for structuring deals that
          work for both the buyer and the lender/investor.
        </p>

        <h2 className={h2Class}>What is the capital stack?</h2>
        <p>
          The capital stack is organized from the most senior (safest,
          lowest return) to the most junior (riskiest, highest return):
        </p>
        <ul className={ulClass}>
          <li><strong>1. Senior secured debt</strong> (top of stack — first to be repaid)</li>
          <li><strong>2. Subordinated / mezzanine debt</strong></li>
          <li><strong>3. Seller financing</strong></li>
          <li><strong>4. Preferred equity</strong></li>
          <li><strong>5. Common equity</strong> (bottom of stack — last to be repaid, highest upside)</li>
        </ul>
        <p>
          In a liquidation scenario, senior debt gets paid first, then
          subordinated debt, then equity holders. This priority
          (&ldquo;waterfall&rdquo;) determines the risk and return of
          each layer.
        </p>

        <h2 className={h2Class}>Layer 1: Senior secured debt</h2>
        <p>
          The largest component of most acquisition financing structures.
        </p>

        <h3 className={h3Class}>SBA 7(a) loans</h3>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> Up to $5M</li>
          <li><strong>Terms:</strong> 10-year term, Prime + 2.25&ndash;2.75%</li>
          <li><strong>Typical leverage:</strong> Up to 4x EBITDA</li>
          <li><strong>Collateral:</strong> All business assets + personal guarantee</li>
          <li><strong>Best for:</strong> Self-funded searches, businesses under $5M enterprise value</li>
          <li>See our complete{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a) guide
            </Link></li>
        </ul>

        <h3 className={h3Class}>Conventional bank loans</h3>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> $500K&ndash;$50M+</li>
          <li><strong>Terms:</strong> 5&ndash;7 year term, SOFR + 2&ndash;4%</li>
          <li><strong>Typical leverage:</strong> 2.5&ndash;3.5x EBITDA</li>
          <li><strong>Collateral:</strong> Business assets, personal guarantee, may require real property</li>
          <li><strong>Best for:</strong> Larger deals, acquirers with strong personal balance sheets</li>
        </ul>

        <h3 className={h3Class}>Private credit / direct lending</h3>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> $5M&ndash;$100M+</li>
          <li><strong>Terms:</strong> 5&ndash;7 year, SOFR + 4&ndash;7%</li>
          <li><strong>Typical leverage:</strong> 3&ndash;5x EBITDA</li>
          <li><strong>More flexible than bank debt</strong> on covenants and structure</li>
          <li><strong>Best for:</strong> Mid-market search fund acquisitions, sponsor-backed deals</li>
        </ul>

        <h2 className={h2Class}>Layer 2: Subordinated / mezzanine debt</h2>
        <p>
          Sits below senior debt but above equity. Provides additional
          leverage beyond what senior lenders allow.
        </p>
        <ul className={ulClass}>
          <li><strong>Cost:</strong> 12&ndash;18% total return (interest + PIK + warrants)</li>
          <li><strong>Typical amount:</strong> 0.5&ndash;1.5x EBITDA</li>
          <li><strong>Features:</strong> Often includes PIK (payment-in-kind) interest, equity warrants, or conversion rights</li>
          <li><strong>Subordination:</strong> Lender agrees not to be repaid until senior debt is serviced</li>
          <li><strong>Best for:</strong> Bridging the gap between senior debt capacity and equity, reducing equity dilution</li>
        </ul>

        <h2 className={h2Class}>Layer 3: Seller financing</h2>
        <p>
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            Seller notes
          </Link>{" "}
          are one of the most important tools in acquisition financing.
          The seller effectively &ldquo;lends&rdquo; part of the purchase
          price to the buyer.
        </p>
        <ul className={ulClass}>
          <li><strong>Typical amount:</strong> 5&ndash;20% of purchase price (sometimes more)</li>
          <li><strong>Terms:</strong> 3&ndash;7 years, 3&ndash;7% interest</li>
          <li><strong>Subordination:</strong> Almost always subordinated to senior bank debt</li>
          <li><strong>Standby provisions:</strong> SBA requires seller notes to be on &ldquo;full standby&rdquo; for 2 years (no payments during this period)</li>
          <li><strong>Best for:</strong> Reducing equity injection, aligning seller&rsquo;s interests with transition success</li>
        </ul>

        <h2 className={h2Class}>Layer 4: Preferred equity</h2>
        <p>
          In search fund structures, search capital often converts to
          preferred equity at acquisition:
        </p>
        <ul className={ulClass}>
          <li><strong>Search fund investors&rsquo; step-up:</strong> Invest at 1.5x their pro-rata share of the acquisition equity</li>
          <li><strong>Liquidation preference:</strong> Gets paid before common equity in a sale</li>
          <li><strong>Participating vs. non-participating:</strong> Determines whether preferred shares also participate in common equity upside</li>
          <li>See our{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              cap tables &amp; equity guide
            </Link>{" "}
            for mechanics</li>
        </ul>

        <h2 className={h2Class}>Layer 5: Common equity</h2>
        <p>
          The highest-risk, highest-return layer. Common equity absorbs
          losses first but captures all upside above the debt and
          preferred layers.
        </p>
        <ul className={ulClass}>
          <li><strong>Search fund CEO:</strong> Typically receives 20&ndash;25% of common equity, vesting over 4&ndash;5 years</li>
          <li><strong>Investor equity:</strong> The remainder, usually held by the same investors who funded the search</li>
          <li><strong>Self-funded acquirer:</strong> Retains 50&ndash;100% common equity</li>
          <li><strong>No guaranteed return:</strong> Equity holders get paid only after all debt obligations are met</li>
        </ul>

        <h2 className={h2Class}>Typical capital stack by deal type</h2>

        <h3 className={h3Class}>Self-funded SBA acquisition ($2M deal)</h3>
        <ul className={ulClass}>
          <li>SBA 7(a) senior debt: $1.6M (80%)</li>
          <li>Seller note: $200K (10%)</li>
          <li>Buyer equity injection: $200K (10%)</li>
        </ul>

        <h3 className={h3Class}>Traditional search fund ($15M deal)</h3>
        <ul className={ulClass}>
          <li>Senior bank debt: $9M (60%)</li>
          <li>Seller note: $1.5M (10%)</li>
          <li>Search fund investor equity: $4.5M (30%)</li>
        </ul>

        <h3 className={h3Class}>Leveraged mid-market ($30M deal)</h3>
        <ul className={ulClass}>
          <li>Senior debt: $18M (60%)</li>
          <li>Mezzanine: $3M (10%)</li>
          <li>Seller note: $1.5M (5%)</li>
          <li>Sponsor equity: $7.5M (25%)</li>
        </ul>

        <h2 className={h2Class}>Key principles for structuring</h2>
        <ul className={ulClass}>
          <li><strong>More debt = higher returns but higher risk:</strong> Leverage amplifies both gains and losses. A 50% EBITDA increase generates a 200%+ equity return at 4x leverage, but a 25% decline may wipe out equity</li>
          <li><strong>Cash flow coverage matters most:</strong> Ensure the business can service all debt with a comfortable margin (1.25x+ debt service coverage ratio)</li>
          <li><strong>Match debt tenor to business stability:</strong> Stable, recurring-revenue businesses can handle more leverage than cyclical ones</li>
          <li><strong>Seller financing is your best friend:</strong> It reduces your equity need, signals seller confidence, and typically comes at below-market rates</li>
          <li><strong>Don&rsquo;t over-leverage:</strong> The #1 cause of post-acquisition financial distress is excessive debt. See{" "}
            <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
              why search funds fail
            </Link></li>
        </ul>
        <p>
          For detailed financing strategies by model, see our{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/how-much-money-buy-business" className="text-apple-accent hover:underline">
            capital requirements
          </Link>{" "}
          overview.
        </p>
      </div>
    </article>
  );
}
