import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringITServicesFirmArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring an IT Services &amp; Consulting Firm
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          IT services and consulting is a $600B+ US industry encompassing
          custom software development, systems integration, cloud
          migration, cybersecurity consulting, and IT staffing. For ETA
          entrepreneurs, IT services firms offer high margins, scalable
          models, and strong demand driven by ongoing digital
          transformation.
        </p>

        <h2 className={h2Class}>Sub-sectors</h2>
        <ul className={ulClass}>
          <li><strong>Managed IT services (MSP):</strong> Ongoing IT management for SMBs. See{" "}
            <Link href="/learn/acquiring-msp-business" className="text-apple-accent hover:underline">
              MSP acquisition guide
            </Link></li>
          <li><strong>IT consulting:</strong> Project-based advisory and implementation (ERP, cloud, security)</li>
          <li><strong>Custom software development:</strong> Building bespoke applications for clients</li>
          <li><strong>Systems integration:</strong> Connecting enterprise software systems for mid-market and enterprise clients</li>
          <li><strong>IT staffing:</strong> Placing IT professionals on contract. See{" "}
            <Link href="/learn/acquiring-staffing-agency" className="text-apple-accent hover:underline">
              staffing agency guide
            </Link></li>
          <li><strong>Cybersecurity services:</strong> Penetration testing, compliance, security operations. Fastest-growing sub-sector</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Project-based consulting:</strong> 3&ndash;5x EBITDA (revenue concentration risk)</li>
          <li><strong>Recurring/managed services:</strong> 5&ndash;8x EBITDA (higher predictability)</li>
          <li><strong>Cybersecurity services:</strong> 6&ndash;10x EBITDA (premium demand, high growth)</li>
          <li><strong>Premium factors:</strong> Recurring revenue (&gt;50%), specialized expertise, vendor partnerships (Microsoft Gold, AWS Advanced), blue-chip client roster</li>
          <li><strong>Discount factors:</strong> Project concentration, consultant dependence, technology obsolescence risk</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Revenue quality:</strong> Recurring vs. project revenue split. Track client retention rates and project pipeline</li>
          <li><strong>Consultant utilization:</strong> Billable utilization rate. Best-in-class: 75&ndash;85%. Below 65% signals overstaffing or poor sales</li>
          <li><strong>Bill rates:</strong> Average bill rate by skill level and trend over 3 years. Declining bill rates signal commoditization</li>
          <li><strong>Key person risk:</strong> Revenue concentration in individual consultants. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk guide
            </Link></li>
          <li><strong>Client concentration:</strong>{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              Concentration analysis
            </Link>{" "}
            is critical. Many IT firms have 2&ndash;3 clients generating 50%+ of revenue</li>
          <li><strong>Technology relevance:</strong> Is the firm&rsquo;s expertise in growing or declining technologies?</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Shift to recurring:</strong> Convert project clients to managed services agreements for predictable revenue</li>
          <li><strong>Specialize:</strong> Niche specialization (vertical or technology) commands premium pricing and higher retention</li>
          <li><strong>Offshore delivery:</strong> Build or acquire offshore development capacity (India, Eastern Europe, LATAM) to improve margins 10&ndash;20%</li>
          <li><strong>Vendor partnerships:</strong> Advance to higher partner tiers (Microsoft, AWS, Salesforce) for deal registration, referrals, and margin protection</li>
          <li><strong>Productize services:</strong> Convert repeatable projects into packaged offerings with fixed pricing for scalability</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
            SaaS acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services acquisition
          </Link>.
        </p>
      </div>
    </article>
  );
}
