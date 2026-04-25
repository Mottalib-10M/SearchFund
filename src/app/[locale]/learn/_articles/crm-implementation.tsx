import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function CRMImplementationArticle() {
  return (
    <article>
      <h1 className={h1Class}>Implementing a CRM System in Your Acquired Company</h1>
      <div className={bodyClass}>
        <p>Most businesses acquired through search funds have no formal CRM system. Customer relationships, sales pipelines, and contact information live in the former owner&apos;s head, scattered spreadsheets, or a dusty Rolodex. Implementing a CRM is one of the most impactful operational improvements you can make, it gives you visibility into customer relationships, creates a repeatable sales process, and protects the business from key person risk.</p>
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
        <h3 className={h3Class}>For Small Businesses ($2-10M Revenue)</h3>
        <ul className={ulClass}>
          <li><strong>HubSpot CRM:</strong> Free tier is surprisingly strong. Best for companies with a marketing/inbound focus. Easy to use.</li>
          <li><strong>Pipedrive:</strong> Simple, sales-focused CRM. Great for teams that need a visual pipeline without complexity.</li>
          <li><strong>Zoho CRM:</strong> Cost-effective with a broad feature set. Good for budget-conscious implementations.</li>
        </ul>

        <h3 className={h3Class}>For Mid-Size Businesses ($10-30M Revenue)</h3>
        <ul className={ulClass}>
          <li><strong>Salesforce Essentials:</strong> Industry standard with massive ecosystem. More complex but highly customizable.</li>
          <li><strong>HubSpot Professional:</strong> Combines CRM with marketing automation. Good for growth-focused companies.</li>
          <li><strong>Monday Sales CRM:</strong> Flexible platform that works well for teams already using project management tools.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Implementation Roadmap</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Week 1-2: Audit current state.</strong> Map all customer data sources: spreadsheets, email, invoicing system, accounting software, the seller&apos;s contacts.</li>
          <li><strong>Week 3-4: Define requirements.</strong> What do you need the CRM to do? Pipeline tracking, customer communication history, task management, reporting?</li>
          <li><strong>Week 5-6: Select and configure.</strong> Choose the CRM, set up your pipeline stages, custom fields, and integrations (email, phone, invoicing).</li>
          <li><strong>Week 7-8: Data migration.</strong> Import customer data, clean duplicates, and validate accuracy. This is the hardest step.</li>
          <li><strong>Week 9-10: Training.</strong> Train the team in small groups. Focus on daily workflows, not every feature.</li>
          <li><strong>Week 11-12: Go live and support.</strong> Mandate CRM usage (no exceptions). Provide hands-on support for the first month.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Making CRM Adoption Stick</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Lead by example:</strong> Use the CRM yourself. If the CEO doesn&apos;t use it, no one will.</li>
          <li><strong>Make it mandatory:</strong> &quot;If it&apos;s not in the CRM, it didn&apos;t happen.&quot; No pipeline reviews, forecasts, or commission calculations outside the CRM.</li>
          <li><strong>Keep it simple:</strong> Start with 5-7 required fields, not 50. You can add complexity later.</li>
          <li><strong>Integrate with existing tools:</strong> Connect to email, calendar, and invoicing to reduce double-entry.</li>
          <li><strong>Celebrate wins:</strong> Share stories of deals won through CRM-driven follow-up. Make the value visible.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>CRM implementation is one of the highest-ROI operational improvements in acquired businesses</li>
          <li>Start with a simple, affordable CRM (HubSpot Free or Pipedrive) and upgrade later as needs grow</li>
          <li>Data migration is the hardest step, budget extra time for cleaning and validating customer data</li>
          <li>Adoption requires mandate from the CEO: &quot;If it&apos;s not in the CRM, it didn&apos;t happen&quot;</li>
          <li>Expect 8-12 weeks from selection to go-live; full adoption takes 3-6 months</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP Implementation Post-Acquisition</Link></li>
        <li><Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">Post-Acquisition Digital Transformation</Link></li>
        <li><Link href="/learn/sales-team-development" className="text-apple-accent hover:underline">Sales Team Development Post-Acquisition</Link></li>
        <li><Link href="/learn/customer-retention-post-acquisition" className="text-apple-accent hover:underline">Customer Retention Programs</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>What is the typical ROI timeline for CRM implementation in an acquired small business?</h3>
      <div className={bodyClass}>
        <p>Forrester&rsquo;s research on CRM implementation in small and mid-size businesses indicates that companies typically see measurable ROI within 6-12 months of go-live, with full adoption and maximum impact realized at 12-18 months. The initial returns come from pipeline visibility (identifying stalled deals and lost follow-ups), which Gartner estimates can increase close rates by 15-25% in the first year. HubSpot&rsquo;s State of CRM Adoption report found that SMBs that fully adopt CRM see an average 29% increase in sales revenue within two years, driven by better lead management, improved follow-up discipline, and data-driven pipeline forecasting. The key caveat is that these returns require genuine adoption, companies where CRM usage is optional or inconsistent see dramatically lower returns.</p>
      </div>

      <h3 className={h3Class}>How do I get a resistant sales team to actually use the CRM?</h3>
      <div className={bodyClass}>
        <p>Gartner&rsquo;s CRM adoption research identifies the CEO&rsquo;s personal commitment as the single strongest predictor of successful CRM adoption in small businesses. The most effective strategy is making the CRM the single source of truth for all sales conversations: pipeline reviews, commission calculations, and performance evaluations should all run through CRM data. Forrester recommends starting with just 5-7 required fields per record to minimize data entry burden, then expanding as the team sees value. Integration with existing tools, email, calendar, and invoicing systems, is critical because it reduces double-entry, which is the primary complaint from sales teams. HubSpot&rsquo;s data shows that companies that integrate CRM with email achieve 47% higher adoption rates than those that treat CRM as a standalone system.</p>
      </div>

      <h3 className={h3Class}>Should I implement CRM before or after other post-acquisition technology changes?</h3>
      <div className={bodyClass}>
        <p>CRM should typically be one of the first technology implementations, ideally within the first 90 days of ownership. Forrester&rsquo;s integration sequencing research recommends CRM as a &ldquo;day one&rdquo; priority because it addresses the most immediate post-acquisition risk: loss of customer relationship visibility during ownership transition. Unlike <Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">ERP systems</Link>, which require extensive process mapping and data migration, a basic CRM can be configured and deployed in 8-12 weeks with minimal disruption. Gartner advises implementing CRM before broader <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">digital transformation</Link> initiatives because the customer data captured in CRM informs decisions about which other technology investments will have the highest impact on revenue retention and growth.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Gartner, <em>CRM Selection Guide for Small and Mid-Size Businesses</em> (2024)</li>
        <li>Forrester, <em>CRM Implementation Best Practices</em> (2024)</li>
        <li>HubSpot, <em>State of CRM Adoption in SMBs</em> (2024)</li>
      </ul>
    </article>
  );
}
