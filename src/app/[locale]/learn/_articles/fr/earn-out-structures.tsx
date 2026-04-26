import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function EarnOutStructuresFR() {
  return (
    <article>
      <h1 className={h1Class}>
        Complément de Prix (Earn-Out) en Droit Français
      </h1>

      <div className={bodyClass}>
        <p>
          Le complément de prix, couramment désigné par son terme
          anglo-saxon &laquo;&nbsp;earn-out&nbsp;&raquo;, est un
          mécanisme contractuel par lequel une fraction du prix de cession
          d&apos;une entreprise est conditionnée à la réalisation d&apos;objectifs
          de performance définis à l&apos;avance. Cet outil, devenu courant
          dans les opérations de cession de PME en France, permet de résoudre
          le désaccord le plus fréquent en matière de transmission&nbsp;: la
          divergence de valorisation entre cédant et repreneur. Le cédant
          estime que son entreprise vaut davantage en raison de son potentiel
          de croissance&nbsp;; le repreneur ne veut payer que sur la base de
          la performance démontrée. L&apos;earn-out laisse l&apos;entreprise
          elle-même trancher le débat.
        </p>
        <p>
          Cet article traite de l&apos;earn-out dans le cadre spécifique du
          droit français&nbsp;: régime juridique, traitement fiscal,
          rédaction des clauses, choix des métriques, articulation avec le
          crédit vendeur et enseignements de la jurisprudence. Il complète
          nos guides sur le{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            financement d&apos;acquisition
          </Link>{" "}
          et le{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            crédit vendeur
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Quand l&apos;earn-out est-il pertinent&nbsp;?</h2>
      <div className={bodyClass}>
        <p>
          L&apos;earn-out n&apos;est pas adapté à toutes les transactions.
          Son utilisation se justifie dans des circonstances précises&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Désaccord sur la valorisation&nbsp;:</strong> Le cédant et
            le repreneur ont des visions divergentes de la valeur de
            l&apos;entreprise. L&apos;earn-out permet de fixer un prix de
            base correspondant à la valorisation prudente du repreneur, avec
            un complément conditionné à l&apos;atteinte de la performance
            anticipée par le cédant.
          </li>
          <li>
            <strong>Projets en cours non encore matérialisés&nbsp;:</strong>{" "}
            L&apos;entreprise a des contrats signés ou des projets en
            développement dont le chiffre d&apos;affaires n&apos;est pas encore
            réalisé. L&apos;earn-out permet de payer ces opportunités si
            elles se concrétisent.
          </li>
          <li>
            <strong>Dépendance au cédant&nbsp;:</strong> Si le chiffre
            d&apos;affaires repose en partie sur les relations personnelles
            du cédant, l&apos;earn-out l&apos;incite à rester engagé pendant
            la transition pour assurer le maintien de l&apos;activité.
          </li>
          <li>
            <strong>Complément de financement&nbsp;:</strong> L&apos;earn-out
            peut compléter un montage financier serré en différant une partie
            du prix et en le conditionnant à la capacité de l&apos;entreprise
            à générer les flux nécessaires à son paiement.
          </li>
        </ul>
        <p>
          En revanche, l&apos;earn-out est généralement inadapté lorsque le
          cédant souhaite une rupture nette après la cession, lorsque le
          repreneur prévoit des restructurations significatives qui
          fausseraient les métriques de performance, ou lorsque
          l&apos;entreprise a une performance stable et prévisible qui ne
          justifie pas de mécanisme d&apos;ajustement.
        </p>
      </div>

      <h2 className={h2Class}>Régime juridique en droit français</h2>
      <div className={bodyClass}>
        <p>
          Le droit français ne comporte pas de régime spécifique de
          l&apos;earn-out. Le complément de prix est régi par le droit
          commun des contrats (Code civil, articles 1163 et suivants issus
          de la réforme du 1er octobre 2016) et par la jurisprudence. Deux
          exigences fondamentales encadrent sa validité&nbsp;:
        </p>

        <h3 className={h3Class}>Déterminabilité du prix</h3>
        <p>
          L&apos;article 1163 du Code civil impose que les obligations du
          contrat aient un objet déterminé ou déterminable. Le complément
          de prix doit être calculable sur la base de critères objectifs
          définis dans le contrat, sans que la détermination dépende de la
          seule volonté d&apos;une partie. Un earn-out dont le calcul
          reposerait sur des critères subjectifs ou manipulables par
          l&apos;acquéreur serait susceptible d&apos;être contesté devant les
          tribunaux.
        </p>

        <h3 className={h3Class}>Obligation de bonne foi</h3>
        <p>
          L&apos;article 1104 du Code civil pose l&apos;obligation de bonne
          foi dans l&apos;exécution du contrat. En matière d&apos;earn-out,
          cette obligation revêt une importance particulière&nbsp;:
          l&apos;acquéreur, qui contrôle l&apos;entreprise après la cession,
          ne doit pas prendre de décisions de gestion ayant pour objet ou
          pour effet de réduire artificiellement la performance de
          l&apos;entreprise et donc le montant de l&apos;earn-out. La
          jurisprudence française a sanctionné à plusieurs reprises des
          acquéreurs ayant adopté un comportement dolosif visant à éluder
          le paiement du complément de prix.
        </p>

        <h3 className={h3Class}>Jurisprudence française notable</h3>
        <p>
          La Cour de cassation et les cours d&apos;appel ont construit une
          jurisprudence fournie en matière d&apos;earn-out, dont il convient
          de retenir les principaux enseignements&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            L&apos;acquéreur a l&apos;obligation de gérer l&apos;entreprise
            de manière loyale et de ne pas compromettre les conditions de
            réalisation de l&apos;earn-out.
          </li>
          <li>
            Le cédant ne peut pas revendiquer un droit de regard sur la
            gestion de l&apos;entreprise au-delà de ce qui est prévu au
            contrat.
          </li>
          <li>
            En cas de litige, les tribunaux évaluent si les décisions de
            gestion prises par l&apos;acquéreur étaient économiquement
            justifiées ou visaient à réduire artificiellement l&apos;earn-out.
          </li>
          <li>
            La clause d&apos;earn-out doit être suffisamment précise dans
            la définition des métriques et de leur mode de calcul pour
            être exécutoire.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Traitement fiscal de l&apos;earn-out</h2>
      <div className={bodyClass}>
        <p>
          Le traitement fiscal du complément de prix en France est un sujet
          technique qui a des implications significatives pour le cédant.
          La qualification fiscale de l&apos;earn-out dépend de sa nature
          et de ses modalités.
        </p>

        <h3 className={h3Class}>Plus-value de cession</h3>
        <p>
          Lorsque l&apos;earn-out est qualifié de complément de prix de
          cession des titres, il est imposé dans la catégorie des plus-values
          mobilières (article 150-0 A du CGI pour les personnes physiques).
          Le montant de l&apos;earn-out s&apos;ajoute au prix de cession
          initial pour le calcul de la plus-value globale. La plus-value
          est imposée au prélèvement forfaitaire unique (PFU) de
          30&nbsp;% (12,8&nbsp;% d&apos;impôt sur le revenu + 17,2&nbsp;% de
          prélèvements sociaux), ou sur option au barème progressif de
          l&apos;impôt sur le revenu avec abattement pour durée de détention
          si les titres ont été acquis avant le 1er janvier 2018.
        </p>
        <p>
          Le fait générateur de l&apos;imposition est la date à laquelle le
          complément de prix devient exigible (c&apos;est-à-dire lorsque les
          conditions de réalisation sont remplies et que le montant est
          déterminé), et non la date de la cession initiale. Cette temporalité
          a des conséquences pratiques&nbsp;: le cédant peut être imposé sur
          des exercices fiscaux différents selon les échéances de l&apos;earn-out.
        </p>

        <h3 className={h3Class}>Distinction earn-out vs rémunération</h3>
        <p>
          Lorsque le cédant reste dans l&apos;entreprise après la cession
          (clause d&apos;accompagnement, mandat de dirigeant), la
          requalification du complément de prix en rémunération est un
          risque fiscal. Si l&apos;administration fiscale considère que
          l&apos;earn-out rémunère en réalité les services rendus par le
          cédant post-cession (et non la valeur des titres cédés), le
          complément de prix serait imposé comme un salaire ou un revenu
          d&apos;activité, avec des conséquences sociales et fiscales
          significativement plus lourdes.
        </p>
        <p>
          Pour minimiser ce risque de requalification, il est recommandé
          de&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Distinguer clairement le complément de prix (lié à la performance
            de l&apos;entreprise) de la rémunération du cédant pendant la
            période d&apos;accompagnement.
          </li>
          <li>
            Fonder le calcul de l&apos;earn-out sur des métriques objectives
            de performance de l&apos;entreprise (CA, EBITDA), et non sur la
            contribution personnelle du cédant.
          </li>
          <li>
            Éviter que le paiement de l&apos;earn-out soit conditionné à la
            présence du cédant dans l&apos;entreprise.
          </li>
        </ul>

        <h3 className={h3Class}>Impôt sur les sociétés&nbsp;: déductibilité côté acquéreur</h3>
        <p>
          Pour l&apos;acquéreur, le complément de prix constitue un élément
          du coût d&apos;acquisition des titres. Il n&apos;est pas déductible
          du résultat imposable de l&apos;entreprise acquise (il s&apos;agit
          d&apos;un prix d&apos;achat de titres, pas d&apos;une charge
          d&apos;exploitation). En revanche, il augmente le prix de revient
          fiscal des titres, ce qui réduira la plus-value en cas de revente
          ultérieure.
        </p>
      </div>

      <h2 className={h2Class}>Rédaction de la clause d&apos;earn-out&nbsp;: bonnes pratiques</h2>
      <div className={bodyClass}>
        <p>
          La qualité de rédaction de la clause d&apos;earn-out est
          déterminante pour éviter les litiges post-cession. Les points
          essentiels à traiter sont les suivants&nbsp;:
        </p>

        <h3 className={h3Class}>Choix de la métrique</h3>
        <p>
          Le choix de la métrique est la décision la plus structurante. Les
          principales options et leurs implications&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Chiffre d&apos;affaires&nbsp;:</strong> Métrique simple,
            difficilement manipulable par l&apos;acquéreur (il est peu probable
            qu&apos;un acquéreur réduise volontairement le CA). En revanche,
            elle ne tient pas compte de la rentabilité&nbsp;: l&apos;acquéreur
            pourrait être tenu de payer un earn-out élevé sur un CA croissant
            mais non rentable.
          </li>
          <li>
            <strong>EBITDA&nbsp;:</strong> Métrique plus fine, reflétant la
            rentabilité opérationnelle. Mais l&apos;EBITDA est plus facilement
            influençable par les décisions de gestion de l&apos;acquéreur
            (augmentation des charges, investissements accélérés, recrutements).
            La clause doit prévoir des règles de calcul précises et des
            exclusions.
          </li>
          <li>
            <strong>Résultat net&nbsp;:</strong> Fortement déconseillé car
            trop facilement manipulable par les décisions comptables et
            fiscales.
          </li>
          <li>
            <strong>Métriques spécifiques&nbsp;:</strong> Nombre de clients,
            taux de rétention, volume d&apos;affaires d&apos;un segment
            spécifique. Adaptées lorsque l&apos;earn-out vise un objectif
            précis (maintien d&apos;un client clé, développement d&apos;une
            activité nouvelle).
          </li>
        </ul>

        <h3 className={h3Class}>Période de mesure</h3>
        <p>
          La durée de la période d&apos;earn-out doit être suffisante pour
          permettre une évaluation significative de la performance, tout en
          limitant la durée d&apos;incertitude pour les deux parties. En
          France, les périodes d&apos;earn-out se situent typiquement entre
          douze et trente-six mois après le closing. Au-delà de trois ans,
          l&apos;earn-out devient difficile à gérer&nbsp;: l&apos;influence du
          cédant sur la performance s&apos;estompe, et les décisions de
          l&apos;acquéreur modifient profondément l&apos;entreprise.
        </p>

        <h3 className={h3Class}>Mécanisme de calcul et vérification</h3>
        <p>
          La clause doit prévoir&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Les règles comptables applicables au calcul de la métrique
            (référentiel PCG, méthodes d&apos;amortissement, traitement des
            charges exceptionnelles).
          </li>
          <li>
            Le droit du cédant d&apos;accéder aux comptes et aux documents
            justificatifs pendant la période d&apos;earn-out.
          </li>
          <li>
            Un mécanisme de vérification par un tiers (expert-comptable
            indépendant) en cas de désaccord sur le calcul.
          </li>
          <li>
            Les délais de communication des résultats et de paiement.
          </li>
          <li>
            Les conséquences d&apos;un changement de périmètre (acquisition
            d&apos;une filiale, cession d&apos;activité) sur le calcul de
            l&apos;earn-out.
          </li>
        </ul>

        <h3 className={h3Class}>Clauses de protection du cédant</h3>
        <p>
          Pour protéger le cédant contre les décisions de gestion de
          l&apos;acquéreur qui pourraient artificiellenent réduire
          l&apos;earn-out, la clause peut prévoir&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            L&apos;obligation pour l&apos;acquéreur de maintenir une
            exploitation normale de l&apos;entreprise (pas de réduction
            volontaire d&apos;activité, pas de transfert de chiffre
            d&apos;affaires vers une autre entité).
          </li>
          <li>
            L&apos;interdiction de certaines opérations sans le consentement
            du cédant (fusion, changement d&apos;activité, cession d&apos;actifs
            significatifs).
          </li>
          <li>
            Un plancher (floor) garantissant un paiement minimum en toute
            hypothèse.
          </li>
          <li>
            Un mécanisme d&apos;accélération en cas de revente de
            l&apos;entreprise par l&apos;acquéreur avant la fin de la période
            d&apos;earn-out.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Earn-out versus crédit vendeur&nbsp;: complémentarité et distinction</h2>
      <div className={bodyClass}>
        <p>
          L&apos;earn-out et le{" "}
          <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
            crédit vendeur
          </Link>{" "}
          sont deux formes de paiement différé, mais leur nature est
          fondamentalement différente&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Le crédit vendeur&nbsp;:</strong> C&apos;est un prêt
            consenti par le cédant à l&apos;acquéreur. Le montant est fixe et
            déterminé à la date de cession. Le remboursement est certain
            (sauf défaillance de l&apos;acquéreur). Le risque du cédant est un
            risque de crédit (non-paiement), pas un risque de performance.
          </li>
          <li>
            <strong>L&apos;earn-out&nbsp;:</strong> C&apos;est un complément
            de prix conditionnel. Le montant dépend de la performance future.
            Le paiement est incertain&nbsp;: si les objectifs ne sont pas
            atteints, le cédant ne reçoit rien (ou un montant réduit). Le
            risque du cédant est un risque de performance.
          </li>
        </ul>
        <p>
          Dans la pratique française, il est courant de combiner les deux
          mécanismes dans un même montage&nbsp;: un prix de base payé au
          closing, un crédit vendeur à taux fixe remboursable sur trois ans,
          et un earn-out conditionné à la performance sur les deux premières
          années. Cette combinaison permet de satisfaire le cédant (prix
          global potentiellement élevé) tout en protégeant le repreneur
          (paiement différé et conditionné).
        </p>
        <p>
          L&apos;articulation entre earn-out et crédit vendeur doit être
          soigneusement définie dans le protocole de cession, notamment
          l&apos;ordre de priorité des paiements en cas de difficulté de
          trésorerie de l&apos;entreprise acquise.
        </p>
      </div>

      <h2 className={h2Class}>Gestion de l&apos;earn-out post-closing</h2>
      <div className={bodyClass}>
        <p>
          La période d&apos;earn-out est souvent une source de tension entre
          cédant et acquéreur. Quelques bonnes pratiques permettent de
          limiter les conflits&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Communication régulière&nbsp;:</strong> Fournir au cédant
            des reportings périodiques (mensuels ou trimestriels) sur les
            métriques de l&apos;earn-out, même si le contrat n&apos;y oblige
            pas formellement. La transparence réduit la méfiance.
          </li>
          <li>
            <strong>Séparation des responsabilités&nbsp;:</strong> Si le
            cédant est encore dans l&apos;entreprise pendant la période
            d&apos;earn-out, clarifier son rôle et ses prérogatives pour
            éviter les interférences avec la gestion courante.
          </li>
          <li>
            <strong>Anticipation des litiges&nbsp;:</strong> Prévoir dans le
            contrat un mécanisme de résolution des différends rapide et
            efficace&nbsp;: expertise indépendante, médiation, arbitrage.
            Les procédures judiciaires classiques sont longues et coûteuses.
          </li>
          <li>
            <strong>Documentation des décisions&nbsp;:</strong>{" "}
            L&apos;acquéreur a intérêt à documenter les raisons économiques
            de ses décisions de gestion pendant la période d&apos;earn-out,
            en anticipation d&apos;une éventuelle contestation du cédant.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Pour aller plus loin</h2>
      <div className={bodyClass}>
        <p>
          Le complément de prix est un outil puissant mais exigeant en termes
          de rédaction et de gestion. Pour approfondir les sujets connexes,
          consultez nos autres guides&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              Financer l&apos;Acquisition d&apos;une PME en France
            </Link>
          </li>
          <li>
            <Link href="/learn/seller-financing" className="text-apple-accent hover:underline">
              Crédit Vendeur&nbsp;: Structures et Négociation en France
            </Link>
          </li>
          <li>
            <Link href="/learn/negotiation-tactics" className="text-apple-accent hover:underline">
              Techniques de Négociation pour l&apos;Acquisition de PME
            </Link>
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Code civil, Articles 1104, 1163 et suivants (réforme du droit des obligations du 1er octobre 2016).
        </li>
        <li>
          Code général des impôts, Article 150-0 A (plus-values mobilières des particuliers).
        </li>
        <li>
          Bulletin Officiel des Finances Publiques (BOFiP) &mdash; <em>Régime fiscal des compléments de prix de cession de titres</em>, 2024.
        </li>
        <li>
          Ordre des Avocats &mdash; <em>Les Clauses de Complément de Prix dans les Cessions de PME&nbsp;: État de la Jurisprudence</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Structurer le Prix de Cession&nbsp;: Guide Pratique pour Cédants et Repreneurs</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
