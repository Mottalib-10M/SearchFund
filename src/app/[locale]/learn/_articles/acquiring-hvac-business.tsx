import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringHVACBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring an HVAC Business: The Search Fund Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          HVAC (Heating, Ventilation, and Air Conditioning) businesses are
          among the most sought-after acquisition targets in the{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services sector
          </Link>.
          The combination of essential-service demand, recurring revenue
          from maintenance contracts, strong margins, and a massive{" "}
          <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
            baby boomer succession wave
          </Link>{" "}
          among owner-operators makes HVAC one of the best industries for ETA
          practitioners and self-funded searchers.
        </p>
        <p>
          This guide covers everything you need to know: industry dynamics,
          valuation benchmarks, due diligence specifics, growth levers, and
          the{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build
          </Link>{" "}
          strategy that has made HVAC a favorite for roll-up acquirers.
        </p>

        <h2 className={h2Class}>Why HVAC is an ideal ETA target</h2>
        <ul className={ulClass}>
          <li><strong>Essential service:</strong> Heating and cooling are non-discretionary &mdash; HVAC demand is recession-resistant. People will defer a vacation before going without heat in January or AC in August.</li>
          <li><strong>Recurring revenue:</strong> Maintenance contracts (service agreements) provide predictable, high-margin recurring revenue streams, typically 20&ndash;40% of total revenue for well-run companies.</li>
          <li><strong>Fragmented market:</strong> The US HVAC market is estimated at $150+ billion, served by tens of thousands of small operators. The top 10 companies hold less than 15% market share, creating enormous consolidation opportunity.</li>
          <li><strong>Strong margins:</strong> Well-managed HVAC companies generate 12&ndash;20% EBITDA margins on service/maintenance and 8&ndash;15% on installation work.</li>
          <li><strong>Succession urgency:</strong> The average HVAC company owner is 58+ years old. Thousands of profitable HVAC businesses will change hands in the next decade.</li>
          <li><strong>Scalable operations:</strong> HVAC operations can be systematized through dispatching software, inventory management, and standardized training, enabling efficient multi-location scaling.</li>
        </ul>

        <h2 className={h2Class}>Valuation benchmarks</h2>
        <p>
          HVAC businesses trade within a range depending on size, revenue
          mix, and market position:
        </p>
        <ul className={ulClass}>
          <li><strong>Small operators (&lt;$2M revenue):</strong> 2&ndash;3.5x SDE (Seller&rsquo;s Discretionary Earnings)</li>
          <li><strong>Mid-size (&dollar;2M&ndash;$10M revenue):</strong> 3.5&ndash;5.5x EBITDA</li>
          <li><strong>Larger platforms (&dollar;10M+ revenue):</strong> 5&ndash;7x EBITDA (PE multiples)</li>
          <li><strong>Add-on acquisitions:</strong> 2&ndash;3.5x EBITDA (significant discount for bolt-on targets)</li>
        </ul>
        <p>
          The spread between platform and add-on multiples is the core
          economic engine of HVAC{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build strategies
          </Link>:
          acquire a platform at 4&ndash;5x, add bolt-ons at 2&ndash;3x, and
          build toward a 6&ndash;8x exit multiple. For more on valuation
          methodology, see our{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            EBITDA multiples by industry
          </Link>{" "}
          benchmarks and{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            business valuation guide
          </Link>.
        </p>

        <h2 className={h2Class}>Revenue model breakdown</h2>
        <p>
          Understanding HVAC revenue streams is essential for{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>:
        </p>

        <h3 className={h3Class}>Service &amp; maintenance (highest margin)</h3>
        <ul className={ulClass}>
          <li>Maintenance contracts (monthly/annual service agreements): 40&ndash;60% gross margin</li>
          <li>Emergency/demand service calls: 50&ndash;65% gross margin</li>
          <li>Typically 30&ndash;50% of total revenue for mature companies</li>
          <li>Best-in-class companies have 1,500+ active maintenance contracts</li>
        </ul>

        <h3 className={h3Class}>Replacement &amp; installation (growth driver)</h3>
        <ul className={ulClass}>
          <li>Equipment replacement (aging units, new construction): 30&ndash;45% gross margin</li>
          <li>New construction installs: 20&ndash;35% gross margin (more competitive)</li>
          <li>Typically 40&ndash;60% of total revenue</li>
          <li>Average ticket: $5K&ndash;$15K residential, $25K&ndash;$200K+ commercial</li>
        </ul>

        <h3 className={h3Class}>Commercial vs. residential mix</h3>
        <p>
          Most search fund HVAC acquisitions target residential or mixed
          residential/commercial companies:
        </p>
        <ul className={ulClass}>
          <li><strong>Residential:</strong> Higher margins, more fragmented, easier to systematize, better for first-time operators</li>
          <li><strong>Commercial:</strong> Larger projects, longer sales cycles, more technical complexity, higher barriers to entry</li>
          <li><strong>Ideal target:</strong> 60&ndash;80% residential, 20&ndash;40% light commercial, with a growing maintenance contract base</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics for HVAC</h2>
        <p>
          Beyond standard{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            financial and legal DD
          </Link>,
          HVAC acquisitions require industry-specific analysis:
        </p>

        <h3 className={h3Class}>Technician workforce</h3>
        <ul className={ulClass}>
          <li>Number and tenure of licensed HVAC technicians</li>
          <li>EPA 608 certifications (required for refrigerant handling)</li>
          <li>State/local HVAC contractor licenses and who holds them (owner vs. company)</li>
          <li>Compensation benchmarks: $50K&ndash;$90K for experienced residential techs, $70K&ndash;$120K for commercial</li>
          <li>Turnover rate: industry average is 15&ndash;25% annually; below 15% is excellent</li>
          <li>Recruiting pipeline: relationships with trade schools, apprenticeship programs</li>
        </ul>

        <h3 className={h3Class}>Vehicle fleet and equipment</h3>
        <ul className={ulClass}>
          <li>Fleet condition, age, and replacement schedule (budget $40K&ndash;$60K per equipped service van)</li>
          <li>GPS tracking and route optimization systems</li>
          <li>Specialized tools and diagnostic equipment</li>
          <li>Parts inventory value and management system</li>
        </ul>

        <h3 className={h3Class}>Customer and contract analysis</h3>
        <ul className={ulClass}>
          <li>Number of active maintenance contracts and renewal rates</li>
          <li>Customer concentration (top 10 customers as % of revenue)</li>
          <li>Average customer lifetime value</li>
          <li>Google/Yelp review scores and online reputation</li>
          <li>Lead sources: referrals, SEO, paid ads, yard signs, dealer relationships</li>
        </ul>

        <h3 className={h3Class}>Licensing and regulatory</h3>
        <ul className={ulClass}>
          <li>Contractor license holder (if the owner holds the license personally, this is a critical transition issue)</li>
          <li>EPA compliance records</li>
          <li>Building permit history</li>
          <li>Workers&rsquo; comp claims history and current EMR (Experience Modification Rate)</li>
          <li>Manufacturer dealer/distributor agreements and warranty relationships</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition growth levers</h2>

        <h3 className={h3Class}>1. Grow the maintenance contract base</h3>
        <p>
          Every service call is an opportunity to sell a maintenance contract.
          Best-in-class HVAC companies convert 30&ndash;40% of service calls
          into maintenance agreements. Implementing a systematic sales process
          for technicians can grow the contract base 20&ndash;30% annually.
        </p>

        <h3 className={h3Class}>2. Digital marketing and lead generation</h3>
        <p>
          Most owner-operated HVAC companies underinvest in digital marketing.
          Implementing professional SEO, Google Ads, and a modern website can
          increase inbound leads by 50&ndash;100%. HVAC keywords have high
          commercial intent and strong local search volume.
        </p>

        <h3 className={h3Class}>3. Pricing optimization</h3>
        <p>
          Many HVAC companies underprice their services. Implementing flat-rate
          pricing (vs. time-and-materials) and regularly benchmarking against
          market rates can improve gross margins by 5&ndash;10 points without
          losing customers.
        </p>

        <h3 className={h3Class}>4. Technology implementation</h3>
        <p>
          Modern field service management (FSM) software (ServiceTitan,
          Housecall Pro, FieldEdge) can transform operations:
        </p>
        <ul className={ulClass}>
          <li>Automated dispatching and route optimization</li>
          <li>Real-time job tracking and customer communication</li>
          <li>Technician performance dashboards</li>
          <li>Integrated invoicing and payment processing</li>
          <li>Marketing automation and review generation</li>
        </ul>

        <h3 className={h3Class}>5. Add-on acquisitions (buy-and-build)</h3>
        <p>
          HVAC is one of the best industries for{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
            buy-and-build strategies
          </Link>.
          Acquire smaller competitors at 2&ndash;3.5x EBITDA, integrate them
          onto your platform (shared dispatching, purchasing power, marketing),
          and build toward a larger, more valuable business. Many PE firms
          will pay 6&ndash;8x for a $5M+ EBITDA HVAC platform with multiple
          locations and strong management.
        </p>

        <h2 className={h2Class}>Financing an HVAC acquisition</h2>
        <ul className={ulClass}>
          <li><strong>SBA 7(a):</strong> The most common financing tool for HVAC acquisitions under $5M. The tangible assets (fleet, equipment, inventory) provide good collateral. See our{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a) guide
            </Link>.</li>
          <li><strong>Seller financing:</strong> Very common in HVAC deals, typically 10&ndash;20% as a{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              vendor note
            </Link></li>
          <li><strong>Search fund equity:</strong> For larger acquisitions ($3M+), search fund investors provide the equity component</li>
          <li><strong>Equipment financing:</strong> Separate fleet and equipment financing can reduce the main acquisition loan</li>
        </ul>

        <h2 className={h2Class}>Risks and mitigation</h2>
        <ul className={ulClass}>
          <li><strong>Technician recruitment:</strong> The #1 challenge. Mitigate by building apprenticeship programs, competitive compensation, and a strong company culture</li>
          <li><strong>License dependency:</strong> If the contractor license is held by the owner, plan the license transfer early in the process</li>
          <li><strong>Seasonality:</strong> HVAC revenue is seasonal (peaks in summer and winter). Ensure working capital reserves cover shoulder seasons</li>
          <li><strong>Manufacturer dependency:</strong> Losing a key dealer agreement (Carrier, Trane, Lennox) can impact equipment pricing and warranty support</li>
          <li><strong>Regulatory changes:</strong> Refrigerant phase-outs (R-22 to R-410A to R-32) require ongoing technician training and inventory management</li>
        </ul>
      </div>
    </article>
  );
}
