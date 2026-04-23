import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SuccessionPlanningOwnersArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Succession Planning for Business Owners: Start 5 Years Early
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Most business owners spend decades building their company but
          only weeks planning their exit. The result: 70% of businesses
          listed for sale never sell, and owners who do sell often leave
          20&ndash;40% of value on the table. Effective succession
          planning starts 3&ndash;5 years before you want to exit.
        </p>

        <h2 className={h2Class}>Why start 5 years early?</h2>
        <ul className={ulClass}>
          <li><strong>Value creation takes time:</strong> Reducing owner dependence, building a management team, and diversifying revenue are 2&ndash;3 year projects</li>
          <li><strong>Tax optimization requires planning:</strong> Most{" "}
            <Link href="/learn/tax-planning-sellers" className="text-apple-accent hover:underline">
              tax strategies
            </Link>{" "}
            (QSBS, Dutreil, holding company structures) require multi-year holding periods</li>
          <li><strong>Market timing:</strong> Starting early gives you the luxury of waiting for favorable market conditions</li>
          <li><strong>Personal readiness:</strong> The emotional and psychological preparation to let go of your business takes time</li>
        </ul>

        <h2 className={h2Class}>The 5-year succession roadmap</h2>

        <h3 className={h3Class}>Years 5&ndash;4: Strategic planning</h3>
        <ul className={ulClass}>
          <li><strong>Define your goals:</strong> Retirement? Another venture? Partial sale with continued involvement? Your goals shape the entire strategy</li>
          <li><strong>Get a baseline valuation:</strong> Understand{" "}
            <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">
              what your business is worth today
            </Link></li>
          <li><strong>Identify successors:</strong> Internal (management buyout), family, or external sale (search fund, PE, strategic)</li>
          <li><strong>Tax structure review:</strong> Assess whether your current entity structure is optimal for a sale. Consider restructuring if needed</li>
        </ul>

        <h3 className={h3Class}>Years 4&ndash;3: Build transferable value</h3>
        <ul className={ulClass}>
          <li><strong>Hire and develop a #2:</strong> Your most important hire. This person should be able to run the business without you within 2 years</li>
          <li><strong>Reduce owner dependence:</strong> Systematically transfer customer relationships, vendor contacts, and operational knowledge to your team. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk mitigation
            </Link></li>
          <li><strong>Document processes:</strong> Create SOPs, employee handbooks, and operational manuals</li>
          <li><strong>Professionalize financials:</strong> Move to accrual accounting, implement a proper chart of accounts, consider audited or reviewed financial statements</li>
        </ul>

        <h3 className={h3Class}>Years 3&ndash;2: Optimize operations</h3>
        <ul className={ulClass}>
          <li><strong>Grow selectively:</strong>{" "}
            <Link href="/learn/recurring-revenue-models" className="text-apple-accent hover:underline">
              Recurring revenue
            </Link>{" "}
            is worth more than project-based revenue. Focus on contracts and subscriptions</li>
          <li><strong>Diversify customers:</strong> Reduce{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration
            </Link>{" "}
            below 15% per customer</li>
          <li><strong>Lock in contracts:</strong> Extend key customer, supplier, and lease agreements to provide stability for the buyer</li>
          <li><strong>Clean up:</strong> Resolve pending legal issues, update compliance, address deferred maintenance</li>
        </ul>

        <h3 className={h3Class}>Years 2&ndash;1: Prepare for market</h3>
        <ul className={ulClass}>
          <li><strong>Assemble advisory team:</strong> M&amp;A attorney, CPA, and broker/advisor. See{" "}
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              advisor selection guide
            </Link></li>
          <li><strong>Full preparation checklist:</strong>{" "}
            <Link href="/learn/prepare-business-for-sale" className="text-apple-accent hover:underline">
              18-month sale preparation roadmap
            </Link></li>
          <li><strong>Final tax planning:</strong> Execute any remaining tax optimization strategies</li>
          <li><strong>Personal planning:</strong> What comes after the sale? Financial planning, estate planning, personal identity transition</li>
        </ul>

        <h3 className={h3Class}>Year 1&ndash;0: Execute the sale</h3>
        <ul className={ulClass}>
          <li><strong>Go to market:</strong> CIM, buyer screening, LOI negotiation</li>
          <li><strong>Due diligence:</strong> Support buyer review process</li>
          <li><strong>Close and transition:</strong> 6&ndash;12 month transition period with the new owner</li>
        </ul>

        <h2 className={h2Class}>Succession options compared</h2>
        <ul className={ulClass}>
          <li><strong>Family succession:</strong> Preserves legacy but often undervalues the business. Tax-advantaged transfer tools (Dutreil, estate planning) available</li>
          <li><strong>Management buyout (MBO):</strong> Employees know the business, but financing is often the challenge. May need seller financing</li>
          <li><strong>Search fund sale:</strong> Individual operator who preserves culture and employees. Fair valuation (4&ndash;6x EBITDA). See{" "}
            <Link href="/learn/selling-to-search-fund" className="text-apple-accent hover:underline">
              selling to a search fund
            </Link></li>
          <li><strong>PE sale:</strong> Higher valuations for larger businesses but potential restructuring. See{" "}
            <Link href="/learn/choosing-buyer-types" className="text-apple-accent hover:underline">
              buyer type comparison
            </Link></li>
          <li><strong>Strategic sale:</strong> Highest potential price but likely integration into a larger company</li>
        </ul>

        <h2 className={h2Class}>The cost of not planning</h2>
        <ul className={ulClass}>
          <li><strong>Forced sale:</strong> Health issues, divorce, or burnout force sales at discounted prices (20&ndash;40% below market)</li>
          <li><strong>Business closure:</strong> 70% of businesses that go to market without preparation fail to sell</li>
          <li><strong>Tax waste:</strong> Without advance planning, sellers typically pay the highest possible tax rate</li>
          <li><strong>Employee impact:</strong> Unprepared exits often result in employee layoffs and community impact</li>
        </ul>

        <p>
          For the{" "}
          <Link href="/learn/exit-readiness-plan" className="text-apple-accent hover:underline">
            exit readiness plan
          </Link>{" "}
          and{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            exit strategy options
          </Link>, see our related guides.
        </p>
      </div>
    </article>
  );
}
