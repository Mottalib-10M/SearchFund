import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SuccessionCrisisByCountryArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        The Business Succession Crisis by Country: Where the Opportunities Are
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Across the developed world, baby boomer business owners are
          retiring at unprecedented rates &mdash; and most have no
          succession plan. This demographic wave creates a once-in-a-generation
          opportunity for{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA entrepreneurs
          </Link>{" "}
          and{" "}
          <Link href="/learn/succession-driven-acquisitions" className="text-apple-accent hover:underline">
            succession-focused acquirers
          </Link>. This guide maps the crisis by country, quantifies the
          opportunity, and identifies the best markets for searchers.
        </p>

        <h2 className={h2Class}>The global picture</h2>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> An estimated 10&ndash;15 million SMEs in OECD countries will change hands or close in the next decade due to owner retirement</li>
          <li><strong>Value at risk:</strong> $10+ trillion in combined enterprise value</li>
          <li><strong>Succession failure rate:</strong> 30&ndash;50% of businesses listed for sale never find a buyer and simply close</li>
          <li><strong>Economic impact:</strong> Business closures destroy jobs, tax revenue, supply chains, and community infrastructure</li>
          <li><strong>ETA opportunity:</strong> The gap between supply (retiring sellers) and demand (qualified buyers) is widening in every market</li>
        </ul>

        <h2 className={h2Class}>Country-by-country analysis</h2>

        <h3 className={h3Class}>Japan &mdash; The most acute crisis</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> 2.45 million SME owners over age 70 by 2025, ~1.27 million with no successor identified</li>
          <li><strong>GDP at risk:</strong> &yen;22 trillion (~$150B) in annual sales and 6.5 million jobs</li>
          <li><strong>Government response:</strong> National policy priority. Japan Finance Corporation loans, tax deferrals, and the Business Succession Smoothing Act</li>
          <li><strong>Challenge:</strong> Cultural preference for family succession, language barriers for foreign acquirers</li>
          <li><strong>ETA opportunity:</strong> Highest volume of motivated sellers, lowest{" "}
            <Link href="/learn/ebitda-multiples-by-country" className="text-apple-accent hover:underline">
              multiples
            </Link>{" "}
            (3&ndash;5x), but significant cultural and linguistic barriers</li>
        </ul>

        <h3 className={h3Class}>Germany &mdash; The Mittelstand Nachfolge</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> ~600,000 Mittelstand companies need succession solutions by 2030</li>
          <li><strong>Annual transfers:</strong> ~76,000 businesses per year, with 30% failing to find successors</li>
          <li><strong>Government response:</strong>{" "}
            <Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">
              KfW financing programs
            </Link>, Bürgschaftsbanken guarantees, regional IHK (Chamber of Commerce) matching platforms</li>
          <li><strong>ETA opportunity:</strong> World-class industrial and services businesses at 4&ndash;7x. Emotional sellers who care about employee welfare and company legacy</li>
        </ul>

        <h3 className={h3Class}>United States &mdash; The Silver Tsunami</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> 4.5 million baby boomer-owned businesses (~$10 trillion in value)</li>
          <li><strong>Timeline:</strong> Peak retirement wave 2025&ndash;2035</li>
          <li><strong>Government response:</strong>{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a) program
            </Link>{" "}
            is the primary acquisition financing tool</li>
          <li><strong>ETA opportunity:</strong> The deepest market with the best financing infrastructure. However, multiples are higher (4&ndash;7x) due to buyer competition</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/baby-boomer-succession" className="text-apple-accent hover:underline">
              Baby Boomer Succession Guide
            </Link></li>
        </ul>

        <h3 className={h3Class}>France &mdash; La Transmission d&rsquo;Entreprise</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> ~70,000 business transfers per year, with 30,000+ at risk of closure</li>
          <li><strong>Demographics:</strong> 700,000 business owners aged 55+ with no identified successor</li>
          <li><strong>Government response:</strong>{" "}
            <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
              Bpifrance
            </Link>{" "}
            (the most generous government program in Europe), CCI matching, Réseau Entreprendre mentoring</li>
          <li><strong>Tax incentives:</strong>{" "}
            <Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">
              Dutreil pact
            </Link>{" "}
            (75% exemption), retirement seller CGT exemption</li>
          <li><strong>ETA opportunity:</strong> Best combination of financing support, tax incentives, and moderate multiples (3.5&ndash;6x)</li>
        </ul>

        <h3 className={h3Class}>Italy</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> ~400,000 businesses need succession by 2030. Strong family-ownership culture means many owners delay planning</li>
          <li><strong>Challenge:</strong> Limited M&amp;A infrastructure for sub-&euro;5M deals. Broker network is less developed than France or Germany</li>
          <li><strong>Opportunity:</strong> Northern Italy manufacturing (3&ndash;5x multiples) with world-class product quality</li>
        </ul>

        <h3 className={h3Class}>Canada</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> ~76% of Canadian small business owners plan to exit within 10 years, but only 10% have a formal succession plan</li>
          <li><strong>Value:</strong> $1.5 trillion CAD in business assets expected to change hands</li>
          <li><strong>Government response:</strong> BDC succession financing, LCGE tax exemption (~$1M CAD)</li>
          <li><strong>ETA opportunity:</strong> Similar to the US but smaller buyer pool and lower multiples (3.5&ndash;6x)</li>
        </ul>

        <h3 className={h3Class}>United Kingdom</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> ~5.5 million SMEs, with aging owner demographics similar to the US</li>
          <li><strong>Challenge:</strong> No dedicated government succession financing program. Business Asset Disposal Relief (BADR) provides CGT reduction for sellers</li>
          <li><strong>Opportunity:</strong> Northern England, Scotland, and Wales are underserved by buyers</li>
        </ul>

        <h3 className={h3Class}>Spain</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> ~300,000 businesses at succession risk by 2030</li>
          <li><strong>Challenge:</strong> Fragmented market, limited M&amp;A advisory for SMEs</li>
          <li><strong>Opportunity:</strong> Low multiples (3&ndash;5x), growing ETA community linked to IESE Barcelona</li>
        </ul>

        <h3 className={h3Class}>Latin America</h3>
        <ul className={ulClass}>
          <li><strong>Scale:</strong> Millions of first-generation entrepreneurs approaching retirement across{" "}
            <Link href="/learn/eta-latin-america" className="text-apple-accent hover:underline">
              Brazil, Mexico, Colombia, and Chile
            </Link></li>
          <li><strong>Challenge:</strong> Informality, currency risk, limited acquisition financing</li>
          <li><strong>Opportunity:</strong> Lowest multiples (3&ndash;5x), least buyer competition, but highest execution risk</li>
        </ul>

        <h2 className={h2Class}>Ranking: Best markets for succession-driven ETA</h2>
        <ul className={ulClass}>
          <li><strong>1. France:</strong> Best financing + tax incentives + moderate multiples. The single best market for well-financed first-time acquirers</li>
          <li><strong>2. United States:</strong> Deepest market, best infrastructure, highest deal volume. But highest multiples</li>
          <li><strong>3. Germany:</strong> World-class businesses, strong government support. Higher multiples for quality assets</li>
          <li><strong>4. Canada:</strong> US-like market at lower multiples with BDC support</li>
          <li><strong>5. Japan:</strong> Highest deal volume, lowest multiples, but significant cultural barriers</li>
          <li><strong>6. Spain/Italy:</strong> Low multiples but less developed acquisition ecosystems</li>
        </ul>

        <p>
          For detailed country guides, see our{" "}
          <Link href="/learn/category/regional-guides" className="text-apple-accent hover:underline">
            regional guides
          </Link>. For country-level{" "}
          <Link href="/learn/capital-gains-tax-by-country" className="text-apple-accent hover:underline">
            capital gains tax rates
          </Link>{" "}
          and{" "}
          <Link href="/learn/ebitda-multiples-by-country" className="text-apple-accent hover:underline">
            EBITDA multiples
          </Link>, see our comparative analyses.
        </p>
      </div>
    </article>
  );
}
