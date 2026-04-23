import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function MergerVsAcquisitionArticle() {
  return (
    <article>
      <h1 className={h1Class}>Merger vs. Acquisition: Legal, Tax &amp; Strategic Differences</h1>

      <div className={bodyClass}>
        <p>
          The terms &quot;merger&quot; and &quot;acquisition&quot; are frequently used interchangeably
          in business conversation, but they refer to fundamentally different legal structures with
          distinct tax consequences, governance implications, and strategic applications. Understanding
          these differences is essential for any buyer, seller, or advisor evaluating how to structure
          a business combination.
        </p>
        <p>
          In practice, most transactions in the small and medium enterprise space are acquisitions —
          one entity purchasing the assets or equity of another. But mergers do arise in specific
          contexts, particularly when combining businesses of similar size, consolidating within an
          industry, or achieving specific tax or regulatory objectives. Choosing the wrong structure
          can result in unnecessary tax liability, unintended legal exposure, or governance complications
          that undermine the deal&apos;s strategic purpose.
        </p>
        <p>
          This guide examines the legal definitions, structural mechanics, tax implications, and
          strategic considerations that distinguish mergers from acquisitions, with practical guidance
          for determining which approach best serves your objectives.
        </p>
      </div>

      <h2 className={h2Class}>Legal Definitions and Structural Differences</h2>

      <div className={bodyClass}>
        <p>
          At the most fundamental level, a <strong>merger</strong> is a legal combination of two
          entities into one, while an <strong>acquisition</strong> is the purchase of one entity by
          another. The distinction is not merely semantic — it affects everything from shareholder
          approval requirements to successor liability.
        </p>
      </div>

      <h3 className={h3Class}>Mergers</h3>

      <div className={bodyClass}>
        <p>
          In a merger, two (or more) companies combine into a single surviving entity. One company
          (the surviving entity) absorbs the other (the merged entity), which ceases to exist as a
          separate legal entity. The surviving entity assumes all assets, liabilities, contracts,
          obligations, and legal claims of the merged entity by operation of law.
        </p>
        <p>
          This &quot;by operation of law&quot; mechanism is a critical distinction. Unlike an asset
          acquisition where the buyer selectively chooses which assets and liabilities to assume, a
          merger transfers everything automatically — including unknown liabilities, pending litigation,
          and contingent obligations. This creates both efficiency (no need to individually assign
          hundreds of contracts) and risk (successor liability for everything the merged entity owed
          or was responsible for).
        </p>
        <p>
          Mergers require approval from the shareholders (or members, in the case of LLCs) of both
          entities, typically by a majority or supermajority vote as specified in the entity&apos;s
          governing documents and applicable state law. Dissenting shareholders in many jurisdictions
          have appraisal rights — the right to receive fair value for their shares rather than accept
          the merger consideration.
        </p>
      </div>

      <h3 className={h3Class}>Acquisitions</h3>

      <div className={bodyClass}>
        <p>
          An acquisition involves one entity purchasing the assets or equity of another. The acquired
          entity may or may not continue to exist after the transaction, depending on the structure.
          Acquisitions come in two primary forms:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Asset acquisitions:</strong> The buyer purchases specific assets (and assumes
            specific liabilities) from the seller. The seller entity continues to exist after the
            transaction and retains any assets and liabilities not transferred. This structure, covered
            in detail in our guide on{" "}
            <Link href="/learn/asset-vs-stock-purchase" className="text-apple-accent hover:underline">
              asset vs. stock purchases
            </Link>, gives the buyer maximum control over what it acquires.
          </li>
          <li>
            <strong>Stock (equity) acquisitions:</strong> The buyer purchases the ownership interests
            (stock, membership interests, or partnership interests) of the target entity from its
            owners. The target entity continues to exist with all its assets and liabilities intact; only
            the ownership changes. The buyer inherits the entity as-is, including all existing contracts,
            obligations, and potential liabilities.
          </li>
        </ul>

        <p>
          Acquisitions are generally simpler to execute than mergers because they can be structured as
          a private transaction between the buyer and seller (or the target&apos;s shareholders)
          without necessarily requiring a vote of all shareholders — particularly in stock acquisitions
          where the buyer deals directly with individual shareholders.
        </p>
      </div>

      <h2 className={h2Class}>Tax Implications</h2>

      <div className={bodyClass}>
        <p>
          The tax consequences of mergers and acquisitions differ significantly, and tax considerations
          often drive the choice of structure. Both buyers and sellers should consult with qualified tax
          advisors before finalizing any transaction structure.
        </p>
      </div>

      <h3 className={h3Class}>Taxable Transactions</h3>

      <div className={bodyClass}>
        <p>
          In a taxable acquisition, the seller recognizes gain or loss on the transaction and the buyer
          receives a stepped-up tax basis in the acquired assets. The specific tax treatment depends on
          the structure:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Asset acquisition (taxable):</strong> The seller recognizes gain on each asset sold,
            potentially at different rates depending on the asset class (ordinary income for inventory
            and receivables, capital gains for goodwill and other capital assets). The buyer receives a
            fair-market-value tax basis in each acquired asset, enabling full depreciation and
            amortization deductions going forward. Guidance on purchase price allocation and its{" "}
            <Link href="/learn/tax-planning-acquisitions" className="text-apple-accent hover:underline">
              tax implications
            </Link>{" "}
            is essential for optimizing the structure.
          </li>
          <li>
            <strong>Stock acquisition (taxable):</strong> The seller recognizes capital gain on the
            sale of stock. The buyer inherits the target entity&apos;s existing (historical) tax basis
            in its assets — typically a less favorable outcome for the buyer than an asset acquisition
            because there is no basis step-up. However, if the target is a C corporation, a Section
            338(h)(10) election can treat the stock purchase as an asset acquisition for tax purposes,
            providing the buyer with a stepped-up basis.
          </li>
        </ul>
      </div>

      <h3 className={h3Class}>Tax-Free Reorganizations</h3>

      <div className={bodyClass}>
        <p>
          Certain mergers and acquisitions can qualify as tax-free reorganizations under Section 368
          of the Internal Revenue Code, allowing the target&apos;s shareholders to defer recognition
          of gain. The most common types include:
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Type A (statutory merger):</strong> A merger conducted under state law qualifies
            as a Type A reorganization if the consideration is primarily stock of the acquiring company.
            Some cash or other consideration (&quot;boot&quot;) is permitted, but the stock component
            must be substantial.
          </li>
          <li>
            <strong>Type B (stock-for-stock):</strong> The acquirer exchanges solely its voting stock
            for the target&apos;s stock. This is the most restrictive form — essentially no non-stock
            consideration is permitted. The target becomes a subsidiary of the acquirer.
          </li>
          <li>
            <strong>Type C (stock-for-assets):</strong> The acquirer exchanges primarily its voting
            stock for substantially all of the target&apos;s assets. Limited non-stock consideration
            is permitted. The target must liquidate after the transfer.
          </li>
        </ul>

        <p>
          Tax-free reorganizations are more common in larger transactions and public company M&amp;A,
          but they can apply to private company combinations when the consideration is primarily stock
          of the acquiring entity. The continuity of interest and continuity of business enterprise
          requirements must be met, and the transaction must have a valid business purpose beyond tax
          avoidance.
        </p>
      </div>

      <h2 className={h2Class}>Strategic Considerations: When to Use Each Structure</h2>

      <div className={bodyClass}>
        <p>
          Beyond legal and tax factors, strategic objectives should drive structure selection. Each
          approach offers distinct advantages depending on the transaction&apos;s goals.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Use a merger when:</strong> You want automatic transfer of all contracts, licenses,
            and permits without individual assignment (particularly valuable when the target holds
            hundreds of customer contracts with anti-assignment clauses). You are combining two
            businesses of roughly equal size and want to create a unified entity. You want to achieve
            tax-free treatment for the target&apos;s shareholders. You need to squeeze out minority
            shareholders who refuse to sell.
          </li>
          <li>
            <strong>Use an asset acquisition when:</strong> You want to selectively acquire specific
            assets and avoid assuming unknown or contingent liabilities. The target has undesirable
            contracts, environmental liabilities, or pending litigation you want to leave behind. You
            want a stepped-up tax basis in the acquired assets. The target is in an industry where
            licenses or permits are non-transferable (so you will need to obtain new ones regardless).
          </li>
          <li>
            <strong>Use a stock acquisition when:</strong> The target holds critical contracts, licenses,
            or permits that would be difficult to transfer or re-obtain. You want to maintain the
            target&apos;s legal entity (and its history, credit, and regulatory standing). The target
            has favorable tax attributes (net operating losses, tax credits) that would be lost in an
            asset acquisition. Simplicity is paramount — stock acquisitions require fewer individual
            transfer documents.
          </li>
        </ul>

        <p>
          In SME acquisitions, including those by{" "}
          <Link href="/learn/business-valuation-methods" className="text-apple-accent hover:underline">
            search fund entrepreneurs evaluating targets
          </Link>, asset acquisitions are most common because buyers generally prefer the liability
          protection and tax benefits of purchasing specific assets. However, stock acquisitions
          become more attractive when the target holds non-assignable contracts or valuable licenses.
        </p>
      </div>

      <h2 className={h2Class}>Reverse Mergers</h2>

      <div className={bodyClass}>
        <p>
          A reverse merger occurs when a private company merges into a public company (typically a
          shell company with no active operations), effectively allowing the private company to
          become publicly traded without conducting a traditional initial public offering. In a
          reverse merger, the private company&apos;s shareholders exchange their shares for a
          controlling stake in the public entity, and the public entity typically changes its name
          and business operations to those of the formerly private company.
        </p>
        <p>
          Reverse mergers are primarily used as an alternative path to public markets. They offer
          speed (weeks rather than months), lower cost (avoiding underwriter fees and extensive SEC
          review), and less dilution than a traditional IPO. However, they carry significant risks:
          the public shell may have undisclosed liabilities, the resulting public company may lack
          the institutional investor support that a traditional IPO provides, and regulatory scrutiny
          of reverse mergers has increased in response to historical abuses.
        </p>
        <p>
          For most small and medium enterprise transactions, reverse mergers are not relevant. They
          are primarily tools for companies seeking public market access — a very different objective
          than the typical search fund or private equity acquisition. However, understanding reverse
          mergers is important for complete M&amp;A literacy and for evaluating situations where a target
          company may have previously gone public through this route.
        </p>
      </div>

      <h2 className={h2Class}>Statutory Mergers vs. Triangular Mergers</h2>

      <div className={bodyClass}>
        <p>
          Mergers can be structured in several ways, each offering different legal and practical
          advantages. The two most important variations are statutory (direct) mergers and triangular
          mergers.
        </p>
      </div>

      <h3 className={h3Class}>Statutory (Direct) Merger</h3>

      <div className={bodyClass}>
        <p>
          In a statutory merger, two entities merge directly — one absorbs the other. The surviving
          entity assumes all assets and liabilities of the merged entity. This is the simplest form
          of merger and is governed by the merger statutes of the state(s) where the entities are
          organized.
        </p>
        <p>
          The primary advantage of a direct merger is simplicity. All assets, contracts, and
          obligations transfer automatically by operation of law. The primary disadvantage is that
          the surviving entity absorbs all liabilities — including unknown and contingent liabilities —
          of the merged entity. For acquirers concerned about hidden risks, this exposure can be
          problematic.
        </p>
      </div>

      <h3 className={h3Class}>Forward Triangular Merger</h3>

      <div className={bodyClass}>
        <p>
          In a forward triangular merger, the acquirer creates a subsidiary (a new entity), and the
          target merges into that subsidiary. The target ceases to exist, and the subsidiary survives
          as a wholly-owned subsidiary of the acquirer containing the target&apos;s assets and
          liabilities.
        </p>
        <p>
          This structure provides liability isolation — the target&apos;s liabilities are contained
          within the subsidiary rather than being absorbed directly by the parent acquirer. It also
          allows the acquirer to maintain the target as a separate legal entity, which may be
          important for regulatory, contractual, or operational reasons. Forward triangular mergers
          can qualify as Type A reorganizations if the continuity of interest requirements are met.
        </p>
      </div>

      <h3 className={h3Class}>Reverse Triangular Merger</h3>

      <div className={bodyClass}>
        <p>
          In a reverse triangular merger, the acquirer creates a subsidiary that merges into the
          target — the opposite direction of a forward triangular merger. The target survives as a
          wholly-owned subsidiary of the acquirer, and the acquisition subsidiary ceases to exist.
        </p>
        <p>
          This structure is often preferred when the target holds contracts, licenses, or permits
          that contain change-of-control or anti-assignment provisions. Because the target entity
          survives (only its ownership changes), many contracts remain in force without triggering
          consent requirements. The reverse triangular merger is one of the most common structures
          in middle-market M&amp;A for this reason.
        </p>
        <p>
          To qualify as a tax-free reorganization, a reverse triangular merger must meet specific
          requirements: the target must hold substantially all of its assets and the assets of the
          acquisition subsidiary after the merger, and the acquirer must use its voting stock for a
          substantial portion of the consideration.
        </p>
      </div>

      <h2 className={h2Class}>Liability Considerations</h2>

      <div className={bodyClass}>
        <p>
          One of the most important practical differences between mergers and acquisitions is how
          they handle liability transfer — a topic that directly impacts the{" "}
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
            closing process
          </Link>{" "}
          and post-closing risk profile.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Mergers:</strong> The surviving entity inherits all liabilities of the merged
            entity by operation of law. There is no ability to selectively exclude liabilities. This
            includes known obligations, unknown claims, contingent liabilities, and potential future
            claims arising from pre-merger activities. The breadth of successor liability in mergers
            is one reason buyers in the SME market often prefer asset acquisitions.
          </li>
          <li>
            <strong>Asset acquisitions:</strong> The buyer generally assumes only those liabilities
            specifically identified in the purchase agreement. Excluded liabilities remain with the
            seller entity. However, several legal doctrines — including the &quot;de facto merger&quot;
            doctrine, the &quot;mere continuation&quot; doctrine, and bulk sales laws — can impose
            successor liability on asset buyers in certain circumstances, particularly when the buyer
            acquires substantially all of the seller&apos;s assets.
          </li>
          <li>
            <strong>Stock acquisitions:</strong> Because the target entity continues to exist with all
            its existing liabilities, the buyer effectively inherits all liabilities — similar to a
            merger. However, the liability is contained within the target entity rather than being
            absorbed into the buyer&apos;s own entity, providing some structural separation.
          </li>
        </ul>

        <p>
          Buyers concerned about liability exposure should discuss these distinctions with legal counsel
          early in the deal process, ideally during the{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            letter of intent
          </Link>{" "}
          stage when the basic transaction structure is being negotiated.
        </p>
      </div>

      <h2 className={h2Class}>Governance and Approval Requirements</h2>

      <div className={bodyClass}>
        <p>
          The approval requirements for mergers and acquisitions differ significantly, which can affect
          deal timing, complexity, and feasibility.
        </p>

        <ul className={ulClass}>
          <li>
            <strong>Merger approvals:</strong> Mergers typically require approval from both boards of
            directors (or managing members) and a shareholder vote of both entities. Most state statutes
            require a majority or supermajority (often two-thirds) vote. This means a merger cannot
            proceed if a significant minority of shareholders in either entity objects — though
            dissenting shareholders generally have appraisal rights rather than veto power.
          </li>
          <li>
            <strong>Stock acquisition approvals:</strong> In a stock acquisition, the buyer negotiates
            directly with each shareholder. No formal shareholder vote is required — but the buyer
            must obtain enough shares to achieve its desired ownership level. If any shareholders
            refuse to sell, the buyer may end up with less than full ownership (though a subsequent
            squeeze-out merger can address this).
          </li>
          <li>
            <strong>Asset acquisition approvals:</strong> Asset acquisitions require approval from the
            selling entity&apos;s board (and potentially shareholders, depending on state law and
            whether the sale constitutes substantially all assets). The buyer&apos;s board must also
            approve the transaction. No vote of the target&apos;s shareholders is typically required
            unless state law mandates it for sales of substantially all assets.
          </li>
        </ul>

        <p>
          For acquirers dealing with targets that have multiple shareholders — including those evaluating
          family-owned businesses with complex ownership structures — the approval requirements
          significantly influence structure selection.
        </p>
      </div>

      <h2 className={h2Class}>Choosing the Right Structure: A Decision Framework</h2>

      <div className={bodyClass}>
        <p>
          Selecting between a merger and an acquisition (and between asset and stock acquisition)
          requires balancing multiple factors. The following framework helps organize the analysis:
        </p>

        <ol className={olClass}>
          <li>
            <strong>Identify your primary objectives:</strong> Is liability limitation the top priority?
            Tax efficiency? Speed? Preservation of contracts and licenses? Rank your objectives and
            evaluate each structure against them.
          </li>
          <li>
            <strong>Assess the target&apos;s characteristics:</strong> Does the target have significant
            contingent liabilities? Non-assignable contracts? Valuable tax attributes? Minority
            shareholders who may not cooperate? Each factor tilts the analysis toward or away from
            specific structures.
          </li>
          <li>
            <strong>Model the tax consequences:</strong> With your tax advisor, model the after-tax
            cost to both buyer and seller under each structural option. A structure that saves the buyer
            tax but costs the seller more may affect the negotiated purchase price — analyze the net
            impact to both parties.
          </li>
          <li>
            <strong>Evaluate practical complexity:</strong> Consider the administrative burden of each
            structure. Asset acquisitions require individual transfer of each asset and contract. Mergers
            require shareholder votes and statutory filings. Stock acquisitions require dealing with
            each shareholder individually. Choose the structure whose complexity you can manage
            effectively within your timeline.
          </li>
          <li>
            <strong>Consider the regulatory environment:</strong> Certain industries have specific
            regulatory requirements for ownership changes. Healthcare, financial services, insurance,
            and government contracting all have unique considerations that may favor one structure
            over another.
          </li>
          <li>
            <strong>Align with the seller:</strong> The best structure is one that both parties can
            support. Understanding the seller&apos;s tax priorities, liability concerns, and practical
            preferences — and being willing to negotiate structure as part of the overall deal — often
            leads to better outcomes than rigidly insisting on a single approach.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Related Resources</h2>

      <ul className={ulClass}>
        <li>
          <Link href="/learn/asset-vs-stock-purchase" className="text-apple-accent hover:underline">
            Asset vs. Stock Purchase: Pros, Cons & Tax Impact
          </Link>{" "}— Deep dive into the two primary acquisition structures
        </li>
        <li>
          <Link href="/learn/business-valuation-methods" className="text-apple-accent hover:underline">
            Business Valuation Methods Explained
          </Link>{" "}— How structure affects valuation and deal economics
        </li>
        <li>
          <Link href="/learn/tax-planning-acquisitions" className="text-apple-accent hover:underline">
            Tax Planning for Business Acquisitions
          </Link>{" "}— Optimizing tax outcomes across transaction structures
        </li>
        <li>
          <Link href="/learn/closing-process" className="text-apple-accent hover:underline">
            The Closing Process: Timeline, Documents & Wire Transfers
          </Link>{" "}— Executing the transaction once structure is determined
        </li>
        <li>
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            Letter of Intent: How to Draft & Negotiate
          </Link>{" "}— Setting the structural framework early in negotiations
        </li>
      </ul>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>American Bar Association, <em>Model Merger Agreement for the Acquisition of a Public Company</em> (2nd ed., 2021)</li>
        <li>Internal Revenue Service, <em>IRC Section 368 — Definitions Relating to Corporate Reorganizations</em></li>
        <li>Martin D. Ginsburg, Jack S. Levin, and Donald E. Rocap, <em>Mergers, Acquisitions, and Buyouts</em> (Wolters Kluwer, 2023)</li>
        <li>Robert W. Hamilton, <em>The Law of Corporations in a Nutshell</em> (West Academic, 7th ed., 2020)</li>
        <li>Practical Law (Thomson Reuters), <em>Merger vs. Asset Deal vs. Stock Deal: Tax and Non-Tax Considerations</em> (2023)</li>
        <li>Samuel C. Thompson Jr., <em>Mergers, Acquisitions, and Tender Offers: Law and Strategies</em> (Practising Law Institute, 2022)</li>
      </ul>
    </article>
  );
}
