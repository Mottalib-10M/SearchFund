import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SalesTeamDevelopmentArticle() {
  return (
    <article>
      <h1 className={h1Class}>Sales Team Development Post-Acquisition</h1>
      <div className={bodyClass}>
        <p>Many businesses acquired through search funds have no formal sales function. Revenue comes from the owner&apos;s personal relationships, referrals, and repeat customers. Building a real sales team and process is one of the most powerful growth levers available to a new CEO &mdash; often unlocking 20&ndash;40% revenue growth within the first 18 months.</p>
      </div>

      <h2 className={h2Class}>Assessing the Current Sales Function</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Who sells today?</strong> Is it the owner? A single salesperson? Or does the business rely purely on inbound?</li>
          <li><strong>Where do leads come from?</strong> Map every source: referrals, repeat customers, website, trade shows, cold outreach</li>
          <li><strong>What&apos;s the conversion rate?</strong> How many leads become quotes? How many quotes become customers?</li>
          <li><strong>Is there a CRM?</strong> If not, implement one immediately (<Link href="/learn/crm-implementation" className="text-apple-accent hover:underline">CRM implementation guide</Link>)</li>
          <li><strong>Customer concentration:</strong> If the top 5 customers represent 50%+ of revenue, sales diversification is critical</li>
        </ul>
      </div>

      <h2 className={h2Class}>Building the Sales Process</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Define your ideal customer profile (ICP):</strong> Industry, company size, geography, budget, and pain points</li>
          <li><strong>Create pipeline stages:</strong> Lead → Qualified → Proposal → Negotiation → Closed Won/Lost</li>
          <li><strong>Build sales collateral:</strong> One-pager, case studies, proposal templates, competitive differentiation</li>
          <li><strong>Develop a pricing strategy:</strong> Move from ad-hoc pricing to a structured <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">pricing framework</Link></li>
          <li><strong>Set activity metrics:</strong> Calls per day, meetings per week, proposals per month</li>
          <li><strong>Weekly pipeline review:</strong> Structured review of every deal in the pipeline with the sales team</li>
        </ol>
      </div>

      <h2 className={h2Class}>Hiring Your First Sales Rep</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Timing:</strong> Don&apos;t hire until you&apos;ve personally sold for at least 3 months. You need to understand the sales cycle.</li>
          <li><strong>Profile:</strong> Look for industry experience over sales pedigree. Someone who knows your customers&apos; world wins faster.</li>
          <li><strong>Compensation:</strong> Base + commission with a 60/40 or 70/30 split. Include a 3&ndash;6 month ramp period with guaranteed minimum.</li>
          <li><strong>Onboarding:</strong> Ride-alongs with you, job shadowing with operations, and customer visits in the first month.</li>
          <li><strong>Expectations:</strong> First sale by month 3, quota attainment by month 6. If neither happens, reassess fit.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Sales Channels to Explore</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Outbound calling:</strong> Direct calling to potential customers using targeted lists</li>
          <li><strong>Referral programs:</strong> Formalize and incentivize the referral engine that likely already drives the business</li>
          <li><strong>Strategic partnerships:</strong> Align with complementary businesses for cross-referrals</li>
          <li><strong>Digital marketing:</strong> Google Ads, SEO, and social media for lead generation</li>
          <li><strong>Trade shows:</strong> Industry events for face-to-face relationship building</li>
          <li><strong>Account expansion:</strong> <Link href="/learn/cross-selling-upselling" className="text-apple-accent hover:underline">Cross-selling and upselling</Link> to existing customers</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Most acquired businesses have no formal sales function &mdash; building one can unlock 20&ndash;40% revenue growth</li>
          <li>Sell personally for at least 3 months before hiring your first sales rep</li>
          <li>A structured sales process (ICP → pipeline stages → activity metrics → weekly reviews) is essential</li>
          <li>Look for industry experience over sales pedigree when hiring your first sales rep</li>
          <li>Formalize the referral engine and add outbound channels to diversify revenue sources</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/crm-implementation" className="text-apple-accent hover:underline">CRM Implementation Guide</Link></li>
        <li><Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">Pricing Optimization</Link></li>
        <li><Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">Revenue Growth Playbook</Link></li>
        <li><Link href="/learn/compensation-incentive-design" className="text-apple-accent hover:underline">Compensation & Incentive Design</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>How long should I sell personally before hiring a sales rep?</h3>
        <p>
          You should sell personally for at least 3 months &mdash; and ideally close 5&ndash;10 deals yourself &mdash; before hiring your first dedicated salesperson. According to Stanford GSB research on search fund CEO strategies, new owners who sell personally before hiring build critical understanding of the customer buying process, competitive objections, pricing sensitivity, and the ideal customer profile. Harvard Business Review&rsquo;s research on sales organization development confirms that the number one reason first sales hires fail in SMEs is that the CEO could not articulate the sales process clearly enough to train and manage a rep. If you cannot sell the product yourself, a sales rep will not be able to either. During your personal selling period, document every step of the sales process &mdash; from lead generation to close &mdash; so you have a repeatable playbook to train your first hire.
        </p>

        <h3 className={h3Class}>What is the right compensation structure for the first sales hire?</h3>
        <p>
          A base-plus-commission structure with a 60/40 or 70/30 base-to-variable split works best for SME sales roles. According to Salesforce&rsquo;s 2024 State of Sales for SMBs report, commission-only roles attract transactional salespeople who prioritize short-term deals over relationship building &mdash; the opposite of what most acquired businesses need. Include a 3&ndash;6 month ramp period with a guaranteed minimum (typically equal to the base salary) to give the rep time to learn the product, build relationships, and develop pipeline. Set clear expectations: first sale by month 3, quota attainment by month 6. If neither milestone is reached, reassess fit rather than extending the ramp. Total on-target earnings (OTE) should be competitive for your market and industry &mdash; for SME B2B sales roles, this typically ranges from $75,000 to $120,000 depending on geography and deal size.
        </p>

        <h3 className={h3Class}>How can I build a sales pipeline when the business has relied entirely on referrals?</h3>
        <p>
          Start by formalizing and incentivizing the referral engine that already drives the business, then layer on outbound channels. According to Stanford GSB research, the most effective sequence is: first, create a structured referral program with clear incentives for customers, partners, and employees who refer new business; second, implement a CRM and begin tracking every lead source, conversion rate, and deal stage; third, build a target account list based on your ideal customer profile using tools like LinkedIn Sales Navigator or ZoomInfo; and fourth, launch multi-channel outbound (email sequences, phone calls, and LinkedIn messages) targeting high-value prospects. Salesforce data shows that SMEs that add a structured outbound sales motion to an existing referral-based business typically see 20&ndash;40% revenue growth within 12&ndash;18 months. A healthy B2B pipeline should be 3&ndash;4x your quarterly revenue target.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>Building a Sales Machine in a Previously Owner-Run Business</em> (2024)</li>
        <li>Salesforce, <em>State of Sales for SMBs</em> (2024)</li>
        <li>Stanford GSB, <em>Revenue Growth Strategies for Search Fund CEOs</em> (2024)</li>
      </ul>
    </article>
  );
}
