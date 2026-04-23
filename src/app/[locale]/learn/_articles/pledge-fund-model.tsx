import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function PledgeFundModelArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        The Pledge Fund Model Explained
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          A pledge fund is a hybrid between a{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            traditional search fund
          </Link>{" "}
          and an{" "}
          <Link href="/learn/search-fund-vs-independent-sponsor" className="text-apple-accent hover:underline">
            independent sponsor
          </Link>. Investors pledge capital upfront but only fund specific
          deals &mdash; giving the searcher committed backing without the
          blind-pool structure. Here&rsquo;s how it works.
        </p>

        <h2 className={h2Class}>How a pledge fund works</h2>
        <ul className={ulClass}>
          <li><strong>Capital commitment:</strong> Investors sign commitment letters pledging a set amount (e.g., $250K&ndash;$1M each), but capital is only called when a deal is identified</li>
          <li><strong>No blind pool:</strong> Unlike traditional search funds, investors see the specific deal before their capital is deployed</li>
          <li><strong>Search capital:</strong> A smaller pool ($100K&ndash;$300K) may be raised upfront for search expenses, or the searcher self-funds the search phase</li>
          <li><strong>Deal-by-deal approval:</strong> When a target is identified, the searcher presents it to pledge investors who then decide whether to fund</li>
          <li><strong>Commitment period:</strong> Typically 2&ndash;3 years, during which the pledged capital remains available</li>
        </ul>

        <h2 className={h2Class}>Pledge fund vs. traditional search fund</h2>
        <ul className={ulClass}>
          <li><strong>Capital deployment:</strong> Traditional = blind pool (invested at searcher&rsquo;s discretion). Pledge = deal-by-deal approval</li>
          <li><strong>Investor control:</strong> Pledge investors have more control &mdash; they can decline any specific deal</li>
          <li><strong>Searcher risk:</strong> Pledge fund searchers face the risk that investors decline the deal even after months of work</li>
          <li><strong>Economics:</strong> Similar equity structures (20&ndash;30% to the searcher), though pledge fund searchers sometimes negotiate higher equity because they bear more deal risk</li>
          <li><strong>Speed:</strong> Traditional funds close faster because capital is committed. Pledge funds require an investor syndication round for each deal</li>
          <li><strong>Step-up:</strong> Traditional funds use a 1.5x step-up on search capital. Pledge funds may not have this mechanism since search capital is minimal</li>
        </ul>

        <h2 className={h2Class}>Pledge fund vs. independent sponsor</h2>
        <ul className={ulClass}>
          <li><strong>Pre-commitment:</strong> Pledge fund investors are pre-committed (soft or hard). Independent sponsors source capital deal-by-deal with no prior commitments</li>
          <li><strong>Certainty of close:</strong> Pledge funds have higher close certainty than independent sponsors, making searchers more competitive with sellers</li>
          <li><strong>Economics:</strong> Independent sponsors often get lower promote (10&ndash;20%) vs. pledge fund searchers (20&ndash;30%) because they contribute less committed infrastructure</li>
          <li><strong>Investor relationships:</strong> Pledge funds require deeper investor relationships since commitments are made before any deal exists</li>
        </ul>

        <h2 className={h2Class}>When a pledge fund makes sense</h2>
        <ul className={ulClass}>
          <li><strong>Experienced searcher:</strong> You have deal-sourcing skills and investor relationships, but investors want to evaluate deals before committing</li>
          <li><strong>Industry-specific search:</strong> You&rsquo;re targeting a narrow sector where investors want to see the specific opportunity before deploying</li>
          <li><strong>Larger deals:</strong> Pledge funds can aggregate more capital ($10M&ndash;$30M+) than a traditional search fund because investors feel more comfortable with deal-by-deal approval</li>
          <li><strong>Flexible timeline:</strong> You want the backing of committed investors without the pressure of a 2-year search fund clock</li>
        </ul>

        <h2 className={h2Class}>Typical pledge fund structure</h2>
        <ul className={ulClass}>
          <li><strong>Investors:</strong> 5&ndash;15 individuals or family offices, each pledging $250K&ndash;$2M</li>
          <li><strong>Total commitments:</strong> $5M&ndash;$30M+ depending on target deal size</li>
          <li><strong>Search expenses:</strong> Self-funded or a small pool ($100K&ndash;$300K) raised from a subset of investors</li>
          <li><strong>Searcher equity:</strong> 20&ndash;30%, earned through a step-up mechanism similar to{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              traditional search fund cap tables
            </Link></li>
          <li><strong>Legal structure:</strong> Typically an LLC operating agreement with side letters for individual pledge commitments</li>
          <li><strong>Key clause:</strong> &ldquo;Defaulting investor&rdquo; provisions &mdash; what happens if a pledged investor declines to fund a deal they committed to</li>
        </ul>

        <h2 className={h2Class}>Risks and challenges</h2>
        <ul className={ulClass}>
          <li><strong>Funding risk:</strong> Even committed investors can back out. Soft commitments are non-binding. Include default provisions in your documents</li>
          <li><strong>Deal speed:</strong> Syndicating a deal takes 4&ndash;8 weeks. In competitive processes, traditional search funds or PE firms with committed capital move faster</li>
          <li><strong>Seller perception:</strong> Some sellers and brokers view pledge funds as less credible than committed capital. Mitigate with strong commitment letters and investor references</li>
          <li><strong>Administrative burden:</strong> Managing 10&ndash;15 investor relationships and individual preferences adds complexity vs. a pooled fund</li>
        </ul>

        <p>
          For a comparison of all ETA models, see{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded vs. traditional search
          </Link>{" "}
          and{" "}
          <Link href="/learn/search-fund-vs-independent-sponsor" className="text-apple-accent hover:underline">
            search fund vs. independent sponsor
          </Link>.
        </p>
      </div>
    </article>
  );
}
