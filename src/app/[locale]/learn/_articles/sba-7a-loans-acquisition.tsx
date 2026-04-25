import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SBA7aLoansAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        SBA 7(a) Loans for Business Acquisitions: Complete Guide
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          For aspiring business owners in the United States, the SBA 7(a) loan
          program is the single most powerful tool for financing a small business
          acquisition. Backed by the federal government, SBA 7(a) loans allow
          first-time buyers to acquire profitable companies with as little as 10%
          of their own capital, something that would be impossible with
          conventional bank financing. Whether you&rsquo;re a{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded searcher
          </Link>{" "}
          looking to buy your first business or an experienced operator pursuing
          entrepreneurship through acquisition, understanding the SBA 7(a)
          program inside and out is essential. This guide covers everything from
          eligibility and loan terms to the 80/10/10 deal structure, common
          pitfalls, and the specific industries where SBA financing works best.
        </p>

        <h2 className={h2Class}>What is the SBA 7(a) loan program?</h2>
        <p>
          The Small Business Administration 7(a) loan program is a
          government-backed lending initiative designed to help Americans buy,
          start, and grow small businesses. The SBA does not lend money
          directly, instead, it guarantees 75-85% of the loan
          amount to an approved lender (a bank, credit union, or non-bank
          lending institution), which dramatically reduces the lender&rsquo;s
          risk. Because the government absorbs most of the downside, lenders
          are willing to extend credit on terms that would be impossible in a
          purely commercial transaction: lower equity requirements, longer
          repayment periods, and no balloon payments.
        </p>
        <p>
          For business acquisitions specifically, the SBA 7(a) is the dominant
          financing tool. According to SBA data, acquisition loans account for a
          significant and growing share of all 7(a) lending activity. The
          program&rsquo;s sweet spot is businesses valued between $500K and $5M
          exactly the range where most search fund and
          entrepreneurship-through-acquisition deals occur.
        </p>

        <h2 className={h2Class}>Key loan terms at a glance</h2>
        <ul className={ulClass}>
          <li><strong>Maximum loan amount:</strong> $5,000,000</li>
          <li><strong>SBA guarantee:</strong> 85% for loans up to $150K; 75% for loans above $150K</li>
          <li><strong>Repayment term:</strong> 10 years for business acquisitions; up to 25 years if commercial real estate is included in the purchase</li>
          <li><strong>Interest rate:</strong> Variable, tied to Prime Rate + 2.25% to 2.75% (the spread depends on loan size and term)</li>
          <li><strong>Amortization:</strong> Fully amortizing with no balloon payments, a major advantage over conventional commercial loans</li>
          <li><strong>Equity injection:</strong> Minimum 10% of total project cost from the buyer (can be higher depending on the lender and deal risk profile)</li>
          <li><strong>Collateral:</strong> All business assets pledged, plus personal guarantee from anyone with 20%+ ownership</li>
          <li><strong>SBA guarantee fee:</strong> 0-3.75% of the guaranteed portion, paid at closing (varies by loan size and maturity)</li>
          <li><strong>Prepayment penalty:</strong> Only on loans with terms of 15+ years: 5% in year 1, 3% in year 2, 1% in year 3, none thereafter</li>
        </ul>

        <h2 className={h2Class}>Eligibility requirements</h2>
        <p>
          Both the buyer and the target business must satisfy SBA eligibility
          criteria. Failing to meet even one requirement can disqualify the
          entire deal.
        </p>

        <h3 className={h3Class}>Buyer eligibility</h3>
        <ul className={ulClass}>
          <li><strong>Citizenship:</strong> U.S. citizen or lawful permanent resident</li>
          <li><strong>Credit score:</strong> Minimum 680 FICO score (most competitive lenders prefer 700+)</li>
          <li><strong>Management experience:</strong> Relevant management or industry experience, you don&rsquo;t need to have run the exact same type of business, but you need to demonstrate transferable leadership skills</li>
          <li><strong>Equity injection:</strong> At least 10% of the total project cost in cash or eligible sources (retirement funds via ROBS, home equity, or investor capital)</li>
          <li><strong>Clean background:</strong> No recent bankruptcies (within 3 years), no federal debt defaults, no criminal history that would concern a lender</li>
          <li><strong>Active management:</strong> You must operate the business full-time post-acquisition, SBA loans are not for passive investors</li>
        </ul>

        <h3 className={h3Class}>Business eligibility</h3>
        <ul className={ulClass}>
          <li><strong>For-profit and US-based:</strong> The business must be a for-profit entity operating primarily in the United States</li>
          <li><strong>SBA size standards:</strong> Must qualify as &ldquo;small&rdquo; under SBA size standards (varies by NAICS code; generally under $8.5M in average annual revenue or fewer than 500 employees)</li>
          <li><strong>Owner-occupied:</strong> If real estate is included, you must occupy at least 51% of the space</li>
          <li><strong>Excluded industries:</strong> Lending institutions, life insurance companies, speculative real estate businesses, gambling operations, and political/lobbying organizations are ineligible</li>
          <li><strong>Cash flow viability:</strong> The business must demonstrate the ability to repay the loan from operating cash flow (typically requiring a 1.25x debt service coverage ratio)</li>
          <li><strong>Arm&rsquo;s-length transaction:</strong> Buyer and seller cannot be related parties</li>
        </ul>

        <h2 className={h2Class}>The self-funded search structure: 80/10/10</h2>
        <p>
          The SBA 7(a) loan is the foundation of the{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded search
          </Link>{" "}
          model, a path to business ownership that has grown dramatically
          over the past decade. The canonical deal structure is known as
          &ldquo;80/10/10&rdquo;:
        </p>
        <ul className={ulClass}>
          <li><strong>80% SBA 7(a) debt:</strong> The SBA-guaranteed loan covers the vast majority of the purchase price, providing senior secured financing at competitive rates with a 10-year fully amortizing term</li>
          <li><strong>10% seller note on standby:</strong> The seller agrees to defer 10% of the purchase price as a{" "}
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              seller note
            </Link>{" "}
            that is placed on full standby for at least 24 months (no principal or interest payments during this period)</li>
          <li><strong>10% buyer equity injection:</strong> Your personal capital contribution, representing the minimum &ldquo;skin in the game&rdquo; that the SBA and lender require</li>
        </ul>
        <p>
          The beauty of this structure is that it allows an entrepreneur to
          acquire a $3M business with just $300K of personal capital , 
          and retain 100% of the equity. There are no outside investors, no
          board of directors, and no step-up dilution. You own it all. Compare
          this to a traditional search fund where the searcher typically ends
          up with 20-30% of the equity after investor step-ups and
          promotes.
        </p>

        <h3 className={h3Class}>Example capital stack: $2.5M acquisition</h3>
        <ul className={ulClass}>
          <li>SBA 7(a) loan: $2,000,000 (80%), Prime + 2.75%, 10-year term</li>
          <li>Seller note on standby: $250,000 (10%), 5% interest, 5-year term, 24-month full standby</li>
          <li>Buyer equity: $250,000 (10%), personal cash or eligible sources</li>
          <li>Estimated monthly SBA payment: ~$26,400</li>
          <li>Required annual free cash flow: ~$396K+ (to maintain 1.25x DSCR)</li>
        </ul>

        <h2 className={h2Class}>The application process step by step</h2>
        <p>
          Navigating an SBA loan application can be daunting the first time.
          Here is the process broken down into clear phases:
        </p>

        <h3 className={h3Class}>Step 1: Find an SBA Preferred Lender</h3>
        <p>
          Not all SBA lenders are equal. SBA Preferred Lending Partners (PLPs)
          have delegated authority to approve loans without sending the
          application to the SBA for review, which saves 2-4 weeks in
          processing time. Always prioritize PLP lenders for acquisitions.
          Look for lenders who specifically focus on business acquisitions
          rather than startups or real estate. Key questions to ask a
          prospective lender:
        </p>
        <ol className={olClass}>
          <li>How many SBA acquisition loans did you close in the past 12 months?</li>
          <li>What is your typical timeline from application to closing?</li>
          <li>Do you require full standby on the seller note, or are you flexible?</li>
          <li>What is the minimum credit score and equity injection you require?</li>
          <li>Do you have experience in my target industry?</li>
        </ol>

        <h3 className={h3Class}>Step 2: Prepare your application package</h3>
        <p>
          A complete SBA loan application for a business acquisition requires
          the following documents:
        </p>
        <ul className={ulClass}>
          <li><strong>Business plan:</strong> A detailed acquisition summary explaining why you&rsquo;re buying this business, your management strategy, and financial projections for 3-5 years post-acquisition</li>
          <li><strong>3 years of business tax returns:</strong> The target company&rsquo;s federal tax returns for the most recent 3 fiscal years</li>
          <li><strong>Year-to-date financial statements:</strong> Current profit &amp; loss statement and balance sheet</li>
          <li><strong>Personal financial statement:</strong> SBA Form 413, detailing your personal assets, liabilities, and net worth</li>
          <li><strong>Personal tax returns:</strong> Your last 3 years of personal federal tax returns</li>
          <li><strong>Resume:</strong> Highlighting relevant management and industry experience</li>
          <li><strong>Letter of Intent or Purchase Agreement:</strong> The signed LOI or APA showing the deal terms</li>
          <li><strong>Debt schedule:</strong> All existing personal and business debts</li>
        </ul>

        <h3 className={h3Class}>Step 3: Underwriting and approval (3-6 weeks)</h3>
        <p>
          The lender&rsquo;s underwriting team will analyze the deal across
          several dimensions: historical cash flow trends, adjusted EBITDA and
          debt service coverage, your management capability, collateral
          coverage, industry risk, and the reasonableness of your projections.
          They may request a{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
            Quality of Earnings
          </Link>{" "}
          report for deals above $2M, or a formal business valuation. Be
          responsive to information requests, slow responses are the
          number one cause of underwriting delays.
        </p>

        <h3 className={h3Class}>Step 4: Commitment, documentation, and closing (2-4 weeks)</h3>
        <p>
          Once the lender approves the loan, they issue a commitment letter
          detailing the final terms and conditions. Legal counsel prepares the
          loan documents, the SBA authorization is obtained, and the loan
          closes simultaneously with the business acquisition. Total timeline
          from LOI to close is typically 75-120 days.
        </p>

        <h2 className={h2Class}>SBA 7(a) vs. conventional loans</h2>
        <p>
          Understanding the differences between SBA-backed and conventional
          bank financing helps you appreciate why SBA loans dominate the
          small business acquisition market:
        </p>
        <ul className={ulClass}>
          <li><strong>Equity requirement:</strong> SBA requires 10-20% equity injection vs. 25-40% for conventional acquisition loans</li>
          <li><strong>Repayment term:</strong> SBA offers 10-year fully amortizing terms vs. conventional loans of 5-7 years, often with balloon payments</li>
          <li><strong>Interest rate:</strong> SBA rates (Prime + 2.25-2.75%) are comparable to or slightly above conventional rates, but the longer term and full amortization make monthly payments significantly lower</li>
          <li><strong>Qualification:</strong> SBA&rsquo;s government guarantee makes lenders more willing to approve first-time buyers and businesses with goodwill-heavy valuations</li>
          <li><strong>Collateral flexibility:</strong> SBA does not require full collateral coverage, the guarantee fills the gap. Conventional lenders typically require 100% collateral coverage</li>
          <li><strong>Balloon payments:</strong> SBA 7(a) loans never have balloon payments. Conventional loans frequently mature in 5-7 years with a large balance due at maturity, creating refinancing risk</li>
          <li><strong>Speed:</strong> Conventional loans can close faster (30-45 days) vs. SBA (60-90 days), but the terms are far less favorable for the buyer</li>
        </ul>

        <h2 className={h2Class}>Industries that work well with SBA financing</h2>
        <p>
          SBA lenders have strong appetite for businesses with predictable,
          recurring cash flows and low capital expenditure requirements. The
          following industries are particularly well-suited for SBA-financed
          acquisitions:
        </p>
        <ul className={ulClass}>
          <li><strong>Service businesses:</strong> HVAC, plumbing, electrical, pest control, landscaping, and other home services businesses generate strong recurring revenue, have loyal customer bases, and require relatively low capex. These are the bread and butter of SBA acquisition lending</li>
          <li><strong>Healthcare practices:</strong> Dental practices, veterinary clinics, optometry offices, and physical therapy practices produce stable cash flows with high margins. Many SBA lenders have dedicated healthcare teams</li>
          <li><strong>Home services:</strong> Cleaning, roofing, restoration, and property maintenance companies benefit from essential-service demand and repeat customers</li>
          <li><strong>B2B services:</strong> IT managed services, staffing agencies, accounting firms, and digital marketing agencies generate contractual recurring revenue that lenders love</li>
          <li><strong>Distribution and logistics:</strong> Established distribution companies with long-standing supplier and customer relationships offer predictable cash flows</li>
          <li><strong>Light manufacturing:</strong> Businesses with specialized equipment and long-term customer contracts provide both asset collateral and cash flow predictability</li>
        </ul>
        <p>
          Industries that are more challenging for SBA financing include
          restaurants (high failure rates), retail (declining foot traffic),
          construction (cyclicality and project-based revenue), and any business
          with significant customer concentration. For more on industry
          selection, see our guide to{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing
          </Link>{" "}
          and the broader capital stack.
        </p>

        <h2 className={h2Class}>Seller note on standby: rules and negotiation</h2>
        <p>
          The seller note is a critical component of the SBA acquisition
          structure. SBA rules impose specific requirements on how seller
          notes must be structured when combined with an SBA 7(a) loan:
        </p>
        <ul className={ulClass}>
          <li><strong>Full standby for 24 months:</strong> The seller note must be on full standby for a minimum of 24 months from the date of closing. This means zero payments, no principal and no interest, during the standby period. Interest accrues and is capitalized into the note balance</li>
          <li><strong>Subordination:</strong> The seller note must be fully subordinated to the SBA loan. The seller has no claim on business assets or cash flows until the SBA debt is satisfied</li>
          <li><strong>No security interest:</strong> The seller cannot take a lien on business assets to secure the note. The SBA lender holds the first (and typically only) security interest</li>
          <li><strong>Reasonable terms post-standby:</strong> After the 24-month standby period, the seller note typically converts to a standard amortizing note over 3-5 years at 5-7% interest</li>
        </ul>
        <p>
          Negotiating the seller note requires sensitivity. Many sellers are
          unfamiliar with SBA standby requirements and balk at the idea of
          receiving no payments for two years. Effective strategies include:
        </p>
        <ul className={ulClass}>
          <li>Frame the 80% cash at closing as the primary benefit, they&rsquo;re receiving the vast majority of the purchase price on day one</li>
          <li>Explain that the standby note is a standard SBA requirement, not a personal request, it&rsquo;s simply how the program works</li>
          <li>Offer a slightly higher interest rate on the note (6-7% instead of 4-5%) to compensate for the standby period</li>
          <li>Provide quarterly financial reports during the standby period so the seller has visibility into business performance</li>
        </ul>
        <p>
          For a deeper dive into structuring seller notes, see our{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller financing guide
          </Link>.
        </p>

        <h2 className={h2Class}>Common pitfalls and how to avoid them</h2>

        <h3 className={h3Class}>Change of ownership rules</h3>
        <p>
          Many business contracts, commercial leases, franchise agreements,
          and professional licenses contain change-of-ownership clauses that
          are triggered when the business is sold. If a key lease or contract
          requires landlord or counterparty consent for an ownership change,
          and that consent is not obtained before closing, the SBA loan can
          be delayed or denied. Identify all change-of-ownership triggers
          early in due diligence and begin the consent process immediately.
        </p>

        <h3 className={h3Class}>Personal guarantee exposure</h3>
        <p>
          Every SBA 7(a) borrower with 20% or more ownership must sign a
          personal guarantee, meaning your personal assets (home,
          savings, investments) are on the line if the business fails and
          cannot repay the loan. This is the most significant risk of the
          SBA acquisition model. Mitigate this risk by:
        </p>
        <ul className={ulClass}>
          <li>Only acquiring businesses with strong, stable cash flows and a comfortable debt service coverage margin (1.5x+ is ideal, 1.25x is the minimum)</li>
          <li>Building a cash reserve of 3-6 months of debt service payments before or immediately after closing</li>
          <li>Considering an umbrella insurance policy to protect personal assets</li>
          <li>Understanding that the personal guarantee is unlimited, there is no cap on your personal liability</li>
        </ul>

        <h3 className={h3Class}>Collateral shortfalls</h3>
        <p>
          Service businesses and other asset-light companies often have
          limited tangible collateral. While the SBA does not require full
          collateral coverage (the government guarantee fills the gap),
          individual lenders may have their own collateral policies. Some
          lenders will require you to pledge personal real estate if business
          collateral is insufficient. Ask about collateral requirements
          upfront to avoid surprises.
        </p>

        <h3 className={h3Class}>Goodwill concentration</h3>
        <p>
          When the purchase price substantially exceeds the fair market value
          of tangible business assets, the difference is classified as
          goodwill. Some SBA lenders cap goodwill at 50-60% of the
          loan amount. Asset-light businesses, particularly service
          companies and SaaS businesses, often have goodwill
          representing 80%+ of the purchase price, which can limit financing
          options. Work with a lender experienced in financing
          goodwill-heavy deals.
        </p>

        <h3 className={h3Class}>Underestimating closing costs</h3>
        <p>
          SBA acquisition loans involve significant closing costs beyond the
          purchase price: the SBA guarantee fee (up to 3.75% of the
          guaranteed portion), legal fees, appraisal and valuation fees,
          environmental assessments (if real estate is involved), and
          miscellaneous lender fees. Budget 5-10% of the loan amount
          for closing costs and factor this into your total project cost when
          calculating the equity injection.
        </p>

        <h2 className={h2Class}>Post-closing requirements</h2>
        <p>
          Closing the SBA loan is not the end of your obligations to the
          lender. Post-closing, you must comply with ongoing requirements:
        </p>
        <ul className={ulClass}>
          <li><strong>Financial reporting:</strong> Most SBA lenders require annual financial statements (and sometimes quarterly) for the life of the loan. Some require CPA-reviewed or audited statements</li>
          <li><strong>Insurance:</strong> Maintain adequate business insurance, including property, liability, key person, and business interruption coverage as required by the lender</li>
          <li><strong>Tax compliance:</strong> Keep all federal, state, and local taxes current. Tax delinquencies can trigger a default under the loan agreement</li>
          <li><strong>No change in ownership:</strong> You cannot sell, transfer, or substantially change the ownership structure without SBA and lender approval</li>
          <li><strong>Collateral maintenance:</strong> Maintain the condition and value of pledged collateral. Notify the lender before disposing of any significant business assets</li>
          <li><strong>Debt service coverage:</strong> Maintain the minimum DSCR specified in your loan covenants. A sustained decline in cash flow can trigger covenant violations and lender intervention</li>
          <li><strong>Life insurance:</strong> Many lenders require the borrower to maintain a life insurance policy with the lender as beneficiary, covering at least the loan balance</li>
        </ul>

        <h2 className={h2Class}>
          When SBA 7(a) is the right choice, and when it isn&rsquo;t
        </h2>

        <h3 className={h3Class}>SBA 7(a) is ideal when:</h3>
        <ul className={ulClass}>
          <li>You&rsquo;re acquiring a US-based small business valued at $500K-$5M</li>
          <li>The business generates stable, predictable cash flows with DSCR above 1.25x</li>
          <li>You want to retain 100% ownership and avoid investor dilution</li>
          <li>You have 10-20% of the total project cost available as equity</li>
          <li>The seller is willing to provide a note on standby</li>
          <li>You plan to actively manage the business full-time</li>
        </ul>

        <h3 className={h3Class}>SBA 7(a) may not be right when:</h3>
        <ul className={ulClass}>
          <li>The business is valued above $5M (exceeds SBA loan cap)</li>
          <li>Cash flows are volatile, project-based, or declining</li>
          <li>The business is in an SBA-ineligible industry</li>
          <li>You need to close in under 45 days (SBA timeline is typically 60-90 days)</li>
          <li>You&rsquo;re not comfortable with a personal guarantee on 80%+ use</li>
          <li>The target is outside the United States</li>
        </ul>
        <p>
          For deals that don&rsquo;t fit the SBA mold, explore the full
          range of{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing options
          </Link>{" "}
          including conventional bank debt, mezzanine financing, and{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            traditional search fund equity
          </Link>.
        </p>

        <h2 className={h2Class}>The bottom line</h2>
        <p>
          The SBA 7(a) loan program has democratized business ownership in the
          United States. It allows ambitious, capable operators to acquire
          profitable companies with minimal personal capital while retaining
          full ownership, a proposition that is virtually impossible
          with any other financing structure. But SBA financing is not free
          money. The personal guarantee means you are putting your financial
          life on the line, and the 80% use leaves little room for error.
          Success requires disciplined target selection, rigorous due
          diligence, conservative financial projections, and a deep
          understanding of the program&rsquo;s rules and requirements.
        </p>
        <p>
          Start by building relationships with experienced SBA Preferred
          Lenders, familiarize yourself with the documentation requirements,
          and model the 80/10/10 structure on real deals. For more on how
          SBA financing fits into the broader{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            entrepreneurship through acquisition
          </Link>{" "}
          market, explore our guides on{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            acquisition financing
          </Link>,{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            seller financing
          </Link>, and{" "}
          <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
            self-funded vs. traditional search funds
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much equity do I need for an SBA 7(a) acquisition loan?</h3>
        <p>
          The SBA requires a minimum equity injection of 10% of the total project cost (purchase price plus closing costs and working capital). For a $2.5 million acquisition with $200,000 in closing costs, the minimum equity requirement would be approximately $270,000. According to SBA lending data, this equity can come from personal savings, home equity, retirement fund rollovers (ROBS programs), gifts from family, or investor capital, though lenders may require a larger contribution (15-20%) if the business has volatile cash flows, high goodwill relative to tangible assets, or if the buyer has limited management experience. The 80/10/10 structure (80% SBA loan, 10% seller note on standby, 10% buyer equity) is the canonical self-funded search deal structure and allows an entrepreneur to acquire a $3 million business with just $300,000 of personal capital while retaining 100% ownership.
        </p>

        <h3 className={h3Class}>What is the seller note standby requirement and why does it matter?</h3>
        <p>
          SBA rules require that any seller financing combined with an SBA 7(a) loan must be placed on full standby for a minimum of 24 months from closing, meaning zero payments of principal or interest during that period. Interest accrues and is capitalized into the note balance. According to the SBA Standard Operating Procedures, the standby requirement exists to ensure that all available cash flow services the senior SBA debt first, protecting taxpayers who ultimately guarantee the loan. The seller note must be fully subordinated to the SBA loan, and the seller cannot take a security interest in business assets. Many sellers initially balk at receiving no payments for two years, so effective communication is critical: frame the 80% cash at closing as the primary benefit, explain that standby is a standard SBA program requirement (not a personal request), and consider offering a slightly higher interest rate (6-7% instead of 4-5%) to compensate for the deferred payments.
        </p>

        <h3 className={h3Class}>How long does the SBA 7(a) loan process take from application to closing?</h3>
        <p>
          The total timeline from LOI to close is typically 75-120 days for SBA-financed acquisitions. Finding and selecting an SBA Preferred Lending Partner (PLP) takes 1-2 weeks, application preparation and submission takes 1-2 weeks, underwriting and approval takes 3-6 weeks, and loan documentation and closing takes 2-4 weeks. PLP lenders have delegated authority to approve loans without sending the application to the SBA for review, saving 2-4 weeks in processing time. According to experienced SBA lenders, the most common cause of delays is slow response to information requests from the buyer or seller, being responsive and organized can compress the timeline by 2-3 weeks. Buyers should note that the SBA process is significantly slower than conventional financing (which can close in 30-45 days), so sellers need to understand the timeline upfront and the LOI should set realistic closing expectations.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>US Small Business Administration, <em>SBA 7(a) Loan Program: Standard Operating Procedures</em> (2024)</li>
          <li>Stanford GSB, <em>Self-Funded Search: The SBA Acquisition Model</em> (2024)</li>
          <li>Guidant Financial, <em>Small Business Trends: SBA Lending Data and Analysis</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
