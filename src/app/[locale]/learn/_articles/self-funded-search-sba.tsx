import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SelfFundedSearchSBAArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Self-Funded Search with SBA Financing: The 80/10/10 Structure
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded search
          </Link>{" "}
          model has exploded in popularity because it allows entrepreneurs
          to acquire businesses with minimal personal capital while retaining
          80&ndash;100% ownership. The key enabler? SBA 7(a) loans. This
          guide explains how self-funded searchers use the &ldquo;80/10/10&rdquo;
          structure to buy businesses with just 5&ndash;10% equity.
        </p>

        <h2 className={h2Class}>What is the 80/10/10 structure?</h2>
        <ul className={ulClass}>
          <li><strong>80% SBA 7(a) loan:</strong> Up to $5M in senior debt from an SBA-approved lender, guaranteed by the Small Business Administration</li>
          <li><strong>10% seller financing:</strong> A{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller note
            </Link>{" "}
            for 10% of the purchase price, on full standby (no payments for at least 2 years while SBA debt is outstanding)</li>
          <li><strong>10% buyer equity:</strong> Your personal cash injection (sometimes as low as 5% depending on the deal)</li>
          <li><strong>Result:</strong> You buy a $2M business with $200K of your own capital and own 100% of the equity</li>
        </ul>

        <h2 className={h2Class}>SBA 7(a) loan for acquisitions</h2>

        <h3 className={h3Class}>Key terms</h3>
        <ul className={ulClass}>
          <li><strong>Maximum loan:</strong> $5M (up to $5.5M with working capital)</li>
          <li><strong>Term:</strong> 10 years for business acquisitions (25 years if real estate is included)</li>
          <li><strong>Interest rate:</strong> Prime + 2.25&ndash;2.75% (variable). Currently 10&ndash;12%</li>
          <li><strong>Down payment:</strong> 10&ndash;20% equity injection required (10% with seller note on standby)</li>
          <li><strong>Personal guarantee:</strong> Required for anyone with 20%+ ownership</li>
          <li><strong>Collateral:</strong> All business assets + personal guarantee. SBA does not require full collateral coverage</li>
        </ul>

        <h3 className={h3Class}>SBA eligibility requirements</h3>
        <ul className={ulClass}>
          <li>Business must be &ldquo;small&rdquo; under SBA size standards (varies by NAICS code, but most sub-$10M revenue businesses qualify)</li>
          <li>Business must be a going concern (profitable, operating, with employees)</li>
          <li>Buyer must have relevant management experience (industry experience is a major plus)</li>
          <li>Good personal credit (680+ FICO score preferred, 650 minimum)</li>
          <li>No bankruptcy in the last 3 years</li>
          <li>Buyer must actively manage the business (no passive ownership)</li>
        </ul>

        <h3 className={h3Class}>SBA lender selection</h3>
        <ul className={ulClass}>
          <li><strong>Preferred Lending Partners (PLPs):</strong> Banks with delegated SBA authority can approve loans faster (2&ndash;4 weeks vs. 6&ndash;8 weeks)</li>
          <li><strong>Key lenders:</strong> Live Oak Bank, Byline Bank, Harvest Small Business Finance, Celtic Bank, and CDFIs specializing in SBA acquisitions</li>
          <li><strong>Work with a broker:</strong> SBA loan brokers (distinct from business brokers) help match you with the right lender and package your application</li>
        </ul>

        <h2 className={h2Class}>Structuring the deal</h2>

        <h3 className={h3Class}>Example: $2M acquisition</h3>
        <ul className={ulClass}>
          <li>SBA 7(a) loan: $1,600,000 (80%)</li>
          <li>Seller note (full standby): $200,000 (10%) at 5&ndash;7%, 5-year term, 2-year standby</li>
          <li>Buyer equity injection: $200,000 (10%)</li>
          <li>Total acquisition cost: $2,000,000</li>
          <li>Monthly SBA payment: ~$21,000 (10-year, Prime + 2.75%)</li>
          <li>Business needs: $252K+ annual{" "}
            <Link href="/learn/working-capital-management" className="text-apple-accent hover:underline">
              free cash flow
            </Link>{" "}
            to comfortably service the debt (1.25x debt service coverage ratio)</li>
        </ul>

        <h3 className={h3Class}>Seller note on standby</h3>
        <ul className={ulClass}>
          <li>SBA requires the seller note to be on &ldquo;full standby&rdquo; for at least 24 months (no principal or interest payments)</li>
          <li>After standby, the seller note is typically repaid over 3&ndash;5 years</li>
          <li>Interest accrues during standby. Negotiate a lower rate (5&ndash;6%) since the seller is already getting 80% cash at close</li>
          <li>Many sellers resist standby notes &mdash; you need to explain that their alternative is a lower price</li>
        </ul>

        <h2 className={h2Class}>Advantages of the self-funded SBA model</h2>
        <ul className={ulClass}>
          <li><strong>100% ownership:</strong> No investor dilution. You own 100% of the business from day one</li>
          <li><strong>Minimal capital:</strong> Acquire a $2M+ business with $150K&ndash;$300K of personal capital</li>
          <li><strong>Tax deductible interest:</strong> SBA loan interest is fully tax deductible, reducing effective cost of debt</li>
          <li><strong>No investors to manage:</strong> No board meetings, no investor reports, no step-up equity dilution</li>
          <li><strong>Speed:</strong> SBA pre-approval + deal close in 60&ndash;90 days (faster than traditional search fund acquisition)</li>
        </ul>

        <h2 className={h2Class}>Risks and challenges</h2>
        <ul className={ulClass}>
          <li><strong>Personal guarantee:</strong> You are personally liable for the SBA loan. A failed acquisition can mean personal bankruptcy</li>
          <li><strong>High debt load:</strong> 80% leverage means thin margins for error. A revenue decline of 15&ndash;20% can threaten debt service</li>
          <li><strong>Variable rate:</strong> SBA loans are variable rate. Rising rates increase your debt service burden</li>
          <li><strong>No safety net:</strong> No investors to call for additional capital if things go wrong. You&rsquo;re on your own</li>
          <li><strong>Size constraint:</strong> $5M SBA cap limits you to businesses under ~$6M enterprise value</li>
        </ul>

        <h2 className={h2Class}>When to use the self-funded SBA model</h2>
        <ul className={ulClass}>
          <li>You have $100K&ndash;$500K in personal capital available</li>
          <li>You want to retain 100% ownership</li>
          <li>Target deal size: $1M&ndash;$5M enterprise value</li>
          <li>Strong, stable cash flow business (1.25x+ DSCR)</li>
          <li>You have relevant industry or management experience</li>
          <li>You&rsquo;re comfortable with personal guarantees and high leverage</li>
        </ul>

        <p>
          For a complete overview of SBA acquisition loans, see our{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA 7(a) complete guide
          </Link>.
          For the traditional alternative, see{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded vs. traditional comparison
          </Link>{" "}
          and{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing options
          </Link>.
        </p>
      </div>
    </article>
  );
}
