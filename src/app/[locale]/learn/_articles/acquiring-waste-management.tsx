import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringWasteManagementArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Waste Management &amp; Recycling Business
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Waste management is one of the most recession-resistant
          industries &mdash; trash doesn&rsquo;t stop in a downturn.
          With strong{" "}
          <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
            recurring revenue
          </Link>, route density economics, and significant consolidation
          opportunity, waste companies are attractive targets for search
          fund acquirers focused on essential services.
        </p>

        <h2 className={h2Class}>Why waste management?</h2>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> 90%+ of revenue from monthly collection contracts (residential and commercial)</li>
          <li><strong>Recession-resistant:</strong> Waste collection is legally required and non-discretionary. Revenue held steady during 2008&ndash;2009 and 2020</li>
          <li><strong>Route density:</strong> Each additional customer on an existing route is nearly 100% incremental margin</li>
          <li><strong>High barriers to entry:</strong> Capital-intensive (trucks, containers, facilities), regulatory permits, municipal franchise agreements</li>
          <li><strong>Fragmented:</strong> Thousands of small haulers. Top 3 companies (Waste Management, Republic Services, GFL) hold ~50% of the US market, leaving ~50% for independents</li>
          <li><strong>Succession wave:</strong> Aging family-owned haulers looking for exit opportunities</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Collection companies:</strong> 5&ndash;8x EBITDA for well-run haulers with route density</li>
          <li><strong>Transfer stations/landfills:</strong> 8&ndash;12x+ EBITDA (scarce assets, high barriers)</li>
          <li><strong>Recycling:</strong> 3&ndash;5x EBITDA (commodity price exposure reduces multiples)</li>
          <li><strong>Premium factors:</strong> Municipal franchise agreements, long-term commercial contracts, owned disposal assets, route density</li>
          <li><strong>Discount factors:</strong> Residential-only (lower margins), old fleet, environmental liabilities, regulatory compliance issues</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Contract analysis:</strong> Municipal franchise terms, commercial contract renewal rates, and pricing escalation clauses</li>
          <li><strong>Route profitability:</strong> Revenue and cost per route per day. Identify under-densified routes that can absorb additional stops</li>
          <li><strong>Fleet condition:</strong> Truck age, maintenance records, and replacement schedule. Refuse trucks cost $300K&ndash;$400K new</li>
          <li><strong>Environmental compliance:</strong> Verify all permits, past violations, and remediation obligations. Environmental due diligence is critical</li>
          <li><strong>Disposal costs:</strong> Where does waste go? Disposal costs (tipping fees) are a major expense. Long-term disposal agreements provide cost certainty</li>
          <li><strong>Customer mix:</strong> Residential (lower margins, stable) vs. commercial (higher margins, churn risk) vs. roll-off/construction (project-based)</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Price increases:</strong> Many family-owned haulers undercharge long-standing customers.{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              Pricing optimization
            </Link>{" "}
            is the fastest path to EBITDA growth (5&ndash;15% increases common)</li>
          <li><strong>Route optimization:</strong> GPS tracking and routing software to reduce miles, fuel, and labor costs</li>
          <li><strong>Tuck-in acquisitions:</strong> Acquire small haulers on adjacent routes. Each tuck-in adds customers to existing routes at high incremental margins</li>
          <li><strong>Service diversification:</strong> Add recycling, commercial dumpster, roll-off, and specialty waste services</li>
          <li><strong>Fleet modernization:</strong> CNG (compressed natural gas) or electric trucks reduce fuel costs and meet sustainability requirements</li>
        </ul>

        <h2 className={h2Class}>Waste-specific risks</h2>
        <ul className={ulClass}>
          <li><strong>Environmental liability:</strong> Historical contamination at disposal sites. Phase I/II environmental assessments are mandatory</li>
          <li><strong>Municipal contract loss:</strong> Losing a franchise agreement can eliminate a significant portion of revenue overnight</li>
          <li><strong>Commodity exposure:</strong> Recycling revenue depends on commodity prices (cardboard, aluminum, plastics) which are volatile</li>
          <li><strong>Capital intensity:</strong> Fleet replacement, container purchases, and facility maintenance require ongoing capital investment</li>
          <li><strong>Regulatory:</strong> EPA, state DEQ, OSHA, and DOT regulations. Compliance costs are significant</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build strategy
          </Link>.
        </p>
      </div>
    </article>
  );
}
