import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function AcquiringAccountingPracticeArticle() {
  return (
    <article>
      <h1 className={h1Class}>Acquiring an Accounting Practice: Industry Playbook</h1>
      <p className="text-sm text-apple-gray-500 mt-3">13 min read</p>

      <div className={bodyClass}>
        <p>
          Accounting practices are among the most attractive acquisition targets
          in the{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">entrepreneurship through acquisition</Link>{" "}
          landscape. They combine recurring revenue, high client retention, and a
          massive generational succession wave into an opportunity set that few
          other industries can match. Roughly 75% of CPA firm partners in the
          United States are over the age of 50, and tens of thousands of practices
          will change hands over the next decade. For search fund operators willing
          to learn the nuances of the profession, accounting represents a
          defensible, cash-generative platform with clear paths to post-acquisition
          value creation. This playbook covers the market landscape, deal sourcing,
          due diligence specifics, valuation benchmarks, and the operating
          strategies that separate successful acquirers from those who overpay
          for a depreciating client book.
        </p>

        <h2 className={h2Class}>Why CPA firms are attractive for ETA</h2>

        <h3 className={h3Class}>Recurring revenue and high retention</h3>
        <p>
          The foundation of an accounting practice&rsquo;s value is its annuity-like
          revenue. Tax preparation clients return every year &mdash; not because
          they love their accountant, but because switching costs are real. A new
          CPA needs prior-year returns, entity structures, depreciation schedules,
          and institutional knowledge of the client&rsquo;s financial history. The
          result is annual client retention rates of 90&ndash;95% for well-run
          practices, a figure that rivals SaaS businesses without the capital
          intensity. Audit and attest engagements often run on multi-year cycles,
          and bookkeeping clients pay monthly retainers that create predictable
          cash flow throughout the year.
        </p>

        <h3 className={h3Class}>The baby boomer succession wave</h3>
        <p>
          The accounting profession is facing a demographic cliff. According to
          the AICPA&rsquo;s 2024 Trends in the Supply of Accounting Graduates
          report, nearly half of all licensed CPAs will reach retirement age
          by 2030. Many sole practitioners and
          small-firm partners have no internal succession plan. They have spent
          decades building profitable practices but lack the next generation of
          leadership to take over. This supply-demand imbalance creates a buyer&rsquo;s
          market in many geographies, particularly outside major metropolitan
          areas. Sellers are often motivated by fatigue &mdash; they have
          survived another tax season and want out &mdash; and are willing to
          accept reasonable valuations in exchange for deal certainty and a
          smooth transition.
        </p>

        <h3 className={h3Class}>Recession resistance</h3>
        <p>
          Tax obligations do not disappear during recessions. If anything,
          economic downturns increase demand for accounting services as businesses
          seek to conserve cash, restructure operations, and navigate complex tax
          provisions like loss carrybacks and credits. During the 2008&ndash;2009
          financial crisis and the 2020 pandemic, accounting firms experienced
          modest revenue dips at worst and, in many cases, saw demand increase
          as stimulus programs, PPP loans, and new compliance requirements
          created additional work. This counter-cyclical resilience makes
          accounting practices attractive for leveraged acquisitions where debt
          service coverage is paramount.
        </p>

        <h2 className={h2Class}>Types of accounting practices</h2>

        <h3 className={h3Class}>Sole practitioners</h3>
        <p>
          A sole practitioner CPA typically manages 200&ndash;500 individual tax
          returns and 20&ndash;80 small business clients, generating
          $300K&ndash;$1.5M in annual revenue. These practices are the most
          common acquisition targets and offer the lowest entry prices. The
          primary risk is extreme key-person dependency &mdash; the owner is the
          practice. Everything from client relationships to knowledge of returns
          lives in one person&rsquo;s head. Mitigating this risk requires a
          structured transition period of 12&ndash;24 months, which we discuss
          in our guide on{" "}
          <Link href="/learn/management-transition" className="text-apple-accent hover:underline">management transitions</Link>.
        </p>

        <h3 className={h3Class}>Small firms (2&ndash;10 professionals)</h3>
        <p>
          Small firms with $1M&ndash;$5M in revenue represent the sweet spot for
          search fund acquisitions. They have enough scale to support a management
          layer, diversified client relationships across multiple professionals,
          and established workflows. The presence of senior staff who manage their
          own client portfolios significantly reduces key-person risk compared to
          sole practitioners. These firms often have a mix of tax, bookkeeping,
          and advisory services that provides revenue diversification and multiple
          growth levers post-acquisition.
        </p>

        <h3 className={h3Class}>Niche vs. general practices</h3>
        <p>
          General practices serve a broad mix of individuals and small businesses
          across industries. Niche practices specialize in specific verticals
          &mdash; construction, real estate, medical practices, nonprofits,
          cannabis, or international tax. Niche firms typically command higher
          billing rates, deeper client relationships, and stronger competitive
          moats. However, they carry concentration risk in a single industry.
          A general practice may be easier to grow through marketing and referrals,
          while a niche practice offers higher margins and stronger defensibility.
          The best acquisition targets often combine a general tax compliance base
          with an emerging specialty that can be expanded post-close.
        </p>

        <h3 className={h3Class}>Service mix: tax, audit, bookkeeping, advisory</h3>
        <ul className={ulClass}>
          <li>
            <strong>Tax compliance:</strong> The bread and butter of most small
            CPA firms. Highly seasonal (January through April), recurring, and
            relatively commoditized. Revenue per return ranges from $300 for
            simple individual returns to $5,000+ for complex business filings.
          </li>
          <li>
            <strong>Audit and attest:</strong> Higher-margin work requiring
            licensed CPAs and peer review compliance. Audit engagements carry
            malpractice risk but generate premium fees ($15K&ndash;$100K+ per
            engagement) and multi-year client relationships.
          </li>
          <li>
            <strong>Bookkeeping and accounting:</strong> Monthly recurring
            revenue from managing general ledgers, payroll, accounts payable,
            and financial reporting. Lower margin per hour but provides year-round
            cash flow that smooths the seasonality of tax work.
          </li>
          <li>
            <strong>Advisory and consulting:</strong> The highest-margin service
            line, encompassing tax planning, business valuations, M&amp;A due
            diligence, CFO-as-a-service, and strategic consulting. Advisory
            revenue commands 2&ndash;3x the effective hourly rate of compliance
            work and is the primary post-acquisition growth lever.
          </li>
        </ul>

        <h2 className={h2Class}>Due diligence specifics</h2>
        <p>
          Accounting practice due diligence differs materially from a standard
          small business acquisition. Beyond the typical financial and legal
          review, you must evaluate practice-specific factors that directly
          affect post-close economics.
        </p>

        <h3 className={h3Class}>Client concentration and revenue quality</h3>
        <p>
          Analyze the client roster with surgical precision. Request a
          client-by-client revenue breakdown for the trailing three years.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Top-client dependency:</strong> If any single client
            represents more than 10% of revenue, this is a material risk.
            For tax-heavy practices, concentration is usually low because
            revenue is spread across hundreds of returns. For firms with
            significant audit or advisory work, concentration can be
            dangerously high.
          </li>
          <li>
            <strong>Client tenure:</strong> Long-tenured clients (7+ years)
            are significantly stickier than recent additions. Practices with
            an average client tenure above 5 years typically experience less
            attrition post-sale.
          </li>
          <li>
            <strong>Revenue by service type:</strong> Break revenue into tax,
            audit, bookkeeping, and advisory buckets. Tax and bookkeeping
            revenue is more predictable; audit revenue is lumpy but higher-margin;
            advisory revenue is the most valuable but also the most dependent on
            specific relationships.
          </li>
          <li>
            <strong>Referral sources:</strong> Identify how new clients find the
            firm. Practices that rely entirely on the owner&rsquo;s personal
            network for referrals have a pipeline problem that must be solved
            post-acquisition.
          </li>
        </ul>

        <h3 className={h3Class}>Staff utilization and capacity</h3>
        <p>
          Understanding how the firm&rsquo;s professionals spend their time is
          critical for both valuation and post-acquisition planning.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Utilization rates:</strong> Measure billable hours as a
            percentage of total available hours for each professional. Healthy
            accounting firms run at 55&ndash;65% utilization annualized, with
            peaks above 80% during tax season. Firms below 50% have significant
            untapped capacity that represents either an opportunity (more revenue
            without adding headcount) or a warning sign (declining client base).
          </li>
          <li>
            <strong>Realization rates:</strong> Compare standard billing rates to
            actually collected revenue. A realization rate below 85% suggests
            chronic write-downs, scope creep, or underpricing. Improving
            realization from 80% to 90% on a $2M practice adds $250K in revenue
            with zero additional labor cost.
          </li>
          <li>
            <strong>Staff leverage:</strong> Evaluate the ratio of partners to
            managers to staff. A well-leveraged firm generates $300K&ndash;$500K
            in revenue per professional. Firms where the owner personally handles
            60%+ of billable work are under-leveraged and dependent on that
            individual&rsquo;s continued production.
          </li>
        </ul>

        <h3 className={h3Class}>Engagement letters and malpractice history</h3>
        <p>
          Review every active engagement letter. Confirm that the firm uses
          current, properly drafted engagement letters for all services &mdash;
          particularly audit and attest work, where the liability exposure is
          highest. Firms without engagement letters for every client relationship
          are carrying unquantified legal risk.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Malpractice claims:</strong> Request a complete history of
            malpractice claims (open and closed) for the past 10 years. Review
            the firm&rsquo;s professional liability insurance policy &mdash;
            determine whether it is occurrence-based or claims-made, and
            understand tail coverage requirements and costs for the transition.
          </li>
          <li>
            <strong>Peer review reports:</strong> CPA firms that perform audit
            or attest services are subject to peer review. Request the last three
            peer review reports and any letters of comment. A &ldquo;pass&rdquo;
            rating is expected; a &ldquo;pass with deficiencies&rdquo; or
            &ldquo;fail&rdquo; is a serious red flag that must be investigated
            before proceeding.
          </li>
          <li>
            <strong>Regulatory compliance:</strong> Verify that the firm is in
            good standing with the state board of accountancy, that all
            professionals maintain current CPA licenses and continuing education
            credits, and that the firm complies with all applicable state and
            federal regulations including IRS Circular 230.
          </li>
        </ul>

        <h3 className={h3Class}>Technology and systems</h3>
        <p>
          Assess the firm&rsquo;s technology stack. Common platforms include
          Thomson Reuters (UltraTax, Practice CS), Wolters Kluwer (CCH Axcess),
          Intuit (Lacerte, ProConnect), Drake Tax, and QuickBooks for
          bookkeeping clients. Cloud adoption is a key indicator of
          modernization. Firms still running desktop-only software on local
          servers face significant technology migration costs post-acquisition,
          but this also represents an opportunity to improve efficiency and
          client experience.
        </p>

        <h2 className={h2Class}>Valuation benchmarks</h2>
        <p>
          Accounting practice valuations are typically expressed as a multiple of
          annual revenue, though EBITDA-based analysis is essential for firms
          with significant staff and overhead.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Tax and bookkeeping practices:</strong> 0.8x&ndash;1.2x
            annual revenue is the standard range for practices dominated by
            individual tax returns and small-business bookkeeping. Practices
            with high retention, modern technology, and clean engagement letters
            command the upper end. Practices with aging client bases, paper-heavy
            workflows, or owner-dependent relationships trade at the lower end.
          </li>
          <li>
            <strong>Audit and attest practices:</strong> 1.0x&ndash;1.4x annual
            revenue, reflecting the higher margins, deeper client relationships,
            and greater barriers to entry (peer review requirements, licensed
            staff). However, the malpractice exposure in audit work justifies
            careful scrutiny.
          </li>
          <li>
            <strong>Advisory-heavy practices:</strong> 1.2x&ndash;2.0x annual
            revenue for firms where advisory and consulting services represent
            40%+ of revenue. The premium reflects higher margins, less
            seasonality, and stronger client relationships. These practices
            command the highest valuations in the accounting space.
          </li>
          <li>
            <strong>EBITDA-based valuation:</strong> For firms with $1M+ in
            revenue and a professional staff, EBITDA multiples of 3x&ndash;6x
            are typical. Owner compensation must be carefully normalized &mdash;
            many sole practitioners pay themselves $300K&ndash;$500K, significantly
            above the market rate for a replacement CPA ($120K&ndash;$200K).
            Adjusting owner compensation to market rates can dramatically change
            the EBITDA picture and resulting valuation.
          </li>
        </ul>

        <h3 className={h3Class}>Deal structure considerations</h3>
        <p>
          Most accounting practice acquisitions use an asset purchase structure,
          which provides the buyer with a step-up in tax basis on the acquired
          goodwill (amortizable over 15 years under Section 197). Typical deal
          structures include:
        </p>
        <ol className={olClass}>
          <li>
            <strong>60&ndash;70% at closing:</strong> Cash or bank-financed
            portion paid at close.
          </li>
          <li>
            <strong>20&ndash;30% seller note:</strong> A promissory note over
            3&ndash;5 years, often with an interest rate of 4&ndash;6%. This
            aligns the seller&rsquo;s incentives with a smooth transition.
          </li>
          <li>
            <strong>10&ndash;20% retention-based earnout:</strong> Payments
            contingent on client retention metrics, typically measured at
            12 and 24 months post-close. A standard threshold is 85&ndash;90%
            revenue retention.
          </li>
        </ol>
        <p>
          SBA 7(a) loans are commonly used to finance accounting practice
          acquisitions, as the recurring revenue and high margins make these
          businesses attractive to lenders. Expect to contribute 10&ndash;20%
          equity and secure a 10-year term at SBA rates.
        </p>

        <h2 className={h2Class}>Post-acquisition playbook</h2>
        <p>
          The real value in acquiring an accounting practice lies in what you do
          after closing. The following strategies &mdash; drawn from successful
          ETA operators &mdash; can dramatically increase revenue and margins
          within the first 24&ndash;36 months.
        </p>

        <h3 className={h3Class}>Advisory upsell</h3>
        <p>
          Most small CPA firms leave enormous value on the table by focusing
          exclusively on compliance work. Their clients &mdash; small business
          owners, high-net-worth individuals, and growing companies &mdash; need
          strategic advice but have never been offered it. Implementing a proactive
          advisory program can transform the economics of the practice. This
          aligns with the broader strategies outlined in our{" "}
          <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">revenue growth playbook</Link>.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Tax planning engagements:</strong> Move from reactive tax
            preparation to proactive tax planning. A $2,000 tax return client
            who also buys a $5,000 tax planning engagement triples in value.
            Offer mid-year planning sessions, entity structure optimization,
            and retirement planning consultations.
          </li>
          <li>
            <strong>CFO-as-a-service:</strong> Provide fractional CFO services
            to small and mid-sized businesses that cannot afford a full-time
            CFO. Monthly retainers of $2,000&ndash;$10,000 for financial
            reporting, cash flow management, budgeting, and strategic advisory
            create high-margin recurring revenue.
          </li>
          <li>
            <strong>Business valuation and transaction advisory:</strong> Leverage
            the firm&rsquo;s existing client relationships to offer valuation
            services, M&amp;A due diligence, and transaction support. These
            engagements command $10K&ndash;$50K+ per project and position the
            firm as a trusted advisor rather than a compliance vendor.
          </li>
        </ul>

        <h3 className={h3Class}>Technology modernization</h3>
        <p>
          Many acquired practices still operate on outdated technology.
          Modernizing the tech stack delivers immediate efficiency gains and
          improves client experience.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cloud migration:</strong> Move from desktop software to
            cloud-based platforms (CCH Axcess, QuickBooks Online, Xero). Cloud
            tools enable remote work, improve collaboration, and reduce IT
            infrastructure costs.
          </li>
          <li>
            <strong>Client portal deployment:</strong> Implement a secure client
            portal for document exchange, e-signatures, and real-time
            communication. This eliminates paper-based workflows, reduces
            administrative burden, and creates a modern client experience that
            attracts younger clients.
          </li>
          <li>
            <strong>Automation and AI:</strong> Deploy automation for data entry,
            bank reconciliations, and routine categorization. AI-powered tools
            can draft tax returns, flag anomalies, and generate client-ready
            financial reports, freeing professionals to focus on advisory work
            that commands higher billing rates.
          </li>
          <li>
            <strong>Practice management:</strong> Implement time tracking,
            workflow management, and billing software that provides real-time
            visibility into utilization, realization, and profitability by
            client, service line, and professional.
          </li>
        </ul>

        <h3 className={h3Class}>Offshoring and outsourcing</h3>
        <p>
          Labor is the single largest cost in an accounting practice, typically
          representing 50&ndash;60% of revenue. Offshoring routine compliance
          work &mdash; individual tax preparation, bookkeeping data entry,
          payroll processing &mdash; to qualified teams in India, the
          Philippines, or Latin America can reduce labor costs by 40&ndash;60%
          on outsourced tasks while freeing domestic professionals for
          higher-value advisory work.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>What to offshore:</strong> Individual tax return preparation,
            bookkeeping and data entry, payroll processing, and routine audit
            workpapers. These tasks are process-driven, well-documented, and
            do not require face-to-face client interaction.
          </li>
          <li>
            <strong>What to keep onshore:</strong> Client-facing advisory work,
            complex tax planning, audit opinions and sign-offs, and all
            relationship management. The client should never know that back-office
            work is being performed overseas.
          </li>
          <li>
            <strong>Data security:</strong> Implement robust data handling
            protocols, including encrypted file transfers, restricted access
            controls, background checks on offshore staff, and compliance with
            IRS Publication 7216 (governing tax return information disclosure).
          </li>
        </ul>

        <h3 className={h3Class}>Adding CFO-as-a-service</h3>
        <p>
          The CFO-as-a-service model deserves special emphasis as a
          post-acquisition strategy. Small businesses with $2M&ndash;$20M in
          revenue frequently outgrow basic bookkeeping but cannot justify a
          $150K&ndash;$250K full-time CFO. A fractional CFO offering fills this
          gap at $2K&ndash;$10K per month. The accounting practice already
          possesses the client relationships and financial data to deliver this
          service immediately. Building a CFO-as-a-service line can add
          $200K&ndash;$1M+ in high-margin annual recurring revenue within
          18&ndash;24 months of acquisition.
        </p>

        <h3 className={h3Class}>Buy-and-build strategy</h3>
        <p>
          Accounting is one of the most proven sectors for a{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build strategy</Link>.
          After establishing a platform acquisition, acquire additional sole
          practitioners or small firms at 0.8x&ndash;1.0x revenue and integrate
          them onto your centralized technology, billing, and administrative
          infrastructure. Each tuck-in acquisition should be accretive from
          day one as you eliminate duplicate overhead and apply your
          operational playbook. Successful accounting roll-ups have built
          $10M&ndash;$50M revenue platforms that command 8&ndash;12x EBITDA
          at exit, compared to the 3&ndash;5x paid for individual practices.
        </p>

        <h2 className={h2Class}>Risks and mitigation strategies</h2>

        <h3 className={h3Class}>Client attrition post-sale</h3>
        <p>
          The single greatest risk in any accounting practice acquisition is
          client attrition following the ownership change. Industry data
          suggests that well-managed transitions retain 85&ndash;95% of
          revenue, but poorly managed transitions can see 20&ndash;40% of
          revenue walk out the door within 18 months.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Seller transition period:</strong> Require the selling CPA
            to remain actively involved for 12&ndash;24 months post-close.
            During this period, the seller introduces the buyer to every
            client, co-signs communications, and gradually transfers
            relationship ownership.
          </li>
          <li>
            <strong>Client communication strategy:</strong> Craft a thoughtful
            announcement letter emphasizing continuity &mdash; same staff, same
            location, same phone number. Clients fear change; your message must
            neutralize that fear.
          </li>
          <li>
            <strong>Retention-based earnout:</strong> Tie 10&ndash;20% of the
            purchase price to revenue retention at 12 and 24 months. This
            financially motivates the seller to actively support the transition
            rather than passively waiting for their earnout checks.
          </li>
          <li>
            <strong>Service quality focus:</strong> The first tax season after
            acquisition is critical. Staff up adequately, maintain turnaround
            times, and communicate proactively with clients. A single botched
            tax season can accelerate attrition dramatically.
          </li>
        </ul>

        <h3 className={h3Class}>Staff retention</h3>
        <p>
          The accounting profession faces a well-documented talent shortage.
          According to Accounting Today, the pipeline of new CPAs has declined
          by over 30% since 2016 as fewer graduates pursue the 150-credit-hour
          requirement for licensure. Losing experienced
          staff post-acquisition is costly and disruptive.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Retention bonuses:</strong> Offer key staff retention
            bonuses of 15&ndash;30% of annual compensation, vesting over
            18&ndash;24 months post-close.
          </li>
          <li>
            <strong>Career development:</strong> Many staff at small firms
            feel career-capped. Offer clear advancement paths, professional
            development budgets, and the opportunity to specialize in advisory
            services.
          </li>
          <li>
            <strong>Culture preservation:</strong> Accounting staff value
            flexibility (especially around tax season), professional autonomy,
            and work-life balance. Avoid imposing corporate-style mandates in
            the first year. Listen first, change incrementally.
          </li>
        </ul>

        <h3 className={h3Class}>Licensing and regulatory requirements</h3>
        <p>
          CPA firm ownership is regulated at the state level, and requirements
          vary significantly. Most states require that a CPA firm be majority-owned
          by licensed CPAs, though an increasing number of states have adopted
          &ldquo;substantial equivalency&rdquo; provisions or alternative
          practice structures that allow non-CPA ownership under certain
          conditions. Before pursuing an acquisition, consult with the
          target state&rsquo;s board of accountancy to understand ownership
          requirements, filing obligations, and any restrictions that may
          affect your deal structure. This is a threshold issue &mdash; if
          you are not a licensed CPA, you must determine early whether the
          state allows non-CPA ownership or whether you need a licensed CPA
          partner in the deal.
        </p>

        <h3 className={h3Class}>Key-person risk</h3>
        <p>
          In sole-practitioner and small-firm acquisitions, the departing
          owner is often the primary &mdash; and sometimes only &mdash;
          client relationship. The risk is compounded if the owner also
          holds the firm&rsquo;s only CPA license. This is a well-understood
          challenge across{" "}
          <Link href="/learn/professional-services-acquisition" className="text-apple-accent hover:underline">professional services acquisitions</Link>{" "}
          and requires aggressive mitigation through transition planning,
          non-compete agreements, and deliberate relationship transfer
          protocols. Build redundancy into the practice by assigning multiple
          professionals to key client accounts and ensuring that no single
          individual &mdash; including yourself &mdash; is irreplaceable.
        </p>

        <h2 className={h2Class}>Deal sourcing strategies</h2>
        <p>
          Finding accounting practices for sale requires a multi-channel
          approach because many of the best opportunities never hit the
          open market.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Practice brokers:</strong> Specialized firms like
            Accounting Practice Sales, AAAP (Association for Accounting
            Administration &amp; Advisory Professionals), and regional
            brokers maintain listings of practices for sale. Broker-listed
            practices typically command market-rate valuations but offer a
            structured process.
          </li>
          <li>
            <strong>Direct outreach:</strong> Identify retiring CPAs through
            state CPA society directories, local chamber of commerce listings,
            and LinkedIn. A personalized letter expressing interest in continuing
            their legacy can generate off-market opportunities at favorable
            valuations.
          </li>
          <li>
            <strong>CPA society networking:</strong> Attend state and local
            CPA society events, join committees, and build relationships with
            practitioners. Many practice sales happen through word-of-mouth
            referrals within the professional community.
          </li>
          <li>
            <strong>Existing client relationships:</strong> If you already
            operate an accounting practice, your clients, referral partners,
            and professional network are the best source of tuck-in acquisition
            leads.
          </li>
        </ul>

        <h2 className={h2Class}>The bottom line</h2>
        <p>
          Accounting practices offer search fund entrepreneurs a rare
          combination of recurring revenue, high retention, defensive
          economics, and a generational supply of motivated sellers. The
          sector rewards operators who invest in advisory upsell, technology
          modernization, and disciplined{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build execution</Link>.
          The risks &mdash; client attrition, staff retention, and licensing
          complexity &mdash; are real but manageable with proper transition
          planning and deal structuring. For acquirers who approach the
          profession with respect for its traditions while bringing a
          modern operating mindset, an accounting practice can be the
          foundation of a highly profitable, scalable platform business
          that generates attractive returns for years to come.
        </p>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          How much is an accounting practice worth?
        </h3>
        <p>
          Tax and bookkeeping practices typically sell for 0.8&ndash;1.2x
          annual revenue. Audit-focused firms command 1.0&ndash;1.4x due to
          higher margins and regulatory barriers. Advisory-heavy practices
          where consulting and CFO services represent 40%+ of revenue can
          reach 1.2&ndash;2.0x revenue or 5&ndash;8x EBITDA. Owner
          compensation must be normalized carefully &mdash; many sole
          practitioners pay themselves $300K&ndash;$500K, significantly above
          the replacement cost of $120K&ndash;$200K for a salaried CPA. For a
          detailed methodology, see our{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            business valuation guide
          </Link>.
        </p>

        <h3 className={h3Class}>
          Can a non-CPA buy an accounting practice?
        </h3>
        <p>
          It depends on the state. Most states require CPA firms to be
          majority-owned by licensed CPAs. However, an increasing number of
          states have adopted alternative practice structure provisions that
          allow non-CPA ownership under specific conditions. Before pursuing
          an acquisition, consult the target state&rsquo;s board of accountancy
          and engage a healthcare or professional services attorney who
          understands the local ownership rules. Non-CPA acquirers often
          structure deals with a licensed CPA partner who holds the required
          ownership stake.
        </p>

        <h3 className={h3Class}>
          What is the biggest risk when buying an accounting practice?
        </h3>
        <p>
          Client attrition is the primary risk. CPA-client relationships are
          deeply personal, and when the trusted partner departs, 10&ndash;20%
          of clients may leave within the first 12 months if the transition
          is poorly managed. Mitigate this with a structured 12&ndash;24 month
          seller involvement period, joint client meetings, retention-based{" "}
          <Link href="/learn/earn-out-structures" className="text-apple-accent hover:underline">
            earn-out structures
          </Link>{" "}
          tied to revenue retention milestones, and a deliberate communication
          strategy that emphasizes continuity of service.
        </p>
      </div>
    </article>
  );
}
