import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function ROBSAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Using ROBS (Rollover for Business Startups) to Fund an Acquisition</h1>
      <div className={bodyClass}>
        <p>Rollovers for Business Startups (ROBS) allow entrepreneurs to use retirement funds &mdash; 401(k), IRA, or other qualified plans &mdash; to finance a business acquisition without paying early withdrawal penalties or taxes. While complex, ROBS is a legitimate IRS-recognized structure that has been used to fund thousands of business acquisitions in the United States.</p>
      </div>

      <h2 className={h2Class}>How ROBS Works</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>Form a C-Corporation:</strong> ROBS requires a C-Corp (not an LLC or S-Corp)</li>
          <li><strong>Establish a 401(k) plan:</strong> The C-Corp creates a new 401(k) retirement plan</li>
          <li><strong>Roll over existing retirement funds:</strong> Transfer your existing 401(k)/IRA into the new C-Corp&apos;s 401(k)</li>
          <li><strong>Invest in employer stock:</strong> The 401(k) purchases shares of the C-Corp at fair market value</li>
          <li><strong>Use the capital:</strong> The C-Corp now has cash to acquire a business, buy equipment, or fund operations</li>
        </ol>
        <p>The critical point: your retirement funds buy stock in your company, and the company uses that capital for the acquisition. No taxes, no penalties, no debt.</p>
      </div>

      <h2 className={h2Class}>Advantages of ROBS</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>No tax or penalty:</strong> Unlike early 401(k) withdrawals, ROBS incurs no 10% penalty or income tax</li>
          <li><strong>No debt service:</strong> The capital is equity, not a loan &mdash; no monthly payments to make</li>
          <li><strong>Faster than fundraising:</strong> Can be set up in 3&ndash;6 weeks, much faster than raising equity from investors</li>
          <li><strong>Full ownership:</strong> Unlike <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">search fund investors</Link>, ROBS doesn&apos;t dilute your ownership</li>
          <li><strong>Combinable:</strong> ROBS equity can serve as the buyer&apos;s equity contribution alongside <Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA 7(a) loans</Link> or seller financing</li>
          <li><strong>Minimum amount:</strong> Generally effective with $50,000+ in retirement funds</li>
        </ul>
      </div>

      <h2 className={h2Class}>Risks & Disadvantages</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Retirement at risk:</strong> If the business fails, you lose both the business and your retirement savings</li>
          <li><strong>C-Corp requirement:</strong> C-Corporations face double taxation (corporate tax + dividend tax), though this is mitigated by reasonable salary, QSBS benefits, and the 21% corporate rate</li>
          <li><strong>IRS scrutiny:</strong> ROBS structures are on the IRS&apos;s compliance watchlist; they must be maintained properly</li>
          <li><strong>Ongoing compliance:</strong> Annual 401(k) administration, plan audits (if 100+ participants), and proper valuation of company stock</li>
          <li><strong>Cost:</strong> Setup costs of $5,000&ndash;$7,000 plus ongoing administration of $1,500&ndash;$3,000/year</li>
          <li><strong>Prohibited transaction risk:</strong> Certain actions (personal use of company assets, loans to yourself) can disqualify the entire structure</li>
        </ul>
      </div>

      <h2 className={h2Class}>ROBS + SBA: The Common Structure</h2>
      <div className={bodyClass}>
        <p>The most popular ROBS application combines retirement funds with an SBA loan:</p>
        <ul className={ulClass}>
          <li>ROBS equity injection: 10&ndash;20% of deal value (serves as buyer&apos;s equity contribution)</li>
          <li>SBA 7(a) loan: 70&ndash;80% of deal value</li>
          <li>Seller financing (standby): 5&ndash;10%</li>
        </ul>
        <p>This structure allows you to acquire a business with essentially no out-of-pocket cash, using retirement funds as equity and an SBA loan for the remainder.</p>
      </div>

      <h2 className={h2Class}>Who Should Consider ROBS?</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Self-funded searchers:</strong> ROBS is ideal for self-funded acquisitions where the buyer wants full ownership</li>
          <li><strong>Career changers:</strong> Corporate professionals with significant 401(k) balances transitioning to ETA</li>
          <li><strong>Equity gap:</strong> When you need more equity than you have in liquid savings to meet SBA or bank requirements</li>
          <li><strong>Risk-tolerant entrepreneurs:</strong> Those comfortable putting retirement funds at risk for ownership upside</li>
        </ul>
      </div>

      <h2 className={h2Class}>ROBS Compliance Requirements</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>Annual stock valuation by an independent appraiser</li>
          <li>Form 5500 filing with the DOL/IRS each year</li>
          <li>The 401(k) plan must be open to all eligible employees (not just the owner)</li>
          <li>The owner must take a reasonable salary &mdash; you can&apos;t work for free to avoid payroll taxes</li>
          <li>Company stock must be valued at fair market value for any new participants</li>
        </ul>
      </div>

      <h2 className={h2Class}>ROBS Providers</h2>
      <div className={bodyClass}>
        <p>Several firms specialize in ROBS setup and administration:</p>
        <ul className={ulClass}>
          <li>Guidant Financial (largest ROBS provider)</li>
          <li>Benetrends</li>
          <li>FranFund</li>
          <li>Pango Financial</li>
        </ul>
        <p>Always work with a ROBS-experienced provider and an independent tax attorney to ensure compliance.</p>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>ROBS lets you use retirement funds for acquisition equity without taxes or penalties</li>
          <li>Requires a C-Corporation structure and ongoing 401(k) compliance</li>
          <li>Most commonly combined with SBA 7(a) loans for full acquisition financing</li>
          <li>Your retirement savings are at risk if the business fails &mdash; assess your risk tolerance carefully</li>
          <li>Use an experienced ROBS provider and tax attorney to ensure IRS compliance</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA 7(a) Loans for Business Acquisitions</Link></li>
        <li><Link href="/learn/self-funded-search-sba" className="text-apple-accent hover:underline">Self-Funded Search with SBA Financing</Link></li>
        <li><Link href="/learn/creative-financing" className="text-apple-accent hover:underline">Creative Financing: 10 Ways to Fund an Acquisition</Link></li>
        <li><Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">C-Corp vs. S-Corp vs. LLC</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>IRS, <em>Rollovers as Business Start-Ups (ROBS) Compliance Project</em> (2024)</li>
        <li>Department of Labor, <em>ERISA Advisory Opinions on ROBS Structures</em> (2023)</li>
        <li>Guidant Financial, <em>State of Small Business Report: ROBS Data</em> (2024)</li>
        <li>SBA, <em>Use of Retirement Funds as Equity Injection</em> (2024)</li>
      </ul>
    </article>
  );
}
