import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function GovernmentFinancingProgramsGlobalArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Government Acquisition Financing Programs: A Global Comparison
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">18 min read</p>

      <div className={bodyClass}>
        <p>
          Most developed countries offer government-backed financing
          programs to support business acquisitions &mdash; especially
          succession-driven transfers. These programs provide subsidized
          loans, guarantees, and grants that can reduce your equity
          requirement from 30&ndash;40% down to 10&ndash;20%. This guide
          compares the major programs across the US, Europe, Canada, and
          Asia.
        </p>

        <h2 className={h2Class}>United States: SBA 7(a)</h2>
        <ul className={ulClass}>
          <li><strong>Program:</strong>{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA 7(a) loan program
            </Link></li>
          <li><strong>Max amount:</strong> $5M</li>
          <li><strong>Guarantee:</strong> 75&ndash;85% government guarantee to the lender</li>
          <li><strong>Equity required:</strong> 10&ndash;20% buyer injection (can include seller notes on standby)</li>
          <li><strong>Rates:</strong> Prime + 1.75&ndash;2.75% (variable)</li>
          <li><strong>Term:</strong> 10 years (25 years if real estate is included)</li>
          <li><strong>Key advantage:</strong> The most accessible acquisition financing program in the world. Enables the{" "}
            <Link href="/learn/self-funded-search-sba" className="text-apple-accent hover:underline">
              80/10/10 structure
            </Link>{" "}
            for self-funded searches</li>
          <li><strong>Limitations:</strong> US businesses only, personal guarantee required, $5M cap, industry restrictions (real estate, lending, gambling)</li>
        </ul>

        <h2 className={h2Class}>France: Bpifrance</h2>
        <ul className={ulClass}>
          <li><strong>Program:</strong>{" "}
            <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
              Bpifrance Transmission suite
            </Link></li>
          <li><strong>Key products:</strong></li>
          <li>&mdash; <strong>Prêt Transmission:</strong> &euro;40K&ndash;&euro;1.5M subordinated loan, 5&ndash;7 years, 1&ndash;3% below market, no collateral</li>
          <li>&mdash; <strong>Garantie Transmission:</strong> 50&ndash;70% guarantee on bank loans for acquisitions</li>
          <li>&mdash; <strong>Prêt d&rsquo;honneur:</strong> Interest-free loan via partner networks (Réseau Entreprendre, Initiative France)</li>
          <li><strong>Equity required:</strong> 10&ndash;20% with Bpifrance support</li>
          <li><strong>Key advantage:</strong> Layered products that stack to minimize equity. Among the most generous acquisition programs globally</li>
          <li><strong>Tax bonus:</strong>{" "}
            <Link href="/learn/dutreil-pact" className="text-apple-accent hover:underline">
              Dutreil pact
            </Link>{" "}
            adds 75% succession tax exemption</li>
        </ul>

        <h2 className={h2Class}>Germany: KfW</h2>
        <ul className={ulClass}>
          <li><strong>Program:</strong>{" "}
            <Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">
              KfW ERP-Gründerkredit &amp; ERP-Kapital
            </Link></li>
          <li><strong>Key products:</strong></li>
          <li>&mdash; <strong>ERP-Gründerkredit:</strong> Up to &euro;125K at 1&ndash;3% fixed for business successions</li>
          <li>&mdash; <strong>ERP-Kapital für Gründung:</strong> Subordinated loan (quasi-equity), up to &euro;500K, 15-year term</li>
          <li>&mdash; <strong>Bürgschaftsbanken:</strong> Regional guarantee banks providing 50&ndash;80% loan guarantees</li>
          <li><strong>Equity required:</strong> 15&ndash;25% with KfW support</li>
          <li><strong>Key advantage:</strong> Below-market fixed rates and subordinated capital that counts toward equity. Strong support for Mittelstand succession</li>
        </ul>

        <h2 className={h2Class}>United Kingdom</h2>
        <ul className={ulClass}>
          <li><strong>Program:</strong> British Business Bank &mdash; Recovery Loan Scheme (RLS) and Start Up Loans</li>
          <li><strong>Guarantee:</strong> 70% government guarantee on qualifying loans (up to &pound;2M under RLS)</li>
          <li><strong>Equity required:</strong> 20&ndash;30% (less generous than SBA or Bpifrance)</li>
          <li><strong>Key limitation:</strong> No dedicated acquisition financing program comparable to SBA 7(a). Acquisition financing relies on commercial banks with partial government guarantees</li>
          <li><strong>Alternative:</strong> Enterprise Finance Guarantee (EFG) can cover some acquisition scenarios</li>
        </ul>

        <h2 className={h2Class}>Canada: BDC</h2>
        <ul className={ulClass}>
          <li><strong>Program:</strong> Business Development Bank of Canada (BDC) &mdash; Business Transition Financing</li>
          <li><strong>Max amount:</strong> No stated cap (typically $1M&ndash;$10M CAD)</li>
          <li><strong>Products:</strong> Term loans, subordinated debt, and equity co-investment for acquisitions</li>
          <li><strong>Equity required:</strong> 15&ndash;25%</li>
          <li><strong>Key advantage:</strong> BDC actively supports business succession and provides patient capital. More flexible than commercial banks on underwriting</li>
          <li><strong>Tax bonus:</strong> ~$1M CAD lifetime capital gains exemption (LCGE) for qualifying small business shares at exit</li>
        </ul>

        <h2 className={h2Class}>Spain: ICO</h2>
        <ul className={ulClass}>
          <li><strong>Program:</strong> Instituto de Crédito Oficial (ICO) &mdash; ICO Empresas y Emprendedores</li>
          <li><strong>Max amount:</strong> Up to &euro;12.5M per client</li>
          <li><strong>Products:</strong> Medium and long-term loans distributed through commercial banks</li>
          <li><strong>Rates:</strong> Fixed or variable, typically below market for qualifying transactions</li>
          <li><strong>Key limitation:</strong> Not specifically designed for acquisitions; broader SME lending program. CERSA provides mutual guarantee support</li>
        </ul>

        <h2 className={h2Class}>Italy: SIMEST &amp; Medio Credito Centrale</h2>
        <ul className={ulClass}>
          <li><strong>Program:</strong> Fondo di Garanzia per le PMI (Central Guarantee Fund for SMEs)</li>
          <li><strong>Guarantee:</strong> Up to 80% on loans to SMEs (max &euro;5M guarantee)</li>
          <li><strong>SIMEST:</strong> Provides subsidized loans for international expansion and acquisitions abroad</li>
          <li><strong>Key limitation:</strong> The guarantee fund is primarily for growth lending, not specifically for business succession. Acquisition financing is less structured than France or Germany</li>
        </ul>

        <h2 className={h2Class}>Japan: JFC &amp; regional programs</h2>
        <ul className={ulClass}>
          <li><strong>Program:</strong> Japan Finance Corporation (JFC) &mdash; Small Business Succession Financing</li>
          <li><strong>Products:</strong> Low-interest loans (0.5&ndash;2%) for qualified business succession</li>
          <li><strong>Government priority:</strong> Business succession is a national policy priority due to the acute Nachfolge crisis (2.45M businesses at risk)</li>
          <li><strong>Tax incentives:</strong> Business succession tax deferrals and the &ldquo;Business Succession Smoothing Act&rdquo; simplify transfers</li>
          <li><strong>Key challenge:</strong> Programs are primarily designed for Japanese nationals or residents with permanent residency</li>
        </ul>

        <h2 className={h2Class}>Comparative summary</h2>

        <h3 className={h3Class}>Most generous (lowest equity requirement)</h3>
        <ul className={ulClass}>
          <li><strong>1. USA (SBA):</strong> 10% equity possible. Most standardized and accessible</li>
          <li><strong>2. France (Bpifrance):</strong> 10&ndash;15% equity with layered products. Best in Europe</li>
          <li><strong>3. Germany (KfW):</strong> 15&ndash;20% equity. Excellent subordinated capital</li>
          <li><strong>4. Canada (BDC):</strong> 15&ndash;25% equity. Flexible underwriting</li>
        </ul>

        <h3 className={h3Class}>Least generous (highest equity requirement)</h3>
        <ul className={ulClass}>
          <li><strong>UK:</strong> 20&ndash;30% equity. No dedicated acquisition program</li>
          <li><strong>Italy:</strong> 25&ndash;35% equity. Guarantee fund not acquisition-specific</li>
          <li><strong>Spain:</strong> 20&ndash;30% equity. ICO is general-purpose</li>
        </ul>

        <h2 className={h2Class}>Strategic implications for searchers</h2>
        <ul className={ulClass}>
          <li><strong>Country choice matters:</strong> The financing environment can be as important as the deal itself. A 4x deal in France with Bpifrance support may require less equity than a 3.5x deal in Italy with no government program</li>
          <li><strong>Stack programs:</strong> In France and Germany, you can layer multiple government products to minimize equity. See{" "}
            <Link href="/learn/creative-financing" className="text-apple-accent hover:underline">
              creative financing strategies
            </Link></li>
          <li><strong>Local counsel essential:</strong> Eligibility criteria, application processes, and timelines vary. Work with{" "}
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              local advisors
            </Link>{" "}
            who know the programs</li>
          <li><strong>Combine with seller financing:</strong>{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              Seller notes
            </Link>{" "}
            can further reduce equity requirements in all markets</li>
        </ul>

        <p>
          For country-specific acquisition guides, see our{" "}
          <Link href="/learn/category/regional-guides" className="text-apple-accent hover:underline">
            regional guides
          </Link>. For a complete{" "}
          <Link href="/learn/capital-stack-explained" className="text-apple-accent hover:underline">
            capital stack overview
          </Link>, see our financing guides.
        </p>
      </div>
    </article>
  );
}
