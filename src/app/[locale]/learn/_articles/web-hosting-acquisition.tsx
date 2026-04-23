import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function WebHostingAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Web Hosting or Domain Business</h1>
      <div className={bodyClass}>
        <p>Web hosting and domain businesses are classic recurring revenue businesses with high margins, low churn, and predictable cash flow. The global web hosting market generates $90B+ annually, and while major players (AWS, GoDaddy, Cloudflare) dominate the enterprise and commodity segments, thousands of small hosting companies serve niche markets with dedicated support, managed services, and specialized hosting for specific platforms. For search fund entrepreneurs, hosting businesses offer SaaS-like economics without the software development complexity.</p>
      </div>

      <h2 className={h2Class}>Types of Hosting Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Shared hosting:</strong> Multiple websites on one server. Low price ($5&ndash;20/month), high volume. Commodity market.</li>
          <li><strong>Managed hosting:</strong> Dedicated servers with full management, monitoring, and support. $100&ndash;500+/month. Higher margins.</li>
          <li><strong>WordPress/CMS hosting:</strong> Specialized hosting optimized for WordPress, Shopify, or other CMS platforms. Growing niche.</li>
          <li><strong>Domain registrar:</strong> Domain name registration and management. Annual renewals create recurring revenue.</li>
          <li><strong>Cloud/infrastructure:</strong> IaaS (Infrastructure as a Service) for developers and businesses. AWS/Azure competition.</li>
          <li><strong>Managed services provider:</strong> Hosting + management + security + monitoring. Highest per-customer revenue and stickiness.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Hosting Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recurring revenue:</strong> 95%+ of revenue is monthly/annual subscriptions. Near-perfect revenue predictability.</li>
          <li><strong>Low churn:</strong> Monthly churn rates of 1&ndash;3% for managed hosting. Moving websites is painful, creating natural retention.</li>
          <li><strong>High margins:</strong> 40&ndash;70% EBITDA margins for established hosting companies. Server costs decrease over time.</li>
          <li><strong>Low capex:</strong> Cloud infrastructure (AWS, Azure) eliminates physical data center requirements for many businesses</li>
          <li><strong>Scalable:</strong> Adding customers has minimal marginal cost. Revenue scales faster than expenses.</li>
          <li><strong>Passive income:</strong> Well-automated hosting businesses require minimal daily operational intervention</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>MRR &amp; churn:</strong> Monthly recurring revenue trend and monthly/annual churn rate. Target churn under 3%/month.</li>
          <li><strong>Customer count &amp; ARPU:</strong> Total active customers and average revenue per user. Higher ARPU = better (managed &gt; shared).</li>
          <li><strong>Infrastructure:</strong> Own data center vs. cloud-based. Own hardware creates capex burden; cloud is more flexible.</li>
          <li><strong>Technology stack:</strong> Control panels (cPanel, Plesk), automation, billing systems (WHMCS, Blesta), and monitoring tools</li>
          <li><strong>Support quality:</strong> Ticket volume, response times, and customer satisfaction. Support quality drives retention.</li>
          <li><strong>Domain portfolio:</strong> For registrars: domain count, renewal rates, and average domain value</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Upsell managed services:</strong> Move shared hosting customers to managed plans for 5&ndash;10x revenue per customer</li>
          <li><strong>Add security services:</strong> SSL certificates, DDoS protection, malware scanning, and backup services</li>
          <li><strong>Platform specialization:</strong> Optimize for WordPress, WooCommerce, or other popular platforms for premium pricing</li>
          <li><strong>Tuck-in acquisitions:</strong> Acquire smaller hosting companies to consolidate customers onto your platform</li>
          <li><strong>Geographic expansion:</strong> Add data center locations in new regions to reduce latency and attract local customers</li>
          <li><strong>Email &amp; productivity:</strong> Bundle email hosting, collaboration tools, and website builders with hosting plans</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Web hosting offers 95%+ recurring revenue with 40&ndash;70% EBITDA margins and SaaS-like economics</li>
          <li>Managed hosting and platform-specific hosting offer the best margins and lowest churn</li>
          <li>Migration difficulty creates natural customer retention &mdash; moving websites is painful for businesses</li>
          <li>Support quality is the primary differentiator for small hosting companies competing with commodity providers</li>
          <li>Typical valuations: 3&ndash;6x annual revenue or 8&ndash;15x EBITDA for hosting businesses with low churn and diversified customer bases</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">Acquiring a SaaS Business</Link></li>
        <li><Link href="/learn/it-services-acquisition" className="text-apple-accent hover:underline">Acquiring an IT Services Firm</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>HostingAdvice, <em>State of the Web Hosting Industry</em> (2024)</li>
        <li>Netcraft, <em>Web Hosting Market Share Survey</em> (2024)</li>
        <li>Grand View Research, <em>Web Hosting Services Market Size &amp; Forecast</em> (2024)</li>
      </ul>
    </article>
  );
}
