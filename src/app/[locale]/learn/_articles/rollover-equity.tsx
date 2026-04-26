import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function RolloverEquityArticle() {
  return (
    <article>
      <h1 className={h1Class}>Rollover Equity: Keeping Sellers Invested Post-Acquisition</h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          When a business owner sells to a search fund or private equity buyer,
          rollover equity lets them convert a portion of their proceeds into an
          ownership stake in the post-acquisition entity instead of taking 100%
          cash at close. For sellers, this unlocks tax deferral on the rolled
          amount and a chance to participate in the upside of a well-capitalized,
          professionally managed successor company, a dynamic the
          industry calls the &ldquo;second bite of the apple.&rdquo; For buyers,
          rollover equity reduces the cash required at closing, lowers the debt
          load on the{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack
          </Link>, and creates a powerful alignment mechanism during the
          critical transition period. According to Goodwin&rsquo;s Private
          Equity Deal Database, equity rollovers appeared in 57% of mid-market
          transactions in 2023, up from 46% in 2020, an 11-percentage-point
          surge driven by tighter financing conditions and heightened focus on
          management alignment.
        </p>

        <h2 className={h2Class}>What Rollover Equity Actually Is</h2>
        <p>
          In a standard acquisition, the buyer pays the full enterprise value
          through some combination of cash, debt, and potentially{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller financing
          </Link>. With rollover equity, the seller &ldquo;rolls&rdquo; a
          slice of their existing ownership into the new holding structure
          rather than cashing it out entirely. The seller exchanges shares (or
          membership interests) in the old entity for shares in the acquiring
          entity, and the rolled portion is treated as a contribution of
          property rather than a taxable sale.
        </p>
        <p>
          <strong>Illustrative example:</strong> A search fund acquires a
          services business for a $10 million enterprise value. The seller
          agrees to roll over 20% of proceeds ($2 million) and receive
          $8 million in cash. After closing, the capital structure might
          look like this:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Senior debt (SBA 7a or bank):</strong> $5 million (50% of EV)
          </li>
          <li>
            <strong>Search fund investor equity:</strong> $3 million (30% of EV)
          </li>
          <li>
            <strong>Seller rollover equity:</strong> $2 million (20% of EV)
          </li>
        </ul>
        <p>
          The seller now holds a 20% minority stake in the post-acquisition
          entity alongside the buyer&rsquo;s investors. If the buyer grows the
          business to a $25 million valuation within five years and exits, the
          seller&rsquo;s $2 million rollover becomes worth $5 million , 
          making the total realized value $13 million versus $10 million in an
          all-cash deal.
        </p>

        <h2 className={h2Class}>Why Buyers Want Rollover Equity</h2>
        <p>
          Buyers, especially search fund entrepreneurs and lower-middle-market
          private equity sponsors, negotiate rollover equity for several
          strategic and financial reasons.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Seller alignment during transition.</strong> The single
            biggest risk in any acquisition is the transition period. When a
            seller retains meaningful equity, they are economically motivated to
            onboard the buyer, introduce key customers and vendors, and ensure
            institutional knowledge transfers smoothly. This is far more powerful
            than a consulting agreement because the seller&rsquo;s net worth is
            at stake, not just a monthly fee.
          </li>
          <li>
            <strong>Reduced cash at closing.</strong> Every dollar of rollover
            equity is a dollar the buyer does not need to fund with investor
            capital or debt. In a $10 million deal, a 20% rollover saves
            $2 million in equity raises or bank financing, materially
            improving returns on invested capital. This is why rollover is a
            key component of{" "}
            <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
              capital stack optimization
            </Link>.
          </li>
          <li>
            <strong>Confidence signal to lenders and investors.</strong> When
            an SBA lender or search fund LP sees that the seller is willing to
            leave money on the table, it signals genuine confidence in the
            business&rsquo;s durability. Lenders view rollover favorably because
            it reduces the loan-to-value ratio, and investors treat it as
            implicit due diligence validation.
          </li>
          <li>
            <strong>Lower use.</strong> Rollover equity reduces the total
            debt burden on the company. In a used transaction, this can
            mean the difference between a comfortable 3.0x EBITDA use
            ratio and a strained 4.0x ratio, giving the new operator
            more breathing room for{" "}
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              financial management
            </Link>{" "}
            post-close.
          </li>
          <li>
            <strong>Higher headline price.</strong> Because the buyer&rsquo;s
            effective cash outlay is lower, they can afford to offer a higher
            total enterprise value. Many sellers find that accepting a 15-20%
            rollover results in a 0.5x-1.0x higher multiple than an
            all-cash offer would command.
          </li>
        </ol>

        <h2 className={h2Class}>Benefits and Risks for Sellers</h2>
        <p>
          Rollover equity is not free money, it is a concentrated,
          illiquid investment in a company the seller no longer controls. The
          benefits are meaningful, but the risks deserve equal attention.
        </p>

        <h3 className={h3Class}>Key Benefits</h3>
        <ul className={ulClass}>
          <li>
            <strong>Tax deferral.</strong> When properly structured under IRC
            Section 351 (for corporate entities) or Section 721 (for
            partnerships and LLCs), the rollover is treated as a tax-free
            contribution. The seller defers capital gains tax on the rolled
            portion until they eventually sell their stake in the new entity.
            On a $2 million rollover at a 20% capital gains rate, this defers
            $400,000 in immediate tax liability. Sellers looking at broader{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
              tax optimization strategies
            </Link>{" "}
            should evaluate rollover as one of several deferral tools.
          </li>
          <li>
            <strong>Second bite of the apple.</strong> If the buyer executes a
            successful value-creation plan (operational improvements, add-on
            acquisitions, revenue growth), the seller&rsquo;s minority stake
            can appreciate significantly. In PE-backed deals, sponsors
            typically target a 2.5x-3.0x return on equity over a
            3-5 year hold period. A seller who rolled 20% at the
            platform acquisition stands to realize substantial additional
            value on their retained stake.
          </li>
          <li>
            <strong>Ongoing distributions.</strong> If the post-acquisition
            entity generates distributable cash flow, the rollover holder
            receives their pro-rata share. In cash-flowing service businesses
            common in search fund deals, annual distributions of 5-15%
            of equity value are not uncommon.
          </li>
          <li>
            <strong>Higher total consideration.</strong> As noted above,
            buyers often pay more when rollover reduces their cash burden. The
            total package, cash plus rollover, may exceed what
            an all-cash bid would have been.
          </li>
        </ul>

        <h3 className={h3Class}>Key Risks</h3>
        <ul className={ulClass}>
          <li>
            <strong>Illiquidity.</strong> Rollover stakes in private companies
            have no public market. The seller&rsquo;s capital is locked up
            until a liquidity event (buyer exit, put option exercise, or
            secondary sale) that could be 3-7 years away. If the seller
            has personal financial needs during that period, the illiquidity
            is a genuine hardship.
          </li>
          <li>
            <strong>Loss of control.</strong> As a minority stakeholder, the
            seller has limited ability to influence operations, capital
            allocation, or the timing of exit. The buyer makes day-to-day
            decisions, and a seller who disagrees with the strategic direction
            has little recourse beyond their contractual protections.
          </li>
          <li>
            <strong>Concentration risk.</strong> The seller already had 100%
            of their net worth in this business. Rollover equity means they
            remain concentrated in the same asset. If the business
            deteriorates under new management, the rollover stake can lose
            significant value. Sellers should understand{" "}
            <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
              exit strategy
            </Link>{" "}
            timing to balance this risk.
          </li>
          <li>
            <strong>Structural subordination.</strong> In a used deal,
            the rollover equity sits below senior debt and any mezzanine
            layers in the capital structure. If the business underperforms and
            the debt burden becomes unsustainable, the equity , 
            including the rollover, is the first to absorb losses.
          </li>
        </ul>

        <h2 className={h2Class}>Typical Rollover Percentages by Deal Type</h2>
        <p>
          Rollover percentages vary widely depending on the buyer profile,
          transaction size, and the parties&rsquo; respective negotiating
          use. Industry data from SRS Acquiom, Goodwin, and PCE Companies
          reveals the following ranges:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Search fund and self-funded acquisitions (5-20%):</strong>{" "}
            Most search fund entrepreneurs negotiate 10-20% rollover.
            The smaller end (5-10%) is common when the buyer has ample
            investor equity; the higher end applies when the buyer needs to
            minimize cash at close or when the SBA lender requires it.
          </li>
          <li>
            <strong>Lower-middle-market PE ($10M-$100M deals, 15-30%):</strong>{" "}
            PE sponsors typically ask for 20-30% rollover to ensure
            meaningful skin in the game from the management team. Goodwin data
            shows these percentages have been rising as financing conditions
            tightened between 2021 and 2024.
          </li>
          <li>
            <strong>Upper-middle-market PE ($100M+ deals, 20-40%):</strong>{" "}
            Larger transactions may involve 30-40% rollover,
            particularly in management-led buyouts where the operating team
            is also the selling shareholder. Linden Law Partners reports
            that some sponsors push rollover as high as 49% in sectors where
            management retention is critical.
          </li>
        </ul>
        <p>
          For most search fund deals, the practical sweet spot is 10-20%.
          This is enough to create genuine alignment and provide tax benefits
          without leaving the seller with excessive illiquidity or giving
          them outsized influence over post-acquisition operations.
        </p>

        <h2 className={h2Class}>Tax Deferral Mechanics: IRC Section 351 vs. Section 721</h2>
        <p>
          The tax treatment of rollover equity depends entirely on the legal
          structure of the acquiring entity. Two Internal Revenue Code
          provisions govern most rollover transactions, and getting the
          structure wrong can trigger immediate taxation on the full
          transaction amount. Understanding the entity-level implications is
          closely related to choosing the right{" "}
          <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
            entity structure (C-Corp vs. S-Corp vs. LLC)
          </Link>.
        </p>

        <h3 className={h3Class}>Section 721: Partnership and LLC Rollovers</h3>
        <p>
          IRC Section 721 provides that no gain or loss is recognized when
          a person contributes property to a partnership (or LLC taxed as a
          partnership) in exchange for an interest in that entity. This is
          the most common rollover structure in search fund and lower-middle-market
          deals because most acquisition vehicles are structured as LLCs.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>No control requirement.</strong> Unlike Section 351,
            Section 721 does not require the contributor to hold a minimum
            ownership percentage after the transaction. Even a 5% rollover
            qualifies for tax-free treatment.
          </li>
          <li>
            <strong>Basis carryover.</strong> The seller&rsquo;s tax basis in
            the rollover equity equals their basis in the contributed
            property. If the seller&rsquo;s basis in the business was $500,000
            and they roll over a $2 million stake, their basis in the new LLC
            interest is $500,000 (allocated pro-rata).
          </li>
          <li>
            <strong>Disguised sale risk.</strong> IRC Section 707 contains
            anti-abuse rules that recharacterize certain contributions as
            disguised sales if the contributor receives a &ldquo;related
            allocation&rdquo; or distribution within two years. Proper
            structuring avoids this trap, but it requires M&A tax counsel
            experienced with partnership transactions.
          </li>
        </ul>

        <h3 className={h3Class}>Section 351: Corporate Rollovers</h3>
        <p>
          When the acquiring entity is a C corporation, IRC Section 351
          governs the rollover. The seller contributes their equity to the
          new corporation in exchange for stock, and the transaction is
          tax-free, provided two key requirements are met:
        </p>
        <ol className={olClass}>
          <li>
            <strong>80% control requirement.</strong> The transferors (all
            parties contributing property in the same transaction, not just
            the seller) must collectively own at least 80% of the total
            combined voting power and 80% of all other classes of stock
            immediately after the exchange. In practice, this means the
            rollover must be structured as part of a broader transaction
            where all contributors together satisfy the control test.
          </li>
          <li>
            <strong>Boot recognition.</strong> Any cash or non-stock
            consideration received by the seller (&ldquo;boot&rdquo;) is
            taxable. Only the equity-for-equity portion qualifies for
            deferral. The seller recognizes gain on the boot but defers gain
            on the stock received.
          </li>
        </ol>
        <p>
          According to Koley Jessen, the LLC &ldquo;drop-down&rdquo;
          structure, where the acquiring holding company contributes
          assets into an operating LLC, is &ldquo;often considered
          the most tax-efficient structure when available&rdquo; because it
          combines Section 351 deferral at the holding-company level with
          partnership tax benefits at the operating level.
        </p>

        <h2 className={h2Class}>Structuring and Negotiation Considerations</h2>
        <p>
          The operating agreement (or shareholders&rsquo; agreement) governing
          the rollover holder&rsquo;s rights is one of the most heavily
          negotiated documents in any deal involving rollover equity. Sellers
          should treat this negotiation with the same rigor they apply to the
          purchase price itself. These considerations overlap significantly
          with broader{" "}
          <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
            earn-out and contingent consideration structuring
          </Link>.
        </p>

        <h3 className={h3Class}>Valuation of the Rolled Equity</h3>
        <p>
          The rollover equity must be valued at the same per-unit price as
          the cash portion of the transaction. Accepting a &ldquo;minority
          discount&rdquo; or &ldquo;illiquidity discount&rdquo; at the time
          of the deal is a red flag, it means the buyer is effectively
          paying less per share for the rollover than they are for the
          cash-purchased shares. If the enterprise value is $10 million and
          the seller rolls 20%, the rollover should be credited at exactly
          $2 million, not $1.6 million after a 20% discount.
        </p>

        <h3 className={h3Class}>Governance and Minority Rights</h3>
        <ul className={ulClass}>
          <li>
            <strong>Information rights.</strong> At minimum, the rollover
            holder should receive quarterly financial statements, annual
            budgets, and prompt notice of any material adverse changes.
          </li>
          <li>
            <strong>Consent rights.</strong> The seller should negotiate
            veto power over existential decisions: sale of substantially all
            assets, issuance of equity that would dilute the rollover, taking
            on debt above an agreed threshold, and related-party transactions.
          </li>
          <li>
            <strong>Board representation.</strong> For rollover stakes above
            15-20%, a board observer seat is common. Full board seats
            are rare below 25% ownership but can be negotiated in
            founder-friendly deals.
          </li>
          <li>
            <strong>Anti-dilution protections.</strong> The seller should
            ensure that the buyer cannot issue additional equity (for example,
            to fund add-on acquisitions) without either offering pro-rata
            participation rights or adjusting the rollover holder&rsquo;s
            stake to prevent dilution.
          </li>
        </ul>

        <h3 className={h3Class}>Exit and Liquidity Provisions</h3>
        <ul className={ulClass}>
          <li>
            <strong>Tag-along rights.</strong> If the buyer sells their
            controlling stake to a third party, the rollover holder has the
            right to sell at the same price and on the same terms. This is
            the most important protection for a minority holder.
          </li>
          <li>
            <strong>Drag-along rights.</strong> The buyer can force all
            equity holders (including the rollover holder) to participate
            in a qualifying sale event. This prevents a minority holder from
            blocking an exit that benefits the majority.
          </li>
          <li>
            <strong>Put option.</strong> The seller can force the company
            to repurchase their rollover stake after a specified period
            (typically 3-5 years). The put price is usually set at
            fair market value determined by an independent appraiser or a
            formula (e.g., trailing 12-month EBITDA multiplied by an agreed
            multiple).
          </li>
          <li>
            <strong>Call option.</strong> The buyer can force the purchase
            of the rollover stake, typically at fair market value or a slight
            premium. This gives the buyer flexibility to clean up the cap
            table before a future exit or refinancing event.
          </li>
          <li>
            <strong>Right of first refusal (ROFR).</strong> If the seller
            wants to transfer their rollover to a third party, the buyer
            and/or the company has the right to purchase it first at the
            same price.
          </li>
        </ul>

        <h2 className={h2Class}>Worked Example: Tax Impact of Rollover vs. All-Cash</h2>
        <p>
          Consider a seller who built a business with a tax basis of
          $500,000 and sells it for a $10 million enterprise value. The
          seller&rsquo;s long-term capital gains rate is 23.8% (20% federal
          plus 3.8% net investment income tax). Here is how the two
          scenarios compare:
        </p>

        <h3 className={h3Class}>Scenario A: All-Cash Sale ($10M)</h3>
        <ul className={ulClass}>
          <li>Gross proceeds: $10,000,000</li>
          <li>Tax basis: $500,000</li>
          <li>Taxable gain: $9,500,000</li>
          <li>Federal capital gains tax (23.8%): $2,261,000</li>
          <li>Net after-tax proceeds: $7,739,000</li>
        </ul>

        <h3 className={h3Class}>Scenario B: 20% Rollover ($8M Cash + $2M Rollover)</h3>
        <ul className={ulClass}>
          <li>Cash proceeds: $8,000,000</li>
          <li>Allocated tax basis on cash portion (80%): $400,000</li>
          <li>Taxable gain on cash portion: $7,600,000</li>
          <li>Federal capital gains tax at close (23.8%): $1,808,800</li>
          <li>Net after-tax cash at close: $6,191,200</li>
          <li>Rollover equity value: $2,000,000 (tax basis: $100,000)</li>
          <li>Tax deferred: $452,200</li>
        </ul>
        <p>
          The seller defers $452,200 in taxes by rolling over 20%. If the
          rollover stake appreciates to $5 million at a future exit (Year 5),
          the deferred gain plus additional appreciation is taxed then , 
          but the time value of $452,200 over five years (at a 6% discount
          rate) is worth approximately $114,000 in present-value savings.
          Meanwhile, the seller has participated in $3 million of value
          creation on the $2 million rollover stake.
        </p>
        <p>
          State-level capital gains taxes (which vary from 0% in states
          like Texas and Florida to 13.3% in California) can amplify the
          deferral benefit substantially. Sellers should work closely with
          an M&A tax attorney to model the specific numbers for their
          jurisdiction. Broader{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization strategies
          </Link>{" "}
          can further enhance after-tax outcomes when combined with rollover.
        </p>

        <h2 className={h2Class}>When Rollover Equity Works Best</h2>
        <p>
          Rollover equity is not appropriate for every deal. It works best
          under specific conditions:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Seller confidence in the buyer.</strong> The seller must
            genuinely believe the buyer will grow the business. If the seller
            is exiting because they see headwinds, rolling equity into a
            declining asset destroys value. Sellers should conduct their own{" "}
            <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            on the buyer&rsquo;s track record and business plan.
          </li>
          <li>
            <strong>Strong cash flow for distributions.</strong> Rollover
            is most appealing when the business generates sufficient free
            cash flow to pay distributions to equity holders while also
            servicing debt. A business with thin margins and heavy capex
            requirements may not produce meaningful distributions, making
            the rollover purely a bet on terminal exit value.
          </li>
          <li>
            <strong>Clear path to a second exit.</strong> The rollover
            holder needs a realistic path to liquidity, whether
            through a put option, a sponsor-led recapitalization, or a
            strategic sale to a third party. Without a defined{" "}
            <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
              exit strategy
            </Link>, the rollover can become a permanent minority position
            with no way to realize value.
          </li>
          <li>
            <strong>Transition-dependent businesses.</strong> Companies where
            the owner has deep relationships with customers, suppliers, or
            employees benefit most from rollover because it keeps the seller
            engaged during the handoff. Businesses that can operate
            independently of the founder (e.g., those with strong management
            teams) may not need the alignment mechanism.
          </li>
          <li>
            <strong>Tax-sensitive sellers.</strong> Sellers in high-tax
            jurisdictions (California, New York, New Jersey) or those with
            very low basis in their business realize the greatest deferral
            benefit from rollover structures.
          </li>
        </ul>

        <h2 className={h2Class}>Rollover Equity vs. Earn-Outs vs. Seller Financing</h2>
        <p>
          All three structures reduce cash at close and align seller
          incentives, but they differ in mechanics, risk profile, and tax
          treatment. Buyers and sellers should understand when each tool
          is most appropriate.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Rollover equity</strong> gives the seller an ownership
            stake with upside participation, tax deferral, and exposure to
            overall company performance. It is simplest to administer and
            provides the strongest long-term alignment. Detailed comparison
            with{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-out structures
            </Link>{" "}
            is essential for sellers evaluating their options.
          </li>
          <li>
            <strong>Earn-outs</strong> tie additional payments to specific
            performance metrics (revenue, EBITDA, customer retention) over
            a defined period (typically 1-3 years). They bridge
            valuation gaps but are taxed as ordinary income and are
            notoriously contentious to administer. Earn-outs end; rollover
            equity persists until exit.
          </li>
          <li>
            <strong>
              <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
                Seller financing
              </Link>
            </strong>{" "}
            is a promissory note from the buyer to the seller, typically
            5-15% of the purchase price at a fixed interest rate over
            3-7 years. It provides a fixed return with no upside
            participation, sits higher in the capital structure than equity,
            and may qualify for installment sale treatment under IRC Section
            453 (spreading gain recognition over the payment period).
          </li>
          <li>
            <strong>Combination structures.</strong> Sophisticated deals
            often combine all three: 60-70% cash at close, 10-15%
            seller note, 10-15% rollover equity, and a 5-10%
            earn-out. This diversifies the seller&rsquo;s risk across
            different payout mechanisms while minimizing the buyer&rsquo;s
            upfront cash requirement.
          </li>
        </ul>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          Can a seller negotiate the rollover percentage down after the LOI?
        </h3>
        <p>
          Yes, but it depends on use. The letter of intent typically
          specifies a target rollover percentage, but the definitive
          agreement is where the final number is locked. Sellers with
          competitive bidding use (multiple offers) have successfully
          negotiated rollover down from 25% to 10-15% during
          definitive documentation. However, pushing rollover to zero after
          agreeing to it in the LOI can crater a deal, buyers view
          rollover as a trust signal, and withdrawing it suggests the seller
          lacks confidence in the business.
        </p>

        <h3 className={h3Class}>
          What happens to rollover equity if the business fails?
        </h3>
        <p>
          The rollover holder is an equity investor, which means they sit
          at the bottom of the capital structure. If the business fails, the
          rollover equity is typically worth zero. Senior lenders, mezzanine
          holders, and other creditors are repaid first. The seller may be
          able to claim a capital loss on their tax return for the loss of
          the rollover stake, but this is small consolation compared to the
          economic loss. This risk is precisely why sellers should never
          roll more than they can afford to lose entirely.
        </p>

        <h3 className={h3Class}>
          Does rollover equity affect the SBA loan in a search fund deal?
        </h3>
        <p>
          SBA 7(a) lenders generally permit rollover equity structures, but
          they impose conditions. The rollover cannot be used to artificially
          inflate the purchase price, and the seller&rsquo;s retained equity
          must be at fair market value. Some SBA lenders view seller rollover
          favorably because it reduces the loan amount and demonstrates
          seller confidence. Others may require the rollover to be structured
          as a standby equity position that cannot receive distributions
          until the SBA loan is repaid. Consult your SBA lender early in
          the process, ideally before the LOI stage.
        </p>

        <h3 className={h3Class}>
          How is rollover equity taxed when the seller eventually exits?
        </h3>
        <p>
          When the seller sells their rollover stake (via a put option,
          tag-along in a buyer exit, or other liquidity event), they
          recognize capital gain equal to the sale price minus their
          carryover tax basis. Using the worked example above: if the
          seller&rsquo;s basis in the rollover is $100,000 and they sell
          the stake for $5 million, the taxable gain is $4.9 million. The
          gain is taxed at the long-term capital gains rate (currently
          20% federal plus 3.8% NIIT for high earners). The deferral is
          not forgiveness, the tax is eventually paid, but the seller
          benefits from the time value of the deferred amount and potentially
          from lower tax rates if rates decrease between the acquisition and
          the exit.
        </p>

        <h3 className={h3Class}>
          Can the seller roll equity in an asset purchase (as opposed to a stock deal)?
        </h3>
        <p>
          Yes, but the structure is different. In an asset purchase, the
          buyer acquires individual assets rather than the entity itself.
          The seller cannot &ldquo;roll&rdquo; assets directly; instead,
          the transaction is typically structured so that the seller
          contributes a portion of the assets to the new acquiring entity
          (usually an LLC) in exchange for membership interests under
          Section 721. Alternatively, the transaction can be structured as
          a two-step process: the seller first contributes 100% of the
          assets to a new LLC with the buyer, then the LLC distributes
          cash to the seller for the non-rolled portion. This requires
          careful tax structuring to avoid disguised-sale treatment under
          IRC Section 707, so experienced M&A tax counsel is essential.
        </p>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li>
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            Seller Financing: Structures &amp; Terms
          </Link>
        </li>
        <li>
          <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
            Earn-Outs &amp; Contingent Consideration
          </Link>
        </li>
        <li>
          <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
            C-Corp vs. S-Corp vs. LLC: Choosing Your Entity Structure
          </Link>
        </li>
        <li>
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            Capital Stack Explained
          </Link>
        </li>
        <li>
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            Tax Optimization for Acquisitions
          </Link>
        </li>
        <li>
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            Financial Due Diligence Checklist
          </Link>
        </li>
        <li>
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">
            Exit Strategies for Search Fund CEOs
          </Link>
        </li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Goodwin Procter LLP, <em>Use of Equity Rollovers Continues to Rise Amid Market Uncertainty</em> (2024)
        </li>
        <li>
          Koley Jessen, <em>Rollover Equity: An Overview of Tax-Deferred Structures for Founders and Private Equity Firms</em> (2024)
        </li>
        <li>
          Alston &amp; Bird LLP, <em>Federal Tax Advisory: Equity Rollovers</em> (2023)
        </li>
        <li>
          Cranfill Sumner LLP, <em>Rollover Equity in M&amp;A, Investment or Illusion?</em> (2025)
        </li>
        <li>
          SRS Acquiom, <em>M&amp;A Deal Terms Study: Rollover Equity Trends</em> (2024)
        </li>
        <li>
          Linden Law Partners, <em>Rollover Equity in M&amp;A: Structure, Terms &amp; Key Considerations</em> (2024)
        </li>
        <li>
          Class VI Partners, <em>How Does Rollover Equity Work? A Primer for Sellers</em> (2024)
        </li>
        <li>
          PCE Companies, <em>Key Considerations in an Equity Rollover</em> (2024)
        </li>
      </ul>
    </article>
  );
}
