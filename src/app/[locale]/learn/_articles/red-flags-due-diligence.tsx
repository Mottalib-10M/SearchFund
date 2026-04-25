import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function RedFlagsDueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Red Flags in Due Diligence: When to Walk Away
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Due diligence is designed to uncover risk before you commit
          millions of dollars. But knowing which findings are
          negotiable, which require price adjustments, and which should
          kill the deal is one of the hardest judgment calls in business
          acquisition. This guide catalogs the most common red flags
          across financial, operational, legal, and cultural due
          diligence, with guidance on when to renegotiate and when
          to walk away.
        </p>

        <h2 className={h2Class}>Financial red flags</h2>

        <h3 className={h3Class}>Earnings quality</h3>
        <ul className={ulClass}>
          <li>
            <strong>
              <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
                Adjusted EBITDA
              </Link>{" "}
              add-backs exceeding 40% of reported EBITDA:
            </strong>{" "}
            The business is being sold on adjustments, not earnings. Walk away or demand a steep discount
          </li>
          <li><strong>Declining revenue trend masked by one-time items:</strong> If the business is shrinking and the seller is using add-backs to create flat or growing EBITDA, the underlying trajectory is negative</li>
          <li><strong>Cash on books doesn&rsquo;t match reported profits:</strong> If the business reports strong profits but has no cash, earnings may be non-cash or inflated</li>
          <li><strong>Tax returns materially disagree with internal financials:</strong> Tax returns are filed under penalty of perjury. If the P&amp;L shows $1.5M EBITDA but tax returns show $800K taxable income with no clear explanation, the P&amp;L may be inflated</li>
          <li><strong>&ldquo;One-time&rdquo; expenses every year:</strong> If every year has a different one-time expense, the real recurring EBITDA is lower than presented</li>
        </ul>

        <h3 className={h3Class}>Revenue red flags</h3>
        <ul className={ulClass}>
          <li><strong>Declining year-over-year revenue (3+ years):</strong> A structural decline is very difficult to reverse post-acquisition</li>
          <li><strong>Revenue spikes before the sale process:</strong> Sudden revenue increases right before listing may indicate channel stuffing or one-time contract wins positioned as recurring</li>
          <li>
            <strong>High{" "}
              <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
                customer concentration
              </Link>:
            </strong>{" "}
            A single customer above 30% of revenue is a material risk
          </li>
          <li><strong>Significant cash revenue:</strong> Cash-heavy businesses (restaurants, retail, services) may have unreported income, which you can&rsquo;t legally count or finance against</li>
        </ul>

        <h3 className={h3Class}>Working capital and cash flow</h3>
        <ul className={ulClass}>
          <li><strong>Negative working capital trend:</strong> Payables growing faster than receivables, inventory buildup without revenue growth</li>
          <li><strong>Capex starvation:</strong> If the business has been underinvesting in equipment, technology, or facilities to inflate EBITDA, you&rsquo;ll need to make significant investments post-close</li>
          <li><strong>Off-balance sheet liabilities:</strong> Unfunded pension obligations, operating lease commitments, or personal guarantees of the owner</li>
        </ul>

        <h2 className={h2Class}>Operational red flags</h2>

        <h3 className={h3Class}>People and management</h3>
        <ul className={ulClass}>
          <li><strong>Key employee departures (recent or announced):</strong> If 2-3 key people have left or plan to leave, the transition will be exceptionally difficult</li>
          <li><strong>Owner-dependent customer relationships:</strong> If the owner personally manages the top 5 customers and those customers are loyal to the person, not the company</li>
          <li><strong>No middle management layer:</strong> If the owner makes every decision and there&rsquo;s no management team, you&rsquo;re buying a job, not a business</li>
          <li><strong>Employee morale issues:</strong> High turnover, Glassdoor complaints, pending labor disputes</li>
          <li><strong>Compensation materially below market:</strong> Key employees may leave as soon as they learn about the ownership change (or before)</li>
        </ul>

        <h3 className={h3Class}>Systems and processes</h3>
        <ul className={ulClass}>
          <li><strong>No documented processes:</strong> Everything is in the owner&rsquo;s head. Transition risk is extreme</li>
          <li><strong>Outdated technology:</strong> Legacy systems that need immediate replacement (budget $100K-$500K+)</li>
          <li><strong>No CRM or customer data:</strong> You can&rsquo;t analyze customer behavior, retention, or lifetime value without data</li>
          <li><strong>Compliance gaps:</strong> Missing licenses, expired permits, unresolved regulatory issues</li>
        </ul>

        <h2 className={h2Class}>Legal red flags</h2>
        <ul className={ulClass}>
          <li><strong>Active or threatened litigation:</strong> Especially employment lawsuits, customer disputes, or personal injury claims</li>
          <li><strong>Environmental contamination:</strong> Phase I environmental assessment reveals potential contamination requiring Phase II testing or remediation</li>
          <li><strong>Unclear IP ownership:</strong> Key intellectual property created by contractors without proper assignment, or trade secrets with no protection</li>
          <li><strong>Unfavorable lease terms:</strong> Above-market rent, short remaining term with no renewal option, or landlord who won&rsquo;t consent to assignment</li>
          <li><strong>Unresolved tax issues:</strong> IRS or state tax liens, unfiled returns, or ongoing audits</li>
          <li><strong>Non-transferable contracts:</strong> Key customer or vendor contracts with change-of-control provisions that allow termination</li>
          <li><strong>Workers&rsquo; comp issues:</strong> High Experience Modification Rate (EMR) indicating a pattern of workplace injuries</li>
        </ul>

        <h2 className={h2Class}>Cultural and behavioral red flags</h2>
        <ul className={ulClass}>
          <li><strong>Seller is evasive or unresponsive:</strong> Slow responses to DD requests, vague answers, or refusal to provide specific documents</li>
          <li><strong>Moving goalposts:</strong> Price increases after LOI, changing deal terms, adding conditions</li>
          <li><strong>Seller hasn&rsquo;t told employees:</strong> If key employees don&rsquo;t know the business is for sale and the seller refuses to allow pre-closing introductions</li>
          <li><strong>Spouse or partner opposition:</strong> If the seller&rsquo;s family isn&rsquo;t aligned, the deal is at high risk of falling apart at closing. See our{" "}
            <Link href="/learn/seller-psychology" className="text-apple-accent hover:underline">
              seller psychology
            </Link>{" "}
            guide</li>
          <li><strong>Gut feeling:</strong> If something feels fundamentally wrong about the seller or the business, trust your instincts. The best acquirers are disciplined about walking away</li>
        </ul>

        <h2 className={h2Class}>When to renegotiate vs. walk away</h2>

        <h3 className={h3Class}>Renegotiate (fixable with price/structure)</h3>
        <ul className={ulClass}>
          <li>EBITDA is lower than presented (adjust purchase price to reflect validated EBITDA)</li>
          <li>Moderate customer concentration (use{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-outs
            </Link>{" "}
            tied to customer retention)</li>
          <li>Deferred maintenance (reduce price by the estimated investment needed)</li>
          <li>One or two legal issues with quantifiable risk (escrow or holdback to cover potential exposure)</li>
          <li>Key employee flight risk (negotiate retention bonuses or non-competes)</li>
        </ul>

        <h3 className={h3Class}>Walk away (unfixable or too risky)</h3>
        <ul className={ulClass}>
          <li>Seller is dishonest (if they lied about one thing, they lied about more)</li>
          <li>Fundamental revenue decline that you cannot credibly reverse</li>
          <li>Unquantifiable legal exposure (environmental contamination, pattern of lawsuits)</li>
          <li>Owner IS the business (no transferable systems, relationships, or processes)</li>
          <li>Extreme customer concentration (&gt;40% single customer) with no contractual protection</li>
          <li>Regulatory or compliance issues that could result in license revocation</li>
          <li>The deal only works with aggressive growth assumptions (if it doesn&rsquo;t work at current run-rate, it doesn&rsquo;t work)</li>
        </ul>

        <h2 className={h2Class}>The sunk cost trap</h2>
        <p>
          By the time red flags emerge, you&rsquo;ve invested months of
          time and tens of thousands in DD costs. The temptation to
          &ldquo;make it work&rdquo; is powerful. But this is exactly
          the{" "}
          <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
            trap that causes search fund failures
          </Link>.
          Walking away from a bad deal is not a failure , 
          it&rsquo;s the single most value-protective action an acquirer
          can take.
        </p>
        <p>
          As one experienced search fund investor puts it: &ldquo;The
          deals you don&rsquo;t do are more important than the deals
          you do.&rdquo; For the complete{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence checklist
          </Link>,
          see our thorough guide.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What percentage of deals fall apart during due diligence?</h3>
        <p>
          According to the Stanford GSB 2024 Search Fund Study,
          approximately 30-40% of signed LOIs do not result in closed
          acquisitions, with due diligence findings being the primary reason.
          The most common deal-killers are financial misrepresentation
          (EBITDA lower than presented), undisclosed liabilities, customer
          concentration risk that emerges during customer interviews, and
          seller behavior issues (evasiveness, changing terms). Walking away
          from a bad deal is a sign of discipline, not failure.
        </p>

        <h3 className={h3Class}>How do I distinguish a red flag from a normal finding?</h3>
        <p>
          Normal findings can be addressed through price adjustments,
          structural protections, or post-closing action plans. Red flags
          are issues that fundamentally undermine the investment thesis or
          indicate dishonesty. Key distinction: if the issue can be
          quantified and mitigated through escrow, holdback, or purchase
          price reduction, it is a finding. If the issue is unquantifiable,
          suggests systemic problems, or reveals seller dishonesty, it is
          a red flag warranting a walk-away.
        </p>

        <h3 className={h3Class}>Should I hire a professional QoE firm or do financial diligence myself?</h3>
        <p>
          For any acquisition above $1M in enterprise value, engage a
          professional{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings
          </Link>{" "}
          provider. QoE firms typically catch 10-30% of add-backs
          as unsupported, and lenders require a QoE for loan underwriting.
          The cost ($15K-$50K) is a fraction of the overpayment
          risk it prevents. Do your own preliminary analysis from the
          CIM and raw financials first, then engage the QoE firm to
          validate and dig deeper.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>2024 Search Fund Study: Selected Observations</em> (2024)</li>
          <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
          <li>American Bar Association, <em>Model Asset Purchase Agreement with Commentary</em> (2023)</li>
        </ul>
      </div>
    </article>
  );
}
