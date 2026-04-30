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

export default function HarvardBusinessSchoolProfile() {
  return (
    <article>
      <h1 className={profileH1}>
        Harvard Business School: ETA&rsquo;s Case Study Powerhouse
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">15 min read</p>

      <div className={profileBody}>
        {/* ── 1. Opening narrative ─────────────────────────────────── */}
        <p>
          In 2015, Matt Perelman graduated from Harvard Business School with an
          MBA and a conviction that fast food could be a platform for
          disciplined, scalable operations. He and classmate Alex Sloane
          acquired 23 Burger King locations, treating each restaurant the way a
          private equity associate might treat a portfolio company: with
          rigorous financial controls, clear KPIs, and an operator mindset
          forged in the HBS case method. That initial cluster of franchises
          became the foundation of Garnett Station Partners, which has grown
          into a firm managing roughly $3.5 billion in assets under management.
        </p>
        <p>
          The Perelman and Sloane story encapsulates what makes Harvard
          Business School distinctive in the world of{" "}
          <Link
            href="/learn/getting-started"
            className="text-apple-accent hover:underline"
          >
            entrepreneurship through acquisition
          </Link>
          . HBS does not merely teach students about buying small businesses.
          It immerses them in hundreds of real-world scenarios through its case
          study tradition, equips them with a $130,000 fellowship to begin
          searching immediately after graduation, and connects them to a
          faculty whose published work has shaped how an entire generation
          thinks about acquiring and operating small to medium enterprises.
        </p>

        {/* ── 2. Why HBS matters for ETA ──────────────────────────── */}
        <h2 className={profileH2}>
          Why Harvard Business School matters for ETA
        </h2>
        <p>
          The case method is HBS&rsquo;s defining pedagogical feature, and it
          aligns naturally with the demands of search fund entrepreneurship.
          Aspiring searchers need to evaluate businesses under uncertainty,
          negotiate with sellers who have emotional attachments to their
          companies, structure deals with multiple investor classes, and step
          into a CEO role on day one. Every one of those challenges has been
          distilled into HBS case studies that students debate in 80-person
          amphitheaters before they ever write a{" "}
          <Link
            href="/learn/writing-a-ppm"
            className="text-apple-accent hover:underline"
          >
            private placement memorandum
          </Link>{" "}
          of their own.
        </p>
        <p>
          Beyond pedagogy, HBS contributes institutional weight. The school&rsquo;s
          name recognition among{" "}
          <Link
            href="/learn/finding-investors"
            className="text-apple-accent hover:underline"
          >
            search fund investors
          </Link>{" "}
          is substantial, and its alumni network of over 90,000 graduates
          provides a sourcing and mentorship advantage that few other programs
          can match. When an HBS graduate calls a business owner to discuss a
          potential acquisition, the school&rsquo;s brand provides an immediate
          credibility baseline.
        </p>

        {/* ── 3. The Ruback-Yudkoff legacy ────────────────────────── */}
        <h2 className={profileH2}>The Ruback-Yudkoff legacy</h2>
        <p>
          No discussion of ETA at Harvard is complete without Richard S. Ruback
          and Royce G. Yudkoff. Together, they co-authored the{" "}
          <em>HBR Guide to Buying a Small Business</em>, which has sold more
          than 65,000 copies and remains the single most widely read
          introductory text on entrepreneurship through acquisition. The book
          translated the academic frameworks of business valuation, deal
          structuring, and post-acquisition management into accessible
          language, opening the field to readers who had never encountered the
          term &ldquo;search fund&rdquo; before.
        </p>
        <p>
          Ruback, the Baker Foundation Professor Emeritus, brought decades of
          corporate finance research to bear on the small business world.
          Yudkoff, a Professor of Management Practice and MBA &rsquo;75 alumnus,
          brought the operator perspective. Before joining HBS full-time,
          Yudkoff co-founded ABRY Partners, a media-focused private equity
          firm that gave him firsthand experience with the acquisition and
          growth of mid-market companies. Their complementary backgrounds
          produced a curriculum that balances analytical rigor with operational
          pragmatism.
        </p>
        <p>
          The pair designed two of HBS&rsquo;s three ETA courses and mentored
          numerous students who went on to launch search funds. Their
          influence extends well beyond the campus: the{" "}
          <Link
            href="/learn/mba-and-eta"
            className="text-apple-accent hover:underline"
          >
            relationship between MBA programs and ETA
          </Link>{" "}
          was meaningfully shaped by the Ruback-Yudkoff framework, which
          treats acquisition entrepreneurship as a legitimate career path
          rather than a niche curiosity.
        </p>

        {/* ── 4. Faculty ──────────────────────────────────────────── */}
        <h2 className={profileH2}>Faculty</h2>
        <p>
          HBS fields four faculty members with direct ETA expertise, an
          unusually deep bench that reflects the school&rsquo;s long commitment to
          the field.
        </p>

        <h3 className={profileH3}>Richard S. Ruback</h3>
        <p>
          Baker Foundation Professor Emeritus. Ruback&rsquo;s corporate finance
          research spans several decades, but his most lasting impact on ETA
          came through the{" "}
          <em>HBR Guide to Buying a Small Business</em> and the suite of case
          studies he developed with Yudkoff. He co-teaches HBSMBA 1452
          (Financial Management of Smaller Firms) and HBSMBA 6452 (Field
          Course: Entrepreneurship through Acquisition).
        </p>

        <h3 className={profileH3}>Royce G. Yudkoff</h3>
        <p>
          Professor of Management Practice and HBS MBA &rsquo;75 alumnus. Yudkoff
          co-founded ABRY Partners before returning to HBS to build the ETA
          curriculum alongside Ruback. He co-teaches both the classroom course
          (HBSMBA 1452) and the field course (HBSMBA 6452), where students
          work directly on live acquisition opportunities.
        </p>

        <h3 className={profileH3}>Jason T. Pananos</h3>
        <p>
          Senior Lecturer. Pananos brings an exceptional operator track record
          to the classroom: 14 completed acquisitions and a 43% compound annual
          growth rate across his portfolio. He teaches HBSMBA 6453 (Value
          Creation in SME Firms), which focuses on what happens after the deal
          closes, covering operational improvement, talent management, and
          value creation in small and medium enterprises.
        </p>

        <h3 className={profileH3}>Archie L. Jones</h3>
        <p>
          Senior Lecturer. Jones teaches a search fund investment series that
          examines ETA from the capital provider&rsquo;s perspective. His course
          material helps students understand how investors evaluate search fund
          proposals, structure their commitments, and monitor portfolio
          companies, a perspective that is invaluable whether a student plans
          to raise capital or eventually invest in searchers themselves.
        </p>

        {/* ── 5. Course offerings ─────────────────────────────────── */}
        <h2 className={profileH2}>Course offerings</h2>
        <p>
          HBS offers three dedicated ETA courses, covering the full lifecycle
          from deal sourcing through post-acquisition value creation. This
          breadth is rivaled only by{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>{" "}
          among US programs.
        </p>

        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Code</th>
              <th className={profileTh}>Course name</th>
              <th className={profileTh}>Instructor(s)</th>
              <th className={profileTh}>Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>HBSMBA 1452</td>
              <td className={profileTd}>
                Financial Management of Smaller Firms
              </td>
              <td className={profileTd}>Ruback &amp; Yudkoff</td>
              <td className={profileTd}>
                Valuation, deal structuring, financial analysis of SMEs
              </td>
            </tr>
            <tr>
              <td className={profileTd}>HBSMBA 6452</td>
              <td className={profileTd}>
                Field Course: Entrepreneurship through Acquisition
              </td>
              <td className={profileTd}>Ruback &amp; Yudkoff</td>
              <td className={profileTd}>
                Hands-on search process, live deal evaluation, investor
                presentations
              </td>
            </tr>
            <tr>
              <td className={profileTd}>HBSMBA 6453</td>
              <td className={profileTd}>
                Value Creation in SME Firms
              </td>
              <td className={profileTd}>Pananos</td>
              <td className={profileTd}>
                Post-acquisition operations, growth strategy, talent management
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          HBSMBA 1452 provides the analytical foundation. Students work through
          case studies on how to value small businesses, structure acquisitions,
          and negotiate with owners and lenders. The course draws on the
          Ruback-Yudkoff textbook and is often the entry point for students
          exploring ETA for the first time.
        </p>
        <p>
          HBSMBA 6452 is the field course, where the learning becomes
          experiential. Students engage with real acquisition targets, conduct
          due diligence, build financial models on actual businesses, and
          present to panels of experienced search fund investors. This is
          closer to an apprenticeship than a lecture series.
        </p>
        <p>
          HBSMBA 6453, taught by Pananos, addresses the part of ETA that many
          programs overlook: what happens after closing. Pananos draws on his
          own experience with 14 acquisitions to teach students how to create
          value in the businesses they acquire, covering everything from
          pricing strategy to organizational design.
        </p>

        {/* ── 6. The Search Fund Fellowship ───────────────────────── */}
        <h2 className={profileH2}>
          The Search Fund Fellowship: $130,000 to launch your search
        </h2>
        <p>
          The HBS Search Fund Fellowship is one of the most generous
          ETA-specific financial awards available at any business school. It
          provides up to $65,000 per year, totaling $130,000 over two years,
          to graduating MBAs who plan to pursue a search fund immediately after
          graduation.
        </p>
        <p>
          The fellowship is not equity capital. It is non-dilutive funding
          designed to cover living expenses during the search phase, which
          typically lasts 18 to 24 months. This is a meaningful distinction:
          it allows recipients to begin searching without immediately giving up
          economics to cover personal costs, preserving their equity
          allocation for the eventual acquisition.
        </p>
        <p>
          For context on how this compares to other programs, Wharton offers the
          Perlman Fellowship at $50,000. The HBS fellowship&rsquo;s size reflects
          the school&rsquo;s institutional commitment to ETA as a mainstream career
          path, not a secondary option for students who could not land
          traditional finance or consulting positions. For a detailed comparison
          of fellowship economics across schools, see our analysis of{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            MBA ROI for search fund careers
          </Link>
          .
        </p>

        {/* ── 7. Alumni spotlight ─────────────────────────────────── */}
        <h2 className={profileH2}>Alumni spotlight</h2>
        <p>
          HBS alumni have pursued ETA across a range of industries and
          geographies. The following profiles illustrate the diversity of paths
          available.
        </p>

        <h3 className={profileH3}>
          Matt Perelman (MBA &rsquo;15) and Alex Sloane (MBA &rsquo;15):
          Garnett Station Partners
        </h3>
        <p>
          Perelman and Sloane met as HBS classmates and initially acquired 23
          Burger King franchise locations. Rather than stopping at a single
          operation, they treated the acquisition as proof of concept for a
          broader platform. Garnett Station Partners has since grown to
          approximately $3.5 billion in assets under management, making it one
          of the most successful ETA-origin stories in recent memory. Their
          trajectory demonstrates how the search fund model can serve as a
          launchpad for building a significant investment and operating
          platform, not just a path to owning a single small business.
        </p>

        <h3 className={profileH3}>
          Robin Kovitz (MBA &rsquo;07): Baskits Inc.
        </h3>
        <p>
          Kovitz acquired Baskits Inc. and built it into the largest Canadian
          gift basket company. Her story is particularly relevant for searchers
          interested in consumer-facing businesses, a segment where many search
          fund investors are cautious. Kovitz succeeded by applying disciplined
          operational management to a category with strong seasonal demand
          patterns and meaningful brand loyalty.
        </p>

        <h3 className={profileH3}>
          Greg Ambrosia (MBA &rsquo;13): Citywide Building Services
        </h3>
        <p>
          Ambrosia acquired Citywide Building Services, a $10.3 million
          revenue commercial services business. His acquisition fits squarely
          in the sweet spot that Ruback and Yudkoff describe in their
          textbook: a profitable, established SME with predictable revenue
          and room for operational improvement under professional management.
        </p>

        {/* ── 8. The HBS ETA Conference ───────────────────────────── */}
        <h2 className={profileH2}>The HBS ETA Conference</h2>
        <p>
          The HBS ETA Club hosts an annual conference that has become one of
          the largest ETA-focused events in North America, drawing
          approximately 1,000 attendees. The conference brings together
          current students, alumni operators, search fund investors, and
          faculty from HBS and other schools.
        </p>
        <p>
          The event serves a dual purpose. For students still exploring ETA,
          it provides exposure to dozens of operators and investors in a
          single day. For those already committed to launching a search, it is
          an opportunity to build relationships with the investors who will
          eventually fund their search and acquisition capital. The conference
          also attracts students from other MBA programs, reflecting
          HBS&rsquo;s central role in the ETA ecosystem.
        </p>
        <p>
          If you are comparing conference ecosystems across schools, note that
          Chicago Booth and Kellogg co-host a similarly scaled event, and{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>{" "}
          organizes the leading European ETA conference alongside London
          Business School.
        </p>

        {/* ── 9. Tuition and financial considerations ─────────────── */}
        <h2 className={profileH2}>Tuition and financial considerations</h2>
        <p>
          HBS tuition for the 2026-2027 academic year is $84,760 per year.
          Over two years, tuition alone totals approximately $169,520 before
          living expenses, health insurance, and incidental costs.
        </p>

        <table className={profileTable}>
          <thead>
            <tr>
              <th className={profileTh}>Item</th>
              <th className={profileTh}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={profileTd}>Annual tuition (2026-2027)</td>
              <td className={profileTd}>$84,760</td>
            </tr>
            <tr>
              <td className={profileTd}>Two-year tuition total</td>
              <td className={profileTd}>~$169,520</td>
            </tr>
            <tr>
              <td className={profileTd}>Search Fund Fellowship (if awarded)</td>
              <td className={profileTd}>Up to $130,000</td>
            </tr>
          </tbody>
        </table>

        <p>
          For students committed to ETA, the financial calculus involves more
          than tuition. There is the opportunity cost of two years out of the
          workforce, the cost of living in Boston, and the post-graduation
          search phase, which typically requires 18 to 24 months of personal
          runway. The Search Fund Fellowship can offset a significant portion
          of this post-MBA cost, but even with the fellowship, the total
          investment from the start of the MBA through a closed acquisition
          can approach $400,000 or more. A thorough treatment of these
          economics is available in our guide to{" "}
          <Link
            href="/learn/mba-roi-search-fund-career"
            className="text-apple-accent hover:underline"
          >
            MBA ROI for search fund careers
          </Link>
          .
        </p>

        {/* ── 10. Who should choose HBS ───────────────────────────── */}
        <h2 className={profileH2}>Who should choose HBS for ETA</h2>
        <p>
          HBS is a strong fit for aspiring searchers who value three things:
          case-method depth, brand recognition with investors, and a large
          alumni network for deal sourcing and mentorship. The program is
          particularly well-suited for students who want to learn by working
          through hundreds of real scenarios before putting their own capital
          at risk.
        </p>
        <p>
          It is worth comparing HBS with the other Tier 1 programs.{" "}
          <Link
            href="/mba/stanford-gsb"
            className="text-apple-accent hover:underline"
          >
            Stanford GSB
          </Link>{" "}
          is the intellectual home of the search fund model and publishes the
          definitive industry dataset.{" "}
          <Link
            href="/mba/iese"
            className="text-apple-accent hover:underline"
          >
            IESE
          </Link>{" "}
          leads international ETA and offers the deepest European network. HBS
          sits between these poles: its case study library and faculty
          publishing record are unmatched, and its US alumni network is
          enormous, but it does not have a dedicated research center
          equivalent to Stanford&rsquo;s Center for Entrepreneurial Studies or
          IESE&rsquo;s International Search Fund Center.
        </p>
        <p>
          Students weighing a Tier 2 option like{" "}
          <Link
            href="/mba/yale-som"
            className="text-apple-accent hover:underline"
          >
            Yale SOM
          </Link>{" "}
          should note that Yale offers unmatched academic depth through
          Professor A.J. Wasserstein&rsquo;s 100+ case studies, at a somewhat
          different price point. The right choice depends on your target
          geography, budget, and whether you prioritize breadth of network
          (HBS) or depth of academic immersion (Yale).
        </p>
        <p>
          For a comprehensive comparison across all programs, read our{" "}
          <Link
            href="/learn/best-mba-for-search-fund"
            className="text-apple-accent hover:underline"
          >
            complete ranking of the best MBA programs for search fund careers
          </Link>
          .
        </p>

        {/* ── 11. Related reading ─────────────────────────────────── */}
        <h2 className={profileH2}>Related reading</h2>
        <ul className={profileUl}>
          <li>
            <Link
              href="/learn/getting-started"
              className="text-apple-accent hover:underline"
            >
              Getting started with ETA
            </Link>{" "}
            &ndash; A beginner&rsquo;s guide to entrepreneurship through acquisition
          </li>
          <li>
            <Link
              href="/learn/stanford-2024-study"
              className="text-apple-accent hover:underline"
            >
              Stanford 2024 Search Fund Study
            </Link>{" "}
            &ndash; The definitive dataset on US and Canadian search fund returns
          </li>
          <li>
            <Link
              href="/learn/writing-a-ppm"
              className="text-apple-accent hover:underline"
            >
              Writing a private placement memorandum
            </Link>{" "}
            &ndash; How to structure the document that raises your search capital
          </li>
          <li>
            <Link
              href="/learn/mba-and-eta"
              className="text-apple-accent hover:underline"
            >
              MBA and ETA
            </Link>{" "}
            &ndash; How graduate business education connects to the search fund model
          </li>
          <li>
            <Link
              href="/learn/best-mba-for-search-fund"
              className="text-apple-accent hover:underline"
            >
              Best MBA programs for search fund careers
            </Link>{" "}
            &ndash; Tier-by-tier comparison of programs worldwide
          </li>
          <li>
            <Link
              href="/learn/mba-roi-search-fund-career"
              className="text-apple-accent hover:underline"
            >
              MBA ROI for search fund careers
            </Link>{" "}
            &ndash; Cost analysis, outcomes, and break-even scenarios
          </li>
          <li>
            <Link
              href="/learn/finding-investors"
              className="text-apple-accent hover:underline"
            >
              Finding search fund investors
            </Link>{" "}
            &ndash; How to identify and approach capital providers for your search
          </li>
        </ul>
      </div>
    </article>
  );
}
