import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function DayOneAnnouncementArticle() {
  return (
    <article>
      <h1 className={h1Class}>Day 1 Announcement: Scripts, Templates & Best Practices</h1>
      <div className={bodyClass}>
        <p>The day the acquisition closes and you walk in as the new owner is arguably the most important day of your tenure. How you communicate the change to employees, customers, suppliers, and the community sets the tone for everything that follows. A well-executed Day 1 announcement builds trust; a poor one creates fear and uncertainty that can take months to overcome.</p>
      </div>

      <h2 className={h2Class}>Employee Announcement: What to Say</h2>
      <div className={bodyClass}>
        <p>The employee announcement is your top priority. Do it first, in person, to the full team:</p>
        <ul className={ulClass}>
          <li><strong>Introduce yourself:</strong> Your background, why you chose this business, and what attracted you to it</li>
          <li><strong>Express respect:</strong> Acknowledge what the seller and team have built. Do not criticize anything about how the business has been run.</li>
          <li><strong>Reassure stability:</strong> &quot;Nothing is changing today. Your jobs, your pay, your benefits &mdash; all the same.&quot;</li>
          <li><strong>Set expectations:</strong> &quot;I plan to spend the first 90 days listening and learning. I need your help to understand this business.&quot;</li>
          <li><strong>Open door policy:</strong> &quot;My door is always open. If you have questions or concerns, come to me directly.&quot;</li>
          <li><strong>Seller endorsement:</strong> Have the departing owner introduce you and express confidence in your leadership</li>
        </ul>
      </div>

      <h2 className={h2Class}>What NOT to Say on Day 1</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Don&apos;t announce major changes (&quot;We&apos;re implementing a new ERP system!&quot;)</li>
          <li>Don&apos;t criticize past practices (&quot;I can&apos;t believe you&apos;ve been doing X this way&quot;)</li>
          <li>Don&apos;t make promises you might not keep (&quot;No one will ever be let go&quot;)</li>
          <li>Don&apos;t share financial details of the acquisition (&quot;I paid $X million&quot;)</li>
          <li>Don&apos;t overwhelm with your vision for the future &mdash; they&apos;re not ready to hear it yet</li>
          <li>Don&apos;t skip the seller&apos;s introduction &mdash; the seller&apos;s endorsement carries enormous weight</li>
        </ul>
      </div>

      <h2 className={h2Class}>Customer Communication</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Top 10&ndash;20 customers:</strong> Personal phone calls or in-person visits within the first week</li>
          <li><strong>All customers:</strong> Joint letter from the seller and buyer emphasizing continuity of service</li>
          <li><strong>Key message:</strong> &quot;Same great team, same quality service, same commitment. New ownership invested to grow and improve.&quot;</li>
          <li><strong>Contact info:</strong> Provide a direct line and email for the new owner</li>
          <li><strong>Timing:</strong> Customer letters should go out the same day as or within 24 hours of closing</li>
        </ul>
      </div>

      <h2 className={h2Class}>Supplier & Vendor Communication</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Notify key suppliers within the first week</li>
          <li>Confirm payment terms, open orders, and account details</li>
          <li>If the entity changed (asset deal), update accounts and billing information promptly</li>
          <li>Meet critical suppliers in person if possible</li>
        </ul>
      </div>

      <h2 className={h2Class}>One-on-One Meetings: First Two Weeks</h2>
      <div className={bodyClass}>
        <p>Schedule 30&ndash;60 minute individual meetings with every employee within the first two weeks:</p>
        <ol className={olClass}>
          <li>What&apos;s your role? Walk me through your typical day.</li>
          <li>What&apos;s working well that we should keep doing?</li>
          <li>What would you change if you could?</li>
          <li>What do you need to do your job better?</li>
          <li>Any concerns about the transition?</li>
        </ol>
        <p>These conversations build rapport and provide invaluable operational intelligence.</p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>The seller&apos;s in-person endorsement on Day 1 is the single most important trust-building moment</li>
          <li>Lead with listening, not vision &mdash; the first 90 days are for understanding, not transforming</li>
          <li>Reassure stability: same jobs, same pay, same benefits, same quality</li>
          <li>Contact top customers personally within the first week; all customers within 24 hours via letter</li>
          <li>Schedule one-on-one meetings with every employee in the first two weeks</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/first-100-days" className="text-apple-accent hover:underline">First 100 Days Post-Acquisition</Link></li>
        <li><Link href="/learn/management-transition" className="text-apple-accent hover:underline">Management Transition & Communication</Link></li>
        <li><Link href="/learn/building-trust-inherited-teams" className="text-apple-accent hover:underline">Building Trust with Inherited Teams</Link></li>
        <li><Link href="/learn/seller-transition-period" className="text-apple-accent hover:underline">Seller Transition Period</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>The First 90 Days in M&amp;A Leadership Transitions</em> (2024)</li>
        <li>Stanford GSB, <em>Search Fund CEO Communication Best Practices</em> (2024)</li>
        <li>McKinsey, <em>Communication in M&amp;A: The Day 1 Playbook</em> (2024)</li>
      </ul>
    </article>
  );
}
