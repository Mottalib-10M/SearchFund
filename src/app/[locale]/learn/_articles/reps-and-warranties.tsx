import Link from "next/link";
import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "./shared-styles";

export default function RepsAndWarrantiesArticle() {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className={h1Class}>
          Representations &amp; Warranties in M&amp;A: A Buyer's Guide
        </h1>
        <p className="mt-4 text-sm text-gray-600">10 min read</p>
      </header>

      <div className="prose prose-lg">
        <p className={bodyClass}>
          For search fund entrepreneurs acquiring their first company, the representations and warranties (reps and warranties) section of the purchase agreement often represents the most negotiated and consequential part of the deal. These contractual statements about the business's condition serve as your primary protection against unknown liabilities and misrepresented facts. Understanding how to negotiate, structure, and enforce reps and warranties can mean the difference between a successful acquisition and a costly mistake.
        </p>

        <p className={bodyClass}>
          This guide walks through the essential elements of representations and warranties from a buyer's perspective, helping you navigate one of the most complex aspects of M&amp;A transactions.
        </p>

        <h2 className={h2Class}>What Are Reps and Warranties</h2>

        <p className={bodyClass}>
          Representations and warranties are factual statements made by the seller about the condition, operations, and legal standing of the business being sold. While technically distinct legal concepts (representations relate to past or present facts, warranties are promises about future conditions), in practice they're treated together in most purchase agreements.
        </p>

        <p className={bodyClass}>
          These statements serve several critical functions:
        </p>

        <ul className={ulClass}>
          <li><strong>Risk allocation:</strong> They determine who bears the cost if certain facts about the business turn out to be untrue</li>
          <li><strong>Due diligence incentive:</strong> They motivate sellers to provide accurate information and complete disclosure</li>
          <li><strong>Closing conditions:</strong> Their accuracy at closing is typically a condition to the buyer's obligation to complete the transaction</li>
          <li><strong>Indemnification triggers:</strong> Breaches give rise to indemnification claims, allowing buyers to recover losses</li>
          <li><strong>Information gathering:</strong> The process of providing reps forces sellers to organize and disclose detailed business information</li>
        </ul>

        <p className={bodyClass}>
          For search fund acquirers, reps and warranties are particularly important because you're typically buying 100% of a business you'll operate yourself, with limited ability to diversify risk across a portfolio like private equity funds do.
        </p>

        <h2 className={h2Class}>Key Seller Representations</h2>

        <p className={bodyClass}>
          A comprehensive purchase agreement includes dozens of specific representations. Here are the most critical categories for search fund acquisitions:
        </p>

        <h3 className={h3Class}>Financial Accuracy</h3>

        <p className={bodyClass}>
          The seller represents that financial statements fairly present the company's financial condition in accordance with GAAP (or another specified accounting standard), that there are no undisclosed liabilities, and that accounts receivable are collectible. This is foundational—if the financials are wrong, your entire valuation is suspect.
        </p>

        <p className={bodyClass}>
          Key points to negotiate:
        </p>

        <ul className={ulClass}>
          <li>Specify which financial statements are covered (typically last 2-3 years plus interim periods)</li>
          <li>Define the accounting standard (GAAP, cash basis, tax basis)</li>
          <li>Include representation that there are no undisclosed liabilities, including contingent liabilities</li>
          <li>Cover accounts receivable aging and collectability</li>
          <li>Address inventory valuation and obsolescence</li>
        </ul>

        <h3 className={h3Class}>Tax Compliance</h3>

        <p className={bodyClass}>
          Tax representations cover timely filing of all required returns, payment of all taxes due, accurate reporting, and absence of disputes with tax authorities. Tax liabilities can be substantial and survive the closing, making this a critical protection.
        </p>

        <p className={bodyClass}>
          For asset deals, tax reps are less critical since you're not assuming the entity's tax history. For stock deals, they're essential—you're inheriting all tax liabilities.
        </p>

        <h3 className={h3Class}>Legal Compliance</h3>

        <p className={bodyClass}>
          The seller represents that the business complies with all applicable laws and regulations, holds all necessary permits and licenses, and has no violations or pending enforcement actions. This is particularly important for regulated industries (healthcare, financial services, food service, environmental).
        </p>

        <p className={bodyClass}>
          Be specific about critical licenses—general contractor licenses, medical facility certifications, liquor licenses, environmental permits. The absence of a key license could shut down operations.
        </p>

        <h3 className={h3Class}>Contracts and Commitments</h3>

        <p className={bodyClass}>
          Contract representations cover the existence, validity, and performance of material agreements. The seller represents that:
        </p>

        <ul className={ulClass}>
          <li>All material contracts are disclosed and provided to buyer</li>
          <li>Contracts are valid, binding, and enforceable</li>
          <li>The company is not in default and has no knowledge of counterparty defaults</li>
          <li>No contracts will be adversely affected by the transaction (no change of control provisions)</li>
        </ul>

        <p className={bodyClass}>
          Define "material" carefully—often any contract representing more than a specified dollar amount (e.g., $25,000 annually) or meeting certain criteria (exclusivity, multi-year term, not terminable on short notice).
        </p>

        <h3 className={h3Class}>Employees and Benefits</h3>

        <p className={bodyClass}>
          Employee representations cover compensation arrangements, benefit plans, labor disputes, and compliance with employment laws. Key areas include:
        </p>

        <ul className={ulClass}>
          <li>Complete list of employees with compensation and benefits</li>
          <li>No undisclosed bonus, commission, or severance obligations</li>
          <li>Compliance with wage and hour laws, classification requirements (exempt vs. non-exempt, employee vs. contractor)</li>
          <li>No pending or threatened employment claims or disputes</li>
          <li>No union activity or collective bargaining agreements</li>
          <li>Full disclosure of benefit plans with copies of plan documents</li>
        </ul>

        <p className={bodyClass}>
          Employee liabilities can be significant—misclassified contractors, unpaid overtime, discriminatory practices. These typically survive closing even in asset deals since successor liability often applies.
        </p>

        <h3 className={h3Class}>Intellectual Property</h3>

        <p className={bodyClass}>
          IP representations confirm that the company owns or has rights to all intellectual property used in the business. This includes:
        </p>

        <ul className={ulClass}>
          <li>Registered IP (trademarks, patents, copyrights) is valid and properly maintained</li>
          <li>Company owns or has licenses for all IP used in operations</li>
          <li>No third-party claims of infringement</li>
          <li>No employee or contractor claims to IP ownership</li>
          <li>Key employees have signed IP assignment agreements</li>
        </ul>

        <p className={bodyClass}>
          For service businesses, confirm that client work product was created under work-for-hire agreements. For software or tech-enabled businesses, ensure all code is owned or properly licensed.
        </p>

        <h3 className={h3Class}>Environmental</h3>

        <p className={bodyClass}>
          Environmental representations cover compliance with environmental laws, absence of hazardous materials, and no contamination of property. These are particularly important if:
        </p>

        <ul className={ulClass}>
          <li>The business owns real property</li>
          <li>Operations involve manufacturing, chemicals, or waste generation</li>
          <li>The industry has inherent environmental risks (dry cleaning, auto repair, metal plating)</li>
        </ul>

        <p className={bodyClass}>
          Environmental liabilities can be enormous and often can't be fully shifted to sellers. Consider Phase I or Phase II environmental assessments for properties with potential issues.
        </p>

        <h2 className={h2Class}>Fundamental vs General Reps</h2>

        <p className={bodyClass}>
          Representations are typically divided into two categories with different survival periods and liability caps:
        </p>

        <p className={bodyClass}>
          <strong>Fundamental representations</strong> relate to basic deal terms and the seller's legal ability to sell:
        </p>

        <ul className={ulClass}>
          <li>Organization and good standing</li>
          <li>Authority to enter into the transaction</li>
          <li>Capitalization (ownership of equity being sold)</li>
          <li>No conflicts with other agreements or obligations</li>
          <li>Sometimes tax and financial statements are also treated as fundamental</li>
        </ul>

        <p className={bodyClass}>
          Fundamental reps typically survive longer (often indefinitely or until the statute of limitations expires) and are not subject to indemnification caps or baskets.
        </p>

        <p className={bodyClass}>
          <strong>General representations</strong> cover everything else—operations, contracts, compliance, employees, etc. These typically survive for 12-24 months and are subject to indemnification caps and baskets (discussed below).
        </p>

        <p className={bodyClass}>
          Sellers often push to limit fundamental reps to a narrow list. As a buyer, you want tax and financial accuracy to be fundamental since these go to the core of valuation and can involve large liabilities.
        </p>

        <h2 className={h2Class}>Survival Periods and Baskets</h2>

        <p className={bodyClass}>
          Reps and warranties don't last forever. The purchase agreement specifies how long each category survives after closing—the period during which you can bring indemnification claims.
        </p>

        <p className={bodyClass}>
          <strong>Typical survival periods:</strong>
        </p>

        <ul className={ulClass}>
          <li><strong>Fundamental reps:</strong> Indefinitely or 6 years (statute of limitations for contract claims)</li>
          <li><strong>Tax reps:</strong> Until expiration of applicable statute of limitations (typically 3-4 years, longer if fraud)</li>
          <li><strong>General reps:</strong> 12-18 months for smaller deals, 18-24 months for larger deals</li>
          <li><strong>Environmental reps:</strong> Sometimes longer given long latency periods for environmental issues</li>
        </ul>

        <p className={bodyClass}>
          For search fund deals (typically $5-30 million), 12-18 months for general reps is common. You have more leverage for longer periods on larger deals or where due diligence was limited.
        </p>

        <p className={bodyClass}>
          <strong>Baskets and deductibles</strong> determine how much you must lose before indemnification kicks in:
        </p>

        <p className={bodyClass}>
          A <strong>deductible basket</strong> requires losses to exceed the threshold before any recovery. If the basket is $50,000 and losses are $75,000, you recover $75,000 (all losses once threshold is met).
        </p>

        <p className={bodyClass}>
          A <strong>tipping basket</strong> requires losses to exceed the threshold, then you recover only the excess. If the basket is $50,000 and losses are $75,000, you recover $25,000 (only the amount over the threshold).
        </p>

        <p className={bodyClass}>
          Deductible baskets are more buyer-friendly. Tipping baskets are more seller-friendly but more common in middle market deals.
        </p>

        <p className={bodyClass}>
          Basket amounts typically range from 0.5% to 1.5% of purchase price. On a $10 million deal, expect a $50,000-$150,000 basket. Smaller percentages on larger deals, larger percentages on smaller deals.
        </p>

        <h2 className={h2Class}>Indemnification Caps and Floors</h2>

        <p className={bodyClass}>
          Beyond baskets, the purchase agreement includes caps (maximum liability) and sometimes minimum claim amounts:
        </p>

        <p className={bodyClass}>
          <strong>Indemnification caps</strong> limit the seller's maximum liability for general reps. Typical caps are 10-25% of purchase price, with higher percentages on smaller deals where risks are less diversified.
        </p>

        <ul className={ulClass}>
          <li>Small deals ($5-10M): Often 15-25% of purchase price</li>
          <li>Middle market ($10-50M): Often 10-20% of purchase price</li>
          <li>Larger deals: Often 10-15% of purchase price</li>
        </ul>

        <p className={bodyClass}>
          Fundamental reps and tax reps are typically not subject to caps (or have much higher caps like 100% of purchase price). The logic: if the seller didn't own what they sold or massively misrepresented financials, they should bear full liability.
        </p>

        <p className={bodyClass}>
          <strong>Minimum claim amounts</strong> (sometimes called "mini-baskets") require each individual claim to exceed a threshold (e.g., $10,000) before it counts toward the basket. This prevents nickel-and-dime claims. Small claims that individually don't meet the threshold don't aggregate toward the basket.
        </p>

        <p className={bodyClass}>
          As a buyer, resist minimum claim amounts if possible—they can eliminate many legitimate small claims that collectively matter.
        </p>

        <h2 className={h2Class}>R&amp;W Insurance: When It Makes Sense</h2>

        <p className={bodyClass}>
          Representations and warranties insurance (RWI) is an insurance policy that covers losses from breaches of reps and warranties. Historically used only on large deals, RWI is now available for transactions as small as $10-15 million.
        </p>

        <p className={bodyClass}>
          <strong>How it works:</strong>
        </p>

        <ul className={ulClass}>
          <li>Buyer purchases a policy (or seller purchases sell-side policy as deal consideration)</li>
          <li>Policy covers breaches of reps and warranties above a retention (similar to a deductible)</li>
          <li>Typical coverage is 10-20% of purchase price</li>
          <li>Typical retention is 0.5-1.5% of purchase price</li>
          <li>Premium is typically 2.5-4% of coverage amount</li>
        </ul>

        <p className={bodyClass}>
          <strong>When RWI makes sense for search funds:</strong>
        </p>

        <ul className={ulClass}>
          <li><strong>Seller has limited post-close assets:</strong> If seller is retiring and will spend/invest proceeds, collection risk is high. Insurance provides a creditworthy counterparty.</li>
          <li><strong>Competitive auction:</strong> Offering RWI can be a competitive advantage—seller gets cleaner exit with minimal escrow and indemnification obligations.</li>
          <li><strong>Complex business or limited due diligence:</strong> If diligence was constrained by time/resources or business has unusual risks, insurance provides additional protection.</li>
          <li><strong>Estate sale or multiple sellers:</strong> When there are many seller parties or seller is a trust/estate, coordinating indemnification claims is difficult.</li>
        </ul>

        <p className={bodyClass}>
          <strong>When to skip RWI:</strong>
        </p>

        <ul className={ulClass}>
          <li>Deal size below $10-15 million (often not economical)</li>
          <li>Seller is creditworthy and willing to provide standard indemnification with escrow</li>
          <li>Simple business with clean diligence and low perceived risks</li>
          <li>Cost of premium (typically $150,000-$300,000 on a $15-20M deal) is better spent on deeper due diligence</li>
        </ul>

        <p className={bodyClass}>
          RWI doesn't eliminate the need for seller indemnification—sellers typically remain liable for fraud and fundamental reps, and you still need seller reps to make claims under the policy.
        </p>

        <h2 className={h2Class}>Negotiating Reps and Warranties</h2>

        <p className={bodyClass}>
          Negotiating reps and warranties is where deal terms get tested. Here's how to approach it strategically:
        </p>

        <p className={bodyClass}>
          <strong>Start with a complete set of buyer-friendly reps.</strong> Use a comprehensive template from your M&amp;A attorney. It's easier to negotiate away protections you don't need than to add protections the seller has already rejected.
        </p>

        <p className={bodyClass}>
          <strong>Prioritize based on business risks.</strong> Focus your negotiating energy on reps that matter for this specific business:
        </p>

        <ul className={ulClass}>
          <li>Service business heavily dependent on key employees? Focus on employee reps, non-competes, and customer relationship reps.</li>
          <li>Manufacturing business with real property? Emphasize environmental and real estate reps.</li>
          <li>Regulated industry? Legal compliance and licensing reps are critical.</li>
          <li>Tech-enabled business? IP ownership and software licensing reps matter most.</li>
        </ul>

        <p className={bodyClass}>
          <strong>Use diligence findings to negotiate.</strong> When diligence uncovers issues, use them to strengthen related reps or get specific protections:
        </p>

        <ul className={ulClass}>
          <li>Found expired permits? Get specific rep about permit renewal and commitment to maintain.</li>
          <li>Discovered customer concentration? Get detailed customer contract reps and notice of any at-risk relationships.</li>
          <li>Identified potential employment issues? Expand employee reps and get specific disclosure on any complaints or issues.</li>
        </ul>

        <p className={bodyClass}>
          <strong>Connect escrow to indemnification structure.</strong> Escrow amount, release schedule, and terms should align with survival periods and caps:
        </p>

        <ul className={ulClass}>
          <li>Escrow should at minimum cover the basket and ideally 10-20% of purchase price</li>
          <li>Consider tiered release aligned with survival periods (e.g., 50% released at 12 months when general reps expire, remainder at 18-24 months)</li>
          <li>Escrow should remain until after tax returns are filed and accepted for pre-closing periods</li>
        </ul>

        <p className={bodyClass}>
          <strong>Consider seller creditworthiness.</strong> If the seller will have limited assets post-close, you need more protection:
        </p>

        <ul className={ulClass}>
          <li>Larger escrow amount (20-25% vs. 10-15%)</li>
          <li>Longer survival periods</li>
          <li>Lower or no baskets</li>
          <li>Higher caps</li>
          <li>RWI insurance if deal size supports it</li>
        </ul>

        <h2 className={h2Class}>Common Seller Pushback</h2>

        <p className={bodyClass}>
          Expect sellers (and their attorneys) to negotiate aggressively on reps and warranties. Common pushback includes:
        </p>

        <p className={bodyClass}>
          <strong>"These reps are too broad and not specific to my business."</strong> Sellers argue that standard reps don't fit their situation. Response: Offer to add appropriate qualifiers and disclosures, but maintain comprehensive coverage. The reps should be broad—that's the point.
        </p>

        <p className={bodyClass}>
          <strong>"I don't know if all these statements are true."</strong> Sellers claim they can't make certain reps because they're not certain. Response: Add "to seller's knowledge" qualifiers where appropriate, but define "knowledge" to include what seller should know with reasonable inquiry. Certain fundamental reps (ownership, authority, financial accuracy) should never be qualified by knowledge.
        </p>

        <p className={bodyClass}>
          <strong>"The survival period is too long."</strong> Sellers want a clean break. Response: Industry standard is 12-18 months for general reps, longer for tax and fundamental. This is reasonable given that many issues take time to discover. Consider compromise: shorter survival for some reps if seller agrees to longer escrow or higher caps on reps that matter most.
        </p>

        <p className={bodyClass}>
          <strong>"The basket is too low."</strong> Sellers argue they shouldn't be liable for small claims. Response: Basket protects against small claims. At 0.5-1.5% of purchase price, it's already providing meaningful protection. Consider tipping basket as compromise—seller gets more downside protection, you preserve coverage for larger losses.
        </p>

        <p className={bodyClass}>
          <strong>"The cap is too high."</strong> Sellers want to limit maximum exposure. Response: Cap of 10-25% is standard and reasonable. Seller represented the business's condition as basis for purchase price—if representations are materially wrong, significant liability is appropriate. Consider higher cap with RWI as alternative.
        </p>

        <p className={bodyClass}>
          <strong>"You're asking for financial statements reps, but my books aren't GAAP."</strong> Common with small businesses. Response: Adjust the accounting standard to match how books are kept (cash basis, tax basis), but maintain that statements fairly present financial condition under that standard.
        </p>

        <h2 className={h2Class}>Disclosure Schedules</h2>

        <p className={bodyClass}>
          Disclosure schedules (or disclosure letter) are attachments to the purchase agreement where the seller discloses exceptions to the representations. They're a critical part of the reps and warranties framework.
        </p>

        <p className={bodyClass}>
          <strong>How they work:</strong> Each representation is subject to exceptions disclosed in the corresponding schedule. For example, the rep that "there is no litigation" is followed by "except as set forth on Schedule X," and Schedule X lists any pending or threatened litigation.
        </p>

        <p className={bodyClass}>
          <strong>Best practices for reviewing disclosure schedules:</strong>
        </p>

        <ul className={ulClass}>
          <li><strong>Get them early:</strong> Don't wait until the last minute. Request preliminary schedules early in diligence so you can follow up on disclosed items.</li>
          <li><strong>Verify disclosures:</strong> Don't assume disclosed items are accurate or complete. Review supporting documents, ask follow-up questions, assess impact.</li>
          <li><strong>Watch for schedule creep:</strong> Sellers sometimes try to add new disclosures in later drafts. Track changes carefully and push back on material new disclosures that suggest diligence findings weren't previously disclosed.</li>
          <li><strong>Require specificity:</strong> General statements like "as disclosed in data room" don't provide meaningful disclosure. Each exception should be specifically described.</li>
          <li><strong>Resist blanket incorporation:</strong> Sellers may try to incorporate entire data room or all disclosed documents by reference. This makes it impossible to know what's being disclosed. Require specific schedule-by-schedule disclosure.</li>
          <li><strong>Assess materiality of disclosures:</strong> Not every disclosure is a deal-breaker, but each should be evaluated for impact on value, risk, or operations.</li>
        </ul>

        <p className={bodyClass}>
          Disclosure schedules force seller organization and candor. A seller who can't or won't complete detailed disclosure schedules is a red flag—either they don't know their business well or they're not being forthcoming.
        </p>

        <h2 className={h2Class}>Best Practices for Search Fund Acquirers</h2>

        <p className={bodyClass}>
          As a first-time acquirer buying a business you'll operate, these practices will help you navigate reps and warranties effectively:
        </p>

        <ol className={olClass}>
          <li>
            <strong>Work with experienced M&amp;A counsel.</strong> This is not the place to cut costs with a general business attorney. Reps and warranties are highly negotiated and technical—you need counsel who does M&amp;A deals regularly and knows market terms.
          </li>
          <li>
            <strong>Use diligence to inform reps.</strong> Diligence and reps should work together. Findings from diligence should translate into specific reps or disclosures. Areas where diligence was limited should have broader reps to shift risk to seller.
          </li>
          <li>
            <strong>Negotiate escrow concurrently with reps.</strong> They're interconnected. Strong indemnification without escrow is worthless if seller has no assets. Weak indemnification might be acceptable with a large escrow and creditworthy seller.
          </li>
          <li>
            <strong>Don't defer difficult issues to post-closing indemnification.</strong> If diligence reveals a problem, address it directly: adjust price, require pre-closing fix, get specific indemnification carve-out, or walk away. Don't assume you'll successfully claim indemnification later—collection is difficult and relationships matter for transition.
          </li>
          <li>
            <strong>Consider the relationship dynamic.</strong> Unlike PE buyers, you'll typically work with the seller post-closing for transition. Being overly aggressive on reps can poison the relationship. Be firm on protections that matter, but pick your battles.
          </li>
          <li>
            <strong>Document everything.</strong> Keep organized diligence files with all supporting documents for reps. If you need to bring an indemnification claim, you'll need to prove breach and damages—good documentation is essential.
          </li>
          <li>
            <strong>Understand what reps don't cover.</strong> Reps protect against misrepresentations, not business risk. Poor post-acquisition performance, lost customers, or market changes aren't indemnifiable unless caused by a breach. Don't view reps as a safety net for all downside—they're not.
          </li>
          <li>
            <strong>Get investor input on material terms.</strong> Your investors care about indemnification structure. Share the proposed terms (survival, caps, baskets, escrow) and get their feedback, especially if they have prior M&amp;A experience.
          </li>
        </ol>

        <p className={bodyClass}>
          Representations and warranties are complex, heavily negotiated, and sometimes feel removed from the actual business you're buying. But they're critical protection when things go wrong. Invest time in understanding them, negotiate thoughtfully, and work with experienced counsel. Your future self—dealing with an undisclosed liability or broken rep—will be grateful you did.
        </p>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className={h2Class}>Sources</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://www.americanbar.org/groups/business_law/publications/blt/2020/05/stock-purchase/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-accent hover:underline"
              >
                American Bar Association – Stock Purchase Agreement Negotiations
              </a>
            </li>
            <li>
              <a
                href="https://www.acc.com/resource-library/representations-and-warranties-deal-study"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-accent hover:underline"
              >
                Association of Corporate Counsel – M&amp;A Deal Terms Study
              </a>
            </li>
            <li>
              <a
                href="https://www.aon.com/getting-smart-transaction-solutions/reps-and-warranties-insurance.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-accent hover:underline"
              >
                Aon – Representations and Warranties Insurance Guide
              </a>
            </li>
            <li>
              <a
                href="https://corpgov.law.harvard.edu/2020/01/15/private-target-mergers-and-acquisitions-deal-terms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-accent hover:underline"
              >
                Harvard Law School Forum on Corporate Governance – Private M&amp;A Deal Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
