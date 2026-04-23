import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function EBITDAMultiplesByCountryArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        EBITDA Multiples by Country: Where Are Businesses Cheapest?
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          Business valuations vary dramatically by country. The same
          $1M&ndash;EBITDA services company might sell for 3x in Southern
          Europe and 6x+ in the United States. For search fund
          entrepreneurs and{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
            cross-border acquirers
          </Link>, understanding these differences unlocks valuation
          arbitrage and larger deal pools.
        </p>

        <h2 className={h2Class}>EBITDA multiples by country (2024&ndash;2025)</h2>

        <h3 className={h3Class}>United States</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 4&ndash;7x EBITDA for SMEs ($1M&ndash;$5M EBITDA)</li>
          <li><strong>Median:</strong> ~5.5x for search fund acquisitions</li>
          <li><strong>Why higher:</strong> Deep buyer pool (PE, search funds, strategic), SBA financing availability, mature M&amp;A market, strong rule of law</li>
          <li><strong>Sweet spot:</strong> 4&ndash;5x for businesses with $1&ndash;2M EBITDA (below PE radar, above micro-acquisition)</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
              US multiples by industry
            </Link></li>
        </ul>

        <h3 className={h3Class}>United Kingdom</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 4&ndash;6x EBITDA for SMEs</li>
          <li><strong>Median:</strong> ~4.5x</li>
          <li><strong>Why:</strong> Well-developed broker network, but smaller buyer pool than the US. Brexit has created uncertainty premiums in some sectors</li>
          <li><strong>Opportunity:</strong> Northern England, Scotland, and Wales trade at lower multiples than London and the Southeast</li>
        </ul>

        <h3 className={h3Class}>France</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 3.5&ndash;6x EBITDA</li>
          <li><strong>Median:</strong> ~4x for businesses with &euro;500K&ndash;&euro;2M EBITDA</li>
          <li><strong>Why cheaper:</strong> Labor regulations perceived as complex, fewer financial buyers, strong seller preference for employee welfare over price</li>
          <li><strong>Advantage:</strong>{" "}
            <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
              Bpifrance financing
            </Link>{" "}
            makes leverage more accessible than most markets</li>
          <li><strong>Tax bonus:</strong>{" "}
            <Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">
              Dutreil pact
            </Link>{" "}
            provides 75% succession tax exemption</li>
        </ul>

        <h3 className={h3Class}>Germany</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 4&ndash;7x EBITDA for Mittelstand companies</li>
          <li><strong>Median:</strong> ~5x</li>
          <li><strong>Why higher:</strong> Strong industrial base, excellent cash flow, and growing PE interest in the Mittelstand. The Nachfolge (succession) crisis creates urgency but also competition</li>
          <li><strong>Financing:</strong>{" "}
            <Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">
              KfW programs
            </Link>{" "}
            support acquisition financing at favorable rates</li>
        </ul>

        <h3 className={h3Class}>Spain</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 3&ndash;5x EBITDA</li>
          <li><strong>Median:</strong> ~3.5x</li>
          <li><strong>Why cheaper:</strong> Less developed M&amp;A market for SMEs, fragmented broker landscape, fewer institutional buyers targeting sub-&euro;5M businesses</li>
          <li><strong>Opportunity:</strong> Tourism, food production, and industrial services in underserved regions</li>
        </ul>

        <h3 className={h3Class}>Italy</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 3&ndash;5x EBITDA</li>
          <li><strong>Median:</strong> ~3.5x</li>
          <li><strong>Why cheaper:</strong> Fragmented market, family-ownership culture, complex bureaucracy, and limited acquisition financing</li>
          <li><strong>Opportunity:</strong> Northern Italy (Lombardy, Veneto, Emilia-Romagna) has world-class manufacturing at Southern European multiples</li>
        </ul>

        <h3 className={h3Class}>Nordics (Sweden, Denmark, Norway, Finland)</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 4&ndash;6x EBITDA</li>
          <li><strong>Median:</strong> ~5x</li>
          <li><strong>Why:</strong> Strong economies, high transparency, reliable financial reporting. Sweden and Denmark have the most active M&amp;A markets</li>
          <li><strong>Premium sectors:</strong> SaaS/tech (8&ndash;12x), healthcare services (6&ndash;8x)</li>
        </ul>

        <h3 className={h3Class}>Switzerland</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 5&ndash;8x EBITDA</li>
          <li><strong>Median:</strong> ~6x</li>
          <li><strong>Why higher:</strong> Strong franc, high profitability, excellent rule of law, and limited deal supply. Swiss SMEs often have premium margins</li>
          <li><strong>Tax advantage:</strong> Individual capital gains on shares are generally tax-free</li>
        </ul>

        <h3 className={h3Class}>Netherlands &amp; Belgium</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 4&ndash;6x EBITDA</li>
          <li><strong>Median:</strong> ~4.5x</li>
          <li><strong>Why:</strong> Efficient M&amp;A market, good transparency, but limited deal supply in smaller size ranges</li>
          <li><strong>Netherlands advantage:</strong> 100% participation exemption makes it ideal for{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
              holding structures
            </Link></li>
        </ul>

        <h3 className={h3Class}>Canada</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 3.5&ndash;6x EBITDA</li>
          <li><strong>Median:</strong> ~4.5x</li>
          <li><strong>Why:</strong> Smaller buyer pool than the US, but similar business quality. BDC (Business Development Bank) provides acquisition financing</li>
          <li><strong>Tax advantage:</strong> ~$1M CAD lifetime capital gains exemption (LCGE) for qualifying small business shares</li>
        </ul>

        <h3 className={h3Class}>Japan</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 3&ndash;5x EBITDA</li>
          <li><strong>Median:</strong> ~3.5x</li>
          <li><strong>Why cheapest:</strong> Acute succession crisis (2.45M businesses at risk), cultural aversion to selling outside the family, limited M&amp;A infrastructure for SMEs</li>
          <li><strong>Challenge:</strong> Language barrier, cultural integration, and regulatory complexity</li>
        </ul>

        <h3 className={h3Class}>Latin America (Brazil, Mexico, Colombia)</h3>
        <ul className={ulClass}>
          <li><strong>Range:</strong> 3&ndash;5x EBITDA</li>
          <li><strong>Median:</strong> ~3.5x</li>
          <li><strong>Why cheapest:</strong> Country risk, currency risk, less developed exit markets, informality in financial reporting</li>
          <li><strong>See:</strong>{" "}
            <Link href="/learn/eta-latin-america-overview" className="text-apple-accent hover:underline">
              LATAM ETA guide
            </Link></li>
        </ul>

        <h2 className={h2Class}>What drives multiple differences?</h2>
        <ul className={ulClass}>
          <li><strong>Buyer competition:</strong> More buyers (PE, search funds, strategics) = higher multiples. The US has the deepest buyer pool</li>
          <li><strong>Financing availability:</strong> SBA loans (US), Bpifrance (France), KfW (Germany) make leverage accessible, supporting higher prices</li>
          <li><strong>Regulatory environment:</strong> Labor law complexity, tax burden, and bureaucracy create risk premiums that depress multiples</li>
          <li><strong>Currency risk:</strong> Businesses in volatile currencies (BRL, MXN, COP) trade at discounts to hard-currency markets</li>
          <li><strong>Exit market depth:</strong> Countries with more PE and strategic buyers offer better exit options, supporting higher entry multiples</li>
          <li><strong>Financial reporting quality:</strong> Countries with transparent, audited financials (Nordics, Switzerland, UK) trade at premiums to markets with informal reporting</li>
        </ul>

        <h2 className={h2Class}>Valuation arbitrage strategies</h2>
        <ul className={ulClass}>
          <li><strong>Buy low, sell high:</strong> Acquire at 3&ndash;4x in a lower-multiple market, professionalize operations, then sell to a US or UK PE fund at 5&ndash;7x</li>
          <li><strong>Cross-border roll-up:</strong> Acquire businesses in multiple countries at local multiples, then sell the combined platform at a premium</li>
          <li><strong>Currency play:</strong> Acquire during currency weakness (e.g., GBP post-Brexit, EUR during ECB tightening) for additional upside when the currency recovers</li>
          <li><strong>Professionalization premium:</strong> Implement financial reporting, governance, and growth initiatives that justify a multiple re-rating at exit</li>
        </ul>

        <h2 className={h2Class}>Important caveats</h2>
        <ul className={ulClass}>
          <li><strong>Averages hide ranges:</strong> Within any country, multiples vary 2&ndash;3x based on industry, growth rate, customer concentration, and business quality</li>
          <li><strong>EBITDA definition varies:</strong>{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">
              Adjusted EBITDA
            </Link>{" "}
            add-backs differ by market. French &ldquo;EBE&rdquo; is not identical to US EBITDA</li>
          <li><strong>Transaction costs vary:</strong> Legal, tax, and advisory costs are higher in some countries (France, Germany) than others</li>
          <li><strong>Post-acquisition costs:</strong> Lower multiples often reflect higher operating costs (labor, compliance, taxes) that offset the purchase discount</li>
        </ul>

        <p>
          For industry-level data, see{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">
            EBITDA multiples by industry
          </Link>. For country-specific acquisition guides, see our{" "}
          <Link href="/learn/category/regional-guides" className="text-apple-accent hover:underline">
            regional guides
          </Link>.
        </p>
      </div>
    </article>
  );
}
