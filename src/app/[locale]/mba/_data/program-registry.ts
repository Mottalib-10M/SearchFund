import type { JSX } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProgramFaculty {
  name: string;
  title: string;
  url?: string;
  etaRole: string;
}

export interface ProgramCourse {
  code?: string;
  name: string;
  instructor: string;
}

export interface ProgramAlumni {
  name: string;
  mbaYear?: string;
  company: string;
  outcome: string;
  sourceUrl?: string;
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export type Tier = 1 | 2 | 3;
export type Region = "north-america" | "europe";

export interface ProgramMeta {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  country: string;
  region: Region;
  tier: Tier;
  officialUrl: string;
  etaUrl?: string;
  tuition: string;
  tuitionYear: string;
  description: string; // 50-word card description
  longDescription: string; // full profile meta description
  ogTitle: string;
  ogDescription: string;
  datePublished: string;
  dateModified: string;
  courseCount: number;
  faculty: ProgramFaculty[];
  courses: ProgramCourse[];
  alumni: ProgramAlumni[];
  faqs: ProgramFAQ[];
  isStub?: boolean;
}

/** Serializable card for client component */
export interface ProgramCard {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  region: Region;
  tier: Tier;
  description: string;
  courseCount: number;
  isStub?: boolean;
}

// ---------------------------------------------------------------------------
// Program data
// ---------------------------------------------------------------------------

export const allPrograms: ProgramMeta[] = [
  // ── Tier 1 ───────────────────────────────────────────────────────────
  {
    slug: "stanford-gsb",
    name: "Stanford Graduate School of Business",
    shortName: "Stanford GSB",
    location: "Stanford, California",
    country: "USA",
    region: "north-america",
    tier: 1,
    officialUrl: "https://www.gsb.stanford.edu/",
    etaUrl: "https://www.gsb.stanford.edu/experience/about/centers-institutes/ces",
    tuition: "$85,755/year",
    tuitionYear: "2025-2026",
    description:
      "Birthplace of the search fund model (1984). Home of the biennial Stanford Search Fund Study, 6 ETA faculty, and 3 dedicated courses. 681 funds tracked, 35.1% aggregate IRR.",
    longDescription:
      "Stanford GSB invented the search fund model in 1984 and remains the intellectual center of ETA. The Center for Entrepreneurial Studies tracks 681 funds, and the biennial Stanford Search Fund Study is the industry's definitive dataset.",
    ogTitle: "Stanford GSB: The Birthplace of Search Funds",
    ogDescription:
      "Stanford GSB created the search fund model in 1984. 6 ETA faculty, 3 dedicated courses, 681 funds tracked. The definitive MBA for aspiring searchers.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 3,
    faculty: [
      { name: "H. Irving Grousbeck", title: "MBA Class of 1980 Adjunct Professor", url: "https://www.gsb.stanford.edu/faculty-research/faculty/h-irving-grousbeck", etaRole: "Co-creator of the search fund model (1984)" },
      { name: "Peter B. Kelly", title: "Lecturer in Management", url: "https://www.gsb.stanford.edu/faculty-research/faculty/peter-b-kelly", etaRole: "Co-author of Stanford 2024 Search Fund Study" },
      { name: "Jim Ellis", title: "Lecturer in Management", url: "https://www.gsb.stanford.edu/faculty-research/faculty/jim-ellis", etaRole: "Co-acquired Road Rescue, now Asurion (5,275x MOIC)" },
      { name: "Gerald Risk", title: "Lecturer", url: "https://www.gsb.stanford.edu/faculty-research/faculty/gerald-risk", etaRole: "100+ search fund investments" },
      { name: "Graham Weaver", title: "Lecturer", url: "https://www.gsb.stanford.edu/faculty-research/faculty/graham-weaver", etaRole: "Founder & CEO of Alpine Investors (~$17B AUM)" },
      { name: "Sara Heston", title: "Associate Director, Search Fund Project", url: "https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/faculty-staff", etaRole: "Co-author of Stanford 2024 Search Fund Study" },
    ],
    courses: [
      { code: "STRAMGT 543", name: "Entrepreneurial Acquisition", instructor: "Jim Ellis, Gerald Risk" },
      { code: "STRAMGT 549", name: "Search Fund Garage", instructor: "Peter Kelly" },
      { code: "STRAMGT 355", name: "Managing Growing Enterprises", instructor: "Peter Kelly, Graham Weaver" },
    ],
    alumni: [
      { name: "Jim Southern", mbaYear: "~1983", company: "Uniform Printing", outcome: "First-ever search fund acquisition (24x return)", sourceUrl: "https://polsky.uchicago.edu/wp-content/uploads/2018/03/Booth-Research-Evolution-of-ETA_FA110716.pdf" },
      { name: "Kevin Taweel", mbaYear: "MBA '92", company: "Road Rescue / Asurion", outcome: "Best search fund return in history (5,275x MOIC)", sourceUrl: "https://www.gsb.stanford.edu/insights/how-ceos-waiting-buy-companies-they-want-run" },
      { name: "Jim Ellis", mbaYear: "MBA '93", company: "Road Rescue / Asurion", outcome: "Co-acquisition with Taweel, now GSB faculty", sourceUrl: "https://www.gsb.stanford.edu/faculty-research/faculty/jim-ellis" },
      { name: "Diana Ding & Sydney Lehman", mbaYear: "MBA '22", company: "Zone 2 Partners", outcome: "Women's health search fund", sourceUrl: "https://www.gsb.stanford.edu/insights/what-it-takes-be-search-fund-entrepreneur" },
    ],
    faqs: [
      { question: "How many search funds has Stanford tracked?", answer: "The Stanford Center for Entrepreneurial Studies has tracked 681 first-time search funds in the US and Canada since 1984, published in the biennial Stanford Search Fund Study." },
      { question: "What courses does Stanford offer for ETA?", answer: "Stanford GSB offers three dedicated ETA courses: STRAMGT 543 (Entrepreneurial Acquisition), STRAMGT 549 (Search Fund Garage), and STRAMGT 355 (Managing Growing Enterprises)." },
      { question: "What is the tuition at Stanford GSB?", answer: "Stanford GSB tuition is approximately $85,755 per year for the 2025-2026 academic year, with significant fellowship support averaging around $50,000 per year." },
      { question: "Who created the search fund model?", answer: "H. Irving Grousbeck and Jim Southern created the search fund model at Stanford GSB in 1984. Southern raised the first-ever search fund and acquired Uniform Printing, generating a 24x return." },
      { question: "What returns have Stanford search funds generated?", answer: "According to the Stanford 2024 Search Fund Study, the aggregate pre-tax IRR across all 681 tracked funds is 35.1%, with a 4.5x return on invested capital (ROIC)." },
    ],
  },
  {
    slug: "iese",
    name: "IESE Business School",
    shortName: "IESE",
    location: "Barcelona & Madrid, Spain",
    country: "Spain",
    region: "europe",
    tier: 1,
    officialUrl: "https://www.iese.edu",
    etaUrl: "https://www.iese.edu/entrepreneurship/search-funds/",
    tuition: "EUR 114,000 total",
    tuitionYear: "2026 intake",
    description:
      "The leading European MBA for ETA. Home of the International Search Fund Center (est. 2011), which tracks 320 international funds. 60+ IESE alumni have raised search funds across 20 countries.",
    longDescription:
      "IESE Business School leads European ETA education through its International Search Fund Center. The biennial International Search Fund Study tracks 320 funds, and 60+ IESE alumni have launched search funds across 20 countries on 5 continents.",
    ogTitle: "IESE Business School: Europe's Leading MBA for Search Funds",
    ogDescription:
      "IESE leads European ETA with its International Search Fund Center, 320 tracked funds, 60+ alumni searchers across 20 countries, and a dedicated MBA elective.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 2,
    faculty: [
      { name: "Jan Simon", title: "Professor of Practice; Academic Director, ISF Center", url: "https://www.iese.edu/faculty-research/faculty/jan-simon/", etaRole: "Teaches MBA search fund elective, co-directs ISF Center" },
      { name: "Ann-Sophie Kowalewski", title: "PhD Candidate / Researcher", url: "https://www.iese.edu/media/research/pdfs/ST-0658-E", etaRole: "Lead author of 2024 International Search Fund Study" },
    ],
    courses: [
      { name: "Search Fund Course (MBA Elective)", instructor: "Jan Simon" },
      { name: "Search Fund & Entrepreneurial Acquisitions Bootcamp", instructor: "Various (Exec Ed)" },
    ],
    alumni: [
      { name: "Yoshiaki Kurosawa", mbaYear: "MBA '19", company: "JBS Partners GK", outcome: "Founded the first search fund in Japan", sourceUrl: "https://blog.iese.edu/mba/the-very-first-search-fund-in-japan/" },
      { name: "Lenka Kolarova", mbaYear: "MBA '11", company: "Istria Capital", outcome: "Co-authored IESE 2020 & 2022 SF studies", sourceUrl: "https://www.womenssearchnetwork.com/team/lenka-kolarova" },
    ],
    faqs: [
      { question: "How many international search funds has IESE tracked?", answer: "The IESE International Search Fund Center has tracked 320 international search funds as of the 2024 study, with 59 new funds launched in 2023 alone, a record high." },
      { question: "What makes IESE the top European MBA for ETA?", answer: "IESE established the first International Search Fund Center in 2011, offers a dedicated MBA elective, and has produced 60+ alumni searchers across 20 countries. Its biennial International Search Fund Study is the definitive resource for non-US search fund data." },
      { question: "What is the tuition at IESE?", answer: "IESE MBA tuition is EUR 114,000 total for the 2-year program (EUR 47,000 in Year 1 and EUR 57,000 in Year 2) for the 2026 intake." },
      { question: "Does IESE have a search fund conference?", answer: "IESE co-organizes an annual ETA Conference with London Business School and HEC Paris. The 6th Annual ETA Conference was held on March 28, 2025, bringing together searchers, investors, and faculty from across Europe." },
      { question: "What are IESE international search fund returns?", answer: "According to the IESE 2024 International Search Fund Study, international search funds have generated an aggregate ROI of 2.0x and an IRR of 18.1%. Spain leads with 67 cumulative funds, and 71% of international search fund founders hold an MBA." },
    ],
  },
  {
    slug: "harvard-business-school",
    name: "Harvard Business School",
    shortName: "HBS",
    location: "Boston, Massachusetts",
    country: "USA",
    region: "north-america",
    tier: 1,
    officialUrl: "https://www.hbs.edu",
    tuition: "$84,760/year",
    tuitionYear: "2026-2027",
    description:
      "Three dedicated ETA courses, the Ruback-Yudkoff textbook, a $130K Search Fund Fellowship, and an annual ETA conference with over 1,000 attendees. Home of the most widely read ETA case studies.",
    longDescription:
      "Harvard Business School offers the deepest case-study library in ETA, anchored by Professors Ruback and Yudkoff, authors of the foundational HBR Guide to Buying a Small Business. Three dedicated courses and a $130K fellowship support aspiring searchers.",
    ogTitle: "Harvard Business School: ETA Courses, Fellowship & Case Studies",
    ogDescription:
      "HBS offers 3 ETA courses, a $130K Search Fund Fellowship, and the Ruback-Yudkoff textbook. Annual ETA conference draws 1,000+ attendees.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 3,
    faculty: [
      { name: "Richard S. Ruback", title: "Baker Foundation Professor (Emeritus)", url: "https://www.hbs.edu/faculty/Pages/profile.aspx?facId=6543", etaRole: "Co-author of HBR Guide to Buying a Small Business (65K+ copies)" },
      { name: "Royce G. Yudkoff", title: "Professor of Management Practice", url: "https://www.hbs.edu/faculty/Pages/profile.aspx?facId=589675", etaRole: "Co-author with Ruback, co-founded ABRY Partners" },
      { name: "Jason T. Pananos", title: "Senior Lecturer", url: "https://www.hbs.edu/faculty/Pages/profile.aspx?facId=363563", etaRole: "14 acquisitions, 43% CAGR" },
      { name: "Archie L. Jones", title: "Senior Lecturer", url: "https://www.hbs.edu/faculty/Pages/profile.aspx?facId=121067", etaRole: "Teaches search fund investment series" },
    ],
    courses: [
      { code: "HBSMBA 1452", name: "Financial Management of Smaller Firms", instructor: "Ruback & Yudkoff" },
      { code: "HBSMBA 6452", name: "Field Course: Entrepreneurship through Acquisition", instructor: "Ruback & Yudkoff" },
      { code: "HBSMBA 6453", name: "Field Course: Value Creation in SME Firms", instructor: "Pananos" },
    ],
    alumni: [
      { name: "Robin Kovitz", mbaYear: "MBA '07", company: "Baskits Inc.", outcome: "Largest Canadian gift basket company", sourceUrl: "https://www.alumni.hbs.edu/stories/Pages/story-bulletin.aspx?num=9478" },
      { name: "Greg Ambrosia", mbaYear: "MBA '13", company: "Citywide Building Services", outcome: "$10.3M revenue acquisition", sourceUrl: "https://jimsteinsharpe.com/case-histories/" },
      { name: "Matt Perelman", mbaYear: "MBA '15", company: "Garnett Station Partners", outcome: "23 Burger King locations, grew to $3.5B AUM", sourceUrl: "https://www.hbs.edu/faculty/Pages/item.aspx?num=58088" },
      { name: "Alex Sloane", mbaYear: "MBA '15", company: "Garnett Station Partners", outcome: "Co-founder with Perelman", sourceUrl: "https://www.hbs.edu/faculty/Pages/item.aspx?num=58088" },
    ],
    faqs: [
      { question: "What ETA courses does Harvard offer?", answer: "HBS offers three dedicated ETA courses: HBSMBA 1452 (Financial Management of Smaller Firms), HBSMBA 6452 (Field Course: Entrepreneurship through Acquisition), and HBSMBA 6453 (Field Course: Value Creation in SME Firms)." },
      { question: "What is the HBS Search Fund Fellowship?", answer: "The HBS Search Fund Fellowship provides up to $65,000 per year ($130,000 total) to graduating MBAs who plan to pursue a search fund immediately after graduation. It is one of the most generous ETA-specific fellowships available." },
      { question: "What is the tuition at Harvard Business School?", answer: "HBS tuition is $84,760 per year for the 2026-2027 academic year." },
      { question: "Who wrote the most influential ETA textbook?", answer: "Professors Richard Ruback and Royce Yudkoff of HBS wrote the HBR Guide to Buying a Small Business, which has sold over 65,000 copies and is considered the foundational text of the ETA field." },
      { question: "Does HBS have a search fund conference?", answer: "Yes. The HBS ETA Club hosts an annual conference that draws approximately 1,000 attendees, making it one of the largest ETA-focused events in North America." },
    ],
  },

  // ── Tier 2 ───────────────────────────────────────────────────────────
  {
    slug: "yale-som",
    name: "Yale School of Management",
    shortName: "Yale SOM",
    location: "New Haven, Connecticut",
    country: "USA",
    region: "north-america",
    tier: 2,
    officialUrl: "https://som.yale.edu",
    tuition: "$91,400/year",
    tuitionYear: "2026-2027",
    description:
      "The deepest academic scholarship in ETA. A.J. Wasserstein has authored 100+ case studies and teaches 3 dedicated courses. Strong alumni pipeline with verified searcher outcomes.",
    longDescription:
      "Yale SOM offers unmatched academic depth in ETA through Professor A.J. Wasserstein, who has authored over 100 case studies and teaches three dedicated courses. Multiple verified alumni have launched search funds across the US and internationally.",
    ogTitle: "Yale SOM: The Deepest Academic ETA Program",
    ogDescription:
      "A.J. Wasserstein, 100+ case studies, 3 ETA courses, and strong alumni outcomes. Yale SOM offers unmatched academic depth for aspiring search fund entrepreneurs.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 3,
    faculty: [
      { name: "A.J. Wasserstein", title: "Eugene F. Williams, Jr., Senior Lecturer", url: "https://som.yale.edu/faculty-research/faculty-directory/aj-wasserstein", etaRole: "Former CEO of ArchivesOne, 100+ ETA case studies, Teaching Excellence Award 2022 & 2024" },
    ],
    courses: [
      { code: "MGT 671", name: "Entrepreneurship Through Acquisition", instructor: "A.J. Wasserstein" },
      { code: "MGT 674", name: "Leading Small and Medium Enterprises", instructor: "A.J. Wasserstein" },
      { code: "MGT 677", name: "Rollups, Consolidations and Programmatic Acquisitions", instructor: "A.J. Wasserstein" },
    ],
    alumni: [
      { name: "Matt Dittrich", mbaYear: "SOM '18", company: "Blue Wood Capital LLC", outcome: "Founded Yale ETA Club", sourceUrl: "https://som.yale.edu/blog/matt-dittrich-18-launches-search-fund-blue-wood-capital-llc" },
      { name: "Ross Butler", mbaYear: "SOM '21", company: "BPI Information Systems", outcome: "Acquired while still a student", sourceUrl: "https://som.yale.edu/news/2021/04/finding-an-entrepreneurial-path" },
      { name: "Jose P. Moreno", mbaYear: "SOM '17", company: "Pivot Capital Fund", outcome: "Acquired Colombian food services company ($13M revenue)", sourceUrl: "https://som.yale.edu/blog/jose-p-moreno-17-and-pivot-capital-fund" },
      { name: "Georgyi Vekhov", mbaYear: "SOM '20", company: "Milestone Capital / UDP Auto", outcome: "Russia's first search fund acquisition", sourceUrl: "https://som.yale.edu/story/2023/georgyi-vekhov-20-acquires-moscow-based-udp-auto-through-search-fund" },
    ],
    faqs: [
      { question: "How many ETA case studies has Yale produced?", answer: "Professor A.J. Wasserstein has authored over 100 case studies on entrepreneurship through acquisition, the largest collection by any single academic in the field." },
      { question: "What ETA courses does Yale SOM offer?", answer: "Yale SOM offers three dedicated courses: MGT 671 (Entrepreneurship Through Acquisition), MGT 674 (Leading Small and Medium Enterprises), and MGT 677 (Rollups, Consolidations and Programmatic Acquisitions)." },
      { question: "What is the tuition at Yale SOM?", answer: "Yale SOM tuition is $90,900 per year plus a $500 fee ($91,400 total) for the 2026-2027 academic year." },
      { question: "Who is A.J. Wasserstein?", answer: "A.J. Wasserstein is a Senior Lecturer at Yale SOM, former CEO of ArchivesOne (sold to Iron Mountain), and the most prolific academic in ETA. He has authored 100+ case studies and won the Teaching Excellence Award in 2022 and 2024." },
      { question: "Has Yale SOM produced successful searchers?", answer: "Yes. Notable alumni include Matt Dittrich (Blue Wood Capital), Ross Butler (acquired BPI Information Systems while still a student), Jose Moreno (Pivot Capital, Colombia), and Georgyi Vekhov (Russia's first search fund)." },
    ],
  },
  {
    slug: "kellogg",
    name: "Kellogg School of Management",
    shortName: "Kellogg",
    location: "Evanston, Illinois",
    country: "USA",
    region: "north-america",
    tier: 2,
    officialUrl: "https://www.kellogg.northwestern.edu",
    etaUrl: "https://kellogg.campusgroups.com/etac/home/",
    tuition: "$86,370/year (2-year)",
    tuitionYear: "2025-2026",
    description:
      "Two dedicated ETA courses, the Zell Fellows ETA track (since 2013), and co-host of the largest US ETA conference alongside Chicago Booth. Active 100+ member ETA club.",
    longDescription:
      "Kellogg pairs its well-known Zell Fellows program with two dedicated ETA courses and a vibrant 100+ member ETA club. The school co-hosts the largest US ETA conference alongside Chicago Booth.",
    ogTitle: "Kellogg School of Management: Zell Fellows & ETA Courses",
    ogDescription:
      "Kellogg offers 2 ETA courses, the Zell Fellows program, and co-hosts the largest US ETA conference. 100+ member ETA club and dedicated faculty.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 2,
    faculty: [
      { name: "Alex Schneider", title: "Adjunct Lecturer; Director, Zell Fellows ETA track", url: "https://www.kellogg.northwestern.edu/academics-research/faculty/schneider_alex/", etaRole: "20+ years PE/IB, runs Zell Fellows ETA program" },
    ],
    courses: [
      { code: "ENTR-905", name: "Entrepreneurship Through Acquisition", instructor: "Alex Schneider" },
      { code: "ENTR-910", name: "Acquisition & Management of a Small Business", instructor: "Alex Schneider" },
    ],
    alumni: [],
    faqs: [
      { question: "What is the Zell Fellows ETA program?", answer: "The Zell Fellows program at Kellogg includes a dedicated ETA track that has been running since 2013. It supports approximately 20 students per year with mentorship, funding, and structured coursework to prepare them for search fund entrepreneurship." },
      { question: "What ETA courses does Kellogg offer?", answer: "Kellogg offers two dedicated courses: ENTR-905 (Entrepreneurship Through Acquisition) and ENTR-910 (Acquisition & Management of a Small Business), both taught by Alex Schneider." },
      { question: "What is the tuition at Kellogg?", answer: "Kellogg tuition is $86,370 per year for the 2-year MBA program (2025-2026). The 1-year accelerated program costs $119,996." },
      { question: "Does Kellogg have an ETA conference?", answer: "Kellogg co-hosts the Booth-Kellogg ETA Conference with Chicago Booth. The 11th edition (November 2024) drew approximately 1,000 attendees from 13 countries and 47 universities." },
      { question: "Does Kellogg have an ETA club?", answer: "Yes. ETA@Kellogg has over 100 active members and is one of the most established student-led ETA organizations at any business school." },
    ],
  },
  {
    slug: "wharton",
    name: "The Wharton School",
    shortName: "Wharton",
    location: "Philadelphia, Pennsylvania",
    country: "USA",
    region: "north-america",
    tier: 2,
    officialUrl: "https://mba.wharton.upenn.edu/",
    etaUrl: "https://venturelab.upenn.edu/ETA",
    tuition: "$87,970/year",
    tuitionYear: "2026-2027",
    description:
      "A $10M ETA endowment (the largest known), the Perlman Fellowship ($50K), a new ETA Incubator launching in 2026, and a dedicated course taught by an operator-turned-professor.",
    longDescription:
      "Wharton is investing aggressively in ETA with a $10M endowment, the Perlman Fellowship, and a new ETA Incubator. Jim Vesterman teaches the dedicated Search Fund Entrepreneurship course from first-hand acquisition experience.",
    ogTitle: "Wharton: $10M ETA Endowment & Perlman Fellowship",
    ogDescription:
      "Wharton offers a $10M ETA endowment, the $50K Perlman Fellowship, an ETA Incubator, and a dedicated course taught by operator Jim Vesterman.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 1,
    faculty: [
      { name: "Jim Vesterman", title: "Lecturer", url: "https://mgmt.wharton.upenn.edu/profile/jamesves/", etaRole: "CEO of Raptor Technologies (acquired via search fund, grew from 7K to 34K customers)" },
    ],
    courses: [
      { code: "MGMT 8140", name: "Search Fund Entrepreneurship", instructor: "Jim Vesterman" },
    ],
    alumni: [
      { name: "Jim Vesterman", mbaYear: "MBA '06", company: "Raptor Technologies", outcome: "Acquired via search fund in 2012, grew customer base from 7K to 34K", sourceUrl: "https://mgmt.wharton.upenn.edu/profile/jamesves/" },
    ],
    faqs: [
      { question: "What is the Wharton ETA endowment?", answer: "In 2024, Ellen Hanson and Richard Perlman (W'68) donated $10 million to Wharton to support ETA education. This is believed to be the largest known ETA-specific university donation." },
      { question: "What is the Perlman ETA Fellowship?", answer: "The Perlman ETA Fellowship provides up to $50,000 in non-dilutive funding to approximately 4 Wharton MBA graduates per year who plan to pursue a search fund." },
      { question: "What is the tuition at Wharton?", answer: "Wharton MBA tuition is $87,970 per year (2026-2027). Including fees, the total cost is approximately $93,008 per year." },
      { question: "Does Wharton have an ETA Incubator?", answer: "Yes. Wharton is launching a cohort-based ETA Incubator in 2026 through VentureLab, designed to support students through the search fund launch process." },
      { question: "Who teaches ETA at Wharton?", answer: "Jim Vesterman, who acquired Raptor Technologies via a search fund in 2012 and grew the company from 7,000 to 34,000 customers, teaches MGMT 8140 (Search Fund Entrepreneurship)." },
    ],
  },
  {
    slug: "chicago-booth",
    name: "University of Chicago Booth School of Business",
    shortName: "Chicago Booth",
    location: "Chicago, Illinois",
    country: "USA",
    region: "north-america",
    tier: 2,
    officialUrl: "https://www.chicagobooth.edu",
    etaUrl: "https://polsky.uchicago.edu/programs-events/entrepreneurship-through-acquisition/",
    tuition: "$87,354/year",
    tuitionYear: "2025-2026",
    description:
      "The broadest ETA support infrastructure: ETA Fellows program, Discovery Cohort, Polsky Center resources, and co-host of the largest US ETA conference (1,000+ attendees, 13 countries).",
    longDescription:
      "Chicago Booth offers the broadest ETA support infrastructure of any MBA program through the Polsky Center. The ETA Fellows program, Discovery Cohort, and the annual Booth-Kellogg ETA Conference draw 1,000+ attendees from 13 countries.",
    ogTitle: "Chicago Booth: ETA Fellows, Polsky Center & Conference",
    ogDescription:
      "Booth offers ETA Fellows, Discovery Cohort, Polsky Center support, and co-hosts the largest US ETA conference (1,000+ attendees). Course code BUSN 34302.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 1,
    faculty: [
      { name: "Mark Agnew", title: "Adjunct Professor of Entrepreneurship", url: "https://www.chicagobooth.edu/faculty/directory/a/mark-agnew", etaRole: "Former CEO of Lou Malnati's (4,000+ employees)" },
      { name: "Brian O'Connor", title: "Adjunct Professor of Entrepreneurship", url: "https://www.chicagobooth.edu/faculty/directory/o/brian-o-connor", etaRole: "Founder, NextGen Growth Partners; founded Fellowship Capital Partners (search fund, 2011)" },
      { name: "Alex Hodgkin", title: "Senior Advisor for ETA, Polsky Center", url: "https://polsky.uchicago.edu/entrepreneurship-education/mentorship-directory/", etaRole: "MBA '14, co-founder & CEO of Intrinsic, created ETA program" },
    ],
    courses: [
      { code: "BUSN 34302", name: "Entrepreneurship through Acquisition", instructor: "Mark Agnew, Brian O'Connor" },
    ],
    alumni: [],
    faqs: [
      { question: "What is the Booth ETA Fellows program?", answer: "Launched in Autumn 2024, the ETA Fellows program at Booth selects 6-8 fellows per year for intensive mentorship, Polsky Center resources, and community support. It was funded by a donation from A. Michael Muscolino (MBA '99)." },
      { question: "What is the Booth-Kellogg ETA Conference?", answer: "The annual Booth-Kellogg ETA Conference is the largest ETA-focused event in the US. The 11th edition (November 2024) drew approximately 1,000 attendees from 13 countries and 47 universities." },
      { question: "What is the tuition at Chicago Booth?", answer: "Chicago Booth tuition is $87,354 per year ($29,118 per quarter) for the 2025-2026 academic year." },
      { question: "What ETA course does Booth offer?", answer: "Booth offers BUSN 34302 (Entrepreneurship through Acquisition), taught by Mark Agnew and Brian O'Connor. The course runs 3 sections per year and serves approximately 140 students, consistently oversubscribed." },
      { question: "What is the Polsky Center's role in ETA?", answer: "The Polsky Center for Entrepreneurship and Innovation at the University of Chicago serves as the institutional hub for all ETA activities at Booth, including the ETA Fellows, Discovery Cohort, mentorship, and conference organization." },
    ],
  },
  {
    slug: "insead",
    name: "INSEAD",
    shortName: "INSEAD",
    location: "Fontainebleau, France & Singapore",
    country: "France / Singapore",
    region: "europe",
    tier: 2,
    officialUrl: "https://www.insead.edu",
    etaUrl: "https://www.insead.edu/insead-centre-entrepreneurship/entrepreneurship-through-acquisition",
    tuition: "EUR 109,860 total",
    tuitionYear: "2026 intake",
    description:
      "A dedicated ETA Hub led by tenured faculty, 100+ alumni ETA vehicles, and a new biannual conference series (Singapore + Fontainebleau). The only top MBA offering ETA across two continents.",
    longDescription:
      "INSEAD has built a dedicated ETA & Search Funds Hub led by tenured Professor Ivana Naumovska. The school claims 100+ alumni ETA vehicles and launched a biannual conference series in 2025, spanning both its Fontainebleau and Singapore campuses.",
    ogTitle: "INSEAD: ETA Hub, 100+ Alumni Vehicles & Global Reach",
    ogDescription:
      "INSEAD offers a dedicated ETA Hub, tenured faculty lead, 100+ alumni ETA vehicles, and biannual conferences. The only top MBA with ETA across two continents.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 1,
    faculty: [
      { name: "Ivana Naumovska", title: "Associate Professor of Entrepreneurship & Family Enterprise (tenured)", url: "https://www.insead.edu/faculty/ivana-naumovska", etaRole: "Academic Director of ETA & Search Funds Hub, Poets&Quants Best 40-Under-40 (2024)" },
    ],
    courses: [
      { name: "Realising Entrepreneurial Potential", instructor: "Ivana Naumovska" },
    ],
    alumni: [],
    faqs: [
      { question: "Does INSEAD have a dedicated ETA program?", answer: "Yes. INSEAD launched a dedicated ETA & Search Funds Hub led by tenured Professor Ivana Naumovska. The Hub coordinates curriculum, events, mentorship, and community for aspiring search fund entrepreneurs across INSEAD's campuses." },
      { question: "How many INSEAD alumni have launched ETA ventures?", answer: "INSEAD reports that over 100 ETA vehicles have been launched by its alumni. This figure is from the ETA Hub page and reflects the breadth of INSEAD's global alumni network across two continents." },
      { question: "What is the tuition at INSEAD?", answer: "INSEAD MBA tuition is approximately EUR 109,860 total for the 10-month program (August 2026 intake)." },
      { question: "Does INSEAD have an ETA conference?", answer: "INSEAD launched its first ETA Conference in Singapore in November 2025 with 250+ attendees. Starting in 2026, the conference runs biannually: Fontainebleau in May and Singapore in November." },
      { question: "Can I study ETA at INSEAD in Asia?", answer: "Yes. INSEAD is the only top MBA program offering ETA-focused resources across two continents (Fontainebleau, France and Singapore), making it uniquely suited for searchers interested in Asian or cross-border ETA opportunities." },
    ],
  },

  // ── Tier 3 ───────────────────────────────────────────────────────────
  {
    slug: "london-business-school",
    name: "London Business School",
    shortName: "LBS",
    location: "London, United Kingdom",
    country: "UK",
    region: "europe",
    tier: 3,
    officialUrl: "https://www.london.edu",
    etaUrl: "https://www.london.edu/faculty-and-research/institute-of-entrepreneurship-and-private-capital/opportunities-and-resources/entrepreneurship-through-acquisition",
    tuition: "GBP 123,950 total",
    tuitionYear: "2026 intake",
    description:
      "A European ETA pioneer: Simon Webster raised the first non-US search fund here in 1992. Now home to a dedicated ETA elective, published case studies, and an annual student-led conference.",
    longDescription:
      "London Business School has a unique claim in ETA history: Simon Webster raised the first search fund outside the United States here in 1992. Today, LBS offers an ETA elective, published case studies (Nova Ventures, Insearch Ltd), and an annual student-led ETA conference co-organized with IESE.",
    ogTitle: "London Business School: European ETA Pioneer Since 1992",
    ogDescription:
      "LBS is where the first non-US search fund was raised in 1992. ETA elective, published case studies, and annual conference co-organized with IESE.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 1,
    faculty: [
      { name: "Simon Webster", title: "Guest Lecturer", url: "https://www.london.edu/faculty-and-research/contributors/simon-webster", etaRole: "Raised first UK search fund (1992), 60+ SF investments, chairs IESE SF Advisory Board" },
      { name: "Luisa Alemany", title: "Associate Professor of Management Practice", url: "https://www.london.edu/faculty-and-research/faculty-profiles/l/luisa-alemany", etaRole: "Academic Director, Institute of Entrepreneurship & Private Capital" },
    ],
    courses: [
      { name: "ETA Elective (MBA/EMBA/Sloan)", instructor: "Simon Webster" },
    ],
    alumni: [
      { name: "Simon Webster", company: "RSL", outcome: "First UK/non-US search fund (1992), grew from GBP 3.5M to GBP 30M revenue, 50 to 450 employees", sourceUrl: "https://www.london.edu/faculty-and-research/contributors/simon-webster" },
    ],
    faqs: [
      { question: "What is LBS's connection to search fund history?", answer: "Simon Webster raised the first search fund outside the United States at London Business School in 1992. He acquired RSL and grew it from 50 to 450 employees, pioneering the model in Europe." },
      { question: "Does LBS have ETA case studies?", answer: "Yes. LBS has published two ETA case studies: Nova Ventures: Searching for Gems in the UK (Alemany & Vasvari, 2023) and Insearch Ltd: Searching for a Company to Buy (Webster, 2023), both available through the LBS case publishing platform." },
      { question: "What is the tuition at London Business School?", answer: "LBS MBA tuition is GBP 123,950 total for the 15-21 month program (2026 intake), which is approximately $156,000 USD." },
      { question: "Does LBS have an ETA conference?", answer: "Yes. LBS co-organizes an annual Student-Led ETA Conference with IESE, HEC Paris, and Cambridge. The 6th Annual ETA Conference was held on March 28, 2025." },
      { question: "Who teaches ETA at LBS?", answer: "Simon Webster, who raised the first UK search fund and has invested in over 60 search funds, teaches the ETA elective. Luisa Alemany, Academic Director of the Institute of Entrepreneurship & Private Capital, oversees the broader ETA program." },
    ],
  },
  {
    slug: "ie-business-school",
    name: "IE Business School",
    shortName: "IE",
    location: "Madrid, Spain",
    country: "Spain",
    region: "europe",
    tier: 3,
    officialUrl: "https://www.ie.edu/business-school/programs/mba/",
    tuition: "EUR 89,900 total",
    tuitionYear: "2026 intake",
    description:
      "One of Europe's longest-running ETA electives (11+ years), taught by Blake Winchell (15+ teaching excellence awards). Home to the IE Search Fund Club and inaugural Search Fund Forum.",
    longDescription:
      "IE Business School hosts one of Europe's longest-running ETA electives, taught for over 11 years by Blake Winchell, a veteran search fund investor. The IE Search Fund Club and inaugural Search Fund Forum (2023) show growing institutional commitment.",
    ogTitle: "IE Business School: 11+ Years of ETA Education in Madrid",
    ogDescription:
      "IE offers one of Europe's longest-running ETA courses (11+ years). Blake Winchell, Newton Campos, the IE Search Fund Club, and the Search Fund Forum.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 1,
    faculty: [
      { name: "Blake Winchell", title: "Adjunct Professor", url: "https://www.ie.edu/university/about/faculty/william-blake-winchell/", etaRole: "Stanford GSB MBA '79, 44 years PE, 15+ teaching excellence awards, serial SF investor" },
      { name: "Newton M. Campos", title: "Adjunct Professor of Entrepreneurship", url: "https://www.newtonmcampos.com/", etaRole: "Invested in 18 search funds (73% success rate), founder of Newton Equity Partners" },
    ],
    courses: [
      { name: "Entrepreneurial Acquisition", instructor: "Blake Winchell" },
    ],
    alumni: [
      { name: "Eisuke Kobayashi", mbaYear: "MBA '23", company: "Japan Bullseye Capital GK", outcome: "Co-founded 1st traditional duo SF in Japan, acquired Gateway Arch Co. (April 2025)", sourceUrl: "https://japanbullseye.com/?page_id=336" },
      { name: "Mitsuharu Suzaki", mbaYear: "MBA '23", company: "Japan Bullseye Capital GK", outcome: "Co-founder, first duo search fund in Japan", sourceUrl: "https://searchfundsnews.com/first-duo-sf-japan-bullseye-capital-acquires-gateway-arch/" },
    ],
    faqs: [
      { question: "How long has IE been teaching ETA?", answer: "IE Business School has offered an ETA elective for over 11 consecutive years, making it one of the longest-running ETA courses in Europe. Blake Winchell has received 15+ consecutive teaching excellence awards for the course." },
      { question: "What is the tuition at IE Business School?", answer: "IE MBA tuition is EUR 89,900 total for the 11/15-month program plus EUR 1,200 in fees (2026 intake)." },
      { question: "Does IE have a Search Fund Club?", answer: "Yes. The IE Search Fund Club has 275+ LinkedIn followers and was founded by Eisuke Kobayashi. The club hosted the inaugural IE Search Fund Forum in November 2023 with 200+ attendees." },
      { question: "Have IE alumni launched search funds?", answer: "Yes. Eisuke Kobayashi and Mitsuharu Suzaki (both MBA '23) co-founded Japan Bullseye Capital GK, the first traditional duo search fund in Japan. They raised capital from 17 investors and acquired Gateway Arch Co. in April 2025." },
      { question: "Does IE have a Search Funds Lab?", answer: "Yes. The Search Funds Lab, part of IE's Entrepreneurship & Innovation Center, offers biannual intakes in January and September, providing structured support for students exploring ETA." },
    ],
  },
  {
    slug: "hec-paris",
    name: "HEC Paris",
    shortName: "HEC Paris",
    location: "Jouy-en-Josas (Paris), France",
    country: "France",
    region: "europe",
    tier: 3,
    officialUrl: "https://www.hec.edu/en/mba-executive-mba/mba",
    tuition: "EUR 90,000 total",
    tuitionYear: "2026 intake",
    isStub: true,
    description:
      "An emerging French MBA for ETA. No dedicated course or center yet, but alumni-driven activity and co-organization of the annual LBS-IESE ETA conference signal growing interest.",
    longDescription:
      "HEC Paris is an emerging player in the ETA space. While it does not yet offer a dedicated ETA course or center, alumni-driven activity and co-organization of the annual LBS-IESE ETA Conference indicate growing institutional interest.",
    ogTitle: "HEC Paris: Emerging French MBA for Search Fund Entrepreneurs",
    ogDescription:
      "HEC Paris is an emerging MBA for ETA. No dedicated course yet, but conference co-organization and alumni activity signal growing interest in search funds.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    courseCount: 0,
    faculty: [],
    courses: [],
    alumni: [],
    faqs: [
      { question: "Does HEC Paris offer an ETA course?", answer: "Not yet. As of 2026, HEC Paris does not offer a dedicated ETA or search fund elective in its MBA curriculum. However, the school's entrepreneurship faculty covers related topics." },
      { question: "What is HEC Paris's involvement in ETA?", answer: "HEC Paris co-organizes the annual ETA Conference alongside London Business School and IESE. This involvement, along with alumni-driven search fund activity, positions HEC as an emerging player in European ETA." },
      { question: "What is the tuition at HEC Paris?", answer: "HEC Paris MBA tuition is EUR 90,000 total for the 16-month program (September 2026 intake)." },
      { question: "Should I choose HEC for a search fund career?", answer: "HEC Paris is best suited for searchers who want a strong French network and plan to operate in France or francophone markets. For a more established ETA ecosystem, consider IESE, LBS, or INSEAD among European options." },
      { question: "Does HEC Paris have a Search Fund Club?", answer: "Research indicates a Search Fund Club exists and co-organizes events with LBS and IESE, but no verified public URL was found as of April 2026." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Derived lookups
// ---------------------------------------------------------------------------

/** Metadata keyed by slug */
export const programsMeta: Record<string, ProgramMeta> = Object.fromEntries(
  allPrograms.map((p) => [p.slug, p]),
);

/** Serializable card data for client component */
export function getProgramCards(): ProgramCard[] {
  return allPrograms.map((p) => ({
    slug: p.slug,
    name: p.name,
    shortName: p.shortName,
    location: p.location,
    region: p.region,
    tier: p.tier,
    description: p.description,
    courseCount: p.courseCount,
    isStub: p.isStub,
  }));
}

// ---------------------------------------------------------------------------
// Hub FAQ data (for the /mba hub page)
// ---------------------------------------------------------------------------

export const hubFAQs: { question: string; answer: string }[] = [
  {
    question: "Do you need an MBA to start a search fund?",
    answer:
      "No. While 85% of traditional search fund founders in the US/Canada hold an MBA (Stanford 2024 Study), the international rate is lower at 71% (IESE 2024). Self-funded searches are particularly open to non-MBA professionals with relevant operating experience.",
  },
  {
    question: "Which MBA is the best for a search fund career?",
    answer:
      "Stanford GSB, IESE, and Harvard Business School are the three most established programs for ETA, each offering dedicated courses, faculty, and alumni networks. The best choice depends on your target geography, budget, and whether you prioritize academic depth (Yale SOM), infrastructure (Booth), or global reach (INSEAD).",
  },
  {
    question: "How much does an MBA cost for a search fund career?",
    answer:
      "Tuition ranges from approximately $82,000 to $94,000 per year at US programs, and EUR 90,000 to EUR 114,000 total at European programs. Total cost including living expenses typically runs $150,000 to $300,000 for a full MBA. Several schools offer ETA-specific fellowships (HBS: $130K, Wharton: $50K).",
  },
  {
    question: "Can you start a search fund without an MBA?",
    answer:
      "Yes, and an increasing number of searchers do. The self-funded search model is particularly accessible to non-MBA professionals. Accelerator programs, ETA-focused communities, and online resources offer alternative paths to building the skills and networks needed for a successful search.",
  },
  {
    question: "When should I apply to an MBA program if I want to do ETA?",
    answer:
      "Most searchers who pursue an MBA do so 3-7 years into their career, after building operating experience in relevant industries. Apply to programs with established ETA ecosystems, and plan to use the MBA as both a learning experience and a launchpad for your search fund immediately after graduation.",
  },
  {
    question: "What is the ROI of an MBA for search fund entrepreneurs?",
    answer:
      "The total cost of an MBA ($150K-$300K including opportunity cost) should be weighed against the 35.1% aggregate IRR and 4.5x ROIC of traditional search funds (Stanford 2024). MBA graduates benefit from investor credibility, alumni networks, and structured deal-flow that can significantly improve fundraising and acquisition outcomes.",
  },
];

// ---------------------------------------------------------------------------
// Component map (lazy — populated as profiles are imported)
// ---------------------------------------------------------------------------

export const programComponents: Record<string, () => JSX.Element> = {};
