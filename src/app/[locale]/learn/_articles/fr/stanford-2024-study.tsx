import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function Stanford2024FR() {
  return (
    <article>
      <h1 className={h1Class}>Étude Stanford 2024&nbsp;: Chiffres Clés des Search Funds</h1>

      <div className={bodyClass}>
        <p>
          L&apos;étude biennale publiée par la Stanford Graduate School of Business
          constitue la référence mondiale en matière de données sur les search
          funds. L&apos;édition 2024, intitulée <em>2024 Search Fund Study&nbsp;:
          Selected Observations</em>, couvre l&apos;ensemble des search funds
          traditionnels lancés entre 1984 et 2022 et recense 681&nbsp;search funds
          ayant levé du capital de recherche auprès d&apos;investisseurs. Pour
          l&apos;écosystème français et européen, cette étude offre un cadre
          d&apos;analyse indispensable&nbsp;: elle permet de comprendre les
          dynamiques du modèle, de mesurer les rendements historiques et de
          calibrer les attentes des investisseurs. Cet article décrypte les
          principaux enseignements de l&apos;étude et en tire les implications pour
          le marché français.
        </p>
      </div>

      <h2 className={h2Class}>Périmètre et méthodologie de l&apos;étude</h2>
      <div className={bodyClass}>
        <p>
          L&apos;étude Stanford porte sur les search funds dits
          &laquo;&nbsp;traditionnels&nbsp;&raquo;, c&apos;est-à-dire ceux qui suivent le
          modèle en deux phases (levée de capital de recherche, puis levée de
          capital d&apos;acquisition). Elle exclut les search funds autofinancés et
          les modèles hybrides. Les données sont collectées par questionnaire
          auprès des searchers et de leurs investisseurs, avec un taux de
          réponse qui confère à l&apos;étude une représentativité solide.
        </p>
        <p>
          Le périmètre géographique est principalement nord-américain (États-Unis
          et Canada), mais l&apos;étude intègre progressivement les search funds
          internationaux. Pour les données spécifiquement européennes, il
          convient de croiser l&apos;analyse avec l&apos;étude IESE Business School
          (<em>International Search Fund Study</em>), qui couvre un périmètre
          géographique plus large incluant l&apos;Europe, l&apos;Amérique latine et
          l&apos;Asie.
        </p>
      </div>

      <h2 className={h2Class}>681&nbsp;search funds&nbsp;: la croissance du modèle</h2>
      <div className={bodyClass}>
        <p>
          Le chiffre le plus frappant de l&apos;étude 2024 est le nombre cumulé de
          681&nbsp;search funds traditionnels recensés depuis 1984. Cette
          progression illustre une accélération remarquable&nbsp;: il a fallu
          vingt-cinq ans (1984-2009) pour atteindre les 100 premiers search
          funds, mais moins de cinq ans pour passer de 400 à 681. Cette
          dynamique traduit la maturation du modèle, la multiplication des
          investisseurs spécialisés et la diffusion du concept dans les
          business schools internationales.
        </p>
        <p>
          Pour le marché français, cette croissance est un signal encourageant.
          L&apos;écosystème hexagonal se situe encore dans une phase précoce
          &mdash; comparable à la situation nord-américaine du début des
          années 2000 &mdash;, ce qui signifie que le potentiel de
          développement est considérable. L&apos;
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            écosystème ETA en France
          </Link>{" "}
          bénéficie du même type de catalyseurs qui ont accéléré la croissance
          outre-Atlantique&nbsp;: programmes académiques dédiés (HEC Paris,
          INSEAD, ESSEC), réseau croissant d&apos;investisseurs et forte demande
          de transmission de PME.
        </p>
      </div>

      <h2 className={h2Class}>Taux d&apos;acquisition et durée de recherche</h2>
      <div className={bodyClass}>
        <p>
          Selon l&apos;étude Stanford 2024, environ 70&nbsp;% des searchers qui
          lèvent du capital de recherche parviennent à réaliser une acquisition.
          Ce taux d&apos;acquisition, relativement stable d&apos;une édition à
          l&apos;autre, constitue un indicateur clé pour les investisseurs&nbsp;:
          il signifie qu&apos;environ un searcher sur trois ne trouve pas de cible
          satisfaisante dans le délai imparti et restitue le capital restant à
          ses investisseurs.
        </p>
        <p>
          La durée médiane de recherche se situe autour de 20 à 22&nbsp;mois,
          avec une dispersion significative&nbsp;: certains searchers concluent
          en moins de 12&nbsp;mois, tandis que d&apos;autres dépassent les
          30&nbsp;mois. Les facteurs qui influencent la durée incluent la
          sélectivité des critères de recherche, la géographie ciblée, la
          qualité du réseau de sourcing et la capacité du searcher à évaluer
          rapidement les opportunités.
        </p>
        <p>
          En France, la durée de recherche tend à être légèrement supérieure à
          la moyenne nord-américaine, en raison de la plus grande opacité du
          marché des PME, de la complexité des négociations avec les cédants
          familiaux et de la nécessité de respecter les procédures légales
          (information du CSE, consultation des instances représentatives du
          personnel). Les searchers français qui réussissent le mieux sont ceux
          qui combinent plusieurs canaux de sourcing&nbsp;: réseau CRA
          (Cédants et Repreneurs d&apos;Affaires), Bpifrance Transmission,
          approche directe et intermédiaires spécialisés.
        </p>
      </div>

      <h2 className={h2Class}>Rendements historiques&nbsp;: TRI et multiples</h2>
      <div className={bodyClass}>
        <p>
          Les données de rendement constituent le volet le plus attendu de
          chaque édition de l&apos;étude. L&apos;étude 2024 fait état d&apos;un TRI
          agrégé (taux de rendement interne) et d&apos;un multiple sur capital
          investi (MOIC) qui positionnent le search fund parmi les classes
          d&apos;actifs les plus performantes de l&apos;investissement en capital. Pour
          une analyse détaillée des{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            rendements des search funds
          </Link>, consultez notre article dédié.
        </p>
        <p>
          Plusieurs éléments méritent d&apos;être soulignés pour l&apos;investisseur
          français&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Rendements médians vs. rendements moyens&nbsp;:</strong> La
            distribution des rendements est fortement asymétrique. Les
            rendements moyens sont tirés vers le haut par quelques
            performances exceptionnelles, tandis que les rendements médians
            offrent une image plus réaliste de l&apos;expérience &laquo;&nbsp;typique&nbsp;&raquo;
            d&apos;un investisseur. Stanford rapporte un MOIC médian de l&apos;ordre
            de 2,4x à 2,8x et un TRI médian d&apos;environ 25 à 35&nbsp;%,
            selon les cohortes.
          </li>
          <li>
            <strong>Impact du temps de détention&nbsp;:</strong> Les search
            funds avec une durée de détention de cinq à sept ans tendent à
            afficher les meilleurs rendements, la création de valeur
            opérationnelle nécessitant du temps pour se matérialiser
            pleinement.
          </li>
          <li>
            <strong>Effet de la taille d&apos;acquisition&nbsp;:</strong> Les
            acquisitions dans la fourchette de 5 à 20&nbsp;millions de dollars
            de valeur d&apos;entreprise (soit environ 4,5 à 18&nbsp;millions
            d&apos;euros) présentent un profil risque/rendement équilibré. Les
            transactions trop petites manquent parfois d&apos;infrastructure
            managériale, tandis que les plus grandes sont plus concurrentielles.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Caractéristiques des acquisitions réussies</h2>
      <div className={bodyClass}>
        <p>
          L&apos;étude Stanford identifie plusieurs caractéristiques récurrentes
          parmi les search funds ayant généré les meilleurs rendements&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Revenus récurrents&nbsp;:</strong> Les entreprises à forte
            récurrence de chiffre d&apos;affaires (contrats d&apos;abonnement,
            maintenance, services récurrents) affichent des rendements
            supérieurs, car elles offrent une visibilité financière et une
            résilience accrues.
          </li>
          <li>
            <strong>Croissance organique&nbsp;:</strong> Les cibles présentant
            une croissance organique soutenue avant l&apos;acquisition tendent à
            mieux performer après la reprise, le searcher pouvant accélérer
            une dynamique déjà positive.
          </li>
          <li>
            <strong>Diversification de la clientèle&nbsp;:</strong> Les
            entreprises peu dépendantes d&apos;un petit nombre de clients
            présentent un risque moindre et une valorisation plus solide.
          </li>
          <li>
            <strong>Secteurs &laquo;&nbsp;boring but beautiful&nbsp;&raquo;&nbsp;:</strong>{" "}
            Les entreprises de services B2B dans des secteurs peu
            spectaculaires mais stables (logistique, maintenance industrielle,
            services aux entreprises, distribution spécialisée) sont
            surreprésentées parmi les meilleures performances.
          </li>
        </ul>
        <p>
          Pour le searcher français, ces critères se transposent directement.
          Le tissu de PME françaises offre de nombreuses opportunités dans ces
          segments, en particulier dans les services aux entreprises, le
          négoce technique et les services numériques.
        </p>
      </div>

      <h2 className={h2Class}>Évolutions et tendances récentes</h2>
      <div className={bodyClass}>
        <p>
          L&apos;étude 2024 met en lumière plusieurs tendances qui façonnent
          l&apos;avenir du modèle&nbsp;:
        </p>

        <h3 className={h3Class}>Internationalisation croissante</h3>
        <p>
          Le nombre de search funds lancés en dehors de l&apos;Amérique du Nord
          croît de manière significative. L&apos;Europe (Espagne, France,
          Royaume-Uni, Allemagne), l&apos;Amérique latine (Brésil, Colombie,
          Mexique) et l&apos;Asie contribuent à cette dynamique. L&apos;IESE
          Business School, dans son étude complémentaire, recense plus de
          200&nbsp;search funds internationaux, dont une part croissante en
          Europe francophone.
        </p>

        <h3 className={h3Class}>Professionnalisation de l&apos;écosystème</h3>
        <p>
          L&apos;écosystème se professionnalise avec l&apos;émergence de fonds
          d&apos;investissement spécialisés dans le financement de search funds
          (par opposition aux investisseurs individuels), de structures
          d&apos;accompagnement et de plateformes de mise en relation. Cette
          évolution se retrouve en France avec l&apos;apparition de véhicules
          d&apos;investissement dédiés et la structuration de réseaux
          d&apos;accompagnement.
        </p>

        <h3 className={h3Class}>Diversité des profils de searchers</h3>
        <p>
          Les profils des searchers se diversifient&nbsp;: si le MBA reste
          dominant, on observe une proportion croissante de profils issus de
          l&apos;industrie, de l&apos;ingénierie et de l&apos;entrepreneuriat, ainsi qu&apos;une
          augmentation (encore timide) de la diversité de genre et d&apos;origine.
          En France, les profils d&apos;ingénieurs représentent une part
          significative des searchers, ce qui reflète la spécificité du système
          éducatif français.
        </p>
      </div>

      <h2 className={h2Class}>Implications pour les investisseurs français</h2>
      <div className={bodyClass}>
        <p>
          Pour les investisseurs français et européens, l&apos;étude Stanford 2024
          fournit plusieurs enseignements pratiques&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Diversification du portefeuille&nbsp;:</strong> La
            dispersion des rendements plaide pour un portefeuille diversifié
            de 10 à 15&nbsp;search funds minimum, afin de lisser les
            performances individuelles et de capturer les gains des
            &laquo;&nbsp;meilleurs élèves&nbsp;&raquo;. Pour en savoir plus
            sur les{" "}
            <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
              raisons d&apos;investir dans les search funds
            </Link>, consultez notre guide.
          </li>
          <li>
            <strong>Sélection rigoureuse du searcher&nbsp;:</strong> L&apos;étude
            confirme que la qualité du searcher est le premier facteur de
            succès. Les investisseurs doivent évaluer non seulement les
            compétences analytiques et opérationnelles du candidat, mais
            également sa résilience, son éthique de travail et sa capacité à
            diriger une PME.
          </li>
          <li>
            <strong>Accompagnement actif&nbsp;:</strong> Les search funds dans
            lesquels les investisseurs jouent un rôle de conseil actif
            (participation au board, mentorat, réseau) tendent à mieux
            performer que ceux où les investisseurs sont passifs.
          </li>
          <li>
            <strong>Adaptation au contexte français&nbsp;:</strong> Les données
            Stanford, principalement nord-américaines, doivent être ajustées
            au contexte français&nbsp;: multiples de valorisation
            potentiellement plus bas, rôle du financement bancaire plus
            important, spécificités du droit du travail et de la gouvernance
            d&apos;entreprise.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Stanford et IESE&nbsp;: lecture croisée</h2>
      <div className={bodyClass}>
        <p>
          L&apos;étude Stanford se concentre sur les search funds nord-américains,
          tandis que l&apos;étude IESE couvre le périmètre international. Pour un
          investisseur français, la lecture croisée des deux études est
          essentielle. L&apos;étude IESE met en évidence plusieurs spécificités
          du marché européen&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Les search funds européens ciblent généralement des entreprises de
            taille légèrement inférieure à leurs homologues nord-américains,
            avec des valeurs d&apos;entreprise médianes de l&apos;ordre de 3 à
            10&nbsp;millions d&apos;euros.
          </li>
          <li>
            Le recours au financement bancaire est plus fréquent en Europe,
            où les banques sont plus ouvertes au financement d&apos;acquisitions
            de PME, en particulier en France grâce au rôle de Bpifrance.
          </li>
          <li>
            La durée de détention en Europe tend à être légèrement plus longue,
            en partie en raison de la moindre liquidité du marché des sorties.
          </li>
          <li>
            Les rendements européens, bien que sur un historique plus court,
            s&apos;inscrivent dans une fourchette comparable aux rendements
            nord-américains ajustés de la taille des transactions.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Pour aller plus loin</h2>
      <div className={bodyClass}>
        <p>
          L&apos;étude Stanford 2024 confirme la robustesse et l&apos;attractivité
          du modèle search fund, tant pour les entrepreneurs que pour les
          investisseurs. Pour le marché français, elle fournit un cadre de
          référence précieux qui permet de calibrer les attentes, d&apos;identifier
          les facteurs de succès et d&apos;anticiper les évolutions à venir.
        </p>
        <p>
          Pour approfondir votre compréhension du modèle, nous vous recommandons
          de consulter nos articles sur les{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            rendements des search funds
          </Link>, les{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
            raisons d&apos;investir dans les search funds
          </Link>{" "}
          et notre{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            guide complet pour se lancer
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business &mdash; <em>2024 Search Fund Study&nbsp;: Selected Observations</em>, 2024.
        </li>
        <li>
          IESE Business School &mdash; <em>International Search Fund Study</em>, 2024.
        </li>
        <li>
          HEC Paris, Chaire Entrepreneuriat &mdash; <em>Entrepreneuriat par Acquisition&nbsp;: état des lieux en Europe francophone</em>, 2024.
        </li>
        <li>
          INSEAD &mdash; <em>ETA &amp; Search Funds Research Hub</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Baromètre de la Transmission d&apos;Entreprise</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
