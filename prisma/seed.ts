import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL!.replace(/\?.*$/, ""),
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

async function main() {
  // Clean up in correct order
  await prisma.forumComment.deleteMany();
  await prisma.forumPost.deleteMany();
  await prisma.forumCategory.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.message.deleteMany();
  await prisma.conversation.deleteMany();
  await prisma.connection.deleteMany();
  await prisma.inquiry.deleteMany();
  await prisma.savedListing.deleteMany();
  await prisma.listing.deleteMany();
  await prisma.sellerProfile.deleteMany();
  await prisma.investorProfile.deleteMany();
  await prisma.searcherProfile.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  console.log("Cleared all data.");

  // ─── SELLERS ───────────────────────────────────────────────────────
  const sellers = await Promise.all([
    prisma.user.create({
      data: {
        email: "jean.dupont@example.com",
        name: "Jean Dupont",
        role: "SELLER",
        verificationStatus: "VERIFIED",
        country: "FR",
        city: "Lyon",
        bio: "Founder and CEO of a B2B services company for 25 years. Looking for the right successor to continue the legacy.",
        sellerProfile: { create: { companyRole: "Founder & CEO", slug: "jean-dupont", headline: "Retiring founder — B2B services" } },
      },
    }),
    prisma.user.create({
      data: {
        email: "hans.weber@example.com",
        name: "Hans Weber",
        role: "SELLER",
        verificationStatus: "VERIFIED",
        country: "DE",
        city: "Munich",
        bio: "Second-generation owner of a manufacturing group in Bavaria. Ready to hand over the reins.",
        sellerProfile: { create: { companyRole: "Managing Director", slug: "hans-weber", headline: "Family business succession" } },
      },
    }),
    prisma.user.create({
      data: {
        email: "maria.garcia@example.com",
        name: "María García",
        role: "SELLER",
        verificationStatus: "VERIFIED",
        country: "ES",
        city: "Madrid",
        bio: "Built a healthcare services company from scratch. Seeking a buyer who shares our patient-first values.",
        sellerProfile: { create: { companyRole: "Founder", slug: "maria-garcia", headline: "Healthcare entrepreneur seeking succession" } },
      },
    }),
    prisma.user.create({
      data: {
        email: "pieter.vandenberg@example.com",
        name: "Pieter van den Berg",
        role: "SELLER",
        verificationStatus: "PENDING",
        country: "NL",
        city: "Amsterdam",
        bio: "Co-founder of a logistics tech company. Partner and I want to focus on our next venture.",
        sellerProfile: { create: { companyRole: "Co-founder", slug: "pieter-vandenberg", headline: "Tech co-founder moving on" } },
      },
    }),
    prisma.user.create({
      data: {
        email: "luca.rossi@example.com",
        name: "Luca Rossi",
        role: "SELLER",
        verificationStatus: "VERIFIED",
        country: "IT",
        city: "Milan",
        bio: "Third-generation owner of a food & beverage distribution company in northern Italy.",
        sellerProfile: { create: { companyRole: "Owner & President", slug: "luca-rossi", headline: "Family F&B business — third generation" } },
      },
    }),
  ]);

  console.log(`Created ${sellers.length} sellers.`);

  // ─── SEARCHERS ─────────────────────────────────────────────────────
  const searcherData = [
    { email: "alex.thompson@example.com", name: "Alex Thompson", country: "UK", city: "London", mbaSchool: "INSEAD", searchType: "TRADITIONAL" as const, searchStatus: "ACTIVELY_SEARCHING" as const, targetSectors: ["Business Services", "Technology"], targetCountries: ["UK", "FR", "DE"], targetEbitdaMin: 500, targetEbitdaMax: 2000, headline: "INSEAD MBA seeking B2B services acquisition in Western Europe", thesis: "Looking for asset-light B2B services companies with recurring revenue and strong management teams.", slug: "alex-thompson" },
    { email: "sophie.bernard@example.com", name: "Sophie Bernard", country: "FR", city: "Paris", mbaSchool: "HEC Paris", searchType: "SELF_FUNDED" as const, searchStatus: "ACTIVELY_SEARCHING" as const, targetSectors: ["Healthcare", "Education"], targetCountries: ["FR", "BE", "CH"], targetEbitdaMin: 300, targetEbitdaMax: 1500, headline: "HEC graduate focused on healthcare services in Francophone Europe", thesis: "Passionate about healthcare. Targeting clinics, home care services, and medical equipment distributors with EBITDA €300K–€1.5M.", slug: "sophie-bernard" },
    { email: "max.mueller@example.com", name: "Maximilian Müller", country: "DE", city: "Frankfurt", mbaSchool: "WHU Otto Beisheim", searchType: "TRADITIONAL" as const, searchStatus: "RAISING_CAPITAL" as const, targetSectors: ["Manufacturing", "Business Services"], targetCountries: ["DE", "AT", "CH"], targetEbitdaMin: 750, targetEbitdaMax: 3000, headline: "WHU alum raising capital for DACH manufacturing acquisition", thesis: "Seeking established German Mittelstand companies with strong niche positioning and export capabilities.", slug: "maximilian-mueller" },
    { email: "elena.santos@example.com", name: "Elena Santos", country: "ES", city: "Barcelona", mbaSchool: "IESE Business School", searchType: "ACCELERATOR" as const, searchStatus: "ACTIVELY_SEARCHING" as const, targetSectors: ["E-commerce", "Retail", "Food & Beverage"], targetCountries: ["ES", "PT"], targetEbitdaMin: 200, targetEbitdaMax: 1000, headline: "IESE MBA, Search Fund Accelerator — Iberian focus", thesis: "Backed by the IESE SF Accelerator. Targeting consumer and retail businesses in Spain and Portugal.", slug: "elena-santos" },
    { email: "james.oconnor@example.com", name: "James O'Connor", country: "IE", city: "Dublin", mbaSchool: "London Business School", searchType: "SELF_FUNDED" as const, searchStatus: "LOI_SIGNED" as const, targetSectors: ["SaaS", "Technology"], targetCountries: ["IE", "UK"], targetEbitdaMin: 400, targetEbitdaMax: 1500, headline: "LBS alum — LOI signed on Irish SaaS company", thesis: "Targeting profitable, bootstrapped SaaS and tech-enabled services in Ireland and the UK.", slug: "james-oconnor" },
    { email: "anna.lindqvist@example.com", name: "Anna Lindqvist", country: "SE", city: "Stockholm", mbaSchool: "Stockholm School of Economics", searchType: "TRADITIONAL" as const, searchStatus: "PREPARING" as const, targetSectors: ["Business Services", "Education", "Healthcare"], targetCountries: ["SE", "NO", "DK", "FI"], targetEbitdaMin: 500, targetEbitdaMax: 2000, headline: "SSE graduate preparing for Nordic search fund", thesis: "Planning a traditional search fund targeting service businesses in the Nordics.", slug: "anna-lindqvist" },
    { email: "thomas.devries@example.com", name: "Thomas de Vries", country: "NL", city: "Rotterdam", mbaSchool: "RSM Erasmus", searchType: "INDEPENDENT_SPONSOR" as const, searchStatus: "ACTIVELY_SEARCHING" as const, targetSectors: ["Logistics", "Business Services"], targetCountries: ["NL", "BE", "DE"], targetEbitdaMin: 750, targetEbitdaMax: 2500, headline: "Independent sponsor — logistics & business services in Benelux", thesis: "Experienced operator targeting logistics and business process outsourcing companies in the Benelux region.", slug: "thomas-devries" },
    { email: "clara.fischer@example.com", name: "Clara Fischer", country: "DE", city: "Berlin", mbaSchool: "ESMT Berlin", searchType: "SELF_FUNDED" as const, searchStatus: "ACTIVELY_SEARCHING" as const, targetSectors: ["Technology", "Media"], targetCountries: ["DE", "AT"], targetEbitdaMin: 300, targetEbitdaMax: 1200, headline: "ESMT alum seeking tech-enabled businesses in DACH", thesis: "Focused on digital agencies, tech-enabled media companies, and content businesses in Germany and Austria.", slug: "clara-fischer" },
    { email: "marco.bianchi@example.com", name: "Marco Bianchi", country: "IT", city: "Rome", mbaSchool: "Bocconi", searchType: "TRADITIONAL" as const, searchStatus: "ACQUIRED" as const, targetSectors: ["Food & Beverage", "Manufacturing"], targetCountries: ["IT"], targetEbitdaMin: 500, targetEbitdaMax: 2000, headline: "Bocconi MBA — acquired a food manufacturing company", thesis: "Successfully acquired a specialty food manufacturer in Tuscany. Now operating and growing the business.", slug: "marco-bianchi" },
    { email: "sarah.mitchell@example.com", name: "Sarah Mitchell", country: "UK", city: "Edinburgh", mbaSchool: "University of Edinburgh", searchType: "SELF_FUNDED" as const, searchStatus: "ACTIVELY_SEARCHING" as const, targetSectors: ["Financial Services", "Business Services"], targetCountries: ["UK"], targetEbitdaMin: 400, targetEbitdaMax: 1500, headline: "Self-funded searcher — financial services in Scotland/UK", thesis: "Targeting IFAs, accounting practices, and niche financial services firms across the UK.", slug: "sarah-mitchell" },
    { email: "pierre.lefevre@example.com", name: "Pierre Lefèvre", country: "FR", city: "Bordeaux", mbaSchool: "ESSEC", searchType: "ACCELERATOR" as const, searchStatus: "RAISING_CAPITAL" as const, targetSectors: ["E-commerce", "Retail"], targetCountries: ["FR"], targetEbitdaMin: 200, targetEbitdaMax: 800, headline: "ESSEC alum — e-commerce roll-up strategy in France", thesis: "Planning an e-commerce aggregation strategy targeting profitable French DTC brands.", slug: "pierre-lefevre" },
    { email: "katrin.jensen@example.com", name: "Katrin Jensen", country: "DK", city: "Copenhagen", mbaSchool: "CBS Copenhagen", searchType: "TRADITIONAL" as const, searchStatus: "ACTIVELY_SEARCHING" as const, targetSectors: ["Energy", "Business Services"], targetCountries: ["DK", "SE", "NO"], targetEbitdaMin: 500, targetEbitdaMax: 1800, headline: "CBS MBA — energy services in Scandinavia", thesis: "Targeting energy services, maintenance, and facility management companies in Denmark and Scandinavia.", slug: "katrin-jensen" },
    { email: "rui.ferreira@example.com", name: "Rui Ferreira", country: "PT", city: "Lisbon", mbaSchool: "Nova SBE", searchType: "SELF_FUNDED" as const, searchStatus: "PREPARING" as const, targetSectors: ["Technology", "Business Services"], targetCountries: ["PT", "ES"], targetEbitdaMin: 150, targetEbitdaMax: 750, headline: "Nova SBE grad preparing Iberian search", thesis: "Planning to acquire a tech-enabled services company in Portugal or Spain.", slug: "rui-ferreira" },
    { email: "felix.huber@example.com", name: "Felix Huber", country: "CH", city: "Zurich", mbaSchool: "University of St. Gallen", searchType: "INDEPENDENT_SPONSOR" as const, searchStatus: "ACTIVELY_SEARCHING" as const, targetSectors: ["Manufacturing", "Healthcare"], targetCountries: ["CH", "DE", "AT"], targetEbitdaMin: 1000, targetEbitdaMax: 3000, headline: "St. Gallen alum — Swiss-German medtech & manufacturing", thesis: "Targeting precision manufacturing and medical device companies in the Swiss-German corridor.", slug: "felix-huber" },
    { email: "emma.wilson@example.com", name: "Emma Wilson", country: "UK", city: "Manchester", mbaSchool: "Manchester Business School", searchType: "SELF_FUNDED" as const, searchStatus: "OPERATING" as const, targetSectors: ["Education", "Healthcare"], targetCountries: ["UK"], targetEbitdaMin: 300, targetEbitdaMax: 1000, headline: "Acquired and operating an education services company", thesis: "Acquired a vocational training provider in 2024. Currently scaling operations across Northern England.", slug: "emma-wilson" },
  ];

  const searcherUsers = [];
  for (const s of searcherData) {
    const user = await prisma.user.create({
      data: {
        email: s.email,
        name: s.name,
        role: "SEARCHER",
        verificationStatus: "VERIFIED",
        country: s.country,
        city: s.city,
        bio: s.thesis,
        searcherProfile: {
          create: {
            searchType: s.searchType,
            searchStatus: s.searchStatus,
            mbaSchool: s.mbaSchool,
            targetSectors: s.targetSectors,
            targetCountries: s.targetCountries,
            targetEbitdaMin: s.targetEbitdaMin,
            targetEbitdaMax: s.targetEbitdaMax,
            thesisDescription: s.thesis,
            headline: s.headline,
            slug: s.slug,
            seekingCapital: ["RAISING_CAPITAL", "PREPARING"].includes(s.searchStatus),
            capitalNeeded: s.searchStatus === "RAISING_CAPITAL" ? s.targetEbitdaMax * 3 : null,
          },
        },
      },
    });
    searcherUsers.push(user);
  }

  console.log(`Created ${searcherUsers.length} searchers.`);

  // ─── INVESTORS ─────────────────────────────────────────────────────
  const investorData = [
    { email: "richard.sterling@example.com", name: "Richard Sterling", country: "UK", city: "London", firmName: "Sterling Search Capital", investorType: "EX_SEARCHER" as const, ticketMin: 200, ticketMax: 750, targetSectors: ["Business Services", "Healthcare", "Technology"], targetCountries: ["UK", "FR", "DE"], preferredSearchTypes: ["TRADITIONAL" as const, "SELF_FUNDED" as const], deals: 12, valueAdd: ["Operational expertise", "Board governance", "Fundraising support", "M&A integration"], headline: "Ex-searcher turned investor. 12 deals across Europe.", thesis: "After successfully acquiring and exiting a UK services company, I now invest in traditional and self-funded search funds across Western Europe. Focus on B2B services and healthcare.", slug: "sterling-search-capital" },
    { email: "isabelle.moreau@example.com", name: "Isabelle Moreau", country: "FR", city: "Paris", firmName: "Moreau Family Office", investorType: "FAMILY_OFFICE" as const, ticketMin: 500, ticketMax: 2000, targetSectors: ["Healthcare", "Education", "Food & Beverage"], targetCountries: ["FR", "BE", "CH", "LU"], preferredSearchTypes: ["TRADITIONAL" as const], deals: 8, valueAdd: ["Industry network", "Governance experience", "Long-term capital", "International expansion"], headline: "Francophone family office backing search fund entrepreneurs", thesis: "Third-generation family office deploying capital into search fund acquisitions in Francophone Europe. We provide patient capital and a deep network in healthcare and education.", slug: "moreau-family-office" },
    { email: "jan.eriksson@example.com", name: "Jan Eriksson", country: "SE", city: "Stockholm", firmName: "Nordic Search Partners", investorType: "INSTITUTIONAL" as const, ticketMin: 300, ticketMax: 1500, targetSectors: ["Technology", "SaaS", "Business Services"], targetCountries: ["SE", "NO", "DK", "FI"], preferredSearchTypes: ["TRADITIONAL" as const, "ACCELERATOR" as const], deals: 15, valueAdd: ["Nordic network", "SaaS expertise", "Talent acquisition", "Go-to-market strategy"], headline: "Institutional investor in Nordic search funds", thesis: "Nordic Search Partners is a dedicated search fund investment vehicle focused exclusively on the Nordics. We have backed 15 searchers since 2019.", slug: "nordic-search-partners" },
    { email: "carlos.mendez@example.com", name: "Carlos Méndez", country: "ES", city: "Madrid", firmName: null, investorType: "ANGEL" as const, ticketMin: 50, ticketMax: 250, targetSectors: ["E-commerce", "Technology", "Retail"], targetCountries: ["ES", "PT"], preferredSearchTypes: ["SELF_FUNDED" as const, "ACCELERATOR" as const], deals: 3, valueAdd: ["Startup mentoring", "Digital marketing", "Iberian market knowledge"], headline: "Angel investor — early-stage search funds in Iberia", thesis: "Serial entrepreneur and angel investor. I back self-funded searchers in Spain and Portugal, typically with smaller tickets and hands-on involvement.", slug: "carlos-mendez" },
    { email: "karin.hoffmann@example.com", name: "Karin Hoffmann", country: "DE", city: "Hamburg", firmName: "Hoffmann Beteiligungen", investorType: "FAMILY_OFFICE" as const, ticketMin: 500, ticketMax: 3000, targetSectors: ["Manufacturing", "Logistics", "Energy"], targetCountries: ["DE", "AT", "CH", "PL"], preferredSearchTypes: ["TRADITIONAL" as const, "INDEPENDENT_SPONSOR" as const], deals: 6, valueAdd: ["Mittelstand expertise", "Supply chain optimization", "German market access", "Industrial operations"], headline: "German family office — Mittelstand & industrial search funds", thesis: "We invest alongside search fund entrepreneurs acquiring German Mittelstand companies. Deep expertise in manufacturing, logistics, and industrial services.", slug: "hoffmann-beteiligungen" },
    { email: "david.chen@example.com", name: "David Chen", country: "UK", city: "London", firmName: "Albion Search Fund Investors", investorType: "INSTITUTIONAL" as const, ticketMin: 250, ticketMax: 1000, targetSectors: ["Financial Services", "Business Services", "Technology"], targetCountries: ["UK", "IE"], preferredSearchTypes: ["TRADITIONAL" as const], deals: 20, valueAdd: ["Financial structuring", "Regulatory expertise", "Post-acquisition support", "Exit planning"], headline: "UK's leading dedicated search fund investment group", thesis: "Albion SFIG has been the most active search fund investor in the UK and Ireland since 2017. We provide capital, mentoring, and a community of 20+ portfolio searchers.", slug: "albion-sfig" },
    { email: "martijn.bakker@example.com", name: "Martijn Bakker", country: "NL", city: "Amsterdam", firmName: null, investorType: "EX_SEARCHER" as const, ticketMin: 100, ticketMax: 500, targetSectors: ["Business Services", "Logistics", "Technology"], targetCountries: ["NL", "BE"], preferredSearchTypes: ["SELF_FUNDED" as const, "TRADITIONAL" as const], deals: 5, valueAdd: ["Search fund playbook", "Benelux network", "Operating experience", "Due diligence support"], headline: "Ex-searcher backing Benelux search funds", thesis: "Acquired and successfully operated a Dutch logistics company. Now investing in and mentoring the next generation of Benelux searchers.", slug: "martijn-bakker" },
    { email: "giulia.conti@example.com", name: "Giulia Conti", country: "IT", city: "Milan", firmName: "Conti Investimenti", investorType: "FAMILY_OFFICE" as const, ticketMin: 300, ticketMax: 1500, targetSectors: ["Food & Beverage", "Manufacturing", "Healthcare"], targetCountries: ["IT", "CH"], preferredSearchTypes: ["TRADITIONAL" as const], deals: 4, valueAdd: ["Italian market expertise", "Food industry network", "Regulatory navigation", "Family business transitions"], headline: "Italian family office investing in search funds", thesis: "Conti Investimenti backs search fund entrepreneurs acquiring Italian SMEs, with a focus on food, manufacturing, and healthcare. We understand the nuances of Italian family business succession.", slug: "conti-investimenti" },
    { email: "frederik.nielsen@example.com", name: "Frederik Nielsen", country: "DK", city: "Copenhagen", firmName: "Øresund Capital", investorType: "ACCELERATOR" as const, ticketMin: 150, ticketMax: 600, targetSectors: ["Technology", "Business Services", "SaaS"], targetCountries: ["DK", "SE"], preferredSearchTypes: ["ACCELERATOR" as const], deals: 10, valueAdd: ["Accelerator program", "Cohort network", "Search methodology", "Capital introductions"], headline: "Scandinavian search fund accelerator", thesis: "Øresund Capital runs a 12-month search fund accelerator program for Danish and Swedish searchers. We provide seed capital, training, and a network of 50+ investors.", slug: "oresund-capital" },
    { email: "patrick.otoole@example.com", name: "Patrick O'Toole", country: "IE", city: "Dublin", firmName: "Emerald Search Investors", investorType: "INSTITUTIONAL" as const, ticketMin: 200, ticketMax: 800, targetSectors: ["Financial Services", "Technology", "SaaS", "Healthcare"], targetCountries: ["IE", "UK"], preferredSearchTypes: ["TRADITIONAL" as const, "SELF_FUNDED" as const], deals: 7, valueAdd: ["Irish market knowledge", "Tech ecosystem access", "Professional services network", "Growth capital"], headline: "Irish institutional search fund investor", thesis: "Emerald Search Investors is Ireland's first dedicated search fund investment vehicle. We back ambitious MBA graduates acquiring profitable Irish and UK companies.", slug: "emerald-search-investors" },
  ];

  const investorUsers = [];
  for (const inv of investorData) {
    const user = await prisma.user.create({
      data: {
        email: inv.email,
        name: inv.name,
        role: "INVESTOR",
        verificationStatus: "VERIFIED",
        country: inv.country,
        city: inv.city,
        bio: inv.thesis,
        investorProfile: {
          create: {
            investorType: inv.investorType,
            firmName: inv.firmName,
            ticketSizeMin: inv.ticketMin,
            ticketSizeMax: inv.ticketMax,
            targetSectors: inv.targetSectors,
            targetCountries: inv.targetCountries,
            preferredSearchTypes: inv.preferredSearchTypes,
            totalDealsInvested: inv.deals,
            valueAdd: inv.valueAdd,
            headline: inv.headline,
            investmentThesis: inv.thesis,
            slug: inv.slug,
            preferredEbitdaMin: inv.ticketMin * 2,
            preferredEbitdaMax: inv.ticketMax * 2,
          },
        },
      },
    });
    investorUsers.push(user);
  }

  console.log(`Created ${investorUsers.length} investors.`);

  // ─── LISTINGS ──────────────────────────────────────────────────────
  const listingData = [
    { sellerId: sellers[0].id, title: "Established IT Consulting Firm — Lyon", slug: "it-consulting-firm-lyon", sector: "Technology", country: "FR", region: "Auvergne-Rhône-Alpes", revenue: 4200000, ebitda: 840000, ebitdaMargin: 0.20, askingPrice: 4200000, askingMultiple: 5.0, employeeCount: 35, yearFounded: 2005, summary: "Profitable IT consulting firm serving mid-market enterprises in the Rhône-Alpes region. Strong client retention and recurring contracts.", description: "This IT consulting firm has built a loyal client base of 50+ mid-market companies over nearly 20 years. Services include ERP implementation, cloud migration, cybersecurity audits, and managed IT services. 70% of revenue is recurring through multi-year service contracts. The company operates from modern offices in Lyon's tech district with a skilled team of 35 consultants.", highlights: ["70% recurring revenue", "50+ enterprise clients", "20-year track record", "Strong EBITDA margins"], reasonForSale: "Retirement", sellerFinancing: true, timeline: "6-12 months", status: "ACTIVE" as const, daysAgo: 5 },
    { sellerId: sellers[1].id, title: "Precision Engineering Company — Bavaria", slug: "precision-engineering-bavaria", sector: "Manufacturing", country: "DE", region: "Bavaria", revenue: 8500000, ebitda: 1700000, ebitdaMargin: 0.20, askingPrice: 8500000, askingMultiple: 5.0, employeeCount: 65, yearFounded: 1987, summary: "Family-owned precision engineering company specializing in automotive and aerospace components. ISO 9001 and AS9100 certified.", description: "A second-generation Bavarian manufacturer producing high-precision metal components for automotive OEMs and aerospace Tier 1 suppliers. The company operates a 3,000m² facility with modern CNC machinery. ISO 9001:2015 and AS9100D certified. Strong order book and diversified client base across Germany, Austria, and Switzerland.", highlights: ["ISO 9001 & AS9100 certified", "€8.5M revenue", "Diversified OEM client base", "Modern CNC facility", "Strong export capabilities"], reasonForSale: "Succession", sellerFinancing: false, timeline: "12-18 months", status: "ACTIVE" as const, daysAgo: 12 },
    { sellerId: sellers[2].id, title: "Private Healthcare Clinic Network — Madrid", slug: "healthcare-clinic-network-madrid", sector: "Healthcare", country: "ES", region: "Community of Madrid", revenue: 6800000, ebitda: 1360000, ebitdaMargin: 0.20, askingPrice: 6120000, askingMultiple: 4.5, employeeCount: 45, yearFounded: 2010, summary: "Network of 3 private clinics in Madrid offering physiotherapy, rehabilitation, and sports medicine. Growing 15% annually.", description: "A network of three premium physiotherapy and sports medicine clinics strategically located across Madrid. The clinics serve a mix of private patients, corporate wellness programs, and sports teams. Strong brand recognition and 4.8-star Google ratings across all locations. Revenue has grown 15% annually over the past 3 years with expanding margins.", highlights: ["3 clinic locations", "15% annual growth", "4.8-star ratings", "Corporate wellness contracts", "Strong brand in Madrid"], reasonForSale: "New venture", sellerFinancing: true, timeline: "6-9 months", status: "ACTIVE" as const, daysAgo: 3 },
    { sellerId: sellers[3].id, title: "Last-Mile Logistics Platform — Amsterdam", slug: "last-mile-logistics-amsterdam", sector: "Logistics", country: "NL", region: "North Holland", revenue: 3200000, ebitda: 640000, ebitdaMargin: 0.20, askingPrice: 3840000, askingMultiple: 6.0, employeeCount: 22, yearFounded: 2017, summary: "Tech-enabled last-mile delivery platform serving e-commerce retailers in the Netherlands and Belgium. Proprietary route optimization software.", description: "An innovative logistics company combining proprietary route optimization technology with a fleet of electric delivery vehicles. Serving 200+ e-commerce merchants across the Netherlands and Belgium. The platform reduces delivery costs by 30% compared to traditional carriers while offering same-day delivery in major cities.", highlights: ["Proprietary tech platform", "200+ e-commerce clients", "Electric fleet", "30% cost advantage", "Same-day delivery capability"], reasonForSale: "Founders pursuing new venture", sellerFinancing: false, timeline: "3-6 months", status: "ACTIVE" as const, daysAgo: 8 },
    { sellerId: sellers[4].id, title: "Specialty Food Distributor — Northern Italy", slug: "food-distributor-northern-italy", sector: "Food & Beverage", country: "IT", region: "Lombardy", revenue: 12000000, ebitda: 1800000, ebitdaMargin: 0.15, askingPrice: 9000000, askingMultiple: 5.0, employeeCount: 55, yearFounded: 1975, summary: "Third-generation specialty food distributor supplying premium Italian products to restaurants, hotels, and retailers across northern Italy.", description: "A well-established food distribution company with exclusive distribution agreements for 30+ premium Italian food brands. The company serves over 2,000 HoReCa clients and 500 retail locations across Lombardy, Piedmont, and Veneto. Modern warehouse and cold chain logistics ensure product quality. The brand is synonymous with quality in the northern Italian food service industry.", highlights: ["€12M revenue", "30+ exclusive brand agreements", "2,500+ active clients", "Cold chain logistics", "Third-generation business"], reasonForSale: "Retirement", sellerFinancing: true, timeline: "12 months", status: "ACTIVE" as const, daysAgo: 15 },
    { sellerId: sellers[0].id, title: "Cybersecurity Consultancy — Paris", slug: "cybersecurity-consultancy-paris", sector: "Technology", country: "FR", region: "Île-de-France", revenue: 2800000, ebitda: 700000, ebitdaMargin: 0.25, askingPrice: 4200000, askingMultiple: 6.0, employeeCount: 18, yearFounded: 2015, summary: "Fast-growing cybersecurity consultancy specializing in compliance (GDPR, NIS2) and penetration testing for mid-market European companies.", description: "A Paris-based cybersecurity firm that has grown 25% annually since 2020. The company provides GDPR compliance audits, NIS2 implementation, penetration testing, and incident response services. Clients include banks, healthcare providers, and SaaS companies. With the EU's expanding cybersecurity regulations, the addressable market is growing rapidly.", highlights: ["25% annual growth", "GDPR & NIS2 expertise", "Blue-chip client base", "High margins", "Regulatory tailwinds"], reasonForSale: "Retirement", sellerFinancing: false, timeline: "6-12 months", status: "ACTIVE" as const, daysAgo: 20 },
    { sellerId: sellers[1].id, title: "Industrial Cleaning Services — Rhineland", slug: "industrial-cleaning-rhineland", sector: "Business Services", country: "DE", region: "North Rhine-Westphalia", revenue: 5600000, ebitda: 840000, ebitdaMargin: 0.15, askingPrice: 3360000, askingMultiple: 4.0, employeeCount: 120, yearFounded: 1998, summary: "Contract-based industrial cleaning company serving manufacturing plants and commercial facilities across the Rhine-Ruhr metropolitan area.", description: "One of the leading industrial cleaning companies in the Rhine-Ruhr region, serving 80+ manufacturing plants, offices, and commercial facilities. The company has long-term contracts (average 4+ years) and a workforce of 120 trained cleaning professionals. ISO 14001 certified for environmental management.", highlights: ["€5.6M revenue", "80+ contracted facilities", "4+ year average contract length", "ISO 14001 certified", "Stable recurring revenue"], reasonForSale: "Owner retiring", sellerFinancing: true, timeline: "6-12 months", status: "ACTIVE" as const, daysAgo: 25 },
    { sellerId: sellers[2].id, title: "Online Pharmacy Platform — Spain", slug: "online-pharmacy-spain", sector: "Healthcare", country: "ES", region: "Catalonia", revenue: 3500000, ebitda: 525000, ebitdaMargin: 0.15, askingPrice: 2625000, askingMultiple: 5.0, employeeCount: 15, yearFounded: 2018, summary: "Licensed online pharmacy platform with growing subscription base for chronic medication management. Shipping across Spain.", description: "A fully licensed online pharmacy serving patients across Spain. The platform specializes in chronic medication management with a growing subscription model (40% of revenue). The company has built a modern logistics center in Barcelona and maintains high customer satisfaction (NPS 72). E-pharmacy regulations in Spain are favorable for continued growth.", highlights: ["Licensed online pharmacy", "40% subscription revenue", "NPS 72", "Growing market", "Modern logistics center"], reasonForSale: "Founder relocating", sellerFinancing: false, timeline: "3-6 months", status: "ACTIVE" as const, daysAgo: 10 },
    { sellerId: sellers[3].id, title: "B2B SaaS — HR Compliance Platform", slug: "hr-compliance-saas-netherlands", sector: "SaaS", country: "NL", region: "South Holland", revenue: 1800000, ebitda: 540000, ebitdaMargin: 0.30, askingPrice: 4320000, askingMultiple: 8.0, employeeCount: 12, yearFounded: 2019, summary: "Bootstrapped B2B SaaS platform automating HR compliance for European companies. €150K ARR growth per quarter. 95% gross retention.", description: "A bootstrapped SaaS platform that automates HR compliance tasks (employment law tracking, document management, audit trails) for mid-market European companies. Currently serving 180+ clients across 8 countries. The platform has achieved product-market fit with 95% gross revenue retention and 115% net revenue retention. The founding team wants to pursue a new venture.", highlights: ["95% gross revenue retention", "115% net retention", "180+ B2B clients", "8 countries served", "€540K EBITDA on €1.8M ARR"], reasonForSale: "Founders pursuing new venture", sellerFinancing: false, timeline: "3-6 months", status: "UNDER_LOI" as const, daysAgo: 45 },
    { sellerId: sellers[4].id, title: "Premium Olive Oil Producer — Tuscany", slug: "olive-oil-producer-tuscany", sector: "Food & Beverage", country: "IT", region: "Tuscany", revenue: 2200000, ebitda: 440000, ebitdaMargin: 0.20, askingPrice: 2200000, askingMultiple: 5.0, employeeCount: 18, yearFounded: 1960, summary: "Award-winning extra virgin olive oil producer with DOP certification. Exporting to 15 countries from a historic Tuscan estate.", description: "A family-owned olive oil estate producing award-winning DOP-certified extra virgin olive oil since 1960. The company manages 50 hectares of olive groves and a modern pressing facility. Products are exported to 15 countries through specialty food distributors and direct-to-consumer channels (25% of revenue). Multiple gold medals at international olive oil competitions.", highlights: ["DOP certified", "50 hectares of olive groves", "15 export countries", "Multiple gold medals", "25% DTC revenue"], reasonForSale: "Succession — no family successor", sellerFinancing: true, timeline: "12-18 months", status: "ACTIVE" as const, daysAgo: 30 },
    { sellerId: sellers[0].id, title: "Digital Marketing Agency — Bordeaux", slug: "digital-marketing-agency-bordeaux", sector: "Business Services", country: "FR", region: "Nouvelle-Aquitaine", revenue: 1500000, ebitda: 375000, ebitdaMargin: 0.25, askingPrice: 1500000, askingMultiple: 4.0, employeeCount: 12, yearFounded: 2013, summary: "Boutique digital marketing agency specializing in wine & luxury brands. Strong reputation and long-standing client relationships.", description: "A niche digital marketing agency in Bordeaux specializing in wine estates, luxury hospitality, and premium food brands. Services include social media management, SEO/SEM, brand strategy, and e-commerce optimization. The agency has built a strong reputation in the wine industry with 40+ active clients including several Grand Cru estates.", highlights: ["Niche positioning in wine/luxury", "40+ active clients", "25% EBITDA margin", "Remote-friendly team", "Long client relationships"], reasonForSale: "Retirement", sellerFinancing: true, timeline: "6 months", status: "ACTIVE" as const, daysAgo: 18 },
    { sellerId: sellers[1].id, title: "Vocational Training Center — Hamburg", slug: "vocational-training-hamburg", sector: "Education", country: "DE", region: "Hamburg", revenue: 3800000, ebitda: 760000, ebitdaMargin: 0.20, askingPrice: 3800000, askingMultiple: 5.0, employeeCount: 30, yearFounded: 2003, summary: "Accredited vocational training center offering IT, healthcare, and business administration programs. Government-funded revenue stream.", description: "A state-accredited vocational training center in Hamburg offering programs in IT administration, healthcare assistance, and business management. 60% of revenue comes from government-funded programs (Bildungsgutschein), providing a stable revenue base. The center trains 500+ students annually and has a 85% job placement rate.", highlights: ["State-accredited programs", "60% government-funded revenue", "500+ students annually", "85% job placement rate", "Stable revenue model"], reasonForSale: "Succession", sellerFinancing: false, timeline: "12 months", status: "ACTIVE" as const, daysAgo: 35 },
    { sellerId: sellers[2].id, title: "Dental Equipment Distributor — Iberia", slug: "dental-equipment-iberia", sector: "Healthcare", country: "ES", region: "Andalusia", revenue: 7200000, ebitda: 1080000, ebitdaMargin: 0.15, askingPrice: 5400000, askingMultiple: 5.0, employeeCount: 28, yearFounded: 2001, summary: "Authorized distributor of premium dental equipment and consumables across Spain and Portugal. Exclusive agreements with 5 major brands.", description: "The leading independent dental equipment distributor in southern Spain and Portugal, with exclusive distribution agreements for 5 major international brands. The company serves 3,000+ dental practices and clinics. Revenue is split between equipment sales (60%) and recurring consumables/service contracts (40%). Well-established logistics network with next-day delivery across Iberia.", highlights: ["5 exclusive distribution agreements", "3,000+ dental practices served", "40% recurring revenue", "Next-day delivery network", "€7.2M revenue"], reasonForSale: "Owner focusing on other business", sellerFinancing: false, timeline: "6-9 months", status: "ACTIVE" as const, daysAgo: 7 },
    { sellerId: sellers[3].id, title: "E-commerce Fulfillment Center — Belgium", slug: "ecommerce-fulfillment-belgium", sector: "Logistics", country: "BE", region: "Flanders", revenue: 4500000, ebitda: 675000, ebitdaMargin: 0.15, askingPrice: 3375000, askingMultiple: 5.0, employeeCount: 40, yearFounded: 2016, summary: "3PL fulfillment center in Antwerp serving DTC brands across Benelux and Northern France. Automated pick-and-pack systems.", description: "A modern third-party logistics center strategically located near Antwerp port, serving 60+ DTC e-commerce brands. The facility features automated pick-and-pack systems, real-time inventory management, and integrations with major e-commerce platforms (Shopify, WooCommerce, Magento). The company handles 500,000+ orders annually and is expanding into cross-border European fulfillment.", highlights: ["500K+ annual orders", "60+ DTC brand clients", "Automated systems", "Strategic port location", "Platform integrations"], reasonForSale: "Strategic pivot", sellerFinancing: false, timeline: "6 months", status: "ACTIVE" as const, daysAgo: 14 },
    { sellerId: sellers[4].id, title: "Gelateria Chain — Milan", slug: "gelateria-chain-milan", sector: "Food & Beverage", country: "IT", region: "Lombardy", revenue: 2800000, ebitda: 420000, ebitdaMargin: 0.15, askingPrice: 2100000, askingMultiple: 5.0, employeeCount: 35, yearFounded: 2008, summary: "Chain of 5 artisan gelaterias in Milan with strong brand and loyal following. Includes a production laboratory and wholesale line.", description: "Five beautifully designed gelaterias in prime Milan locations, known for artisan gelato made with locally-sourced ingredients. The brand has built a cult following with 50K+ Instagram followers. Revenue comes from retail (70%), wholesale supply to restaurants (20%), and online/delivery (10%). The central production lab can scale to support 10+ additional locations.", highlights: ["5 prime Milan locations", "50K+ Instagram followers", "Production lab with scale capacity", "Wholesale + retail revenue", "Iconic brand"], reasonForSale: "Family reasons", sellerFinancing: true, timeline: "6-9 months", status: "ACTIVE" as const, daysAgo: 22 },
    { sellerId: sellers[0].id, title: "Staffing Agency — Toulouse", slug: "staffing-agency-toulouse", sector: "Business Services", country: "FR", region: "Occitanie", revenue: 9500000, ebitda: 950000, ebitdaMargin: 0.10, askingPrice: 3800000, askingMultiple: 4.0, employeeCount: 20, yearFounded: 2000, summary: "Established staffing agency specializing in aerospace and defense temporary placements in the Toulouse region. Airbus supplier.", description: "A niche staffing agency focused on aerospace and defense sector temporary placements in the Toulouse region, home to Airbus headquarters. The company is an approved Airbus supplier and provides specialized technical staff (engineers, technicians, quality inspectors) to the aerospace cluster. 85% of revenue comes from repeat clients with multi-year framework agreements.", highlights: ["Airbus approved supplier", "85% repeat client revenue", "Aerospace specialization", "20+ year track record", "Framework agreements"], reasonForSale: "Retirement", sellerFinancing: true, timeline: "9-12 months", status: "ACTIVE" as const, daysAgo: 40 },
    { sellerId: sellers[1].id, title: "Building Automation Company — Switzerland", slug: "building-automation-switzerland", sector: "Energy", country: "CH", region: "Zurich", revenue: 6200000, ebitda: 1240000, ebitdaMargin: 0.20, askingPrice: 7440000, askingMultiple: 6.0, employeeCount: 30, yearFounded: 2010, summary: "Building automation and energy management systems integrator. Growing fast with EU Green Deal driving demand for smart buildings.", description: "A Swiss building automation company specializing in smart HVAC, lighting, and energy management systems for commercial buildings. The company is a certified integrator for Siemens and Schneider Electric systems. With the EU Green Deal and Swiss energy regulations driving demand for building energy efficiency, the company has grown 20% annually for the past 3 years.", highlights: ["20% annual growth", "Siemens/Schneider certified partner", "EU Green Deal tailwinds", "€1.2M EBITDA", "Strong Swiss client base"], reasonForSale: "Owner pursuing other interests", sellerFinancing: false, timeline: "6-12 months", status: "ACTIVE" as const, daysAgo: 28 },
    { sellerId: sellers[2].id, title: "Veterinary Clinic Group — Portugal", slug: "veterinary-clinics-portugal", sector: "Healthcare", country: "PT", region: "Lisbon", revenue: 2400000, ebitda: 480000, ebitdaMargin: 0.20, askingPrice: 2400000, askingMultiple: 5.0, employeeCount: 25, yearFounded: 2012, summary: "Growing group of 3 veterinary clinics in greater Lisbon. Pet ownership in Portugal growing 10% annually.", description: "A group of three modern veterinary clinics in the Lisbon metropolitan area, offering general practice, surgery, dentistry, and emergency care. Pet ownership in Portugal is growing rapidly (10% annually), driving strong demand. The clinics have an excellent reputation with 4.9-star Google ratings and serve 8,000+ active pet patients.", highlights: ["3 clinics in Lisbon metro", "8,000+ active patients", "4.9-star ratings", "10% market growth", "Full-service offering"], reasonForSale: "Founder relocating", sellerFinancing: true, timeline: "6 months", status: "ACTIVE" as const, daysAgo: 6 },
    { sellerId: sellers[3].id, title: "Financial Advisory Boutique — Dublin", slug: "financial-advisory-dublin", sector: "Financial Services", country: "IE", region: "Dublin", revenue: 3200000, ebitda: 960000, ebitdaMargin: 0.30, askingPrice: 5760000, askingMultiple: 6.0, employeeCount: 15, yearFounded: 2007, summary: "Independent financial advisory firm serving SMEs and high-net-worth individuals in Ireland. High recurring revenue from AUM fees.", description: "A well-established independent financial advisory firm in Dublin serving 400+ SME clients and 200+ high-net-worth individuals. Revenue is 65% recurring (AUM-based fees and retainers). The firm specializes in corporate pension planning, M&A advisory for SMEs, and wealth management. Strong regulatory compliance track record with Central Bank of Ireland.", highlights: ["65% recurring revenue", "€960K EBITDA at 30% margins", "400+ SME clients", "Central Bank regulated", "Strong compliance record"], reasonForSale: "Senior partner retiring", sellerFinancing: false, timeline: "9-12 months", status: "ACTIVE" as const, daysAgo: 32 },
    { sellerId: sellers[4].id, title: "E-commerce Fashion Brand — Milan", slug: "fashion-ecommerce-milan", sector: "E-commerce", country: "IT", region: "Lombardy", revenue: 4800000, ebitda: 720000, ebitdaMargin: 0.15, askingPrice: 3600000, askingMultiple: 5.0, employeeCount: 20, yearFounded: 2016, summary: "DTC sustainable fashion brand selling online across Europe. Strong brand loyalty with 200K email subscribers and 35% repeat purchase rate.", description: "A digitally-native sustainable fashion brand selling directly to consumers across 12 European markets. The brand focuses on eco-friendly materials and ethical manufacturing. Strong customer loyalty with 200K email subscribers, 35% repeat purchase rate, and 120K Instagram followers. The brand has been featured in Vogue Italia, Elle, and the Financial Times.", highlights: ["200K email subscribers", "35% repeat purchase rate", "12 European markets", "Press coverage: Vogue, Elle, FT", "Sustainable positioning"], reasonForSale: "Founder moving to new project", sellerFinancing: false, timeline: "3-6 months", status: "SOLD" as const, daysAgo: 90 },
    { sellerId: sellers[0].id, title: "Managed IT Services — Lille", slug: "managed-it-services-lille", sector: "Technology", country: "FR", region: "Hauts-de-France", revenue: 2100000, ebitda: 420000, ebitdaMargin: 0.20, askingPrice: 2100000, askingMultiple: 5.0, employeeCount: 15, yearFounded: 2011, summary: "MSP serving 100+ SMEs in northern France. 85% of revenue from recurring managed service contracts.", description: "A managed IT services provider serving 100+ small and medium businesses across the Hauts-de-France region. The company offers 24/7 monitoring, help desk support, cloud migration, and cybersecurity services. 85% of revenue comes from monthly recurring contracts with an average client tenure of 5+ years.", highlights: ["85% recurring revenue", "100+ SME clients", "5+ year average client tenure", "24/7 monitoring capability", "Cloud & cybersecurity services"], reasonForSale: "Retirement", sellerFinancing: true, timeline: "6-12 months", status: "ACTIVE" as const, daysAgo: 42 },
    { sellerId: sellers[1].id, title: "Specialty Chemicals Distributor — Poland", slug: "specialty-chemicals-poland", sector: "Manufacturing", country: "PL", region: "Silesia", revenue: 7800000, ebitda: 1170000, ebitdaMargin: 0.15, askingPrice: 5850000, askingMultiple: 5.0, employeeCount: 35, yearFounded: 1995, summary: "Leading specialty chemicals distributor in southern Poland. Exclusive agreements with global manufacturers. Growing 12% YoY.", description: "The largest independent specialty chemicals distributor in the Silesian industrial corridor, serving automotive, mining, and heavy industry clients. The company holds exclusive distribution agreements with 8 global chemical manufacturers and operates a REACH-compliant warehouse facility. Revenue has grown 12% annually as Polish industry continues to expand.", highlights: ["8 exclusive distribution agreements", "REACH-compliant facility", "12% annual growth", "Leading position in Silesia", "Diversified industrial client base"], reasonForSale: "Owner health reasons", sellerFinancing: false, timeline: "6 months", status: "ACTIVE" as const, daysAgo: 16 },
    { sellerId: sellers[2].id, title: "Private Tutoring Platform — Spain", slug: "private-tutoring-platform-spain", sector: "Education", country: "ES", region: "Community of Madrid", revenue: 1200000, ebitda: 300000, ebitdaMargin: 0.25, askingPrice: 1500000, askingMultiple: 5.0, employeeCount: 8, yearFounded: 2019, summary: "Online tutoring marketplace connecting students with tutors across Spain. 5,000+ registered tutors. Platform-native with strong unit economics.", description: "A tech-enabled tutoring marketplace that connects students with qualified tutors for primary, secondary, and university-level subjects. The platform has 5,000+ registered tutors, 15,000+ active students, and handles 10,000+ sessions per month. Commission-based revenue model with strong unit economics and 25% EBITDA margins.", highlights: ["5,000+ tutors on platform", "15,000+ active students", "10,000+ monthly sessions", "25% EBITDA margins", "Scalable platform model"], reasonForSale: "Founder pursuing PhD", sellerFinancing: false, timeline: "3-6 months", status: "ACTIVE" as const, daysAgo: 11 },
    { sellerId: sellers[3].id, title: "Renewable Energy Installer — Belgium", slug: "renewable-energy-installer-belgium", sector: "Energy", country: "BE", region: "Wallonia", revenue: 5200000, ebitda: 780000, ebitdaMargin: 0.15, askingPrice: 3900000, askingMultiple: 5.0, employeeCount: 32, yearFounded: 2012, summary: "Solar panel and heat pump installer for residential and commercial properties in Wallonia. Certified by major manufacturers.", description: "A leading renewable energy installation company in Wallonia, Belgium, specializing in solar panels, heat pumps, and home battery systems. The company is a certified installer for SunPower, Daikin, and Tesla Powerwall. With Belgian and EU climate targets driving demand, the company has grown 30% annually over the past 2 years.", highlights: ["30% annual growth", "SunPower/Daikin/Tesla certified", "Residential + commercial", "EU Green Deal tailwinds", "Established 12+ years"], reasonForSale: "Strategic reasons", sellerFinancing: true, timeline: "6-12 months", status: "UNDER_LOI" as const, daysAgo: 60 },
    { sellerId: sellers[4].id, title: "Luxury Hotel & Spa — Lake Como", slug: "luxury-hotel-spa-lake-como", sector: "Real Estate", country: "IT", region: "Lombardy", revenue: 5500000, ebitda: 1100000, ebitdaMargin: 0.20, askingPrice: 8800000, askingMultiple: 8.0, employeeCount: 45, yearFounded: 1998, summary: "Boutique 4-star luxury hotel & spa on Lake Como. 28 rooms, Michelin-starred restaurant, and award-winning spa. 80% occupancy rate.", description: "A stunning 4-star boutique hotel overlooking Lake Como with 28 elegantly appointed rooms, a Michelin-starred restaurant, and a full-service spa. The property has maintained an 80% average occupancy rate with an ADR of €350. The hotel is ranked in the top 10 hotels on Lake Como on TripAdvisor and has won multiple hospitality awards.", highlights: ["28-room boutique hotel", "Michelin-starred restaurant", "80% occupancy rate", "€350 ADR", "Top 10 TripAdvisor ranking"], reasonForSale: "Owner retiring", sellerFinancing: true, timeline: "12-18 months", status: "ACTIVE" as const, daysAgo: 50 },
  ];

  const listings = [];
  for (const l of listingData) {
    const listing = await prisma.listing.create({
      data: {
        sellerId: l.sellerId,
        title: l.title,
        slug: l.slug,
        sector: l.sector,
        country: l.country,
        region: l.region,
        currency: "EUR",
        revenue: l.revenue,
        ebitda: l.ebitda,
        ebitdaMargin: l.ebitdaMargin,
        askingPrice: l.askingPrice,
        askingMultiple: l.askingMultiple,
        employeeCount: l.employeeCount,
        yearFounded: l.yearFounded,
        summary: l.summary,
        description: l.description,
        highlights: l.highlights,
        reasonForSale: l.reasonForSale,
        sellerFinancing: l.sellerFinancing,
        timeline: l.timeline,
        status: l.status,
        publishedAt: daysAgo(l.daysAgo),
      },
    });
    listings.push(listing);
  }

  console.log(`Created ${listings.length} listings.`);

  // ─── FORUM CATEGORIES ──────────────────────────────────────────────
  const categories = await Promise.all([
    prisma.forumCategory.create({ data: { name: "Deal Discussion", slug: "deal-discussion", description: "Discuss live deals, deal structures, and valuation approaches.", sortOrder: 1 } }),
    prisma.forumCategory.create({ data: { name: "Search Strategy", slug: "search-strategy", description: "Share and discuss search strategies, sourcing techniques, and target identification.", sortOrder: 2 } }),
    prisma.forumCategory.create({ data: { name: "Due Diligence", slug: "due-diligence", description: "Best practices for financial, legal, and commercial due diligence.", sortOrder: 3 } }),
    prisma.forumCategory.create({ data: { name: "Fundraising", slug: "fundraising", description: "Raising capital for your search fund — LP outreach, pitch decks, and investor relations.", sortOrder: 4 } }),
    prisma.forumCategory.create({ data: { name: "Operations & Growth", slug: "operations-growth", description: "Post-acquisition operations, value creation, and growth strategies.", sortOrder: 5 } }),
  ]);

  console.log(`Created ${categories.length} forum categories.`);

  // ─── FORUM POSTS ───────────────────────────────────────────────────
  const allUsers = [...searcherUsers, ...investorUsers, ...sellers];

  const postData = [
    { title: "How to value a services company with 80% recurring revenue?", slug: "valuation-services-recurring-revenue", content: "I'm looking at a B2B services company in France with €1.2M EBITDA and about 80% recurring revenue from multi-year contracts. The seller is asking 6x EBITDA. For those who have done similar deals — is this fair? Should the high recurring revenue warrant a premium? I've seen comparable transactions in the 4-6x range but those had lower recurring revenue percentages.\n\nAny thoughts on how to frame this in negotiations?", categoryIdx: 0, authorIdx: 0, isPinned: true, daysAgo: 2 },
    { title: "Best practices for cold outreach to business owners", slug: "cold-outreach-business-owners", content: "I'm 3 months into my search and struggling with cold outreach response rates. Currently getting about 2-3% response rate on my emails to business owners.\n\nFor those who have been through this — what worked for you? Direct mail? LinkedIn? Phone calls? Any specific messaging that resonated?\n\nI'm targeting manufacturing companies in Germany, so cultural considerations would be especially helpful.", categoryIdx: 1, authorIdx: 2, isPinned: false, daysAgo: 5 },
    { title: "Red flags in financial due diligence — what to watch for", slug: "red-flags-financial-due-diligence", content: "After losing a deal because we discovered issues too late in DD, I wanted to start a thread on red flags we should all watch for in financial due diligence.\n\nHere are my top ones:\n1. Customer concentration >30% with one client\n2. Significant related-party transactions\n3. Revenue recognition timing that flatters the trailing twelve months\n4. Working capital adjustments that aren't sustainable\n5. Off-balance-sheet commitments\n\nWhat would you add to this list?", categoryIdx: 2, authorIdx: 9, isPinned: true, daysAgo: 10 },
    { title: "Successfully closed my first search fund raise — lessons learned", slug: "first-search-fund-raise-lessons", content: "Just closed my search fund raise at €450K from 12 investors. The whole process took 5 months. Here are my key takeaways:\n\n1. Start with your warmest contacts — alumni network was gold\n2. Have a clear thesis before approaching investors\n3. Be transparent about your experience gaps\n4. The pitch deck matters less than the 1-on-1 conversations\n5. Follow up relentlessly but respectfully\n\nHappy to answer any questions from those in the fundraising stage!", categoryIdx: 3, authorIdx: 5, isPinned: false, daysAgo: 15 },
    { title: "First 100 days as CEO — my transition playbook", slug: "first-100-days-ceo-playbook", content: "I acquired a manufacturing company 6 months ago and wanted to share my first-100-days playbook:\n\nWeeks 1-2: Listen. Meet every employee. Don't change anything.\nWeeks 3-4: Map the processes. Identify the real decision-makers.\nWeeks 5-8: Address quick wins (usually pricing and procurement).\nWeeks 9-12: Start implementing the first strategic initiative.\nWeek 13+: Build your management team and set quarterly OKRs.\n\nThe biggest lesson: the existing team knows more than you think. Your job is to unlock their potential, not replace them.", categoryIdx: 4, authorIdx: 8, isPinned: true, daysAgo: 20 },
    { title: "DACH vs. UK market — where to focus my search?", slug: "dach-vs-uk-market-search", content: "I'm an INSEAD MBA with equal familiarity in both markets (German mother, grew up in London). Currently debating where to focus my search.\n\nPros of DACH: Larger SME market, Mittelstand tradition, less competition from PE\nPros of UK: English-speaking, more established SF ecosystem, easier legal structure\n\nFor those who have searched in either market — what's your honest assessment? Which has better deal flow for a first-time searcher?", categoryIdx: 1, authorIdx: 0, isPinned: false, daysAgo: 8 },
    { title: "Seller financing: how to structure it as a win-win", slug: "seller-financing-structure-win-win", content: "I've found that seller financing can be the difference between closing a deal and losing it. In my experience with 3 acquisitions, here's what works:\n\n- Typical structure: 15-25% of purchase price as seller note\n- Term: 3-5 years with a 1-year interest-only period\n- Rate: Usually 4-6% fixed\n- Subordination: Behind senior debt but with reasonable protections\n\nThe key is framing it as an alignment tool, not a financing necessity. Sellers who carry a note are more likely to support the transition.\n\nWhat structures have worked for others?", categoryIdx: 0, authorIdx: 6, isPinned: false, daysAgo: 12 },
    { title: "Legal due diligence checklist for European acquisitions", slug: "legal-dd-checklist-european", content: "Compiled this checklist from my experience across 3 European jurisdictions. Sharing for the community:\n\n- Corporate structure and ownership chain\n- Employment contracts and collective bargaining agreements\n- IP ownership and licensing agreements\n- Material contracts (customer & supplier)\n- Litigation history and pending disputes\n- Environmental compliance and liabilities\n- GDPR compliance status\n- Regulatory licenses and permits\n- Real estate leases and property rights\n- Tax compliance and outstanding assessments\n\nCountry-specific items vary a lot. French labor law DD is particularly important. German environmental DD can be a dealbreaker for industrial companies.\n\nWhat am I missing?", categoryIdx: 2, authorIdx: 7, isPinned: false, daysAgo: 25 },
    { title: "How many investors should a traditional search fund have?", slug: "how-many-investors-traditional-sf", content: "Getting different advice on this. Some say 10-15 investors for diversification, others say keep it tight at 6-8 for easier governance.\n\nFrom the investor perspective — do you prefer being one of 8 or one of 15?\n\nFrom searchers who've raised — what was your optimal number? How did it affect board dynamics and decision-making speed?", categoryIdx: 3, authorIdx: 2, isPinned: false, daysAgo: 18 },
    { title: "Implementing ERP after acquisition — lessons from the trenches", slug: "erp-implementation-post-acquisition", content: "We acquired a services company that was running everything on Excel. 9 months in, we just finished implementing an ERP system. Here's what I learned:\n\n1. Don't rush it. We started at month 4, not month 1.\n2. Get buy-in from the existing team first.\n3. Choose a system that matches your company size (we went with Odoo).\n4. Budget 2x what you think for the implementation.\n5. The data migration is the hardest part.\n\nROI has been excellent — we reduced admin time by 30% and improved our financial reporting dramatically.", categoryIdx: 4, authorIdx: 14, isPinned: false, daysAgo: 30 },
    { title: "European search fund ecosystem map 2025", slug: "european-sf-ecosystem-map-2025", content: "Has anyone compiled a comprehensive map of the European search fund ecosystem for 2025? I'm thinking:\n\n- Active investors by geography\n- Business schools with SF programs\n- Accelerators and incubators\n- Legal and advisory firms specializing in SF\n- Successful exits and case studies\n\nI'm willing to maintain a shared resource if we can crowdsource the data. This would be incredibly valuable for new searchers entering the market.", categoryIdx: 1, authorIdx: 10, isPinned: false, daysAgo: 4 },
    { title: "Quality of Earnings report — worth the cost?", slug: "quality-of-earnings-worth-cost", content: "I'm about to enter DD on a €2M EBITDA company. My QoE provider quoted €25K for a full report.\n\nFor those who've been through this — was the QoE worth it? What did it catch that you might have missed? Any recommendations for good QoE firms in Europe?\n\nI'm trying to balance thoroughness with not spending my entire DD budget on a single report.", categoryIdx: 2, authorIdx: 4, isPinned: false, daysAgo: 7 },
    { title: "Nordic search funds — growing or stalling?", slug: "nordic-search-funds-growing-stalling", content: "Curious about the state of search funds in the Nordics. I've heard mixed things:\n\n- Sweden seems to have the most activity\n- Denmark has Øresund Capital's accelerator\n- Norway and Finland seem quieter\n\nFor Nordic searchers and investors — what's your take on the market? Is deal flow good? Are sellers receptive to the SF model? Any cultural nuances to be aware of?", categoryIdx: 1, authorIdx: 11, isPinned: false, daysAgo: 14 },
    { title: "Post-acquisition pricing strategy — quick wins", slug: "post-acquisition-pricing-quick-wins", content: "Pricing was the single biggest lever we pulled post-acquisition. Our services company hadn't raised prices in 3 years. Here's what we did:\n\n1. Analyzed profitability by client segment\n2. Identified clients below our cost-to-serve threshold\n3. Implemented a 5-8% across-the-board increase with 60 days notice\n4. Added a new premium service tier\n\nResult: Revenue up 12% with only 2% client churn (both unprofitable accounts). EBITDA impact was even larger.\n\nDon't underestimate the power of pricing!", categoryIdx: 4, authorIdx: 8, isPinned: false, daysAgo: 22 },
    { title: "SBA equivalent in Europe — country-by-country financing options", slug: "sba-equivalent-europe-financing", content: "In the US, SBA loans are a key tool for search fund acquisitions. What are the European equivalents?\n\nFrom my research:\n- France: BPI France offers acquisition financing\n- Germany: KfW has the ERP-Gründerkredit program\n- Spain: ICO guarantees through banks\n- Netherlands: BMKB guarantee scheme\n- UK: British Business Bank's Start Up Loans and EFG\n\nAnyone have experience with these programs? Are they actually practical for search fund acquisitions, or more theoretical?\n\nWould love to hear real experiences.", categoryIdx: 3, authorIdx: 12, isPinned: false, daysAgo: 35 },
  ];

  const posts = [];
  for (const p of postData) {
    const post = await prisma.forumPost.create({
      data: {
        title: p.title,
        slug: p.slug,
        content: p.content,
        authorId: allUsers[p.authorIdx].id,
        categoryId: categories[p.categoryIdx].id,
        isPinned: p.isPinned,
        viewCount: Math.floor(Math.random() * 500) + 50,
        createdAt: daysAgo(p.daysAgo),
      },
    });
    posts.push(post);
  }

  console.log(`Created ${posts.length} forum posts.`);

  // ─── FORUM COMMENTS ────────────────────────────────────────────────
  const commentData = [
    { postIdx: 0, authorIdx: 1, content: "6x for 80% recurring seems fair, maybe even a slight discount. I closed a similar deal at 6.5x with 75% recurring. The key is the quality of the contracts — are they truly recurring or just 'expected' renewals? Check the actual churn rate over 3+ years.", daysAgo: 1 },
    { postIdx: 0, authorIdx: 5, content: "As an investor, I'd support 5.5-6.5x for that profile. The question is: what's the client concentration? If the top 5 clients represent >40% of revenue, that's a risk that should bring the multiple down.", daysAgo: 1 },
    { postIdx: 1, authorIdx: 7, content: "In Germany, direct mail (physical letters) works surprisingly well with Mittelstand owners. They take it more seriously than email. I'd also recommend getting warm introductions through Steuerberater (tax advisors) and Wirtschaftsprüfer (auditors) — they often know who's thinking about selling.", daysAgo: 4 },
    { postIdx: 2, authorIdx: 3, content: "I'd add: watch out for 'adjusted EBITDA' that adds back the owner's excessive salary, one-time costs that seem to recur every year, and capex that's been deferred to make EBITDA look better. Always normalize for maintenance capex.", daysAgo: 9 },
    { postIdx: 3, authorIdx: 2, content: "Congrats on the close! How did you handle investors who wanted board seats? With 12 investors, I imagine governance could get complicated.", daysAgo: 14 },
    { postIdx: 4, authorIdx: 0, content: "This is incredibly helpful, thank you. One question: how did you handle the previous owner's relationships with key clients? Did you involve them in the transition?", daysAgo: 19 },
    { postIdx: 5, authorIdx: 2, content: "I searched in Germany. Pros: amazing deal flow once you're in the network. Cons: longer sales cycles, sellers want to know you personally before serious talks. Budget 6+ months more than you would in the UK. But the quality of companies is exceptional.", daysAgo: 7 },
    { postIdx: 6, authorIdx: 3, content: "Great breakdown. I'd add that in Spain, seller financing is almost expected — many sellers see it as the normal way to structure a deal. In Germany, it's less common and you need to frame it more carefully.", daysAgo: 11 },
    { postIdx: 10, authorIdx: 5, content: "This would be incredibly valuable. I'm happy to contribute data on the Nordic ecosystem. We should also include successful exits as case studies to demonstrate the model works in Europe.", daysAgo: 3 },
    { postIdx: 11, authorIdx: 6, content: "Absolutely worth it. Our QoE caught a €200K working capital adjustment that the seller hadn't disclosed. That alone paid for the report 8x over. I'd recommend asking for references from other search fund acquirers — the firm needs to understand the SF context.", daysAgo: 6 },
  ];

  for (const c of commentData) {
    await prisma.forumComment.create({
      data: {
        content: c.content,
        authorId: allUsers[c.authorIdx].id,
        postId: posts[c.postIdx].id,
        createdAt: daysAgo(c.daysAgo),
      },
    });
  }

  console.log(`Created ${commentData.length} forum comments.`);

  console.log("\nSeed complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
