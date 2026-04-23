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
    category: "International",
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
    category: "International",
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
    category: "Valuation & Finance",
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
    category: "Valuation & Finance",
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
    category: "Search & Deal Sourcing",
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
    category: "Due Diligence",
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
    category: "Search & Deal Sourcing",
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
    category: "Post-Acquisition",
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
    category: "Valuation & Finance",
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
    category: "Post-Acquisition",
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
