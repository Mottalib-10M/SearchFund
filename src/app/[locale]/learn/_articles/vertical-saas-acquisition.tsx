import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function VerticalSaaSAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Vertical SaaS Business</h1>
      <div className={bodyClass}>
        <p>Vertical SaaS &mdash; software built for a specific industry &mdash; represents one of the most compelling acquisition opportunities in technology. Unlike horizontal SaaS (which serves all industries), vertical SaaS creates deep moats through industry-specific workflows, compliance, and data that make switching nearly impossible. For search fund entrepreneurs, acquiring a profitable vertical SaaS company offers recurring revenue, high retention, and significant growth potential.</p>
      </div>

      <h2 className={h2Class}>Why Vertical SaaS Is Compelling</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Deep moats:</strong> Industry-specific workflows and compliance requirements make switching costly</li>
          <li><strong>Net revenue retention:</strong> Best vertical SaaS companies achieve 110&ndash;130% NRR through expansion and upselling</li>
          <li><strong>Lower competition:</strong> Smaller TAM means fewer VC-funded competitors trying to disrupt you</li>
          <li><strong>Higher ARPU:</strong> Industry-specific value justifies premium pricing ($200&ndash;2,000+/user/month)</li>
          <li><strong>Embedded payments:</strong> Many vertical SaaS companies add payment processing (FinTech layer) for additional margin</li>
          <li><strong>Predictable growth:</strong> Land-and-expand within specific industries with a defined customer universe</li>
        </ul>
      </div>

      <h2 className={h2Class}>Examples by Industry</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Healthcare:</strong> EHR, practice management, dental software, veterinary PMS</li>
          <li><strong>Construction:</strong> Project management, estimating, equipment rental software</li>
          <li><strong>Restaurants:</strong> POS systems, reservation management, kitchen display systems</li>
          <li><strong>Property management:</strong> Tenant management, rent collection, maintenance tracking</li>
          <li><strong>Field services:</strong> Scheduling, dispatch, work order management (ServiceTitan, Jobber)</li>
          <li><strong>Legal:</strong> Practice management, billing, document management</li>
          <li><strong>Agriculture:</strong> Farm management, precision agriculture, supply chain tracking</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Essentials</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>ARR and growth rate:</strong> Annual recurring revenue and year-over-year growth. Target 15&ndash;30% growth for profitable vertical SaaS.</li>
          <li><strong>Churn rate:</strong> Monthly gross and net churn. Target: gross logo churn under 2%/month; net revenue retention above 100%.</li>
          <li><strong>Customer concentration:</strong> Top 10 customers should represent less than 30% of ARR</li>
          <li><strong>Technology stack:</strong> Modern architecture (cloud-native, API-first) vs. legacy codebase. Legacy = technical debt.</li>
          <li><strong>Engineering team:</strong> Assess development velocity, code quality, and key person risk in the engineering team</li>
          <li><strong>Market position:</strong> What percentage of the addressable market do they serve? Is the TAM growing?</li>
        </ul>
      </div>

      <h2 className={h2Class}>Growth Strategies Post-Acquisition</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Price optimization:</strong> Vertical SaaS often undercharges. Move to value-based pricing tied to customer outcomes.</li>
          <li><strong>Embedded payments:</strong> Add payment processing (Stripe Connect, Finix) for 1&ndash;3% of transaction volume</li>
          <li><strong>Adjacent modules:</strong> Build or acquire complementary features (e.g., a scheduling tool adds invoicing)</li>
          <li><strong>Implementation services:</strong> Charge for onboarding, configuration, and training</li>
          <li><strong>Data and analytics:</strong> Industry benchmarking data is uniquely valuable and defensible</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Vertical SaaS creates deep moats through industry-specific workflows and high switching costs</li>
          <li>Focus on companies with net revenue retention above 100%, gross logo churn under 2%/month, and diversified customer bases</li>
          <li>Price optimization and embedded payments are the fastest paths to margin expansion</li>
          <li>Assess technology stack carefully: modern architecture enables growth; legacy code is expensive to maintain</li>
          <li>Vertical SaaS companies are valued at 4&ndash;10x ARR depending on growth, retention, and profitability</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">Acquiring a SaaS Business</Link></li>
        <li><Link href="/learn/it-services-acquisition" className="text-apple-accent hover:underline">Acquiring an IT Services Firm</Link></li>
        <li><Link href="/learn/tech-audit-post-acquisition" className="text-apple-accent hover:underline">Technology Audit Post-Acquisition</Link></li>
        <li><Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">Pricing Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Bessemer Venture Partners, <em>State of the Cloud: Vertical SaaS</em> (2024)</li>
        <li>KeyBanc, <em>SaaS Metrics Survey</em> (2024)</li>
        <li>Gartner, <em>Industry-Specific Cloud Application Market Forecast</em> (2024)</li>
      </ul>
    </article>
  );
}
