import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SellerDataRoomArticle() {
  return (
    <article>
      <h1 className={h1Class}>Setting Up a Seller Data Room for Your Business Sale</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          A seller data room can make or break your deal timeline. According to{" "}
          <a href="https://www.peony.ink/blog/due-diligence-data-room-checklist" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Peony&rsquo;s 2026 due diligence analysis</a>,
          average due diligence now takes 203 days &mdash; up 64% from a decade ago &mdash; and 41% of dealmakers cite diligence as the top obstacle to closing.
          Sellers who prepare a well-organized virtual data room before going to market close 30 to 45 days faster than those who scramble once a buyer appears.
          This guide covers the exact folder structure, document checklist, platform options with real pricing, and access control practices
          you need to build a data room that accelerates your sale rather than stalling it.
        </p>
      </div>

      <h2 className={h2Class}>Why Your Data Room Is a Strategic Asset, Not a File Dump</h2>
      <div className={bodyClass}>
        <p>
          Most sellers think of the data room as a box to check &mdash; upload some financials, share the link, move on.
          That mindset costs them time and money. A disorganized data room introduces doubt, and doubt compounds fast.
          As{" "}
          <a href="https://sharevault.com/guides/hidden-cost-of-disorganized-diligence/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">ShareVault&rsquo;s research</a>{" "}
          on diligence failures notes, most deals do not stall because the business is weak &mdash; they stall because disorganized diligence
          introduces uncertainty that erodes buyer confidence.
        </p>
        <p>
          A clean data room signals operational discipline. When a buyer opens your repository and finds numbered folders,
          consistent file naming, and a master index, they draw an immediate conclusion: this business is well-managed.
          That perception directly affects{" "}
          <Link href="/learn/what-is-my-business-worth" className="text-apple-accent hover:underline">how buyers value your business</Link>.
          Conversely, a scattered Google Drive folder with files named &ldquo;scan_003_final_v2_REAL.pdf&rdquo; triggers additional
          information requests, extends timelines, and gives buyers use to renegotiate price.
        </p>
        <p>
          Mid-market data rooms typically contain between 5,000 and 50,000+ pages of documentation across 150 to 400+ individual files,
          according to{" "}
          <a href="https://www.peony.ink/blog/due-diligence-data-room-checklist" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Bloomberg Law&rsquo;s standard M&amp;A due diligence request framework</a>.
          For a small business in the $1M&ndash;$10M range, expect to assemble 100&ndash;250 documents. The point is not volume &mdash; it&rsquo;s completeness and structure.
        </p>
      </div>

      <h2 className={h2Class}>The 12-Folder Data Room Structure Buyers Expect</h2>
      <div className={bodyClass}>
        <p>
          Buyers &mdash; especially{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">those conducting financial due diligence</Link>{" "}
          &mdash; expect a numbered folder hierarchy. This structure is based on the Bloomberg Law framework used by M&amp;A attorneys and adapted
          for small-to-mid-market transactions:
        </p>
        <ol className={olClass}>
          <li><strong>01_Corporate &amp; Governance:</strong> Articles of incorporation, bylaws, organizational chart, board minutes, cap table, operating agreements, shareholder agreements (15&ndash;25 documents)</li>
          <li><strong>02_Financials:</strong> 3&ndash;5 years of audited or reviewed financial statements, monthly/quarterly P&amp;L, balance sheets, cash flow statements, accounts receivable and accounts payable aging, debt schedules, projections (15&ndash;20 documents)</li>
          <li><strong>03_Tax:</strong> Federal, state, and local tax returns (3&ndash;5 years), sales tax filings, nexus analysis, any pending audits or disputes (10&ndash;15 documents)</li>
          <li><strong>04_Legal &amp; Contracts:</strong> Material contracts, customer and vendor agreements, change-of-control provisions, debt instruments, real estate leases, equipment leases (15&ndash;25 documents)</li>
          <li><strong>05_Customers &amp; Revenue:</strong> Customer list with annual revenue per account, concentration analysis, renewal calendar, churn data, pipeline summary (10&ndash;15 documents)</li>
          <li><strong>06_HR &amp; Employment:</strong> Employee census with compensation, employment agreements, handbook, benefits summary, organizational chart, key person bios (10&ndash;15 documents)</li>
          <li><strong>07_IP &amp; Technology:</strong> Patent portfolio, trademarks, copyrights, domain names, trade secrets, open-source disclosures, technology architecture diagrams (15&ndash;20 documents)</li>
          <li><strong>08_Operations:</strong> Standard operating procedures, SLAs, vendor agreements, quality documentation, supply chain overview, business continuity plans (10&ndash;15 documents)</li>
          <li><strong>09_Regulatory &amp; Compliance:</strong> Licenses and permits, regulatory correspondence, industry certifications, environmental assessments, remediation plans (10&ndash;15 documents)</li>
          <li><strong>10_Insurance:</strong> All active insurance policies, claims history (3&ndash;5 years), coverage summary, pending claims (5&ndash;10 documents)</li>
          <li><strong>11_Real Estate &amp; Assets:</strong> Property deeds, lease agreements, ALTA surveys, equipment inventories with depreciation schedules, appraisals (5&ndash;15 documents)</li>
          <li><strong>12_Confirmatory (Gated):</strong> Items reserved for post-LOI access &mdash; sensitive customer contracts, employee social security data, trade secret documentation (varies)</li>
        </ol>
        <p>
          Use this naming convention for individual files: <code>YYYY-MM_Category_Description_vN.ext</code>. For example,{" "}
          <code>2025-12_02_Income-Statement_Annual_v1.pdf</code>. Consistent naming eliminates buyer confusion and reduces Q&amp;A
          requests by making every document self-describing.
        </p>
      </div>

      <h2 className={h2Class}>VDR Platform Comparison: From Free to Enterprise</h2>
      <div className={bodyClass}>
        <p>
          Choosing a platform depends on your deal size, the number of potential buyers, and how sensitive your documents are.
          Based on{" "}
          <a href="https://www.peony.ink/blog/virtual-data-room-cost-guide" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">2026 VDR pricing data</a>,
          here is how the major options compare:
        </p>

        <p><strong>Enterprise VDRs (deals above $25M, multiple bidders):</strong></p>
        <ul className={ulClass}>
          <li><strong>Datasite (formerly Merrill Datasite):</strong> $2,000&ndash;$5,000+/month, averaging ~$68,000/year. Best-in-class M&amp;A features, AI-powered redaction, dedicated support. Per-page pricing model ($0.40&ndash;$0.85/page) can escalate rapidly. Charges extra for Excel files and special media types. Best for competitive auctions with 10+ bidders.</li>
          <li><strong>Intralinks:</strong> $1,000&ndash;$5,000+/month, ranging from $10,000 to $200,000+/year. Similar per-page model to Datasite (~$7,500 for 10,000 pages). Strong in cross-border deals. Adds costs for non-standard file formats.</li>
        </ul>

        <p><strong>Mid-market VDRs (deals $5M&ndash;$25M):</strong></p>
        <ul className={ulClass}>
          <li><strong>Firmex:</strong> ~$650/month (~$7,800/year average). Offers both unlimited subscription and per-transaction pricing. Users switching from Intralinks cite lower cost and better UX. Granular permissions, Q&amp;A module, audit trails. Strong choice for search fund acquisitions and mid-market deals.</li>
          <li><strong>iDeals:</strong> $460&ndash;$1,000+/month ($5,520&ndash;$12,000+/year). Setup fees of $1,000&ndash;$5,000. Clean interface with built-in NDA management.</li>
          <li><strong>DealRoom:</strong> $625&ndash;$2,083/month ($7,500&ndash;$25,000/year). Unique project management layer on top of standard VDR features.</li>
        </ul>

        <p><strong>Budget options (deals under $5M, single buyer):</strong></p>
        <ul className={ulClass}>
          <li><strong>SecureDocs:</strong> $250/month billed annually ($3,000/year). Flat-rate pricing with unlimited pages and users. No per-page surprises.</li>
          <li><strong>Google Drive / Dropbox Business:</strong> Effectively free or minimal cost. Adequate for single-buyer deals where both parties have signed an{" "}
            <Link href="/learn/nda-process" className="text-apple-accent hover:underline">NDA</Link>.
            Lacks audit trails, watermarking, granular permissions, and Q&amp;A management. Acceptable when your M&amp;A attorney manages access manually.</li>
          <li><strong>Peony:</strong> Free tier available; Pro at $20/admin/month. Good for early-stage or very small transactions.</li>
        </ul>

        <p>
          Hidden fees to watch for across all providers: setup and onboarding ($500&ndash;$2,500), storage overages ($75&ndash;$300/GB/month),
          and user overages ($15&ndash;$90/user/month). Always negotiate an all-inclusive cap before signing a VDR contract.
        </p>
      </div>

      <h2 className={h2Class}>Document Checklist by Category</h2>
      <div className={bodyClass}>
        <p>
          Use this checklist when{" "}
          <Link href="/learn/prepare-business-for-sale" className="text-apple-accent hover:underline">preparing your business for sale</Link>.
          Each category maps to the 12-folder structure above. Prioritize items marked with an asterisk (*) &mdash; buyers request these in the first week of diligence.
        </p>

        <p><strong>Financials (Folder 02) &mdash; the foundation of every{" "}
          <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">quality of earnings</Link>{" "}
          analysis:</strong></p>
        <ul className={ulClass}>
          <li>* Audited or reviewed financial statements (3&ndash;5 years)</li>
          <li>* Monthly P&amp;L and balance sheet (trailing 24 months)</li>
          <li>* Cash flow statements (3&ndash;5 years)</li>
          <li>* Accounts receivable aging report (current)</li>
          <li>* Accounts payable aging report (current)</li>
          <li>Bank statements (12 months)</li>
          <li>Revenue bridge / waterfall (showing MoM changes)</li>
          <li>Debt schedule with maturity dates</li>
          <li>Financial projections (2&ndash;3 years forward)</li>
          <li>Capital expenditure history and forecast</li>
        </ul>

        <p><strong>Tax (Folder 03):</strong></p>
        <ul className={ulClass}>
          <li>* Federal tax returns (3&ndash;5 years)</li>
          <li>* State and local tax returns (3&ndash;5 years)</li>
          <li>Sales and use tax filings</li>
          <li>Nexus analysis (if selling across state lines)</li>
          <li>Any IRS or state audit correspondence</li>
          <li>Transfer pricing documentation (if applicable)</li>
        </ul>

        <p><strong>Customers &amp; Revenue (Folder 05):</strong></p>
        <ul className={ulClass}>
          <li>* Customer list with annual revenue per account</li>
          <li>* Revenue concentration analysis (top 10 customers as % of total)</li>
          <li>Contract renewal calendar</li>
          <li>Customer churn data (trailing 3 years)</li>
          <li>Sales pipeline summary</li>
          <li>Pricing schedules and discount policies</li>
        </ul>

        <p><strong>HR &amp; Employment (Folder 06):</strong></p>
        <ul className={ulClass}>
          <li>* Organizational chart</li>
          <li>* Employee census (name, role, hire date, salary, bonus)</li>
          <li>Employment agreements for key personnel</li>
          <li>Employee handbook</li>
          <li>Benefits summary with annual costs</li>
          <li>Non-compete and non-solicitation agreements</li>
          <li>Pending EEOC complaints or employment disputes</li>
        </ul>

        <p>
          For the complete 174-document framework across all categories, reference the{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">full due diligence checklist</Link>.
        </p>
      </div>

      <h2 className={h2Class}>Timing: When to Build and How to Stage Access</h2>
      <div className={bodyClass}>
        <p>
          The average seller spends just 27 days preparing before launching their data room, according to{" "}
          <a href="https://www.peony.ink/blog/due-diligence-data-room-checklist" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">industry benchmarks</a>.
          That is not enough. Start 3&ndash;6 months before going to market. Here is a practical timeline:
        </p>
        <ul className={ulClass}>
          <li><strong>6 months out:</strong> Begin assembling financial records. Request missing documents from your accountant, attorney, and insurance broker. Identify gaps in your corporate records (missing board minutes, unsigned amendments, expired contracts).</li>
          <li><strong>4 months out:</strong> Organize documents into the 12-folder structure. Apply consistent naming conventions. Create a master index document that lists every file with a brief description. This index becomes the first document buyers see.</li>
          <li><strong>2 months out:</strong> Upload everything to your chosen VDR platform. Test access controls. Run a &ldquo;mock diligence&rdquo; by asking your M&amp;A advisor or attorney to review the room as if they were a buyer, flagging missing items.</li>
          <li><strong>Market launch:</strong> Share pre-LOI access (Folders 01&ndash;03 plus summary documents from Folders 05&ndash;06). Customer names, detailed contracts, and employee personal data remain gated in Folder 12 until a letter of intent is signed.</li>
          <li><strong>Post-LOI:</strong> Unlock full access. Designate a Q&amp;A coordinator who responds to buyer questions within 24&ndash;48 hours. Prompt responses maintain deal momentum and buyer confidence.</li>
        </ul>
        <p>
          Staging access this way protects your sensitive information while giving buyers enough material to write an informed offer.
          It also ensures you have a signed{" "}
          <Link href="/learn/nda-process" className="text-apple-accent hover:underline">NDA</Link>{" "}
          in place before sharing anything a competitor could exploit.
        </p>
      </div>

      <h2 className={h2Class}>Access Controls and Security Best Practices</h2>
      <div className={bodyClass}>
        <p>
          Access control is not just about keeping competitors out &mdash; it is about demonstrating to buyers that you handle sensitive
          information with care. If you are careless with your own data room, buyers will wonder how you handle customer data, financial
          records, and employee information in the normal course of business.
        </p>
        <ul className={ulClass}>
          <li><strong>Role-based permissions:</strong> Create distinct user groups &mdash; financial buyer, strategic buyer, legal counsel, M&amp;A advisor. Each group sees only the folders relevant to their role and deal stage.</li>
          <li><strong>Watermarking:</strong> Apply dynamic watermarks that stamp the viewer&rsquo;s name, email, and access date on every downloaded document. This deters unauthorized sharing and creates accountability.</li>
          <li><strong>View-only settings:</strong> For highly sensitive documents (customer contracts, trade secrets), enable view-only mode that prevents downloading or printing. Buyers can review the material without extracting it.</li>
          <li><strong>Audit trails:</strong> Monitor which documents each buyer views, for how long, and how often. This data reveals buyer interest levels and helps you prioritize follow-up. If a buyer spends 45 minutes reviewing your financials and 2 minutes on everything else, that tells you something.</li>
          <li><strong>Two-factor authentication:</strong> Require MFA for all data room access. This is standard on Firmex, Datasite, and iDeals but must be manually enabled on Google Drive and Dropbox.</li>
          <li><strong>Expiration dates:</strong> Set automatic access expiration for buyers who do not advance to the next stage. If a buyer does not submit an LOI within 30 days of initial access, their permissions should automatically expire.</li>
        </ul>
        <p>
          If you are running a competitive process with multiple bidders, track activity metrics across buyers.
          The buyer who downloads your financial model, reviews every contract, and submits detailed Q&amp;A questions is likely your
          most serious bidder &mdash; allocate your management time accordingly.
        </p>
      </div>

      <h2 className={h2Class}>Seven Mistakes That Kill Deals in the Data Room</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li><strong>The file dump.</strong> Uploading hundreds of unorganized files into a single folder. Every failed deal has a story, and more often than not, that story begins with a data room where buyers cannot find what they need. Use the 12-folder structure and a master index.</li>
          <li><strong>Missing financials.</strong> Gaps in your financial history &mdash; a missing Q3 P&amp;L, an unexplained revenue spike, tax returns with missing schedules &mdash; create red flags that trigger additional diligence requests and slow the process by weeks. Completeness matters more than perfection.</li>
          <li><strong>Drip-feeding documents.</strong> Adding files one at a time as buyers request them signals either disorganization or concealment. Both erode trust. Upload everything before granting buyer access. If a document genuinely requires time to prepare, acknowledge it in your index with an expected upload date.</li>
          <li><strong>Over-sharing before the LOI.</strong> Sharing your full customer list, employee SSNs, or proprietary pricing with every interested party is reckless. Stage access. Pre-LOI buyers get summary financials and corporate overview. Detailed, sensitive documents unlock only after a signed LOI and{" "}
            <Link href="/learn/nda-process" className="text-apple-accent hover:underline">confidentiality agreement</Link>.</li>
          <li><strong>Ignoring the Q&amp;A log.</strong> When buyers submit questions and get no response for five days, they assume the worst. Designate one person &mdash; typically your CFO or M&amp;A advisor &mdash; as the Q&amp;A coordinator, with a 24&ndash;48 hour response SLA.</li>
          <li><strong>No version control.</strong> Uploading revised documents without removing or archiving older versions leads to buyers analyzing outdated numbers. Use the <code>_vN</code> suffix in file names and move superseded files to an &ldquo;Archive&rdquo; subfolder within each category.</li>
          <li><strong>Forgetting the narrative.</strong> Numbers without context invite misinterpretation. Include a Confidential Information Memorandum (CIM) or management presentation in Folder 01 that tells the story of your business &mdash; how you got here, where the growth opportunities are, and why the numbers look the way they do.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Frequently Asked Questions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>How much does a virtual data room cost for a small business sale?</h3>
        <p>
          For deals under $5M with a single buyer, you can use Google Drive or Dropbox at minimal cost, or a flat-rate provider like SecureDocs at $250/month ($3,000/year).
          For mid-market deals ($5M&ndash;$25M), Firmex averages ~$7,800/year, and iDeals runs $5,520&ndash;$12,000/year.
          Enterprise platforms like Datasite average $68,000/year and are overkill for most small business transactions.
          If you are considering{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">seller financing</Link>{" "}
          as part of the deal structure, the data room cost is a rounding error relative to the transaction value.
        </p>

        <h3 className={h3Class}>How many documents should be in a seller data room?</h3>
        <p>
          A typical small business data room ($1M&ndash;$10M deal) contains 100&ndash;250 individual documents spanning the 12 categories outlined above.
          Mid-market transactions ($10M&ndash;$100M) often reach 300&ndash;500+ documents.
          The Bloomberg Law standard framework identifies 174 distinct document types across 10 core categories.
          Focus on completeness within each category rather than hitting a specific number &mdash; a missing tax return is far more damaging than
          having &ldquo;only&rdquo; 120 documents.
        </p>

        <h3 className={h3Class}>When should I start preparing my data room?</h3>
        <p>
          Start 3&ndash;6 months before going to market. The average seller spends only 27 days on data room preparation, which leads to gaps,
          disorganization, and scrambling under deal pressure. Beginning early gives you time to request missing documents, resolve discrepancies
          in your financial records, and organize everything into a structure that demonstrates operational discipline. If you have not already
          begun{" "}
          <Link href="/learn/prepare-business-for-sale" className="text-apple-accent hover:underline">preparing your business for sale</Link>,
          start with your financial records and corporate documents &mdash; these take the longest to assemble.
        </p>

        <h3 className={h3Class}>Can I use Google Drive instead of a dedicated VDR?</h3>
        <p>
          Yes, for single-buyer deals under $5M where both parties have signed an NDA, Google Drive with restricted sharing settings is acceptable.
          You lose audit trails, watermarking, dynamic permissions, and Q&amp;A management, but many small business sales close successfully using
          shared Google Drive folders. The trade-off is security and professionalism. If you are running a competitive process with
          multiple potential buyers or your deal involves sensitive IP, invest in a dedicated VDR &mdash; even a budget option like SecureDocs
          ($250/month) provides meaningful security upgrades over consumer cloud storage.
        </p>

        <h3 className={h3Class}>What documents should I share before vs. after the LOI?</h3>
        <p>
          Pre-LOI, share Folders 01&ndash;03 (corporate overview, summary financials, tax returns) plus high-level summaries from Folders 05 and 06
          (revenue concentration data without customer names, organizational chart without compensation details).
          Post-LOI, unlock everything: named customer lists, detailed contracts, employee compensation data, and trade secrets.
          This staged approach protects your competitive position while giving buyers the information they need to write an
          informed offer. The{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence checklist</Link>{" "}
          maps each document to the appropriate deal phase.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          <a href="https://www.peony.ink/blog/due-diligence-data-room-checklist" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Peony, <em>Due Diligence Checklist: 174 Documents Buyers Actually Request</em> (2026)</a>
        </li>
        <li>
          <a href="https://www.peony.ink/blog/virtual-data-room-cost-guide" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Peony, <em>Virtual Data Room Cost: Pricing Models, Rates &amp; Hidden Fees</em> (2026)</a>
        </li>
        <li>
          <a href="https://sharevault.com/guides/hidden-cost-of-disorganized-diligence/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">ShareVault, <em>Hidden Cost of Disorganized Diligence</em> (2025)</a>
        </li>
        <li>
          <a href="https://data-rooms.org/blog/mergers-acquisitions-data-room-structure-guide/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Data-Rooms.org, <em>M&amp;A Data Room Structure Guide</em> (2025)</a>
        </li>
        <li>
          <a href="https://firmroom.com/blog/using-data-room-for-m-a" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">FirmRoom, <em>Using Data Room for M&amp;A: Best Practices &amp; Structure</em> (2025)</a>
        </li>
      </ul>
    </article>
  );
}
