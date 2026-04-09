import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function WritingAPPMArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Write a PPM (Private Placement Memorandum)</h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={bodyClass}>
        <p>
          The Private Placement Memorandum is the foundational document of your
          search fund raise. It serves two purposes simultaneously: it is a legal
          disclosure document that protects you and your investors, and it is a
          marketing document that convinces sophisticated investors to back you
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
          structure, and the risks &mdash; not a specific target.
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
          <li><strong>Step-up:</strong> The conversion premium investors receive when search capital converts to acquisition equity (typically 1.5x).</li>
          <li><strong>Searcher equity:</strong> The percentage reserved for the searcher(s), vesting schedule, and any performance-based acceleration.</li>
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

        <h2 className={h2Class}>Common mistakes to avoid</h2>
        <ul className={ulClass}>
          <li><strong>Too long:</strong> A PPM should be 30-50 pages, not 100. Investors read dozens of PPMs. Respect their time.</li>
          <li><strong>Vague thesis:</strong> &ldquo;I will look for good businesses&rdquo; is not a thesis. Be specific about sectors, geographies, size, and why you are uniquely positioned.</li>
          <li><strong>Missing risk factors:</strong> Omitting obvious risks does not make them disappear &mdash; it makes you look naive or dishonest.</li>
          <li><strong>Overly promotional tone:</strong> This is a legal document, not a pitch deck. Confident but measured language builds more trust than hyperbole.</li>
          <li><strong>Cookie-cutter content:</strong> Do not copy another searcher&apos;s PPM with minor edits. Investors will notice &mdash; many have seen hundreds of these documents.</li>
          <li><strong>No legal review:</strong> Issuing securities without proper legal counsel creates personal liability. Always use a qualified securities attorney.</li>
        </ul>

        <h2 className={h2Class}>EU-specific considerations</h2>
        <p>
          European searchers must navigate a more fragmented regulatory landscape.
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
          <li><strong>Use data:</strong> Reference industry research, Stanford/IESE search fund studies, market data on your target sectors. Show that your thesis is grounded in evidence.</li>
          <li><strong>Include references:</strong> Offer to connect investors with former employers, professors, or mentors who can vouch for your character and abilities.</li>
          <li><strong>Professional design:</strong> Clean formatting, consistent fonts, and a simple cover make a difference. Avoid flashy graphics but ensure the document is visually polished.</li>
          <li><strong>Get feedback early:</strong> Share drafts with trusted mentors or ex-searchers before distributing broadly. Iterate based on their input.</li>
        </ul>
      </div>
    </article>
  );
}
