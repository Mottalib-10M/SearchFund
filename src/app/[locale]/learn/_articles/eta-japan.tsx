import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAJapanArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Japan: The $300B Succession Crisis
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Japan faces the most severe business succession crisis in the
          developed world. With 1.27 million companies at risk of closure by
          2025 due to aging and retiring owners, Japan&rsquo;s Small and Medium
          Enterprise Agency estimates that up to 6.5 million jobs and &yen;22
          trillion ($150&ndash;300 billion) in GDP could be lost if these
          businesses cannot find successors. For ETA practitioners, Japan
          represents both an enormous opportunity and a uniquely challenging
          market.
        </p>

        <h2 className={h2Class}>The scope of Japan&rsquo;s succession crisis</h2>
        <p>
          Japan&rsquo;s demographics paint a stark picture:
        </p>
        <ul className={ulClass}>
          <li><strong>3.6 million SMEs</strong> in Japan, accounting for 99.7% of all businesses</li>
          <li><strong>Average age of business owners:</strong> 62 years (up from 47 in 1995)</li>
          <li><strong>1.27 million businesses</strong> where the owner is 70+ with no identified successor</li>
          <li><strong>60% of businesses</strong> report having no succession plan</li>
          <li><strong>49,000+ annual business closures</strong> despite being profitable &mdash; purely due to lack of succession</li>
          <li><strong>The median SME owner age will reach 70</strong> by 2025, a critical inflection point</li>
        </ul>
        <p>
          Unlike the{" "}
          <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
            baby boomer succession wave
          </Link>{" "}
          in the US and Europe, Japan&rsquo;s crisis is compounded by the
          country&rsquo;s demographic decline: Japan&rsquo;s population is
          shrinking, birth rates are among the lowest globally, and younger
          generations increasingly prefer corporate employment over family
          business succession.
        </p>

        <h2 className={h2Class}>Government response: unprecedented support</h2>
        <p>
          The Japanese government has recognized business succession as a
          national economic priority and has implemented extensive support
          programs:
        </p>

        <h3 className={h3Class}>Business Succession Support Centers</h3>
        <p>
          METI (Ministry of Economy, Trade and Industry) operates a national
          network of Business Succession Support Centers in every prefecture.
          These government-funded centers provide:
        </p>
        <ul className={ulClass}>
          <li>Free matching services connecting sellers with potential buyers</li>
          <li>Advisory support for transition planning</li>
          <li>Financial guidance and subsidy applications</li>
          <li>Over 30,000 consultations per year</li>
        </ul>

        <h3 className={h3Class}>Tax incentives</h3>
        <ul className={ulClass}>
          <li><strong>Business Succession Tax System:</strong> 100% deferral of gift tax and inheritance tax on business succession shares (enacted 2018, time-limited through 2027)</li>
          <li><strong>Special M&amp;A tax treatment:</strong> Tax deductions for acquisition-related expenses and reserves against potential losses</li>
          <li><strong>Stamp duty exemptions:</strong> For qualifying M&amp;A transactions in succession contexts</li>
        </ul>

        <h3 className={h3Class}>Subsidies and grants</h3>
        <ul className={ulClass}>
          <li><strong>Business Succession Subsidy:</strong> Up to &yen;6 million for M&amp;A advisory costs, due diligence, and post-acquisition integration</li>
          <li><strong>Monozukuri Subsidy:</strong> For manufacturing businesses undergoing succession and modernization</li>
          <li><strong>IT Introduction Subsidy:</strong> For digitization post-succession</li>
        </ul>

        <h2 className={h2Class}>The M&amp;A market</h2>

        <h3 className={h3Class}>Acquisition multiples</h3>
        <p>
          Japanese SME multiples are among the lowest in the developed world:
        </p>
        <ul className={ulClass}>
          <li><strong>Small businesses (&lt;&yen;500M revenue):</strong> 2&ndash;4x EBITDA</li>
          <li><strong>Medium businesses (&yen;500M&ndash;&yen;5B revenue):</strong> 3&ndash;6x EBITDA</li>
          <li><strong>Premium sectors (healthcare, IT):</strong> 5&ndash;8x EBITDA</li>
        </ul>
        <p>
          The low multiples reflect succession urgency, limited buyer
          competition for small deals, and Japan&rsquo;s low-growth economic
          environment. For acquirers, these valuations offer attractive entry
          points compared to US and European markets.
        </p>

        <h3 className={h3Class}>M&amp;A advisors and platforms</h3>
        <p>
          Japan&rsquo;s SME M&amp;A advisory market has grown rapidly:
        </p>
        <ul className={ulClass}>
          <li><strong>Nihon M&amp;A Center:</strong> Japan&rsquo;s largest SME M&amp;A advisory firm (listed on TSE), handling 1,000+ deals per year</li>
          <li><strong>M&amp;A Capital Partners:</strong> Major listed advisory firm focused on mid-market</li>
          <li><strong>Batonz:</strong> Online M&amp;A matching platform with 100,000+ registered users</li>
          <li><strong>Tranbi:</strong> Online marketplace for small business M&amp;A</li>
          <li><strong>METI Support Centers:</strong> Government-operated matching services (free)</li>
        </ul>

        <h2 className={h2Class}>Challenges for foreign acquirers</h2>

        <h3 className={h3Class}>Language and culture</h3>
        <p>
          The Japanese business environment operates almost exclusively in
          Japanese. Business-level Japanese fluency (JLPT N1 or equivalent) is
          a practical requirement for operating a Japanese SME. Beyond
          language, cultural norms around business relationships, decision-making
          (nemawashi and ringi), and hierarchy require deep cultural
          understanding.
        </p>

        <h3 className={h3Class}>Relationship-driven deal culture</h3>
        <p>
          Japanese business owners often prefer to sell to someone they know
          and trust. Cold outreach is less effective than in Western markets.
          Building relationships through introductions, local networks, and
          professional advisors is essential.
        </p>

        <h3 className={h3Class}>Post-acquisition management</h3>
        <p>
          Japanese employees expect a specific management style that differs
          from Western norms:
        </p>
        <ul className={ulClass}>
          <li>Consensus-based decision-making rather than top-down directives</li>
          <li>Seniority-based compensation and promotion expectations</li>
          <li>Strong expectation of lifetime employment (weakening but still important)</li>
          <li>Indirect communication styles that require careful interpretation</li>
        </ul>
        <p>
          Our{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            first 100 days guide
          </Link>{" "}
          provides general transition principles, but Japan requires
          significant cultural adaptation of these frameworks.
        </p>

        <h3 className={h3Class}>Immigration and residency</h3>
        <p>
          Foreign nationals need a valid visa to operate a business in Japan.
          The most relevant categories are:
        </p>
        <ul className={ulClass}>
          <li><strong>Business Manager visa:</strong> Requires a registered office, &yen;5 million+ invested capital, and 2+ full-time employees</li>
          <li><strong>Highly Skilled Professional visa:</strong> Points-based system with faster path to permanent residency</li>
          <li><strong>Startup visa:</strong> Available in certain designated cities for a limited period</li>
        </ul>

        <h2 className={h2Class}>Financing options</h2>
        <ul className={ulClass}>
          <li><strong>Japan Finance Corporation (JFC):</strong> Government-backed lending for SME acquisitions at favorable rates</li>
          <li><strong>Shoko Chukin Bank:</strong> Government-affiliated bank specializing in SME financing</li>
          <li><strong>Regional banks (chiho ginko):</strong> Strong local relationships and willingness to finance succession deals</li>
          <li><strong>Seller financing:</strong> Less common in Japan than in the US/Europe but growing as advisory firms educate sellers on the benefits</li>
        </ul>

        <h2 className={h2Class}>Sectors with the most opportunity</h2>
        <ul className={ulClass}>
          <li><strong>Manufacturing (monozukuri):</strong> Japan&rsquo;s precision manufacturing SMEs are world-class but face severe succession challenges</li>
          <li><strong>Construction:</strong> Aging industry with massive succession gap and ongoing demand</li>
          <li><strong>Healthcare and nursing care:</strong> Rapidly growing demand due to Japan&rsquo;s aging population</li>
          <li><strong>IT services:</strong> Growing sector with lower succession risk but high growth potential</li>
          <li><strong>Retail and food services:</strong> Large number of businesses but lower margins and higher competition</li>
        </ul>

        <h2 className={h2Class}>The ETA ecosystem in Japan</h2>
        <p>
          Japan&rsquo;s ETA ecosystem is nascent but developing:
        </p>
        <ul className={ulClass}>
          <li><strong>Academic:</strong> Keio, Waseda, and Hitotsubashi business schools are beginning to teach ETA concepts</li>
          <li><strong>Search funds:</strong> A small but growing number of search funds are operating in Japan, often led by Japanese MBAs returning from Stanford, INSEAD, or IESE</li>
          <li><strong>PE firms:</strong> Japanese PE firms like J-STAR, Polaris, and Advantage Partners are increasingly active in the lower mid-market</li>
          <li><strong>Cross-border:</strong> Some Western ETA practitioners are partnering with Japanese nationals to bridge the cultural gap</li>
        </ul>

        <h2 className={h2Class}>Is Japan right for you?</h2>
        <p>
          Japan offers arguably the most attractive supply-demand dynamics for
          business acquisition in the world: massive deal flow, low
          multiples, and unprecedented government support. But the barriers to
          entry are high: language, culture, relationship expectations, and
          management style differences make it one of the most challenging
          markets for foreign acquirers. The ideal candidate for Japanese ETA
          is someone with Japanese language fluency, cultural understanding
          (ideally from living or working in Japan), and the patience to build
          relationships over time.
        </p>
        <p>
          For a comparison with other attractive markets, see our{" "}
          <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">
            best countries to buy a business
          </Link>{" "}
          ranking, and for the{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            European alternative
          </Link>,
          explore our country-specific guides.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How many Japanese businesses close each year due to lack of a successor?</h3>
        <p>
          According to Japan&rsquo;s Small and Medium Enterprise Agency (a division of METI), approximately 49,000 businesses close each year despite being profitable, purely because the owner cannot find a successor. Teikoku Databank, Japan&rsquo;s leading business intelligence firm, reported in 2023 that 60.5% of Japanese SMEs have no succession plan, and the average age of retiring business owners has climbed to 70.1 years. The government estimates that if current trends continue, up to 6.5 million jobs and &yen;22 trillion in annual GDP could be lost by the end of the decade. This urgency has driven unprecedented government support, including the Business Succession Tax System (which defers 100% of gift and inheritance taxes on business shares) and a national network of <Link href="/learn/succession-driven-acquisitions" className="text-apple-accent hover:underline">succession support centers</Link> in all 47 prefectures.
        </p>

        <h3 className={h3Class}>Can a non-Japanese speaker successfully acquire and operate a business in Japan?</h3>
        <p>
          In practice, business-level Japanese fluency (JLPT N1 or equivalent) is a near-requirement for operating a Japanese SME. According to the Japan External Trade Organization (JETRO), fewer than 10% of Japanese SMEs use English in daily operations, and the percentage drops significantly outside of Tokyo and Osaka. Deal negotiations, employee management, customer relationships, and vendor interactions all occur in Japanese. Some foreign acquirers have succeeded by partnering with a Japanese co-operator who handles day-to-day management, while the foreign partner focuses on strategy, international expansion, and investor relations. IESE Business School&rsquo;s research on international search funds notes that the most successful cross-cultural acquisitions in Japan involve operators who have lived in Japan for at least two to three years before launching their search.
        </p>

        <h3 className={h3Class}>What government financing is available for acquiring a business in Japan?</h3>
        <p>
          Japan offers among the most generous government-backed acquisition financing in the world. The Japan Finance Corporation (JFC) provides low-interest loans specifically for business succession transactions, with terms of up to 20 years and rates as low as 0.5&ndash;2% annually. Shoko Chukin Bank, a government-affiliated institution, specializes in SME lending and offers acquisition financing with favorable collateral requirements. METI&rsquo;s Business Succession Subsidy provides up to &yen;6 million to cover M&amp;A advisory fees, due diligence costs, and post-acquisition integration expenses. Additionally, the Business Succession Tax System (enacted in 2018 and extended through 2027) defers 100% of gift and inheritance tax on qualifying business shares. Regional banks (chiho ginko) are also increasingly willing to finance succession deals as they recognize the economic importance of keeping local businesses alive.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Small and Medium Enterprise Agency (METI), <em>White Paper on Small and Medium Enterprises in Japan</em> (2024)</li>
          <li>Teikoku Databank, <em>National Business Succession Survey</em> (2023)</li>
          <li>IESE Business School, <em>International Search Fund Study</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
