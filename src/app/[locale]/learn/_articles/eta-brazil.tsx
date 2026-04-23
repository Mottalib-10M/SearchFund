import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETABrazilArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Brazil: South America&rsquo;s Largest Market
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Brazil is Latin America&rsquo;s largest economy and one of the most
          promising{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>{" "}
          frontiers globally. With 20 million SMEs, a massive succession wave,
          and a growing search fund ecosystem anchored by top business schools,
          Brazil offers compelling acquisition opportunities &mdash; with
          unique structural challenges.
        </p>

        <h2 className={h2Class}>Why Brazil for ETA?</h2>
        <ul className={ulClass}>
          <li><strong>20 million SMEs</strong> (99% of all businesses). The largest SME market in Latin America</li>
          <li><strong>GDP of $2.1 trillion:</strong> 8th largest economy globally, with a growing domestic consumer base of 215 million people</li>
          <li><strong>Succession wave:</strong> 58% of Brazilian family businesses lack a succession plan (PwC Family Business Survey). The founder generation is aging rapidly</li>
          <li><strong>Growing ecosystem:</strong> Insper, FGV, and IESE alumni have launched search funds in Brazil since 2015, building a network of investors and operators</li>
          <li><strong>Attractive multiples:</strong> 3&ndash;5x EBITDA for most SMEs, below US and European levels, driven by higher country risk and less buyer competition</li>
          <li><strong>Currency opportunity:</strong> BRL volatility creates entry points for USD/EUR-denominated buyers</li>
        </ul>

        <h2 className={h2Class}>Legal structures</h2>

        <h3 className={h3Class}>Entity types</h3>
        <ul className={ulClass}>
          <li><strong>Ltda (Sociedade Limitada):</strong> The most common SME structure. Similar to a US LLC. Minimum 2 partners (changed in 2019: single-partner Ltda now possible). Limited liability</li>
          <li><strong>S/A (Sociedade An&ocirc;nima):</strong> Corporation structure for larger businesses. Minimum 2 shareholders. Required for publicly listed companies. More complex governance</li>
          <li><strong>EIRELI (Empresa Individual):</strong> Single-owner entity type. Being phased out in favor of single-partner Ltda</li>
          <li><strong>Acquisition vehicle:</strong> Most buyers create a new Ltda or S/A holdco. The holdco acquires 100% of the target&rsquo;s quotas (Ltda) or shares (S/A)</li>
        </ul>

        <h3 className={h3Class}>Share vs. asset purchase</h3>
        <ul className={ulClass}>
          <li><strong>Share deal:</strong> Most common. Buyer acquires the quotas/shares of the entity. Simpler but inherits all liabilities (including labor and tax contingencies)</li>
          <li><strong>Asset deal (trespasse):</strong> Buyer acquires specific business assets. Avoids liability inheritance but requires customer/vendor contract reassignment</li>
          <li><strong>Critical note:</strong> In Brazil, labor and tax liabilities can follow the business even in asset deals (successor liability). This makes{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            on labor contingencies essential</li>
        </ul>

        <h2 className={h2Class}>Financing options</h2>
        <ul className={ulClass}>
          <li><strong>BNDES:</strong> Brazil&rsquo;s national development bank offers subsidized acquisition financing through programs like BNDES Finame and BNDES Autom&aacute;tico. Rates are significantly below commercial bank rates</li>
          <li><strong>Commercial banks:</strong> Ita&uacute;, Bradesco, Santander Brazil, and Banco do Brasil offer acquisition loans, but at high interest rates (CDI + 3&ndash;8%, where CDI has been 10&ndash;13% in recent years)</li>
          <li><strong>Seller financing:</strong> Very common (20&ndash;40% of deal value) and often necessary given high bank interest rates. See{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing guide
            </Link></li>
          <li><strong>Investor equity:</strong> Brazilian search fund investors (Insper network, FGV alumni) provide equity capital. International investors also participate, often in USD</li>
          <li><strong>SEBRAE programs:</strong> Brazil&rsquo;s SME support agency offers training, mentorship, and some financial assistance for business succession</li>
        </ul>

        <h2 className={h2Class}>Tax landscape</h2>
        <ul className={ulClass}>
          <li><strong>Corporate tax:</strong> 34% combined (15% IRPJ + 10% surtax on profits &gt;R$240K/year + 9% CSLL social contribution)</li>
          <li><strong>Simples Nacional:</strong> Simplified tax regime for SMEs with revenue &lt;R$4.8M (&sim;$1M). Rates from 4&ndash;33% depending on activity and revenue tier. Very advantageous for small businesses</li>
          <li><strong>Lucro Presumido:</strong> Presumed profit regime for businesses with revenue &lt;R$78M. Simplifies tax calculation but may result in higher taxes for low-margin businesses</li>
          <li><strong>Capital gains:</strong> 15&ndash;22.5% progressive rate on capital gains from share sales (individual sellers). Corporate sellers pay at the standard 34% rate</li>
          <li><strong>Goodwill amortization:</strong> Goodwill from acquisitions can be amortized for tax purposes, reducing the effective tax burden post-acquisition</li>
          <li><strong>Transfer pricing:</strong> Brazil has unique transfer pricing rules (not OECD-compliant until 2024 reforms). Cross-border transactions require careful planning</li>
        </ul>

        <h2 className={h2Class}>Target industries</h2>
        <ul className={ulClass}>
          <li><strong>Technology services:</strong> Brazil&rsquo;s tech ecosystem (S&atilde;o Paulo, Florian&oacute;polis) includes many IT services, MSP, and software companies with succession needs</li>
          <li><strong>Healthcare:</strong> Dental clinics, diagnostic labs, and specialty practices. A growing private healthcare market driven by inadequate public services</li>
          <li><strong>Education:</strong> Private schools, language schools, and professional training companies. Brazil has one of the largest private education markets globally</li>
          <li><strong>Agribusiness services:</strong> Equipment dealers, agricultural inputs distribution, farm management technology. Brazil is a global agricultural powerhouse</li>
          <li><strong>Franchises:</strong> Brazil has the 4th largest franchise market globally. Multi-unit franchise acquisitions are a proven ETA path</li>
          <li><strong>Financial services:</strong> Insurance brokerages, accounting firms, and payroll processing companies with recurring revenue models</li>
        </ul>

        <h2 className={h2Class}>Key challenges</h2>
        <ul className={ulClass}>
          <li><strong>Brazil Cost (Custo Brasil):</strong> Complex taxation (5,000+ tax obligations), bureaucracy, and regulatory burden add 30&ndash;40% to operating costs vs. OECD averages</li>
          <li><strong>Labor law:</strong> CLT (labor code) is employee-protective. Wrongful dismissal claims, mandatory benefits (13th salary, FGTS, vacation pay), and labor court contingencies are significant. Budget 10&ndash;20% of deal value for labor contingency escrow</li>
          <li><strong>Interest rates:</strong> Selic (base rate) has been 10&ndash;14% in recent years, making leverage expensive. Equity-heavy capital structures are more common</li>
          <li><strong>Currency risk:</strong> BRL/USD volatility affects returns for international investors. Consider hedging strategies for USD-denominated returns</li>
          <li><strong>Informality:</strong> Many Brazilian SMEs have informal practices (off-book revenue, informal employees). Thorough financial and tax DD is critical</li>
        </ul>

        <p>
          For the broader Latin American context, see{" "}
          <Link href="/learn/eta-latin-america" className="text-apple-accent hover:underline">
            ETA in Latin America
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
