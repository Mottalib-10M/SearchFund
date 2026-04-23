import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringElectricalBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring an Electrical Contracting Business
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Electrical contracting is one of the most attractive{" "}
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            home services
          </Link>{" "}
          verticals for{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>{" "}
          acquisitions. High barriers to entry (licensing), essential service
          demand, and a severe labor shortage create a durable competitive
          moat. With 90,000+ electrical contractors in the US alone, the
          industry is massively fragmented and ripe for consolidation.
        </p>

        <h2 className={h2Class}>Why acquire an electrical contractor?</h2>
        <ul className={ulClass}>
          <li><strong>Essential service:</strong> Electrical work is required by code for new construction, renovations, and maintenance. Demand is non-discretionary</li>
          <li><strong>Licensing moat:</strong> Master electrician licenses take 4&ndash;8 years of apprenticeship + exams. This creates a structural barrier to entry that protects margins</li>
          <li><strong>Fragmented market:</strong> 90,000+ contractors in the US, most with &lt;$5M revenue. No single player has &gt;1% national market share</li>
          <li><strong>Recurring revenue potential:</strong> Service agreements, maintenance contracts, and inspection programs can drive 20&ndash;40% recurring revenue</li>
          <li><strong>Growth tailwinds:</strong> EV charging infrastructure, solar panel installation, data center construction, and smart home technology are driving demand growth</li>
          <li><strong>Roll-up economics:</strong> Excellent{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>{" "}
            candidate. Add adjacent geographies or specializations (fire alarm, low-voltage, generators)</li>
        </ul>

        <h2 className={h2Class}>Types of electrical contractors</h2>
        <ul className={ulClass}>
          <li><strong>Residential service:</strong> Service calls, panel upgrades, renovations. Highest margins (40&ndash;60% gross), most recurring revenue potential. Best for ETA</li>
          <li><strong>Commercial service:</strong> Office buildouts, retail, restaurant electrical. Moderate margins (30&ndash;45%), project-based but repeat clients</li>
          <li><strong>New construction (residential):</strong> Wiring new homes. Lower margins (20&ndash;35%), lumpy revenue tied to housing starts. Higher risk</li>
          <li><strong>New construction (commercial/industrial):</strong> Large projects, bonding requirements, longer payment cycles. Often $10M+ revenue. Higher complexity</li>
          <li><strong>Specialty:</strong> Fire alarm, low-voltage (data/telecom), generator installation, solar. Niche expertise commands premium pricing</li>
        </ul>

        <h2 className={h2Class}>Key due diligence areas</h2>
        <ul className={ulClass}>
          <li><strong>Licensing:</strong> Verify the master electrician license status, transferability, and who holds it. If the owner holds the only license, that&rsquo;s{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              critical key person risk
            </Link>. Ensure at least one employee holds or can obtain the license post-close</li>
          <li><strong>Insurance &amp; bonding:</strong> Verify general liability ($1M+), workers&rsquo; comp, vehicle insurance, and any required performance bonds. Check claims history &mdash; electrical work has high liability exposure</li>
          <li><strong>Workforce quality:</strong> Assess journeyman and apprentice counts, certification levels, tenure, and compensation. In today&rsquo;s labor market, losing skilled electricians post-acquisition is the #1 operational risk</li>
          <li><strong>Revenue mix:</strong> Service &amp; maintenance vs. project/construction. Higher service mix = more predictable revenue and higher margins</li>
          <li><strong>Customer concentration:</strong> For residential service, the customer base is naturally diversified. For commercial, check if any general contractor or client represents &gt;15% of revenue</li>
          <li><strong>Backlog:</strong> Review the project backlog and pipeline. For construction-heavy contractors, backlog visibility is critical for revenue forecasting</li>
          <li><strong>Fleet &amp; equipment:</strong> Inspect vehicles, tools, and diagnostic equipment. Deferred maintenance on the fleet is a hidden cost</li>
          <li><strong>Safety record:</strong> Review OSHA logs, EMR (Experience Modification Rate), and incident history. EMR &gt;1.0 increases insurance costs and disqualifies you from some commercial bids</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 3&ndash;5x EBITDA for most electrical contractors with $500K&ndash;$3M EBITDA</li>
          <li><strong>Premium factors:</strong> High service/maintenance revenue mix (+1x), licensed employees beyond the owner (+0.5x), established brand (+0.5x), low customer concentration (+0.5x)</li>
          <li><strong>Discount factors:</strong> Owner holds only license (-1&ndash;2x), construction-heavy revenue mix (-1x), aging fleet (-0.5x)</li>
          <li><strong>SBA financing:</strong> Electrical contractors are strong{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a)
            </Link>{" "}
            candidates due to predictable cash flows and tangible asset base (vehicles, equipment)</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Retain the master electrician:</strong> If the owner holds the license, negotiate a 12&ndash;24 month transition. Immediately start developing another employee toward licensure</li>
          <li><strong>Build service agreements:</strong> Convert one-time service calls into annual maintenance contracts (panel inspections, surge protector checks, generator maintenance). Target 30%+ recurring revenue within 2 years</li>
          <li><strong>Raise prices:</strong> Most owner-operators undercharge.{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              Price optimization
            </Link>{" "}
            of 10&ndash;20% is achievable, especially for service calls where comparison shopping is minimal</li>
          <li><strong>Invest in marketing:</strong> Google Local Service Ads, SEO for &ldquo;electrician near me,&rdquo; and online reviews are the top lead generation channels. Most owner-operators do zero marketing</li>
          <li><strong>Develop the workforce:</strong> Start an apprenticeship program. Partner with local trade schools. Electricians are in severe shortage &mdash; the company that develops talent wins</li>
          <li><strong>Add specializations:</strong> EV charger installation, generator sales, smart home wiring, and solar panel integration are high-margin, high-growth services</li>
          <li><strong>Implement field service software:</strong> ServiceTitan, Housecall Pro, or Jobber for scheduling, dispatching, invoicing, and customer management. Most small contractors still use paper</li>
        </ul>

        <p>
          For related trades playbooks, see{" "}
          <Link href="/learn/acquiring-plumbing-business" className="text-apple-accent hover:underline">
            acquiring a plumbing business
          </Link>,{" "}
          <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">
            HVAC acquisition
          </Link>, and{" "}
          <Link href="/learn/acquiring-landscaping-business" className="text-apple-accent hover:underline">
            landscaping acquisition
          </Link>.
        </p>
      </div>
    </article>
  );
}
