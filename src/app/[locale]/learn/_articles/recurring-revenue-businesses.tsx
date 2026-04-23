import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function RecurringRevenueBusinessesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Recurring Revenue Businesses: The Most Attractive Verticals</h1>
      <div className={bodyClass}>
        <p>Recurring revenue is the holy grail of business acquisitions. Companies with predictable, subscription-like revenue command higher valuations, are easier to finance, and provide more stable cash flows for debt service. For search fund entrepreneurs, understanding which industries and business models generate the strongest recurring revenue is critical to making a smart acquisition decision.</p>
      </div>

      <h2 className={h2Class}>Types of Recurring Revenue</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Contractual recurring:</strong> Signed contracts with defined terms. Strongest form. Examples: <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">SaaS subscriptions</Link>, managed services, insurance premiums.</li>
          <li><strong>Subscription:</strong> Ongoing service without long-term contract but high retention. Examples: maintenance agreements, membership programs.</li>
          <li><strong>Usage-based recurring:</strong> Predictable repeat usage billed monthly. Examples: <Link href="/learn/waste-management-acquisition" className="text-apple-accent hover:underline">waste collection</Link>, utility services, payment processing.</li>
          <li><strong>Consumable recurring:</strong> Repeat purchases of consumable products. Examples: <Link href="/learn/distribution-wholesale-acquisition" className="text-apple-accent hover:underline">industrial supplies</Link>, medical supplies, food ingredients.</li>
          <li><strong>Retention-based recurring:</strong> High-frequency repeat business driven by habit or necessity. Examples: <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">pet grooming</Link>, dental cleaning, hair salons.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Top Recurring Revenue Industries for ETA</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Tier 1: Strongest Recurring Revenue (80%+ recurring)</h3>
        <ul className={ulClass}>
          <li><strong><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">SaaS &amp; software</Link>:</strong> Monthly/annual subscriptions. 90&ndash;95% gross retention. Industry gold standard.</li>
          <li><strong><Link href="/learn/waste-management-acquisition" className="text-apple-accent hover:underline">Waste management</Link>:</strong> Monthly collection contracts. 90%+ retention. Recession-proof.</li>
          <li><strong><Link href="/learn/it-services-acquisition" className="text-apple-accent hover:underline">Managed IT services (MSP)</Link>:</strong> Monthly per-user contracts. 90%+ retention. Growing demand.</li>
          <li><strong><Link href="/learn/acquiring-insurance-agency" className="text-apple-accent hover:underline">Insurance brokerage</Link>:</strong> Annual policy renewals at 85&ndash;95% retention. Commission-based recurring revenue.</li>
          <li><strong><Link href="/learn/property-management-acquisition" className="text-apple-accent hover:underline">Property management</Link>:</strong> Monthly management fees on long-term contracts. Asset-light, recurring.</li>
        </ul>

        <h3 className={h3Class}>Tier 2: Strong Recurring Revenue (50&ndash;80% recurring)</h3>
        <ul className={ulClass}>
          <li><strong><Link href="/learn/acquiring-staffing-agency" className="text-apple-accent hover:underline">Staffing (temp/contract)</Link>:</strong> Ongoing temp worker billing. 60&ndash;70% of revenue is recurring.</li>
          <li><strong><Link href="/learn/acquiring-accounting-practice" className="text-apple-accent hover:underline">Accounting &amp; bookkeeping</Link>:</strong> Monthly retainers and annual tax prep. Sticky client relationships.</li>
          <li><strong><Link href="/learn/acquiring-pest-control-business" className="text-apple-accent hover:underline">Pest control</Link>:</strong> Monthly/quarterly treatment plans. 80%+ contract retention.</li>
          <li><strong><Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">HVAC service</Link>:</strong> Maintenance agreements growing to 30&ndash;50% of revenue. Strong upsell to replacement.</li>
          <li><strong><Link href="/learn/acquiring-cleaning-business" className="text-apple-accent hover:underline">Commercial cleaning</Link>:</strong> Monthly contracts for office, medical, and industrial facilities.</li>
        </ul>

        <h3 className={h3Class}>Tier 3: Moderate Recurring Revenue (30&ndash;50% recurring)</h3>
        <ul className={ulClass}>
          <li><strong><Link href="/learn/acquiring-dental-practice" className="text-apple-accent hover:underline">Dental practices</Link>:</strong> Biannual hygiene visits and membership programs. Patient retention 70&ndash;80%.</li>
          <li><strong><Link href="/learn/veterinary-practice-acquisition" className="text-apple-accent hover:underline">Veterinary practices</Link>:</strong> Annual exams, wellness plans, and chronic care. Growing wellness plan adoption.</li>
          <li><strong><Link href="/learn/acquiring-digital-marketing-agency" className="text-apple-accent hover:underline">Digital marketing agencies</Link>:</strong> Monthly retainers for SEO, PPC, social media management.</li>
          <li><strong><Link href="/learn/landscaping-acquisition" className="text-apple-accent hover:underline">Landscaping</Link>:</strong> Maintenance contracts for mowing, snow removal. Seasonal but recurring.</li>
        </ul>
      </div>

      <h2 className={h2Class}>How Recurring Revenue Affects Valuation</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Contractual SaaS:</strong> 4&ndash;10x ARR (or 15&ndash;30x EBITDA). Highest premium.</li>
          <li><strong>Managed services/MSP:</strong> 6&ndash;12x EBITDA. High recurring with technology moat.</li>
          <li><strong>Service contracts:</strong> 5&ndash;8x EBITDA. Strong recurring but some churn.</li>
          <li><strong>Repeat purchase businesses:</strong> 4&ndash;6x EBITDA. Predictable but not contractual.</li>
          <li><strong>Project-based businesses:</strong> 3&ndash;5x EBITDA. Lowest premium due to revenue unpredictability.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Contractual recurring revenue (SaaS, managed services, waste collection) commands the highest valuations and easiest financing</li>
          <li>Even in project-based industries, look for companies with growing service agreement and maintenance contract revenue</li>
          <li>Gross revenue retention above 85% and net revenue retention above 100% are the gold standard metrics</li>
          <li>The fastest path to recurring revenue in many acquisitions is implementing monthly service agreements and membership programs</li>
          <li>Recurring revenue businesses are 2&ndash;3x easier to finance because lenders can underwrite predictable cash flows</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">Acquiring a SaaS Business</Link></li>
        <li><Link href="/learn/it-services-acquisition" className="text-apple-accent hover:underline">Acquiring an IT Services Firm</Link></li>
        <li><Link href="/learn/business-valuation" className="text-apple-accent hover:underline">Business Valuation Methods</Link></li>
        <li><Link href="/learn/industry-selection-framework" className="text-apple-accent hover:underline">Industry Selection Framework</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>McKinsey &amp; Company, <em>The Power of Recurring Revenue Models</em> (2024)</li>
        <li>KeyBanc Capital Markets, <em>SaaS Metrics Survey</em> (2024)</li>
        <li>Bain &amp; Company, <em>Subscription Economy Index</em> (2024)</li>
      </ul>
    </article>
  );
}
