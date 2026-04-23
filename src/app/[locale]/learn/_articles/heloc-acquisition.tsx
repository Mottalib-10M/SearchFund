import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function HELOCAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>HELOC & Home Equity for Business Acquisition Down Payment</h1>
      <div className={bodyClass}>
        <p>Using home equity to fund a business acquisition down payment is one of the most accessible &mdash; and most debated &mdash; financing strategies in the self-funded search world. A Home Equity Line of Credit (HELOC) or home equity loan can provide the buyer&apos;s equity contribution needed to close a deal alongside <Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA financing</Link> or traditional bank debt.</p>
      </div>

      <h2 className={h2Class}>HELOC vs. Home Equity Loan</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>HELOC (Line of Credit):</strong> Variable-rate revolving credit line. Draw funds as needed, pay interest only on the amount used. Typically 10-year draw period + 20-year repayment.</li>
          <li><strong>Home Equity Loan:</strong> Fixed-rate lump sum. Receive the full amount upfront with fixed monthly payments over 5&ndash;30 years.</li>
          <li><strong>For acquisitions:</strong> A home equity loan is typically better since you need a lump sum at closing and fixed payments help with financial planning.</li>
        </ul>
      </div>

      <h2 className={h2Class}>How It Works for Acquisitions</h2>
      <div className={bodyClass}>
        <p>A typical HELOC-funded acquisition structure:</p>
        <ul className={ulClass}>
          <li>SBA 7(a) loan: 70&ndash;80% of deal value</li>
          <li>Home equity (buyer&apos;s equity injection): 10&ndash;20%</li>
          <li>Seller financing: 5&ndash;10%</li>
        </ul>
        <p>The SBA requires a 10% equity injection for most acquisitions. A HELOC can serve as this equity contribution, though some SBA lenders may have restrictions on the source of equity.</p>
      </div>

      <h2 className={h2Class}>Advantages</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Fast access:</strong> HELOCs can be approved in 2&ndash;4 weeks, much faster than equity fundraising</li>
          <li><strong>Low cost:</strong> Interest rates typically range from 7&ndash;10% &mdash; lower than mezzanine debt or equity cost</li>
          <li><strong>Full ownership:</strong> No equity dilution &mdash; you retain 100% of the business</li>
          <li><strong>Tax-deductible interest:</strong> If structured properly and the proceeds are used for business purposes, interest may be deductible</li>
          <li><strong>No investor approval needed:</strong> You make all decisions without outside investors</li>
          <li><strong>Established infrastructure:</strong> Every major bank offers HELOCs &mdash; no need for specialized lenders</li>
        </ul>
      </div>

      <h2 className={h2Class}>Risks & Considerations</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Home at risk:</strong> If the business fails and you cannot repay, you could lose your home</li>
          <li><strong>Double leverage:</strong> Your personal balance sheet is leveraged (mortgage + HELOC) alongside the business (SBA loan + seller note)</li>
          <li><strong>Spousal impact:</strong> Both spouses typically must agree to a HELOC, and the family home is at stake</li>
          <li><strong>Variable rates:</strong> HELOC rates fluctuate with the prime rate, creating payment uncertainty</li>
          <li><strong>SBA restrictions:</strong> Some SBA lenders may not accept HELOC proceeds as the equity injection; confirm with your lender upfront</li>
          <li><strong>Debt-to-income ratio:</strong> HELOC payments count against your personal DTI, which may affect future borrowing capacity</li>
        </ul>
      </div>

      <h2 className={h2Class}>Qualification Requirements</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Equity available:</strong> Most lenders allow up to 80&ndash;85% combined loan-to-value (mortgage + HELOC)</li>
          <li><strong>Credit score:</strong> Typically 680+ for competitive rates, 700+ for best terms</li>
          <li><strong>Debt-to-income:</strong> Generally below 43% including the new HELOC payment</li>
          <li><strong>Employment/income:</strong> Lenders want stable income history; timing is important if you&apos;re leaving a job for ETA</li>
        </ul>
        <p><strong>Timing tip:</strong> Apply for the HELOC while still employed with a steady income. It&apos;s much harder to qualify after leaving your job to search full-time.</p>
      </div>

      <h2 className={h2Class}>Alternatives to Consider</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong><Link href="/learn/robs-acquisition" className="text-apple-accent hover:underline">ROBS (Rollover for Business Startups):</Link></strong> Use retirement funds without home risk</li>
          <li><strong>Personal savings:</strong> The safest option but may be insufficient</li>
          <li><strong>Family/friends investment:</strong> Pool equity from trusted individuals</li>
          <li><strong>Search fund investors:</strong> Give up equity but reduce personal financial risk</li>
          <li><strong>Seller financing as equity:</strong> Negotiate a larger seller note to reduce the equity requirement (subject to SBA standby rules)</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>HELOCs provide fast, relatively low-cost capital for acquisition down payments without equity dilution</li>
          <li>The primary risk is that your home serves as collateral &mdash; if the business fails, you could lose both</li>
          <li>Apply for the HELOC while still employed for the best qualification odds</li>
          <li>Confirm with your SBA lender that HELOC proceeds are acceptable as equity injection before proceeding</li>
          <li>Consider the total risk picture: personal leverage + business leverage = concentrated financial risk</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA 7(a) Loans for Business Acquisitions</Link></li>
        <li><Link href="/learn/robs-acquisition" className="text-apple-accent hover:underline">Using ROBS to Fund an Acquisition</Link></li>
        <li><Link href="/learn/self-funded-search-sba" className="text-apple-accent hover:underline">Self-Funded Search with SBA Financing</Link></li>
        <li><Link href="/learn/creative-financing" className="text-apple-accent hover:underline">Creative Financing: 10 Ways to Fund an Acquisition</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SBA, <em>Equity Injection Requirements for 7(a) Loans</em> (2024)</li>
        <li>Federal Reserve, <em>Survey of Consumer Finances: Home Equity Utilization</em> (2024)</li>
        <li>Consumer Financial Protection Bureau, <em>HELOC Guide for Consumers</em> (2024)</li>
        <li>National Association of Realtors, <em>Home Equity Statistics</em> (2024)</li>
      </ul>
    </article>
  );
}
