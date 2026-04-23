import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringPlumbingBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Plumbing Business: The ETA Playbook
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Plumbing is a $130B+ US industry with characteristics that
          make it one of the best home services sectors for acquisition.
          Essential service demand, recurring maintenance revenue, and
          extreme fragmentation create a classic ETA opportunity &mdash;
          similar to the{" "}
          <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">
            HVAC model
          </Link>{" "}
          that has proven successful for dozens of search fund acquirers.
        </p>

        <h2 className={h2Class}>Why plumbing?</h2>
        <ul className={ulClass}>
          <li><strong>Essential service:</strong> Plumbing emergencies (leaks, backups, water heater failures) cannot wait. Non-discretionary demand</li>
          <li><strong>Recurring revenue:</strong> Service agreements, drain cleaning contracts, and maintenance programs generate 20&ndash;35% recurring revenue</li>
          <li><strong>Fragmented:</strong> Majority of plumbing companies are owner-operated with $500K&ndash;$5M revenue</li>
          <li><strong>Succession wave:</strong> Average plumbing company owner is 55+. Many have no succession plan</li>
          <li><strong>Weather-resistant:</strong> Pipes freeze in winter, sewer lines back up year-round. Demand is relatively stable across seasons</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Small operators:</strong> 2&ndash;3.5x SDE for companies with &lt;$2M revenue</li>
          <li><strong>Mid-size companies:</strong> 3.5&ndash;5.5x EBITDA for $2&ndash;10M revenue</li>
          <li><strong>Platform companies:</strong> 5&ndash;7x EBITDA for $10M+ revenue with management teams</li>
          <li><strong>Premium factors:</strong> Service agreement base, commercial/residential mix, modern fleet, low technician turnover</li>
          <li><strong>Discount factors:</strong> Owner-dependent, residential-only, aging equipment, no service agreements</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Revenue mix:</strong> Service/repair vs. new construction. Service is more valuable (higher margins, recurring, less cyclical)</li>
          <li><strong>Service agreements:</strong> Number of active agreements, average contract value, renewal rate</li>
          <li><strong>Technician metrics:</strong> Revenue per technician, average ticket size, callback rates, customer satisfaction scores</li>
          <li><strong>Fleet &amp; equipment:</strong> Vehicle condition, GPS tracking, inventory management, major equipment age</li>
          <li><strong>Licensing:</strong> Master plumber license requirements vary by state. Verify license transferability</li>
          <li><strong>Marketing:</strong> Lead sources (Google, referrals, HomeAdvisor), cost per lead, and conversion rates</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Service agreement growth:</strong> Convert one-time service calls into ongoing maintenance agreements. Target 40%+ recurring revenue</li>
          <li><strong>Pricing optimization:</strong> Many plumbing companies undercharge.{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              Flat-rate pricing
            </Link>{" "}
            (vs. time-and-material) typically increases average ticket 20&ndash;30%</li>
          <li><strong>Add services:</strong> Water heater replacement, water treatment, sewer line repair, drain cleaning programs</li>
          <li><strong>Digital marketing:</strong> Google Local Services, SEO, PPC advertising. Most plumbing companies underinvest in digital marketing</li>
          <li><strong>Buy-and-build:</strong> Acquire 2&ndash;5 additional plumbing companies in the same metro area for route density and back-office synergies</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">
            HVAC acquisition
          </Link>.
        </p>
      </div>
    </article>
  );
}
