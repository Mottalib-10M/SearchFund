import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundLegalStructureArticle() {
  return (
    <article>
      <h1 className={h1Class}>Search Fund Legal Structure & Entity Setup</h1>
      <p className="text-sm text-apple-gray-500 mt-3">8 min read</p>

      <div className={bodyClass}>
        <p>
          One of the earliest decisions a search fund entrepreneur faces is how to
          structure the legal entities that will house the search, the investor
          capital, and ultimately the acquired business. Getting this wrong creates
          tax inefficiencies, complicates fundraising, and can even derail a deal
          at closing. This guide walks through the dominant structures in the
          United States and across key European jurisdictions, explains why the
          two-entity model is standard, and outlines when and how to set everything
          up.
        </p>

        <h2 className={h2Class}>Why structure matters</h2>
        <p>
          The legal structure of your search fund determines four critical things:
          how investors contribute and recover capital, how profits and losses flow
          for tax purposes, what liability protections you and your investors
          enjoy, and how cleanly the acquisition vehicle can purchase a target
          company. A poorly chosen structure can trigger double taxation, create
          securities-law complications, or force an expensive reorganization right
          when you should be focused on closing a deal. Understanding the{" "}
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">tax implications of each entity type</Link>{" "}
          is essential before making this decision.
        </p>

        <h2 className={h2Class}>The two-entity model explained</h2>
        <p>
          The standard search fund architecture uses two separate legal entities.
          The first is an <strong>investment vehicle</strong> (typically a limited
          partnership or LLC) through which investors commit capital. The second is
          an <strong>operating entity</strong> (often a new LLC or corporation)
          that actually acquires and operates the target business. Keeping these
          separate achieves several goals:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Liability isolation:</strong> Investor capital in the LP is
            shielded from operating liabilities of the acquired business, and
            vice versa.
          </li>
          <li>
            <strong>Clean deal mechanics:</strong> The operating entity is the
            buyer on the purchase agreement, making it simpler for sellers,
            lenders, and counterparties.
          </li>
          <li>
            <strong>Tax efficiency:</strong> A pass-through investment vehicle
            (LP or LLC) avoids entity-level taxation, letting gains and losses
            flow directly to investors&apos; personal returns.
          </li>
          <li>
            <strong>Flexibility at exit:</strong> Two entities make it easier to
            structure a future sale, whether as a stock sale of the operating
            company or an asset sale.
          </li>
        </ul>

        <h2 className={h2Class}>United States: The standard structure</h2>

        <h3 className={h3Class}>The LP investment vehicle</h3>
        <p>
          Most US search funds raise capital through a <strong>Limited
          Partnership (LP)</strong> formed in Delaware. The searcher (or a
          single-member LLC controlled by the searcher) serves as the General
          Partner (GP), and each investor becomes a Limited Partner. Delaware is
          preferred for its well-developed body of partnership law, the Court of
          Chancery&apos;s expertise in business disputes, and its flexibility in
          drafting partnership agreements. The LP agreement governs capital calls,
          distribution waterfalls, the searcher&apos;s carried interest, investor
          rights of first refusal on the acquisition, and governance provisions
          such as voting thresholds for major decisions.
        </p>

        <h3 className={h3Class}>The LLC operating entity</h3>
        <p>
          When a target is identified, the searcher forms a new <strong>Limited
          Liability Company (LLC)</strong> — or sometimes a C-Corporation — to
          serve as the acquisition vehicle. The LP invests its capital into this
          operating entity, which then purchases the target&apos;s assets or equity.
          An LLC taxed as a partnership is the most common choice because it
          provides pass-through taxation and maximum flexibility in allocating
          income, losses, and distributions among the searcher and investors
          through a well-designed{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap table and equity structure</Link>. If
          the searcher plans to pursue Qualified Small Business Stock (QSBS)
          treatment under Section 1202, a C-Corporation may be preferred instead.
        </p>

        <h3 className={h3Class}>The GP entity</h3>
        <p>
          The searcher typically creates a small single-member LLC to serve as
          the General Partner of the LP. This adds another layer of personal
          liability protection between the searcher and the fund&apos;s obligations.
          The GP entity is usually a simple Delaware or home-state LLC with
          minimal operating costs.
        </p>

        <h2 className={h2Class}>European structures by country</h2>
        <p>
          European search funds face a more fragmented legal landscape. Each
          country has its own entity types, tax regimes, and corporate governance
          requirements. Below are the most common structures in the four largest
          European search fund markets.
        </p>

        <h3 className={h3Class}>France</h3>
        <p>
          France has become one of the most active search fund markets in Europe,
          driven in part by strong alumni networks from INSEAD, HEC Paris, and
          ESSEC. The typical French structure involves:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>SAS (Societe par Actions Simplifiee):</strong> The most
            popular entity for both the holding company and the operating
            company. The SAS offers enormous flexibility in governance, share
            classes, and shareholder agreements. It has no minimum board
            requirements and allows customized voting and economic rights — ideal
            for replicating the US search fund economics.
          </li>
          <li>
            <strong>SARL (Societe a Responsabilite Limitee):</strong> A simpler
            limited-liability entity sometimes used for smaller deals. The SARL
            is less flexible than the SAS for complex cap tables but has lower
            administrative overhead.
          </li>
          <li>
            <strong>Holding de reprise:</strong> French searchers commonly set
            up a dedicated holding company (a &ldquo;holding de reprise&rdquo;)
            to acquire the target. This holding can benefit from the
            &ldquo;integration fiscale&rdquo; regime, which allows the holding
            and its subsidiary to be taxed as a single fiscal group, enabling
            interest deductions on acquisition debt to offset operating profits
            of the target.
          </li>
        </ul>

        <h3 className={h3Class}>Germany</h3>
        <p>
          The German search fund market is growing, though it remains smaller
          than France. German structures tend to involve:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>GmbH (Gesellschaft mit beschrankter Haftung):</strong> The
            standard limited-liability company and the most common choice for
            the acquisition vehicle. A GmbH requires a minimum share capital
            of EUR 25,000. It is subject to corporate tax (Korperschaftsteuer)
            at approximately 15% plus a solidarity surcharge, as well as trade
            tax (Gewerbesteuer) that varies by municipality but typically adds
            another 10-17%.
          </li>
          <li>
            <strong>UG (Unternehmergesellschaft):</strong> A &ldquo;mini-GmbH&rdquo;
            with a minimum capital of just EUR 1. Some searchers use a UG as
            the GP entity or as an initial holding vehicle during the search
            phase to minimize upfront costs, converting to a GmbH later.
          </li>
          <li>
            <strong>GmbH & Co. KG:</strong> A limited partnership (KG) where
            the general partner is a GmbH rather than a natural person. This
            structure combines partnership-level pass-through taxation with
            GmbH-level liability protection for the GP. It is the closest
            German equivalent to the US LP + LLC GP model and is increasingly
            used by German search funds with multiple investors.
          </li>
        </ul>

        <h3 className={h3Class}>United Kingdom</h3>
        <p>
          The UK has a relatively straightforward entity landscape:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Ltd (Private Limited Company):</strong> The standard
            vehicle for both the holding entity and the operating company.
            Formation is fast and inexpensive (Companies House registration
            can be completed online in 24 hours). Corporation tax is 25% for
            profits above GBP 250,000, with a lower 19% rate for small profits
            below GBP 50,000 and marginal relief in between.
          </li>
          <li>
            <strong>LLP (Limited Liability Partnership):</strong> Sometimes
            used as the investment vehicle to provide partnership-style
            pass-through taxation to investors while maintaining limited
            liability. UK LLPs are transparent for tax purposes — profits
            are taxed at the partner level, not the entity level.
          </li>
          <li>
            <strong>EIS and SEIS relief:</strong> UK investors may benefit
            from the Enterprise Investment Scheme (EIS) or Seed Enterprise
            Investment Scheme (SEIS), which provide income tax relief of 30%
            or 50% respectively on qualifying investments in small companies.
            Structuring the deal to qualify for EIS can be a meaningful
            incentive for UK-based angel investors.
          </li>
        </ul>

        <h3 className={h3Class}>Spain</h3>
        <p>
          Spain, driven largely by the IESE Business School alumni network, has
          a well-established search fund community. The primary vehicle is:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>SL (Sociedad Limitada):</strong> The Spanish equivalent
            of a limited liability company. Minimum share capital is EUR 3,000.
            The SL is by far the most common entity type for both search fund
            holding companies and operating entities in Spain. It is subject
            to corporate tax (Impuesto sobre Sociedades) at a standard rate
            of 25%, with a reduced rate of 15% for newly created entities in
            their first two profitable years.
          </li>
          <li>
            <strong>SA (Sociedad Anonima):</strong> The public limited company
            equivalent, requiring EUR 60,000 in minimum capital. Rarely used
            for search funds but sometimes relevant when acquiring a larger
            target that was already structured as an SA.
          </li>
          <li>
            <strong>Holding structure:</strong> Spanish searchers commonly
            create a holding SL to acquire the target SL. Spain&apos;s
            participation exemption regime allows the holding company to
            receive dividends and capital gains from subsidiaries in which
            it holds at least 5% essentially tax-free, making the holding
            structure efficient for distributing proceeds at exit.
          </li>
        </ul>

        <h2 className={h2Class}>Tax implications of entity choice</h2>
        <p>
          The entity you choose has direct consequences for how income is taxed,
          both during the hold period and at exit. In the US, pass-through
          entities (LPs and LLCs taxed as partnerships) avoid double taxation:
          profits flow to investors&apos; personal returns and are taxed once. A
          C-Corporation, by contrast, pays corporate tax on profits and
          shareholders pay tax again on dividends or capital gains — though
          QSBS treatment under Section 1202 can eliminate federal capital gains
          tax on up to $10 million (or 10x basis) if the stock is held for at
          least five years.
        </p>
        <p>
          In Europe, most entities are subject to corporate-level taxation, so
          the focus shifts to minimizing the effective rate through holding
          structures, participation exemptions, and treaty-based planning.
          France&apos;s integration fiscale, Germany&apos;s Organschaft regime, and
          Spain&apos;s participation exemption are all tools that experienced tax
          advisors use to optimize the structure.
        </p>

        <h2 className={h2Class}>When to set up your entities</h2>
        <ul className={ulClass}>
          <li>
            <strong>Before fundraising:</strong> The LP (or equivalent
            investment vehicle) must exist before you accept investor
            commitments. Securities regulations require investors to subscribe
            to a specific legal entity with a defined offering document.
          </li>
          <li>
            <strong>During the search:</strong> The GP entity should be formed
            at the same time as the LP. The operating entity, however, is
            typically not formed until a target has been identified and you
            are preparing to close.
          </li>
          <li>
            <strong>Before closing:</strong> The operating / acquisition entity
            must be formed well before closing — lenders, sellers, and
            escrow agents need the entity&apos;s formation documents, EIN (or
            local equivalent), and bank accounts in place.
          </li>
        </ul>

        <h2 className={h2Class}>Working with lawyers</h2>
        <p>
          Search fund entity setup is not a do-it-yourself project. You need
          counsel experienced with search fund structures specifically — not
          just any corporate attorney. The right lawyer will draft your LP
          agreement (or equivalent), advise on securities compliance for the
          fundraise, structure the{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">acquisition financing</Link>{" "}
          vehicle for tax efficiency, and
          coordinate with local counsel if you are operating cross-border.
        </p>
        <p>
          In the US, a handful of law firms dominate the search fund market
          and offer standardized documents that investors recognize and trust.
          In Europe, the landscape is more fragmented, and you may need local
          counsel in the target&apos;s jurisdiction alongside a firm familiar
          with ETA deal structures. Budget EUR 15,000 to EUR 40,000 for
          entity setup and LP documentation in Europe, and $15,000 to $30,000
          in the US. These fees are typically paid from search capital.
        </p>
        <p>
          Start conversations with lawyers early — ideally before you begin
          fundraising — so that your entity structure, offering documents, and
          investor agreements are ready when you start taking meetings. A
          well-prepared legal package signals professionalism to investors and
          avoids delays that can cost you momentum.
        </p>

        <h2 className={h2Class}>Frequently asked questions</h2>

        <h3 className={h3Class}>Why do most US search funds use a Delaware limited partnership?</h3>
        <p>
          Delaware is the dominant jurisdiction for search fund LPs because of its well-developed body of partnership law, the expertise of the Delaware Court of Chancery in business disputes, and the flexibility it offers in drafting partnership agreements. According to Stanford GSB data, over 90% of traditional US search funds are structured as Delaware LPs. The LP structure provides pass-through taxation (avoiding double taxation at the entity level), limited liability for investors, and well-understood governance mechanics including distribution waterfalls, carried interest provisions, and investor rights of first refusal on acquisition equity. Delaware also permits significant customization of the partnership agreement, allowing searchers to tailor governance provisions to their specific investor base.
        </p>

        <h3 className={h3Class}>What is the difference between a C-Corp and an LLC for the operating entity?</h3>
        <p>
          The choice between a C-Corporation and an LLC taxed as a partnership depends primarily on your tax strategy and exit timeline. An LLC provides pass-through taxation, avoiding double taxation and allowing losses (common in early years due to acquisition-related amortization) to flow to investors&rsquo; personal returns. A C-Corporation offers potential Qualified Small Business Stock (QSBS) treatment under IRC Section 1202, which can exclude up to $10M in federal capital gains per shareholder if the stock is held for at least five years. According to tax advisors specializing in search fund transactions, QSBS eligibility has become an increasingly important consideration, particularly for acquisitions where a 5+ year hold is planned and the target qualifies under the $50M gross asset threshold.
        </p>

        <h3 className={h3Class}>How much does entity setup cost for a search fund?</h3>
        <p>
          In the US, total legal costs for entity setup and LP documentation typically range from $15,000 to $30,000, paid from search capital. This includes forming the Delaware LP, the GP entity (single-member LLC), drafting the Limited Partnership Agreement, preparing the Private Placement Memorandum and subscription documents, and securities compliance review. In Europe, costs are generally higher at EUR 15,000 to EUR 40,000 due to notarial requirements (mandatory in France, Germany, and the Netherlands), more complex cross-border tax structuring, and the need for jurisdiction-specific counsel. According to IESE&rsquo;s Search Fund Conference data, European searchers should budget 20&ndash;40% more for legal setup compared to their US counterparts.
        </p>

        <h2 className={h2Class}>Sources</h2>
        <ul className={ulClass}>
          <li>Stanford Graduate School of Business &mdash; <em>Search Fund Primer</em> and <em>Search Fund Study: Selected Observations</em>, 2024. Data on entity structures, legal costs, and standard search fund governance provisions.</li>
          <li>IESE Business School &mdash; <em>International Search Fund Study</em>, 2024. Analysis of European search fund legal structures across France, Germany, Spain, and the UK.</li>
          <li>Internal Revenue Service &mdash; <em>IRC Section 1202 (Qualified Small Business Stock)</em> and <em>IRC Subchapter K (Partnership Taxation)</em>. Statutory framework governing entity-level taxation and QSBS eligibility.</li>
        </ul>
      </div>
    </article>
  );
}
