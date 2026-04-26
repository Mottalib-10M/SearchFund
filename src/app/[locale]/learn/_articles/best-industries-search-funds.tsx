import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function BestIndustriesSearchFundsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        What Industries Are Best for Search Funds?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Industry selection is one of the most consequential decisions a
          searcher makes. The{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            Stanford 2024 study
          </Link>{" "}
          shows that the best-performing search funds tend to acquire
          businesses in industries with specific characteristics:
          recurring revenue, high switching costs, fragmented competition,
          and resistance to disruption.
        </p>
        <p>
          This guide ranks the most popular and successful industries for
          search fund acquisitions based on historical data, practitioner
          experience, and structural analysis.
        </p>

        <h2 className={h2Class}>What makes an industry &ldquo;search fund friendly&rdquo;?</h2>
        <ul className={ulClass}>
          <li><strong>Recurring or contractual revenue:</strong> Maintenance contracts, subscriptions, retainers, or recurring billing create predictable cash flows and higher valuations</li>
          <li><strong>Low customer concentration:</strong> No single customer should represent more than 10-15% of revenue</li>
          <li><strong>Fragmented market:</strong> Many small operators with no dominant market leader, creating{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>{" "}
            opportunity</li>
          <li><strong>Non-cyclical demand:</strong> Essential services or needs-based spending that doesn&rsquo;t collapse in recessions</li>
          <li><strong>Low technology disruption risk:</strong> Industries where software disruption is a growth lever, not an existential threat</li>
          <li><strong>Succession dynamics:</strong> Aging ownership base creating a large pool of motivated sellers (the{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              baby boomer wave
            </Link>)</li>
          <li><strong>Scalable operations:</strong> Ability to systematize through technology, processes, and professional management</li>
          <li><strong>Reasonable multiples:</strong> Businesses purchasable at 3-6x EBITDA with standard{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              financing structures
            </Link></li>
        </ul>

        <h2 className={h2Class}>Tier 1: The classic search fund industries</h2>

        <h3 className={h3Class}>1. Business services &amp; B2B services</h3>
        <p>
          The most popular search fund category by deal volume. Includes
          staffing, facilities management, waste management, pest control,
          janitorial, and outsourced business functions.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> Contractual revenue, low capex, scalable, high fragmentation</li>
          <li><strong>Typical multiples:</strong> 4-6x EBITDA</li>
          <li><strong>EBITDA margins:</strong> 12-25%</li>
          <li><strong>Key risk:</strong> Employee-dependent businesses can face retention challenges</li>
        </ul>

        <h3 className={h3Class}>2. Software &amp; SaaS</h3>
        <p>
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
            SaaS businesses
          </Link>{" "}
          are increasingly popular search fund targets due to their
          recurring revenue, high margins, and scalability.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> 90%+ gross margins, predictable ARR, high switching costs, strong unit economics</li>
          <li><strong>Typical multiples:</strong> 4-8x ARR (higher than other industries)</li>
          <li><strong>EBITDA margins:</strong> 20-40%</li>
          <li><strong>Key risk:</strong> Technical debt, key developer dependency, competitive threat from larger platforms</li>
        </ul>

        <h3 className={h3Class}>3. Healthcare services</h3>
        <p>
          <Link href="/learn/healthcare-acquisition" className="text-apple-accent hover:underline">
            Healthcare businesses
          </Link>{" "}
          benefit from non-discretionary demand, aging demographics, and
          insurance-based revenue.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> Recession-proof demand, aging population tailwind, high barriers to entry (licensing), fragmented</li>
          <li><strong>Typical multiples:</strong> 4-7x EBITDA</li>
          <li><strong>EBITDA margins:</strong> 15-30%</li>
          <li><strong>Key risk:</strong> Regulatory complexity, reimbursement rate changes, practitioner dependency</li>
          <li><strong>Sub-sectors:</strong> Dental practices, veterinary clinics, home health, behavioral health, specialty clinics</li>
        </ul>

        <h3 className={h3Class}>4. Home services &amp; field services</h3>
        <p>
          <Link href="/learn/home-services-acquisition" className="text-apple-accent hover:underline">
            Home services
          </Link>{" "}
          including{" "}
          <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">
            HVAC
          </Link>,
          plumbing, electrical, roofing, and landscaping are among the
          most fragmented industries in the economy.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> Essential services, maintenance contracts, huge fragmentation (100K+ operators per trade), ideal for buy-and-build</li>
          <li><strong>Typical multiples:</strong> 3-5.5x EBITDA</li>
          <li><strong>EBITDA margins:</strong> 10-20%</li>
          <li><strong>Key risk:</strong> Technician recruitment and retention (skilled labor shortage)</li>
        </ul>

        <h3 className={h3Class}>5. Professional services</h3>
        <p>
          Accounting firms, engineering consultancies, IT managed services,
          and specialty consulting firms. See our{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">
            professional services playbook
          </Link>.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> Relationship-based revenue, high margins, low capex, recurring engagements</li>
          <li><strong>Typical multiples:</strong> 4-7x EBITDA (higher for IT/MSP)</li>
          <li><strong>EBITDA margins:</strong> 15-30%</li>
          <li><strong>Key risk:</strong> Key-person dependency, client relationships tied to the owner</li>
        </ul>

        <h2 className={h2Class}>Tier 2: Strong but more specialized</h2>

        <h3 className={h3Class}>6. Manufacturing (niche)</h3>
        <p>
          <Link href="/learn/manufacturing-acquisition" className="text-apple-accent hover:underline">
            Niche manufacturing
          </Link>{" "}
          businesses with defensible positions, specialty
          fabrication, custom components, precision machining, can
          be excellent search fund targets.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> High barriers to entry, long customer relationships, pricing power in niches</li>
          <li><strong>Typical multiples:</strong> 3.5-6x EBITDA</li>
          <li><strong>EBITDA margins:</strong> 10-20%</li>
          <li><strong>Key risk:</strong> Capital intensity, supply chain dependency, cyclicality for some sub-sectors</li>
        </ul>

        <h3 className={h3Class}>7. Education &amp; training</h3>
        <p>
          <Link href="/learn/education-acquisition" className="text-apple-accent hover:underline">
            Education businesses
          </Link>{" "}
          including test prep, corporate training, vocational schools,
          and tutoring companies.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> Counter-cyclical (enrollment rises in recessions), growing demand for workforce development</li>
          <li><strong>Typical multiples:</strong> 3-5x EBITDA</li>
          <li><strong>EBITDA margins:</strong> 15-25%</li>
          <li><strong>Key risk:</strong> Instructor dependency, regulatory (accreditation), digital disruption</li>
        </ul>

        <h3 className={h3Class}>8. E-commerce &amp; D2C brands</h3>
        <p>
          <Link href="/learn/ecommerce-acquisition" className="text-apple-accent hover:underline">
            E-commerce acquisitions
          </Link>{" "}
          have grown in popularity, particularly Amazon FBA and
          Shopify-based D2C brands.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> Scalable, data-rich, global addressable market</li>
          <li><strong>Typical multiples:</strong> 3-5x SDE (lower than traditional industries)</li>
          <li><strong>EBITDA margins:</strong> 15-35% (varies widely)</li>
          <li><strong>Key risk:</strong> Platform dependency (Amazon can change rules overnight), CAC inflation, low barriers</li>
        </ul>

        <h3 className={h3Class}>9. Financial services &amp; insurance</h3>
        <p>
          <Link href="/learn/financial-services-acquisition" className="text-apple-accent hover:underline">
            Insurance agencies
          </Link>,
          wealth management firms, and specialty finance businesses
          offer exceptional recurring revenue economics.
        </p>
        <ul className={ulClass}>
          <li><strong>Why it works:</strong> Renewal-based revenue (85-95% retention), high margins, strong roll-up economics</li>
          <li><strong>Typical multiples:</strong> 6-10x EBITDA for insurance (premium sector)</li>
          <li><strong>EBITDA margins:</strong> 20-40%</li>
          <li><strong>Key risk:</strong> Regulatory licensing, compliance burden, higher multiples reduce entry attractiveness</li>
        </ul>

        <h2 className={h2Class}>Industries to approach with caution</h2>
        <ul className={ulClass}>
          <li><strong>Restaurants &amp; hospitality:</strong> Low margins (5-10%), high failure rates, labor-intensive, discretionary spending</li>
          <li><strong>Retail (physical):</strong> E-commerce disruption, declining foot traffic, inventory risk</li>
          <li><strong>Construction (general contracting):</strong> Project-based (no recurring revenue), highly cyclical, low margins, bonding requirements</li>
          <li><strong>Media &amp; publishing:</strong> Structural decline in traditional media, advertising revenue uncertainty</li>
          <li><strong>Commodity manufacturing:</strong> Price competition, no differentiation, exposed to imports</li>
          <li><strong>Agriculture:</strong> Weather risk, commodity pricing, capital intensive</li>
        </ul>

        <h2 className={h2Class}>Industry selection by searcher profile</h2>

        <h3 className={h3Class}>First-time operator (no industry experience)</h3>
        <p>
          Prioritize simple, well-understood industries: business services,
          home services, or distribution. Avoid highly regulated or
          technical sectors (healthcare, financial services) where domain
          expertise is critical.
        </p>

        <h3 className={h3Class}>Technical background</h3>
        <p>
          SaaS and IT services use your technical skills and give
          you an edge in evaluating technology assets, technical debt, and
          product roadmaps.
        </p>

        <h3 className={h3Class}>Healthcare/legal/finance background</h3>
        <p>
          Regulated industries reward domain expertise. Your understanding
          of compliance, licensing, and industry dynamics is a significant
          competitive advantage.
        </p>

        <h2 className={h2Class}>The data: what Stanford says</h2>
        <p>
          According to the{" "}
          <Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">
            Stanford data
          </Link>{" "}
          across 681 search funds, the most common acquisition industries
          (by deal count) are:
        </p>
        <ul className={ulClass}>
          <li>Business services: ~25% of acquisitions</li>
          <li>Healthcare: ~15%</li>
          <li>Technology/SaaS: ~12%</li>
          <li>Education: ~8%</li>
          <li>Manufacturing: ~7%</li>
          <li>Other services: ~33%</li>
        </ul>
        <p>
          The highest returns have historically come from technology/SaaS
          and healthcare acquisitions, though past performance doesn&rsquo;t
          guarantee future results. For thorough return analysis, see
          our{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            search fund returns
          </Link>{" "}
          deep dive.
        </p>

        <h2 className={h2Class}>How to pick your industry</h2>
        <ul className={ulClass}>
          <li><strong>Start with your thesis:</strong> What industries do you know, understand, or find compelling?</li>
          <li><strong>Validate the structural characteristics:</strong> Does it check the &ldquo;search fund friendly&rdquo; boxes above?</li>
          <li><strong>Check the deal flow:</strong> Are there enough businesses for sale in your target geography and size range?</li>
          <li><strong>Assess your competitive advantage:</strong> Do you bring relevant experience, relationships, or insights?</li>
          <li><strong>Talk to operators:</strong> Reach out to search fund CEOs operating in the industry, they&rsquo;ll share what surprised them</li>
        </ul>
        <p>
          For a broader overview of the ETA market, see our{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            What is ETA?
          </Link>{" "}
          guide, and for valuation benchmarks by sector, check our{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            EBITDA multiples by industry
          </Link>{" "}
          reference.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How important is industry experience when buying a search fund business?</h3>
        <p>
          Industry experience is valuable but not required for most
          Tier 1 sectors. The Stanford data shows that first-time operators
          without prior industry experience perform well in straightforward
          industries like business services and home services, where
          transferable management skills matter more than domain expertise.
          Regulated industries like healthcare and financial services are the
          exception, domain knowledge significantly reduces compliance
          risk and accelerates the{" "}
          <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
            lifecycle
          </Link>.
        </p>

        <h3 className={h3Class}>Do certain industries have higher search fund failure rates?</h3>
        <p>
          Yes. Industries with project-based revenue, high capital intensity,
          or secular decline have disproportionately higher failure rates.
          The Stanford data shows losses are more common in commodity
          manufacturing, construction, and traditional retail. Our analysis
          of{" "}
          <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
            why search funds fail
          </Link>{" "}
          identifies wrong industry selection as one of the nine most
          common mistakes. Choosing an industry with structural tailwinds
          provides a margin of safety that compensates for the
          first-time-CEO learning curve.
        </p>

        <h3 className={h3Class}>How much do search fund-friendly industries typically cost to acquire?</h3>
        <p>
          Tier 1 industries trade at 3-8x EBITDA depending on the
          sector: home services at 3-5.5x, business services at
          4-6x, professional services at 4-7x, healthcare at
          4-7x, and SaaS at 4-8x ARR. Our{" "}
          <Link href="/learn/search-fund-cost" className="text-apple-accent hover:underline">
            search fund cost guide
          </Link>{" "}
          breaks down the full capital requirements beyond just the
          purchase multiple, including DD fees, legal costs, and working
          capital needs.
        </p>
      </div>
    </article>
  );
}
