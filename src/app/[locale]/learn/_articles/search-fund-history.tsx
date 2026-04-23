import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundHistoryArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        History of Search Funds: From Stanford 1984 to Today
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          The search fund model was invented at Stanford Graduate School of
          Business in 1984. What began as an obscure experiment by one professor
          and two MBA students has grown into a global asset class with 680+
          funds raised across 25+ countries. Here&rsquo;s how it happened.
        </p>

        <h2 className={h2Class}>1984 &ndash; The invention</h2>
        <ul className={ulClass}>
          <li><strong>H. Irving Grousbeck</strong> (Stanford GSB professor and co-owner of the Boston Celtics) conceptualized the search fund model as a way for talented MBA graduates to become CEOs without starting a company from scratch</li>
          <li><strong>Jim Southern and Rick Kelley</strong> raised the first two search funds from Stanford GSB in 1984</li>
          <li><strong>Original thesis:</strong> A small group of investors funds a recent graduate to spend 2 years searching for one company to acquire and run as CEO</li>
          <li><strong>Why Stanford?</strong> The entrepreneurship faculty saw a gap: graduates wanted to run companies but lacked the capital and deal flow. The search fund bridged that gap</li>
        </ul>

        <h2 className={h2Class}>1984&ndash;2000: The early years</h2>
        <ul className={ulClass}>
          <li><strong>Slow growth:</strong> Fewer than 50 search funds were raised in the first 16 years. The model was virtually unknown outside Stanford</li>
          <li><strong>Informal network:</strong> A small group of investors (many Stanford professors and alumni) funded nearly all early searches</li>
          <li><strong>First data collection:</strong> Stanford GSB began tracking search fund outcomes in the early 1990s, creating the dataset that would later prove the model&rsquo;s returns</li>
          <li><strong>Typical deal:</strong> $3M&ndash;$10M enterprise value, 4&ndash;5x EBITDA, heavy{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link></li>
          <li><strong>Key challenge:</strong> No institutional knowledge base. Each searcher was largely reinventing the process</li>
        </ul>

        <h2 className={h2Class}>2000&ndash;2010: Institutional legitimacy</h2>
        <ul className={ulClass}>
          <li><strong>Stanford 2001 study:</strong> The first comprehensive research paper on search fund returns demonstrated 36% gross IRR &mdash; validating the model academically and attracting new investors</li>
          <li><strong>HBS case studies:</strong> Harvard Business School began writing search fund case studies, introducing the model to a broader MBA audience</li>
          <li><strong>Dedicated investors emerge:</strong> Firms like Pacific Lake Partners and Search Fund Partners began specializing in search fund investing, professionalizing the investor side</li>
          <li><strong>Self-funded search variant:</strong> Searchers who couldn&rsquo;t raise (or didn&rsquo;t want) traditional search capital began{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
              self-funding their searches
            </Link>{" "}
            using SBA loans and personal savings</li>
          <li><strong>By 2010:</strong> ~180 total search funds had been raised, with ~$2.5B in total acquisitions</li>
        </ul>

        <h2 className={h2Class}>2010&ndash;2020: The growth decade</h2>
        <ul className={ulClass}>
          <li><strong>Exponential growth:</strong> More search funds were raised between 2010 and 2020 than in the entire prior history combined</li>
          <li><strong>International expansion:</strong> Search funds spread to{" "}
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
              Europe
            </Link>{" "}
            (Spain, France, UK, Germany), Latin America (Brazil, Colombia, Mexico), and Asia</li>
          <li><strong>IESE &amp; INSEAD research:</strong> European business schools began producing their own{" "}
            <Link href="/learn/european-search-fund-research" className="text-apple-accent hover:underline">
              search fund research
            </Link>, validating the model internationally</li>
          <li><strong>Stanford 2018 study:</strong> Documented 35.3% gross IRR across 401 funds &mdash; the largest dataset yet</li>
          <li><strong>New investor classes:</strong> Family offices, endowments, and professional search fund investors created dedicated allocation pools</li>
          <li><strong>Self-funded search boom:</strong> The self-funded model grew rapidly, driven by SBA 7(a) lending and lower barriers to entry</li>
          <li><strong>Community infrastructure:</strong> SearchFunder.com, ETA conferences (MIT, Stanford, IESE), and dedicated newsletters emerged</li>
        </ul>

        <h2 className={h2Class}>2020&ndash;present: Mainstream adoption</h2>
        <ul className={ulClass}>
          <li><strong>681+ funds raised</strong> as of the{" "}
            <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
              Stanford 2024 study
            </Link>{" "}
            &mdash; a 4x increase from 2010</li>
          <li><strong>Global scale:</strong> Active search fund ecosystems in 25+ countries. Europe now accounts for 30%+ of new fund formations</li>
          <li><strong>Record returns:</strong> The Stanford 2024 study reports 33.1% gross IRR and 6.9x ROI across the full dataset &mdash; outperforming most alternative asset classes</li>
          <li><strong>Baby boomer succession:</strong> The{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              $10 trillion succession wave
            </Link>{" "}
            is creating unprecedented deal flow for searchers</li>
          <li><strong>Technology enablement:</strong> AI-powered deal sourcing,{" "}
            <Link href="/learn/searcher-tools" className="text-apple-accent hover:underline">
              digital tools
            </Link>, and online platforms are reducing search costs and timelines</li>
          <li><strong>Broader demographics:</strong>{" "}
            <Link href="/learn/women-in-eta" className="text-apple-accent hover:underline">
              Women in ETA
            </Link>{" "}
            programs and diversity initiatives are expanding the talent pool beyond the traditional MBA demographic</li>
        </ul>

        <h2 className={h2Class}>Key milestones timeline</h2>
        <ul className={ulClass}>
          <li><strong>1984:</strong> First search funds raised at Stanford GSB</li>
          <li><strong>1996:</strong> Stanford begins systematic data collection</li>
          <li><strong>2001:</strong> First Stanford search fund study published (36% IRR)</li>
          <li><strong>2005:</strong> IESE publishes first European search fund study</li>
          <li><strong>2010:</strong> ~180 total funds; self-funded model gains traction</li>
          <li><strong>2014:</strong> 30th anniversary; ~350 funds raised globally</li>
          <li><strong>2018:</strong> Stanford study covers 401 funds; 35.3% gross IRR</li>
          <li><strong>2020:</strong> COVID briefly pauses searches; deal flow rebounds quickly</li>
          <li><strong>2022:</strong> Record year for new fund formations globally</li>
          <li><strong>2024:</strong> 681+ funds in Stanford dataset; 33.1% gross IRR lifetime</li>
        </ul>

        <h2 className={h2Class}>Why the model has endured</h2>
        <ul className={ulClass}>
          <li><strong>Alignment of interests:</strong> The searcher&rsquo;s 20&ndash;30% equity creates CEO-level motivation without founder-level risk</li>
          <li><strong>Structural advantage:</strong> Search funds target the{" "}
            <Link href="/learn/what-size-business-buy" className="text-apple-accent hover:underline">
              $1&ndash;5M EBITDA sweet spot
            </Link>{" "}
            where competition from PE is limited</li>
          <li><strong>Repeatable process:</strong> 40 years of data have refined the playbook from fundraise to exit</li>
          <li><strong>Attractive returns:</strong> 33%+ gross IRR places search funds among the best-performing alternative asset classes. See{" "}
            <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
              search fund returns
            </Link></li>
          <li><strong>Demographic tailwind:</strong> 10,000 baby boomers retire daily, creating a growing supply of quality acquisition targets</li>
        </ul>

        <p>
          For current performance data, see the{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            Stanford 2024 study analysis
          </Link>{" "}
          and{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            getting started with ETA
          </Link>.
        </p>
      </div>
    </article>
  );
}
