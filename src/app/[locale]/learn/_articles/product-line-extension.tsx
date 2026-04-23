import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ProductLineExtensionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Product &amp; Service Line Extension Post-Acquisition</h1>
      <div className={bodyClass}>
        <p>Expanding your product or service offerings is one of the most capital-efficient growth strategies after an acquisition. Unlike <Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">geographic expansion</Link>, which requires new locations and teams, service line extensions leverage your existing customer relationships, infrastructure, and reputation to generate incremental revenue with minimal additional overhead.</p>
      </div>

      <h2 className={h2Class}>Why Service Extension Works Post-Acquisition</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Built-in customer base:</strong> You already have customers who trust you. Selling them additional services is 5&ndash;10x easier than acquiring new customers.</li>
          <li><strong>Revenue per customer:</strong> Increasing wallet share with existing customers improves unit economics</li>
          <li><strong>Competitive moat:</strong> Multi-service providers are stickier &mdash; customers are less likely to switch when you handle multiple needs</li>
          <li><strong>Margin improvement:</strong> Additional services often leverage existing overhead (office, management, trucks, equipment)</li>
          <li><strong>Succession opportunity:</strong> The previous owner may have declined to add services that represent clear demand from customers</li>
        </ul>
      </div>

      <h2 className={h2Class}>Identifying Extension Opportunities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Ask customers:</strong> &quot;What else do you buy from other vendors that we could provide?&quot; This is the single best source of ideas.</li>
          <li><strong>Analyze the value chain:</strong> What happens before and after your service? Can you capture adjacent steps?</li>
          <li><strong>Study competitors:</strong> What services do larger competitors offer that you don&apos;t? Those are validated opportunities.</li>
          <li><strong>Look at complementary services:</strong> What do customers typically buy alongside your core offering?</li>
          <li><strong>Check employee skills:</strong> Your team may have capabilities you&apos;re not monetizing</li>
        </ul>
      </div>

      <h2 className={h2Class}>Examples by Industry</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>HVAC company:</strong> Add plumbing, electrical, indoor air quality, duct cleaning, maintenance contracts</li>
          <li><strong>IT services:</strong> Add cybersecurity, cloud migration, managed services, compliance consulting</li>
          <li><strong>Accounting firm:</strong> Add advisory services, fractional CFO, payroll, bookkeeping, tax planning</li>
          <li><strong>Landscaping:</strong> Add hardscaping, irrigation, snow removal, holiday lighting, tree services</li>
          <li><strong>Manufacturing:</strong> Add design services, assembly, warehousing, fulfillment, maintenance/repair</li>
        </ul>
      </div>

      <h2 className={h2Class}>Implementation Framework</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Validate demand:</strong> Survey customers, test with a pilot group, or offer the service manually before building infrastructure</li>
          <li><strong>Start with low-investment options:</strong> Subcontract or partner before hiring full-time staff for the new service</li>
          <li><strong>Price for value:</strong> New services are an opportunity to set premium pricing from day one</li>
          <li><strong>Train your team:</strong> Ensure existing employees can sell and cross-reference the new service</li>
          <li><strong>Bundle strategically:</strong> Create packages that combine core and new services at a discount vs. buying separately</li>
          <li><strong>Measure separately:</strong> Track the new service&apos;s P&amp;L independently to understand true profitability</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Service line extension is one of the most capital-efficient growth strategies &mdash; leverage your existing customer base</li>
          <li>Ask customers directly: &quot;What else could we provide?&quot; This is the best source of extension ideas</li>
          <li>Start by subcontracting or partnering before committing to full-time hires for new services</li>
          <li>Bundle new services with core offerings to increase adoption and customer stickiness</li>
          <li>Track new service P&amp;L separately to ensure true profitability</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/cross-selling-upselling" className="text-apple-accent hover:underline">Cross-Selling & Upselling Strategies</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion After Acquisition</Link></li>
        <li><Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">Revenue Growth Playbook</Link></li>
        <li><Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">Pricing Optimization</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>The Art of Service Line Extension in Acquired Businesses</em> (2024)</li>
        <li>McKinsey, <em>Growth Through Adjacent Services</em> (2024)</li>
        <li>Stanford GSB, <em>Revenue Diversification in Search Fund Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
