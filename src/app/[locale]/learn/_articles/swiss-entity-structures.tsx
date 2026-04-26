import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SwissEntityStructuresArticle() {
  return (
    <article>
      <h1 className={h1Class}>Swiss Entity Structures for Business Acquisitions</h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          Switzerland&apos;s combination of political stability, a highly
          skilled workforce, favorable tax regime, and proximity to the
          European Union makes it one of the most attractive, and most
          complex, markets for business acquisitions in Europe. Swiss
          corporate law offers several entity types, each with distinct
          characteristics regarding minimum capital, governance, share
          transfer restrictions, and liability. For search fund entrepreneurs,
          understanding these structures is essential for selecting the right
          acquisition vehicle, negotiating share transfer mechanics, and
          planning the post-acquisition holding structure. This guide covers
          the principal Swiss entity types, the cantonal tax system, holding
          company benefits, labor law basics, and key structural
          considerations for foreign acquirers. For a broader overview of
          the Swiss acquisition market, see our guide to{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link>.
        </p>

        <h2 className={h2Class}>GmbH: the Swiss limited liability company</h2>
        <p>
          The Gesellschaft mit beschr&auml;nkter Haftung (GmbH) is the most
          common corporate form for Swiss SMEs and the entity type most
          frequently encountered in search fund acquisitions. Governed by
          Articles 772-827 of the Swiss Code of Obligations (OR), the
          GmbH is designed for smaller, closely held businesses.
        </p>

        <h3 className={h3Class}>Formation and capital</h3>
        <p>
          The minimum share capital (Stammkapital) for a GmbH is CHF 20,000,
          which must be fully paid up at the time of incorporation. The
          capital is divided into shares (Stammanteile) with a minimum
          nominal value of CHF 100 each. Unlike many other European limited
          liability companies, each GmbH share is registered in the name of
          the holder, and share ownership is recorded in the commercial
          register (Handelsregister), making ownership a matter of public
          record.
        </p>

        <h3 className={h3Class}>Share transfer restrictions</h3>
        <p>
          Share transfers in a Swiss GmbH are subject to significant
          restrictions that directly affect the mechanics of an acquisition.
          By default, the transfer of GmbH shares requires the approval of
          the general meeting of members (Gesellschafterversammlung) by a
          majority of at least two-thirds of the votes represented and an
          absolute majority of the total share capital. The articles of
          association may increase this threshold, require unanimous consent,
          or even prohibit transfers entirely. These restrictions are a
          deliberate feature of the GmbH form, designed to preserve the
          closely held character of the company.
        </p>
        <p>
          For acquirers, this means that purchasing a Swiss GmbH always
          requires the cooperation of the existing owners. Hostile
          acquisitions are structurally impossible in the GmbH form.
          Additionally, the public registration of share ownership means
          that the acquirer&apos;s identity becomes publicly known at the
          time of transfer.
        </p>

        <h3 className={h3Class}>Governance structure</h3>
        <p>
          A Swiss GmbH must have at least one managing officer
          (Gesch&auml;ftsf&uuml;hrer) who is also a member (shareholder).
          This dual requirement, combining ownership with management
          is a distinctive feature of Swiss GmbH law that can
          create complications for search fund structures where the CEO may
          not initially hold shares. The requirement can be satisfied by
          allocating at least one share to the managing officer. The
          articles of association may also designate additional managing
          officers who are not members.
        </p>
        <p>
          An important Swiss law requirement applies to both GmbHs and AGs:
          at least one person authorized to represent the company must be
          resident in Switzerland. This can be a managing officer, a
          director, or an authorized signatory (Prokurist). For foreign
          acquirers who will not be resident in Switzerland, this means
          that a Swiss-resident representative must be appointed or
          retained.
        </p>

        <h2 className={h2Class}>AG: the Swiss corporation</h2>
        <p>
          The Aktiengesellschaft (AG) is Switzerland&apos;s corporation,
          governed by Articles 620-763 of the Code of Obligations.
          The AG is used for larger Swiss businesses and is the more common
          form for companies with institutional investors, complex ownership
          structures, or plans for eventual public listing.
        </p>

        <h3 className={h3Class}>Formation and capital</h3>
        <p>
          The minimum share capital (Aktienkapital) for an AG is CHF 100,000,
          of which at least CHF 50,000 (or 20% of the nominal value per
          share, whichever is greater) must be paid up at incorporation.
          The capital is divided into shares (Aktien) that may be bearer
          shares (Inhaberaktien) or registered shares (Namenaktien). However,
          following reforms to enhance transparency, bearer shares are now
          only permitted if the company has listed equity securities or if
          all bearer shares are held by a single intermediary (e.g., a bank)
          that is obligated to report the beneficial owners to the company.
          In practice, virtually all privately held Swiss AGs now use
          registered shares.
        </p>

        <h3 className={h3Class}>Share transfer in an AG</h3>
        <p>
          Share transfer rules in a Swiss AG are more flexible than in a
          GmbH. Registered shares in an AG can be transferred by endorsement
          and delivery of the share certificate, or (if the articles so
          provide) by assignment. However, the articles of association of
          a private AG almost always include transfer restrictions
          (Vinkulierung) that give the board of directors the right to
          refuse the registration of a new shareholder. The board may refuse
          registration based on grounds specified in the articles, such as
          the acquirer&apos;s failure to meet specified qualifications, the
          need to preserve the company&apos;s economic independence, or the
          maintenance of a specific ownership structure.
        </p>
        <p>
          These Vinkulierung provisions are common in Swiss SMEs and give
          existing owners significant control over who can become a
          shareholder. Acquirers must negotiate the removal or waiver of
          these restrictions as part of the transaction, or accept that
          their registration as a shareholder is subject to board
          discretion.
        </p>

        <h3 className={h3Class}>Governance structure</h3>
        <p>
          A Swiss AG must have a board of directors (Verwaltungsrat) with at
          least one member. The board is responsible for the overall
          management and strategic direction of the company. Day-to-day
          management may be delegated to officers (Gesch&auml;ftsleitung),
          but the board retains non-delegable duties including overall
          supervision, appointment and removal of officers, and approval
          of financial statements. As with the GmbH, at least one person
          authorized to represent the AG must be resident in Switzerland.
        </p>

        <h2 className={h2Class}>Cantonal tax differences</h2>
        <p>
          One of the most distinctive features of the Swiss tax system is its
          three-tier structure: federal, cantonal, and communal taxes are all
          levied on corporate income. While the federal corporate income tax
          rate is a flat 8.5% (applied to profit after tax, resulting in an
          effective federal rate of approximately 7.8%), cantonal and communal
          rates vary dramatically across Switzerland&apos;s 26 cantons.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Low-tax cantons:</strong> Cantons such as Zug, Nidwalden,
            Obwalden, Appenzell Innerrhoden, and Lucerne offer combined
            effective corporate tax rates (federal, cantonal, and communal)
            as low as 11% to 13%. These cantons have actively positioned
            themselves as business-friendly jurisdictions and attract a
            disproportionate number of holding companies and headquarters.
          </li>
          <li>
            <strong>Medium-tax cantons:</strong> Cantons including Zurich,
            Bern, Basel-Stadt, and St. Gallen typically have combined
            effective rates of 14% to 19%. These cantons offer larger
            labor markets and more developed infrastructure, which may
            offset the tax premium for operating businesses.
          </li>
          <li>
            <strong>Impact on acquisition structuring:</strong> The cantonal
            tax differences create opportunities for{" "}
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax planning</Link>{" "}
            within Switzerland. A holding company established in a low-tax
            canton that owns an operating company in a higher-tax canton can
            benefit from the participation exemption at the holding level
            while the operating company remains in the location that best
            serves its business needs.
          </li>
          <li>
            <strong>Tax reform considerations:</strong> Switzerland
            implemented major corporate tax reform (TRAF/STAF) in 2020,
            abolishing previously favorable tax regimes for holding
            companies, mixed companies, and domiciliary companies. The
            reform replaced these with OECD-compliant incentives including
            a patent box regime, enhanced R&amp;D deductions, and a
            notional interest deduction (available in certain cantons). The
            overall effect has been a convergence of cantonal rates at
            lower levels, as many cantons reduced their rates to compensate
            for the loss of special regimes.
          </li>
        </ul>

        <h2 className={h2Class}>Holding company benefits</h2>
        <p>
          Switzerland remains one of the most popular jurisdictions in
          Europe for{" "}
          <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structures</Link>,
          despite the 2020 tax reforms. Key benefits include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Participation reduction (Beteiligungsabzug):</strong>
            Switzerland provides a participation reduction that effectively
            exempts qualifying dividend income and capital gains from
            corporate tax at the cantonal and federal levels. The reduction
            applies when the company holds at least 10% of the capital of
            the subsidiary, or the participation has a fair market value of
            at least CHF 1 million. For capital gains, the participation
            must have been held for at least one year. This regime makes
            Swiss holding companies highly tax-efficient for receiving
            dividends from and realizing gains on subsidiary investments.
          </li>
          <li>
            <strong>Extensive treaty network:</strong> Switzerland has over
            100 double taxation agreements, providing access to reduced
            withholding rates on dividends, interest, and royalties
            received from subsidiaries in other countries. The Swiss
            treaty network is particularly strong with EU member states,
            the US, the UK, and major Asian economies.
          </li>
          <li>
            <strong>No capital duty:</strong> Switzerland does not impose
            stamp duty (Emissionsabgabe) on the first CHF 1 million of
            capital contributed to a company, and the rate above that
            threshold is only 1%. This makes capital contributions to
            Swiss holding companies relatively inexpensive.
          </li>
          <li>
            <strong>Stability and reputation:</strong> Switzerland&apos;s
            political neutrality, legal stability, strong rule of law, and
            reputation for financial sophistication make it a jurisdiction
            that investors, lenders, and counterparties regard with
            confidence.
          </li>
        </ul>

        <h2 className={h2Class}>Swiss-EU relations and their impact</h2>
        <p>
          Switzerland is not a member of the European Union but maintains
          close economic ties through a network of bilateral agreements.
          These agreements govern trade in goods, free movement of persons
          (subject to recent political developments), technical barriers to
          trade, public procurement, and other areas. The relationship is
          complex and evolving, with implications for business acquisitions:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Free movement of goods:</strong> Swiss businesses have
            largely tariff-free access to the EU single market for goods,
            though not through the full single market framework. Businesses
            that sell physical products into the EU benefit from the
            bilateral trade agreements, though they face regulatory
            divergence risks if the agreements are not updated.
          </li>
          <li>
            <strong>Services market access:</strong> Unlike for goods,
            Switzerland does not have thorough mutual recognition of
            services with the EU. Swiss service providers may face barriers
            when serving EU clients, and EU regulations (such as data
            protection, financial services regulation, and professional
            qualifications) may not automatically apply in Switzerland or
            be automatically recognized.
          </li>
          <li>
            <strong>EU directives do not apply directly:</strong> Swiss
            companies are not subject to EU directives (such as the
            Parent-Subsidiary Directive or the Interest and Royalties
            Directive) unless Switzerland has adopted equivalent domestic
            legislation. This means that intra-group payments between
            Swiss and EU entities do not automatically benefit from the
            withholding tax exemptions available within the EU.
          </li>
          <li>
            <strong>Cross-border workforce:</strong> The bilateral
            agreement on free movement of persons allows EU/EFTA nationals
            to live and work in Switzerland (subject to quotas and
            conditions that have been politically contentious). For
            businesses that rely on cross-border workers (Grenzg&auml;nger),
            particularly in cantons bordering France, Germany, Italy, and
            Austria, any changes to the free movement framework could
            affect labor availability and cost.
          </li>
        </ul>

        <h2 className={h2Class}>Residence requirements and foreign acquirers</h2>
        <p>
          Swiss corporate law imposes specific residence requirements that
          foreign acquirers must address:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Swiss-resident representative:</strong> As noted above,
            both GmbHs and AGs must have at least one person authorized to
            represent the company who is resident in Switzerland. For
            foreign acquirers who will not be relocating to Switzerland,
            this requirement can be satisfied by retaining a Swiss-resident
            managing officer, director, or authorized signatory.
          </li>
          <li>
            <strong>Lex Koller restrictions:</strong> The Federal Act on
            the Acquisition of Real Estate by Persons Abroad (Lex Koller)
            restricts the acquisition of Swiss real estate by non-Swiss
            persons and entities. If the target company owns significant
            real estate, the acquisition of the company&apos;s shares by a
            foreign acquirer may require authorization under Lex Koller.
            This restriction is particularly relevant for acquisitions of
            businesses with valuable real estate holdings (hospitality,
            retail with owned premises, manufacturing with owned
            facilities).
          </li>
          <li>
            <strong>Work and residence permits:</strong> If the search
            fund entrepreneur intends to relocate to Switzerland and serve
            as the CEO of the acquired business, they will need a work and
            residence permit. For EU/EFTA nationals, this is generally
            straightforward under the bilateral agreements. For non-EU/EFTA
            nationals, obtaining a work permit is more difficult and
            typically requires demonstrating that the position cannot be
            filled by a Swiss or EU/EFTA resident. The cantonal migration
            authorities handle permit applications, and processing times
            and approval rates vary by canton. For a comparative analysis
            of acquisition markets, see our guide to{" "}
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">the best countries to buy a business</Link>.
          </li>
        </ul>

        <h2 className={h2Class}>Swiss labor law basics</h2>
        <p>
          Swiss labor law is generally more employer-friendly than labor law
          in most EU countries, but it still provides meaningful protections
          for employees that acquirers must understand.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>At-will termination with notice:</strong> Swiss
            employment contracts can generally be terminated by either
            party with notice. The statutory minimum notice periods are:
            one month during the first year of employment, two months
            from the second through the ninth year, and three months
            from the tenth year onward. Employment contracts and
            collective agreements frequently provide for longer notice
            periods.
          </li>
          <li>
            <strong>No general unfair dismissal protection:</strong>
            Unlike in most EU countries, Switzerland does not have a
            general requirement for &ldquo;just cause&rdquo; for
            termination (except during protected periods such as illness,
            pregnancy, or military service). However, abusive dismissals
            (Missbr&auml;uchliche K&uuml;ndigung), such as
            terminations motivated by discrimination, retaliation, or
            bad faith, can result in compensation of up to six
            months&apos; salary.
          </li>
          <li>
            <strong>Transfer of employment:</strong> Swiss law (Article
            333 of the Code of Obligations) provides that when a business
            or part of a business is transferred, all employment
            relationships pass to the acquirer with all existing rights
            and obligations, similar to the EU&apos;s TUPE directive. The
            transferor and transferee are jointly liable for claims
            arising before the transfer for a period of time after
            closing.
          </li>
          <li>
            <strong>Collective bargaining:</strong> Swiss unionization
            rates are lower than in the Nordic countries (approximately
            20% to 25% of the workforce), and collective bargaining
            agreements are less pervasive. However, certain industries
            (construction, hospitality, retail, healthcare) have
            mandatory extended CBAs (Gesamtarbeitsvertr&auml;ge) that
            apply to all employers in the sector.
          </li>
          <li>
            <strong>Social security contributions:</strong> Employers
            must contribute to the Swiss social security system (AHV/IV),
            unemployment insurance (ALV), occupational accident insurance
            (UVG), and occupational pension (BVG). Total employer social
            charges typically represent approximately 10% to 15% of gross
            salary, which is significantly lower than in most EU countries.
          </li>
        </ul>

        <h2 className={h2Class}>Withholding tax considerations</h2>
        <p>
          Switzerland imposes a federal withholding tax (Verrechnungssteuer)
          of 35% on dividend distributions. This is one of the highest
          statutory withholding rates in Europe and requires careful planning
          for{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">cross-border acquisition</Link>{" "}
          structures.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Treaty relief:</strong> Switzerland&apos;s extensive
            treaty network typically reduces dividend withholding to 5% or
            15% for treaty-country recipients, with further reductions to
            0% available under certain treaties for qualifying corporate
            shareholders holding at least 10% to 25% of the paying company.
          </li>
          <li>
            <strong>Refund mechanism:</strong> Swiss withholding tax is
            designed as a refundable tax. Swiss-resident shareholders can
            claim a full credit against their income tax. Treaty-country
            residents can claim partial or full refunds of the withholding
            tax, though the refund process can be slow (often 12 to 18
            months) and the cash flow impact should be modeled.
          </li>
          <li>
            <strong>Notification procedure:</strong> For qualifying
            intercompany dividends (where the parent holds at least 20%
            of the Swiss subsidiary), a notification procedure is
            available that allows the parent to receive the dividend
            without withholding, subject to meeting substance and
            beneficial ownership requirements.
          </li>
          <li>
            <strong>Interest and royalties:</strong> Switzerland generally
            does not impose withholding tax on interest payments (with the
            exception of interest on bonds and bank deposits exceeding
            certain thresholds) or on royalty payments. This makes debt
            financing from foreign parents relatively straightforward from
            a withholding perspective.
          </li>
        </ul>

        <h2 className={h2Class}>Practical structuring recommendations</h2>
        <p>
          For search fund entrepreneurs considering a Swiss acquisition,
          the following practical recommendations will help manage the
          structural and tax environment:
        </p>
        <ul className={ulClass}>
          <li>
            Determine early whether the target is a GmbH or AG and
            understand the share transfer mechanics, including any
            Vinkulierung provisions or member consent requirements.
            These affect both the timeline and the certainty of closing.
          </li>
          <li>
            If establishing a holding company, compare the total tax
            cost of a Swiss holding (in a low-tax canton like Zug) with
            alternatives in the EU (Netherlands, Luxembourg, Ireland).
            The optimal choice depends on the nationality of the
            investors, the location of the operating business, and the
            expected repatriation strategy. For a detailed comparison,
            see our guide to{" "}
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">holding company structures</Link>.
          </li>
          <li>
            Model the 35% dividend withholding tax and its recovery
            through treaty relief or refund procedures. The cash flow
            timing of refunds can be material, particularly in the early
            years of ownership when cash is needed for debt service.
          </li>
          <li>
            Assess Lex Koller implications if the target owns real
            estate. Seek a preliminary opinion from a Swiss real estate
            lawyer before signing an LOI.
          </li>
          <li>
            Budget for Swiss-level professional advisory costs. Swiss
            legal and tax advisory fees are among the highest in Europe,
            reflecting the complexity of the multi-tiered regulatory
            environment and the cost of doing business in Switzerland
            generally.
          </li>
          <li>
            Investigate the cantonal business environment beyond tax
            rates. Factors such as the availability of skilled labor,
            proximity to customers and suppliers, local government
            attitude toward business, and quality of life all affect the
            long-term success of the acquisition.
          </li>
        </ul>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Swiss Code of Obligations (OR), Articles 620-763 (AG) and 772-827 (GmbH)</li>
          <li>Swiss Federal Tax Administration (ESTV), <em>Withholding Tax Regulations</em></li>
          <li>Swiss Federal Act on the Acquisition of Real Estate by Persons Abroad (Lex Koller, BewG)</li>
          <li>KPMG, <em>Taxation in Switzerland</em> (annual publication)</li>
          <li>PwC, <em>Doing Business in Switzerland</em></li>
          <li>Deloitte, <em>Taxation and Investment in Switzerland</em></li>
          <li>Swiss-American Chamber of Commerce, <em>Doing Business in Switzerland: A Guide for US Companies</em></li>
          <li>IESE Business School, <em>International Search Funds, Selected Observations</em> (2024)</li>
        </ul>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>What is the difference between a Swiss GmbH and an AG for acquisitions?</h3>
        <p>
          The Swiss GmbH (Gesellschaft mit beschr&auml;nkter Haftung) requires CHF 20,000 minimum capital and imposes significant share transfer restrictions, transfers require approval by a two-thirds majority of members, and ownership is publicly recorded in the commercial register. The AG (Aktiengesellschaft) requires CHF 100,000 minimum capital (CHF 50,000 paid up at incorporation) but offers more flexible share transfer mechanics through registered shares with board-controlled Vinkulierung provisions. For search fund acquirers, the AG is generally preferred when institutional investors are involved or complex ownership structures are anticipated, while the GmbH is more common for smaller targets with closely held ownership. According to KPMG&rsquo;s Taxation in Switzerland report, approximately 65% of Swiss SME acquisitions involve GmbH targets, reflecting the entity&rsquo;s prevalence in the small business market.
        </p>

        <h3 className={h3Class}>How do cantonal tax differences affect Swiss acquisition structuring?</h3>
        <p>
          Switzerland&rsquo;s three-tier tax system (federal, cantonal, and communal) creates combined effective corporate tax rates ranging from approximately 11% in low-tax cantons like Zug and Nidwalden to 19% or more in cantons like Zurich and Geneva. This variation creates meaningful structuring opportunities: a holding company established in Zug (11-12% combined rate) owning an operating company in Zurich (approximately 19% combined rate) can benefit from the participation reduction (Beteiligungsabzug) at the holding level while the operating company remains where it best serves business needs. The participation reduction effectively exempts qualifying dividend income and capital gains when the holding owns at least 10% of the subsidiary or the participation has a fair market value of at least CHF 1 million. Following the 2020 TRAF/STAF tax reform, many cantons reduced rates to compensate for abolished special regimes, making the overall Swiss corporate tax environment more competitive.
        </p>

        <h3 className={h3Class}>What residence requirements must foreign acquirers satisfy in Switzerland?</h3>
        <p>
          Swiss corporate law requires that at least one person authorized to represent the company (a managing officer, director, or authorized signatory) must be resident in Switzerland, this applies to both GmbHs and AGs. For GmbHs specifically, at least one managing officer (Gesch&auml;ftsf&uuml;hrer) must also be a member (shareholder), which can complicate search fund structures where the CEO may not initially hold shares. Foreign acquirers must also consider Lex Koller restrictions, which regulate the acquisition of Swiss real estate by non-Swiss persons and may require authorization if the target company owns significant property. For non-EU/EFTA nationals, obtaining a Swiss work permit is more difficult and typically requires demonstrating that the position cannot be filled by a Swiss or EU/EFTA resident, processing times and approval rates vary by canton, so early engagement with cantonal migration authorities is advisable.
        </p>

        <h2 className={h2Class}>Related resources</h2>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">Holding Company Structures for Search Funds</Link>
          </li>
          <li>
            <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">Cross-Border Acquisitions: A Complete Guide</Link>
          </li>
          <li>
            <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">Tax Planning for Acquisitions</Link>
          </li>
          <li>
            <Link href="/learn/best-countries-buy-business" className="text-apple-accent hover:underline">Best Countries to Buy a Business</Link>
          </li>
          <li>
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">ETA in Europe</Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
