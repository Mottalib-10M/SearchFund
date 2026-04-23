import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function FoodBeverageManufacturingAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Food &amp; Beverage Manufacturing Business</h1>
      <div className={bodyClass}>
        <p>Food and beverage manufacturing is a $900B+ US industry that feeds every grocery store, restaurant, and convenience store in the country. For search fund entrepreneurs, F&amp;B manufacturing offers recession-resistant demand (people always eat), brand-building potential, and a fragmented market where thousands of small manufacturers produce everything from specialty sauces to craft beverages. However, the sector comes with unique challenges: perishability, food safety regulations, and commodity price volatility.</p>
      </div>

      <h2 className={h2Class}>Types of F&amp;B Manufacturing</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Contract manufacturing (co-packing):</strong> Produce products for other brands. Recurring B2B revenue, lower brand risk.</li>
          <li><strong>Branded products:</strong> Own the brand, sell to retail/foodservice. Higher margins but requires marketing investment.</li>
          <li><strong>Specialty &amp; artisan:</strong> Premium products (organic, craft, ethnic foods). Growing 8&ndash;12% annually. Higher margins.</li>
          <li><strong>Bakery &amp; snacks:</strong> Bread, cookies, chips, bars. High volume, moderate margins.</li>
          <li><strong>Beverages:</strong> Craft beer, spirits, juices, functional beverages. Strong brand premiums possible.</li>
          <li><strong>Ingredients &amp; B2B:</strong> Flavors, spices, sauces, bases sold to other manufacturers. Less consumer exposure.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why F&amp;B Manufacturing Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recession-resistant:</strong> Food consumption is non-discretionary. Demand is fundamentally stable.</li>
          <li><strong>Brand value:</strong> Strong food brands command premium pricing and loyal customer bases</li>
          <li><strong>Specialty growth:</strong> Organic, plant-based, functional, and ethnic foods growing 2&ndash;3x the overall market rate</li>
          <li><strong>Co-packing demand:</strong> DTC food brands and restaurant chains increasingly outsource production</li>
          <li><strong>Fragmented:</strong> Tens of thousands of small manufacturers. Many family-owned with aging founders.</li>
          <li><strong>Multiple exit paths:</strong> Strategic acquirers (Nestle, General Mills, Kraft) actively buy successful brands</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Food safety &amp; compliance:</strong> SQF, BRC, or GFSI certifications. FDA registration, HACCP plans, and recall history.</li>
          <li><strong>Customer concentration:</strong> If one retailer (Walmart, Costco) is 25%+ of revenue, losing that account is catastrophic.</li>
          <li><strong>Ingredient costs:</strong> Raw material cost as a percentage of COGS. Commodity exposure and hedging strategies.</li>
          <li><strong>Facility condition:</strong> Equipment age, capacity utilization, and deferred maintenance. Food processing equipment is expensive.</li>
          <li><strong>Product shelf life:</strong> Perishability creates inventory risk. Longer shelf life = lower waste and broader distribution.</li>
          <li><strong>Channel mix:</strong> Retail vs. foodservice vs. DTC vs. co-pack. Diversification across channels reduces risk.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>New product development:</strong> Line extensions and new flavors to grow shelf space at existing retailers</li>
          <li><strong>Channel expansion:</strong> If primarily retail, add foodservice. If regional, expand geography.</li>
          <li><strong>DTC &amp; e-commerce:</strong> Build direct-to-consumer channel for higher margins and customer data</li>
          <li><strong>Co-packing revenue:</strong> Use excess capacity to manufacture for other brands</li>
          <li><strong>Operational efficiency:</strong> Lean manufacturing, automation, and waste reduction programs</li>
          <li><strong>Brand building:</strong> Invest in packaging, marketing, and social media to build brand awareness</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>F&amp;B manufacturing offers recession-resistant demand with brand-building upside and multiple strategic exit paths</li>
          <li>Food safety certifications (SQF, BRC, GFSI) are non-negotiable &mdash; they determine which retailers you can sell to</li>
          <li>Specialty and premium products offer the best margins (20&ndash;40% gross) vs. commodity products (10&ndash;20%)</li>
          <li>Customer concentration risk is severe &mdash; losing a major retailer or foodservice account can be devastating</li>
          <li>Typical valuations: 4&ndash;8x EBITDA for branded; 3&ndash;5x for co-packers and commodity manufacturers</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">Acquiring a Manufacturing Business</Link></li>
        <li><Link href="/learn/distribution-wholesale-acquisition" className="text-apple-accent hover:underline">Acquiring a Distribution Business</Link></li>
        <li><Link href="/learn/supply-chain-optimization-post-acquisition" className="text-apple-accent hover:underline">Supply Chain Optimization</Link></li>
        <li><Link href="/learn/product-line-extension" className="text-apple-accent hover:underline">Product Line Extension</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Food &amp; Drug Administration, <em>Food Facility Registration Data</em> (2024)</li>
        <li>IBISWorld, <em>Food Manufacturing in the US</em> (2024)</li>
        <li>Specialty Food Association, <em>State of the Specialty Food Industry</em> (2024)</li>
      </ul>
    </article>
  );
}
