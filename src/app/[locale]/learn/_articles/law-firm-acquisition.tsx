import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function LawFirmAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Buy a Law Firm: Acquisition Guide for Entrepreneurs</h1>
      <p className="text-sm text-apple-gray-500 mt-3">16 min read</p>

      <div className={bodyClass}>
        <p>
          The U.S. legal services industry generates over $400 billion in annual revenue, yet
          roughly 70% of its 450,000+ firms are solo practitioners or shops with fewer than five
          attorneys, according to the{" "}
          <a href="https://www.americanbar.org/groups/law_practice/publications/techreport/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">ABA Profile of the Legal Profession</a>.
          A massive retirement wave is underway: nearly 40% of law firm partners plan to retire
          within the next decade, and 70% of first-generation firms do not survive their founding
          partners. That collision of fragmentation and succession crisis makes small law firms
          one of the most underexplored acquisition opportunities for search fund operators and
          self-funded buyers &mdash; provided you understand the regulatory minefield around
          non-lawyer ownership.
        </p>
        <p>
          This guide covers the ownership structures that actually work, which practice areas
          make the best targets, realistic valuation ranges backed by market data, the
          alternative legal services (ALSP) trend creating new entry points, and the technology
          gaps that give acquirer-operators a genuine edge. If you are evaluating legal services
          as a{" "}
          <Link href="/learn/good-acquisition-target" className="text-apple-accent hover:underline">potential acquisition target</Link>,
          this is the practical framework you need.
        </p>

        {/* ── Section 1 ── */}
        <h2 className={h2Class}>The Non-Lawyer Ownership Problem: ABA Rule 5.4 and How to Work Around It</h2>
        <p>
          The single biggest barrier to buying a law firm is ABA Model Rule of Professional
          Conduct 5.4, adopted in some form by 49 U.S. states. The rule prohibits non-lawyers
          from holding any ownership interest in a law firm, serving as a director or officer,
          or exercising control over a lawyer&rsquo;s professional judgment. For an
          entrepreneur without a J.D., this effectively blocks a direct acquisition of a
          traditional law practice in most jurisdictions.
        </p>
        <p>
          But the market is shifting. Three pathways now exist for non-lawyer acquirers:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Alternative Business Structure (ABS) states:</strong> Arizona eliminated
            Rule 5.4 entirely in 2021, becoming the first U.S. state to allow full non-lawyer
            ownership of law firms. As of early 2026, the Arizona Supreme Court has approved
            over 100 ABS licenses. Utah operates a regulatory sandbox that permits non-lawyer
            ownership under supervision. Washington, D.C. has allowed non-lawyers to hold
            minority stakes since 1991 &mdash; the longest-running exception in the country.
          </li>
          <li>
            <strong>Management Services Organization (MSO) model:</strong> The MSO structure,
            detailed in a January 2026{" "}
            <a href="https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2026/january-february-2026/law-firm-msos-are-ethically-everywhere/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">ABA Law Practice Magazine feature</a>,
            splits the firm into two entities. The &ldquo;core&rdquo; law firm remains
            100% lawyer-owned and handles legal work exclusively. A separate MSO &mdash;
            owned by investors or operators &mdash; acquires and runs the business
            infrastructure: technology, marketing, HR, real estate, billing, and staffing.
            The MSO charges a management fee, typically 15&ndash;30% of the firm&rsquo;s
            gross revenue. This model complies with Rule 5.4 in all 50 states because the
            MSO never owns the law firm itself.
          </li>
          <li>
            <strong>Legal services companies (non-regulated):</strong> Businesses that provide
            legal-adjacent services &mdash; document automation, compliance consulting,
            contract review, legal process outsourcing &mdash; operate outside bar regulation
            entirely. No law license required. Companies like LegalZoom (which went public
            in 2021 at a $2B+ valuation) and Rocket Lawyer proved this model at scale.
          </li>
        </ul>
        <p>
          The UK provides a useful preview of where U.S. regulation may head. Since the
          Legal Services Act 2007 enabled Alternative Business Structures, over 1,200 ABS
          licenses have been issued by the Solicitors Regulation Authority. Critically,
          SRA disciplinary records show that ABS firms fare no better or worse than
          traditional firms on ethics compliance &mdash; undermining the core argument
          that non-lawyer ownership threatens professional independence.
        </p>

        {/* ── Section 2 ── */}
        <h2 className={h2Class}>Which Practice Areas Make the Best Acquisition Targets</h2>
        <p>
          Not all law firms are created equal from an acquisition standpoint. The ideal
          target has recurring or semi-recurring revenue, moderate{" "}
          <Link href="/learn/owner-dependent-business" className="text-apple-accent hover:underline">owner dependency</Link>,
          and a practice area where operational efficiency (not just legal brilliance)
          drives profitability. Biglaw &mdash; the Am Law 200 firms with $100M+
          revenue &mdash; is off the table for ETA-scale buyers. The sweet spot is
          firms with $1M&ndash;$10M in revenue across these practice areas:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Personal injury (PI):</strong> The most acquisition-friendly practice
            area, with clear economics. PI firms typically operate on 33&ndash;40%
            contingency fees, and well-run shops achieve 40&ndash;50% profit margins
            according to{" "}
            <a href="https://thelawpracticeexchange.com/what-makes-personal-injury-law-firms-a-unique-and-sometimes-complicated-buy/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">The Law Practice Exchange</a>.
            Revenue is lumpy &mdash; driven by case settlements that can spike or dip
            quarter to quarter &mdash; but the pipeline of pending cases provides
            visibility. The key risk: most PI firms are built on marketing spend. If the
            founder&rsquo;s name is the brand, client acquisition costs may spike
            post-transition. Look for firms with strong SEO assets, Google reviews, and
            referral networks that transcend any single attorney.
          </li>
          <li>
            <strong>Estate planning and trusts:</strong> Flat-fee, document-heavy work with
            high repeatability. Clients return for updates when life events occur (births,
            divorces, asset changes), creating natural recurring revenue. Average revenue
            per matter is lower ($1,500&ndash;$5,000) but volume is consistent and
            predictable. This practice area has the highest automation potential &mdash;
            platforms like WealthCounsel and Estateably can template 80% of standard
            documents.
          </li>
          <li>
            <strong>Immigration:</strong> Growing demand driven by both employment-based
            and family-based filings. Government filing fees create a pass-through revenue
            stream, and the work is heavily process-oriented, making it well-suited to
            systems and delegation. USCIS backlogs mean cases last 12&ndash;36 months,
            producing long client relationships.
          </li>
          <li>
            <strong>Insurance defense:</strong> Volume-based, lower-margin work, but
            relationships with insurance carriers produce steady, predictable case flow.
            Margins are tighter (10&ndash;15%) because hourly rates are negotiated with
            carrier panels, but the revenue is among the most dependable in legal services.
          </li>
          <li>
            <strong>Business law and corporate:</strong> Entity formation, contract drafting,
            and M&amp;A advisory work. Retainer-based arrangements with small and mid-size
            business clients create genuinely recurring revenue. This practice area pairs
            well with accounting firm referral relationships.
          </li>
        </ul>
        <p>
          Practice areas to approach with caution: criminal defense (high owner dependency,
          reputation-driven), family law (emotionally volatile clients, difficult to
          systematize), and litigation-heavy practices (binary outcomes, extended timelines,
          working capital intensive).
        </p>

        {/* ── Section 3 ── */}
        <h2 className={h2Class}>Realistic Valuation Multiples: What Small Law Firms Actually Sell For</h2>
        <p>
          Law firm valuations differ substantially from the{" "}
          <Link href="/learn/ebitda-multiples-by-industry" className="text-apple-accent hover:underline">EBITDA multiples used in most industries</Link>.
          The reason is structural: a law firm&rsquo;s value is overwhelmingly tied to
          human capital &mdash; the attorneys who serve clients, maintain relationships,
          and generate revenue. When a founding partner retires, 30&ndash;50% of that
          firm&rsquo;s clients may not transition to a successor, according to data from
          the{" "}
          <a href="https://www.olmsteadassoc.com/resource-center/succession-getting-started/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Olmstead &amp; Associates succession planning practice</a>.
        </p>
        <p>
          Here are the ranges backed by recent transaction data:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Revenue multiples:</strong>{" "}
            <a href="https://peakbusinessvaluation.com/valuation-multiples-for-a-law-firm/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Peak Business Valuation</a>{" "}
            reports that small law firms transact at 0.87x&ndash;1.21x annual revenue.
            General practice firms fall at the low end (0.5x&ndash;0.8x), while specialized
            practices with transferable client bases command 0.8x&ndash;1.5x. PI firms with
            strong pending-case pipelines can exceed 1x when the case inventory is valued
            separately.
          </li>
          <li>
            <strong>SDE multiples:</strong> For owner-operated firms under $2M in revenue,
            Seller&rsquo;s Discretionary Earnings (SDE) multiples of 2.4x&ndash;2.8x are
            typical. This aligns with what you would expect from a professional services
            business with moderate transition risk. Understand the relationship between SDE
            and{" "}
            <Link href="/learn/adjusted-ebitda" className="text-apple-accent hover:underline">adjusted EBITDA</Link>{" "}
            before comparing these figures to other deal benchmarks.
          </li>
          <li>
            <strong>EBITDA multiples:</strong> Larger firms ($3M+ revenue) with multiple
            attorneys and institutional client relationships trade at 2.5x&ndash;3.5x EBITDA.
            Firms with strong recurring revenue (retainer-based business law, ongoing
            compliance work) trade at the upper end.
          </li>
          <li>
            <strong>Earnout component:</strong> Given the client transition risk, 20&ndash;40%
            of total deal value is commonly structured as an earnout tied to client
            retention over 12&ndash;24 months. This protects the buyer against the
            scenario where the departing partner&rsquo;s clients leave.
          </li>
        </ul>
        <p>
          Compare these ranges to a typical{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">financial due diligence</Link>{" "}
          process: law firms require extra scrutiny on revenue concentration by attorney,
          work-in-progress (WIP) realization rates, and trust account (IOLTA) compliance
          history. The{" "}
          <a href="https://www.clio.com/resources/legal-trends/2024-report/" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">2024 Clio Legal Trends Report</a>{" "}
          found that the average law firm utilization rate is just 38% &mdash; meaning
          lawyers bill only 3 hours of an 8-hour day. A buyer who can move that number
          to 50% through better systems, intake processes, and workflow management
          unlocks substantial margin expansion without adding a single new client.
        </p>

        {/* ── Section 4 ── */}
        <h2 className={h2Class}>The Succession Crisis: Why Deal Flow Is Accelerating</h2>
        <p>
          The demographics are stark. According to an{" "}
          <a href="https://www.abajournal.com/news/article/as_wave_of_baby_boomer_partners_retire_law_firms_face_increasing_costs_and" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">ABA Journal analysis</a>,
          approximately 60% of law firm partners are baby boomers, and 25% of all
          licensed attorneys are 65 or older. Lawyers in their 60s control 25&ndash;35%
          of revenue at their firms. Yet only 37% of firms have a formal succession plan,
          per MLA Global research published in{" "}
          <a href="https://news.bloomberglaw.com/business-and-practice/law-firm-succession-planning-preparing-for-the-baby-boomer-retirement-wave" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Bloomberg Law</a>.
        </p>
        <p>
          This creates a{" "}
          <Link href="/learn/proprietary-deal-flow" className="text-apple-accent hover:underline">proprietary deal flow</Link>{" "}
          opportunity that is difficult to access through standard broker channels.
          Most retiring attorneys have never considered selling their firm as a going
          concern. They assume they will simply wind down, refer clients to colleagues,
          and walk away from decades of built goodwill. A well-crafted direct outreach
          campaign &mdash; targeting attorneys aged 60+ in desirable practice areas and
          geographies &mdash; can surface motivated sellers who have no other exit path.
        </p>
        <p>
          Fairfax Associates reported 59 completed law firm mergers in 2025, an 18%
          increase over 2024, with 16 additional combinations already announced for
          2026. The vast majority of acquired firms have 5&ndash;20 lawyers. The trend
          is clear: consolidation is accelerating, and the firms being absorbed are
          exactly the size that ETA buyers target.
        </p>
        <p>
          For{" "}
          <Link href="/learn/working-with-brokers" className="text-apple-accent hover:underline">broker-sourced deals</Link>,
          specialized legal practice brokerages like The Law Practice Exchange, Sell
          Your Law Practice, and Practice Transitions have emerged specifically to
          address this succession gap. Deal volume through these channels has grown
          steadily since 2020 as awareness of firm transferability increases.
        </p>

        {/* ── Section 5 ── */}
        <h2 className={h2Class}>The ALSP Trend: A $28.5 Billion Alternative Entry Point</h2>
        <p>
          If bar regulations make direct law firm ownership impractical in your target
          state, alternative legal services providers (ALSPs) offer a completely
          unregulated path into legal services revenue. The{" "}
          <a href="https://www.lawnext.com/2025/01/alternative-legal-services-market-grows-to-28-5b-as-industry-faces-critical-juncture-thomson-reuters-report-finds.html" target="_blank" rel="noopener noreferrer" className="text-apple-accent hover:underline">Thomson Reuters 2025 ALSP Report</a>{" "}
          found that the global ALSP market has grown to $28.5 billion, achieving an
          18% compound annual growth rate from 2021 to 2023. Over 57% of corporate law
          departments now use ALSPs for services ranging from flexible staffing to
          e-discovery and litigation support.
        </p>
        <p>
          ALSP categories that align well with small-scale acquisitions:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Legal process outsourcing (LPO):</strong> Contract review, document
            management, and legal research performed by paralegals and non-lawyer
            specialists. These businesses often serve law firms as clients, creating a
            B2B recurring revenue model.
          </li>
          <li>
            <strong>Compliance consulting:</strong> Regulatory compliance for specific
            industries (healthcare, financial services, real estate) performed by
            subject-matter experts who are not practicing attorneys. Growing demand
            driven by increasing regulatory complexity.
          </li>
          <li>
            <strong>Legal technology:</strong> Practice management, billing, intake
            automation, and AI-assisted document drafting tools. Clio, MyCase, and
            PracticePanther are examples at scale, but vertical SaaS products serving
            niche practice areas remain acquirable.
          </li>
          <li>
            <strong>E-discovery and litigation support:</strong> Data processing,
            document review, and trial preparation services. Project-based revenue
            with high margins and relatively low attorney involvement.
          </li>
        </ul>
        <p>
          The ALSP acquisition thesis aligns naturally with a{" "}
          <Link href="/learn/revenue-growth-playbook" className="text-apple-accent hover:underline">revenue growth playbook</Link>{" "}
          focused on cross-selling. Acquire an LPO or compliance consulting firm, then
          expand into adjacent service lines. The 35% of law firms that view
          ALSP providers leading in generative AI as more attractive partners (per
          the same Thomson Reuters report) signals that technology-forward ALSPs
          will command premium valuations in the years ahead.
        </p>

        {/* ── Section 6 ── */}
        <h2 className={h2Class}>Technology Disruption: Where Operational Improvement Creates the Most Value</h2>
        <p>
          Small law firms are among the least technologically sophisticated businesses
          you will encounter in any acquisition search. The Clio Legal Trends Report
          consistently shows that the average small-firm attorney bills only 2.6 hours
          per 8-hour day &mdash; a 33% utilization rate. The gap between time worked
          and time billed represents a massive operational improvement opportunity for
          a buyer who brings systems thinking.
        </p>
        <p>
          High-impact technology investments post-acquisition:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Client intake automation:</strong> Most small firms still rely on
            phone calls and paper forms for intake. Implementing tools like Lawmatics
            or Clio Grow can reduce intake time by 60% and improve lead-to-client
            conversion rates. This is the single fastest path to revenue growth
            without hiring additional attorneys.
          </li>
          <li>
            <strong>Practice management migration:</strong> Firms running on
            spreadsheets, Outlook calendars, and paper files (still common in solo
            and small practices) should be migrated to cloud-based practice
            management platforms. Clio, PracticePanther, and MyCase are the market
            leaders. The ROI comes from reduced missed deadlines, better time
            capture, and improved billing discipline.
          </li>
          <li>
            <strong>Flat-fee packaging:</strong> Converting hourly billing to
            flat-fee or subscription models for predictable practice areas (estate
            planning, entity formation, immigration filings) simultaneously improves
            client satisfaction and firm profitability. When a firm tracks actual
            time spent on flat-fee matters, it can identify process inefficiencies
            and increase effective hourly rates by 30&ndash;50%.
          </li>
          <li>
            <strong>AI-assisted document drafting:</strong> Generative AI tools
            specifically trained on legal documents &mdash; products from companies
            like CoCounsel (Thomson Reuters), Harvey, and Spellbook &mdash; are
            reducing first-draft creation time for standard legal documents by
            50&ndash;70%. For high-volume practice areas like estate planning and
            business formation, this translates directly to margin expansion.
          </li>
          <li>
            <strong>Digital marketing:</strong> Most small firms spend under 2% of
            revenue on marketing. A disciplined investment of 5&ndash;10% of revenue
            into SEO, Google Local Services Ads, and content marketing can double
            new client intake within 12&ndash;18 months. PI firms in particular are
            marketing businesses that happen to practice law &mdash; the firms that
            win on client acquisition win on revenue.
          </li>
        </ol>
        <p>
          Building a{" "}
          <Link href="/learn/kpi-dashboard-post-acquisition" className="text-apple-accent hover:underline">KPI dashboard</Link>{" "}
          during your{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">first 100 days</Link>{" "}
          that tracks utilization rate, realization rate, cost per lead, and
          client lifetime value will expose exactly where the margin improvement
          opportunities live.
        </p>

        {/* ── Section 7 ── */}
        <h2 className={h2Class}>Due Diligence Priorities Specific to Law Firms</h2>
        <p>
          Standard{" "}
          <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">operational due diligence</Link>{" "}
          applies, but law firms have unique risk factors that demand additional scrutiny:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Revenue concentration by attorney:</strong> If a single attorney
            generates 40%+ of firm revenue, the acquisition risk profile changes
            fundamentally. Clients hire lawyers, not firms &mdash; especially at
            small practices. Model a scenario where that attorney departs 12 months
            post-closing and determine whether the deal still works at the agreed price.
          </li>
          <li>
            <strong>Client portability:</strong> Unlike most businesses, law firm
            clients can walk out the door at any time. Ethical rules require that
            clients be notified of ownership transitions and given the choice to
            stay, transfer to the departing attorney, or find new counsel. Historical
            retention rates during prior attorney departures are the best predictor
            of post-acquisition client behavior.
          </li>
          <li>
            <strong>Trust account (IOLTA) compliance:</strong> Mishandling of client
            trust funds is the #1 cause of attorney disbarment. Review three years
            of trust account reconciliations. Any irregularities &mdash; commingling,
            late reconciliations, unexplained shortfalls &mdash; are dealbreakers
            that signal systemic compliance failures.
          </li>
          <li>
            <strong>Malpractice history and insurance:</strong> Request a full claims
            history from the firm&rsquo;s professional liability insurer. Active
            claims or a pattern of past claims indicate quality control problems.
            Ensure &ldquo;tail&rdquo; coverage is purchased to protect against
            claims arising from pre-acquisition work.
          </li>
          <li>
            <strong>Work-in-progress (WIP) and realization rates:</strong> A firm may
            show $2M in billed time, but if only 85% is collected, effective revenue
            is $1.7M. Realization rates below 90% on hourly work suggest billing
            discipline issues, client pushback on fees, or quality concerns. Contingency
            firms require separate analysis of case pipeline value &mdash; discount
            pending cases by their probability of recovery and expected timeline.
          </li>
          <li>
            <strong>Bar compliance and disciplinary history:</strong> Search the state
            bar&rsquo;s public disciplinary database for every attorney at the firm.
            Sanctions, suspensions, or pending investigations affect the firm&rsquo;s
            reputation and the viability of retained attorneys post-closing.
          </li>
        </ul>

        {/* ── Section 8: FAQ ── */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>Can a non-lawyer buy a law firm in the United States?</h3>
        <p>
          Directly owning a law firm is prohibited in most states under ABA Model Rule 5.4.
          However, Arizona allows full non-lawyer ownership through Alternative Business
          Structure (ABS) licenses, Utah permits it under its regulatory sandbox, and
          Washington, D.C. allows non-lawyer minority stakes. In all other states, the MSO
          model lets non-lawyers acquire and operate the business infrastructure (technology,
          marketing, HR, real estate) while a lawyer-owned entity retains the legal practice.
          Legal services businesses that do not involve the practice of law &mdash; compliance
          consulting, document automation, legal process outsourcing &mdash; have no
          ownership restrictions anywhere.
        </p>

        <h3 className={h3Class}>How much does it cost to acquire a small law firm?</h3>
        <p>
          Small law firms with $500K&ndash;$3M in annual revenue typically sell for
          0.5x&ndash;1.5x revenue or 2.4x&ndash;3.5x earnings, depending on practice
          area, client concentration, and transition risk. A $1.5M-revenue estate planning
          firm might sell for $1.2M&ndash;$1.8M, while a PI firm with a strong case
          pipeline could command a premium. Expect 20&ndash;40% of the purchase price to
          be structured as an earnout tied to client retention. Financing options include{" "}
          <Link href="/learn/sba-7a-loans" className="text-apple-accent hover:underline">SBA 7(a) loans</Link>{" "}
          (if the buyer is acquiring via an MSO or a non-regulated legal services company),
          seller financing (common in attorney-to-attorney transitions), and conventional
          bank debt for larger transactions.
        </p>

        <h3 className={h3Class}>What is the biggest risk when acquiring a law firm?</h3>
        <p>
          Attorney and client departure. Unlike manufacturing or SaaS businesses, a law
          firm&rsquo;s revenue walks out the door every night. If the founding partner
          retires and key associates leave, 30&ndash;50% of clients may follow them.
          Mitigate this through employment agreements with non-solicitation clauses for
          key attorneys, a structured 12&ndash;24 month founder transition period,
          earnout provisions tied to retention metrics, and investing heavily in{" "}
          <Link href="/learn/employee-retention-acquisition" className="text-apple-accent hover:underline">employee retention</Link>{" "}
          and{" "}
          <Link href="/learn/customer-retention-post-acquisition" className="text-apple-accent hover:underline">client retention strategies</Link>{" "}
          from day one.
        </p>

        <h3 className={h3Class}>Is the MSO model legal, and how does it actually work?</h3>
        <p>
          Yes. The MSO model has been used in healthcare (dental service organizations,
          veterinary corporate groups) for decades and is now gaining traction in legal
          services. The structure creates two entities: a lawyer-owned law firm that
          performs all legal work, and an investor-owned MSO that provides business
          services (technology, marketing, staffing, office space) in exchange for a
          management fee. A January 2026 ABA Law Practice Magazine article confirmed
          that MSOs &ldquo;in no way involve nonlawyer ownership of law firms
          themselves&rdquo; and comply with Rule 5.4 because the MSO operates the
          business side without directing or controlling legal judgment. KPMG&rsquo;s
          early 2025 approval for an ABS license in Arizona further validated corporate
          investment structures in legal services.
        </p>

        <h3 className={h3Class}>Should I target a law firm or an alternative legal services provider?</h3>
        <p>
          It depends on your risk tolerance and regulatory appetite. Law firm acquisitions
          (via MSO or ABS states) offer higher margins &mdash; well-run firms generate
          30&ndash;50% EBITDA margins &mdash; but come with regulatory complexity and
          client transition risk. ALSPs operate in a $28.5 billion market growing at
          18% CAGR with zero bar regulation, but margins tend to be lower (15&ndash;25%)
          and competition from technology platforms is intensifying. The hybrid approach
          &mdash; acquiring an ALSP and expanding into MSO-managed law firm operations
          &mdash; is increasingly common among sophisticated buyers pursuing a{" "}
          <Link href="/learn/geographic-expansion" className="text-apple-accent hover:underline">geographic expansion</Link>{" "}
          or platform strategy.
        </p>
      </div>
    </article>
  );
}
