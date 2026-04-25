import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function PrepareBusinessForSaleArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How to Prepare Your Business for Sale
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          The difference between a business that sells quickly at a premium
          and one that languishes on the market for years often comes down
          to preparation. Buyers pay more for clean, well-documented,
          owner-independent businesses. This guide provides the 18-24
          month roadmap to maximize your{" "}
          <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">
            business valuation
          </Link>{" "}
          and ensure a smooth sale.
        </p>

        <h2 className={h2Class}>The 18-24 month preparation timeline</h2>

        <h3 className={h3Class}>Months 18-24: Foundation</h3>
        <ul className={ulClass}>
          <li><strong>Get a valuation:</strong> Understand your starting point. Hire a certified appraiser or consult an M&amp;A advisor</li>
          <li><strong>Assemble your advisory team:</strong> M&amp;A attorney, CPA/tax advisor, and (optionally) a business broker or M&amp;A advisor. See{" "}
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              advisor selection guide
            </Link></li>
          <li><strong>Tax planning:</strong> Structure the sale to minimize capital gains. In the US, consider{" "}
            <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
              QSBS qualification
            </Link>; in France, the{" "}
            <Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">
              Dutreil pact
            </Link>. See{" "}
            <Link href="/learn/capital-gains-tax-by-country" className="text-apple-accent hover:underline">
              CGT by country
            </Link></li>
          <li><strong>Set personal goals:</strong> What do you want after the sale? Retirement? Another venture? This shapes deal structure</li>
        </ul>

        <h3 className={h3Class}>Months 12-18: Build value</h3>
        <ul className={ulClass}>
          <li><strong>Reduce owner dependence:</strong> This is the single most important value driver. Build a management team that can run the business without you. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk
            </Link></li>
          <li><strong>Document everything:</strong> Standard operating procedures (SOPs), employee manuals, vendor contracts, customer agreements</li>
          <li><strong>Clean up financials:</strong> Eliminate personal expenses from the business, reconcile all accounts, ensure tax returns match financial statements</li>
          <li><strong>Lock in contracts:</strong> Extend key customer and supplier agreements. Convert verbal arrangements to written contracts</li>
          <li><strong>Diversify revenue:</strong> Reduce{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration
            </Link>{" "}
            below 15% per customer if possible</li>
          <li><strong>Address deferred maintenance:</strong> Fix equipment, update technology, refresh facilities</li>
        </ul>

        <h3 className={h3Class}>Months 6-12: Package for market</h3>
        <ul className={ulClass}>
          <li><strong>Prepare financial reports:</strong> 3 years of tax returns, P&amp;L statements, balance sheets, and a trailing 12-month summary</li>
          <li><strong>Calculate adjusted EBITDA:</strong> Document all legitimate{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              add-backs
            </Link>{" "}
            with supporting evidence</li>
          <li><strong>Build a data room:</strong> Organize all due diligence documents (financial, legal, operational, HR) in a virtual data room</li>
          <li><strong>Create a growth story:</strong> Document untapped opportunities (new markets, products, geographies) that the buyer can pursue</li>
          <li><strong>Choose your sale process:</strong> Broker-assisted, M&amp;A advisor, or direct approach to buyers</li>
        </ul>

        <h3 className={h3Class}>Months 0-6: Execute the sale</h3>
        <ul className={ulClass}>
          <li><strong>Go to market:</strong> Confidential Information Memorandum (CIM), NDA process, buyer screening</li>
          <li><strong>Negotiate LOI:</strong>{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              Letter of Intent
            </Link>{" "}
            with price, structure, and exclusivity</li>
          <li><strong>Support due diligence:</strong> Be responsive and transparent. Slow or incomplete DD responses kill deals</li>
          <li><strong>Close and transition:</strong> Sign the purchase agreement, fund the transaction, begin the transition period</li>
        </ul>

        <h2 className={h2Class}>Top value killers to fix now</h2>
        <ol className={olClass}>
          <li><strong>Owner dependence:</strong> If you are the key salesperson, key relationship holder, or sole decision-maker, the business is worth 30-50% less</li>
          <li><strong>Customer concentration:</strong> A single customer at 25%+ of revenue is a deal-breaker for many buyers</li>
          <li><strong>Messy financials:</strong> Commingled personal/business expenses, cash transactions, or inconsistent bookkeeping create distrust</li>
          <li><strong>Deferred maintenance:</strong> Aging equipment, outdated systems, and needed facility repairs signal neglect</li>
          <li><strong>Pending issues:</strong> Unresolved lawsuits, regulatory violations, expiring leases, or employee disputes</li>
        </ol>

        <h2 className={h2Class}>What buyers are looking for</h2>
        <ul className={ulClass}>
          <li><strong>Consistent cash flow:</strong> 3+ years of stable or growing EBITDA</li>
          <li><strong>Recurring revenue:</strong>{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              Contracts, subscriptions, or maintenance agreements
            </Link></li>
          <li><strong>Diversified customers:</strong> No single customer above 10-15% of revenue</li>
          <li><strong>Strong team:</strong> Experienced employees who will stay post-acquisition</li>
          <li><strong>Growth potential:</strong> Clear, documented opportunities the buyer can pursue</li>
          <li><strong>Clean operations:</strong> Written processes, up-to-date technology, compliant with regulations</li>
        </ul>

        <h2 className={h2Class}>Confidentiality during the sale</h2>
        <ul className={ulClass}>
          <li><strong>Employees:</strong> Do not tell employees until the deal is nearly closed. Premature disclosure causes anxiety and departures</li>
          <li><strong>Customers:</strong> Buyers should not contact customers before closing without your explicit permission</li>
          <li><strong>Competitors:</strong> Use NDAs and controlled information release to prevent competitive harm</li>
          <li><strong>Code names:</strong> Many brokers use code names and blind profiles to protect seller identity until NDA is signed</li>
        </ul>

        <p>
          For more on{" "}
          <Link href="/learn/selling-to-search-fund" className="text-apple-accent hover:underline">
            selling to a search fund
          </Link>{" "}
          and the{" "}
          <Link href="/learn/seller-psychology" className="text-apple-accent hover:underline">
            emotional journey of selling
          </Link>, see our seller guides. You may also find our{" "}
          <Link href="/learn/succession-planning-owners" className="text-apple-accent hover:underline">
            5-year succession planning roadmap
          </Link>{" "}
          and{" "}
          <Link href="/learn/tax-planning-sellers" className="text-apple-accent hover:underline">
            tax planning strategies for sellers
          </Link>{" "}
          helpful for the broader exit process.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How much can proper preparation increase my selling price?</h3>
        <p>
          Well-prepared businesses typically sell for 20-40% more than
          comparable unprepared businesses. The biggest value drivers are
          reducing owner dependence (which can add 1-2x to your EBITDA
          multiple), cleaning financials to eliminate buyer uncertainty, and
          locking in recurring revenue contracts. A business with $1M EBITDA
          that increases its multiple from 4x to 5.5x through preparation
          adds $1.5M in enterprise value.
        </p>

        <h3 className={h3Class}>Should I hire a broker or sell the business myself?</h3>
        <p>
          For most businesses under $10M in enterprise value, a broker or
          M&amp;A advisor is worth the 8-12% success fee. They bring
          a network of qualified buyers, run a competitive process, manage
          confidentiality, and handle the enormous administrative burden
          of marketing, screening, and negotiation. Selling directly is
          viable only if you already have an identified buyer (e.g., a
          strategic acquirer or{" "}
          <Link href="/learn/selling-to-search-fund" className="text-apple-accent hover:underline">
            search fund
          </Link>{" "}
          operator you know personally).
        </p>

        <h3 className={h3Class}>What documents do I need for due diligence?</h3>
        <p>
          At minimum: 3 years of tax returns, monthly P&amp;L statements
          and balance sheets, a trailing-12-month financial summary,
          customer and revenue concentration analysis, employee roster
          with compensation details, all material contracts (leases,
          customer agreements, vendor agreements), insurance policies,
          and any pending or historical legal matters. Having a well-organized{" "}
          <Link href="/learn/seller-data-room" className="text-apple-accent hover:underline">
            virtual data room
          </Link>{" "}
          ready before going to market accelerates the process and signals
          professionalism to buyers.
        </p>
      </div>
    </article>
  );
}
