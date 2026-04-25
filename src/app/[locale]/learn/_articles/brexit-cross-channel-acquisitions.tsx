import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function BrexitCrossChannelAcquisitionsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Brexit Impact on Cross-Channel Acquisitions (UK-EU)</h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          The United Kingdom&apos;s departure from the European Union has
          created a fundamentally different market for cross-channel
          acquisitions, transactions where a UK-based acquirer
          purchases an EU business, or vice versa. What were once seamless
          intra-EU transactions governed by harmonized regulations, free
          movement principles, and the Parent-Subsidiary Directive are now
          cross-border deals that must manage a new and evolving framework
          of bilateral agreements, regulatory divergence, and additional
          compliance requirements. For search fund entrepreneurs and
          acquisition-minded professionals operating across the English
          Channel, understanding these changes is critical to structuring
          successful{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
            cross-border deals
          </Link>.
        </p>

        <h2 className={h2Class}>The post-Brexit regulatory environment</h2>
        <p>
          Since January 1, 2021, when the transition period ended, the UK
          has been a &ldquo;third country&rdquo; in relation to the EU. This
          seemingly simple change of status has cascading effects across
          virtually every area of law and regulation that affects
          acquisitions. The UK-EU Trade and Cooperation Agreement (TCA),
          concluded on December 24, 2020, provides a baseline framework for
          the economic relationship, but it is far less thorough than
          EU membership. The TCA ensures tariff-free and quota-free trade in
          goods (subject to rules of origin), but it provides only limited
          coverage for services, financial regulation, and professional
          qualifications.
        </p>
        <p>
          For acquirers, the key practical reality is that cross-channel
          transactions now require a dual regulatory analysis: one for the
          UK regime and one for the relevant EU Member State regime. EU
          directives that previously applied uniformly (including those on
          mergers, company law, competition, data protection, and employment)
          no longer extend to the UK, and the UK&apos;s domestic equivalents
          may diverge over time. This regulatory bifurcation creates both
          complexity and opportunity.
        </p>

        <h2 className={h2Class}>Tax treaty and withholding tax implications</h2>
        <p>
          One of the most significant post-Brexit changes for cross-channel
          acquisitions concerns the tax treatment of dividends, interest, and
          royalties flowing between UK and EU entities. Prior to Brexit, the
          EU Parent-Subsidiary Directive eliminated withholding taxes on
          dividend distributions between qualifying EU parent and subsidiary
          companies. The Interest and Royalties Directive similarly eliminated
          withholding taxes on interest and royalty payments between
          associated companies in different Member States. These directives
          no longer apply to UK-EU flows.
        </p>

        <h3 className={h3Class}>Bilateral tax treaty network</h3>
        <p>
          The UK maintains an extensive network of bilateral tax treaties
          with EU Member States. These treaties generally reduce (though
          do not always eliminate) withholding taxes on cross-border payments.
          However, the withholding tax rates under bilateral treaties are
          often higher than the zero rates that applied under the EU
          directives. For example, the UK-France treaty permits a 0%
          withholding on dividends for qualifying holdings, while the
          UK-Germany treaty allows 5% or 15% depending on the ownership
          threshold. The UK-Italy treaty provides for 5% or 15% withholding
          on dividends. Each bilateral treaty must be analyzed individually.
        </p>
        <p>
          For acquirers structuring{" "}
          <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
            holding company arrangements
          </Link>{" "}
          across the UK-EU divide, the loss of the EU directives may
          increase the effective tax cost of repatriating profits. This
          must be modeled carefully during the deal evaluation phase.
          In some cases, the additional withholding tax cost may justify
          alternative structures, such as locating the holding company
          in an EU Member State with favorable treaty rates to both the
          UK and the target jurisdiction.
        </p>

        <h3 className={h3Class}>UK Diverted Profits Tax and STTR</h3>
        <p>
          The UK&apos;s Diverted Profits Tax (DPT), which imposes a 25%
          charge on profits artificially diverted from the UK, remains
          relevant for EU acquirers with UK operations. Additionally, the
          OECD&apos;s Subject to Tax Rule (STTR), being implemented through
          bilateral treaty amendments, may affect certain cross-channel
          payment flows where the recipient jurisdiction taxes the income
          at a nominal rate below 9%. Acquirers should assess whether their
          post-acquisition structures could trigger DPT or STTR exposure.
        </p>

        <h2 className={h2Class}>Data transfers and UK adequacy</h2>
        <p>
          Cross-channel acquisitions inevitably involve the transfer of
          personal data between the UK and the EU. The EU General Data
          Protection Regulation (GDPR) restricts the transfer of personal
          data to countries outside the European Economic Area unless that
          country ensures an &ldquo;adequate&rdquo; level of data protection.
          On June 28, 2021, the European Commission adopted an adequacy
          decision for the UK, recognizing the UK&apos;s data protection
          framework (the UK GDPR and Data Protection Act 2018) as providing
          an adequate level of protection.
        </p>
        <p>
          However, the adequacy decision is not permanent. It includes a
          sunset clause requiring periodic review, and it can be revoked
          if the UK&apos;s data protection standards diverge materially
          from EU norms. The UK government has signaled interest in
          reforming its data protection framework to reduce compliance
          burdens on businesses, which could potentially trigger a
          revocation of adequacy. Acquirers completing cross-channel deals
          should consider this risk in their{" "}
          <Link href="/learn/data-privacy-gdpr" className="text-apple-accent hover:underline">
            data privacy due diligence
          </Link>{" "}
          and develop contingency plans (such as Standard Contractual
          Clauses or Binding Corporate Rules) for the scenario where
          adequacy is lost.
        </p>

        <h3 className={h3Class}>Practical data transfer considerations</h3>
        <ul className={ulClass}>
          <li>
            <strong>Customer databases:</strong> If the acquisition involves
            transferring customer personal data between UK and EU entities,
            confirm that the adequacy decision covers the categories of data
            involved and that the transfer mechanism is documented and
            compliant.
          </li>
          <li>
            <strong>Employee data:</strong> Post-acquisition HR integration
            often requires sharing employee data across borders. Map the
            data flows and ensure that each transfer has a valid legal basis
            under both UK GDPR and EU GDPR.
          </li>
          <li>
            <strong>Due diligence data rooms:</strong> The due diligence
            process itself involves transferring significant volumes of
            data. Ensure that virtual data room providers and the data
            transfer mechanisms used during due diligence comply with
            applicable data protection requirements.
          </li>
        </ul>

        <h2 className={h2Class}>Immigration and work permits</h2>
        <p>
          The end of free movement between the UK and the EU has introduced
          immigration barriers that affect cross-channel acquisitions in
          several ways. Pre-Brexit, EU nationals could live and work in the
          UK (and vice versa for UK nationals in the EU) without requiring
          visas or work permits. Post-Brexit, the following frameworks apply.
        </p>

        <h3 className={h3Class}>UK immigration for EU nationals</h3>
        <p>
          EU nationals wishing to work in the UK must now apply through the
          UK&apos;s points-based immigration system. The most relevant route
          for acquisition-related personnel is the Skilled Worker visa, which
          requires sponsorship by a UK employer, a job offer at an
          appropriate skill level, and a minimum salary threshold. The
          process takes several weeks and involves employer compliance
          obligations, including maintaining a sponsor license.
        </p>

        <h3 className={h3Class}>EU immigration for UK nationals</h3>
        <p>
          UK nationals wishing to work in EU Member States are subject to
          each Member State&apos;s national immigration rules for
          third-country nationals. There is no EU-wide work permit; each
          country has its own requirements, processing times, and
          conditions. This is particularly relevant for acquirers who plan
          to deploy UK-based management to oversee EU operations
          post-acquisition, or who need to send integration teams on
          extended assignments.
        </p>

        <h3 className={h3Class}>Impact on management transitions</h3>
        <p>
          For{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            ETA transactions in Europe
          </Link>{" "}
          where a UK-based searcher acquires an EU business (or an EU-based
          searcher acquires a UK target), the founder&apos;s right to live
          and work in the target&apos;s jurisdiction is no longer automatic.
          Immigration planning must begin early in the deal process, as visa
          processing times can affect the closing timeline and the
          acquirer&apos;s ability to take operational control on day one.
        </p>

        <h2 className={h2Class}>Regulatory divergence and its opportunities</h2>
        <p>
          Since Brexit, the UK and EU regulatory frameworks have begun to
          diverge in several areas relevant to acquisitions. This divergence
          creates complexity but also opportunities for acquirers who
          understand the differences and can exploit them strategically.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Financial services regulation:</strong> The UK has
            adopted the Edinburgh Reforms and other measures aimed at making
            London more competitive as a financial center. These include
            reforms to the listing regime, insurance regulation (Solvency
            UK), and bank capital requirements. For acquirers of financial
            services businesses, regulatory regime differences affect
            licensing requirements, capital adequacy, and the ability to
            passport services across the UK-EU border (which is no longer
            possible post-Brexit without equivalence determinations).
          </li>
          <li>
            <strong>Subsidy control:</strong> The UK has replaced EU State
            Aid rules with its own Subsidy Control Act 2022, which takes a
            different approach to controlling government subsidies. Acquirers
            evaluating targets that benefit from government grants, tax
            incentives, or other forms of state support should understand
            the applicable regime and any conditions attached to the support.
          </li>
          <li>
            <strong>Product standards and conformity:</strong> The UK is
            developing its own product standards regime (UKCA marking) to
            replace EU CE marking, though the transition has been extended
            multiple times. For acquirers of manufacturing or distribution
            businesses, dual compliance with both UKCA and CE standards may
            be required to serve both markets, increasing compliance costs
            but also creating barriers that protect incumbents.
          </li>
          <li>
            <strong>Competition and merger control:</strong> The UK
            Competition and Markets Authority (CMA) operates independently
            of the European Commission. Cross-channel acquisitions above the
            relevant thresholds may require{" "}
            <Link href="/learn/regulatory-approvals-antitrust" className="text-apple-accent hover:underline">
              regulatory clearance
            </Link>{" "}
            from both the CMA and the European Commission, with each authority
            applying its own substantive test and timeline.
          </li>
        </ul>

        <h2 className={h2Class}>Trade agreement implications for operating businesses</h2>
        <p>
          The TCA provides for tariff-free trade in goods between the UK
          and EU, but this is subject to rules of origin requirements. To
          qualify for zero tariffs, goods must demonstrate sufficient UK or
          EU content (depending on the direction of trade). For acquirers of
          manufacturing or distribution businesses, this means that supply
          chains relying on components from third countries may not qualify
          for preferential tariff treatment, even if final assembly occurs
          in the UK or EU.
        </p>
        <p>
          Beyond tariffs, the TCA does not eliminate customs procedures. All
          goods moving between the UK and EU are now subject to customs
          declarations, border checks, sanitary and phytosanitary (SPS)
          inspections for food and agricultural products, and VAT at the
          border. These requirements add cost, complexity, and delay to
          cross-channel supply chains. Acquirers evaluating businesses with
          significant UK-EU goods trade should assess the impact on working
          capital (customs duties and VAT must be paid at import), delivery
          times, and customer experience.
        </p>
        <p>
          The TCA&apos;s coverage of services is limited. While it includes
          some provisions on market access for services, it does not replicate
          the single market&apos;s freedom to provide services. Professional
          qualifications are not automatically recognized across the UK-EU
          border, which affects businesses in professional services,
          healthcare, and technical fields. Acquirers evaluating targets in
          the{" "}
          <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">
            best jurisdictions for acquisitions
          </Link>{" "}
          should factor these limitations into their market analysis.
        </p>

        <h2 className={h2Class}>Opportunities for acquirers</h2>
        <p>
          Despite the additional complexity, Brexit has created genuine
          opportunities for well-prepared acquirers operating across the
          English Channel.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Valuation discounts:</strong> Uncertainty and increased
            regulatory complexity have depressed valuations for some
            cross-channel businesses, particularly those heavily dependent
            on UK-EU trade. Acquirers with the expertise to manage the
            new regulatory environment can acquire businesses at attractive
            valuations that reflect a complexity discount rather than
            fundamental value impairment.
          </li>
          <li>
            <strong>Operational restructuring:</strong> Businesses that
            have not yet adapted their operations to the post-Brexit
            reality present restructuring opportunities. An acquirer who
            can optimize supply chains, establish dual-market compliance
            capabilities, and restructure cross-border arrangements can
            unlock significant value.
          </li>
          <li>
            <strong>Market consolidation:</strong> Increased compliance
            costs and regulatory complexity disproportionately burden
            smaller businesses. This creates opportunities for acquirers
            to consolidate fragmented markets by acquiring businesses
            that lack the scale or resources to manage cross-channel
            compliance efficiently.
          </li>
          <li>
            <strong>UK as a gateway:</strong> For non-EU acquirers,
            the UK offers a common-law, English-speaking jurisdiction
            with a well-developed M&amp;A infrastructure, flexible
            employment law, and competitive corporate tax rates. A
            UK acquisition can serve as a platform for subsequent
            expansion into EU markets, or vice versa.
          </li>
          <li>
            <strong>Talent arbitrage:</strong> Post-Brexit immigration
            rules have created skill shortages in some UK sectors, while
            EU labor markets remain accessible to EU-based businesses.
            Acquirers who can deploy talent flexibly across both markets
            working within the new immigration frameworks , 
            have a competitive advantage over those limited to a single
            labor pool.
          </li>
        </ul>

        <h2 className={h2Class}>Due diligence considerations specific to cross-channel deals</h2>
        <p>
          Beyond the standard due diligence checklist, cross-channel
          acquisitions require additional investigation in several areas.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Supply chain exposure:</strong> Map the target&apos;s
            supply chain to identify all cross-channel goods and services
            flows. Quantify the customs, tariff, and compliance costs
            arising from each flow. Assess whether rules of origin
            requirements are met for tariff-free treatment.
          </li>
          <li>
            <strong>Customer concentration risk:</strong> Evaluate the
            proportion of the target&apos;s revenues derived from
            cross-channel customers. If significant, assess how
            Brexit-related trade barriers affect customer relationships,
            delivery times, and competitive positioning.
          </li>
          <li>
            <strong>Regulatory licensing:</strong> Identify all regulatory
            licenses, permits, and authorizations that the target holds.
            Determine whether any licenses are based on EU passporting
            rights that no longer extend to the UK, and assess the cost
            and timeline for obtaining equivalent UK or EU authorizations.
          </li>
          <li>
            <strong>Contractual review:</strong> Review the target&apos;s
            material contracts for governing law, jurisdiction, and
            dispute resolution provisions. Post-Brexit, the enforcement
            of UK judgments in the EU (and vice versa) has become more
            complex, as the UK is no longer covered by the Brussels
            Regulation. The Hague Convention on Choice of Court Agreements
            provides some coverage, but gaps remain.
          </li>
          <li>
            <strong>Workforce analysis:</strong> Assess the nationality
            composition of the target&apos;s workforce. If the business
            relies on EU nationals working in the UK (or UK nationals
            working in the EU), confirm their immigration status and
            evaluate the ongoing ability to recruit cross-channel talent.
          </li>
        </ol>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Does the UK-EU Trade and Cooperation Agreement eliminate tariffs on goods?</h3>
        <p>
          The TCA provides for tariff-free and quota-free trade in goods between the UK and EU, but this is subject to rules of origin requirements. Goods must demonstrate sufficient UK or EU content to qualify for zero tariffs, supply chains relying heavily on components from third countries may not qualify for preferential treatment. Additionally, the TCA does not eliminate customs procedures: all goods moving between the UK and EU are now subject to customs declarations, border checks, sanitary and phytosanitary inspections for food products, and VAT at the border. These requirements add cost, complexity, and 2-5 days of delay to cross-channel supply chains, according to the Institute for Government&rsquo;s regulatory divergence tracker.
        </p>

        <h3 className={h3Class}>Can UK nationals still freely work in EU countries after Brexit?</h3>
        <p>
          No. UK nationals wishing to work in EU Member States are now subject to each country&rsquo;s national immigration rules for third-country nationals. There is no EU-wide work permit; each Member State has its own requirements, processing times, and conditions. For acquirers planning to deploy UK-based management to oversee EU operations post-acquisition, immigration planning must begin early in the deal process. The UK Home Office&rsquo;s points-based system similarly requires EU nationals to obtain Skilled Worker visas for UK employment, including sponsorship by a UK employer, a job offer at an appropriate skill level, and a minimum salary threshold. Processing times typically range from several weeks to months.
        </p>

        <h3 className={h3Class}>How does Brexit affect data transfers between the UK and EU?</h3>
        <p>
          The European Commission adopted an adequacy decision for the UK in June 2021, recognizing the UK&rsquo;s data protection framework as providing adequate protection under GDPR. This allows personal data to flow from the EU to the UK without additional safeguards. However, the adequacy decision includes a sunset clause requiring periodic review and can be revoked if UK data protection standards diverge materially from EU norms. The UK government has signaled interest in reforming its framework, which could trigger revocation. Acquirers should develop contingency plans (Standard Contractual Clauses or Binding Corporate Rules) and ensure that due diligence data rooms comply with both UK GDPR and EU GDPR requirements.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>UK Government, <em>UK-EU Trade and Cooperation Agreement: Summary</em> (2020)</li>
          <li>European Commission, <em>EU-UK Trade and Cooperation Agreement: Overview of Key Provisions</em></li>
          <li>European Commission, <em>Adequacy Decision for the United Kingdom</em> (2021)</li>
          <li>UK Competition and Markets Authority, <em>Merger Assessment Guidelines</em></li>
          <li>OECD, <em>Model Tax Convention on Income and on Capital</em></li>
          <li>UK Home Office, <em>Points-Based Immigration System: Information for Employers</em></li>
          <li>Institute for Government, <em>UK-EU Regulatory Divergence Tracker</em></li>
        </ul>

        <h2 className={h2Class}>Related resources</h2>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
              Cross-Border Acquisitions Guide
            </Link>
          </li>
          <li>
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
              Entrepreneurship Through Acquisition in Europe
            </Link>
          </li>
          <li>
            <Link href="/learn/data-privacy-gdpr" className="text-apple-accent hover:underline">
              Data Privacy &amp; GDPR in Acquisitions
            </Link>
          </li>
          <li>
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">
              Best Countries to Buy a Business
            </Link>
          </li>
          <li>
            <Link href="/learn/regulatory-approvals-antitrust" className="text-apple-accent hover:underline">
              Regulatory Approvals &amp; Antitrust Review
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
