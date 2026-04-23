import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function ETAPortugalArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA in Portugal: The Iberian Hidden Gem
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Portugal offers a compelling and under-explored ETA opportunity.
          With 1.3 million SMEs, an aging owner population, EU membership,
          competitive labor costs, and generous tax incentives for new
          residents, Portugal is emerging as one of{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            Europe&rsquo;s most attractive markets
          </Link>{" "}
          for acquisition entrepreneurs.
        </p>

        <h2 className={h2Class}>Why Portugal for ETA?</h2>
        <ul className={ulClass}>
          <li><strong>1.3 million SMEs</strong> &mdash; 99.9% of all Portuguese businesses are SMEs, the vast majority family-owned</li>
          <li><strong>Aging ownership:</strong> 35%+ of business owners are over 55 with no succession plan, creating significant deal flow</li>
          <li><strong>EU single market:</strong> Full access to 450M consumers, EU structural funds, and cross-border trade</li>
          <li><strong>Competitive costs:</strong> Average salaries are 40&ndash;50% below Western European levels while workforce quality is high (strong universities, multilingual population)</li>
          <li><strong>Low competition:</strong> Very few PE firms and almost no search funds target the Portuguese lower middle market</li>
          <li><strong>English proficiency:</strong> Portugal ranks among the best in Europe for English fluency, reducing language barriers for international buyers</li>
        </ul>

        <h2 className={h2Class}>Legal structures</h2>

        <h3 className={h3Class}>Entity types</h3>
        <ul className={ulClass}>
          <li><strong>Lda (Sociedade por Quotas):</strong> The most common SME structure, similar to a German GmbH or French SARL. Minimum capital &euro;1. Limited liability</li>
          <li><strong>SA (Sociedade An&oacute;nima):</strong> Public limited company for larger businesses. Minimum capital &euro;50,000. Required for listed companies</li>
          <li><strong>Acquisition vehicle:</strong> Most buyers create a new Lda or SA as the acquisition holdco, then purchase 100% of the target&rsquo;s quotas (shares)</li>
        </ul>

        <h3 className={h3Class}>Share vs. asset purchase</h3>
        <ul className={ulClass}>
          <li><strong>Share deal (trespass de quotas):</strong> Most common for Portuguese SMEs. Buyer acquires the quotas of the Lda. Simpler, preserves contracts and licenses</li>
          <li><strong>Asset deal (trespasse):</strong> Buyer acquires specific business assets. Used when the target has unwanted liabilities or when only a division is being acquired</li>
          <li><strong>Tax implication:</strong> Share deals have no VAT or transfer tax on the quotas themselves. Asset deals may trigger IMT (property transfer tax) on real estate</li>
        </ul>

        <h2 className={h2Class}>Financing options</h2>
        <ul className={ulClass}>
          <li><strong>Portuguese banks:</strong> CGD, BPI, Millennium BCP, and Novo Banco offer acquisition financing. Typical terms: 60&ndash;70% LTV, 5&ndash;10 year term, Euribor + 2&ndash;4%</li>
          <li><strong>IAPMEI programs:</strong> Portugal&rsquo;s SME agency offers subsidized loans and guarantees for business transfers through programs like &ldquo;Linha de Cr&eacute;dito Capitalizar&rdquo;</li>
          <li><strong>Portugal 2030:</strong> EU structural funds provide grants and subsidized financing for SME modernization post-acquisition</li>
          <li><strong>Mutual guarantee societies (SGM):</strong> Lisbon Guarantee, Norgarante, and Garval provide 50&ndash;80% loan guarantees, reducing bank risk</li>
          <li><strong>Seller financing:</strong> Common in family business transfers, typically 10&ndash;30% of the price over 3&ndash;5 years. See{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing guide
            </Link></li>
        </ul>

        <h2 className={h2Class}>Tax landscape</h2>
        <ul className={ulClass}>
          <li><strong>Corporate tax (IRC):</strong> 21% standard rate. SMEs pay 17% on the first &euro;50,000 of taxable income</li>
          <li><strong>Capital gains:</strong> Taxed at the corporate rate (21%). Participation exemption available for qualifying holding companies (SGPS)</li>
          <li><strong>NHR regime:</strong> The Non-Habitual Resident program offered a flat 20% income tax rate for 10 years (now modified but still attractive for new residents)</li>
          <li><strong>Goodwill amortization:</strong> Goodwill from share acquisitions can be amortized over 5 years for tax purposes</li>
          <li><strong>Interest deductibility:</strong> Acquisition debt interest is deductible, subject to the EBITDA-based limitation (30% of EBITDA)</li>
          <li><strong>Stamp duty:</strong> 0.8% on real estate included in the transaction. No stamp duty on share transfers</li>
        </ul>

        <h2 className={h2Class}>Target industries</h2>
        <ul className={ulClass}>
          <li><strong>Tourism &amp; hospitality:</strong> Portugal&rsquo;s tourism boom creates opportunities in hotel management, tour operators, and F&amp;B</li>
          <li><strong>Manufacturing:</strong> Textiles, cork, ceramics, and automotive components &mdash; many family-owned with succession issues</li>
          <li><strong>Technology services:</strong> Lisbon and Porto have strong tech ecosystems with IT services, outsourcing, and software companies</li>
          <li><strong>Agriculture &amp; food:</strong> Wine, olive oil, and specialty food production &mdash; fragmented and ripe for consolidation</li>
          <li><strong>Construction &amp; real estate services:</strong> Strong demand driven by tourism and foreign investment in property</li>
          <li><strong>Healthcare:</strong> Private clinics and specialized medical services, especially dental and aesthetic practices</li>
        </ul>

        <h2 className={h2Class}>Practical considerations</h2>
        <ul className={ulClass}>
          <li><strong>Language:</strong> Business is conducted in Portuguese. While English is widely spoken (especially in Lisbon/Porto), legal documents, contracts, and employee communication will be in Portuguese</li>
          <li><strong>Deal sourcing:</strong> Use IAPMEI&rsquo;s business transfer portal, local accountants (TOCs), and business brokers. Network through AEP (Portuguese business confederation) and ANJE (young entrepreneurs association)</li>
          <li><strong>Valuation multiples:</strong> 3&ndash;5x EBITDA for most SMEs. Lower than Western European averages due to smaller absolute size and less competitive buyer landscape</li>
          <li><strong>Due diligence:</strong> Pay special attention to tax compliance (the Portuguese tax authority, AT, is active), employee classification, and real estate title</li>
          <li><strong>Residency:</strong> EU citizens have automatic residency rights. Non-EU citizens can use the Golden Visa program (investment-based) or D7 visa (passive income)</li>
        </ul>

        <h2 className={h2Class}>ETA ecosystem in Portugal</h2>
        <ul className={ulClass}>
          <li><strong>Early stage:</strong> The Portuguese search fund ecosystem is nascent &mdash; fewer than 5 search funds have operated in Portugal</li>
          <li><strong>Universities:</strong> Nova SBE, Cat&oacute;lica Lisbon, and Porto Business School are beginning to introduce ETA concepts</li>
          <li><strong>Advisors:</strong> KPMG, Deloitte, and local firms like Abreu Advogados and Morais Leit&atilde;o handle M&amp;A transactions</li>
          <li><strong>Opportunity:</strong> First-mover advantage is significant. The market is underserved with motivated sellers and limited buyer competition</li>
        </ul>

        <p>
          For the broader Iberian perspective, see{" "}
          <Link href="/learn/eta-spain" className="text-apple-accent hover:underline">
            ETA in Spain
          </Link>{" "}
          and{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            ETA in Europe overview
          </Link>.
        </p>
      </div>
    </article>
  );
}
