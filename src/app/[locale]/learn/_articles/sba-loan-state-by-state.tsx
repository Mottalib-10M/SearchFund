import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function SBALoanStateByStateArticle() {
  return (
    <article>
      <h1 className={h1Class}>SBA Loans for Acquisitions: State-by-State Guide</h1>
      <div className={bodyClass}>
        <p>The SBA 7(a) loan program is the most popular financing tool for search fund and ETA acquisitions in the United States, providing up to $5M in acquisition financing with favorable terms: 10-year repayment, no balloon payments, and rates tied to prime. However, SBA lending activity varies significantly by state &mdash; driven by differences in the number of active SBA lenders, state-level economic programs, local banking relationships, and deal flow. This guide maps the SBA lending environment for business acquisitions across the US.</p>
      </div>

      <h2 className={h2Class}>Top SBA Lending States</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>California:</strong> Largest SBA lending volume nationally. Deep ecosystem of SBA-preferred lenders, SBDC advisors, and M&amp;A intermediaries.</li>
          <li><strong>Texas:</strong> Second-largest SBA lending state. Strong business-friendly environment with no state income tax. Active community banks.</li>
          <li><strong>Florida:</strong> Major SBA lending hub. No state income tax. High small business density and active broker/advisor ecosystem.</li>
          <li><strong>New York:</strong> Large SBA lending volume driven by NYC metropolitan area. Higher cost of living impacts deal economics.</li>
          <li><strong>Georgia, Ohio, Illinois:</strong> Strong SBA lending activity with active regional and community bank networks.</li>
        </ul>
      </div>

      <h2 className={h2Class}>State-Level Factors</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>State taxes:</strong> States with no income tax (TX, FL, NV, WY, WA, SD, TN, NH) attract more acquisition activity and improve post-acquisition cash flow.</li>
          <li><strong>Transfer taxes:</strong> Some states charge transfer taxes on business sales. Real property transfer taxes can add 1&ndash;4% to deal costs.</li>
          <li><strong>SBA lending density:</strong> Some states have 50+ active SBA acquisition lenders; others have fewer than 10. More lenders means more competition and better terms.</li>
          <li><strong>SBDC support:</strong> Small Business Development Centers provide free advising on SBA loan applications. Quality varies by state.</li>
          <li><strong>State matching programs:</strong> Some states offer supplemental loan programs, tax credits, or grants for business acquisitions. Research state economic development agencies.</li>
          <li><strong>Licensing:</strong> State-specific licensing requirements for regulated businesses (healthcare, insurance, contractors) impact deal timeline and complexity.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Finding SBA Lenders</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>SBA Lender Match:</strong> SBA.gov&apos;s free service connects borrowers with participating lenders. Good starting point but not thorough.</li>
          <li><strong>Preferred lenders:</strong> SBA Preferred Lenders (PLP) can approve loans internally without SBA review, dramatically speeding the process.</li>
          <li><strong>Community banks:</strong> Local community banks often have the strongest appetite for SBA acquisition loans and provide personalized service.</li>
          <li><strong>Credit unions:</strong> Some credit unions actively participate in SBA lending with competitive rates and fees.</li>
          <li><strong>National SBA lenders:</strong> Live Oak Bank, Celtic Bank, Harvest Small Business Finance, and others specialize in SBA acquisition lending nationwide.</li>
          <li><strong>Broker referrals:</strong> Business brokers and M&amp;A advisors maintain relationships with active SBA lenders in their markets.</li>
        </ul>
      </div>

      <h2 className={h2Class}>SBA Loan Tips for Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Apply early:</strong> SBA loan approval takes 30&ndash;90 days. Begin the process as soon as LOI is signed, not after due diligence is complete.</li>
          <li><strong>Multiple applications:</strong> Apply to 2&ndash;3 lenders simultaneously. Terms and appetite vary significantly between lenders.</li>
          <li><strong>Down payment:</strong> SBA requires 10&ndash;20% equity injection. Seller financing can count toward equity in some structures.</li>
          <li><strong>Personal guarantee:</strong> SBA loans require personal guarantees from all owners with 20%+ ownership. Plan for this exposure.</li>
          <li><strong>Industry experience:</strong> Lenders prefer borrowers with relevant industry experience. If lacking, emphasize transferable management skills.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>SBA 7(a) loans provide up to $5M for acquisitions with 10-year terms and rates tied to prime &mdash; the most favorable acquisition financing available</li>
          <li>California, Texas, and Florida have the deepest SBA lending ecosystems; no-income-tax states improve post-acquisition economics</li>
          <li>Apply to 2&ndash;3 lenders simultaneously and start the process at LOI signing &mdash; SBA approval takes 30&ndash;90 days</li>
          <li>SBA Preferred Lenders (PLP) can approve loans without SBA review, dramatically accelerating the process</li>
          <li>National SBA lenders (Live Oak, Celtic, Harvest) provide options for searchers in states with fewer local SBA lenders</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA 7(a) Loans for Acquisitions</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">Acquisition Financing</Link></li>
        <li><Link href="/learn/debt-structure-optimization" className="text-apple-accent hover:underline">Debt Structures</Link></li>
        <li><Link href="/learn/seller-financing" className="text-apple-accent hover:underline">Seller Financing</Link></li>
      </ul>

      <h2 className={h2Class}>Frequently asked questions</h2>

      <h3 className={h3Class}>Which US states are best for SBA acquisition financing?</h3>
      <div className={bodyClass}>
        <p>California, Texas, and Florida consistently lead in SBA 7(a) lending volume, together accounting for roughly 30% of all SBA acquisition loans nationally. These states benefit from deep ecosystems of SBA-preferred lenders, active SBDC advisor networks, and large pools of small businesses available for acquisition. States with no income tax &mdash; including Texas, Florida, Nevada, Wyoming, Washington, South Dakota, and Tennessee &mdash; further improve post-acquisition cash flow by reducing the new owner&rsquo;s overall tax burden. The SBA Office of Advocacy reports that states with 50+ active SBA lenders see significantly more competitive loan terms than states with fewer than 10 participating lenders.</p>
      </div>

      <h3 className={h3Class}>How long does SBA 7(a) loan approval take for a business acquisition?</h3>
      <div className={bodyClass}>
        <p>SBA 7(a) loan approval typically takes 30&ndash;90 days from application to closing, though the timeline varies depending on the lender and deal complexity. SBA Preferred Lenders (PLP) can approve loans internally without SBA headquarters review, often cutting approval time to 30&ndash;45 days. Standard lenders must submit the application to the SBA for review, which adds 2&ndash;4 weeks. Best practice is to begin the SBA application process immediately after signing the letter of intent, not after completing due diligence. Applying to 2&ndash;3 lenders simultaneously is recommended, as terms, appetite, and timelines vary significantly between institutions.</p>
      </div>

      <h3 className={h3Class}>Can SBA loans be combined with seller financing for an acquisition?</h3>
      <div className={bodyClass}>
        <p>Yes, and this is a common structure in search fund and ETA acquisitions. The SBA requires a 10&ndash;20% equity injection from the buyer, and in some structures, seller financing can count toward this equity injection &mdash; provided the seller note is placed on &ldquo;full standby&rdquo; (no payments of principal or interest during the SBA loan term) and is fully subordinated to the SBA loan. The SBA&rsquo;s standby requirements are specific and non-negotiable, so both buyer and seller must ensure the seller note terms comply with SBA guidelines before finalizing the deal structure. National SBA lenders like Live Oak Bank, Celtic Bank, and Harvest Small Business Finance are experienced in structuring these combined financing packages.</p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>SBA, <em>7(a) Loan Program Performance Data</em> (2024)</li>
        <li>SBA Office of Advocacy, <em>Small Business Lending by State</em> (2024)</li>
        <li>NAGGL, <em>Government Guaranteed Lending Guide</em> (2024)</li>
      </ul>
    </article>
  );
}
