import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function IndustrySelectionFrameworkArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Industry Selection Framework: Picking Your Vertical
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Choosing the right industry is one of the most consequential
          decisions in{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>. The industry you target determines your deal flow,
          valuation multiples, operational complexity, growth potential,
          and exit options. This framework helps you evaluate and rank
          industries based on the factors that matter most for search
          fund success.
        </p>

        <h2 className={h2Class}>The 8-factor framework</h2>

        <h3 className={h3Class}>1. Recurring revenue</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> Predictable revenue reduces risk and increases valuation. Buyers pay 1&ndash;2x higher multiples for{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              recurring revenue
            </Link></li>
          <li><strong>Best:</strong> Insurance (90%+ renewal), MSPs (70&ndash;90% MRR), accounting (95%+ retention), waste management (90%+)</li>
          <li><strong>Worst:</strong> Construction (project-based), consulting (engagement-based), restaurants (daily footfall)</li>
        </ul>

        <h3 className={h3Class}>2. Fragmentation</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> Fragmented industries have more targets, less buyer competition, and clear{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              roll-up opportunities
            </Link></li>
          <li><strong>Best:</strong> Landscaping (600K+ businesses), plumbing, HVAC, staffing, dental practices</li>
          <li><strong>Worst:</strong> Consolidated industries where the top 5 players hold 50%+ market share</li>
        </ul>

        <h3 className={h3Class}>3. Recession resistance</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> Search fund holding periods span economic cycles. Your business will face at least one downturn</li>
          <li><strong>Best:</strong> Waste management, healthcare, essential home services, insurance, accounting</li>
          <li><strong>Worst:</strong> Restaurants, construction, staffing (temp), luxury goods</li>
        </ul>

        <h3 className={h3Class}>4. Owner succession opportunity</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> Aging owners with no succession plan create motivated sellers and better deal terms. See{" "}
            <Link href="/learn/succession-crisis-by-country" className="text-apple-accent hover:underline">
              succession crisis analysis
            </Link></li>
          <li><strong>Best:</strong> Industries with older average owner age (HVAC 58+, plumbing, manufacturing, accounting)</li>
          <li><strong>Worst:</strong> Tech-heavy industries where founders are younger</li>
        </ul>

        <h3 className={h3Class}>5. Margin profile</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> Higher margins provide buffer for operational mistakes, economic downturns, and debt service</li>
          <li><strong>Best:</strong> Insurance brokerage (25&ndash;40%), SaaS (20&ndash;40%), professional services (20&ndash;35%)</li>
          <li><strong>Worst:</strong> Distribution (5&ndash;10%), restaurants (3&ndash;9%), staffing temp (3&ndash;8% net)</li>
        </ul>

        <h3 className={h3Class}>6. Capital intensity</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> Asset-light businesses generate higher returns on invested capital and require less ongoing capex</li>
          <li><strong>Best:</strong> Insurance, IT services, staffing, professional services, accounting</li>
          <li><strong>Worst:</strong> Manufacturing, logistics (fleet), construction, waste management</li>
        </ul>

        <h3 className={h3Class}>7. Complexity &amp; regulatory burden</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> As a first-time CEO, simpler operations reduce execution risk</li>
          <li><strong>Best:</strong> Landscaping, cleaning services, distribution, staffing</li>
          <li><strong>Worst:</strong> Healthcare (HIPAA, state licensing), financial services (SEC, state regulators), construction (OSHA, bonding)</li>
        </ul>

        <h3 className={h3Class}>8. Exit optionality</h3>
        <ul className={ulClass}>
          <li><strong>Why it matters:</strong> More potential acquirers at exit = higher exit multiple and more options</li>
          <li><strong>Best:</strong> Insurance (PE-backed platforms actively acquiring), HVAC, dental (DSOs), MSPs (PE interest)</li>
          <li><strong>Worst:</strong> Niche industries with few strategic or financial buyers</li>
        </ul>

        <h2 className={h2Class}>Top-ranked industries for ETA</h2>
        <ol className={olClass}>
          <li><strong>Insurance brokerage:</strong> 90%+ recurring, 25&ndash;40% margins, asset-light, massive PE exit demand</li>
          <li><strong>HVAC &amp; home services:</strong> Recurring maintenance, fragmented, proven roll-up, recession-resistant</li>
          <li><strong>Managed IT (MSP):</strong> 70&ndash;90% MRR, growing demand, proven consolidation model</li>
          <li><strong>Dental practices (DSO):</strong> Recurring wellness, high margins, PE-proven roll-up</li>
          <li><strong>Waste management:</strong> 90%+ recurring, recession-proof, route density economics</li>
          <li><strong>Accounting firms:</strong> 95%+ retention, succession crisis, advisory upsell potential</li>
          <li><strong>Staffing (niche):</strong> High volume, asset-light, specialization premium</li>
        </ol>

        <p>
          For specific playbooks, see our{" "}
          <Link href="/learn/category/industry-playbooks" className="text-apple-accent hover:underline">
            industry playbook guides
          </Link>. For target criteria, see{" "}
          <Link href="/learn/creating-icp-acquisitions" className="text-apple-accent hover:underline">
            creating your ICP
          </Link>{" "}
          and{" "}
          <Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">
            best industries for search funds
          </Link>.
        </p>
      </div>
    </article>
  );
}
