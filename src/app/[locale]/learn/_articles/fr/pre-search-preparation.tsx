import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function PreSearchPreparationFR() {
  return (
    <article>
      <h1 className={h1Class}>
        Préparation au Search&nbsp;: Transition de Carrière vers l&apos;ETA
      </h1>

      <div className={bodyClass}>
        <p>
          La décision de quitter une carrière établie pour se lancer dans
          l&apos;entrepreneuriat par acquisition (ETA) est l&apos;une des décisions
          professionnelles les plus engageantes qu&apos;un cadre puisse prendre. En
          France, cette transition est à la fois facilitée par un écosystème
          académique et institutionnel de premier plan, et complexifiée par
          des considérations réglementaires, financières et culturelles
          spécifiques. Une préparation rigoureuse en amont du search est le
          facteur déterminant du succès &mdash; ou de l&apos;échec &mdash; d&apos;un
          projet ETA.
        </p>
        <p>
          Ce guide s&apos;adresse aux cadres, consultants et professionnels de la
          finance qui envisagent une transition vers l&apos;ETA en France. Il
          couvre les étapes de préparation essentielles&nbsp;: formation,
          construction du réseau, préparation financière personnelle,
          optimisation du timing et mobilisation des dispositifs publics
          d&apos;accompagnement à la transition professionnelle.
        </p>
      </div>

      <h2 className={h2Class}>Pourquoi se préparer avant de chercher</h2>
      <div className={bodyClass}>
        <p>
          Le search &mdash; la phase de recherche active d&apos;une cible
          d&apos;acquisition &mdash; est un processus long, intense et
          émotionnellement éprouvant. Les données disponibles sur les search
          funds en Europe indiquent une durée moyenne de search de 18 à
          24 mois. Pendant cette période, le searcher doit être entièrement
          disponible et financièrement autonome, tout en maintenant un
          niveau d&apos;énergie et de motivation suffisant pour absorber les
          inévitables déceptions (refus d&apos;investisseurs, deals avortés,
          exclusivités perdues).
        </p>
        <p>
          Se lancer dans le search sans préparation adéquate expose à
          plusieurs risques majeurs&nbsp;: épuisement financier prématuré,
          manque de crédibilité auprès des cédants et des investisseurs,
          incapacité à évaluer correctement les opportunités, et pression
          psychologique insoutenable. La phase de préparation &mdash;
          idéalement de 6 à 12 mois avant le début du search &mdash; permet
          de réduire ces risques en structurant le projet sur des bases
          solides.
        </p>
      </div>

      <h2 className={h2Class}>Formation&nbsp;: les programmes académiques en France</h2>
      <div className={bodyClass}>
        <p>
          La France dispose d&apos;un écosystème académique particulièrement riche
          en matière d&apos;ETA et de reprise d&apos;entreprise. Trois grandes écoles
          se distinguent par la qualité et la profondeur de leurs programmes
          dédiés.
        </p>

        <h3 className={h3Class}>HEC Paris</h3>
        <p>
          La Chaire Entrepreneuriat de HEC Paris propose des cours dédiés à
          l&apos;entrepreneuriat par acquisition dans ses programmes MBA et Grande
          École. Le réseau des alumni HEC impliqués dans l&apos;ETA &mdash;
          searchers, investisseurs, conseillers &mdash; est l&apos;un des plus
          actifs d&apos;Europe continentale. HEC organise régulièrement des
          événements, conférences et sessions de mentorat autour de l&apos;ETA.
          Pour un professionnel en reconversion, le programme Executive MBA
          ou les programmes courts de formation continue offrent une
          immersion structurée dans l&apos;écosystème.
        </p>

        <h3 className={h3Class}>INSEAD</h3>
        <p>
          L&apos;INSEAD, basée à Fontainebleau, est un acteur majeur de la
          recherche et de l&apos;enseignement sur l&apos;ETA en Europe. Son Search
          Fund &amp; ETA Club réunit étudiants, alumni et investisseurs autour
          de conférences, études de cas et sessions de mentorat. Le
          caractère profondément international de l&apos;INSEAD (promotions de
          plus de 80 nationalités) en fait un point de convergence unique
          entre les pratiques ETA anglo-saxonnes et les réalités du marché
          européen. Le MBA de l&apos;INSEAD offre un tremplin particulièrement
          efficace pour les searchers qui visent une acquisition
          transfrontalière.
        </p>

        <h3 className={h3Class}>ESSEC Business School</h3>
        <p>
          L&apos;ESSEC a développé des programmes intégrant la dimension ETA dans
          ses cursus d&apos;entrepreneuriat et de reprise d&apos;entreprise. Le campus
          de Cergy-Pontoise accueille des conférences et ateliers dédiés à
          la transmission d&apos;entreprise, en lien avec les réseaux de CCI et
          les organismes d&apos;accompagnement.
        </p>

        <h3 className={h3Class}>Autres formations</h3>
        <p>
          Au-delà des grandes écoles, plusieurs formations méritent
          l&apos;attention&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>CRA (Cédants et Repreneurs d&apos;Affaires)&nbsp;:</strong> Le
            CRA propose un parcours de formation complet pour les repreneurs
            d&apos;entreprise, couvrant la méthodologie de recherche, la
            valorisation, le financement et la négociation. Cette formation,
            dispensée par des praticiens bénévoles, est accessible à un coût
            modéré et bénéficie d&apos;un réseau de repreneurs actifs dans toute
            la France.
          </li>
          <li>
            <strong>BGE (ex-Boutiques de Gestion)&nbsp;:</strong> Le réseau BGE
            propose des parcours d&apos;accompagnement à la création et à la
            reprise d&apos;entreprise, avec un suivi individualisé et des
            formations en gestion, comptabilité et management.
          </li>
          <li>
            <strong>Formations en ligne&nbsp;:</strong> Des plateformes
            proposent des cours en ligne dédiés aux search funds et à la
            reprise d&apos;entreprise. Ces formations permettent de se former à
            son rythme, en complément d&apos;une activité professionnelle.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Construction du réseau</h2>
      <div className={bodyClass}>
        <p>
          Le réseau est le capital le plus précieux d&apos;un searcher. En France,
          la réussite d&apos;un projet ETA dépend étroitement de la capacité du
          searcher à mobiliser un réseau diversifié de contacts&nbsp;:
          investisseurs, cédants potentiels, intermédiaires, banquiers,
          avocats, experts-comptables et autres searchers.
        </p>

        <h3 className={h3Class}>Les cercles de réseau à construire</h3>
        <ul className={ulClass}>
          <li>
            <strong>Investisseurs ETA&nbsp;:</strong> Identifiez et rencontrez
            les{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              investisseurs actifs
            </Link>{" "}
            dans l&apos;écosystème ETA français et européen. Participez aux
            conférences ETA (IESE Search Fund Conference, HEC Entrepreneuriat,
            INSEAD ETA Club), aux événements du réseau des search funds
            européens et aux rencontres informelles organisées par les
            communautés de searchers.
          </li>
          <li>
            <strong>Intermédiaires M&amp;A&nbsp;:</strong> Les cabinets de
            fusion-acquisition, les experts-comptables disposant d&apos;une
            pratique transmission et les CCI sont des sources d&apos;opportunités
            indispensables. Construisez ces relations bien avant le début du
            search pour être identifié comme un repreneur sérieux lorsque
            des opportunités se présenteront.
          </li>
          <li>
            <strong>Communauté des searchers&nbsp;:</strong> Les searchers en
            cours de search ou ayant récemment acquis une entreprise sont
            une source inestimable de conseils pratiques, de retours
            d&apos;expérience et de soutien moral. En France, des groupes de
            searchers se réunissent régulièrement, en présentiel ou en
            ligne, pour partager leurs expériences.
          </li>
          <li>
            <strong>Professionnels du conseil&nbsp;:</strong> Avocats
            d&apos;affaires spécialisés en transmission, banquiers d&apos;affaires,
            notaires &mdash; ces professionnels sont des prescripteurs et des
            facilitateurs indispensables tout au long du processus.
          </li>
        </ul>

        <h3 className={h3Class}>Comment construire son réseau</h3>
        <p>
          La construction du réseau exige du temps et de la méthode.
          Assistez systématiquement aux conférences et événements liés à
          la reprise d&apos;entreprise. Sollicitez des entretiens informationnels
          avec des searchers et des investisseurs expérimentés. Participez
          aux réseaux d&apos;alumni de votre école. Publiez du contenu
          (articles, réflexions) sur LinkedIn pour vous positionner comme
          un acteur sérieux de l&apos;écosystème. Et surtout, offrez de la
          valeur avant d&apos;en demander&nbsp;: partagez des informations,
          mettez en relation vos contacts, aidez les autres searchers.
        </p>
      </div>

      <h2 className={h2Class}>Préparation financière personnelle</h2>
      <div className={bodyClass}>
        <p>
          La dimension financière de la préparation est souvent sous-estimée
          par les futurs searchers. Le search implique une période prolongée
          sans revenu salarié (sauf dans le cas d&apos;un search fund traditionnel
          financé par des investisseurs), combinée à des dépenses
          significatives (déplacements, abonnements à des bases de données,
          conseil juridique, événements de networking).
        </p>

        <h3 className={h3Class}>Constituer un matelas de sécurité</h3>
        <p>
          Avant de quitter votre emploi, constituez une épargne de précaution
          couvrant au minimum 18 à 24 mois de dépenses personnelles et
          familiales (loyer ou crédit immobilier, charges courantes,
          assurance santé, dépenses des enfants). Ce matelas doit être
          distinct de l&apos;apport personnel que vous investirez dans
          l&apos;acquisition. Sous-estimer la durée du search est l&apos;erreur la
          plus courante des searchers débutants &mdash; et celle qui a les
          conséquences les plus lourdes sur la qualité de la décision
          d&apos;investissement (pression à acheter n&apos;importe quelle cible pour
          ne pas &laquo;&nbsp;perdre&nbsp;&raquo; son temps).
        </p>

        <h3 className={h3Class}>Structurer l&apos;apport personnel</h3>
        <p>
          Dans le contexte français, le repreneur doit généralement disposer
          d&apos;un apport personnel représentant 20 à 30&nbsp;% du prix de
          cession (le solde étant financé par de la dette bancaire, des
          prêts d&apos;honneur et éventuellement des investisseurs). Cet apport
          peut provenir de l&apos;épargne personnelle, de la déblocage anticipé
          du Plan d&apos;Épargne Entreprise (PEE) pour création ou reprise
          d&apos;entreprise (cas prévu par la réglementation), ou de prêts
          familiaux. La planification de cet apport doit être intégrée au
          calendrier de préparation.
        </p>

        <h3 className={h3Class}>Protection sociale en période de search</h3>
        <p>
          La question de la couverture sociale pendant la période de search
          mérite une attention particulière. En France, plusieurs options
          existent&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Maintien des droits à l&apos;Assurance Maladie&nbsp;:</strong> Un
            salarié démissionnaire conserve ses droits à l&apos;Assurance Maladie
            pendant une période de 12 mois après la cessation d&apos;activité
            (Protection Universelle Maladie). Au-delà, il est recommandé
            de souscrire une complémentaire santé individuelle.
          </li>
          <li>
            <strong>Portage salarial&nbsp;:</strong> Pour les searchers qui
            réalisent des missions de conseil en parallèle de leur search,
            le portage salarial offre une solution de couverture sociale
            complète (Sécurité sociale, retraite, chômage) avec une
            flexibilité appréciable.
          </li>
          <li>
            <strong>Auto-entrepreneuriat&nbsp;:</strong> La création d&apos;une
            micro-entreprise permet de bénéficier d&apos;une couverture sociale
            minimale et de facturer d&apos;éventuelles prestations de conseil.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Mobiliser les dispositifs publics</h2>
      <div className={bodyClass}>
        <p>
          La France dispose d&apos;un arsenal de dispositifs publics
          d&apos;accompagnement à la transition professionnelle et à la reprise
          d&apos;entreprise, que le futur searcher doit connaître et mobiliser.
        </p>

        <h3 className={h3Class}>France Travail (ex-Pôle Emploi) et l&apos;ARE</h3>
        <p>
          L&apos;Allocation d&apos;aide au Retour à l&apos;Emploi (ARE) peut constituer un
          filet de sécurité financier pendant la période de search, sous
          réserve d&apos;y être éligible. Depuis la réforme de l&apos;assurance
          chômage, les conditions d&apos;accès à l&apos;ARE se sont durcies, mais un
          salarié ayant travaillé au moins six mois sur les 24 derniers mois
          peut prétendre à l&apos;allocation. Il est important de noter que la
          démission ne donne pas droit à l&apos;ARE, sauf dans le cas d&apos;une
          démission pour projet de création ou de reprise d&apos;entreprise
          (dispositif &laquo;&nbsp;démission-reconversion&nbsp;&raquo;), soumis à
          validation par une commission paritaire interprofessionnelle
          régionale.
        </p>
        <p>
          Deux dispositifs sont particulièrement intéressants pour les
          searchers&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>ARCE (Aide à la Reprise ou à la Création
            d&apos;Entreprise)&nbsp;:</strong> Ce dispositif permet de percevoir
            60&nbsp;% du reliquat de ses droits à l&apos;ARE sous forme de capital
            (versé en deux fois&nbsp;: à la création de l&apos;entreprise puis six
            mois après). L&apos;ARCE peut constituer tout ou partie de
            l&apos;apport personnel du repreneur.
          </li>
          <li>
            <strong>ACRE (Aide aux Créateurs et Repreneurs
            d&apos;Entreprise)&nbsp;:</strong> L&apos;ACRE offre une exonération
            partielle de charges sociales pendant les 12 premiers mois
            d&apos;activité du repreneur, ce qui réduit le coût de la rémunération
            du dirigeant dans les premiers mois suivant l&apos;acquisition.
          </li>
        </ul>

        <h3 className={h3Class}>Formation continue et CPF</h3>
        <p>
          Le Compte Personnel de Formation (CPF) peut être mobilisé pour
          financer des formations liées à la reprise d&apos;entreprise&nbsp;:
          formation à la gestion d&apos;entreprise, formation sectorielle,
          formation au management. Les formations référencées sur la
          plateforme Mon Compte Formation et certifiantes (inscrites au RNCP
          ou au RS) sont éligibles au CPF. Le bilan de compétences, éligible
          au CPF, peut également constituer une étape utile de la préparation
          pour formaliser ses compétences et identifier ses axes de
          développement.
        </p>

        <h3 className={h3Class}>Conseil en Évolution Professionnelle (CEP)</h3>
        <p>
          Le CEP est un service gratuit d&apos;accompagnement personnalisé,
          accessible à tout actif (salarié, demandeur d&apos;emploi, indépendant).
          Un conseiller CEP peut aider le futur searcher à structurer son
          projet de transition, à identifier les formations et financements
          disponibles, et à élaborer un plan d&apos;action. Ce service est
          délivré par des opérateurs agréés (France Travail pour les
          demandeurs d&apos;emploi, des opérateurs régionaux pour les salariés).
        </p>
      </div>

      <h2 className={h2Class}>Optimiser le timing de la transition</h2>
      <div className={bodyClass}>
        <p>
          Le timing de la transition est un paramètre souvent négligé.
          Plusieurs facteurs doivent être pris en compte&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cycle de vie professionnelle&nbsp;:</strong> La fenêtre
            optimale pour une transition vers l&apos;ETA se situe généralement
            entre 30 et 45 ans, lorsque le professionnel dispose d&apos;une
            expérience significative (5 à 15 ans), d&apos;un réseau établi et
            d&apos;une énergie suffisante pour affronter la durée du search et les
            premières années de direction.
          </li>
          <li>
            <strong>Situation familiale&nbsp;:</strong> Le search impose une
            charge de travail et un stress considérables. L&apos;adhésion du
            conjoint ou partenaire est un prérequis indispensable. Discutez
            ouvertement des implications financières, temporelles et
            émotionnelles du projet.
          </li>
          <li>
            <strong>Saisonnalité du marché&nbsp;:</strong> Le marché de la
            transmission en France connaît des cycles saisonniers. Les mises
            en vente sont plus nombreuses au premier semestre, les closings
            se concentrent souvent en fin d&apos;année (pour des raisons
            fiscales). Planifiez le début de votre search en tenant compte
            de ces rythmes.
          </li>
          <li>
            <strong>Conditions de marché&nbsp;:</strong> Les multiples de
            valorisation, les conditions de financement bancaire et
            l&apos;appétit des investisseurs fluctuent avec les cycles
            économiques. Informez-vous sur les conditions de marché courantes
            avant de vous lancer.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>La dimension psychologique de la préparation</h2>
      <div className={bodyClass}>
        <p>
          La transition vers l&apos;ETA est un changement identitaire profond.
          Passer du statut de salarié dans une grande organisation (avec ses
          repères, sa hiérarchie, ses collègues) à celui de searcher
          solitaire, puis de dirigeant de PME, implique une transformation
          personnelle que la préparation doit anticiper. Consultez notre
          guide sur la{" "}
          <Link href="/learn/searcher-psychology" className="text-apple-accent hover:underline">
            psychologie du searcher
          </Link>{" "}
          pour approfondir cet aspect fondamental.
        </p>
        <p>
          Pendant la phase de préparation, travaillez votre résilience&nbsp;:
          identifiez vos sources de motivation profondes (au-delà de la
          rémunération), développez votre tolérance à l&apos;incertitude,
          construisez un cercle de soutien (mentor, coach, groupe de pairs).
          Ces ressources psychologiques seront vos atouts les plus précieux
          pendant les mois difficiles du search.
        </p>
      </div>

      <h2 className={h2Class}>Pour aller plus loin</h2>
      <div className={bodyClass}>
        <p>
          La préparation est un investissement en temps qui se rembourse
          largement pendant le search et au-delà. Pour compléter votre
          préparation, consultez nos guides dédiés&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
              Qu&apos;est-ce qu&apos;un Search Fund&nbsp;? Guide Complet
            </Link>
          </li>
          <li>
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              Comment Trouver des Investisseurs pour votre Search Fund
            </Link>
          </li>
          <li>
            <Link href="/learn/searcher-psychology" className="text-apple-accent hover:underline">
              Psychologie du Searcher&nbsp;: Résilience et Mindset
            </Link>
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          France Travail &mdash; <em>Allocation d&apos;aide au Retour à l&apos;Emploi (ARE)&nbsp;: conditions et montants</em>, 2024.
        </li>
        <li>
          Service-Public.fr &mdash; <em>Démission-reconversion&nbsp;: conditions et procédure</em>, 2024.
        </li>
        <li>
          CRA (Cédants et Repreneurs d&apos;Affaires) &mdash; <em>Formation du Repreneur&nbsp;: programme et calendrier</em>, 2024.
        </li>
        <li>
          HEC Paris, Chaire Entrepreneuriat &mdash; <em>Programmes dédiés à l&apos;entrepreneuriat par acquisition</em>, 2024.
        </li>
        <li>
          INSEAD &mdash; <em>Search Fund &amp; ETA Club&nbsp;: activités et ressources</em>, 2024.
        </li>
        <li>
          Mon Compte Formation &mdash; <em>Formations éligibles au CPF pour la reprise d&apos;entreprise</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
