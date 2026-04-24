import type { TemplateMeta } from "./types";

export const letterOfIntent: TemplateMeta = {
  slug: "letter-of-intent",
  title: "Letter of Intent (LOI) Template for Small Business Acquisitions",
  description:
    "A clause-by-clause LOI template for acquiring a small business. Covers purchase price, financing, exclusivity, due diligence period, and key terms every searcher needs.",
  phase: "acquire",
  datePublished: "2025-03-15",
  dateModified: "2025-06-10",
  sources: [
    {
      name: "Stanford Graduate School of Business - A Primer on Search Funds (2023)",
      url: "https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds/primer",
    },
    {
      name: "Searchfunder.com - LOI Best Practices",
      url: "https://searchfunder.com",
    },
    {
      name: "Harvard Business Review - Guide to Buying a Small Business (2017)",
      url: "https://hbr.org/product/hbr-guide-to-buying-a-small-business/10103-PBK-ENG",
    },
  ],
  relatedArticles: [
    "letter-of-intent",
    "exclusivity-agreement",
    "closing-process",
    "deal-structure-optimization",
  ],
  targetQueries: [
    "LOI template small business acquisition",
    "letter of intent template M&A",
    "LOI template search fund",
    "letter of intent business purchase",
  ],
  content: `
<div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
  <p class="text-sm text-amber-800 font-medium">Legal Disclaimer</p>
  <p class="text-sm text-amber-700 mt-1">
    This template is provided for <strong>educational purposes only</strong> and does not constitute legal advice.
    Every acquisition is unique. You should engage qualified legal counsel in the relevant jurisdiction before
    signing any letter of intent. SearchFundMarket accepts no liability for reliance on this template.
  </p>
</div>

<h2>What Is a Letter of Intent?</h2>
<p>
  A Letter of Intent (LOI) is a preliminary, largely non-binding document that outlines the key terms of a
  proposed acquisition. It signals serious buyer intent, sets the framework for due diligence, and - critically
  for search fund entrepreneurs - triggers the exclusivity period during which the seller agrees not to
  negotiate with other buyers.
</p>
<p>
  While most LOI clauses are non-binding, the exclusivity, confidentiality, and governing law provisions are
  typically binding. Getting the LOI right sets the tone for the entire deal.
</p>

<h2>Template: Letter of Intent</h2>
<p class="text-sm italic text-gray-500 mb-4">
  Bracketed items [like this] should be replaced with deal-specific information. Clauses marked with an asterisk (*)
  are typically binding.
</p>

<h3>1. Parties</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    This Letter of Intent ("LOI") is entered into as of <strong>[Date]</strong> by and between:
  </p>
  <ul class="mt-2 space-y-1">
    <li><strong>Buyer:</strong> [Buyer Entity Name or Individual Name], [Address]</li>
    <li><strong>Seller:</strong> [Seller Entity Name or Individual Name(s)], [Address]</li>
  </ul>
  <p class="mt-2">
    regarding the proposed acquisition of <strong>[Target Company Name]</strong> (the "Company"),
    a [State/Country] [corporation/LLC/partnership] with its principal place of business at [Address].
  </p>
</div>
<p>
  <strong>Guidance:</strong> If the buyer is a newly formed acquisition vehicle (common in search fund deals),
  state the entity name and note that it is being formed for the purpose of the acquisition. In a self-funded
  search, the buyer is often an individual at the LOI stage with the right to assign to a to-be-formed entity.
</p>

<h3>2. Purchase Price &amp; Consideration</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    The total purchase price for 100% of the equity interests / assets of the Company shall be
    <strong>[$ Amount]</strong> (the "Purchase Price"), subject to customary adjustments as described below.
  </p>
  <p class="mt-2"><strong>Consideration structure:</strong></p>
  <ul class="mt-1 space-y-1">
    <li>Cash at closing: $[Amount]</li>
    <li>Seller note: $[Amount] at [X]% interest over [Y] years, [monthly/quarterly] payments</li>
    <li>Earnout: Up to $[Amount] based on [metric] over [period]</li>
  </ul>
  <p class="mt-2">
    The Purchase Price is based on a [asset / equity] purchase and is calculated as approximately
    [X.X]x trailing twelve-month adjusted EBITDA of $[Amount].
  </p>
</div>
<p>
  <strong>Guidance:</strong> Clearly state whether this is an asset purchase or equity purchase - the tax and
  liability implications differ significantly. Most small business acquisitions in the US use an asset purchase
  structure for tax advantages (Section 338(h)(10) election may also be discussed). In the UK and continental
  Europe, share purchases are more common for SMEs.
</p>
<p>
  The earnout clause, if included, should specify the metric (revenue, EBITDA, or customer retention), the
  measurement period, and who controls the business during that period. Poorly drafted earnouts are a leading
  source of post-closing disputes.
</p>

<h3>3. Financing</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    The Buyer intends to finance the Purchase Price through the following sources:
  </p>
  <ul class="mt-1 space-y-1">
    <li>Equity from Buyer and/or investors: $[Amount]</li>
    <li>Senior debt (SBA 7(a) / bank financing): $[Amount]</li>
    <li>Seller financing (as described above): $[Amount]</li>
  </ul>
  <p class="mt-2">
    The Buyer shall use commercially reasonable efforts to secure financing commitments within
    [30-60] days of the execution of this LOI.
  </p>
</div>
<p>
  <strong>Guidance:</strong> Sellers want certainty of close. If you are relying on SBA 7(a) financing,
  be transparent about the timeline (typically 45-90 days). Traditional search fund acquirers may reference
  committed investor capital. Self-funded searchers should describe their financing plan clearly.
</p>

<h3>4. Exclusivity Period *</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    Upon execution of this LOI, the Seller agrees to negotiate exclusively with the Buyer for a period of
    <strong>[60-90] days</strong> (the "Exclusivity Period"). During the Exclusivity Period, the Seller shall
    not solicit, encourage, or accept any offers, proposals, or inquiries from third parties regarding the
    sale of the Company or any material portion of its assets.
  </p>
  <p class="mt-2">
    The Exclusivity Period may be extended by mutual written agreement of the parties.
  </p>
  <p class="mt-2 text-amber-700 font-medium">This clause is binding.</p>
</div>
<p>
  <strong>Guidance:</strong> 60-90 days is standard for small business acquisitions. Shorter periods
  (30-45 days) may be necessary in competitive situations. Request enough time to complete due diligence
  and secure financing. If the deal involves SBA lending, you may need the longer end of the range.
</p>

<h3>5. Due Diligence</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    The Buyer shall have a period of <strong>[45-60] days</strong> from the execution of this LOI to conduct
    customary due diligence on the Company, including but not limited to:
  </p>
  <ul class="mt-1 space-y-1">
    <li>Financial statements, tax returns, and working capital analysis</li>
    <li>Customer and vendor contracts</li>
    <li>Employee matters and benefit plans</li>
    <li>Legal and regulatory compliance</li>
    <li>Intellectual property and technology</li>
    <li>Environmental and real estate matters</li>
    <li>Insurance coverage</li>
  </ul>
  <p class="mt-2">
    The Seller shall provide the Buyer and its advisors reasonable access to the Company's books, records,
    facilities, management, customers, and vendors during normal business hours.
  </p>
</div>
<p>
  <strong>Guidance:</strong> The DD period often runs concurrently with (and is shorter than) the exclusivity
  period. Consider specifying a Quality of Earnings (QoE) analysis as part of financial due diligence - 
  this is now standard practice in search fund acquisitions and many lenders require it.
</p>

<h3>6. Working Capital</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    The Purchase Price assumes that the Company will be delivered at closing with a normalized level of
    net working capital of approximately <strong>$[Amount]</strong> (the "Target Working Capital"),
    calculated as current assets minus current liabilities, excluding cash and debt.
  </p>
  <p class="mt-2">
    The parties shall agree on the specific calculation methodology during due diligence. Any deviation
    from the Target Working Capital at closing shall result in a dollar-for-dollar adjustment to the
    Purchase Price.
  </p>
</div>
<p>
  <strong>Guidance:</strong> Working capital adjustments are one of the most negotiated items in small
  business acquisitions. Define clearly what is included and excluded. Use an average of the trailing
  12 months to establish the target. This protects the buyer from a seller who drains receivables or
  delays payables before closing.
</p>

<h3>7. Representations &amp; Warranties (Preview)</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    The definitive Purchase Agreement shall contain customary representations and warranties by both the
    Buyer and the Seller. Seller representations shall include, without limitation:
  </p>
  <ul class="mt-1 space-y-1">
    <li>Authority and capacity to execute the transaction</li>
    <li>Accuracy of financial statements</li>
    <li>No undisclosed liabilities</li>
    <li>Good standing and compliance with applicable laws</li>
    <li>Title to assets free of liens and encumbrances</li>
    <li>Material contracts and customer relationships</li>
    <li>Tax compliance</li>
    <li>Employee and benefit matters</li>
    <li>Absence of material adverse changes since the latest financial statements</li>
  </ul>
</div>
<p>
  <strong>Guidance:</strong> The LOI typically previews - but does not finalize - reps and warranties.
  These will be negotiated in detail in the definitive purchase agreement. Representation and warranty
  insurance (RWI) is increasingly available for deals above $10M and can facilitate seller-friendly
  structures.
</p>

<h3>8. Confidentiality *</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    Each party agrees to keep confidential all non-public information disclosed during negotiations and
    due diligence. This obligation shall survive the termination of this LOI for a period of
    <strong>[2] years</strong>.
  </p>
  <p class="mt-2">
    Neither party shall disclose the existence of this LOI or the proposed transaction to any third party
    without the prior written consent of the other party, except to their respective advisors, lenders,
    and investors on a need-to-know basis.
  </p>
  <p class="mt-2 text-amber-700 font-medium">This clause is binding.</p>
</div>

<h3>9. Non-Solicitation of Employees *</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    During the Exclusivity Period and for a period of <strong>[12] months</strong> following the
    termination of this LOI (if the transaction does not close), the Buyer shall not, directly or
    indirectly, solicit or hire any employee of the Company.
  </p>
  <p class="mt-2 text-amber-700 font-medium">This clause is binding.</p>
</div>

<h3>10. Conditions to Closing</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>The closing of the transaction shall be subject to the following conditions:</p>
  <ul class="mt-1 space-y-1">
    <li>Satisfactory completion of due diligence by the Buyer</li>
    <li>Negotiation and execution of a definitive Purchase Agreement</li>
    <li>Securing of financing on terms acceptable to the Buyer</li>
    <li>Receipt of all necessary third-party consents and regulatory approvals</li>
    <li>No material adverse change in the Company's business or financial condition</li>
    <li>Approval by the Buyer's Board of Directors / investors (if applicable)</li>
  </ul>
</div>

<h3>11. Transition &amp; Seller Involvement</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    The Seller agrees to provide transition assistance for a period of <strong>[3-6] months</strong>
    following closing. The terms of the Seller's continued involvement (consulting agreement,
    employment agreement, or advisory role) shall be negotiated as part of the definitive agreements.
  </p>
</div>
<p>
  <strong>Guidance:</strong> For search fund acquisitions, the transition period is critical. The seller
  typically knows the business, its customers, and its culture better than anyone. Plan for a structured
  handover with specific milestones.
</p>

<h3>12. Governing Law *</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    This LOI shall be governed by and construed in accordance with the laws of the State of
    <strong>[State]</strong>, without regard to its conflict of laws provisions.
  </p>
  <p class="mt-2 text-amber-700 font-medium">This clause is binding.</p>
</div>

<h3>13. Non-Binding Nature</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>
    Except for the sections marked as binding (Exclusivity, Confidentiality, Non-Solicitation, and
    Governing Law), this LOI is an expression of intent only and does not create any binding obligation
    on either party to consummate the transaction described herein.
  </p>
</div>

<h3>14. Timeline</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>The parties agree to use commercially reasonable efforts to adhere to the following timeline:</p>
  <ul class="mt-1 space-y-1">
    <li>LOI execution: [Date]</li>
    <li>Due diligence completion: [Date, typically 45-60 days after LOI]</li>
    <li>Definitive agreement negotiation: [Date, typically 30-45 days after DD]</li>
    <li>Target closing date: [Date, typically 90-120 days after LOI]</li>
  </ul>
</div>

<h3>15. Signatures</h3>
<div class="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
  <p>IN WITNESS WHEREOF, the parties have executed this Letter of Intent as of the date first written above.</p>
  <div class="grid grid-cols-2 gap-8 mt-4">
    <div>
      <p class="font-medium">BUYER:</p>
      <p class="mt-4 border-b border-gray-400 pb-1">&nbsp;</p>
      <p class="text-xs text-gray-500 mt-1">Name: [Buyer Name]</p>
      <p class="text-xs text-gray-500">Title: [Title]</p>
      <p class="text-xs text-gray-500">Date: [Date]</p>
    </div>
    <div>
      <p class="font-medium">SELLER:</p>
      <p class="mt-4 border-b border-gray-400 pb-1">&nbsp;</p>
      <p class="text-xs text-gray-500 mt-1">Name: [Seller Name]</p>
      <p class="text-xs text-gray-500">Title: [Title]</p>
      <p class="text-xs text-gray-500">Date: [Date]</p>
    </div>
  </div>
</div>

<h2>Common LOI Variations by Deal Type</h2>

<h3>Self-Funded Search</h3>
<p>
  Self-funded searchers typically have more flexibility on deal terms but may need to rely more heavily on
  seller financing and SBA 7(a) loans. The LOI should clearly state the financing plan and include a
  financing contingency. Exclusivity periods may be shorter (45-60 days) since the seller wants speed.
</p>

<h3>Traditional Search Fund</h3>
<p>
  Traditional search fund LOIs often reference committed capital from institutional investors. The buyer
  may include a provision requiring investor approval. The purchase price multiples tend to be 4-6x EBITDA
  for companies in the $1-5M EBITDA range, per the Stanford Search Fund Primer.
</p>

<h3>International Considerations</h3>
<p>
  In the UK, LOIs are sometimes called "Heads of Terms." In France, the equivalent is a "Lettre d'Intention"
  and French law imposes a duty to negotiate in good faith once an LOI is signed (Article 1112 of the Civil
  Code). In Germany, the "Letter of Intent" or "Absichtserklärung" has a similar structure but may require
  notarization if it references share transfers in a GmbH.
</p>

<div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-10">
  <p class="text-sm text-amber-800 font-medium">Legal Disclaimer</p>
  <p class="text-sm text-amber-700 mt-1">
    This template is provided for <strong>educational purposes only</strong>. It is not a substitute
    for qualified legal advice. Laws and regulations vary by jurisdiction. Always consult with an
    attorney licensed in the relevant jurisdiction before entering into any binding or non-binding
    agreements related to business acquisitions. SearchFundMarket assumes no responsibility for any
    actions taken based on this template.
  </p>
</div>
`,
};
