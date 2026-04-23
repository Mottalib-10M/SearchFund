import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ETAVsIndependentSponsorArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA vs. Independent Sponsor: Key Differences</h1>
      <div className={bodyClass}>
        <p>Search funds and independent sponsors are closely related acquisition models &mdash; both involve an individual or small team finding and acquiring a company with capital from outside investors. However, they differ in important ways: fundraising structure, deal size, operator economics, investor relationships, and post-acquisition involvement. Understanding these differences helps aspiring acquirers choose the model that best fits their ambitions and circumstances.</p>
      </div>

      <h2 className={h2Class}>How They Work</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Traditional search fund:</strong> Raise $400&ndash;600K in search capital from 15&ndash;25 investors. 2-year search. Investors have pro rata rights to fund the acquisition.</li>
          <li><strong>Independent sponsor:</strong> No committed capital. Find a deal first, then raise acquisition capital deal-by-deal from capital partners.</li>
          <li><strong>Search fund timeline:</strong> Structured 2-year search with defined milestones. Investors expect regular updates and board involvement.</li>
          <li><strong>Independent sponsor timeline:</strong> Open-ended search. More flexibility but no guaranteed salary during the search phase.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Economics Comparison</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Search fund equity:</strong> Searcher earns 20&ndash;30% of common equity, vesting over 3&ndash;5 years based on performance milestones.</li>
          <li><strong>Independent sponsor equity:</strong> Sponsor negotiates economics deal-by-deal. Typical: 10&ndash;20% promote + management fees + co-invest rights.</li>
          <li><strong>Search fund salary:</strong> Modest search salary ($80&ndash;120K) during search phase. CEO compensation post-acquisition.</li>
          <li><strong>Independent sponsor salary:</strong> No salary during search unless self-funded. Transaction fees and management fees post-closing.</li>
          <li><strong>Search fund governance:</strong> Board with investor representation. Structured governance from day one.</li>
          <li><strong>Independent sponsor governance:</strong> Varies by deal. Capital partner may or may not require board seat. More negotiating flexibility.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Deal Size &amp; Type</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Search fund deals:</strong> $5&ndash;30M enterprise value. Single acquisition focus. B2B services and niche manufacturing preferred.</li>
          <li><strong>Independent sponsor deals:</strong> $10&ndash;100M+ enterprise value. Can pursue larger targets and multiple acquisitions.</li>
          <li><strong>Search fund investors:</strong> Dedicated search fund investors who understand the model. Established investor ecosystem.</li>
          <li><strong>Independent sponsor capital:</strong> Family offices, PE funds, fundless sponsor-focused LPs, and institutional investors. Broader but less specialized.</li>
          <li><strong>Platform vs. single:</strong> Search funds typically acquire one company. Independent sponsors may build platform companies with add-on acquisitions.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Pros &amp; Cons</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Search fund advantage:</strong> Salary during search, established investor network, structured support, and proven model with 60+ years of data.</li>
          <li><strong>Search fund limitation:</strong> Smaller deal sizes, strict governance, investor pro rata rights that limit flexibility, and 2-year search pressure.</li>
          <li><strong>Independent sponsor advantage:</strong> Larger deals, more flexibility in terms and structure, no pro rata obligations, and unlimited search timeline.</li>
          <li><strong>Independent sponsor limitation:</strong> No search salary, must raise capital deal-by-deal (execution risk), and less established support network.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Search funds offer structured support, search-phase salary, and a proven investor ecosystem but constrain deal size and operator flexibility</li>
          <li>Independent sponsors have more flexibility on deal size, terms, and timeline but bear the risk of no search salary and deal-by-deal fundraising</li>
          <li>Search funds are ideal for first-time acquirers with MBA backgrounds; independent sponsors suit those with deal experience and capital relationships</li>
          <li>Many successful searchers evolve into independent sponsors for their second and subsequent deals</li>
          <li>The lines between models are blurring as hybrid structures (self-funded searches with institutional backing) become more common</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">Self-Funded vs. Traditional Search</Link></li>
        <li><Link href="/learn/eta-vs-private-equity" className="text-apple-accent hover:underline">ETA vs. Private Equity</Link></li>
        <li><Link href="/learn/finding-investors" className="text-apple-accent hover:underline">Finding Investors</Link></li>
        <li><Link href="/learn/search-fund-investor-ecosystems" className="text-apple-accent hover:underline">Search Fund Investor Ecosystems</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Stanford GSB, <em>Search Fund Study</em> (2024)</li>
        <li>Independent Sponsor Network, <em>Fundless Sponsor Market Report</em> (2024)</li>
        <li>McGuireWoods, <em>Independent Sponsor Deal Terms Study</em> (2024)</li>
      </ul>
    </article>
  );
}
