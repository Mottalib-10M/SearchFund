import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ServiceVsProductBusinessesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Service vs. Product Businesses: Acquisition Comparison</h1>
      <div className={bodyClass}>
        <p>The service-versus-product distinction fundamentally shapes how a business generates revenue, scales, and creates value. Service businesses sell human expertise and labor; product businesses sell physical or digital goods. Each model has distinct advantages and challenges for acquisition, and understanding the trade-offs helps search fund entrepreneurs identify targets that match their skills, capital, and growth objectives.</p>
      </div>

      <h2 className={h2Class}>Service Business Characteristics</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue model:</strong> Time-based billing, project fees, retainers, or per-engagement pricing. Revenue directly tied to labor capacity.</li>
          <li><strong>Low capital requirements:</strong> Minimal inventory, equipment, or physical assets. Low startup and operating capital needs.</li>
          <li><strong>High margins:</strong> 50&ndash;80% gross margins for professional services. Low COGS when the primary input is labor.</li>
          <li><strong>People-dependent:</strong> Value resides in employees&apos; skills, relationships, and expertise. Key person risk is the primary concern.</li>
          <li><strong>Scaling challenges:</strong> Growth requires hiring more people. Revenue is constrained by available talent and billable hours.</li>
          <li><strong>Customer relationships:</strong> Deep relationships and trust-based selling. High switching costs but relationship concentration risk.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Product Business Characteristics</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue model:</strong> Unit sales, wholesale, subscriptions, or licensing. Revenue can scale independently of labor.</li>
          <li><strong>Capital intensive:</strong> Inventory, manufacturing equipment, warehousing, and distribution require significant capital.</li>
          <li><strong>Variable margins:</strong> Gross margins vary widely: manufacturing (25&ndash;50%), consumer products (40&ndash;60%), software (70&ndash;90%).</li>
          <li><strong>Asset-based value:</strong> Value resides in products, IP, brand, and systems rather than individual people. Lower key person risk.</li>
          <li><strong>Scalability:</strong> Products can be replicated at low marginal cost (especially digital). Revenue can grow faster than headcount.</li>
          <li><strong>Inventory risk:</strong> Obsolescence, spoilage, and demand forecasting challenges. Working capital tied up in inventory.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Valuation Differences</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Service businesses:</strong> Typically valued at 3&ndash;6x EBITDA. Lower multiples reflect people-dependence and scaling constraints.</li>
          <li><strong>Product businesses:</strong> Typically valued at 4&ndash;8x EBITDA. Higher multiples reflect scalability, IP, and asset-based value.</li>
          <li><strong>Recurring service revenue:</strong> Managed services, maintenance contracts, and retainer-based services command higher multiples (5&ndash;8x).</li>
          <li><strong>Branded products:</strong> Strong consumer brands with loyal customers command premium valuations (6&ndash;10x+).</li>
          <li><strong>Hybrid models:</strong> Product + service businesses (e.g., equipment + maintenance) often achieve the best valuation multiples.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Which Is Better for ETA?</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Service businesses dominate ETA:</strong> 60%+ of search fund acquisitions are service businesses due to lower capital requirements and abundant targets.</li>
          <li><strong>Service strength:</strong> Easier to finance (lower asset base), more deal flow, and MBA-trained operators excel at people management.</li>
          <li><strong>Product opportunity:</strong> Product businesses with strong brands or proprietary technology can be excellent acquisitions with higher growth potential.</li>
          <li><strong>Best targets:</strong> Service businesses with recurring revenue, systematized operations, and diversified customer bases reduce key person risk.</li>
          <li><strong>Growth path:</strong> Service-to-product transition (productizing services) is a powerful post-acquisition value creation strategy.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Service businesses offer high margins and low capital requirements but face scaling constraints and key person risk</li>
          <li>Product businesses offer scalability and asset-based value but require more capital and carry inventory risk</li>
          <li>60%+ of search fund acquisitions are service businesses, reflecting ETA&apos;s preference for lower capital and abundant deal flow</li>
          <li>Service businesses with recurring revenue (maintenance, retainers, managed services) combine the best of both models</li>
          <li>Productizing services post-acquisition is one of the most effective value creation strategies in ETA</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/b2b-vs-b2c-acquisitions" className="text-apple-accent hover:underline">B2B vs. B2C Acquisitions</Link></li>
        <li><Link href="/learn/asset-light-vs-asset-heavy" className="text-apple-accent hover:underline">Asset-Light vs. Asset-Heavy</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/ideal-acquisition-target" className="text-apple-accent hover:underline">Defining Your Ideal Acquisition Target</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Business Model Analysis</em> (2024)</li>
        <li>McKinsey, <em>Service vs. Product Business Economics</em> (2024)</li>
        <li>Harvard Business Review, <em>Productizing Professional Services</em> (2024)</li>
      </ul>
    </article>
  );
}
