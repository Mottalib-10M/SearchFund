import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function DealStructureOptimizationArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Deal Structure Optimization: Balancing Buyer &amp; Seller Interests
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          The best acquisitions aren&rsquo;t won on price alone , 
          they&rsquo;re won on structure. Creative deal structures can bridge
          valuation gaps, reduce risk for both parties, optimize tax outcomes,
          and make deals work that would otherwise fail. This guide covers
          the key structural levers available to search fund buyers.
        </p>

        <h2 className={h2Class}>The building blocks of deal structure</h2>

        <h3 className={h3Class}>1. Cash at close</h3>
        <ul className={ulClass}>
          <li>The amount of cash the seller receives on closing day</li>
          <li>Funded by senior debt ({" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA
            </Link>{" "}
            or bank) + buyer equity</li>
          <li>Sellers prefer maximum cash at close for certainty</li>
          <li>Buyers prefer less cash at close to reduce risk and use</li>
        </ul>

        <h3 className={h3Class}>2. Seller financing</h3>
        <ul className={ulClass}>
          <li>Deferred payment of 10-30% of purchase price. See{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing guide
            </Link></li>
          <li>Typical terms: 5-7% interest, 3-7 year term, subordinated to senior debt</li>
          <li>Aligns seller&rsquo;s interests with buyer&rsquo;s success (seller only gets paid if business survives)</li>
          <li>SBA requires a minimum 2-year standby period on seller notes</li>
        </ul>

        <h3 className={h3Class}>3. Earn-outs</h3>
        <ul className={ulClass}>
          <li>Contingent payments tied to post-closing performance. See{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-out structures
            </Link></li>
          <li>Bridge valuation gaps when buyer and seller disagree on future performance</li>
          <li>Common metrics: revenue, EBITDA, customer retention, specific milestones</li>
          <li>Typical range: 10-30% of total consideration</li>
          <li>Risk: Disputes over earn-out calculations are common. Define formulas precisely</li>
        </ul>

        <h3 className={h3Class}>4. Equity rollover</h3>
        <ul className={ulClass}>
          <li>Seller retains 10-30% ownership in the acquired business</li>
          <li>Aligns long-term interests and demonstrates seller confidence</li>
          <li>Can satisfy part of the equity injection requirement</li>
          <li>Common in PE-backed deals and some search fund structures</li>
        </ul>

        <h3 className={h3Class}>5. Transaction type</h3>
        <ul className={ulClass}>
          <li><strong>
            <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
              Asset vs. stock purchase
            </Link>:
          </strong> Major tax and liability implications</li>
          <li>Asset purchases give buyers tax benefits (step-up in basis) but may cost sellers more in taxes</li>
          <li>The tax gap can often be bridged through purchase price adjustments</li>
        </ul>

        <h2 className={h2Class}>Common deal structures for search funds</h2>

        <h3 className={h3Class}>Structure 1: Classic SBA (self-funded)</h3>
        <ul className={ulClass}>
          <li><strong>Senior debt (SBA 7(a)):</strong> 70-80% of purchase price</li>
          <li><strong>Seller note:</strong> 10-15% (on standby for 2 years per SBA rules)</li>
          <li><strong>Buyer equity:</strong> 10-15%</li>
          <li><strong>Best for:</strong> Businesses with $500K-$1.5M EBITDA, self-funded searchers</li>
          <li><strong>Total use:</strong> 3-3.5x EBITDA</li>
        </ul>

        <h3 className={h3Class}>Structure 2: Traditional search fund acquisition</h3>
        <ul className={ulClass}>
          <li><strong>Senior debt:</strong> 50-65% of purchase price</li>
          <li><strong>Seller note:</strong> 10-20%</li>
          <li><strong>Search fund investor equity:</strong> 20-35%</li>
          <li><strong>Best for:</strong> Businesses with $1.5M-$5M EBITDA</li>
          <li><strong>Total use:</strong> 2.5-3.5x EBITDA</li>
        </ul>

        <h3 className={h3Class}>Structure 3: Creative / seller-heavy</h3>
        <ul className={ulClass}>
          <li><strong>Cash at close:</strong> 40-60% (minimal bank debt or no bank debt)</li>
          <li><strong>Seller note:</strong> 25-40% (larger note, longer term)</li>
          <li><strong>Earn-out:</strong> 10-20% tied to performance</li>
          <li><strong>Equity rollover:</strong> 5-15%</li>
          <li><strong>Best for:</strong> Deals where bank financing is difficult (declining revenue, customer concentration, short operating history)</li>
        </ul>

        <h2 className={h2Class}>Structural levers to bridge valuation gaps</h2>
        <p>
          When buyer and seller are $500K-$2M apart on price, structure
          is the negotiation tool:
        </p>
        <ul className={ulClass}>
          <li><strong>Earn-out on the gap:</strong> &ldquo;I&rsquo;ll pay your price IF the business performs as you project.&rdquo; The seller gets their price only if their revenue projections materialize</li>
          <li><strong>Seller note with interest premium:</strong> Offer above-market interest (7-8%) on a larger seller note. The seller earns more total, and you reduce cash-at-close risk</li>
          <li><strong>Equity rollover:</strong> Give the seller 10-20% equity in the recapitalized business. They participate in future upside from your value creation</li>
          <li><strong>Consulting agreement:</strong> A 12-24 month consulting agreement at $5K-$15K/month gives the seller additional income and ensures a smooth{" "}
            <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
              transition
            </Link></li>
          <li><strong>Real estate separation:</strong> If the seller owns the property, separate the business and real estate into different transactions. Lease the property with an option to buy</li>
        </ul>

        <h2 className={h2Class}>Tax structure optimization</h2>
        <p>
          See our{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization guide
          </Link>{" "}
          for details. Key structural considerations:
        </p>
        <ul className={ulClass}>
          <li><strong>Purchase price allocation:</strong> In asset deals, allocating more to depreciable assets (equipment, goodwill) creates tax shields worth 20-30% of the allocated amount</li>
          <li><strong>Non-compete allocation:</strong> Payments allocated to the seller&rsquo;s non-compete are deductible to the buyer and ordinary income to the seller. Negotiate this jointly</li>
          <li><strong>338(h)(10) election:</strong> Treats a stock sale as an asset sale for tax purposes. Can give buyers asset-purchase tax benefits while maintaining stock-purchase contract continuity</li>
          <li><strong>Installment sale treatment:</strong> For the seller, spreading payments over time can reduce the tax rate on gains</li>
        </ul>

        <h2 className={h2Class}>Protecting the downside</h2>
        <ul className={ulClass}>
          <li><strong>Working capital adjustment:</strong> Ensure the business is delivered with adequate working capital. Disagreements on the &ldquo;peg&rdquo; are common, define it precisely in the{" "}
            <Link href="/learn/purchase-agreement-apa-vs-spa" className="text-apple-accent hover:underline">
              purchase agreement
            </Link></li>
          <li><strong>Escrow / holdback:</strong> 10-20% of purchase price held back for 12-24 months to cover indemnification claims</li>
          <li><strong>Representations &amp; warranties:</strong> Thorough reps with meaningful indemnification give you recourse if the seller misrepresented the business</li>
          <li><strong>Cap on seller note:</strong> Structure the seller note so that payments stop if the business materially underperforms</li>
        </ul>

        <p>
          Deal structure is as important as deal selection. For{" "}
          <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
            negotiation tactics
          </Link>{" "}
          and understanding{" "}
          <Link href="/learn/seller-psychology" className="text-apple-accent hover:underline">
            seller psychology
          </Link>,
          see our dedicated guides.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the most common deal structure for search fund acquisitions?</h3>
        <p>
          According to the Stanford GSB 2024 Search Fund Study, the most
          common structure is senior debt (50-70% of purchase price)
          plus search fund investor equity (20-35%) plus a seller note
          (10-20%). For self-funded searchers using SBA 7(a) loans,
          the typical split is 70-80% SBA debt, 10-15% seller
          financing on a 2-year standby, and 10-15% buyer equity.
          The right structure depends on deal size, business quality, and
          lender appetite.
        </p>

        <h3 className={h3Class}>How can I bridge a valuation gap with the seller?</h3>
        <p>
          The most effective tools for bridging a $500K-$2M valuation
          gap are{" "}
          <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
            earn-outs
          </Link>{" "}
          tied to future performance, larger seller notes at above-market
          interest rates (7-8%), equity rollover giving the seller
          10-20% ownership, and consulting agreements at
          $5K-$15K per month. These mechanisms let you pay the
          seller&rsquo;s price contingent on performance while protecting
          your downside if the business underperforms.
        </p>

        <h3 className={h3Class}>Should I do an asset purchase or stock purchase?</h3>
        <p>
          Asset purchases benefit buyers through a step-up in basis
          (creating tax-deductible depreciation and amortization), while
          stock purchases benefit sellers through capital gains treatment.
          Most search fund deals are structured as asset purchases because
          the buyer&rsquo;s tax benefits over 5-15 years often exceed
          the seller&rsquo;s incremental tax cost. When the gap is
          significant, buyers can offer a modest price increase to compensate
          the seller. A{" "}
          <Link href="/learn/338h10-election" className="text-apple-accent hover:underline">
            338(h)(10) election
          </Link>{" "}
          can provide a middle ground by treating a stock sale as an asset
          sale for tax purposes.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>2024 Search Fund Study: Selected Observations</em> (2024)</li>
          <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
          <li>SBA, <em>Standard Operating Procedures 50-10: Lender and Development Company Loan Programs</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
