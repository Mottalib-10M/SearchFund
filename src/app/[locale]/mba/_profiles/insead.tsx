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

export default function INSEADProfile() {
  return (
    <article>
      <h1 className={profileH1}>INSEAD: ETA Across Two Continents</h1>
      <p className="mt-2 text-sm text-apple-gray-500">12 min read</p>

      {/* ── 1. Opening narrative ─────────────────────────────────── */}
      <div className={profileBody}>
        <p>
          When INSEAD launched its ETA &amp; Search Funds Hub, it did something
          no other top business school had done: it placed a tenured professor
          at the helm of a dedicated institutional program spanning two
          campuses on two continents. Fontainebleau sits at the heart of the
          European search fund ecosystem. Singapore opens the door to
          Southeast Asia, one of the fastest-growing regions for
          entrepreneurial acquisition. Together, they give INSEAD a geographic
          footprint that no single-campus MBA can replicate.
        </p>
        <p>
          The timing was deliberate. Search funds have expanded well beyond
          their North American origins, with the IESE 2024 International
          Search Fund Study documenting 320 funds outside the US and Canada.
          INSEAD recognized that its own alumni were already active in the
          space, and that a formal institutional commitment could accelerate
          what was already happening organically. The result is a program built
          around global reach, academic rigor, and the practical realities of
          acquiring a business in markets where the search fund model is still
          relatively new.
        </p>
        <p>
          For anyone considering{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            getting started in ETA
          </Link>{" "}
          with an international perspective, INSEAD presents a distinctive
          proposition: a world-class MBA that treats cross-border search not
          as an afterthought, but as the central thesis.
        </p>
      </div>

      {/* ── 2. Why INSEAD matters ────────────────────────────────── */}
      <h2 className={profileH2}>Why INSEAD matters for ETA</h2>
      <div className={profileBody}>
        <p>
          INSEAD&apos;s value in the ETA landscape derives from three
          structural advantages: its dual-campus model, its globally diverse
          cohort, and its 10-month program length.
        </p>
        <p>
          The dual-campus structure is not merely logistical. Students rotate
          between Fontainebleau and Singapore, building networks in both
          Europe and Asia during the program itself. For a prospective
          searcher, this means arriving at graduation with relationships on
          two continents rather than one. In a model where deal flow depends
          heavily on personal networks and local market knowledge, that
          geographic breadth has direct economic value.
        </p>
        <p>
          INSEAD&apos;s cohort is among the most internationally diverse of
          any MBA program. Students routinely represent 80 or more
          nationalities. This diversity creates natural pathways for
          cross-border search strategies, where a searcher might raise capital
          in one country, source deals in another, and draw on classmates&apos;
          knowledge to navigate local regulatory environments.
        </p>
        <p>
          The 10-month format also matters. Unlike two-year US programs,
          INSEAD compresses the MBA experience, which means lower total
          tuition, less opportunity cost, and a faster return to the market.
          For someone with a clear ETA thesis, the shorter timeline can be
          an advantage. You build the skills and the network, then move
          directly into your search. For a broader perspective on how program
          length affects the{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            ROI of an MBA for search fund careers
          </Link>
          , this is a meaningful variable.
        </p>
      </div>

      {/* ── 3. The ETA & Search Funds Hub ────────────────────────── */}
      <h2 className={profileH2}>The ETA &amp; Search Funds Hub</h2>
      <div className={profileBody}>
        <p>
          The ETA &amp; Search Funds Hub sits within the INSEAD Centre for
          Entrepreneurship and serves as the institutional anchor for all
          search fund activity at the school. Unlike student-led clubs that
          depend on annual leadership turnover, the Hub is a permanent
          institutional structure with faculty governance, dedicated
          programming, and long-term strategic goals.
        </p>
        <p>
          The Hub coordinates several functions: curriculum development,
          community building across both campuses, mentorship connecting
          current students with alumni operators, and event programming
          including the new biannual INSEAD ETA Conference. It also serves as
          the public-facing entry point for prospective students, investors,
          and alumni who want to engage with INSEAD&apos;s ETA ecosystem.
        </p>
        <p>
          Placing a tenured professor as Academic Director signals that INSEAD
          views ETA as a permanent part of its strategic identity, not a
          passing trend. This institutional commitment matters for students
          who want confidence that the resources and networks they build
          during the MBA will be maintained and expanded after they graduate.
        </p>
      </div>

      {/* ── 4. Faculty ───────────────────────────────────────────── */}
      <h2 className={profileH2}>Faculty</h2>
      <div className={profileBody}>
        <h3 className={profileH3}>Ivana Naumovska</h3>
        <p>
          Naumovska is Associate Professor of Entrepreneurship &amp; Family
          Enterprise at INSEAD and holds a tenured position, a distinction
          that carries weight in the context of ETA programs. Most ETA courses
          at business schools are taught by adjunct lecturers or practitioners
          on short-term appointments. Having a tenured faculty member as
          Academic Director of the ETA Hub gives the program both stability
          and academic credibility.
        </p>
        <p>
          Her research spans entrepreneurship, organizational behavior, and
          decision-making under uncertainty, topics that are directly relevant
          to the search fund experience. In 2024, she was named to the
          Poets&amp;Quants Best 40-Under-40 MBA Professors list, reflecting
          recognition from the broader business education community.
        </p>
        <p>
          Naumovska teaches Realising Entrepreneurial Potential, the P4
          elective that includes a live acquisition project. She also
          oversees the strategic direction of the Hub, including its event
          programming, mentorship structures, and curriculum development. For
          students evaluating how{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            MBA programs prepare students for ETA
          </Link>
          , INSEAD&apos;s faculty model represents a different approach: fewer
          instructors, but with deeper institutional authority.
        </p>
      </div>

      {/* ── 5. Course offerings ──────────────────────────────────── */}
      <h2 className={profileH2}>Course offerings</h2>
      <div className={profileBody}>
        <p>
          INSEAD&apos;s current ETA curriculum centers on a single dedicated
          elective, with the Hub providing supplementary programming outside
          the formal classroom.
        </p>
        <div className="overflow-x-auto">
          <table className={profileTable}>
            <thead>
              <tr>
                <th className={profileTh}>Period</th>
                <th className={profileTh}>Course name</th>
                <th className={profileTh}>Instructor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={profileTd}>P4 Elective</td>
                <td className={profileTd}>Realising Entrepreneurial Potential</td>
                <td className={profileTd}>Ivana Naumovska</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Realising Entrepreneurial Potential is offered in Period 4, the
          final period of the INSEAD MBA. The course includes a live
          acquisition project, meaning students work through the mechanics of
          evaluating, structuring, and negotiating an actual deal, not a
          case study simulation. This hands-on component distinguishes the
          course from lecture-based ETA electives at other schools.
        </p>
        <p>
          The single-course model reflects INSEAD&apos;s compressed 10-month
          timeline. Where two-year programs can offer a sequence of
          introductory, intermediate, and advanced ETA courses, INSEAD
          concentrates the experience into one intensive elective supported by
          Hub-organized workshops, speaker series, and mentorship pairings.
          The trade-off is fewer classroom hours in exchange for a more
          concentrated, project-driven experience.
        </p>
        <p>
          Students who want a broader academic foundation before launching a
          search may find that the supplementary programming through the Hub
          fills some of that gap. INSEAD&apos;s broader entrepreneurship
          electives in negotiation, private equity, and corporate finance also
          provide relevant preparation.
        </p>
      </div>

      {/* ── 6. The INSEAD ETA Conference ─────────────────────────── */}
      <h2 className={profileH2}>The INSEAD ETA Conference</h2>
      <div className={profileBody}>
        <p>
          In November 2025, INSEAD held its first ETA Conference in Singapore
          with over 250 attendees. The event brought together searchers,
          investors, operators, and faculty from across Asia-Pacific and
          beyond, establishing INSEAD as a convening force in the global ETA
          community.
        </p>
        <p>
          Starting in 2026, the conference runs on a biannual schedule:
          Fontainebleau in May and Singapore in November. This rhythm mirrors
          INSEAD&apos;s dual-campus identity and creates two annual touchpoints
          for the school&apos;s global ETA network. The European edition
          complements the existing conference calendar that includes events
          organized by{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>{" "}
          and{" "}
          <Link
            href="/mba/london-business-school"
            className="text-apple-accent hover:underline"
          >
            London Business School
          </Link>
          , while the Singapore edition fills a geographic gap. There has been
          no comparable ETA conference anchored in Asia until now.
        </p>
        <p>
          For the broader ETA ecosystem, the INSEAD conference represents an
          important expansion. Search funds in Southeast Asia, India, and
          Japan are growing, but the infrastructure of conferences,
          communities, and institutional support has lagged behind North
          America and Europe. An INSEAD-branded event in Singapore helps close
          that gap.
        </p>
      </div>

      {/* ── 7. Alumni network ────────────────────────────────────── */}
      <h2 className={profileH2}>Alumni network and ETA activity</h2>
      <div className={profileBody}>
        <p>
          INSEAD states on its ETA Hub page that over 100 ETA vehicles have
          been launched by alumni. This figure deserves context. It is an
          institutional marketing claim that encompasses search funds,
          self-funded searches, and other acquisition-driven entrepreneurial
          vehicles across the global INSEAD alumni network.
        </p>
        <p>
          We were unable to independently verify the count or identify the
          specific vehicles included. Unlike{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>
          , which publishes a detailed study with named funds and tracked
          outcomes, or{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>
          , which maintains a research center with a public dataset, INSEAD
          has not yet released comparable data. This is not unusual for a
          program that recently formalized its ETA commitment, but it means
          prospective students should treat the number as directional rather
          than definitive.
        </p>
        <p>
          What is clear is that INSEAD&apos;s alumni base of over 65,000
          professionals across 175 countries provides an unusually broad
          network for sourcing deals, finding co-investors, and building
          management teams in unfamiliar markets. For searchers who plan to
          operate internationally, this network breadth may matter more than a
          precise alumni searcher count. For more on the European landscape
          specifically, see our overview of{" "}
          <Link
            href="/learn/eta-europe"
            className="text-apple-accent hover:underline"
          >
            ETA in Europe
          </Link>
          .
        </p>
      </div>

      {/* ── 8. Tuition and financial considerations ──────────────── */}
      <h2 className={profileH2}>Tuition and financial considerations</h2>
      <div className={profileBody}>
        <p>
          INSEAD MBA tuition is approximately EUR 109,860 total for the
          10-month program (August 2026 intake). This is a single lump-sum
          cost, not an annual figure, which makes direct comparison with
          two-year US programs important.
        </p>
        <div className="overflow-x-auto">
          <table className={profileTable}>
            <thead>
              <tr>
                <th className={profileTh}>School</th>
                <th className={profileTh}>Tuition</th>
                <th className={profileTh}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={profileTd}>INSEAD</td>
                <td className={profileTd}>EUR 109,860 total</td>
                <td className={profileTd}>10 months</td>
              </tr>
              <tr>
                <td className={profileTd}>IESE</td>
                <td className={profileTd}>EUR 114,000 total</td>
                <td className={profileTd}>19 months</td>
              </tr>
              <tr>
                <td className={profileTd}>Stanford GSB</td>
                <td className={profileTd}>$85,755/year</td>
                <td className={profileTd}>2 years</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          In absolute terms, INSEAD&apos;s tuition is comparable to one year
          at a top US program but covers the entire MBA. When opportunity cost
          is factored in, the shorter duration widens the gap further. A
          10-month program means roughly 14 fewer months of foregone salary
          compared to a two-year alternative. For a prospective searcher with
          a clear thesis, this can shift the{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            MBA ROI calculation
          </Link>{" "}
          meaningfully.
        </p>
        <p>
          INSEAD offers scholarships and financial aid, though the school does
          not currently offer a search-fund-specific fellowship comparable to
          those at Harvard ($130,000) or Wharton ($50,000). Students
          considering the financial dimension should evaluate total cost of
          attendance, including living expenses in Fontainebleau and Singapore,
          alongside the post-MBA search timeline.
        </p>
      </div>

      {/* ── 9. How INSEAD compares ───────────────────────────────── */}
      <h2 className={profileH2}>How INSEAD compares</h2>
      <div className={profileBody}>
        <p>
          INSEAD occupies a unique position in the ETA landscape. It is the
          only top-tier MBA program offering dedicated ETA resources across
          two continents, but it is newer to the space than the established
          leaders. Understanding where it fits requires comparing it against
          the programs most prospective applicants will also consider.
        </p>

        <h3 className={profileH3}>INSEAD vs. IESE</h3>
        <p>
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>{" "}
          is the established leader in European and international ETA. Its
          International Search Fund Center, founded in 2011, tracks 320 funds,
          and over 60 alumni have raised search funds across 20 countries.
          IESE offers a dedicated MBA elective and an executive education
          bootcamp, and it has published the definitive international search
          fund dataset.
        </p>
        <p>
          INSEAD&apos;s advantages over IESE are geographic reach (Asia in
          addition to Europe), program speed (10 months vs. 19), and the
          institutional weight of a tenured Academic Director. IESE&apos;s
          advantages are a longer track record, more published research, and
          a deeper network of verified alumni searchers. Candidates focused on{" "}
          <Link
            href="/learn/european-search-fund-research"
            className="text-apple-accent hover:underline"
          >
            European search fund research
          </Link>{" "}
          will find IESE&apos;s data output more developed.
        </p>

        <h3 className={profileH3}>INSEAD vs. London Business School</h3>
        <p>
          <Link
            href="/mba/london-business-school"
            className="text-apple-accent hover:underline"
          >
            London Business School
          </Link>{" "}
          has deeper historical roots in ETA. Simon Webster raised the first
          non-US search fund at LBS in 1992 and now teaches the ETA elective
          there. LBS also benefits from its London location, which provides
          proximity to the UK private equity and search fund investor
          community.
        </p>
        <p>
          INSEAD&apos;s advantages over LBS are its dual-campus model, its
          formal ETA Hub with tenured leadership, and its conference presence
          in Asia. LBS&apos;s advantages are its UK network, its published
          case studies, and its longer-established co-organized conference
          with IESE. For candidates choosing between the two, geography and
          target market are likely the deciding factors.
        </p>
      </div>

      {/* ── 10. Who should choose INSEAD ─────────────────────────── */}
      <h2 className={profileH2}>Who should choose INSEAD</h2>
      <div className={profileBody}>
        <p>
          INSEAD is the strongest fit for candidates who already have a clear
          international ETA thesis and want the global network to execute it.
          The ideal applicant has three to seven years of professional
          experience, comfort with cross-cultural environments, and an
          interest in searching for acquisition targets in Europe, Asia, or
          across borders.
        </p>
        <p>
          The 10-month format favors candidates who are ready to move quickly.
          If you need a longer runway to explore whether ETA is the right
          path, a two-year program with multiple ETA courses may be a better
          fit. But if you arrive with conviction and want to minimize time and
          cost before launching your search, INSEAD&apos;s compressed timeline
          is a genuine advantage.
        </p>
        <p>
          Candidates should also consider their target geography carefully.
          INSEAD&apos;s network is deepest in France, Southeast Asia, and the
          Middle East. If your search thesis centers on the US or Canada,
          programs like Stanford GSB, Harvard, or Chicago Booth will provide
          stronger local networks. If your thesis is specifically European,
          IESE remains the most proven choice. But if your ambition is
          genuinely cross-border, spanning Europe and Asia or targeting
          emerging markets where search funds are just gaining traction,
          INSEAD offers something no other program does.
        </p>
        <p>
          For a comprehensive comparison of all programs, see our{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            ranking of the best MBA programs for search funds
          </Link>
          . And for candidates exploring whether an MBA is the right
          investment for an ETA career at all, our{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            guide to finding investors
          </Link>{" "}
          provides context on how investor expectations intersect with
          educational background.
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
              href="/learn/european-search-fund-research"
              className="text-apple-accent hover:underline"
            >
              European search fund research: the IESE dataset
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
              href="/learn/eta-europe"
              className="text-apple-accent hover:underline"
            >
              ETA in Europe: landscape and opportunities
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
              href="/mba/london-business-school"
              className="text-apple-accent hover:underline"
            >
              London Business School profile
            </Link>
          </li>
          <li>
            <Link
              href="/mba/stanford-gsb"
              className="text-apple-accent hover:underline"
            >
              Stanford GSB profile
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
