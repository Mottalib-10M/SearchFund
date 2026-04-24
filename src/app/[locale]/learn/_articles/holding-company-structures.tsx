import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function HoldingCompanyStructuresArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Holding Company Structures for Search Fund Acquisitions
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">14 min read</p>

      <div className={bodyClass}>
        <p>
          A holding company (HoldCo) sits between the investors/acquirer
          and the operating company (OpCo), creating a two-tier structure
          that offers tax advantages, liability protection, and
          operational flexibility. Most search fund acquisitions in both
          the US and Europe use a holding company structure. This guide
          explains why, how to set it up, and what to watch out for.
        </p>

        <h2 className={h2Class}>Why use a holding company?</h2>
        <ul className={ulClass}>
          <li><strong>Tax efficiency:</strong> Interest on acquisition debt is paid by HoldCo and can be offset against OpCo profits through tax consolidation (US consolidated returns, French int&eacute;gration fiscale, German Organschaft)</li>
          <li><strong>Liability isolation:</strong> OpCo liabilities don&rsquo;t flow up to the investors/acquirer. HoldCo creates a legal barrier</li>
          <li><strong>Acquisition flexibility:</strong> If pursuing{" "}
            <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">
              buy-and-build
            </Link>, each add-on can sit under HoldCo as a separate subsidiary, isolating risk</li>
          <li><strong>Investor structure:</strong> HoldCo is where{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              equity is held
            </Link> - preferred shares, common shares, carried interest, and investor rights</li>
          <li><strong>Exit flexibility:</strong> Can sell individual OpCos without unwinding the entire structure</li>
        </ul>

        <h2 className={h2Class}>US holding company structure</h2>

        <h3 className={h3Class}>Typical setup</h3>
        <ul className={ulClass}>
          <li><strong>HoldCo:</strong> Delaware C-Corp (or LLC electing C-Corp treatment for QSBS eligibility)</li>
          <li><strong>OpCo:</strong> The acquired business entity (LLC, Corp, or converted entity)</li>
          <li><strong>HoldCo owns 100% of OpCo shares/membership interests</strong></li>
          <li><strong>Acquisition debt sits at HoldCo:</strong> Bank debt, seller notes, and investor equity all flow into HoldCo</li>
          <li><strong>OpCo generates cash:</strong> Distributes/dividends cash up to HoldCo for debt service</li>
        </ul>

        <h3 className={h3Class}>Tax treatment</h3>
        <ul className={ulClass}>
          <li><strong>Consolidated return:</strong> If HoldCo owns 80%+ of OpCo, they can file a consolidated federal tax return</li>
          <li><strong>Interest deduction:</strong> HoldCo&rsquo;s acquisition debt interest offsets OpCo&rsquo;s taxable income on the consolidated return</li>
          <li><strong>QSBS planning:</strong> Structure HoldCo as a{" "}
            <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
              C-Corp
            </Link>{" "}
            to qualify for{" "}
            <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">
              QSBS Section 1202
            </Link>{" "}
            exclusion at exit</li>
          <li><strong>State taxes:</strong> Delaware has no corporate income tax on out-of-state revenue. HoldCo in Delaware, OpCo in operating state</li>
        </ul>

        <h2 className={h2Class}>European holding company structures</h2>

        <h3 className={h3Class}>France: SAS HoldCo + SAS OpCo</h3>
        <ul className={ulClass}>
          <li>Holding SAS acquires OpCo SAS/SARL shares</li>
          <li>Int&eacute;gration fiscale: tax consolidation allows HoldCo interest deduction against OpCo profits</li>
          <li>Dutreil pact at HoldCo level for 75% transfer tax exemption</li>
          <li>See{" "}
            <Link href="/learn/bpifrance-acquisition-financing" className="text-apple-accent hover:underline">
              Bpifrance financing
            </Link>{" "}
            for how the financing flows through this structure</li>
        </ul>

        <h3 className={h3Class}>Germany: GmbH HoldCo + GmbH OpCo</h3>
        <ul className={ulClass}>
          <li>Holding GmbH acquires OpCo GmbH shares</li>
          <li>Organschaft: profit transfer agreement enables tax consolidation</li>
          <li>Acquisition debt interest deductible at HoldCo, offset against OpCo profits</li>
          <li>See{" "}
            <Link href="/learn/kfw-germany-business-succession" className="text-apple-accent hover:underline">
              KfW financing
            </Link></li>
        </ul>

        <h3 className={h3Class}>UK: Ltd HoldCo + Ltd OpCo</h3>
        <ul className={ulClass}>
          <li>Holding Ltd acquires OpCo Ltd shares</li>
          <li>Group relief: losses can be surrendered between group companies</li>
          <li>Substantial shareholding exemption (SSE): tax-free disposal of qualifying subsidiaries</li>
        </ul>

        <h2 className={h2Class}>Setting up the structure</h2>
        <ul className={ulClass}>
          <li><strong>Timing:</strong> Form HoldCo before signing the{" "}
            <Link href="/learn/purchase-agreement-apa-vs-spa" className="text-apple-accent hover:underline">
              purchase agreement
            </Link>. The acquisition should be made by HoldCo, not by you personally</li>
          <li><strong>Legal costs:</strong> $5K&ndash;$15K for entity formation, shareholder agreements, and initial governance documents</li>
          <li><strong>Capitalization:</strong> Investors inject equity into HoldCo. Bank lends to HoldCo. HoldCo uses the funds to acquire OpCo</li>
          <li><strong>Governance:</strong> HoldCo board = investor board. OpCo board can be the CEO + management (simpler governance for day-to-day)</li>
        </ul>

        <h2 className={h2Class}>Common mistakes</h2>
        <ul className={ulClass}>
          <li><strong>Buying in personal name:</strong> Never acquire a business personally. Always use a HoldCo to isolate liability and enable tax planning</li>
          <li><strong>Wrong entity type:</strong> Choosing S-Corp HoldCo when you need institutional investors (shareholder limits). See{" "}
            <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
              entity comparison
            </Link></li>
          <li><strong>Thin capitalization:</strong> Tax authorities may disallow interest deductions if the debt/equity ratio is excessive (&gt;4:1 in many jurisdictions)</li>
          <li><strong>Transfer pricing:</strong> If HoldCo and OpCo are in different jurisdictions, arm&rsquo;s-length pricing rules apply to intercompany transactions</li>
          <li><strong>Forgetting state taxes:</strong> Some US states don&rsquo;t recognize consolidated returns, creating state-level double taxation</li>
        </ul>

        <p>
          For entity selection, see{" "}
          <Link href="/learn/c-corp-vs-s-corp-llc" className="text-apple-accent hover:underline">
            C-Corp vs. S-Corp vs. LLC
          </Link>.
          For the tax framework, see{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            tax optimization
          </Link>{" "}
          and{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            search fund legal structure
          </Link>.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>How much does it cost to set up a holding company for a search fund acquisition?</h3>
        <p>
          According to practitioners surveyed by Stanford GSB, the total cost
          to form a HoldCo structure for a US search fund acquisition ranges
          from $5,000 to $15,000, covering entity formation, shareholder
          agreements, and initial governance documents. A Delaware C-Corp is
          the most common choice due to its well-established corporate law,
          no state income tax on out-of-state revenue, and compatibility
          with{" "}
          <Link href="/learn/qsbs-qualified-small-business-stock" className="text-apple-accent hover:underline">QSBS eligibility</Link>.
          In Europe, costs are typically EUR 3,000&ndash;EUR 10,000 for a
          French SAS or German GmbH holding entity. The key is to form HoldCo
          before signing the purchase agreement &mdash; restructuring afterward
          is far more expensive and can trigger adverse tax consequences.
        </p>

        <h3 className={h3Class}>Can I use a holding company to pursue a buy-and-build strategy with multiple acquisitions?</h3>
        <p>
          Yes &mdash; this is one of the primary advantages of a HoldCo
          structure. According to IESE Business School&apos;s research on
          serial acquisitions, a HoldCo allows each add-on acquisition to sit
          as a separate subsidiary, isolating operational and legal risk
          between portfolio companies. If one subsidiary faces litigation or
          financial distress, the other subsidiaries are protected. The HoldCo
          also enables tax-efficient cash pooling: profits from one OpCo can
          be distributed to HoldCo and reinvested in new acquisitions without
          triggering personal-level tax for the investors. Our{" "}
          <Link href="/learn/buy-and-build" className="text-apple-accent hover:underline">buy-and-build guide</Link> covers
          execution strategies in detail.
        </p>

        <h3 className={h3Class}>What is thin capitalization and why should I worry about it?</h3>
        <p>
          Thin capitalization rules prevent companies from loading
          disproportionate debt to claim excessive interest deductions. In
          the US, Section 163(j) limits business interest deductions to 30%
          of adjusted taxable income. In France, the debt-to-equity ratio
          threshold is 1.5:1 for related-party debt. In Germany, the interest
          barrier rule (Zinsschranke) limits net interest expense to 30% of
          EBITDA. According to PwC&apos;s Global Tax Guide, exceeding these
          thresholds can result in disallowed interest deductions worth tens
          of thousands of dollars annually. Work with a{" "}
          <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">qualified tax advisor</Link> to
          structure your HoldCo&apos;s debt-to-equity ratio within safe
          harbor limits for your jurisdiction.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business, <em>Search Fund Primer: Legal and Tax Structuring</em> (2024)</li>
          <li>PwC, <em>Worldwide Tax Summaries: Thin Capitalization Rules</em> (2024)</li>
          <li>IESE Business School, <em>International Search Fund Study: Multi-Entity Structures</em> (2024)</li>
        </ul>
      </div>
    </article>
  );
}
