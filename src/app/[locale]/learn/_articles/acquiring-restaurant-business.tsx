import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function AcquiringRestaurantBusinessArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Acquiring a Restaurant or Food Service Business
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The $1T+ US restaurant industry offers some of the most
          accessible acquisition opportunities for first-time buyers.
          However, restaurants also carry unique operational risks
          that require careful due diligence and hands-on management.
          This guide covers the sub-sectors, valuation, and critical
          success factors.
        </p>

        <h2 className={h2Class}>Restaurant sub-sectors</h2>
        <ul className={ulClass}>
          <li><strong>Quick-service (QSR):</strong> Fast food, counter service. Lower ticket, higher volume. Most systematic</li>
          <li><strong>Fast-casual:</strong> Chipotle/Panera model. Growing segment with better margins than QSR</li>
          <li><strong>Casual dining:</strong> Full-service restaurants. Higher labor costs, more operational complexity</li>
          <li><strong>Fine dining:</strong> Chef-driven concepts. Highest margins per meal but most volatile. Not recommended for ETA</li>
          <li><strong>Catering &amp; events:</strong> B2B and event-based. Less real estate intensive, higher margins</li>
          <li><strong>Ghost kitchens / delivery-only:</strong> Emerging model with lower overhead but delivery platform dependency</li>
        </ul>

        <h2 className={h2Class}>Valuation</h2>
        <ul className={ulClass}>
          <li><strong>Independent restaurants:</strong> 1.5&ndash;3x SDE or 2&ndash;4x EBITDA</li>
          <li><strong>Multi-unit operations:</strong> 3&ndash;5x EBITDA for 3+ locations with management teams</li>
          <li><strong>Franchise units:</strong> 2&ndash;4x EBITDA (brand value, but franchisor approval and royalties)</li>
          <li><strong>Premium factors:</strong> Multi-unit with management team, strong location(s), growing revenue, established brand, catering revenue</li>
          <li><strong>Discount factors:</strong> Chef/owner dependent, declining revenue, lease expiring, single location, high food costs</li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <ul className={ulClass}>
          <li><strong>Lease review:</strong> The lease is the most critical contract. Review remaining term, renewal options, rent escalations, personal guarantees, and exclusivity clauses</li>
          <li><strong>Unit economics:</strong> Food cost (target: 28&ndash;35% of revenue), labor cost (25&ndash;35%), and prime cost (food + labor &lt;65%)</li>
          <li><strong>Revenue trends:</strong> Same-store sales trends, check average, guest count, and daypart analysis (lunch vs. dinner)</li>
          <li><strong>Health &amp; safety:</strong> Health department inspection history, food safety certifications, and any violations</li>
          <li><strong>Online reviews:</strong> Google, Yelp ratings and trends. Declining reviews often precede declining revenue</li>
          <li><strong>Equipment condition:</strong> Kitchen equipment replacement is $50K&ndash;$300K. Review age and maintenance records</li>
          <li><strong>Liquor license:</strong> If applicable, verify license transferability. In some jurisdictions, this can take months</li>
        </ul>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <ul className={ulClass}>
          <li><strong>Menu engineering:</strong> Analyze profitability by menu item. Eliminate low-margin items, promote high-margin ones. Can improve food cost by 2&ndash;5 percentage points</li>
          <li><strong>Labor optimization:</strong> Right-size scheduling using POS data. Many restaurants overstaff during slow periods</li>
          <li><strong>Catering &amp; delivery:</strong> Add catering and third-party delivery to increase revenue without adding seats</li>
          <li><strong>Technology:</strong> Modern POS, online ordering, loyalty program, and automated inventory management</li>
          <li><strong>Multi-unit expansion:</strong> Once the first unit is profitable and systematic, open or acquire additional locations with the proven model</li>
        </ul>

        <h2 className={h2Class}>Restaurant-specific risks</h2>
        <ul className={ulClass}>
          <li><strong>Thin margins:</strong> Average restaurant net profit is 3&ndash;9%. Small cost increases or revenue dips can eliminate profitability</li>
          <li><strong>Lease dependence:</strong> Your business value is tied to your location. Losing a lease or facing a large rent increase is existential</li>
          <li><strong>Labor intensity:</strong> High turnover (70%+ annually), minimum wage increases, and labor availability challenges</li>
          <li><strong>Food cost volatility:</strong> Commodity prices (protein, produce, oil) fluctuate and directly impact margins</li>
          <li><strong>Competition:</strong> Extremely competitive with low barriers to entry. New restaurants open (and close) constantly</li>
        </ul>

        <p>
          For related playbooks, see{" "}
          <Link href="/learn/ecommerce-acquisition" className="text-apple-accent hover:underline">
            e-commerce acquisition
          </Link>{" "}
          and{" "}
          <Link href="/learn/pricing-optimization" className="text-apple-accent hover:underline">
            pricing optimization
          </Link>.
        </p>
      </div>
    </article>
  );
}
