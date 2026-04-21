import Link from "next/link";
import { h1Class, h2Class, bodyClass, ulClass } from "./shared-styles";

export default function DueDiligenceArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA Due Diligence Checklist</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          Due diligence is the most critical phase of any search fund
          acquisition. It begins after you sign a <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">Letter of Intent</Link> and
          covers every area you need to investigate before signing a purchase agreement.
        </p>

        <p>
          The goal of due diligence is not to confirm what the seller has told
          you — it is to independently verify every material claim about the
          business and uncover risks that may not be visible from the outside.
          Thorough due diligence protects you, your investors, and your
          lender. It also gives you the operational playbook you will need
          from day one as the new owner.
        </p>

        <h2 className={h2Class}>Financial due diligence</h2>
        <ul className={ulClass}>
          <li>3-5 years of audited financial statements (P&L, balance sheet, cash flow).</li>
          <li><Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">Quality of earnings (QoE) analysis</Link> — separate recurring vs. non-recurring items.</li>
          <li>Revenue breakdown by customer, product/service, and geography.</li>
          <li>Customer concentration analysis (top 10 customers as % of revenue).</li>
          <li>Working capital analysis and seasonal patterns.</li>
          <li>Capital expenditure history and future requirements.</li>
          <li>Debt schedule, covenants, and off-balance-sheet liabilities.</li>
          <li>Owner add-backs and normalization adjustments to EBITDA — see <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">business valuation methods</Link> for how these affect pricing.</li>
          <li>Tax returns and any ongoing disputes with tax authorities.</li>
        </ul>

        <p>
          The financial due diligence workstream deserves special attention
          because it directly affects your purchase price, debt capacity, and
          post-close cash flow. Here are the critical sub-analyses you should
          perform.
        </p>

        <p>
          <strong>Quality of Earnings (QoE) analysis.</strong> A QoE is the
          single most important financial deliverable. Typically conducted by
          a third-party accounting firm, the QoE independently verifies the
          company&apos;s adjusted EBITDA by examining every add-back the
          seller has claimed. A good QoE firm will also identify adjustments
          the seller did not make — both positive and negative. Expect to
          spend $30,000 to $60,000 on a QoE for a typical search fund
          acquisition. This is not the place to cut costs. Your SBA lender
          will almost certainly require a QoE, and your investors will expect
          one.
        </p>

        <p>
          <strong>Revenue quality analysis.</strong> Not all revenue is created
          equal. Break down the company&apos;s revenue along every dimension
          you can: by customer, by product or service line, by geography, by
          contract type (recurring vs. project-based vs. transactional), and
          by vintage (new customers vs. existing). Look for trends in customer
          retention rates, average revenue per customer, and the mix shift
          between higher-margin and lower-margin lines. If the company has
          grown revenue but the growth is concentrated in a lower-margin
          service line, the headline number may be misleading.
        </p>

        <p>
          <strong>Customer concentration.</strong> This is one of the most
          common deal-killers in search fund acquisitions. If any single
          customer represents more than 15-20% of revenue, you face
          meaningful risk that the loss of that customer could impair the
          business. Conduct direct interviews with the top 5-10 customers to
          assess the strength and durability of those relationships. Understand
          the contractual terms, renewal cadence, and switching costs from
          each major customer&apos;s perspective. Many experienced search
          fund investors will not back an acquisition where a single customer
          represents more than 25% of revenue.
        </p>

        <p>
          <strong>Working capital analysis.</strong> Working capital — the
          difference between current assets and current liabilities — is
          often overlooked during deal negotiations but has significant
          implications for your post-close cash position. Analyze the
          seasonal patterns in accounts receivable, inventory, and accounts
          payable. Establish a target working capital peg (typically the
          trailing 12-month average) and negotiate that the seller delivers
          the business with at least that level of working capital at closing.
          Deviations from the peg should result in dollar-for-dollar purchase
          price adjustments.
        </p>

        <h2 className={h2Class}>Legal due diligence</h2>
        <ul className={ulClass}>
          <li>Corporate formation documents, bylaws, and shareholder agreements.</li>
          <li>All material contracts (customers, suppliers, leases, licenses).</li>
          <li>Intellectual property — patents, trademarks, trade secrets, software licenses.</li>
          <li>Pending or threatened litigation and historical legal disputes.</li>
          <li>Regulatory compliance and industry-specific permits/licenses.</li>
          <li>Environmental liabilities and compliance history.</li>
          <li>Insurance policies and claims history.</li>
        </ul>

        <p>
          Legal due diligence should be led by experienced M&A counsel — not
          your family attorney or general corporate lawyer. A specialized M&A
          attorney knows exactly what to look for and can flag risks that a
          generalist would miss. Here are the areas that require the deepest
          scrutiny.
        </p>

        <p>
          <strong>Contract review.</strong> Request copies of every material
          contract the business has with customers, suppliers, landlords,
          and partners. Pay particular attention to change-of-control clauses
          that could allow counterparties to terminate or renegotiate
          agreements upon a sale of the business. Also look for exclusivity
          provisions, non-compete restrictions, and auto-renewal terms that
          could limit your operational flexibility post-acquisition.
        </p>

        <p>
          <strong>Litigation risk.</strong> Beyond current lawsuits, ask
          about threatened litigation, demand letters, and regulatory
          inquiries the company has received in the past five years. Request
          copies of all correspondence with regulatory agencies. If the
          business operates in a litigious industry (healthcare, construction,
          environmental services), consider hiring a specialist to assess the
          potential exposure. Material litigation risk should be reflected in
          either the purchase price or through indemnification provisions in
          the purchase agreement.
        </p>

        <p>
          <strong>Employment agreements and HR compliance.</strong> Review
          all employment agreements, especially those with key employees.
          Check for non-compete and non-solicitation clauses that might be
          assigned to you as the buyer. Verify compliance with wage and hour
          laws, proper classification of independent contractors vs.
          employees, and the status of any employee benefits plans (especially
          retirement plans, which can carry hidden liabilities). In the
          US, ensure COBRA, ADA, and FMLA compliance; in Europe, review
          works council requirements and collective bargaining agreements.
        </p>

        <p>
          <strong>Environmental and regulatory.</strong> For businesses with
          physical operations — manufacturing, distribution, food service —
          environmental liabilities can be enormous and hidden. Request a
          Phase I environmental site assessment for any real estate included
          in the transaction. Review the company&apos;s history of
          environmental permits, violations, and remediation efforts.
          In regulated industries, verify that all licenses and permits
          are current and transferable.
        </p>

        <h2 className={h2Class}>Operational due diligence</h2>
        <ul className={ulClass}>
          <li>Organizational chart and key employee identification.</li>
          <li>Employee contracts, benefits, and compensation structures.</li>
          <li>Key person dependencies — what happens if critical staff leave?</li>
          <li>Technology stack, IT infrastructure, and cybersecurity posture.</li>
          <li>Facilities, equipment condition, and lease terms.</li>
          <li>Supply chain dependencies and vendor relationships.</li>
          <li>Quality management systems and certifications (ISO, etc.).</li>
        </ul>

        <p>
          Operational due diligence is where you build the knowledge base
          you will need to run the business from day one. While financial
          and legal diligence are largely outsourced to professionals, you
          should personally lead the operational workstream.
        </p>

        <p>
          <strong>Key person risk.</strong> In small businesses, institutional
          knowledge and critical relationships are often concentrated in one
          or two individuals — sometimes including the departing owner. Map
          out every key function (sales, operations, finance, IT) and
          identify who holds the institutional knowledge for each. Develop
          a retention plan for critical employees that includes stay bonuses,
          equity incentives, or enhanced benefits. If you determine that a
          key employee is a flight risk, factor the cost of replacement and
          business disruption into your valuation.
        </p>

        <p>
          <strong>Technology and systems.</strong> Evaluate the company&apos;s
          technology infrastructure with a critical eye. Is the ERP system
          modern and well-maintained, or is the company running critical
          operations on spreadsheets and legacy software? What is the state
          of their cybersecurity — do they have proper backup systems,
          access controls, and incident response plans? Technology
          modernization is a common post-acquisition value creation lever,
          but it can also be a significant unplanned expense if the current
          systems are more fragile than they appear.
        </p>

        <p>
          <strong>Facility and equipment condition.</strong> Conduct physical
          inspections of all facilities and major equipment. Engage
          specialists (building inspectors, equipment appraisers) for
          capital-intensive businesses. Deferred maintenance is common in
          owner-operated businesses where the seller has been minimizing
          investment in anticipation of a sale. Document any deferred capex
          and factor it into your post-close capital plan.
        </p>

        <p>
          <strong>Supply chain and vendor dependencies.</strong> Identify the
          company&apos;s critical suppliers and assess the risk of disruption.
          Are there single-source dependencies? What are the lead times for
          key inputs? Interview major suppliers to understand the health of
          the relationship and their capacity to support the business going
          forward. In a post-COVID world, supply chain resilience is no
          longer a theoretical concern.
        </p>

        <h2 className={h2Class}>Commercial due diligence</h2>
        <ul className={ulClass}>
          <li>Market size, growth trends, and competitive landscape.</li>
          <li>Customer interviews — satisfaction, switching costs, contract renewal rates.</li>
          <li>Sales pipeline and new business development process.</li>
          <li>Pricing power and margin sustainability.</li>
          <li>Competitive moat — what makes this business defensible?</li>
          <li>Growth opportunities — organic expansion, add-on acquisitions, new markets.</li>
        </ul>

        <p>
          Commercial due diligence validates the business&apos;s market
          position and growth prospects. This is where you test the thesis
          that the business will continue to generate strong cash flows under
          your ownership.
        </p>

        <p>
          <strong>Customer interviews.</strong> Direct conversations with
          customers are the most valuable source of commercial insight. Aim
          to speak with 10-20 customers, including the largest accounts,
          recent wins, recent losses, and long-tenured relationships. Ask
          about their satisfaction with the product or service, what would
          cause them to switch to a competitor, whether they plan to increase
          or decrease spending, and how they perceive the company relative to
          alternatives. These conversations often surface competitive
          dynamics and risks that do not appear in the financial statements.
        </p>

        <p>
          <strong>Market size and competitive landscape.</strong> Understand
          the total addressable market and the company&apos;s share of it.
          Map out the competitive landscape, including both direct
          competitors and potential disruptors. For niche businesses, the
          competitive analysis may be more about barriers to entry (licensing,
          relationships, specialization) than about head-to-head competition.
          If you plan to grow through geographic expansion or adjacent
          services, validate the size of those opportunities through market
          research and industry expert calls.
        </p>

        <h2 className={h2Class}>Cultural & transition due diligence</h2>
        <ul className={ulClass}>
          <li>Seller&apos;s motivation and timeline for transition.</li>
          <li>Company culture and employee morale assessment.</li>
          <li>Transition plan — how long will the seller stay to ensure continuity?</li>
          <li>Relationships with key stakeholders (customers, suppliers, community). Consider <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">working with advisors</Link> who specialize in transition management.</li>
          <li>Identify potential risks of ownership change on business relationships.</li>
        </ul>

        <h2 className={h2Class}>Timeline and cost of due diligence</h2>
        <p>
          A typical search fund due diligence process takes 45 to 60 days
          from LOI signing to purchase agreement execution. Some deals can
          be completed faster (30 days for simpler businesses), while
          complex transactions with environmental issues, regulatory
          approvals, or multi-entity structures can take 90 days or more.
        </p>

        <p>
          Budget $75,000 to $150,000 in professional fees for a comprehensive
          due diligence process. This typically breaks down as follows:
        </p>
        <ul className={ulClass}>
          <li><strong>Quality of Earnings (QoE):</strong> $30,000 - $60,000 depending on the complexity of the business and the accounting firm you engage.</li>
          <li><strong>Legal counsel:</strong> $25,000 - $50,000 for contract review, purchase agreement negotiation, and corporate structuring.</li>
          <li><strong>Environmental assessment:</strong> $5,000 - $15,000 for a Phase I assessment; significantly more if a Phase II is required.</li>
          <li><strong>Insurance review:</strong> $2,000 - $5,000 for a comprehensive analysis of existing coverage and reps & warranties insurance.</li>
          <li><strong>Specialty consultants:</strong> $5,000 - $20,000 for IT assessments, equipment appraisals, or industry expert calls as needed.</li>
        </ul>

        <p>
          These costs are typically funded from the search capital budget,
          though some investors will agree to fund excess diligence costs
          separately if the deal is compelling. Keep in mind that if the deal
          falls apart during diligence, these costs are sunk — another
          reason to be rigorous in your pre-LOI screening so you only enter
          diligence on deals with a high probability of closing.
        </p>

        <h2 className={h2Class}>Red flags that should kill a deal</h2>
        <p>
          Not every issue uncovered in due diligence is a deal-breaker. Many
          findings can be addressed through purchase price adjustments,
          seller indemnification, or post-close operational plans. However,
          certain red flags should cause you to walk away from a deal
          entirely.
        </p>
        <ul className={ulClass}>
          <li><strong>Financial fraud or material misrepresentation.</strong> If the seller has intentionally misrepresented financial performance — inflating revenue, hiding liabilities, or fabricating customers — walk away immediately. If they lied during the courtship, they will lie during the transition.</li>
          <li><strong>Irreversible customer concentration.</strong> If a single customer represents 40%+ of revenue and there is no realistic path to diversification, the risk is too high for a leveraged acquisition. The loss of that customer could leave you unable to service your debt.</li>
          <li><strong>Undisclosed litigation or regulatory exposure.</strong> Material legal liabilities that the seller failed to disclose in the LOI process signal both financial risk and a broken trust relationship.</li>
          <li><strong>Key employee who will leave.</strong> If a mission-critical employee (the top salesperson, the operations manager who runs the floor) has indicated they will leave after the sale and cannot be retained, the business you are buying may not be the business you think it is.</li>
          <li><strong>Structural industry decline.</strong> If your commercial diligence reveals that the company&apos;s core market is in secular decline — not cyclical but structural — the business will require constant reinvention just to maintain revenue. This is the opposite of the stable, cash-generative business that the search fund model is designed for.</li>
          <li><strong>Toxic company culture.</strong> If employee interviews reveal widespread dissatisfaction, a culture of fear, or deep resentment toward the owner, you will face an uphill battle from day one. Culture problems take years to fix and cause attrition in the meantime.</li>
          <li><strong>Environmental contamination.</strong> If a Phase I assessment identifies recognized environmental conditions that require remediation, the cost can be six or seven figures. Unless the seller is willing to fully indemnify and escrow funds for remediation, walk away.</li>
        </ul>

        <p>
          Remember: the purpose of due diligence is to give you the
          information you need to make a fully informed decision. Walking
          away from a deal after spending $75,000 on diligence is painful,
          but it is far less painful than acquiring a business with hidden
          problems that impair your ability to service debt, pay your
          employees, and generate returns for your investors.
        </p>
      </div>
    </article>
  );
}
