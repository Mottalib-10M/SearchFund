import type { JSX } from "react";
import type { ArticleMeta } from "./article-registry";

// ---------------------------------------------------------------------------
// French article metadata — true localizations, not translations
// ---------------------------------------------------------------------------

export const frArticles: ArticleMeta[] = [
  {
    slug: "getting-started",
    title: "Qu\u2019est-ce qu\u2019un Search Fund ? Guide Complet",
    description: "Tout comprendre sur le mod\u00e8le du search fund : d\u00e9finition, fonctionnement, \u00e9conomie et panorama de l\u2019ETA en France et en Europe.",
    readTime: "15 min de lecture",
    tag: "Les Bases",
    category: "Getting Started",
    ogTitle: "Qu\u2019est-ce qu\u2019un Search Fund ? Le Guide Complet pour l\u2019Entrepreneur Acqu\u00e9reur",
    ogDescription: "Search fund, fonds de recherche, ETA : comprendre le mod\u00e8le d\u2019entrepreneuriat par acquisition, ses \u00e9tapes, son \u00e9conomie et son potentiel en France.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "HEC Paris", title: "Entrepreneuriat par Acquisition", year: 2024 },
      { name: "INSEAD", title: "ETA & Search Funds Research Hub", year: 2024 },
      { name: "Bpifrance", title: "Reprendre une Entreprise", year: 2024 },
    ],
    faqs: [
      { question: "Qu\u2019est-ce qu\u2019un search fund exactement ?", answer: "Un search fund (fonds de recherche) est un v\u00e9hicule d\u2019investissement qui permet \u00e0 un entrepreneur de lever des capitaux pour rechercher, acqu\u00e9rir et diriger une PME. Le mod\u00e8le, n\u00e9 \u00e0 Stanford en 1984, conna\u00eet un essor significatif en Europe, particuli\u00e8rement en France avec l\u2019appui des r\u00e9seaux HEC et INSEAD." },
      { question: "Combien co\u00fbte le lancement d\u2019un search fund en France ?", answer: "La phase de recherche co\u00fbte g\u00e9n\u00e9ralement entre 300\u202f000\u00a0\u20ac et 600\u202f000\u00a0\u20ac sur 18-24 mois, couvrant la r\u00e9mun\u00e9ration du searcher, les frais juridiques, les d\u00e9placements et les outils. En France, les structures SAS facilitent la cr\u00e9ation du v\u00e9hicule d\u2019investissement." },
      { question: "Quel est le profil type d\u2019un searcher en France ?", answer: "En France, les searchers ont g\u00e9n\u00e9ralement un dipl\u00f4me de grande \u00e9cole de commerce (HEC, INSEAD, ESSEC) ou d\u2019ing\u00e9nieur, 3-8 ans d\u2019exp\u00e9rience en conseil, banque d\u2019affaires ou op\u00e9rations, et une forte volont\u00e9 de devenir dirigeant-propri\u00e9taire." },
    ],
  },
  {
    slug: "self-funded-vs-traditional",
    title: "Search Fund Traditionnel vs. Autofinanc\u00e9 : Comparaison",
    description: "Comparez les mod\u00e8les de search fund traditionnel et autofinanc\u00e9 en France : avantages, inconv\u00e9nients, \u00e9conomie et contexte fran\u00e7ais.",
    readTime: "12 min de lecture",
    tag: "Les Bases",
    category: "Getting Started",
    ogTitle: "Search Fund Traditionnel vs. Autofinanc\u00e9 : Quelle Approche Choisir en France ?",
    ogDescription: "Comparaison d\u00e9taill\u00e9e des mod\u00e8les de search fund traditionnel et autofinanc\u00e9 : capital, \u00e9conomie, structuration juridique et sp\u00e9cificit\u00e9s fran\u00e7aises.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "HEC Paris", title: "Mod\u00e8les d\u2019Acquisition Entrepreneuriale", year: 2024 },
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
    faqs: [
      { question: "Quel mod\u00e8le est le plus courant en France ?", answer: "En France, le mod\u00e8le autofinanc\u00e9 (ou semi-autofinanc\u00e9) est plus r\u00e9pandu que le mod\u00e8le traditionnel am\u00e9ricain, car le march\u00e9 des investisseurs search fund sp\u00e9cialis\u00e9s y est encore en d\u00e9veloppement. De nombreux repreneurs fran\u00e7ais combinent apport personnel, pr\u00eat bancaire et cr\u00e9dit vendeur." },
      { question: "Peut-on utiliser les aides Bpifrance pour un search fund ?", answer: "Bpifrance propose plusieurs dispositifs utiles aux repreneurs : le pr\u00eat transmission (jusqu\u2019\u00e0 400\u202f000\u00a0\u20ac), la garantie de pr\u00eat, et des subventions via les r\u00e9seaux Initiative France. Ces outils compl\u00e8tent le financement d\u2019une acquisition dans le cadre d\u2019un search fund autofinanc\u00e9." },
    ],
  },
  {
    slug: "eta-france",
    title: "ETA en France : Acqu\u00e9rir une Entreprise par Recherche Active",
    description: "Guide complet de l\u2019entrepreneuriat par acquisition en France : \u00e9cosyst\u00e8me, cadre juridique, financement et conseils pratiques.",
    readTime: "18 min de lecture",
    tag: "France",
    category: "Regional Guides",
    ogTitle: "ETA en France : Guide de l\u2019Entrepreneuriat par Acquisition",
    ogDescription: "Tout savoir sur l\u2019ETA en France : \u00e9cosyst\u00e8me HEC/INSEAD, structures SAS/SARL, Dutreil, Bpifrance, CRA et conseils pour r\u00e9ussir votre recherche.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Bpifrance", title: "Guide de la Transmission d\u2019Entreprise", year: 2024 },
      { name: "CRA", title: "C\u00e9dants et Repreneurs d\u2019Affaires", year: 2024 },
      { name: "HEC Paris", title: "Chaire Entrepreneuriat", year: 2024 },
    ],
    faqs: [
      { question: "Combien d\u2019entreprises sont \u00e0 reprendre en France ?", answer: "Selon Bpifrance, environ 700\u202f000 entreprises fran\u00e7aises changeront de mains dans la prochaine d\u00e9cennie en raison des d\u00e9parts \u00e0 la retraite des baby-boomers. Ce \u00ab\u00a0tsunami gris\u00a0\u00bb cr\u00e9e une opportunit\u00e9 historique pour les entrepreneurs-acqu\u00e9reurs." },
      { question: "Qu\u2019est-ce que le r\u00e9seau CRA ?", answer: "CRA (C\u00e9dants et Repreneurs d\u2019Affaires) est le premier r\u00e9seau fran\u00e7ais de conseil en transmission d\u2019entreprise, avec plus de 130 consultants b\u00e9n\u00e9voles. Ils accompagnent gratuitement c\u00e9dants et repreneurs dans toutes les \u00e9tapes de la transmission." },
    ],
  },
  {
    slug: "eta-europe",
    title: "ETA en Europe : L\u2019Opportunit\u00e9 de la Succession des PME",
    description: "Panorama de l\u2019entrepreneuriat par acquisition en Europe : march\u00e9 de la transmission, diff\u00e9rences r\u00e9gionales et opportunit\u00e9s.",
    readTime: "15 min de lecture",
    tag: "Europe",
    category: "Regional Guides",
    ogTitle: "L\u2019ETA en Europe : Panorama du March\u00e9 de la Transmission de PME",
    ogDescription: "D\u00e9couvrez l\u2019ETA en Europe : 2,4 millions de PME \u00e0 transmettre, \u00e9cosyst\u00e8me IESE/HEC/INSEAD, et pourquoi l\u2019Europe est le prochain grand march\u00e9 du search fund.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Commission Europ\u00e9enne", title: "Rapport sur la Succession des PME", year: 2024 },
      { name: "IESE Business School", title: "\u00c9tude Internationale des Search Funds", year: 2024 },
    ],
    faqs: [
      { question: "Combien de PME europ\u00e9ennes cherchent un repreneur ?", answer: "La Commission Europ\u00e9enne estime que 2,4 millions de PME devront trouver un successeur dans la prochaine d\u00e9cennie. Ce chiffre repr\u00e9sente un potentiel \u00e9norme pour l\u2019ETA, bien sup\u00e9rieur au march\u00e9 am\u00e9ricain en proportion." },
    ],
  },
  {
    slug: "business-valuation",
    title: "Comment Valoriser une PME pour l\u2019Acquisition",
    description: "M\u00e9thodes de valorisation d\u2019entreprise adapt\u00e9es au contexte fran\u00e7ais : multiples, DCF, actif net, et sp\u00e9cificit\u00e9s des PME.",
    readTime: "15 min de lecture",
    tag: "Valorisation",
    category: "Deal Execution",
    ogTitle: "Valorisation de PME : M\u00e9thodes et Bonnes Pratiques pour l\u2019Acquisition",
    ogDescription: "Apprenez \u00e0 valoriser une PME fran\u00e7aise pour l\u2019acquisition : multiples d\u2019EBITDA, DCF, actif net comptable, et ajustements sp\u00e9cifiques au march\u00e9 fran\u00e7ais.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Ordre des Experts-Comptables", title: "Guide de la Valorisation d\u2019Entreprise", year: 2024 },
      { name: "BPCE L\u2019Observatoire", title: "Multiples de Transactions PME", year: 2024 },
    ],
    faqs: [
      { question: "Quels sont les multiples d\u2019EBITDA typiques pour une PME fran\u00e7aise ?", answer: "Les multiples varient selon le secteur et la taille. Pour les PME fran\u00e7aises de 1-5M\u20ac d\u2019EBITDA : services B2B 5-7x, industrie 4-6x, technologie 7-12x, services de sant\u00e9 6-9x. Les entreprises plus petites (< 1M\u20ac EBITDA) se n\u00e9gocient g\u00e9n\u00e9ralement entre 3-5x." },
    ],
  },
  {
    slug: "acquisition-financing",
    title: "Financer l\u2019Acquisition d\u2019une PME en France",
    description: "Guide du financement d\u2019acquisition en France : pr\u00eat bancaire, cr\u00e9dit vendeur, Bpifrance, LBO, apport en fonds propres.",
    readTime: "16 min de lecture",
    tag: "Financement",
    category: "Deal Execution",
    ogTitle: "Financer l\u2019Acquisition d\u2019une PME : Guide Complet du Financement en France",
    ogDescription: "Toutes les sources de financement pour acqu\u00e9rir une PME en France : pr\u00eat bancaire, cr\u00e9dit vendeur, Bpifrance Transmission, LBO, mezzanine et aides publiques.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Bpifrance", title: "Pr\u00eat Transmission et Garanties", year: 2024 },
      { name: "F\u00e9d\u00e9ration Bancaire Fran\u00e7aise", title: "Guide du Financement de la Reprise", year: 2024 },
    ],
    faqs: [
      { question: "Quel apport personnel pour reprendre une PME en France ?", answer: "Les banques fran\u00e7aises demandent g\u00e9n\u00e9ralement un apport de 20-30% du prix d\u2019acquisition. Bpifrance peut compl\u00e9ter avec un pr\u00eat transmission (sans garantie personnelle) et une garantie de pr\u00eat bancaire couvrant 50-70% du risque. Le cr\u00e9dit vendeur (10-20% du prix) est \u00e9galement courant." },
    ],
  },
  {
    slug: "search-fund-legal-structure",
    title: "Structure Juridique du Search Fund : SAS, SARL et Holdings",
    description: "Comment structurer juridiquement un search fund en France : choix de la forme sociale, holding, statuts et pacte d\u2019actionnaires.",
    readTime: "15 min de lecture",
    tag: "Juridique",
    category: "Legal & Tax",
    ogTitle: "Structure Juridique du Search Fund en France : SAS, SARL et Holding",
    ogDescription: "Guide de la structuration juridique d\u2019un search fund en droit fran\u00e7ais : SAS vs SARL, soci\u00e9t\u00e9 holding, pacte d\u2019actionnaires et r\u00e9gime fiscal.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Code de Commerce", title: "Dispositions sur les SAS et SARL", year: 2024 },
      { name: "CMS Francis Lefebvre", title: "Guide des Holdings en France", year: 2024 },
    ],
    faqs: [
      { question: "Pourquoi la SAS est-elle privil\u00e9gi\u00e9e pour les search funds en France ?", answer: "La SAS offre une grande libert\u00e9 statutaire, permettant de cr\u00e9er diff\u00e9rentes classes d\u2019actions (ordinaires, de pr\u00e9f\u00e9rence), des clauses de vesting, des droits de vote modulables et des m\u00e9canismes de gouvernance sur mesure. C\u2019est la forme juridique la plus adapt\u00e9e aux investisseurs search fund." },
    ],
  },
  {
    slug: "tax-optimization",
    title: "Optimisation Fiscale : Pacte Dutreil et Holdings en France",
    description: "Strat\u00e9gies d\u2019optimisation fiscale pour l\u2019acquisition de PME en France : Dutreil, apport-cession 150-0 B ter, holding IS.",
    readTime: "16 min de lecture",
    tag: "Fiscalit\u00e9",
    category: "Legal & Tax",
    ogTitle: "Optimisation Fiscale pour l\u2019Acquisition de PME : Dutreil, Holdings et Apport-Cession",
    ogDescription: "Optimisez la fiscalit\u00e9 de votre acquisition : pacte Dutreil (exon\u00e9ration 75%), apport-cession article 150-0 B ter, holding \u00e0 l\u2019IS et int\u00e9gration fiscale.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Direction G\u00e9n\u00e9rale des Finances Publiques", title: "Guide du Pacte Dutreil", year: 2024 },
      { name: "Ordre des Experts-Comptables", title: "Fiscalit\u00e9 de la Transmission", year: 2024 },
    ],
    faqs: [
      { question: "Qu\u2019est-ce que le pacte Dutreil et comment en b\u00e9n\u00e9ficier ?", answer: "Le pacte Dutreil permet une exon\u00e9ration de 75% des droits de donation ou de succession sur les parts d\u2019entreprise, sous conditions d\u2019engagement collectif de conservation (2 ans) et individuel (4 ans), plus l\u2019exercice d\u2019une fonction de direction pendant 3 ans. C\u2019est un outil majeur pour la transmission d\u2019entreprise en France." },
    ],
  },
  {
    slug: "writing-a-ppm",
    title: "R\u00e9diger un PPM (M\u00e9morandum de Placement Priv\u00e9)",
    description: "Guide de r\u00e9daction d\u2019un PPM pour la lev\u00e9e de fonds search fund en France : contenu, r\u00e9glementation AMF et bonnes pratiques.",
    readTime: "14 min de lecture",
    tag: "Lev\u00e9e de Fonds",
    category: "Fundraising & Investors",
    ogTitle: "PPM Search Fund : Guide de R\u00e9daction du M\u00e9morandum de Placement Priv\u00e9",
    ogDescription: "Comment r\u00e9diger un PPM efficace pour lever des fonds search fund en France. Contenu, structure, conformit\u00e9 AMF et conseils pour convaincre les investisseurs.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "AMF", title: "R\u00e9glementation du Placement Priv\u00e9", year: 2024 },
      { name: "Stanford GSB", title: "Search Fund Primer", year: 2024 },
    ],
    faqs: [
      { question: "Le PPM est-il obligatoire en France ?", answer: "Le PPM n\u2019est pas l\u00e9galement obligatoire pour un placement priv\u00e9 aupr\u00e8s d\u2019investisseurs qualifi\u00e9s en France, mais c\u2019est un document standard dans l\u2019\u00e9cosyst\u00e8me search fund. L\u2019AMF encadre les offres au public, mais le placement priv\u00e9 aupr\u00e8s d\u2019investisseurs avertis b\u00e9n\u00e9ficie d\u2019exemptions." },
    ],
  },
  {
    slug: "letter-of-intent",
    title: "Lettre d\u2019Intention (LOI) : R\u00e9daction et N\u00e9gociation",
    description: "Guide de la lettre d\u2019intention en droit fran\u00e7ais : clauses cl\u00e9s, engagements, exclusivit\u00e9, conditions suspensives et erreurs \u00e0 \u00e9viter.",
    readTime: "14 min de lecture",
    tag: "N\u00e9gociation",
    category: "Deal Execution",
    ogTitle: "Lettre d\u2019Intention (LOI) en France : Guide Complet de R\u00e9daction et N\u00e9gociation",
    ogDescription: "Apprenez \u00e0 r\u00e9diger et n\u00e9gocier une LOI en France : clauses essentielles, exclusivit\u00e9, conditions suspensives, valorisation et pi\u00e8ges \u00e0 \u00e9viter.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Pratique du Droit Fran\u00e7ais des Affaires", title: "La Lettre d\u2019Intention en M&A", year: 2024 },
    ],
    faqs: [
      { question: "La lettre d\u2019intention est-elle juridiquement contraignante en France ?", answer: "En droit fran\u00e7ais, la LOI n\u2019est g\u00e9n\u00e9ralement pas contraignante sur le prix et les conditions principales, mais certaines clauses le sont : exclusivit\u00e9, confidentialit\u00e9 et bonne foi. La jurisprudence fran\u00e7aise sanctionne la rupture abusive des n\u00e9gociations (article 1112 du Code civil)." },
    ],
  },
  {
    slug: "due-diligence-checklist",
    title: "Checklist de Due Diligence pour Acquisition de PME",
    description: "Checklist compl\u00e8te de due diligence adapt\u00e9e au contexte fran\u00e7ais : audit comptable, juridique, fiscal, social et environnemental.",
    readTime: "16 min de lecture",
    tag: "Due Diligence",
    category: "Deal Execution",
    ogTitle: "Due Diligence PME en France : La Checklist Compl\u00e8te pour l\u2019Acqu\u00e9reur",
    ogDescription: "Checklist de due diligence compl\u00e8te pour l\u2019acquisition d\u2019une PME fran\u00e7aise : audit comptable, juridique, fiscal, social, environnemental et op\u00e9rationnel.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Ordre des Experts-Comptables", title: "Guide de l\u2019Audit d\u2019Acquisition", year: 2024 },
      { name: "Compagnie Nationale des Commissaires aux Comptes", title: "Normes d\u2019Audit", year: 2024 },
    ],
    faqs: [
      { question: "Quels sont les sp\u00e9cificit\u00e9s de la due diligence en France ?", answer: "En France, la DD doit v\u00e9rifier : les engagements hors bilan, les provisions pour risques, la conformit\u00e9 au droit du travail (conventions collectives, CSE, accords d\u2019entreprise), le statut des baux commerciaux, les aides publiques re\u00e7ues (Bpifrance, CIR), et le respect du RGPD." },
    ],
  },
  {
    slug: "deal-sourcing-strategies",
    title: "Strat\u00e9gies de Sourcing : Trouver la Bonne PME en France",
    description: "Comment trouver des PME \u00e0 acqu\u00e9rir en France : CRA, Bpifrance Transmission, Fusacq, approche directe et r\u00e9seaux.",
    readTime: "14 min de lecture",
    tag: "Deal Sourcing",
    category: "Deal Execution",
    ogTitle: "Deal Sourcing en France : Comment Trouver la PME Id\u00e9ale \u00e0 Acqu\u00e9rir",
    ogDescription: "Toutes les strat\u00e9gies de sourcing pour trouver une PME \u00e0 reprendre en France : CRA, Bpifrance Transmission, Fusacq, approche directe et r\u00e9seaux professionnels.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "CRA", title: "R\u00e9seau C\u00e9dants et Repreneurs d\u2019Affaires", year: 2024 },
      { name: "Bpifrance Transmission", title: "Plateforme de Reprise", year: 2024 },
    ],
    faqs: [
      { question: "Quels sont les meilleurs canaux de sourcing en France ?", answer: "Les principaux canaux sont : CRA (r\u00e9seau de 130 consultants b\u00e9n\u00e9voles), Bpifrance Transmission (plateforme officielle), Fusacq.com (marketplace), Michel Simond (r\u00e9seau franchise), l\u2019approche directe via les CCI/CMA, et les experts-comptables/avocats d\u2019affaires qui connaissent des c\u00e9dants." },
    ],
  },
  {
    slug: "first-100-days",
    title: "Les 100 Premiers Jours comme Dirigeant post-Acquisition",
    description: "Guide des 100 premiers jours apr\u00e8s l\u2019acquisition d\u2019une PME en France : prise de poste, communication, et priorit\u00e9s op\u00e9rationnelles.",
    readTime: "14 min de lecture",
    tag: "Post-Acquisition",
    category: "Operations & Growth",
    ogTitle: "Les 100 Premiers Jours apr\u00e8s l\u2019Acquisition : Guide du Nouveau Dirigeant",
    ogDescription: "R\u00e9ussissez vos 100 premiers jours comme PDG d\u2019une PME acquise. Prise de poste, communication aux salari\u00e9s, relation avec le CSE et priorit\u00e9s strat\u00e9giques.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Michael Watkins", title: "The First 90 Days", year: 2013 },
      { name: "Bpifrance", title: "Guide du Repreneur", year: 2024 },
    ],
    faqs: [
      { question: "Quelles sont les sp\u00e9cificit\u00e9s fran\u00e7aises de la prise de poste ?", answer: "En France, le nouveau dirigeant doit : informer le CSE (Comit\u00e9 Social et \u00c9conomique) du changement de propri\u00e9taire, respecter les conventions collectives, g\u00e9rer la relation avec les repr\u00e9sentants du personnel, et naviguer le droit du travail fran\u00e7ais qui est plus protecteur pour les salari\u00e9s qu\u2019aux \u00c9tats-Unis." },
    ],
  },
  {
    slug: "finding-investors",
    title: "Comment Trouver des Investisseurs Search Fund en France",
    description: "Guide pour identifier et approcher les investisseurs search fund en France et en Europe : family offices, institutionnels et r\u00e9seaux.",
    readTime: "14 min de lecture",
    tag: "Lev\u00e9e de Fonds",
    category: "Fundraising & Investors",
    ogTitle: "Trouver des Investisseurs Search Fund en France : Guide Pratique",
    ogDescription: "Identifiez et approchez les investisseurs search fund en France : family offices, fonds sp\u00e9cialis\u00e9s, r\u00e9seaux HEC/INSEAD et investisseurs europ\u00e9ens.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "France Invest", title: "Guide du Capital-Investissement", year: 2024 },
      { name: "INSEAD", title: "ETA Alumni Investor Network", year: 2024 },
    ],
    faqs: [
      { question: "Y a-t-il des investisseurs search fund sp\u00e9cialis\u00e9s en France ?", answer: "Le march\u00e9 se d\u00e9veloppe rapidement. On trouve des family offices actifs sur l\u2019ETA, des investisseurs du r\u00e9seau HEC/INSEAD, et des fonds europ\u00e9ens comme Scipio Holding (Belgique), WAD Capital et Novastone Capital Advisors. De nombreux investisseurs am\u00e9ricains (Pacific Lake, Relay) investissent \u00e9galement en France." },
    ],
  },
  {
    slug: "why-invest-in-search-funds",
    title: "Pourquoi Investir dans les Search Funds ?",
    description: "Analyse du rendement et de l\u2019int\u00e9r\u00eat d\u2019investir dans les search funds : donn\u00e9es Stanford, rendements europ\u00e9ens et construction de portefeuille.",
    readTime: "14 min de lecture",
    tag: "Investissement",
    category: "Fundraising & Investors",
    ogTitle: "Investir dans les Search Funds : Rendements, Risques et Opportunit\u00e9s",
    ogDescription: "D\u00e9couvrez pourquoi les investisseurs institutionnels et family offices s\u2019int\u00e9ressent aux search funds. Donn\u00e9es Stanford, rendements historiques et perspectives europ\u00e9ennes.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
      { name: "IESE Business School", title: "\u00c9tude Internationale des Search Funds", year: 2024 },
    ],
    faqs: [
      { question: "Les search funds europ\u00e9ens sont-ils aussi rentables que les am\u00e9ricains ?", answer: "Les donn\u00e9es europ\u00e9ennes sont encore limit\u00e9es par rapport au track record am\u00e9ricain de 40 ans. Les premiers r\u00e9sultats sont encourageants, avec des rendements comparables, mais le march\u00e9 est moins mature. L\u2019avantage europ\u00e9en r\u00e9side dans des multiples d\u2019acquisition souvent inf\u00e9rieurs et moins de concurrence." },
    ],
  },
  {
    slug: "cap-tables-equity",
    title: "\u00c9conomie du Search Fund : Cap Table et Distribution",
    description: "Comprendre la table de capitalisation d\u2019un search fund : r\u00e9partition du capital, step-up, preferred return et m\u00e9canismes d\u2019int\u00e9ressement.",
    readTime: "14 min de lecture",
    tag: "Financement",
    category: "Fundraising & Investors",
    ogTitle: "Cap Table Search Fund : Comprendre la R\u00e9partition du Capital et les M\u00e9canismes",
    ogDescription: "\u00c9conomie du search fund expliqu\u00e9e : r\u00e9partition du capital entre searcher et investisseurs, step-up, preferred return, vesting et distribution \u00e0 la sortie.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "Search Fund Economics", year: 2024 },
      { name: "Yale SOM", title: "Search Fund Legal Structures", year: 2024 },
    ],
    faqs: [
      { question: "Quelle est la part typique du searcher dans un search fund ?", answer: "Le searcher re\u00e7oit g\u00e9n\u00e9ralement 20-30% du capital ordinaire (common equity), acquis progressivement via un vesting sur 4-5 ans. Un tiers au closing, un tiers \u00e0 2 ans, un tiers \u00e0 4 ans. Ce pourcentage peut varier selon les n\u00e9gociations avec les investisseurs et la taille de l\u2019acquisition." },
    ],
  },
  {
    slug: "stanford-2024-study",
    title: "\u00c9tude Stanford 2024 : Chiffres Cl\u00e9s des Search Funds",
    description: "Analyse de l\u2019\u00e9tude Stanford 2024 sur les search funds : rendements, taux d\u2019acquisition, tendances et implications pour le march\u00e9 europ\u00e9en.",
    readTime: "14 min de lecture",
    tag: "Recherche",
    category: "Getting Started",
    ogTitle: "\u00c9tude Stanford 2024 : Les Chiffres Cl\u00e9s des Search Funds Analys\u00e9s",
    ogDescription: "D\u00e9cryptage de l\u2019\u00e9tude Stanford 2024 : 681 search funds analys\u00e9s, rendements, taux d\u2019acquisition et ce que cela signifie pour le march\u00e9 europ\u00e9en.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
    ],
    faqs: [
      { question: "Que r\u00e9v\u00e8le l\u2019\u00e9tude Stanford 2024 ?", answer: "L\u2019\u00e9tude analyse 681 search funds depuis 1984. Les chiffres cl\u00e9s montrent un taux d\u2019acquisition d\u2019environ 70%, une dur\u00e9e m\u00e9diane de recherche de 20 mois, et des rendements attractifs pour les investisseurs, bien que la dispersion soit \u00e9lev\u00e9e entre les meilleurs et les moins performants." },
    ],
  },
  {
    slug: "search-fund-returns",
    title: "Rendements des Search Funds : Donn\u00e9es et Analyse",
    description: "Analyse des rendements historiques des search funds : IRR, MOIC, facteurs de succ\u00e8s et comparaison avec d\u2019autres classes d\u2019actifs.",
    readTime: "14 min de lecture",
    tag: "Investissement",
    category: "Getting Started",
    ogTitle: "Rendements des Search Funds : Donn\u00e9es Historiques et Perspectives",
    ogDescription: "Analyse compl\u00e8te des rendements des search funds : IRR, MOIC, facteurs de performance et comparaison avec le private equity et le venture capital.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
      { name: "IESE Business School", title: "European Search Fund Returns", year: 2024 },
    ],
    faqs: [
      { question: "Les search funds surperforment-ils le private equity traditionnel ?", answer: "Les donn\u00e9es Stanford sugg\u00e8rent des rendements agr\u00e9g\u00e9s attractifs pour les search funds, mais avec une dispersion tr\u00e8s \u00e9lev\u00e9e. Le top quartile g\u00e9n\u00e8re des rendements exceptionnels, tandis que le bottom quartile peut entra\u00eener une perte totale. La comparaison avec le PE est d\u00e9licate car les profils de risque diff\u00e8rent." },
    ],
  },
  {
    slug: "seller-financing",
    title: "Cr\u00e9dit Vendeur : Structures et N\u00e9gociation en France",
    description: "Guide du cr\u00e9dit vendeur pour l\u2019acquisition de PME en France : structures, fiscalit\u00e9, n\u00e9gociation et garanties.",
    readTime: "14 min de lecture",
    tag: "Financement",
    category: "Deal Execution",
    ogTitle: "Cr\u00e9dit Vendeur en France : Guide de la N\u00e9gociation et de la Structuration",
    ogDescription: "Tout sur le cr\u00e9dit vendeur en France : dur\u00e9e, taux, garanties, traitement fiscal et conseils de n\u00e9gociation pour l\u2019acquisition de PME.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Ordre des Experts-Comptables", title: "Le Cr\u00e9dit Vendeur en Transmission", year: 2024 },
    ],
    faqs: [
      { question: "Quel pourcentage du prix repr\u00e9sente le cr\u00e9dit vendeur en France ?", answer: "En France, le cr\u00e9dit vendeur repr\u00e9sente g\u00e9n\u00e9ralement 10-30% du prix d\u2019acquisition, remboursable sur 2-5 ans. Il sert de signal de confiance du vendeur dans la p\u00e9rennit\u00e9 de l\u2019entreprise et facilite le montage financier en r\u00e9duisant le besoin d\u2019emprunt bancaire." },
    ],
  },
  {
    slug: "management-transition-plan",
    title: "Transition Manag\u00e9riale et Communication en France",
    description: "G\u00e9rer la transition manag\u00e9riale post-acquisition en France : communication aux salari\u00e9s, CSE, relations sociales et int\u00e9gration.",
    readTime: "14 min de lecture",
    tag: "Post-Acquisition",
    category: "Operations & Growth",
    ogTitle: "Transition Manag\u00e9riale post-Acquisition : Communication et Relations Sociales en France",
    ogDescription: "R\u00e9ussissez la transition manag\u00e9riale en France : information du CSE, communication aux salari\u00e9s, gestion des relations sociales et int\u00e9gration op\u00e9rationnelle.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Code du Travail", title: "Obligations d\u2019Information du CSE", year: 2024 },
      { name: "Bpifrance", title: "Guide du Repreneur", year: 2024 },
    ],
    faqs: [
      { question: "Faut-il informer le CSE avant l\u2019acquisition ?", answer: "Oui, en France, le CSE doit \u00eatre inform\u00e9 et consult\u00e9 sur tout changement de propri\u00e9taire ou de contr\u00f4le de l\u2019entreprise (article L2312-8 du Code du travail). Cette consultation est obligatoire et doit intervenir avant la finalisation de la cession. Le non-respect peut entra\u00eener la nullit\u00e9 de l\u2019op\u00e9ration." },
    ],
  },
  // ── Phase 2 — FR Expansion (30 articles) ──────────────────────────────
  {
    slug: "working-with-advisors",
    title: "Travailler avec des Conseillers : Avocats et Experts-Comptables",
    description: "Comment choisir et travailler avec des avocats d\u2019affaires et experts-comptables pour votre acquisition de PME en France.",
    readTime: "13 min de lecture",
    tag: "Conseil",
    category: "Deal Execution",
    ogTitle: "Avocats et Experts-Comptables pour l\u2019Acquisition de PME en France",
    ogDescription: "Guide pour choisir et collaborer avec des conseillers sp\u00e9cialis\u00e9s en transmission d\u2019entreprise : avocats, experts-comptables, notaires et courtiers.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Ordre des Experts-Comptables", title: "Guide de la Mission de Transmission", year: 2024 },
      { name: "Conseil National des Barreaux", title: "L\u2019Avocat en Droit des Affaires", year: 2024 },
    ],
    faqs: [
      { question: "Combien co\u00fbte un avocat pour une acquisition de PME en France ?", answer: "Les honoraires d\u2019un avocat d\u2019affaires pour une acquisition de PME varient entre 15\u202f000\u00a0\u20ac et 50\u202f000\u00a0\u20ac selon la complexit\u00e9 de l\u2019op\u00e9ration." },
    ],
  },
  {
    slug: "quality-of-earnings",
    title: "Quality of Earnings : Audit QoE \u00e0 la Fran\u00e7aise",
    description: "Comprendre l\u2019audit Quality of Earnings dans le contexte fran\u00e7ais : normes comptables, retraitements et pi\u00e8ges \u00e0 \u00e9viter.",
    readTime: "14 min de lecture",
    tag: "Due Diligence",
    category: "Deal Execution",
    ogTitle: "Quality of Earnings pour l\u2019Acquisition de PME : Guide Fran\u00e7ais",
    ogDescription: "Ma\u00eetrisez l\u2019audit QoE adapt\u00e9 au Plan Comptable G\u00e9n\u00e9ral fran\u00e7ais : retraitements, normalisation de l\u2019EBITDA et signaux d\u2019alerte.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Ordre des Experts-Comptables", title: "Normes d\u2019Audit d\u2019Acquisition", year: 2024 },
      { name: "CNCC", title: "Guide de l\u2019Audit L\u00e9gal", year: 2024 },
    ],
    faqs: [
      { question: "Qu\u2019est-ce que le Quality of Earnings pour une PME fran\u00e7aise ?", answer: "Le QoE est un audit approfondi qui va au-del\u00e0 de l\u2019audit l\u00e9gal standard. Il analyse la qualit\u00e9 et la r\u00e9currence des r\u00e9sultats : retraitements de la r\u00e9mun\u00e9ration du dirigeant, du loyer, des charges exceptionnelles, du CIR/CICE." },
    ],
  },
  {
    slug: "negotiation-tactics",
    title: "Techniques de N\u00e9gociation pour l\u2019Acquisition de PME",
    description: "Strat\u00e9gies et tactiques de n\u00e9gociation adapt\u00e9es \u00e0 la culture d\u2019affaires fran\u00e7aise pour l\u2019acquisition de PME.",
    readTime: "13 min de lecture",
    tag: "N\u00e9gociation",
    category: "Deal Execution",
    ogTitle: "N\u00e9gociation d\u2019Acquisition en France : Techniques et Culture d\u2019Affaires",
    ogDescription: "Ma\u00eetrisez la n\u00e9gociation d\u2019acquisition de PME en France : culture fran\u00e7aise, relations de confiance, prix vs conditions.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "HEC Paris", title: "N\u00e9gociation et Gestion des Conflits", year: 2024 },
    ],
    faqs: [
      { question: "En quoi la n\u00e9gociation d\u2019acquisition en France diff\u00e8re-t-elle ?", answer: "En France, la relation personnelle avec le c\u00e9dant est primordiale. Les vendeurs de PME familiales cherchent un repreneur qui respectera l\u2019h\u00e9ritage et les salari\u00e9s." },
    ],
  },
  {
    slug: "earn-out-structures",
    title: "Compl\u00e9ment de Prix (Earn-Out) en Droit Fran\u00e7ais",
    description: "Structurer un earn-out lors de l\u2019acquisition d\u2019une PME en France : clauses, fiscalit\u00e9, pi\u00e8ges et bonnes pratiques.",
    readTime: "13 min de lecture",
    tag: "Financement",
    category: "Deal Execution",
    ogTitle: "Earn-Out en France : Compl\u00e9ment de Prix pour l\u2019Acquisition de PME",
    ogDescription: "Guide complet du compl\u00e9ment de prix (earn-out) en droit fran\u00e7ais : structuration, fiscalit\u00e9, clauses essentielles et jurisprudence.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Pratique du Droit Fran\u00e7ais des Affaires", title: "Le Compl\u00e9ment de Prix en M&A", year: 2024 },
    ],
    faqs: [
      { question: "Comment est impos\u00e9 l\u2019earn-out en France ?", answer: "Le traitement fiscal d\u00e9pend de sa qualification : compl\u00e9ment de prix de cession (plus-values) ou r\u00e9mun\u00e9ration (revenu). La r\u00e9daction des clauses est cruciale." },
    ],
  },
  {
    slug: "exit-strategies",
    title: "Strat\u00e9gies de Sortie pour Search Funds en France",
    description: "Planifier la sortie d\u2019un search fund en France : revente, LBO secondaire et fiscalit\u00e9 des plus-values.",
    readTime: "14 min de lecture",
    tag: "Sortie",
    category: "Operations & Growth",
    ogTitle: "Sortie de Search Fund en France : Strat\u00e9gies et Fiscalit\u00e9",
    ogDescription: "Strat\u00e9gies de sortie pour un search fund en France : vente industrielle, LBO secondaire, MBO, et optimisation fiscale des plus-values.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "France Invest", title: "\u00c9tude Annuelle sur les Cessions", year: 2024 },
      { name: "Stanford GSB", title: "Search Fund Exit Data", year: 2024 },
    ],
    faqs: [
      { question: "Quelle est la dur\u00e9e moyenne de d\u00e9tention avant la sortie ?", answer: "Les donn\u00e9es Stanford montrent une dur\u00e9e m\u00e9diane de 6-8 ans. En France, les sorties se font principalement vers des acqu\u00e9reurs industriels ou des fonds de PE." },
    ],
  },
  {
    slug: "searcher-compensation",
    title: "R\u00e9mun\u00e9ration du Searcher-Dirigeant en France",
    description: "Statut et r\u00e9mun\u00e9ration du dirigeant post-acquisition en France : TNS vs salari\u00e9, charges sociales et optimisation.",
    readTime: "13 min de lecture",
    tag: "R\u00e9mun\u00e9ration",
    category: "Operations & Growth",
    ogTitle: "R\u00e9mun\u00e9ration du Dirigeant post-Acquisition : Statut TNS, Salari\u00e9 et Optimisation",
    ogDescription: "R\u00e9mun\u00e9ration du searcher-dirigeant en France : choix du statut (TNS vs assimil\u00e9 salari\u00e9), charges sociales, dividendes et optimisation.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "URSSAF", title: "Statut Social du Dirigeant", year: 2024 },
      { name: "Ordre des Experts-Comptables", title: "Optimisation de la R\u00e9mun\u00e9ration du Dirigeant", year: 2024 },
    ],
    faqs: [
      { question: "TNS ou assimil\u00e9 salari\u00e9 : quel statut choisir ?", answer: "En SAS, le pr\u00e9sident est assimil\u00e9 salari\u00e9 (~80% de cotisations sur le net). En SARL, le g\u00e9rant majoritaire est TNS (~45%). Le choix d\u00e9pend du niveau de r\u00e9mun\u00e9ration et des objectifs patrimoniaux." },
    ],
  },
  {
    slug: "board-governance",
    title: "Gouvernance d\u2019Entreprise : SA, SAS et Conseil d\u2019Administration",
    description: "Mettre en place une gouvernance efficace post-acquisition en France : conseil d\u2019administration, comit\u00e9 strat\u00e9gique et relations actionnaires.",
    readTime: "13 min de lecture",
    tag: "Gouvernance",
    category: "Operations & Growth",
    ogTitle: "Gouvernance post-Acquisition en France : Conseil d\u2019Administration et Comit\u00e9 Strat\u00e9gique",
    ogDescription: "Guide de la gouvernance post-acquisition : SA vs SAS, mise en place d\u2019un board, r\u00f4le des investisseurs et bonnes pratiques fran\u00e7aises.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Code de Commerce", title: "Gouvernance des SAS et SA", year: 2024 },
      { name: "IFA", title: "Institut Fran\u00e7ais des Administrateurs", year: 2024 },
    ],
    faqs: [
      { question: "Faut-il un conseil d\u2019administration pour un search fund en SAS ?", answer: "La SAS n\u2019impose pas l\u00e9galement de conseil d\u2019administration, mais les investisseurs exigent g\u00e9n\u00e9ralement un organe de gouvernance (board ou comit\u00e9 strat\u00e9gique)." },
    ],
  },
  {
    slug: "buy-and-build",
    title: "Strat\u00e9gie de Build-Up en France : Croissance par Acquisitions",
    description: "Construire une plateforme par acquisitions successives en France : strat\u00e9gie, financement, int\u00e9gration et cr\u00e9ation de valeur.",
    readTime: "14 min de lecture",
    tag: "Croissance",
    category: "Operations & Growth",
    ogTitle: "Build-Up en France : Strat\u00e9gie de Croissance par Acquisitions Successives",
    ogDescription: "Guide du build-up en France : identifier des cibles compl\u00e9mentaires, financer les acquisitions bolt-on et cr\u00e9er de la valeur par consolidation.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "France Invest", title: "Build-Up et Cr\u00e9ation de Valeur", year: 2024 },
      { name: "Bain & Company", title: "M&A Integration Best Practices", year: 2024 },
    ],
    faqs: [
      { question: "Le build-up est-il courant dans les search funds en France ?", answer: "De plus en plus de search funds europ\u00e9ens adoptent une strat\u00e9gie de build-up. En France, la fragmentation de nombreux secteurs offre des opportunit\u00e9s de consolidation." },
    ],
  },
  {
    slug: "investor-relations",
    title: "Relations Investisseurs et Reporting pour Search Funds",
    description: "G\u00e9rer les relations avec les investisseurs d\u2019un search fund : reporting, communication et bonnes pratiques.",
    readTime: "12 min de lecture",
    tag: "Investisseurs",
    category: "Fundraising & Investors",
    ogTitle: "Relations Investisseurs Search Fund : Reporting et Communication",
    ogDescription: "Bonnes pratiques de reporting et communication avec les investisseurs d\u2019un search fund : fr\u00e9quence, contenu, KPIs et situations difficiles.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "Search Fund Best Practices", year: 2024 },
    ],
    faqs: [
      { question: "\u00c0 quelle fr\u00e9quence reporter aux investisseurs ?", answer: "Rapport mensuel pendant la phase de recherche, trimestriel apr\u00e8s l\u2019acquisition. Inclure : KPIs financiers, avancement op\u00e9rationnel, pipeline et \u00e9v\u00e9nements significatifs." },
    ],
  },
  {
    slug: "advisory-board",
    title: "Construire un Comit\u00e9 Consultatif pour votre Search Fund",
    description: "Comment former et animer un advisory board efficace pour un search fund en France.",
    readTime: "12 min de lecture",
    tag: "Gouvernance",
    category: "Operations & Growth",
    ogTitle: "Comit\u00e9 Consultatif Search Fund : Constitution et Fonctionnement",
    ogDescription: "Guide pour constituer un comit\u00e9 consultatif (advisory board) efficace pour votre search fund en France.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "IFA", title: "Guide de l\u2019Advisory Board", year: 2024 },
    ],
    faqs: [
      { question: "Quelle diff\u00e9rence entre board et advisory board ?", answer: "Le board a un pouvoir d\u00e9cisionnel et une responsabilit\u00e9 juridique. L\u2019advisory board n\u2019a qu\u2019un r\u00f4le de conseil, sans pouvoir de d\u00e9cision ni responsabilit\u00e9 l\u00e9gale." },
    ],
  },
  {
    slug: "revenue-growth-playbook",
    title: "Croissance du Chiffre d\u2019Affaires post-Acquisition",
    description: "Strat\u00e9gies de croissance du CA apr\u00e8s l\u2019acquisition d\u2019une PME en France.",
    readTime: "14 min de lecture",
    tag: "Croissance",
    category: "Operations & Growth",
    ogTitle: "Croissance post-Acquisition : Strat\u00e9gies pour D\u00e9velopper le CA d\u2019une PME",
    ogDescription: "Playbook de croissance du chiffre d\u2019affaires : strat\u00e9gie commerciale, pricing, digitalisation et expansion g\u00e9ographique.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Bpifrance Le Lab", title: "Acc\u00e9l\u00e9rateurs de Croissance PME", year: 2024 },
    ],
    faqs: [
      { question: "Quels sont les leviers de croissance les plus rapides ?", answer: "Optimisation du pricing, mise en place d\u2019un CRM, cross-selling sur la base clients existante, et digitalisation de l\u2019acquisition client." },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Transformation Digitale des PME post-Acquisition",
    description: "Mener la transformation digitale d\u2019une PME acquise en France : ERP, CRM, e-commerce et aides publiques.",
    readTime: "14 min de lecture",
    tag: "Digital",
    category: "Operations & Growth",
    ogTitle: "Transformation Digitale des PME apr\u00e8s Acquisition : Guide Pratique",
    ogDescription: "Guide de la transformation digitale post-acquisition : ERP, CRM, e-commerce, automatisation et aides Bpifrance/France Num.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Bpifrance Le Lab", title: "Barom\u00e8tre de la Digitalisation des PME", year: 2024 },
      { name: "France Num", title: "Aides \u00e0 la Transformation Digitale", year: 2024 },
    ],
    faqs: [
      { question: "Quelles aides publiques pour la digitalisation ?", answer: "France Num propose un diagnostic gratuit. Bpifrance offre le Pr\u00eat Croissance (jusqu\u2019\u00e0 5M\u20ac). Les R\u00e9gions ont leurs propres dispositifs (ch\u00e8ques num\u00e9riques)." },
    ],
  },
  {
    slug: "working-capital-management",
    title: "Gestion du BFR pour Dirigeants d\u2019Entreprise Acquise",
    description: "Optimiser le besoin en fonds de roulement d\u2019une PME acquise en France.",
    readTime: "13 min de lecture",
    tag: "Finance",
    category: "Deal Execution",
    ogTitle: "Gestion du BFR post-Acquisition : Optimiser la Tr\u00e9sorerie d\u2019une PME",
    ogDescription: "Guide d\u2019optimisation du BFR : cr\u00e9ances, stocks, dettes fournisseurs, affacturage et solutions Bpifrance.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Banque de France", title: "D\u00e9lais de Paiement en France", year: 2024 },
      { name: "Bpifrance", title: "Solutions de Financement du BFR", year: 2024 },
    ],
    faqs: [
      { question: "Comment financer le BFR d\u2019une PME acquise ?", answer: "Affacturage (Bpifrance Avance+), escompte bancaire, Dailly, ligne de cr\u00e9dit court terme, et Pr\u00eat Croissance Bpifrance." },
    ],
  },
  {
    slug: "pre-search-preparation",
    title: "Pr\u00e9paration au Search : Transition de Carri\u00e8re vers l\u2019ETA",
    description: "Comment pr\u00e9parer votre transition vers l\u2019entrepreneuriat par acquisition en France.",
    readTime: "13 min de lecture",
    tag: "Pr\u00e9paration",
    category: "Getting Started",
    ogTitle: "Pr\u00e9paration \u00e0 l\u2019ETA : De Salari\u00e9 \u00e0 Entrepreneur-Acqu\u00e9reur en France",
    ogDescription: "Guide de la transition vers l\u2019ETA : formations HEC/INSEAD, constitution du r\u00e9seau, pr\u00e9paration financi\u00e8re et timing optimal.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "HEC Paris", title: "Programme Entrepreneuriat par Acquisition", year: 2024 },
      { name: "INSEAD", title: "ETA Career Guide", year: 2024 },
    ],
    faqs: [
      { question: "Faut-il un MBA pour lancer un search fund en France ?", answer: "Non, mais les r\u00e9seaux HEC/INSEAD/ESSEC facilitent l\u2019acc\u00e8s aux investisseurs. L\u2019exp\u00e9rience en conseil ou banque d\u2019affaires est souvent plus valoris\u00e9e." },
    ],
  },
  {
    slug: "searcher-psychology",
    title: "Psychologie du Searcher : R\u00e9silience et Mindset",
    description: "Les d\u00e9fis psychologiques du search fund : gestion de l\u2019incertitude, r\u00e9silience et \u00e9quilibre de vie.",
    readTime: "12 min de lecture",
    tag: "Mindset",
    category: "Getting Started",
    ogTitle: "Psychologie du Searcher : Surmonter les D\u00e9fis Mentaux du Search Fund",
    ogDescription: "G\u00e9rez les d\u00e9fis psychologiques du search fund : incertitude, rejets multiples, pression des investisseurs et motivation.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "The Emotional Journey of Search Fund Entrepreneurs", year: 2024 },
    ],
    faqs: [
      { question: "Quel est le plus grand d\u00e9fi psychologique d\u2019un searcher ?", answer: "La dur\u00e9e et l\u2019incertitude du processus. Avec 20 mois de recherche m\u00e9diane et ~70% de taux d\u2019acquisition, beaucoup de searchers traversent des p\u00e9riodes de doute intense." },
    ],
  },
  {
    slug: "searcher-tools",
    title: "Outils et Technologies pour Searchers",
    description: "Les meilleurs outils pour optimiser votre recherche de PME en France : CRM, bases de donn\u00e9es et automatisation.",
    readTime: "12 min de lecture",
    tag: "Outils",
    category: "Deal Execution",
    ogTitle: "Outils pour Searchers : Technologies pour Optimiser votre Recherche de PME",
    ogDescription: "Bo\u00eete \u00e0 outils du searcher en France : CRM, Pappers, Soci\u00e9t\u00e9.com, Fusacq et automatisation du sourcing.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Pappers.fr", title: "Base de Donn\u00e9es Entreprises", year: 2024 },
    ],
    faqs: [
      { question: "Quels outils utiliser pour le sourcing en France ?", answer: "Pappers.fr (donn\u00e9es l\u00e9gales), Soci\u00e9t\u00e9.com (donn\u00e9es financi\u00e8res), Fusacq.com (marketplace), LinkedIn Sales Navigator, et les alertes Bpifrance Transmission." },
    ],
  },
  {
    slug: "eta-vs-startups",
    title: "ETA vs. Cr\u00e9ation d\u2019Entreprise vs. Franchise",
    description: "Comparer l\u2019ETA avec la cr\u00e9ation d\u2019entreprise et la franchise en France : risques, rendements et profils.",
    readTime: "14 min de lecture",
    tag: "Comparaison",
    category: "Getting Started",
    ogTitle: "ETA vs. Startup vs. Franchise : Quelle Voie Entrepreneuriale Choisir ?",
    ogDescription: "Comparaison de l\u2019ETA, la startup et la franchise en France : risque, rendement, capital requis et profils adapt\u00e9s.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "HEC Paris", title: "Voies de l\u2019Entrepreneuriat", year: 2024 },
      { name: "F\u00e9d\u00e9ration Fran\u00e7aise de la Franchise", title: "Chiffres Cl\u00e9s de la Franchise", year: 2024 },
    ],
    faqs: [
      { question: "Pourquoi choisir l\u2019ETA plut\u00f4t que de cr\u00e9er une startup ?", answer: "L\u2019ETA offre un risque inf\u00e9rieur : entreprise rentable avec clients et CA. Pas de risque produit-march\u00e9. Convient aux profils qui veulent entreprendre avec un risque ma\u00eetris\u00e9." },
    ],
  },
  {
    slug: "women-in-eta",
    title: "Femmes et Diversit\u00e9 dans le Search Fund",
    description: "La place des femmes et la diversit\u00e9 dans l\u2019\u00e9cosyst\u00e8me search fund en France et en Europe.",
    readTime: "12 min de lecture",
    tag: "Diversit\u00e9",
    category: "Getting Started",
    ogTitle: "Femmes dans les Search Funds : Diversit\u00e9 et Opportunit\u00e9s",
    ogDescription: "\u00c9tat des lieux de la diversit\u00e9 dans les search funds : proportion de femmes, initiatives europ\u00e9ennes et r\u00e9seaux.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "Diversity in Search Funds", year: 2024 },
      { name: "IESE", title: "Women in ETA", year: 2024 },
    ],
    faqs: [
      { question: "Quelle est la proportion de femmes dans les search funds ?", answer: "Environ 10-15% des searchers selon Stanford. En Europe, le pourcentage est similaire mais en progression. Des initiatives comme Women in ETA visent \u00e0 acc\u00e9l\u00e9rer la diversification." },
    ],
  },
  {
    slug: "eta-germany",
    title: "ETA en Allemagne : Le Mittelstand et la Succession",
    description: "Guide de l\u2019ETA en Allemagne : acc\u00e9der au Mittelstand, cadre juridique GmbH, KfW et culture d\u2019affaires.",
    readTime: "15 min de lecture",
    tag: "Allemagne",
    category: "Regional Guides",
    ogTitle: "ETA en Allemagne : Acqu\u00e9rir une Entreprise du Mittelstand",
    ogDescription: "Guide de l\u2019ETA en Allemagne : Mittelstand, crise de succession, GmbH, financement KfW et sp\u00e9cificit\u00e9s culturelles.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "KfW", title: "Unternehmensnachfolge in Deutschland", year: 2024 },
      { name: "IfM Bonn", title: "Institut f\u00fcr Mittelstandsforschung", year: 2024 },
    ],
    faqs: [
      { question: "Pourquoi l\u2019Allemagne est-elle attractive pour l\u2019ETA ?", answer: "3,5 millions de PME (Mittelstand) dont 600\u202f000 cherchent un repreneur. Des entreprises bien g\u00e9r\u00e9es, avec des marges \u00e9lev\u00e9es et des positions de niche (hidden champions)." },
    ],
  },
  {
    slug: "eta-uk",
    title: "ETA au Royaume-Uni : Le March\u00e9 le Plus Mature d\u2019Europe",
    description: "Guide de l\u2019ETA au Royaume-Uni : \u00e9cosyst\u00e8me, financement, cadre juridique Ltd et culture britannique.",
    readTime: "14 min de lecture",
    tag: "Royaume-Uni",
    category: "Regional Guides",
    ogTitle: "ETA au Royaume-Uni : Guide de l\u2019Acquisition d\u2019Entreprise",
    ogDescription: "Guide de l\u2019ETA au UK : LBS/Oxford, financement, structures Ltd et sp\u00e9cificit\u00e9s post-Brexit.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "British Business Bank", title: "Small Business Finance Markets", year: 2024 },
      { name: "London Business School", title: "ETA Research Hub", year: 2024 },
    ],
    faqs: [
      { question: "Le UK est-il le meilleur march\u00e9 ETA en Europe ?", answer: "Le UK a l\u2019\u00e9cosyst\u00e8me le plus d\u00e9velopp\u00e9 d\u2019Europe : LBS/Oxford, march\u00e9 du financement profond, culture entrepreneuriale forte. Post-Brexit, l\u2019acc\u00e8s au march\u00e9 unique est limit\u00e9." },
    ],
  },
  {
    slug: "eta-spain",
    title: "ETA en Espagne et dans l\u2019Espace Ib\u00e9rique",
    description: "Guide de l\u2019ETA en Espagne : IESE, \u00e9cosyst\u00e8me barcelonais, structures SL et financement ICO.",
    readTime: "15 min de lecture",
    tag: "Espagne",
    category: "Regional Guides",
    ogTitle: "ETA en Espagne : L\u2019\u00c9picentre Acad\u00e9mique Europ\u00e9en des Search Funds",
    ogDescription: "Guide de l\u2019ETA en Espagne : IESE Barcelona, structures SL, financement ICO/ENISA et opportunit\u00e9s ib\u00e9riques.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "IESE Business School", title: "International Search Fund Study", year: 2024 },
      { name: "ICO", title: "L\u00edneas de Financiaci\u00f3n para Emprendedores", year: 2024 },
    ],
    faqs: [
      { question: "Pourquoi l\u2019Espagne est-elle un hub ETA en Europe ?", answer: "L\u2019IESE (Barcelone) est le centre acad\u00e9mique mondial de l\u2019ETA hors Stanford. L\u2019\u00e9cosyst\u00e8me investisseur espagnol est actif et l\u2019Espagne fait face \u00e0 une succession massive de PME familiales." },
    ],
  },
  {
    slug: "eta-switzerland",
    title: "ETA en Suisse : March\u00e9 Premium et Discr\u00e9tion",
    description: "Guide de l\u2019ETA en Suisse : PME de haute qualit\u00e9, cadre juridique GmbH/AG et fiscalit\u00e9 cantonale.",
    readTime: "14 min de lecture",
    tag: "Suisse",
    category: "Regional Guides",
    ogTitle: "ETA en Suisse : Acqu\u00e9rir une PME dans un March\u00e9 Premium",
    ogDescription: "Guide de l\u2019ETA en Suisse : PME \u00e0 haute valeur ajout\u00e9e, GmbH/AG, fiscalit\u00e9 cantonale avantageuse et sp\u00e9cificit\u00e9s helv\u00e9tiques.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "IMD Lausanne", title: "Entrepreneurship Research", year: 2024 },
      { name: "KMU Portal", title: "Nachfolgeregelung in der Schweiz", year: 2024 },
    ],
    faqs: [
      { question: "Comment acc\u00e9der aux PME suisses \u00e0 vendre ?", answer: "March\u00e9 tr\u00e8s discret. Principaux canaux : fiduciaires, banques cantonales, companymarket.ch et r\u00e9seaux personnels. La Suisse romande est plus accessible pour les francophones." },
    ],
  },
  {
    slug: "eta-benelux",
    title: "ETA au Benelux : Belgique, Pays-Bas et Luxembourg",
    description: "Guide de l\u2019ETA au Benelux : \u00e9cosyst\u00e8mes, structures juridiques et opportunit\u00e9s de succession.",
    readTime: "14 min de lecture",
    tag: "Benelux",
    category: "Regional Guides",
    ogTitle: "ETA au Benelux : Guide de l\u2019Acquisition de PME en Belgique, Pays-Bas et Luxembourg",
    ogDescription: "Guide de l\u2019ETA au Benelux : Scipio (Belgique), \u00e9cosyst\u00e8me n\u00e9erlandais, BV/BVBA et cross-border.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Vlerick Business School", title: "ETA Research", year: 2024 },
      { name: "PMV Vlaanderen", title: "Financement de la Succession", year: 2024 },
    ],
    faqs: [
      { question: "Le Benelux est-il un bon march\u00e9 pour l\u2019ETA ?", answer: "Oui : Belgique (Scipio Holding, forte densit\u00e9 de PME), Pays-Bas (BV flexibles, forte internationalisation) et Luxembourg (hub fiscal, entreprises \u00e0 haute valeur ajout\u00e9e)." },
    ],
  },
  {
    slug: "eta-nordics",
    title: "ETA dans les Pays Nordiques : Scandinavie et Finlande",
    description: "Guide de l\u2019ETA en Scandinavie : march\u00e9 su\u00e9dois, norv\u00e9gien, danois et finlandais.",
    readTime: "14 min de lecture",
    tag: "Nordiques",
    category: "Regional Guides",
    ogTitle: "ETA dans les Pays Nordiques : Opportunit\u00e9s en Scandinavie et Finlande",
    ogDescription: "Guide de l\u2019ETA dans les pays nordiques : PME scandinaves de haute qualit\u00e9, structures AB/AS et \u00e9cosyst\u00e8me.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stockholm School of Economics", title: "Nordic ETA Research", year: 2024 },
    ],
    faqs: [
      { question: "Les pays nordiques sont-ils adapt\u00e9s \u00e0 l\u2019ETA ?", answer: "PME de haute qualit\u00e9, forte innovation, main-d\u2019\u0153uvre qualifi\u00e9e. La Su\u00e8de est le march\u00e9 le plus actif. D\u00e9fis : co\u00fbts salariaux \u00e9lev\u00e9s et barri\u00e8re linguistique." },
    ],
  },
  {
    slug: "eta-italy",
    title: "ETA en Italie : 4,4 Millions de PME \u00e0 Transmettre",
    description: "Guide de l\u2019ETA en Italie : le plus grand nombre de PME en Europe, cadre juridique SRL/SPA et \u00e9cosyst\u00e8me Bocconi.",
    readTime: "15 min de lecture",
    tag: "Italie",
    category: "Regional Guides",
    ogTitle: "ETA en Italie : L\u2019Opportunit\u00e9 du Passaggio Generazionale",
    ogDescription: "Guide de l\u2019ETA en Italie : 4,4 millions de PME, crise de succession, SRL/SPA, IRES/IRAP et \u00e9cosyst\u00e8me Bocconi.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Bocconi University", title: "Passaggio Generazionale nelle PMI", year: 2024 },
      { name: "Confindustria", title: "Rapporto PMI Italiane", year: 2024 },
    ],
    faqs: [
      { question: "Pourquoi l\u2019Italie est-elle une opportunit\u00e9 majeure pour l\u2019ETA ?", answer: "4,4 millions de PME, dirigeants de 65+ ans, crise de succession massive. Multiples souvent inf\u00e9rieurs \u00e0 ceux de France ou d\u2019Allemagne." },
    ],
  },
  {
    slug: "eta-us",
    title: "ETA aux \u00c9tats-Unis : Le Berceau du Search Fund",
    description: "Panorama de l\u2019ETA aux \u00c9tats-Unis depuis Stanford 1984 : \u00e9cosyst\u00e8me, financement SBA et comparaison avec l\u2019Europe.",
    readTime: "15 min de lecture",
    tag: "\u00c9tats-Unis",
    category: "Regional Guides",
    ogTitle: "ETA aux \u00c9tats-Unis : Le March\u00e9 le Plus Mature au Monde",
    ogDescription: "Panorama de l\u2019ETA aux US : Stanford, HBS, SBA loans, structures LLC/C-Corp et le\u00e7ons pour le march\u00e9 europ\u00e9en.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "2024 Search Fund Study", year: 2024 },
      { name: "SBA", title: "Small Business Acquisition Lending", year: 2024 },
    ],
    faqs: [
      { question: "Quelles sont les principales diff\u00e9rences entre l\u2019ETA US et europ\u00e9enne ?", answer: "Aux US : SBA facilite les acquisitions, \u00e9cosyst\u00e8me investisseur plus profond, march\u00e9 plus concurrentiel. En Europe : multiples plus bas, moins de concurrence entre searchers." },
    ],
  },
  {
    slug: "european-search-fund-research",
    title: "Recherche Europ\u00e9enne : IESE, INSEAD et les Donn\u00e9es Cl\u00e9s",
    description: "Synth\u00e8se des recherches acad\u00e9miques europ\u00e9ennes sur les search funds.",
    readTime: "13 min de lecture",
    tag: "Recherche",
    category: "Getting Started",
    ogTitle: "Recherche Europ\u00e9enne sur les Search Funds : IESE, INSEAD et Donn\u00e9es Cl\u00e9s",
    ogDescription: "Synth\u00e8se des \u00e9tudes acad\u00e9miques europ\u00e9ennes : donn\u00e9es IESE, recherches INSEAD et \u00e9volution du march\u00e9.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "IESE Business School", title: "International Search Fund Study", year: 2024 },
      { name: "INSEAD", title: "ETA Research Hub", year: 2024 },
    ],
    faqs: [
      { question: "Que r\u00e9v\u00e8lent les donn\u00e9es IESE sur les search funds europ\u00e9ens ?", answer: "Croissance exponentielle (doublement tous les 2-3 ans), taux d\u2019acquisition comparables aux US, rendements encore en cours d\u2019\u00e9valuation." },
    ],
  },
  {
    slug: "search-fund-success-stories",
    title: "Success Stories de Search Funds en Europe",
    description: "\u00c9tudes de cas de search funds r\u00e9ussis en Europe : parcours, acquisitions et le\u00e7ons.",
    readTime: "14 min de lecture",
    tag: "T\u00e9moignages",
    category: "Getting Started",
    ogTitle: "Success Stories : Search Funds qui ont R\u00e9ussi en Europe",
    ogDescription: "D\u00e9couvrez des success stories de search funds europ\u00e9ens : parcours des fondateurs, acquisitions r\u00e9ussies et le\u00e7ons cl\u00e9s.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "IESE Business School", title: "European Search Fund Case Studies", year: 2024 },
      { name: "Searchfunder.com", title: "Searcher Interviews", year: 2024 },
    ],
    faqs: [
      { question: "Y a-t-il des success stories de search funds en France ?", answer: "L\u2019\u00e9cosyst\u00e8me fran\u00e7ais est encore jeune mais les succ\u00e8s se multiplient. Plusieurs searchers issus de HEC et INSEAD ont acquis et d\u00e9velopp\u00e9 des PME avec succ\u00e8s." },
    ],
  },
  {
    slug: "eta-vs-private-equity",
    title: "ETA vs. Private Equity : Diff\u00e9rences et Compl\u00e9mentarit\u00e9s",
    description: "Comparer l\u2019ETA et le private equity en France : taille des op\u00e9rations, gouvernance et rendements.",
    readTime: "14 min de lecture",
    tag: "Comparaison",
    category: "Getting Started",
    ogTitle: "ETA vs. Private Equity : Comprendre les Diff\u00e9rences et Choisir votre Voie",
    ogDescription: "Comparaison ETA vs PE : taille d\u2019op\u00e9ration, r\u00f4le du dirigeant, gouvernance et rendements historiques.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "France Invest", title: "Activit\u00e9 du Capital-Investissement en France", year: 2024 },
      { name: "Stanford GSB", title: "Search Funds vs Traditional PE", year: 2024 },
    ],
    faqs: [
      { question: "Quelle est la principale diff\u00e9rence entre ETA et PE ?", answer: "En ETA, le searcher devient le CEO op\u00e9rationnel. En PE, les gestionnaires supervisent mais ne dirigent pas. L\u2019ETA cible 1-10M\u20ac d\u2019EV, le PE mid-market vise 50M\u20ac+." },
    ],
  },
  {
    slug: "eta-reading-list",
    title: "Lectures Essentielles sur l\u2019ETA et les Search Funds",
    description: "Bibliographie compl\u00e8te pour l\u2019ETA : livres, \u00e9tudes acad\u00e9miques, podcasts et ressources en ligne.",
    readTime: "12 min de lecture",
    tag: "Ressources",
    category: "Getting Started",
    ogTitle: "Bibliographie ETA : Les Lectures Essentielles pour Searchers et Investisseurs",
    ogDescription: "Liste compl\u00e8te des ressources sur l\u2019ETA : livres incontournables, \u00e9tudes Stanford/IESE, podcasts et formations.",
    datePublished: "2025-04-23",
    dateModified: "2025-04-23",
    sources: [
      { name: "Stanford GSB", title: "Recommended Reading for Search Fund Entrepreneurs", year: 2024 },
    ],
    faqs: [
      { question: "Quels sont les livres incontournables sur l\u2019ETA ?", answer: "'HBR Guide to Buying a Small Business' (Ruback & Yudkoff), 'Search Funds' (Yoder & Kelly), 'The First 90 Days' (Watkins), et les primers Stanford et IESE." },
    ],
  },
];

