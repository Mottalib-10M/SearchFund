import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function CDFICommunityLendersArticle() {
  return (
    <article>
      <h1 className={h1Class}>CDFI & Community Lenders for Acquisition Financing (US)</h1>
      <div className={bodyClass}>
        <p>Community Development Financial Institutions (CDFIs) are a powerful but often overlooked financing source for business acquisitions in the United States. These mission-driven lenders provide capital to underserved communities and entrepreneurs who may not qualify for traditional bank financing, making them a valuable complement to <Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA loans</Link> in the acquisition capital stack.</p>
      </div>

      <h2 className={h2Class}>What Are CDFIs?</h2>
      <div className={bodyClass}>
        <p>CDFIs are private financial institutions certified by the U.S. Treasury Department&apos;s CDFI Fund:</p>
        <ul className={ulClass}>
          <li><strong>Mission-driven:</strong> Primary mission is to serve low-income and underserved communities</li>
          <li><strong>Treasury-certified:</strong> Over 1,400 certified CDFIs nationwide</li>
          <li><strong>Types:</strong> Community development banks, credit unions, loan funds, and venture capital funds</li>
          <li><strong>Government-supported:</strong> Receive federal funding through the CDFI Fund, New Markets Tax Credit, and other programs</li>
          <li><strong>Flexible underwriting:</strong> Can approve loans that traditional banks decline, using character-based and community impact criteria</li>
        </ul>
      </div>

      <h2 className={h2Class}>CDFI Lending for Business Acquisitions</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Loan amounts:</strong> Typically $50,000&ndash;$5 million (some go higher for community-impact deals)</li>
          <li><strong>Interest rates:</strong> Generally 5&ndash;10%, higher than SBA rates but lower than alternative lenders</li>
          <li><strong>Terms:</strong> 5&ndash;25 years depending on use of proceeds</li>
          <li><strong>Collateral requirements:</strong> More flexible than banks; may accept lower coverage ratios</li>
          <li><strong>Personal guarantee:</strong> Usually required but negotiable</li>
          <li><strong>Down payment:</strong> Typically 10&ndash;20%, sometimes as low as 5% for qualifying projects</li>
        </ul>
      </div>

      <h2 className={h2Class}>Notable CDFIs for Acquisition Financing</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li><strong>Pacific Community Ventures:</strong> California-focused, strong in small business acquisition lending</li>
          <li><strong>Opportunity Finance Network (OFN):</strong> National network connecting borrowers with local CDFIs</li>
          <li><strong>LISC (Local Initiatives Support Corporation):</strong> One of the largest CDFIs, operating nationwide</li>
          <li><strong>Craft3:</strong> Pacific Northwest CDFI focused on manufacturing and service businesses</li>
          <li><strong>CDC Small Business Finance:</strong> SBA-preferred lender with strong acquisition lending program</li>
          <li><strong>The Reinvestment Fund:</strong> Mid-Atlantic region CDFI with commercial lending capabilities</li>
          <li><strong>Self-Help Credit Union:</strong> Southeast-focused CDFI with significant lending capacity</li>
        </ul>
      </div>

      <h2 className={h2Class}>New Markets Tax Credit (NMTC)</h2>
      <div className={bodyClass}>
        <p>The NMTC program can provide significant benefits for acquisitions in qualifying areas:</p>
        <ul className={ulClass}>
          <li>39% federal tax credit over 7 years on investments in low-income communities</li>
          <li>Can reduce effective borrowing costs by 15&ndash;20%</li>
          <li>Investments must be in qualifying census tracts (check eligibility by address)</li>
          <li>Particularly useful for manufacturing, healthcare, or industrial acquisitions in rural or low-income areas</li>
          <li>Complex structure &mdash; requires working with an experienced CDFI or Community Development Entity (CDE)</li>
        </ul>
      </div>

      <h2 className={h2Class}>When to Use CDFI Financing</h2>
      <div className={bodyClass}>
        <p>CDFI financing is particularly valuable when:</p>
        <ul className={ulClass}>
          <li><strong>SBA loan denied:</strong> CDFIs can approve deals that don&apos;t meet traditional bank or SBA underwriting criteria</li>
          <li><strong>Insufficient collateral:</strong> CDFIs accept lower collateral coverage and consider business cash flow more heavily</li>
          <li><strong>Rural or underserved areas:</strong> Acquisitions in qualifying communities may access special programs and rates</li>
          <li><strong>Gap financing:</strong> CDFIs can provide subordinated debt alongside senior bank/SBA debt</li>
          <li><strong>First-time buyers:</strong> CDFIs are often more willing to lend to entrepreneurs without prior acquisition experience</li>
          <li><strong>Minority/women entrepreneurs:</strong> Many CDFIs have specific programs supporting diverse entrepreneurs</li>
        </ul>
      </div>

      <h2 className={h2Class}>CDFI + SBA Combination</h2>
      <div className={bodyClass}>
        <p>A powerful structure combines CDFI and SBA financing:</p>
        <ul className={ulClass}>
          <li>SBA 7(a) loan: 60&ndash;70% of deal value (senior position)</li>
          <li>CDFI subordinated loan: 10&ndash;15% (fills the equity gap)</li>
          <li>Seller financing: 10&ndash;15% (standby position)</li>
          <li>Buyer equity: 10&ndash;15%</li>
        </ul>
        <p>Some CDFIs are also SBA-preferred lenders, which can streamline the process by having one institution handle both the SBA and subordinated pieces.</p>
      </div>

      <h2 className={h2Class}>How to Find the Right CDFI</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>CDFI Fund locator:</strong> Use the Treasury Department&apos;s CDFI certification search tool to find certified institutions in your area</li>
          <li><strong>OFN member directory:</strong> The Opportunity Finance Network lists CDFIs by state and lending focus</li>
          <li><strong>SBA resource partners:</strong> SCORE mentors and SBDCs can connect you with local CDFIs</li>
          <li><strong>Industry-specific CDFIs:</strong> Some CDFIs specialize in healthcare, manufacturing, or specific sectors</li>
          <li><strong>State-level CDFIs:</strong> Many states have their own CDFI programs and directories</li>
        </ol>
      </div>

      <h2 className={h2Class}>Key Takeaways</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>CDFIs provide flexible acquisition financing when traditional banks or SBA lenders decline</li>
          <li>Over 1,400 certified CDFIs operate across the US, with combined lending capacity in the billions</li>
          <li>CDFI subordinated debt can fill the gap between SBA senior debt and buyer equity</li>
          <li>New Markets Tax Credit can reduce borrowing costs by 15&ndash;20% for qualifying locations</li>
          <li>CDFIs are particularly valuable for first-time buyers, diverse entrepreneurs, and acquisitions in underserved areas</li>
        </ul>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/sba-7a-loans-acquisition" className="text-apple-accent hover:underline">SBA 7(a) Loans for Business Acquisitions</Link></li>
        <li><Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">How to Finance an Acquisition</Link></li>
        <li><Link href="/learn/creative-financing" className="text-apple-accent hover:underline">Creative Financing: 10 Ways to Fund an Acquisition</Link></li>
        <li><Link href="/learn/government-financing-programs-global" className="text-apple-accent hover:underline">Government Financing Programs: Global Overview</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>U.S. Treasury Department, <em>CDFI Fund Annual Report</em> (2024)</li>
        <li>Opportunity Finance Network, <em>Annual Member Survey & Data</em> (2024)</li>
        <li>Federal Reserve Banks, <em>Small Business Credit Survey: CDFI Lending</em> (2024)</li>
        <li>LISC, <em>Community Development Lending Impact Report</em> (2024)</li>
      </ul>
    </article>
  );
}
