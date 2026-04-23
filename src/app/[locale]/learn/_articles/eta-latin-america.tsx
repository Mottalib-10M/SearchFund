import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETALatinAmericaArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Latin America: Overview &amp; Opportunity
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Latin America is one of the fastest-growing regions for{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            Entrepreneurship Through Acquisition
          </Link>. With millions of SMEs owned by aging founders, growing
          MBA programs, and an expanding investor base, the LATAM ETA
          ecosystem has reached an inflection point. This guide covers
          the key markets, financing landscape, deal characteristics,
          and challenges for searchers targeting the region.
        </p>

        <h2 className={h2Class}>Why Latin America?</h2>
        <ul className={ulClass}>
          <li><strong>Massive SME base:</strong> Brazil alone has 6+ million formal SMEs. Mexico, Colombia, Chile, and Argentina add millions more</li>
          <li><strong>Succession wave:</strong> First-generation entrepreneurs who built businesses during the 1980s&ndash;2000s are approaching retirement</li>
          <li><strong>Lower multiples:</strong> Quality businesses trade at 3&ndash;5x EBITDA (vs. 5&ndash;7x in the US). The multiple discount reflects country risk, currency risk, and less developed exit markets</li>
          <li><strong>Growing ecosystem:</strong> IESE (Spain), INCAE (Costa Rica), and local business schools are producing ETA-trained professionals</li>
          <li><strong>Less competition:</strong> PE penetration is low. Most SMEs sell to family members or close privately. Structured ETA is still novel</li>
        </ul>

        <h2 className={h2Class}>Key markets</h2>

        <h3 className={h3Class}>Brazil</h3>
        <ul className={ulClass}>
          <li><strong>Market size:</strong> Largest economy in Latin America (GDP $2T+). 6+ million formal SMEs</li>
          <li><strong>ETA activity:</strong> Growing, with search funds emerging from FGV, Insper, and international MBA programs</li>
          <li><strong>Challenges:</strong> Complex tax system (Simples Nacional, Lucro Presumido, Lucro Real), labor regulations (CLT), currency volatility (BRL), and bureaucracy</li>
          <li><strong>Financing:</strong> BNDES (Brazilian Development Bank) provides subsidized lending. Local banks increasingly support acquisition financing</li>
          <li><strong>Opportunity:</strong> Industrial, services, and technology SMEs in S&atilde;o Paulo and southern states</li>
        </ul>

        <h3 className={h3Class}>Mexico</h3>
        <ul className={ulClass}>
          <li><strong>Market size:</strong> Second-largest LATAM economy. Strong manufacturing base and nearshoring trend</li>
          <li><strong>ETA activity:</strong> IPADE (Mexico&rsquo;s top business school) has an active ETA community. Growing number of search funds</li>
          <li><strong>Advantages:</strong> USMCA trade agreement, proximity to US, relatively stable peso, growing middle class</li>
          <li><strong>Challenges:</strong> Security concerns in some regions, informal economy, and family-owned business culture resistant to outside buyers</li>
        </ul>

        <h3 className={h3Class}>Colombia</h3>
        <ul className={ulClass}>
          <li><strong>Market size:</strong> Third-largest LATAM economy. Fast-growing with improving business environment</li>
          <li><strong>ETA activity:</strong> Emerging. Universidad de los Andes and CESA producing ETA-interested graduates</li>
          <li><strong>Advantages:</strong> Free trade agreements, competitive labor costs, growing tech sector, and improving infrastructure</li>
          <li><strong>Challenges:</strong> Smaller deal pool than Brazil/Mexico, currency volatility (COP)</li>
        </ul>

        <h3 className={h3Class}>Chile</h3>
        <ul className={ulClass}>
          <li><strong>Market size:</strong> Smallest of the big four but most stable and business-friendly</li>
          <li><strong>Advantages:</strong> Strong rule of law, well-regulated financial system, transparent business environment</li>
          <li><strong>ETA activity:</strong> Early stage but growing. IESE alumni network active in Santiago</li>
        </ul>

        <h2 className={h2Class}>Deal characteristics in LATAM</h2>
        <ul className={ulClass}>
          <li><strong>Multiples:</strong> 3&ndash;5x EBITDA for quality businesses (discount to US/Europe due to country risk)</li>
          <li><strong>Deal size:</strong> $1M&ndash;$10M enterprise value. Larger deals ($10M+) attract PE competition</li>
          <li><strong>Seller motivation:</strong> Retirement, family succession failure, capital access for growth, and (sometimes) emigration</li>
          <li><strong>Formality gap:</strong> Many SMEs have informal practices (cash transactions, undocumented employees). Due diligence must account for this</li>
          <li><strong>Family dynamics:</strong> Businesses are deeply personal. Sellers care about employee welfare and company legacy, not just price</li>
        </ul>

        <h2 className={h2Class}>Financing LATAM acquisitions</h2>
        <ul className={ulClass}>
          <li><strong>Local bank debt:</strong> Available but at higher rates (10&ndash;18% depending on country and currency). Dollar-denominated debt may be available for exporters</li>
          <li><strong>Seller financing:</strong>{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              Critical in LATAM
            </Link>{" "}
            due to limited bank financing for acquisitions. 20&ndash;40% seller notes are common</li>
          <li><strong>Development banks:</strong> BNDES (Brazil), NAFIN/Bancomext (Mexico), Bancoldex (Colombia). Similar role to{" "}
            <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
              Bpifrance
            </Link></li>
          <li><strong>International investors:</strong> US and European search fund investors increasingly deploy capital in LATAM, often providing dollar-denominated equity</li>
          <li><strong>Currency consideration:</strong> Revenue in local currency (BRL, MXN, COP) but investors want dollar returns. Currency hedging adds cost</li>
        </ul>

        <h2 className={h2Class}>Challenges and risks</h2>
        <ul className={ulClass}>
          <li><strong>Currency risk:</strong> LATAM currencies are volatile. A 20% BRL depreciation eliminates years of operational gains in USD terms</li>
          <li><strong>Regulatory complexity:</strong> Tax systems are complex (especially Brazil). Labor laws are protective. Compliance costs are higher than expected</li>
          <li><strong>Informality:</strong> Undocumented practices in target businesses create{" "}
            <Link href="/learn/red-flags-due-diligence" className="text-apple-accent hover:underline">
              due diligence challenges
            </Link></li>
          <li><strong>Exit market:</strong> Fewer PE buyers, fewer strategic acquirers. Exit multiples are lower and exit timelines longer than US/Europe</li>
          <li><strong>Political risk:</strong> Regime changes can affect business environment, tax policy, and currency stability</li>
        </ul>

        <h2 className={h2Class}>Getting started in LATAM ETA</h2>
        <ul className={ulClass}>
          <li><strong>Language:</strong> Spanish (most of LATAM) or Portuguese (Brazil) fluency is essential. Business is conducted in the local language</li>
          <li><strong>Local partner:</strong> Consider a partnered search with a local co-searcher who understands the market, culture, and legal system</li>
          <li><strong>Network:</strong> Connect with IESE/INCAE/IPADE alumni networks, LAVCA (Latin American VC &amp; PE association), and local ETA communities</li>
          <li><strong>Start with one country:</strong> Focus on one market rather than &ldquo;LATAM.&rdquo; Each country has distinct legal, tax, and business cultures</li>
        </ul>

        <p>
          For global context, see{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
            cross-border acquisitions guide
          </Link>{" "}
          and{" "}
          <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">
            best countries to buy a business
          </Link>.
        </p>
      </div>
    </article>
  );
}
