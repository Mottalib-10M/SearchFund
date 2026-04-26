import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function EBITDAMultiplesByIndustryArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        EBITDA Multiples by Industry: 2025-2026 Benchmarks
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Understanding EBITDA multiples by industry is essential for anyone
          acquiring or selling a small business. The enterprise value-to-EBITDA
          multiple is the most commonly used valuation metric in SME
          acquisitions, and it varies significantly by industry, company size,
          growth rate, and geography. This guide provides current benchmarks for
          the industries most commonly targeted in search fund and ETA
          transactions, along with the factors that drive multiple expansion
          or compression.
        </p>
        <p>
          For a broader framework on valuing businesses, see our{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            complete business valuation guide
          </Link>.
        </p>

        <h2 className={h2Class}>What is an EBITDA multiple?</h2>
        <p>
          The EBITDA multiple (also called EV/EBITDA) expresses a
          business&rsquo;s enterprise value as a multiple of its annual
          Earnings Before Interest, Taxes, Depreciation, and Amortization. For
          example, a company with $2M EBITDA valued at $10M trades at a 5.0x
          multiple. In search fund transactions, purchase multiples typically
          range from 3x to 7x EBITDA, depending on the factors discussed below.
        </p>
        <p>
          It is critical to use{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
            adjusted EBITDA
          </Link>{" "}
          normalized for
          owner compensation, one-time expenses, and non-recurring items , 
          rather than reported EBITDA. A{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings analysis
          </Link>{" "}
          validates these adjustments during{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>.
        </p>

        <h2 className={h2Class}>EBITDA multiples by industry</h2>
        <p>
          The following ranges reflect typical acquisition multiples for SMEs
          with $1M-$5M EBITDA, as seen in search fund and lower
          middle-market transactions. Larger companies and those with
          exceptional growth command higher multiples.
        </p>

        <h3 className={h3Class}>Technology &amp; SaaS</h3>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 5.0-8.0x EBITDA (or 3-6x ARR for SaaS)</li>
          <li><strong>Premium drivers:</strong> High net revenue retention (&gt;110%), low churn (&lt;5% annual), strong gross margins (&gt;70%), and recurring revenue</li>
          <li><strong>Discount factors:</strong> Customer concentration, founder-dependent product, high technical debt</li>
        </ul>
        <p>
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
            SaaS acquisitions
          </Link>{" "}
          command the highest multiples due to recurring revenue, high margins,
          and scalability. Bootstrapped SaaS companies with stable ARR are
          among the most sought-after search fund targets.
        </p>

        <h3 className={h3Class}>Healthcare services</h3>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 5.0-8.0x EBITDA</li>
          <li><strong>Premium drivers:</strong> Medicare/Medicaid reimbursement stability, multi-location scale, recurring patient relationships, accreditation</li>
          <li><strong>Discount factors:</strong> Regulatory risk, key physician dependency, reimbursement rate changes</li>
        </ul>
        <p>
          <Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">
            Healthcare services
          </Link>{" "}
          businesses trade at premium multiples due to defensive cash flows and
          roll-up potential, but regulatory complexity demands specialized{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>.
        </p>

        <h3 className={h3Class}>Professional services</h3>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 3.5-6.0x EBITDA</li>
          <li><strong>Premium drivers:</strong> Recurring/contractual revenue, diversified client base, strong brand, scalable delivery model</li>
          <li><strong>Discount factors:</strong> Key-person risk, project-based revenue, high employee turnover</li>
        </ul>
        <p>
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            Professional services firms
          </Link>{" "}
          (accounting, engineering, IT consulting) are popular ETA targets but
          require careful assessment of key-person dependency and client
          retention post-acquisition.
        </p>

        <h3 className={h3Class}>Home services &amp; field services</h3>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 3.0-5.5x EBITDA</li>
          <li><strong>Premium drivers:</strong> Recurring revenue (maintenance contracts), route density, brand recognition, technician retention systems</li>
          <li><strong>Discount factors:</strong> Seasonality, labor shortages, owner-operator dependency</li>
        </ul>
        <p>
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            Home services businesses
          </Link>{" "}
          (HVAC, plumbing, pest control, landscaping) offer excellent{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build
          </Link>{" "}
          potential, with platform acquisitions at 4-5x and add-ons at
          2-3x.
        </p>

        <h3 className={h3Class}>Manufacturing &amp; distribution</h3>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 3.5-6.0x EBITDA</li>
          <li><strong>Premium drivers:</strong> Proprietary products, long-term contracts, niche market leadership, modern equipment</li>
          <li><strong>Discount factors:</strong> Capital intensity, supply chain risk, environmental liabilities, skilled labor dependency</li>
        </ul>
        <p>
          <Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">
            Manufacturing businesses
          </Link>{" "}
          require careful assessment of equipment condition, capex requirements,
          and working capital needs. The tangible asset base provides good
          collateral for{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            debt financing
          </Link>.
        </p>

        <h3 className={h3Class}>E-commerce &amp; D2C brands</h3>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 3.0-5.0x EBITDA (or 1-3x SDE for smaller brands)</li>
          <li><strong>Premium drivers:</strong> Brand strength, diversified channels, subscription revenue, proprietary products</li>
          <li><strong>Discount factors:</strong> Platform dependence (Amazon), rising CAC, thin margins, inventory risk</li>
        </ul>
        <p>
          <Link href="/learn/ecommerce-acquisition" className="text-apple-accent hover:underline">
            E-commerce acquisitions
          </Link>{" "}
          have compressed from pandemic highs. Businesses with strong brands and
          diversified channels (DTC + wholesale + marketplace) command premiums.
        </p>

        <h3 className={h3Class}>Education &amp; training</h3>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 3.5-6.0x EBITDA</li>
          <li><strong>Premium drivers:</strong> B2B contracts (corporate training), accreditation, online delivery capability, recurring enrollment</li>
          <li><strong>Discount factors:</strong> Instructor dependency, regulatory changes, seasonal enrollment patterns</li>
        </ul>

        <h3 className={h3Class}>Financial services &amp; insurance</h3>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 4.0-7.0x EBITDA (or 1.5-2.5x revenue for insurance books)</li>
          <li><strong>Premium drivers:</strong> Recurring revenue (trail commissions, renewal premiums), regulatory moats, sticky client relationships</li>
          <li><strong>Discount factors:</strong> Regulatory compliance costs, key-advisor dependency, technology disruption</li>
        </ul>

        <h2 className={h2Class}>Factors that drive multiples up or down</h2>
        <p>
          Beyond industry, several company-specific factors significantly
          influence the multiple:
        </p>
        <ul className={ulClass}>
          <li><strong>Revenue growth:</strong> Companies growing 10%+ annually command 1-2 additional turns of EBITDA compared to flat-revenue peers</li>
          <li><strong>Revenue quality:</strong> Recurring/contractual revenue is valued at 1-3x higher multiples than project-based or one-time revenue</li>
          <li><strong>Size:</strong> Larger companies (&gt;$3M EBITDA) trade at higher multiples due to lower risk, better management depth, and more financing options</li>
          <li><strong>Customer concentration:</strong> Each 10% of revenue from a single customer typically reduces the multiple by 0.25-0.5x. See our{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration guide
            </Link>{" "}
            for thresholds and mitigation strategies</li>
          <li><strong>Owner dependency:</strong> Businesses that can run without the owner command premium multiples</li>
          <li><strong>EBITDA margins:</strong> Higher-margin businesses (20%+ EBITDA) justify higher multiples due to cash flow resilience</li>
          <li><strong>Geography:</strong> US multiples are generally 1-2x higher than{" "}
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
              European equivalents
            </Link>{" "}
            for comparable businesses</li>
        </ul>

        <h2 className={h2Class}>European vs. US multiples</h2>
        <p>
          European SMEs typically trade at a significant discount to US peers:
        </p>
        <ul className={ulClass}>
          <li><strong>US SMEs:</strong> 4-7x EBITDA (median ~5x for $1-5M EBITDA businesses)</li>
          <li><strong>European SMEs:</strong> 3-5x EBITDA (median ~4x for comparable businesses)</li>
          <li><strong>Discount drivers:</strong> Less PE competition, fragmented M&amp;A advisory market, language barriers, succession urgency from the{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              boomer retirement wave
            </Link></li>
        </ul>
        <p>
          This gap is a key reason why{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            European ETA
          </Link>{" "}
          is growing rapidly, lower entry multiples directly translate
          to higher return potential.
        </p>

        <h2 className={h2Class}>How to use multiples in practice</h2>
        <p>
          EBITDA multiples are a starting point for{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valuation
          </Link>,
          not the final answer. When using multiples:
        </p>
        <ul className={ulClass}>
          <li>Always use adjusted EBITDA, validated by a{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              QoE analysis
            </Link></li>
          <li>Consider the total deal value including{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-outs
            </Link>{" "}
            and{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller notes
            </Link></li>
          <li>Cross-reference with DCF analysis for businesses with clear growth trajectories</li>
          <li>Account for working capital normalization and capital expenditure requirements</li>
          <li>Benchmark against recent{" "}
            <Link href="/learn/comparable-transactions" className="text-apple-accent hover:underline">
              comparable transactions
            </Link>{" "}
            (not just public company multiples)</li>
        </ul>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How do EBITDA multiples differ between SaaS and traditional businesses?</h3>
        <p>
          SaaS companies typically command 5.0-8.0x EBITDA (or 3-6x ARR),
          significantly above most traditional industries. This premium is driven by
          recurring revenue, high gross margins (&gt;70%), low churn, and strong
          scalability. Traditional businesses like home services or manufacturing
          typically trade at 3.0-5.5x EBITDA. The gap narrows when traditional
          businesses have contractual recurring revenue, such as maintenance agreements
          or long-term service contracts.
        </p>

        <h3 className={h3Class}>What factors can increase or decrease a business&rsquo;s EBITDA multiple?</h3>
        <p>
          Key premium drivers include revenue growth above 10% annually (adds 1-2
          turns), recurring or contractual revenue (1-3x higher multiples),
          larger size (&gt;$3M EBITDA), and high EBITDA margins (&gt;20%). Discount
          factors include customer concentration, owner dependency, project-based
          revenue, high capex requirements, and cyclical or declining industries.
          Geography also matters, US multiples run 1-2x higher than
          European equivalents.
        </p>

        <h3 className={h3Class}>Should I rely solely on EBITDA multiples to value a business?</h3>
        <p>
          No. EBITDA multiples are a useful starting point for benchmarking, but they
          should be complemented by a discounted cash flow (DCF) analysis for businesses
          with clear growth trajectories, a working capital analysis, and a thorough
          review of capital expenditure requirements. Always use adjusted EBITDA
          validated by a quality of earnings report, and cross-reference with recent
          comparable transactions rather than relying on public market multiples alone.
        </p>
      </div>
    </article>
  );
}
