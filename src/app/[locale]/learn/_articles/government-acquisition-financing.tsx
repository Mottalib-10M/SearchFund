import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function GovernmentAcquisitionFinancingArticle() {
  return (
    <article>
      <h1 className={h1Class}>Government Acquisition Financing Programs: A Global Comparison</h1>
      <div className={bodyClass}>
        <p>Governments worldwide offer financing programs to facilitate business acquisitions, particularly for small and mid-size enterprises where succession failures would destroy jobs and economic value. For search fund entrepreneurs, these programs can provide below-market interest rates, longer repayment terms, and reduced equity requirements &mdash; making acquisitions more accessible and improving returns.</p>
      </div>

      <h2 className={h2Class}>United States: SBA Programs</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong><Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA 7(a)</Link>:</strong> Up to $5M for acquisitions. 10&ndash;25 year terms. Requires 10&ndash;20% equity injection. Prime + 2.75% typical.</li>
          <li><strong>SBA 504:</strong> For real estate and equipment in acquisitions. Up to $5.5M. Below-market fixed rates.</li>
          <li><strong><Link href="/learn/robs-acquisition" className="text-apple-accent hover:underline">ROBS</Link>:</strong> Use retirement funds for acquisition equity without early withdrawal penalties</li>
          <li><strong>USDA Business &amp; Industry:</strong> For rural acquisitions, loans up to $25M with government guarantee</li>
        </ul>
      </div>

      <h2 className={h2Class}>Canada</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong><Link href="/learn/bdc-canada" className="text-apple-accent hover:underline">BDC (Business Development Bank)</Link>:</strong> Government-owned bank specifically supporting SME acquisitions. Flexible terms, subordinated debt available.</li>
          <li><strong>CSBFP (Canada Small Business Financing Program):</strong> Government-guaranteed loans up to CAD 1.15M for asset purchases</li>
          <li><strong>Provincial programs:</strong> Alberta Innovates, Investissement Québec, and Ontario Business Grants offer additional support</li>
        </ul>
      </div>

      <h2 className={h2Class}>United Kingdom</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>British Business Bank:</strong> Facilitates lending to SMEs through partner lenders. Start Up Loans and Recovery Loan Scheme.</li>
          <li><strong>Enterprise Finance Guarantee:</strong> Government-backed guarantee for SME loans up to &pound;1.2M</li>
          <li><strong>Regional funds:</strong> Northern Powerhouse Investment Fund, Midlands Engine, and other regional development finance</li>
        </ul>
      </div>

      <h2 className={h2Class}>France</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Bpifrance:</strong> State investment bank providing guarantees (up to 70% of loan), co-investment, and innovation grants</li>
          <li><strong><Link href="/learn/simest-italy" className="text-apple-accent hover:underline">SIMEST</Link> equivalent &mdash; Bpifrance Assurance Export:</strong> Export credit and international acquisition support</li>
          <li><strong>R&eacute;gions:</strong> Regional economic development agencies offer subsidized loans and grants for acquisitions in their territory</li>
        </ul>
      </div>

      <h2 className={h2Class}>Germany</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>KfW (Kreditanstalt f&uuml;r Wiederaufbau):</strong> Germany&apos;s development bank offers subsidized loans for business succession (Nachfolge). ERP-Gr&uuml;nderkredit provides up to &euro;125K at below-market rates.</li>
          <li><strong>B&uuml;rgschaftsbanken:</strong> State guarantee banks that back acquisition loans with up to 80% guarantee</li>
          <li><strong>L&auml;nder programs:</strong> Each German state has additional programs for SME succession</li>
        </ul>
      </div>

      <h2 className={h2Class}>Other Notable Programs</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong><Link href="/learn/almi-vaekstfonden" className="text-apple-accent hover:underline">Sweden (Almi) &amp; Denmark (V&aelig;kstfonden)</Link>:</strong> Nordic state development banks supporting business succession</li>
          <li><strong><Link href="/learn/mkb-financing-netherlands" className="text-apple-accent hover:underline">Netherlands (MKB)</Link>:</strong> Government-backed SME financing programs</li>
          <li><strong><Link href="/learn/swiss-cantonal-banks" className="text-apple-accent hover:underline">Switzerland (Cantonal Banks)</Link>:</strong> State-backed cantonal banks offering favorable acquisition financing</li>
          <li><strong>Italy (SIMEST, Cassa Depositi e Prestiti):</strong> State investment bank supporting Italian SME acquisitions</li>
          <li><strong>Australia (ESVCLP):</strong> Early Stage Venture Capital Limited Partnerships for qualifying acquisitions</li>
          <li><strong>Japan (JFC):</strong> Japan Finance Corporation supports business succession with low-interest loans</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Government financing programs exist in every major economy to prevent succession failures and preserve SME jobs</li>
          <li>The US SBA 7(a) is the most established program, offering up to $5M with 10&ndash;20% equity requirement</li>
          <li>European programs (KfW, Bpifrance, BDC) often offer even more favorable terms including loan guarantees</li>
          <li>Programs typically offer below-market rates, longer terms, and reduced equity requirements vs. commercial lending</li>
          <li>Qualification criteria, processing time, and program details vary significantly &mdash; engage early in the acquisition process</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA 7(a) Loans for Acquisitions</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">Acquisition Financing</Link></li>
        <li><Link href="/learn/debt-structure-optimization" className="text-apple-accent hover:underline">Debt Structures in Acquisition Finance</Link></li>
        <li><Link href="/learn/seller-financing" className="text-apple-accent hover:underline">Seller Financing</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SBA, <em>7(a) Loan Program Annual Report</em> (2024)</li>
        <li>OECD, <em>Government Support Programs for SME Succession</em> (2024)</li>
        <li>European Commission, <em>Access to Finance for SME Business Transfers</em> (2024)</li>
      </ul>
    </article>
  );
}
