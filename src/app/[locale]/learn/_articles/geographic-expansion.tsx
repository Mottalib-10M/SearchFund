import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function GeographicExpansionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Geographic Expansion After Acquisition</h1>
      <div className={bodyClass}>
        <p>Geographic expansion is one of the most common growth strategies for acquired businesses. Many search fund targets are strong in their local market but have never attempted to expand beyond their home territory. Whether through organic expansion, satellite offices, or <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">bolt-on acquisitions</Link>, entering new markets can significantly increase revenue and reduce geographic concentration risk.</p>
      </div>

      <h2 className={h2Class}>When Geographic Expansion Makes Sense</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Market saturation:</strong> You&apos;ve captured a significant share of your current market and organic growth is slowing</li>
          <li><strong>Proven model:</strong> Your service delivery and operations are standardized enough to replicate</li>
          <li><strong>Customer demand:</strong> Existing customers are requesting service in adjacent markets</li>
          <li><strong>Competitive advantage:</strong> Your brand, processes, or technology would be differentiated in the new market</li>
          <li><strong>Stable home base:</strong> Your existing operations are running smoothly and don&apos;t require your constant attention</li>
        </ul>
      </div>

      <h2 className={h2Class}>Expansion Methods</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>1. Organic Expansion (New Office/Branch)</h3>
        <ul className={ulClass}>
          <li><strong>Pros:</strong> Full control, lower upfront cost, build culture from scratch</li>
          <li><strong>Cons:</strong> Slower (12&ndash;18 months to profitability), no instant customer base</li>
          <li><strong>Best for:</strong> Adjacent markets where you can serve from your existing base initially</li>
          <li><strong>Key hire:</strong> A strong local manager who knows the market</li>
        </ul>

        <h3 className={h3Class}>2. Bolt-On Acquisition</h3>
        <ul className={ulClass}>
          <li><strong>Pros:</strong> Instant revenue, customer base, and local team. Faster path to profitability.</li>
          <li><strong>Cons:</strong> Integration complexity, higher upfront cost, cultural alignment challenges</li>
          <li><strong>Best for:</strong> Markets where speed matters or where a local presence is required</li>
          <li><strong>Typical multiples:</strong> 2&ndash;4x EBITDA for small add-on acquisitions (lower than platform deals)</li>
        </ul>

        <h3 className={h3Class}>3. Licensing or Franchising</h3>
        <ul className={ulClass}>
          <li><strong>Pros:</strong> Capital-light, fast expansion, local operator bears risk</li>
          <li><strong>Cons:</strong> Less control over quality, complex legal structure</li>
          <li><strong>Best for:</strong> Highly standardized service models with strong brand identity</li>
        </ul>
      </div>

      <h2 className={h2Class}>Market Selection Criteria</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Market size:</strong> Is the addressable market large enough to justify the investment?</li>
          <li><strong>Competition:</strong> How fragmented is the market? Are there dominant incumbents?</li>
          <li><strong>Proximity:</strong> Start with adjacent markets you can support from your existing base</li>
          <li><strong>Demographics:</strong> Population growth, business density, income levels relevant to your service</li>
          <li><strong>Regulatory environment:</strong> <Link href="/learn/business-licensing-permits" className="text-apple-accent hover:underline">Licensing requirements</Link> that may vary by state or region</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Don&apos;t expand geographically until your home market operations are stable and standardized</li>
          <li>Bolt-on acquisitions are the fastest path to a new market but require integration capability</li>
          <li>Start with adjacent markets you can support from your existing base</li>
          <li>A strong local manager is the single most important success factor in any expansion</li>
          <li>Budget for 12&ndash;18 months to breakeven for organic expansion; 6&ndash;12 months for bolt-ons</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
        <li><Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">Revenue Growth Playbook</Link></li>
        <li><Link href="/learn/product-line-extension" className="text-apple-accent hover:underline">Product & Service Line Extension</Link></li>
        <li><Link href="/learn/organic-vs-acquisitive-growth" className="text-apple-accent hover:underline">Organic vs. Acquisitive Growth</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Harvard Business Review, <em>Geographic Expansion Strategies for Small Businesses</em> (2024)</li>
        <li>Stanford GSB, <em>Multi-Location Growth in Search Fund Companies</em> (2024)</li>
        <li>McKinsey, <em>Scaling Through Geography: A Practitioner&apos;s Guide</em> (2024)</li>
      </ul>
    </article>
  );
}
