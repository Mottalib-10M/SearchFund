import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function ETAReadingListFR() {
  return (
    <article>
      <h1 className={h1Class}>
        Lectures Essentielles sur l&apos;ETA et les Search Funds
      </h1>

      <div className={bodyClass}>
        <p>
          Que vous découvriez l&apos;Entrepreneurship Through Acquisition
          (ETA) ou que vous prépariez le lancement de votre search fund, une
          base de connaissances solide est indispensable. La littérature sur
          les search funds &mdash; longtemps cantonnée aux cercles
          académiques de Stanford et de Harvard &mdash; s&apos;est
          considérablement enrichie ces dernières années, avec l&apos;émergence
          de recherches européennes, de podcasts spécialisés et de
          ressources francophones. Cet article propose une bibliographie
          commentée des ouvrages, études, podcasts et ressources en ligne
          essentiels pour tout aspirant searcher, investisseur ou
          professionnel de la transmission d&apos;entreprise. Commencez par
          notre{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            guide d&apos;introduction au search fund
          </Link>{" "}
          pour une introduction pratique au modèle.
        </p>
      </div>

      <h2 className={h2Class}>Études fondamentales</h2>
      <div className={bodyClass}>
        <p>
          Les études académiques constituent le socle de connaissances de
          tout praticien ETA. Elles fournissent les données quantitatives
          indispensables pour comprendre le modèle, calibrer les attentes
          et crédibiliser l&apos;approche auprès des investisseurs et des
          partenaires financiers.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Stanford Search Fund Primer&nbsp;:</strong> Le document
            d&apos;introduction de référence sur le modèle search fund, publié
            par le Center for Entrepreneurial Studies de Stanford. Le Primer
            couvre les avantages, les défis, la structure et l&apos;exécution
            d&apos;un search fund de manière concise et pratique. C&apos;est le
            premier document à lire pour quiconque s&apos;intéresse au
            modèle. Disponible gratuitement sur le site de Stanford GSB.
          </li>
          <li>
            <strong>
              <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
                Étude Stanford 2024
              </Link>&nbsp;:
            </strong>{" "}
            Le jeu de données le plus complet sur la performance des search
            funds, analysant plus de 680 fonds lancés entre 1984 et 2022.
            L&apos;étude rapporte les TRI, les multiples sur capital investi,
            les taux d&apos;acquisition, les profils des searchers et les
            caractéristiques des entreprises acquises. C&apos;est la référence
            absolue que tout searcher doit connaître en détail et pouvoir
            présenter à ses investisseurs potentiels.
          </li>
          <li>
            <strong>Étude internationale IESE&nbsp;:</strong> L&apos;IESE
            Business School publie l&apos;étude de référence sur les search
            funds internationaux, principalement européens. Elle étend les
            données Stanford au contexte européen et fournit des
            informations précieuses sur les dynamiques de marché, les
            structures de deal et les performances en dehors des
            États-Unis. Consultez notre analyse approfondie de la{" "}
            <Link href="/learn/european-search-fund-research" className="text-apple-accent hover:underline">
              recherche européenne sur les search funds
            </Link>.
          </li>
          <li>
            <strong>Hub de recherche ETA de l&apos;INSEAD&nbsp;:</strong>{" "}
            L&apos;INSEAD maintient une plateforme dédiée qui agrège études,
            articles de recherche, témoignages et guides pratiques sur
            l&apos;ETA. Le hub est particulièrement pertinent pour les
            praticiens francophones, compte tenu de la présence de
            l&apos;INSEAD à Fontainebleau et de la forte représentation
            d&apos;alumni français dans le réseau ETA de l&apos;école.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Livres essentiels en anglais</h2>
      <div className={bodyClass}>
        <p>
          La littérature anglophone sur l&apos;ETA et l&apos;acquisition de
          PME est la plus riche et la plus développée. Les ouvrages suivants
          sont considérés comme incontournables par la communauté ETA
          mondiale.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>&laquo;&nbsp;HBR Guide to Buying a Small
            Business&nbsp;&raquo;</strong> de Richard S. Ruback et Royce
            Yudkoff &mdash; Deux professeurs de Harvard Business School
            exposent un cadre pratique pour l&apos;acquisition d&apos;une
            petite entreprise. L&apos;ouvrage couvre la recherche de cibles,
            l&apos;évaluation, le financement, la négociation et la
            transition. C&apos;est le livre le plus recommandé pour les
            aspirants searchers. Sa lecture est considérée comme un
            prérequis par la quasi-totalité des investisseurs search fund.
            L&apos;ouvrage est accessible et pragmatique, fondé sur des
            décennies d&apos;expérience d&apos;enseignement et d&apos;accompagnement
            de searchers à HBS.
          </li>
          <li>
            <strong>&laquo;&nbsp;Buy Then Build&nbsp;&raquo;</strong> de
            Walker Deibel &mdash; Un guide complet de l&apos;entrepreneuriat
            par acquisition, couvrant l&apos;ensemble du cycle de vie, de la
            recherche aux opérations post-acquisition. Deibel, lui-même
            entrepreneur par acquisition, offre une perspective
            praticienne qui complète l&apos;approche plus académique de
            Ruback et Yudkoff. L&apos;ouvrage est particulièrement utile
            pour les search funds autofinancés et les acquisitions sans
            levée de capital de recherche formelle.
          </li>
          <li>
            <strong>&laquo;&nbsp;Search Funds&nbsp;&raquo;</strong> de
            Jeffrey C. Yoder et Paul J. Kelly &mdash; Un ouvrage spécifiquement
            dédié au modèle search fund, écrit par des praticiens-investisseurs
            de longue date. Le livre couvre en détail la levée du capital de
            recherche, la structuration du search fund, la recherche et
            l&apos;évaluation de cibles, le financement de l&apos;acquisition et
            la gouvernance post-acquisition. C&apos;est une ressource
            particulièrement précieuse pour comprendre les aspects
            juridiques et financiers du modèle.
          </li>
          <li>
            <strong>&laquo;&nbsp;The First 90 Days&nbsp;&raquo;</strong> de
            Michael D. Watkins &mdash; Bien que cet ouvrage ne traite pas
            spécifiquement des search funds, il est devenu une lecture
            quasi obligatoire pour les searchers qui s&apos;apprêtent à
            prendre la direction d&apos;une entreprise acquise. Watkins
            propose un cadre structuré pour les 90 premiers jours dans un
            nouveau rôle de direction&nbsp;: diagnostic de la situation,
            identification des priorités, construction de la crédibilité
            et gestion de la transition. Pour les searchers, ces premiers
            mois sont critiques, et l&apos;approche de Watkins offre une
            méthodologie éprouvée.
          </li>
          <li>
            <strong>&laquo;&nbsp;A Practical Guide to Buying a
            Business&nbsp;&raquo;</strong> de Robert Chalfin &mdash; Focalisé
            sur les aspects mécaniques de la structuration du deal, de la
            négociation et du closing. Cet ouvrage complète les lectures
            plus stratégiques par une approche concrète des processus
            transactionnels.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Ressources francophones</h2>
      <div className={bodyClass}>
        <p>
          L&apos;écosystème francophone produit un nombre croissant de
          ressources dédiées à la reprise d&apos;entreprise et, plus
          spécifiquement, au modèle search fund. Si la littérature
          francophone reste moins abondante que son homologue anglophone,
          elle offre des perspectives précieuses adaptées aux réalités
          juridiques, fiscales et culturelles françaises.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Travaux de HEC Paris&nbsp;:</strong> La chaire
            Entrepreneuriat de HEC Paris a produit des travaux de recherche
            et des études de cas sur la transmission d&apos;entreprise et
            l&apos;entrepreneuriat par acquisition en France. Les cours dédiés à
            l&apos;ETA dans le programme Grande École et les programmes
            Executive de HEC intègrent des ressources pédagogiques
            spécifiquement adaptées au contexte français&nbsp;: structuration
            en SAS, pacte Dutreil, financement Bpifrance, dialogue social.
          </li>
          <li>
            <strong>Guides Bpifrance&nbsp;:</strong> Bpifrance publie des
            guides pratiques sur la reprise d&apos;entreprise, couvrant les
            aspects financiers (prêt transmission, garantie de prêt),
            juridiques (choix de la forme sociale, pactes d&apos;actionnaires)
            et opérationnels (transition managériale, plan de
            développement). Le <em>Guide du Repreneur</em> est une
            ressource de référence pour tout entrepreneur-acquéreur
            opérant en France.
          </li>
          <li>
            <strong>Publications du CRA&nbsp;:</strong> Le réseau CRA
            (Cédants et Repreneurs d&apos;Affaires) publie un rapport annuel
            sur la transmission d&apos;entreprise en France, avec des
            statistiques sur les profils de repreneurs, les secteurs les
            plus actifs, les prix de cession et les délais de transaction.
            Ces données sont utiles pour calibrer les attentes et
            comprendre les dynamiques du marché français de la reprise.
          </li>
          <li>
            <strong>Travaux de l&apos;ESSEC et de l&apos;EDHEC&nbsp;:</strong>{" "}
            Ces écoles développent progressivement des modules
            d&apos;enseignement et des travaux de recherche sur l&apos;ETA,
            enrichissant l&apos;écosystème académique francophone. Les
            mémoires de recherche et les études de cas produits par les
            étudiants et les professeurs de ces institutions constituent
            des ressources complémentaires.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Recherche académique approfondie</h2>
      <div className={bodyClass}>
        <p>
          Au-delà des études de Stanford et de l&apos;IESE, la recherche
          académique sur l&apos;ETA s&apos;est considérablement développée ces
          dernières années. Les publications suivantes offrent des
          perspectives analytiques et théoriques qui enrichissent la
          compréhension du modèle.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>&laquo;&nbsp;Entrepreneurship through acquisition&nbsp;:
            A scoping review&nbsp;&raquo;</strong> &mdash; Publié dans le
            <em> Management Review Quarterly</em> (Springer), cet article
            propose une revue systématique de la littérature académique sur
            l&apos;ETA. Il cartographie les thèmes de recherche, identifie les
            lacunes et propose des axes de recherche futurs. C&apos;est une
            lecture indispensable pour les chercheurs et les praticiens qui
            souhaitent comprendre l&apos;état de l&apos;art académique.
          </li>
          <li>
            <strong>Yale School of Management&nbsp;:</strong>{" "}
            &laquo;&nbsp;Evolution of a Search Fund CEO and
            Company&nbsp;&raquo; &mdash; Cette étude examine comment les
            searchers-CEOs évoluent en tant que leaders au fil du temps,
            analysant les phases de développement managérial et les
            facteurs de succès à long terme.
          </li>
          <li>
            <strong>University of Chicago Booth&nbsp;:</strong>{" "}
            &laquo;&nbsp;The Evolution of Entrepreneurship Through
            Acquisition&nbsp;&raquo; &mdash; Retrace l&apos;histoire et le
            développement de l&apos;ETA en tant que classe d&apos;actifs, depuis
            les premiers search funds de Stanford jusqu&apos;à
            l&apos;internationalisation du modèle.
          </li>
          <li>
            <strong>Études de cas IESE&nbsp;:</strong> L&apos;IESE a publié
            plusieurs dizaines d&apos;études de cas sur des search funds
            européens individuels, couvrant l&apos;Espagne, le Royaume-Uni,
            la France, l&apos;Allemagne et les pays nordiques. Ces cas
            offrent des analyses détaillées des processus de recherche,
            des négociations, des structurations et des opérations
            post-acquisition dans le contexte européen.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Podcasts spécialisés</h2>
      <div className={bodyClass}>
        <p>
          Les podcasts sont devenus une source d&apos;information et
          d&apos;inspiration incontournable pour la communauté ETA. Ils offrent
          des témoignages de première main de searchers, d&apos;opérateurs et
          d&apos;investisseurs, avec un niveau de détail et de franchise
          rarement atteint dans les publications écrites.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Think Like an Owner&nbsp;:</strong> L&apos;un des
            podcasts les plus populaires de l&apos;écosystème ETA. Animé par
            Alex Bridgeman, il propose des entretiens approfondis avec des
            entrepreneurs par acquisition, des opérateurs de PME et des
            investisseurs. Les épisodes couvrent un large spectre de
            sujets&nbsp;: sourcing, due diligence, financement, opérations
            post-acquisition, buy-and-build et sortie. La qualité des
            invités et la profondeur des conversations en font une
            ressource exceptionnelle.
          </li>
          <li>
            <strong>Podcast ETA &amp; Search Funds de
            l&apos;INSEAD&nbsp;:</strong> La série de podcasts de l&apos;INSEAD
            présente des entretiens avec des searchers, des opérateurs et
            des investisseurs du réseau INSEAD, offrant des perspectives
            concrètes sur les défis et les opportunités de l&apos;ETA en
            Europe et à l&apos;international. La dimension francophone et
            européenne de ce podcast le rend particulièrement pertinent
            pour les praticiens français.
          </li>
          <li>
            <strong>Searchfunder Podcast&nbsp;:</strong> Le podcast de la
            communauté Searchfunder.com propose des entretiens avec des
            membres de la communauté, couvrant tous les aspects du
            parcours searcher. Le ton est pratique et orienté vers
            l&apos;action, avec des conseils opérationnels immédiatement
            applicables.
          </li>
          <li>
            <strong>Acquiring Minds&nbsp;:</strong> Ce podcast se concentre
            sur les témoignages d&apos;entrepreneurs qui ont acquis et
            développé des PME, avec un accent sur les aspects opérationnels
            et les leçons apprises. Les épisodes sont souvent structurés
            autour d&apos;une acquisition spécifique, offrant un récit
            chronologique des défis et des succès.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Communautés et plateformes en ligne</h2>
      <div className={bodyClass}>
        <p>
          L&apos;apprentissage par les pairs et le réseautage sont des
          composantes essentielles de la préparation d&apos;un searcher.
          Plusieurs communautés en ligne facilitent les échanges entre
          praticiens et offrent des ressources complémentaires aux
          publications formelles.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Searchfunder.com&nbsp;:</strong> La plus grande
            communauté en ligne dédiée aux search funds, avec des forums de
            discussion, des ressources, des annonces de deals et un
            répertoire de professionnels. La communauté est principalement
            anglophone et orientée vers le marché américain, mais un
            nombre croissant de praticiens européens y participent.
          </li>
          <li>
            <strong>SearchFundMarket&nbsp;:</strong> Plateforme dédiée à la
            mise en relation de searchers, d&apos;investisseurs et de cédants
            en Europe. SearchFundMarket offre un espace spécifiquement
            conçu pour l&apos;écosystème ETA européen et francophone.
          </li>
          <li>
            <strong>Groupes LinkedIn spécialisés&nbsp;:</strong> Plusieurs
            groupes LinkedIn regroupent la communauté ETA francophone et
            européenne. Ces groupes permettent de suivre l&apos;actualité du
            secteur, de partager des ressources et d&apos;établir des
            contacts professionnels.
          </li>
          <li>
            <strong>Réseaux d&apos;alumni&nbsp;:</strong> Les réseaux
            d&apos;alumni de HEC, de l&apos;INSEAD, de l&apos;IESE et d&apos;autres
            business schools européennes comptent des communautés ETA
            actives qui organisent régulièrement des événements de
            networking, des sessions de partage d&apos;expérience et des
            programmes de mentorat.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Conférences et événements clés</h2>
      <div className={bodyClass}>
        <p>
          La participation aux conférences ETA est l&apos;un des moyens les
          plus efficaces de construire son réseau, de rencontrer des
          investisseurs potentiels et d&apos;apprendre des expériences
          d&apos;autres searchers.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Conférence ETA de l&apos;INSEAD
            (Fontainebleau)&nbsp;:</strong> L&apos;événement annuel
            phare de la communauté ETA européenne. La conférence réunit
            searchers, investisseurs, opérateurs et professionnels du
            secteur pour des panels, des ateliers et du networking.
            L&apos;événement est particulièrement pertinent pour les
            praticiens francophones et européens.
          </li>
          <li>
            <strong>Conférence Search Fund de l&apos;IESE
            (Barcelone)&nbsp;:</strong> La conférence ETA européenne de
            référence, organisée annuellement par l&apos;IESE Business School.
            L&apos;événement attire des participants de toute l&apos;Europe et
            au-delà, et offre une perspective paneuropéenne sur les
            tendances et les défis de l&apos;ETA.
          </li>
          <li>
            <strong>Stanford Search Fund CEO Conference
            (Stanford)&nbsp;:</strong> La conférence originelle et la plus
            prestigieuse de l&apos;écosystème search fund mondial. Bien que
            centrée sur le marché américain, elle attire un nombre
            croissant de participants internationaux et offre un accès
            inégalé au réseau d&apos;investisseurs et de searchers
            américains.
          </li>
          <li>
            <strong>Événements HEC et Bpifrance&nbsp;:</strong> En France,
            les événements organisés par la chaire Entrepreneuriat de HEC
            Paris et par Bpifrance (notamment le salon Go Entrepreneurs
            et les rencontres Bpifrance Transmission) offrent des
            opportunités de mise en réseau dans le contexte spécifiquement
            français de la reprise d&apos;entreprise.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Plan de lecture recommandé</h2>
      <div className={bodyClass}>
        <p>
          Pour un aspirant searcher francophone, nous recommandons la
          progression de lecture suivante&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Fondations&nbsp;:</strong> Stanford Search Fund Primer +
            notre{" "}
            <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
              guide d&apos;introduction
            </Link>{" "}
            + <em>HBR Guide to Buying a Small Business</em> (Ruback &amp;
            Yudkoff).
          </li>
          <li>
            <strong>Données et benchmarks&nbsp;:</strong>{" "}
            <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
              Étude Stanford 2024
            </Link>{" "}
            + étude internationale IESE +{" "}
            <Link href="/learn/european-search-fund-research" className="text-apple-accent hover:underline">
              notre synthèse de la recherche européenne
            </Link>.
          </li>
          <li>
            <strong>Approfondissement pratique&nbsp;:</strong>{" "}
            <em>Buy Then Build</em> (Deibel) + <em>Search Funds</em> (Yoder
            &amp; Kelly) + guides Bpifrance.
          </li>
          <li>
            <strong>Préparation opérationnelle&nbsp;:</strong>{" "}
            <em>The First 90 Days</em> (Watkins) + podcasts Think Like an
            Owner et INSEAD ETA.
          </li>
          <li>
            <strong>Networking et immersion&nbsp;:</strong> Participation
            aux conférences INSEAD et IESE + inscription sur
            Searchfunder.com et SearchFundMarket.
          </li>
        </ol>
        <p>
          Ce parcours de lecture, combiné à la participation active aux
          événements et aux communautés du secteur, fournit une base de
          connaissances solide pour aborder avec confiance la levée du
          capital de recherche et le lancement d&apos;une recherche active.
          L&apos;ETA est un modèle qui récompense la préparation
          méthodique&nbsp;: les searchers les mieux préparés sont ceux qui
          obtiennent les meilleurs résultats.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business &mdash; <em>2024 Search Fund Study&nbsp;: Selected Observations</em>, 2024.
        </li>
        <li>
          Ruback, R. &amp; Yudkoff, R. &mdash; <em>HBR Guide to Buying a Small Business</em>, Harvard Business Review Press.
        </li>
        <li>
          Deibel, W. &mdash; <em>Buy Then Build&nbsp;: How Acquisition Entrepreneurs Outsmart the Startup Game</em>, Lioncrest Publishing.
        </li>
        <li>
          Yoder, J.C. &amp; Kelly, P.J. &mdash; <em>Search Funds&nbsp;: What Every Searcher, Investor, and Advisor Should Know</em>.
        </li>
        <li>
          IESE Business School &mdash; <em>International Search Fund Study</em>, 2024.
        </li>
        <li>
          INSEAD &mdash; <em>ETA &amp; Search Funds Research Hub</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Guide du Repreneur</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
