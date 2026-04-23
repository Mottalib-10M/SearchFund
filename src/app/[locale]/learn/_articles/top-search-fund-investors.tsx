import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function TopSearchFundInvestorsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Top Search Fund Investors: A Curated List
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund investors provide more than capital &mdash; they
          bring operational experience, industry networks, deal evaluation
          expertise, and mentorship. Choosing the right investors is one
          of the most consequential decisions in your{" "}
          <Link href="/learn/search-fund-lifecycle" className="text-apple-accent hover:underline">
            search fund journey
          </Link>.
          This guide categorizes the search fund investor landscape and
          covers what to look for in an investor.
        </p>

        <h2 className={h2Class}>Types of search fund investors</h2>

        <h3 className={h3Class}>1. Serial search fund investors</h3>
        <ul className={ulClass}>
          <li>Former searchers and operators who invest in the next generation</li>
          <li>Typically invest $25K&ndash;$50K per search fund, with $100K&ndash;$500K in acquisition equity</li>
          <li>Bring operational experience and mentorship</li>
          <li>Often take board seats and serve as active advisors</li>
          <li>Examples: Peter Kelly, Jim Southern, Andy Berry, Jim Ellis</li>
        </ul>

        <h3 className={h3Class}>2. Dedicated search fund funds</h3>
        <ul className={ulClass}>
          <li>Fund-of-funds vehicles that aggregate search fund investments</li>
          <li>Provide portfolio diversification across 10&ndash;50+ search funds</li>
          <li>Can deploy larger acquisition equity checks ($500K&ndash;$5M+)</li>
          <li>Examples: Pacific Lake Partners, Relay Investments, Search Fund Partners, Broadtree Partners</li>
        </ul>

        <h3 className={h3Class}>3. Family offices</h3>
        <ul className={ulClass}>
          <li>Single and multi-family offices with long-horizon capital</li>
          <li>Often attracted to the direct ownership and alignment of ETA</li>
          <li>Can provide large acquisition equity checks ($500K&ndash;$10M+)</li>
          <li>May also provide co-investment capital for{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              add-on acquisitions
            </Link></li>
          <li>See our{" "}
            <Link href="/learn/family-offices-search-funds" className="text-apple-accent hover:underline">
              family offices guide
            </Link></li>
        </ul>

        <h3 className={h3Class}>4. Institutional investors</h3>
        <ul className={ulClass}>
          <li>Endowments, pension funds, and institutional allocators investing in search fund strategies</li>
          <li>Typically invest through fund-of-funds vehicles or large search fund platforms</li>
          <li>Stanford, Harvard, and Wharton endowments have search fund allocations</li>
        </ul>

        <h3 className={h3Class}>5. MBA school investor networks</h3>
        <ul className={ulClass}>
          <li>Stanford GSB, HBS, Wharton, Kellogg, and other top MBA programs have dedicated ETA communities</li>
          <li>Alumni often invest in current students&rsquo; search funds</li>
          <li>School networks facilitate introductions and deal evaluation</li>
        </ul>

        <h2 className={h2Class}>What to look for in a search fund investor</h2>
        <ul className={ulClass}>
          <li><strong>Operational experience:</strong> Investors who have run businesses (not just invested in them) provide the most valuable advice during the operating phase</li>
          <li><strong>Search fund track record:</strong> How many funds have they backed? What are the aggregate returns? Experience with the model matters</li>
          <li><strong>Follow-on capacity:</strong> Can they write large acquisition equity checks ($250K&ndash;$2M+)? Some investors are valuable at the search stage but can&rsquo;t follow on</li>
          <li><strong>Mentorship quality:</strong> Will they take your calls at 10pm when a deal is falling apart? The best investors are available, not just present</li>
          <li><strong>Network value:</strong> Do they know lenders, lawyers, accountants, and potential board members in your target market?</li>
          <li><strong>Decision speed:</strong> When you need an acquisition equity commitment in 2&ndash;3 weeks, can they deliver? Slow investors kill deals</li>
          <li><strong>Alignment on timeline:</strong> Search fund investors should be patient capital. Avoid investors who pressure for quick exits</li>
        </ul>

        <h2 className={h2Class}>Investor red flags</h2>
        <ul className={ulClass}>
          <li><strong>No search fund experience:</strong> First-time search fund investors may not understand the model&rsquo;s norms and timelines</li>
          <li><strong>Excessive control demands:</strong> Board seats and information rights are standard; veto rights over operational decisions are not</li>
          <li><strong>Pressure to close any deal:</strong> Good investors encourage you to walk away from bad deals, not pressure you to close</li>
          <li><strong>Small check without value-add:</strong> $25K investors who offer no mentorship or network are expensive cap table entries</li>
          <li><strong>Slow decision-making:</strong> If they take 3 months to commit to search capital, they&rsquo;ll be worse at acquisition speed</li>
        </ul>

        <h2 className={h2Class}>Building your investor syndicate</h2>
        <p>
          See our{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            finding investors guide
          </Link>{" "}
          for the tactical approach. Key principles:
        </p>
        <ul className={ulClass}>
          <li><strong>Target 10&ndash;20 investors</strong> for search capital ($400K&ndash;$600K total)</li>
          <li><strong>Mix investor types:</strong> 3&ndash;5 experienced operators, 2&ndash;3 fund-of-funds or family offices (for large acquisition checks), 5&ndash;10 individual investors with domain expertise</li>
          <li><strong>Front-load value-add investors:</strong> Secure your most experienced investors first. Their names attract other investors</li>
          <li><strong>Maintain pro-rata discipline:</strong> All search investors should have pro-rata rights to invest in the acquisition. This is standard and expected</li>
          <li><strong>Plan for acquisition equity:</strong> Your search investors may only cover 30&ndash;50% of acquisition equity needs. Build relationships with co-investors who can fill the gap</li>
        </ul>

        <h2 className={h2Class}>The investor pitch</h2>
        <p>
          Search fund investors evaluate three things:
        </p>
        <ul className={ulClass}>
          <li><strong>The person:</strong> Your background, drive, judgment, and coachability. This is 60%+ of the investment decision</li>
          <li><strong>The thesis:</strong> Your{" "}
            <Link href="/learn/search-fund-thesis" className="text-apple-accent hover:underline">
              acquisition thesis
            </Link>{" "}
            &mdash; how you think about industries, target profiles, and value creation</li>
          <li><strong>The terms:</strong> Your{" "}
            <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
              PPM
            </Link>{" "}
            and{" "}
            <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">
              fundraising deck
            </Link>{" "}
            &mdash; standard search fund terms with market{" "}
            <Link href="/learn/search-fund-investor-economics" className="text-apple-accent hover:underline">
              investor economics
            </Link></li>
        </ul>

        <p>
          For the complete investor landscape by geography, see our regional
          guides for{" "}
          <Link href="/learn/eta-us" className="text-apple-accent hover:underline">
            US
          </Link>,{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            Europe
          </Link>, and{" "}
          <Link href="/learn/eta-canada" className="text-apple-accent hover:underline">
            Canada
          </Link>.
        </p>
      </div>
    </article>
  );
}
