import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function FranchiseAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Franchise Business (Multi-Unit)</h1>
      <div className={bodyClass}>
        <p>Acquiring an existing multi-unit franchise operation offers search fund entrepreneurs a unique hybrid: the proven systems and brand recognition of a franchisor combined with the local market execution and growth potential of an independent business. The US franchise sector generates over $800B annually across 800,000+ establishments. For ETA, the sweet spot is acquiring multi-unit operators (3-20+ locations) with established management teams and room for additional unit growth.</p>
      </div>

      <h2 className={h2Class}>Types of Franchise Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Multi-unit QSR:</strong> Multiple fast-food or fast-casual locations (McDonald&apos;s, Chick-fil-A, Jersey Mike&apos;s). Proven unit economics.</li>
          <li><strong>Service franchises:</strong> Home services, senior care, fitness, cleaning. Often lower capex per unit.</li>
          <li><strong>Multi-brand operators:</strong> Operating multiple franchise brands. Diversification across concepts.</li>
          <li><strong>Area developers:</strong> Rights to develop an entire territory for a franchise brand. Development fees plus royalties on sub-franchisees.</li>
          <li><strong>Master franchisees:</strong> Rights to operate and sub-franchise in a specific region or country.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Franchise Acquisitions Work</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Proven model:</strong> Franchise systems have documented operations, training, and supply chains</li>
          <li><strong>Brand recognition:</strong> Customers already know and trust the brand. Less marketing spend required.</li>
          <li><strong>Lower risk:</strong> Franchise failure rates are significantly lower than independent businesses</li>
          <li><strong>Scalable:</strong> Once you master operations, adding units follows a proven playbook</li>
          <li><strong>SBA-friendly:</strong> Banks and <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">SBA lenders</Link> prefer franchise concepts with documented track records</li>
          <li><strong>Exit multiple expansion:</strong> Larger multi-unit operators command higher multiples than smaller ones</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Franchise agreement:</strong> Remaining term, renewal rights, territory exclusivity, and transfer approval requirements</li>
          <li><strong>Franchisor consent:</strong> Most franchisors must approve the buyer. Understand their requirements and timeline.</li>
          <li><strong>Unit-level economics:</strong> AUV (average unit volume), 4-wall EBITDA, food/labor costs by location, and trend by unit</li>
          <li><strong>Development rights:</strong> Do you have the right to open additional units? How many? What timeline?</li>
          <li><strong>Franchise costs:</strong> Royalty rate (typically 4-8% of revenue), advertising fund contribution (1-4%), and other fees</li>
          <li><strong>Lease portfolio:</strong> Remaining lease terms, renewal options, and rent-to-revenue ratios across all locations</li>
          <li><strong>Manager quality:</strong> Unit-level general managers determine location performance. Assess talent across all units.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>New unit development:</strong> Open additional locations within your development territory</li>
          <li><strong>Underperforming units:</strong> Apply operational best practices from top-performing locations to weaker ones</li>
          <li><strong>Tuck-in acquisitions:</strong> Acquire neighboring franchisees of the same brand for territory consolidation</li>
          <li><strong>Multi-brand:</strong> Add complementary franchise brands to diversify and use management infrastructure</li>
          <li><strong>Technology &amp; operations:</strong> Implement above-store-level management, data analytics, and workforce management tools</li>
          <li><strong>Drive-thru &amp; delivery:</strong> For QSR, add or optimize drive-thru and delivery channels for incremental revenue</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Multi-unit franchise acquisitions offer proven systems, brand recognition, and scalable growth potential</li>
          <li>Franchisor approval is required, start the relationship early and understand their buyer requirements</li>
          <li>Unit-level economics and lease terms are the two most critical due diligence areas</li>
          <li>Development rights (ability to open new units) are a key driver of long-term value creation</li>
          <li>Typical valuations: 4-7x EBITDA for established multi-unit operators with development rights</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/restaurant-acquisition" className="text-apple-accent hover:underline">Acquiring a Restaurant Business</Link></li>
        <li><Link href="/learn/eta-vs-startups" className="text-apple-accent hover:underline">ETA vs. Startups vs. Franchises</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How does franchisor approval work when acquiring an existing franchise?</h3>
      <p className={bodyClass}>
        Most franchise agreements require the franchisor to approve any change of ownership, and this approval process can take 30-90 days. The franchisor evaluates the buyer&rsquo;s financial capacity, operational experience, and alignment with brand standards. According to the International Franchise Association, approximately 85% of franchise transfer applications are approved, but buyers must typically meet minimum net worth and liquidity requirements (often $500K-$2M net worth depending on the brand). Start the franchisor relationship early, introduce yourself before submitting a formal LOI, and include franchisor approval as a closing condition in your purchase agreement.
      </p>

      <h3 className={h3Class}>What are typical valuation multiples for multi-unit franchise acquisitions?</h3>
      <p className={bodyClass}>
        Multi-unit franchise operators typically trade at 4-7x EBITDA, with premium brands and larger portfolios commanding the upper end. FRANdata&rsquo;s 2024 market report shows that QSR (quick-service restaurant) franchises with 10+ units average 5.5-6.5x EBITDA, while service-based franchises (home services, fitness) trade at 4-5.5x. Development rights (the contractual right to open additional units in a territory) are a significant value driver and can add 0.5-1.5x to the multiple. SBA lenders are particularly willing to finance franchise acquisitions due to the documented track records and standardized operations, often requiring only 10-15% equity injection.
      </p>

      <h3 className={h3Class}>What is the biggest risk in acquiring a franchise business?</h3>
      <p className={bodyClass}>
        The biggest risk is franchise agreement expiration and non-renewal. If the remaining franchise term is short (under 5 years) with no guaranteed renewal rights, the buyer faces the risk of losing the brand, systems, and supply chain that drive the business&rsquo;s value. The Franchise Business Review&rsquo;s 2024 survey found that 12% of franchisees reported concerns about renewal uncertainty. Additionally, franchisor-mandated capital expenditures (store remodels, technology upgrades, menu changes) can require $100K-$500K per unit and may not be reflected in historical financials. Always review the franchise disclosure document (FDD) Item 17 carefully and model required capital expenditures into your acquisition projections.
      </p>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>International Franchise Association, <em>Franchising Economic Outlook</em> (2024)</li>
        <li>FRANdata, <em>Annual Franchise Market Report</em> (2024)</li>
        <li>Franchise Business Review, <em>Franchisee Satisfaction Survey</em> (2024)</li>
      </ul>
    </article>
  );
}
