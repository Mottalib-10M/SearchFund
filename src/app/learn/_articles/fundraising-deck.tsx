import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function FundraisingDeckArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Structure Your Fundraising Deck</h1>
      <p className="text-sm text-apple-gray-500 mt-3">12 min read</p>

      <div className={bodyClass}>
        <p>
          Your fundraising deck is the visual companion to your PPM and typically
          the first document an investor sees. While the PPM provides legal
          disclosure and comprehensive detail, the deck is your storytelling tool
          &mdash; it frames the conversation during investor meetings and leaves
          a lasting impression. A great deck does not replace the PPM; it
          complements it by making your case concise, visual, and memorable.
        </p>

        <h2 className={h2Class}>Deck vs. PPM: How they work together</h2>
        <p>
          Think of the deck as the movie trailer and the PPM as the full film.
          The deck gets investors excited enough to read the PPM and take the
          meeting. During the meeting, you walk through the deck while the PPM
          sits as a reference document. After the meeting, investors share the
          deck internally with their partners or investment committees, so it
          must stand on its own. The PPM handles the legal heavy lifting &mdash;
          risk factors, subscription terms, and regulatory disclosures do not
          belong in the deck.
        </p>

        <h2 className={h2Class}>Slide-by-slide guide</h2>

        <h3 className={h3Class}>Slide 1: Title slide</h3>
        <p>
          Fund name, your name and photo, the amount being raised, and the date.
          Keep it clean and professional. Include a one-line tagline that captures
          your thesis, such as &ldquo;Acquiring and growing a B2B services
          company in the DACH region.&rdquo; A professional headshot builds
          personal connection before you even speak.
        </p>

        <h3 className={h3Class}>Slide 2: The opportunity</h3>
        <p>
          Frame the macro opportunity in ETA. Why is now a good time to acquire
          small businesses? Key data points include the wave of baby-boomer
          retirements creating succession gaps, the growing number of profitable
          SMEs without clear successors, and the historical return profile of
          search funds (per Stanford and IESE studies). This slide sets context
          for investors who may be new to the asset class.
        </p>

        <h3 className={h3Class}>Slide 3: Search thesis</h3>
        <p>
          Your specific investment thesis in one slide. What types of businesses
          will you target, in what geographies, and <em>why</em>? The best
          theses are specific enough to be credible but broad enough to generate
          a sufficient pipeline. Include 2-3 bullets on why you believe this
          thesis creates an edge in sourcing or operating.
        </p>

        <h3 className={h3Class}>Slide 4: Target criteria</h3>
        <p>
          A clear, visual summary of your acquisition criteria:
        </p>
        <ul className={ulClass}>
          <li><strong>Revenue:</strong> &euro;2M-&euro;20M (or your specific range).</li>
          <li><strong>EBITDA:</strong> &euro;500K-&euro;5M with stable or growing margins.</li>
          <li><strong>Industry:</strong> Your sector focus or exclusion list.</li>
          <li><strong>Geography:</strong> Countries or regions with rationale.</li>
          <li><strong>Characteristics:</strong> Recurring revenue, low customer concentration, owner-operated, fragmented market.</li>
        </ul>
        <p>
          Use a simple table or icon-based layout. Investors should absorb this
          in under 10 seconds.
        </p>

        <h3 className={h3Class}>Slide 5: Your background</h3>
        <p>
          This is often the most important slide. Present your career trajectory
          as a narrative that leads logically to ETA. Highlight relevant
          operating experience, industry knowledge, M&amp;A exposure, and
          leadership roles. Include specific accomplishments with numbers.
          If you have a co-searcher, show how your skills complement each other.
          Add logos of employers and educational institutions for visual
          recognition.
        </p>

        <h3 className={h3Class}>Slide 6: Fund economics</h3>
        <p>
          A clean summary of the financial terms:
        </p>
        <ul className={ulClass}>
          <li>Total raise amount and number of investor units.</li>
          <li>Search phase budget and timeline.</li>
          <li>Step-up multiple at acquisition (typically 1.5x).</li>
          <li>Searcher equity allocation and vesting schedule.</li>
          <li>Investor rights (first refusal, board seats, information rights).</li>
        </ul>
        <p>
          Consider using a simple waterfall diagram showing how value flows at
          different outcomes. Investors want to understand the alignment of
          incentives at a glance.
        </p>

        <h3 className={h3Class}>Slide 7: Search strategy &amp; timeline</h3>
        <p>
          How will you actually find deals? Outline your sourcing channels:
          proprietary outreach (direct mail, cold calling owners), broker
          relationships, intermediary networks, online platforms, and
          professional advisors (accountants, lawyers). Show a timeline with
          key milestones: fundraising close, search kickoff, first LOI target,
          expected acquisition close. A Gantt-style visual works well here.
        </p>

        <h3 className={h3Class}>Slide 8: Value creation plan</h3>
        <p>
          What will you do after acquiring the business? Outline 3-5 concrete
          value creation levers: revenue growth initiatives, operational
          improvements, technology upgrades, add-on acquisitions, or geographic
          expansion. Be specific enough to demonstrate operational thinking
          without being so prescriptive that it seems unrealistic before you
          have identified a target.
        </p>

        <h3 className={h3Class}>Slide 9: Appendix</h3>
        <p>
          Include supporting materials that strengthen your case but would
          clutter the main deck: detailed resumes, reference contacts, case
          studies of successful search fund acquisitions in your target market,
          market sizing data, and a more detailed budget breakdown for the
          search phase.
        </p>

        <h2 className={h2Class}>Design tips</h2>
        <ol className={olClass}>
          <li><strong>Less text, more visuals.</strong> Each slide should have a single key message. If you need a paragraph to explain a slide, the slide is too complex.</li>
          <li><strong>Consistent branding.</strong> Choose 2-3 colors, one font family, and stick to them. Avoid clip art, stock photos, and busy backgrounds.</li>
          <li><strong>Data over adjectives.</strong> Replace &ldquo;significant experience&rdquo; with &ldquo;8 years of operating experience across 3 companies.&rdquo;</li>
          <li><strong>10-12 slides maximum.</strong> Anything longer loses the audience. The PPM handles the detail.</li>
          <li><strong>PDF format for sharing.</strong> Always send a PDF, not a PowerPoint file. Formatting is preserved and it signals polish.</li>
        </ol>

        <h2 className={h2Class}>The investor meeting flow</h2>
        <p>
          The deck structures a 30-45 minute investor meeting. A typical flow:
        </p>
        <ol className={olClass}>
          <li><strong>0-5 min:</strong> Personal introduction and rapport building. Do not open the deck immediately.</li>
          <li><strong>5-20 min:</strong> Walk through the deck, spending the most time on your background (slide 5) and thesis (slides 3-4).</li>
          <li><strong>20-35 min:</strong> Q&amp;A. Let the investor drive the conversation. Common questions cover deal sourcing strategy, how you handle competing searchers, and your plan if the search takes longer than expected.</li>
          <li><strong>35-45 min:</strong> Next steps. Ask directly if the investor is interested. Offer to send the PPM if they have not received it. Propose a follow-up timeline.</li>
        </ol>
        <p>
          The best investor meetings feel like conversations, not presentations.
          Use the deck as a guide, not a script. Make eye contact, tell stories,
          and listen more than you talk.
        </p>

        <h2 className={h2Class}>Common mistakes</h2>
        <ul className={ulClass}>
          <li><strong>Information overload:</strong> Cramming every detail into the deck. That is what the PPM is for.</li>
          <li><strong>Generic thesis:</strong> &ldquo;Looking for a good business&rdquo; tells investors nothing. Be specific about why your criteria and geography matter.</li>
          <li><strong>No personal story:</strong> Investors fund people. If your background slide reads like a LinkedIn profile, rewrite it as a narrative.</li>
          <li><strong>Ignoring the ask:</strong> Be clear about how much you are raising, how many units remain, and the minimum check size.</li>
          <li><strong>Sending without context:</strong> Never email the deck cold without a warm introduction or prior conversation. The deck supports a relationship &mdash; it does not replace one.</li>
        </ul>
      </div>
    </article>
  );
}
