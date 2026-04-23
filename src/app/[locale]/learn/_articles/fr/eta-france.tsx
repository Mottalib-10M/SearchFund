import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function ETAFranceFR() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA en France&nbsp;: Acquérir une Entreprise par Recherche Active
      </h1>

      <div className={bodyClass}>
        <p>
          L&apos;Entrepreneurship Through Acquisition (ETA) &mdash;
          l&apos;entrepreneuriat par acquisition &mdash; connaît un essor
          remarquable en France. Ce modèle, qui consiste à rechercher,
          acquérir et diriger une PME existante plutôt que de créer une
          entreprise de zéro, répond à un double enjeu structurel du marché
          français&nbsp;: la vague massive de départs à la retraite des
          dirigeants de PME et l&apos;aspiration d&apos;une nouvelle génération de
          cadres à l&apos;entrepreneuriat. La France représente aujourd&apos;hui l&apos;un
          des marchés les plus dynamiques d&apos;Europe pour l&apos;ETA, portée par
          un écosystème académique de premier plan, un cadre juridique et
          fiscal adapté et des dispositifs publics uniques en leur genre.
        </p>
        <p>
          Ce guide offre une vision complète de l&apos;ETA en France&nbsp;: son
          écosystème, ses acteurs, ses spécificités juridiques et fiscales, et
          les étapes concrètes pour mener à bien un projet d&apos;acquisition.
          Que vous soyez un cadre en reconversion, un jeune diplômé de grande
          école ou un entrepreneur étranger attiré par le marché français,
          vous trouverez ici les clés pour comprendre et naviguer cet
          écosystème.
        </p>
      </div>

      <h2 className={h2Class}>L&apos;opportunité démographique française</h2>
      <div className={bodyClass}>
        <p>
          La France fait face à un défi démographique majeur dans son tissu
          entrepreneurial. Selon les données de Bpifrance et des CCI
          (Chambres de Commerce et d&apos;Industrie), environ 700&nbsp;000
          entreprises devront changer de mains dans la prochaine décennie, en
          raison du départ à la retraite de leurs dirigeants. Ce chiffre,
          régulièrement cité par les acteurs de la transmission, représente
          une opportunité considérable pour les entrepreneurs-acquéreurs.
        </p>
        <p>
          Parmi ces entreprises, une proportion significative sont des PME
          familiales rentables, souvent leaders sur des niches de marché
          régionales ou nationales, avec des équipes stables et un savoir-faire
          établi. Nombre de ces entreprises n&apos;ont pas de successeur identifié
          au sein de la famille &mdash; un phénomène qui s&apos;accentue avec
          l&apos;évolution sociétale&nbsp;: les enfants de dirigeants choisissent
          de plus en plus fréquemment des carrières différentes de celles de
          leurs parents.
        </p>
        <p>
          Cette situation crée un déséquilibre structurel entre l&apos;offre
          (des milliers de PME à reprendre) et la demande (un nombre
          insuffisant de repreneurs qualifiés). Pour les praticiens de l&apos;ETA,
          ce déséquilibre est une aubaine&nbsp;: il offre un large éventail de
          cibles et un pouvoir de négociation favorable, dans un contexte où
          les cédants sont souvent plus préoccupés par la pérennité de leur
          entreprise et de leurs salariés que par la maximisation du prix de
          cession.
        </p>
      </div>

      <h2 className={h2Class}>L&apos;écosystème académique&nbsp;: moteur de l&apos;ETA en France</h2>
      <div className={bodyClass}>
        <p>
          Les grandes écoles de commerce françaises jouent un rôle
          fondamental dans la structuration de l&apos;écosystème ETA français.
          Trois institutions se distinguent particulièrement&nbsp;:
        </p>

        <h3 className={h3Class}>HEC Paris</h3>
        <p>
          La Chaire Entrepreneuriat de HEC Paris a été pionnière dans
          l&apos;intégration de l&apos;ETA dans ses programmes. L&apos;école propose un
          cours dédié à l&apos;entrepreneuriat par acquisition dans son programme
          MBA et son programme Grande École. Le réseau des alumni HEC
          impliqués dans l&apos;ETA &mdash; en tant que searchers, investisseurs
          ou conseillers &mdash; constitue l&apos;un des réseaux les plus actifs
          en Europe continentale.
        </p>

        <h3 className={h3Class}>INSEAD</h3>
        <p>
          L&apos;INSEAD, à Fontainebleau, est un acteur majeur de la recherche
          sur l&apos;ETA en Europe. Son Search Fund &amp; ETA Club réunit étudiants,
          alumni et investisseurs autour de conférences, études de cas et
          sessions de mentorat. Le caractère international de l&apos;INSEAD
          (avec des promotions de plus de 80 nationalités) en fait un point
          de convergence unique entre les pratiques ETA américaines et les
          réalités du marché européen.
        </p>

        <h3 className={h3Class}>ESSEC Business School</h3>
        <p>
          L&apos;ESSEC a développé des programmes dédiés à l&apos;entrepreneuriat et
          à la reprise d&apos;entreprise, intégrant la dimension ETA dans ses
          cursus. D&apos;autres écoles comme l&apos;EDHEC, EM Lyon, Sciences Po et
          HEC Liège (pour le marché belge francophone) contribuent également
          à la diffusion du modèle.
        </p>
      </div>

      <h2 className={h2Class}>Le cadre juridique de la reprise en France</h2>
      <div className={bodyClass}>
        <p>
          Le droit français offre un cadre structuré pour l&apos;acquisition
          d&apos;entreprise, avec des spécificités importantes que tout
          entrepreneur-acquéreur doit maîtriser.
        </p>

        <h3 className={h3Class}>La SAS&nbsp;: structure de prédilection</h3>
        <p>
          La Société par Actions Simplifiée (SAS) est la forme juridique
          privilégiée pour les projets ETA en France. Sa flexibilité
          statutaire permet de créer des classes d&apos;actions (ordinaires, de
          préférence), de définir des mécanismes de vesting, de structurer
          la gouvernance avec un Président et d&apos;éventuels Directeurs
          Généraux, et de rédiger un{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            pacte d&apos;actionnaires
          </Link>{" "}
          sur mesure. Contrairement à la SA (Société Anonyme), la SAS
          n&apos;impose pas de conseil d&apos;administration formel ni de nombre
          minimum d&apos;actionnaires au-delà d&apos;un, ce qui la rend idéale pour
          les structures de search fund.
        </p>

        <h3 className={h3Class}>SARL et EURL&nbsp;: alternatives pour les petites cibles</h3>
        <p>
          Pour les acquisitions de plus petite taille, la SARL (Société à
          Responsabilité Limitée) ou l&apos;EURL (SARL unipersonnelle) peuvent
          constituer des alternatives pertinentes. La SARL offre une structure
          plus simple et des coûts de fonctionnement réduits, mais avec une
          flexibilité statutaire moindre que la SAS. Elle est souvent la
          forme juridique de la cible elle-même, et le repreneur peut choisir
          de la conserver ou de la transformer en SAS post-acquisition.
        </p>

        <h3 className={h3Class}>Cession de titres vs. cession de fonds de commerce</h3>
        <p>
          En France, l&apos;acquisition d&apos;une entreprise peut prendre deux
          formes principales&nbsp;: la cession de titres (share deal) ou la
          cession de fonds de commerce (asset deal). La cession de titres
          est la plus courante dans le contexte ETA car elle permet de
          reprendre l&apos;ensemble de l&apos;entreprise (actifs, passifs, contrats,
          salariés) de manière simple. La cession de fonds de commerce offre
          une protection renforcée contre les passifs cachés mais impose des
          formalités plus lourdes (publication légale, droit de préemption
          de la commune, opposition des créanciers).
        </p>

        <h3 className={h3Class}>Obligations spécifiques</h3>
        <ul className={ulClass}>
          <li>
            <strong>Information préalable des salariés&nbsp;:</strong> Depuis
            la loi Hamon de 2014, les salariés doivent être informés au
            moins deux mois avant toute cession d&apos;une PME (moins de 250
            salariés), afin de leur permettre de formuler une offre
            d&apos;acquisition. Cette obligation ne confère pas un droit de
            préemption mais impose un délai incompressible dans le calendrier
            de cession.
          </li>
          <li>
            <strong>Consultation du CSE&nbsp;:</strong> Le Comité Social et
            Économique doit être consulté avant toute cession de contrôle.
            Son avis est consultatif mais la procédure est obligatoire et
            peut prendre plusieurs semaines.
          </li>
          <li>
            <strong>Garantie d&apos;actif et de passif (GAP)&nbsp;:</strong> Il
            est standard en France de négocier une garantie par laquelle le
            cédant s&apos;engage à indemniser l&apos;acquéreur en cas de passifs non
            révélés lors des{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligences
            </Link>. La durée et le plafond de cette garantie font
            l&apos;objet de négociations approfondies.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Les avantages fiscaux&nbsp;: le pacte Dutreil</h2>
      <div className={bodyClass}>
        <p>
          Le dispositif Dutreil est l&apos;un des atouts fiscaux les plus
          significatifs du marché français pour la transmission d&apos;entreprise.
          Instauré pour faciliter la transmission des entreprises familiales,
          le pacte Dutreil permet une exonération de 75&nbsp;% de la base
          taxable aux droits de mutation à titre gratuit (donation ou
          succession). Ce dispositif est soumis à des conditions strictes&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Un engagement collectif de conservation des titres d&apos;au moins
            deux ans (engagement Dutreil), pris par au moins deux associés
            représentant 34&nbsp;% des droits de vote (ou 20&nbsp;% pour les
            sociétés cotées).
          </li>
          <li>
            Un engagement individuel de conservation de quatre ans à compter
            de l&apos;expiration de l&apos;engagement collectif.
          </li>
          <li>
            L&apos;exercice effectif d&apos;une fonction de direction dans
            l&apos;entreprise par le bénéficiaire pendant la durée de
            l&apos;engagement collectif et les trois années suivantes.
          </li>
        </ul>
        <p>
          Pour un searcher qui acquiert une entreprise via un LBO ou un
          search fund et s&apos;inscrit dans une perspective de direction à long
          terme, le Dutreil peut être un outil puissant de planification
          fiscale, notamment en vue d&apos;une éventuelle transmission future
          de l&apos;entreprise acquise.
        </p>
      </div>

      <h2 className={h2Class}>Les acteurs du financement de la reprise</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Bpifrance</h3>
        <p>
          Bpifrance est l&apos;acteur public incontournable du financement de
          la transmission. Ses principaux outils pour les repreneurs sont
          le prêt transmission (jusqu&apos;à 400&nbsp;000&nbsp;&euro; sur sept
          ans, sans garantie personnelle, en complément d&apos;un prêt bancaire),
          la garantie de prêt bancaire (couvrant jusqu&apos;à 70&nbsp;% du
          montant), et les fonds d&apos;investissement en fonds propres pour
          les opérations de plus grande taille. Bpifrance Transmission
          propose également une plateforme de mise en relation cédants-repreneurs.
        </p>

        <h3 className={h3Class}>Les banques commerciales</h3>
        <p>
          Le prêt bancaire classique reste le pilier du financement de la
          reprise en France. Les principales banques (BNP Paribas, Crédit
          Agricole, Société Générale, Banque Populaire, CIC) disposent de
          départements spécialisés dans le financement de la transmission.
          Le prêt acquisition est généralement structuré sur cinq à sept ans,
          avec un taux variable ou fixe indexé sur l&apos;Euribor. Le montant
          finançable dépend de la capacité de remboursement de la cible (la
          dette est servie par les cash-flows de l&apos;entreprise acquise) et
          de l&apos;apport personnel du repreneur (généralement 20 à 30&nbsp;%
          du prix de cession).
        </p>

        <h3 className={h3Class}>Initiative France et les prêts d&apos;honneur</h3>
        <p>
          Le réseau Initiative France accorde des prêts d&apos;honneur à taux
          zéro aux repreneurs, d&apos;un montant pouvant aller jusqu&apos;à
          50&nbsp;000&nbsp;&euro; (et davantage pour les projets innovants via
          Initiative Remarquable). Ces prêts, remboursables sur trois à
          cinq ans, sont considérés comme des quasi-fonds propres par les
          banques, ce qui améliore l&apos;effet de levier. Le réseau Réseau
          Entreprendre propose un dispositif similaire pour les projets de
          reprise ambitieux.
        </p>
      </div>

      <h2 className={h2Class}>Les canaux de sourcing en France</h2>
      <div className={bodyClass}>
        <p>
          Identifier la bonne cible est le défi principal de tout projet
          ETA. En France, les canaux de sourcing se répartissent en
          plusieurs catégories&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>CRA (Cédants et Repreneurs d&apos;Affaires)&nbsp;:</strong> Premier
            réseau associatif de la transmission d&apos;entreprise en France,
            le CRA met en relation cédants et repreneurs grâce à ses
            consultants bénévoles répartis sur l&apos;ensemble du territoire.
          </li>
          <li>
            <strong>Bpifrance Transmission&nbsp;:</strong> La plateforme en
            ligne de Bpifrance recense des annonces de cession et offre des
            outils de recherche et de mise en relation.
          </li>
          <li>
            <strong>Plateformes spécialisées&nbsp;:</strong> Fusacq, Cession PME,
            Transentreprise (CCI) et d&apos;autres plateformes en ligne
            publient des annonces de cession, souvent anonymisées.
          </li>
          <li>
            <strong>Intermédiaires professionnels&nbsp;:</strong> Les cabinets
            de fusion-acquisition (M&amp;A), les experts-comptables et les
            avocats d&apos;affaires sont des sources précieuses d&apos;opportunités
            off-market.
          </li>
          <li>
            <strong>Approche directe&nbsp;:</strong> La prospection directe
            auprès des dirigeants (courriers, appels, événements sectoriels)
            est une stratégie particulièrement efficace pour les{" "}
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
              searchers ambitieux
            </Link>{" "}
            qui ciblent des entreprises qui ne sont pas officiellement en
            vente.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Les étapes clés d&apos;un projet ETA en France</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>
            <strong>Définir sa thèse d&apos;investissement&nbsp;:</strong> Identifier
            les secteurs, la géographie, la taille et les critères
            financiers de la cible idéale. En France, la diversité du tissu
            industriel offre un large éventail de possibilités&nbsp;:
            services aux entreprises, industrie manufacturière, distribution
            spécialisée, services de santé, etc.
          </li>
          <li>
            <strong>Structurer le véhicule d&apos;acquisition&nbsp;:</strong> Créer
            la SAS (ou la holding de reprise), rédiger les statuts et le
            pacte d&apos;actionnaires, et organiser la gouvernance en fonction
            du modèle retenu (traditionnel ou autofinancé).
          </li>
          <li>
            <strong>Sourcer activement&nbsp;:</strong> Combiner les canaux
            institutionnels (CRA, Bpifrance Transmission, CCI) et
            l&apos;approche directe pour constituer un pipeline de cibles.
          </li>
          <li>
            <strong>Évaluer et négocier&nbsp;:</strong> Réaliser une{" "}
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              valorisation rigoureuse
            </Link>{" "}
            de la cible, négocier le prix et les conditions de la cession,
            et rédiger la lettre d&apos;intention (LOI).
          </li>
          <li>
            <strong>Mener les due diligences&nbsp;:</strong> Due diligence
            comptable, juridique, fiscale, sociale et opérationnelle, en
            s&apos;appuyant sur des experts locaux (expert-comptable, avocat
            d&apos;affaires).
          </li>
          <li>
            <strong>Boucler le financement&nbsp;:</strong> Monter le plan de
            financement en combinant prêt bancaire, Bpifrance, crédit
            vendeur, prêts d&apos;honneur et fonds propres.
          </li>
          <li>
            <strong>Réaliser la cession&nbsp;:</strong> Respecter les
            obligations légales (information des salariés, consultation du
            CSE), signer le protocole de cession et réaliser le closing.
          </li>
          <li>
            <strong>Piloter la transition&nbsp;:</strong> Assurer la continuité
            opérationnelle, gagner la confiance des équipes et mettre en
            œuvre le plan de création de valeur.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Défis et facteurs clés de succès</h2>
      <div className={bodyClass}>
        <p>
          La réussite d&apos;un projet ETA en France dépend de plusieurs
          facteurs critiques&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>La relation avec le cédant&nbsp;:</strong> En France, la
            dimension émotionnelle de la transmission est particulièrement
            forte. Le cédant cherche souvent un repreneur qui perpétuera les
            valeurs de l&apos;entreprise et protégera les emplois. La capacité
            du searcher à établir une relation de confiance est déterminante.
          </li>
          <li>
            <strong>La maîtrise du cadre réglementaire&nbsp;:</strong> Le droit
            du travail, les obligations sociales, la fiscalité et les
            procédures administratives françaises exigent un accompagnement
            juridique et comptable de qualité.
          </li>
          <li>
            <strong>La gestion de la transition managériale&nbsp;:</strong> Prendre
            la direction d&apos;une entreprise avec une culture établie et des
            équipes fidèles au fondateur est un exercice délicat qui requiert
            humilité, écoute et progressivité.
          </li>
          <li>
            <strong>Le réseau&nbsp;:</strong> L&apos;accès aux meilleures
            opportunités passe par un réseau solide d&apos;intermédiaires,
            de banquiers et de conseillers. Le CRA, les CCI, les réseaux
            d&apos;alumni et les associations professionnelles sont des points
            d&apos;entrée essentiels.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Pour aller plus loin</h2>
      <div className={bodyClass}>
        <p>
          L&apos;ETA en France est un domaine riche et en pleine évolution.
          Pour approfondir les aspects spécifiques de votre projet,
          consultez nos autres guides&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
              Qu&apos;est-ce qu&apos;un Search Fund&nbsp;? Guide Complet
            </Link>
          </li>
          <li>
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              Comment Valoriser une PME pour l&apos;Acquisition
            </Link>
          </li>
          <li>
            <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
              Stratégies de Sourcing de Cibles
            </Link>
          </li>
          <li>
            <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
              Structure Juridique du Search Fund
            </Link>
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Bpifrance &mdash; <em>Reprendre une Entreprise&nbsp;: Le Guide du Repreneur</em>, 2024.
        </li>
        <li>
          CRA (Cédants et Repreneurs d&apos;Affaires) &mdash; <em>Rapport Annuel sur la Transmission d&apos;Entreprise</em>, 2024.
        </li>
        <li>
          HEC Paris, Chaire Entrepreneuriat &mdash; <em>Entrepreneuriat par Acquisition&nbsp;: état des lieux et perspectives</em>, 2024.
        </li>
        <li>
          INSEAD &mdash; <em>ETA &amp; Search Funds Research Hub</em>, 2024.
        </li>
        <li>
          Ministère de l&apos;Économie &mdash; <em>Transmission d&apos;Entreprise&nbsp;: le cadre juridique et fiscal</em>, 2024.
        </li>
        <li>
          CCI France &mdash; <em>Transentreprise&nbsp;: Plateforme Nationale de la Transmission</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
