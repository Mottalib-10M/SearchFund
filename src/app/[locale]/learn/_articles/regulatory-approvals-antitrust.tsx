import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function RegulatoryApprovalsAntitrustArticle() {
  return (
    <article>
      <h1 className={h1Class}>Regulatory Approvals &amp; Antitrust Review in M&amp;A</h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Regulatory approvals and antitrust review are among the most
          consequential, and frequently misunderstood, aspects
          of the acquisition process. While many search fund and ETA
          transactions fall below the thresholds that trigger mandatory
          merger control filings, understanding the regulatory environment is
          essential for any acquirer. As targets grow, as buy-and-build
          strategies create market concentration, and as foreign investment
          screening regimes expand globally, the probability that regulatory
          approval will be required for your transaction increases with each
          deal. A failure to identify filing requirements can result in
          significant fines, voided transactions, and criminal liability
          in some jurisdictions. This guide provides a thorough overview
          of merger control frameworks, filing thresholds, review processes,
          remedies, and sector-specific considerations that acquirers must
          manage to close their deals successfully.
        </p>

        <h2 className={h2Class}>Merger control fundamentals</h2>
        <p>
          Merger control (also called antitrust review or competition review)
          is the process by which government authorities evaluate whether a
          proposed acquisition will substantially reduce competition in the
          relevant market. The goal is to prevent the creation or
          strengthening of market power that would harm consumers through
          higher prices, reduced output, diminished innovation, or lower
          quality. Virtually every major jurisdiction has a merger control
          regime, each with its own thresholds, substantive tests, and
          procedural requirements.
        </p>
        <p>
          The key concept is the &ldquo;relevant market,&rdquo; which merger
          control authorities define along two dimensions: the product market
          (what goods or services compete with each other) and the geographic
          market (the area in which competition occurs). Market definition
          is often the most contested aspect of merger review, because the
          broader the market is defined, the lower the merging parties&apos;
          combined market share appears, and vice versa.
        </p>

        <h2 className={h2Class}>US merger control: Hart-Scott-Rodino Act</h2>
        <p>
          In the United States, the primary merger control regime is the
          Hart-Scott-Rodino Antitrust Improvements Act of 1976 (HSR Act).
          The HSR Act requires parties to transactions that meet certain
          size thresholds to file pre-merger notifications with the Federal
          Trade Commission (FTC) and the Department of Justice (DOJ)
          Antitrust Division, and to observe a waiting period before
          consummating the transaction.
        </p>

        <h3 className={h3Class}>Filing thresholds</h3>
        <p>
          The HSR Act uses a &ldquo;size of transaction&rdquo; test and, in
          some cases, a &ldquo;size of person&rdquo; test. The thresholds
          are adjusted annually for inflation. As of recent adjustments,
          the basic threshold requires filing for transactions where the
          acquiring person will hold an aggregate total amount of voting
          securities, assets, or interests of the acquired person valued
          above the minimum threshold (which is adjusted annually and has
          been in the range of $100 million to $111.4 million in recent
          years). For transactions above the higher threshold (approximately
          $445 million and above), filing is required regardless of the
          size of the parties.
        </p>
        <p>
          Many search fund acquisitions fall below the HSR threshold, meaning
          no filing is required. However, the transaction can still be
          reviewed and challenged by the FTC or DOJ under the Clayton Act
          even without an HSR filing. The agencies have the authority to
          investigate and seek injunctive relief against any acquisition
          they believe may substantially lessen competition, regardless of
          the size of the transaction.
        </p>

        <h3 className={h3Class}>Review process and timeline</h3>
        <p>
          After filing, there is an initial waiting period (typically 30
          days, or 15 days for cash tender offers). During this period,
          the reviewing agency (either the FTC or DOJ, which allocate cases
          between them) conducts a preliminary assessment. If the agency
          has competition concerns, it issues a &ldquo;Second Request&rdquo;
          for additional information, a detailed and often burdensome
          document request that can take months to comply with. The waiting
          period is extended until 30 days after the parties have
          substantially complied with the Second Request. The entire process,
          if a Second Request is issued, can take six to twelve months or
          longer.
        </p>
        <p>
          Buyers should address regulatory timing in their{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            letter of intent
          </Link>{" "}
          by including conditions precedent for regulatory approval and
          establishing realistic timelines for the{" "}
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
            closing process
          </Link>.
        </p>

        <h2 className={h2Class}>EU merger control: European Union Merger Regulation</h2>
        <p>
          In the European Union, the European Commission has exclusive
          jurisdiction over &ldquo;concentrations with a Community
          dimension&rdquo; under the EU Merger Regulation (EUMR, Council
          Regulation 139/2004). Concentrations include mergers, acquisitions
          of control, and the creation of full-function joint ventures.
        </p>

        <h3 className={h3Class}>Jurisdictional thresholds</h3>
        <p>
          A concentration has a Community dimension if it meets one of two
          sets of turnover thresholds:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Primary thresholds:</strong> (a) the combined aggregate
            worldwide turnover of all undertakings concerned exceeds &euro;5
            billion, AND (b) the aggregate EU-wide turnover of each of at
            least two of the undertakings concerned exceeds &euro;250 million
            unless each of the undertakings concerned achieves more
            than two-thirds of its aggregate EU-wide turnover within one
            and the same Member State.
          </li>
          <li>
            <strong>Alternative thresholds:</strong> (a) the combined
            aggregate worldwide turnover exceeds &euro;2.5 billion, AND
            (b) in each of at least three Member States, the combined
            aggregate turnover exceeds &euro;100 million, AND (c) in each
            of those same three Member States, the aggregate turnover of
            each of at least two parties exceeds &euro;25 million, AND
            (d) the aggregate EU-wide turnover of each of at least two
            parties exceeds &euro;100 million, again subject to the
            two-thirds rule.
          </li>
        </ul>
        <p>
          For concentrations that do not meet the EUMR thresholds, national
          merger control regimes in individual Member States may still apply.
          Many Member States have their own filing thresholds based on
          domestic turnover, and a single transaction may trigger filing
          obligations in multiple Member States simultaneously.
        </p>

        <h3 className={h3Class}>Review process</h3>
        <p>
          The EUMR provides for a two-phase review process. Phase I is a
          preliminary assessment lasting 25 working days (extendable to 35
          working days if remedies are offered). If the Commission identifies
          serious doubts about the concentration&apos;s compatibility with
          the internal market, it opens a Phase II in-depth investigation,
          which lasts 90 working days (extendable to 105 or 125 working
          days). The substantive test is whether the concentration would
          &ldquo;significantly impede effective competition&rdquo; (SIEC
          test), in particular by creating or strengthening a dominant
          position.
        </p>

        <h2 className={h2Class}>UK merger control: Competition and Markets Authority</h2>
        <p>
          Since Brexit, the UK Competition and Markets Authority (CMA)
          operates independently of the European Commission. The UK has a
          voluntary merger control regime, there is no mandatory
          filing requirement. However, the CMA has the power to investigate
          and intervene in any merger that meets its jurisdictional
          thresholds, whether or not the parties have notified the
          transaction.
        </p>

        <h3 className={h3Class}>Jurisdictional tests</h3>
        <ul className={ulClass}>
          <li>
            <strong>Turnover test:</strong> The target&apos;s UK turnover
            exceeds &pound;70 million in the most recent financial year.
          </li>
          <li>
            <strong>Share of supply test:</strong> The merger results in the
            creation or enhancement of a share of supply of at least 25%
            of goods or services of any description in the UK or a
            substantial part of the UK. This is a broad and flexible test
            that the CMA interprets expansively.
          </li>
        </ul>
        <p>
          The CMA&apos;s share of supply test is notably lower than most
          merger control thresholds globally, which means that relatively
          small acquisitions can fall within the CMA&apos;s jurisdiction.
          This is particularly relevant for buy-and-build strategies where
          successive acquisitions in the same sector gradually build market
          position. Acquirers pursuing{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
            cross-border acquisitions
          </Link>{" "}
          involving UK targets should assess CMA jurisdiction early in
          the process.
        </p>

        <h2 className={h2Class}>Remedies: behavioral vs. structural</h2>
        <p>
          When a competition authority concludes that a proposed acquisition
          raises competition concerns, the authority may clear the
          transaction subject to remedies, conditions that the parties
          must satisfy to address the identified concerns. Remedies
          fall into two broad categories.
        </p>

        <h3 className={h3Class}>Structural remedies</h3>
        <p>
          Structural remedies involve changes to the ownership or control of
          assets. The most common structural remedy is a divestiture , 
          the sale of a business unit, product line, or specific assets to
          an independent third party. Structural remedies are generally
          preferred by competition authorities because they address the
          competition concern directly and permanently, without requiring
          ongoing monitoring. The European Commission has a strong preference
          for structural remedies and will accept behavioral remedies only
          in exceptional circumstances.
        </p>

        <h3 className={h3Class}>Behavioral remedies</h3>
        <p>
          Behavioral remedies impose ongoing obligations on the merged
          entity&apos;s conduct, such as commitments to license intellectual
          property to competitors, maintain interoperability with competing
          products, supply key inputs to downstream competitors, or refrain
          from certain pricing practices. Behavioral remedies are less
          intrusive than divestitures but require ongoing monitoring and
          enforcement, which makes authorities skeptical about their
          effectiveness.
        </p>
        <p>
          For search fund acquirers, the practical relevance of remedies
          is greatest in buy-and-build strategies. As you acquire multiple
          businesses in the same sector, your combined market share may
          reach levels that trigger competition concerns. Plan your
          acquisition strategy with an awareness of market share thresholds,
          and consider proactively addressing competition authority concerns
          in your deal documentation through{" "}
          <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
            representations and warranties
          </Link>{" "}
          that address market position and competitive dynamics.
        </p>

        <h2 className={h2Class}>Gun-jumping rules</h2>
        <p>
          &ldquo;Gun-jumping&rdquo; refers to conduct by the merging parties
          that occurs before the transaction has been cleared by the relevant
          competition authority. Gun-jumping rules exist to ensure that the
          competitive independence of the merging businesses is maintained
          until the authority has completed its review. There are two main
          categories of gun-jumping violations.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Failure to notify or observe the waiting period:</strong>
            Consummating a reportable transaction without filing the required
            pre-merger notification, or closing before the waiting period has
            expired, is a strict liability violation in most jurisdictions.
            In the US, the maximum civil penalty for HSR gun-jumping exceeds
            $50,000 per day. The European Commission has imposed fines of
            up to &euro;124.5 million for failure to notify.
          </li>
          <li>
            <strong>Premature coordination or integration:</strong> Even
            before closing, the parties may violate competition law if they
            coordinate pricing, allocate customers, share competitively
            sensitive information outside of legitimate due diligence
            protocols, or exercise control over the target&apos;s business
            decisions before the transaction is approved. The line between
            legitimate pre-closing planning and unlawful premature
            integration is sometimes unclear, and parties should establish
            &ldquo;clean team&rdquo; protocols to manage information
            exchange during the pre-closing period.
          </li>
        </ul>
        <p>
          Acquirers must be aware of gun-jumping risks from the moment the{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence process
          </Link>{" "}
          begins. Implement strong information barriers, restrict access to
          competitively sensitive data to a limited clean team, and ensure
          that all pre-closing planning activities are structured as
          contingent on regulatory approval.
        </p>

        <h2 className={h2Class}>Sector-specific regulatory approvals</h2>
        <p>
          Beyond general merger control, many sectors are subject to
          additional regulatory approval requirements that can affect
          the closing timeline and feasibility of an acquisition.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Financial services:</strong> Acquisitions of banks,
            insurance companies, investment firms, and other regulated
            financial institutions typically require approval from the
            relevant financial supervisory authority (e.g., the Federal
            Reserve or OCC in the US, the ECB or national supervisors in
            the EU, the PRA/FCA in the UK). These approvals assess the
            acquirer&apos;s fitness, propriety, and financial soundness.
          </li>
          <li>
            <strong>Healthcare:</strong> Acquisitions in the healthcare
            sector may require approval from health regulators, particularly
            when the target holds licenses to operate medical facilities,
            pharmacies, or laboratories. Some jurisdictions require
            &ldquo;change of ownership&rdquo; applications for healthcare
            licenses.
          </li>
          <li>
            <strong>Telecommunications and media:</strong> Acquisitions
            involving telecommunications operators, broadcasters, or media
            companies often require approval from the sector regulator
            (e.g., the FCC in the US, Ofcom in the UK, ARCEP in France).
            Media plurality concerns may also be assessed.
          </li>
          <li>
            <strong>Defense and national security:</strong> Acquisitions
            involving defense contractors, critical infrastructure, or
            companies with access to classified information are subject to
            national security review in most jurisdictions (see foreign
            investment screening below).
          </li>
          <li>
            <strong>Energy and utilities:</strong> Acquisitions of energy
            companies, water utilities, and other regulated utilities may
            require approval from energy regulators or environmental
            authorities.
          </li>
        </ul>

        <h2 className={h2Class}>Foreign investment screening</h2>
        <p>
          Foreign investment screening regimes have expanded dramatically
          in recent years, driven by concerns about national security,
          technological sovereignty, and critical infrastructure protection.
          These regimes impose additional review requirements on acquisitions
          by foreign persons or entities, beyond the standard merger control
          framework.
        </p>

        <h3 className={h3Class}>US: Committee on Foreign Investment (CFIUS)</h3>
        <p>
          The Committee on Foreign Investment in the United States (CFIUS)
          reviews transactions that could result in foreign control of, or
          certain other investments in, US businesses. The Foreign Investment
          Risk Review Modernization Act (FIRRMA) of 2018 expanded CFIUS&apos;s
          jurisdiction to cover non-controlling investments in businesses
          involved in critical technology, critical infrastructure, or
          sensitive personal data. CFIUS review is mandatory for certain
          transactions involving critical technologies requiring export
          control licenses and for investments in certain defined sectors
          by foreign government-controlled entities. For other transactions,
          CFIUS review is voluntary but strongly encouraged.
        </p>

        <h3 className={h3Class}>EU and Member State regimes</h3>
        <p>
          The EU&apos;s Foreign Direct Investment Screening Regulation
          (Regulation 2019/452) established a framework for coordination
          among Member States on foreign investment screening. However, the
          regulation does not create an EU-wide screening mechanism; it
          relies on national screening regimes, which now exist in the vast
          majority of Member States. Key regimes include France&apos;s
          foreign investment control (Decree No. 2019-1590), Germany&apos;s
          Foreign Trade and Payments Act (AWG/AWV), Italy&apos;s Golden
          Power legislation, and the Netherlands&apos; Investment Screening
          Act (Wet Vifo).
        </p>

        <h3 className={h3Class}>UK: National Security and Investment Act</h3>
        <p>
          The UK&apos;s National Security and Investment (NSI) Act 2021
          introduced a thorough foreign investment screening regime.
          The NSI Act imposes mandatory filing requirements for acquisitions
          of entities active in 17 specified sectors (including AI, defense,
          energy, transport, and communications). The government can also
          &ldquo;call in&rdquo; transactions outside these sectors if
          national security concerns arise. Transactions that are completed
          without required notification can be voided, and civil and criminal
          penalties apply.
        </p>

        <h2 className={h2Class}>Practical strategies for managing regulatory risk</h2>
        <ol className={olClass}>
          <li>
            <strong>Identify filing requirements early:</strong> At the
            outset of any acquisition, assess whether merger control filings,
            sector-specific approvals, or foreign investment screening
            notifications are required in any jurisdiction. This analysis
            should be completed before the{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              letter of intent
            </Link>{" "}
            is signed so that regulatory conditions and timelines can be
            appropriately addressed.
          </li>
          <li>
            <strong>Build regulatory timelines into the deal schedule:</strong>
            Regulatory review periods can add weeks or months to the closing
            timeline. Incorporate realistic regulatory timelines into the
            deal schedule, and avoid committing to a closing date that does
            not account for the possibility of extended review.
          </li>
          <li>
            <strong>Include appropriate conditionality:</strong> The purchase
            agreement should include conditions precedent for all required
            regulatory approvals, with clear allocation of responsibility
            for preparing and submitting filings, cooperation obligations,
            and remedies if approvals are not obtained or are obtained
            subject to unacceptable conditions.
          </li>
          <li>
            <strong>Prepare for remedies discussions:</strong> If there is
            a meaningful risk that regulatory review will identify competition
            concerns, prepare a remedies strategy in advance. Identify the
            assets or behavioral commitments that would address the
            authority&apos;s likely concerns, and assess whether the
            remaining transaction is still strategically and financially
            attractive if those remedies are required.
          </li>
          <li>
            <strong>Maintain competitive independence:</strong> From the
            moment due diligence begins until regulatory clearance is
            obtained and the transaction closes, both parties must maintain
            their competitive independence. Implement clean team protocols,
            restrict information exchange to what is necessary for
            legitimate due diligence purposes, and avoid any conduct that
            could be characterized as premature integration.
          </li>
        </ol>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Do search fund acquisitions typically require antitrust filings?</h3>
        <p>
          Most initial search fund acquisitions fall well below the Hart-Scott-Rodino (HSR) Act filing thresholds, which require notification for transactions where the acquiring person will hold assets or voting securities valued above the minimum threshold (approximately $111.4 million as of the most recent annual adjustment). According to US Federal Trade Commission data, fewer than 2,000 HSR filings are made annually out of tens of thousands of M&amp;A transactions, and the vast majority of search fund deals, typically in the $5-30 million enterprise value range, are exempt. However, the FTC and DOJ retain authority to investigate and challenge any acquisition they believe may substantially lessen competition, regardless of size. Search fund entrepreneurs pursuing buy-and-build strategies should be particularly aware that successive acquisitions in the same sector may eventually trigger filing requirements or attract regulatory attention as market share grows.
        </p>

        <h3 className={h3Class}>How long does regulatory approval add to the closing timeline?</h3>
        <p>
          Regulatory approval timelines vary dramatically by jurisdiction and complexity. In the US, the initial HSR waiting period is 30 days (15 days for cash tender offers), and approximately 95% of notified transactions are cleared during this initial period without further investigation. However, if the reviewing agency issues a Second Request for additional information, the process can extend to 6-12 months or longer. In the EU, Phase I review takes 25-35 working days, while a Phase II in-depth investigation takes 90-125 working days. According to the OECD&rsquo;s Competition Assessment Toolkit, sector-specific approvals (healthcare, financial services, telecommunications) can add an additional 2-6 months to closing timelines. Buyers should address regulatory timing in their <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">letter of intent</Link> by including conditions precedent for all required approvals and building realistic regulatory timelines into the deal schedule.
        </p>

        <h3 className={h3Class}>What are the penalties for failing to file required merger notifications?</h3>
        <p>
          Penalties for &ldquo;gun-jumping&rdquo;, consummating a reportable transaction without filing required notifications or before the waiting period expires, are severe across all major jurisdictions. In the US, the maximum civil penalty under the HSR Act exceeds $50,000 per day of violation, and penalties have been imposed retroactively for transactions completed years earlier. The European Commission has imposed fines of up to &euro;124.5 million for failure to notify, and the UK&rsquo;s National Security and Investment Act 2021 allows transactions completed without required notification to be voided entirely, with civil and criminal penalties for non-compliance. According to the International Competition Network&rsquo;s guidelines, the best protection is to conduct a thorough filing analysis at the outset of any acquisition, covering merger control, sector-specific approvals, and foreign investment screening requirements in every relevant jurisdiction.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>US Federal Trade Commission, <em>Hart-Scott-Rodino Annual Reports to Congress</em></li>
          <li>US Department of Justice, <em>Merger Guidelines</em> (2023)</li>
          <li>European Commission, <em>EU Merger Regulation (Council Regulation 139/2004)</em></li>
          <li>European Commission, <em>Merger Remedies Study</em></li>
          <li>UK Competition and Markets Authority, <em>Mergers: Guidance on the CMA&apos;s Jurisdiction and Procedure</em></li>
          <li>UK Government, <em>National Security and Investment Act 2021: Guidance</em></li>
          <li>OECD, <em>Competition Assessment Toolkit</em></li>
          <li>International Competition Network, <em>Recommended Practices for Merger Notification and Review Procedures</em></li>
        </ul>

        <h2 className={h2Class}>Related resources</h2>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
              The Closing Process: From Signing to Completion
            </Link>
          </li>
          <li>
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              Due Diligence Checklist
            </Link>
          </li>
          <li>
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
              Cross-Border Acquisitions Guide
            </Link>
          </li>
          <li>
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              Letter of Intent: Structure and Negotiation
            </Link>
          </li>
          <li>
            <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">
              Representations and Warranties
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