// ---------------------------------------------------------------------------
// FR article components — import map
// ---------------------------------------------------------------------------

import GettingStartedFR from "./fr/getting-started";
import SelfFundedVsTraditionalFR from "./fr/self-funded-vs-traditional";
import ETAFranceFR from "./fr/eta-france";
import ETAEuropeFR from "./fr/eta-europe";
import BusinessValuationFR from "./fr/business-valuation";
import AcquisitionFinancingFR from "./fr/acquisition-financing";
import LegalStructureFR from "./fr/search-fund-legal-structure";
import TaxOptimizationFR from "./fr/tax-optimization";
import WritingAPPMFR from "./fr/writing-a-ppm";
import LetterOfIntentFR from "./fr/letter-of-intent";
import DueDiligenceFR from "./fr/due-diligence-checklist";
import DealSourcingFR from "./fr/deal-sourcing-strategies";
import First100DaysFR from "./fr/first-100-days";
import FindingInvestorsFR from "./fr/finding-investors";
import WhyInvestFR from "./fr/why-invest-in-search-funds";
import CapTablesEquityFR from "./fr/cap-tables-equity";
import Stanford2024FR from "./fr/stanford-2024-study";
import SearchFundReturnsFR from "./fr/search-fund-returns";
import SellerFinancingFR from "./fr/seller-financing";
import ManagementTransitionFR from "./fr/management-transition-plan";
// Phase 2 imports
import WorkingWithAdvisorsFR from "./fr/working-with-advisors";
import QualityOfEarningsFR from "./fr/quality-of-earnings";
import NegotiationTacticsFR from "./fr/negotiation-tactics";
import EarnOutStructuresFR from "./fr/earn-out-structures";
import ExitStrategiesFR from "./fr/exit-strategies";
import SearcherCompensationFR from "./fr/searcher-compensation";
import BoardGovernanceFR from "./fr/board-governance";
import BuyAndBuildFR from "./fr/buy-and-build";
import InvestorRelationsFR from "./fr/investor-relations";
import AdvisoryBoardFR from "./fr/advisory-board";
import RevenueGrowthFR from "./fr/revenue-growth-playbook";
import DigitalTransformationFR from "./fr/digital-transformation";
import WorkingCapitalFR from "./fr/working-capital-management";
import PreSearchPreparationFR from "./fr/pre-search-preparation";
import SearcherPsychologyFR from "./fr/searcher-psychology";
import SearcherToolsFR from "./fr/searcher-tools";
import ETAvsStartupsFR from "./fr/eta-vs-startups";
import WomenInETAFR from "./fr/women-in-eta";
import ETAGermanyFR from "./fr/eta-germany";
import ETAUKFR from "./fr/eta-uk";
import ETASpainFR from "./fr/eta-spain";
import ETASwitzerlandFR from "./fr/eta-switzerland";
import ETABeneluxFR from "./fr/eta-benelux";
import ETANordicsFR from "./fr/eta-nordics";
import ETAItalyFR from "./fr/eta-italy";
import ETAUSFR from "./fr/eta-us";
import EuropeanResearchFR from "./fr/european-search-fund-research";
import SuccessStoriesFR from "./fr/search-fund-success-stories";
import ETAvsPEFR from "./fr/eta-vs-private-equity";
import ETAReadingListFR from "./fr/eta-reading-list";

