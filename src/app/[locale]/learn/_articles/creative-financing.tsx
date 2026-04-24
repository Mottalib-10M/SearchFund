import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function CreativeFinancingArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Creative Financing: 10 Ways to Fund an Acquisition
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Not every acquisition fits neatly into the &ldquo;bank loan +
          equity&rdquo; template. Creative financing structures can help
          you close deals with less personal capital, overcome lender
          objections, and build win-win outcomes with sellers. This guide
          covers 10 financing strategies beyond the standard{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack
          </Link>.
        </p>

        <h2 className={h2Class}>1. Maximum seller financing</h2>
        <p>
          The most powerful creative financing tool. Some sellers will
          carry 50&ndash;80% of the purchase price as a{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller note
          </Link>:
        </p>
        <ul className={ulClass}>
          <li>Typical terms: 5&ndash;7 years, 4&ndash;7% interest</li>
          <li>Works best when the seller wants tax deferral (installment sale treatment)</li>
          <li>Combine with a small bank loan or even just personal equity for a mostly seller-financed deal</li>
          <li><strong>Key lever:</strong> Offer a higher purchase price in exchange for favorable seller financing terms</li>
        </ul>

        <h2 className={h2Class}>2. SBA 7(a) with partial standby seller note</h2>
        <p>
          The{" "}
          <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
            SBA 7(a) program
          </Link>{" "}
          allows seller notes on full standby for 2 years, which SBA
          treats as part of the buyer&rsquo;s equity injection. According to the
          SBA&rsquo;s Standard Operating Procedure (SOP 50 10 7.1), a standby
          seller note requires no payments of principal or interest for at least
          two years and must be subordinate to the SBA-guaranteed loan:
        </p>
        <ul className={ulClass}>
          <li>SBA loan: 75&ndash;80% of purchase price</li>
          <li>Seller note (on standby): 10&ndash;15%</li>
          <li>Your equity injection: 5&ndash;10%</li>
          <li>This structure can reduce your personal cash to as low as $25K&ndash;$75K for a $500K&ndash;$1M business</li>
        </ul>

        <h2 className={h2Class}>3. ROBS (Rollover for Business Startups)</h2>
        <p>
          ROBS allows you to use 401(k) or IRA retirement funds to invest
          in a business you operate, without paying early withdrawal
          penalties or taxes. The IRS Employee Plans Compliance Resolution
          System (EPCRS) establishes the compliance framework that ROBS
          structures must follow, and the program remains legal when
          properly administered:
        </p>
        <ul className={ulClass}>
          <li>Form a C-Corporation, establish a new 401(k) plan</li>
          <li>Roll over existing retirement funds into the new plan</li>
          <li>The plan purchases stock in your C-Corp, providing operating/acquisition capital</li>
          <li><strong>Advantage:</strong> Access retirement savings tax-free for acquisition equity</li>
          <li><strong>Risk:</strong> Complex compliance, IRS scrutiny, and you&rsquo;re risking retirement savings. Requires a qualified ROBS provider ($5K&ndash;$10K setup)</li>
        </ul>

        <h2 className={h2Class}>4. Earn-in / equity roll-in</h2>
        <p>
          Work for the business before buying it, earning equity over time:
        </p>
        <ul className={ulClass}>
          <li>Join the company as a general manager or COO</li>
          <li>Earn equity (5&ndash;20%) over 1&ndash;3 years based on performance</li>
          <li>Exercise an option to buy the remaining equity at a predetermined price/formula</li>
          <li><strong>Best for:</strong> Businesses where the owner wants a gradual transition and can mentor the successor</li>
          <li>See our{" "}
            <Link href="/learn/buy-business-no-money-down" className="text-apple-accent hover:underline">
              no money down strategies
            </Link>{" "}
            for more on earn-in structures</li>
        </ul>

        <h2 className={h2Class}>5. Equity partners</h2>
        <p>
          Bring in one or more equity partners to share the capital burden:
        </p>
        <ul className={ulClass}>
          <li><strong>Operating partner + capital partner:</strong> You run the business (51%+ equity), investor provides capital (minority equity)</li>
          <li><strong>Family and friends round:</strong> Raise $50K&ndash;$200K from 3&ndash;10 individuals at $5K&ndash;$50K each</li>
          <li><strong>Search fund model:</strong> If the deal is larger, adopt the{" "}
            <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
              search fund model
            </Link>{" "}
            with 10&ndash;20 investors</li>
          <li><strong>Key consideration:</strong> Structure clearly with a shareholder agreement — define roles, decisions, exit provisions</li>
        </ul>

        <h2 className={h2Class}>6. Home equity (HELOC)</h2>
        <ul className={ulClass}>
          <li>Borrow against home equity for the down payment/equity injection</li>
          <li>Typical HELOC: 80% of home equity, variable rate (Prime + 0&ndash;2%)</li>
          <li><strong>Advantage:</strong> Relatively low cost of capital, fast access</li>
          <li><strong>Risk:</strong> Your home is collateral. Only use if the acquisition cash flow can comfortably service both the business loan and the HELOC</li>
        </ul>

        <h2 className={h2Class}>7. Revenue-based financing (post-close)</h2>
        <ul className={ulClass}>
          <li>Non-dilutive growth capital based on monthly revenue</li>
          <li>Typical terms: repay 1.2&ndash;1.8x the borrowed amount over 12&ndash;36 months</li>
          <li>Payments flex with revenue (higher months = higher payments)</li>
          <li><strong>Best for:</strong> Funding post-acquisition growth initiatives without giving up equity</li>
          <li>Providers: Clearco, Pipe, Capchase (for SaaS), Wayflyer (for e-commerce)</li>
        </ul>

        <h2 className={h2Class}>8. Asset-based lending</h2>
        <p>
          If the business has significant tangible assets, asset-based
          lending (ABL) can unlock capital that traditional cash-flow
          lenders overlook. The Commercial Finance Association reports that
          ABL commitments in the U.S. exceed $800 billion annually,
          making it one of the largest sources of business credit:
        </p>
        <ul className={ulClass}>
          <li><strong>Accounts receivable financing:</strong> Borrow 80&ndash;90% against AR</li>
          <li><strong>Inventory financing:</strong> Borrow 50&ndash;70% against inventory value</li>
          <li><strong>Equipment financing:</strong> Finance specific equipment purchases separately from the main acquisition loan</li>
          <li><strong>Real estate:</strong> If the business owns real property, finance it separately (commercial mortgage) to free up cash for the business acquisition</li>
        </ul>

        <h2 className={h2Class}>9. Earnout bridge</h2>
        <p>
          Use{" "}
          <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
            earn-out structures
          </Link>{" "}
          to reduce the upfront purchase price:
        </p>
        <ul className={ulClass}>
          <li>Pay 70&ndash;80% at closing, with 20&ndash;30% contingent on future performance</li>
          <li>Reduces your day-one financing needs significantly</li>
          <li>Aligns seller interests with transition success</li>
          <li><strong>Example:</strong> $3M business at 5x EBITDA ($600K EBITDA). Pay $2.1M at close + $900K earn-out over 2 years tied to EBITDA maintenance. Your day-one financing need drops from $3M to $2.1M</li>
        </ul>

        <h2 className={h2Class}>10. Search fund investor bridge loans</h2>
        <p>
          For traditional search fund deals that need a financing bridge:
        </p>
        <ul className={ulClass}>
          <li>Search fund investors provide short-term bridge loans at closing</li>
          <li>Bridge is repaid from cash flow or refinanced within 6&ndash;12 months</li>
          <li>Typically used when bank financing is delayed but the deal needs to close on schedule</li>
          <li>Terms: 8&ndash;12% annual interest, 6&ndash;12 month maturity</li>
        </ul>

        <h2 className={h2Class}>Combining strategies</h2>
        <p>
          The most creative deals combine multiple approaches:
        </p>
        <ul className={ulClass}>
          <li><strong>SBA + seller note + ROBS:</strong> Minimize personal cash while maximizing SBA leverage</li>
          <li><strong>Equity partner + seller note + earn-out:</strong> Split the equity burden, reduce upfront price, align seller</li>
          <li><strong>Earn-in + seller financing:</strong> Build credibility through employment, then buy with favorable seller terms</li>
        </ul>

        <h2 className={h2Class}>Risks of creative financing</h2>
        <ul className={ulClass}>
          <li><strong>Over-leverage:</strong> Creative structures can lead to excessive total debt burden. Always stress-test with a 20&ndash;30% revenue decline scenario</li>
          <li><strong>Complexity:</strong> More layers = more relationships to manage, more documents, more potential conflicts</li>
          <li><strong>Personal risk:</strong> ROBS risks retirement savings; HELOCs risk your home; personal guarantees risk personal assets</li>
          <li><strong>Seller alignment:</strong> Complex structures may make sellers uncomfortable (they want certainty of close)</li>
        </ul>
        <p>
          For a complete overview of how these layers fit together, see
          our{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing
          </Link>{" "}
          deep dive.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          What is the most creative way to finance a business acquisition?
        </h3>
        <p>
          The most powerful creative strategy combines SBA 7(a) lending
          (75&ndash;80% of the purchase price), a seller note on full standby
          (10&ndash;15%, which the SBA counts as equity), and ROBS (rolling over
          401(k)/IRA funds for the remaining equity injection). This
          combination can reduce out-of-pocket cash to near zero for deals
          under $5M. However, it requires careful coordination between your
          SBA lender, a qualified ROBS provider, and a willing seller.
        </p>

        <h3 className={h3Class}>
          Can I use my 401(k) to buy a business?
        </h3>
        <p>
          Yes, through ROBS (Rollover for Business Startups). You form a
          C-Corporation, establish a 401(k) plan for it, roll over your
          existing retirement funds into the new plan, and the plan buys
          stock in your C-Corp. This provides capital without early
          withdrawal penalties or taxes. Setup costs $5K&ndash;$10K through a
          qualified ROBS provider, and you must maintain strict compliance
          with IRS and Department of Labor regulations.
        </p>

        <h3 className={h3Class}>
          How much of my own money do I need to buy a business?
        </h3>
        <p>
          The amount depends on your financing strategy. Traditional bank
          financing typically requires 10&ndash;20% buyer equity. With creative
          structures like SBA + seller notes, you can reduce personal cash
          to 5&ndash;10%. Using ROBS, HELOCs, or earn-in arrangements, some
          buyers close deals with little or no personal savings at risk.
          Always stress-test your structure against a 20&ndash;30% revenue
          decline scenario to ensure you are not over-leveraged.
        </p>
      </div>
    </article>
  );
}
