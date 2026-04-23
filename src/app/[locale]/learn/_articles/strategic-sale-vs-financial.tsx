import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function StrategicSaleVsFinancialArticle() {
  return (
    <article>
      <h1 className={h1Class}>Strategic vs. Financial Buyers: Choosing Your Exit Path</h1>
      <div className={bodyClass}>
        <p>When it&apos;s time to sell your business, the type of buyer you target fundamentally shapes the process, valuation, deal terms, and post-sale experience. Strategic buyers (companies in the same or adjacent industries) and financial buyers (PE firms, search funds, family offices) offer different advantages and trade-offs. Understanding these differences helps sellers choose the exit path that maximizes their total outcome &mdash; financial, professional, and personal.</p>
      </div>

      <h2 className={h2Class}>Strategic Buyers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Who they are:</strong> Larger companies in the same industry, competitors, adjacent businesses, or companies seeking to enter your market.</li>
          <li><strong>Motivation:</strong> Revenue synergies (cross-selling), cost synergies (eliminating duplicate functions), market share, talent acquisition, or technology.</li>
          <li><strong>Valuation premium:</strong> Typically pay 20&ndash;50% more than financial buyers because synergies increase the business&apos;s value to them specifically.</li>
          <li><strong>Deal speed:</strong> Can be faster (existing industry knowledge) or slower (corporate approval processes, antitrust review).</li>
          <li><strong>Post-sale integration:</strong> Your business will be absorbed into the buyer&apos;s operations. Brand, culture, and team may change significantly.</li>
          <li><strong>Seller role:</strong> Transition period (3&ndash;12 months) then departure. Strategic buyers don&apos;t need you to run the business long-term.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Financial Buyers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Who they are:</strong> Private equity firms, search fund entrepreneurs, family offices, and independent sponsors.</li>
          <li><strong>Motivation:</strong> Cash flow returns, operational improvement, buy-and-build strategies, and eventual resale at a higher multiple.</li>
          <li><strong>Valuation:</strong> Pay fair market value (4&ndash;7x EBITDA for search fund-sized deals). No synergy premium but competitive for quality businesses.</li>
          <li><strong>Deal structure:</strong> More creative structures: seller financing, earn-outs, equity rollover. Can bridge valuation gaps with deal structure.</li>
          <li><strong>Post-sale continuity:</strong> Business typically continues operating independently. Brand, culture, and most employees preserved.</li>
          <li><strong>Seller role:</strong> May retain equity rollover position (10&ndash;30%). Often involved in transition for 6&ndash;24 months.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Comparison Matrix</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Price:</strong> Strategic buyers typically pay more (synergy premium). Financial buyers compete on deal structure and speed.</li>
          <li><strong>Deal certainty:</strong> Financial buyers (especially PE) have higher close rates. Strategic buyers may face regulatory or board approval delays.</li>
          <li><strong>Employee impact:</strong> Strategic buyers often consolidate, eliminating roles. Financial buyers generally preserve the team.</li>
          <li><strong>Legacy preservation:</strong> Financial buyers better preserve brand, culture, and community presence. Strategic buyers integrate and rebrand.</li>
          <li><strong>Speed to close:</strong> Financial buyers: 3&ndash;6 months. Strategic buyers: 4&ndash;12 months (longer for larger companies).</li>
          <li><strong>Confidentiality:</strong> Selling to a competitor (strategic) risks confidential information leaking even if the deal falls through.</li>
        </ul>
      </div>

      <h2 className={h2Class}>When to Choose Which</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Choose strategic when:</strong> Maximizing sale price is the top priority, you&apos;re ready to fully exit, and business legacy is less important.</li>
          <li><strong>Choose financial when:</strong> You want to preserve the business&apos;s independence, protect employees, retain equity upside, or need a faster close.</li>
          <li><strong>Run a dual process:</strong> Engage both strategic and financial buyers simultaneously. Competition between buyer types maximizes leverage and price.</li>
          <li><strong>Consider hybrid:</strong> Some financial buyers with platform companies act as both strategic and financial (industry expertise + financial backing).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Strategic buyers typically pay a 20&ndash;50% synergy premium but may significantly change the business, brand, and team post-acquisition</li>
          <li>Financial buyers offer deal structure flexibility, faster closing, and better legacy/employee preservation but pay fair market value</li>
          <li>Running a dual-track process (engaging both buyer types) maximizes competitive tension and sale price</li>
          <li>Consider employee impact, legacy, confidentiality risk, and post-sale lifestyle alongside price when choosing a buyer type</li>
          <li>Equity rollover with a financial buyer lets you participate in future upside while de-risking your concentrated position</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies</Link></li>
        <li><Link href="/learn/emotional-journey-selling" className="text-apple-accent hover:underline">The Emotional Journey of Selling</Link></li>
        <li><Link href="/learn/business-valuation" className="text-apple-accent hover:underline">Business Valuation</Link></li>
        <li><Link href="/learn/rollover-equity" className="text-apple-accent hover:underline">Rollover Equity</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Axial, <em>Strategic vs. Financial Buyer Report</em> (2024)</li>
        <li>Pitchbook, <em>M&amp;A Buyer Type Analysis</em> (2024)</li>
        <li>Exit Planning Institute, <em>Choosing the Right Buyer</em> (2024)</li>
      </ul>
    </article>
  );
}
