import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SearchFundDealCharacteristicsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Deal Characteristics: What Gets Acquired</h1>
      <div className={bodyClass}>
        <p>After 60+ years of search fund history and hundreds of completed acquisitions, clear patterns have emerged about the types of businesses that search funds successfully acquire and operate. Understanding these deal characteristics &mdash; industry sectors, revenue ranges, valuation multiples, and business attributes &mdash; helps investors evaluate whether a specific acquisition fits the search fund model and searchers refine their target criteria.</p>
      </div>

      <h2 className={h2Class}>Industry Distribution</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Business services:</strong> 30&ndash;35% of search fund acquisitions. IT services, staffing, professional services, and facility maintenance.</li>
          <li><strong>Healthcare:</strong> 10&ndash;15%. Physician practices, dental, behavioral health, and healthcare technology.</li>
          <li><strong>Technology:</strong> 10&ndash;15%. SaaS, software, and IT infrastructure. Growing share of search fund targets.</li>
          <li><strong>Education:</strong> 5&ndash;10%. Test prep, corporate training, and educational technology.</li>
          <li><strong>Manufacturing:</strong> 5&ndash;10%. Niche manufacturing with proprietary products or processes.</li>
          <li><strong>Consumer services:</strong> 5&ndash;10%. Home services, pet services, and consumer health.</li>
          <li><strong>Other:</strong> Distribution, construction services, financial services, and specialty niches.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Financial Characteristics</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Revenue range:</strong> $5&ndash;30M annual revenue. Sweet spot is $8&ndash;20M for traditional search funds.</li>
          <li><strong>EBITDA range:</strong> $1&ndash;5M EBITDA. Target 15&ndash;25% EBITDA margins. Cash-flow-positive from day one.</li>
          <li><strong>Valuation multiples:</strong> 4&ndash;7x EBITDA for most search fund acquisitions. Premium for recurring revenue and strong growth.</li>
          <li><strong>Enterprise value:</strong> $5&ndash;30M. Larger deals ($20&ndash;50M) becoming more common as the model matures.</li>
          <li><strong>Revenue growth:</strong> Flat to modest growth (0&ndash;10%) at acquisition. High-growth businesses command premiums beyond search fund economics.</li>
          <li><strong>Recurring revenue:</strong> 50&ndash;80% recurring revenue preferred. Contract-based, subscription, or maintenance agreement revenue.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Business Attributes</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Owner-operator transition:</strong> 80%+ of search fund targets are founder/owner-operated businesses. Succession is the primary selling motivation.</li>
          <li><strong>Customer diversification:</strong> No single customer &gt;15&ndash;20% of revenue. Diversified customer base reduces concentration risk.</li>
          <li><strong>Low capital intensity:</strong> Minimal ongoing capex requirements. Service businesses preferred over capital-intensive manufacturing.</li>
          <li><strong>Defensible market position:</strong> Niche leadership, switching costs, regulatory barriers, or relationship-based competitive advantages.</li>
          <li><strong>Employee stability:</strong> Low turnover, tenured workforce, and institutional knowledge retained in the organization (not just the owner).</li>
          <li><strong>Growth opportunity:</strong> Identifiable organic growth levers (pricing, geographic expansion, new services, sales process improvement).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Deal Structure Patterns</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Equity:</strong> 40&ndash;60% of enterprise value. Raised from search fund investors via pro rata commitments and co-investment.</li>
          <li><strong>Senior debt:</strong> 30&ndash;45% of enterprise value. SBA 7(a) loans are common in US deals. Bank term loans in international deals.</li>
          <li><strong>Seller financing:</strong> 10&ndash;20% of enterprise value. 2&ndash;5 year term with interest. Aligns seller with transition success.</li>
          <li><strong>Earn-outs:</strong> Used in 20&ndash;30% of deals. Bridges valuation gaps and reduces closing risk.</li>
          <li><strong>Searcher equity:</strong> 20&ndash;30% of common equity to the searcher-CEO. Vesting over 3&ndash;5 years based on operational and return milestones.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Business services, healthcare, and technology account for 55&ndash;65% of all search fund acquisitions</li>
          <li>The typical search fund target: $8&ndash;20M revenue, $1&ndash;5M EBITDA, 4&ndash;7x valuation, with 50&ndash;80% recurring revenue</li>
          <li>80%+ of targets are owner-operator businesses where succession is the primary selling motivation</li>
          <li>Deal structures typically combine 40&ndash;60% equity, 30&ndash;45% senior debt, and 10&ndash;20% seller financing</li>
          <li>Customer diversification, low capital intensity, and defensible market positions are the most valued business attributes</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/ideal-acquisition-target" className="text-apple-accent hover:underline">Defining Your Ideal Acquisition Target</Link></li>
        <li><Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">Search Fund Returns</Link></li>
        <li><Link href="/learn/business-valuation" className="text-apple-accent hover:underline">Business Valuation</Link></li>
        <li><Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">Portfolio Construction</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study: Deal Characteristics</em> (2024)</li>
        <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
        <li>Search Fund Accelerator, <em>Acquisition Target Analysis</em> (2024)</li>
      </ul>
    </article>
  );
}
