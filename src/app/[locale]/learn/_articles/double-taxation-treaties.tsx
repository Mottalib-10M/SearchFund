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
        <p>As of 2024, the OECD reports that its member states maintain over 3,000 bilateral tax treaties worldwide, forming the backbone of the international tax system. Most of these agreements follow the OECD Model Tax Convention, which was most recently updated in 2017 to incorporate the Base Erosion and Profit Shifting (BEPS) minimum standards.</p>
        <ul className={ulClass}>
          <li><strong>Residence vs. source:</strong> DTTs allocate taxing rights between the country where income is earned (source) and the country where the recipient resides (residence)</li>
          <li><strong>Reduced withholding taxes:</strong> DTTs typically reduce withholding tax rates on cross-border dividends, interest, and royalties</li>
          <li><strong>Tax credits:</strong> Where both countries tax the same income, DTTs provide mechanisms (credits or exemptions) to eliminate double taxation</li>
          <li><strong>OECD Model:</strong> Most DTTs follow the OECD Model Tax Convention, providing a standardized framework</li>
          <li><strong>Treaty shopping prevention:</strong> Modern DTTs include Limitation on Benefits (LOB) or Principal Purpose Test (PPT) clauses to prevent abuse</li>
          <li><strong>Multilateral Instrument (MLI):</strong> The BEPS Multilateral Instrument, signed by over 100 jurisdictions, modifies existing bilateral DTTs to incorporate anti-abuse provisions without the need to renegotiate each treaty individually</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Treaty Provisions for Acquisitions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Dividends (Article 10)</h3>
        <ul className={ulClass}>
          <li>Source country withholding tax typically reduced to 5-15% (vs. domestic rates of 20-30%)</li>
          <li>Many treaties provide 0% withholding for substantial holdings (25%+) between EU companies (Parent-Subsidiary Directive)</li>
          <li>Critical for repatriation of profits from operating subsidiary to holding company</li>
        </ul>

        <h3 className={h3Class}>Interest (Article 11)</h3>
        <ul className={ulClass}>
          <li>Withholding tax typically reduced to 0-10% (vs. domestic rates of 15-30%)</li>
          <li>Many EU-based DTTs provide 0% withholding on interest</li>
          <li>Relevant when acquisition debt is provided by entities in another country</li>
        </ul>

        <h3 className={h3Class}>Capital Gains (Article 13)</h3>
        <ul className={ulClass}>
          <li>Gains from selling shares typically taxable only in the seller&apos;s residence country</li>
          <li>Exception: &quot;real property-rich companies&quot;, if the target&apos;s value is primarily from real estate, the source country may tax the gain</li>
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
          <li><strong>UK &rarr; EU:</strong> Variable post-Brexit; typically 5-15% depending on the specific bilateral DTT</li>
        </ul>
      </div>

      <h2 className={h2Class}>The EU Parent-Subsidiary Directive</h2>
      <div className={bodyClass}>
        <p>For search fund entrepreneurs operating within the European Union, the Parent-Subsidiary Directive (2011/96/EU) is arguably more important than bilateral DTTs. According to the European Commission, this directive eliminates withholding tax on dividend payments between associated companies of different EU member states, provided the parent holds at least 10% of the subsidiary for a minimum of two years. This means a Dutch holding company receiving dividends from a French operating subsidiary pays 0% withholding tax, a significant advantage over non-EU structures where bilateral treaty rates of 5-15% would apply.</p>
        <p>Post-Brexit, UK-based holding companies no longer benefit from the Parent-Subsidiary Directive, and must rely on individual bilateral DTTs with each EU country. This has made jurisdictions like the Netherlands, Luxembourg, and Ireland even more attractive as <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company locations</Link> for pan-European acquisition strategies.</p>
      </div>

      <h2 className={h2Class}>Practical Implications for Search Funds</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Holding company location:</strong> The choice of jurisdiction for your holding company affects withholding rates on all cross-border flows. According to PwC&apos;s Worldwide Tax Summaries, the Netherlands, Luxembourg, Ireland, and Switzerland remain the most popular holding jurisdictions due to their extensive treaty networks and participation exemptions.</li>
          <li><strong>Investor distributions:</strong> DTTs affect how tax-efficiently you can distribute returns to investors in different countries</li>
          <li><strong>Management fees:</strong> Cross-border management fees between holding and operating companies may be subject to withholding tax</li>
          <li><strong>Exit planning:</strong> Capital gains treatment on exit depends on the DTT between the holding company&apos;s jurisdiction and the operating company&apos;s jurisdiction</li>
          <li><strong>Substance requirements:</strong> To benefit from DTTs, the holding company must have genuine substance (anti-treaty-shopping provisions). Post-BEPS, tax authorities across the OECD are increasingly applying substance-over-form tests, requiring that holding entities demonstrate real economic activity, decision-making, and qualified personnel in their jurisdiction of residence</li>
          <li><strong><Link href="/learn/withholding-taxes-cross-border" className="text-apple-accent hover:underline">Withholding tax planning</Link>:</strong> Map the full chain of cross-border payments (dividends, interest, royalties, management fees) and model the cumulative withholding tax impact before choosing your structure</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>DTTs reduce withholding taxes on cross-border dividends, interest, and royalties, sometimes to 0%</li>
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

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>What happens if there is no DTT between two countries?</h3>
      <div className={bodyClass}>
        <p>Without a DTT, both the source and residence countries may tax the same income at their full domestic rates, leading to economic double taxation. In practice, this means withholding tax rates of 20-30% on dividends and interest in the source country, plus full taxation in the residence country. Some countries offer unilateral tax credits for foreign taxes paid, but these are often less generous than treaty-based relief. For search fund structures, the absence of a DTT typically makes a particular holding jurisdiction uneconomic for cross-border flows.</p>
      </div>

      <h3 className={h3Class}>How do anti-abuse provisions affect search fund holding structures?</h3>
      <div className={bodyClass}>
        <p>The Principal Purpose Test (PPT), now embedded in most treaties through the Multilateral Instrument, denies treaty benefits if one of the principal purposes of an arrangement is to obtain treaty benefits. For search fund holding companies, this means the entity must have genuine substance: real office space, qualified employees, actual decision-making conducted locally, and a commercial rationale beyond tax savings. A shell holding company with no employees and no local activity will increasingly fail to qualify for treaty benefits under modern standards.</p>
      </div>

      <h3 className={h3Class}>Should a US-based search fund use a European holding company for EU acquisitions?</h3>
      <div className={bodyClass}>
        <p>In many cases, yes. A Dutch or Luxembourg holding company provides access to the EU Parent-Subsidiary Directive (0% withholding on intra-EU dividends), broad treaty networks, and participation exemptions on capital gains. However, the holding must have genuine substance in the EU jurisdiction, and US investors must consider Subpart F / GILTI rules that may accelerate US taxation on certain types of foreign income. The optimal structure depends on the specific countries involved, the expected cash flow patterns, and the planned exit timeline. Engage a cross-border tax advisor before committing to any structure.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>OECD, <em>Model Tax Convention on Income and on Capital</em> (2024)</li>
        <li>European Commission, <em>Parent-Subsidiary Directive (2011/96/EU)</em></li>
        <li>PwC, <em>Worldwide Tax Summaries: Withholding Tax Rates</em> (2024)</li>
        <li>EY, <em>Worldwide Corporate Tax Guide: Treaty Network Analysis</em> (2024)</li>
        <li>OECD, <em>Multilateral Convention to Implement Tax Treaty Related Measures (MLI)</em> (2024)</li>
      </ul>
    </article>
  );
}
