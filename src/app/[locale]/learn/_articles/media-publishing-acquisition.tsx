import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MediaPublishingAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Media, Publishing, or Newsletter Business</h1>
      <div className={bodyClass}>
        <p>Media and publishing businesses are experiencing a renaissance in the digital age. While traditional print media has declined, digital media properties &mdash; newsletters, niche B2B publications, podcast networks, and content platforms &mdash; are thriving with subscription models, engaged audiences, and diversified revenue streams. For search fund entrepreneurs, the right media acquisition offers recurring subscription revenue, high margins, and a defensible audience relationship that creates opportunities for expansion.</p>
      </div>

      <h2 className={h2Class}>Types of Media Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>B2B trade publications:</strong> Industry-specific news and analysis. Subscription + advertising + events revenue. Sticky readership.</li>
          <li><strong>Newsletters:</strong> Email-first media (Substack, beehiiv, custom). High open rates, direct audience relationship. Booming category.</li>
          <li><strong>Podcast networks:</strong> Multiple shows with shared ad sales and production. Growing advertising market.</li>
          <li><strong>Niche consumer media:</strong> Vertical-focused websites, blogs, and communities. Monetized through ads, subscriptions, and e-commerce.</li>
          <li><strong>Events &amp; conferences:</strong> In-person and virtual events for specific industries. High-margin, high-touch revenue.</li>
          <li><strong>Data &amp; research:</strong> Industry reports, market data, and benchmarking. Premium pricing, recurring subscriptions.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Media Can Work for ETA</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> Subscription-based media generates 60&ndash;80% recurring revenue with annual renewals</li>
          <li><strong>High margins:</strong> Digital media achieves 30&ndash;50% EBITDA margins with lean teams</li>
          <li><strong>Audience asset:</strong> An engaged audience is a defensible, appreciating asset that enables multiple monetization streams</li>
          <li><strong>Low capex:</strong> Content business with minimal physical infrastructure. People + technology.</li>
          <li><strong>Multiple revenue streams:</strong> Subscriptions, advertising, sponsored content, events, data licensing, and affiliate revenue</li>
          <li><strong>Platform for expansion:</strong> Trusted media brands can launch adjacent products, events, and communities</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Audience metrics:</strong> Subscribers, email list size, open rates, engagement rates, and growth trend. Quality over quantity.</li>
          <li><strong>Revenue mix:</strong> Subscription vs. advertising vs. events vs. other. Higher subscription percentage = more predictable.</li>
          <li><strong>Content creator dependency:</strong> Is the publication dependent on one writer/host? Key person risk is high in media.</li>
          <li><strong>Traffic sources:</strong> Organic search, social, email, direct. Over-reliance on any single traffic source is a risk.</li>
          <li><strong>Advertiser concentration:</strong> If advertising revenue depends on a few major sponsors, diversification is needed.</li>
          <li><strong>IP ownership:</strong> Content rights, domain authority, brand trademarks, and subscriber data ownership</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Subscription conversion:</strong> Move from ad-supported to subscription or membership model for predictable revenue</li>
          <li><strong>Events:</strong> Launch industry events (conferences, webinars, workshops) for high-margin revenue</li>
          <li><strong>Content expansion:</strong> Add formats (podcast, video, newsletter) to reach audience across channels</li>
          <li><strong>Data products:</strong> Package industry data and research into premium subscription offerings</li>
          <li><strong>Community:</strong> Build paid community or membership program around the media brand</li>
          <li><strong>Portfolio approach:</strong> Acquire complementary publications to build a niche media portfolio</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>B2B trade publications and niche newsletters offer the best risk-adjusted returns in media</li>
          <li>Subscription revenue percentage and audience engagement metrics are the most important indicators</li>
          <li>Content creator dependency is the biggest risk &mdash; the publication must be bigger than any one person</li>
          <li>Diversified revenue (subscription + ads + events + data) creates resilience and growth optionality</li>
          <li>Typical valuations: 4&ndash;8x EBITDA for B2B trade media; 3&ndash;6x annual revenue for newsletters</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/digital-marketing-agency-acquisition" className="text-apple-accent hover:underline">Acquiring a Digital Marketing Agency</Link></li>
        <li><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">Acquiring a SaaS Business</Link></li>
        <li><Link href="/learn/education-acquisition" className="text-apple-accent hover:underline">Acquiring an Education Business</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Pew Research Center, <em>State of the News Media</em> (2024)</li>
        <li>SIIA (Software &amp; Information Industry Association), <em>B2B Media Benchmark Report</em> (2024)</li>
        <li>Digiday, <em>State of Digital Publishing</em> (2024)</li>
      </ul>
    </article>
  );
}
