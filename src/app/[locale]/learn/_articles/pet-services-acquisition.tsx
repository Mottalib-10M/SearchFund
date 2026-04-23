import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function PetServicesAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring a Pet Services Business</h1>
      <div className={bodyClass}>
        <p>The US pet industry generates $150B+ annually and continues to grow at 6&ndash;8% per year, driven by the &ldquo;pet humanization&rdquo; trend where owners increasingly treat pets as family members. Pet services &mdash; grooming, boarding, daycare, veterinary, and retail &mdash; represent a growing share of this spending. For search fund entrepreneurs, pet services businesses offer recession-resistant demand, recurring customer visits, and a fragmented market with thousands of independent operators ripe for consolidation.</p>
      </div>

      <h2 className={h2Class}>Types of Pet Services Businesses</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Pet grooming:</strong> Bathing, haircuts, nail trimming. High frequency (every 4&ndash;8 weeks). $40&ndash;100+ per visit.</li>
          <li><strong>Pet boarding &amp; daycare:</strong> Overnight and daytime care. $30&ndash;75/day for boarding; $25&ndash;50/day for daycare. Facility-dependent.</li>
          <li><strong>Veterinary practices:</strong> Medical care for animals. <Link href="/learn/veterinary-practice-acquisition" className="text-apple-accent hover:underline">Covered in our veterinary guide</Link>. Highest margins.</li>
          <li><strong>Pet retail:</strong> Independent pet stores, specialty food, and supplies. Competing with Chewy and Amazon is a challenge.</li>
          <li><strong>Dog walking &amp; pet sitting:</strong> In-home care services. Labor-intensive but low capex. App-based models growing.</li>
          <li><strong>Pet training:</strong> Obedience, behavior modification, and specialty training. High-skill, high-margin service.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Why Pet Services Is Attractive</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Recession-resistant:</strong> Pet spending barely declined during 2008&ndash;2009 and grew through COVID-19</li>
          <li><strong>Recurring visits:</strong> Grooming every 4&ndash;8 weeks, daycare weekly/daily, boarding during vacations and holidays</li>
          <li><strong>Growing market:</strong> Pet ownership at all-time highs (66% of US households). Spending per pet increasing annually.</li>
          <li><strong>Emotional stickiness:</strong> Pet owners are loyal to providers they trust with their animals. Switching is rare.</li>
          <li><strong>Fragmented:</strong> Dominated by independent groomers, boarders, and daycare operators. Limited chain presence.</li>
          <li><strong>Multiple services:</strong> Grooming + daycare + boarding + retail in one facility maximizes revenue per visit</li>
        </ul>
      </div>

      <h2 className={h2Class}>Due Diligence Priorities</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Facility:</strong> Condition, capacity, zoning compliance, ventilation, and safety features. Boarding/daycare facilities must meet local animal care regulations.</li>
          <li><strong>Reputation:</strong> Google and Yelp reviews are critical in pet services. 4.5+ stars with volume is ideal.</li>
          <li><strong>Staff retention:</strong> Skilled groomers are hard to find and replace. Assess groomer tenure, compensation, and non-competes.</li>
          <li><strong>Customer retention:</strong> Repeat visit frequency and customer lifetime value. Target 70%+ annual retention.</li>
          <li><strong>Insurance &amp; liability:</strong> Animal bite incidents, injury claims, and liability coverage adequacy</li>
          <li><strong>Revenue per service:</strong> Average ticket by service type, capacity utilization, and seasonality patterns</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Growth</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Add services:</strong> If grooming-only, add daycare or boarding. Bundled services increase customer lifetime value.</li>
          <li><strong>Membership programs:</strong> Monthly grooming or daycare memberships for predictable recurring revenue</li>
          <li><strong>Premium services:</strong> Spa treatments, teeth cleaning, specialty shampoos, and premium boarding suites</li>
          <li><strong>Technology:</strong> Online booking, automated reminders, customer CRM, and pet health tracking</li>
          <li><strong>New locations:</strong> Replicate proven concept in neighboring markets with demonstrated demand</li>
          <li><strong>Retail add-on:</strong> Premium pet food, treats, and accessories for additional revenue per visit</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Pet services offer recession-resistant demand with strong emotional customer loyalty and recurring visits</li>
          <li>Multi-service facilities (grooming + daycare + boarding) maximize revenue per customer</li>
          <li>Skilled groomer retention is the biggest operational challenge &mdash; assess staff tenure and compensation</li>
          <li>Online reputation (Google/Yelp reviews) is disproportionately important in pet services</li>
          <li>Typical valuations: 3&ndash;5x EBITDA for single-location; 5&ndash;8x for multi-location platforms</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/veterinary-practice-acquisition" className="text-apple-accent hover:underline">Acquiring a Veterinary Practice</Link></li>
        <li><Link href="/learn/franchise-acquisition" className="text-apple-accent hover:underline">Acquiring a Franchise Business</Link></li>
        <li><Link href="/learn/recurring-revenue-businesses" className="text-apple-accent hover:underline">Recurring Revenue Businesses</Link></li>
        <li><Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">Buy-and-Build Strategy</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>American Pet Products Association, <em>National Pet Owners Survey</em> (2024)</li>
        <li>IBISWorld, <em>Pet Grooming &amp; Boarding in the US</em> (2024)</li>
        <li>Packaged Facts, <em>US Pet Market Outlook</em> (2024)</li>
      </ul>
    </article>
  );
}
