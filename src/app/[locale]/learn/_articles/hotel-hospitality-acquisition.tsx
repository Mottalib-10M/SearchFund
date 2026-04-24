import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function HotelHospitalityAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Hotel or Hospitality Business: The Complete Buyer&rsquo;s Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Hotels sit at the intersection of real estate, operations, and brand management &mdash; making them one of the most complex acquisition targets in any buyer&rsquo;s pipeline. The U.S. lodging industry encompasses over 64,000 properties and nearly 5.7 million guestrooms, according to the{" "}
          <a href="https://www.ahla.com/resource/2025-state-industry-report" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">American Hotel &amp; Lodging Association&rsquo;s 2025 State of the Industry Report</a>
          , with guest spending projected to reach $777 billion in 2025. For an entrepreneur-through-acquisition (ETA) buyer, a hotel deal means acquiring a real asset with tangible cash flow &mdash; but also inheriting a capital-hungry operation where a single deferred renovation cycle can erase years of profit. This guide covers valuation, due diligence, franchise economics, and the honest trade-offs of buying a hotel versus other acquisition targets.
        </p>
      </div>

      {/* ── Section 1 ── */}
      <h2 className={h2Class}>Industry Landscape: Size, Structure, and Segments</h2>
      <div className={bodyClass}>
        <p>
          The American hotel industry directly employed over 2.17 million people in 2025, and sold nearly 1.3 billion room nights during the prior year, per the{" "}
          <a href="https://www.ahla.com/sites/default/files/AHLA_2025_Economic_Impact_Report.pdf" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">AHLA 2025 Economic Impact Report</a>
          . Understanding where a property sits in the segmentation hierarchy is the first step in evaluating any hotel deal.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Limited-service / select-service:</strong> Brands like Hampton Inn, Holiday Inn Express, and Fairfield Inn. No full restaurant, lower labor intensity, and strong brand-driven demand. These properties typically achieve GOP margins of 38&ndash;45% and are the segment most compatible with ETA operations.
          </li>
          <li>
            <strong>Extended-stay:</strong> Residence Inn, Home2 Suites, WoodSpring Suites. Higher occupancy rates (often 75%+), lower housekeeping frequency, and a corporate-account revenue base that smooths seasonality.
          </li>
          <li>
            <strong>Full-service:</strong> Hilton, Marriott, Hyatt flagged properties with restaurants, banquet space, and conference facilities. Higher revenue per key but dramatically more complex operations, larger staff, and heavier capital requirements.
          </li>
          <li>
            <strong>Independent boutique:</strong> Unflagged properties that compete on uniqueness and location. Potentially higher ADR but no brand reservation system &mdash; requiring direct marketing spend and OTA dependency.
          </li>
          <li>
            <strong>Bed &amp; breakfast / inn:</strong> Smaller properties (under 30 rooms) that are often lifestyle businesses. Tourism-dependent revenue and limited scalability make them a poor fit for institutional capital but viable for owner-operators.
          </li>
        </ul>
        <p>
          Branded hotels account for roughly 60% of U.S. rooms, with the top five chains (Marriott, Hilton, IHG, Wyndham, and Choice) controlling most of that share. Independent hotels retain pricing flexibility and avoid franchise fees (typically 8&ndash;12% of room revenue), but they lack the demand-generation engine of a global reservation system. Your{" "}
          <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">business valuation approach</Link>
          {" "}will differ significantly between branded and independent assets.
        </p>
      </div>

      {/* ── Section 2 ── */}
      <h2 className={h2Class}>Hotel Valuation: Price Per Key, Cap Rates, and NOI Multiples</h2>
      <div className={bodyClass}>
        <p>
          Hotel valuations rely on a combination of income-based and comparable-sale methods. Unlike most small-business acquisitions priced on EBITDA multiples, hotels are typically valued using cap rates applied to net operating income (NOI) after deducting an FF&amp;E (furniture, fixtures, and equipment) reserve.
        </p>
        <p>
          <strong>Price per key</strong> is the industry&rsquo;s universal comparability metric &mdash; the total acquisition price divided by the number of rooms. In the current market, select-service hotels in secondary markets trade at $50,000&ndash;$120,000 per key, while full-service hotels in major metros can exceed $200,000 per key. According to{" "}
          <a href="https://www.sparkghc.com/blog-insights/what-cap-rates-arent-telling-you-about-hotel-valuations" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">SPARK GHC&rsquo;s analysis of hotel cap rates</a>
          , a secondary-market deal at roughly $178,000 per key and an 8.5% cap rate would be compared against local comparable sales in the $170,000&ndash;$210,000 per key range to validate the pricing.
        </p>
        <p>
          <strong>Cap rates</strong> for hotel transactions in early 2025 ranged from 5.0&ndash;6.2% in coastal gateway cities to 6.8&ndash;7.5% in secondary markets. These are calculated on Year 1 NOI after the FF&amp;E reserve &mdash; a detail buyers sometimes miss. A property that advertises a 7% cap rate on NOI before the FF&amp;E deduction is overstating returns by 50&ndash;80 basis points.
        </p>
        <p>
          For a deeper understanding of how to reconstruct owner-reported earnings for any acquisition,{" "}
          <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">our guide to adjusted EBITDA</Link>
          {" "}covers the add-backs and normalizations that apply across industries &mdash; though hotels require additional adjustments for management fees, above-market franchise costs, and deferred maintenance.
        </p>
      </div>

      {/* ── Section 3 ── */}
      <h2 className={h2Class}>The Metrics That Drive Hotel Profitability</h2>
      <div className={bodyClass}>
        <p>
          Hotel performance is measured through a specific set of KPIs that every buyer must understand before reviewing a single trailing-twelve-month P&amp;L. The{" "}
          <a href="https://tiltanalytics.com/hotel-underwriting-guide/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">TILT Analytics hotel underwriting guide</a>
          {" "}provides a useful framework for how these metrics interconnect during deal analysis.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>RevPAR (Revenue Per Available Room):</strong> ADR multiplied by occupancy rate. The single most-watched metric in the industry. U.S. national RevPAR reached $102.78 in 2025, per{" "}
            <a href="https://takeup.ai/2025-revpar-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">TakeUp AI&rsquo;s 2025 RevPAR benchmarks</a>
            . Upscale properties averaged $100&ndash;$140 RevPAR; luxury exceeded $220.
          </li>
          <li>
            <strong>ADR (Average Daily Rate):</strong> Total room revenue divided by rooms sold. The U.S. average ADR hit a record $162.16 in 2025, per AHLA/STR data. ADR is your pricing-power indicator &mdash; a concept explored in depth in our{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">pricing optimization guide</Link>.
          </li>
          <li>
            <strong>Occupancy rate:</strong> Rooms sold divided by rooms available. National average: 63.4% in 2025. A select-service hotel needs 60%+ occupancy to cover fixed costs; 70%+ signals a healthy asset.
          </li>
          <li>
            <strong>GOPPAR (Gross Operating Profit Per Available Room):</strong> Strips out fixed charges (debt service, property taxes, insurance) to isolate operating performance. The national median hovered around $53.79, with Nevada and Hawaii properties consistently outperforming per{" "}
            <a href="https://hoteldata.com/reports/q3-2025-profit-report/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">HotelData.com&rsquo;s Q3 2025 profit report</a>.
          </li>
          <li>
            <strong>Flow-through:</strong> The percentage of incremental revenue that drops to the bottom line. A healthy hotel converts 50&ndash;60% of each additional revenue dollar into GOP. U.S. flow-through results turned negative in parts of 2025, largely due to labor cost inflation outpacing rate growth &mdash; a red flag for buyers underwriting aggressive RevPAR growth.
          </li>
        </ul>
        <p>
          Always benchmark a target hotel&rsquo;s metrics against its STR (Smith Travel Research) competitive set, not national averages. A 100-room select-service hotel in Nashville with $95 RevPAR may be underperforming its comp set by 15%, signaling either operational upside or structural problems.
        </p>
      </div>

      {/* ── Section 4 ── */}
      <h2 className={h2Class}>Franchise Economics: PIPs, Fees, and the Brand Decision</h2>
      <div className={bodyClass}>
        <p>
          Whether to acquire a branded or independent hotel is one of the most consequential decisions in a hotel deal. Franchise affiliation provides a reservation system, loyalty program, and brand recognition &mdash; but the costs are substantial and the contractual obligations rigid.
        </p>
        <p>
          <strong>Franchise fees</strong> typically include a royalty (4&ndash;6% of room revenue), a marketing/loyalty contribution (2&ndash;4%), and reservation/technology fees (1&ndash;3%). Combined, these run 8&ndash;12% of gross room revenue. On a $5 million revenue hotel, that&rsquo;s $400,000&ndash;$600,000 annually before a single guest walks in.
        </p>
        <p>
          <strong>Property Improvement Plans (PIPs)</strong> are the hidden cost that catches first-time hotel buyers off guard. When a branded hotel changes ownership, the franchisor issues a PIP &mdash; a mandatory renovation scope that the new owner must complete within a defined timeline (typically 12&ndash;24 months). According to{" "}
          <a href="https://lodgingmagazine.com/pips-in-perspective-costlier-projects-negatively-affecting-economy-sector/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Lodging Magazine&rsquo;s PIP analysis</a>
          , costs have escalated sharply: a Hilton Garden Inn full renovation that previously cost $20,000 per key is now underwritten at $35,000&ndash;$40,000 per key. For a 120-room property, that&rsquo;s $4.2&ndash;$4.8 million in mandatory capital expenditure on top of the purchase price.
        </p>
        <p>
          Soft-goods-only refreshes (bedding, carpet, paint) run $10,000&ndash;$15,000 per key, while full case-goods-and-bathroom renovations can hit $25,000&ndash;$40,000+ per key depending on the brand tier. PIP costs have risen over 30% compared to pre-COVID levels, per{" "}
          <a href="https://therefinishingtouch.com/the-critical-importance-of-maintaining-your-hotels-existing-assets-specifications-and-costs-during-pips-and-cap-ex-renovations/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">The Refinishing Touch&rsquo;s 2024 industry analysis</a>.
        </p>
        <p>
          Before signing a purchase agreement, negotiate the PIP scope directly with the brand. Some items may be deferrable or negotiable, especially if the property recently completed partial renovations. Request the Franchise Disclosure Document (FDD) early in diligence to understand performance requirements, transfer fees (often $50,000+), and termination provisions.
        </p>
      </div>

      {/* ── Section 5 ── */}
      <h2 className={h2Class}>Due Diligence: What Hotels Demand Beyond the Standard Checklist</h2>
      <div className={bodyClass}>
        <p>
          Hotel due diligence shares some DNA with standard small-business{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">financial due diligence</Link>
          {" "}&mdash; reviewing tax returns, validating revenue, stress-testing assumptions &mdash; but adds layers of complexity unique to hospitality assets.
        </p>
        <ol className={olClass}>
          <li>
            <strong>STR competitive set report:</strong> Order a trailing-twelve-month STR report showing how the target hotel&rsquo;s RevPAR, ADR, and occupancy index against 5&ndash;7 local competitors. A RevPAR index below 90 (meaning the hotel captures less than 90% of its fair share) signals either a poorly managed property (upside) or a structurally disadvantaged one (risk).
          </li>
          <li>
            <strong>Property condition assessment (PCA):</strong> Hire a hospitality-specialized engineer to evaluate the roof, HVAC, plumbing, elevators, and building envelope. Deferred maintenance on a 150-room hotel can easily represent $1&ndash;3 million in near-term capital needs.
          </li>
          <li>
            <strong>PIP review and negotiation:</strong> As discussed above, obtain the brand&rsquo;s PIP before going firm on price. The PIP should be treated as a purchase-price adjustment &mdash; if the brand requires $3 million in renovations, that comes off the offer or gets escrowed.
          </li>
          <li>
            <strong>Environmental Phase I (and possibly Phase II):</strong> Hotels are high-risk for environmental issues due to laundry chemicals, pool systems, underground storage tanks, and historical land use. Phase I assessments typically cost $3,000&ndash;$6,000; if issues are flagged, Phase II sampling can add $15,000&ndash;$50,000.
          </li>
          <li>
            <strong>FF&amp;E reserve analysis:</strong> The industry standard FF&amp;E reserve is 4&ndash;5% of gross revenue, but many operators underfund this line. Examine actual capital spending over the past five years against the reserve balance. Industry research shows that properties spending below 3% of revenue on FF&amp;E are accumulating deferred capital obligations that will eventually come due.
          </li>
          <li>
            <strong>Revenue-source breakdown:</strong> Examine the mix of corporate, leisure, group/events, and government/contract business. Heavy reliance on a single corporate account or government contract is a{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">concentration risk</Link>
            {" "}that should be stress-tested in your financial model.
          </li>
          <li>
            <strong>New-supply pipeline:</strong> Check local planning departments and STR&rsquo;s pipeline data for hotels under construction or approved within a 5-mile radius. New supply is the single biggest external threat to an existing hotel&rsquo;s RevPAR.
          </li>
        </ol>
      </div>

      {/* ── Section 6 ── */}
      <h2 className={h2Class}>Capital Intensity and Labor: The Two Make-or-Break Risks</h2>
      <div className={bodyClass}>
        <p>
          Hotels are among the most capital-intensive businesses a search fund entrepreneur can acquire. Unlike a SaaS company or professional services firm, a hotel requires continuous reinvestment in a physical plant that degrades with every guest stay.
        </p>
        <p>
          <strong>The renovation cycle problem:</strong> Branded hotels typically require a soft-goods refresh every 5&ndash;7 years and a full renovation every 10&ndash;14 years. An acquirer who buys a property at year 8 of its renovation cycle may face a $3&ndash;5 million PIP within 24 months of closing. That capital obligation is often funded through a combination of an FF&amp;E reserve (which may be underfunded), a CapEx loan, or additional equity &mdash; all of which dilute returns. SBA 7(a) loans, a common ETA financing tool, can fund acquisitions with up to 85&ndash;90% leverage, but lenders typically require 6&ndash;12 months of operating reserves on top of the purchase price, per{" "}
          <a href="https://realmo.com/blog/hospitality-investing-101-the-comprehensive-guide-to-buying-your-first-hotel-in-2026/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Realmo&rsquo;s 2026 hotel investing guide</a>.
        </p>
        <p>
          <strong>The labor challenge:</strong> Hotels are labor-intensive operations with high turnover and persistent staffing shortages. The{" "}
          <a href="https://www.ahla.com/news/65-surveyed-hotels-report-staffing-shortages" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">AHLA reports that 65% of surveyed hotels</a>
          {" "}face ongoing staffing shortages, with housekeeping being the hardest-hit department (38% of all unfilled hotel positions). Average wages rose 3.7&ndash;5.9% year over year in 2025, per{" "}
          <a href="https://hoteldata.com/reports/q3-2025-labor-costs-report/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">HotelData.com&rsquo;s 2025 labor report</a>
          , with cost per occupied room up 2&ndash;11% depending on the segment.
        </p>
        <p>
          Labor typically represents 30&ndash;35% of total hotel revenue, and that percentage has been climbing. Select-service and extended-stay models partially mitigate this: fewer food-and-beverage employees, less-frequent housekeeping (extended-stay guests often receive weekly rather than daily service), and smaller front-desk teams. For acquisition-specific strategies on retaining operational staff through an ownership transition, see our guide on{" "}
          <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">employee retention during acquisitions</Link>.
        </p>
        <p>
          Hotels with heavy{" "}
          <Link href="/learn/seasonal-businesses" className="text-apple-accent hover:underline">seasonal demand patterns</Link>
          {" "}&mdash; beach resorts, ski lodges, college-town properties &mdash; amplify both the capital and labor risks. A seasonal hotel may generate 60&ndash;70% of its revenue in four months, meaning it must cover year-round fixed costs (mortgage, insurance, property taxes, minimum staffing) with a compressed earning window.
        </p>
      </div>

      {/* ── Section 7 ── */}
      <h2 className={h2Class}>When Hotels Make Sense for Search Fund Buyers (and When They Don&rsquo;t)</h2>
      <div className={bodyClass}>
        <p>
          Most search fund investors are skeptical of hotels, and with reason. The combination of capital intensity, cyclicality, operational complexity, and thin margins after debt service makes hotels a poor fit for the typical ETA thesis of acquiring a stable, cash-flowing business with modest capital requirements. The Stanford Search Fund Study and similar research consistently show that the highest-returning search fund acquisitions are in asset-light, recurring-revenue businesses &mdash; the opposite of a hotel.
        </p>
        <p>
          That said, there are specific scenarios where a hotel acquisition can work for an ETA operator:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Select-service or extended-stay in a supply-constrained market:</strong> A 90&ndash;130 room Hampton Inn or Residence Inn in a market with high barriers to new construction (zoning restrictions, land scarcity) provides branded demand, manageable operations, and defensible cash flow. These properties trade at 8&ndash;11x NOI with cap rates of 7&ndash;9%.
          </li>
          <li>
            <strong>Underperforming property with clear operational upside:</strong> A hotel with a RevPAR index below 90 in a strong market may benefit from a revenue management overhaul, OTA optimization, and improved guest experience. Dynamic pricing alone can increase RevPAR 10&ndash;20% at a property with unsophisticated rate management.
          </li>
          <li>
            <strong>Recently renovated asset:</strong> Buying a hotel 1&ndash;2 years after a full PIP completion means you inherit a fresh product with no near-term capital obligations, giving you a 5&ndash;7 year runway to generate returns before the next renovation cycle.
          </li>
          <li>
            <strong>Operator with hospitality experience:</strong> ETA buyers with prior hotel management, revenue management, or franchise development experience have a meaningful edge. The learning curve for a first-time hotelier is steep and expensive.
          </li>
        </ul>
        <p>
          <strong>Red flags that should kill a hotel deal:</strong> a PIP due within 24 months with no reserve funding; a market with 10%+ new-supply growth in the pipeline; dependence on a single demand generator (one corporate client, one event venue); occupancy persistently below 55%; or a franchise agreement expiring within 3 years with no renewal guarantee.
        </p>
      </div>

      {/* ── Section 8: FAQ ── */}
      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>How much does it cost to buy a hotel?</h3>
        <p>
          The cost varies enormously by segment and location. A 70-room economy property in a tertiary market might trade at $30,000&ndash;$50,000 per key ($2.1&ndash;$3.5 million total), while a 150-room select-service hotel in a strong secondary market could be $80,000&ndash;$120,000 per key ($12&ndash;$18 million). Full-service and luxury properties in major metros frequently exceed $200,000 per key. Beyond the purchase price, budget an additional 5&ndash;15% for PIP costs, closing costs, franchise transfer fees, and working capital reserves.
        </p>

        <h3 className={h3Class}>What is a good cap rate for a hotel acquisition?</h3>
        <p>
          Cap rates for hotel transactions in 2025 ranged from 5.0&ndash;6.2% in coastal gateway cities (New York, San Francisco, Miami) to 6.8&ndash;7.5% in secondary markets. Higher cap rates compensate for perceived risk &mdash; smaller markets, older properties, weaker brands. Be cautious of advertised cap rates calculated on NOI before the FF&amp;E reserve deduction, which can overstate returns by 50&ndash;80 basis points. Always recalculate using NOI after a 4&ndash;5% FF&amp;E reserve.
        </p>

        <h3 className={h3Class}>Can I use an SBA loan to buy a hotel?</h3>
        <p>
          Yes. The SBA 7(a) program is widely used for hotel acquisitions, offering up to 85&ndash;90% leverage with longer amortization periods than conventional commercial real estate loans (typically 25 years). However, lenders require the borrower to have relevant management experience or a qualified management team in place, and they typically require 6&ndash;12 months of operating reserves in addition to the equity contribution. SBA 504 loans can also work for the real estate portion of the transaction, with the hotel operations financed separately.
        </p>

        <h3 className={h3Class}>How important is brand affiliation versus going independent?</h3>
        <p>
          Brand affiliation drives 30&ndash;50% of a typical hotel&rsquo;s bookings through the loyalty program and central reservation system. Independent hotels must replace that demand through OTA channels (Expedia, Booking.com &mdash; which charge 15&ndash;25% commissions), direct marketing, and local sales efforts. In most cases, the net cost of franchise fees (8&ndash;12% of room revenue) is comparable to or less than the cost of acquiring the same bookings independently. The exception is unique boutique properties in strong leisure markets where direct demand is organically high.
        </p>

        <h3 className={h3Class}>What is the biggest risk when buying a hotel?</h3>
        <p>
          Capital obsolescence. Hotels are physical products that guests compare against newer competitors every night. A property that was competitive five years ago may feel dated today if it has not been renovated. The combination of escalating PIP costs (up 30%+ since pre-COVID levels), compressed renovation timelines, and rising construction costs means that the capital required to maintain competitiveness is higher than many buyers anticipate. Underwriting a deal without fully accounting for the renovation cycle is the single most common mistake in hotel acquisitions.
        </p>
      </div>
    </article>
  );
}
