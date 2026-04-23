import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function KeyPersonRiskArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Key Person Risk: Identifying &amp; Mitigating in Your First Year
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Every acquired business has 2&ndash;5 people whose departure
          would materially damage operations, revenue, or customer
          relationships. Identifying and mitigating key person risk is
          one of the most critical tasks during{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>{" "}
          and your{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days
          </Link>{" "}
          as CEO.
        </p>

        <h2 className={h2Class}>What is key person risk?</h2>
        <ul className={ulClass}>
          <li>A key person is anyone whose departure would cause &gt;10% revenue or operational disruption</li>
          <li>This can be the previous{" "}
            <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">
              owner
            </Link>, a top salesperson, a technical expert, or an operations manager</li>
          <li>Key person risk exists in every SME — the question is degree, not existence</li>
          <li>Unmitigated key person risk is a top-3 cause of value destruction post-acquisition</li>
        </ul>

        <h2 className={h2Class}>Identifying key persons during DD</h2>

        <h3 className={h3Class}>Revenue-critical persons</h3>
        <ul className={ulClass}>
          <li>Who manages the top 10 customer relationships?</li>
          <li>Is any salesperson responsible for &gt;20% of revenue?</li>
          <li>Would major customers leave if a specific person departed?</li>
          <li>Who signs the contracts and maintains ongoing relationships?</li>
        </ul>

        <h3 className={h3Class}>Operations-critical persons</h3>
        <ul className={ulClass}>
          <li>Who manages day-to-day operations when the owner is absent?</li>
          <li>Are there specialized skills that only one person possesses?</li>
          <li>Who trains new employees? Who manages quality control?</li>
          <li>Who holds key licenses or certifications required for the business?</li>
        </ul>

        <h3 className={h3Class}>Knowledge-critical persons</h3>
        <ul className={ulClass}>
          <li>Who knows the pricing formulas and cost structures?</li>
          <li>Who understands the technical systems and processes?</li>
          <li>Who holds the vendor relationships and negotiation history?</li>
          <li>Who knows the &ldquo;tribal knowledge&rdquo; — the unwritten rules, customer preferences, and seasonal patterns?</li>
        </ul>

        <h2 className={h2Class}>Assessing flight risk</h2>
        <ul className={ulClass}>
          <li><strong>Tenure:</strong> Long-tenured employees (&gt;10 years) are generally more stable but may be more set in their ways. Short-tenured employees (&lt;2 years) are more mobile</li>
          <li><strong>Compensation:</strong> Below-market compensation is the #1 predictor of departure. Review every key person&rsquo;s pay vs. market</li>
          <li><strong>Personal situation:</strong> Approaching retirement? Relocating spouse? Children starting college? Personal factors affect flight risk</li>
          <li><strong>Relationship with seller:</strong> If the key person is loyal to the seller (not the business), their departure risk is elevated</li>
          <li><strong>Market demand:</strong> Are their skills in high demand? Could a competitor hire them easily?</li>
          <li><strong>Non-compete status:</strong> Do they have an enforceable non-compete? If not, departure becomes a competitive threat</li>
        </ul>

        <h2 className={h2Class}>Mitigation strategies</h2>

        <h3 className={h3Class}>Pre-closing</h3>
        <ul className={ulClass}>
          <li><strong>Retention agreements:</strong> 15&ndash;50% of annual salary as a retention bonus, paid in installments over 12&ndash;24 months. See{" "}
            <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">
              retention strategies
            </Link></li>
          <li><strong>Compensation adjustment:</strong> If below market, raise pay at or before closing</li>
          <li><strong>New employment contracts:</strong> Updated contracts with clear roles, growth paths, and non-compete provisions</li>
          <li><strong>Deal structure adjustment:</strong> If key person risk is severe, negotiate a lower purchase price or earn-out tied to key person retention</li>
        </ul>

        <h3 className={h3Class}>Post-closing (months 1&ndash;6)</h3>
        <ul className={ulClass}>
          <li><strong>Relationship investment:</strong> Weekly 1:1 meetings with every key person. Understand their goals, concerns, and ambitions</li>
          <li><strong>Career development:</strong> Create written development plans. Expanded responsibilities, title upgrades, training investment</li>
          <li><strong>Equity or profit-sharing:</strong> For the top 3&ndash;5 people, consider phantom equity, profit-sharing, or performance bonuses tied to company results</li>
          <li><strong>Knowledge documentation:</strong> Systematically extract and document each key person&rsquo;s critical knowledge: processes, relationships, vendor terms, customer histories</li>
        </ul>

        <h3 className={h3Class}>Structural mitigation (months 6&ndash;18)</h3>
        <ul className={ulClass}>
          <li><strong>Cross-training:</strong> For every critical function, ensure at least 2 people can perform it</li>
          <li><strong>Process documentation:</strong> Convert institutional knowledge into written SOPs and training materials</li>
          <li><strong>Relationship diversification:</strong> Introduce multiple team members to key customers and vendors. No single person should &ldquo;own&rdquo; a critical relationship</li>
          <li><strong>System implementation:</strong> CRM, documented processes, and shared knowledge bases reduce dependency on any individual</li>
          <li><strong>Succession planning:</strong> Identify and develop internal successors for every critical role</li>
        </ul>

        <h2 className={h2Class}>When a key person leaves anyway</h2>
        <ul className={ulClass}>
          <li><strong>Don&rsquo;t panic:</strong> Businesses are more resilient than they appear. The short-term disruption is real but manageable</li>
          <li><strong>Activate your plan:</strong> If you&rsquo;ve been cross-training and documenting, the backup is ready</li>
          <li><strong>Communicate immediately:</strong> Tell the team, reassure customers, and contact vendors proactively</li>
          <li><strong>Recruit fast:</strong> For key roles, engage a recruiter within 48 hours of the departure announcement</li>
          <li><strong>Learn from it:</strong> Conduct an exit interview. Why did they leave? What could you have done differently?</li>
        </ul>

        <p>
          Key person risk assessment is a critical component of{" "}
          <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">
            operational due diligence
          </Link>.
          For the complete people strategy, see our{" "}
          <Link href="/learn/building-trust-inherited-teams" className="text-apple-accent hover:underline">
            building trust
          </Link>{" "}
          and{" "}
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">
            management transition
          </Link>{" "}
          guides.
        </p>
      </div>
    </article>
  );
}
