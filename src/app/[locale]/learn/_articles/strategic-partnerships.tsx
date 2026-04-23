import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function StrategicPartnershipsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Strategic Partnerships &amp; Channel Development</h1>
      <div className={bodyClass}>
        <p>Strategic partnerships are a powerful growth lever for acquired businesses, enabling you to access new customers, markets, and capabilities without the full cost of building them internally. For search fund CEOs, partnerships can accelerate growth while conserving capital &mdash; an especially important consideration when you&apos;re balancing debt service with investment in growth.</p>
      </div>

      <h2 className={h2Class}>Types of Strategic Partnerships</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Referral Partnerships</h3>
        <ul className={ulClass}>
          <li>Two complementary businesses refer customers to each other</li>
          <li>Example: A roofing company partners with a real estate inspector; each refers customers to the other</li>
          <li>Low cost, low complexity, and often the best place to start</li>
          <li>Can be formalized with referral fees (5&ndash;15% of first contract value is typical)</li>
        </ul>

        <h3 className={h3Class}>Channel Partnerships</h3>
        <ul className={ulClass}>
          <li>A partner sells your product or service through their distribution channel</li>
          <li>Example: A software company partners with an accounting firm that resells the software to clients</li>
          <li>Requires training, enablement materials, and margin sharing</li>
        </ul>

        <h3 className={h3Class}>Co-Delivery Partnerships</h3>
        <ul className={ulClass}>
          <li>Two companies collaborate to deliver a combined solution</li>
          <li>Example: An IT services company partners with a cybersecurity firm to offer a comprehensive managed IT + security package</li>
          <li>Higher complexity but can create differentiated offerings</li>
        </ul>

        <h3 className={h3Class}>Vendor/Supplier Partnerships</h3>
        <ul className={ulClass}>
          <li>Preferred vendor status with key suppliers in exchange for volume or exclusivity</li>
          <li>Benefits: Better pricing, priority service, co-marketing, and access to manufacturer leads</li>
          <li>Example: An HVAC company becomes a Carrier or Trane preferred dealer</li>
        </ul>
      </div>

      <h2 className={h2Class}>Finding the Right Partners</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Complementary, not competitive:</strong> Partners should serve the same customer but with different services</li>
          <li><strong>Similar size and values:</strong> Partnerships between very differently sized companies often fail due to priority mismatches</li>
          <li><strong>Shared customer profile:</strong> Both companies should serve the same ideal customer</li>
          <li><strong>Reputation alignment:</strong> Your brand is reflected by your partners. Choose those with strong reputations.</li>
          <li><strong>Where to look:</strong> Industry associations, trade shows, existing vendors, customer referrals, and your <Link href="/learn/advisory-board" className="text-apple-accent hover:underline">advisory board</Link> network</li>
        </ul>
      </div>

      <h2 className={h2Class}>Structuring Partnerships</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Start informally:</strong> Test the relationship with a handshake and a few referrals before formalizing</li>
          <li><strong>Define terms clearly:</strong> Referral fees, exclusivity, territories, and lead attribution</li>
          <li><strong>Set expectations:</strong> Minimum referral volumes, response time to leads, and quality standards</li>
          <li><strong>Create accountability:</strong> Monthly check-ins to review pipeline, referral quality, and results</li>
          <li><strong>Formalize when ready:</strong> Simple partnership agreement covering terms, duration, and termination provisions</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Strategic partnerships are a capital-efficient growth lever &mdash; access new customers without building capabilities in-house</li>
          <li>Start with referral partnerships (low cost, low complexity) and evolve to deeper partnerships as trust builds</li>
          <li>Choose partners who serve the same customer with complementary (not competitive) services</li>
          <li>Start informally, test the relationship, then formalize with clear terms and accountability</li>
          <li>Track partner-sourced revenue separately to measure ROI and identify your most valuable partnerships</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sales-team-development" className="text-apple-accent hover:underline">Sales Team Development</Link></li>
        <li><Link href="/learn/cross-selling-upselling" className="text-apple-accent hover:underline">Cross-Selling & Upselling</Link></li>
        <li><Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">Revenue Growth Playbook</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>Strategic Alliances for Small and Mid-Size Companies</em> (2024)</li>
        <li>McKinsey, <em>Partnership-Led Growth Strategies</em> (2024)</li>
        <li>Forrester, <em>The Channel Partnership Playbook</em> (2024)</li>
      </ul>
    </article>
  );
}
