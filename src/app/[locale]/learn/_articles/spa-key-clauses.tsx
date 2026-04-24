import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SPAKeyClausesArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Share Purchase Agreements: Key Clauses Every Buyer Must Understand
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">24 min read</p>

      <div className={bodyClass}>
        <p>
          A Share Purchase Agreement (SPA) is the definitive contract that
          transfers ownership of an entire business entity&mdash;every asset,
          liability, contract, and employee&mdash;from seller to buyer. Unlike
          an{" "}
          <Link href="/learn/apa-guide" className="text-apple-accent hover:underline">
            Asset Purchase Agreement
          </Link>, where you cherry-pick specific assets, the SPA delivers the
          company whole, which means the clauses inside it are your only
          line of defence against inherited risks. According to SRS Acquiom
          research, post-closing indemnification claims arise in roughly 20%
          of private-company acquisitions, and the median claim exceeds
          $1&thinsp;M. This guide dissects each major SPA clause, explains
          how to negotiate it, provides concrete dollar benchmarks, and
          flags the traps that catch first-time buyers.
        </p>

        {/* ───────────── SECTION 1 ───────────── */}
        <h2 className={h2Class}>SPA vs. APA: Why the Structure Matters</h2>
        <p>
          Before diving into individual clauses, you need to understand what
          makes a share purchase fundamentally different from an asset
          purchase&mdash;because the distinction shapes every provision in
          the agreement.
        </p>
        <p>
          In a <strong>share (stock) purchase</strong>, the buyer acquires
          the seller&rsquo;s equity in the target company. The legal entity
          survives intact: permits, licences, customer contracts, bank
          accounts, and employee relationships all remain in place. The
          trade-off is that you also inherit <em>all</em> liabilities&mdash;disclosed
          and undisclosed&mdash;including pending litigation, tax arrears,
          and environmental obligations. That is why SPAs tend to run 50 to
          120 pages and contain significantly more protective provisions
          than a typical APA.
        </p>
        <p>
          In an <strong>asset purchase</strong>, the buyer selects specific
          assets and assumes only expressly listed liabilities. The
          seller&rsquo;s entity continues to exist, retaining anything not
          transferred. Asset deals dominate below $10&thinsp;M because they
          offer a{" "}
          <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
            stepped-up tax basis
          </Link>{" "}
          and cleaner liability isolation. For a detailed comparison, see
          our{" "}
          <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
            asset purchase vs. stock purchase guide
          </Link>.
        </p>
        <p>
          <strong>When an SPA is the right choice:</strong>
        </p>
        <ul className={ulClass}>
          <li>The target holds non-assignable permits, government contracts,
            or professional licences that would terminate in an asset transfer.</li>
          <li>The seller is a C-Corp and insists on a stock sale to avoid
            double taxation&mdash;though a{" "}
            <Link href="/learn/338h10-election" className="text-apple-accent hover:underline">
              338(h)(10) election
            </Link>{" "}
            can sometimes bridge this gap.</li>
          <li>Hundreds of employees, complex lease assignments, or
            international subsidiaries would make an asset transfer
            operationally disruptive.</li>
          <li>The company has long-term customer contracts with
            anti-assignment provisions.</li>
        </ul>

        {/* ───────────── SECTION 2 ───────────── */}
        <h2 className={h2Class}>Purchase Price Mechanics</h2>
        <p>
          The purchase price clause is more detailed than a single number.
          It establishes how value is measured, when and how payments are
          made, and what adjustments can alter the final amount after
          closing.
        </p>

        <h3 className={h3Class}>Enterprise Value vs. Equity Value</h3>
        <p>
          Most SPAs state an <strong>enterprise value</strong> (the total
          operating value of the business) and then derive the{" "}
          <strong>equity value</strong> by subtracting net debt and
          normalising working capital. The formula is typically:
        </p>
        <p className="bg-apple-gray-50 px-4 py-3 rounded-lg font-mono text-sm">
          Equity Value = Enterprise Value &minus; Funded Debt + Excess Cash
          &plusmn; Working Capital Adjustment
        </p>
        <p>
          Misalignment on this formula is one of the most common sources
          of post-closing disputes. Make sure the SPA spells out each
          component&rsquo;s definition in a dedicated appendix.
        </p>

        <h3 className={h3Class}>Payment Structure</h3>
        <ul className={ulClass}>
          <li><strong>Cash at close:</strong> The majority of the purchase
            price delivered via wire transfer on the closing date.</li>
          <li><strong>Seller note:</strong> A deferred portion (often 10&ndash;30%
            of the price) with a fixed interest rate, repayment schedule,
            and subordination terms relative to senior debt.</li>
          <li><strong>Earn-out:</strong> Contingent payments tied to
            post-closing financial targets&mdash;revenue, EBITDA, or
            customer retention milestones&mdash;paid over one to three years.</li>
          <li><strong>Escrow/holdback:</strong> Typically 10&ndash;20% of
            the purchase price deposited with a third-party escrow agent
            for 12&ndash;24 months to satisfy potential indemnification claims
            (JP Morgan 2025 Holdback Escrow Study).</li>
        </ul>

        <h3 className={h3Class}>Working Capital Adjustments</h3>
        <p>
          A{" "}
          <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
            working capital adjustment
          </Link>{" "}
          ensures the business is delivered with a &ldquo;normal&rdquo; level
          of net current assets. The SPA sets a <strong>target peg</strong>{" "}
          (usually the trailing-12-month average of current assets minus
          current liabilities) and requires a <strong>true-up</strong>{" "}
          within 60&ndash;90 days post-closing. If actual working capital
          exceeds the peg, the buyer pays the surplus to the seller; if it
          falls short, the purchase price is reduced dollar for dollar.
        </p>
        <p>
          <strong>Negotiation tip:</strong> Fight hardest over the{" "}
          <em>definition</em> of working capital items. Sellers sometimes
          exclude slow-moving inventory or disputed receivables from the
          calculation to inflate the peg. Insist on a line-item schedule
          attached as an exhibit.
        </p>

        {/* ───────────── SECTION 3 ───────────── */}
        <h2 className={h2Class}>Representations and Warranties</h2>
        <p>
          Representations and warranties (&ldquo;reps&rdquo;) are
          statements of fact the seller makes about the business. If a
          representation later proves false, the buyer can seek
          indemnification. This section is typically the longest in the
          SPA&mdash;often 15 to 25 pages&mdash;and the most heavily
          negotiated.
        </p>

        <h3 className={h3Class}>Core Seller Representations</h3>
        <ul className={ulClass}>
          <li><strong>Financial statements:</strong> GAAP-compliant (or
            consistent with the company&rsquo;s historical accounting
            basis), complete, and fairly presenting the business&rsquo;s
            financial condition.</li>
          <li><strong>No undisclosed liabilities:</strong> All material
            obligations are reflected in the financials or the disclosure
            schedules.</li>
          <li><strong>Material contracts:</strong> Every contract above a
            specified dollar threshold (e.g., $25&thinsp;K) is listed, in
            force, and not in default.</li>
          <li><strong>Litigation:</strong> No pending or threatened lawsuits
            that could materially affect the business.</li>
          <li><strong>Tax compliance:</strong> All returns filed, all taxes
            paid, no ongoing audits or disputes. Verify this during{" "}
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              financial due diligence
            </Link>.</li>
          <li><strong>Employee matters:</strong> Wage-and-hour compliance,
            benefit plan obligations, no unfair-labour-practice charges.</li>
          <li><strong>Environmental compliance:</strong> No contamination,
            no pending environmental orders, all permits current.</li>
          <li><strong>Intellectual property:</strong> The company owns or
            has valid licences for all IP used in operations; no
            infringement claims.</li>
        </ul>

        <h3 className={h3Class}>Materiality Qualifiers and Knowledge Scrapers</h3>
        <p>
          Sellers will attempt to water down reps with two devices.
          First, <strong>materiality qualifiers</strong> (&ldquo;no{" "}
          <em>material</em> breach&rdquo;) narrow the scope of each
          statement. Second, <strong>knowledge qualifiers</strong>{" "}
          (&ldquo;to the seller&rsquo;s knowledge&rdquo;) limit recourse
          to what the seller actually knew at signing. As a buyer, push
          for absolute representations wherever possible. When knowledge
          qualifiers are unavoidable, define &ldquo;knowledge&rdquo; as
          what the seller <em>knew or should have known</em> after
          reasonable inquiry&mdash;this is a meaningful upgrade over bare
          actual knowledge.
        </p>

        <h3 className={h3Class}>Survival Periods</h3>
        <p>
          Reps do not last forever. The SPA specifies a{" "}
          <strong>survival period</strong> during which the buyer can
          bring claims:
        </p>
        <ul className={ulClass}>
          <li><strong>General representations:</strong> 12&ndash;24 months
            post-closing (18 months is the most common market term
            according to the ABA Private Target Study).</li>
          <li><strong>Fundamental representations</strong> (authority,
            capitalization, title to shares): 3&ndash;6 years or until
            the applicable statute of limitations expires.</li>
          <li><strong>Tax representations:</strong> Typically survive until
            60&ndash;90 days after the statute of limitations for the
            relevant tax period.</li>
          <li><strong>Environmental representations:</strong> 3&ndash;5
            years, reflecting the delayed-discovery nature of contamination
            claims.</li>
          <li><strong>Fraud:</strong> No cap and no time limit in virtually
            every SPA.</li>
        </ul>
        <p>
          <strong>Negotiation tip:</strong> Always push for at least an 18-month
          survival period on general reps. Data from SRS Acquiom shows
          that roughly 49% of indemnification claims surface more than 12
          months after closing.
        </p>

        {/* ───────────── SECTION 4 ───────────── */}
        <h2 className={h2Class}>Indemnification: Baskets, Caps, and Escrow</h2>
        <p>
          The indemnification clause allocates financial responsibility for
          breaches of representations, warranties, and covenants. It is
          the economic backbone of the SPA and the section where most
          dollars are at stake.
        </p>

        <h3 className={h3Class}>Basket Structures</h3>
        <p>
          A <strong>basket</strong> is the threshold of losses the buyer
          must absorb before the seller&rsquo;s indemnification obligation
          kicks in. There are two common types:
        </p>
        <ul className={ulClass}>
          <li><strong>True deductible (most common&mdash;approximately 70%
            of deals):</strong> The buyer absorbs the first X dollars of
            losses and can only recover amounts <em>above</em> the
            basket. Typical size: 0.5&ndash;1% of the purchase price.</li>
          <li><strong>Tipping basket (approximately 26% of deals):</strong>{" "}
            Once cumulative losses reach X dollars, the buyer recovers
            from the first dollar&mdash;the basket &ldquo;tips&rdquo; and
            the seller is liable for the full amount.</li>
        </ul>
        <p>
          Some SPAs include a <strong>mini-basket</strong> (or &ldquo;de
          minimis&rdquo; threshold) that prevents nuisance claims below a
          specified per-item amount (commonly $5&thinsp;K&ndash;$25&thinsp;K)
          from counting toward the basket.
        </p>

        <h3 className={h3Class}>Indemnification Caps</h3>
        <p>
          The <strong>cap</strong> limits the seller&rsquo;s maximum
          liability. According to the Wyrick Robbins M&A study, the
          median cap for general representations sits at approximately
          10% of transaction value, but ranges are wide:
        </p>
        <ul className={ulClass}>
          <li><strong>Lower-middle-market deals ($1&ndash;10&thinsp;M):</strong>{" "}
            Caps of 20&ndash;50% are common because buyers have less room
            to absorb loss.</li>
          <li><strong>Mid-market deals ($10&ndash;100&thinsp;M):</strong>{" "}
            Caps of 10&ndash;20% are standard.</li>
          <li><strong>Large-cap deals ($100&thinsp;M+):</strong> Caps of
            5&ndash;15% are typical, often supplemented by representations
            and warranties insurance (RWI).</li>
          <li><strong>Fundamental reps and fraud:</strong> Usually uncapped
            or capped at 100% of the purchase price.</li>
        </ul>
        <p>
          <strong>Negotiation tip:</strong> If the seller insists on a low
          cap (10% or less), counter by requesting broader escrow, longer
          survival periods, or a tipping basket to offset the reduced
          ceiling.
        </p>

        <h3 className={h3Class}>Escrow Provisions</h3>
        <p>
          An <strong>escrow</strong> holds a portion of the purchase
          price&mdash;typically 10&ndash;20%&mdash;in a third-party
          account to fund potential indemnification claims. According to
          JP Morgan&rsquo;s 2025 M&A Holdback Escrow Study, the median
          escrow term is 15&ndash;18 months, with a partial release at 12
          months and final release at 18&ndash;24 months.
        </p>
        <p>
          Key provisions to negotiate:
        </p>
        <ul className={ulClass}>
          <li><strong>Release schedule:</strong> Staged releases (e.g., 50%
            at 12 months, remainder at 18 months) balance the buyer&rsquo;s
            need for protection against the seller&rsquo;s desire for
            liquidity.</li>
          <li><strong>Pending-claims holdback:</strong> If a claim is
            outstanding at the release date, the escrow agent retains
            enough to cover the disputed amount.</li>
          <li><strong>Interest allocation:</strong> Specify whether escrow
            interest accrues to the buyer, the seller, or is split.</li>
        </ul>

        <h3 className={h3Class}>Representations and Warranties Insurance</h3>
        <p>
          For deals above roughly $25&thinsp;M, buyers increasingly
          purchase an <strong>RWI policy</strong> that sits on top of (or
          replaces) the seller&rsquo;s indemnification obligation. RWI
          premiums have fallen to approximately 2&ndash;2.5% of the
          policy limit in 2025 (down from 3.5&ndash;4% in 2022),
          according to CBIZ and Woodruff Sawyer market reports. Typical
          deductibles range from 0.5&ndash;0.8% of enterprise value,
          dropping to 0.3&ndash;0.5% twelve months after closing. RWI
          now appears in roughly 75% of private-equity transactions.
        </p>

        {/* ───────────── SECTION 5 ───────────── */}
        <h2 className={h2Class}>Material Adverse Change (MAC) Clauses</h2>
        <p>
          A <strong>Material Adverse Change</strong> (also called Material
          Adverse Effect or MAE) clause allows the buyer to walk away from
          the deal&mdash;without penalty&mdash;if the target business
          suffers a significant deterioration between signing and closing.
          MAC clauses appear in approximately 95% of M&A agreements and
          are among the most heavily negotiated provisions.
        </p>

        <h3 className={h3Class}>Defining &ldquo;Material&rdquo;</h3>
        <p>
          Courts have historically set a high bar: a decline must be
          &ldquo;durationally significant&rdquo; and substantially
          threaten the overall earnings potential of the business. In
          practice, most acquirers negotiate quantitative thresholds as
          supplements&mdash;for example, a decline in trailing-twelve-month
          EBITDA of more than 15&ndash;20% or the loss of a customer
          representing more than 10% of revenue.
        </p>

        <h3 className={h3Class}>Carve-Outs (Exclusions)</h3>
        <p>
          Sellers will push for a long list of events that do{" "}
          <em>not</em> qualify as a MAC, including:
        </p>
        <ul className={ulClass}>
          <li>General economic or industry-wide downturns.</li>
          <li>Changes in applicable law or accounting standards.</li>
          <li>Natural disasters, pandemics, or acts of war.</li>
          <li>Effects arising from the announcement of the transaction
            itself.</li>
        </ul>
        <p>
          <strong>Negotiation tip:</strong> Accept reasonable carve-outs,
          but add a <strong>disproportionate-impact exception</strong>:
          even if a carved-out event occurs (e.g., an industry downturn),
          the MAC clause is triggered if the target is{" "}
          <em>disproportionately affected</em> relative to comparable
          companies. This single phrase preserves most of the clause&rsquo;s
          protective value.
        </p>

        {/* ───────────── SECTION 6 ───────────── */}
        <h2 className={h2Class}>Closing Conditions and Pre-Closing Covenants</h2>
        <p>
          The period between signing and closing&mdash;typically 30 to 90
          days, though regulatory complexity can push it past six
          months&mdash;is governed by two interlocking mechanisms:{" "}
          <strong>conditions precedent</strong> (CPs) and{" "}
          <strong>pre-closing covenants</strong>.
        </p>

        <h3 className={h3Class}>Conditions Precedent</h3>
        <p>
          CPs are requirements that must be satisfied (or waived) before
          either party is obligated to close. Standard buyer-side CPs
          include:
        </p>
        <ol className={olClass}>
          <li><strong>Bring-down of representations:</strong> The
            seller&rsquo;s reps must still be true as of the closing date,
            subject to an agreed materiality standard.</li>
          <li><strong>No MAC:</strong> No material adverse change has
            occurred since signing.</li>
          <li><strong>Regulatory approvals:</strong> Hart-Scott-Rodino
            clearance (for U.S. deals over the filing threshold), sector-specific
            licences, or foreign-investment approvals.</li>
          <li><strong>Third-party consents:</strong> Landlords, key
            customers, or lenders have consented to the change-of-control.</li>
          <li><strong>Financing confirmation:</strong> The buyer has
            secured committed debt financing (SBA, bank line, or private
            credit).</li>
          <li><strong>Key-employee agreements:</strong> Critical employees
            have signed post-closing employment or consulting contracts.</li>
        </ol>
        <p>
          Failure to satisfy any CP typically gives the non-breaching party
          the right to walk away without liability. Your{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent
          </Link>{" "}
          should outline the major CPs early so that neither side is
          surprised during SPA drafting.
        </p>

        <h3 className={h3Class}>Pre-Closing Covenants</h3>
        <p>
          Covenants govern how the seller operates the business between
          signing and closing. The standard &ldquo;ordinary course&rdquo;
          covenant requires the seller to:
        </p>
        <ul className={ulClass}>
          <li>Run the business consistent with past practice.</li>
          <li>Maintain existing insurance coverage.</li>
          <li>Preserve relationships with key customers and suppliers.</li>
          <li>Not enter into, amend, or terminate material contracts
            without buyer consent.</li>
          <li>Not issue additional equity, incur debt, or declare
            dividends.</li>
          <li>Not increase employee compensation above pre-agreed
            thresholds.</li>
        </ul>
        <p>
          <strong>Negotiation tip:</strong> Attach a dollar threshold to
          each &ldquo;negative covenant&rdquo; (e.g., the seller may not
          enter into any new contract exceeding $10&thinsp;K without
          written buyer consent). Vague language invites disputes.
        </p>

        {/* ───────────── SECTION 7 ───────────── */}
        <h2 className={h2Class}>Non-Compete and Non-Solicitation Provisions</h2>
        <p>
          Because a share purchase delivers the business as a going
          concern, the buyer&rsquo;s goodwill is at risk if the seller
          immediately opens a competing operation or poaches key staff.
          Restrictive covenants address this risk head-on.
        </p>
        <ul className={ulClass}>
          <li><strong>Non-compete:</strong> Prohibits the seller from
            engaging in the same or substantially similar business within
            a defined geographic area for a specified period. The
            enforceable range is typically 3&ndash;5 years and a
            reasonable geography (state-wide, region-wide, or
            nationwide, depending on the business footprint and state
            law).</li>
          <li><strong>Non-solicitation of employees:</strong> Prevents
            the seller from recruiting or hiring former employees for
            2&ndash;5 years. Some agreements also bar the seller from
            inducing independent contractors to terminate their
            relationships.</li>
          <li><strong>Non-solicitation of customers:</strong> Blocks the
            seller from contacting, soliciting, or servicing the
            target&rsquo;s customers for 2&ndash;5 years.</li>
        </ul>
        <p>
          <strong>Enforceability detail:</strong> Restrictive covenants
          are governed by state law, and some jurisdictions (notably
          California, Colorado, Minnesota, and Oklahoma) impose strict
          limitations. A clause that is valid in Texas may be void in
          California. Your M&amp;A attorney should draft language that is
          enforceable in the seller&rsquo;s state of residence <em>and</em>{" "}
          the target&rsquo;s primary operating jurisdictions.
        </p>
        <p>
          <strong>Negotiation tip:</strong> Tie the non-compete to the
          full length of any earn-out or seller-note repayment period.
          If the seller can compete while you are still paying for the
          business, you have a structural conflict.
        </p>

        {/* ───────────── SECTION 8 ───────────── */}
        <h2 className={h2Class}>Timelines, Legal Costs, and Practical Budgeting</h2>
        <p>
          Understanding the real-world timeline and cost of negotiating an
          SPA helps you budget accurately and set seller expectations.
        </p>

        <h3 className={h3Class}>Typical Timeline</h3>
        <ol className={olClass}>
          <li><strong>LOI to first SPA draft:</strong> 2&ndash;4 weeks.
            The buyer&rsquo;s attorney produces the initial draft while{" "}
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              financial due diligence
            </Link>{" "}
            runs in parallel.</li>
          <li><strong>Negotiation rounds:</strong> 3&ndash;6 weeks.
            Expect 2&ndash;4 mark-up exchanges. The reps, indemnification,
            and working-capital sections consume the most time.</li>
          <li><strong>Disclosure schedules:</strong> 1&ndash;3 weeks.
            The seller compiles exceptions to each representation&mdash;this
            is effectively a second round of due diligence.</li>
          <li><strong>Signing to closing:</strong> 30&ndash;90 days,
            depending on regulatory approvals, financing conditions, and
            third-party consents.</li>
          <li><strong>Total LOI to close:</strong> 60&ndash;120 days for
            most lower-middle-market transactions; complex or regulated
            deals can extend to six months or longer.</li>
        </ol>

        <h3 className={h3Class}>Legal Costs</h3>
        <p>
          Attorney fees for SPA negotiation vary by deal size and
          complexity:
        </p>
        <ul className={ulClass}>
          <li><strong>Sub-$2&thinsp;M deals:</strong> $15&thinsp;K&ndash;$35&thinsp;K
            for the buyer&rsquo;s attorney, often on a hybrid fixed-fee
            plus hourly model.</li>
          <li><strong>$2&ndash;10&thinsp;M deals:</strong> $25&thinsp;K&ndash;$75&thinsp;K,
            reflecting more complex reps, working-capital mechanics, and
            potential SBA documentation.</li>
          <li><strong>$10&ndash;50&thinsp;M deals:</strong> $50&thinsp;K&ndash;$200&thinsp;K,
            often involving multiple law-firm teams (corporate, tax,
            employment, environmental).</li>
          <li><strong>Escrow agent fees:</strong> $3&thinsp;K&ndash;$10&thinsp;K
            for account setup and administration.</li>
        </ul>
        <p>
          Each party customarily bears its own legal costs. Budget an
          additional $5&thinsp;K&ndash;$15&thinsp;K for the working-capital
          true-up if you engage an independent accounting firm to verify
          the closing balance sheet.
        </p>

        {/* ───────────── FAQ ───────────── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          What is the difference between an SPA and an APA?
        </h3>
        <p>
          An SPA transfers the seller&rsquo;s shares (equity) in the
          target company, so the buyer acquires the entire entity&mdash;all
          assets <em>and</em> all liabilities. An{" "}
          <Link href="/learn/apa-guide" className="text-apple-accent hover:underline">
            APA
          </Link>{" "}
          transfers only specified assets and expressly assumed liabilities,
          leaving the seller&rsquo;s entity intact. SPAs are simpler
          administratively (no retitling of individual assets) but riskier
          for buyers because of inherited liabilities. APAs offer better
          liability isolation and a stepped-up tax basis but require more
          complex asset-by-asset transfers.
        </p>

        <h3 className={h3Class}>
          How long do representations and warranties survive after closing?
        </h3>
        <p>
          General reps typically survive 12&ndash;24 months (18 months
          being the most common market term). Fundamental reps&mdash;such
          as authority, capitalisation, and title to shares&mdash;survive
          3&ndash;6 years. Tax and environmental reps often survive until
          the applicable statute of limitations expires plus a 60&ndash;90
          day claim-filing window. Fraud claims are almost universally
          uncapped and have no expiration.
        </p>

        <h3 className={h3Class}>
          What is a typical indemnification basket and cap?
        </h3>
        <p>
          The basket (the loss threshold before indemnification applies)
          is typically 0.5&ndash;1% of the purchase price. Approximately
          70% of deals use a true deductible structure (buyer recovers only
          amounts above the basket), while 26% use a tipping basket (once
          the threshold is reached, the buyer recovers from dollar one).
          The cap on seller liability for general-rep breaches is most
          commonly 10&ndash;15% of transaction value in mid-market deals
          and 20&ndash;50% in lower-middle-market transactions. Fundamental
          reps and fraud are usually uncapped.
        </p>

        <h3 className={h3Class}>
          Can the buyer walk away after signing the SPA?
        </h3>
        <p>
          Yes, but only under specific conditions. The buyer can typically
          terminate if: (a) the seller&rsquo;s representations are
          materially inaccurate at closing (&ldquo;bring-down&rdquo;
          failure); (b) a Material Adverse Change has occurred; (c) a
          condition precedent has not been satisfied by the
          &ldquo;drop-dead&rdquo; date (a contractual deadline, usually
          90&ndash;180 days post-signing); or (d) the seller has breached
          a pre-closing covenant. Outside these scenarios, walking away
          exposes the buyer to breach-of-contract liability, which may
          include a reverse break-up fee.
        </p>

        <h3 className={h3Class}>
          Do I need an M&amp;A attorney to negotiate an SPA?
        </h3>
        <p>
          Unequivocally, yes. The SPA is a 50&ndash;120 page contract with
          interlocking economic provisions, and a single misworded clause
          can cost you hundreds of thousands of dollars. Experienced M&amp;A
          counsel will typically pay for themselves many times over by
          negotiating tighter reps, better indemnification terms, and
          protective closing conditions. Budget $25&thinsp;K&ndash;$75&thinsp;K
          for a competent acquisition attorney on a deal under $10&thinsp;M.
        </p>

        {/* ───────────── CLOSING ───────────── */}
        <p className="mt-8 pt-6 border-t border-apple-gray-100">
          The Share Purchase Agreement is where the economic and legal
          terms of your acquisition crystallise into enforceable
          obligations. Every clause&mdash;from purchase price mechanics to
          indemnification caps to MAC definitions&mdash;represents a
          negotiation opportunity that directly affects your risk and
          return. Start with a thorough{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent
          </Link>{" "}
          that outlines the major deal terms, conduct rigorous{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial due diligence
          </Link>{" "}
          to inform your reps and{" "}
          <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
            working capital
          </Link>{" "}
          targets, and engage experienced M&amp;A counsel before the first
          draft hits your inbox. The buyers who close the best deals are
          not the ones with the highest offers&mdash;they are the ones
          who understand what every clause in the SPA actually means.
        </p>
      </div>
    </article>
  );
}
