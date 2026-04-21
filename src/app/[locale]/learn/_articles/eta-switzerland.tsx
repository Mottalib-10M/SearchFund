import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETASwitzerlandArticle() {
  return (
    <article>
      <h1 className={h1Class}>ETA in Switzerland: Acquiring in the Alpine Market</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Switzerland offers one of the most distinctive and rewarding environments
          for <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">Entrepreneurship Through Acquisition in Europe</Link>. With a GDP per capita
          among the highest in the world, an extraordinarily robust SME sector, and
          a well-documented succession crisis known as the Nachfolge problem,
          Switzerland presents search fund entrepreneurs with an unusual combination
          of premium business quality and genuine acquisition need. While valuations
          tend to reflect the exceptional quality of Swiss businesses, the country&apos;s
          stable economy, skilled workforce, and favorable tax environment create
          conditions for strong long-term returns.
        </p>

        <h2 className={h2Class}>The Swiss market landscape</h2>
        <p>
          Switzerland is home to approximately 600,000 businesses, of which over
          99% are classified as KMU (Kleine und Mittlere Unternehmen, the German
          equivalent of SME). Swiss KMUs employ roughly two-thirds of the private-sector
          workforce and are the backbone of the national economy. The country&apos;s
          KMU sector is renowned globally for engineering excellence, precision
          manufacturing, specialized services, and innovation.
        </p>
        <p>
          Switzerland&apos;s unique position as a multilingual, politically neutral
          country at the crossroads of Europe has produced businesses with
          inherently international outlooks. Many Swiss KMUs export a substantial
          share of their output, serving customers across Europe and beyond. This
          global orientation, combined with Swiss quality standards and operational
          discipline, makes Swiss businesses exceptionally attractive acquisition
          targets.
        </p>

        <h2 className={h2Class}>Corporate structures</h2>
        <p>
          For a general overview of how search funds are typically organized, see our guide to <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">search fund legal structures</Link>.
        </p>
        <h3 className={h3Class}>Gesellschaft mit beschr&auml;nkter Haftung (GmbH)</h3>
        <p>
          The GmbH is Switzerland&apos;s limited liability company and the most
          common corporate form for smaller KMUs. A GmbH requires minimum capital
          of CHF 20,000, which must be fully paid up at incorporation. Share
          transfers in a GmbH require notarial authentication and, unless the
          articles provide otherwise, approval from the shareholders&apos; meeting
          (Gesellschafterversammlung). This approval requirement can add complexity
          to acquisition processes but also provides a mechanism for existing
          shareholders to vet potential acquirers.
        </p>

        <h3 className={h3Class}>Aktiengesellschaft (AG)</h3>
        <p>
          The AG is Switzerland&apos;s joint-stock company, requiring minimum share
          capital of CHF 100,000 (of which at least CHF 50,000 must be paid up).
          AGs are more common among larger KMUs and family businesses. Registered
          shares (Namenaktien) in an AG can be subject to transfer restrictions
          (Vinkulierung) in the articles of association, allowing the board of
          directors to refuse share transfers in certain circumstances. Bearer
          shares (Inhaberaktien) were largely eliminated by the 2019 Federal Act
          on the Implementation of Recommendations of the Global Forum on
          Transparency and Exchange of Information for Tax Purposes, which
          requires all bearer shares to be converted to registered shares.
        </p>

        <h3 className={h3Class}>Holding company structure</h3>
        <p>
          Search fund acquisitions in Switzerland are typically structured through
          a newly incorporated holding company (HoldCo) that acquires the target
          operating company. Swiss tax law provides a participation deduction
          (Beteiligungsabzug) that effectively exempts dividends and capital gains
          received by a holding company from qualifying participations from
          federal and cantonal profit taxes. This creates a tax-efficient structure
          for extracting dividends from the operating company and for eventual
          exits.
        </p>

        <h2 className={h2Class}>Cantonal tax competition</h2>
        <p>
          Switzerland&apos;s federal structure gives its 26 cantons significant
          autonomy in setting tax rates, creating a competitive <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax optimization</Link> landscape
          that is unique in Europe. For search fund entrepreneurs, the choice
          of canton for incorporating a holding company can have a meaningful
          impact on overall tax efficiency.
        </p>
        <ul className={ulClass}>
          <li><strong>Zug:</strong> Canton Zug is Switzerland&apos;s most famous low-tax jurisdiction, with an effective combined corporate tax rate (federal, cantonal, and municipal) of approximately 11&ndash;12%. Zug has attracted a large number of international companies and holding structures. The city of Zug itself offers some of the lowest rates in the canton.</li>
          <li><strong>Schwyz:</strong> Canton Schwyz offers similarly competitive tax rates, with effective corporate tax rates in certain municipalities as low as 12&ndash;13%. Schwyz is particularly attractive for holding companies due to its favorable treatment of participation income.</li>
          <li><strong>Nidwalden:</strong> Canton Nidwalden has established itself as a competitive alternative to Zug and Schwyz, with effective corporate tax rates around 12%. The canton actively courts new businesses with a streamlined administrative environment.</li>
          <li><strong>Other competitive cantons:</strong> Appenzell Innerrhoden, Obwalden, and Lucerne also offer competitive rates. Even traditionally higher-tax cantons like Zurich and Geneva have reduced their rates following the 2020 federal tax reform (TRAF).</li>
          <li><strong>TRAF impact:</strong> The Tax Reform and AHV Financing (TRAF) reform, which took effect in 2020, abolished preferential tax regimes for holding, domiciliary, and mixed companies but introduced new tools such as the patent box, R&amp;D super deductions, and stepped-up depreciation that can benefit acquirers of innovative businesses.</li>
        </ul>

        <h2 className={h2Class}>The Nachfolge crisis</h2>
        <p>
          The Nachfolge (succession) crisis is one of the most discussed business
          challenges in Switzerland. Industry estimates from organizations such
          as the KMU-Institut at the University of St. Gallen suggest that tens
          of thousands of Swiss businesses will need to find successors in the
          coming years. The crisis is driven by several converging factors.
        </p>
        <ul className={ulClass}>
          <li><strong>Demographics:</strong> A significant proportion of KMU owners are baby boomers approaching or past retirement age. Many have been running their businesses for 30 or more years.</li>
          <li><strong>Declining family succession:</strong> Younger generations in Switzerland are increasingly pursuing careers in finance, technology, and consulting rather than taking over family businesses. The rate of intra-family succession has been declining steadily.</li>
          <li><strong>Emotional barriers:</strong> Many Swiss business owners have deeply personal connections to their companies and struggle with the decision to let go. This can result in delayed succession planning and compressed timelines when the owner finally decides to sell.</li>
          <li><strong>Valuation gaps:</strong> Owners often have inflated expectations of their business&apos;s value, based on decades of personal investment rather than market-based metrics. Bridging this expectation gap requires patience and creative structuring.</li>
        </ul>
        <p>
          For search fund entrepreneurs, the Nachfolge crisis creates a steady
          flow of acquisition opportunities. Businesses that might otherwise
          never come to market are becoming available as owners confront the
          reality that no family successor exists.
        </p>

        <h2 className={h2Class}>The multilingual market</h2>
        <p>
          Switzerland&apos;s four national languages&mdash;German, French, Italian,
          and Romansh&mdash;create distinct regional business environments within
          a single country. Understanding these linguistic regions is essential
          for search fund entrepreneurs.
        </p>
        <ul className={ulClass}>
          <li><strong>German-speaking Switzerland (Deutschschweiz):</strong> Comprising roughly 65% of the population, the German-speaking region is the economic heartland. Zurich, Bern, Basel, and Lucerne are major business centers. Swiss German (Schwyzerd&uuml;tsch) is spoken in daily life, while standard German (Hochdeutsch) is used in formal business contexts. Most business documentation is in standard German.</li>
          <li><strong>French-speaking Switzerland (Romandie):</strong> The Romandie region, including Geneva, Lausanne, and Neuch&acirc;tel, comprises about 23% of the population. Business culture in Romandie shares similarities with France, with a somewhat more formal and hierarchical style than German-speaking Switzerland.</li>
          <li><strong>Italian-speaking Switzerland (Svizzera italiana):</strong> Canton Ticino and parts of Graub&uuml;nden, comprising about 8% of the population. The Ticino business culture combines Swiss efficiency with Italian relationship orientation. Lugano is the primary business center.</li>
          <li><strong>Practical implications:</strong> Searchers ideally need proficiency in at least one of the major Swiss languages. German opens the largest market, but French-speaking Switzerland offers less competition from institutional buyers. A search spanning both regions requires bilingual capabilities.</li>
        </ul>

        <h2 className={h2Class}>Premium valuations and exceptional quality</h2>
        <p>
          Swiss KMUs typically command higher valuations than comparable businesses
          in most other European markets. Multiples of 5x to 9x EBITDA are
          common, with premium businesses in technology, medtech, or specialized
          manufacturing sometimes exceeding 10x. Several factors justify these
          valuations.
        </p>
        <ul className={ulClass}>
          <li><strong>Quality of earnings:</strong> Swiss businesses tend to have stable, high-margin earnings with low customer concentration. The Swiss reputation for quality and reliability creates pricing power and customer loyalty.</li>
          <li><strong>Skilled workforce:</strong> Switzerland&apos;s dual education system (combining academic and vocational training) produces one of the most skilled workforces in the world. Employee expertise is a genuine competitive advantage that is difficult to replicate.</li>
          <li><strong>Innovation:</strong> Swiss KMUs are often highly innovative, investing in R&amp;D and continuously improving their products and processes. This innovation creates sustainable competitive moats.</li>
          <li><strong>Economic stability:</strong> Switzerland&apos;s stable political and economic environment reduces risk premiums. Low inflation, a strong currency, and predictable regulation create an environment where long-term business planning is feasible.</li>
          <li><strong>Export orientation:</strong> Many Swiss KMUs derive 50&ndash;80% of revenue from exports, diversifying their revenue base beyond the small domestic market.</li>
        </ul>

        <h2 className={h2Class}>Swiss banking relationships</h2>
        <p>
          Switzerland&apos;s banking sector plays a central role in KMU <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link> and can be a critical partner in search fund acquisitions. The Swiss
          banking landscape for KMU financing includes several tiers.
        </p>
        <ul className={ulClass}>
          <li><strong>Cantonal banks (Kantonalbanken):</strong> Each canton has its own cantonal bank, most of which benefit from a state guarantee. Cantonal banks are deeply embedded in their local economies and are often the primary banking partners for KMUs. They are well-positioned to finance acquisitions of local businesses.</li>
          <li><strong>Raiffeisen banks:</strong> The Raiffeisen cooperative banking group is Switzerland&apos;s third-largest banking group and has a strong presence in rural and semi-urban areas. Raiffeisen banks are important KMU financiers and can be valuable partners for acquisitions outside major cities.</li>
          <li><strong>Major banks:</strong> UBS and (the reconstituted post-Credit Suisse integration) the larger banking landscape serve KMU clients through dedicated business banking divisions. These institutions have the capacity to finance larger search fund acquisitions.</li>
          <li><strong>Typical terms:</strong> Swiss bank acquisition financing typically involves leverage of 2.5x to 4x EBITDA, with terms of five to seven years. Interest rates in Switzerland benefit from the generally low-rate environment, though this is subject to monetary policy conditions.</li>
        </ul>

        <h2 className={h2Class}>KMU financing beyond banks</h2>
        <p>
          Beyond traditional bank financing, several additional capital sources
          are available for search fund acquisitions in Switzerland.
        </p>
        <ul className={ulClass}>
          <li><strong>Seller financing:</strong> Swiss business owners are often willing to provide seller financing of 15&ndash;25% of the purchase price, particularly when the buyer demonstrates commitment to the business&apos;s long-term success. Seller loans are typically subordinated to bank debt and structured with terms of two to five years.</li>
          <li><strong>Technology funds:</strong> Various cantonal and federal technology and innovation funds can provide financing for acquisitions of technology-oriented KMUs, particularly where the acquirer plans post-acquisition investment in R&amp;D or digitalization.</li>
          <li><strong>Private debt funds:</strong> A growing number of Swiss private debt funds provide mezzanine and subordinated financing for KMU transactions, filling the gap between senior bank debt and equity.</li>
        </ul>

        <h2 className={h2Class}>Regulatory environment</h2>
        <p>
          Switzerland&apos;s regulatory environment is generally business-friendly
          but has several distinctive features that search fund entrepreneurs
          must navigate.
        </p>
        <ul className={ulClass}>
          <li><strong>Merger control:</strong> Swiss merger control thresholds (COMCO) apply to transactions where the combined worldwide turnover exceeds CHF 2 billion or combined Swiss turnover exceeds CHF 500 million. Most search fund acquisitions fall well below these thresholds and do not require merger clearance.</li>
          <li><strong>Employment law:</strong> Swiss labor law is less prescriptive than in most EU countries, providing greater flexibility for employers. Notice periods, however, can be substantial for long-tenured employees (up to six months). Swiss employment contracts must comply with the Swiss Code of Obligations.</li>
          <li><strong>Lex Koller:</strong> The Lex Koller legislation restricts foreign acquisition of real estate in Switzerland. If the target business owns real property, non-Swiss acquirers may need authorization. This is a critical consideration for businesses with significant real estate holdings.</li>
          <li><strong>Pension obligations:</strong> Swiss businesses are required to participate in the occupational pension system (BVG/LPP). Pension fund obligations can represent significant liabilities and require careful due diligence during acquisitions.</li>
        </ul>

        <h2 className={h2Class}>Work permits for foreign acquirers</h2>
        <p>
          Non-Swiss nationals who wish to acquire and manage a Swiss business
          must navigate the country&apos;s immigration requirements. Switzerland
          is not an EU member, though it has bilateral agreements with the EU
          that provide certain freedoms of movement.
        </p>
        <ul className={ulClass}>
          <li><strong>EU/EFTA nationals:</strong> Citizens of EU and EFTA countries benefit from the bilateral Agreement on the Free Movement of Persons. They can obtain residence permits (B permits) and generally do not face significant barriers to working in and managing a Swiss business.</li>
          <li><strong>Non-EU nationals:</strong> Third-country nationals face more restrictive immigration requirements. Work and residence permits (typically L or B permits) are subject to quotas and require the employer to demonstrate that no suitable Swiss or EU candidate is available. For search fund entrepreneurs, this means the target business or a newly incorporated Swiss entity must sponsor the permit application.</li>
          <li><strong>C permits:</strong> After five or ten years of continuous residence (depending on nationality), foreign residents can apply for a C permit (permanent residence), which provides greater flexibility and removes the need for periodic renewal.</li>
          <li><strong>Self-employment:</strong> Self-employed individuals face different requirements than employees. A foreign national who acquires a business and operates it as a sole proprietor must obtain a self-employment permit, which can be more difficult to secure than an employee permit.</li>
        </ul>

        <h2 className={h2Class}>Key Swiss business networks</h2>
        <p>
          Building a strong network is essential for successful deal sourcing
          and post-acquisition success in Switzerland. Key networks and
          organizations include the following.
        </p>
        <ul className={ulClass}>
          <li><strong>Schweizerischer Gewerbeverband (SGV):</strong> The Swiss Trade Association represents over 230 trade associations and approximately 500,000 KMUs. SGV events and publications can be valuable for deal sourcing and market intelligence.</li>
          <li><strong>Bisnode/Dun &amp; Bradstreet Switzerland:</strong> Commercial data providers offer detailed information on Swiss businesses, including financial data, credit ratings, and management details. These databases are essential tools for building target lists.</li>
          <li><strong>KMU-Portal:</strong> The Swiss federal government operates the KMU-Portal, an online resource providing information on business succession, financing, and regulatory requirements for KMUs.</li>
          <li><strong>University of St. Gallen (HSG):</strong> HSG&apos;s KMU-Institut is a leading research center on Swiss SMEs and publishes regular studies on succession, financing, and KMU economics. HSG alumni are well-represented among Swiss business leaders.</li>
          <li><strong>IMD Lausanne:</strong> IMD&apos;s executive education programs attract Swiss business leaders and can be a valuable networking channel for searchers in Romandie.</li>
          <li><strong>Regional industry associations:</strong> Cantonal chambers of commerce (Handelskammern) and industry-specific associations organize regular events and can facilitate introductions to business owners considering succession.</li>
        </ul>

        <h2 className={h2Class}>Typical deal parameters</h2>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> CHF 3 million to CHF 30 million annual turnover.</li>
          <li><strong>EBITDA:</strong> CHF 500,000 to CHF 4 million.</li>
          <li><strong>Valuation multiples:</strong> 5x to 9x EBITDA, with variation by sector, location, and quality.</li>
          <li><strong>Employee count:</strong> 15 to 150 employees.</li>
          <li><strong>Sectors:</strong> Precision manufacturing, medtech, IT services, specialized engineering, B2B services, and food and beverage are popular sectors for search fund acquisitions in Switzerland.</li>
          <li><strong>Deal currency:</strong> Most transactions are denominated in Swiss francs (CHF). Foreign acquirers should consider currency risk management, as the CHF has historically appreciated against the euro and other currencies.</li>
        </ul>

        <h2 className={h2Class}>Practical advice for Swiss searchers</h2>
        <ul className={ulClass}>
          <li><strong>Language investment:</strong> Proficiency in German (or French for Romandie-focused searches) is essential. Swiss German dialects differ significantly from standard German, and even basic conversational Swiss German helps build rapport.</li>
          <li><strong>Local anchoring:</strong> Swiss business culture values local presence and commitment. Relocating to Switzerland and establishing a physical base in the target region signals seriousness.</li>
          <li><strong>Treuhand advisors:</strong> The Swiss Treuhand (fiduciary) system is unique. A licensed Treuhandexperte can provide accounting, tax, and advisory services for the acquisition process and post-completion operations.</li>
          <li><strong>Patience with valuations:</strong> Swiss business owners are well-informed about valuations and are rarely in a hurry to sell. Be prepared for extended negotiations and realistic about the premium required for Swiss quality.</li>
          <li><strong>Post-acquisition value creation:</strong> The best opportunities for value creation in Swiss acquisitions often lie in digitalization, international expansion, and operational optimization rather than cost-cutting, given the already lean nature of most Swiss KMUs.</li>
        </ul>
      </div>
    </article>
  );
}
