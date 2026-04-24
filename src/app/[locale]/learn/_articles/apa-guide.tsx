import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function APAGuideArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Asset Purchase Agreements: What Buyers Need to Know
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">22 min read</p>

      <div className={bodyClass}>
        <p>
          An Asset Purchase Agreement (APA) is the single most important
          document you will sign as a business buyer&mdash;yet most
          first-time acquirers underestimate how much leverage sits inside
          its clauses. In roughly 80% of small-business acquisitions under
          $10&thinsp;M, the deal is structured as an asset purchase rather
          than a{" "}
          <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
            stock purchase
          </Link>, giving the buyer selective control over which assets to
          acquire, which liabilities to leave behind, and how to allocate
          the purchase price for maximum tax benefit. This guide breaks
          down every major APA section, explains what to negotiate in each
          one, flags the pitfalls that derail closings, and provides
          concrete dollar benchmarks so you can budget accurately.
        </p>

        {/* ───────────── SECTION 1 ───────────── */}
        <h2 className={h2Class}>What Is an Asset Purchase Agreement&mdash;and When Is It Used?</h2>
        <p>
          An APA is a binding contract in which a buyer acquires specific
          assets (and sometimes assumes specific liabilities) of a
          business, rather than purchasing the entity&rsquo;s equity.
          After closing, the seller&rsquo;s legal entity continues to
          exist&mdash;holding any excluded assets and remaining
          responsible for any excluded liabilities&mdash;while the buyer
          operates the business through a new or existing entity of its
          own.
        </p>
        <p>
          The core advantage for buyers is selectivity. You can
          cherry-pick the equipment, inventory, intellectual property,
          customer contracts, and goodwill you want while leaving behind
          pre-closing debts, pending litigation, environmental
          liabilities, and other obligations you did not bargain for.
          According to the Corporate Finance Institute, this selective
          approach is the primary reason buyers in the lower middle market
          prefer asset deals to{" "}
          <Link href="/learn/spa-key-clauses" className="text-apple-accent hover:underline">
            stock/share purchase agreements
          </Link>.
        </p>
        <p>
          <strong>When an APA is the right structure:</strong>
        </p>
        <ul className={ulClass}>
          <li>You want a{" "}
            <Link href="/learn/step-up-in-basis" className="text-apple-accent hover:underline">
              stepped-up tax basis
            </Link>{" "}
            in the acquired assets, enabling accelerated depreciation and amortization deductions.</li>
          <li>You need to exclude specific liabilities&mdash;such as outstanding lawsuits, tax arrears, or environmental cleanup costs.</li>
          <li>The target is a sole proprietorship, partnership, or LLC taxed as a partnership (where a stock/equity sale is unavailable or less efficient).</li>
          <li>SBA 7(a) or SBA 504 financing is involved&mdash;lenders overwhelmingly prefer asset deals because the collateral is clearly identified.</li>
        </ul>
        <p>
          <strong>When an SPA may be preferable:</strong> the target holds
          non-assignable permits, licenses, or government contracts; the
          business is a C-Corp and the seller demands a stock sale to
          avoid double taxation; or the company has hundreds of employees
          and individually re-hiring them would be disruptive. For a
          side-by-side comparison, see our{" "}
          <Link href="/learn/asset-purchase-vs-stock-purchase" className="text-apple-accent hover:underline">
            asset purchase vs. stock purchase guide
          </Link>.
        </p>

        {/* ───────────── SECTION 2 ───────────── */}
        <h2 className={h2Class}>Key Sections of an APA</h2>
        <p>
          A well-drafted APA for a $1&thinsp;M&ndash;$25&thinsp;M
          acquisition typically runs 40&ndash;80 pages (excluding
          schedules and exhibits). Below are the sections that carry the
          most economic and legal weight for buyers.
        </p>

        <h3 className={h3Class}>1. Purchase Price and Payment Terms</h3>
        <p>
          This section defines the total consideration, its form (cash,
          seller note, earnout, equity rollover), and the timeline for
          payment. It also establishes the{" "}
          <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
            working capital adjustment
          </Link>{" "}
          mechanism, which is one of the most frequently negotiated
          provisions in any APA.
        </p>
        <ul className={ulClass}>
          <li><strong>Purchase price allocation (Section 1060):</strong>{" "}
            The IRS requires buyer and seller to allocate the price across
            seven asset classes on Form 8594. Buyers benefit from
            allocating more to Class V assets (tangible personal
            property) that qualify for bonus depreciation&mdash;potentially
            100% in the first year under current law&mdash;and less to
            Class VII goodwill, which must be{" "}
            <Link href="/learn/goodwill-amortization-tax" className="text-apple-accent hover:underline">
              amortized over 15 years
            </Link>{" "}
            under Section 197. Sellers generally prefer the opposite because
            goodwill receives favorable capital-gains treatment.</li>
          <li><strong>Earnout provisions:</strong> If part of the price
            is contingent on post-closing performance, define the
            metric (EBITDA, revenue, customer retention), the
            measurement period, the accounting standards, and who
            controls business decisions during that period. Vague
            earnout language is among the top sources of post-closing
            disputes.</li>
          <li><strong>Escrow holdback:</strong> Market practice is to
            withhold 10%&ndash;20% of the purchase price in a third-party
            escrow account for 12&ndash;24 months to fund potential
            indemnification claims. For a $3&thinsp;M deal, that means
            $300&thinsp;K&ndash;$600&thinsp;K sitting in escrow.</li>
        </ul>

        <h3 className={h3Class}>2. Included and Excluded Assets</h3>
        <p>
          The asset schedule is the heart of the APA. It determines
          exactly what you are buying.
        </p>
        <ul className={ulClass}>
          <li><strong>Included assets (typical):</strong> tangible
            property (equipment, vehicles, furniture, inventory),
            intangible property (goodwill, trade names, patents,
            customer lists, proprietary software), assignable contracts,
            permits and licenses, accounts receivable, prepaid expenses,
            and the company&rsquo;s phone numbers and web domains.</li>
          <li><strong>Excluded assets (typical):</strong> cash and
            bank accounts, the seller&rsquo;s corporate minute books,
            tax refunds related to pre-closing periods, personal assets
            of the owner, and any assets unrelated to the business
            being purchased.</li>
          <li><strong>Negotiation tip:</strong> Use broad &ldquo;catch-all&rdquo;
            language such as &ldquo;all assets used in or relating to
            the Business&rdquo; and then attach a detailed schedule of
            excluded items. This approach protects you against
            accidental omissions of assets the parties forgot to list.</li>
        </ul>

        <h3 className={h3Class}>3. Assumed and Excluded Liabilities</h3>
        <p>
          This is where the APA&rsquo;s liability-shielding power lives.
          In an asset purchase, you only assume the liabilities
          explicitly listed in the agreement&mdash;everything else stays
          with the seller.
        </p>
        <ul className={ulClass}>
          <li><strong>Typically assumed:</strong> obligations under
            assigned contracts arising after closing, warranty claims on
            products sold post-closing, accrued employee PTO (if you
            agree to honor it), and trade payables included in the
            working capital calculation.</li>
          <li><strong>Typically excluded:</strong> all pre-closing debts,
            bank loans, income and payroll taxes, pension and benefit
            plan obligations, product-liability claims for pre-closing
            sales, environmental remediation costs, and any litigation
            pending as of closing.</li>
          <li><strong>Watch out for successor liability:</strong> Even in
            an asset purchase, courts in some states impose liability on
            buyers under the &ldquo;continuity of enterprise&rdquo; or
            &ldquo;de facto merger&rdquo; doctrine. Discuss with your
            attorney whether your state recognizes these exceptions and
            build corresponding indemnification protections into the APA.</li>
        </ul>

        <h3 className={h3Class}>4. Representations and Warranties</h3>
        <p>
          Reps and warranties are factual statements each party makes to
          induce the other to close. They serve two functions: (1) a
          disclosure mechanism that forces the seller to reveal material
          facts during{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            due diligence
          </Link>, and (2) the legal basis for indemnification claims if
          those statements turn out to be false.
        </p>
        <p><strong>Seller&rsquo;s typical reps (20&ndash;30+ categories):</strong></p>
        <ul className={ulClass}>
          <li>Organization, good standing, and authority to sell.</li>
          <li>Accuracy of financial statements and absence of undisclosed liabilities.</li>
          <li>Title to assets, free and clear of liens.</li>
          <li>Compliance with laws, permits, and environmental regulations.</li>
          <li>Validity and enforceability of material contracts.</li>
          <li>Condition of inventory (saleable, not obsolete).</li>
          <li>Status of accounts receivable (valid, collectible).</li>
          <li>No material adverse change since the latest financial statements.</li>
          <li>Employee matters: no pending labor disputes, WARN Act compliance, benefit plan status.</li>
          <li>Tax compliance for all pre-closing periods.</li>
        </ul>
        <p><strong>Buyer&rsquo;s typical reps (5&ndash;8 categories):</strong></p>
        <ul className={ulClass}>
          <li>Organization and authority to purchase.</li>
          <li>Sufficient funds or committed financing to close.</li>
          <li>No litigation or regulatory proceedings that would prevent closing.</li>
        </ul>
        <p>
          <strong>Negotiation tip:</strong> Pay close attention to
          &ldquo;knowledge qualifiers&rdquo; (e.g., &ldquo;to the
          Seller&rsquo;s knowledge&rdquo;). A broad knowledge qualifier
          can gut a representation&rsquo;s protective value. Push for
          &ldquo;actual knowledge after reasonable inquiry&rdquo; to
          ensure the seller has an obligation to investigate rather
          than simply plead ignorance.
        </p>

        <h3 className={h3Class}>5. Indemnification</h3>
        <p>
          Indemnification is your primary post-closing remedy if the
          seller&rsquo;s representations prove false or if excluded
          liabilities surface after the deal closes. Three variables
          define its economic impact:
        </p>
        <ol className={olClass}>
          <li><strong>Basket (deductible):</strong> The minimum dollar
            threshold of losses before indemnification kicks in. In
            small-business deals, baskets typically range from 0.5% to
            1.5% of the purchase price. A &ldquo;tipping basket&rdquo;
            means the buyer recovers from dollar one once the threshold
            is crossed; a &ldquo;true deductible&rdquo; means the buyer
            absorbs the basket amount permanently. Buyers should push
            for a tipping basket.</li>
          <li><strong>Cap:</strong> The maximum aggregate liability for
            indemnification claims. Market data from the American Bar
            Association&rsquo;s Private Target M&amp;A Deal Points Study
            shows a median cap of approximately 10% of enterprise value
            for general reps, though in smaller transactions the cap
            frequently reaches 25%&ndash;50% of the purchase price.
            &ldquo;Fundamental&rdquo; reps (title, authority, taxes)
            are typically carved out with higher caps, often up to 100%
            of the purchase price.</li>
          <li><strong>Survival period:</strong> How long after closing a
            buyer can bring a claim. General reps typically survive
            12&ndash;24 months; fundamental reps survive until the
            applicable statute of limitations (often 3&ndash;6 years);
            tax reps survive for the full tax-audit window (typically
            3 years, or 6 years if there is a substantial omission of
            income).</li>
        </ol>
        <p>
          <strong>Escrow enforcement:</strong> Without an escrow, you
          are chasing a seller who may have dissolved the entity and
          spent the proceeds. Always insist on a funded escrow or, at
          minimum, a seller holdback note with offset rights.
        </p>

        <h3 className={h3Class}>6. Closing Conditions</h3>
        <p>
          Conditions precedent determine what must happen before either
          party is obligated to close. Typical buyer-side conditions
          include:
        </p>
        <ul className={ulClass}>
          <li>All seller reps remain true and correct as of closing.</li>
          <li>Seller has complied with all pre-closing covenants (e.g., operating the business in the ordinary course).</li>
          <li>Third-party consents for key contracts, leases, and permits have been obtained.</li>
          <li>No material adverse effect has occurred since signing.</li>
          <li>Buyer has obtained committed financing (if applicable).</li>
          <li>Required regulatory approvals have been received.</li>
          <li>Seller has delivered all closing deliverables: bills of sale, assignment agreements, non-compete agreements, transition services agreement, and FIRPTA certificate.</li>
        </ul>
        <p>
          <strong>Negotiation tip:</strong> Make assignment of the
          facility lease and the top five customer contracts
          explicit closing conditions. If those consents cannot
          be obtained, you want the legal right to walk away
          rather than being forced to close on a business whose
          value has been materially impaired.
        </p>

        {/* ───────────── SECTION 3 ───────────── */}
        <h2 className={h2Class}>Working Capital Adjustments in APAs</h2>
        <p>
          The{" "}
          <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
            working capital adjustment
          </Link>{" "}
          ensures you receive the business with enough current assets to
          operate from day one. Here is how it works in practice:
        </p>
        <ol className={olClass}>
          <li><strong>Set a target (the &ldquo;peg&rdquo;):</strong>{" "}
            During diligence, both sides agree on a normalized level
            of net working capital (current assets minus current
            liabilities). The most common approach uses a 12-month
            trailing average.</li>
          <li><strong>Estimate at closing:</strong> Two to five days
            before closing, the seller delivers an estimated closing
            balance sheet. The purchase price is adjusted up or down
            based on the estimated working capital versus the peg.</li>
          <li><strong>True-up post-closing:</strong> Within 60&ndash;90
            days after closing, the buyer prepares a final working
            capital calculation. If actual working capital exceeds the
            estimate, the buyer pays the difference; if it falls
            short, the seller refunds the shortfall.</li>
        </ol>
        <p>
          Common dispute triggers include disagreements over
          inventory valuation methods (FIFO vs. weighted average),
          the collectibility of accounts receivable, and the
          treatment of customer deposits. Specify the accounting
          methodology in the APA itself&mdash;do not leave it to
          post-closing interpretation.
        </p>

        {/* ───────────── SECTION 4 ───────────── */}
        <h2 className={h2Class}>Post-Closing Adjustments and Covenants</h2>
        <p>
          Beyond working capital, several post-closing mechanisms
          protect the buyer&rsquo;s investment:
        </p>
        <ul className={ulClass}>
          <li><strong>Non-compete / non-solicit:</strong> The seller
            (and often key employees) agrees not to compete with
            the business or solicit its customers and employees for
            a specified period&mdash;typically 3&ndash;5 years within
            a defined geographic area. Courts will enforce reasonable
            restrictions; overly broad covenants risk being struck
            down entirely.</li>
          <li><strong>Transition services agreement (TSA):</strong>{" "}
            The seller provides operational support (introductions
            to key customers, training, IT migration) for 30&ndash;180
            days after closing, usually at no additional cost or for
            a nominal consulting fee.</li>
          <li><strong>Earnout adjustments:</strong> If part of the
            purchase price is performance-based, the APA should
            specify detailed calculation mechanics, dispute
            resolution procedures (often binding arbitration by an
            independent accounting firm), and the buyer&rsquo;s
            obligations regarding operation of the business during
            the earnout period.</li>
          <li><strong>Tail insurance:</strong> The seller should
            maintain (or the buyer should purchase) &ldquo;tail&rdquo;
            coverage extending the seller&rsquo;s existing insurance
            policies for claims arising from pre-closing events
            that are reported after closing.</li>
        </ul>

        {/* ───────────── SECTION 5 ───────────── */}
        <h2 className={h2Class}>Bulk Sales Compliance</h2>
        <p>
          Bulk sales laws (also called bulk transfer acts) were
          designed to prevent a seller from transferring all business
          assets and disappearing before paying its creditors. While
          most U.S. states have repealed their bulk sales statutes
          under Article 6 of the Uniform Commercial Code, several
          significant jurisdictions still enforce them, including
          California, Delaware, Illinois, Maryland, New Jersey, and
          Pennsylvania.
        </p>
        <p>
          Where bulk sales laws apply, the buyer must typically:
        </p>
        <ol className={olClass}>
          <li>Obtain a sworn list of the seller&rsquo;s creditors at
            least 10&ndash;12 business days before closing.</li>
          <li>Notify each listed creditor of the pending sale.</li>
          <li>In some states (notably California and New Jersey),
            publish notice of the sale in a local newspaper.</li>
          <li>In certain jurisdictions, withhold sale proceeds in
            escrow until the seller&rsquo;s tax obligations are
            cleared through a &ldquo;bulk sales tax clearance
            certificate.&rdquo;</li>
        </ol>
        <p>
          <strong>Consequence of non-compliance:</strong> The sale may
          be deemed &ldquo;voidable&rdquo; as to the seller&rsquo;s
          creditors, meaning they can pursue the transferred assets
          in the buyer&rsquo;s hands. To mitigate this risk, many APAs
          include an indemnification provision where the seller agrees
          to indemnify the buyer for any losses resulting from
          non-compliance with bulk sales requirements.
        </p>

        {/* ───────────── SECTION 6 ───────────── */}
        <h2 className={h2Class}>Common Pitfalls That Derail APA Closings</h2>
        <p>
          Even well-negotiated APAs can fall apart. Here are the
          failure modes experienced acquirers watch for:
        </p>
        <ol className={olClass}>
          <li><strong>Unassignable contracts:</strong> The facility
            lease, a key customer contract, or a critical software
            license contains an anti-assignment clause. If the
            landlord or counterparty refuses consent, the business
            may lose a material portion of its value. Always identify
            anti-assignment clauses during{" "}
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            and begin consent negotiations early.</li>
          <li><strong>Sales and use tax surprises:</strong> Transfers
            of tangible personal property in an asset sale trigger
            state sales tax in most jurisdictions. On a $2&thinsp;M
            equipment allocation, a 6%&ndash;8% sales tax adds
            $120&thinsp;K&ndash;$160&thinsp;K to closing costs.
            Check whether your state offers a &ldquo;casual sale&rdquo;
            or &ldquo;bulk sale&rdquo; exemption.</li>
          <li><strong>Misaligned purchase price allocation:</strong>{" "}
            Buyers and sellers have opposing tax incentives. If you
            fail to lock in the allocation in the APA, the IRS may
            re-allocate based on its own analysis. Both parties must
            file consistent Form 8594s.</li>
          <li><strong>Inadequate working capital protections:</strong>{" "}
            Without a well-defined{" "}
            <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
              working capital mechanism
            </Link>, the seller may drain receivables, delay payables,
            or run down inventory between signing and closing, leaving
            you cash-starved on day one.</li>
          <li><strong>Successor liability exposure:</strong> In states
            that recognize the &ldquo;continuity of enterprise&rdquo;
            doctrine (notably Michigan, New Jersey, and California),
            courts may hold the buyer liable for the seller&rsquo;s
            pre-closing obligations if the buyer continues the same
            business with substantially the same employees and
            operations. Comprehensive indemnification and
            representations &amp; warranties insurance (RWI) can
            mitigate this risk.</li>
          <li><strong>Employee re-hiring failures:</strong> In an
            asset purchase, employees do not transfer
            automatically. If key employees decline to join the
            buyer, operational continuity is at risk. Consider
            making retention of identified employees a closing
            condition or signing pre-closing employment agreements.</li>
        </ol>

        {/* ───────────── SECTION 7 ───────────── */}
        <h2 className={h2Class}>Budgeting for APA Legal Costs</h2>
        <p>
          Legal fees are the largest transaction cost in most small-business
          acquisitions. Here is what to expect based on deal size:
        </p>
        <ul className={ulClass}>
          <li><strong>Sub-$1&thinsp;M deals:</strong> $5&thinsp;K&ndash;$15&thinsp;K
            for a straightforward APA with limited negotiation. Many
            attorneys offer flat-fee packages at this level.</li>
          <li><strong>$1&thinsp;M&ndash;$5&thinsp;M deals:</strong>{" "}
            $15&thinsp;K&ndash;$30&thinsp;K is the typical range.
            Complexity increases with earnout provisions, SBA lender
            requirements, and multi-state operations.</li>
          <li><strong>$5&thinsp;M&ndash;$25&thinsp;M deals:</strong>{" "}
            $30&thinsp;K&ndash;$50&thinsp;K or more, particularly if
            the APA includes complex indemnification structures,
            regulatory approvals, or intellectual property assignments.</li>
          <li><strong>Hourly rates:</strong> Business acquisition
            attorneys typically charge $250&ndash;$500 per hour,
            according to ContractsCounsel marketplace data. A senior
            M&amp;A partner at a mid-sized firm may charge $500+
            per hour, while a junior associate handles much of the
            drafting at $250&ndash;$350 per hour.</li>
        </ul>
        <p>
          Beyond legal fees, budget for: escrow agent fees
          ($1&thinsp;K&ndash;$3&thinsp;K), title searches on real
          property ($500&ndash;$2&thinsp;K per parcel), UCC lien
          searches ($200&ndash;$500), environmental assessments
          ($2&thinsp;K&ndash;$10&thinsp;K for a Phase I), and
          state filing fees for bulk sales compliance,
          assumed-name registrations, and entity formation.
        </p>

        {/* ───────────── SECTION 8 ───────────── */}
        <h2 className={h2Class}>Negotiation Strategy: A Section-by-Section Playbook</h2>
        <p>
          Below is a concise buyer&rsquo;s negotiation playbook
          organized by APA section. Use it alongside your{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            letter of intent
          </Link>{" "}
          to ensure key terms are locked in before you spend heavily
          on legal drafting.
        </p>
        <ul className={ulClass}>
          <li><strong>Purchase price:</strong> Anchor the headline
            number in the LOI, but preserve flexibility on allocation.
            Allocate as much as defensibly possible to depreciable
            tangible assets (Class V) and away from{" "}
            <Link href="/learn/goodwill-amortization-tax" className="text-apple-accent hover:underline">
              15-year goodwill
            </Link>.{" "}
            A favorable allocation on a $5&thinsp;M deal can generate
            $200&thinsp;K&ndash;$400&thinsp;K in first-year tax
            savings through bonus depreciation.</li>
          <li><strong>Assets and liabilities:</strong> Start with the
            broadest &ldquo;included&rdquo; language and the narrowest
            &ldquo;assumed liabilities&rdquo; language. Every liability
            should be explicitly named; silence defaults to exclusion.</li>
          <li><strong>Reps and warranties:</strong> Push for
            &ldquo;bring-down&rdquo; reps (seller must re-certify
            accuracy at closing), knowledge qualifiers limited to
            &ldquo;actual knowledge after reasonable inquiry,&rdquo;
            and comprehensive disclosure schedules that update
            between signing and closing.</li>
          <li><strong>Indemnification:</strong> Negotiate a tipping
            basket (not a true deductible), a cap of at least 20%&ndash;25%
            of purchase price for general reps, uncapped liability for
            fraud and fundamental reps, and a survival period of at
            least 18&ndash;24 months for general reps.</li>
          <li><strong>Closing conditions:</strong> Include assignment
            of the real estate lease, consent of top customers/vendors,
            seller&rsquo;s delivery of audited or reviewed financials,
            key employee retention agreements, and landlord estoppel
            certificates.</li>
          <li><strong>Working capital:</strong> Define the peg using a
            12-month trailing average, specify GAAP-consistent
            accounting policies, and set a 60&ndash;90 day true-up
            window with binding expert determination for disputes.</li>
          <li><strong>Post-closing covenants:</strong> Secure a
            non-compete of 4&ndash;5 years (the maximum courts
            typically enforce), a transition services period of at
            least 90 days, and a clear mechanism for resolving
            earnout disputes.</li>
        </ul>

        {/* ───────────── FAQ ───────────── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How long does it take to negotiate and close an APA?</h3>
        <p>
          From signed{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            letter of intent
          </Link>{" "}
          to closing, most small-business asset acquisitions take
          60&ndash;120 days. The APA drafting and negotiation phase
          typically consumes 3&ndash;6 weeks of that timeline. Deals
          with SBA financing, complex regulatory requirements, or
          contentious indemnification negotiations can extend to
          150+ days. The biggest time sink is usually third-party
          consent collection, particularly landlord and customer
          consents.
        </p>

        <h3 className={h3Class}>Can a buyer be held liable for the seller&rsquo;s pre-closing debts in an asset purchase?</h3>
        <p>
          Generally no&mdash;that liability shield is a primary reason
          buyers choose asset structures. However, exceptions exist.
          Courts have imposed successor liability under four doctrines:
          (1) express or implied assumption, (2) fraud or inadequate
          consideration, (3) de facto merger, and (4) mere continuation
          of the seller&rsquo;s business. Additionally, failure to
          comply with bulk sales laws can expose the buyer to claims
          from the seller&rsquo;s creditors. Thorough{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial due diligence
          </Link>{" "}
          and strong indemnification provisions are your best defenses.
        </p>

        <h3 className={h3Class}>What is the difference between a tipping basket and a true deductible?</h3>
        <p>
          Both are indemnification thresholds, but they work differently.
          With a <strong>tipping basket</strong>, once cumulative losses
          exceed the threshold (e.g., $50&thinsp;K on a $5&thinsp;M deal),
          the buyer recovers all losses from the first dollar. With a{" "}
          <strong>true deductible</strong>, the buyer absorbs the
          threshold amount permanently and only recovers losses above
          it. On a $5&thinsp;M deal with a 1% basket ($50&thinsp;K) and
          $200&thinsp;K in losses, a tipping basket yields $200&thinsp;K
          in recovery while a true deductible yields only $150&thinsp;K.
          Buyers should always negotiate for the tipping basket.
        </p>

        <h3 className={h3Class}>Do I need representations and warranties insurance for a small-business APA?</h3>
        <p>
          Representations and warranties insurance (RWI) has historically
          been cost-prohibitive for deals below $20&thinsp;M, with
          minimum premiums of $150&thinsp;K&ndash;$200&thinsp;K. However,
          newer underwriters are offering policies for transactions as
          small as $5&thinsp;M. For sub-$5&thinsp;M acquisitions, a
          well-structured escrow holdback of 15%&ndash;20% of the
          purchase price, combined with robust indemnification provisions,
          typically provides adequate protection at a fraction of
          the cost.
        </p>

        <h3 className={h3Class}>How should I handle employees in an asset purchase?</h3>
        <p>
          Unlike a stock purchase, employees do not transfer
          automatically in an asset deal. You must offer new employment
          to each person you wish to retain. This means issuing new
          offer letters, establishing new benefit plans (health
          insurance, 401(k), PTO policies), and addressing any
          accrued obligations like unused vacation. Identify the
          5&ndash;10 employees most critical to business continuity
          and sign pre-closing employment agreements with them. Some
          buyers make retention of these key employees a closing
          condition to avoid being locked into a deal if the
          management team declines to stay.
        </p>

        <p className="mt-8 text-sm text-apple-gray-500 italic">
          This article is for informational purposes only and does not
          constitute legal or tax advice. Consult a qualified M&amp;A
          attorney and tax advisor before entering into any asset
          purchase agreement.
        </p>
      </div>
    </article>
  );
}