export const frArticleComponents: Record<string, () => JSX.Element> = {
  "getting-started": GettingStartedFR,
  "self-funded-vs-traditional": SelfFundedVsTraditionalFR,
  "eta-france": ETAFranceFR,
  "eta-europe": ETAEuropeFR,
  "business-valuation": BusinessValuationFR,
  "acquisition-financing": AcquisitionFinancingFR,
  "search-fund-legal-structure": LegalStructureFR,
  "tax-optimization": TaxOptimizationFR,
  "writing-a-ppm": WritingAPPMFR,
  "letter-of-intent": LetterOfIntentFR,
  "due-diligence-checklist": DueDiligenceFR,
  "deal-sourcing-strategies": DealSourcingFR,
  "first-100-days": First100DaysFR,
  "finding-investors": FindingInvestorsFR,
  "why-invest-in-search-funds": WhyInvestFR,
  "cap-tables-equity": CapTablesEquityFR,
  "stanford-2024-study": Stanford2024FR,
  "search-fund-returns": SearchFundReturnsFR,
  "seller-financing": SellerFinancingFR,
  "management-transition-plan": ManagementTransitionFR,
  // Phase 2
  "working-with-advisors": WorkingWithAdvisorsFR,
  "quality-of-earnings": QualityOfEarningsFR,
  "negotiation-tactics": NegotiationTacticsFR,
  "earn-out-structures": EarnOutStructuresFR,
  "exit-strategies": ExitStrategiesFR,
  "searcher-compensation": SearcherCompensationFR,
  "board-governance": BoardGovernanceFR,
  "buy-and-build": BuyAndBuildFR,
  "investor-relations": InvestorRelationsFR,
  "advisory-board": AdvisoryBoardFR,
  "revenue-growth-playbook": RevenueGrowthFR,
  "digital-transformation": DigitalTransformationFR,
  "working-capital-management": WorkingCapitalFR,
  "pre-search-preparation": PreSearchPreparationFR,
  "searcher-psychology": SearcherPsychologyFR,
  "searcher-tools": SearcherToolsFR,
  "eta-vs-startups": ETAvsStartupsFR,
  "women-in-eta": WomenInETAFR,
  "eta-germany": ETAGermanyFR,
  "eta-uk": ETAUKFR,
  "eta-spain": ETASpainFR,
  "eta-switzerland": ETASwitzerlandFR,
  "eta-benelux": ETABeneluxFR,
  "eta-nordics": ETANordicsFR,
  "eta-italy": ETAItalyFR,
  "eta-us": ETAUSFR,
  "european-search-fund-research": EuropeanResearchFR,
  "search-fund-success-stories": SuccessStoriesFR,
  "eta-vs-private-equity": ETAvsPEFR,
  "eta-reading-list": ETAReadingListFR,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getFRArticleMeta(slug: string): ArticleMeta | undefined {
  return frArticles.find((a) => a.slug === slug);
}

export function hasFRVersion(slug: string): boolean {
  return slug in frArticleComponents;
}

export function getFRArticleComponent(slug: string): (() => JSX.Element) | undefined {
  return frArticleComponents[slug];
}
