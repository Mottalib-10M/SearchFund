import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SecondarySalesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Secondary Sales in Search Fund Portfolios</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund investors commit capital with the understanding that
          liquidity arrives only at exit &mdash; typically five to seven years
          after the initial investment. But life circumstances change. An LP
          may need cash for a divorce settlement, a fund may approach the end
          of its own term, or an institution may decide to rebalance away from
          micro-cap private equity. Secondary sales &mdash; the transfer of an
          existing LP interest to a new buyer before the underlying company is
          sold &mdash; offer a pressure valve. This article explains how
          secondary transactions work in search fund portfolios, how positions
          are priced, what structural hurdles exist, and what the growing
          secondary market means for searchers and investors alike.
        </p>

        <h2 className={h2Class}>What secondary transactions mean in search funds</h2>
        <p>
          In traditional private equity, &ldquo;secondaries&rdquo; refer to
          the purchase and sale of pre-existing investor commitments in a fund
          or direct co-investment. The same logic applies to search funds, but
          the scale and structure differ. A typical search fund raises $400K
          &ndash; $600K in initial capital from 10 &ndash; 20 LPs, then calls
          acquisition capital of $5M &ndash; $20M. An LP holding a $50K unit
          in a search fund cannot simply list it on an exchange. Instead, the
          seller must find a willing buyer, agree on a price, and satisfy any
          transfer restrictions in the fund&apos;s operating documents.
        </p>
        <p>
          Two broad categories exist. <strong>LP-to-LP secondaries</strong> are
          the straightforward case: one limited partner sells their interest to
          another investor. <strong>GP-led secondaries</strong> involve the
          searcher-CEO or fund manager restructuring the vehicle &mdash; often
          through a continuation fund &mdash; to provide liquidity to some
          investors while allowing others to stay invested. Both types are
          becoming more common as the search fund asset class matures and the
          number of outstanding positions grows.
        </p>

        <h2 className={h2Class}>LP-to-LP secondaries: selling your search fund interest</h2>
        <p>
          The simplest secondary is a direct transfer from one LP to another.
          This typically happens when an investor faces a personal liquidity
          event, when a fund-of-funds reaches the end of its term, or when an
          LP loses confidence in the investment thesis. The mechanics follow a
          predictable pattern:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Seller identifies a buyer.</strong> The seller approaches
            other existing LPs, the searcher&apos;s investor network, or a
            secondary broker. Because search fund positions are small
            (often $25K &ndash; $200K per LP), most transactions happen through
            personal relationships rather than formal auctions.
          </li>
          <li>
            <strong>Price negotiation.</strong> Buyer and seller agree on a
            transfer price, typically expressed as a percentage of the
            position&apos;s estimated net asset value (NAV). According to
            industry data from Jefferies&apos; Global Secondary Market Review,
            small-fund LP interests trade at 10 &ndash; 30% discounts to NAV
            due to illiquidity and the lack of competitive bidding.
          </li>
          <li>
            <strong>GP consent and ROFR.</strong> Nearly all search fund LPAs
            include a right of first refusal (ROFR) clause giving the GP or
            existing LPs the option to purchase the interest at the negotiated
            price. The GP also retains discretion to approve or reject any
            incoming investor.
          </li>
          <li>
            <strong>Transfer documentation.</strong> The parties execute an
            assignment agreement, the GP updates the{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap table</Link>,
            and the new LP steps into the seller&apos;s economic position.
          </li>
        </ol>
        <p>
          For the selling LP, a secondary sale crystallizes a loss or locks
          in a partial return. For the buyer, it can be an attractive entry
          point: purchasing a position at a 20% discount to NAV in a company
          that has already de-risked the search and acquisition phases provides
          a meaningful margin of safety.
        </p>

        <h2 className={h2Class}>GP-led secondaries: continuation vehicles and restructurings</h2>
        <p>
          GP-led secondaries are more complex and less common in search funds
          than in traditional PE, but they are emerging. In a typical
          GP-led secondary, the searcher-CEO (who functions as the GP)
          creates a new &ldquo;continuation vehicle&rdquo; that acquires the
          portfolio company from the original search fund entity. Existing LPs
          can either cash out at the offer price or roll their interest into
          the new vehicle.
        </p>
        <p>
          This structure makes sense in specific scenarios:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>The company is performing well but not ready for a full
            exit.</strong> The CEO may believe another two to three years of
            growth will double the business&apos;s value, but some LPs want
            liquidity now.
          </li>
          <li>
            <strong>The original investor group has divergent objectives.</strong>{" "}
            Some LPs want distributions; others prefer reinvestment. A
            continuation vehicle lets each group get what it wants.
          </li>
          <li>
            <strong>The CEO wants to recapitalize for growth.</strong> The new
            vehicle can bring in fresh capital alongside rollover investors,
            funding acquisitions or capital expenditures without the constraints
            of the original fund structure.
          </li>
        </ul>
        <p>
          GP-led transactions require careful{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board governance</Link>{" "}
          to manage conflicts of interest. The GP is effectively on both sides
          of the deal &mdash; setting the price at which the old vehicle sells
          and the new vehicle buys. Best practice calls for an independent
          valuation, a fairness opinion from a third party, and full
          transparency with all LPs before any vote.
        </p>

        <h2 className={h2Class}>How to price a search fund LP position</h2>
        <p>
          Valuing a search fund interest mid-life is harder than valuing a
          public stock. There is no market price, limited comparable
          transaction data, and the position&apos;s value depends heavily on
          the operating performance of a single company. Buyers and sellers
          typically anchor on one of three methods:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Multiple of EBITDA minus net debt.</strong> The most common
            approach. The buyer estimates the company&apos;s enterprise value
            using a trailing or forward EBITDA multiple (typically 4 &ndash; 7x
            for search fund companies), subtracts net debt, and calculates the
            LP&apos;s pro-rata share. For context, Stanford&apos;s 2024 search
            fund study reports median acquisition multiples of roughly 4.5x
            EBITDA, while median exit multiples reach 6 &ndash; 8x &mdash;
            meaning a mid-life valuation often falls somewhere in between.
          </li>
          <li>
            <strong>Discounted cash flow (DCF).</strong> A DCF model projects
            the company&apos;s free cash flows through exit, applies a
            discount rate (often 25 &ndash; 35% for search fund risk), and
            arrives at a present value. This method is more rigorous but
            requires assumptions about exit timing, terminal value, and
            growth rates that are difficult to pin down.
          </li>
          <li>
            <strong>Last-round valuation with adjustments.</strong> If the
            search fund recently raised capital or completed a{" "}
            <Link href="/learn/dividend-recapitalization" className="text-apple-accent hover:underline">dividend recapitalization</Link>,
            the implied valuation from that transaction serves as a reference
            point. Buyers then adjust up or down based on subsequent
            performance.
          </li>
        </ul>
        <p>
          Regardless of method, secondary buyers almost always apply an
          <strong> illiquidity discount</strong>. The typical range is 10 &ndash;
          30% below estimated NAV, with deeper discounts for positions in
          search funds that are still in the search phase (pre-acquisition),
          have limited financial reporting, or impose heavy transfer
          restrictions. A position in a search fund company generating $3M of
          EBITDA with clear{" "}
          <Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">exit pathways</Link>{" "}
          will trade at a tighter discount than a position in a fund where the
          searcher is still looking for an acquisition target.
        </p>

        <h2 className={h2Class}>When LPs seek secondary exits</h2>
        <p>
          Understanding why sellers emerge helps buyers identify
          opportunities and helps searchers anticipate disruptions. The most
          common triggers include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Fund lifecycle constraints.</strong> Institutional LPs
            &mdash; particularly fund-of-funds &mdash; operate under fixed
            terms, often 10 years with limited extensions. If a search fund
            investment is approaching year eight with no exit in sight, the
            fund manager faces pressure to liquidate.
          </li>
          <li>
            <strong>Personal liquidity events.</strong> Individual LPs (who
            make up a large share of search fund investors) may face divorce,
            estate planning needs, or simply want to rebalance personal
            portfolios. According to data from the Search Fund Accelerator,
            roughly 15 &ndash; 20% of search fund LP groups experience at
            least one LP seeking early liquidity during the hold period.
          </li>
          <li>
            <strong>Portfolio rebalancing.</strong> An LP who backed ten
            search funds may have four that performed well and want to trim
            exposure to the other six. A secondary sale lets them concentrate
            on winners without waiting for natural exits.
          </li>
          <li>
            <strong>Loss of confidence.</strong> If the company
            underperforms, if the CEO relationship sours, or if the{" "}
            <Link href="/learn/risk-factors-search-fund" className="text-apple-accent hover:underline">risk profile</Link>{" "}
            changes materially, an LP may prefer to exit at a discount rather
            than ride out an uncertain outcome.
          </li>
          <li>
            <strong>Regulatory or tax changes.</strong> Shifts in tax law
            (such as changes to carried interest treatment or long-term capital
            gains rates) can make early exit economically rational for certain
            investor types.
          </li>
        </ul>

        <h2 className={h2Class}>The emerging secondary market for search fund interests</h2>
        <p>
          For decades, search fund secondaries were ad hoc &mdash; a phone
          call between LPs, a quiet email to the searcher asking if anyone in
          the cap table wanted to buy. That is changing. Several factors are
          accelerating the development of a more structured secondary market:
        </p>
        <p>
          <strong>Growing asset base.</strong> The Stanford study estimates
          that over 500 search funds have been raised since the model&apos;s
          inception, with the pace accelerating sharply after 2015. More
          outstanding positions means more potential sellers and a critical
          mass of transaction activity.
        </p>
        <p>
          <strong>Dedicated secondary buyers.</strong> A handful of firms and
          family offices now actively seek search fund secondary positions,
          viewing the 10 &ndash; 30% illiquidity discount as a systematic
          source of alpha. These buyers bring speed and certainty of close,
          which attracts motivated sellers.
        </p>
        <p>
          <strong>Improved information flow.</strong> As search fund
          investors adopt more standardized reporting &mdash; quarterly
          financials, annual valuations, standardized{" "}
          <Link href="/learn/search-fund-term-sheet" className="text-apple-accent hover:underline">term sheets</Link>{" "}
          &mdash; it becomes easier for secondary buyers to underwrite
          positions without extensive proprietary due diligence.
        </p>
        <p>
          Despite these tailwinds, the market remains small compared to
          traditional PE secondaries. Greenhill&apos;s 2024 secondary market
          report estimated that the total PE secondary market exceeded $130
          billion in transaction volume, while search fund secondaries likely
          represent less than $100 million. The gap reflects both the smaller
          asset base and the friction inherent in transferring positions in
          single-company vehicles with 10 &ndash; 20 investors.
        </p>

        <h2 className={h2Class}>Impact on the searcher-CEO</h2>
        <p>
          When an LP sells their position, the searcher-CEO gets a new
          investor &mdash; possibly one they did not choose. This can be
          neutral, positive, or disruptive depending on who the buyer is and
          what they expect.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Governance continuity.</strong> If the selling LP held a{" "}
            <Link href="/learn/board-governance" className="text-apple-accent hover:underline">board seat</Link>,
            the incoming investor may or may not assume that role. The CEO
            should negotiate the governance implications before consenting to
            the transfer.
          </li>
          <li>
            <strong>Alignment of time horizon.</strong> A secondary buyer who
            purchased at a 25% discount expects a return on a shorter
            timeline. This can create pressure to exit sooner than the CEO
            prefers.
          </li>
          <li>
            <strong>Expertise and network.</strong> On the positive side, a
            secondary buyer may bring operating expertise, industry
            connections, or follow-on capital that the departing LP lacked.
          </li>
          <li>
            <strong>Signal risk.</strong> If multiple LPs sell simultaneously,
            other investors may interpret the activity as a negative signal
            about the company&apos;s prospects &mdash; even if the sales are
            driven by unrelated personal factors.
          </li>
        </ul>
        <p>
          Smart searcher-CEOs address these dynamics proactively. The GP
          consent right is not just a legal formality &mdash; it is a tool
          to curate the investor base. Before approving any transfer, the CEO
          should interview the prospective buyer, understand their
          expectations, and ensure alignment with the company&apos;s operating
          plan and anticipated{" "}
          <Link href="/learn/preparing-company-exit" className="text-apple-accent hover:underline">exit timeline</Link>.
        </p>

        <h2 className={h2Class}>Legal and structural considerations</h2>
        <p>
          Search fund secondary transactions sit at the intersection of
          securities law, partnership law, and fund documentation. Several
          structural elements shape how &mdash; and whether &mdash; a
          transfer can happen:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Right of first refusal (ROFR).</strong> Most search fund
            LPAs grant existing investors or the GP itself a ROFR. If an LP
            negotiates a $75K sale with an outside buyer, the GP or other LPs
            can step in and purchase the interest at the same price. This
            protects the existing investor group but slows the transaction and
            can deter outside buyers who invest time underwriting a deal that
            may be snatched away.
          </li>
          <li>
            <strong>Transfer restrictions.</strong> Many operating agreements
            prohibit transfers during a lock-up period (often two to three
            years post-acquisition), require minimum transfer sizes, or ban
            transfers to competitors or certain categories of investors.
          </li>
          <li>
            <strong>Securities law compliance.</strong> Search fund interests
            are unregistered securities sold under Regulation D exemptions.
            Any transfer must comply with Rule 144 or another exemption, and
            both parties must qualify as accredited investors. The fund
            typically requires a legal opinion confirming the transfer&apos;s
            legality.
          </li>
          <li>
            <strong>Tax allocation.</strong> In LLC-structured search funds,
            the selling LP must account for any unrealized gain or loss at
            the time of transfer. The buyer steps into the seller&apos;s tax
            basis unless a Section 754 election is in place, which can create
            tax inefficiencies. Buyers often request a 754 election as a
            condition of purchase.
          </li>
          <li>
            <strong>Information rights.</strong> The incoming LP inherits
            whatever information rights the fund documents provide. Savvy
            secondary buyers negotiate supplemental information rights &mdash;
            monthly financials, board packages, or direct access to the CEO
            &mdash; as part of the transaction.
          </li>
        </ul>

        <h2 className={h2Class}>Comparison to traditional PE secondaries</h2>
        <p>
          Investors familiar with the broader PE secondary market will find
          search fund secondaries both familiar and distinct. The core
          mechanics &mdash; negotiated price, GP consent, assignment of
          interest &mdash; are the same. But several differences stand out:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Position size.</strong> A typical PE secondary involves
            fund interests worth $5M &ndash; $500M. A search fund secondary
            might involve $25K &ndash; $200K. The small size limits
            institutional interest and raises the per-dollar transaction cost.
          </li>
          <li>
            <strong>Single-asset concentration.</strong> A PE fund secondary
            gives the buyer exposure to a diversified portfolio. A search fund
            secondary is a bet on a single company managed by a single
            CEO &mdash; a fundamentally different risk profile. Investors
            pursuing a{" "}
            <Link href="/learn/portfolio-construction-search-fund" className="text-apple-accent hover:underline">portfolio approach</Link>{" "}
            to search fund investing may assemble a diversified basket of
            secondaries across multiple funds.
          </li>
          <li>
            <strong>Information asymmetry.</strong> PE secondaries benefit from
            standardized quarterly reports, audited financials, and ILPA-
            compliant capital account statements. Search fund reporting varies
            widely &mdash; some CEOs provide detailed quarterly updates while
            others send sporadic emails. This information gap widens the
            bid-ask spread.
          </li>
          <li>
            <strong>GP relationship.</strong> In PE secondaries, the GP is a
            large institution and the transfer is routine. In search funds,
            the GP is often the CEO personally, and a transfer introduces
            a new investor into a small, relationship-driven group.
          </li>
        </ul>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Can I sell my search fund LP interest at any time?</h3>
        <p>
          Not necessarily. Most search fund operating agreements include
          transfer restrictions, lock-up periods, and ROFR provisions that
          limit when and to whom you can sell. You must also comply with
          securities laws governing the transfer of unregistered securities.
          Check your LPA before approaching potential buyers.
        </p>

        <h3 className={h3Class}>What discount to NAV should I expect when selling?</h3>
        <p>
          Discounts typically range from 10 &ndash; 30%, depending on the
          quality of the underlying company, the stage of the investment, the
          availability of financial data, and the urgency of the sale. A
          position in a strong-performing company with clear exit timing
          trades at a tighter discount than one in an early-stage or
          underperforming fund.
        </p>

        <h3 className={h3Class}>How does a secondary sale affect the searcher-CEO?</h3>
        <p>
          The CEO gains a new investor who may have different expectations,
          time horizons, and engagement levels than the departing LP. The CEO
          should use their GP consent right to vet any incoming buyer and
          ensure alignment with the company&apos;s strategy and timeline.
        </p>

        <h3 className={h3Class}>Are there brokers who specialize in search fund secondaries?</h3>
        <p>
          The market is still too small for dedicated search fund secondary
          brokers, but some advisors in the broader small-fund secondary space
          handle these transactions. More commonly, deals happen through
          direct outreach within the search fund investor community &mdash;
          conferences, LP networks, and introductions from the CEO.
        </p>

        <h3 className={h3Class}>Should I consider buying search fund secondaries as an investment strategy?</h3>
        <p>
          Buying secondaries at a discount can be an attractive way to enter{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">search fund investing</Link>{" "}
          with built-in downside protection. The discount compensates for
          illiquidity and information asymmetry. However, single-company
          concentration risk is high, so building a portfolio of five to ten
          secondary positions is a more prudent approach than concentrating on
          one.
        </p>
      </div>
    </article>
  );
}
