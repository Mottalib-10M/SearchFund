import Link from "next/link";
import {
  profileH1,
  profileH2,
  profileH3,
  profileBody,
  profileUl,
  profileTable,
  profileTh,
  profileTd,
} from "./shared-styles";

export default function WhartonProfile() {
  return (
    <article>
      <p className="text-sm text-apple-gray-500 mb-2">12 min read</p>
      <h1 className={profileH1}>
        Wharton: A $10 Million Bet on Search Fund Entrepreneurs
      </h1>

      <div className={profileBody}>
        {/* ---------------------------------------------------------------- */}
        {/* 1. Opening narrative */}
        {/* ---------------------------------------------------------------- */}
        <p>
          In 2012, Jim Vesterman completed what most MBA graduates only read
          about in case studies. A 2006 Wharton MBA, Vesterman raised a search
          fund, scoured the market for an acquisition target, and bought Raptor
          Technologies, a school safety software company serving roughly 7,000
          customers. Over the following years he grew that customer base to more
          than 34,000, turning a niche product into a category leader. Today,
          Vesterman is back at Wharton, teaching the next generation of
          searchers as a lecturer in the Management Department.
        </p>
        <p>
          The Vesterman story captures something important about where Wharton
          stands in the world of{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            entrepreneurship through acquisition
          </Link>
          . For years, the school trailed rivals like Stanford GSB and Harvard
          Business School in ETA infrastructure. That changed in 2024, when a
          single donation reshaped the landscape.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 2. Why Wharton matters: the $10M endowment */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>Why Wharton matters now</h2>
        <p>
          Ellen Hanson and Richard Perlman (W&apos;68) donated $10 million to
          Wharton to establish a permanent ETA program. The gift is believed to
          be the largest known ETA-specific university donation in history. For
          context, most business schools fund their search fund programming
          through a single course budget and a handful of club events. Wharton
          now has an endowment designed to support fellowships, an incubator,
          curriculum development, and research indefinitely.
        </p>
        <p>
          The endowment signals a strategic commitment that is rare in the ETA
          space. While{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>{" "}
          built its ETA reputation over four decades of organic growth, Wharton
          is attempting to compress that timeline through concentrated capital.
          The question is not whether the money exists, but whether the
          institutional culture can keep pace.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 3. The Perlman Fellowship */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>The Perlman ETA Fellowship</h2>
        <p>
          The most immediate output of the endowment is the Perlman ETA
          Fellowship, which provides up to $50,000 in non-dilutive funding to
          approximately four Wharton MBA graduates per year who plan to launch a
          search fund after graduation. Unlike dilutive search fund capital,
          which requires giving up equity to investors during the search phase,
          the Perlman Fellowship is a grant. Fellows keep their full equity
          allocation.
        </p>
        <p>
          For prospective searchers weighing the{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            ROI of an MBA for a search fund career
          </Link>
          , $50,000 in non-dilutive capital is significant. During the typical
          two-year search phase, searchers draw a modest salary funded by
          investors in exchange for equity. A $50,000 grant can cover several
          months of living expenses, deal sourcing costs, or legal fees without
          any dilution.
        </p>

        <h3 className={profileH3}>How the Perlman Fellowship compares</h3>
        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>School</th>
              <th className={profileTh}>Fellowship</th>
              <th className={profileTh}>Amount</th>
              <th className={profileTh}>Dilutive?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>Wharton</td>
              <td className={profileTd}>Perlman ETA Fellowship</td>
              <td className={profileTd}>$50,000</td>
              <td className={profileTd}>No</td>
            </tr>
            <tr>
              <td className={profileTd}>
                <Link
                  href="/mba/harvard-business-school"
                  className="text-apple-accent hover:underline"
                >
                  HBS
                </Link>
              </td>
              <td className={profileTd}>Search Fund Fellowship</td>
              <td className={profileTd}>Up to $130,000</td>
              <td className={profileTd}>No</td>
            </tr>
          </tbody>
        </table>
        <p>
          The HBS Search Fund Fellowship remains the most generous ETA-specific
          fellowship at any business school, but the Perlman Fellowship closes
          a meaningful portion of that gap. More importantly, its permanent
          endowment structure means it will not depend on annual fundraising
          or administrative renewal.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 4. Faculty */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>Faculty: the operator in the classroom</h2>
        <p>
          Wharton&apos;s ETA program currently centers on a single faculty
          member: Jim Vesterman. A lecturer in the Management Department,
          Vesterman brings a background that is unusual even among ETA
          instructors. He did not arrive at teaching through academia or
          investment banking. He arrived through operating.
        </p>
        <p>
          After graduating from Wharton in 2006, Vesterman raised a search fund
          and acquired Raptor Technologies in 2012. He then ran the company as
          CEO, growing it from approximately 7,000 customers to more than
          34,000. That operational experience forms the backbone of MGMT 8140,
          Wharton&apos;s dedicated search fund course. Students do not just
          study deal structures; they learn from an instructor who has managed
          headcount expansion, product development, and customer retention
          firsthand.
        </p>
        <p>
          The single-faculty model has tradeoffs. Programs like{" "}
          <Link
            href="/mba/yale-som"
            className="text-apple-accent hover:underline"
          >
            Yale SOM
          </Link>{" "}
          also rely heavily on one central figure (A.J. Wasserstein), but
          Wasserstein has produced over 100 case studies and teaches three
          courses. Wharton currently offers one dedicated ETA course. Whether
          the endowment leads to additional faculty hires will be a key signal
          of the program&apos;s trajectory.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 5. Course offerings */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>Course offerings</h2>
        <h3 className={profileH3}>
          MGMT 8140: Search Fund Entrepreneurship
        </h3>
        <p>
          Taught by Jim Vesterman, MGMT 8140 is Wharton&apos;s dedicated
          ETA course. The class covers the full lifecycle of a search fund,
          from raising initial capital through sourcing deals, conducting due
          diligence, negotiating acquisitions, and operating the acquired
          company. Vesterman&apos;s personal experience with Raptor
          Technologies provides concrete reference points at each stage.
        </p>
        <p>
          For students exploring whether{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            an MBA is the right path into ETA
          </Link>
          , a single course can be enough to build foundational knowledge. But
          the most established programs offer two or three dedicated courses
          that allow students to progress from fundamentals to advanced
          topics like{" "}
          <Link
            href="/learn/searcher-compensation"
            className="text-apple-accent hover:underline"
          >
            searcher compensation structures
          </Link>{" "}
          and post-acquisition management. Wharton&apos;s curriculum is likely
          to expand as the endowment matures.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 6. The ETA Incubator */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>The ETA Incubator: 2026 launch</h2>
        <p>
          Wharton is launching a cohort-based ETA Incubator in 2026 through
          VentureLab, the university&apos;s venture support infrastructure. The
          Incubator is designed to take aspiring searchers through the early
          stages of the search fund process in a structured, group-based
          format. Details on cohort size and programming are expected to be
          released as the pilot progresses.
        </p>
        <p>
          Incubator models have worked well at other schools. Chicago
          Booth&apos;s Polsky Center runs an ETA Fellows program and Discovery
          Cohort that provides structured support alongside mentorship and
          community. If Wharton&apos;s Incubator follows a similar model, it
          could address a key gap in the current program: the lack of structured
          post-classroom support for students moving from interest to action.
        </p>
        <p>
          The 2026 pilot year will be important to watch. Successful incubator
          programs typically produce their first alumni searchers within 12 to
          18 months of launch, giving Wharton a concrete pipeline of outcomes
          to track.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 7. VentureLab infrastructure */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>VentureLab and institutional support</h2>
        <p>
          VentureLab, the University of Pennsylvania&apos;s cross-campus
          venture support program, maintains a dedicated ETA page that
          centralizes resources for search fund entrepreneurs. This
          institutional backing gives Wharton&apos;s ETA program access to
          resources that extend beyond the business school: legal clinics,
          mentorship networks, and connections to Penn&apos;s broader
          entrepreneurial ecosystem.
        </p>
        <p>
          The VentureLab connection matters because search fund
          entrepreneurship is inherently cross-disciplinary. Searchers need
          legal expertise for deal structuring, financial modeling skills for
          valuation, and operational knowledge for running the acquired company.
          A university-wide support system can provide those resources in ways
          that a standalone MBA course cannot.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 8. Tuition and financial considerations */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>Tuition and financial considerations</h2>
        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Cost component</th>
              <th className={profileTh}>Amount (2026-2027)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>Tuition</td>
              <td className={profileTd}>$87,970/year</td>
            </tr>
            <tr>
              <td className={profileTd}>Including fees</td>
              <td className={profileTd}>$93,008/year</td>
            </tr>
            <tr>
              <td className={profileTd}>Two-year total (tuition only)</td>
              <td className={profileTd}>$175,940</td>
            </tr>
            <tr>
              <td className={profileTd}>Perlman Fellowship offset</td>
              <td className={profileTd}>Up to $50,000</td>
            </tr>
          </tbody>
        </table>
        <p>
          Wharton&apos;s tuition places it near the top of US MBA programs.
          For aspiring searchers evaluating the{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            financial return of an MBA for a search fund career
          </Link>
          , the two-year cost of attendance (including living expenses) can
          approach $300,000. The Perlman Fellowship partially offsets this for
          the four recipients each year, but most Wharton students pursuing
          ETA will finance their education through standard MBA scholarships,
          loans, or savings.
        </p>
        <p>
          That said, Wharton&apos;s alumni network is among the largest and
          most financially connected in the world. For searchers who need to
          raise capital from individual investors, the ability to tap a
          Wharton network during the{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            fundraising process
          </Link>{" "}
          can be a meaningful advantage.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 9. How Wharton compares */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>How Wharton compares</h2>
        <p>
          Wharton occupies an unusual position in the{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            MBA landscape for search fund entrepreneurs
          </Link>
          . It has the largest known ETA endowment, but a relatively young
          program. It has one of the best fellowship offerings, but only one
          dedicated course. Here is how the key dimensions compare across
          leading programs.
        </p>
        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Dimension</th>
              <th className={profileTh}>Wharton</th>
              <th className={profileTh}>Stanford GSB</th>
              <th className={profileTh}>HBS</th>
              <th className={profileTh}>Yale SOM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>Dedicated ETA courses</td>
              <td className={profileTd}>1</td>
              <td className={profileTd}>3</td>
              <td className={profileTd}>3</td>
              <td className={profileTd}>3</td>
            </tr>
            <tr>
              <td className={profileTd}>ETA faculty</td>
              <td className={profileTd}>1</td>
              <td className={profileTd}>6</td>
              <td className={profileTd}>4</td>
              <td className={profileTd}>1</td>
            </tr>
            <tr>
              <td className={profileTd}>ETA fellowship</td>
              <td className={profileTd}>$50K</td>
              <td className={profileTd}>Various</td>
              <td className={profileTd}>$130K</td>
              <td className={profileTd}>None specific</td>
            </tr>
            <tr>
              <td className={profileTd}>ETA endowment</td>
              <td className={profileTd}>$10M</td>
              <td className={profileTd}>Not disclosed</td>
              <td className={profileTd}>Not disclosed</td>
              <td className={profileTd}>Not disclosed</td>
            </tr>
            <tr>
              <td className={profileTd}>Incubator</td>
              <td className={profileTd}>2026 pilot</td>
              <td className={profileTd}>No</td>
              <td className={profileTd}>No</td>
              <td className={profileTd}>No</td>
            </tr>
            <tr>
              <td className={profileTd}>Tuition (annual)</td>
              <td className={profileTd}>$87,970</td>
              <td className={profileTd}>$85,755</td>
              <td className={profileTd}>$84,760</td>
              <td className={profileTd}>$91,400</td>
            </tr>
          </tbody>
        </table>
        <p>
          Wharton&apos;s edge is financial infrastructure. No other school has
          a disclosed ETA-specific endowment of this size. The gap is in
          track record: Stanford has tracked 681 funds since 1984, HBS has the
          Ruback-Yudkoff textbook and a conference that draws over 1,000
          attendees, and Yale has 100+ published case studies. Wharton is
          building toward that kind of depth, but it is not there yet.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 10. Who should choose Wharton */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>Who should choose Wharton</h2>
        <p>
          Wharton is likely the best fit for a specific type of aspiring
          searcher:
        </p>
        <ul className={profileUl}>
          <li>
            You want to combine ETA preparation with Wharton&apos;s broader
            strengths in finance, analytics, and operations. The school&apos;s
            depth in quantitative disciplines can be valuable for the financial
            modeling and valuation work that search fund due diligence demands.
          </li>
          <li>
            You are drawn to the Perlman Fellowship and want non-dilutive
            capital to support your post-MBA search.
          </li>
          <li>
            You want to be part of a program that is actively building. The
            2026 Incubator launch, combined with the endowment, means that
            students entering now will shape the culture and direction of
            Wharton&apos;s ETA ecosystem.
          </li>
          <li>
            You value a large, financially connected alumni network for
            fundraising and deal sourcing.
          </li>
        </ul>
        <p>
          Wharton may not be the best fit if you need an established ETA
          community with multiple courses, deep case-study libraries, and a
          long track record of alumni searchers. For that,{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>
          ,{" "}
          <Link
            href="/mba/harvard-business-school"
            className="text-apple-accent hover:underline"
          >
            HBS
          </Link>
          , or{" "}
          <Link
            href="/mba/yale-som"
            className="text-apple-accent hover:underline"
          >
            Yale SOM
          </Link>{" "}
          remain the established leaders.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 11. Related reading */}
        {/* ---------------------------------------------------------------- */}
        <h2 className={profileH2}>Related reading</h2>
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
              href="/learn/best-mba-for-search-fund"
              className="text-apple-accent hover:underline"
            >
              Best MBA programs for search fund entrepreneurs
            </Link>
          </li>
          <li>
            <Link
              href="/learn/mba-and-eta"
              className="text-apple-accent hover:underline"
            >
              MBA and ETA: is a degree worth it?
            </Link>
          </li>
          <li>
            <Link
              href="/learn/mba-roi-search-fund-career"
              className="text-apple-accent hover:underline"
            >
              MBA ROI for a search fund career
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
              href="/learn/searcher-compensation"
              className="text-apple-accent hover:underline"
            >
              Searcher compensation structures
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
