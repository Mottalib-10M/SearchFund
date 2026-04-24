import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SBA7aLoansArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        SBA 7(a) Loans for Business Acquisitions: Complete Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">17 min read</p>

      <div className={bodyClass}>
        <p>
          The SBA 7(a) loan program is the single most important financing tool
          for small business acquisitions in the United States. Backed by the
          U.S. Small Business Administration, 7(a) loans offer up to $5 million
          in financing with 10-year terms, competitive interest rates, and
          borrower-friendly structures that make business ownership accessible
          to first-time buyers. For search fund entrepreneurs and self-funded
          acquirers, understanding the SBA 7(a) program is not optional &mdash;
          it is foundational.
        </p>
        <p>
          This guide covers everything you need to know: eligibility
          requirements, loan terms, the application process, lender selection,
          common pitfalls, and how the SBA 7(a) fits into the broader{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing
          </Link>{" "}
          capital stack.
        </p>

        <h2 className={h2Class}>What is an SBA 7(a) loan?</h2>
        <p>
          The SBA 7(a) is a government-guaranteed loan program where the SBA
          guarantees 75&ndash;85% of the loan amount to the lender, reducing
          the bank&rsquo;s risk and enabling them to extend credit to borrowers
          who might not qualify for conventional financing. The SBA does not
          lend money directly &mdash; loans are made by SBA-approved lenders
          (banks, credit unions, and non-bank lenders) with the SBA providing
          the guarantee.
        </p>
        <p>
          For business acquisitions, the SBA 7(a) is particularly valuable
          because it allows buyers to acquire profitable businesses with
          relatively low equity injection (typically 10&ndash;20% of the total
          project cost), long repayment terms, and competitive rates.
        </p>

        <h2 className={h2Class}>Key loan terms</h2>
        <ul className={ulClass}>
          <li><strong>Maximum loan amount:</strong> $5,000,000</li>
          <li><strong>Term for business acquisitions:</strong> 10 years (25 years if real estate is included)</li>
          <li><strong>Interest rate:</strong> Variable, typically Prime + 2.25% to Prime + 2.75% (currently ~10&ndash;11% as of 2025)</li>
          <li><strong>SBA guarantee:</strong> 85% for loans up to $150K; 75% for loans above $150K</li>
          <li><strong>SBA guarantee fee:</strong> 0&ndash;3.75% of the guaranteed portion (varies by loan size)</li>
          <li><strong>Down payment / equity injection:</strong> Minimum 10% of total project cost (many lenders require 15&ndash;20%)</li>
          <li><strong>Prepayment penalty:</strong> 5% in year 1, 3% in year 2, 1% in year 3, none thereafter (for terms &ge;15 years only)</li>
          <li><strong>Collateral:</strong> All business assets plus personal guarantee from owners with 20%+ equity</li>
        </ul>

        <h2 className={h2Class}>Eligibility requirements</h2>
        <p>
          Both the buyer and the target business must meet SBA eligibility
          criteria:
        </p>

        <h3 className={h3Class}>Buyer requirements</h3>
        <ul className={ulClass}>
          <li>U.S. citizen or legal permanent resident</li>
          <li>Good personal credit (minimum 680 FICO, 700+ preferred)</li>
          <li>Relevant management or industry experience (does not need to be exact industry match)</li>
          <li>Adequate equity injection (10&ndash;20% of total project cost)</li>
          <li>No recent bankruptcies, foreclosures, or federal debt defaults</li>
          <li>Must operate the business full-time post-acquisition (no passive investors)</li>
        </ul>

        <h3 className={h3Class}>Business requirements</h3>
        <ul className={ulClass}>
          <li>For-profit business operating in the United States</li>
          <li>Meets SBA size standards (varies by industry; generally under $8.5M in average annual revenue or fewer than 500 employees)</li>
          <li>Not in an ineligible industry (lending, speculative real estate, gambling, political lobbying)</li>
          <li>Demonstrates ability to repay the loan from business cash flow (typically requires 1.25x debt service coverage ratio)</li>
          <li>Arm&rsquo;s-length transaction (buyer and seller are not related parties)</li>
        </ul>

        <h2 className={h2Class}>The SBA 7(a) acquisition process</h2>

        <h3 className={h3Class}>Step 1: Pre-qualification (2&ndash;4 weeks)</h3>
        <p>
          Before you submit an LOI on a business, get pre-qualified with an SBA
          lender. This involves sharing your personal financial statement,
          resume, credit report, and a summary of the target business. A good
          lender can give you a preliminary indication of how much they would
          lend within 1&ndash;2 weeks.
        </p>
        <p>
          Pre-qualification gives you credibility with sellers and brokers. A
          buyer who can demonstrate SBA financing capacity closes more deals
          than one who cannot. It also helps you understand the maximum deal
          size you can pursue, informing your{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            deal sourcing strategy
          </Link>.
        </p>

        <h3 className={h3Class}>Step 2: LOI and due diligence (60&ndash;90 days)</h3>
        <p>
          Once you find a target and sign a{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent
          </Link>,
          you begin formal{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>{" "}
          and simultaneously start the SBA loan application. The lender will
          require:
        </p>
        <ul className={ulClass}>
          <li>3 years of business tax returns</li>
          <li>3 years of personal tax returns (buyer)</li>
          <li>Year-to-date interim financial statements</li>
          <li>Business plan or acquisition summary</li>
          <li>Financial projections (3&ndash;5 years)</li>
          <li>Asset purchase agreement or letter of intent</li>
          <li>Personal financial statement (SBA Form 413)</li>
          <li>Schedule of business debts and collateral</li>
        </ul>

        <h3 className={h3Class}>Step 3: Underwriting (3&ndash;6 weeks)</h3>
        <p>
          The lender&rsquo;s underwriting team analyzes the deal, focusing on:
          historical cash flow, debt service coverage, management capability,
          collateral coverage, and industry risk. They may request additional
          information, revised projections, or a{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings report
          </Link>{" "}
          for larger deals.
        </p>

        <h3 className={h3Class}>Step 4: Commitment and closing (2&ndash;4 weeks)</h3>
        <p>
          Once approved, the lender issues a commitment letter outlining final
          terms and conditions. Legal documents are prepared, the SBA
          authorization is obtained, and the loan closes simultaneously with
          the business acquisition. Total timeline from LOI to close is
          typically 75&ndash;120 days.
        </p>

        <h2 className={h2Class}>How to structure the capital stack</h2>
        <p>
          An SBA 7(a) loan rarely funds 100% of a business acquisition. The
          typical capital stack for an SBA-financed deal:
        </p>
        <ul className={ulClass}>
          <li><strong>SBA 7(a) loan:</strong> 60&ndash;75% of total project cost</li>
          <li><strong>Seller financing:</strong> 10&ndash;20% (most SBA lenders allow seller notes on standby for 24 months)</li>
          <li><strong>Buyer equity injection:</strong> 10&ndash;20% (cash, retirement funds via ROBS, or investor capital)</li>
        </ul>
        <p>
          For example, a $3M acquisition might be financed with a $2.1M SBA
          loan (70%), a $450K seller note (15%), and $450K buyer equity (15%).
          The{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller financing
          </Link>{" "}
          component is critical because it reduces the equity needed and signals
          the seller&rsquo;s confidence in the business.
        </p>

        <h2 className={h2Class}>Choosing the right SBA lender</h2>
        <p>
          Not all SBA lenders are created equal. The differences in experience,
          speed, and flexibility can make or break your deal:
        </p>
        <ul className={ulClass}>
          <li><strong>SBA Preferred Lenders (PLP):</strong> These lenders have delegated authority to approve SBA loans without sending them to the SBA for review, saving 2&ndash;4 weeks. Always prefer PLP lenders for acquisitions.</li>
          <li><strong>Acquisition experience:</strong> Choose lenders who regularly finance business acquisitions (not just startups or real estate). Ask how many acquisition loans they closed in the past 12 months.</li>
          <li><strong>Industry expertise:</strong> Some lenders specialize in specific industries (healthcare, hospitality, manufacturing) and understand the unique risks and cash flow patterns.</li>
          <li><strong>Deal size comfort:</strong> Ensure the lender is comfortable with your deal size. A $4M SBA loan at a community bank may get more attention than the same loan at a large national bank.</li>
          <li><strong>Seller note flexibility:</strong> Some lenders require seller notes to be on full standby (no payments for 24 months); others are more flexible. This can be a dealbreaker for sellers.</li>
        </ul>

        <h2 className={h2Class}>Common SBA 7(a) pitfalls</h2>

        <h3 className={h3Class}>Equity injection shortfall</h3>
        <p>
          The most common reason SBA acquisition loans get denied is
          insufficient equity injection. Lenders want to see that the buyer has
          &ldquo;skin in the game.&rdquo; If you are short on cash, options
          include: bringing in a minority equity partner, using a Rollover for
          Business Startups (ROBS) to access 401(k) funds, or negotiating a
          larger seller note.
        </p>

        <h3 className={h3Class}>Cash flow coverage concerns</h3>
        <p>
          The business must demonstrate sufficient cash flow to service the
          debt. Lenders typically require a 1.25x debt service coverage ratio
          (DSCR), meaning the business generates $1.25 in free cash flow for
          every $1 in annual loan payments. Businesses with volatile or
          declining revenue may not qualify.
        </p>

        <h3 className={h3Class}>Goodwill limitations</h3>
        <p>
          When the purchase price significantly exceeds the fair market value of
          tangible assets, the difference is classified as &ldquo;goodwill.&rdquo;
          Some lenders cap goodwill at 50&ndash;60% of the loan amount, which
          can limit financing for asset-light businesses like services or SaaS
          companies.
        </p>

        <h3 className={h3Class}>Change of ownership triggers</h3>
        <p>
          Some business contracts, leases, or licenses have change-of-ownership
          provisions that must be addressed before the SBA loan can close.
          Identify these early in{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>{" "}
          to avoid closing delays.
        </p>

        <h2 className={h2Class}>SBA 7(a) vs. other financing options</h2>
        <ul className={ulClass}>
          <li><strong>SBA 7(a) vs. conventional bank loans:</strong> SBA loans offer longer terms (10 years vs. 5&ndash;7), lower equity requirements, and broader eligibility. Conventional loans may have lower rates but stricter qualification criteria.</li>
          <li><strong>SBA 7(a) vs. SBA 504:</strong> The 504 program is designed for real estate and equipment, not business acquisitions. Use 7(a) for acquisitions and 504 for real estate-heavy deals.</li>
          <li><strong>SBA 7(a) vs. search fund equity:</strong> SBA debt is cheaper than equity (interest vs. ownership dilution). Many{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
              self-funded searchers
            </Link>{" "}
            maximize SBA financing to retain more equity.</li>
        </ul>

        <h2 className={h2Class}>European alternatives to SBA financing</h2>
        <p>
          For acquirers operating in Europe, similar government-backed programs
          exist:
        </p>
        <ul className={ulClass}>
          <li><strong>France:</strong> Bpifrance Transmission-Reprise offers subsidized loans and guarantees for business succession. See{" "}
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
              ETA in France
            </Link>.</li>
          <li><strong>Germany:</strong> KfW ERP programs provide favorable financing for Nachfolge (succession) transactions. See{" "}
            <Link href="/learn/eta-germany" className="text-apple-accent hover:underline">
              ETA in Germany
            </Link>.</li>
          <li><strong>UK:</strong> British Business Bank offers guarantee schemes and financing support for SME acquisitions. See{" "}
            <Link href="/learn/eta-uk" className="text-apple-accent hover:underline">
              ETA in the UK
            </Link>.</li>
          <li><strong>Spain:</strong> ICO provides credit lines for business transfers and entrepreneurship.</li>
        </ul>

        <h2 className={h2Class}>Tips for a successful SBA acquisition loan</h2>
        <ul className={ulClass}>
          <li>Start the lender relationship early &mdash; pre-qualify before submitting LOIs</li>
          <li>Prepare a professional acquisition summary with clear projections and a compelling management narrative</li>
          <li>Have your personal financial documents organized and ready (tax returns, bank statements, credit report)</li>
          <li>Budget 10&ndash;15% of the loan amount for closing costs (guarantee fees, legal, appraisals)</li>
          <li>Negotiate{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller financing
            </Link>{" "}
            into every deal &mdash; it reduces your equity need and improves lender confidence</li>
          <li>Work with a CPA experienced in SBA acquisitions to prepare your projections and{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
              tax planning
            </Link></li>
          <li>Be transparent with your lender about any credit issues, business risks, or unusual deal terms</li>
        </ul>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Can I use an SBA 7(a) loan to buy a business with significant goodwill?</h3>
        <p>
          Yes, but goodwill limitations vary by lender. According to the SBA&rsquo;s Standard Operating Procedures, there is no formal SBA cap on goodwill as a percentage of the loan, but individual lenders often impose their own limits &mdash; typically capping goodwill at 50&ndash;60% of the total loan amount. Asset-light businesses like professional services firms, SaaS companies, and consulting practices often have goodwill representing 70&ndash;80% of the purchase price, which can make financing more challenging. The workaround is to find SBA Preferred Lenders (PLP) with experience in your target industry who are comfortable with higher goodwill ratios, and to supplement the SBA loan with seller financing to reduce the lender&rsquo;s goodwill exposure.
        </p>

        <h3 className={h3Class}>How long does the SBA 7(a) loan process take from application to closing?</h3>
        <p>
          The typical timeline from LOI to closing with SBA financing is 75&ndash;120 days. According to SBA lending data, the median approval time for SBA Preferred Lenders (PLP) is 3&ndash;4 weeks from complete application submission, compared to 6&ndash;8 weeks for non-PLP lenders who must submit to SBA for review. The full process breaks down as: pre-qualification (2&ndash;4 weeks), LOI and due diligence (concurrent, 60&ndash;90 days), underwriting (3&ndash;6 weeks), and commitment to closing (2&ndash;4 weeks). The most common sources of delay are incomplete documentation, unresolved title or lease issues, and environmental review requirements. Working with an SBA-experienced CPA and attorney can compress timelines by ensuring documentation is complete before submission.
        </p>

        <h3 className={h3Class}>What credit score do I need for an SBA acquisition loan?</h3>
        <p>
          While the SBA does not mandate a minimum FICO score, most SBA lenders require a minimum of 680, with 700+ preferred for acquisition loans. According to data from the National Association of Government Guaranteed Lenders (NAGGL), borrowers with FICO scores above 720 receive approval rates approximately 40% higher than those in the 680&ndash;700 range, and may qualify for more favorable terms including lower equity injection requirements. Beyond the credit score, lenders evaluate the borrower&rsquo;s relevant management experience, personal financial statement (net worth and liquidity), and the target business&rsquo;s cash flow capacity. A strong borrower profile with industry-relevant experience can partially offset a lower credit score.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>U.S. Small Business Administration &mdash; <em>7(a) Loan Program Standard Operating Procedures</em>, SBA.gov. Official guidance on eligibility, loan terms, guarantee fees, and lender requirements.</li>
          <li>National Association of Government Guaranteed Lenders (NAGGL) &mdash; <em>SBA Lending Performance Data</em>, 2024. Approval rates, default statistics, and borrower profile benchmarks for SBA acquisition loans.</li>
          <li>Stanford Graduate School of Business &mdash; <em>Search Fund Study: Selected Observations</em>, 2024 edition. Data on SBA financing usage patterns, capital stack composition, and self-funded searcher financing strategies.</li>
        </ul>
      </div>
    </article>
  );
}
