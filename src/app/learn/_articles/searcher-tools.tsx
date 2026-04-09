import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearcherToolsArticle() {
  return (
    <article>
      <h1 className={h1Class}>Tools &amp; Technology for Search Fund Entrepreneurs</h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Running an effective search requires more than grit and a good
          thesis — it requires the right technology stack. The tools you choose
          for deal sourcing, pipeline management, financial modeling, investor
          communication, and legal documentation will directly impact your
          efficiency and ultimately your probability of closing a deal.
        </p>

        <h2 className={h2Class}>CRM and deal pipeline management</h2>
        <p>
          A CRM is the nerve center of your search. You&apos;ll interact with
          hundreds of brokers, sellers, advisors, and investors over 18-24 months,
          and without a structured system, critical follow-ups will slip through
          the cracks.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>HubSpot CRM (free tier):</strong> Robust free CRM with email
            tracking, custom deal stages (Sourced, NDA Signed, CIM Reviewed, LOI
            Submitted, Diligence, Closed), and task reminders. Create two
            pipelines — one for deals, one for investors. Upgrade to Starter
            ($20/month) for automation
          </li>
          <li>
            <strong>Pipedrive ($14.90/month):</strong> Simpler, visual kanban
            pipeline. Superior mobile app for updating deals between seller
            meetings
          </li>
          <li>
            <strong>Affinity ($2,000/year):</strong> Automatically tracks email
            and calendar interactions, building relationship maps. Expensive for
            solo searchers, but powerful if relationship management is a bottleneck
          </li>
        </ul>

        <h2 className={h2Class}>Financial modeling and analysis</h2>
        <p>
          Financial modeling is at the heart of deal evaluation. You need tools
          that let you build, iterate, and share models quickly and accurately.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Microsoft Excel / Google Sheets:</strong> The gold standard for
            search fund models. Must-haves include an LBO model with debt schedules,
            quality of earnings template, comparable company analysis, and a returns
            waterfall showing investor and searcher economics. Stanford GSB and IESE
            share standardized templates
          </li>
          <li>
            <strong>Visible.vc ($150/month):</strong> Branded investor update
            emails, KPI dashboards, and engagement tracking. Many searchers adopt
            this post-acquisition for structured investor communications
          </li>
        </ul>

        <h2 className={h2Class}>Legal and document management</h2>
        <p>
          A search generates enormous volumes of legal documents — NDAs, LOIs,
          purchase agreements, and closing documents. Organization prevents
          costly errors and speeds up due diligence.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>DocuSign / HelloSign:</strong> Electronic signatures for NDAs
            and LOIs. Create templates so you can send a signed NDA in under two
            minutes — speed matters when brokers send deals. DocuSign starts at
            $10/month; HelloSign at $15/month
          </li>
          <li>
            <strong>Google Drive / Dropbox:</strong> Organize due diligence
            documents with top-level folders per target company and subfolders for
            Financial Statements, Tax Returns, Customer Data, Contracts, and
            Employee Information. Consistent naming conventions save hours
          </li>
          <li>
            <strong>Carta ($3,000/year):</strong> Cap table management
            post-acquisition — tracks equity ownership, vesting schedules, and
            option pools. Set up during acquisition structuring, not the search
          </li>
        </ul>

        <h2 className={h2Class}>AI tools for search efficiency</h2>
        <p>
          AI has become an increasingly powerful complement to the search process.
          It cannot replace judgment and relationship skills, but it dramatically
          accelerates research, analysis, and communication.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Industry research:</strong> Use ChatGPT or Claude to generate
            overviews of unfamiliar industries — market size, growth trends, key
            players, regulatory landscape, and common business models
          </li>
          <li>
            <strong>Market sizing:</strong> Build bottom-up market size estimates,
            identify TAM/SAM/SOM frameworks, and sanity-check investment thesis
            assumptions
          </li>
          <li>
            <strong>Email drafting:</strong> Generate initial outreach emails to
            brokers and sellers, then customize. Especially valuable for proprietary
            campaigns involving hundreds of personalized letters
          </li>
          <li>
            <strong>Due diligence support:</strong> Summarize lengthy contracts,
            identify key risk provisions, and generate industry-specific diligence
            question lists
          </li>
          <li>
            <strong>Caveat:</strong> Never rely on AI for financial figures or legal
            interpretations without independent verification. AI is a research
            accelerator, not an advisor
          </li>
        </ul>

        <h2 className={h2Class}>Deal sourcing platforms</h2>
        <p>
          Finding acquisition targets is the core search activity. These platforms
          are where deal flow originates.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>SearchFundMarket.com:</strong> Purpose-built for the search fund
            community — connects searchers with acquisition opportunities and
            investors who understand the ETA model
          </li>
          <li>
            <strong>BizBuySell:</strong> The largest online marketplace for
            businesses for sale. Useful for research, but most listings are under
            $1M EBITDA
          </li>
          <li>
            <strong>Axial:</strong> Curated deal network for the lower middle
            market. Higher quality, with deals typically in the $1M-$25M EBITDA
            range
          </li>
          <li>
            <strong>DealNexus / Dealsuite:</strong> Particularly strong in Europe
            and for cross-border transactions
          </li>
          <li>
            <strong>LinkedIn Sales Navigator ($99/month):</strong> Identify business
            owners by industry, company size, geography, and job title. Target
            owners aged 55+ in fragmented industries — the most likely search fund
            sellers
          </li>
        </ul>

        <h2 className={h2Class}>Communication and scheduling</h2>
        <ul className={ulClass}>
          <li>
            <strong>Calendly / Cal.com:</strong> Eliminate scheduling
            back-and-forth with booking links. Set up meeting types (15-min intro
            calls, 30-min broker meetings, 60-min deep dives)
          </li>
          <li>
            <strong>Zoom / Google Meet:</strong> Video conferencing for seller
            meetings and investor updates. Zoom&apos;s recording feature helps
            review key conversations (always get permission)
          </li>
          <li>
            <strong>Loom:</strong> Record short video investor updates instead of
            lengthy emails. A 5-minute Loom conveys more nuance than a 2-page
            written update
          </li>
        </ul>

        <h2 className={h2Class}>Research and competitive intelligence</h2>
        <ul className={ulClass}>
          <li>
            <strong>PitchBook:</strong> Private market transaction data, deal
            multiples, and investor profiles. Available through most MBA programs
          </li>
          <li>
            <strong>S&amp;P Capital IQ:</strong> Financial data and comparable
            company analysis. Available through MBA programs and some libraries
          </li>
          <li>
            <strong>IBISWorld:</strong> Industry reports with market size, growth
            forecasts, and operating benchmarks for thousands of industries
          </li>
        </ul>

        <h2 className={h2Class}>Recommended tech stack by search phase</h2>

        <h3 className={h3Class}>Phase 1: Pre-search preparation</h3>
        <ul className={ulClass}>
          <li>Google Drive (folder structure for research and templates)</li>
          <li>LinkedIn Sales Navigator (start building target lists)</li>
          <li>Financial model templates (Excel)</li>
          <li>NDA template in DocuSign</li>
        </ul>

        <h3 className={h3Class}>Phase 2: Active search</h3>
        <ul className={ulClass}>
          <li>HubSpot or Pipedrive CRM (deal pipeline tracking)</li>
          <li>SearchFundMarket.com, Axial, BizBuySell (deal sourcing)</li>
          <li>ChatGPT or Claude (industry research acceleration)</li>
          <li>Calendly (scheduling efficiency)</li>
        </ul>

        <h3 className={h3Class}>Phase 3: Diligence and closing</h3>
        <ul className={ulClass}>
          <li>Google Drive or Dropbox (virtual data room)</li>
          <li>DocuSign (legal document execution)</li>
          <li>Excel (detailed LBO modeling and QofE analysis)</li>
          <li>Carta (cap table setup)</li>
        </ul>

        <h3 className={h3Class}>Phase 4: Post-acquisition</h3>
        <ul className={ulClass}>
          <li>Visible.vc (investor updates and KPI tracking)</li>
          <li>Carta (ongoing equity management)</li>
          <li>QuickBooks or NetSuite (accounting)</li>
          <li>Monday.com or Asana (project management for operational
            improvements)</li>
        </ul>

        <h2 className={h2Class}>Final thoughts on technology</h2>
        <p>
          The best tools are the ones you actually use consistently. A simple
          Google Sheets tracker maintained daily is infinitely more valuable
          than a sophisticated CRM that&apos;s never updated. Start lean, add
          tools as genuine needs emerge, and always prioritize tools that save
          you time on administrative tasks so you can spend more time on the
          activities that actually close deals: building relationships with
          brokers, meeting sellers, and evaluating businesses.
        </p>
      </div>
    </article>
  );
}
