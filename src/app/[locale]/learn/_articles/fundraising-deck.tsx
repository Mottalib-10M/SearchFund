import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function FundraisingDeckArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Structure Your Fundraising Deck</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          Your fundraising deck is the visual companion to your <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">PPM</Link> and typically
          the first document an investor sees. While the PPM provides legal
          disclosure and comprehensive detail, the deck is your storytelling tool
          &mdash; it frames the conversation during investor meetings and leaves
          a lasting impression. A great deck does not replace the PPM; it
          complements it by making your case concise, visual, and memorable.
        </p>

        <h2 className={h2Class}>Deck vs. PPM: How they work together</h2>
        <p>
          Think of the deck as the movie trailer and the PPM as the full film.
          The deck gets <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">investors</Link> excited enough to read the PPM and take the
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
          different outcomes, as illustrated in our <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">cap tables and equity guide</Link>. Investors want to understand the alignment of
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

        <h3 className={h3Class}>Layout and typography</h3>
        <p>
          Consistency in layout builds credibility before the investor reads a
          single word. Choose a single sans-serif typeface &mdash; Helvetica Neue,
          Inter, or similar &mdash; and use it across every slide. Titles should
          be 28-36pt, body text 16-20pt, and footnotes 10-12pt. Maintain generous
          margins (at least 0.75 inches on every side) so the content breathes.
          Align all elements to a grid: text blocks, charts, and images should
          snap to the same invisible columns. Misaligned elements, even by a few
          pixels, create a subliminal impression of carelessness.
        </p>
        <p>
          Slide backgrounds should be white or very light gray. Dark backgrounds
          can look dramatic but they print poorly and distract from data.
          Reserve color for accent elements &mdash; section headers, chart bars,
          key numbers &mdash; rather than background fills. If you use icons, choose
          a single icon set (such as Feather or Phosphor) and apply them sparingly.
          Icons should clarify, not decorate.
        </p>

        <h3 className={h3Class}>Using data visualizations effectively</h3>
        <p>
          Charts and graphs are the most persuasive elements in a fundraising
          deck, but only when used correctly. A bar chart showing
          search fund IRR data from the Stanford study is more convincing than
          a bullet point that says &ldquo;strong historical returns.&rdquo;
          A simple pie chart showing your planned allocation of search capital
          (salary, travel, databases, legal) is clearer than a table of numbers.
          Limit each slide to one chart. Label axes clearly, include a source
          line, and make the takeaway obvious with a bold annotation.
          Avoid 3D charts, dual-axis charts, and any visualization that
          requires more than five seconds to interpret.
        </p>

        <h2 className={h2Class}>What investors look for in a deck</h2>
        <p>
          Experienced search fund investors have seen hundreds of decks. Within
          the first three slides they are forming judgments about your
          candidacy. Understanding what drives those judgments helps you
          emphasize the right signals and avoid wasting time on elements that
          do not move the needle.
        </p>

        <h3 className={h3Class}>Credibility signals</h3>
        <p>
          Investors evaluate credibility through a combination of hard
          credentials and demonstrated preparation. An MBA from a top business
          school is a strong signal, but it is not required &mdash; what matters
          more is evidence that you can operate a business. Relevant experience
          might include P&amp;L ownership, general management, consulting
          engagements with SMEs, or M&amp;A transaction experience. Quantify
          every accomplishment: &ldquo;managed a team of 25 and grew revenue
          from &euro;3M to &euro;8M over three years&rdquo; is far more
          compelling than &ldquo;extensive leadership experience.&rdquo;
          Include recognizable employer logos and educational institution
          crests &mdash; visual pattern recognition is powerful and fast.
        </p>

        <h3 className={h3Class}>Clarity of market thesis</h3>
        <p>
          A strong thesis is specific, defensible, and rooted in personal
          insight. &ldquo;I will acquire a B2B industrial services company in
          Germany because I spent six years in the sector and speak fluent
          German&rdquo; is a thesis. &ldquo;I am looking for a good business
          in Europe&rdquo; is not. Investors want to see that you have thought
          deeply about why your chosen market, sector, or geography offers
          attractive acquisition opportunities. Show awareness of
          competitive dynamics &mdash; how many other searchers are targeting
          the same space, and what gives you an edge in sourcing or
          operating.
        </p>

        <h3 className={h3Class}>Realistic timeline and expectations</h3>
        <p>
          Overpromising on timeline is a red flag. Most traditional searches
          take 18 to 24 months from fundraising close to acquisition close.
          Presenting a timeline of 12 months signals either naivety or
          dishonesty. Show a realistic Gantt chart with milestones and
          contingency periods. Acknowledge that the search may take longer
          than planned and explain how you will manage capital if it does.
          Investors appreciate searchers who demonstrate maturity about
          the inherent uncertainty of the process.
        </p>

        <h3 className={h3Class}>Understanding of the search fund model</h3>
        <p>
          Investors expect you to understand the canonical search fund
          structure inside and out. You should be able to explain the
          step-up ratio, typical equity splits, and investor rights without
          hesitation. Reference the Stanford and IESE search fund studies
          and know the key data points: median acquisition size, typical
          search duration, historical return multiples, and success rates.
          If you are deviating from the traditional model &mdash; for
          example, running a self-funded search or targeting a non-standard
          geography &mdash; explain why and how it affects investor economics.
        </p>

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
          <li><strong>No differentiation from other searchers:</strong> Investors hear dozens of pitches each year. If your deck could belong to any searcher &mdash; swap out the name and photo and nothing changes &mdash; you have not made a compelling case. Emphasize what is unique about your background, your thesis, or your approach to sourcing and operations. A differentiated story is the single strongest tool for standing out in a crowded field.</li>
          <li><strong>Vague sector or geography focus:</strong> Saying you will search &ldquo;broadly across Europe&rdquo; or &ldquo;in any industry&rdquo; undermines your credibility. Investors know that effective searching requires focus. A broad mandate suggests you have not done the upfront work of understanding where the best opportunities lie. Even if you plan to remain somewhat flexible, lead with a primary thesis and explain why you may expand beyond it under certain conditions.</li>
          <li><strong>Inconsistent numbers:</strong> If your deck says you are raising &euro;500K but your PPM lists &euro;450K, investors will question your attention to detail. Before sending, cross-check every figure in the deck against the PPM and your financial model. Have a detail-oriented friend or advisor review both documents side by side.</li>
        </ul>

        <h2 className={h2Class}>The pitch meeting</h2>
        <p>
          The deck is only as effective as the person presenting it. An
          outstanding deck paired with a nervous, unprepared presenter will
          fail. Conversely, a confident and articulate presenter can overcome
          a mediocre deck. Preparation for the pitch meeting deserves as
          much effort as preparing the deck itself.
        </p>

        <h3 className={h3Class}>How to present</h3>
        <p>
          Rehearse the presentation until you can deliver it conversationally
          without reading from slides. Time yourself: the walk-through
          portion should take 12 to 15 minutes, leaving the majority of a
          45-minute meeting for discussion. Open with a brief personal
          introduction &mdash; your name, your background in two sentences,
          and why you are excited about this opportunity. Then move into
          the deck. On each slide, state the key message, provide one or
          two supporting points, and pause briefly to check for questions
          before moving on. Do not read bullet points aloud; the investor
          can read. Instead, add context and color that is not on the slide.
          The best presenters tell stories: a specific deal you evaluated,
          a lesson from a mentor, a moment in your career that crystallized
          your decision to pursue ETA.
        </p>

        <h3 className={h3Class}>Handling Q&amp;A</h3>
        <p>
          Investor questions reveal what matters most to them, so treat Q&amp;A
          as the most valuable part of the meeting. Listen carefully, repeat
          the question back to confirm understanding, and answer concisely.
          If you do not know the answer, say so honestly and commit to
          following up. Common questions include: How will you differentiate
          your sourcing approach from other searchers? What happens if the
          search takes longer than 24 months? How do you think about
          leverage at acquisition? What is your plan if you cannot find a
          deal? Prepare thoughtful, specific answers to each of these. The
          worst thing you can do is give a vague or evasive response &mdash;
          it signals that you have not thought deeply about the risks and
          challenges of the model.
        </p>

        <h3 className={h3Class}>Follow-up protocol</h3>
        <p>
          Within 24 hours of every meeting, send a thank-you email that
          references a specific topic from the conversation. If the
          investor asked a question you could not answer on the spot,
          include the answer in your follow-up. Attach the PPM if they
          have not already received it. If the investor expressed interest,
          propose a concrete next step: a second meeting, a call with your
          references, or a timeline for their decision. If they declined,
          thank them graciously and ask if they would be open to staying in
          touch for future opportunities. Building a reputation as
          professional and courteous, even in rejection, pays dividends
          over a long career in the search fund community.
        </p>

        <h3 className={h3Class}>Timeline to close the raise</h3>
        <p>
          Most search fund raises take three to six months from the first
          investor meeting to the final close. Plan your fundraising
          calendar accordingly. Start by identifying 40 to 60 target
          investors and prioritize them into tiers based on likelihood
          and check size. Schedule meetings in waves: begin with investors
          you consider most likely to commit, as early commitments create
          momentum. Track every interaction in a simple CRM or
          spreadsheet: date of outreach, meeting date, follow-up dates,
          status, and notes. Set a soft deadline for the raise and
          communicate it to investors &mdash; scarcity and urgency drive
          decisions. Once you have commitments for 60 to 70 percent of
          your target, the remaining capital typically comes together
          quickly as later investors gain confidence from the social proof
          of earlier backers.
        </p>
      </div>
    </article>
  );
}
