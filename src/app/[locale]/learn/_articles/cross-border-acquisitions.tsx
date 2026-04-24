import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function CrossBorderAcquisitionsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Cross-Border Acquisitions: Legal &amp; Tax Guide for Search Fund Buyers
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">22 min read</p>

      <div className={bodyClass}>
        <p>
          Acquiring a business across national borders can unlock valuation
          arbitrage of 2&ndash;3x EBITDA, access to fragmented European and
          Latin American markets, and a deeper pipeline of succession-driven
          sellers. But cross-border deals introduce layered complexity that
          domestic transactions never touch &mdash; foreign tax regimes,
          withholding taxes on profit repatriation, CFC inclusion rules,
          transfer pricing documentation, FDI screening, and currency
          exposure. This guide gives search fund buyers a concrete,
          decision-ready framework for structuring, taxing, and closing a
          cross-border acquisition. Every section links to detailed companion
          articles so you can drill deeper as needed.
        </p>

        {/* ── H2 1 ────────────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Structuring options: direct purchase vs. holding company
        </h2>
        <p>
          The first structural choice is whether to acquire the foreign target
          directly from your home-country entity or to interpose a holding
          company (HoldCo) between you and the operating company (OpCo). Each
          path carries different tax, legal, and operational consequences.
        </p>

        <h3 className={h3Class}>Direct acquisition</h3>
        <p>
          In a direct structure, a US-based LLC or{" "}
          <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
            C-Corp
          </Link>{" "}
          acquires 100% of the foreign OpCo&rsquo;s shares. This is the
          simplest approach and works well for single-country deals where the
          buyer&rsquo;s home-country tax system provides adequate foreign tax
          credits. The main advantages are lower formation costs (no
          intermediate entity) and fewer annual compliance filings. The
          drawbacks are significant, however: the buyer is taxed immediately on
          CFC income at the individual or corporate level with limited ability
          to reinvest profits offshore, and exit planning options are narrower
          because the disposal is governed entirely by the home-country and
          target-country tax treaty.
        </p>

        <h3 className={h3Class}>Intermediate holding company</h3>
        <p>
          Inserting a HoldCo in a jurisdiction with strong double-taxation
          treaty (DTT) networks, participation exemptions, and low or zero
          withholding on dividends is the standard structure for cross-border
          search fund deals. Common HoldCo jurisdictions include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Netherlands:</strong> Participation exemption covers 100%
            of dividends and capital gains from qualifying subsidiaries (at
            least 5% ownership). Treaty network spans 100+ countries.
            Withholding tax on dividends was introduced at 15% in 2024 for
            payments to low-tax jurisdictions, but intra-EU dividends remain
            exempt under the Parent-Subsidiary Directive.
          </li>
          <li>
            <strong>Luxembourg:</strong> Participation exemption eliminates
            corporate tax on dividends and gains from qualifying holdings
            (10% ownership or EUR 1.2 million acquisition cost, held 12+
            months). Holding regime (SOPARFI) is widely used in PE-backed
            deals.
          </li>
          <li>
            <strong>Ireland:</strong> 12.5% corporate tax rate on trading
            income. Participation exemption on disposal of qualifying
            shareholdings (at least 5% held for 12+ months) in EU/treaty
            countries.
          </li>
          <li>
            <strong>Target country itself:</strong> For single-country
            acquisitions, incorporating the HoldCo in the same jurisdiction
            as the OpCo avoids withholding tax on upstream dividends entirely
            and simplifies compliance. This is often the right answer for a
            first-time cross-border buyer.
          </li>
        </ul>
        <p>
          The key principle: a HoldCo must have genuine economic substance
          &mdash; a local office, directors who exercise real decision-making
          authority, and bank accounts with meaningful cash flows. Tax
          authorities across the OECD increasingly deny treaty benefits and
          participation exemptions to shell entities lacking substance, per the
          OECD&rsquo;s Principal Purpose Test and EU anti-avoidance directives
          (ATAD I and II).
        </p>

        {/* ── H2 2 ────────────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Tax treaty networks and withholding taxes
        </h2>
        <p>
          Double taxation treaties allocate taxing rights between the
          buyer&rsquo;s home country and the target country, and they reduce
          statutory withholding tax rates on three critical cash flows:
          dividends, interest, and royalties. Without treaty relief, statutory
          withholding can reach 25&ndash;30% on dividends alone (e.g., 25.8%
          in Germany, 25% in France, 30% in the US). Treaty networks bring
          these rates down substantially. According to the OECD&rsquo;s 2025
          Corporate Tax Statistics, the average treaty-reduced withholding rate
          on dividends across OECD member countries is approximately 8.5%.
        </p>

        <h3 className={h3Class}>Key treaty rates for search fund buyers</h3>
        <ul className={ulClass}>
          <li>
            <strong>US&ndash;UK:</strong> 0% withholding on dividends when
            the beneficial owner holds 80%+ of the voting power; 5% for 10%+
            ownership; 15% for portfolio holdings. Interest: 0%. Royalties: 0%.
          </li>
          <li>
            <strong>US&ndash;France:</strong> 5% on dividends (10%+
            ownership); 15% otherwise. Interest: 0%. Royalties: 0%.
          </li>
          <li>
            <strong>US&ndash;Germany:</strong> 5% on dividends (10%+
            ownership); 15% otherwise. Interest: 0%. Royalties: 0%.
          </li>
          <li>
            <strong>US&ndash;Netherlands:</strong> 5% on dividends (10%+
            ownership); 15% otherwise. Interest: 0%. Royalties: 0%.
          </li>
          <li>
            <strong>US&ndash;Brazil:</strong> 15% on dividends (Brazil
            currently exempts dividend withholding at the domestic level but
            reform proposals have fluctuated). Interest: 10&ndash;15%.
            Royalties: 10&ndash;25% depending on category.
          </li>
          <li>
            <strong>Intra-EU:</strong> The Parent-Subsidiary Directive
            eliminates withholding on dividends between EU parent and
            subsidiary companies (10%+ ownership, held 2+ years). Post-Brexit,
            UK companies no longer benefit &mdash; treaty rates apply instead.
          </li>
        </ul>
        <p>
          Always verify treaty eligibility. Most modern treaties include a
          Limitation on Benefits (LOB) clause or the OECD&rsquo;s Principal
          Purpose Test (PPT), which deny benefits to structures whose
          principal purpose is tax avoidance. In September 2025, the IRS
          issued new guidance clarifying that standard US inbound investment
          structures (including those using a Dutch or Luxembourg HoldCo)
          generally satisfy LOB requirements when the HoldCo has genuine
          economic activity.
        </p>

        {/* ── H2 3 ────────────────────────────────────────────────── */}
        <h2 className={h2Class}>
          CFC rules, GILTI, and the 2026 NCTI overhaul
        </h2>
        <p>
          If you are a US tax resident acquiring a foreign company, controlled
          foreign corporation (CFC) rules will tax you on certain categories
          of the foreign company&rsquo;s income &mdash; even if no cash is
          distributed. Understanding these rules is critical to projecting your
          actual after-tax return. For a deeper dive into how entity choice
          affects your US tax posture, see our guide on{" "}
          <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
            C-Corp vs. S-Corp vs. LLC
          </Link>.
        </p>

        <h3 className={h3Class}>Subpart F income</h3>
        <p>
          Subpart F captures &ldquo;passive&rdquo; and &ldquo;related-party&rdquo;{" "}
          income earned by a CFC &mdash; interest, dividends, rents, royalties,
          and certain services income. This income is included in the US
          shareholder&rsquo;s taxable income currently, regardless of whether
          dividends are paid. For a typical search fund OpCo that earns active
          business income from unrelated customers, Subpart F exposure is
          usually minimal. However, intercompany management fees or IP license
          payments from OpCo to HoldCo can trigger Subpart F if not
          structured carefully.
        </p>

        <h3 className={h3Class}>GILTI and the 2026 NCTI transition</h3>
        <p>
          The Tax Cuts and Jobs Act (2017) introduced Global Intangible
          Low-Taxed Income (GILTI), which taxes US shareholders on CFC
          earnings that exceed a 10% deemed return on tangible assets (Qualified
          Business Asset Investment, or QBAI). For asset-light service
          businesses &mdash; exactly the kind search funds typically acquire
          &mdash; GILTI inclusion can be substantial because QBAI is low.
        </p>
        <p>
          The One Big Beautiful Bill Act (OBBBA), signed into law in 2025,
          replaces GILTI with <strong>Net CFC Tested Income (NCTI)</strong>{" "}
          effective for tax years beginning after December 31, 2025. The key
          changes for search fund buyers:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Elimination of the QBAI offset:</strong> Under GILTI, the
            first 10% return on tangible assets was excluded. NCTI removes
            this exclusion entirely, meaning capital-intensive CFCs that
            previously had little or no GILTI now face sizeable NCTI
            inclusions.
          </li>
          <li>
            <strong>Permanent 40% deduction:</strong> C-Corp shareholders
            receive a 40% deduction on NCTI, resulting in an effective US tax
            rate of approximately 12.6% (21% x 60%) on foreign earnings
            &mdash; before foreign tax credits.
          </li>
          <li>
            <strong>Improved foreign tax credit (FTC):</strong> The OBBBA
            reduces the FTC haircut to 10%, so 90% of foreign taxes deemed
            paid on NCTI are creditable. If the foreign effective tax rate
            exceeds roughly 14%, the FTC will fully offset the US NCTI tax
            &mdash; meaning no residual US tax.
          </li>
          <li>
            <strong>Timing change:</strong> NCTI is allocated to US
            shareholders who own stock at any time during the year, not just
            on the last day. This matters for mid-year acquisitions.
          </li>
        </ol>
        <p>
          Practical implication: if your target OpCo pays 19% corporate tax in
          the UK or 25% in Germany, the FTC should fully shelter your NCTI
          inclusion. If the OpCo is in a low-tax jurisdiction (e.g., Ireland
          at 12.5% or a LatAm country with incentives), expect residual US
          tax on the gap.
        </p>

        {/* ── H2 4 ────────────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Transfer pricing: getting intercompany flows right
        </h2>
        <p>
          Whenever a cross-border structure involves two or more related
          entities &mdash; HoldCo, OpCo, a management company, or a US parent
          &mdash; every transaction between them must comply with the
          arm&rsquo;s-length principle codified in the OECD Transfer Pricing
          Guidelines. The three most common intercompany flows in search fund
          structures are management fees, intercompany loans, and IP license
          payments.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Management fees:</strong> Charge OpCo a fee for
            strategic oversight, board governance, and shared services
            provided by HoldCo. The fee must be benchmarked against comparable
            third-party management consulting rates &mdash; typically 2&ndash;5%
            of OpCo revenue for SMEs. Document the services rendered in a
            written management services agreement.
          </li>
          <li>
            <strong>Intercompany loans:</strong> If HoldCo lends acquisition
            debt proceeds to OpCo (a common structure for deducting interest
            in the OpCo jurisdiction), the interest rate must be arm&rsquo;s
            length. Use comparable corporate borrowing rates from external
            databases (e.g., Bloomberg, S&amp;P Capital IQ). Many countries
            impose thin-capitalization rules that limit deductible interest
            to 30% of EBITDA (the EU Anti-Tax Avoidance Directive standard)
            or a fixed debt-to-equity ratio.
          </li>
          <li>
            <strong>IP licensing:</strong> Less common in search fund deals
            but relevant if you plan to license the target&rsquo;s brand or
            technology to affiliates. Royalty rates must reflect arm&rsquo;s
            length benchmarks, and the IP owner must exercise genuine control
            functions (DEMPE: Development, Enhancement, Maintenance,
            Protection, Exploitation).
          </li>
        </ul>
        <p>
          Documentation requirements vary by country but follow the OECD
          three-tiered approach: a Master File (group-wide overview), a Local
          File (entity-level transactional analysis), and Country-by-Country
          Reporting (for groups exceeding EUR 750 million in revenue &mdash;
          not applicable to most search funds, but the Master/Local File
          obligations often apply at lower thresholds). The 2025 OECD Transfer
          Pricing Guidelines introduced simplified rules for baseline
          distribution activities under Amount B, which may reduce compliance
          costs for straightforward buy-sell arrangements.
        </p>

        {/* ── H2 5 ────────────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Foreign tax credits and avoiding double taxation
        </h2>
        <p>
          The foreign tax credit (FTC) is the primary mechanism for preventing
          double taxation when a US person earns income abroad. Under the 2026
          NCTI regime, the mechanics have shifted:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Deemed-paid credits:</strong> A US C-Corp that owns 10%+
            of a CFC receives deemed-paid credits for foreign income taxes the
            CFC pays, applied against the US tax on NCTI. Under the OBBBA,
            90% of these taxes are creditable (up from roughly 80% under the
            prior GILTI regime).
          </li>
          <li>
            <strong>Direct credits for individuals:</strong> If the buyer is
            an individual (or owns through a pass-through entity like an LLC),
            foreign taxes paid on CFC distributions can be credited against US
            tax. However, individuals do not receive the 40% NCTI deduction
            available to C-Corps, so the effective US rate on CFC income is
            significantly higher. This is one reason many cross-border
            search fund buyers use a C-Corp as the US acquisition vehicle.
          </li>
          <li>
            <strong>Excess credit carryover:</strong> If foreign taxes exceed
            the US tax on that income, the excess credits can be carried
            forward for up to 10 years (or back 1 year). However, credits
            are segregated into &ldquo;baskets&rdquo; (general category,
            passive category, NCTI category), and cross-basket utilization is
            not permitted.
          </li>
          <li>
            <strong>Country-by-country limitation:</strong> The OBBBA
            introduced a country-by-country NCTI computation (replacing the
            prior global blending approach), which prevents high-tax countries
            from sheltering low-tax countries. Model your FTC position for
            each target jurisdiction individually.
          </li>
        </ul>
        <p>
          For a thorough comparison of exit-level capital gains treatment,
          see our guide on{" "}
          <Link href="/learn/capital-gains-tax-by-country" className="text-apple-accent hover:underline">
            capital gains tax by country
          </Link>.
        </p>

        {/* ── H2 6 ────────────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Regulatory approvals: FDI screening and competition law
        </h2>
        <p>
          Cross-border acquisitions increasingly trigger regulatory review
          beyond standard merger control. Two regimes matter most for search
          fund buyers: foreign direct investment (FDI) screening and
          competition/antitrust clearance.
        </p>

        <h3 className={h3Class}>Foreign investment screening</h3>
        <p>
          Over 30 countries now operate mandatory or voluntary FDI screening
          mechanisms that can delay, condition, or block foreign acquisitions
          in &ldquo;strategic&rdquo; sectors. Key regimes include:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>United States (CFIUS):</strong> The Committee on Foreign
            Investment in the United States reviews transactions that could
            give a foreign person control of a US business in sectors
            touching national security &mdash; defense, critical
            infrastructure, personal data, AI, and semiconductors. CFIUS
            filings are voluntary but effectively mandatory for covered
            transactions (penalties for non-filing can reach the full value
            of the deal). In 2025, CFIUS announced a &ldquo;fast track&rdquo;{" "}
            pilot for investments from allied countries.
          </li>
          <li>
            <strong>European Union:</strong> The EU adopted a revised FDI
            Screening Regulation in late 2025, expected to take effect in
            2027. Under the new framework, all 27 member states must establish
            national screening mechanisms with a standardized 45-day initial
            review period. Sectors subject to mandatory screening include
            critical raw materials, transport infrastructure, AI, and
            semiconductors. Individual member states may have broader scopes
            &mdash; France already screens acquisitions above EUR 10 million
            in listed sectors, and Germany&rsquo;s AWV screening covers
            targets with revenue exceeding EUR 3 million in sensitive
            industries.
          </li>
          <li>
            <strong>United Kingdom:</strong> The National Security and
            Investment Act 2021 (NSI) mandates filing for acquisitions in 17
            defined sectors including AI, defense, energy, and communications.
            The UK Investment Security Unit must be notified before completion;
            failure to file renders the transaction void.
          </li>
          <li>
            <strong>Latin America:</strong> Most LatAm countries do not have
            formal FDI screening, but sector-specific regulations apply to
            banking, mining, media, and telecommunications. Brazil requires
            CADE (competition authority) approval for mergers above revenue
            thresholds.
          </li>
        </ul>

        <h3 className={h3Class}>Competition (antitrust) clearance</h3>
        <p>
          Most search fund acquisitions of SMEs fall below merger-control
          notification thresholds. In the EU, the combined worldwide turnover
          threshold is EUR 5 billion (or EUR 250 million for each of at least
          two parties in a single member state) &mdash; well above typical
          search fund deal sizes. However, national thresholds are lower:
          Germany&rsquo;s GWB requires notification when combined revenues
          exceed EUR 500 million and the target&rsquo;s German revenue exceeds
          EUR 50 million. France&rsquo;s threshold is EUR 150 million
          worldwide and EUR 50 million in France for at least two parties.
          Always check local thresholds with counsel before assuming exemption.
        </p>

        {/* ── H2 7 ────────────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Currency risk and hedging strategies
        </h2>
        <p>
          Currency exposure is the silent risk in cross-border acquisitions.
          Revenue, costs, debt service, and investor returns may each be
          denominated in a different currency, creating both translation risk
          (financial statement conversion) and transaction risk (actual cash
          flow impact). For search fund buyers in{" "}
          <Link href="/learn/eta-latin-america-overview" className="text-apple-accent hover:underline">
            Latin America
          </Link>, FX swings can exceed 20% annually (the Brazilian real
          depreciated 22% against the USD in 2024 alone).
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Natural hedging:</strong> The most effective strategy is
            to match the currency of your debt with the currency of the
            OpCo&rsquo;s revenue. If the target earns in euros, borrow in
            euros. This ensures that operating cash flow services debt in the
            same currency, eliminating transaction risk on debt payments.
          </li>
          <li>
            <strong>Forward contracts:</strong> Lock in an exchange rate for
            a known future cash flow (e.g., an earn-out payment or a
            dividend repatriation). Banks typically offer forwards for
            tenors up to 24 months at modest premiums for major currency
            pairs.
          </li>
          <li>
            <strong>Options:</strong> Purchase the right (but not the
            obligation) to exchange at a specified rate. More expensive than
            forwards but useful when the timing or amount of cash flow is
            uncertain.
          </li>
          <li>
            <strong>Operational hedging:</strong> If the OpCo can shift some
            costs or revenues to the buyer&rsquo;s home currency (e.g.,
            sourcing from US suppliers, pricing export contracts in USD),
            this creates a natural offset.
          </li>
        </ul>

        {/* ── H2 8 ────────────────────────────────────────────────── */}
        <h2 className={h2Class}>
          Due diligence differences in cross-border deals
        </h2>
        <p>
          Cross-border{" "}
          <Link href="/learn/financial-due-diligence" className="text-apple-accent hover:underline">
            financial due diligence
          </Link>{" "}
          and{" "}
          <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
            legal due diligence
          </Link>{" "}
          follow the same core frameworks as domestic deals, but several areas
          require expanded scope:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Accounting standards:</strong> Financial statements may
            follow local GAAP (HGB in Germany, Plan Comptable G&eacute;n&eacute;ral
            in France, NIF in Mexico) rather than US GAAP or IFRS. Engage a
            local audit firm to bridge material differences &mdash; especially
            revenue recognition, lease treatment, and pension obligations.
          </li>
          <li>
            <strong>Tax compliance review:</strong> Verify that the target
            has filed all required returns, has no outstanding assessments, and
            has properly applied VAT/GST, payroll taxes, and transfer pricing
            rules. Tax indemnification clauses in the SPA should cover
            pre-closing tax liabilities with specific escrow provisions.
          </li>
          <li>
            <strong>Employment law:</strong> In the EU and UK, TUPE
            (Transfer of Undertakings Protection of Employment) regulations
            automatically transfer employees to the buyer with their existing
            terms. Termination costs in Europe are materially higher than in
            the US &mdash; severance in France can reach 12&ndash;18 months
            of salary for long-tenured employees. In Germany, works council
            (Betriebsrat) consultation is mandatory before any workforce
            restructuring.
          </li>
          <li>
            <strong>Data protection:</strong> GDPR applies to any target
            handling EU residents&rsquo; personal data. Due diligence must
            assess compliance posture, data processing agreements, and
            cross-border data transfer mechanisms (especially if you plan to
            centralize data in the US post-acquisition).
          </li>
          <li>
            <strong>Environmental liabilities:</strong> EU environmental
            regulations are stricter than many US state regimes. Phase I/II
            environmental assessments are standard for any target with
            manufacturing or industrial operations.
          </li>
          <li>
            <strong>Beneficial ownership registries:</strong> Most EU
            countries maintain public or semi-public beneficial ownership
            registers. Use these during target screening to verify ownership
            structures and identify undisclosed related-party transactions.
          </li>
        </ul>

        {/* ── Worked examples ─────────────────────────────────────── */}
        <h2 className={h2Class}>
          Worked examples: structuring two common scenarios
        </h2>

        <h3 className={h3Class}>
          Scenario 1: US buyer acquires a UK SaaS business
        </h3>
        <p>
          A US-based search fund acquires 100% of a UK Ltd company generating
          GBP 1.5 million in EBITDA. The purchase price is GBP 7.5 million
          (5x EBITDA).
        </p>
        <ol className={olClass}>
          <li>
            <strong>Structure:</strong> US C-Corp (parent) &rarr; UK Ltd
            (OpCo). No intermediate HoldCo &mdash; the US&ndash;UK treaty
            provides 0% withholding on dividends at 80%+ ownership, and UK
            corporate tax (25%) exceeds the NCTI effective rate, so FTCs
            fully offset US tax.
          </li>
          <li>
            <strong>Financing:</strong> GBP 4.5 million of senior debt from
            a UK lender (natural currency hedge), GBP 3 million of equity
            from US search fund investors. Interest on the UK debt is
            deductible against UK corporate income (subject to the UK&rsquo;s
            corporate interest restriction, which limits net interest
            deductions to 30% of UK tax-EBITDA).
          </li>
          <li>
            <strong>Ongoing tax:</strong> UK OpCo pays 25% corporate tax.
            Dividends flow to US C-Corp at 0% withholding. NCTI inclusion at
            the US level is fully sheltered by deemed-paid FTCs (25% foreign
            rate exceeds the 12.6% effective US NCTI rate).
          </li>
          <li>
            <strong>Exit:</strong> Sale of UK Ltd shares by the US C-Corp.
            UK has no capital gains tax on share disposals by non-UK
            residents (no UK permanent establishment). US C-Corp pays US
            corporate capital gains tax at 21%, offset by any available FTCs.
            If QSBS criteria are met at the C-Corp share level, individual
            investors may exclude up to $10 million in gains.
          </li>
          <li>
            <strong>Regulatory:</strong> NSI Act filing required (SaaS
            business may touch &ldquo;communications&rdquo; or &ldquo;data
            infrastructure&rdquo; categories). Budget 6&ndash;10 weeks for
            clearance. No competition filing needed (below UK CMA thresholds).
          </li>
        </ol>

        <h3 className={h3Class}>
          Scenario 2: US buyer acquires a Colombian industrial services company
        </h3>
        <p>
          A US-based searcher acquires 100% of a Colombian SAS generating
          COP 8 billion (~USD 1.8 million) in EBITDA at 4x (USD 7.2 million
          purchase price).
        </p>
        <ol className={olClass}>
          <li>
            <strong>Structure:</strong> US C-Corp (parent) &rarr; Colombian
            SAS (OpCo). The US&ndash;Colombia treaty is not yet in force
            (signed 2001, never ratified), so statutory withholding rates
            apply: 20% on dividends and 20% on interest. Consider a
            Spanish or Panamanian HoldCo to access better treaty rates
            (Spain&ndash;Colombia treaty reduces dividend withholding to 5%
            at 20%+ ownership).
          </li>
          <li>
            <strong>Financing:</strong> COP-denominated senior debt from a
            Colombian bank (natural hedge). Colombian interest rates are
            higher (Banco de la Rep&uacute;blica reference rate was 9.5% in
            late 2025), which increases debt service but also increases the
            tax deductibility benefit. Interest deductibility in Colombia is
            subject to thin-cap rules limiting related-party debt to a 2:1
            debt-to-equity ratio.
          </li>
          <li>
            <strong>Ongoing tax:</strong> Colombian corporate tax rate is
            35%. Dividends to a non-resident face 20% withholding (or 5%
            via Spain treaty). The high combined rate means substantial FTC
            generation. Under NCTI, excess credits from Colombia can be
            carried forward up to 10 years.
          </li>
          <li>
            <strong>Currency risk:</strong> The Colombian peso can fluctuate
            15&ndash;25% annually against the USD. COP-denominated debt
            provides a partial natural hedge, but investor equity returns
            remain fully exposed. Consider hedging via forward contracts for
            planned dividend repatriations.
          </li>
          <li>
            <strong>Exit:</strong> Sale of Colombian SAS shares by a
            non-resident is taxed at 15% in Colombia (capital gains rate
            for non-residents). Spanish HoldCo may benefit from Spain&rsquo;s
            participation exemption (95% of gains exempt for qualifying
            holdings held 12+ months), significantly reducing overall exit
            tax. See our guide on{" "}
            <Link href="/learn/eta-latin-america-overview" className="text-apple-accent hover:underline">
              ETA in Latin America
            </Link>{" "}
            for regional context.
          </li>
          <li>
            <strong>Regulatory:</strong> No formal FDI screening in Colombia
            for most sectors, but SIC (Superintendencia de Industria y
            Comercio) merger notification is required when combined assets
            or revenue exceed approximately COP 313 billion (~USD 72 million)
            &mdash; well above typical search fund deal sizes.
          </li>
        </ol>

        {/* ── Tax optimization link ───────────────────────────────── */}
        <p>
          For additional strategies on structuring your acquisition for tax
          efficiency &mdash; including QSBS planning, Section 338(h)(10)
          elections, and European participation exemptions &mdash; see our
          thorough guide on{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization for search fund acquisitions
          </Link>. For regional deal-flow intelligence, explore our overviews
          of{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            ETA in Europe
          </Link>{" "}
          and{" "}
          <Link href="/learn/eta-latin-america-overview" className="text-apple-accent hover:underline">
            ETA in Latin America
          </Link>.
        </p>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>
          Do I need a holding company for a cross-border acquisition?
        </h3>
        <p>
          Not always. For a single-country acquisition where the buyer&rsquo;s
          home-country treaty provides favorable withholding rates and the
          foreign tax rate generates sufficient FTCs, a direct structure is
          simpler and cheaper. A HoldCo becomes valuable when you plan
          multi-country acquisitions, need participation exemptions for a
          tax-efficient exit, or want to reinvest profits without triggering
          home-country personal income tax. Formation and annual maintenance
          of a Dutch or Luxembourg HoldCo typically costs EUR 15,000&ndash;25,000
          per year, so the tax savings must justify the overhead.
        </p>

        <h3 className={h3Class}>
          How does the 2026 NCTI regime affect cross-border search fund deals?
        </h3>
        <p>
          The replacement of GILTI with NCTI changes the math for US buyers
          of foreign companies in two important ways. First, the elimination
          of the QBAI offset means asset-light and asset-heavy businesses are
          now treated the same &mdash; all CFC earnings face NCTI inclusion.
          Second, the improved FTC mechanism (90% of foreign taxes creditable)
          means that any foreign OpCo paying an effective tax rate above
          approximately 14% will generate enough credits to fully offset the
          US NCTI tax. For search fund buyers targeting the UK (25%), Germany
          (30%), or France (25%), NCTI is effectively a non-event. For
          targets in Ireland (12.5%) or low-tax LatAm jurisdictions, expect
          a residual US tax of 1&ndash;3% on CFC earnings.
        </p>

        <h3 className={h3Class}>
          What are the biggest hidden costs in cross-border deals?
        </h3>
        <p>
          Three costs consistently surprise first-time cross-border buyers.
          First, advisory fees double because you need both home-country and
          target-country lawyers, accountants, and tax advisors &mdash; budget
          $80,000&ndash;$150,000 in total professional fees versus
          $40,000&ndash;$70,000 for a comparable domestic deal. Second,
          translation and localization of due diligence materials, contracts,
          and employee communications adds $10,000&ndash;$30,000. Third,
          ongoing multi-jurisdiction compliance (annual tax filings, transfer
          pricing documentation, statutory audits, beneficial ownership
          reporting) costs $20,000&ndash;$40,000 per year more than a
          single-country structure. Factor these into your financial model
          from the LOI stage.
        </p>

        <h3 className={h3Class}>
          How do I manage currency risk on investor returns?
        </h3>
        <p>
          Start by financing in the OpCo&rsquo;s local currency to create a
          natural hedge on debt service. For equity returns, the most practical
          approach is to accept moderate FX exposure and communicate it
          transparently to investors &mdash; most search fund LPs investing in{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            European
          </Link>{" "}
          or{" "}
          <Link href="/learn/eta-latin-america-overview" className="text-apple-accent hover:underline">
            Latin American
          </Link>{" "}
          deals understand the risk. For large planned distributions or exit
          proceeds, use forward contracts to lock in rates 3&ndash;6 months
          ahead. Avoid complex derivatives &mdash; for a single-entity
          search fund, the cost and complexity of options or swaps rarely
          justifies the hedge.
        </p>

        <h3 className={h3Class}>
          Which due diligence areas require the most attention in cross-border deals?
        </h3>
        <p>
          Employment law and tax compliance generate the most post-closing
          surprises. In EU jurisdictions, employee protections under TUPE and
          local labor codes mean that restructuring costs can reach 6&ndash;18
          months of salary per employee. Tax compliance review should cover
          not just corporate income tax but also VAT recovery positions,
          payroll tax calculations, and transfer pricing documentation for
          any existing related-party transactions. Allocate at least 20% more
          time to the{" "}
          <Link href="/learn/legal-due-diligence" className="text-apple-accent hover:underline">
            legal due diligence
          </Link>{" "}
          workstream than you would for a domestic deal, and insist on
          specific tax indemnities with escrow in the SPA.
        </p>
      </div>
    </article>
  );
}
