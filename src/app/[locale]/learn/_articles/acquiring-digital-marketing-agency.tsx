import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringDigitalMarketingAgencyArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Digital Marketing Agency
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Digital marketing agencies are popular acquisition targets for{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>{" "}
          entrepreneurs: low capital intensity, recurring retainer revenue,
          and massive fragmentation. But agencies also carry unique risks
          around talent retention, client concentration, and owner
          dependence. Here&rsquo;s how to evaluate and acquire one.
        </p>

        <h2 className={h2Class}>Why acquire a digital marketing agency?</h2>
        <ul className={ulClass}>
          <li><strong>Fragmented market:</strong> 120,000+ agencies in the US alone, the vast majority with under $5M revenue. No dominant player</li>
          <li><strong>Recurring revenue:</strong> Well-run agencies generate 60&ndash;80% of revenue from monthly retainer contracts (SEO, social media management, PPC management)</li>
          <li><strong>Asset-light:</strong> Minimal capex. Primary assets are people, client relationships, and processes</li>
          <li><strong>High margins:</strong> Gross margins of 50&ndash;70%, EBITDA margins of 15&ndash;25% for well-managed agencies</li>
          <li><strong>Roll-up potential:</strong> Add specialized capabilities (SEO, paid media, creative, web dev) through{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              add-on acquisitions
            </Link></li>
          <li><strong>Remote-friendly:</strong> Many agencies operate partially or fully remote, expanding the geographic search radius</li>
        </ul>

        <h2 className={h2Class}>Agency types &amp; what to look for</h2>

        <h3 className={h3Class}>Best targets</h3>
        <ul className={ulClass}>
          <li><strong>Niche/vertical agencies:</strong> Specialize in one industry (e.g., healthcare marketing, legal marketing, SaaS marketing). Higher retention, less price competition, more defensible</li>
          <li><strong>Retainer-heavy agencies:</strong> 70%+ of revenue from monthly retainers. Avoid project-heavy agencies where every dollar must be re-sold</li>
          <li><strong>Performance agencies:</strong> SEO, PPC, and conversion rate optimization agencies that can demonstrate measurable ROI to clients</li>
        </ul>

        <h3 className={h3Class}>Riskier targets</h3>
        <ul className={ulClass}>
          <li><strong>Creative/branding agencies:</strong> Project-based revenue, highly subjective deliverables, and talent-dependent</li>
          <li><strong>Web development agencies:</strong> Project-based unless they have hosting/maintenance retainers. Technology changes rapidly</li>
          <li><strong>Social media agencies:</strong> Low barriers to entry, high client churn, algorithm-dependent results</li>
        </ul>

        <h2 className={h2Class}>Key due diligence areas</h2>
        <ul className={ulClass}>
          <li><strong>Client concentration:</strong> No client should exceed 15% of revenue. See{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              concentration risk
            </Link>. Agency clients can leave with 30 days notice</li>
          <li><strong>Client retention rate:</strong> Target 85%+ annual net revenue retention. Ask for monthly MRR cohort data, not just top-line revenue</li>
          <li><strong>Contract structure:</strong> Monthly retainers with 30&ndash;90 day notice periods. Longer notice = more stability. Check for auto-renewal clauses</li>
          <li><strong>Key person dependency:</strong> Is the founder the primary client relationship manager? If clients came for the founder, they may leave after the sale. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link></li>
          <li><strong>Employee retention:</strong> Agency talent is the product. Assess account manager tenure, compensation competitiveness, and flight risk of key employees</li>
          <li><strong>Revenue per employee:</strong> Target $120K&ndash;$200K+ per employee for a healthy agency. Below $100K signals overstaffing or low pricing</li>
          <li><strong>Contractor vs. employee mix:</strong> Heavy contractor reliance reduces fixed costs but increases delivery risk and institutional knowledge loss</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Typical range:</strong> 3&ndash;6x EBITDA or 0.6&ndash;1.2x revenue for agencies with $500K&ndash;$3M EBITDA</li>
          <li><strong>Premium factors:</strong> Vertical specialization (+1x), 80%+ recurring revenue (+1x), strong management team (+0.5x), proven growth (+0.5x)</li>
          <li><strong>Discount factors:</strong> Founder-dependent (-1&ndash;2x), project-based revenue (-1x), high client concentration (-1x)</li>
          <li><strong>SDE vs. EBITDA:</strong> For sub-$1M EBITDA agencies, use{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              SDE (Seller&rsquo;s Discretionary Earnings)
            </Link>{" "}
            which adds back the owner&rsquo;s salary and perks</li>
          <li><strong>Earn-out:</strong> Common to structure 20&ndash;30% of the price as an{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-out
            </Link>{" "}
            tied to client retention and revenue milestones</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Retain key account managers:</strong> Offer retention bonuses and equity incentives to the top 3&ndash;5 client-facing employees</li>
          <li><strong>Meet every client:</strong> Within 30 days, meet each client personally. Reassure them about continuity and gather feedback on service quality</li>
          <li><strong>Systematize delivery:</strong> Document processes, create SOPs, and implement project management tools (Asana, Monday, ClickUp) to reduce dependence on tribal knowledge</li>
          <li><strong>Raise prices:</strong> Most founder-led agencies undercharge. A 10&ndash;20%{" "}
            <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
              pricing increase
            </Link>{" "}
            drops straight to EBITDA. Implement for new clients first, then at renewal for existing clients</li>
          <li><strong>Build sales engine:</strong> Founder-led agencies rarely have a systematic sales process. Implement outbound prospecting, referral programs, and content marketing</li>
          <li><strong>Add recurring services:</strong> Layer on hosting, maintenance, reporting dashboards, or new channels (email, SMS) to increase per-client revenue</li>
        </ul>

        <p>
          For related industry playbooks, see{" "}
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
            acquiring a SaaS business
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
