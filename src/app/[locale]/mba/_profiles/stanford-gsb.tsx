import Link from "next/link";
import {
  profileH1,
  profileH2,
  profileH3,
  profileBody,
  profileUl,
  profileQuote,
  profileTable,
  profileTh,
  profileTd,
} from "./shared-styles";

export default function StanfordGSBProfile() {
  return (
    <article>
      <h1 className={profileH1}>Stanford GSB: The Birthplace of Search Funds</h1>
      <p className="mt-2 text-sm text-apple-gray-500">15 min read</p>

      {/* ── 1. Opening narrative ─────────────────────────────────── */}
      <div className={profileBody}>
        <p>
          In 1984, a Stanford GSB professor named H. Irving Grousbeck had an
          idea. Instead of competing for scarce venture capital or waiting years
          for a promotion to the C-suite, what if a newly minted MBA could raise
          a small fund, search full-time for a privately held company, acquire
          it, and run it as CEO? That idea became the search fund model, and it
          has since reshaped how thousands of entrepreneurs think about business
          ownership.
        </p>
        <p>
          Jim Southern, one of Grousbeck&apos;s students, raised what is widely
          recognized as the first-ever search fund around 1983. He acquired
          Uniform Printing and generated a 24x return for his investors. Four
          decades later, the model Grousbeck and Southern pioneered at Stanford
          has produced 681 tracked funds across the US and Canada, an aggregate
          pre-tax IRR of 35.1%, and a 4.5x return on invested capital.
        </p>
        <blockquote className={profileQuote}>
          &ldquo;An influx of capital is bound to continue and will probably
          accelerate. Institutional capital is either assembling or
          appearing.&rdquo;
          <br />
          <span className="text-sm not-italic">
            H. Irving Grousbeck, Off Piste Investing Interview
          </span>
        </blockquote>
        <p>
          Stanford GSB did not merely invent search funds. It continues to
          define the field through its biennial research study, a deep roster of
          faculty who have lived the model, and a curriculum that takes students
          from theory to live deal execution. For anyone serious about{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            getting started in ETA
          </Link>
          , Stanford remains the reference point against which every other
          program is measured.
        </p>
      </div>

      {/* ── 2. Why Stanford GSB matters for ETA ──────────────────── */}
      <h2 className={profileH2}>Why Stanford GSB matters for ETA</h2>
      <div className={profileBody}>
        <p>
          Stanford&apos;s influence on entrepreneurship through acquisition
          operates through two institutional pillars: the Center for
          Entrepreneurial Studies (CES) and the Stanford Search Fund Study.
        </p>
        <p>
          The CES is the organizational home of all search fund activity at
          Stanford. It coordinates course offerings, funds research, hosts
          events, and maintains the dataset that underpins the biennial study.
          The center&apos;s role is not ceremonial. It provides the
          infrastructure that allows faculty to teach from real data, students to
          interact with active searchers and investors, and alumni to stay
          connected to the evolving model.
        </p>
        <p>
          The{" "}
          <Link
            href="/learn/stanford-2024-study"
            className="text-apple-accent hover:underline"
          >
            Stanford 2024 Search Fund Study
          </Link>{" "}
          is the most cited dataset in the ETA ecosystem. It tracks 681
          first-time search funds in the US and Canada, covering everything from
          fundraising timelines and acquisition multiples to CEO compensation and
          investor returns. No other institution has produced anything
          comparable in scope or longevity. When investors, searchers, or
          journalists cite aggregate search fund returns, the numbers almost
          always trace back to Stanford.
        </p>
        <p>
          This combination of a dedicated center and a longitudinal research
          program gives Stanford a structural advantage. Faculty teach from
          proprietary data. Students learn from instructors who have personally
          completed search fund acquisitions. And the broader ETA community
          relies on Stanford&apos;s output to benchmark performance, calibrate
          expectations, and attract institutional capital.
        </p>
      </div>

      {/* ── 3. Faculty section ───────────────────────────────────── */}
      <h2 className={profileH2}>Faculty: six practitioners who shaped the field</h2>
      <div className={profileBody}>
        <p>
          Stanford&apos;s ETA faculty roster is unique in that every member has
          direct operating or investing experience in search funds. This is not
          a program taught by academics studying the model from the outside. It
          is taught by the people who built it.
        </p>

        <h3 className={profileH3}>H. Irving Grousbeck</h3>
        <p>
          Grousbeck co-created the search fund model in 1984 and has been
          teaching at Stanford GSB for over four decades. As the MBA Class of
          1980 Adjunct Professor, he brings a perspective that spans the
          entire history of ETA, from the first fund through the
          institutionalization of the asset class. His involvement continues
          to lend credibility to the model and attract both students and
          investors to the Stanford ecosystem.
        </p>

        <h3 className={profileH3}>Peter B. Kelly</h3>
        <p>
          Kelly is a Lecturer in Management and co-author of the Stanford
          2024 Search Fund Study. He teaches two of the three dedicated ETA
          courses and serves as a bridge between the research side of the
          program and its practical application. His work on the study gives
          students direct access to the most current data on search fund
          performance.
        </p>

        <h3 className={profileH3}>Jim Ellis</h3>
        <p>
          Ellis (MBA &apos;93) co-acquired Road Rescue alongside Kevin Taweel.
          That company eventually became Asurion, generating a 5,275x multiple
          on invested capital, the highest return in search fund history. Ellis
          now teaches as a Lecturer in Management, bringing first-hand
          acquisition and operating experience to the classroom.
        </p>

        <h3 className={profileH3}>Gerald Risk</h3>
        <p>
          Risk has made over 100 search fund investments, giving him one of the
          deepest portfolios of any individual investor in the asset class. As a
          Lecturer, he teaches alongside Ellis in the Entrepreneurial
          Acquisition course, offering the investor perspective that complements
          the operator viewpoint. Students who want to understand how{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            finding investors
          </Link>{" "}
          works in practice benefit directly from his experience.
        </p>

        <h3 className={profileH3}>Graham Weaver</h3>
        <p>
          Weaver is the founder and CEO of Alpine Investors, a private equity
          firm with approximately $17 billion in assets under management.
          Alpine&apos;s model, which centers on acquiring and growing
          companies through talent-driven strategies, evolved from the
          search fund tradition. Weaver teaches as a Lecturer and co-leads the
          Managing Growing Enterprises course, focused on what happens after
          acquisition.
        </p>

        <h3 className={profileH3}>Sara Heston</h3>
        <p>
          Heston serves as Associate Director of the CES and is co-author of
          the Stanford 2024 Search Fund Study alongside Peter Kelly. She manages
          much of the research infrastructure behind the study and provides
          continuity across study cycles. Her role ensures that the data
          underlying Stanford&apos;s ETA program remains rigorous and
          up-to-date.
        </p>
      </div>

      {/* ── 4. Course offerings ──────────────────────────────────── */}
      <h2 className={profileH2}>Course offerings</h2>
      <div className={profileBody}>
        <p>
          Stanford offers three dedicated courses that cover the full lifecycle
          of a search fund, from initial concept through post-acquisition
          management. Each course is taught by faculty with direct ETA
          experience.
        </p>
        <div className="overflow-x-auto">
          <table className={profileTable}>
            <thead>
              <tr>
                <th className={profileTh}>Code</th>
                <th className={profileTh}>Course name</th>
                <th className={profileTh}>Instructor(s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={profileTd}>STRAMGT 543</td>
                <td className={profileTd}>Entrepreneurial Acquisition</td>
                <td className={profileTd}>Jim Ellis, Gerald Risk</td>
              </tr>
              <tr>
                <td className={profileTd}>STRAMGT 549</td>
                <td className={profileTd}>Search Fund Garage</td>
                <td className={profileTd}>Peter Kelly</td>
              </tr>
              <tr>
                <td className={profileTd}>STRAMGT 355</td>
                <td className={profileTd}>Managing Growing Enterprises</td>
                <td className={profileTd}>Peter Kelly, Graham Weaver</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          STRAMGT 543 covers the fundamentals of search fund economics,
          fundraising, deal sourcing, valuation, and due diligence. It is the
          entry point for most students exploring ETA.
        </p>
        <p>
          STRAMGT 549, the Search Fund Garage, is a hands-on course where
          students work through the early stages of building an actual search
          fund. This is not a simulation. Students develop real investor
          materials, refine their search theses, and prepare for launch.
        </p>
        <p>
          STRAMGT 355 addresses the operational challenges that emerge after
          closing an acquisition. Topics include building management teams,
          driving growth, and navigating the transition from searcher to CEO.
          For a broader look at how{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            MBA programs prepare students for ETA
          </Link>
          , this course illustrates Stanford&apos;s commitment to covering the
          full lifecycle.
        </p>
      </div>

      {/* ── 5. The Stanford Search Fund Study ────────────────────── */}
      <h2 className={profileH2}>The Stanford Search Fund Study</h2>
      <div className={profileBody}>
        <p>
          Published biennially by the CES, the Stanford Search Fund Study is the
          definitive dataset on traditional search fund performance in the US
          and Canada. The 2024 edition, co-authored by Peter Kelly and Sara
          Heston, tracks 681 first-time funds across four decades. For a
          detailed analysis of the findings, see our breakdown of the{" "}
          <Link
            href="/learn/stanford-2024-study"
            className="text-apple-accent hover:underline"
          >
            Stanford 2024 Search Fund Study
          </Link>
          .
        </p>
        <p>Key metrics from the 2024 study include:</p>
        <ul className={profileUl}>
          <li>681 first-time search funds tracked since 1984</li>
          <li>35.1% aggregate pre-tax IRR</li>
          <li>4.5x aggregate return on invested capital (ROIC)</li>
          <li>94 core search funds raised in 2023, a record year</li>
          <li>85% of searchers hold an MBA</li>
          <li>$14.4 million median purchase price for acquisitions</li>
        </ul>
        <p>
          These numbers matter because they establish the performance baseline
          for the entire asset class. When investors evaluate a prospective
          searcher or when an MBA student weighs the financial case for ETA, the
          Stanford data is where the conversation begins. For more on what these
          numbers mean in practice, see our analysis of{" "}
          <Link
            href="/learn/search-fund-returns"
            className="text-apple-accent hover:underline"
          >
            search fund returns
          </Link>
          .
        </p>
        <p>
          The study also reveals trends. The record 94 core search funds
          raised in 2023 confirms the accelerating growth Grousbeck has
          described. As institutional capital enters the space and more MBA
          programs adopt ETA curricula, the funnel of new searchers continues to
          expand.
        </p>
      </div>

      {/* ── 6. Alumni spotlight ──────────────────────────────────── */}
      <h2 className={profileH2}>Alumni spotlight</h2>
      <div className={profileBody}>
        <h3 className={profileH3}>
          Jim Southern: the first search fund (~1983)
        </h3>
        <p>
          Southern worked with Grousbeck to develop and test the search fund
          concept while a student at Stanford GSB. He raised what is recognized
          as the first-ever search fund, acquired Uniform Printing, and
          delivered a 24x return to investors. That result validated the model
          and opened the path for every searcher who followed.
        </p>

        <h3 className={profileH3}>
          Kevin Taweel and Jim Ellis: Road Rescue to Asurion (5,275x MOIC)
        </h3>
        <p>
          Kevin Taweel (MBA &apos;92) and Jim Ellis (MBA &apos;93)
          co-acquired Road Rescue, a roadside assistance company. Through a
          series of strategic pivots and acquisitions, the company transformed
          into Asurion, which became one of the largest device protection
          providers in the world. The investment generated a 5,275x multiple on
          invested capital, the highest return in search fund history. While
          this outcome is exceptional and not representative of typical search
          fund performance, it demonstrates the scale of value creation that the
          model can produce.
        </p>

        <h3 className={profileH3}>
          Diana Ding and Sydney Lehman: Zone 2 Partners
        </h3>
        <p>
          Ding and Lehman (both MBA &apos;22) launched Zone 2 Partners, a
          search fund focused on women&apos;s health. Their fund represents the
          evolving profile of Stanford searchers and the broadening of ETA into
          sector-specific strategies. It also reflects the growing participation
          of women in an asset class that has historically been
          male-dominated.
        </p>
      </div>

      {/* ── 7. Student life and community ────────────────────────── */}
      <h2 className={profileH2}>Student life and community</h2>
      <div className={profileBody}>
        <p>
          Stanford&apos;s small class size (approximately 420 students per
          cohort) creates a tight-knit environment where ETA-interested students
          can find each other quickly. The CES serves as the institutional hub,
          organizing events that bring active searchers, investors, and
          alumni operators to campus throughout the year.
        </p>
        <p>
          Beyond formal coursework, students engage through study groups,
          investor dinners, and informal mentoring relationships with alumni who
          have completed the search fund journey. The proximity to Silicon Valley
          also means access to a broader entrepreneurial ecosystem, including
          venture capital, private equity, and technology operators who
          understand the mindset of building a company through acquisition.
        </p>
        <p>
          The Stanford ETA community is not confined to campus. Alumni maintain
          active networks that help new searchers with introductions to
          investors, diligence on prospective acquisitions, and operational
          advice during the critical first years as CEO. This network effect
          compounds over time, as each successful searcher adds credibility and
          connections to the pool.
        </p>
      </div>

      {/* ── 8. Tuition and financial considerations ──────────────── */}
      <h2 className={profileH2}>Tuition and financial considerations</h2>
      <div className={profileBody}>
        <p>
          Stanford GSB tuition is $85,755 per year for the 2025-2026 academic
          year. Including living expenses, health insurance, books, and personal
          costs, the total two-year investment typically exceeds $200,000.
        </p>
        <p>
          The financial calculus for a prospective searcher is different from
          that of a student heading into consulting or investment banking. Search
          fund economics involve a period of unpaid or modestly compensated
          search (typically 18 to 24 months after graduation), followed by the
          acquisition and the beginning of CEO compensation. The payoff comes
          through equity upside, which the Stanford data shows can be
          substantial, but is not guaranteed.
        </p>
        <p>
          Stanford GSB offers need-based fellowships that can significantly
          reduce the net cost. For a detailed framework on evaluating whether an
          MBA makes financial sense in the context of a search fund career, see
          our analysis of{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            MBA ROI for search fund entrepreneurs
          </Link>
          .
        </p>
      </div>

      {/* ── 9. How Stanford compares ─────────────────────────────── */}
      <h2 className={profileH2}>How Stanford compares</h2>
      <div className={profileBody}>
        <p>
          Stanford GSB is one of three Tier 1 programs for ETA, alongside{" "}
          <Link
            href="/mba/harvard-business-school"
            className="text-apple-accent hover:underline"
          >
            Harvard Business School
          </Link>{" "}
          and{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE Business School
          </Link>
          . Each excels in different dimensions.
        </p>
        <p>
          Stanford&apos;s distinctive strengths are the origin story (the search
          fund model was invented here), the biennial study (the most
          comprehensive dataset in ETA), and the faculty depth (six instructors
          with direct operating or investing experience). Harvard brings a
          larger case study library, a $130,000 Search Fund Fellowship, and the
          largest annual ETA conference. IESE leads in international ETA,
          tracking 320 funds outside North America through its International
          Search Fund Center.
        </p>
        <p>
          The right choice depends on geography, budget, and career goals. For a
          full comparison across all programs, see our{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            ranking of the best MBA programs for search funds
          </Link>
          .
        </p>
      </div>

      {/* ── 10. Who should apply ─────────────────────────────────── */}
      <h2 className={profileH2}>Who should apply</h2>
      <div className={profileBody}>
        <p>
          Stanford GSB is the strongest fit for candidates who want to immerse
          themselves in the intellectual and practical foundations of ETA. The
          ideal applicant is someone with three to seven years of professional
          experience, a genuine interest in small and medium enterprise
          management, and the conviction to pursue an acquisition-driven
          career path after graduation.
        </p>
        <p>
          Candidates should be comfortable with ambiguity. The search fund path
          involves a prolonged period of searching without a guaranteed outcome,
          followed by the challenge of leading a company where the new CEO must
          earn trust quickly. Stanford&apos;s program prepares students for this
          reality, but it does not eliminate the inherent uncertainty.
        </p>
        <p>
          Stanford is particularly well-suited for candidates who value data and
          research. Access to the CES dataset, the study authors, and the
          broader research community is a resource that no other program can
          replicate. If understanding the statistical reality of search fund
          performance matters to your decision-making process, this is the
          place to be.
        </p>
      </div>

      {/* ── 11. Related reading ──────────────────────────────────── */}
      <h2 className={profileH2}>Related reading</h2>
      <div className={profileBody}>
        <ul className={profileUl}>
          <li>
            <Link
              href="/learn/getting-started"
              className="text-apple-accent hover:underline"
            >
              Getting started with search funds
            </Link>
          </li>
          <li>
            <Link
              href="/learn/stanford-2024-study"
              className="text-apple-accent hover:underline"
            >
              Stanford 2024 Search Fund Study: key takeaways
            </Link>
          </li>
          <li>
            <Link
              href="/learn/search-fund-returns"
              className="text-apple-accent hover:underline"
            >
              Search fund returns: what the data shows
            </Link>
          </li>
          <li>
            <Link
              href="/learn/mba-and-eta"
              className="text-apple-accent hover:underline"
            >
              MBA and ETA: how business school prepares you
            </Link>
          </li>
          <li>
            <Link
              href="/learn/best-mba-for-search-fund"
              className="text-apple-accent hover:underline"
            >
              Best MBA programs for search fund careers
            </Link>
          </li>
          <li>
            <Link
              href="/learn/mba-roi-search-fund-career"
              className="text-apple-accent hover:underline"
            >
              MBA ROI for search fund entrepreneurs
            </Link>
          </li>
          <li>
            <Link
              href="/learn/finding-investors"
              className="text-apple-accent hover:underline"
            >
              Finding investors for your search fund
            </Link>
          </li>
          <li>
            <Link
              href="/mba/iese"
              className="text-apple-accent hover:underline"
            >
              IESE Business School profile
            </Link>
          </li>
          <li>
            <Link
              href="/mba/harvard-business-school"
              className="text-apple-accent hover:underline"
            >
              Harvard Business School profile
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
