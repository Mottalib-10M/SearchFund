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
          20-40% of value on the table. Effective succession
          planning starts 3-5 years before you want to exit.
        </p>

        <h2 className={h2Class}>Why start 5 years early?</h2>
        <ul className={ulClass}>
          <li><strong>Value creation takes time:</strong> Reducing owner dependence, building a management team, and diversifying revenue are 2-3 year projects</li>
          <li><strong>Tax optimization requires planning:</strong> Most{" "}
            <Link href="/learn/tax-planning-sellers" className="text-apple-accent hover:underline">
              tax strategies
            </Link>{" "}
            (QSBS, Dutreil, holding company structures) require multi-year holding periods</li>
          <li><strong>Market timing:</strong> Starting early gives you the luxury of waiting for favorable market conditions</li>
          <li><strong>Personal readiness:</strong> The emotional and psychological preparation to let go of your business takes time</li>
        </ul>

        <h2 className={h2Class}>The 5-year succession roadmap</h2>

        <h3 className={h3Class}>Years 5-4: Strategic planning</h3>
        <ul className={ulClass}>
          <li><strong>Define your goals:</strong> Retirement? Another venture? Partial sale with continued involvement? Your goals shape the entire strategy</li>
          <li><strong>Get a baseline valuation:</strong> Understand{" "}
            <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">
              what your business is worth today
            </Link></li>
          <li><strong>Identify successors:</strong> Internal (management buyout), family, or external sale (search fund, PE, strategic)</li>
          <li><strong>Tax structure review:</strong> Assess whether your current entity structure is optimal for a sale. Consider restructuring if needed</li>
        </ul>

        <h3 className={h3Class}>Years 4-3: Build transferable value</h3>
        <ul className={ulClass}>
          <li><strong>Hire and develop a #2:</strong> Your most important hire. This person should be able to run the business without you within 2 years</li>
          <li><strong>Reduce owner dependence:</strong> Systematically transfer customer relationships, vendor contacts, and operational knowledge to your team. See{" "}
            <Link href="/learn/key-person-risk" className="text-apple-accent hover:underline">
              key person risk mitigation
            </Link></li>
          <li><strong>Document processes:</strong> Create SOPs, employee handbooks, and operational manuals</li>
          <li><strong>Professionalize financials:</strong> Move to accrual accounting, implement a proper chart of accounts, consider audited or reviewed financial statements</li>
        </ul>

        <h3 className={h3Class}>Years 3-2: Optimize operations</h3>
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

        <h3 className={h3Class}>Years 2-1: Prepare for market</h3>
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

        <h3 className={h3Class}>Year 1-0: Execute the sale</h3>
        <ul className={ulClass}>
          <li><strong>Go to market:</strong> CIM, buyer screening, LOI negotiation</li>
          <li><strong>Due diligence:</strong> Support buyer review process</li>
          <li><strong>Close and transition:</strong> 6-12 month transition period with the new owner</li>
        </ul>

        <h2 className={h2Class}>Succession options compared</h2>
        <ul className={ulClass}>
          <li><strong>Family succession:</strong> Preserves legacy but often undervalues the business. Tax-advantaged transfer tools (Dutreil, estate planning) available</li>
          <li><strong>Management buyout (MBO):</strong> Employees know the business, but financing is often the challenge. May need seller financing</li>
          <li><strong>Search fund sale:</strong> Individual operator who preserves culture and employees. Fair valuation (4-6x EBITDA). See{" "}
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
          <li><strong>Forced sale:</strong> Health issues, divorce, or burnout force sales at discounted prices (20-40% below market)</li>
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
          </Link>, see our related guides. For the financial side, read our{" "}
          <Link href="/learn/tax-planning-sellers" className="text-apple-accent hover:underline">
            tax planning guide for sellers
          </Link>{" "}
          and{" "}
          <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">
            business valuation overview
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>What is the biggest mistake owners make when planning succession?</h3>
        <p>
          Waiting too long. Most owners start thinking about succession 6-12
          months before they want to exit, but the most impactful value drivers
          reducing owner dependence, building a management team,
          diversifying revenue, require 2-3 years of sustained
          effort. Starting late leaves money on the table and limits your
          options for deal structure, buyer selection, and tax optimization.
        </p>

        <h3 className={h3Class}>Should I tell my employees about my succession plan?</h3>
        <p>
          Not in the early stages. Premature disclosure can cause anxiety,
          productivity declines, and even key employee departures. Most
          advisors recommend telling only your most senior, trusted
          leaders, and only when their participation is essential
          to the plan. Broader communication should happen after a deal
          is signed, typically 30-60 days before closing.
        </p>

        <h3 className={h3Class}>How do I choose between selling to a search fund, PE firm, or strategic buyer?</h3>
        <p>
          It depends on your priorities. Search funds preserve company culture
          and employees, paying fair multiples (4-6x EBITDA). PE firms
          pay higher multiples for larger businesses but may restructure
          operations. Strategic buyers offer the highest potential price but
          often integrate the company. See our{" "}
          <Link href="/learn/choosing-buyer-types" className="text-apple-accent hover:underline">
            buyer type comparison
          </Link>{" "}
          for a detailed framework.
        </p>

        <h3 className={h3Class}>What is a management buyout and is it a good succession option?</h3>
        <p>
          A management buyout (MBO) is when your existing management team
          purchases the business, often with a combination of seller
          financing, bank debt, and personal investment. MBOs work well
          when you have a capable #2 leader, want to preserve company
          culture, and are willing to provide{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller financing
          </Link>{" "}
          to bridge the financing gap. The risk is that managers may lack
          capital or experience to close and finance the deal independently.
        </p>
      </div>
    </article>
  );
}
