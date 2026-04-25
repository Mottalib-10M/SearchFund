import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function RestaurantAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Restaurant or Food Service Business</h1>
      <div className={bodyClass}>
        <p>The US restaurant industry generates over $1 trillion annually, making it one of the largest sectors in the economy. For search fund entrepreneurs, restaurants and food service businesses present a mixed picture: high failure rates for independent operators, but compelling economics for well-managed multi-unit concepts, catering companies, and food service businesses with recurring B2B revenue. The key is selecting the right segment and model within this massive industry.</p>
      </div>

      <h2 className={h2Class}>Types of Food Service Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Quick-service restaurants (QSR):</strong> Fast food and fast-casual. Lower ticket, higher volume. Systemized operations.</li>
          <li><strong>Full-service restaurants:</strong> Casual and fine dining. Higher ticket, more operationally complex. Location-dependent.</li>
          <li><strong>Multi-unit operators:</strong> Multiple locations of the same concept. Scalable operations, management infrastructure.</li>
          <li><strong>Catering &amp; event:</strong> B2B and B2C catering services. Higher margins, advance booking, and recurring corporate clients.</li>
          <li><strong>Ghost kitchens:</strong> Delivery-only concepts. Lower overhead but dependent on delivery platforms.</li>
          <li><strong>Food service management:</strong> Contract dining for corporate cafeterias, hospitals, universities. Recurring B2B revenue.</li>
          <li><strong>Commissary/central kitchen:</strong> Centralized production for multi-unit brands. Manufacturing-like operations with food service clients.</li>
        </ul>
      </div>

      <h2 className={h2Class}>When Restaurants Make Sense for ETA</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Multi-unit concepts:</strong> 3&ndash;10 locations with proven unit economics and replicable systems</li>
          <li><strong>Catering &amp; food service management:</strong> B2B revenue with recurring corporate contracts. Less location-dependent.</li>
          <li><strong>QSR/fast-casual:</strong> Systemized operations with lower labor requirements per unit. More scalable than full-service.</li>
          <li><strong>Avoid:</strong> Single-location full-service restaurants, chef-dependent fine dining, and concepts without documented systems</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Unit economics:</strong> Revenue per location, food cost percentage (target 28&ndash;32%), labor cost (25&ndash;30%), and 4-wall EBITDA</li>
          <li><strong>Lease terms:</strong> Remaining lease duration, renewal options, rent as percentage of revenue (target under 8%). Lease loss kills restaurants.</li>
          <li><strong>Same-store sales:</strong> Year-over-year revenue growth per location. Declining same-store sales is the biggest red flag.</li>
          <li><strong>Management depth:</strong> Can locations run without the owner present? General managers and kitchen managers are critical.</li>
          <li><strong>Health &amp; safety:</strong> Health inspection history, food safety certifications, and compliance record</li>
          <li><strong>Online reputation:</strong> Google, Yelp, and delivery platform ratings. Review trends matter more than absolute ratings.</li>
          <li><strong>Systems &amp; recipes:</strong> Documented recipes, standardized procedures, and POS data for operational analysis</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>New locations:</strong> Open additional units in proven markets with documented playbook</li>
          <li><strong>Delivery &amp; digital:</strong> Optimize delivery platforms, launch online ordering, and build a first-party ordering channel</li>
          <li><strong>Menu engineering:</strong> Analyze item profitability and optimize the menu for margin contribution</li>
          <li><strong>Catering program:</strong> Add B2B catering to existing restaurant operations for incremental high-margin revenue</li>
          <li><strong>Technology:</strong> Modern POS, kitchen display systems, inventory management, and scheduling software</li>
          <li><strong>Franchising:</strong> For proven concepts, franchising enables capital-light growth</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Focus on multi-unit concepts, catering, and food service management &mdash; avoid single-location restaurants</li>
          <li>Unit economics (food cost, labor cost, 4-wall EBITDA) and lease terms are the most critical due diligence areas</li>
          <li>Management depth determines scalability &mdash; the business must run without the owner in the kitchen</li>
          <li>Declining same-store sales and rising food/labor costs are the most common failure modes</li>
          <li>Typical valuations: 3&ndash;5x EBITDA for multi-unit; 2&ndash;3x for single-unit; catering/food service management at 4&ndash;6x</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/franchise-acquisition" className="text-apple-accent hover:underline">Acquiring a Franchise Business</Link></li>
        <li><Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">Acquiring a Food &amp; Beverage Manufacturer</Link></li>
        <li><Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">Geographic Expansion</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>What type of restaurant business is best for search fund acquisition?</h3>
        <p>
          Multi-unit fast-casual or QSR concepts with 3&ndash;10 locations, proven unit economics, and documented operating systems are the strongest candidates for search fund acquisition. According to the National Restaurant Association&rsquo;s 2024 State of the Restaurant Industry report, multi-unit operators achieve 15&ndash;20% higher EBITDA margins than single-location restaurants because they benefit from purchasing scale, management infrastructure, and brand recognition. Catering and food service management companies are also attractive because they generate recurring B2B revenue with corporate contracts, which provides predictable cash flow that lenders and investors value. Single-location full-service restaurants, chef-dependent fine dining, and concepts without documented recipes and processes should generally be avoided because they carry excessive key-person risk and are difficult to scale.
        </p>

        <h3 className={h3Class}>What are the most important financial metrics in restaurant due diligence?</h3>
        <p>
          The critical financial metrics are food cost percentage (target 28&ndash;32% of revenue), labor cost percentage (target 25&ndash;30%), rent as a percentage of revenue (target under 8%), 4-wall EBITDA (target 15&ndash;20% for QSR/fast-casual, 10&ndash;15% for full-service), and same-store sales growth. According to IBISWorld&rsquo;s 2024 Restaurant Industry Report, the average US restaurant operates with a 3&ndash;9% net profit margin, meaning small deviations in food cost, labor, or rent can destroy profitability entirely. Same-store sales (year-over-year revenue growth at existing locations) is the single most important trend metric &mdash; declining same-store sales is the biggest red flag in restaurant due diligence. Toast&rsquo;s 2024 Restaurant Industry Trends Report shows that restaurants with positive same-store sales growth command 30&ndash;50% higher valuation multiples than those with flat or declining comparable sales.
        </p>

        <h3 className={h3Class}>How are restaurant businesses typically valued?</h3>
        <p>
          Restaurant valuations vary significantly by type: single-location restaurants typically sell at 2&ndash;3x SDE, multi-unit concepts at 3&ndash;5x EBITDA, and catering or food service management businesses at 4&ndash;6x EBITDA. According to the National Restaurant Association, franchise restaurants often trade at higher multiples (4&ndash;7x EBITDA) because they benefit from brand recognition, proven systems, and transferable operating playbooks. Lease terms are a critical valuation factor &mdash; a restaurant with 10+ years remaining on a favorable lease is worth significantly more than one with a lease expiring in 2&ndash;3 years, because lease loss is the number one cause of forced restaurant closures. Buyers should also factor in deferred capital expenditures, as many restaurant sellers reduce equipment maintenance and facility upgrades in the years before sale to inflate near-term profitability.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>National Restaurant Association, <em>State of the Restaurant Industry</em> (2024)</li>
        <li>IBISWorld, <em>Restaurant Industry in the US</em> (2024)</li>
        <li>Toast, <em>Restaurant Industry Trends Report</em> (2024)</li>
      </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><Link href="/learn/hotel-hospitality-acquisition" className="text-apple-accent hover:underline">Acquiring a Hotel or Hospitality Business</Link></li>
          <li><Link href="/learn/industry-selection-framework" className="text-apple-accent hover:underline">Industry Selection Framework: Picking Your Vertical</Link></li>
          <li><Link href="/learn/business-valuation" className="text-apple-accent hover:underline">How to Value a Small Business for Acquisition</Link></li>
          <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">ETA Due Diligence Checklist</Link></li>
          <li><Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">Deal Sourcing Strategies for Search Funds</Link></li>
          <li><Link href="/learn/seasonal-businesses" className="text-apple-accent hover:underline">Acquiring Seasonal Businesses: Opportunities &amp; Risks</Link></li>
        </ul>
    </article>
  );
}
