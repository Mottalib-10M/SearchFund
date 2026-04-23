import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function EUAntiTaxAvoidanceArticle() {
  return (
    <article>
      <h1 className={h1Class}>EU Anti-Tax Avoidance Directives &amp; Their Impact on Acquisitions</h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          The European Union&apos;s Anti-Tax Avoidance Directives (ATAD I and
          ATAD II) represent the most comprehensive overhaul of corporate tax
          rules in EU history. Adopted in 2016 and 2017 respectively, these
          directives mandate that all EU Member States implement a minimum
          standard of anti-avoidance measures, fundamentally reshaping the
          tax landscape for acquisitions across Europe. For anyone
          contemplating a{" "}
          <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">
            cross-border acquisition
          </Link>{" "}
          involving EU entities, understanding these rules is no longer
          optional &mdash; it is essential. The directives affect everything
          from how acquisition financing is structured to how holding
          companies are designed, and non-compliance can result in
          significant and unexpected tax costs.
        </p>

        <h2 className={h2Class}>Overview of ATAD I</h2>
        <p>
          ATAD I (Council Directive 2016/1164) was adopted on July 12, 2016,
          and required transposition into Member State law by January 1, 2019
          (with certain provisions taking effect later). The directive
          establishes five core anti-avoidance measures that all Member States
          must implement as a minimum standard. Member States are free to
          adopt stricter rules, and many have done so. The five measures are:
          interest limitation rules, exit taxation, controlled foreign company
          (CFC) rules, anti-hybrid mismatch rules, and a general
          anti-avoidance rule (GAAR).
        </p>

        <h2 className={h2Class}>Interest limitation rules</h2>
        <p>
          The interest limitation rules are arguably the most impactful
          ATAD provision for acquirers. They restrict the deductibility of
          net borrowing costs (interest expense minus interest income) to
          a maximum percentage of the taxpayer&apos;s EBITDA. The directive
          sets a ceiling of 30% of EBITDA, though Member States may adopt
          a lower threshold.
        </p>

        <h3 className={h3Class}>How the rules work</h3>
        <p>
          Under the ATAD interest limitation framework, if a company&apos;s
          net borrowing costs exceed 30% of its tax-adjusted EBITDA, the
          excess is non-deductible in the current year. Most Member States
          allow the disallowed interest to be carried forward to future years
          (subject to time limits in some jurisdictions), but the immediate
          cash tax impact can be substantial.
        </p>
        <p>
          The directive includes a de minimis threshold: the interest
          limitation does not apply if net borrowing costs do not exceed
          &euro;3 million (Member States may set a lower threshold). There
          is also a group ratio rule that allows a higher deduction if the
          company can demonstrate that its ratio of equity to total assets
          is equal to or higher than the equivalent ratio of the worldwide
          group.
        </p>

        <h3 className={h3Class}>Impact on acquisition financing</h3>
        <p>
          The interest limitation rules directly affect the tax efficiency
          of leveraged acquisitions. In the traditional leveraged buyout
          model, the acquirer finances a significant portion of the purchase
          price with debt, and the interest on that debt is deducted against
          the target&apos;s operating income, creating a &ldquo;tax
          shield&rdquo; that enhances returns. ATAD&apos;s interest
          limitation caps this tax shield at 30% of EBITDA, which means
          highly leveraged structures may generate non-deductible interest
          expense, reducing the after-tax returns of the acquisition.
        </p>
        <p>
          Acquirers must model the interest limitation rules into their
          financial projections from the earliest stages of deal evaluation.
          This is particularly important for search fund and ETA
          acquisitions, where the target&apos;s EBITDA may be relatively
          modest and the 30% cap is reached more quickly. The rules also
          affect the optimal{" "}
          <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
            holding company structure
          </Link>{" "}
          for the acquisition, as the interest limitation applies at the
          entity level in most jurisdictions.
        </p>

        <h2 className={h2Class}>Exit taxation</h2>
        <p>
          ATAD I requires Member States to impose exit taxes when a company
          transfers assets or moves its tax residence from one Member State
          to another (or to a third country), to the extent the departing
          state loses the right to tax the transferred assets. The exit tax
          is levied on the unrealized capital gains &mdash; the difference
          between the market value of the assets at the time of transfer and
          their tax book value.
        </p>
        <p>
          For intra-EU transfers, the directive allows taxpayers to defer
          payment of the exit tax through installments over a period of at
          least five years, subject to interest charges and, in some cases,
          security requirements. For transfers to third countries, Member
          States are not required to offer deferral, and immediate payment
          may be demanded.
        </p>

        <h3 className={h3Class}>Implications for post-acquisition restructuring</h3>
        <p>
          Exit taxation is particularly relevant when an acquirer plans to
          restructure the target&apos;s operations post-closing. If the
          restructuring involves migrating assets (including intellectual
          property, customer lists, or other intangibles) from one EU
          jurisdiction to another, or converting an entity from a full-risk
          principal to a limited-risk structure, exit taxes may apply. The
          acquirer must evaluate these costs during due diligence and factor
          them into the post-acquisition integration plan. In some cases,
          the exit tax cost may make certain restructuring options
          economically unattractive, requiring the acquirer to find
          alternative approaches.
        </p>

        <h2 className={h2Class}>Controlled Foreign Company (CFC) rules</h2>
        <p>
          CFC rules are designed to prevent multinational groups from
          accumulating profits in low-taxed subsidiaries by attributing
          certain categories of income from those subsidiaries back to
          the parent company in the EU Member State. ATAD I requires all
          Member States to implement CFC rules, though the directive
          provides two alternative models for implementation.
        </p>

        <h3 className={h3Class}>Model A: Categorical approach</h3>
        <p>
          Under Model A, specific categories of passive or mobile income
          (interest, royalties, dividends, financial leasing income, income
          from insurance and banking, and income from invoicing companies
          with no economic substance) are attributed to the parent if the
          subsidiary is subject to an effective tax rate that is less than
          half of what it would have been taxed at in the parent&apos;s
          jurisdiction. This model focuses on the type of income regardless
          of the subsidiary&apos;s overall tax profile.
        </p>

        <h3 className={h3Class}>Model B: Substance-based approach</h3>
        <p>
          Under Model B, all income that arises from non-genuine arrangements
          put in place for the essential purpose of obtaining a tax advantage
          is attributed to the parent. An arrangement is considered
          non-genuine to the extent that the subsidiary would not own the
          assets or would not have assumed the risks that generate the income
          if it were not controlled by the parent with the people and
          infrastructure to make relevant decisions. This model is more
          principles-based and requires a substance analysis.
        </p>
        <p>
          For acquirers, CFC rules affect the viability of structures that
          use holding companies or intermediate entities in low-tax
          jurisdictions. If the target has subsidiaries in jurisdictions
          with effective tax rates below the CFC threshold, income from
          those subsidiaries may be attributed to the EU parent, negating
          the intended tax benefit. This analysis is an important part of
          evaluating the target&apos;s overall{" "}
          <Link href="/learn/tax-planning-acquisitions" className="text-apple-accent hover:underline">
            tax planning arrangements
          </Link>.
        </p>

        <h2 className={h2Class}>Anti-hybrid mismatch rules (ATAD II)</h2>
        <p>
          ATAD II (Council Directive 2017/952) extended the anti-avoidance
          framework to address hybrid mismatches &mdash; arrangements that
          exploit differences in the tax treatment of entities or instruments
          between jurisdictions to achieve double deductions (the same
          expense deducted in two jurisdictions) or deduction/non-inclusion
          outcomes (an expense deducted in one jurisdiction while the
          corresponding income is not taxed in the other).
        </p>

        <h3 className={h3Class}>Types of hybrid mismatches</h3>
        <ul className={ulClass}>
          <li>
            <strong>Hybrid entity mismatches:</strong> Arise when an entity is
            treated as transparent (pass-through) in one jurisdiction and
            opaque (separately taxable) in another, leading to income that
            is either not taxed in either jurisdiction or deducted in both.
          </li>
          <li>
            <strong>Hybrid instrument mismatches:</strong> Arise when a
            financial instrument is treated as debt (interest deductible)
            in one jurisdiction and equity (dividend exempt) in the other,
            resulting in a deduction without inclusion.
          </li>
          <li>
            <strong>Hybrid transfer mismatches:</strong> Arise from differences
            in the characterization of asset transfers, where one jurisdiction
            treats a transaction as a sale (recognizing a deductible payment)
            while the other treats it as a collateral arrangement (not
            recognizing income).
          </li>
          <li>
            <strong>Imported mismatches:</strong> ATAD II also targets
            &ldquo;imported mismatches,&rdquo; where the hybrid mismatch
            involves a third-country entity but the deduction is claimed
            by an EU entity. This extended scope is particularly relevant
            for acquisitions involving US or UK parent companies with EU
            subsidiaries.
          </li>
        </ul>
        <p>
          The directive neutralizes hybrid mismatches through a primary rule
          (denying the deduction in the payer jurisdiction) and a defensive
          rule (requiring inclusion in the payee jurisdiction if the payer
          jurisdiction does not deny the deduction). Acquirers must evaluate
          whether any of the target&apos;s existing financing or operational
          structures involve hybrid arrangements, as these will need to be
          unwound or restructured post-ATAD II. This is especially relevant
          for{" "}
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            search fund acquisitions in Europe
          </Link>{" "}
          that involve cross-border group structures.
        </p>

        <h2 className={h2Class}>General Anti-Avoidance Rule (GAAR)</h2>
        <p>
          ATAD I requires all Member States to implement a GAAR that allows
          tax authorities to disregard arrangements that are &ldquo;not
          genuine&rdquo; and have been &ldquo;put in place for the main
          purpose or one of the main purposes of obtaining a tax advantage
          that defeats the object or purpose of the applicable tax
          law.&rdquo; An arrangement is considered not genuine to the extent
          that it is not put in place for valid commercial reasons which
          reflect economic reality.
        </p>
        <p>
          The GAAR operates as a backstop measure, applicable when more
          specific anti-avoidance rules do not address a particular
          arrangement. Its broad and subjective language gives tax
          authorities significant discretion, which creates uncertainty
          for taxpayers. For acquirers, the GAAR means that any aggressive
          tax planning &mdash; even if technically compliant with specific
          rules &mdash; may be challenged if it lacks genuine commercial
          substance. Deal structures, holding arrangements, and financing
          mechanisms must be supported by robust commercial rationale
          beyond tax benefits.
        </p>

        <h2 className={h2Class}>Pillar Two: Global minimum tax</h2>
        <p>
          While not part of the ATAD framework, the OECD&apos;s Pillar Two
          initiative (Global Anti-Base Erosion rules, or GloBE) has been
          implemented in the EU through the Minimum Tax Directive (Council
          Directive 2022/2523), effective from December 31, 2023 for the
          Income Inclusion Rule (IIR) and from December 31, 2024 for the
          Undertaxed Profits Rule (UTPR). Pillar Two establishes a global
          minimum effective tax rate of 15% for multinational groups with
          consolidated revenues above &euro;750 million.
        </p>
        <p>
          While the &euro;750 million revenue threshold means that most
          search fund and ETA acquisitions will not be directly subject
          to Pillar Two, the rules are relevant in two scenarios: when the
          target is a subsidiary or business unit of a larger group that
          exceeds the threshold, or when the acquirer itself is part of a
          larger group. Even below the threshold, Pillar Two influences
          the broader tax policy environment, as many countries are raising
          domestic minimum tax rates in response, which affects all
          businesses regardless of size.
        </p>

        <h3 className={h3Class}>Qualified domestic minimum top-up tax (QDMTT)</h3>
        <p>
          Many EU Member States have implemented a QDMTT, which is a domestic
          minimum tax that applies before the Pillar Two IIR. The QDMTT
          ensures that any top-up tax on undertaxed profits is collected by
          the jurisdiction where the income arises, rather than by the
          parent jurisdiction under the IIR. For acquirers, this means that
          even if the target benefits from local tax incentives that reduce
          its effective tax rate below 15%, a QDMTT may claw back the
          benefit. This must be considered when evaluating the target&apos;s
          tax position and projecting future tax costs.
        </p>

        <h2 className={h2Class}>Practical impact on acquisition structures</h2>
        <p>
          The cumulative effect of ATAD I, ATAD II, and Pillar Two has
          fundamentally changed how acquisitions in Europe should be
          structured. Several key practical implications stand out for
          acquirers.
        </p>
        <ol className={olClass}>
          <li>
            <strong>Financing structure:</strong> The interest limitation
            rules require careful modeling of the debt capacity and tax
            deductibility of acquisition financing. The optimal debt level
            must balance the tax shield against the 30% EBITDA cap, taking
            into account any Member State-specific variations. The use of
            shareholder loans and intercompany financing must also be
            evaluated for hybrid mismatch risk and thin capitalization
            constraints, which connects closely to{" "}
            <Link href="/learn/international-acquisition-financing" className="text-apple-accent hover:underline">
              international acquisition financing
            </Link>{" "}
            strategies.
          </li>
          <li>
            <strong>Holding structure:</strong> The choice of jurisdiction
            for the acquisition holding company must account for CFC rules,
            the participation exemption regime, withholding tax obligations,
            and the availability of tax treaties. ATAD has narrowed the
            differences between Member States by imposing minimum standards,
            but meaningful variations remain.
          </li>
          <li>
            <strong>Post-closing restructuring:</strong> Any planned
            restructuring of the target&apos;s operations, including supply
            chain redesign, IP migration, or entity rationalization, must be
            evaluated for exit tax implications and transfer pricing
            consequences. The restructuring plan should be developed during
            the due diligence phase, not after closing.
          </li>
          <li>
            <strong>Substance requirements:</strong> Entities within the
            acquisition structure must have genuine economic substance,
            including qualified employees, local decision-making, and real
            operational activities. Shell entities or letterbox companies
            are vulnerable to challenge under the GAAR, CFC rules, and
            beneficial ownership doctrines.
          </li>
          <li>
            <strong>Due diligence scope:</strong> Tax due diligence must
            now include a comprehensive assessment of the target&apos;s
            compliance with ATAD provisions, including interest limitation
            computations, CFC analysis, hybrid mismatch review, and GAAR
            vulnerability assessment.
          </li>
        </ol>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Council of the European Union, <em>Directive 2016/1164 (ATAD I): Rules Against Tax Avoidance Practices</em> (2016)</li>
          <li>Council of the European Union, <em>Directive 2017/952 (ATAD II): Hybrid Mismatches with Third Countries</em> (2017)</li>
          <li>Council of the European Union, <em>Directive 2022/2523: Minimum Level of Taxation for Multinational Groups (Pillar Two)</em> (2022)</li>
          <li>OECD, <em>Tax Challenges Arising from the Digitalisation of the Economy &mdash; Global Anti-Base Erosion Model Rules (Pillar Two)</em> (2021)</li>
          <li>European Commission, <em>Anti-Tax Avoidance Package: Key Measures</em></li>
          <li>KPMG, <em>EU Anti-Tax Avoidance Directive: Implementation Status by Country</em></li>
          <li>EY, <em>Worldwide Corporate Tax Guide</em></li>
        </ul>

        <h2 className={h2Class}>Related resources</h2>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/tax-planning-acquisitions" className="text-apple-accent hover:underline">
              Tax Planning Strategies for Acquisitions
            </Link>
          </li>
          <li>
            <Link href="/learn/holding-company-structures" className="text-apple-accent hover:underline">
              Holding Company Structures for Acquirers
            </Link>
          </li>
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
            <Link href="/learn/international-acquisition-financing" className="text-apple-accent hover:underline">
              International Acquisition Financing
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
