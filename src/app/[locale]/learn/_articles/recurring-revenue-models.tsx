import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function RecurringRevenueModelsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Recurring Revenue Models: Why Acquirers Pay a Premium
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Recurring revenue is the single most valuable characteristic
          a business can have from an acquisition perspective. Businesses
          with strong recurring revenue command higher{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            EBITDA multiples
          </Link>,
          are easier to finance, and provide more predictable post-acquisition
          cash flows. This guide explains the types of recurring revenue,
          how they affect{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valuation
          </Link>,
          and what to look for in due diligence.
        </p>

        <h2 className={h2Class}>The recurring revenue spectrum</h2>
        <p>
          Not all revenue recurs with the same predictability. From most
          to least reliable:
        </p>

        <h3 className={h3Class}>Tier 1: Contractual recurring revenue</h3>
        <ul className={ulClass}>
          <li><strong>SaaS subscriptions:</strong> Monthly/annual software subscriptions with 90&ndash;95%+ net revenue retention. The gold standard ({" "}
            <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
              SaaS playbook
            </Link>)</li>
          <li><strong>Long-term service contracts:</strong> Multi-year maintenance agreements, managed IT services, facilities management</li>
          <li><strong>Government contracts:</strong> Multi-year awarded contracts with high renewal rates</li>
          <li><strong>Insurance renewals:</strong> 85&ndash;95% annual renewal rates ({" "}
            <Link href="/learn/financial-services-acquisition" className="text-apple-accent hover:underline">
              insurance playbook
            </Link>)</li>
          <li><strong>Valuation premium:</strong> 1&ndash;3x additional EBITDA multiple vs. non-recurring peers</li>
        </ul>

        <h3 className={h3Class}>Tier 2: Repeat/habitual revenue</h3>
        <ul className={ulClass}>
          <li><strong>Maintenance contracts:</strong> HVAC service agreements, elevator maintenance, pest control ({" "}
            <Link href="/learn/acquiring-hvac-business" className="text-apple-accent hover:underline">
              HVAC playbook
            </Link>)</li>
          <li><strong>Consumables:</strong> Recurring purchases of supplies, chemicals, parts (e.g., dental supplies, janitorial products)</li>
          <li><strong>Retainer-based services:</strong> Legal, accounting, consulting retainers renewed annually</li>
          <li><strong>Valuation premium:</strong> 0.5&ndash;1.5x additional EBITDA multiple</li>
        </ul>

        <h3 className={h3Class}>Tier 3: Repeat but discretionary</h3>
        <ul className={ulClass}>
          <li><strong>Project-based with repeat clients:</strong> Engineering firms, marketing agencies, custom manufacturing</li>
          <li><strong>Seasonal services:</strong> Landscaping, snow removal, pool maintenance</li>
          <li><strong>Reorder-based:</strong> E-commerce brands with high repeat purchase rates</li>
          <li><strong>Valuation:</strong> Standard multiples (no recurring premium)</li>
        </ul>

        <h3 className={h3Class}>Tier 4: Non-recurring</h3>
        <ul className={ulClass}>
          <li><strong>One-time projects:</strong> Construction, event planning, custom installations</li>
          <li><strong>Transaction-based:</strong> Real estate commissions, one-time product sales</li>
          <li><strong>Valuation discount:</strong> 0.5&ndash;1x lower EBITDA multiple due to revenue unpredictability</li>
        </ul>

        <h2 className={h2Class}>Key metrics for recurring revenue businesses</h2>
        <ul className={ulClass}>
          <li><strong>ARR (Annual Recurring Revenue):</strong> The annualized value of all active recurring contracts. The most important top-line metric for subscription businesses</li>
          <li><strong>MRR (Monthly Recurring Revenue):</strong> ARR / 12. Useful for tracking monthly momentum</li>
          <li><strong>Net Revenue Retention (NRR):</strong> Measures expansion minus churn. NRR above 100% means the business grows even without new customers. Best-in-class SaaS: 110&ndash;130%</li>
          <li><strong>Gross Revenue Retention (GRR):</strong> Revenue retained from existing customers (excluding expansion). Target: 85%+ for SaaS, 80%+ for service businesses</li>
          <li><strong>Customer Churn Rate:</strong> Percentage of customers lost per period. Target: &lt;5% annually for B2B, &lt;10% for B2C</li>
          <li><strong>Logo churn vs. revenue churn:</strong> Revenue churn may differ significantly from logo churn if you&rsquo;re losing small customers but retaining (and expanding) large ones</li>
          <li><strong>Customer Lifetime Value (LTV):</strong> Average revenue per customer &times; average customer lifespan. Target: LTV &gt; 3x Customer Acquisition Cost (CAC)</li>
        </ul>

        <h2 className={h2Class}>Recurring revenue and acquisition financing</h2>
        <p>
          Recurring revenue directly impacts your ability to finance the
          acquisition:
        </p>
        <ul className={ulClass}>
          <li><strong>Higher leverage:</strong> Lenders extend more debt (3&ndash;5x EBITDA) for businesses with 70%+ recurring revenue vs. 2&ndash;3x for non-recurring</li>
          <li><strong>Better terms:</strong> Lower interest rates and more flexible covenants for predictable cash flows</li>
          <li><strong>SBA eligibility:</strong>{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA lenders
            </Link>{" "}
            strongly prefer businesses with recurring or contractual revenue</li>
          <li><strong>Debt service coverage:</strong> Recurring revenue makes it easier to project and ensure 1.25x+ DSCR</li>
        </ul>

        <h2 className={h2Class}>Due diligence for recurring revenue</h2>
        <p>
          During{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>,
          validate the recurring revenue quality:
        </p>
        <ul className={ulClass}>
          <li><strong>Contract review:</strong> Read every material customer contract. Check auto-renewal terms, termination provisions, and pricing escalation clauses</li>
          <li><strong>Cohort analysis:</strong> Analyze customer retention by year of acquisition — are older cohorts retaining at the same rate as newer ones?</li>
          <li><strong>Revenue decomposition:</strong> Break total revenue into recurring vs. non-recurring components. Calculate the true recurring percentage</li>
          <li><strong>Concentration within recurring base:</strong> Even recurring revenue businesses can have{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration risk
            </Link>{" "}
            if a few large contracts dominate</li>
          <li><strong>Pricing power:</strong> Has the business been able to raise prices? Recurring customers who accept annual price increases demonstrate true switching costs</li>
          <li><strong>At-risk contracts:</strong> Identify any contracts expiring within 6&ndash;12 months of closing. These may not renew under new ownership</li>
        </ul>

        <h2 className={h2Class}>Building recurring revenue post-acquisition</h2>
        <p>
          If you acquire a business with low recurring revenue, there are
          strategies to build it:
        </p>
        <ul className={ulClass}>
          <li><strong>Convert one-time to recurring:</strong> Offer maintenance contracts alongside one-time sales (e.g., HVAC installation → maintenance agreement)</li>
          <li><strong>Introduce subscriptions:</strong> Repackage existing services as subscription offerings</li>
          <li><strong>Service level agreements:</strong> Formalize informal repeat relationships into contractual commitments</li>
          <li><strong>Consumable + service bundles:</strong> Bundle recurring supply orders with periodic service visits</li>
          <li><strong>Technology enablement:</strong> Use software to automate recurring billing, reminders, and renewals</li>
        </ul>
        <p>
          Increasing recurring revenue from 20% to 60% of total can
          increase the business&rsquo;s exit multiple by 1&ndash;2x
          EBITDA — one of the most powerful value creation levers
          available to search fund CEOs. For growth strategies, see our{" "}
          <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">
            revenue growth playbook
          </Link>.
        </p>
      </div>
    </article>
  );
}
