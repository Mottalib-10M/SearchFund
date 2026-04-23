import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function QualityOfEarningsFR() {
  return (
    <article>
      <h1 className={h1Class}>
        Quality of Earnings&nbsp;: Audit QoE à la Française
      </h1>

      <div className={bodyClass}>
        <p>
          Le rapport de Quality of Earnings (QoE) est l&apos;outil d&apos;analyse
          financière le plus important dans le processus de{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligence
          </Link>{" "}
          d&apos;une acquisition de PME. Il consiste en un audit approfondi des
          résultats financiers historiques de l&apos;entreprise cible, visant à
          déterminer le niveau réel et récurrent de sa rentabilité. En France,
          cet exercice présente des spécificités liées au Plan Comptable
          Général (PCG), aux normes comptables françaises, aux pratiques
          fiscales des PME et aux caractéristiques structurelles du tissu
          entrepreneurial français.
        </p>
        <p>
          Ce guide détaille la méthodologie d&apos;un audit QoE adapté au
          contexte français, les principaux retraitements à opérer, les red
          flags spécifiques aux PME françaises et les bonnes pratiques pour
          obtenir un EBITDA normalisé fiable et défendable auprès des
          banquiers et investisseurs. Pour le contexte global de la
          valorisation, consultez notre guide sur la{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valorisation d&apos;entreprise
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Qu&apos;est-ce qu&apos;un audit QoE&nbsp;?</h2>
      <div className={bodyClass}>
        <p>
          Le Quality of Earnings est un examen critique des comptes de
          résultat et du bilan d&apos;une entreprise sur trois à cinq exercices,
          dont l&apos;objectif est de répondre à une question fondamentale&nbsp;:
          quel est le niveau de rentabilité normalisé, récurrent et
          reproductible de cette entreprise, une fois les éléments
          exceptionnels, non récurrents et non représentatifs éliminés ou
          ajustés&nbsp;?
        </p>
        <p>
          Contrairement à un audit légal (commissariat aux comptes), qui
          vise à vérifier la conformité des comptes aux normes comptables, le
          QoE adopte une perspective économique&nbsp;: il s&apos;intéresse à la
          substance économique des opérations, pas seulement à leur traduction
          comptable. Un compte de résultat peut être parfaitement conforme au
          PCG tout en donnant une image trompeuse de la rentabilité réelle de
          l&apos;entreprise.
        </p>

        <h3 className={h3Class}>Différence entre QoE et audit légal</h3>
        <ul className={ulClass}>
          <li>
            <strong>Audit légal (CAC)&nbsp;:</strong> Vérification de la
            conformité des comptes au PCG et aux normes ANC. Émission d&apos;une
            opinion sur l&apos;image fidèle. Travail rétrospectif.
          </li>
          <li>
            <strong>Quality of Earnings&nbsp;:</strong> Analyse économique de
            la rentabilité normalisée. Retraitements des éléments non
            récurrents. Perspective prospective&nbsp;: quel EBITDA
            l&apos;acquéreur peut-il raisonnablement attendre&nbsp;?
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Le cadre comptable français&nbsp;: spécificités du PCG</h2>
      <div className={bodyClass}>
        <p>
          Le Plan Comptable Général (PCG), régi par le règlement ANC
          n°&nbsp;2014-03, est le référentiel comptable applicable aux PME
          françaises. Il présente plusieurs caractéristiques qui influencent
          directement l&apos;analyse QoE&nbsp;:
        </p>

        <h3 className={h3Class}>Structure du compte de résultat</h3>
        <p>
          Le PCG structure le compte de résultat en trois niveaux&nbsp;: le
          résultat d&apos;exploitation, le résultat financier et le résultat
          exceptionnel. Cette distinction est fondamentale pour le QoE car le
          résultat exceptionnel (compte 67x en charges, 77x en produits)
          isole théoriquement les éléments non récurrents. En pratique,
          toutefois, la frontière entre charges d&apos;exploitation et charges
          exceptionnelles est souvent poreuse dans les PME&nbsp;: certains
          dirigeants classent en exceptionnel des charges qui sont en réalité
          récurrentes (provisions pour litiges récurrents, dépréciations de
          stocks régulières), et inversement.
        </p>

        <h3 className={h3Class}>Absence d&apos;EBITDA normé</h3>
        <p>
          Le PCG ne connaît pas la notion d&apos;EBITDA (Earnings Before
          Interest, Taxes, Depreciation and Amortization). Le solde
          intermédiaire de gestion le plus proche est l&apos;Excédent Brut
          d&apos;Exploitation (EBE), qui diffère de l&apos;EBITDA sur plusieurs
          points&nbsp;: l&apos;EBE exclut certains éléments que l&apos;EBITDA
          intègre (subventions d&apos;exploitation, par exemple) et vice versa.
          L&apos;analyste QoE doit donc construire un pont entre l&apos;EBE du
          PCG et l&apos;EBITDA normalisé attendu par les investisseurs et les
          banques.
        </p>

        <h3 className={h3Class}>Comptes sociaux vs comptes consolidés</h3>
        <p>
          La grande majorité des PME françaises ne publient que des comptes
          sociaux (comptes individuels de chaque entité juridique). Les
          comptes consolidés ne sont obligatoires qu&apos;au-delà de certains
          seuils (total de bilan, chiffre d&apos;affaires, effectif). Pour les
          groupes de PME avec des filiales, l&apos;analyste QoE doit
          reconstituer une vision consolidée en éliminant les flux
          intra-groupe (facturations de management fees, loyers entre
          sociétés liées, prêts internes).
        </p>
      </div>

      <h2 className={h2Class}>Les retraitements clés du QoE en France</h2>
      <div className={bodyClass}>
        <p>
          Les retraitements constituent le cœur du travail QoE. Ils visent à
          transformer le résultat comptable brut en un EBITDA normalisé
          reflétant la capacité bénéficiaire réelle et récurrente de
          l&apos;entreprise. Voici les principaux retraitements spécifiques au
          contexte français.
        </p>

        <h3 className={h3Class}>Rémunération du dirigeant</h3>
        <p>
          C&apos;est le retraitement le plus fréquent et souvent le plus
          significatif dans les PME françaises. Le dirigeant-actionnaire
          d&apos;une PME détermine librement sa rémunération, qui peut être
          supérieure ou inférieure à la valeur de marché d&apos;un dirigeant
          salarié exerçant les mêmes fonctions. Le QoE doit normaliser cette
          rémunération en la remplaçant par un salaire de marché comparable,
          charges sociales patronales incluses.
        </p>
        <p>
          En France, la complexité est accentuée par la multiplicité des
          formes de rémunération du dirigeant&nbsp;: salaire brut, dividendes,
          avantages en nature (véhicule de fonction, logement, frais de
          réception), rémunération du conjoint collaborateur, cotisations
          retraite Madelin ou article 83. L&apos;analyste QoE doit reconstituer
          la rémunération totale du dirigeant en incluant toutes ces
          composantes, puis la comparer à un benchmark de marché.
        </p>

        <h3 className={h3Class}>Loyer hors marché (SCI du dirigeant)</h3>
        <p>
          Configuration très courante en France&nbsp;: le dirigeant détient
          les murs de l&apos;entreprise via une SCI (Société Civile Immobilière)
          familiale et fait payer un loyer à l&apos;entreprise d&apos;exploitation.
          Ce loyer peut être significativement supérieur ou inférieur au
          marché. Le QoE doit normaliser le loyer à sa valeur de marché,
          sur la base d&apos;une évaluation immobilière indépendante ou de
          comparables locaux.
        </p>
        <p>
          Si l&apos;acquéreur ne rachète pas la SCI (ce qui est fréquent), il
          devra renégocier le bail commercial avec le cédant-bailleur. Le
          QoE doit anticiper le coût locatif post-acquisition et l&apos;intégrer
          dans l&apos;EBITDA normalisé.
        </p>

        <h3 className={h3Class}>CIR, CICE et crédits d&apos;impôt</h3>
        <p>
          Le Crédit d&apos;Impôt Recherche (CIR) est un dispositif fiscal
          majeur en France, qui permet aux entreprises de bénéficier d&apos;un
          crédit d&apos;impôt significatif sur leurs dépenses de R&amp;D. Le
          CICE (Crédit d&apos;Impôt pour la Compétitivité et l&apos;Emploi) a
          été remplacé par un allègement de cotisations patronales depuis
          2019. L&apos;analyste QoE doit évaluer la pérennité du CIR
          post-acquisition&nbsp;: le CIR est-il lié à des projets de R&amp;D
          réels et documentés, ou à une interprétation agressive du périmètre
          éligible qui pourrait être remise en cause par un contrôle fiscal&nbsp;?
        </p>
        <p>
          Le traitement comptable du CIR dans le PCG (en produits
          d&apos;exploitation ou en déduction de l&apos;impôt sur les sociétés)
          varie selon les cabinets comptables, ce qui complique les
          comparaisons et nécessite un retraitement homogène.
        </p>

        <h3 className={h3Class}>Charges exceptionnelles</h3>
        <p>
          Le résultat exceptionnel du PCG (comptes 67x et 77x) regroupe
          théoriquement les éléments non récurrents&nbsp;: cessions
          d&apos;actifs, provisions pour litiges exceptionnels, pénalités
          fiscales. En pratique, l&apos;analyste QoE doit examiner chaque
          ligne du résultat exceptionnel sur la période d&apos;analyse pour
          déterminer si l&apos;élément est véritablement non récurrent ou s&apos;il
          s&apos;agit d&apos;un artifice de classement.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Provisions pour litiges&nbsp;:</strong> Si l&apos;entreprise
            provisionne régulièrement des litiges (prud&apos;hommes, litiges
            commerciaux), ces provisions sont en réalité un coût récurrent
            d&apos;exploitation, même si elles sont classées en exceptionnel.
          </li>
          <li>
            <strong>Cessions d&apos;actifs&nbsp;:</strong> Les plus-values ou
            moins-values de cession d&apos;immobilisations doivent être
            exclues de l&apos;EBITDA normalisé, sauf si l&apos;entreprise a une
            activité récurrente de rotation d&apos;actifs (comme un loueur de
            matériel).
          </li>
          <li>
            <strong>Subventions d&apos;exploitation&nbsp;:</strong> Les
            subventions ponctuelles (aides COVID, subventions d&apos;investissement)
            doivent être isolées. Les subventions récurrentes (aides à
            l&apos;emploi dans certaines zones géographiques) peuvent être
            maintenues dans l&apos;EBITDA normalisé si leur pérennité est
            établie.
          </li>
        </ul>

        <h3 className={h3Class}>Charges personnelles du dirigeant</h3>
        <p>
          Dans les PME françaises, il est fréquent que des charges
          personnelles du dirigeant soient comptabilisées dans les comptes
          de l&apos;entreprise&nbsp;: frais de véhicule personnel, voyages
          familiaux, travaux dans une résidence personnelle, emploi de
          membres de la famille sans réelle activité. Le QoE doit identifier
          et exclure ces charges pour obtenir un résultat d&apos;exploitation
          normalisé.
        </p>

        <h3 className={h3Class}>Provisions et amortissements</h3>
        <p>
          Les pratiques d&apos;amortissement et de provisionnement varient
          considérablement d&apos;une PME à l&apos;autre. Certaines entreprises
          sous-amortissent leurs actifs (durée d&apos;amortissement trop longue),
          gonflant artificiellement leur résultat. D&apos;autres sur-provisionnent
          par prudence, minorant leur résultat. L&apos;analyste QoE doit
          évaluer si les dotations aux amortissements et provisions reflètent
          l&apos;usure réelle des actifs et les risques effectifs.
        </p>
      </div>

      <h2 className={h2Class}>Construction de l&apos;EBITDA normalisé&nbsp;: le pont de réconciliation</h2>
      <div className={bodyClass}>
        <p>
          Le résultat du travail QoE est un pont de réconciliation (bridge)
          entre le résultat comptable publié et l&apos;EBITDA normalisé.
          Ce pont liste chaque retraitement avec son montant et sa
          justification. Sa structure type est la suivante&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Résultat d&apos;exploitation (PCG)&nbsp;:</strong> Point de
            départ issu des comptes annuels.
          </li>
          <li>
            <strong>+ Dotations aux amortissements et provisions&nbsp;:</strong>{" "}
            Réintégration pour passer du résultat d&apos;exploitation à l&apos;EBITDA.
          </li>
          <li>
            <strong>= EBITDA comptable&nbsp;:</strong> Avant retraitements de
            normalisation.
          </li>
          <li>
            <strong>+/- Retraitement rémunération dirigeant&nbsp;:</strong>{" "}
            Ajustement à la valeur de marché.
          </li>
          <li>
            <strong>+/- Retraitement loyer (SCI)&nbsp;:</strong> Ajustement à
            la valeur de marché.
          </li>
          <li>
            <strong>+ Charges personnelles du dirigeant&nbsp;:</strong>{" "}
            Réintégration des charges non liées à l&apos;exploitation.
          </li>
          <li>
            <strong>+/- Charges et produits exceptionnels non récurrents&nbsp;:</strong>{" "}
            Élimination des éléments ponctuels.
          </li>
          <li>
            <strong>+/- Retraitement CIR et aides publiques&nbsp;:</strong>{" "}
            Normalisation selon la pérennité estimée.
          </li>
          <li>
            <strong>+/- Autres retraitements&nbsp;:</strong> Éléments spécifiques
            à l&apos;entreprise analysée.
          </li>
          <li>
            <strong>= EBITDA normalisé&nbsp;:</strong> Base de valorisation et
            de négociation du prix.
          </li>
        </ol>
        <p>
          Chaque ligne du pont doit être documentée, sourcée et défendable.
          Le pont est le document central de la négociation du prix&nbsp;: le
          vendeur contestera les retraitements qui minorent l&apos;EBITDA, et
          l&apos;acquéreur argumentera ceux qui le majorent.
        </p>
      </div>

      <h2 className={h2Class}>Red flags spécifiques aux PME françaises</h2>
      <div className={bodyClass}>
        <p>
          L&apos;analyse QoE doit être attentive à certains signaux d&apos;alerte
          récurrents dans les PME françaises&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Concentration du chiffre d&apos;affaires&nbsp;:</strong> Un
            client représentant plus de 20&nbsp;% du CA est un risque majeur.
            La perte de ce client après l&apos;acquisition pourrait remettre en
            cause la valorisation.
          </li>
          <li>
            <strong>Dépendance au dirigeant&nbsp;:</strong> Si le chiffre
            d&apos;affaires repose en grande partie sur les relations
            personnelles du cédant avec les clients, la transition
            post-acquisition est risquée. Ce risque est particulièrement
            marqué dans les activités de services et de conseil.
          </li>
          <li>
            <strong>Écarts entre résultat comptable et trésorerie&nbsp;:</strong>{" "}
            Un résultat positif combiné à une trésorerie qui se dégrade peut
            signaler un BFR (Besoin en Fonds de Roulement) mal maîtrisé, des
            créances douteuses non provisionnées ou un décalage entre
            facturation et encaissement.
          </li>
          <li>
            <strong>CIR agressif&nbsp;:</strong> Un CIR représentant une part
            importante du résultat, sans documentation technique solide, est
            un risque fiscal significatif. Le redressement en cas de contrôle
            peut remettre en cause plusieurs exercices.
          </li>
          <li>
            <strong>Passifs sociaux latents&nbsp;:</strong> Engagements de
            retraite non provisionnés, litiges prud&apos;homaux en cours,
            non-conformité avec les conventions collectives. En France, le
            droit du travail impose des obligations significatives dont le
            non-respect peut générer des passifs considérables.
          </li>
          <li>
            <strong>Changement de méthode comptable&nbsp;:</strong> Un
            changement de méthode comptable (amortissement, provisionnement,
            comptabilisation du CA) sur la période analysée peut masquer une
            inflexion de la performance réelle.
          </li>
          <li>
            <strong>Flux intra-groupe opaques&nbsp;:</strong> Dans les
            structures avec holding ou filiales, des management fees,
            refacturations ou prêts internes non justifiés peuvent masquer
            la rentabilité réelle de l&apos;entité cible.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Choisir son prestataire QoE en France</h2>
      <div className={bodyClass}>
        <p>
          Le choix du prestataire QoE est déterminant pour la qualité de
          l&apos;analyse. En France, plusieurs types de professionnels
          réalisent des audits QoE&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cabinets d&apos;expertise comptable spécialisés&nbsp;:</strong>{" "}
            Des cabinets de taille moyenne avec une pratique avérée en audit
            d&apos;acquisition. Ils connaissent les spécificités du PCG et des
            PME françaises. C&apos;est souvent le choix le plus pertinent pour
            les acquisitions de PME.
          </li>
          <li>
            <strong>Big Four (Deloitte, PwC, EY, KPMG)&nbsp;:</strong>{" "}
            Départements Transaction Services spécialisés. Adaptés aux
            opérations de taille supérieure ou aux situations complexes
            (groupe multi-entités, international). Honoraires plus élevés.
          </li>
          <li>
            <strong>Cabinets de conseil en transaction&nbsp;:</strong>{" "}
            Structures indépendantes spécialisées dans la due diligence
            financière. Souvent composées d&apos;anciens auditeurs ayant
            développé une expertise transactionnelle.
          </li>
        </ul>
        <p>
          Le repreneur doit s&apos;assurer que le prestataire QoE comprend le
          secteur d&apos;activité de la cible, a l&apos;expérience des opérations
          de taille comparable, et peut produire un rapport dans les délais
          de la due diligence (généralement quatre à huit semaines après
          l&apos;accès à la data room). Il est également important que le
          prestataire soit indépendant du cédant et de ses conseils. Consultez
          notre guide sur le{" "}
          <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
            choix des conseillers
          </Link>{" "}
          pour une vue d&apos;ensemble.
        </p>
      </div>

      <h2 className={h2Class}>Utilisation du QoE dans la négociation</h2>
      <div className={bodyClass}>
        <p>
          Le rapport QoE est l&apos;outil de négociation le plus puissant de
          l&apos;acquéreur. L&apos;EBITDA normalisé issu du QoE sert de base à
          la valorisation (application du multiple) et donc à la détermination
          du prix définitif. Lorsque le QoE révèle un EBITDA normalisé
          inférieur à celui présenté par le vendeur dans son mémorandum
          d&apos;information, l&apos;acquéreur dispose d&apos;arguments factuels et
          documentés pour renégocier le prix.
        </p>
        <p>
          La présentation du QoE au cédant est un moment délicat qui
          requiert diplomatie et pédagogie. Le repreneur ne doit pas aborder
          cette étape comme un exercice accusatoire, mais comme une démarche
          de compréhension partagée de la réalité économique de
          l&apos;entreprise. Les retraitements doivent être présentés de manière
          factuelle, avec une documentation solide, en laissant au cédant
          la possibilité de contester et d&apos;apporter des éléments
          complémentaires.
        </p>
      </div>

      <h2 className={h2Class}>Pour aller plus loin</h2>
      <div className={bodyClass}>
        <p>
          L&apos;audit QoE est un exercice technique mais essentiel pour toute
          acquisition de PME en France. Pour approfondir les sujets connexes,
          consultez nos autres guides&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              Checklist de Due Diligence pour Acquisition de PME
            </Link>
          </li>
          <li>
            <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
              Comment Valoriser une PME pour l&apos;Acquisition
            </Link>
          </li>
          <li>
            <Link href="/learn/working-with-advisors" className="text-apple-accent hover:underline">
              Travailler avec des Conseillers&nbsp;: Avocats et Experts-Comptables
            </Link>
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Autorité des Normes Comptables (ANC) &mdash; <em>Règlement n°&nbsp;2014-03 relatif au Plan Comptable Général</em>, mis à jour 2024.
        </li>
        <li>
          Ordre des Experts-Comptables &mdash; <em>Guide des Missions d&apos;Audit d&apos;Acquisition</em>, 2024.
        </li>
        <li>
          Compagnie Nationale des Commissaires aux Comptes (CNCC) &mdash; <em>Normes d&apos;Exercice Professionnel</em>, 2024.
        </li>
        <li>
          Ministère de l&apos;Économie &mdash; <em>Guide du Crédit d&apos;Impôt Recherche</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Reprendre une Entreprise&nbsp;: Les Fondamentaux Financiers</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
