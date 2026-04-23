import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function FireProtectionAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Fire Protection &amp; Safety Services Business</h1>
      <div className={bodyClass}>
        <p>Fire protection and life safety businesses provide essential, code-mandated services that every commercial building, school, hospital, and industrial facility must maintain. The US fire protection industry generates $25B+ annually, covering fire alarm systems, sprinkler installation and inspection, fire extinguisher service, and emergency lighting. For search fund entrepreneurs, fire protection offers recurring inspection revenue, regulatory-driven demand, and a fragmented market ripe for consolidation.</p>
      </div>

      <h2 className={h2Class}>Types of Fire Protection Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Fire alarm systems:</strong> Installation, monitoring, and inspection of fire detection and notification systems. Recurring monitoring and inspection contracts.</li>
          <li><strong>Fire sprinkler:</strong> Design, installation, and inspection of automatic sprinkler systems. Code-mandated inspections create recurring revenue.</li>
          <li><strong>Fire extinguisher service:</strong> Sales, inspection, and maintenance of portable extinguishers. High-frequency recurring visits (annual inspections).</li>
          <li><strong>Suppression systems:</strong> Clean agent, kitchen hood, and special hazard suppression. Niche expertise commands premium pricing.</li>
          <li><strong>Emergency/exit lighting:</strong> Installation and annual testing of emergency lighting and exit signs. Often bundled with other services.</li>
          <li><strong>Full-service life safety:</strong> Integrated fire alarm, sprinkler, extinguisher, and suppression services. Broadest service offering.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Fire Protection Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Code-mandated:</strong> Fire inspections are required by law (NFPA codes, AHJ requirements). Non-discretionary spending.</li>
          <li><strong>Recurring revenue:</strong> Annual and semi-annual inspections create 50&ndash;70% recurring revenue</li>
          <li><strong>Recession-proof:</strong> Buildings must be inspected regardless of economic conditions. Revenue barely fluctuates in downturns.</li>
          <li><strong>High barriers:</strong> Licensing, certifications (NICET), and specialized training create barriers to entry</li>
          <li><strong>Fragmented:</strong> Thousands of small, local fire protection companies. National players hold under 20% market share.</li>
          <li><strong>Cross-sell opportunities:</strong> Fire extinguisher customers need alarm inspections, sprinkler inspections, and suppression service</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue percentage:</strong> What percentage comes from inspection contracts vs. project/installation? Target 50%+ recurring.</li>
          <li><strong>Customer base:</strong> Number of inspection accounts, average revenue per account, and retention rate</li>
          <li><strong>Licensing &amp; certifications:</strong> State fire protection contractor licenses, NICET certifications, and backflow certifications for technicians</li>
          <li><strong>AHJ relationships:</strong> Relationships with local Authorities Having Jurisdiction (fire marshals, building inspectors)</li>
          <li><strong>Vehicle fleet:</strong> Service vehicles, stocking levels, and equipment condition</li>
          <li><strong>Deficiency conversion:</strong> How effectively does the company convert inspection deficiencies into repair revenue?</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Add service lines:</strong> If extinguisher-only, add alarm and sprinkler inspection. Full-service captures the entire spend.</li>
          <li><strong>Monitoring contracts:</strong> Add 24/7 fire alarm monitoring for monthly recurring revenue ($30&ndash;75/account/month)</li>
          <li><strong>Deficiency repair:</strong> Improve deficiency-to-repair conversion rate. Every inspection generates repair opportunities.</li>
          <li><strong>Route acquisition:</strong> Buy inspection routes from retiring one-person operators</li>
          <li><strong>Technology:</strong> Inspection software, automated scheduling, and digital compliance reporting</li>
          <li><strong>Geographic expansion:</strong> Expand into neighboring territories to serve multi-location customers</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Fire protection is code-mandated, recession-proof, and generates 50&ndash;70% recurring inspection revenue</li>
          <li>Full-service companies (alarm + sprinkler + extinguisher + suppression) command the highest valuations</li>
          <li>Deficiency-to-repair conversion is a key post-acquisition lever &mdash; every inspection generates repair opportunities</li>
          <li>NICET certifications and state licensing create meaningful barriers to entry and protect market position</li>
          <li>Typical valuations: 5&ndash;8x EBITDA for full-service companies with strong recurring inspection bases</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/hvac-acquisition" className="text-apple-accent hover:underline">Acquiring an HVAC Business</Link></li>
        <li><Link href="/learn/acquiring-electrical-contractor" className="text-apple-accent hover:underline">Acquiring an Electrical Contracting Business</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>NFPA (National Fire Protection Association), <em>Fire Protection Industry Overview</em> (2024)</li>
        <li>IBISWorld, <em>Fire Protection Services in the US</em> (2024)</li>
        <li>SDM Magazine, <em>Fire &amp; Life Safety Market Report</em> (2024)</li>
      </ul>
    </article>
  );
}
