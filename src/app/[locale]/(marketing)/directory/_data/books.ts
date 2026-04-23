import type { BookEntry } from "./types";

export const books: BookEntry[] = [
  // --- Search Fund & SME Acquisition ---
  {
    kind: "book",
    title: "Buy Then Build: How Acquisition Entrepreneurs Outsmart the Startup Game",
    slug: "buy-then-build",
    author: "Walker Deibel",
    year: 2018,
    description:
      "Buy Then Build is the definitive guide for entrepreneurs considering acquiring an existing business rather than starting one from scratch. Walker Deibel, a serial acquisition entrepreneur himself, lays out the case for why buying a business is often a faster and less risky path to business ownership than a startup. The book covers the entire acquisition process, from developing an acquisition thesis and identifying targets through valuation, due diligence, deal structuring, and financing. Deibel draws on research showing that acquiring an existing business significantly increases the probability of entrepreneurial success compared to launching a new venture. The book has become a foundational text in the search fund and ETA community.",
    category: "search-fund-specific",
    targetAudience: ["searcher", "self-funded searcher"],
    source: "Published book (Lioncrest Publishing, 2018)",
  },
  {
    kind: "book",
    title: "HBR Guide to Buying a Small Business",
    slug: "hbr-guide-to-buying-a-small-business",
    author: "Richard S. Ruback & Royce Yudkoff",
    year: 2017,
    description:
      "Written by Harvard Business School professors Richard Ruback and Royce Yudkoff, who teach the popular HBS course on entrepreneurship through acquisition, this guide provides a rigorous framework for evaluating and acquiring small businesses. The authors argue that buying a small business is the most underappreciated path to business ownership and wealth creation. The book covers how to identify enduringly profitable businesses, assess their value, negotiate favorable terms, and finance the acquisition. Drawing on decades of research and their experience advising hundreds of MBA students who have gone on to acquire businesses, Ruback and Yudkoff provide both analytical frameworks and practical advice for aspiring acquisition entrepreneurs.",
    category: "search-fund-specific",
    targetAudience: ["searcher", "investor"],
    source: "Published book (Harvard Business Review Press, 2017)",
  },
  {
    kind: "book",
    title: "Main Street Millionaire: How to Make Extraordinary Wealth Buying Ordinary Businesses",
    slug: "main-street-millionaire",
    author: "Codie Sanchez",
    year: 2024,
    description:
      "Main Street Millionaire by Codie Sanchez presents a roadmap for acquiring and operating small, traditional businesses as a wealth-building strategy. Sanchez, a former institutional investor who pivoted to acquiring small businesses, argues that ordinary main street businesses like laundromats, car washes, and service companies offer extraordinary returns when purchased and managed effectively. The book covers how to find acquisition targets, evaluate their profitability, negotiate with sellers, and implement operational improvements to increase cash flow. It is aimed at first-time acquirers and those seeking financial independence through business ownership rather than traditional employment or startup entrepreneurship.",
    category: "sme-acquisition",
    targetAudience: ["searcher", "self-funded searcher"],
    source: "Published book (Portfolio/Penguin, 2024)",
  },
  {
    kind: "book",
    title: "The Messy Marketplace: Selling Your Business in a World of Imperfect Buyers",
    slug: "the-messy-marketplace",
    author: "Brent Beshore",
    year: 2018,
    description:
      "The Messy Marketplace by Brent Beshore, founder of permanent capital vehicle adventur.es, provides a candid look at the realities of buying and selling small businesses. Beshore draws on his extensive experience acquiring and operating companies to describe the inefficiencies, emotional dynamics, and information asymmetries that characterize the SME transaction market. The book covers how deals actually get done in the lower middle market, including the role of brokers, the challenges of due diligence on private companies, the psychology of sellers, and the importance of cultural fit. For search fund entrepreneurs, the book offers a realistic perspective on the deal process that goes beyond textbook M&A frameworks.",
    category: "sme-acquisition",
    targetAudience: ["searcher", "investor"],
    source: "Published book (2018)",
  },
  // --- Operations ---
  {
    kind: "book",
    title: "The First 90 Days: Proven Strategies for Getting Up to Speed Faster and Smarter",
    slug: "the-first-90-days",
    author: "Michael D. Watkins",
    year: 2013,
    description:
      "The First 90 Days by Michael Watkins is essential reading for any search fund operator transitioning into the CEO role of their newly acquired business. The book provides a systematic framework for navigating leadership transitions, covering how to accelerate learning about a new organization, build relationships with key stakeholders, align expectations, secure early wins, and create coalitions for change. Watkins identifies common traps that derail leaders in transition and provides strategies to avoid them. For search fund entrepreneurs, who often face the unique challenge of stepping into a leadership role in a company they did not build, this book offers critical guidance on the first critical months post-acquisition.",
    category: "operations",
    targetAudience: ["searcher", "operator"],
    source: "Published book (Harvard Business Review Press, 2013)",
  },
  {
    kind: "book",
    title: "Good to Great: Why Some Companies Make the Leap... and Others Don't",
    slug: "good-to-great",
    author: "Jim Collins",
    year: 2001,
    description:
      "Good to Great is Jim Collins' landmark study of companies that made the transition from average performance to sustained excellence. Based on a rigorous five-year research project, Collins and his team identified key factors that distinguish great companies from merely good ones, including Level 5 Leadership, the Hedgehog Concept, and the Flywheel Effect. For search fund operators, the book provides a framework for thinking about how to take an acquired business from solid performance to exceptional results. Collins' research-based approach to identifying what drives enduring company performance makes this a valuable reference for anyone who has acquired a good business and aims to make it great.",
    category: "operations",
    targetAudience: ["operator", "searcher"],
    source: "Published book (HarperBusiness, 2001)",
  },
  {
    kind: "book",
    title: "Traction: Get a Grip on Your Business",
    slug: "traction-eos",
    author: "Gino Wickman",
    year: 2012,
    description:
      "Traction by Gino Wickman introduces the Entrepreneurial Operating System (EOS), a practical framework for running a business with clarity, discipline, and accountability. The book covers six key components of a successful business: Vision, People, Data, Issues, Process, and Traction. For search fund operators taking over an acquired business, EOS provides an actionable system for aligning the management team, setting priorities, solving problems systematically, and maintaining execution discipline. Wickman's framework has been adopted by tens of thousands of companies worldwide and is particularly popular among small and medium business operators. The book is valued for its simplicity and immediate applicability to the operational challenges that follow an acquisition.",
    category: "operations",
    targetAudience: ["operator", "searcher"],
    source: "Published book (BenBella Books, 2012)",
  },
  {
    kind: "book",
    title: "Scaling Up: How a Few Companies Make It... and Why the Rest Don't",
    slug: "scaling-up",
    author: "Verne Harnish",
    year: 2014,
    description:
      "Scaling Up by Verne Harnish is a comprehensive guide to growing a mid-sized business, organized around four key decisions every company must get right: People, Strategy, Execution, and Cash. The book provides practical tools including the One-Page Strategic Plan, the Rockefeller Habits Checklist, and frameworks for managing cash flow during growth. For search fund operators who have acquired a business and need to scale it, Harnish offers battle-tested methodologies for hiring the right people, developing a differentiated strategy, driving operational execution, and ensuring the business has adequate cash to fund growth. The book is widely used by CEOs and management teams in companies with revenues from several million to hundreds of millions.",
    category: "operations",
    targetAudience: ["operator"],
    source: "Published book (Gazelles Inc., 2014)",
  },
  {
    kind: "book",
    title: "The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It",
    slug: "the-e-myth-revisited",
    author: "Michael E. Gerber",
    year: 1995,
    description:
      "The E-Myth Revisited by Michael Gerber addresses the fundamental challenge that many small business owners face: working in the business rather than on it. Gerber introduces the concept of the entrepreneurial myth, the mistaken belief that understanding the technical work of a business means understanding how to run a business. The book advocates for building systems and processes that allow the business to operate independently of any single person, a concept Gerber calls the franchise prototype. For search fund operators acquiring owner-dependent businesses, this book provides critical insights on how to systematize operations, reduce key-person risk, and build a business that can scale beyond the founder's personal involvement.",
    category: "operations",
    targetAudience: ["operator", "searcher"],
    source: "Published book (HarperBusiness, 1995)",
  },
  // --- Valuation ---
  {
    kind: "book",
    title: "Investment Valuation: Tools and Techniques for Determining the Value of Any Asset",
    slug: "investment-valuation",
    author: "Aswath Damodaran",
    year: 2012,
    description:
      "Investment Valuation by NYU Stern professor Aswath Damodaran is the comprehensive reference on business valuation methodology. The book covers the full spectrum of valuation approaches including discounted cash flow analysis, relative valuation using multiples, real options valuation, and valuation of specific asset types. Damodaran provides detailed guidance on estimating discount rates, projecting cash flows, selecting comparable companies, and adjusting for risk. For search fund practitioners, the book serves as the authoritative reference for understanding and applying valuation techniques to potential acquisition targets. While academic in rigor, Damodaran's writing is accessible and supported by extensive real-world examples from public and private markets.",
    category: "valuation",
    targetAudience: ["searcher", "investor"],
    source: "Published book (Wiley, 3rd edition, 2012)",
  },
  {
    kind: "book",
    title: "The Little Book of Valuation: How to Value a Company, Pick a Stock, and Profit",
    slug: "the-little-book-of-valuation",
    author: "Aswath Damodaran",
    year: 2011,
    description:
      "The Little Book of Valuation is Aswath Damodaran's condensed guide to business valuation, distilling the core concepts from his larger works into an accessible format. The book covers intrinsic valuation through discounted cash flow analysis, relative valuation using market multiples, and practical approaches to valuing companies across different sectors. Damodaran explains key concepts such as risk-free rates, equity risk premiums, terminal value, and revenue multiples in straightforward language. For search fund entrepreneurs who need a solid grounding in valuation without the depth of a full academic textbook, this book provides an efficient introduction to the frameworks and techniques needed to assess what a business is worth.",
    category: "valuation",
    targetAudience: ["searcher"],
    source: "Published book (Wiley, 2011)",
  },
  {
    kind: "book",
    title: "Valuation: Measuring and Managing the Value of Companies",
    slug: "valuation-mckinsey",
    author: "Tim Koller, Marc Goedhart & David Wessels",
    year: 2020,
    description:
      "Valuation by McKinsey & Company consultants Koller, Goedhart, and Wessels is widely regarded as the practitioner's bible on corporate valuation. Now in its seventh edition, the book provides a rigorous yet practical framework for valuing companies, grounded in the principle that value creation is driven by a company's ability to earn returns on invested capital above the cost of capital. The book covers DCF valuation in depth, including forecasting techniques, WACC estimation, and terminal value calculation, as well as multiples-based valuation, scenario analysis, and valuation in special situations. For search fund investors and searchers, it provides the analytical foundation for assessing target companies and structuring deals that create value.",
    category: "valuation",
    targetAudience: ["searcher", "investor"],
    source: "Published book (Wiley, 7th edition, 2020)",
  },
  // --- Negotiation ---
  {
    kind: "book",
    title: "Getting to Yes: Negotiating Agreement Without Giving In",
    slug: "getting-to-yes",
    author: "Roger Fisher & William Ury",
    year: 1981,
    description:
      "Getting to Yes is the foundational text on principled negotiation, developed at the Harvard Negotiation Project by Roger Fisher and William Ury. The book introduces the concept of interest-based negotiation, where parties focus on underlying interests rather than positional bargaining. Key frameworks include separating people from the problem, focusing on interests not positions, generating options for mutual gain, and insisting on objective criteria. For search fund entrepreneurs, who must negotiate with sellers, investors, lenders, and employees, the book provides essential tools for reaching agreements that satisfy all parties. Its emphasis on building long-term relationships while achieving favorable outcomes is particularly relevant to ETA deal-making.",
    category: "negotiation",
    targetAudience: ["searcher", "operator"],
    source: "Published book (Penguin, 1981; updated editions)",
  },
  {
    kind: "book",
    title: "Never Split the Difference: Negotiating As If Your Life Depended On It",
    slug: "never-split-the-difference",
    author: "Chris Voss",
    year: 2016,
    description:
      "Never Split the Difference by former FBI hostage negotiator Chris Voss offers a practical approach to negotiation drawn from high-stakes real-world experience. Voss introduces techniques such as tactical empathy, mirroring, labeling emotions, calibrated questions, and the Ackerman bargaining model. The book challenges conventional negotiation wisdom by arguing that emotional intelligence and psychological insight are more powerful than rational frameworks alone. For search fund entrepreneurs negotiating with business sellers, who often have deep emotional attachment to their companies, Voss's techniques for managing emotions, building rapport, and uncovering hidden information are directly applicable. The book has become a popular read in the ETA community.",
    category: "negotiation",
    targetAudience: ["searcher", "operator"],
    source: "Published book (HarperBusiness, 2016)",
  },
  {
    kind: "book",
    title: "Negotiation Genius: How to Overcome Obstacles and Achieve Brilliant Results at the Bargaining Table and Beyond",
    slug: "negotiation-genius",
    author: "Deepak Malhotra & Max Bazerman",
    year: 2007,
    description:
      "Negotiation Genius by Harvard Business School professors Deepak Malhotra and Max Bazerman provides a systematic approach to becoming a more effective negotiator. The book goes beyond basic negotiation principles to cover advanced topics such as negotiating from a position of weakness, dealing with lies and deception, managing multiple negotiations simultaneously, and creating value in complex multi-party deals. The authors draw on behavioral economics research and real-world case studies to illustrate how cognitive biases affect negotiation outcomes. For search fund entrepreneurs engaged in complex deal negotiations involving multiple parties, earnouts, seller financing, and investor terms, this book provides sophisticated frameworks for achieving optimal results.",
    category: "negotiation",
    targetAudience: ["searcher", "investor"],
    source: "Published book (Bantam, 2007)",
  },
  // --- Leadership ---
  {
    kind: "book",
    title: "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers",
    slug: "the-hard-thing-about-hard-things",
    author: "Ben Horowitz",
    year: 2014,
    description:
      "The Hard Thing About Hard Things by venture capitalist and former CEO Ben Horowitz offers candid advice on the toughest challenges of leading a company. Unlike most business books that focus on success, Horowitz writes about the difficult decisions that leaders face, including laying off employees, managing your own psychology, dealing with competitive threats, and making decisions with imperfect information. For search fund operators who step into the CEO role of an acquired business, the book provides honest perspective on the emotional and practical challenges of leadership. Horowitz's no-nonsense style and real-world examples make this a grounding read for any new operator facing the reality that running a business is harder than it looks.",
    category: "leadership",
    targetAudience: ["operator", "searcher"],
    source: "Published book (HarperBusiness, 2014)",
  },
  {
    kind: "book",
    title: "Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs",
    slug: "measure-what-matters",
    author: "John Doerr",
    year: 2018,
    description:
      "Measure What Matters by legendary venture capitalist John Doerr introduces the OKR (Objectives and Key Results) framework that has been adopted by organizations from Google to the Gates Foundation. The book explains how to set ambitious objectives and track progress through measurable key results, creating alignment, accountability, and focus across an organization. For search fund operators managing their acquired businesses, OKRs provide a practical goal-setting system that connects company-wide strategy to individual team and employee performance. Doerr illustrates the framework with case studies from companies of various sizes, demonstrating how OKRs can drive execution and cultural change even in established organizations undergoing transformation.",
    category: "leadership",
    targetAudience: ["operator"],
    source: "Published book (Portfolio/Penguin, 2018)",
  },
];
