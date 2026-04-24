import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundStatisticsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Search Fund Statistics: 681 Funds Analyzed
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The search fund model is one of the best-documented investment
          strategies in private markets. Since Stanford Graduate School of
          Business began tracking the asset class in 1996, the data set has
          grown to cover 681 search funds spanning 40 years. Combined with
          IESE&rsquo;s International Search Fund Study and emerging research
          from INSEAD and HEC Paris, we now have a comprehensive statistical
          picture of ETA (Entrepreneurship Through Acquisition) performance.
        </p>
        <p>
          This article compiles the most important search fund statistics from
          the{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            Stanford 2024 study
          </Link>{" "}
          and other major research programs, covering fund creation trends,
          acquisition rates, returns, deal characteristics, and the emerging
          European ecosystem.
        </p>

        <h2 className={h2Class}>Fund creation trends</h2>
        <p>
          The number of new search funds launched each year has accelerated
          dramatically over the past decade:
        </p>
        <ul className={ulClass}>
          <li><strong>1984&ndash;2000:</strong> Roughly 2&ndash;5 new funds per year, almost exclusively in the US</li>
          <li><strong>2001&ndash;2010:</strong> Growth to 10&ndash;20 new funds per year as MBA programs began teaching the model</li>
          <li><strong>2011&ndash;2018:</strong> Acceleration to 30&ndash;50 new funds per year, with international expansion beginning</li>
          <li><strong>2019&ndash;2023:</strong> Explosive growth with a record 94 new search funds launched in 2023</li>
        </ul>
        <p>
          The total cumulative count reached 681 search funds by the time the
          2024 Stanford study was published. This excludes self-funded
          searchers, independent sponsors, and international funds not captured
          in the Stanford database, meaning the true number of ETA
          practitioners is likely 2&ndash;3x higher.
        </p>

        <h2 className={h2Class}>Acquisition success rates</h2>
        <p>
          Not every search fund successfully acquires a company. The data shows:
        </p>
        <ul className={ulClass}>
          <li><strong>~67% of traditional search funds</strong> complete an acquisition</li>
          <li><strong>~33% return unused capital</strong> to investors without acquiring</li>
          <li>The average search duration for successful funds is <strong>18&ndash;22 months</strong></li>
          <li>Searchers typically review <strong>200&ndash;300 targets</strong>, meet <strong>50&ndash;100 owners</strong>, and submit <strong>5&ndash;15 LOIs</strong> before closing</li>
        </ul>
        <p>
          The acquisition rate has remained remarkably stable over time,
          suggesting it reflects a fundamental challenge of the model rather
          than a temporary market condition. For searchers who do not acquire,
          the most common reasons are inability to find a suitable target at an
          acceptable valuation, deal fatigue, or personal circumstances.
        </p>

        <h2 className={h2Class}>Return statistics</h2>
        <p>
          Search fund returns are among the most compelling in private markets.
          The headline numbers from the{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            Stanford performance data
          </Link>:
        </p>
        <ul className={ulClass}>
          <li><strong>35% aggregate IRR</strong> across all funds (pre-tax, gross of search fees)</li>
          <li><strong>4.5x aggregate ROIC</strong> (return on invested capital)</li>
          <li><strong>Median IRR: ~25%</strong> for funds that complete an acquisition</li>
          <li><strong>Median ROIC: ~2.6x</strong> for acquiring funds</li>
          <li>The top quartile of funds has generated <strong>100%+ IRR</strong></li>
          <li>Approximately <strong>one-third of acquisitions</strong> result in losses for investors</li>
        </ul>

        <h3 className={h3Class}>Return distribution</h3>
        <p>
          Search fund returns follow a positively skewed distribution,
          similar to venture capital but less extreme. The key pattern:
        </p>
        <ul className={ulClass}>
          <li><strong>~33% of acquisitions</strong> lose some or all invested capital</li>
          <li><strong>~17% of acquisitions</strong> return 1&ndash;2x invested capital</li>
          <li><strong>~20% of acquisitions</strong> return 2&ndash;5x</li>
          <li><strong>~15% of acquisitions</strong> return 5&ndash;10x</li>
          <li><strong>~15% of acquisitions</strong> return 10x+ (the &ldquo;home runs&rdquo;)</li>
        </ul>
        <p>
          This distribution means portfolio construction matters enormously.
          Investors who back 10&ndash;20 search funds can expect the winners to
          more than compensate for the losers, while a single investment carries
          significant binary risk. See our{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
            investor&rsquo;s guide
          </Link>{" "}
          for portfolio construction strategies.
        </p>

        <h2 className={h2Class}>Deal characteristics</h2>
        <p>
          The typical search fund acquisition has the following profile:
        </p>
        <ul className={ulClass}>
          <li><strong>Enterprise value:</strong> $8&ndash;$15M median (up from $5&ndash;$8M a decade ago)</li>
          <li><strong>Revenue:</strong> $5&ndash;$25M</li>
          <li><strong>EBITDA:</strong> $1.5&ndash;$4M</li>
          <li><strong>EBITDA margin:</strong> 15&ndash;25%</li>
          <li><strong>Purchase multiple:</strong> 4&ndash;7x EBITDA (inclusive of all consideration)</li>
          <li><strong>Equity raised at acquisition:</strong> $3&ndash;$8M</li>
          <li><strong>Debt leverage:</strong> 2&ndash;4x EBITDA</li>
        </ul>
        <p>
          Deal sizes have trended upward as the asset class has matured and
          more institutional capital has entered. The{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valuation multiples
          </Link>{" "}
          paid by search funds remain well below those paid by larger PE firms,
          which is a key driver of the strong return profile.
        </p>

        <h2 className={h2Class}>Industry breakdown</h2>
        <p>
          Search fund acquisitions span a wide range of industries, though
          certain sectors are disproportionately represented:
        </p>
        <ul className={ulClass}>
          <li><strong>Technology &amp; SaaS:</strong> ~20% of acquisitions (growing rapidly)</li>
          <li><strong>Healthcare services:</strong> ~12%</li>
          <li><strong>Business services:</strong> ~15%</li>
          <li><strong>Manufacturing &amp; distribution:</strong> ~10%</li>
          <li><strong>Education &amp; training:</strong> ~8%</li>
          <li><strong>Financial services:</strong> ~5%</li>
          <li><strong>Other (home services, logistics, retail, etc.):</strong> ~30%</li>
        </ul>
        <p>
          The shift toward{" "}
          <Link href="/learn/saas-acquisition" className="text-apple-accent hover:underline">
            SaaS and technology acquisitions
          </Link>{" "}
          has been one of the most notable trends, driven by the attractive
          recurring revenue profiles and scalability of software businesses.
        </p>

        <h2 className={h2Class}>Searcher demographics</h2>
        <p>
          The profile of the typical searcher has evolved over time:
        </p>
        <ul className={ulClass}>
          <li><strong>Age:</strong> Average 30&ndash;33 at fund launch</li>
          <li><strong>Education:</strong> ~85% hold an MBA (Stanford, Harvard, Wharton, Columbia, and IESE are the most represented)</li>
          <li><strong>Prior experience:</strong> 4&ndash;8 years in consulting (30%), finance (25%), operations (20%), or technology (15%)</li>
          <li><strong>Gender:</strong> ~15% female (growing slowly but still significantly underrepresented)</li>
          <li><strong>Partnership:</strong> ~35% search with a partner (two-person team), ~65% solo</li>
        </ul>
        <p>
          The diversity statistics highlight both progress and remaining gaps.
          Our article on{" "}
          <Link href="/learn/women-in-eta" className="text-apple-accent hover:underline">
            women and diversity in search funds
          </Link>{" "}
          explores the initiatives working to broaden participation.
        </p>

        <h2 className={h2Class}>Compensation and economics</h2>
        <p>
          The financial economics for searchers are well-documented:
        </p>
        <ul className={ulClass}>
          <li><strong>Search-phase salary:</strong> $100K&ndash;$150K per year</li>
          <li><strong>Post-acquisition CEO salary:</strong> $200K&ndash;$300K</li>
          <li><strong>Equity earned:</strong> 20&ndash;30% through a three-tranche step-up</li>
          <li><strong>Average lifetime wealth creation:</strong> $3&ndash;$10M+ for successful acquisitions</li>
          <li><strong>Hold period:</strong> Median 5&ndash;7 years from acquisition to exit</li>
        </ul>
        <p>
          See our{" "}
          <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">
            complete searcher compensation guide
          </Link>{" "}
          for worked examples and tax planning strategies.
        </p>

        <h2 className={h2Class}>European search fund statistics</h2>
        <p>
          The European ETA ecosystem has grown from near-zero to a significant
          market in just a decade. Key statistics from{" "}
          <Link href="/learn/european-search-fund-research" className="text-apple-accent hover:underline">
            IESE and INSEAD research
          </Link>:
        </p>
        <ul className={ulClass}>
          <li><strong>150+ active search funds</strong> across Europe as of 2024</li>
          <li><strong>France and Spain</strong> are the two largest European markets</li>
          <li><strong>3&ndash;5x EBITDA</strong> average acquisition multiples (vs. 4&ndash;7x in the US)</li>
          <li><strong>Comparable returns</strong> to US search funds for completed acquisitions</li>
          <li><strong>23 million SMEs</strong> in the EU facing succession challenges</li>
          <li><strong>450,000 businesses</strong> change hands in Europe each year</li>
        </ul>
        <p>
          The{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            European ETA opportunity
          </Link>{" "}
          is driven by lower multiples, a massive succession wave, and
          increasing institutional support from business schools (IESE, INSEAD,
          HEC Paris, SDA Bocconi) and government programs (Bpifrance, KfW).
        </p>

        <h2 className={h2Class}>Key success factors</h2>
        <p>
          Analysis of the performance data reveals several factors correlated
          with higher search fund returns:
        </p>
        <ul className={ulClass}>
          <li><strong>Industry experience:</strong> Searchers with prior experience in their acquisition target&rsquo;s industry tend to outperform</li>
          <li><strong>Revenue growth:</strong> Post-acquisition revenue growth is the strongest predictor of investment returns</li>
          <li><strong>Deal sourcing discipline:</strong> Successful searchers are more selective and patient in their search</li>
          <li><strong>Investor support:</strong> Active, experienced investors who provide operational guidance correlate with better outcomes</li>
          <li><strong>Operational improvements:</strong> CEOs who invest in sales, technology, and talent early outperform those focused primarily on cost-cutting</li>
        </ul>
        <p>
          For a deeper analysis of what drives (and destroys) search fund
          value, read our article on{" "}
          <Link href="/learn/why-search-funds-fail" className="text-apple-accent hover:underline">
            why search funds fail
          </Link>.
        </p>

        <h2 className={h2Class}>Data methodology and limitations</h2>
        <p>
          The Stanford study is the most comprehensive dataset but has
          important limitations to note:
        </p>
        <ul className={ulClass}>
          <li><strong>Survivorship bias:</strong> Not all search funds report data. Failed funds are less likely to respond to surveys.</li>
          <li><strong>US-centric:</strong> The majority of data comes from US-based funds, though international coverage is improving with IESE&rsquo;s parallel studies.</li>
          <li><strong>Self-reported:</strong> Returns are self-reported by searchers and investors, with limited independent verification.</li>
          <li><strong>Gross returns:</strong> Published IRR figures are typically pre-tax and gross of search phase fees, meaning net investor returns are lower.</li>
          <li><strong>Excludes self-funded:</strong> The Stanford study primarily tracks traditional search funds. The growing self-funded segment has less systematic data.</li>
        </ul>
        <p>
          Despite these limitations, the dataset is large enough (681 funds over
          40 years) to provide statistically meaningful insights into the asset
          class. Researchers continue to refine the methodology with each
          biennial update.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How reliable are the published search fund return statistics?</h3>
        <p>
          The Stanford GSB study is the most comprehensive and widely cited dataset, but investors should be aware of several biases. Returns are self-reported, which introduces potential reporting bias &mdash; funds with poor outcomes are less likely to respond to surveys. The published IRR figures (35%+ aggregate) are pre-tax and gross of search-phase fees, meaning net investor returns are meaningfully lower. Additionally, survivorship bias may inflate results since not all search funds are captured in the database. Despite these limitations, the 681-fund sample over 40 years is statistically significant, and the general patterns &mdash; high variance, positive skew, and strong aggregate returns &mdash; are consistent across independent studies from IESE, INSEAD, and HEC Paris.
        </p>

        <h3 className={h3Class}>What is the typical search fund deal size, and how has it changed over time?</h3>
        <p>
          The median enterprise value of search fund acquisitions has approximately doubled over the past decade, from $5&ndash;$8M to $8&ndash;$15M according to the 2024 Stanford study. This increase reflects both asset price inflation and the entry of more institutional capital into the asset class. EBITDA at acquisition typically ranges from $1.5M&ndash;$4M, with purchase multiples of 4&ndash;7x EBITDA inclusive of all consideration. The upward trend in deal sizes has important implications for <Link href="/learn/portfolio-construction-search-funds" className="text-apple-accent hover:underline">portfolio construction</Link> &mdash; investors now need larger follow-on reserves, and total equity raised per acquisition has grown to $3M&ndash;$8M.
        </p>

        <h3 className={h3Class}>How do European search fund statistics compare to US data?</h3>
        <p>
          According to IESE Business School research, European search funds offer several statistical advantages over their US counterparts. Acquisition multiples average 3&ndash;5x EBITDA in Europe versus 4&ndash;7x in the US, providing a lower entry price. The European market features 23 million SMEs facing succession challenges and 450,000 annual ownership transitions. Returns for completed European acquisitions have been comparable to US funds, though the dataset is smaller (150+ active funds as of 2024 versus 681 cumulative in the Stanford database). The key risk is lower exit liquidity &mdash; Europe has fewer strategic acquirers and a less developed lower-middle-market PE ecosystem. France, Spain, and Germany are the most mature European markets. See our <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link> guide for detailed analysis.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>Search Fund Study: Selected Observations</em> (2024)</li>
          <li>IESE Business School, <em>International Search Fund Study</em> (2023)</li>
          <li>INSEAD &amp; HEC Paris, <em>European Entrepreneurship Through Acquisition: Emerging Data</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
