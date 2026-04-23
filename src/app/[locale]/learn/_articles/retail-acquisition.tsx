import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function RetailAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Retail Business</h1>
      <div className={bodyClass}>
        <p>Retail businesses face a challenging narrative in the age of e-commerce, but the reality is more nuanced. The US retail sector generates $5 trillion+ annually, and many physical retail concepts are thriving &mdash; particularly in niches where the in-store experience, service, or immediacy creates real value. For search fund entrepreneurs, the right retail acquisition offers strong cash flow, brand-building opportunity, and omnichannel growth potential, while the wrong one means competing with Amazon on price alone.</p>
      </div>

      <h2 className={h2Class}>Types of Retail Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Specialty retail:</strong> Focused product categories (outdoor gear, pet supplies, health/beauty). Expertise-driven, loyal customer base.</li>
          <li><strong>Service-attached retail:</strong> Products + services (bike shops with repair, electronics with installation, bridal with alterations). Service creates stickiness.</li>
          <li><strong>Multi-location chains:</strong> 3&ndash;20+ locations of the same concept. Scalable operations, management infrastructure.</li>
          <li><strong>E-commerce/hybrid:</strong> Physical stores with strong online presence. Omnichannel model leveraging both channels.</li>
          <li><strong>Convenience &amp; necessity:</strong> Gas stations, pharmacies, dollar stores, hardware stores. Location-driven, recession-resistant.</li>
          <li><strong>Experiential retail:</strong> Wine bars with retail, cooking classes with supplies, maker spaces. Experience drives traffic.</li>
        </ul>
      </div>

      <h2 className={h2Class}>When Retail Works for ETA</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Service-attached:</strong> When the product sale comes with expert advice, installation, or repair that Amazon can&apos;t replicate</li>
          <li><strong>Specialty &amp; niche:</strong> Deep product knowledge and curation create value beyond price comparison</li>
          <li><strong>Multi-unit operators:</strong> Proven concept with documented systems and unit-level economics</li>
          <li><strong>Necessity retail:</strong> Products customers need immediately (hardware, pharmacy, convenience)</li>
          <li><strong>Avoid:</strong> Commodity products easily available online, fashion-driven concepts with trend risk, single-location without growth potential</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Same-store sales:</strong> Year-over-year revenue trend per location. Declining comps are a critical red flag.</li>
          <li><strong>Gross margin:</strong> Product margins by category. Target 40%+ for specialty; 25%+ for commodity. Margin compression kills retailers.</li>
          <li><strong>Lease portfolio:</strong> Remaining terms, renewal options, co-tenancy clauses, and rent-to-revenue ratios (target under 10%)</li>
          <li><strong>Inventory management:</strong> Turnover rate, dead stock percentage, and markdown cadence. Inventory = cash.</li>
          <li><strong>Customer data:</strong> Loyalty program, email list, purchase history. First-party data enables personalization.</li>
          <li><strong>Online presence:</strong> E-commerce revenue, social media following, and digital marketing capability</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>E-commerce launch/optimization:</strong> Build or improve the online channel to capture omnichannel revenue</li>
          <li><strong>Private label:</strong> Develop house brands for higher margins on popular categories</li>
          <li><strong>New locations:</strong> Expand proven concepts into new markets with documented playbooks</li>
          <li><strong>Loyalty &amp; CRM:</strong> Implement customer loyalty programs to increase retention and repeat purchases</li>
          <li><strong>Service expansion:</strong> Add repair, customization, or installation services for higher margins and stickiness</li>
          <li><strong>Technology:</strong> Modern POS, inventory management, and unified commerce platforms</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Focus on service-attached, specialty, and necessity retail where physical presence creates real value</li>
          <li>Same-store sales trends and gross margins are the two most important metrics in retail due diligence</li>
          <li>Lease terms can make or break a retail business &mdash; analyze the entire portfolio carefully</li>
          <li>Omnichannel capability (physical + online) is essential for growth and resilience</li>
          <li>Typical valuations: 3&ndash;6x EBITDA for multi-unit specialty; 2&ndash;4x for commodity or single-location retail</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/franchise-acquisition" className="text-apple-accent hover:underline">Acquiring a Franchise Business</Link></li>
        <li><Link href="/learn/ecommerce-acquisition" className="text-apple-accent hover:underline">Acquiring an E-commerce Business</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>US Census Bureau, <em>Monthly Retail Trade Survey</em> (2024)</li>
        <li>National Retail Federation, <em>State of Retail Report</em> (2024)</li>
        <li>Deloitte, <em>Retail Industry Outlook</em> (2024)</li>
      </ul>
    </article>
  );
}
