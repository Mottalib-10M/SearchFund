import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function QualityOfEarningsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Quality of Earnings (QoE) Analysis</h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          A Quality of Earnings analysis is the single most important piece of
          financial <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link> in any search fund acquisition. It separates
          real, sustainable cash flow from accounting noise, owner adjustments,
          and one-time anomalies. For deals in the $1M&ndash;$5M EBITDA range
          typical of search fund acquisitions, a well-executed QoE can be the
          difference between a great investment and a catastrophic one. This
          guide covers everything you need to know about commissioning,
          interpreting, and using a QoE report.
        </p>

        <h2 className={h2Class}>What a QoE report actually covers</h2>
        <p>
          A QoE is not an audit. An audit confirms that financial statements
          conform to GAAP or IFRS. A QoE goes further: it stress-tests the
          earnings to determine whether reported EBITDA is a reliable proxy for
          future cash flow. The analysis typically spans three to five years of
          financials and addresses several core areas.
        </p>

        <h3 className={h3Class}>Revenue quality</h3>
        <p>
          The QoE provider examines whether revenue is recurring, contractual,
          or project-based. Recurring revenue from multi-year contracts with
          90%+ retention is worth far more than one-time project revenue. The
          analysis segments revenue by customer, product line, geography, and
          contract type. It identifies trends such as declining average contract
          value, shrinking customer counts masked by a single large win, or
          revenue pulled forward through aggressive recognition policies.
        </p>
        <ul className={ulClass}>
          <li>
            Recurring vs. non-recurring revenue split and trend over three to
            five years.
          </li>
          <li>
            Revenue concentration: what percentage comes from the top 1, 5, and
            10 customers.
          </li>
          <li>
            Contract renewal rates, churn, and average remaining contract term.
          </li>
          <li>
            Revenue recognition policies and whether they comply with ASC 606
            or IFRS 15.
          </li>
          <li>
            Backlog analysis for project-based businesses, including win rates
            and pipeline health.
          </li>
        </ul>

        <h3 className={h3Class}>Expense normalization</h3>
        <p>
          Small business financials are notoriously messy. Owners run personal
          expenses through the business, pay themselves above or below market
          rate, and make discretionary spending decisions that would not
          continue under new ownership. A QoE normalizes these items to produce
          adjusted EBITDA, which is the number that actually matters for
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">valuation</Link>.
        </p>
        <ul className={ulClass}>
          <li>
            Owner compensation adjustment: if the owner pays themselves $500K
            but a market-rate replacement CEO costs $250K, that $250K difference
            is an add-back.
          </li>
          <li>
            Personal expenses run through the business: vehicles, travel,
            family member salaries for no-show jobs, club memberships, personal
            insurance.
          </li>
          <li>
            One-time expenses: lawsuit settlements, facility moves, ERP
            implementations, pandemic-related costs.
          </li>
          <li>
            Below-market rent if the business leases from a related party, or
            above-market if the owner inflated lease payments to a property they
            own.
          </li>
          <li>
            Deferred maintenance or capital expenditure: some owners cut
            spending in the years before a sale to inflate EBITDA.
          </li>
        </ul>

        <h3 className={h3Class}>Working capital analysis</h3>
        <p>
          Working capital is one of the most overlooked areas in SME
          acquisitions and the source of many post-close disputes. The QoE
          establishes a normalized working capital target, which becomes the peg
          in the purchase agreement. If working capital at close is below the
          peg, the buyer gets a dollar-for-dollar reduction in purchase price.
        </p>
        <ul className={ulClass}>
          <li>
            Accounts receivable aging: what percentage is current vs. 30, 60,
            90+ days past due.
          </li>
          <li>
            Inventory analysis: obsolete inventory, slow-moving stock, LIFO vs.
            FIFO impact.
          </li>
          <li>
            Accounts payable trends: is the seller stretching payables to
            artificially boost cash flow?
          </li>
          <li>
            Seasonality adjustments: a business with seasonal revenue may have
            dramatically different working capital needs depending on when you
            close.
          </li>
          <li>
            Deferred revenue and prepaid expenses, which can create significant
            swings.
          </li>
        </ul>

        <h2 className={h2Class}>Common EBITDA adjustments in SME acquisitions</h2>
        <p>
          In a typical search fund deal, adjusted EBITDA can differ from
          reported EBITDA by 20&ndash;50%. Here are the adjustments you will
          encounter most frequently.
        </p>

        <h3 className={h3Class}>Owner compensation and benefits</h3>
        <p>
          This is almost always the largest adjustment. Small business owners
          frequently pay themselves well above market rate, especially in S-Corps
          and LLCs where compensation and distributions are blended for tax
          purposes. A QoE provider will benchmark owner compensation against
          market data, typically using sources like Salary.com, Payscale, or
          industry-specific surveys. In a $3M EBITDA business, owner
          compensation adjustments of $200K&ndash;$500K are common.
        </p>

        <h3 className={h3Class}>Related-party transactions</h3>
        <p>
          Many small businesses transact with entities owned by the same family.
          The owner might lease the building from their personal real estate
          holding company, buy supplies from a sibling&apos;s distributor, or
          pay a spouse&apos;s consulting firm for services. These transactions
          must be evaluated at arm&apos;s length. A lease at $8 per square foot
          when market rate is $14 per square foot means EBITDA is overstated by
          the difference, and the buyer will inherit the true cost.
        </p>

        <h3 className={h3Class}>One-time and non-recurring items</h3>
        <p>
          Litigation costs, natural disaster recovery, COVID-related PPP loan
          forgiveness, facility relocation, and major equipment failures are
          all legitimate add-backs. However, buyers should be skeptical of
          &quot;one-time&quot; costs that recur every year. If a business has
          had a &quot;one-time&quot; expense every year for five years, it is
          not one-time. A good rule of thumb: if you cannot name the specific
          event and confirm it will not recur, do not accept the add-back.
        </p>

        <h3 className={h3Class}>Pro forma adjustments</h3>
        <p>
          These are forward-looking adjustments based on changes the buyer
          plans to make. Examples include eliminating a redundant role, adding
          a new revenue stream, or renegotiating a contract. Lenders and
          investors are generally skeptical of pro forma adjustments unless they
          are highly specific and achievable within 90 days of close. The
          safest approach is to value the business on current adjusted EBITDA
          and treat pro forma upside as free optionality.
        </p>

        <h2 className={h2Class}>Red flags in a QoE analysis</h2>
        <p>
          Experienced acquirers develop an instinct for QoE red flags, but even
          first-time buyers should watch for these warning signs.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Customer concentration above 20%.</strong> If a single
            customer represents more than 20% of revenue, the business carries
            significant key-customer risk. Above 30% is a serious concern that
            should be reflected in valuation or mitigated through customer
            contracts.
          </li>
          <li>
            <strong>Declining revenue masked by add-backs.</strong> If the
            seller claims $3M adjusted EBITDA on $10M revenue but revenue has
            declined 5% annually for three years, the trend matters more than
            the snapshot.
          </li>
          <li>
            <strong>Aggressive revenue recognition.</strong> Watch for bill-
            and-hold arrangements, percentage-of-completion estimates that are
            overly optimistic, or revenue booked before delivery.
          </li>
          <li>
            <strong>Unusually high add-backs.</strong> If add-backs exceed
            40&ndash;50% of reported EBITDA, something is likely wrong. Either
            the business is genuinely poorly managed (risky) or the seller is
            inflating adjustments (deceptive).
          </li>
          <li>
            <strong>Cash flow does not reconcile with EBITDA.</strong> If
            adjusted EBITDA is $2M but free cash flow is consistently $1M, the
            gap needs explanation. Common culprits: underfunded capex, growing
            receivables, or hidden cash drains.
          </li>
          <li>
            <strong>Related-party transactions that obscure true costs.</strong>{" "}
            If the business relies on below-market rent, sweetheart supply
            deals, or family labor at discounted rates, true standalone costs
            may be significantly higher.
          </li>
          <li>
            <strong>Inconsistencies between tax returns and financials.</strong>{" "}
            If the P&L shows $2M profit but tax returns show $800K, someone is
            either under-reporting to the IRS or over-reporting to you.
          </li>
        </ul>

        <h2 className={h2Class}>When to hire a QoE firm vs. DIY</h2>
        <p>
          For any acquisition above $500K in enterprise value, you should hire
          a professional QoE provider. Period. The cost is a rounding error
          relative to the deal value, and the expertise they bring is
          irreplaceable for a first-time buyer.
        </p>
        <p>
          That said, there are levels of QoE analysis. For a $1M&ndash;$2M
          enterprise value deal, you might use a smaller regional CPA firm that
          charges $15K&ndash;$25K. For a $5M+ deal, you want a dedicated
          transaction advisory firm, and the cost will be $30K&ndash;$60K. At
          the top end, Big Four firms charge $75K&ndash;$150K+ for QoE work on
          larger transactions, but this is overkill for typical search fund
          deals.
        </p>

        <h3 className={h3Class}>What to look for in a QoE provider</h3>
        <ul className={ulClass}>
          <li>
            Experience with SME transactions in the $1M&ndash;$10M EBITDA
            range. Big Four teams accustomed to $100M+ deals often miss the
            nuances of small business accounting.
          </li>
          <li>
            Industry experience relevant to your target. A QoE provider who
            understands construction accounting will catch issues that a
            generalist would miss.
          </li>
          <li>
            Willingness to get on the phone and walk you through findings. The
            best providers become trusted advisors, not just report generators.
          </li>
          <li>
            Reasonable timeline: four to six weeks is standard. Anyone
            promising two weeks is probably cutting corners. Anyone taking eight
            weeks or more is likely understaffed.
          </li>
          <li>
            Fixed-fee engagement with a clear scope. Avoid hourly arrangements
            that can spiral out of control.
          </li>
        </ul>

        <h2 className={h2Class}>Typical QoE cost breakdown</h2>
        <p>
          QoE costs vary significantly based on deal size, business complexity,
          and provider reputation. Here is what search fund acquirers typically
          pay.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>$1M&ndash;$3M enterprise value:</strong> $15K&ndash;$30K
            from a regional CPA or boutique transaction advisory firm.
          </li>
          <li>
            <strong>$3M&ndash;$10M enterprise value:</strong> $25K&ndash;$50K
            from a mid-market transaction advisory firm.
          </li>
          <li>
            <strong>$10M&ndash;$25M enterprise value:</strong> $40K&ndash;$75K
            from a national firm with dedicated transaction advisory.
          </li>
          <li>
            <strong>Additional costs:</strong> legal review of QoE findings
            ($5K&ndash;$10K), tax due diligence if done separately ($10K&ndash;
            $20K), environmental or IT assessments ($5K&ndash;$15K each).
          </li>
        </ul>

        <h2 className={h2Class}>QoE report structure and what each section tells you</h2>
        <p>
          A thorough QoE report typically runs 40&ndash;80 pages and follows a
          standard structure. Understanding each section helps you extract
          maximum value from the analysis.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Executive summary:</strong> a two-to-three page overview of
            adjusted EBITDA, key findings, and material risks. Start here and
            share this with your investors.
          </li>
          <li>
            <strong>Adjusted EBITDA bridge:</strong> a waterfall chart showing
            reported EBITDA to adjusted EBITDA, with each adjustment itemized
            and categorized. This is the most important page in the report.
          </li>
          <li>
            <strong>Revenue analysis:</strong> detailed breakdown of revenue by
            customer, product, geography, and contract type with trend
            analysis.
          </li>
          <li>
            <strong>Expense analysis:</strong> normalization of each major
            expense category with supporting documentation.
          </li>
          <li>
            <strong>Working capital analysis:</strong> normalized working
            capital target, seasonal patterns, and recommendation for the
            purchase agreement peg.
          </li>
          <li>
            <strong>Debt and debt-like items:</strong> identification of
            obligations that should be treated as debt in the purchase
            agreement (deferred revenue, accrued liabilities, unfunded
            pensions).
          </li>
          <li>
            <strong>Tax analysis:</strong> tax position, NOL carryforwards,
            state and local tax exposure, and structural considerations.
          </li>
          <li>
            <strong>Management discussion:</strong> notes from interviews with
            the owner and key staff, providing context for the numbers.
          </li>
        </ul>

        <h2 className={h2Class}>Timeline: from engagement to final report</h2>
        <p>
          Plan for four to six weeks from the day you engage a QoE provider to
          the day you receive the final report. Here is a typical timeline.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Week 1:</strong> Engagement letter signed, initial document
            request list sent to the seller. The QoE firm will request three to
            five years of financial statements, tax returns, bank statements,
            customer lists, vendor lists, payroll records, and more.
          </li>
          <li>
            <strong>Week 2&ndash;3:</strong> The QoE team reviews documents,
            builds their model, and prepares a preliminary list of questions.
            Expect 50&ndash;150 follow-up questions to the seller.
          </li>
          <li>
            <strong>Week 3&ndash;4:</strong> On-site visit (one to two days) to
            interview the owner, review physical records, observe operations,
            and tie out data.
          </li>
          <li>
            <strong>Week 4&ndash;5:</strong> Draft report issued to you for
            review. This is your opportunity to ask questions, request
            additional analysis, and flag areas that need deeper investigation.
          </li>
          <li>
            <strong>Week 5&ndash;6:</strong> Final report delivered,
            incorporating your feedback and any additional findings from the
            on-site visit. The QoE provider should present their findings to
            you in a one-to-two hour call.
          </li>
        </ul>

        <h2 className={h2Class}>How QoE findings affect price negotiation</h2>
        <p>
          The QoE report is your most powerful negotiation tool. Here is how
          findings typically translate into price adjustments.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>EBITDA adjustments flow directly to price.</strong> If the
            seller claimed $3M EBITDA but QoE shows $2.4M, and the agreed
            multiple is 5x, the price drops by $3M (the $600K difference times
            the 5x multiple).
          </li>
          <li>
            <strong>Working capital shortfalls create closing adjustments.</strong>{" "}
            If normalized working capital is $500K but the seller has drawn it
            down to $300K, you get a $200K reduction at close.
          </li>
          <li>
            <strong>Risk factors justify multiple compression.</strong> If the
            QoE reveals customer concentration, declining trends, or
            aggressive accounting, you can argue for a lower multiple even if
            EBITDA holds up. A business with 35% customer concentration might
            warrant 3.5&ndash;4x instead of 4.5&ndash;5x.
          </li>
          <li>
            <strong>Identified risks can be allocated to the seller.</strong>{" "}
            Escrow holdbacks, earnouts, and seller indemnifications can be
            structured around specific QoE findings (pending litigation,
            uncertain tax positions, potential customer losses).
          </li>
        </ul>

        <h2 className={h2Class}>Common adjustments specific to SME acquisitions</h2>
        <p>
          Small and medium businesses have a distinct set of adjustments that
          larger companies rarely encounter. Understanding these is critical
          for search fund acquirers.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Owner perks:</strong> company cars ($15K&ndash;$30K/year),
            personal travel ($10K&ndash;$50K/year), club memberships ($5K&ndash;
            $20K/year), personal insurance ($10K&ndash;$25K/year), and home
            office expenses routed through the business.
          </li>
          <li>
            <strong>Family payroll:</strong> children or spouses on the payroll
            with minimal responsibilities. A common add-back of $50K&ndash;
            $150K in total.
          </li>
          <li>
            <strong>Below-market rent:</strong> if the owner owns the property
            and charges below-market rent, the buyer must adjust EBITDA
            downward to reflect the true occupancy cost.
          </li>
          <li>
            <strong>Deferred maintenance:</strong> an owner preparing to sell
            may defer $50K&ndash;$200K in annual maintenance spending, inflating
            near-term EBITDA but creating a liability for the buyer.
          </li>
          <li>
            <strong>Cash transactions:</strong> in some industries (restaurants,
            retail, services), a portion of revenue may be transacted in cash
            and not fully reported. This is both a legal risk and an analytical
            challenge.
          </li>
          <li>
            <strong>Key person insurance:</strong> adding key person insurance
            for the new CEO and critical employees may cost $5K&ndash;$15K
            annually, which should be modeled as a go-forward expense.
          </li>
        </ul>

        <h2 className={h2Class}>Working with your QoE provider effectively</h2>
        <p>
          To maximize the value of your QoE investment, approach the engagement
          as a collaborative process rather than a passive one.
        </p>
        <ul className={ulClass}>
          <li>
            Share your investment thesis and areas of concern upfront. If you
            are worried about customer concentration, say so. If the seller
            mentioned a pending lawsuit, flag it.
          </li>
          <li>
            Attend the on-site visit if the provider allows it. Observing the
            business firsthand and hearing management&apos;s responses to tough
            questions is invaluable.
          </li>
          <li>
            Review the draft report carefully and push back on areas that seem
            thin. If the revenue analysis does not segment by contract type,
            request it.
          </li>
          <li>
            Use the QoE findings to prepare your lender package. SBA lenders
            and bank underwriters rely heavily on the QoE to size their <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link>.
          </li>
          <li>
            Keep the QoE provider engaged through closing. New issues often
            emerge during final negotiations, and having your QoE team on call
            to run scenarios is extremely valuable.
          </li>
        </ul>

        <p>
          A Quality of Earnings analysis is not just a due diligence checkbox.
          It is the foundation of your entire acquisition thesis, your
          negotiation use, and your post-close financial baseline. Invest
          in the right provider &mdash; our guide on <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">working with advisors</Link> covers how to select the right professionals &mdash; engage deeply with the process, and use the
          findings to make a confident, informed acquisition decision.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much does a Quality of Earnings report cost?</h3>
        <p>
          QoE costs scale with deal size and complexity. For search fund acquisitions in the $1&ndash;3 million enterprise value range, expect to pay $15,000&ndash;$30,000 from a regional CPA or boutique transaction advisory firm. For deals in the $3&ndash;10 million range, mid-market transaction advisory firms typically charge $25,000&ndash;$50,000. Larger transactions ($10&ndash;25 million) cost $40,000&ndash;$75,000 from national firms with dedicated transaction advisory teams. According to Deloitte and other major accounting firms, the QoE cost typically represents less than 1% of enterprise value and is one of the highest-ROI investments in the deal process &mdash; a well-executed QoE frequently identifies EBITDA adjustments of 10&ndash;30% below the seller&rsquo;s claimed figure, translating to purchase price reductions that are multiples of the QoE fee.
        </p>

        <h3 className={h3Class}>What is the difference between a QoE and an audit?</h3>
        <p>
          An audit confirms that financial statements conform to GAAP or IFRS accounting standards &mdash; it verifies that the numbers are accurately reported. A Quality of Earnings analysis goes significantly further: it stress-tests whether reported EBITDA is a reliable proxy for future cash flow by normalizing owner compensation, identifying non-recurring items, evaluating revenue quality, and establishing a working capital target. According to the American Institute of CPAs, an audit provides an opinion on historical financial statement accuracy, while a QoE provides forward-looking analysis of earnings sustainability. For acquisition purposes, a business can have clean audited financial statements and still have materially overstated sustainable earnings due to above-market owner compensation, below-market related-party rent, deferred maintenance, or aggressive revenue recognition. The QoE is specifically designed to uncover these issues.
        </p>

        <h3 className={h3Class}>How long does a Quality of Earnings analysis take?</h3>
        <p>
          A typical QoE engagement takes 4&ndash;6 weeks from the date the provider is engaged to the delivery of the final report. Week 1 involves engagement letter execution and initial document requests (the seller provides 3&ndash;5 years of financial statements, tax returns, bank statements, and detailed schedules). Weeks 2&ndash;3 are spent on document review, model building, and preparation of 50&ndash;150 follow-up questions. Weeks 3&ndash;4 include a 1&ndash;2 day on-site visit for management interviews and data verification. Weeks 4&ndash;5 produce the draft report, and weeks 5&ndash;6 finalize the report after buyer review and additional analysis. According to leading transaction advisory firms, the most common cause of delays is slow document production from the seller &mdash; establishing clear expectations with the seller&rsquo;s team about response times at the outset can save 1&ndash;2 weeks.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford GSB, <em>Search Fund Primer: Due Diligence Best Practices</em> (2024)</li>
          <li>Deloitte, <em>Quality of Earnings: A Transaction Advisory Perspective</em> (2024)</li>
          <li>American Institute of CPAs (AICPA), <em>Transaction Advisory Standards and Practices</em> (2023)</li>
        </ul>
      </div>
    </article>
  );
}
