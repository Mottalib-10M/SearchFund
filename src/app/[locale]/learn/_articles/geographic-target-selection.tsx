import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function GeographicTargetSelectionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Geographic Considerations in Target Selection</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Where a target business is located matters far more than most search
          fund entrepreneurs initially appreciate. Geography affects deal
          sourcing, due diligence logistics, post-acquisition operational
          involvement, access to talent, customer proximity, regulatory
          environment, tax treatment, and ultimately the enterprise value at
          exit. Yet in the rush to find a business that meets financial and
          industry criteria, geographic considerations are often treated as
          an afterthought. This guide explores the full range of geographic
          factors that should inform your{" "}
          <Link href="/learn/acquisition-target-screening" className="text-apple-accent hover:underline">target screening</Link>{" "}
          process, from the decision between local and remote acquisitions
          to the complexities of multi-location and cross-border targets.
        </p>

        <h2 className={h2Class}>Local versus remote acquisitions</h2>
        <p>
          The first geographic question every searcher must answer is how far
          from home they are willing to search and, ultimately, to relocate.
          This decision has cascading effects on every aspect of the search
          and operating phases.
        </p>

        <h3 className={h3Class}>Advantages of local acquisitions</h3>
        <ul className={ulClass}>
          <li>
            <strong>Relationship-driven deal sourcing:</strong> Local
            acquisitions allow you to build relationships with business
            brokers, attorneys, accountants, and bankers in your community.
            These intermediaries are the primary source of proprietary deal
            flow in the SME space, and personal relationships are difficult
            to cultivate remotely. For more on building these relationships,
            see our guide to{" "}
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">deal sourcing strategies</Link>.
          </li>
          <li>
            <strong>Lower due diligence costs:</strong> Visiting the
            business, meeting employees, inspecting facilities, and
            attending customer meetings are all easier and less expensive
            when the target is within driving distance.
          </li>
          <li>
            <strong>Operational proximity:</strong> After closing, the new
            CEO typically needs to be present at the business daily during
            the transition period and regularly thereafter. Living near the
            business eliminates relocation costs and the disruption of
            moving a family.
          </li>
          <li>
            <strong>Community integration:</strong> Many SMEs are deeply
            embedded in their local communities. An owner-operator who lives
            in the community can build relationships with customers,
            suppliers, and employees more naturally than a remote owner.
          </li>
        </ul>

        <h3 className={h3Class}>Advantages of casting a wider net</h3>
        <ul className={ulClass}>
          <li>
            <strong>Larger deal universe:</strong> Restricting your search
            to a single metropolitan area dramatically reduces the number
            of potential targets. In many industries, there may be only a
            handful of appropriately sized businesses in any given region.
            Expanding your geographic scope increases the probability of
            finding a business that meets all of your criteria.
          </li>
          <li>
            <strong>Valuation arbitrage:</strong> Business valuations vary
            significantly by geography. Businesses in major metropolitan
            areas tend to trade at higher multiples than comparable
            businesses in secondary or tertiary markets, reflecting
            differences in buyer competition, access to capital, and
            perceived desirability. A searcher willing to acquire in a
            less competitive market may find better value.
          </li>
          <li>
            <strong>Specific industry clusters:</strong> Certain industries
            are concentrated in specific geographies &mdash; technology in
            major metro areas, manufacturing in the industrial heartland,
            energy services near resource extraction regions. If you are
            targeting a specific industry, you may need to go where the
            businesses are.
          </li>
        </ul>

        <h2 className={h2Class}>Regional economic factors</h2>
        <p>
          The economic health and trajectory of a region directly affects
          the target business&apos;s growth prospects, access to labor, and
          exit valuation. Searchers should analyze several regional economic
          indicators when evaluating a geography:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Population growth:</strong> Regions with growing
            populations tend to offer expanding customer bases for
            locally-oriented businesses. Conversely, declining populations
            signal shrinking markets and potential labor shortages. Many
            rural and small-city markets in Europe and North America are
            experiencing population decline, which should be factored into
            long-term projections.
          </li>
          <li>
            <strong>Employment and wage trends:</strong> A region&apos;s
            employment base affects both the target&apos;s customer demand
            and its ability to recruit and retain employees. Regions with
            low unemployment may offer strong demand but tight labor
            markets; regions with higher unemployment may offer more
            available talent but weaker demand.
          </li>
          <li>
            <strong>Industry diversification:</strong> Regions that are
            economically dependent on a single industry (oil, automotive,
            tourism) are more vulnerable to sector-specific downturns.
            Businesses in economically diversified regions tend to have
            more stable revenue bases.
          </li>
          <li>
            <strong>Infrastructure and connectivity:</strong> Access to
            transportation networks (highways, airports, ports, rail),
            high-speed internet, and logistics infrastructure affects
            both the efficiency of the target business and its
            attractiveness to future buyers at exit.
          </li>
          <li>
            <strong>Regulatory and tax environment:</strong> Business
            regulation, tax rates, labor laws, and permitting requirements
            vary significantly across jurisdictions. In the United States,
            state-level differences in income tax, business tax, and
            regulatory burden can have a material impact on profitability.
            In Europe, differences between countries are even more
            pronounced. For more on international considerations, see our
            guide to{" "}
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">the best countries to buy a business</Link>.
          </li>
        </ul>

        <h2 className={h2Class}>Market density and customer proximity</h2>
        <p>
          The geographic density of a business&apos;s customer base is a
          critical but often overlooked factor in target selection. Businesses
          that serve customers within a defined geographic radius &mdash;
          such as home services companies, healthcare practices, restaurants,
          or professional services firms &mdash; are fundamentally different
          from businesses that serve a national or international customer
          base.
        </p>

        <h3 className={h3Class}>Locally-oriented businesses</h3>
        <p>
          Businesses with a local customer base derive their competitive
          advantage from proximity, relationships, and local reputation.
          Their growth is constrained by the size and growth rate of the
          local market, but they often benefit from high customer retention,
          low competition from distant competitors, and strong word-of-mouth
          referral networks. When evaluating these businesses, the relevant
          geographic analysis focuses on the serviceable market within the
          business&apos;s operating radius:
        </p>
        <ul className={ulClass}>
          <li>How many potential customers (households, businesses) are within the service area?</li>
          <li>What is the current market penetration rate?</li>
          <li>Is the service area population growing, stable, or declining?</li>
          <li>How many direct competitors operate in the same area?</li>
          <li>Are there adjacent geographies that represent natural expansion opportunities?</li>
        </ul>

        <h3 className={h3Class}>Nationally or internationally oriented businesses</h3>
        <p>
          Businesses that serve a distributed customer base (e-commerce,
          software, specialized manufacturing, consulting) are less
          constrained by their physical location. For these businesses,
          geographic considerations focus more on operational factors:
          access to a suitable labor pool, proximity to supply chains,
          logistics costs, and the founder&apos;s willingness to operate
          from the business&apos;s current location.
        </p>

        <h2 className={h2Class}>Relocation considerations</h2>
        <p>
          For many searchers, acquiring a business outside their current
          geography requires relocation. This decision affects not only the
          searcher but their family, and it should be made deliberately
          rather than as an afterthought.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Commitment to be present:</strong> Search fund
            acquisitions in the SME space almost always require the new
            CEO to be physically present at the business, particularly
            during the first 12 to 18 months. Attempting to manage a
            newly acquired business remotely is one of the most common
            causes of post-acquisition underperformance.
          </li>
          <li>
            <strong>Family considerations:</strong> Relocation affects
            partners, children&apos;s schools, social networks, and
            quality of life. These factors are personal but have real
            economic consequences: a searcher who is unhappy in their new
            location is less likely to be an effective CEO.
          </li>
          <li>
            <strong>Cost of living adjustments:</strong> Moving from a
            high-cost-of-living market to a lower-cost market can
            meaningfully improve the economics of search fund CEO
            compensation, which is often modest during the first few
            years of operation.
          </li>
          <li>
            <strong>Duration of commitment:</strong> Searchers should
            think of relocation as a five-to-seven-year commitment,
            aligned with the typical search fund hold period. The
            geography should be somewhere the searcher is willing to
            live for this duration.
          </li>
        </ul>

        <h2 className={h2Class}>Multi-location targets</h2>
        <p>
          Some acquisition targets operate from multiple locations &mdash;
          branch offices, satellite service centers, multiple retail
          locations, or distributed production facilities. Multi-location
          businesses add geographic complexity but can also offer
          significant advantages:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Built-in geographic diversification:</strong> Revenue
            is spread across multiple markets, reducing dependence on any
            single local economy.
          </li>
          <li>
            <strong>Scalable model:</strong> If the multi-location model
            is working, adding additional locations is a proven and
            repeatable growth strategy.
          </li>
          <li>
            <strong>Management complexity:</strong> Operating multiple
            locations requires more sophisticated management systems,
            regional managers, and communication processes. The CEO cannot
            be physically present at all locations, making the quality of
            the management team even more critical.
          </li>
          <li>
            <strong>Consolidation opportunity:</strong> In fragmented
            industries, acquiring a multi-location platform and then
            adding bolt-on acquisitions in adjacent geographies can be a
            powerful value creation strategy. This approach is explored
            in depth in our{" "}
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link>{" "}
            guide.
          </li>
        </ul>

        <h2 className={h2Class}>Geographic risk diversification</h2>
        <p>
          From an investor portfolio perspective, geographic diversification
          across search fund investments reduces exposure to regional
          economic risks. Individual searchers, however, are typically
          concentrated in a single geography. There are several ways to
          think about geographic risk at the individual deal level:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Customer geographic distribution:</strong> Even a
            locally-headquartered business may serve customers across a
            wide geography. A manufacturing company based in a small city
            that sells nationally has less geographic concentration risk
            than a services business that operates only within its
            metropolitan area.
          </li>
          <li>
            <strong>Supplier diversification:</strong> Businesses that
            depend on locally concentrated suppliers (a single regional
            distributor, locally-sourced raw materials) face supply chain
            risk if that region is disrupted by natural disasters,
            regulatory changes, or economic shifts.
          </li>
          <li>
            <strong>Natural disaster and climate risk:</strong> Businesses
            in regions exposed to hurricanes, floods, wildfires, or
            earthquakes face physical and insurance risks that should be
            factored into due diligence and valuation. Climate risk is
            increasingly relevant for long-hold-period investments.
          </li>
          <li>
            <strong>Political and regulatory stability:</strong> For{" "}
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">cross-border acquisitions</Link>,
            the political stability and regulatory predictability of the
            target country is a fundamental geographic consideration.
            Countries with stable legal systems, independent judiciaries,
            and transparent regulatory processes command lower risk premiums.
          </li>
        </ul>

        <h2 className={h2Class}>Building a geographic thesis</h2>
        <p>
          Rather than treating geography as a constraint to be minimized,
          the most successful searchers develop a deliberate geographic
          thesis &mdash; a reasoned view of where they want to search and
          why. A strong geographic thesis typically includes:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Target geographies defined:</strong> Identify two to
            four metropolitan areas or regions where you are willing to
            acquire and relocate. Select these based on personal
            preferences (where you and your family would be happy living),
            economic factors (growth trajectory, business density), and
            practical considerations (cost of living, connectivity).
          </li>
          <li>
            <strong>Market mapping within each geography:</strong> For
            each target geography, research the universe of businesses
            that meet your size, industry, and quality criteria. Use
            business broker databases, industry association directories,
            and local business publications to build a target list.
          </li>
          <li>
            <strong>Intermediary network in each geography:</strong>
            Build relationships with business brokers, M&amp;A attorneys,
            and commercial bankers in each target geography. These
            relationships take time to develop, which is why most
            searchers limit their geographic focus to a manageable number
            of regions.
          </li>
          <li>
            <strong>On-the-ground visits:</strong> Before committing to a
            geography, visit it. Drive through the business districts, meet
            with local intermediaries, visit target businesses (informally
            or as part of early conversations), and spend time in the
            neighborhoods where you might live. Geography is best
            evaluated in person.
          </li>
          <li>
            <strong>Flexibility within the thesis:</strong> A geographic
            thesis should guide your search without creating rigidity. If
            an exceptional opportunity appears outside your target
            geographies, evaluate it on its merits. The thesis is a
            framework for efficient searching, not a rule that eliminates
            optionality.
          </li>
        </ol>

        <h2 className={h2Class}>International geographic considerations</h2>
        <p>
          For searchers considering cross-border acquisitions, geography
          takes on additional dimensions. Language, culture, legal systems,
          currency, and tax regimes all become part of the geographic
          analysis. The decision to search internationally should be
          grounded in a genuine advantage &mdash; language fluency, cultural
          familiarity, an existing professional network, or access to a
          specific market opportunity &mdash; rather than simply a desire
          to expand the deal universe.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Language and culture:</strong> Operating a business
            requires deep communication with employees, customers, and
            suppliers. In most cases, this requires professional fluency
            in the local language. English-language markets (US, UK,
            Ireland, Australia) are the most accessible for anglophone
            searchers, but attractive opportunities also exist in
            continental European markets for searchers with the
            appropriate language skills.
          </li>
          <li>
            <strong>Legal and regulatory familiarity:</strong> Every
            jurisdiction has its own employment law, contract law, tax
            regime, and regulatory framework. Acquiring a business in an
            unfamiliar legal environment adds complexity and cost to both
            the transaction and the operating phase. For a market-by-market
            overview, see our{" "}
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">guide to the best countries to buy a business</Link>.
          </li>
          <li>
            <strong>Currency risk:</strong> Acquiring a business
            denominated in a foreign currency introduces exchange rate
            risk to both the acquisition financing and the ongoing cash
            flows. Currency movements can enhance or diminish returns
            independently of the business&apos;s operating performance.
          </li>
          <li>
            <strong>Time zone considerations:</strong> For searchers who
            will manage investors in one time zone and an operating
            business in another, the practical challenges of spanning
            time zones should not be underestimated. Investor relations,
            board meetings, and personal life all need to function across
            the time zone gap.
          </li>
        </ul>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Should a search fund entrepreneur be willing to relocate for the right acquisition?</h3>
        <p>
          Yes, willingness to relocate dramatically expands the deal universe and is associated with better acquisition outcomes. Stanford GSB&rsquo;s 2024 Search Fund Study found that searchers who were open to relocation closed acquisitions 4 months faster on average than those restricted to a single metro area. However, relocation should be approached as a 5&ndash;7 year commitment aligned with the typical hold period. Searchers should evaluate the target geography for quality of life, cost of living, spousal career opportunities, and school quality alongside business factors. The most successful relocating searchers visit their target markets multiple times before closing and begin building community connections well before the move.
        </p>

        <h3 className={h3Class}>How does geography affect business valuations?</h3>
        <p>
          Business valuations vary significantly by geography, primarily driven by buyer competition and market dynamics. The Brookings Institution&rsquo;s metropolitan economic analysis shows that businesses in major metro areas (New York, San Francisco, Boston) typically trade at 0.5&ndash;1.5x higher EBITDA multiples than comparable businesses in secondary or tertiary markets. For searchers, this creates a &ldquo;valuation arbitrage&rdquo; opportunity&mdash;acquiring in less competitive markets where multiples are lower, then building value that can be recognized at exit. The NBER&rsquo;s research on regional economics suggests that businesses in mid-size cities with growing populations often offer the best combination of reasonable acquisition multiples and healthy organic growth.
        </p>

        <h3 className={h3Class}>What are the key geographic risk factors to evaluate during due diligence?</h3>
        <p>
          Key geographic risk factors include population trends (declining populations signal shrinking markets), economic diversification (dependence on a single industry creates vulnerability), natural disaster exposure (FEMA data shows insurance costs can vary 3&ndash;5x between regions), labor market tightness (Bureau of Labor Statistics data on local unemployment and wage growth), and regulatory environment (state-level tax and regulatory differences materially affect profitability). The OECD&rsquo;s Regional Outlook recommends evaluating a 10-year demographic trend rather than a point-in-time snapshot, as gradual population shifts can significantly impact long-term business value.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>Search Funds &mdash; 2024 Study</em></li>
          <li>IESE Business School, <em>International Search Funds &mdash; Selected Observations</em> (2024)</li>
          <li>Harvard Business School, <em>Entrepreneurship Through Acquisition</em> (course materials)</li>
          <li>Brookings Institution, <em>Metropolitan Policy Program &mdash; Regional Economic Analysis</em></li>
          <li>OECD, <em>Regional Outlook &mdash; The Geography of Firm Dynamics</em></li>
          <li>National Bureau of Economic Research (NBER), <em>Working Papers on Regional Economics</em></li>
        </ul>

        <h2 className={h2Class}>Related resources</h2>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/acquisition-target-screening" className="text-apple-accent hover:underline">Acquisition Target Screening</Link>
          </li>
          <li>
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">Best Countries to Buy a Business</Link>
          </li>
          <li>
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">Cross-Border Acquisitions: A Complete Guide</Link>
          </li>
          <li>
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link>
          </li>
          <li>
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">Deal Sourcing Strategies</Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
