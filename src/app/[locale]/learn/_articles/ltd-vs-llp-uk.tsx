import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function LtdvsLLPUKArticle() {
  return (
    <article>
      <h1 className={h1Class}>Ltd vs. LLP: UK Entity Structures for Acquisitions</h1>
      <div className={bodyClass}>
        <p>When acquiring a business in the <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">United Kingdom</Link>, the two most common legal structures you&apos;ll encounter are the Private Limited Company (Ltd) and the Limited Liability Partnership (LLP). Understanding their differences is crucial for structuring your acquisition, managing tax obligations, and planning for governance and exit.</p>
      </div>

      <h2 className={h2Class}>Private Limited Company (Ltd)</h2>
      <div className={bodyClass}>
        <p>The Ltd is the dominant structure for UK business acquisitions:</p>
        <ul className={ulClass}>
          <li><strong>Legal status:</strong> Separate legal entity with its own rights and obligations</li>
          <li><strong>Liability:</strong> Shareholders&apos; liability limited to their shareholding</li>
          <li><strong>Minimum share capital:</strong> &pound;1 (no practical minimum)</li>
          <li><strong>Governance:</strong> At least one director. No minimum number of shareholders. Company secretary optional.</li>
          <li><strong>Taxation:</strong> Corporation Tax on profits (currently 25% for profits over &pound;250K; 19% small profits rate for profits under &pound;50K; marginal relief between &pound;50K&ndash;&pound;250K)</li>
          <li><strong>Share classes:</strong> Can create ordinary, preference, and other share classes with different rights</li>
          <li><strong>Transfer:</strong> Share transfers are simple &mdash; no notarization required (unlike Germany)</li>
          <li><strong>Stamp duty:</strong> 0.5% on share purchases above &pound;1,000</li>
          <li><strong>Companies House:</strong> Annual confirmation statement and accounts must be filed publicly</li>
        </ul>
      </div>

      <h2 className={h2Class}>Limited Liability Partnership (LLP)</h2>
      <div className={bodyClass}>
        <p>LLPs are used primarily for professional services firms:</p>
        <ul className={ulClass}>
          <li><strong>Legal status:</strong> Separate legal entity (unlike traditional partnerships)</li>
          <li><strong>Liability:</strong> Members&apos; liability limited to their capital contribution</li>
          <li><strong>Minimum members:</strong> Two designated members required</li>
          <li><strong>Taxation:</strong> Tax-transparent &mdash; profits are taxed at each member&apos;s individual income tax rate (up to 45% for additional rate taxpayers)</li>
          <li><strong>National Insurance:</strong> Members treated as self-employed &mdash; Class 2 and Class 4 NIC applies</li>
          <li><strong>Profit distribution:</strong> Flexible profit-sharing based on the LLP agreement</li>
          <li><strong>No shares:</strong> Members hold membership interests, not shares &mdash; harder to create preference structures</li>
          <li><strong>No stamp duty:</strong> On transfer of LLP interests (significant advantage for professional services acquisitions)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Differences for Acquirers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Tax treatment:</strong> Ltd pays Corporation Tax (19&ndash;25%); LLP is transparent (members pay income tax up to 45%). For profitable businesses, Ltd is typically more tax-efficient.</li>
          <li><strong>Investor compatibility:</strong> Ltd is strongly preferred. Investors can receive preferred shares, and governance is well-understood. LLP structures are less familiar to search fund investors.</li>
          <li><strong>Debt financing:</strong> Banks strongly prefer lending to Ltd companies. LLPs can be harder to finance.</li>
          <li><strong>Exit:</strong> Ltd shares are easily sold. LLP interests are harder to value and transfer.</li>
          <li><strong>Professional firms:</strong> Many accounting, legal, and consulting firms are structured as LLPs. Acquiring one may require converting to Ltd or maintaining the LLP structure.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Typical UK Acquisition Structure</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>NewCo Ltd (SPV):</strong> Create a new limited company as the acquisition vehicle</li>
          <li><strong>Shareholder structure:</strong> Searcher and investors hold shares (ordinary + any preference shares) in NewCo</li>
          <li><strong>Bank financing:</strong> <Link href="/learn/british-business-bank" className="text-apple-accent hover:underline">EFG-backed</Link> or commercial bank loans flow into NewCo</li>
          <li><strong>Share purchase:</strong> NewCo acquires 100% of the target Ltd shares</li>
          <li><strong>Group relief:</strong> Tax losses can be shared between NewCo and the subsidiary through group relief claims</li>
        </ol>
      </div>

      <h2 className={h2Class}>Tax Planning Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Business Asset Disposal Relief (BADR):</strong> 10% CGT rate on first &pound;1M of qualifying gains (relevant for the seller, and for your eventual exit)</li>
          <li><strong>EMI share options:</strong> Enterprise Management Incentive scheme allows tax-efficient equity for key employees post-acquisition</li>
          <li><strong>R&D tax credits:</strong> Enhanced deductions for qualifying R&D expenditure in the acquired business</li>
          <li><strong>Annual Investment Allowance:</strong> 100% capital allowance on qualifying plant and machinery (up to &pound;1M)</li>
          <li><strong>Interest deductibility:</strong> Acquisition debt interest generally deductible (subject to corporate interest restriction rules at &pound;2M de minimis)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Ltd is the standard structure for UK acquisitions &mdash; preferred by investors, banks, and for governance flexibility</li>
          <li>LLP is common in professional services but less suitable for search fund structures due to investor and financing constraints</li>
          <li>UK share transfers are simple and inexpensive (0.5% stamp duty, no notarization), making exits straightforward</li>
          <li>Corporation Tax rates of 19&ndash;25% are competitive, with the small profits rate benefiting companies under &pound;50K profit</li>
          <li>EMI share options provide a tax-efficient way to incentivize management post-acquisition</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/eta-uk" className="text-apple-accent hover:underline">ETA in the United Kingdom</Link></li>
        <li><Link href="/learn/british-business-bank" className="text-apple-accent hover:underline">British Business Bank & UK Acquisition Financing</Link></li>
        <li><Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Acquisitions</Link></li>
        <li><Link href="/learn/employee-equity-incentives" className="text-apple-accent hover:underline">Employee Equity & Incentive Plans</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>Companies House, <em>Incorporation and Filing Requirements</em> (2024)</li>
        <li>HMRC, <em>Corporation Tax and LLP Taxation Guidance</em> (2024)</li>
        <li>Law Society of England and Wales, <em>Business Acquisition Guide</em> (2024)</li>
        <li>ICAEW, <em>Choosing the Right Business Structure</em> (2024)</li>
      </ul>
    </article>
  );
}
