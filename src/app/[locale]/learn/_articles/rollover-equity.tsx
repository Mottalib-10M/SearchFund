import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function RolloverEquityArticle() {
  return (
    <article>
      <h1 className={h1Class}>Rollover Equity: Keeping Sellers Invested</h1>

      <div className={bodyClass}>
        <p>
          Rollover equity is a deal structure where the seller retains a minority ownership stake in the acquired business rather than receiving 100% cash at closing. This powerful tool aligns seller and buyer interests, reduces the cash needed to close, and provides tax deferral benefits for the seller.
        </p>
      </div>

      <h2 className={h2Class}>How Rollover Equity Works</h2>
      <div className={bodyClass}>
        <p>Instead of selling 100% of their shares or assets for cash, the seller &quot;rolls over&quot; a portion of their equity into the new ownership structure. The seller receives cash for the non-rolled portion and retains ownership of the rest.</p>
        <p><strong>Example:</strong> In a $10M acquisition, the seller rolls over 20% ($2M) of equity and receives $8M in cash (plus any debt proceeds). The seller now owns 20% of the post-acquisition company alongside the buyer&apos;s equity.</p>
      </div>

      <h2 className={h2Class}>Benefits for Buyers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Reduced cash requirement:</strong> Less equity capital needed at closing, improving returns on invested capital</li>
          <li><strong>Seller alignment:</strong> Seller has skin in the game during the transition period and beyond</li>
          <li><strong>Confidence signal:</strong> Seller willingness to roll over demonstrates belief in the business&apos;s future</li>
          <li><strong>Smoother transition:</strong> Seller is motivated to help the buyer succeed since they benefit from value creation</li>
          <li><strong>Lower leverage:</strong> Less debt needed when seller equity reduces the cash purchase price</li>
        </ul>
      </div>

      <h2 className={h2Class}>Benefits for Sellers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Tax deferral:</strong> Properly structured, the rolled portion qualifies as a tax-free exchange &mdash; capital gains tax is deferred until the seller eventually sells the rollover stake</li>
          <li><strong>Second bite of the apple:</strong> If the buyer grows the business significantly, the seller&apos;s 20% rollover could be worth more than the original 100%</li>
          <li><strong>Higher total price:</strong> Buyers may offer a higher headline price when rollover reduces their cash outlay</li>
          <li><strong>Ongoing income:</strong> If the entity pays distributions, the seller receives their proportional share</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical Rollover Percentages</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>10&ndash;20%:</strong> Most common in search fund and lower middle market deals</li>
          <li><strong>20&ndash;30%:</strong> Common in PE-backed acquisitions</li>
          <li><strong>30&ndash;49%:</strong> Less common; gives seller significant ongoing influence</li>
        </ul>
        <p>The sweet spot for most ETA deals is 10&ndash;20% &mdash; enough to align interests without giving the seller too much influence over post-acquisition decisions.</p>
      </div>

      <h2 className={h2Class}>Tax Structuring</h2>
      <div className={bodyClass}>
        <p>For the rollover to qualify as tax-deferred, the transaction must be structured as a &quot;tax-free reorganization&quot; under IRC Section 368 or as a contribution to a new entity under Section 721. Key requirements:</p>
        <ul className={ulClass}>
          <li>The seller must roll over actual equity (not receive cash and reinvest)</li>
          <li>The rolled equity must be in the same or successor entity</li>
          <li>The structure must satisfy continuity of interest requirements</li>
          <li>Proper documentation is essential &mdash; work with an M&A tax attorney</li>
        </ul>
        <p>If structured incorrectly, the seller could face immediate tax on the rolled portion. This is one area where professional tax advice is absolutely critical.</p>
      </div>

      <h2 className={h2Class}>Governance and Minority Rights</h2>
      <div className={bodyClass}>
        <p>The operating agreement must address the rollover holder&apos;s rights:</p>
        <ul className={ulClass}>
          <li><strong>Board representation:</strong> Typically no board seat for sub-20% rollover, observer rights possible</li>
          <li><strong>Information rights:</strong> Quarterly financial statements and annual budgets</li>
          <li><strong>Consent rights:</strong> Major decisions (sale of business, additional debt above threshold, related-party transactions)</li>
          <li><strong>Anti-dilution:</strong> Protection against issuance of new equity that dilutes the rollover holder</li>
          <li><strong>Tag-along rights:</strong> Right to sell alongside the buyer in a future exit</li>
          <li><strong>Drag-along rights:</strong> Buyer can force the rollover holder to sell in a qualifying exit event</li>
        </ul>
      </div>

      <h2 className={h2Class}>Exit Provisions</h2>
      <div className={bodyClass}>
        <p>How and when the seller can liquidate their rollover stake:</p>
        <ul className={ulClass}>
          <li><strong>Put right:</strong> Seller can force the company to buy their stake after a specified period (3&ndash;5 years), usually at fair market value</li>
          <li><strong>Call right:</strong> Buyer can force purchase of the rollover stake, typically at a slight premium</li>
          <li><strong>Tag-along on exit:</strong> If the buyer sells to a third party, the rollover holder sells at the same price and terms</li>
          <li><strong>ROFR:</strong> Right of first refusal if the seller wants to sell to a third party</li>
        </ul>
      </div>

      <h2 className={h2Class}>Negotiation Strategies</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>For buyers:</strong> Frame rollover as a win-win &mdash; tax benefits and upside for the seller. Start at 20&ndash;25% ask and negotiate down to 10&ndash;15% if needed.</li>
          <li><strong>For sellers:</strong> Ensure the rolled equity is valued at the same per-share price as the cash portion. Negotiate strong minority protections and clear exit provisions.</li>
          <li><strong>Valuation at rollover:</strong> The rolled equity should be valued at the transaction price. Don&apos;t accept a discount for illiquidity at the time of the deal.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Rollover vs. Earnouts</h2>
      <div className={bodyClass}>
        <p>Both rollover and <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">earnouts</Link> align seller incentives, but they work differently:</p>
        <ul className={ulClass}>
          <li><strong>Rollover:</strong> Seller shares in overall company value creation; simpler to administer; tax-deferred</li>
          <li><strong>Earnout:</strong> Seller receives additional payments tied to specific metrics; more complex; taxed as ordinary income</li>
          <li><strong>Combination:</strong> Some deals use both &mdash; earnout for near-term performance and rollover for long-term alignment</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Rollover equity reduces cash at close while aligning seller interests during transition</li>
          <li>Tax deferral is a major seller benefit &mdash; but requires careful structuring</li>
          <li>10&ndash;20% rollover is the sweet spot for search fund-sized deals</li>
          <li>Governance rights, exit provisions, and drag-along/tag-along terms are critical negotiation points</li>
          <li>Always engage an M&A tax attorney to ensure tax-free treatment</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">Cap Tables & Equity in Search Funds</Link></li>
        <li><Link href="/learn/deal-structure-optimization" className="text-apple-accent hover:underline">Deal Structure Optimization</Link></li>
        <li><Link href="/learn/seller-financing" className="text-apple-accent hover:underline">Seller Financing: Structures & Terms</Link></li>
        <li><Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">Earn-Outs & Contingent Consideration</Link></li>
        <li><Link href="/learn/exit-strategies" className="text-apple-accent hover:underline">Exit Strategies for Search Fund CEOs</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Deloitte, <em>Tax-Free Reorganizations and Rollover Equity in M&A</em> (2024)</li>
        <li>American Bar Association, <em>Rollover Equity in Private M&A Transactions</em> (2023)</li>
        <li>SRS Acquiom, <em>M&A Deal Terms Study &mdash; Rollover Equity Trends</em> (2024)</li>
        <li>PwC, <em>Structuring Rollover Equity for Tax Efficiency</em> (2023)</li>
      </ul>
    </article>
  );
}
