import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function HowFindBusinessesForSaleArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        How to Find Businesses for Sale: The Complete Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Finding a good business to buy is the fundamental challenge of
          ETA. The best deals are often not publicly listed. They come
          through relationships, persistence, and a multi-channel{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategy
          </Link>.
          This guide covers every major channel for finding businesses
          for sale, with practical advice on how to use each one
          effectively.
        </p>

        <h2 className={h2Class}>The deal sourcing landscape</h2>
        <p>
          Businesses for sale come through three primary channels:
        </p>
        <ul className={ulClass}>
          <li><strong>Brokered deals (50&ndash;70% of market):</strong> Listed through business brokers and M&amp;A intermediaries</li>
          <li><strong>Proprietary/off-market (20&ndash;35%):</strong> Found through direct outreach, referrals, and networking</li>
          <li><strong>Online marketplaces (10&ndash;20%):</strong> Listed on platforms like BizBuySell, Axial, or Acquire.com</li>
        </ul>

        <h2 className={h2Class}>Channel 1: Business brokers &amp; M&amp;A intermediaries</h2>
        <p>
          Business brokers are the most important deal sourcing channel
          for most searchers. They control the majority of deal flow and
          serve as gatekeepers to motivated sellers.
        </p>

        <h3 className={h3Class}>Types of intermediaries</h3>
        <ul className={ulClass}>
          <li><strong>Main Street brokers:</strong> Handle businesses with &lt;$1M revenue. Sunbelt, Transworld, Murphy Business</li>
          <li><strong>Lower mid-market advisors:</strong> $1M&ndash;$10M EBITDA businesses. Regional M&amp;A firms, boutiques</li>
          <li><strong>Investment banks:</strong> $10M+ EBITDA. Generalist and sector-focused (Harris Williams, Lincoln International)</li>
        </ul>

        <h3 className={h3Class}>How to work with brokers effectively</h3>
        <ul className={ulClass}>
          <li><strong>Register with 10&ndash;20 brokers</strong> in your target geography and industry</li>
          <li><strong>Be specific about your criteria:</strong> Industry, geography, revenue range, EBITDA floor. Brokers receive dozens of inquiries &mdash; a clear profile helps them remember you</li>
          <li><strong>Respond quickly:</strong> The best deals go fast. Aim to respond to new opportunities within 24 hours</li>
          <li><strong>Build personal relationships:</strong> Take brokers to lunch, attend local business events, follow up regularly</li>
          <li><strong>Prove you&rsquo;re a serious buyer:</strong> Show proof of funds, financing pre-approval, and professional advisory team</li>
          <li><strong>Close deals:</strong> Brokers feed repeat buyers. Once you develop a reputation for closing, deal flow improves dramatically</li>
        </ul>

        <h2 className={h2Class}>Channel 2: Online marketplaces</h2>

        <h3 className={h3Class}>General marketplaces</h3>
        <ul className={ulClass}>
          <li><strong>BizBuySell:</strong> The largest US business-for-sale marketplace. Free to browse, paid listings. 45,000+ active listings</li>
          <li><strong>BizQuest:</strong> BizBuySell sister site with additional listings</li>
          <li><strong>BusinessesForSale.com:</strong> International marketplace with 70,000+ listings across 100+ countries</li>
          <li><strong>LoopNet:</strong> Business and commercial real estate listings (useful for businesses with real property)</li>
        </ul>

        <h3 className={h3Class}>Curated/premium platforms</h3>
        <ul className={ulClass}>
          <li><strong>Axial:</strong> Curated platform connecting buyers with lower mid-market M&amp;A advisors. Requires verification</li>
          <li><strong>DealNexus:</strong> Global M&amp;A deal matching platform</li>
          <li><strong>Acquire.com:</strong> Technology/SaaS business marketplace</li>
          <li><strong>MicroAcquire:</strong> Rebranded to Acquire.com &mdash; focus on startups and micro-SaaS</li>
          <li><strong>Empire Flippers:</strong> Online businesses (e-commerce, content sites, SaaS)</li>
          <li><strong>FE International:</strong> Premium SaaS and e-commerce brokerage</li>
        </ul>

        <h3 className={h3Class}>European platforms</h3>
        <ul className={ulClass}>
          <li><strong>Transentreprise (France):</strong> CCI-operated marketplace with 45,000+ listings</li>
          <li><strong>Nexxt-Change (Germany):</strong> IHK-supported succession marketplace</li>
          <li><strong>Daltons Business (UK):</strong> UK&rsquo;s oldest business-for-sale platform</li>
          <li><strong>Batonz (Japan):</strong> Japan&rsquo;s leading SME M&amp;A matching platform</li>
        </ul>

        <h2 className={h2Class}>Channel 3: Direct outreach (proprietary deal sourcing)</h2>
        <p>
          The highest-quality deals are often found through direct outreach
          to business owners who haven&rsquo;t listed their business for
          sale. This approach requires more effort but yields less
          competition and better pricing.
        </p>

        <h3 className={h3Class}>Direct mail campaigns</h3>
        <ul className={ulClass}>
          <li>Purchase targeted business owner lists (by industry, geography, revenue, owner age)</li>
          <li>Send personalized letters introducing yourself as a potential buyer</li>
          <li>Expect 1&ndash;3% response rate on well-crafted campaigns</li>
          <li>Follow up with phone calls 1&ndash;2 weeks after mailing</li>
          <li>Track metrics: letters sent → responses → meetings → LOIs</li>
        </ul>

        <h3 className={h3Class}>Cold calling &amp; email</h3>
        <ul className={ulClass}>
          <li>Build lists using industry databases, trade association directories, and LinkedIn</li>
          <li>Keep the pitch brief: who you are, what you&rsquo;re looking for, why you&rsquo;re reaching out</li>
          <li>Aim for 20&ndash;30 calls per day during active sourcing</li>
          <li>Many owners will say &ldquo;not interested&rdquo; today but may reconsider in 6&ndash;12 months &mdash; maintain a follow-up cadence</li>
        </ul>

        <h3 className={h3Class}>LinkedIn outreach</h3>
        <ul className={ulClass}>
          <li>Sales Navigator allows precise targeting by industry, company size, owner age, and geography</li>
          <li>Connect with business owners, engage with their content, then introduce your interest</li>
          <li>Professional, non-salesy messaging works best</li>
        </ul>

        <h2 className={h2Class}>Channel 4: Professional referral networks</h2>
        <p>
          Some of the best deal flow comes from professionals who advise
          business owners considering retirement or exit:
        </p>
        <ul className={ulClass}>
          <li><strong>Accountants/CPAs:</strong> They know their clients&rsquo; financials and retirement plans. They&rsquo;re often the first person an owner tells about wanting to sell</li>
          <li><strong>Business attorneys:</strong> Especially estate planning and business transaction lawyers</li>
          <li><strong>Wealth advisors/financial planners:</strong> They model retirement scenarios that often trigger sale conversations</li>
          <li><strong>Bankers (commercial):</strong> They know which businesses are performing well and which owners are aging out</li>
          <li><strong>Industry consultants:</strong> Sector specialists who advise multiple businesses</li>
        </ul>
        <p>
          Building these relationships takes time (3&ndash;12 months) but
          yields the highest quality and most exclusive deal flow.
        </p>

        <h2 className={h2Class}>Channel 5: Industry-specific sources</h2>
        <ul className={ulClass}>
          <li><strong>Trade associations:</strong> Many have &ldquo;businesses for sale&rdquo; sections or member directories showing owner ages</li>
          <li><strong>Trade shows &amp; conferences:</strong> Meet business owners in person, attend industry events</li>
          <li><strong>Franchise resales:</strong> Franchise brand websites often list resale opportunities</li>
          <li><strong>Retirement announcements:</strong> Monitor industry publications for owner retirement news</li>
          <li><strong>Competitors of your employer:</strong> If you work in an industry, you may already know potential sellers</li>
        </ul>

        <h2 className={h2Class}>Channel 6: Distressed &amp; special situations</h2>
        <ul className={ulClass}>
          <li><strong>Bankruptcy court filings:</strong> PACER system lists businesses in Chapter 11 that may be sold</li>
          <li><strong>Bank workout departments:</strong> Banks with troubled loan portfolios sometimes broker sales</li>
          <li><strong>SBA failed loan guarantees:</strong> SBA-backed businesses that are being liquidated</li>
          <li><strong>Estate sales:</strong> Businesses being sold after an owner&rsquo;s death (often by attorneys or executors)</li>
        </ul>

        <h2 className={h2Class}>Building a multi-channel strategy</h2>
        <p>
          The most successful searchers use 3&ndash;4 channels
          simultaneously:
        </p>
        <ul className={ulClass}>
          <li><strong>Foundation:</strong> Register with brokers + set up marketplace alerts (day 1)</li>
          <li><strong>Month 1&ndash;3:</strong> Build professional referral network, attend industry events</li>
          <li><strong>Month 2&ndash;6:</strong> Launch direct outreach campaigns (mail + LinkedIn)</li>
          <li><strong>Ongoing:</strong> Maintain all channels, track metrics, adjust allocation based on results</li>
        </ul>

        <h2 className={h2Class}>How many deals should you see?</h2>
        <ul className={ulClass}>
          <li><strong>Opportunities reviewed:</strong> 100&ndash;300</li>
          <li><strong>NDAs signed:</strong> 30&ndash;80</li>
          <li><strong>Deep analysis:</strong> 10&ndash;20</li>
          <li><strong>LOIs submitted:</strong> 2&ndash;5</li>
          <li><strong>Deals closed:</strong> 1</li>
        </ul>
        <p>
          Most first-time buyers underestimate the volume needed. You
          need to see a large number of businesses to develop pattern
          recognition and find the right opportunity.
        </p>

        <h2 className={h2Class}>Evaluating what you find</h2>
        <p>
          Once you find potential targets, the next steps are:
        </p>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              Valuation analysis
            </Link>{" "}
            to determine if the asking price is reasonable
          </li>
          <li>
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              Industry benchmarks
            </Link>{" "}
            to compare multiples against comparable transactions
          </li>
          <li>
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              LOI preparation
            </Link>{" "}
            if the opportunity passes your initial screening criteria
          </li>
          <li>
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              Due diligence
            </Link>{" "}
            to verify the seller&rsquo;s claims and uncover risks
          </li>
        </ul>
        <p>
          For a complete overview of the acquisition process from first
          contact to closing day, see our{" "}
          <Link href="/learn/how-to-buy-small-business" className="text-apple-accent hover:underline">
            how to buy a small business
          </Link>{" "}
          guide.
        </p>
      </div>
    </article>
  );
}
