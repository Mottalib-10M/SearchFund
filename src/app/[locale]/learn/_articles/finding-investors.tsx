import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function FindingInvestorsArticle() {
  return (
    <article>
      <h1 className={h1Class}>How to Find Search Fund Investors</h1>
      <p className="text-sm text-apple-gray-500 mt-3">11 min read</p>

      <div className={bodyClass}>
        <p>
          Raising search capital is the first major milestone for a traditional
          search fund entrepreneur. Understanding <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">why investors back search funds</Link> will help you tailor your pitch. This guide covers the landscape of search
          fund investors, how to approach them, and what they look for in a
          searcher.
        </p>

        <p>
          The typical traditional search fund raises between $400,000 and $600,000
          in search capital from 15 to 20 investors to fund a two-year search
          period. Each unit of search capital converts into equity at the time of
          acquisition, giving investors a pro-rata share of the acquired company.
          The economics are compelling for both sides: searchers get a funded
          runway to find and acquire a business, while investors gain access to a
          deal flow pipeline and the right (but not the obligation) to invest in
          the eventual acquisition.
        </p>

        <h2 className={h2Class}>Types of search fund investors</h2>

        <p>
          Search fund investors are not monolithic. They differ in check size,
          involvement level, value-add, and motivations. Understanding these
          distinctions will help you build a balanced cap table that maximizes
          both capital and strategic support.
        </p>

        <h3 className={h3Class}>Institutional search fund investors</h3>
        <p>
          A growing number of dedicated institutional funds have emerged to
          invest systematically across multiple search funds. These firms
          typically invest in 10 to 30 or more search funds per year and bring
          deep structural knowledge to the model.
        </p>
        <ul className={ulClass}>
          <li><strong>Search Fund Partners:</strong> One of the earliest dedicated search fund investment firms, Search Fund Partners has backed hundreds of searchers and brings decades of pattern recognition to the model.</li>
          <li><strong>Pacific Lake Partners:</strong> A well-known institutional search fund investor that provides both search capital and acquisition capital, offering continuity throughout the process.</li>
          <li><strong>Relay Investments:</strong> Active in the US search fund ecosystem, Relay invests across both traditional and self-funded search models.</li>
          <li><strong>Stanford GSB angel network:</strong> While not an institution per se, the Stanford search fund community functions as a semi-institutional network. Stanford professors helped pioneer the search fund model in the 1980s, and the school&apos;s alumni network remains the most active source of search fund capital in the world.</li>
          <li><strong>IESE and other European networks:</strong> In Europe, IESE Business School has built a robust search fund ecosystem. Dedicated European investors like Borgo Capital and ETA Capital have emerged to serve this growing market.</li>
        </ul>
        <p>
          Institutional investors typically write checks of $50,000 to $100,000
          per search fund during the search phase, with the expectation of
          investing significantly more — often $500,000 to $2 million — at
          acquisition. Their primary advantage is speed and reliability: they
          understand the model, move quickly on decisions, and rarely require
          extensive education on how search funds work.
        </p>

        <h3 className={h3Class}>Ex-searchers</h3>
        <p>
          Former search fund entrepreneurs who have successfully acquired and
          operated companies. They provide the most relevant mentorship and
          often invest in 5-15 search funds simultaneously. They understand
          the challenges firsthand, offer insight into <Link href="/learn/searcher-compensation" className="text-apple-accent hover:underline">searcher compensation structures</Link>, and are typically the most helpful board members.
        </p>
        <p>
          Ex-searchers are uniquely valuable because they have lived through
          every stage of the journey. They can advise on deal sourcing
          strategies, help you evaluate opportunities, and provide emotional
          support during the inevitable frustrations of the search process.
          Many ex-searchers say that investing in other search funds is one of
          the most rewarding parts of their post-acquisition career, and they
          tend to be generous with their time.
        </p>

        <h3 className={h3Class}>Family offices</h3>
        <p>
          Wealthy families looking for alternative investment strategies.
          Family offices often invest patient capital with longer time horizons
          and can be flexible on deal structures. Many European family offices
          have embraced the search fund model.
        </p>
        <p>
          Family offices are particularly attractive investors because they
          typically have fewer institutional constraints. They can make faster
          investment decisions, are comfortable with illiquid investments, and
          often view search funds as a way to diversify beyond public markets
          and traditional private equity. Some family offices also bring
          operating expertise from the family&apos;s own business interests,
          which can be valuable during the acquisition and operating phases.
          That said, family offices can be harder to identify and reach — they
          rarely have public-facing investment mandates.
        </p>

        <h3 className={h3Class}>Institutional investors</h3>
        <p>
          Dedicated search fund investment firms have emerged in both the US
          and Europe. These include firms like Pacific Lake Partners, Relay
          Investments, and others who invest professionally across multiple
          search funds.
        </p>

        <h3 className={h3Class}>Angel investors and individual investors</h3>
        <p>
          High-net-worth individuals, often entrepreneurs themselves, who invest
          smaller amounts in individual search funds. They may bring valuable
          industry expertise or networks.
        </p>
        <p>
          Individual angel investors are often the most eclectic group on your
          cap table. They might include a retired CEO from your target industry,
          a successful tech entrepreneur looking for alternative investments,
          or a finance professional who admires the search fund model. While
          their check sizes tend to be smaller ($25,000 to $75,000), they can
          provide outsized value through industry introductions, operational
          advice, or access to their own professional networks. The key is to
          be selective: choose angel investors who bring specific expertise or
          connections that complement your search thesis.
        </p>

        <h2 className={h2Class}>Building your investor outreach list</h2>
        <p>
          Before you begin contacting investors, you need to build a targeted
          outreach list. A well-researched list of 80 to 120 potential investors
          is a good starting point. Here are the primary channels for identifying
          search fund investors.
        </p>

        <h3 className={h3Class}>MBA and university alumni networks</h3>
        <p>
          If you attended a business school with a strong ETA program, your
          alumni network is your single most valuable resource. Schools like
          Stanford GSB, Harvard Business School, IESE, and Kellogg have
          established search fund communities with alumni who actively invest.
          Reach out to your school&apos;s entrepreneurship center or career
          office to request introductions to alumni investors. Many schools
          maintain internal databases of search fund investors and former
          searchers.
        </p>

        <h3 className={h3Class}>LinkedIn and online research</h3>
        <p>
          LinkedIn is an underrated tool for identifying search fund investors.
          Search for terms like &ldquo;search fund investor,&rdquo;
          &ldquo;entrepreneurship through acquisition,&rdquo; or
          &ldquo;ETA investor&rdquo; to find individuals who self-identify as
          search fund backers. Review the profiles of known searchers to see
          who they are connected to. Follow search fund-related content
          creators and engage with their posts to build visibility before
          making a direct ask. The Stanford Search Fund Study, published
          periodically, also lists active investors.
        </p>

        <h3 className={h3Class}>ETA conferences and events</h3>
        <p>
          The search fund ecosystem has several marquee events where investors
          and searchers gather. The IESE International Search Fund Conference
          (Barcelona), the Stanford Search Fund CEO Conference, and the HBS
          ETA Conference are the three most important. Regional events hosted
          by university clubs, ETA-focused organizations, and private networks
          also provide excellent opportunities. Attending these events — even
          before you are ready to raise — helps you build relationships and
          understand what investors are looking for.
        </p>

        <h3 className={h3Class}>Warm introductions</h3>
        <p>
          Cold outreach works, but warm introductions convert at a much higher
          rate. Ask your professors, former employers, mentors, and fellow
          MBA classmates if they know anyone who invests in search funds.
          A single introduction from a trusted source can carry more weight
          than a perfectly crafted cold email. Once you secure your first few
          investors, ask each of them to introduce you to two or three others
          — referral chains are the most efficient way to fill out your cap
          table.
        </p>

        <h2 className={h2Class}>How to approach investors</h2>
        <ol className={olClass}>
          <li><strong>Build your thesis first.</strong> Define your target geography, sectors, size criteria, and value creation plan before approaching investors. Pair your thesis with a strong <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">fundraising deck</Link>.</li>
          <li><strong>Leverage your network.</strong> Start with your MBA alumni network, professors, and personal connections to get warm introductions.</li>
          <li><strong>Prepare a compelling <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">PPM</Link>.</strong> Your Private Placement Memorandum should cover your background, search thesis, target criteria, and the economics of the search fund structure.</li>
          <li><strong>Meet investors in person.</strong> Attend the INSEAD ETA Conference, IESE Search Fund Conference, Stanford CEO Conference, and ETA networking events. INSEAD&apos;s ETA & Search Funds Hub also provides curated introductions between searchers and investors.</li>
          <li><strong>Be persistent but respectful.</strong> Expect the process to take 2-4 months. Most investors pass on many searchers before committing.</li>
        </ol>

        <h2 className={h2Class}>The investor pitch process</h2>
        <p>
          Understanding the typical fundraising process helps you manage
          timelines and expectations. For a week-by-week breakdown, consult
          our <Link href="/learn/search-fund-fundraising-timeline" className="text-apple-accent hover:underline">fundraising timeline guide</Link>. Most searchers go through the following
          stages with each investor.
        </p>

        <h3 className={h3Class}>Stage 1: Initial outreach and screening call</h3>
        <p>
          Your first interaction is usually a 20- to 30-minute phone or video
          call. The investor wants to understand who you are, why you chose
          ETA, and what your search thesis looks like. This is as much a
          chemistry check as it is a diligence call. Be prepared to share your
          personal story concisely, explain your target criteria, and
          demonstrate that you understand the search fund model. Investors at
          this stage are evaluating your communication skills, self-awareness,
          and intellectual honesty.
        </p>

        <h3 className={h3Class}>Stage 2: PPM review and follow-up</h3>
        <p>
          If the initial call goes well, you send your PPM and fundraising
          deck. The investor will review these materials on their own time,
          typically over one to two weeks. They may follow up with questions
          about your financial projections, your search timeline, or specific
          aspects of your background. Some investors will request a second
          call at this stage. Be responsive and thorough — slow follow-up is
          a red flag to experienced investors.
        </p>

        <h3 className={h3Class}>Stage 3: Commitment</h3>
        <p>
          Interested investors will verbally commit to a unit amount, typically
          $50,000 to $100,000 per unit. At this stage, you send them the
          subscription agreement and related legal documents. It is common for
          investors to commit but take several weeks to return paperwork and
          wire funds. Keep a detailed tracker showing each investor&apos;s
          status, committed amount, and next steps.
        </p>

        <h3 className={h3Class}>Stage 4: Close</h3>
        <p>
          Once you have commitments for your target raise amount, you conduct
          a formal close. Many searchers do a &ldquo;first close&rdquo; when
          they reach 60-70% of the target amount and a &ldquo;final close&rdquo;
          once they hit 100%. This two-stage approach lets you begin your
          search sooner while continuing to fill the remaining units.
        </p>

        <h2 className={h2Class}>Typical terms and deal economics</h2>
        <p>
          While terms can vary, the traditional search fund model has become
          fairly standardized. Understanding these terms will help you have
          informed conversations with prospective investors.
        </p>
        <ul className={ulClass}>
          <li><strong>Unit size:</strong> Typically $50,000 to $100,000 per unit, though some funds have units as small as $25,000 for angel investors.</li>
          <li><strong>Number of investors:</strong> Most traditional search funds have 15 to 20 investors to ensure a diverse cap table while keeping the number manageable.</li>
          <li><strong>Search budget:</strong> The total raise usually covers two years of salary, health insurance, travel, professional fees, and deal expenses — typically $400,000 to $600,000.</li>
          <li><strong>Step-up at acquisition:</strong> Search investors&apos; capital converts into equity at a 1.5x step-up at the time of acquisition, compensating them for the risk of funding an unfunded search. For a full breakdown of this mechanism, see our <Link href="/learn/search-fund-term-sheet" className="text-apple-accent hover:underline">term sheet guide</Link>.</li>
          <li><strong>Pro-rata rights:</strong> Investors have the right (but not the obligation) to invest their pro-rata share in the acquisition. This is the primary economic incentive — the search capital itself is a relatively small investment to gain access to the deal.</li>
          <li><strong>Searcher equity:</strong> The searcher typically earns 20-30% of the acquired company&apos;s equity, vesting over 4-5 years, contingent on acquisition and continued employment.</li>
          <li><strong>Board seats:</strong> Investors typically elect a small board of directors (3-5 members), with the searcher serving as CEO and an investor representative serving as board chair.</li>
        </ul>

        <h2 className={h2Class}>What investors look for</h2>

        <h3 className={h3Class}>Personal qualities and pedigree</h3>
        <p>
          Search fund investing is fundamentally a bet on a person. Investors
          back searchers, not businesses (at the search capital stage, there is
          no business yet). As a result, your personal qualities carry
          enormous weight. Most institutional search fund investors have
          converged on a common profile: a strong MBA (top 15 program), 3-7
          years of pre-MBA work experience in consulting, finance, or
          operations, and demonstrable leadership ability. But pedigree alone
          is not enough. Investors also assess softer qualities.
        </p>
        <ul className={ulClass}>
          <li><strong>Leadership qualities:</strong> Humility, resilience, intellectual curiosity, and the ability to build trust with sellers and employees.</li>
          <li><strong>Relevant experience:</strong> Prior operating, consulting, or industry experience that will help you evaluate and run a business.</li>
          <li><strong>Clear thesis:</strong> A well-defined search strategy with realistic criteria and a credible value creation plan.</li>
          <li><strong>Coachability:</strong> Willingness to listen to experienced board members and adapt your approach based on their guidance.</li>
          <li><strong>Personal grit:</strong> The search process is long, lonely, and filled with rejection. Investors want to see evidence that you can push through adversity — whether from your professional career, athletics, military service, or personal history.</li>
          <li><strong>Market thesis:</strong> Do you have a thoughtful perspective on which industries and geographies offer the best acquisition opportunities? Investors appreciate a searcher who has done their homework on market dynamics, fragmentation, and secular tailwinds.</li>
        </ul>

        <h3 className={h3Class}>Red flags for investors</h3>
        <p>
          Experienced search fund investors also watch for warning signs that
          may indicate a searcher is not the right fit. These include an
          inability to articulate why ETA over other career paths, unrealistic
          expectations about deal flow or timelines, a rigid search thesis
          that leaves no room for adaptation, lack of spouse or family buy-in
          for the lifestyle change, and an overly transactional approach to
          the investor relationship. Being aware of these red flags will help
          you avoid triggering them in your own fundraising conversations.
        </p>

        <h2 className={h2Class}>Maintaining investor relationships during the search</h2>
        <p>
          Closing your search capital is just the beginning of the investor
          relationship. How you manage communication and engagement during
          the search phase will determine whether your investors become
          enthusiastic backers at acquisition or passive bystanders.
        </p>

        <h3 className={h3Class}>Monthly investor updates</h3>
        <p>
          Send a concise monthly update to all investors. Include the number
          of deals reviewed, deals in active discussion, industry trends you
          are observing, and any learnings from proprietary or intermediated
          deal flow. Keep the tone honest and transparent — investors respect
          candor about slow periods and deal failures far more than false
          optimism. A well-written monthly update also keeps you top of mind,
          which matters when investors are considering whether to back another
          searcher in your target geography or sector.
        </p>

        <h3 className={h3Class}>Leverage your board</h3>
        <p>
          Your investor board is not just a governance requirement — it is a
          strategic asset. Schedule regular calls with individual board members
          to discuss specific deals, seek introductions to industry contacts,
          and pressure-test your search thesis. The most successful searchers
          treat their board as a think tank, not a reporting obligation.
          Investors who feel engaged and valued are far more likely to invest
          their full pro-rata at acquisition and even bring co-investors to
          the table.
        </p>

        <h3 className={h3Class}>Handling the &ldquo;dry spell&rdquo;</h3>
        <p>
          Almost every searcher goes through a period of 3-6 months with no
          compelling deals. This is normal. Communicate proactively with your
          investors during these periods. Explain what you are doing
          differently — refining your thesis, expanding geography, adding new
          deal channels — rather than going silent. Investors who have backed
          many searchers understand that the search process is nonlinear, and
          they will be supportive as long as they see that you are putting in
          the work and maintaining intellectual honesty about your progress.
        </p>

        <h3 className={h3Class}>Preparing for acquisition capital</h3>
        <p>
          As you move into the later stages of the search, begin socializing
          potential deals with your investors well before you sign a <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">Letter of Intent</Link>. Share your preliminary analysis, highlight the strengths and
          risks, and gauge investor appetite for the acquisition capital raise.
          This early engagement ensures that when you do find the right deal,
          your investors are already familiar with the opportunity and can
          make quick commitments — a critical advantage in competitive
          situations where seller timelines are tight.
        </p>

        {/* ------------------------------------------------------------------ */}
        <h2 className={h2Class}>Frequently Asked Questions</h2>

        <h3 className={h3Class}>
          How much should I expect to raise in search capital?
        </h3>
        <p>
          Traditional search funds typically raise $400,000 to $600,000 in
          search capital from 15 to 20 investors. The amount varies based on
          geography, cost of living, and expected search duration. US-based
          searchers in high-cost cities tend toward the higher end; European
          searchers may raise less due to lower operating costs. The capital
          covers 18 to 24 months of salary, travel, professional fees, and deal
          expenses.
        </p>

        <h3 className={h3Class}>
          Should I approach institutional investors or individuals first?
        </h3>
        <p>
          Start with institutional search fund investors and well-known
          ex-searchers. Their early commitments provide credibility and signal
          quality to later prospects. Institutional investors also move faster —
          they understand the model and can make decisions in two to three weeks.
          Once you have two or three institutional commitments, approaching
          individual investors and family offices becomes significantly easier
          because of the social proof.
        </p>

        <h3 className={h3Class}>
          What happens if I cannot raise enough search capital?
        </h3>
        <p>
          If you cannot close your target raise after 12 to 16 weeks of active
          fundraising, consider alternatives: reduce the target amount and
          shorten the search timeline, pivot to a <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">self-funded search</Link> model,
          find a co-searcher to strengthen the pitch, or revisit your thesis
          based on investor feedback. The key is to diagnose whether the issue
          is pipeline (not enough meetings), pitch (not converting meetings to
          commitments), or thesis (investors do not find the opportunity
          compelling).
        </p>
      </div>
    </article>
  );
}
