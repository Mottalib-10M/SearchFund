import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ProprietaryDealFlowArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Proprietary Deal Flow: How to Find Off-Market Businesses
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The best acquisition opportunities are often never publicly
          listed. Proprietary deal flow &mdash; finding businesses
          through direct outreach, relationships, and networking &mdash;
          offers lower competition, better pricing, and more favorable
          negotiating dynamics than brokered deals. This guide covers how
          to build a proprietary deal sourcing machine.
        </p>

        <h2 className={h2Class}>Why proprietary deals are better</h2>
        <ul className={ulClass}>
          <li><strong>Less competition:</strong> You may be the only buyer at the table (vs. 5&ndash;20 bidders on a brokered deal)</li>
          <li><strong>Lower multiples:</strong> Without competitive pressure, proprietary deals close at 0.5&ndash;1.5x lower{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              EBITDA multiples
            </Link></li>
          <li><strong>Better seller relationships:</strong> Direct relationships build trust that survives{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            and{" "}
            <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
              negotiation
            </Link></li>
          <li><strong>More flexible deal structures:</strong> Sellers who aren&rsquo;t advised by brokers may accept more{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>{" "}
            or{" "}
            <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
              earn-out structures
            </Link></li>
          <li><strong>Earlier access:</strong> Reach sellers before they list (the &ldquo;pre-market&rdquo; window)</li>
        </ul>

        <h2 className={h2Class}>Strategy 1: Direct mail campaigns</h2>

        <h3 className={h3Class}>Building your target list</h3>
        <ul className={ulClass}>
          <li>Purchase business owner lists from data providers (Dun &amp; Bradstreet, InfoUSA, ReferenceUSA)</li>
          <li>Filter by: industry (SIC/NAICS code), geography, revenue range, employee count, owner age (55+)</li>
          <li>Aim for lists of 500&ndash;5,000 targeted businesses per campaign</li>
        </ul>

        <h3 className={h3Class}>The letter</h3>
        <ul className={ulClass}>
          <li>Personalized (include the owner&rsquo;s name and business name)</li>
          <li>Brief (1 page maximum)</li>
          <li>Non-threatening tone: &ldquo;I&rsquo;m looking to acquire and operate a business like yours&rdquo;</li>
          <li>Include your background (credibility) and what you&rsquo;re looking for (specificity)</li>
          <li>Handwritten envelope and signature increase open rates by 2&ndash;3x</li>
          <li><strong>Expected response rate:</strong> 1&ndash;3% (higher with personalization and follow-up)</li>
        </ul>

        <h3 className={h3Class}>Follow-up</h3>
        <ul className={ulClass}>
          <li>Phone call 1&ndash;2 weeks after mailing</li>
          <li>Second mailing 4&ndash;6 weeks later (different message, same target)</li>
          <li>Track everything in a CRM (HubSpot, Pipedrive, or Airtable)</li>
          <li>Expect 6&ndash;12 months from first contact to a serious conversation</li>
        </ul>

        <h2 className={h2Class}>Strategy 2: Cold calling</h2>
        <ul className={ulClass}>
          <li><strong>Volume:</strong> Aim for 20&ndash;30 calls per day during active sourcing</li>
          <li><strong>Script:</strong> Keep it conversational, not salesy. &ldquo;I&rsquo;m an entrepreneur looking to buy and operate a business in [industry]. Are you familiar with anyone who might be considering retirement or succession planning?&rdquo;</li>
          <li><strong>Indirect approach:</strong> Asking about others (not them directly) reduces defensiveness</li>
          <li><strong>Gatekeeper strategy:</strong> Be honest about your purpose. Administrative staff can be allies or blockers</li>
          <li><strong>Expected conversion:</strong> 5&ndash;10% will have a meaningful conversation; 1&ndash;2% may become serious leads over time</li>
        </ul>

        <h2 className={h2Class}>Strategy 3: LinkedIn outreach</h2>
        <ul className={ulClass}>
          <li><strong>Sales Navigator:</strong> Filter by industry, company size, title (owner/founder/CEO), years in position, geography</li>
          <li><strong>Connection request:</strong> Personalized note referencing their business or industry</li>
          <li><strong>Content strategy:</strong> Post thought leadership about business succession, industry trends, and ETA &mdash; owners will find you</li>
          <li><strong>Message cadence:</strong> Connect → value-add message → direct ask (over 2&ndash;4 weeks)</li>
          <li><strong>Expected response rate:</strong> 10&ndash;20% for personalized InMails to targeted owners</li>
        </ul>

        <h2 className={h2Class}>Strategy 4: Professional referral network</h2>
        <p>
          Build relationships with professionals who advise business
          owners:
        </p>
        <ul className={ulClass}>
          <li><strong>CPAs/accountants:</strong> They know their clients&rsquo; retirement plans and financial positions. They&rsquo;re often the first to know about a potential sale</li>
          <li><strong>Business attorneys:</strong> Estate planners, succession lawyers, and M&amp;A counsel</li>
          <li><strong>Wealth advisors:</strong> Financial planners modeling retirement scenarios that require a business sale</li>
          <li><strong>Commercial bankers:</strong> Relationship managers who know which business owners are aging or struggling</li>
          <li><strong>Insurance brokers:</strong> They renew policies annually and know business health and owner plans</li>
        </ul>

        <h3 className={h3Class}>How to build these relationships</h3>
        <ul className={ulClass}>
          <li>Attend local chamber of commerce, Rotary, or business networking events</li>
          <li>Offer to buy lunch/coffee &mdash; be specific about what you&rsquo;re looking for</li>
          <li>Propose a referral fee (if legal in your state) or a consulting arrangement</li>
          <li>Follow up quarterly even when there&rsquo;s no immediate deal</li>
        </ul>

        <h2 className={h2Class}>Strategy 5: Industry immersion</h2>
        <ul className={ulClass}>
          <li><strong>Trade associations:</strong> Join industry associations and attend conferences. Many have &ldquo;businesses for sale&rdquo; boards or member networking events</li>
          <li><strong>Industry publications:</strong> Monitor trade magazines for retirement announcements, ownership changes, and businesses seeking buyers</li>
          <li><strong>Vendor and supplier networks:</strong> Distributors and suppliers know which customers are thriving and which are looking to exit</li>
          <li><strong>Franchise systems:</strong> Franchise brands often have internal resale programs for retiring franchisees</li>
        </ul>

        <h2 className={h2Class}>Building your deal funnel</h2>
        <p>
          Track your proprietary sourcing metrics:
        </p>
        <ul className={ulClass}>
          <li><strong>Contacts made:</strong> Total outreach (letters + calls + LinkedIn + referrals)</li>
          <li><strong>Responses:</strong> Owners who engage in a conversation (target: 2&ndash;5% of contacts)</li>
          <li><strong>Meetings:</strong> Face-to-face or video meetings (target: 30&ndash;50% of responses)</li>
          <li><strong>Active opportunities:</strong> Sellers with genuine interest (target: 20&ndash;30% of meetings)</li>
          <li><strong>LOIs submitted:</strong> Formal offers (target: 5&ndash;10% of active opportunities)</li>
        </ul>
        <p>
          Proprietary deal sourcing is a long game. Most searchers need
          6&ndash;12 months of consistent effort before seeing meaningful
          results. But the quality of proprietary deals &mdash; lower
          prices, better terms, stronger relationships &mdash; makes
          the investment worthwhile. For a broader overview of all
          sourcing channels, see our{" "}
          <Link href="/learn/how-find-businesses-for-sale" className="text-apple-accent hover:underline">
            how to find businesses for sale
          </Link>{" "}
          guide.
        </p>
      </div>
    </article>
  );
}
