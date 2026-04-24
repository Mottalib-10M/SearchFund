import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function BpifranceAcquisitionFinancingArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Bpifrance Financing for Business Acquisitions
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          Bpifrance (Banque Publique d&rsquo;Investissement) is France&rsquo;s
          public investment bank and the most important financing partner
          for business acquisitions in{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            France
          </Link>. For search fund entrepreneurs and SME acquirers,
          Bpifrance offers a range of products &mdash; from loan guarantees
          to direct co-investment &mdash; that make French acquisitions
          more accessible and better financed than in almost any other
          European market.
        </p>

        <p>
          France is facing one of Europe&rsquo;s most significant business
          succession challenges: according to Bpifrance&rsquo;s own 2024
          data, over 700,000 French SMEs will need to change hands within
          the next decade as their founders retire. The IESE 2024
          International Search Fund Study highlights France as one of the
          fastest-growing ETA markets in continental Europe, driven in
          large part by this favorable financing ecosystem.
        </p>

        <h2 className={h2Class}>What is Bpifrance?</h2>
        <ul className={ulClass}>
          <li><strong>Role:</strong> France&rsquo;s public investment bank, established in 2013. Supports French businesses from creation to exit</li>
          <li><strong>Scale:</strong> &euro;50B+ in assets, supporting 90,000+ French companies annually</li>
          <li><strong>Mission:</strong> Finance SME growth, facilitate business succession, and support innovation</li>
          <li><strong>Relevance for ETA:</strong> Bpifrance actively supports &ldquo;reprise d&rsquo;entreprise&rdquo; (business acquisition) with dedicated loan products, guarantees, and advisory services</li>
        </ul>

        <h2 className={h2Class}>Key products for acquirers</h2>

        <h3 className={h3Class}>1. Pr&ecirc;t Transmission (Transmission Loan)</h3>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> &euro;40,000 to &euro;1,500,000</li>
          <li><strong>Term:</strong> 5&ndash;7 years</li>
          <li><strong>Rate:</strong> Fixed rate, typically 1&ndash;3% below market rates</li>
          <li><strong>No collateral:</strong> Unsecured &mdash; no personal guarantee or asset pledge required</li>
          <li><strong>Use:</strong> Co-finances the acquisition alongside a bank loan. Bpifrance provides the junior tranche</li>
          <li><strong>Requirement:</strong> Must be paired with a bank loan of at least equal amount (1:1 matching)</li>
        </ul>

        <h3 className={h3Class}>2. Garantie Transmission (Transmission Guarantee)</h3>
        <ul className={ulClass}>
          <li><strong>What:</strong> Bpifrance guarantees 50&ndash;70% of the bank&rsquo;s acquisition loan, reducing the bank&rsquo;s risk</li>
          <li><strong>Effect:</strong> Makes banks much more willing to lend. Without the guarantee, many banks won&rsquo;t finance first-time acquirers</li>
          <li><strong>Cost:</strong> 0.7&ndash;1.5% guarantee fee (one-time or annual)</li>
          <li><strong>Maximum:</strong> Guarantee covers loans up to &euro;5M</li>
          <li><strong>Key benefit:</strong> First-time buyers without a track record can access bank financing that would otherwise be denied</li>
        </ul>

        <h3 className={h3Class}>3. Fonds de Garantie &agrave; l&rsquo;Initiative des Femmes (FGIF)</h3>
        <ul className={ulClass}>
          <li><strong>What:</strong> Dedicated guarantee fund for women entrepreneurs acquiring businesses</li>
          <li><strong>Guarantee:</strong> Up to 70% of the bank loan</li>
          <li><strong>This is part of France&rsquo;s broader effort to support diversity in entrepreneurship</strong></li>
        </ul>

        <h3 className={h3Class}>4. Pr&ecirc;t d&rsquo;Honneur (Honor Loan)</h3>
        <ul className={ulClass}>
          <li><strong>Amount:</strong> &euro;1,000 to &euro;90,000 (typically &euro;20K&ndash;$50K)</li>
          <li><strong>Term:</strong> 2&ndash;5 years, interest-free</li>
          <li><strong>Provided by:</strong> R&eacute;seau Entreprendre, Initiative France, or France Active (partnered with Bpifrance)</li>
          <li><strong>Purpose:</strong> Quasi-equity that strengthens your down payment and signals credibility to banks</li>
          <li><strong>Leverage effect:</strong> &euro;1 of pr&ecirc;t d&rsquo;honneur typically unlocks &euro;7&ndash;8 of bank debt</li>
        </ul>

        <h2 className={h2Class}>Typical French acquisition financing structure</h2>
        <ul className={ulClass}>
          <li><strong>Senior bank debt:</strong> 50&ndash;60% of purchase price (7-year term, guaranteed by Bpifrance)</li>
          <li><strong>Bpifrance Pr&ecirc;t Transmission:</strong> 15&ndash;25% (subordinated, no collateral)</li>
          <li><strong>Pr&ecirc;t d&rsquo;honneur:</strong> 5&ndash;10% (interest-free, quasi-equity)</li>
          <li><strong>Buyer equity:</strong> 10&ndash;20% personal contribution</li>
          <li><strong>Seller financing (cr&eacute;dit-vendeur):</strong> 0&ndash;15% (less common in France than US, but becoming more accepted)</li>
        </ul>

        <h3 className={h3Class}>Example: &euro;1M acquisition in France</h3>
        <ul className={ulClass}>
          <li>Bank loan (Bpifrance guaranteed): &euro;550,000 (55%)</li>
          <li>Bpifrance Pr&ecirc;t Transmission: &euro;200,000 (20%)</li>
          <li>Pr&ecirc;t d&rsquo;honneur: &euro;50,000 (5%)</li>
          <li>Buyer equity: &euro;150,000 (15%)</li>
          <li>Cr&eacute;dit-vendeur: &euro;50,000 (5%)</li>
          <li>Total: &euro;1,000,000 &mdash; buyer only needs &euro;150K of personal capital</li>
        </ul>

        <h2 className={h2Class}>How to access Bpifrance financing</h2>
        <ul className={ulClass}>
          <li><strong>Step 1:</strong> Identify your target and structure the deal with your{" "}
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              M&amp;A advisor
            </Link></li>
          <li><strong>Step 2:</strong> Approach a commercial bank (BNP Paribas, Soci&eacute;t&eacute; G&eacute;n&eacute;rale, Cr&eacute;dit Agricole, CIC, etc.) for the senior loan</li>
          <li><strong>Step 3:</strong> The bank applies for the Bpifrance guarantee on your behalf</li>
          <li><strong>Step 4:</strong> Apply directly to Bpifrance for the Pr&ecirc;t Transmission (through bpifrance.fr or your local Bpifrance office)</li>
          <li><strong>Step 5:</strong> Apply to R&eacute;seau Entreprendre or Initiative France for the pr&ecirc;t d&rsquo;honneur</li>
          <li><strong>Timeline:</strong> 4&ndash;8 weeks from application to approval for most Bpifrance products</li>
        </ul>

        <h2 className={h2Class}>Tax advantages for French acquisitions</h2>
        <ul className={ulClass}>
          <li><strong>Dutreil Pact:</strong> 75% exemption on business transfer taxes (see{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
              tax optimization
            </Link>)</li>
          <li><strong>Int&eacute;gration fiscale:</strong> Tax consolidation between holding company and operating company allows interest deduction</li>
          <li><strong>Holding structure:</strong> Acquire through a holding company (SAS or SARL) to deduct acquisition debt interest against operating company profits</li>
        </ul>

        <h2 className={h2Class}>Bpifrance vs. international alternatives</h2>
        <ul className={ulClass}>
          <li><strong>US (SBA 7(a)):</strong> Similar concept but SBA provides loan guarantees up to 85% vs. Bpifrance&rsquo;s 50&ndash;70%. See{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA guide
            </Link></li>
          <li><strong>Germany (KfW):</strong> KfW provides similar acquisition financing programs for German businesses</li>
          <li><strong>UK:</strong> British Business Bank offers guarantee schemes but less comprehensive than Bpifrance</li>
          <li><strong>France advantage:</strong> Bpifrance&rsquo;s combination of guarantee + subordinated loan + interest-free honor loans makes France one of the most acquirer-friendly markets in the world</li>
        </ul>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the Bpifrance Pr&ecirc;t Transmission?</h3>
        <p>
          The Pr&ecirc;t Transmission is Bpifrance&rsquo;s subordinated
          loan for business acquisitions: &euro;40K&ndash;&euro;1.5M,
          5&ndash;7 year term, fixed rate 1&ndash;3% below market, and no
          collateral or personal guarantee required. It must be paired 1:1
          with a commercial bank loan and serves as the junior tranche of
          the financing.
        </p>

        <h3 className={h3Class}>How much personal capital do you need to buy a business in France?</h3>
        <p>
          With Bpifrance financing, you can acquire a French business with
          10&ndash;20% personal equity. A typical structure for a
          &euro;1M acquisition: &euro;550K bank loan (Bpifrance
          guaranteed), &euro;200K Pr&ecirc;t Transmission, &euro;50K
          pr&ecirc;t d&rsquo;honneur (interest-free), &euro;150K buyer
          equity, and &euro;50K seller financing. You would need
          approximately &euro;150K of personal capital.
        </p>

        <h3 className={h3Class}>How does Bpifrance compare to the US SBA program?</h3>
        <p>
          Both are government-backed programs that guarantee acquisition
          loans. The SBA provides guarantees up to 85% of the loan, while
          Bpifrance guarantees 50&ndash;70%. However, Bpifrance&rsquo;s
          combination of loan guarantees, subordinated co-lending
          (Pr&ecirc;t Transmission), and interest-free honor loans creates
          a more layered and acquirer-friendly capital stack than the SBA
          model alone.
        </p>

        <p>
          For the complete French ETA guide, see{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            ETA in France
          </Link>.
          For the broader financing framework, see{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing
          </Link>{" "}
          and{" "}
          <Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">
            government financing programs worldwide
          </Link>.
        </p>
      </div>
    </article>
  );
}
