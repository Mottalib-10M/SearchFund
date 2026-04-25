import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function WorkingWithBrokersArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Working with Business Brokers: A Buyer&rsquo;s Complete Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          Business brokers and M&amp;A intermediaries control an estimated
          50-70% of all small and mid-market deal flow. If you are
          acquiring a company, your ability to build productive broker
          relationships will directly shape the quality, volume, and pricing
          of opportunities that reach your desk. But brokers work for sellers,
          not buyers, a structural reality that creates specific dynamics
          you need to understand before your first phone call. This guide
          covers the intermediary market by deal size, how commissions
          actually work, what makes brokers prioritize certain buyers, how to
          read a CIM with healthy skepticism, and how to manage the
          relationship from first contact through closing day.
        </p>

        {/* ─── SECTION 1 ─── */}
        <h2 className={h2Class}>
          Types of Intermediaries: Main Street Brokers to Investment Banks
        </h2>
        <p>
          The term &ldquo;business broker&rdquo; covers a wide spectrum of
          professionals. The intermediary you encounter depends almost entirely
          on the size of the transaction. Understanding these tiers prevents
          the common mistake of applying Main Street expectations to a
          middle-market process, or vice versa.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Main Street brokers</strong> (businesses priced under $2M):
            These are high-volume brokers handling restaurants, dry cleaners,
            small service companies, and franchise resales. Franchise networks
            like Sunbelt Business Brokers, Transworld Business Advisors, and
            Murphy Business dominate this tier. Many agents operate part-time
            or as solo practitioners. According to the{" "}
            <a
              href="https://www.ibba.org/resource-center/industry-research/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              IBBA Market Pulse surveys
            </a>
            , only about 20% of Main Street listings actually close, so
            expect a large volume of listings with variable quality.
          </li>
          <li>
            <strong>Professional brokers</strong> (businesses priced $2M-$10M):
            These intermediaries handle more established companies with
            multiple employees and documented financials. They tend to carry
            fewer listings simultaneously (8-15 at a time) and invest
            more effort in preparing each business for sale. Look for brokers
            with CBI (Certified Business Intermediary) or M&amp;AMI
            designations from the{" "}
            <a
              href="https://www.ibba.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              International Business Brokers Association
            </a>.
          </li>
          <li>
            <strong>M&amp;A advisors</strong> (enterprise value $5M-$50M):
            These firms typically charge a retainer ($5,000-$15,000/month)
            plus a success fee. They run structured sale processes with
            management presentations, multiple bid rounds, and detailed data
            rooms. Firms in this tier include Generational Equity, Woodbridge
            International, and regional boutiques.
          </li>
          <li>
            <strong>Investment banks</strong> (enterprise value $25M+):
            Full-scale auction processes with institutional-grade marketing
            materials. Minimum fees of $250,000-$500,000 are common.
            Buyers encounter formal process letters, strict deadlines, and
            competition from private equity firms. Think Houlihan Lokey,
            Lincoln International, and Harris Williams at the upper end.
          </li>
        </ul>
        <p>
          For search fund buyers targeting $1M-$5M EBITDA businesses,
          the sweet spot is professional brokers and lower-middle-market M&amp;A
          advisors. These intermediaries handle deals large enough to support
          a full-time owner-operator but small enough to avoid intense PE
          auction competition. Build your{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategy
          </Link>{" "}
          around this reality.
        </p>

        {/* ─── SECTION 2 ─── */}
        <h2 className={h2Class}>
          Commission Structures: What Brokers Actually Earn
        </h2>
        <p>
          Broker commissions are paid by the seller, not the buyer. That
          single fact defines the relationship: the broker&rsquo;s fiduciary
          duty runs to the seller, and their financial incentive is to
          maximize the sale price. But brokers also need deals to close
          (no close = no commission), which creates a secondary incentive
          to keep both sides at the table.
        </p>
        <p>
          Commission structures vary by deal size, as documented by{" "}
          <a
            href="https://morganandwestfield.com/knowledge/business-broker-and-ma-advisor-fees-a-thorough-guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Morgan &amp; Westfield&rsquo;s fee guide
          </a>:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Under $1M sale price:</strong> Flat 8-12% commission,
            with 10% being the industry standard. A $600,000 deal at 10%
            generates $60,000 for the broker. Minimum fees of
            $10,000-$25,000 apply to very small transactions.
          </li>
          <li>
            <strong>$1M-$5M (Double Lehman scale):</strong> 10% on the
            first $1M, 8% on the second, 6% on the third, 4% on the fourth,
            2% on the fifth. A $5M deal under this formula produces a
            $300,000 fee, a 6% effective rate, as explained by{" "}
            <a
              href="https://www.midstreet.com/blog/double-lehman-scale-business-broker-commission"
              target="_blank"
              rel="noopener noreferrer"
              className="text-apple-accent hover:underline"
            >
              MidStreet Mergers &amp; Acquisitions
            </a>.
          </li>
          <li>
            <strong>$5M-$25M:</strong> Negotiated success fees typically
            ranging 3-5% of enterprise value, often layered on top of
            a monthly retainer. Some advisors credit the retainer against the
            success fee; others do not.
          </li>
          <li>
            <strong>$25M+:</strong> Investment banking fees of 1-3%,
            with minimum fees of $250,000-$500,000. The original Lehman
            formula (5-4-3-2-1) was designed for this tier, though most banks
            now negotiate custom structures.
          </li>
        </ul>
        <p>
          A critical detail for buyers: confirm whether the broker&rsquo;s
          fee is calculated on equity value or enterprise value. On a $10M
          deal with $3M in debt, a 5% fee on enterprise value is $500,000
          versus $350,000 on equity value, a $150,000 difference that
          affects the seller&rsquo;s net proceeds and, indirectly, their
          flexibility on price. This matters when you&rsquo;re assessing{" "}
          <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">
            what a business is worth
          </Link>.
        </p>

        {/* ─── SECTION 3 ─── */}
        <h2 className={h2Class}>
          How to Get on a Broker&rsquo;s Priority List
        </h2>
        <p>
          Brokers have a mental ranking of their buyer pool. The best
          opportunities go to the top 3-5 buyers they trust most,
          sometimes before the listing hits BizBuySell or any public
          marketplace. According to a{" "}
          <a
            href="https://www.bizbuysell.com/insight-report/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            BizBuySell Insight Report
          </a>
          , over 90% of business brokers use the platform, but the
          highest-quality listings often trade through private networks
          before they appear online. Here is how to earn priority status:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Register with 15-25 brokers</strong> in your target
            geography and industry. Cast a wide net initially, then deepen
            relationships with the 5-8 who handle the most relevant
            deal flow. This is part of any serious{" "}
            <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">
              proprietary deal flow
            </Link>{" "}
            program.
          </li>
          <li>
            <strong>Submit a specific buyer profile.</strong> &ldquo;I&rsquo;m
            looking for B2B services businesses with $750K-$2M EBITDA
            in the Southeast US, and I have SBA pre-approval for up to $5M
            with 10% equity injection&rdquo; is far stronger than &ldquo;I&rsquo;m
            open to any good business.&rdquo; Vague criteria signal an
            uncommitted buyer.
          </li>
          <li>
            <strong>Prove your financing.</strong> Share an SBA pre-qualification
            letter, proof of funds for the equity portion, or a term sheet
            from your lender. Brokers have been burned by &ldquo;buyers&rdquo;
            who could never actually close. Removing that doubt immediately
            elevates your status.
          </li>
          <li>
            <strong>Respond within 24 hours.</strong> When a broker sends a
            teaser, reply the same day with a clear yes, no, or specific
            follow-up questions. The 2025 BizBuySell data shows businesses
            sell at a median 94% of asking price, good deals move fast,
            and brokers track your response speed.
          </li>
          <li>
            <strong>Take brokers to lunch.</strong> In-person meetings remain
            the single strongest relationship builder. A 45-minute coffee
            establishes more trust than six months of email exchanges. Bring
            a printed one-page buyer summary they can pin to their board.
          </li>
          <li>
            <strong>Close deals.</strong> Nothing earns first-call status
            faster than being a buyer who actually completes transactions.
            Repeat buyers become part of the broker&rsquo;s inner circle.
          </li>
        </ol>

        {/* ─── SECTION 4 ─── */}
        <h2 className={h2Class}>
          Evaluating CIMs with Healthy Skepticism
        </h2>
        <p>
          The Confidential Information Memorandum is a sales document, not an
          audit. Brokers prepare CIMs to present the business in its best
          light, that is literally their job. Your role as a buyer is to
          read between the lines. Here are the specific areas where CIMs
          routinely overstate reality:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Aggressive add-backs.</strong> CIMs often present
            &ldquo;adjusted&rdquo; or &ldquo;seller&rsquo;s discretionary
            earnings&rdquo; that add back the owner&rsquo;s personal
            expenses, one-time costs, and above-market compensation. Calculate
            your own{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link>{" "}
            from the raw financials. A gap of more than 15-20% between
            the CIM&rsquo;s adjusted number and yours is a yellow flag.
          </li>
          <li>
            <strong>Pro-forma projections.</strong> Ignore forward-looking
            revenue projections entirely. They are not grounded in anything
            the seller is willing to guarantee. Focus exclusively on the
            trailing 3 years of actual performance.
          </li>
          <li>
            <strong>Customer concentration.</strong> If the CIM does not
            disclose the percentage of revenue from the top 5 customers,
            request it immediately. Concentration above 20-30% in a
            single customer creates meaningful{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration risk
            </Link>{" "}
            that should be reflected in your valuation.
          </li>
          <li>
            <strong>Working capital gaps.</strong> Many CIMs gloss over{" "}
            <Link href="/learn/working-capital-adjustments" className="text-apple-accent hover:underline">
              working capital adjustments
            </Link>
            . Check whether accounts receivable are current or aging, whether
            inventory levels are normal or bloated, and whether the business
            requires seasonal cash injections.
          </li>
          <li>
            <strong>Tax return cross-reference.</strong> Request 3 years of
            federal tax returns early in the process and compare them line by
            line against the CIM financials. Material discrepancies, revenue
            differences of more than 5%, unexplained expense categories, warrant
            a direct conversation before investing further time.
          </li>
        </ul>
        <p>
          Before finalizing any purchase price, commission a{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings
          </Link>{" "}
          report from an independent accounting firm. A QofE typically costs
          $20,000-$60,000 depending on the business&rsquo;s complexity,
          but it is the single most effective tool for validating (or
          deflating) the numbers in a CIM. Your{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial due diligence
          </Link>{" "}
          process should treat the CIM as a starting hypothesis, not a
          conclusion.
        </p>

        {/* ─── SECTION 5 ─── */}
        <h2 className={h2Class}>
          Managing the Broker Relationship Through the Deal
        </h2>
        <p>
          Once you sign an{" "}
          <Link href="/learn/nda-process" className="text-apple-accent hover:underline">
            NDA
          </Link>{" "}
          and begin engaging on a specific opportunity, the broker becomes
          your primary communication channel with the seller. Managing this
          three-way dynamic well can accelerate a deal by weeks; managing it
          poorly can kill one. IBBA data shows the average Main Street
          deal takes about 6.5 months to close, while lower-middle-market
          transactions average 9 months, plenty of time for
          misunderstandings to derail a transaction.
        </p>
        <p>
          <strong>The standard brokered deal process follows seven stages:</strong>
        </p>
        <ol className={olClass}>
          <li>
            <strong>Teaser / blind profile:</strong> The broker sends an
            anonymous one-page summary (industry, geography, headline
            financials) to gauge your interest.
          </li>
          <li>
            <strong>NDA execution:</strong> You sign a non-disclosure
            agreement to receive the full CIM. Most NDAs are 2-3
            years in duration and are seller-friendly by default.
          </li>
          <li>
            <strong>CIM review and initial questions:</strong> You review
            the full package and submit written questions through the broker.
            Limit your first round to 5-10 substantive questions that
            help you decide whether to proceed.
          </li>
          <li>
            <strong>Buyer-seller meeting:</strong> The broker arranges an
            on-site or video meeting between you and the owner. Prepare
            specific questions about operations, key employees, and the
            owner&rsquo;s transition timeline.
          </li>
          <li>
            <strong>LOI submission:</strong> You submit your{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              Letter of Intent
            </Link>{" "}
            through the broker. The LOI should include price, structure,
            financing contingencies, due diligence period (typically
            60-90 days), and exclusivity terms.
          </li>
          <li>
            <strong>Due diligence:</strong> The broker facilitates document
            exchange and schedules management meetings. Expect 60-90
            days for a thorough review, per IBBA benchmarks.
          </li>
          <li>
            <strong>Closing coordination:</strong> The broker helps
            synchronize attorneys, lenders, landlords, and licensing
            transfers through to the closing table.
          </li>
        </ol>
        <p>
          Throughout this process, maintain one communication rule: never
          contact the seller directly unless the broker explicitly invites
          you to. Going around the broker will get you blacklisted, not
          just from that deal, but across the broker&rsquo;s entire listing
          portfolio and professional network.
        </p>

        {/* ─── SECTION 6 ─── */}
        <h2 className={h2Class}>
          Common Friction Points and How to Handle Them
        </h2>
        <p>
          Every brokered deal has moments of tension. Anticipating these
          friction points prevents them from escalating into deal-breakers.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>The broker pressures you to raise your offer.</strong>{" "}
            This is expected, they represent the seller. Respond with
            data: &ldquo;Based on 4.5x trailing EBITDA and comparable
            transactions in this sector, our offer at $X represents a fair
            price. Here is the analysis.&rdquo; Brokers respect buyers who
            support their position with numbers, not emotions.
          </li>
          <li>
            <strong>Information requests go unanswered for weeks.</strong>{" "}
            Slow document delivery during due diligence is the number-one
            complaint from buyers. Set expectations at the LOI stage:
            include a clause requiring the seller to provide all requested
            documents within 10 business days. When delays occur, escalate
            through the broker first, then consider whether the delay
            signals deeper problems.
          </li>
          <li>
            <strong>The broker reveals competing offers.</strong> Brokers
            sometimes mention other interested buyers to create urgency.
            This may be true or tactical. Respond calmly: &ldquo;I appreciate
            you letting me know. My offer reflects what the business is
            worth to me. If another buyer is willing to pay more, I wish
            them well.&rdquo; This approach, paradoxically, often strengthens
            your position.
          </li>
          <li>
            <strong>The seller wants to renegotiate after LOI.</strong>{" "}
            Sellers sometimes attempt to claw back concessions during due
            diligence, particularly if the buyer uncovers issues that
            justify a price adjustment. Stand firm on legitimate findings:
            a QofE that reveals $200K less EBITDA than the CIM claimed is
            a valid basis for repricing. The broker&rsquo;s job is to
            facilitate this conversation without letting either side walk
            away.
          </li>
          <li>
            <strong>The broker is unresponsive.</strong> If your broker
            consistently takes more than 48 hours to return calls or emails,
            consider whether this reflects their workload (many Main Street
            brokers carry 20-30 listings simultaneously) or their
            assessment of you as a buyer. A direct conversation, &ldquo;I
            want to move quickly on the right deal; what do you need from
            me to make this a priority?&rdquo;, usually clarifies the
            situation.
          </li>
        </ul>

        {/* ─── SECTION 7 ─── */}
        <h2 className={h2Class}>
          Broker Red Flags: When to Walk Away
        </h2>
        <p>
          Not all brokers operate professionally. The business brokerage
          industry has low barriers to entry in most states, many
          require only a real estate license or no license at all. The{" "}
          <a
            href="https://www.websiteclosers.com/resources/red-flags-when-choosing-a-business-broker/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Website Closers broker evaluation checklist
          </a>{" "}
          and{" "}
          <a
            href="https://www.midstreet.com/blog/problems-with-business-brokers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            MidStreet&rsquo;s analysis of common broker problems
          </a>{" "}
          highlight several warning signs:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>No verifiable track record.</strong> A broker who cannot
            provide 3-5 references from completed transactions in the
            past 12 months is either new or has a poor close rate. Either
            way, your deal carries more risk.
          </li>
          <li>
            <strong>Inflated valuations to win listings.</strong> Some brokers
            tell sellers their business is worth far more than market
            comparables support, then gradually reduce the asking price over
            6-12 months. This wasted time harms the seller and
            creates unrealistic expectations you will have to negotiate
            against.
          </li>
          <li>
            <strong>Refusal to share tax returns.</strong> If a broker claims
            the seller &ldquo;prefers not to share tax returns until
            later,&rdquo; that is a serious warning. Tax returns are the
            baseline for verifying any CIM claim. Decline to invest
            significant time or money without them.
          </li>
          <li>
            <strong>Contradictory information.</strong> When financial
            figures change between the teaser, CIM, and verbal
            representations, the broker is either careless or deliberately
            misleading. Either disqualifies them from handling your capital
            deployment.
          </li>
          <li>
            <strong>Pressure to skip due diligence steps.</strong>{" "}
            &ldquo;The seller needs to close quickly&rdquo; or &ldquo;another
            buyer is about to sign&rdquo; are common tactics to rush your
            process. A legitimate broker understands that proper due
            diligence protects everyone, including themselves.
          </li>
          <li>
            <strong>No professional credentials or association
            membership.</strong> While credentials are not mandatory, a
            broker who holds no designation (CBI, M&amp;AMI, or CM&amp;AP)
            and belongs to no professional organization (IBBA, M&amp;A
            Source, AM&amp;AA) has made no investment in professional
            development. Weight this in your assessment.
          </li>
        </ul>

        {/* ─── SECTION 8: FAQ ─── */}
        <h2 className={h2Class}>
          Frequently Asked Questions
        </h2>

        <h3 className={h3Class}>
          Do buyers ever pay broker commissions?
        </h3>
        <p>
          In the vast majority of transactions, the seller pays the broker
          commission. Buyer-side representation does exist, some M&amp;A
          advisory firms will conduct a targeted search on behalf of a buyer
          for a retainer plus success fee, but this is uncommon below
          $10M enterprise value. When a buyer engages a buy-side advisor,
          fees typically range from 3-5% of the purchase price,
          according to{" "}
          <a
            href="https://www.bizquest.com/learn/article/broker-and-ma-advisory-fees/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            BizQuest&rsquo;s advisory fee overview
          </a>
          . For most search fund acquirers, building direct broker
          relationships (as outlined above) is more cost-effective than
          hiring buy-side representation.
        </p>

        <h3 className={h3Class}>
          How many brokers should I work with at once?
        </h3>
        <p>
          Start by registering with 15-25 brokers in your target
          geography, then narrow your active relationships to the 5-8
          who send you the most relevant deal flow. Maintaining too many
          shallow relationships dilutes your effort; maintaining too few
          limits your pipeline. Check in monthly with your top brokers,
          quarterly with the rest. This cadence mirrors what successful
          search fund operators describe in their{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies
          </Link>.
        </p>

        <h3 className={h3Class}>
          Can I contact the seller directly during a brokered deal?
        </h3>
        <p>
          Only if the broker explicitly invites you to do so, which typically
          happens during the buyer-seller meeting stage and sometimes during
          due diligence. Reaching out to the seller without the broker&rsquo;s
          knowledge violates your NDA in many cases and will almost certainly
          get you removed from the deal. Brokers talk to each other, a
          reputation for going around intermediaries will follow you across
          your entire search.
        </p>

        <h3 className={h3Class}>
          What percentage of broker-listed businesses actually sell?
        </h3>
        <p>
          IBBA Market Pulse data indicates that roughly 20% of Main Street
          listings (businesses under $1M) result in a completed sale. The
          close rate improves for larger businesses: approximately 30% of
          businesses in the $1M-$30M revenue range eventually
          transact, according to{" "}
          <a
            href="https://worldwidebusinessbrokers.com/how-many-businesses-sell/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Worldwide Business Brokers
          </a>
          . These figures mean that the majority of businesses you
          evaluate will not result in a deal, factor this into your
          pipeline math and review enough opportunities to maintain
          2-3 active LOI candidates at any given time.
        </p>

        <h3 className={h3Class}>
          Should I rely solely on brokered deal flow?
        </h3>
        <p>
          No. Brokered deals provide faster access to a larger volume of
          opportunities, but they are also more competitive and typically
          priced higher than off-market transactions. Most successful
          acquirers allocate 50-60% of their pipeline to brokered
          channels, 30-40% to{" "}
          <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">
            proprietary deal flow
          </Link>
          , and the remainder to online marketplaces and referral networks.
          The 2025 BizBuySell data shows that 43% of brokers reported
          increased activity from business-school-trained buyers, and
          44% reported more private equity interest, meaning brokered
          deals face growing competition from sophisticated, well-funded
          participants.
        </p>
      </div>
    </article>
  );
}
