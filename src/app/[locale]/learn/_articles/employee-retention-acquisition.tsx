import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function EmployeeRetentionAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Employee Retention After Acquisition: Strategies That Work
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Losing key employees post-acquisition is the #2 operational risk
          (after overpaying). A single departure of a critical manager,
          salesperson, or technical expert can destroy 10&ndash;30% of the
          business&rsquo;s value. This guide covers pre-closing and
          post-closing strategies to retain the people who make the
          business work.
        </p>

        <h2 className={h2Class}>Understanding post-acquisition flight risk</h2>
        <ul className={ulClass}>
          <li><strong>Industry average:</strong> 15&ndash;25% of employees leave within the first year after an acquisition. For key employees, the risk is 10&ndash;15%</li>
          <li><strong>Primary driver:</strong> Uncertainty. People leave because they don&rsquo;t know what will happen, not because something bad has happened</li>
          <li><strong>Timing:</strong> Most voluntary departures occur in months 2&ndash;6 post-close (after the initial shock fades and they start evaluating alternatives)</li>
          <li><strong>Cost:</strong> Replacing a key employee costs 1&ndash;2x their annual salary in direct costs (recruiting, training) plus incalculable relationship and knowledge loss</li>
        </ul>

        <h2 className={h2Class}>Pre-closing retention strategies</h2>

        <h3 className={h3Class}>During due diligence</h3>
        <ul className={ulClass}>
          <li><strong>Identify the critical 5:</strong> During{" "}
            <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">
              operational DD
            </Link>,
            identify the 3&ndash;5 employees the business absolutely cannot lose</li>
          <li><strong>Assess flight risk:</strong> Ask the seller about each key employee&rsquo;s tenure, compensation, job satisfaction, and personal situation (relocating spouse, approaching retirement, etc.)</li>
          <li><strong>Understand compensation gaps:</strong> Are key employees paid at, above, or below market? Underpaid employees are flight risks</li>
          <li><strong>Review non-competes:</strong> Do key employees have enforceable non-compete agreements? If not, their departure could become a competitive threat</li>
        </ul>

        <h3 className={h3Class}>At closing</h3>
        <ul className={ulClass}>
          <li><strong>Retention bonuses:</strong> For the 3&ndash;5 most critical employees, offer retention bonuses of 15&ndash;50% of annual salary, paid in installments over 12&ndash;24 months</li>
          <li><strong>Compensation adjustments:</strong> If key employees are underpaid, raise their compensation at closing. This signals investment and commitment</li>
          <li><strong>New employment agreements:</strong> Formal agreements with clear roles, compensation, and growth paths reduce uncertainty</li>
          <li><strong>Non-compete refresh:</strong> Include updated non-compete and non-solicitation agreements as part of new employment terms (check enforceability by jurisdiction)</li>
        </ul>

        <h2 className={h2Class}>Post-closing retention strategies</h2>

        <h3 className={h3Class}>First 90 days</h3>
        <ul className={ulClass}>
          <li><strong>Communicate constantly:</strong> Weekly team meetings, monthly all-hands, frequent informal check-ins. Silence breeds anxiety and rumors</li>
          <li><strong>Listen more than you change:</strong> The{" "}
            <Link href="/learn/building-trust-inherited-teams" className="text-apple-accent hover:underline">
              trust-building
            </Link>{" "}
            process requires patience. Don&rsquo;t change things until you understand them</li>
          <li><strong>Honor all commitments:</strong> Any promise made by the seller (raises, promotions, time off) must be honored by the new owner</li>
          <li><strong>Quick wins:</strong> Fix things that annoy the team. A new coffee machine, repaired equipment, or improved break room shows you care. See{" "}
            <Link href="/learn/quick-wins-post-acquisition" className="text-apple-accent hover:underline">
              quick wins guide
            </Link></li>
        </ul>

        <h3 className={h3Class}>Months 3&ndash;12</h3>
        <ul className={ulClass}>
          <li><strong>Career development plans:</strong> Create written development plans for key employees. Most SME employees have never had this conversation</li>
          <li><strong>Equity or profit-sharing:</strong> For the top 3&ndash;5 people, implement a profit-sharing plan, phantom equity, or performance bonus program tied to company results</li>
          <li><strong>Title and responsibility expansion:</strong> Promote from within. Giving a long-tenured employee a &ldquo;Director&rdquo; title costs nothing and signals opportunity</li>
          <li><strong>Training and development:</strong> Invest in professional development. Send managers to leadership training, send technicians to certification courses</li>
          <li><strong>Improve benefits:</strong> Health insurance upgrades, dental/vision coverage, 401(k) matching, PTO expansion &mdash; these are high-impact, moderate-cost retention tools</li>
        </ul>

        <h2 className={h2Class}>Retention economics: the math</h2>
        <ul className={ulClass}>
          <li><strong>Example:</strong> A $2M EBITDA business has a key operations manager earning $85K/year</li>
          <li><strong>Retention package:</strong> $15K raise + $25K retention bonus over 24 months = $52.5K total annual cost</li>
          <li><strong>Risk without retention:</strong> Losing this manager could result in $200K&ndash;$500K in productivity loss, customer disruption, and recruiting costs</li>
          <li><strong>ROI:</strong> $52.5K to prevent $200K+ of damage = 4&ndash;10x return on retention investment</li>
          <li><strong>Rule of thumb:</strong> Budget 2&ndash;5% of EBITDA ($40K&ndash;$100K for a $2M EBITDA business) for retention packages in the first year</li>
        </ul>

        <h2 className={h2Class}>When people still leave</h2>
        <ul className={ulClass}>
          <li><strong>Don&rsquo;t panic:</strong> Some turnover is natural, and not all departures are losses. Underperformers who self-select out save you a difficult conversation</li>
          <li><strong>Exit interviews:</strong> When someone leaves, understand why. Patterns in exit feedback reveal systemic issues</li>
          <li><strong>Succession depth:</strong> For every critical role, identify at least one internal backup. Cross-train proactively</li>
          <li><strong>Recruit continuously:</strong> Don&rsquo;t wait for vacancies. Build a pipeline of potential hires through industry networking and referrals</li>
        </ul>

        <h2 className={h2Class}>Special cases</h2>
        <ul className={ulClass}>
          <li><strong>Seller&rsquo;s family members:</strong> If the seller&rsquo;s children or relatives work in the business, handle with extreme care. They may feel ownership entitlement or resentment about the sale</li>
          <li><strong>Long-tenured employees:</strong> Someone who&rsquo;s been there 20+ years has institutional knowledge worth millions. Treat them accordingly</li>
          <li><strong>Top salespeople:</strong> If a salesperson controls key customer relationships, they have leverage. Prioritize{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              diversifying those relationships
            </Link>{" "}
            while keeping the salesperson engaged</li>
        </ul>

        <p>
          Retention is a key component of your{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days plan
          </Link>.
          For the complete people strategy, see{" "}
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
            management transition
          </Link>{" "}
          and{" "}
          <Link href="/learn/building-trust-inherited-teams" className="text-apple-accent hover:underline">
            building trust with inherited teams
          </Link>.
        </p>
      </div>
    </article>
  );
}
