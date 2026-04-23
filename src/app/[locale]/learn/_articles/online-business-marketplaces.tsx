import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function OnlineBusinessMarketplacesArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Online Business Marketplaces: BizBuySell, Axial &amp; More
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Online business-for-sale marketplaces are a key{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing channel
          </Link>{" "}
          for search fund entrepreneurs. While they represent only one
          piece of a comprehensive sourcing strategy, marketplaces offer
          volume, transparency, and efficiency that complement broker
          relationships and direct outreach.
        </p>

        <h2 className={h2Class}>The major platforms</h2>

        <h3 className={h3Class}>BizBuySell</h3>
        <ul className={ulClass}>
          <li><strong>Overview:</strong> The largest online marketplace for businesses for sale in the US. Owned by CoStar Group</li>
          <li><strong>Listings:</strong> 45,000+ active listings at any time, ranging from $50K corner stores to $10M+ established businesses</li>
          <li><strong>Best for:</strong> Self-funded searchers targeting smaller businesses ($500K&ndash;$5M). High volume but lower average quality</li>
          <li><strong>Pros:</strong> Enormous inventory, free to browse, good filtering tools, quarterly market reports with data</li>
          <li><strong>Cons:</strong> Listings are often stale, many are overpriced, some are &ldquo;tire-kicker&rdquo; sellers who aren&rsquo;t serious</li>
        </ul>

        <h3 className={h3Class}>BizQuest</h3>
        <ul className={ulClass}>
          <li><strong>Overview:</strong> Sister site to BizBuySell, also owned by CoStar. Similar listings but different interface</li>
          <li><strong>Listings:</strong> 30,000+ active listings, significant overlap with BizBuySell</li>
          <li><strong>Best for:</strong> Same audience as BizBuySell. Use both to maximize coverage</li>
        </ul>

        <h3 className={h3Class}>Axial</h3>
        <ul className={ulClass}>
          <li><strong>Overview:</strong> The premier marketplace for lower middle market deals ($1M&ndash;$25M+ EBITDA). Connects buyers, sellers, M&amp;A advisors, and lenders</li>
          <li><strong>Listings:</strong> Higher quality, vetted by M&amp;A advisors. Fewer but more serious opportunities</li>
          <li><strong>Best for:</strong> Traditional search funds targeting $5M&ndash;$30M enterprise value deals</li>
          <li><strong>Pros:</strong> Pre-qualified deals, sophisticated seller advisors, built-in NDA workflow, deal management tools</li>
          <li><strong>Cons:</strong> Requires membership/subscription, fewer small deals, competitive (PE firms also use Axial)</li>
        </ul>

        <h3 className={h3Class}>DealStream (formerly MergerNetwork)</h3>
        <ul className={ulClass}>
          <li><strong>Overview:</strong> Mid-market platform connecting buyers, sellers, and intermediaries. Good international coverage</li>
          <li><strong>Listings:</strong> Mix of US and international deals, $500K&ndash;$50M range</li>
          <li><strong>Best for:</strong> Searchers looking at cross-border or international deals, especially in{" "}
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
              Europe
            </Link></li>
        </ul>

        <h3 className={h3Class}>SearchFunder</h3>
        <ul className={ulClass}>
          <li><strong>Overview:</strong> Community platform specifically for search fund entrepreneurs. Deal board, forums, and resources</li>
          <li><strong>Listings:</strong> Smaller curated selection, often posted by searchers who are passing on deals</li>
          <li><strong>Best for:</strong> Traditional searchers networking and sharing proprietary deals</li>
        </ul>

        <h3 className={h3Class}>European platforms</h3>
        <ul className={ulClass}>
          <li><strong>Fusacq (France):</strong> The largest French business-for-sale marketplace. See{" "}
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
              ETA in France
            </Link></li>
          <li><strong>Nexxt-Change (Germany):</strong> Germany&rsquo;s largest succession marketplace, supported by KfW and chambers of commerce. See{" "}
            <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
              ETA in Germany
            </Link></li>
          <li><strong>Daltons Business (UK):</strong> Leading UK marketplace for businesses for sale</li>
          <li><strong>BusinessesForSale.com:</strong> Global platform with listings across 100+ countries</li>
        </ul>

        <h2 className={h2Class}>How to use marketplaces effectively</h2>
        <ul className={ulClass}>
          <li><strong>Set alerts:</strong> Configure email alerts on every platform with your{" "}
            <Link href="/learn/creating-icp-acquisitions" className="text-apple-accent hover:underline">
              ICP criteria
            </Link>. Check daily for new listings</li>
          <li><strong>Move fast:</strong> Good deals get under LOI within 2&ndash;4 weeks. If you see something promising, contact the broker within 24 hours</li>
          <li><strong>Look beyond the listing:</strong> Many listings are poorly written. A bad listing doesn&rsquo;t mean a bad business. Request the CIM before making judgments</li>
          <li><strong>Track everything:</strong> Use a CRM or spreadsheet to track every deal you review, the source, status, and reason for passing. This data helps you refine your criteria over time</li>
          <li><strong>Follow up on stale listings:</strong> Businesses listed for 6+ months may have a more motivated seller and a lower price expectation than when first listed</li>
        </ul>

        <h2 className={h2Class}>Marketplace limitations</h2>
        <ul className={ulClass}>
          <li><strong>Selection bias:</strong> The best businesses often sell through{" "}
            <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">
              proprietary channels
            </Link>{" "}
            before ever being listed publicly</li>
          <li><strong>Competition:</strong> Every deal on a marketplace is seen by hundreds or thousands of potential buyers. The best opportunities are often off-market</li>
          <li><strong>Quality variance:</strong> Many listings are overpriced, have inflated add-backs, or represent businesses the broker couldn&rsquo;t sell privately</li>
          <li><strong>Volume problem:</strong> Reviewing 50+ listings per week takes time. You need a disciplined screening process (see{" "}
            <Link href="/learn/acquisition-target-screening" className="text-apple-accent hover:underline">
              target screening
            </Link>)</li>
        </ul>

        <h2 className={h2Class}>Marketplaces in your overall sourcing strategy</h2>
        <p>
          Online marketplaces should represent 20&ndash;30% of your deal flow.
          Combine them with:
        </p>
        <ul className={ulClass}>
          <li><strong>{" "}
            <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">
              Broker relationships
            </Link>:</strong> 40&ndash;50% of deal flow. Brokers send you deals before they hit marketplaces</li>
          <li><strong>{" "}
            <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">
              Direct/proprietary outreach
            </Link>:</strong> 20&ndash;30% of deal flow. Contact business owners directly</li>
          <li><strong>Referral networks:</strong> Accountants, lawyers, and wealth advisors. 10&ndash;20% of deal flow</li>
        </ul>

        <p>
          For the complete sourcing framework, see our{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategies guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/how-find-businesses-for-sale" className="text-apple-accent hover:underline">
            how to find businesses for sale
          </Link>.
        </p>
      </div>
    </article>
  );
}
