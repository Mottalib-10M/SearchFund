import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function WorkingWithBrokersArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Working with Business Brokers: A Buyer&rsquo;s Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Business brokers control 50&ndash;70% of all SME deal flow.
          They are the gatekeepers between sellers and buyers, and your
          relationship with them directly determines the quality and
          quantity of opportunities you see. Yet many first-time buyers
          misunderstand the broker&rsquo;s role, make avoidable mistakes,
          and miss out on the best deals. This guide covers how brokers
          work, how to build productive relationships, and how to
          maximize your deal flow from brokered channels.
        </p>

        <h2 className={h2Class}>How business brokers work</h2>

        <h3 className={h3Class}>Who they represent</h3>
        <p>
          Business brokers represent the <strong>seller</strong>, not the
          buyer. Their commission (typically 8&ndash;12% of the sale
          price for small businesses, 3&ndash;6% for mid-market) is
          paid by the seller. This means:
        </p>
        <ul className={ulClass}>
          <li>Their fiduciary duty is to the seller</li>
          <li>They are incentivized to maximize the sale price</li>
          <li>They are also incentivized to close deals (no close = no commission)</li>
          <li>As a buyer, you are the customer they need to complete the transaction</li>
        </ul>

        <h3 className={h3Class}>Types of intermediaries</h3>
        <ul className={ulClass}>
          <li><strong>Main Street brokers:</strong> Handle businesses with &lt;$1M revenue. Sunbelt, Transworld, Murphy Business. High volume, many part-time agents</li>
          <li><strong>Professional brokers:</strong> Handle $1M&ndash;$10M revenue businesses. More experienced, better deal quality</li>
          <li><strong>M&amp;A advisors:</strong> Handle $5M&ndash;$50M+ revenue businesses. Usually work on retainer + success fee. Higher sophistication</li>
          <li><strong>Investment banks:</strong> Handle $25M+ revenue businesses. Competitive auction processes, institutional-grade marketing</li>
        </ul>

        <h2 className={h2Class}>Building broker relationships</h2>

        <h3 className={h3Class}>First contact</h3>
        <ul className={ulClass}>
          <li><strong>Register with 10&ndash;20 brokers</strong> in your target geography and industry</li>
          <li><strong>Submit a buyer profile:</strong> Name, background, acquisition criteria (industry, geography, revenue range, EBITDA floor), financing status</li>
          <li><strong>Be specific:</strong> &ldquo;I&rsquo;m looking for B2B services businesses with $750K&ndash;$2M EBITDA in the Southeast US&rdquo; is far better than &ldquo;I&rsquo;m interested in any good business&rdquo;</li>
          <li><strong>Prove you&rsquo;re real:</strong> Share your background, proof of funds or financing pre-approval, and professional advisory team</li>
        </ul>

        <h3 className={h3Class}>Ongoing relationship management</h3>
        <ul className={ulClass}>
          <li><strong>Respond quickly:</strong> When a broker sends an opportunity, respond within 24 hours. The best deals go fast</li>
          <li><strong>Be respectful of their time:</strong> Don&rsquo;t ask for extensive information on every deal. Do your initial screening from the CIM, then request a call only for serious interest</li>
          <li><strong>Follow up regularly:</strong> Monthly check-ins, even when you&rsquo;re not actively pursuing a deal</li>
          <li><strong>Take brokers to lunch:</strong> In-person relationship building is the #1 differentiator</li>
          <li><strong>Close deals:</strong> Nothing builds a broker relationship faster than being a buyer who actually closes. Repeat buyers get first-call status on new listings</li>
        </ul>

        <h2 className={h2Class}>The brokered deal process</h2>
        <ul className={ulClass}>
          <li><strong>1. Teaser / blind profile:</strong> Broker sends an anonymous summary (industry, geography, financials) to gauge your interest</li>
          <li><strong>2. NDA signing:</strong> Sign a non-disclosure agreement to receive the full package</li>
          <li><strong>3. CIM review:</strong> Review the Confidential Information Memorandum (detailed business profile)</li>
          <li><strong>4. Buyer-seller meeting:</strong> Broker arranges a meeting between you and the owner (often on-site)</li>
          <li><strong>5. LOI submission:</strong> Submit your{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              Letter of Intent
            </Link>{" "}
            through the broker</li>
          <li><strong>6. Due diligence:</strong> Broker facilitates information exchange during{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              DD
            </Link></li>
          <li><strong>7. Closing:</strong> Broker helps coordinate closing logistics</li>
        </ul>

        <h2 className={h2Class}>Common buyer mistakes with brokers</h2>
        <ul className={ulClass}>
          <li><strong>Going around the broker:</strong> Never contact the seller directly without the broker&rsquo;s knowledge. You&rsquo;ll be blacklisted</li>
          <li><strong>Wasting their time:</strong> Requesting extensive data on businesses you have no intention of pursuing</li>
          <li><strong>Low-balling aggressively:</strong> Submitting LOIs at 50% of asking price. Brokers won&rsquo;t present your offers, and you lose credibility</li>
          <li><strong>Being vague about criteria:</strong> &ldquo;I&rsquo;m open to anything&rdquo; tells the broker you haven&rsquo;t done your homework</li>
          <li><strong>Slow communication:</strong> Taking weeks to respond to opportunities or information requests</li>
          <li><strong>Not having financing lined up:</strong> Brokers prioritize buyers who can actually close</li>
        </ul>

        <h2 className={h2Class}>Evaluating broker-presented opportunities</h2>
        <p>
          Be aware that broker-presented financials are the seller&rsquo;s
          version of reality. Always:
        </p>
        <ul className={ulClass}>
          <li>Calculate your own{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              adjusted EBITDA
            </Link>{" "}
            from the raw financials</li>
          <li>Compare the CIM&rsquo;s numbers to tax returns (request these early)</li>
          <li>Be skeptical of aggressive add-backs and &ldquo;pro-forma&rdquo; projections</li>
          <li>Verify{" "}
            <Link href="/learn/customer-concentration-risk" className="text-apple-accent hover:underline">
              customer concentration
            </Link>{" "}
            and revenue trends before investing significant DD time</li>
          <li>Commission a{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              Quality of Earnings
            </Link>{" "}
            report before finalizing the purchase price</li>
        </ul>

        <h2 className={h2Class}>Negotiating through a broker</h2>
        <ul className={ulClass}>
          <li><strong>The broker is your communication channel:</strong> All negotiations flow through the broker (unless they invite direct buyer-seller discussions)</li>
          <li><strong>Use the broker as an ally:</strong> A good broker wants the deal to close. Share your logic for pricing and let them translate it to the seller</li>
          <li><strong>Understand the seller&rsquo;s motivation:</strong> The broker knows why the seller is selling and what they care about beyond price. Use this information. See{" "}
            <Link href="/learn/seller-psychology" className="text-apple-accent hover:underline">
              seller psychology
            </Link></li>
          <li><strong>Be fair:</strong> Brokers remember buyers who negotiate in good faith. Your reputation in the broker community is one of your most valuable assets</li>
        </ul>

        <h2 className={h2Class}>Broker vs. proprietary: the right mix</h2>
        <p>
          Most successful searchers use both brokered and{" "}
          <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">
            proprietary deal flow
          </Link>.
          Brokered deals are faster to access but more competitive;
          proprietary deals take more effort but offer better pricing.
          A typical allocation: 50&ndash;60% of your pipeline from
          brokers, 30&ndash;40% from proprietary sourcing, 10&ndash;20%
          from online marketplaces.
        </p>
        <p>
          For the complete deal sourcing strategy, see our{" "}
          <Link href="/learn/how-find-businesses-for-sale" className="text-apple-accent hover:underline">
            how to find businesses for sale
          </Link>{" "}
          guide.
        </p>
      </div>
    </article>
  );
}
