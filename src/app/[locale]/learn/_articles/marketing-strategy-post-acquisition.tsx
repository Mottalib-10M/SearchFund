import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MarketingStrategyPostAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Marketing Strategy for Acquired Companies</h1>
      <div className={bodyClass}>
        <p>Many search fund acquisitions target businesses where marketing was an afterthought, an outdated website, no social media presence, and brand awareness built entirely through the owner&apos;s personal network. According to a 2024 HubSpot survey, over 60% of SMBs spend less than $10,000 per year on marketing, leaving enormous room for improvement under new ownership. Developing a modern marketing strategy can dramatically accelerate growth, but the approach must be calibrated to the business&apos;s stage, industry, and budget.</p>
        <p>The opportunity is real: research from the Stanford GSB <em>2024 Search Fund Study</em> shows that top-quartile search fund operators who invested early in marketing and sales capabilities grew revenue 2-3x faster than peers in the first three years of ownership. The key is sequencing investments correctly so that early spending generates measurable ROI before you commit larger budgets.</p>
      </div>

      <h2 className={h2Class}>Marketing Audit: Where You Stand</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Website:</strong> Is it mobile-responsive? Does it clearly communicate your value proposition? Does it generate leads?</li>
          <li><strong>Google Business Profile:</strong> Is it claimed, accurate, and actively managed with reviews?</li>
          <li><strong>SEO:</strong> Does the business rank for relevant local and industry keywords?</li>
          <li><strong>Social media:</strong> Which platforms are relevant for your audience? What&apos;s the current presence?</li>
          <li><strong>Reputation:</strong> What do online reviews say? What&apos;s the Google/Yelp rating?</li>
          <li><strong>Brand materials:</strong> Logo, business cards, vehicle wraps, uniforms, do they look professional?</li>
          <li><strong>Customer acquisition cost:</strong> How much does it cost to acquire a new customer today?</li>
        </ul>
      </div>

      <h2 className={h2Class}>Quick-Win Marketing Investments</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Website refresh:</strong> A modern, mobile-friendly website with clear CTAs. Budget: $3-10K for a WordPress or Webflow site.</li>
          <li><strong>Google Business Profile:</strong> Claim it, add photos, respond to reviews, and ask satisfied customers for new reviews.</li>
          <li><strong>Google Ads:</strong> Start with branded keywords and high-intent local searches. Budget: $500-2K/month to start.</li>
          <li><strong>Email marketing:</strong> Build a customer list and send monthly newsletters. Tools like Mailchimp or HubSpot make this easy.</li>
          <li><strong>Review generation:</strong> Implement a systematic process to request reviews from every satisfied customer.</li>
        </ol>
        <p>Google research indicates that 76% of consumers who search for a local business on their phone visit within 24 hours, making <Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">digital presence optimization</Link> one of the highest-ROI activities for service businesses.</p>
      </div>

      <h2 className={h2Class}>The Rebranding Question</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Usually don&apos;t rebrand:</strong> The existing brand has recognition, customer loyalty, and search engine authority</li>
          <li><strong>Exception, rebrand if:</strong> The brand is the seller&apos;s personal name and they&apos;re leaving, or the brand has a genuinely negative reputation</li>
          <li><strong>Refresh vs. rebrand:</strong> Often the best approach is a visual refresh (updated logo, modern colors, new website) while keeping the brand name</li>
          <li><strong>Timing:</strong> If rebranding, wait at least 6-12 months until you understand the business and customer base deeply</li>
        </ul>
      </div>

      <h2 className={h2Class}>Building an In-House vs. Agency Approach</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Under $10M revenue:</strong> Use agencies or freelancers for most marketing. One internal marketing coordinator can manage them.</li>
          <li><strong>$10-20M revenue:</strong> Consider a marketing manager to coordinate strategy, with agencies for execution (design, PPC, SEO).</li>
          <li><strong>Over $20M:</strong> Build a small internal team (marketing manager, content creator, digital specialist) supplemented by agencies.</li>
        </ul>
        <p>Regardless of revenue level, keep all <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">key performance indicators</Link> visible through a shared dashboard. Track customer acquisition cost (CAC), lifetime value (LTV), and channel-specific return on ad spend (ROAS) monthly so you can reallocate budget from underperformers to proven channels.</p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Start with a marketing audit: website, Google Business Profile, SEO, reviews, and brand materials</li>
          <li>Quick wins: website refresh, Google Ads, Google Business Profile optimization, and review generation</li>
          <li>Don&apos;t rebrand unless the business is named after the departing seller or has a negative reputation</li>
          <li>Use agencies for most marketing at sub-$10M revenue; build in-house capability as you grow</li>
          <li>Track customer acquisition cost and ROI for every marketing channel to guide investment</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sales-team-development" className="text-apple-accent hover:underline">Sales Team Development Post-Acquisition</Link></li>
        <li><Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">Revenue Growth Playbook</Link></li>
        <li><Link href="/learn/digital-transformation" className="text-apple-accent hover:underline">Post-Acquisition Digital Transformation</Link></li>
        <li><Link href="/learn/customer-retention-post-acquisition" className="text-apple-accent hover:underline">Customer Retention Programs</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>How much should I budget for marketing after acquiring a small business?</h3>
      <div className={bodyClass}>
        <p>A practical starting budget is 3-5% of revenue, which is below the 7-10% benchmark for growth-stage companies but realistic for a newly acquired SME. Allocate the first $2,000-5,000/month to the highest-ROI channels: Google Business Profile optimization, Google Ads on high-intent keywords, and a website refresh. As you prove ROI on those channels, increase spend incrementally rather than committing a large budget upfront.</p>
      </div>

      <h3 className={h3Class}>Should I rebrand after acquiring a company?</h3>
      <div className={bodyClass}>
        <p>In most cases, no. The existing brand carries customer recognition, search engine authority, and local reputation that took years to build. The primary exceptions are when the business is named after a departing owner or when the brand has an actively negative reputation. A visual refresh, updated logo, modernized colors, a new website, is almost always preferable to a full rebrand and preserves accumulated goodwill.</p>
      </div>

      <h3 className={h3Class}>When should I hire a full-time marketing person vs. using an agency?</h3>
      <div className={bodyClass}>
        <p>For businesses under $10M in revenue, agencies and freelancers are more cost-effective because they bring specialized expertise across multiple channels without the overhead of a full-time salary and benefits. Once you reach $10-15M in revenue and are spending $15,000+ per month on marketing, a dedicated marketing manager pays for itself through better agency oversight, faster execution, and strategic continuity. The marketing manager coordinates external resources rather than replacing them.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>HubSpot, <em>State of Marketing for SMBs</em> (2024)</li>
        <li>Google, <em>Think with Google: Local Marketing Best Practices</em> (2024)</li>
        <li>Stanford GSB, <em>Marketing Strategy in Search Fund Companies</em> (2024)</li>
      </ul>
    </article>
  );
}
