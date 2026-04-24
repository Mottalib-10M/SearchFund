import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function SearchFundConferencesArticle() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <h1 className={h1Class}>
        Search Fund Conferences & Events: The Complete Calendar
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        A thorough guide to the most valuable conferences, events, and networking opportunities in the entrepreneurship through acquisition ecosystem.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
        <p className={bodyClass}>
          <strong>Read time:</strong> 9 min read
        </p>
        <p className={bodyClass}>
          The ETA community thrives on in-person connections. From Stanford's flagship conference to regional meetups, these events offer deal flow, investor relationships, and peer support that can make or break your search. This guide covers every major conference, regional event, and networking opportunity you need to know about.
        </p>
      </div>

      <h2 className={h2Class}>Why ETA Events Matter for Your Search</h2>

      <p className={bodyClass}>
        Unlike traditional networking events, search fund conferences serve multiple critical functions simultaneously. They're where deals get sourced, investors commit capital, and searchers find mentors who will guide them through acquisition and operation.
      </p>

      <p className={bodyClass}>
        The value proposition is straightforward: the ETA community is remarkably concentrated. A single conference can put you in front of 60% of active{" "}
        <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
          search fund investors
        </Link>, hundreds of fellow searchers at various stages, and brokers with off-market deal flow. The density of relevant connections per hour is unmatched by any other networking format.
      </p>

      <p className={bodyClass}>
        For searchers in the <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">pre-search phase</Link>, these events provide reality checks that no book or article can offer. You'll learn what investors actually fund (versus what they say they fund), which search strategies are working in the current market, and whether you're ready to commit two to three years of your life to this path.
      </p>

      <p className={bodyClass}>
        Active searchers use conferences for deal flow and investor updates. Many brokers attend specifically to meet searchers, and it's common for attendees to hear about off-market opportunities during coffee breaks. The structured networking sessions and evening receptions are where relationships that lead to closed deals often begin.
      </p>

      <p className={bodyClass}>
        Post-acquisition, conferences become about operator peer groups and strategic discussions. Running a small company can be isolating, and connecting with other searcher-CEOs facing similar challenges &mdash; from hiring their first CFO to implementing{" "}
        <Link href="/learn/erp-implementation-post-acquisition" className="text-apple-accent hover:underline">
          ERP systems
        </Link>{" "}&mdash; provides invaluable support and pattern recognition.
      </p>

      <h2 className={h2Class}>The Big Three: Stanford, IESE, MIT</h2>

      <p className={bodyClass}>
        Three institutions have established themselves as the anchor events in the search fund calendar. Each has distinct characteristics, attendee profiles, and strategic value.
      </p>

      <h3 className={h3Class}>Stanford Search Fund Conference</h3>

      <p className={bodyClass}>
        Held annually in February at Stanford Graduate School of Business, this is the flagship event in the search fund world. The conference typically attracts 500+ attendees, including the highest concentration of active search fund investors anywhere in the world.
      </p>

      <p className={bodyClass}>
        The format includes keynote presentations from successful searchers, panel discussions on current market conditions, breakout sessions on specific topics (due diligence, fundraising, operations), and extensive networking time. The investor-to-searcher ratio is notably high, making this the premier fundraising venue.
      </p>

      <p className={bodyClass}>
        Registration typically opens in December and sells out within weeks. Early-bird pricing is around $500-600 for searchers, with higher rates for investors and service providers. Students receive significant discounts. The Stanford conference is worth prioritizing even if you can only attend one event per year.
      </p>

      <p className={bodyClass}>
        Pro tip: Book accommodation in Palo Alto or nearby areas immediately upon registration. Hotels fill up quickly, and prices increase as the conference approaches. Many attendees stay at the on-campus guest house if available.
      </p>

      <h3 className={h3Class}>IESE Search Fund Conference (Barcelona)</h3>

      <p className={bodyClass}>
        IESE Business School in Barcelona hosts the European anchor conference, typically in May or June. This event has grown substantially over the past decade as the European search fund market has matured.
      </p>

      <p className={bodyClass}>
        The IESE conference attracts 300-400 attendees with a strong European investor base, though US investors with international portfolios also attend. The format is similar to Stanford - panels, case studies, networking sessions - but with greater emphasis on cross-border deals and European regulatory environments.
      </p>

      <p className={bodyClass}>
        For searchers targeting European deals or seeking European investors, this conference is essential. It's also valuable for US-based searchers interested in understanding how the model adapts to different markets. Registration is typically €400-500 for searchers.
      </p>

      <p className={bodyClass}>
        The Barcelona location is a draw - many attendees extend their trips to explore the city or combine attendance with business development travel elsewhere in Europe. The networking atmosphere tends to be slightly more relaxed than Stanford while maintaining high professional value.
      </p>

      <h3 className={h3Class}>MIT Entrepreneurship Conference</h3>

      <p className={bodyClass}>
        While broader than search funds alone, MIT's annual conference (typically in March) includes significant ETA content and attracts many search fund investors and searchers. The conference covers entrepreneurship, innovation, and small business acquisition strategies.
      </p>

      <p className={bodyClass}>
        The value here is in the diversity of perspectives - you'll interact with traditional entrepreneurs, innovation-focused investors, and acquisition entrepreneurs. This cross-pollination of ideas often sparks creative approaches to search and operations.
      </p>

      <p className={bodyClass}>
        Registration is typically $300-400, and the MIT location in Cambridge provides easy access to the Boston investor community. Many attendees schedule investor meetings in the days before or after the conference.
      </p>

      <h2 className={h2Class}>US Conferences and Events</h2>

      <h3 className={h3Class}>Pacific Northwest Search Fund Conference</h3>

      <p className={bodyClass}>
        Hosted by University of Washington in Seattle (typically September), this regional conference has grown significantly and now attracts 150-200 attendees. The focus is on Pacific Northwest deals and investors, but the content and networking are valuable regardless of your search geography.
      </p>

      <p className={bodyClass}>
        The conference excels at practical, tactical content - less theory, more "here's how I actually closed my deal" presentations. It's particularly strong on operational topics for searchers who have already acquired companies.
      </p>

      <h3 className={h3Class}>University of Chicago Search Fund Symposium</h3>

      <p className={bodyClass}>
        Chicago Booth hosts an annual symposium (typically November) with strong Midwest representation. This event is particularly valuable for searchers targeting manufacturing and industrial businesses, which are abundant in the Midwest.
      </p>

      <p className={bodyClass}>
        The symposium tends to attract more operators and fewer pure financial investors compared to Stanford, creating a different networking dynamic that many searchers find valuable for building advisory relationships.
      </p>

      <h3 className={h3Class}>Harvard Business School ETA Conference</h3>

      <p className={bodyClass}>
        HBS hosts an annual conference focused on acquisition entrepreneurship (typically April). While not exclusively search funds, the attendee quality is exceptional - many successful searchers, sophisticated investors, and high-quality service providers.
      </p>

      <p className={bodyClass}>
        The HBS network effect is real. Many attendees are HBS alumni, creating a built-in trust factor that can accelerate relationship development. For HBS grads pursuing search funds, this is obviously essential, but it's valuable for all searchers given the quality of connections.
      </p>

      <h3 className={h3Class}>Acquisition Lab Conference</h3>

      <p className={bodyClass}>
        A newer entrant focused specifically on the intersection of search funds and self-funded searches. This conference (typically October) attracts both traditional search fund practitioners and solo searchers using personal capital or SBA financing.
      </p>

      <p className={bodyClass}>
        The value is in the practical, tactical focus - detailed sessions on financing structures, negotiation tactics, and operational playbooks. It's particularly useful for searchers considering <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">self-funded search strategies</Link>.
      </p>

      <h2 className={h2Class}>European Conferences and Events</h2>

      <h3 className={h3Class}>IESE Barcelona Conference</h3>

      <p className={bodyClass}>
        As mentioned above, this is the European flagship event. Beyond the main conference, IESE also hosts smaller roundtables and dinners throughout the year in various European cities, particularly Madrid and Barcelona.
      </p>

      <h3 className={h3Class}>INSEAD Search Fund Forum (France/Singapore)</h3>

      <p className={bodyClass}>
        INSEAD hosts search fund events at both its Fontainebleau (France) and Singapore campuses. The European event (typically March) attracts French, German, and UK investors and searchers.
      </p>

      <p className={bodyClass}>
        The INSEAD events are smaller (100-150 attendees) but very high quality. The intimate format facilitates deeper conversations and relationship building compared to larger conferences.
      </p>

      <h3 className={h3Class}>London Search Fund Summit</h3>

      <p className={bodyClass}>
        An annual event (typically October) hosted by various institutions in London's financial district. This conference has grown to 200+ attendees and serves as a key venue for UK and broader European deal flow.
      </p>

      <p className={bodyClass}>
        The London event particularly excels at connecting searchers with UK-based private equity investors who are increasingly interested in the search fund model as a way to access smaller deals with aligned operators.
      </p>

      <h3 className={h3Class}>German ETA Roundtable</h3>

      <p className={bodyClass}>
        Hosted in Munich or Frankfurt (rotating annually), this smaller event (50-75 attendees) focuses specifically on the German Mittelstand opportunity. For searchers targeting German-speaking markets, this is essential.
      </p>

      <p className={bodyClass}>
        The roundtable format encourages open discussion of challenges specific to German business culture, labor laws, and acquisition structures. Attendees tend to be very engaged and willing to share detailed experiences.
      </p>

      <h3 className={h3Class}>Nordic Search Fund Gathering</h3>

      <p className={bodyClass}>
        A newer event (launched 2021) rotating between Stockholm, Copenhagen, and Oslo. The Nordic markets have unique characteristics - high business quality, strong governance, but also high valuations and complexity.
      </p>

      <p className={bodyClass}>
        This event is particularly valuable for understanding how to manage Nordic business culture and regulatory environments. Attendees include several successful Nordic searchers who have become informal mentors to newer searchers in the region.
      </p>

      <h2 className={h2Class}>Latin American ETA Events</h2>

      <p className={bodyClass}>
        The search fund model has gained significant traction in Latin America over the past five years, leading to new conferences and events serving this growing community.
      </p>

      <h3 className={h3Class}>Latin American Search Fund Conference (LASFC)</h3>

      <p className={bodyClass}>
        Rotating between Mexico City, São Paulo, and Bogotá, LASFC has become the anchor event for Latin American searchers and investors. The conference typically attracts 150-200 attendees and features content in both Spanish and English.
      </p>

      <p className={bodyClass}>
        LASFC is particularly strong on topics specific to Latin American searches: currency risk management, cross-border structures, managing corruption risk, and building management teams in markets with different talent dynamics.
      </p>

      <h3 className={h3Class}>Brazil ETA Summit</h3>

      <p className={bodyClass}>
        Held in São Paulo (typically August), this event focuses specifically on the massive Brazilian market. With 200+ million people and a fragmented SMB market, Brazil represents significant opportunity for searchers who understand the market.
      </p>

      <p className={bodyClass}>
        The summit attracts Brazilian investors, US investors with Latin American portfolios, and searchers from across the region. Content is delivered in Portuguese and English.
      </p>

      <h3 className={h3Class}>Mexico City Search Fund Meetup</h3>

      <p className={bodyClass}>
        A quarterly informal gathering of searchers, investors, and advisors in Mexico City. While not a formal conference, these meetups have become important networking venues for the Mexican ETA community.
      </p>

      <h2 className={h2Class}>Virtual Events and Webinars</h2>

      <p className={bodyClass}>
        The pandemic accelerated adoption of virtual events, and several have proven valuable enough to become permanent fixtures in the ETA calendar.
      </p>

      <h3 className={h3Class}>Stanford Search Fund Webinar Series</h3>

      <p className={bodyClass}>
        Stanford hosts quarterly webinars featuring successful searchers, investors, and service providers. These are free to attend and provide high-quality content without travel costs.
      </p>

      <p className={bodyClass}>
        Past topics include fundraising in difficult markets, operational improvements in the first year post-acquisition, and managing add-on acquisitions. Recordings are typically available on Stanford's website.
      </p>

      <h3 className={h3Class}>Search Funder Monthly Calls</h3>

      <p className={bodyClass}>
        A community-organized monthly video call (typically first Wednesday of each month) where searchers share updates, discuss challenges, and collectively problem-solve. Participation ranges from 20-50 searchers depending on the topic.
      </p>

      <p className={bodyClass}>
        These calls are particularly valuable for searchers in less common geographies or industries who benefit from connecting with others facing similar challenges. The informal format encourages candid discussion.
      </p>

      <h3 className={h3Class}>Investor Office Hours</h3>

      <p className={bodyClass}>
        Several prominent search fund investors host monthly virtual office hours where searchers can ask questions about fundraising, deal evaluation, or search strategy. These sessions are typically announced via email lists or LinkedIn.
      </p>

      <h2 className={h2Class}>ETA Meetups and Local Networks</h2>

      <p className={bodyClass}>
        Beyond formal conferences, local searcher communities have emerged in major cities. These informal networks provide ongoing support and deal flow between conferences.
      </p>

      <h3 className={h3Class}>San Francisco Bay Area Search Fund Dinners</h3>

      <p className={bodyClass}>
        Monthly dinners (typically last Thursday) rotating between San Francisco, Palo Alto, and San Jose. These gatherings attract 15-25 searchers plus occasional investors and service providers.
      </p>

      <p className={bodyClass}>
        The format is simple: dinner at a restaurant, informal updates around the table, and open discussion of current challenges. Many searchers credit these dinners with providing critical support during difficult phases of their searches.
      </p>

      <h3 className={h3Class}>New York Search Fund Breakfast Club</h3>

      <p className={bodyClass}>
        Quarterly breakfast meetings in Manhattan bringing together 20-30 searchers, investors, and advisors. The concentration of financial services expertise in New York makes these events particularly valuable for discussing deal structures and financing.
      </p>

      <h3 className={h3Class}>Chicago Searcher Roundtable</h3>

      <p className={bodyClass}>
        Bi-monthly informal gatherings at rotating locations. Chicago's strong industrial base and Midwest business culture create unique opportunities and challenges that this group addresses.
      </p>

      <h3 className={h3Class}>Los Angeles ETA Network</h3>

      <p className={bodyClass}>
        A newer network (launched 2022) meeting quarterly. LA's entertainment, technology, and consumer services businesses represent interesting search opportunities that benefit from local knowledge sharing.
      </p>

      <h3 className={h3Class}>Boston/Cambridge Search Community</h3>

      <p className={bodyClass}>
        Given the concentration of business schools and investors in the Boston area, the local search community is particularly active. Monthly coffees and quarterly evening events keep the network engaged.
      </p>

      <h2 className={h2Class}>Making the Most of Conference Attendance</h2>

      <p className={bodyClass}>
        Attending a conference is the easy part. Extracting maximum value requires preparation and strategy.
      </p>

      <p className={bodyClass}>
        <strong>Before the conference:</strong> Review the attendee list if provided. Identify 10-15 specific people you want to meet - investors whose thesis matches your search, searchers in your target industry, successful searcher-CEOs who might become mentors. Email them two weeks before to schedule coffee or breakfast meetings.
      </p>

      <p className={bodyClass}>
        Prepare your elevator pitch and have it down cold. You should be able to articulate your background, search focus, and current status in 60 seconds. Practice until it feels natural, not rehearsed.
      </p>

      <p className={bodyClass}>
        Set specific goals. "Network" is not a goal. "Schedule follow-up calls with three potential investors" is a goal. "Learn how two successful searchers structured their first add-on acquisition" is a goal. Write down 3-5 specific outcomes you want from the conference.
      </p>

      <p className={bodyClass}>
        <strong>During the conference:</strong> Attend the keynotes and panels, but recognize that the real value is in the hallway conversations and coffee breaks. Don't be the person on their laptop during breaks - that's prime networking time.
      </p>

      <p className={bodyClass}>
        Take strategic notes. Don't try to transcribe everything; capture key insights, interesting frameworks, and specific names of people you want to follow up with. Many searchers use voice memos during breaks to capture thoughts while fresh.
      </p>

      <p className={bodyClass}>
        Be generous with introductions. If you meet an investor looking for healthcare deals and you know another searcher focused on healthcare, make the introduction. The search fund community operates on reciprocity - the help you provide will return to you.
      </p>

      <p className={bodyClass}>
        <strong>After the conference:</strong> Follow up within 48 hours while you're still fresh in people's minds. Send personalized emails referencing specific conversation points. Generic "nice to meet you" emails get ignored.
      </p>

      <p className={bodyClass}>
        Schedule the follow-up calls immediately. Don't leave it vague - propose specific times. Calendar invites are your friend.
      </p>

      <p className={bodyClass}>
        Share valuable insights with people who couldn't attend. Write a brief summary of key learnings and send it to your investor group or fellow searchers. This demonstrates thoughtfulness and keeps you top of mind.
      </p>

      <h2 className={h2Class}>Networking Tips for First-Timers</h2>

      <p className={bodyClass}>
        Your first search fund conference can be intimidating. Everyone seems to know each other, conversations reference shared history you're not part of, and the pace can feel overwhelming.
      </p>

      <p className={bodyClass}>
        First, recognize that everyone was new once. The search fund community is remarkably welcoming to newcomers who demonstrate genuine interest and preparation. People want to help - they remember being in your position.
      </p>

      <p className={bodyClass}>
        Start conversations with specific questions rather than generic openers. "What's your search focus?" is fine but forgettable. "I noticed you're searching in B2B services - I'm trying to understand how you evaluate customer concentration risk in that sector" shows preparation and invites substantive discussion.
      </p>

      <p className={bodyClass}>
        Volunteer to help with conference logistics if you're very new. Many conferences need volunteers for registration, room setup, or coordination. This gives you an official role, makes it easier to meet people, and demonstrates community commitment.
      </p>

      <p className={bodyClass}>
        Attend the social events even if you're introverted. The dinners, cocktail receptions, and informal gatherings are where relationships deepen. You can skip a panel and watch the recording later; you can't replicate the serendipity of evening conversations.
      </p>

      <p className={bodyClass}>
        Find a conference buddy - another first-timer or someone you've connected with online. Having one person you know makes it easier to approach groups and manage social situations.
      </p>

      <p className={bodyClass}>
        Don't monopolize people's time. If you're talking to an investor and others are clearly waiting to speak with them, wrap up gracefully and propose a follow-up call. Awareness of others' time demonstrates professionalism.
      </p>

      <p className={bodyClass}>
        Bring physical business cards. Yes, it's old-fashioned. Yes, everyone has LinkedIn. But exchanging cards remains an effective way to ensure follow-up, and many experienced investors and searchers still prefer them.
      </p>

      <h2 className={h2Class}>Annual Calendar: Month-by-Month Guide</h2>

      <p className={bodyClass}>
        Understanding the annual rhythm of search fund events helps you plan your year strategically and budget for travel and registration costs.
      </p>

      <h3 className={h3Class}>January</h3>
      <p className={bodyClass}>
        Typically quieter for conferences. Use this time to prepare for February's Stanford conference. Many investor office hours and webinars resume after the holiday break.
      </p>

      <h3 className={h3Class}>February</h3>
      <p className={bodyClass}>
        <strong>Stanford Search Fund Conference</strong> (major event). Plan to spend 3-4 days in the Bay Area to maximize investor meetings before and after. Many local searcher dinners and gatherings happen this week.
      </p>

      <h3 className={h3Class}>March</h3>
      <p className={bodyClass}>
        <strong>MIT Entrepreneurship Conference.</strong> INSEAD France event. Several regional meetups resume after winter. Good time for European searchers to plan IESE attendance.
      </p>

      <h3 className={h3Class}>April</h3>
      <p className={bodyClass}>
        <strong>Harvard Business School ETA Conference.</strong> Various regional meetups. Weather improves, making local gatherings more frequent.
      </p>

      <h3 className={h3Class}>May</h3>
      <p className={bodyClass}>
        <strong>IESE Search Fund Conference in Barcelona</strong> (major event for European searchers). Many US searchers with international interests attend. Plan for a full week if combining with European investor meetings.
      </p>

      <h3 className={h3Class}>June</h3>
      <p className={bodyClass}>
        Conference season slows as summer begins. Good time for focused search work. Some regional meetups continue.
      </p>

      <h3 className={h3Class}>July-August</h3>
      <p className={bodyClass}>
        Summer slowdown in North America and Europe. <strong>Brazil ETA Summit</strong> typically occurs in August. Virtual events continue. Many searchers use this time for intensive deal work.
      </p>

      <h3 className={h3Class}>September</h3>
      <p className={bodyClass}>
        <strong>Pacific Northwest Search Fund Conference</strong> in Seattle. Conference season resumes. Regional meetups restart with renewed energy.
      </p>

      <h3 className={h3Class}>October</h3>
      <p className={bodyClass}>
        <strong>London Search Fund Summit.</strong> <strong>Acquisition Lab Conference.</strong> Very active month for events. Many searchers attend multiple events.
      </p>

      <h3 className={h3Class}>November</h3>
      <p className={bodyClass}>
        <strong>University of Chicago Search Fund Symposium.</strong> Latin American Search Fund Conference (rotating location). Last major conference push before year-end.
      </p>

      <h3 className={h3Class}>December</h3>
      <p className={bodyClass}>
        Holiday slowdown. Year-end investor updates and planning. Stanford conference registration typically opens mid-month for February event.
      </p>

      <p className={bodyClass}>
        Budget for 2-3 major conferences annually plus local events. A typical budget might be: Stanford (essential), one regional or industry-specific conference, one European conference if relevant to your search, plus quarterly local meetups. Total annual cost including travel: $5,000-8,000. Factor this into your{" "}
        <Link href="/learn/financial-runway-planning" className="text-apple-accent hover:underline">
          financial runway planning
        </Link>.
      </p>

      <h2 className={h2Class}>Frequently Asked Questions</h2>

      <h3 className={h3Class}>What are the most important search fund conferences to attend?</h3>
      <p className={bodyClass}>
        The three flagship ETA conferences are the Stanford Search Fund
        Conference (February, Palo Alto), the IESE International Search Fund
        Conference (May/June, Barcelona), and the MIT Entrepreneurship
        Conference (March, Cambridge). If you can only attend one event per
        year, prioritize Stanford for its unmatched investor density.
      </p>

      <h3 className={h3Class}>How much does it cost to attend ETA conferences?</h3>
      <p className={bodyClass}>
        Registration fees range from $300&ndash;$600 per conference for
        searchers, with student discounts often available. When you factor in
        travel, accommodation, and meals, budget $1,500&ndash;$2,500 per
        conference or $5,000&ndash;$8,000 annually for 2&ndash;3 major events
        plus local meetups. Consider this a high-ROI investment &mdash; many
        searchers trace their investor commitments and deal flow directly to
        conference connections.
      </p>

      <h3 className={h3Class}>How should a first-time attendee prepare for a search fund conference?</h3>
      <p className={bodyClass}>
        Review the attendee list and identify 10&ndash;15 specific people you
        want to meet. Prepare a 60-second elevator pitch covering your
        background, search focus, and current status. Set concrete goals
        (e.g., &ldquo;schedule follow-up calls with three investors&rdquo;).
        Attend social events even if you are introverted &mdash; the dinners
        and receptions are where the deepest relationships form. Follow up
        within 48 hours with personalized emails referencing specific
        conversation points.
      </p>

      <h2 className={h2Class}>Sources</h2>

      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business, Center for Entrepreneurial Studies - {" "}
          <a
            href="https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Search Fund Conference Information
          </a>
        </li>
        <li>
          IESE Business School - {" "}
          <a
            href="https://www.iese.edu/entrepreneurship/search-funds/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            European Search Fund Conference
          </a>
        </li>
        <li>
          Search Fund Accelerator - {" "}
          <a
            href="https://www.searchfundaccelerator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Conference Calendar and Resources
          </a>
        </li>
        <li>
          MIT Entrepreneurship & Innovation - {" "}
          <a
            href="https://entrepreneurship.mit.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Annual Conference Details
          </a>
        </li>
        <li>
          Harvard Business School - {" "}
          <a
            href="https://www.hbs.edu/entrepreneurship/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Entrepreneurship Through Acquisition Resources
          </a>
        </li>
        <li>
          Search Funder Community - {" "}
          <a
            href="https://www.searchfunder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Community Events and Meetups
          </a>
        </li>
        <li>
          University of Washington Build School of Business - {" "}
          <a
            href="https://build.uw.edu/centers/buerk-center/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Pacific Northwest Search Fund Conference
          </a>
        </li>
        <li>
          Chicago Booth - {" "}
          <a
            href="https://polsky.uchicago.edu/tag/search-funds/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-accent hover:underline"
          >
            Search Fund Symposium Information
          </a>
        </li>
      </ul>

      <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className={bodyClass}>
          <strong>Related articles:</strong>
        </p>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              Finding and Pitching Search Fund Investors
            </Link>
          </li>
          <li>
            <Link href="/learn/fundraising-deck" className="text-apple-accent hover:underline">
              Building Your Search Fund Pitch Deck
            </Link>
          </li>
          <li>
            <Link href="/learn/pre-search-preparation" className="text-apple-accent hover:underline">
              Pre-Search Preparation: What to Do Before You Start
            </Link>
          </li>
          <li>
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              Building and Managing Your Advisory Board
            </Link>
          </li>
          <li>
            <Link href="/learn/searcher-tools" className="text-apple-accent hover:underline">
              Essential Tools and Resources for Searchers
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};
