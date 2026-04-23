import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function CRMImplementationArticle() {
  return (
    <article>
      <h1 className={h1Class}>Implementing a CRM System in Your Acquired Company</h1>
      <div className={bodyClass}>
        <p>Most businesses acquired through search funds have no formal CRM system. Customer relationships, sales pipelines, and contact information live in the former owner&apos;s head, scattered spreadsheets, or a dusty Rolodex. Implementing a CRM is one of the most impactful operational improvements you can make &mdash; it gives you visibility into customer relationships, creates a repeatable sales process, and protects the business from key person risk.</p>
      </div>

      <h2 className={h2Class}>Why CRM Is a Top Priority</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Customer visibility:</strong> Know who your customers are, what they buy, and when they last interacted with you</li>
          <li><strong>Sales pipeline:</strong> Track opportunities from lead to close with a structured process</li>
          <li><strong>Key person risk:</strong> When customer relationships live in one person&apos;s head, their departure is catastrophic</li>
          <li><strong>Revenue forecasting:</strong> Pipeline data enables accurate revenue projections for your board and investors</li>
          <li><strong>Accountability:</strong> Track sales activities and hold the team accountable with data, not guesswork</li>
        </ul>
      </div>

      <h2 className={h2Class}>Choosing the Right CRM</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>For Small Businesses ($2&ndash;10M Revenue)</h3>
        <ul className={ulClass}>
          <li><strong>HubSpot CRM:</strong> Free tier is surprisingly robust. Best for companies with a marketing/inbound focus. Easy to use.</li>
          <li><strong>Pipedrive:</strong> Simple, sales-focused CRM. Great for teams that need a visual pipeline without complexity.</li>
          <li><strong>Zoho CRM:</strong> Cost-effective with a broad feature set. Good for budget-conscious implementations.</li>
        </ul>

        <h3 className={h3Class}>For Mid-Size Businesses ($10&ndash;30M Revenue)</h3>
        <ul className={ulClass}>
          <li><strong>Salesforce Essentials:</strong> Industry standard with massive ecosystem. More complex but highly customizable.</li>
          <li><strong>HubSpot Professional:</strong> Combines CRM with marketing automation. Good for growth-focused companies.</li>
          <li><strong>Monday Sales CRM:</strong> Flexible platform that works well for teams already using project management tools.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Implementation Roadmap</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Week 1&ndash;2: Audit current state.</strong> Map all customer data sources: spreadsheets, email, invoicing system, accounting software, the seller&apos;s contacts.</li>
          <li><strong>Week 3&ndash;4: Define requirements.</strong> What do you need the CRM to do? Pipeline tracking, customer communication history, task management, reporting?</li>
          <li><strong>Week 5&ndash;6: Select and configure.</strong> Choose the CRM, set up your pipeline stages, custom fields, and integrations (email, phone, invoicing).</li>
          <li><strong>Week 7&ndash;8: Data migration.</strong> Import customer data, clean duplicates, and validate accuracy. This is the hardest step.</li>
          <li><strong>Week 9&ndash;10: Training.</strong> Train the team in small groups. Focus on daily workflows, not every feature.</li>
          <li><strong>Week 11&ndash;12: Go live and support.</strong> Mandate CRM usage (no exceptions). Provide hands-on support for the first month.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Making CRM Adoption Stick</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Lead by example:</strong> Use the CRM yourself. If the CEO doesn&apos;t use it, no one will.</li>
          <li><strong>Make it mandatory:</strong> &quot;If it&apos;s not in the CRM, it didn&apos;t happen.&quot; No pipeline reviews, forecasts, or commission calculations outside the CRM.</li>
          <li><strong>Keep it simple:</strong> Start with 5&ndash;7 required fields, not 50. You can add complexity later.</li>
          <li><strong>Integrate with existing tools:</strong> Connect to email, calendar, and invoicing to reduce double-entry.</li>
          <li><strong>Celebrate wins:</strong> Share stories of deals won through CRM-driven follow-up. Make the value visible.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>CRM implementation is one of the highest-ROI operational improvements in acquired businesses</li>
          <li>Start with a simple, affordable CRM (HubSpot Free or Pipedrive) and upgrade later as needs grow</li>
          <li>Data migration is the hardest step &mdash; budget extra time for cleaning and validating customer data</li>
          <li>Adoption requires mandate from the CEO: &quot;If it&apos;s not in the CRM, it didn&apos;t happen&quot;</li>
          <li>Expect 8&ndash;12 weeks from selection to go-live; full adoption takes 3&ndash;6 months</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP Implementation Post-Acquisition</Link></li>
        <li><Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">Post-Acquisition Digital Transformation</Link></li>
        <li><Link href="/learn/sales-team-development" className="text-apple-accent hover:underline">Sales Team Development Post-Acquisition</Link></li>
        <li><Link href="/learn/customer-retention-post-acquisition" className="text-apple-accent hover:underline">Customer Retention Programs</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Gartner, <em>CRM Selection Guide for Small and Mid-Size Businesses</em> (2024)</li>
        <li>Forrester, <em>CRM Implementation Best Practices</em> (2024)</li>
        <li>HubSpot, <em>State of CRM Adoption in SMBs</em> (2024)</li>
      </ul>
    </article>
  );
}
