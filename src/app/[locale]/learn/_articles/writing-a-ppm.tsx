import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function WritingAPPMArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Write a PPM (Private Placement Memorandum)</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          The Private Placement Memorandum is the foundational document of your
          search fund raise. It serves two purposes simultaneously: it is a legal
          disclosure document that protects you and your investors, and it is a
          marketing document that convinces sophisticated <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">investors</Link> to back you
          with their capital. Getting it right is essential &mdash; a well-crafted
          PPM signals professionalism, thoroughness, and credibility.
        </p>

        <h2 className={h2Class}>What a PPM is (and is not)</h2>
        <p>
          A PPM is a securities offering document used in private placements &mdash;
          offerings that are exempt from full SEC registration (in the US) or
          equivalent prospectus requirements (in the EU). It discloses material
          information about the investment opportunity so that investors can make
          an informed decision. It is <strong>not</strong> a business plan for
          a specific company. You are raising capital to <em>search</em> for an
          acquisition, so the PPM describes you, your strategy, the fund
          structure, and the risks &mdash; not a specific target. For a complete
          overview of the documents involved in a search fund raise, see our guide to <Link href="/learn/search-fund-legal-documents" className="text-apple-accent hover:underline">search fund legal documents</Link>.
        </p>

        <h2 className={h2Class}>Section-by-section breakdown</h2>

        <h3 className={h3Class}>1. Cover page &amp; table of contents</h3>
        <p>
          The cover page states the fund name, the amount being raised, the
          offering type (e.g., &ldquo;Regulation D, Rule 506(b)&rdquo; in the US),
          and a prominent disclaimer that the securities have not been registered.
          Keep it clean and professional. Include the date of the offering and
          contact information. The table of contents makes the document navigable
          for investors who will want to jump between sections.
        </p>

        <h3 className={h3Class}>2. Executive summary</h3>
        <p>
          This is the most important section &mdash; many investors will decide
          whether to read further based on these two pages. Cover the following
          in concise prose:
        </p>
        <ul className={ulClass}>
          <li>Who you are and why you are pursuing ETA.</li>
          <li>Your search thesis: what types of businesses you will target, in what geographies, and why.</li>
          <li>The amount of capital you are raising and how it will be used.</li>
          <li>The fund economics: what investors receive in return.</li>
          <li>Your timeline: expected search duration and acquisition window.</li>
        </ul>

        <h3 className={h3Class}>3. Searcher background</h3>
        <p>
          Investors are backing <em>you</em>, not a deal. This section is your
          professional biography in narrative form. Cover your education, career
          history, relevant operating or investing experience, and any industry
          expertise that informs your search thesis. Include specific
          accomplishments with quantifiable results. If you have a co-searcher,
          explain how your skills complement each other. Attach full resumes as
          an appendix.
        </p>

        <h3 className={h3Class}>4. Search thesis &amp; target criteria</h3>
        <p>
          This is where you demonstrate strategic thinking. A strong thesis
          explains <em>why</em> certain business characteristics matter, not just
          <em>what</em> you are looking for. Cover:
        </p>
        <ul className={ulClass}>
          <li><strong>Industry focus:</strong> Are you sector-agnostic or targeting specific verticals? If focused, explain why those sectors present attractive acquisition opportunities.</li>
          <li><strong>Geography:</strong> Define your search radius and explain the rationale. European searchers should specify countries and discuss cross-border considerations.</li>
          <li><strong>Size criteria:</strong> Revenue range, EBITDA range, and employee count. Typical traditional search fund targets have &euro;1M-&euro;5M EBITDA.</li>
          <li><strong>Business characteristics:</strong> Recurring revenue, low customer concentration, defensible market position, fragmented industry, secular growth tailwinds.</li>
          <li><strong>Value creation plan:</strong> How you intend to grow the acquired business &mdash; organic growth, add-on acquisitions, operational improvements, technology adoption.</li>
        </ul>

        <h3 className={h3Class}>5. Fund economics &amp; terms</h3>
        <p>
          This section details exactly what investors are purchasing and the
          financial mechanics of the fund. For a traditional search fund, cover:
        </p>
        <ul className={ulClass}>
          <li><strong>Search capital:</strong> Total raise amount, number of units, price per unit, minimum investment.</li>
          <li><strong>Step-up:</strong> The conversion premium investors receive when search capital converts to acquisition equity (typically 1.5x). See our <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap tables and equity guide</Link> for a worked example.</li>
          <li><strong>Searcher equity:</strong> The percentage reserved for the searcher(s), vesting schedule, and any performance-based acceleration. For typical ranges, see <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">searcher compensation</Link>.</li>
          <li><strong>Investor rights:</strong> Right of first refusal on acquisition equity, board representation, information rights, and approval thresholds.</li>
          <li><strong>Management fees:</strong> Monthly salary for the searcher(s) during the search phase, typically &euro;3,000-&euro;6,000 per month.</li>
          <li><strong>Wind-down provisions:</strong> What happens if no acquisition is completed &mdash; return of remaining capital, timeline, and process.</li>
        </ul>

        <h3 className={h3Class}>6. Risk factors</h3>
        <p>
          The risk factors section is both a legal necessity and a credibility
          signal. Sophisticated investors are skeptical of PPMs that downplay
          risks. Be thorough and honest. Common risk factors include:
        </p>
        <ul className={ulClass}>
          <li>No guarantee that a suitable acquisition target will be identified.</li>
          <li>The searcher has limited operating experience as a CEO.</li>
          <li>Search fund investments are illiquid with no secondary market.</li>
          <li>Acquisition financing may not be available on favorable terms.</li>
          <li>Key person risk &mdash; the fund depends on the searcher&apos;s ability and commitment.</li>
          <li>General economic conditions may affect the availability and pricing of targets.</li>
          <li>Integration and transition risks after acquisition.</li>
          <li>Regulatory and tax risks specific to the target geographies.</li>
        </ul>

        <h3 className={h3Class}>7. Legal disclaimers &amp; subscription documents</h3>
        <p>
          Work with a securities attorney to draft the legal sections. These
          typically include investor eligibility requirements (accredited investor
          or qualified purchaser standards), representations and warranties,
          indemnification provisions, governing law, and dispute resolution
          mechanisms. The subscription agreement, investor questionnaire, and
          partnership or operating agreement are usually attached as exhibits.
        </p>

        <h2 className={h2Class}>Legal requirements and disclosures</h2>
        <p>
          A PPM is fundamentally a securities offering document, and its legal
          foundation must be airtight. In the United States, most search fund
          offerings rely on Regulation D exemptions, specifically Rule 506(b)
          or Rule 506(c), which exempt the offering from full SEC registration.
          Rule 506(b) allows you to raise from an unlimited number of accredited
          investors and up to 35 sophisticated but non-accredited investors,
          provided there is no general solicitation. Rule 506(c) permits
          general solicitation but requires that all investors be verified
          accredited investors. Most search funds use 506(b) because it allows
          broader participation and does not require formal accreditation
          verification procedures.
        </p>
        <p>
          In Europe, the regulatory equivalent varies by jurisdiction. Many
          European search funds structure their raise as a private placement
          to qualified investors, relying on exemptions under national law or
          the EU Prospectus Regulation. The key principle is the same: you are
          offering securities to a limited group of sophisticated investors
          without triggering the obligation to publish a full prospectus. Your
          securities attorney will determine which exemption applies based on
          your fund structure, investor base, and domicile.
        </p>
        <p>
          The risk factors section of your PPM serves a dual purpose. Legally,
          it limits your liability by ensuring investors cannot claim they were
          unaware of material risks. Strategically, it builds credibility with
          sophisticated investors who view thorough risk disclosure as a sign
          of maturity and honesty. Do not treat this section as a formality.
          Draft it carefully, covering risks specific to your search thesis
          (geographic risk, sector risk, regulatory risk) as well as structural
          risks inherent in the search fund model (illiquidity, key person
          dependence, no guarantee of acquisition). Your attorney will add
          standard legal risk factors, but the deal-specific risks should
          come from you.
        </p>
        <p>
          The subscription agreement, typically attached as an exhibit to the
          PPM, is the contract investors sign to commit capital. It specifies
          the amount invested, the representations the investor makes
          (accredited status, sophistication, understanding of illiquidity),
          and the mechanics of capital calls. Most search fund subscription
          agreements call for full capital commitment at signing with a single
          drawdown, but some structures allow for staged capital calls. Your
          attorney will draft the subscription agreement, but you should
          understand every clause so you can discuss it with investors.
        </p>

        <h2 className={h2Class}>Financial projections and budget</h2>
        <p>
          While your PPM is raising capital for a search (not for an
          operating business), investors still expect a detailed breakdown
          of how their money will be spent. The financial section typically
          includes a search budget and a pro forma model showing how search
          capital converts to acquisition equity.
        </p>

        <h3 className={h3Class}>Search budget breakdown</h3>
        <p>
          The search budget should be presented as a detailed monthly or
          quarterly projection for the expected search duration (typically
          18-24 months). Common line items include:
        </p>
        <ul className={ulClass}>
          <li><strong>Searcher salary:</strong> Typically &euro;3,000-&euro;6,000 per month, varying by geography and cost of living. This is a key investor concern, so justify the amount and note that it is below market rate for your experience level.</li>
          <li><strong>Travel and transportation:</strong> Budget for visiting potential targets, attending industry conferences, and meeting brokers. Plan for 15-25 company visits during the search, with associated travel costs.</li>
          <li><strong>Database and research subscriptions:</strong> Access to deal sourcing platforms, industry databases, company registries, and financial data providers. Typical costs range from &euro;500-&euro;2,000 per month depending on geography and sector.</li>
          <li><strong>Legal and accounting fees:</strong> Due diligence costs for deals that progress to LOI stage, entity formation, and ongoing fund administration. Reserve &euro;20,000-&euro;40,000 for this line item.</li>
          <li><strong>Office and administration:</strong> Co-working space, software tools, phone, and miscellaneous expenses. Many searchers work from home to minimize this cost.</li>
          <li><strong>Contingency reserve:</strong> A buffer of 10-15 percent of the total budget for unexpected expenses or a longer-than-planned search duration.</li>
        </ul>

        <h3 className={h3Class}>Pro forma conversion model</h3>
        <p>
          Show investors how their search capital converts to acquisition equity
          under different scenarios. A simple sensitivity table illustrating
          the investor&apos;s ownership percentage at various acquisition sizes
          and equity contributions is highly effective. Include the step-up
          calculation, co-investment rights, and the resulting cap table at
          acquisition. Reference your <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap tables and equity guide</Link> for
          worked examples. Investors want to see that you understand the math
          and that the economics are aligned.
        </p>

        <h2 className={h2Class}>Investor rights and terms</h2>
        <p>
          The terms section of your PPM defines the relationship between you
          and your investors for the life of the fund. Getting these terms
          right is critical because they set expectations and govern behavior
          during both good times and challenging periods.
        </p>

        <h3 className={h3Class}>Board representation</h3>
        <p>
          Most traditional search funds grant investors the right to appoint
          one or more board members upon acquisition. The typical structure
          is a five-member board: two investor-appointed directors, two
          independent directors selected by the CEO with board approval, and
          the CEO. During the search phase, a smaller advisory committee of
          two to three investors often provides guidance. Specify how board
          seats are allocated &mdash; whether by investment size, seniority,
          or mutual agreement among investors. Clear governance structures
          prevent conflicts later.
        </p>

        <h3 className={h3Class}>Information rights and co-investment</h3>
        <p>
          Investors expect regular information about your search progress and,
          after acquisition, about business performance. The PPM should specify
          what investors receive: monthly written updates, quarterly financial
          statements, and annual audited financials are standard. Co-investment
          rights at acquisition are a key term in the traditional model. Search
          capital investors typically receive the right of first refusal to
          participate in the acquisition equity round, often on a pro rata
          basis. This right is valuable because it allows investors to increase
          their exposure to deals they find attractive. Specify whether
          co-investment rights are pro rata, whether there is a minimum or
          maximum, and what happens if investors decline their allocation.
        </p>

        <h3 className={h3Class}>Step-up ratio justification</h3>
        <p>
          The step-up ratio (typically 1.5x for traditional search funds)
          rewards search capital investors for taking the higher-risk position
          of funding the search before a target is identified. Your PPM should
          explain the rationale: search capital investors bear the risk of a
          failed search with no acquisition, while acquisition equity investors
          invest only after a specific target has been identified and vetted.
          The 1.5x multiple compensates for this incremental risk. If you are
          using a different ratio, explain why and reference market precedent.
        </p>

        <h2 className={h2Class}>Working with a securities attorney</h2>
        <p>
          A securities attorney is not optional &mdash; issuing securities
          without proper legal counsel creates personal liability and can
          result in rescission claims from investors. The right attorney adds
          value beyond simple document drafting; they help you manage
          regulatory requirements, structure the fund entity, and avoid
          common legal pitfalls.
        </p>
        <p>
          Engage your attorney early in the process, ideally three to four
          months before you plan to begin fundraising. The attorney will
          draft the legal sections of the PPM (risk factors, disclaimers,
          representations and warranties), the subscription agreement, the
          operating agreement or partnership agreement for the fund entity,
          and any required regulatory filings (such as SEC Form D in the
          United States). You are responsible for drafting the substantive
          sections &mdash; executive summary, searcher background, thesis,
          and fund economics &mdash; which the attorney will then review
          for legal sufficiency.
        </p>
        <p>
          Typical legal costs for a search fund PPM range from $15,000 to
          $30,000, depending on the complexity of the fund structure, the
          number of jurisdictions involved, and the attorney&apos;s firm and
          experience level. Solo practitioners and boutique firms that
          specialize in search funds or private equity tend to offer better
          value than large law firms. Ask for a fixed-fee engagement rather
          than hourly billing to manage costs. Many experienced search fund
          attorneys have templated documents that reduce the drafting time
          and cost significantly.
        </p>

        <h2 className={h2Class}>PPM vs. pitch deck</h2>
        <p>
          The PPM and the <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">fundraising deck</Link> are companion documents that serve
          different purposes at different stages of the investor engagement
          process. Understanding how they work together helps you deploy each
          one effectively.
        </p>
        <p>
          The deck is your storytelling tool. It is visual, concise (10-12
          slides), and designed for in-person or video meetings. It frames
          the conversation, builds emotional engagement, and leaves a
          memorable impression. The deck leads with your personal story,
          your thesis, and the opportunity. It contains minimal legal language
          and no subscription terms.
        </p>
        <p>
          The PPM is your disclosure and reference document. It is text-heavy,
          thorough (30-50 pages), and designed for careful, independent
          review. It provides the legal framework, detailed terms, risk
          factors, and subscription mechanics. Investors read the PPM after
          the initial meeting to validate the claims made in the deck and
          to conduct their own due diligence on the terms.
        </p>
        <p>
          In practice, the engagement sequence is: warm introduction, then
          deck meeting, then PPM review, then follow-up questions, then
          commitment. Some investors request the PPM before the meeting;
          others prefer to see the deck first. Be prepared to send either
          document at any stage, but lead with the deck whenever possible
          because it frames the narrative on your terms. The key principle
          is consistency &mdash; every fact, figure, and claim in the deck
          must match the PPM exactly. Discrepancies erode trust instantly.
        </p>

        <h2 className={h2Class}>Common mistakes to avoid</h2>
        <ul className={ulClass}>
          <li><strong>Too long:</strong> A PPM should be 30-50 pages, not 100. Investors read dozens of PPMs. Respect their time.</li>
          <li><strong>Vague thesis:</strong> &ldquo;I will look for good businesses&rdquo; is not a thesis. Be specific about sectors, geographies, size, and why you are uniquely positioned.</li>
          <li><strong>Missing risk factors:</strong> Omitting obvious risks does not make them disappear &mdash; it makes you look naive or dishonest.</li>
          <li><strong>Overly promotional tone:</strong> This is a legal document, not a <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">pitch deck</Link>. Confident but measured language builds more trust than hyperbole.</li>
          <li><strong>Cookie-cutter content:</strong> Do not copy another searcher&apos;s PPM with minor edits. Investors will notice &mdash; many have seen hundreds of these documents.</li>
          <li><strong>No legal review:</strong> Issuing securities without proper legal counsel creates personal liability. Always use a qualified securities attorney.</li>
        </ul>

        <h2 className={h2Class}>EU-specific considerations</h2>
        <p>
          European searchers must manage a more fragmented regulatory environment.
          Key considerations include:
        </p>
        <ul className={ulClass}>
          <li><strong>AIFMD (Alternative Investment Fund Managers Directive):</strong> Depending on the fund structure and size, you may fall under AIFMD requirements. Many search funds qualify for the sub-threshold exemption (&lt;&euro;100M), but you must confirm this with local counsel.</li>
          <li><strong>Local securities laws:</strong> Each EU member state has its own private placement rules. France, Germany, Spain, and the Netherlands all have different thresholds and filing requirements for private offerings.</li>
          <li><strong>Cross-border marketing:</strong> If you are raising from investors across multiple EU countries, you may need to comply with the regulations in each country or rely on the AIFMD marketing passport.</li>
          <li><strong>Language:</strong> Some jurisdictions require offering documents to be in the local language. At minimum, prepare a summary in the language of your primary investor base.</li>
          <li><strong>Fund vehicle:</strong> Common structures include Luxembourg SCSp, French SAS, Spanish SL, and Dutch BV. Each has different tax, liability, and regulatory implications.</li>
        </ul>

        <h2 className={h2Class}>Tips for making your PPM compelling</h2>
        <ul className={ulClass}>
          <li><strong>Lead with your story:</strong> Investors invest in people. Your personal narrative &mdash; why you chose ETA, what drives you, what you bring &mdash; is the most compelling element.</li>
          <li><strong>Use data:</strong> Reference industry research, Stanford/IESE search fund studies, and market data on your target sectors. Understanding <Link href="/learn/search-fund-good-investment" className="text-apple-accent hover:underline">search fund return data</Link> will help you frame the opportunity for your investors. Show that your thesis is grounded in evidence.</li>
          <li><strong>Include references:</strong> Offer to connect investors with former employers, professors, or mentors who can vouch for your character and abilities.</li>
          <li><strong>Professional design:</strong> Clean formatting, consistent fonts, and a simple cover make a difference. Avoid flashy graphics but ensure the document is visually polished.</li>
          <li><strong>Get feedback early:</strong> Share drafts with trusted mentors or ex-searchers before distributing broadly. Iterate based on their input.</li>
        </ul>

        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>How much does it cost to prepare a PPM?</h3>
        <p>
          Typical legal costs for a search fund PPM range from $15,000 to $30,000, depending on the complexity of the fund structure, the number of jurisdictions involved, and your attorney's experience. Solo practitioners and boutique firms that specialize in search funds or private equity tend to offer better value than large law firms. Ask for a fixed-fee engagement rather than hourly billing to manage costs.
        </p>

        <h3 className={h3Class}>Can I use another searcher's PPM as a template?</h3>
        <p>
          While reviewing other PPMs is a valuable learning exercise, you should never copy another searcher's PPM with minor edits. Sophisticated investors review dozens of PPMs and will immediately recognize recycled content. More importantly, your PPM must accurately reflect your unique background, thesis, fund terms, and risk factors. Use templates for structural guidance only, and draft all substantive content yourself.
        </p>

        <h3 className={h3Class}>Do I need a PPM for a self-funded search?</h3>
        <p>
          Self-funded searchers who are not raising external capital for the search phase do not need a PPM during the search. However, if you plan to raise equity capital for an acquisition, you will need offering documents at that stage. Some self-funded searchers prepare a lighter-weight investment memorandum instead of a full PPM when they bring in co-investors for a specific deal. Regardless of model, always consult a securities attorney before soliciting investment capital.
        </p>
      </div>
    </article>
  );
}
