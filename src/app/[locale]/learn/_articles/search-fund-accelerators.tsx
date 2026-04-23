import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass } from "./shared-styles";

export default function SearchFundAcceleratorsArticle() {
  return (
    <article>
      <h1 className={h1Class}>
        Search Fund Accelerators &amp; Incubators: A Complete List
      </h1>
      <p className="text-sm text-apple-gray-500 mt-3">10 min read</p>

      <div className={bodyClass}>
        <p>
          Search fund accelerators provide mentorship, deal flow support,
          investor introductions, and operational resources to aspiring{" "}
          <Link href="/learn/what-is-eta" className="text-apple-accent hover:underline">
            ETA
          </Link>{" "}
          entrepreneurs. As the search fund ecosystem matures, these programs
          have become an increasingly popular launchpad &mdash; especially
          for first-time searchers without MBA pedigrees or existing investor
          networks.
        </p>

        <h2 className={h2Class}>What search fund accelerators offer</h2>
        <ul className={ulClass}>
          <li><strong>Structured curriculum:</strong> 8&ndash;16 week programs covering deal sourcing, valuation,{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>, financing, and{" "}
            <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
              negotiation
            </Link></li>
          <li><strong>Investor introductions:</strong> Access to pre-qualified search fund investors. Some accelerators directly invest in their cohort members</li>
          <li><strong>Mentor network:</strong> Pairing with experienced searchers and search fund CEOs who have been through the process</li>
          <li><strong>Deal flow support:</strong> Shared deal sourcing infrastructure, broker relationships, and proprietary databases</li>
          <li><strong>Peer cohort:</strong> 5&ndash;15 searchers going through the process simultaneously, creating accountability and knowledge sharing</li>
          <li><strong>Back-office support:</strong> Legal templates, financial modeling tools, CRM setups, and administrative infrastructure</li>
        </ul>

        <h2 className={h2Class}>Major accelerators &amp; programs</h2>

        <h3 className={h3Class}>US-based</h3>
        <ul className={ulClass}>
          <li><strong>Searcher (formerly ETA Program):</strong> One of the original ETA accelerators. Offers mentorship, investor introductions, and a structured search process. Based in the US</li>
          <li><strong>Trilogy Search Partners:</strong> Provides search capital, mentorship, and operational support. Focuses on traditional search fund formation</li>
          <li><strong>Pacific Lake Partners:</strong> Not a traditional accelerator but one of the most active search fund investors, offering significant mentorship and portfolio support to their searchers</li>
          <li><strong>MIT Sloan ETA program:</strong> Academic program that prepares MIT students for ETA, connected to a strong investor network</li>
          <li><strong>Stanford GSB CEL:</strong> The Center for Entrepreneurial Studies at Stanford runs the original search fund curriculum and connects students with the{" "}
            <Link href="/learn/search-fund-history" className="text-apple-accent hover:underline">
              40-year-old search fund network
            </Link></li>
        </ul>

        <h3 className={h3Class}>Europe-based</h3>
        <ul className={ulClass}>
          <li><strong>IESE ETA program:</strong> Barcelona-based program that has trained many{" "}
            <Link href="/learn/eta-spain" className="text-apple-accent hover:underline">
              European searchers
            </Link>. Strong network across Spain, France, and Latin America</li>
          <li><strong>INSEAD ETA club:</strong> Student-run organization connecting INSEAD graduates with ETA opportunities across Europe and globally</li>
          <li><strong>HEC Paris Search Fund Track:</strong> French-language program connected to the{" "}
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
              French ETA ecosystem
            </Link></li>
          <li><strong>Novastone Capital:</strong> European search fund investor that provides accelerator-like support (mentorship, deal flow, back-office) to their portfolio searchers</li>
        </ul>

        <h3 className={h3Class}>Latin America &amp; other regions</h3>
        <ul className={ulClass}>
          <li><strong>IGNIA/ALLVP:</strong> Latin American firms that have supported search fund formation in Mexico, Colombia, and Brazil</li>
          <li><strong>University of Toronto Rotman:</strong> Canadian program with growing ETA focus</li>
          <li><strong>Melbourne Business School:</strong> Emerging{" "}
            <Link href="/learn/eta-australia" className="text-apple-accent hover:underline">
              Australian
            </Link>{" "}
            ETA program</li>
        </ul>

        <h2 className={h2Class}>How to choose an accelerator</h2>
        <ul className={ulClass}>
          <li><strong>Investor access:</strong> Does the accelerator have direct relationships with active search fund investors? Will they introduce you or invest directly?</li>
          <li><strong>Track record:</strong> How many alumni have successfully completed acquisitions? What are their outcomes?</li>
          <li><strong>Geographic focus:</strong> If you plan to search in{" "}
            <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
              Europe
            </Link>, join a European program. US programs may not translate well to international contexts</li>
          <li><strong>Cost &amp; equity:</strong> Some programs are free, some charge fees ($5K&ndash;$25K), and some take equity (1&ndash;5% of your eventual deal). Understand the economics</li>
          <li><strong>Time commitment:</strong> Full-time (quit your job) vs. part-time (evenings/weekends). Match to your situation</li>
          <li><strong>Cohort quality:</strong> The peer network can be as valuable as the formal program. Ask about cohort selection criteria</li>
        </ul>

        <h2 className={h2Class}>Do you need an accelerator?</h2>
        <ul className={ulClass}>
          <li><strong>Strong fit if:</strong> First-time searcher, no MBA, limited investor network, benefit from structured accountability</li>
          <li><strong>Less necessary if:</strong> MBA from a target school (Stanford, HBS, Wharton), existing investor relationships, prior M&amp;A or operating experience</li>
          <li><strong>Alternative:</strong>{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
              Self-funded search
            </Link>{" "}
            lets you skip the investor/accelerator track entirely and use{" "}
            <Link href="/learn/sba-7a-loans-complete-guide" className="text-apple-accent hover:underline">
              SBA financing
            </Link>{" "}
            for the acquisition</li>
        </ul>

        <p>
          For the full ecosystem, see{" "}
          <Link href="/learn/eta-reading-list" className="text-apple-accent hover:underline">
            ETA reading list
          </Link>{" "}
          and{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            finding search fund investors
          </Link>.
        </p>
      </div>
    </article>
  );
}
