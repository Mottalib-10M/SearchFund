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

export default function ChicagoBoothProfile() {
  return (
    <article>
      <h1 className={profileH1}>
        Chicago Booth: The Broadest ETA Infrastructure in Any MBA
      </h1>
      <p className="mt-2 text-sm text-apple-gray-500">14 min read</p>

      {/* ── 1. Opening narrative ─────────────────────────────────── */}
      <div className={profileBody}>
        <p>
          Most top business schools offer a course on entrepreneurship through
          acquisition. A handful have a student club or an annual panel. Chicago
          Booth has built something structurally different: a layered
          infrastructure that combines a dedicated ETA Fellows program, a
          co-hosted conference that draws over 1,000 attendees from 13
          countries, a senior advisory role embedded within the Polsky Center for
          Entrepreneurship and Innovation, and a course taught by two
          practitioners who have each lived the acquisition model firsthand.
        </p>
        <p>
          The result is the broadest institutional support system for ETA at any
          MBA program. Where other schools concentrate their resources in a
          single course or a single faculty champion, Booth has distributed its
          investment across multiple touchpoints that reinforce each other. A
          student can move from the ETA Fellows cohort to the classroom to the
          conference to the Polsky mentorship network without ever leaving
          Booth&apos;s ecosystem. For anyone serious about{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            getting started in ETA
          </Link>
          , that kind of depth matters.
        </p>
        <p>
          This profile covers the institutional architecture that makes
          Booth&apos;s program distinctive, the faculty who teach it, the
          conference that anchors the broader ETA community, and the practical
          considerations around cost and fit.
        </p>
      </div>

      {/* ── 2. Why Booth matters (Polsky Center) ───────────────── */}
      <h2 className={profileH2}>Why Booth matters for ETA</h2>
      <div className={profileBody}>
        <p>
          The Polsky Center for Entrepreneurship and Innovation is the
          institutional hub for all entrepreneurial activity at the University of
          Chicago, and ETA is one of its most developed verticals. Unlike
          programs where search fund activity is run informally by a student club
          or a single professor, Booth has formalized ETA within Polsky&apos;s
          structure. This means dedicated staff, a funded fellowship, a
          mentorship directory, and a conference operation that runs year-round.
        </p>
        <p>
          The Polsky Center provides physical space, event infrastructure, and
          connections to the broader University of Chicago ecosystem, including
          its law school, its economics faculty, and its hospital and research
          networks. For ETA students, this translates into access to legal
          clinics for deal structuring, exposure to rigorous analytical
          frameworks, and a community that treats small business acquisition as a
          legitimate and intellectually serious career path.
        </p>
        <p>
          Booth&apos;s approach to{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            integrating ETA into the MBA experience
          </Link>{" "}
          is notable for its breadth. The program does not rely on a single point
          of contact. Instead, it has built redundancy: if a student misses the
          Fellows program, the course is still available; if a student takes the
          course and wants more, the Discovery Cohort and conference provide
          additional depth; and the Polsky Center&apos;s mentorship network
          remains accessible to alumni long after graduation.
        </p>
      </div>

      {/* ── 3. The ETA Fellows program ─────────────────────────── */}
      <h2 className={profileH2}>The ETA Fellows program</h2>
      <div className={profileBody}>
        <p>
          In Autumn 2024, the Polsky Center launched the ETA Fellows program, a
          structured cohort that selects 6 to 8 students per year for an
          immersive experience in entrepreneurship through acquisition. The
          program was funded by a gift from A. Michael Muscolino (MBA &apos;99),
          and it represents one of the most tangible investments any business
          school has made in ETA infrastructure.
        </p>
        <p>
          The Fellows program goes beyond coursework. Selected students
          participate in a dedicated cohort that meets regularly, receives
          mentorship from active searchers and investors, and engages with the
          Polsky Center&apos;s broader network of entrepreneurs and advisors.
          The goal is to accelerate the transition from classroom learning to
          active search preparation, so that Fellows graduate with a clearer
          thesis, stronger investor relationships, and a more realistic
          understanding of the search timeline.
        </p>
        <p>
          What distinguishes the Fellows model from a standard club or elective
          is selectivity and commitment. The small cohort size ensures that each
          Fellow receives meaningful individual attention, and the Polsky
          Center&apos;s institutional backing means the program has resources
          that a student-run initiative cannot match. For students who know early
          that ETA is their path, the Fellows program provides structure and
          accountability during the MBA years when many peers are recruiting for
          consulting or banking roles.
        </p>
      </div>

      {/* ── 4. Faculty ─────────────────────────────────────────── */}
      <h2 className={profileH2}>Faculty: practitioners who teach from experience</h2>
      <div className={profileBody}>
        <p>
          Booth&apos;s ETA program is taught and advised by individuals who have
          operated within the search fund and acquisition ecosystem. This is not
          a program designed by academics studying ETA from the outside. The
          instructors and advisors have raised capital, acquired companies, and
          managed the post-acquisition transition that defines the searcher
          experience.
        </p>

        <h3 className={profileH3}>Mark Agnew</h3>
        <p>
          Agnew is an Adjunct Professor of Entrepreneurship at Chicago Booth who
          co-teaches BUSN 34302, the dedicated ETA course. Before joining the
          faculty, Agnew served as CEO of Lou Malnati&apos;s Pizzeria, growing
          the business to 58 locations and over 4,000 employees. That operating
          background gives him a perspective on post-acquisition management that
          is grounded in the realities of scaling a business with a large
          workforce, complex logistics, and a consumer-facing brand. Students
          who want to understand what happens after the deal closes, particularly
          the challenges covered in the{" "}
          <Link
            href="/learn/first-100-days"
            className="text-apple-accent hover:underline"
          >
            first 100 days as CEO
          </Link>
          , benefit directly from his experience.
        </p>

        <h3 className={profileH3}>Brian O&apos;Connor</h3>
        <p>
          O&apos;Connor is an Adjunct Professor of Entrepreneurship who
          co-teaches BUSN 34302 alongside Agnew. He is the Founder and Managing
          Partner of NextGen Growth Partners and previously founded Fellowship
          Capital Partners, a search fund, in 2011. O&apos;Connor brings the
          full arc of the search fund journey to the classroom: raising a fund,
          sourcing and evaluating deals, closing an acquisition, and building a
          portfolio. His dual perspective as both a searcher and an investor
          gives students insight into both sides of the{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            investor relationship
          </Link>
          .
        </p>

        <h3 className={profileH3}>Alex Hodgkin</h3>
        <p>
          Hodgkin (MBA &apos;14) serves as Senior Advisor for ETA at the Polsky
          Center. He is the co-founder and CEO of Intrinsic and was instrumental
          in creating Booth&apos;s ETA program from the ground up, including
          co-creating the Booth-Kellogg ETA Conference with Northwestern&apos;s
          Kellogg School of Management. His role at the Polsky Center is not a
          teaching position but an advisory one, which means he works directly
          with students on their search strategies, investor outreach, and
          career planning. For students navigating the decision between ETA and
          other post-MBA paths, Hodgkin serves as an institutional resource who
          has lived the journey.
        </p>
      </div>

      {/* ── 5. Course offerings (BUSN 34302) ───────────────────── */}
      <h2 className={profileH2}>Course offerings</h2>
      <div className={profileBody}>
        <p>
          Booth&apos;s dedicated ETA course is BUSN 34302, Entrepreneurship
          through Acquisition. The course runs across three sections and enrolls
          approximately 140 students per year, making it one of the
          highest-enrollment ETA courses at any business school. It is
          consistently oversubscribed, a signal of both student demand and the
          course&apos;s reputation within the Booth community.
        </p>
        <div className="overflow-x-auto">
          <table className={profileTable}>
            <thead>
              <tr>
                <th className={profileTh}>Code</th>
                <th className={profileTh}>Course name</th>
                <th className={profileTh}>Instructor(s)</th>
                <th className={profileTh}>Enrollment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={profileTd}>BUSN 34302</td>
                <td className={profileTd}>
                  Entrepreneurship through Acquisition
                </td>
                <td className={profileTd}>Mark Agnew, Brian O&apos;Connor</td>
                <td className={profileTd}>~140 students/yr (3 sections)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The course covers the full lifecycle of a search fund acquisition:
          fundraising, deal sourcing, valuation, due diligence, negotiation,
          closing, and post-acquisition operations. Agnew and O&apos;Connor
          teach from their own experience, which means students hear about real
          decisions, real mistakes, and real outcomes rather than abstracted case
          studies.
        </p>
        <p>
          With approximately 140 students enrolled each year, Booth&apos;s
          course creates a substantial peer network of ETA-interested classmates.
          This is a practical advantage. Students leaving Booth have dozens of
          peers who understand the search fund model, many of whom will go on to
          become searchers, investors, or advisors. That network compounds over
          time and becomes increasingly valuable during the search phase, when
          warm introductions and shared deal flow can make a material difference.
        </p>
      </div>

      {/* ── 6. The Booth-Kellogg ETA Conference ────────────────── */}
      <h2 className={profileH2}>The Booth-Kellogg ETA Conference</h2>
      <div className={profileBody}>
        <p>
          The Booth-Kellogg ETA Conference is the largest student-organized ETA
          event in the world. The 11th Annual conference, held in November 2024,
          drew approximately 1,000 attendees from 13 countries and 47
          universities. The 12th edition took place in November 2025, and the
          13th is scheduled for October 2026.
        </p>
        <p>
          The conference was co-created by Alex Hodgkin and counterparts at{" "}
          <Link
            href="/mba/kellogg"
            className="text-apple-accent hover:underline"
          >
            Kellogg School of Management
          </Link>
          , and its continued growth reflects the rising profile of ETA as a
          career path. Attendees include MBA students, active searchers,
          institutional and individual investors, operators who have completed
          acquisitions, and faculty from programs across the US and
          internationally.
        </p>
        <p>
          For students, the conference serves multiple functions. It is an
          opportunity to hear from practitioners who are in the middle of the
          search or operating a recently acquired company. It is a networking
          event where students can meet potential investors and mentors. And it
          is a signal of institutional commitment: Booth and Kellogg invest
          significant resources in organizing an event of this scale, which
          reinforces their positioning as leading ETA programs.
        </p>
        <p>
          The conference&apos;s international reach is also significant. With
          attendees from 13 countries, it connects Booth students to the global
          ETA ecosystem. This is relevant for searchers considering
          cross-border acquisitions or international fund structures, and it
          complements Booth&apos;s broader global orientation.
        </p>
      </div>

      {/* ── 7. Discovery Cohort and Polsky resources ───────────── */}
      <h2 className={profileH2}>Discovery Cohort and Polsky resources</h2>
      <div className={profileBody}>
        <p>
          Beyond the Fellows program and the formal course, the Polsky Center
          operates a Discovery Cohort designed for students who are exploring ETA
          as a potential career path but have not yet committed. The Discovery
          Cohort offers a lower-commitment entry point: students can attend
          events, participate in workshops, and engage with the ETA community
          without the time investment of the full Fellows program.
        </p>
        <p>
          The Polsky Center also maintains a mentorship directory that connects
          students with alumni and practitioners who have completed the search
          fund journey. This resource extends beyond graduation, which means
          Booth alumni can continue to access guidance during the search phase
          and the critical early years of running an acquired company.
        </p>
        <p>
          The layered structure is deliberate. A student who arrives at Booth
          uncertain about ETA can start with the Discovery Cohort, move into
          BUSN 34302, apply to the Fellows program, and attend the conference,
          all within the same institutional framework. This progression from
          exploration to commitment is harder to replicate at schools where ETA
          resources are concentrated in a single course or dependent on a single
          faculty member.
        </p>
      </div>

      {/* ── 8. Tuition and financial considerations ────────────── */}
      <h2 className={profileH2}>Tuition and financial considerations</h2>
      <div className={profileBody}>
        <p>
          Chicago Booth tuition is $87,354 per year ($29,118 per quarter) for
          the 2025-2026 academic year. Including living expenses in Chicago,
          health insurance, books, and personal costs, the total two-year
          investment can exceed $200,000.
        </p>
        <p>
          The financial calculus for a prospective searcher is different from
          that of a student heading into consulting or private equity. Search
          fund economics involve a period of modestly compensated search,
          typically 18 to 24 months after graduation, followed by an acquisition
          and the beginning of CEO compensation. The financial payoff comes
          primarily through equity upside, which can be substantial but is not
          guaranteed.
        </p>
        <p>
          Chicago&apos;s location is a financial consideration that works in
          students&apos; favor relative to peer programs in the Bay Area or the
          Northeast. The cost of living in Chicago is materially lower than in
          Palo Alto or New York, which can reduce the total debt burden by tens
          of thousands of dollars over two years. For a searcher who will be
          self-funding or operating on a lean budget during the search phase,
          this difference is not trivial.
        </p>
        <p>
          Booth offers merit-based and need-based scholarships that can
          significantly reduce the net cost. For a detailed framework on
          evaluating whether an MBA makes financial sense in the context of a
          search fund career, see our analysis of{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            MBA ROI for search fund entrepreneurs
          </Link>
          .
        </p>
      </div>

      {/* ── 9. How Booth compares ──────────────────────────────── */}
      <h2 className={profileH2}>How Booth compares</h2>
      <div className={profileBody}>
        <p>
          Booth occupies a distinctive position in the ETA landscape. Its
          strengths are not in historical primacy (that belongs to{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>
          , which invented the search fund model) or in the size of a single
          fellowship grant. Booth&apos;s advantage is breadth: the combination
          of a funded Fellows program, a conference that reaches 1,000+
          attendees across 13 countries, a high-enrollment course taught by two
          practitioners, and an advisory infrastructure embedded within the
          Polsky Center.
        </p>
        <p>
          Compared to{" "}
          <Link
            href="/mba/kellogg"
            className="text-apple-accent hover:underline"
          >
            Kellogg
          </Link>
          , which co-hosts the same conference, Booth has the additional
          advantage of the ETA Fellows program and the Polsky Center&apos;s
          dedicated advisory role. The two schools share the conference, but
          Booth&apos;s institutional investment in ETA extends further into
          fellowships and formal mentorship.
        </p>
        <p>
          Compared to Stanford, Booth lacks the biennial Search Fund Study and
          the depth of faculty who were present at the model&apos;s creation.
          But Booth&apos;s conference surpasses any single event at Stanford in
          scale, and the Fellows program provides a structured cohort experience
          that Stanford&apos;s Search Fund Garage addresses differently.
        </p>
        <p>
          For a comprehensive comparison across all leading programs, see our{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            ranking of the best MBA programs for search funds
          </Link>
          .
        </p>
      </div>

      {/* ── 10. Who should choose Booth ────────────────────────── */}
      <h2 className={profileH2}>Who should choose Booth</h2>
      <div className={profileBody}>
        <p>
          Booth is the strongest fit for candidates who want to enter an MBA
          program with ETA infrastructure already in place at multiple levels.
          The ideal applicant is someone who values structured support: a
          Fellows cohort, a practitioner-taught course, advisory access through
          the Polsky Center, and a conference that provides annual exposure to
          the broader ETA community.
        </p>
        <p>
          Booth is also a strong choice for candidates who are still exploring
          whether ETA is the right path. The Discovery Cohort provides an entry
          point that does not require early commitment, and the large enrollment
          in BUSN 34302 means that a student can test interest in the model
          without self-selecting into a small, high-commitment program from day
          one.
        </p>
        <p>
          Candidates with an analytical orientation will find Booth&apos;s
          culture a natural fit. The school&apos;s emphasis on rigorous,
          data-driven thinking extends into its ETA program, where students are
          expected to evaluate acquisitions with the same rigor they would apply
          to any investment thesis. This analytical foundation is particularly
          useful during due diligence and valuation, two stages where
          disciplined thinking separates successful searchers from those who
          overpay or miss critical risks.
        </p>
        <p>
          Finally, Booth is worth serious consideration for candidates who plan
          to search in the Midwest or who want access to deal flow outside the
          coastal markets. Chicago&apos;s position as a hub for middle-market
          business creates natural proximity to the types of companies that
          search funds typically acquire. For students thinking about long-term{" "}
          <Link
            href="/learn/exit-strategies"
            className="text-apple-accent hover:underline"
          >
            exit strategies
          </Link>
          , being embedded in a deep middle-market ecosystem is an advantage
          that coastal programs cannot easily replicate.
        </p>
      </div>

      {/* ── 11. Related reading ────────────────────────────────── */}
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
              href="/learn/first-100-days"
              className="text-apple-accent hover:underline"
            >
              The first 100 days as a search fund CEO
            </Link>
          </li>
          <li>
            <Link
              href="/learn/exit-strategies"
              className="text-apple-accent hover:underline"
            >
              Exit strategies for search fund acquisitions
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
          <li>
            <Link
              href="/mba/kellogg"
              className="text-apple-accent hover:underline"
            >
              Kellogg School of Management profile
            </Link>
          </li>
          <li>
            <Link
              href="/mba/yale-som"
              className="text-apple-accent hover:underline"
            >
              Yale School of Management profile
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
