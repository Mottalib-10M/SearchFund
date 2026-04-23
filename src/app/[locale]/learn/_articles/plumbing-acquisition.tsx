import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PlumbingAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Plumbing Business</h1>
      <div className={bodyClass}>
        <p>Plumbing businesses are excellent search fund targets. The $130B+ US plumbing market is highly fragmented, essential (plumbing emergencies can&apos;t wait), and increasingly sophisticated as water treatment, trenchless technology, and smart home systems create opportunities for value-added services. Like <Link href="/learn/hvac-acquisition" className="text-apple-accent hover:underline">HVAC</Link>, the plumbing industry faces a massive succession gap as aging owner-operators retire.</p>
      </div>

      <h2 className={h2Class}>Why Plumbing Businesses Are Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Essential service:</strong> Plumbing emergencies are non-deferrable. A burst pipe at 2 AM gets fixed at 2 AM.</li>
          <li><strong>High margins:</strong> Service plumbing generates 50&ndash;65% gross margins; even new construction achieves 25&ndash;35%</li>
          <li><strong>Low technology disruption risk:</strong> Plumbing will not be automated or offshored anytime soon</li>
          <li><strong>Licensing moat:</strong> Master plumber licenses take years to obtain, creating barriers to entry</li>
          <li><strong>Recurring revenue:</strong> Drain maintenance, water heater flushes, and service plans build predictable income</li>
          <li><strong>Add-on opportunity:</strong> Natural expansion into <Link href="/learn/hvac-acquisition" className="text-apple-accent hover:underline">HVAC</Link>, water treatment, and sewer/drain services</li>
        </ul>
      </div>

      <h2 className={h2Class}>Types of Plumbing Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Residential service:</strong> Emergency repairs, water heater replacement, fixture installation. Highest margin. Best for ETA.</li>
          <li><strong>Residential new construction:</strong> Rough-in and trim-out for new homes. Volume-dependent, tied to housing cycles.</li>
          <li><strong>Commercial plumbing:</strong> Tenant improvements, commercial buildings, restaurants. Larger tickets, more complex bidding.</li>
          <li><strong>Specialty:</strong> Trenchless pipe lining, water treatment, fire sprinkler. Higher margin, specialized equipment needed.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Licensing:</strong> Who holds the master plumber license? If it&apos;s the owner and they&apos;re leaving, you need a licensed replacement.</li>
          <li><strong>Revenue mix:</strong> Service vs. new construction vs. commercial. Higher service percentage = better.</li>
          <li><strong>Average ticket:</strong> Residential service should average $350&ndash;800. Below $250 may indicate underpricing.</li>
          <li><strong>Call volume:</strong> Track daily/weekly service calls. Growing call volume indicates strong demand and marketing effectiveness.</li>
          <li><strong>Workforce:</strong> Licensed journeyman plumbers are scarce. Assess tenure, certifications, and apprentice pipeline.</li>
          <li><strong>Insurance:</strong> Plumbing carries property damage risk. Review claims history and insurance costs carefully.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Service agreements:</strong> Offer annual maintenance plans for water heaters, whole-house inspections, and drain cleaning</li>
          <li><strong>Price optimization:</strong> Many plumbing companies underprice. Implement flat-rate pricing books instead of time-and-materials.</li>
          <li><strong>Add HVAC or electrical:</strong> Multi-trade companies command higher valuations and reduce seasonality</li>
          <li><strong>Water treatment:</strong> Whole-house filtration and water softeners are high-margin upsells</li>
          <li><strong>Digital marketing:</strong> Google Local Service Ads and Google Business Profile optimization drive emergency calls</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Plumbing is an essential, high-margin service business with strong licensing barriers to entry</li>
          <li>Target residential service-focused businesses with growing call volume and reasonable average tickets</li>
          <li>Verify that the master plumber license transfers or that a licensed replacement is in place</li>
          <li>Flat-rate pricing books and service agreements are the two highest-impact operational improvements</li>
          <li>Multi-trade expansion (adding HVAC, electrical) increases both revenue and exit valuation</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/hvac-acquisition" className="text-apple-accent hover:underline">Acquiring an HVAC Business</Link></li>
        <li><Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">Acquiring a Home Services Business</Link></li>
        <li><Link href="/learn/acquiring-electrical-business" className="text-apple-accent hover:underline">Acquiring an Electrical Business</Link></li>
        <li><Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">Pricing Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>IBISWorld, <em>Plumbing Industry in the US: Market Report</em> (2024)</li>
        <li>PHCC, <em>Plumbing-Heating-Cooling Contractors Industry Report</em> (2024)</li>
        <li>ServiceTitan, <em>Home Services Industry Benchmark Report</em> (2024)</li>
      </ul>
    </article>
  );
}
