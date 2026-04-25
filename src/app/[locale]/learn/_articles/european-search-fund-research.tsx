import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function EuropeanSearchFundResearchArticle() {
  return (
    <article>
      <h1 className={h1Class}>European Search Fund Research: IESE &amp; INSEAD Studies</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          The European search fund ecosystem has grown from a handful of
          pioneering searchers in the late 2000s to over 100 active searches
          annually, making it the fastest-growing <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA market in Europe</Link> outside North
          America. Two institutions have been instrumental in documenting,
          researching, and accelerating this growth: IESE Business School in
          Barcelona and INSEAD in Fontainebleau. Their research provides the
          most thorough data available on European search fund
          performance, deal structures, and market dynamics. This article
          synthesizes the key findings from their studies and explores what
          they mean for searchers, investors, and the future of ETA in Europe.
        </p>

        <h2 className={h2Class}>IESE Business School research program</h2>
        <p>
          IESE has been the intellectual home of European search funds since
          Professor Rob Johnson and the IESE entrepreneurship faculty began
          studying the model in the early 2000s. Today, IESE&apos;s
          International Search Fund Center (ISFC) produces the most cited
          European search fund research and serves as the hub for the
          European ETA community.
        </p>

        <h3 className={h3Class}>History and methodology</h3>
        <ul className={ulClass}>
          <li>
            IESE published its first European search fund study in 2012,
            covering a small sample of searchers who had launched between
            2004 and 2011. Since then, the study has been updated
            approximately every two years with expanding datasets.
          </li>
          <li>
            The research methodology mirrors the Stanford study approach:
            surveys of searchers and investors combined with analysis of
            financial outcomes (IRR and return on invested capital) for
            completed search fund cycles.
          </li>
          <li>
            IESE also produces case studies on individual European search
            funds, providing detailed narratives of search processes,
            acquisitions, and post-acquisition operations. These cases are
            used in MBA classrooms globally.
          </li>
        </ul>

        <h3 className={h3Class}>Key findings from IESE research</h3>
        <ul className={ulClass}>
          <li>
            European search funds have achieved aggregate returns broadly
            comparable to the US model, with median IRRs in the
            30-40% range for completed acquisitions, though the
            dataset remains smaller and less mature.
          </li>
          <li>
            The conversion rate from funded search to completed acquisition
            has been similar to the US (approximately 65-75%), though
            European searches tend to take slightly longer due to
            fewer broker-intermediated deals and more complex regulatory
            environments.
          </li>
          <li>
            Industry selection in Europe mirrors the US: business services,
            healthcare, technology-enabled services, and niche manufacturing
            dominate successful acquisitions.
          </li>
          <li>
            The IESE research highlights that European searchers who focused
            on a single country and language market performed better than
            those who tried to search across multiple countries simultaneously.
            The exception is the Nordics, where cultural and linguistic
            similarities allow for effective multi-country searches.
          </li>
        </ul>

        <h2 className={h2Class}>INSEAD search fund research and alumni impact</h2>
        <p>
          INSEAD has played a complementary role to IESE in developing the
          European search fund ecosystem. While IESE has led in formal
          research output, INSEAD&apos;s contribution has been primarily through
          its alumni network and its role as a launchpad for searchers
          across Europe and beyond.
        </p>

        <h3 className={h3Class}>Research contributions</h3>
        <ul className={ulClass}>
          <li>
            INSEAD faculty have published research on search fund investor
            behavior, comparing how European and US investors evaluate search
            fund opportunities and structure their investments.
          </li>
          <li>
            The school&apos;s research has explored the role of MBA programs
            in preparing search fund operators, finding that the combination
            of general management education and entrepreneurial training
            is strongly correlated with post-acquisition performance.
          </li>
          <li>
            INSEAD has also studied self-funded search models in Europe,
            which have grown faster than traditional funded searches in
            several markets.
          </li>
        </ul>

        <h3 className={h3Class}>Alumni network impact</h3>
        <ul className={ulClass}>
          <li>
            INSEAD alumni have launched search funds across France, Germany,
            the UK, the Netherlands, the Nordics, and increasingly in
            Africa and the Middle East.
          </li>
          <li>
            The school&apos;s global alumni network provides searchers with
            cross-border connections that are particularly valuable in
            Europe&apos;s fragmented market.
          </li>
          <li>
            Several INSEAD alumni have become prominent search fund investors,
            creating a virtuous cycle of capital, mentorship, and deal flow
            within the European ecosystem.
          </li>
        </ul>

        <h2 className={h2Class}>European vs. US performance comparison</h2>
        <p>
          Comparing European and US search fund performance requires careful
          caveats: the European dataset is smaller, less mature, and spans
          a shorter time period. That said, the available data reveals both
          similarities and differences.
        </p>

        <h3 className={h3Class}>Returns</h3>
        <ul className={ulClass}>
          <li>
            Aggregate US <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">search fund returns</Link> have been approximately 33% IRR
            and 5.5x return on invested capital over the four-decade history
            of the model (per the <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">Stanford 2024 study</Link>).
          </li>
          <li>
            European returns appear broadly similar for completed acquisitions,
            though the smaller sample size makes the data less statistically
            strong. The top quartile of European search funds has achieved
            returns comparable to the best US outcomes.
          </li>
          <li>
            European search funds have a slightly lower loss rate than US
            funds, potentially because European searchers tend to be more
            conservative in deal selection and use.
          </li>
        </ul>

        <h3 className={h3Class}>Deal sizes</h3>
        <ul className={ulClass}>
          <li>
            Average European search fund acquisition sizes have been smaller
            than US deals, typically $3M-$10M enterprise value compared
            to $5M-$20M in the US.
          </li>
          <li>
            This gap is narrowing as the European market matures and larger
            search fund investors enter the market.
          </li>
          <li>
            Smaller deal sizes in Europe partly reflect the smaller average
            size of European SMEs and lower EBITDA multiples in certain
            markets.
          </li>
        </ul>

        <h3 className={h3Class}>Time to close</h3>
        <ul className={ulClass}>
          <li>
            European searches typically take 18-24 months from
            fundraising to acquisition, compared to 15-21 months in
            the US.
          </li>
          <li>
            The longer timeline reflects fewer intermediated deal processes,
            more complex regulatory approvals in some jurisdictions, and the
            need to manage different legal and tax frameworks across
            countries.
          </li>
        </ul>

        <h2 className={h2Class}>Growth trajectory of European search funds</h2>
        <p>
          The growth of European search funds has been remarkable, following
          a trajectory that mirrors the US model approximately 15-20
          years behind.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Before 2010:</strong> fewer than 10 search funds were
            active in all of Europe. The model was virtually unknown outside
            of IESE and a small community of early adopters.
          </li>
          <li>
            <strong>2010-2015:</strong> growth accelerated as IESE
            research gained visibility and early European success stories
            demonstrated the model&apos;s viability. Approximately 10-20
            new searches launched annually.
          </li>
          <li>
            <strong>2015-2020:</strong> the model reached a tipping
            point. Multiple MBA programs began teaching search fund courses,
            dedicated European search fund investors emerged, and the
            number of new searches grew to 30-50 per year.
          </li>
          <li>
            <strong>2020-present:</strong> over 100 search funds are
            now active annually across Europe. The ecosystem includes
            dedicated investors, search fund conferences, peer networks,
            and a growing body of operational best practices adapted for
            European markets.
          </li>
        </ul>

        <h2 className={h2Class}>Key European markets by activity</h2>

        <h3 className={h3Class}>Spain</h3>
        <p>
          Spain was the first European market to embrace search funds,
          driven largely by IESE&apos;s location in Barcelona. Spain
          benefits from a large SME sector with many family-owned businesses
          facing succession challenges, relatively lower valuations than
          Northern Europe, and a growing ecosystem of local search fund
          investors. It remains the most active European search fund market
          by volume.
        </p>

        <h3 className={h3Class}>France</h3>
        <p>
          France has emerged as the second-largest European search fund
          market. The country&apos;s enormous SME sector (over 3 million
          small businesses), combined with a wave of baby boomer retirements,
          creates significant deal flow. French search funds benefit from
          supportive government programs for business succession and a
          well-developed professional services ecosystem. However, labor
          regulations and social charges create complexity that searchers
          must manage carefully.
        </p>

        <h3 className={h3Class}>Germany</h3>
        <p>
          Germany represents the largest untapped opportunity in European
          search funds. The Mittelstand, Germany&apos;s famed small
          and medium-sized enterprise sector, includes tens of
          thousands of family-owned businesses with revenues between
          &euro;2M and &euro;50M. Many face succession challenges as
          founders retire without family successors. However, German
          business culture favors long-term relationships and gradual
          transitions, which can extend search timelines. Deal multiples
          tend to be higher than in Southern Europe.
        </p>

        <h3 className={h3Class}>United Kingdom</h3>
        <p>
          The UK has a well-developed SME acquisition market but search
          funds compete more directly with established private equity
          firms, family offices, and management buyout structures. UK
          search funds benefit from English-language deal documentation,
          familiar legal frameworks, and a deep pool of professional
          advisors. London business schools (LBS, Oxford, Cambridge) have
          become important feeders for UK search fund operators.
        </p>

        <h3 className={h3Class}>Nordics</h3>
        <p>
          The Nordic countries (Sweden, Denmark, Norway, Finland) have
          developed a distinctive search fund ecosystem characterized by
          cross-border searches, strong business school networks (Stockholm
          School of Economics, Copenhagen Business School), and high-quality
          SMEs with strong corporate governance traditions. Nordic search
          funds benefit from cultural similarities across countries, making
          multi-market searches more feasible than elsewhere in Europe.
        </p>

        <h2 className={h2Class}>European investor market evolution</h2>
        <ul className={ulClass}>
          <li>
            In the early days, European search funds relied heavily on US-based
            investors who understood the model. Today, a growing cohort of
            dedicated European search fund investors has emerged, including
            former search fund CEOs who have successfully exited and now
            invest in the next generation.
          </li>
          <li>
            European family offices have become increasingly active search
            fund investors, attracted by the model&apos;s alignment of
            interests and hands-on approach to value creation.
          </li>
          <li>
            Several dedicated search fund funds have been raised in Europe,
            pooling capital from institutional and individual investors to
            provide systematic search fund financing.
          </li>
          <li>
            Cross-border investing remains common, with US investors continuing
            to participate in European search funds and European investors
            beginning to invest in US searches.
          </li>
        </ul>

        <h2 className={h2Class}>Differences in deal structure</h2>
        <p>
          European search fund deals differ from their US counterparts in
          several important structural ways, reflecting differences in
          financing markets, legal systems, and business culture.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>More seller financing.</strong> European deals frequently
            include a larger proportion of seller financing (30-50% of
            the purchase price) compared to US deals. This reflects both the
            sellers&apos; willingness to support the transition and the
            relative scarcity of acquisition lending for small deals in
            some European markets.
          </li>
          <li>
            <strong>Lower use.</strong> European search fund acquisitions
            typically use less bank debt than US deals. The absence of an
            SBA-equivalent program in most European countries means that
            commercial bank lending is the primary debt source, and banks
            tend to be more conservative in their lending criteria.
          </li>
          <li>
            <strong>Earnout structures.</strong> Earnouts are more common in
            European deals, partly because they bridge valuation gaps and
            partly because European sellers tend to be more willing to
            maintain involvement post-sale during a transition period.
          </li>
          <li>
            <strong>Legal complexity.</strong> Each European country has
            its own corporate law, employment law, tax code, and regulatory
            framework. Cross-border deals add additional complexity related
            to transfer pricing, withholding taxes, and regulatory approvals.
          </li>
        </ul>

        <h2 className={h2Class}>Cultural and regulatory factors</h2>
        <p>
          European search fund operators face cultural and regulatory
          considerations that do not exist in the US market.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Employment protections.</strong> Most European countries
            have stronger employee protections than the US, including
            restrictions on termination, mandatory severance, works council
            consultations, and collective bargaining agreements. These
            protections affect the speed and cost of post-acquisition
            organizational changes.
          </li>
          <li>
            <strong>Language and culture.</strong> Operating in a non-English
            speaking market requires fluency in the local language and deep
            cultural understanding. Many successful European searchers are
            either native to their target market or have lived there
            extensively.
          </li>
          <li>
            <strong>Relationship-based deal sourcing.</strong> In many
            European markets, business sales happen through personal networks
            rather than broker-intermediated processes. Building relationships
            with accountants, lawyers, and industry associations is even more
            important than in the US.
          </li>
          <li>
            <strong>Tax optimization.</strong> European tax structures are
            complex and vary significantly by country. Holding company
            structures, tax-efficient jurisdictions (Luxembourg, Netherlands),
            and country-specific incentives can meaningfully impact
            after-tax returns. Engaging experienced tax advisors early is
            essential.
          </li>
          <li>
            <strong>Data privacy (GDPR).</strong> The General Data Protection
            Regulation adds compliance requirements for due diligence, data
            handling, and post-acquisition technology implementations that do
            not exist in the US context.
          </li>
        </ul>

        <h2 className={h2Class}>Future outlook and growth projections</h2>
        <ul className={ulClass}>
          <li>
            The European search fund market is expected to continue growing
            at 15-25% annually for the foreseeable future, driven by
            increasing awareness, a maturing investor ecosystem, and the
            massive succession wave as baby boomer business owners retire.
          </li>
          <li>
            Germany is widely viewed as the next major growth market, with
            the potential to become the largest European search fund market
            by volume within a decade.
          </li>
          <li>
            Self-funded and partially-funded search models are growing faster
            than traditional funded searches in Europe, particularly in
            markets where the traditional model is less well-known.
          </li>
          <li>
            Cross-border roll-ups, acquiring businesses in multiple
            European countries to build pan-European platforms , 
            represent a unique opportunity that does not exist in the more
            homogeneous US market.
          </li>
          <li>
            As the European ecosystem matures, returns may moderate as
            increased competition drives up acquisition multiples. Early
            movers in less-developed markets (Central and Eastern Europe,
            Italy, Portugal) may capture the highest risk-adjusted returns.
          </li>
        </ul>

        <h2 className={h2Class}>Recommended research papers and reports</h2>
        <ul className={ulClass}>
          <li>
            <strong>IESE International Search Fund Study</strong> (updated
            periodically): the most thorough dataset on European search
            fund performance, deal characteristics, and operator profiles.
          </li>
          <li>
            <strong>Stanford Search Fund Study (2024)</strong>: while
            US-focused, the Stanford study provides the essential benchmark
            against which European performance is compared.
          </li>
          <li>
            <strong>INSEAD Working Papers on Search Funds</strong>: various
            papers exploring investor behavior, operator preparation, and
            cross-border search dynamics.
          </li>
          <li>
            <strong>IESE Search Fund Case Studies</strong>: detailed
            narratives of individual European search funds, covering the
            full lifecycle from search to acquisition to operation.
          </li>
          <li>
            <strong>Search Fund Primer</strong> (Stanford GSB): the
            foundational document on the search fund model, regularly
            updated to reflect current market conditions.
          </li>
          <li>
            <strong>European Search Fund Association reports</strong>:
            annual surveys and market updates from the growing European
            ETA community.
          </li>
        </ul>

        <p>
          The European search fund market is at an inflection point. The
          combination of academic research, a maturing investor ecosystem,
          and the largest intergenerational wealth transfer in European
          history creates a compelling environment for entrepreneurship
          through acquisition. Learn <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why investors are backing search funds</Link> in growing numbers. For searchers willing to manage the
          complexity of European markets, the opportunities are vast and
          growing.
        </p>
      </div>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>How do European search fund returns compare to US returns?</h3>
      <div className={bodyClass}>
        <p>According to the IESE International Search Fund Study (2024), European search funds that have completed acquisitions have achieved median IRRs in the 30-40% range, broadly comparable to the aggregate US figure of approximately 33% IRR and 5.5x return on invested capital reported in the Stanford 2024 study. However, the European dataset remains significantly smaller and less mature, making direct statistical comparison difficult. One notable difference is that European search funds appear to have a slightly lower loss rate than US funds, potentially because European searchers tend to be more conservative in deal selection and use less use. Average European acquisition sizes ($3M-$10M enterprise value) have been smaller than US deals ($5M-$20M), though this gap is narrowing as the market matures and larger institutional investors enter the European ecosystem.</p>
      </div>

      <h3 className={h3Class}>Which European country is most active for search fund activity?</h3>
      <div className={bodyClass}>
        <p>Spain remains the most active European search fund market by volume, driven largely by IESE Business School&rsquo;s location in Barcelona and the school&rsquo;s role as the intellectual home of European ETA since the early 2000s. Spain benefits from a large SME sector with many family-owned businesses facing succession challenges, relatively lower valuations than Northern Europe (typically 4-6x EBITDA for SMEs), and a growing ecosystem of local search fund investors. France has emerged as the second-largest market, supported by its enormous SME sector of over 3 million small businesses and a wave of baby boomer retirements. Germany, despite having the largest untapped Mittelstand opportunity in Europe, lags behind in search fund activity due to higher deal multiples, longer relationship-building timelines, and a more conservative business culture, though it is widely viewed as the next major growth market.</p>
      </div>

      <h3 className={h3Class}>How has the European search fund ecosystem grown over time?</h3>
      <div className={bodyClass}>
        <p>The growth trajectory has been remarkable. According to IESE research, before 2010 fewer than 10 search funds were active in all of Europe. By 2015, approximately 10-20 new searches launched annually as early success stories demonstrated the model&rsquo;s viability. The market reached a tipping point between 2015 and 2020, when multiple MBA programs began teaching search fund courses and dedicated European investors emerged, growing new annual searches to 30-50. As of 2024, over 100 search funds are active annually across Europe, with growth rates of 15-25% per year expected to continue. The ecosystem now includes dedicated search fund investors, annual conferences, peer networks, and a growing body of operational best practices adapted for European markets. Self-funded and partially-funded search models have grown faster than traditional funded searches in several European markets, particularly where the traditional model is less well-known.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
        <li>Stanford Graduate School of Business, <em>Search Fund Study</em> (2024)</li>
        <li>INSEAD, <em>Working Papers on European Search Funds and Investor Behavior</em> (2023)</li>
      </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li><Link href="/learn/search-fund-statistics" className="text-apple-accent hover:underline">Search Fund Statistics: 681 Funds Analyzed</Link></li>
          <li><Link href="/learn/international-vs-us-returns" className="text-apple-accent hover:underline">International vs. US Search Fund Returns</Link></li>
          <li><Link href="/learn/search-fund-case-studies" className="text-apple-accent hover:underline">Search Fund Case Studies: Lessons from Real Deals</Link></li>
          <li><Link href="/learn/search-fund-success-stories" className="text-apple-accent hover:underline">Famous Search Fund Success Stories</Link></li>
          <li><Link href="/learn/search-fund-deal-characteristics" className="text-apple-accent hover:underline">Search Fund Deal Characteristics: What Gets Acquired</Link></li>
          <li><Link href="/learn/best-industries-search-funds" className="text-apple-accent hover:underline">What Industries Are Best for Search Funds?</Link></li>
        </ul>
    </article>
  );
}
