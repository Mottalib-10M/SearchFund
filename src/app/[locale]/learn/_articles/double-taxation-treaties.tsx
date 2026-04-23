import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function DoubleTaxationTreatiesArticle() {
  return (
    <article>
      <h1 className={h1Class}>Double Taxation Treaties: How They Affect Acquisitions</h1>
      <div className={bodyClass}>
        <p>Double Taxation Treaties (DTTs), also known as Tax Treaties or Double Taxation Agreements (DTAs), are bilateral agreements between countries that prevent the same income from being taxed twice. For searchers involved in <Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">cross-border acquisitions</Link> or using international holding structures, understanding DTTs is essential for optimizing tax efficiency and avoiding unexpected tax burdens.</p>
      </div>

      <h2 className={h2Class}>How Double Taxation Treaties Work</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Residence vs. source:</strong> DTTs allocate taxing rights between the country where income is earned (source) and the country where the recipient resides (residence)</li>
          <li><strong>Reduced withholding taxes:</strong> DTTs typically reduce withholding tax rates on cross-border dividends, interest, and royalties</li>
          <li><strong>Tax credits:</strong> Where both countries tax the same income, DTTs provide mechanisms (credits or exemptions) to eliminate double taxation</li>
          <li><strong>OECD Model:</strong> Most DTTs follow the OECD Model Tax Convention, providing a standardized framework</li>
          <li><strong>Treaty shopping prevention:</strong> Modern DTTs include Limitation on Benefits (LOB) or Principal Purpose Test (PPT) clauses to prevent abuse</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Treaty Provisions for Acquisitions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Dividends (Article 10)</h3>
        <ul className={ulClass}>
          <li>Source country withholding tax typically reduced to 5&ndash;15% (vs. domestic rates of 20&ndash;30%)</li>
          <li>Many treaties provide 0% withholding for substantial holdings (25%+) between EU companies (Parent-Subsidiary Directive)</li>
          <li>Critical for repatriation of profits from operating subsidiary to holding company</li>
        </ul>

        <h3 className={h3Class}>Interest (Article 11)</h3>
        <ul className={ulClass}>
          <li>Withholding tax typically reduced to 0&ndash;10% (vs. domestic rates of 15&ndash;30%)</li>
          <li>Many EU-based DTTs provide 0% withholding on interest</li>
          <li>Relevant when acquisition debt is provided by entities in another country</li>
        </ul>

        <h3 className={h3Class}>Capital Gains (Article 13)</h3>
        <ul className={ulClass}>
          <li>Gains from selling shares typically taxable only in the seller&apos;s residence country</li>
          <li>Exception: &quot;real property-rich companies&quot; &mdash; if the target&apos;s value is primarily from real estate, the source country may tax the gain</li>
          <li>Essential for exit planning in cross-border structures</li>
        </ul>
      </div>

      <h2 className={h2Class}>Withholding Tax Rates: Key Country Pairs</h2>
      <div className={bodyClass}>
        <p>Common cross-border pairs and typical DTT withholding rates on dividends (substantial holding):</p>
        <ul className={ulClass}>
          <li><strong>US &rarr; UK:</strong> 0% (for 80%+ corporate holdings)</li>
          <li><strong>US &rarr; France:</strong> 5% (for 10%+ holdings)</li>
          <li><strong>US &rarr; Germany:</strong> 5% (for 10%+ holdings)</li>
          <li><strong>US &rarr; Netherlands:</strong> 5% (for 10%+ holdings)</li>
          <li><strong>Within EU:</strong> 0% (under the Parent-Subsidiary Directive for 10%+ holdings held 2+ years)</li>
          <li><strong>UK &rarr; EU:</strong> Variable post-Brexit; typically 5&ndash;15% depending on the specific bilateral DTT</li>
        </ul>
      </div>

      <h2 className={h2Class}>Practical Implications for Search Funds</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Holding company location:</strong> The choice of jurisdiction for your holding company affects withholding rates on all cross-border flows</li>
          <li><strong>Investor distributions:</strong> DTTs affect how tax-efficiently you can distribute returns to investors in different countries</li>
          <li><strong>Management fees:</strong> Cross-border management fees between holding and operating companies may be subject to withholding tax</li>
          <li><strong>Exit planning:</strong> Capital gains treatment on exit depends on the DTT between the holding company&apos;s jurisdiction and the operating company&apos;s jurisdiction</li>
          <li><strong>Substance requirements:</strong> To benefit from DTTs, the holding company must have genuine substance (anti-treaty-shopping provisions)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>DTTs reduce withholding taxes on cross-border dividends, interest, and royalties &mdash; sometimes to 0%</li>
          <li>Within the EU, the Parent-Subsidiary Directive provides 0% withholding for qualifying corporate holdings</li>
          <li>The choice of holding company jurisdiction significantly impacts the overall tax efficiency of cross-border structures</li>
          <li>Modern anti-abuse provisions (LOB, PPT) require genuine substance and business purpose</li>
          <li>Always consult a cross-border tax advisor before structuring international acquisitions</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/cross-border-acquisitions-europe" className="text-apple-accent hover:underline">Cross-Border Acquisitions in Europe</Link></li>
        <li><Link href="/learn/holding-company-tax" className="text-apple-accent hover:underline">Holding Company Tax Optimization</Link></li>
        <li><Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">Tax Optimization for Search Fund Acquisitions</Link></li>
        <li><Link href="/learn/capital-gains-tax-by-country" className="text-apple-accent hover:underline">Capital Gains Tax by Country</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>OECD, <em>Model Tax Convention on Income and on Capital</em> (2024)</li>
        <li>European Commission, <em>Parent-Subsidiary Directive (2011/96/EU)</em></li>
        <li>PwC, <em>Worldwide Tax Summaries: Withholding Tax Rates</em> (2024)</li>
        <li>EY, <em>Worldwide Corporate Tax Guide: Treaty Network Analysis</em> (2024)</li>
      </ul>
    </article>
  );
}
