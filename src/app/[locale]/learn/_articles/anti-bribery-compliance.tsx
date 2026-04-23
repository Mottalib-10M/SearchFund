import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";
import Link from "next/link";

export default function AntiBriberyComplianceArticle() {
  return (
    <article>
      <h1 className={h1Class}>Anti-Bribery &amp; Anti-Corruption Compliance in M&amp;A</h1>
      <div className={bodyClass}>
        <p>Anti-bribery and anti-corruption (ABAC) compliance is a critical but frequently underestimated dimension of M&amp;A due diligence. When you acquire a business, you do not just inherit its assets and contracts &mdash; you inherit its compliance history, its regulatory exposure, and potentially its liability for past corrupt conduct. Under the legal doctrine of successor liability, the acquiring entity may be held responsible for bribery and corruption violations that occurred before the acquisition closed. The consequences are severe: criminal prosecution, multi-million-dollar fines, debarment from government contracts, and reputational damage that can destroy the value of the acquired business.</p>
        <p>This guide covers the major anti-bribery legal frameworks, how to identify corruption risk during <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">due diligence</Link>, the red flags that signal elevated risk, and how to build an effective compliance program post-acquisition.</p>
      </div>

      <h2 className={h2Class}>The US Foreign Corrupt Practices Act (FCPA)</h2>
      <div className={bodyClass}>
        <p>The Foreign Corrupt Practices Act, enacted in 1977, is the foundational US anti-bribery statute. The FCPA has two main components: the anti-bribery provisions and the accounting/books-and-records provisions. Together, they create a comprehensive framework that prohibits corrupt payments to foreign officials and requires companies to maintain accurate financial records and adequate internal controls.</p>

        <h3 className={h3Class}>Anti-bribery provisions</h3>
        <p>The FCPA&apos;s anti-bribery provisions make it unlawful for any US person, company, or issuer (or their agents) to offer, pay, promise, or authorize the payment of anything of value to a foreign government official for the purpose of obtaining or retaining business, or securing an improper advantage. The statute applies broadly: &ldquo;anything of value&rdquo; includes not just cash payments but also gifts, travel, entertainment, charitable donations, and employment opportunities for officials&apos; relatives. &ldquo;Foreign official&rdquo; encompasses employees of government-owned or government-controlled entities, including state-owned enterprises, sovereign wealth funds, and public universities &mdash; a much broader category than many acquirers realize.</p>

        <h3 className={h3Class}>Books-and-records provisions</h3>
        <p>The FCPA&apos;s accounting provisions require issuers (companies listed on US exchanges) to keep books, records, and accounts that accurately and fairly reflect their transactions, and to maintain a system of internal accounting controls sufficient to provide reasonable assurance that transactions are authorized and recorded properly. These provisions apply regardless of whether any bribery occurred &mdash; a company can violate the books-and-records provisions through sloppy accounting alone. For acquirers, this means that even if no bribery is found during due diligence, weak internal controls and inadequate record-keeping in the target company can create liability.</p>

        <h3 className={h3Class}>FCPA jurisdiction and extraterritorial reach</h3>
        <p>The FCPA&apos;s jurisdictional reach is remarkably broad. It applies to US companies and their worldwide subsidiaries, foreign companies listed on US stock exchanges, and any person (including foreign nationals) who takes any act in furtherance of a corrupt payment while within the territory of the United States. US enforcement authorities have interpreted &ldquo;within the territory&rdquo; expansively to include the use of US banking systems, email servers, and telecommunications networks. This means that virtually any international transaction with a US nexus can fall within the FCPA&apos;s reach, making it directly relevant to <Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">cross-border acquisitions</Link>.</p>
      </div>

      <h2 className={h2Class}>The UK Bribery Act 2010</h2>
      <div className={bodyClass}>
        <p>The UK Bribery Act is widely regarded as the most sweeping anti-bribery legislation in the world. It goes significantly beyond the FCPA in several important respects, and any acquirer doing business in or through the United Kingdom &mdash; or acquiring a UK company &mdash; must understand its requirements.</p>

        <h3 className={h3Class}>Key differences from the FCPA</h3>
        <ul className={ulClass}>
          <li><strong>No foreign official limitation:</strong> The Bribery Act prohibits bribery of any person, public or private. Commercial bribery (bribing a private business counterpart) is explicitly covered, while the FCPA focuses primarily on foreign government officials.</li>
          <li><strong>Strict liability offense:</strong> Section 7 of the Bribery Act creates a corporate offense of &ldquo;failure to prevent bribery&rdquo; by &ldquo;associated persons&rdquo; (employees, agents, subsidiaries). The only defense is that the company had &ldquo;adequate procedures&rdquo; in place to prevent bribery. This is a strict liability offense &mdash; the company is liable unless it can prove its compliance program was adequate.</li>
          <li><strong>No facilitation payment exception:</strong> The FCPA contains an exception for &ldquo;facilitating&rdquo; or &ldquo;grease&rdquo; payments &mdash; small payments made to foreign officials to expedite routine governmental actions (issuing permits, processing visas, scheduling inspections). The Bribery Act contains no such exception. All payments to influence official conduct are prohibited.</li>
          <li><strong>Broader territorial scope:</strong> The Bribery Act applies to any company that carries on business in the UK, regardless of where the bribery occurs. A US company with a UK subsidiary or significant UK business operations is subject to the Bribery Act for its worldwide conduct.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Successor Liability in M&amp;A</h2>
      <div className={bodyClass}>
        <p>Successor liability &mdash; the principle that an acquiring company can be held responsible for the acquired company&apos;s pre-existing legal violations &mdash; is the primary reason anti-bribery due diligence matters in M&amp;A transactions. Both the US Department of Justice (DOJ) and the Securities and Exchange Commission (SEC) have made clear that acquiring companies can face FCPA liability for the conduct of their acquisition targets.</p>
        <p>The DOJ and SEC have published guidance stating that they will consider the quality and timing of the acquirer&apos;s due diligence when deciding whether to bring enforcement actions. If an acquirer conducts thorough pre-acquisition due diligence, identifies corruption issues, discloses them to authorities, and implements effective remediation, the enforcement agencies have indicated they will exercise discretion in favor of the acquirer. Conversely, an acquirer that fails to conduct adequate due diligence &mdash; or that discovers red flags and ignores them &mdash; may face the full weight of enforcement for the target&apos;s historical conduct.</p>
        <p>The structure of the transaction also matters. In an asset purchase, successor liability risk is generally lower than in a stock purchase, because the buyer acquires specific assets rather than the entire legal entity (and its liabilities). However, asset purchases do not eliminate FCPA risk entirely, particularly if the buyer continues the target&apos;s operations, retains its employees, and maintains its business relationships. The <Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">representations and warranties</Link> in the purchase agreement should specifically address anti-bribery compliance, with the seller representing that it has not violated any applicable anti-corruption laws.</p>
      </div>

      <h2 className={h2Class}>ABAC Due Diligence: A Practical Framework</h2>
      <div className={bodyClass}>
        <p>Anti-bribery due diligence should be a distinct workstream within the broader due diligence process, led by experienced compliance counsel. The scope and depth of the ABAC due diligence should be calibrated to the target&apos;s risk profile &mdash; a domestic services business with no government customers requires less scrutiny than a company that sells into emerging markets through local agents and distributors.</p>
        <ol className={olClass}>
          <li><strong>Country risk assessment:</strong> Evaluate the countries where the target operates, sells, or sources materials. High-risk jurisdictions (as measured by Transparency International&apos;s Corruption Perceptions Index) warrant deeper investigation. Countries scoring below 40 on the CPI should trigger enhanced due diligence.</li>
          <li><strong>Third-party intermediary review:</strong> Identify all agents, consultants, distributors, and other intermediaries used by the target. These third parties are the primary channel through which bribes are paid. Review their contracts, commission structures, and the business justification for their engagement. Unusually high commissions, vague service descriptions, or intermediaries in jurisdictions where they are not needed are red flags.</li>
          <li><strong>Government touchpoints:</strong> Map all interactions between the target and government entities: permits, licenses, inspections, customs clearances, government contracts, and tax audits. Each touchpoint is a potential corruption risk.</li>
          <li><strong>Books and records review:</strong> Examine the target&apos;s accounting records for irregularities that may indicate off-book payments: cash disbursements without supporting documentation, payments to entities in high-risk jurisdictions that lack a clear business purpose, excessive consulting fees, and entertainment expenses that are disproportionate to the business purpose.</li>
          <li><strong>Compliance program assessment:</strong> Evaluate the target&apos;s existing compliance program (if any): written anti-bribery policies, training records, reporting mechanisms (whistleblower hotline), third-party due diligence procedures, and compliance leadership. A company with no compliance program is not necessarily corrupt, but it has no infrastructure to prevent or detect corruption.</li>
          <li><strong>Litigation and enforcement history:</strong> Search for any prior enforcement actions, investigations, debarments, or litigation related to bribery or corruption. Check regulatory databases, court records, and media coverage.</li>
          <li><strong>Employee interviews:</strong> Interview key personnel in finance, sales, procurement, and operations about their understanding of anti-bribery requirements, how they handle government interactions, and whether they are aware of any conduct that could raise concerns.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Red Flags in ABAC Due Diligence</h2>
      <div className={bodyClass}>
        <p>Certain patterns and indicators should trigger heightened scrutiny during anti-bribery due diligence. The presence of one or more red flags does not necessarily indicate that corruption has occurred, but it warrants further investigation before closing.</p>
        <ul className={ulClass}>
          <li><strong>Opaque third-party relationships:</strong> Agents or consultants engaged without a clear business rationale, paid excessive commissions, or connected to government officials through family or business ties.</li>
          <li><strong>Unusual payment patterns:</strong> Cash payments to unnamed individuals, payments routed through offshore entities, unexplained discounts or rebates, and invoices from shell companies or entities with no apparent operational presence.</li>
          <li><strong>Inadequate internal controls:</strong> Lack of segregation of duties, absence of approval processes for significant expenditures, no policy for gifts and entertainment, and no compliance training.</li>
          <li><strong>Government contract concentration:</strong> Heavy reliance on government contracts, particularly in high-risk jurisdictions, without a corresponding compliance infrastructure.</li>
          <li><strong>Charitable donations and sponsorships:</strong> Donations to charities connected to government officials or sponsorships that lack a legitimate business purpose and appear designed to curry favor with decision-makers.</li>
          <li><strong>Facilitation payments:</strong> Routine payments to low-level officials to expedite services. While common in some markets, these payments are illegal under most anti-bribery regimes (except the FCPA&apos;s narrow exception) and indicate a culture of paying to get things done.</li>
          <li><strong>Lack of transparency:</strong> The target resists providing access to financial records, intermediary agreements, or government correspondence during due diligence. Reluctance to disclose is itself a red flag.</li>
        </ul>
      </div>

      <h2 className={h2Class}>Post-Acquisition Remediation and Integration</h2>
      <div className={bodyClass}>
        <p>Even when pre-closing due diligence does not uncover active corruption, the acquirer should implement a robust compliance program in the acquired business as part of the <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">post-acquisition integration</Link> process. For targets with weak or nonexistent compliance infrastructure, this is both a legal imperative and a value-protection measure.</p>

        <h3 className={h3Class}>Immediate post-closing actions</h3>
        <ul className={ulClass}>
          <li><strong>Tone from the top:</strong> The new ownership should communicate immediately and clearly that bribery and corruption will not be tolerated. This message must come from the CEO/owner and be reinforced at every level.</li>
          <li><strong>Policy implementation:</strong> Adopt and distribute a written anti-bribery and anti-corruption policy. The policy should define prohibited conduct, establish gift and entertainment thresholds, require pre-approval for government interactions, and outline the consequences of violations.</li>
          <li><strong>Reporting mechanisms:</strong> Establish a confidential reporting channel (hotline, email, or web-based system) that allows employees to report suspected violations without fear of retaliation. Anonymous reporting should be available.</li>
          <li><strong>Training:</strong> Conduct anti-bribery training for all employees within the first 90 days of ownership. Tailor the training to the specific risks faced by different roles (sales, procurement, finance, operations).</li>
        </ul>

        <h3 className={h3Class}>Ongoing compliance infrastructure</h3>
        <p>Beyond the immediate post-closing period, the acquirer should build sustainable compliance infrastructure that includes regular risk assessments, periodic training updates, third-party due diligence for new agents and intermediaries, monitoring of high-risk transactions, and periodic audits of compliance with internal policies. The <Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">risk assessment</Link> should be updated annually or whenever the business enters new markets, engages new intermediaries, or experiences a significant change in its government-facing activities.</p>
      </div>

      <h2 className={h2Class}>Facilitation Payments: A Practical Dilemma</h2>
      <div className={bodyClass}>
        <p>Facilitation payments &mdash; small payments made to low-level government officials to expedite routine, non-discretionary actions (processing visas, clearing goods through customs, connecting utilities) &mdash; present one of the most challenging practical dilemmas in anti-corruption compliance. The FCPA carves out an exception for facilitation payments, but the UK Bribery Act, the Canadian Corruption of Foreign Public Officials Act (as amended), and most other anti-bribery regimes do not.</p>
        <p>For acquirers, the existence of facilitation payments in the target&apos;s operations signals two things. First, the target operates in environments where petty corruption is common, which increases the overall bribery risk. Second, the target lacks a clear policy framework for handling government interactions, which means there may be inadequate controls over larger, more consequential payments. The practical guidance for acquirers is to adopt a zero-tolerance policy for facilitation payments post-acquisition, even if the target has historically relied on them. This policy should be communicated clearly during the integration process, with practical guidance on how to operate without making such payments (using licensed customs brokers, engaging government relations consultants, and building in additional time for bureaucratic processes).</p>
      </div>

      <h2 className={h2Class}>Related Resources</h2>
      <ul className={ulClass}>
        <li><Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">Due Diligence Checklist</Link></li>
        <li><Link href="/learn/cross-border-acquisitions" className="text-apple-accent hover:underline">Cross-Border Acquisitions</Link></li>
        <li><Link href="/learn/reps-and-warranties" className="text-apple-accent hover:underline">Representations &amp; Warranties</Link></li>
        <li><Link href="/learn/operational-due-diligence" className="text-apple-accent hover:underline">Risk Assessment in Acquisitions</Link></li>
        <li><Link href="/learn/first-100-days" className="text-apple-accent hover:underline">Post-Acquisition Integration</Link></li>
      </ul>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>US Department of Justice &amp; SEC, <em>A Resource Guide to the US Foreign Corrupt Practices Act</em> (2020)</li>
        <li>UK Ministry of Justice, <em>The Bribery Act 2010: Guidance</em> (2011)</li>
        <li>Transparency International, <em>Corruption Perceptions Index</em> (2024)</li>
        <li>OECD, <em>Anti-Bribery Convention and Working Group on Bribery Annual Report</em> (2024)</li>
        <li>Sullivan &amp; Cromwell LLP, <em>FCPA and Anti-Corruption Enforcement: Year in Review</em> (2024)</li>
      </ul>
    </article>
  );
}
