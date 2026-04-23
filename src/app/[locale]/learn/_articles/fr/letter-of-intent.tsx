import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function LetterOfIntentFR() {
  return (
    <article>
      <h1 className={h1Class}>Lettre d&apos;Intention (LOI)&nbsp;: Rédaction et Négociation</h1>

      <div className={bodyClass}>
        <p>
          La lettre d&apos;intention (LOI &mdash; Letter of Intent), également
          appelée offre indicative ou protocole d&apos;accord, est le document
          qui formalise l&apos;intérêt d&apos;un searcher pour l&apos;acquisition d&apos;une
          entreprise cible et fixe les grandes lignes de la transaction
          envisagée. En droit français, la LOI occupe une place juridique
          particulière&nbsp;: elle n&apos;est pas un contrat de vente définitif,
          mais elle produit néanmoins des effets juridiques significatifs,
          notamment en matière de bonne foi et d&apos;exclusivité.
        </p>
        <p>
          Ce guide détaille les composantes essentielles d&apos;une LOI adaptée
          au contexte juridique français, les stratégies de négociation et les
          pièges à éviter. Pour le contexte global du processus d&apos;acquisition,
          consultez nos guides sur le{" "}
          <Link href="/learn/deal-sourcing-strategies" className="text-apple-accent hover:underline">
            sourcing de cibles
          </Link>{" "}
          et la{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valorisation d&apos;entreprise
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Nature juridique de la LOI en droit français</h2>
      <div className={bodyClass}>
        <p>
          En droit français, la LOI s&apos;inscrit dans le cadre de la phase
          précontractuelle, régie par les articles 1112 à 1112-2 du Code civil
          (issus de la réforme du droit des obligations de 2016). Plusieurs
          principes fondamentaux encadrent cette phase&nbsp;:
        </p>

        <h3 className={h3Class}>Liberté des négociations (article 1112)</h3>
        <p>
          L&apos;initiative, le déroulement et la rupture des négociations
          précontractuelles sont libres. Aucune partie n&apos;est tenue de conclure
          la transaction, même après la signature d&apos;une LOI. Toutefois, cette
          liberté est encadrée par l&apos;obligation de bonne foi&nbsp;: les
          négociations doivent être conduites de manière loyale, sans intention
          de nuire ou de tromper.
        </p>

        <h3 className={h3Class}>Faute dans les négociations (article 1112 alinéa 2)</h3>
        <p>
          La rupture des négociations peut engager la responsabilité
          extracontractuelle de son auteur si elle est abusive. La
          jurisprudence française retient principalement deux cas de rupture
          fautive&nbsp;: la rupture brutale après avoir créé chez l&apos;autre
          partie une confiance légitime dans la conclusion du contrat, et la
          rupture motivée par la mauvaise foi (négociation sans intention
          réelle de conclure, utilisation des informations obtenues à d&apos;autres
          fins). En cas de rupture fautive, les dommages-intérêts sont
          limités à la perte subie et au gain manqué liés aux frais engagés
          pendant les négociations, mais ne peuvent inclure la perte des
          bénéfices attendus du contrat non conclu.
        </p>

        <h3 className={h3Class}>Devoir d&apos;information (article 1112-1)</h3>
        <p>
          Chaque partie doit communiquer à l&apos;autre les informations dont elle
          connaît le caractère déterminant pour le consentement. Ce devoir est
          particulièrement important dans le contexte d&apos;une acquisition de
          PME, où le cédant détient une asymétrie d&apos;information considérable
          sur la société. La violation du devoir d&apos;information peut entraîner
          la nullité du contrat pour dol (article 1137 du Code civil) ou
          l&apos;allocation de dommages-intérêts.
        </p>
      </div>

      <h2 className={h2Class}>Structure d&apos;une LOI pour un search fund</h2>
      <div className={bodyClass}>
        <p>
          Une LOI bien rédigée dans le contexte français comprend les
          éléments suivants&nbsp;:
        </p>

        <h3 className={h3Class}>1. Identification des parties</h3>
        <p>
          La LOI identifie précisément l&apos;acquéreur (la holding SAS du
          searcher) et le cédant (le dirigeant-actionnaire de la société
          cible). Si plusieurs actionnaires sont impliqués, chacun doit être
          identifié. L&apos;identité précise de la société cible (dénomination
          sociale, numéro SIREN, siège social) est également mentionnée.
        </p>

        <h3 className={h3Class}>2. Objet de la transaction</h3>
        <p>
          La LOI précise s&apos;il s&apos;agit d&apos;une cession de titres (share deal)
          ou d&apos;une cession de fonds de commerce (asset deal). En search fund,
          la cession de titres est la norme, car elle permet de reprendre la
          société dans sa globalité (contrats, autorisations, personnel) et
          bénéficie de droits d&apos;enregistrement réduits (0,1&nbsp;% pour les
          actions de SAS). La cession de fonds de commerce peut être envisagée
          dans certains cas spécifiques (redressement, isolement de certaines
          activités).
        </p>

        <h3 className={h3Class}>3. Valorisation indicative</h3>
        <p>
          La LOI indique une fourchette de valorisation ou un prix indicatif,
          généralement exprimé en multiple d&apos;EBITDA ou en valeur d&apos;entreprise
          (enterprise value). Il est essentiel de préciser&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            La base de calcul retenue (EBITDA moyen des trois derniers
            exercices, EBITDA normatif retraité, etc.).
          </li>
          <li>
            Le multiple indicatif appliqué (typiquement 4x à 7x l&apos;EBITDA
            pour les PME françaises, selon le secteur et la taille).
          </li>
          <li>
            Le passage de la valeur d&apos;entreprise (VE) au prix des titres
            (equity value)&nbsp;: VE - dette financière nette + trésorerie
            excédentaire, ajusté du besoin en fonds de roulement normatif.
          </li>
          <li>
            Le caractère indicatif du prix, susceptible d&apos;ajustement à
            l&apos;issue des{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligences
            </Link>.
          </li>
        </ul>

        <h3 className={h3Class}>4. Conditions suspensives</h3>
        <p>
          Les conditions suspensives sont les événements dont la réalisation
          conditionne la signature du contrat de cession définitif. En droit
          français, elles sont régies par les articles 1304 et suivants du
          Code civil. Les conditions suspensives typiques d&apos;une LOI de search
          fund incluent&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Résultats satisfaisants des due diligences (comptable, juridique,
            fiscale, sociale, environnementale).
          </li>
          <li>
            Obtention du financement bancaire aux conditions prévues.
          </li>
          <li>
            Levée du capital d&apos;acquisition auprès des investisseurs.
          </li>
          <li>
            Consultation préalable du CSE (Comité Social et Économique) de la
            société cible conformément aux articles L.&nbsp;2312-8 et suivants
            du Code du travail.
          </li>
          <li>
            Obtention des autorisations réglementaires éventuelles (contrôle
            des concentrations si les seuils sont atteints, autorisations
            sectorielles).
          </li>
          <li>
            Absence de changement significatif défavorable (Material Adverse
            Change / MAC clause) entre la date de la LOI et le closing.
          </li>
        </ul>

        <h3 className={h3Class}>5. Clause d&apos;exclusivité</h3>
        <p>
          L&apos;exclusivité est la clause la plus négociée d&apos;une LOI. Elle
          interdit au cédant de poursuivre des discussions avec d&apos;autres
          acquéreurs potentiels pendant une durée déterminée (typiquement 60
          à 120 jours). En contrepartie de cette exclusivité, le searcher
          s&apos;engage généralement à mener les due diligences avec diligence et
          à respecter un calendrier défini.
        </p>
        <p>
          La durée de l&apos;exclusivité doit être calibrée avec soin&nbsp;: trop
          courte (moins de 60 jours), elle ne laisse pas le temps de mener
          des due diligences approfondies&nbsp;; trop longue (plus de 120
          jours), elle est souvent refusée par les cédants ou leurs conseils.
          En France, une période de 90 jours est un standard raisonnable
          pour une acquisition de PME.
        </p>

        <h3 className={h3Class}>6. Périmètre des due diligences</h3>
        <p>
          La LOI définit le périmètre et les modalités des audits
          d&apos;acquisition (due diligences). Elle prévoit&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            L&apos;accès à une data room physique ou virtuelle contenant les
            documents juridiques, comptables, fiscaux, sociaux et
            opérationnels de la cible.
          </li>
          <li>
            La possibilité de conduire des entretiens avec le management,
            les salariés clés, les clients et les fournisseurs significatifs
            (sous réserve de confidentialité).
          </li>
          <li>
            Les domaines couverts&nbsp;: audit comptable et financier, audit
            juridique, audit fiscal, audit social, audit environnemental,
            audit IT/RGPD.
          </li>
          <li>
            Le calendrier indicatif des audits et la date cible pour la
            remise des rapports.
          </li>
        </ul>

        <h3 className={h3Class}>7. Calendrier indicatif</h3>
        <p>
          Le calendrier précise les grandes étapes entre la signature de la
          LOI et le closing&nbsp;:
        </p>
        <ol className={olClass}>
          <li>Signature de la LOI (J).</li>
          <li>Ouverture de la data room et début des due diligences (J+5).</li>
          <li>Consultation du CSE (J+15 à J+45, selon la complexité).</li>
          <li>Remise des rapports de due diligence (J+45 à J+60).</li>
          <li>Négociation du contrat de cession définitif / SPA (J+50 à J+75).</li>
          <li>Obtention du financement bancaire (J+60 à J+80).</li>
          <li>Signing (signature du SPA) et closing (J+80 à J+90).</li>
        </ol>

        <h3 className={h3Class}>8. Clause de non-sollicitation et confidentialité</h3>
        <p>
          La LOI comprend généralement un engagement réciproque de
          confidentialité couvrant l&apos;existence des négociations et les
          informations échangées. Une clause de non-sollicitation (no-shop)
          interdit au cédant de solliciter activement d&apos;autres acquéreurs
          pendant la période d&apos;exclusivité. Elle se distingue de la clause de
          no-talk, plus restrictive, qui interdit au cédant de répondre à
          toute sollicitation non sollicitée &mdash; cette dernière étant plus
          rarement acceptée dans le contexte français des PME.
        </p>

        <h3 className={h3Class}>9. Clauses de garantie de passif (aperçu)</h3>
        <p>
          La LOI mentionne le principe d&apos;une garantie de passif
          (représentations et garanties dans la terminologie anglo-saxonne)
          que le cédant devra consentir dans le contrat de cession définitif.
          La garantie de passif couvre les risques liés à des passifs non
          révélés au moment de la cession (redressements fiscaux, litiges
          salariaux, non-conformités réglementaires). Les modalités
          détaillées (plafond, franchise, durée, mécanisme de séquestre ou
          garantie bancaire) font l&apos;objet de la négociation du SPA.
        </p>
      </div>

      <h2 className={h2Class}>Stratégies de négociation</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Construire la confiance avec le cédant</h3>
        <p>
          En France, la cession d&apos;une PME est souvent un acte
          profondément personnel pour le dirigeant-cédant, qui a
          généralement construit l&apos;entreprise pendant des décennies. Le
          searcher doit démontrer qu&apos;il est un repreneur sérieux, capable
          de pérenniser l&apos;entreprise, de préserver l&apos;emploi et de
          respecter la culture d&apos;entreprise. Les aspects humains et
          relationnels pèsent souvent autant que le prix dans la décision
          du cédant.
        </p>

        <h3 className={h3Class}>Gérer l&apos;asymétrie d&apos;information</h3>
        <p>
          Le cédant connaît son entreprise infiniment mieux que le searcher.
          La LOI doit prévoir des mécanismes pour réduire cette asymétrie&nbsp;:
          accès complet à la data room, entretiens avec le management et les
          salariés clés, possibilité de mandater des experts indépendants. Le
          searcher doit néanmoins maintenir un équilibre entre exhaustivité
          des due diligences et rapidité d&apos;exécution, sous peine de
          décourager le cédant.
        </p>

        <h3 className={h3Class}>Négocier le prix</h3>
        <p>
          La valorisation indicative de la LOI n&apos;est pas le prix définitif.
          Plusieurs mécanismes permettent d&apos;ajuster le prix entre la LOI et
          le closing&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Clause d&apos;ajustement de prix&nbsp;:</strong> Le prix
            final est ajusté en fonction de la situation nette ou du BFR
            (besoin en fonds de roulement) à la date de closing par rapport
            à une situation nette ou un BFR de référence.
          </li>
          <li>
            <strong>Earn-out&nbsp;:</strong> Une partie du prix est
            conditionnée à la réalisation d&apos;objectifs de performance
            post-closing (chiffre d&apos;affaires, EBITDA). L&apos;earn-out aligne les
            intérêts du cédant et de l&apos;acquéreur pendant la période de
            transition.
          </li>
          <li>
            <strong>Crédit vendeur&nbsp;:</strong> Le cédant accepte de
            différer le paiement d&apos;une partie du prix (typiquement 10 à
            20&nbsp;%), ce qui témoigne de sa confiance dans l&apos;avenir de
            l&apos;entreprise et facilite le financement de l&apos;acquisition.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Rupture de la LOI&nbsp;: conséquences en droit français</h2>
      <div className={bodyClass}>
        <p>
          La rupture d&apos;une LOI non contraignante (à l&apos;exception des clauses
          d&apos;exclusivité et de confidentialité) est libre en principe.
          Toutefois, la jurisprudence française sanctionne la rupture
          abusive des négociations sur le fondement de la responsabilité
          extracontractuelle (article 1240 du Code civil).
        </p>
        <p>
          Sont considérés comme des indices de rupture abusive&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            La rupture intervient à un stade très avancé des négociations,
            après que le searcher a engagé des frais significatifs de due
            diligence.
          </li>
          <li>
            Le cédant a créé une confiance légitime dans la conclusion de la
            transaction (échanges de projets de SPA, accord de principe sur
            les termes clés).
          </li>
          <li>
            La rupture est motivée par la réception d&apos;une offre concurrente
            pendant la période d&apos;exclusivité.
          </li>
          <li>
            Le cédant a négocié sans intention réelle de conclure (pour
            obtenir des informations ou créer un effet de levier dans une
            autre négociation).
          </li>
        </ul>
        <p>
          En cas de rupture abusive, les tribunaux français allouent des
          dommages-intérêts couvrant les frais engagés (due diligence,
          honoraires d&apos;avocats, déplacements) et la perte de chance de
          conclure la transaction. Ces montants, bien que réels, restent
          généralement modérés par rapport à la valeur de la transaction.
        </p>
      </div>

      <h2 className={h2Class}>Consultation du CSE&nbsp;: une obligation incontournable</h2>
      <div className={bodyClass}>
        <p>
          L&apos;article L.&nbsp;2312-8 du Code du travail impose la consultation
          du Comité Social et Économique (CSE) de la société cible avant toute
          cession de contrôle. Cette obligation est d&apos;ordre public&nbsp;: son
          non-respect expose la transaction à une annulation et l&apos;acquéreur à
          des sanctions pénales.
        </p>
        <p>
          La consultation doit porter sur le projet de cession, l&apos;identité de
          l&apos;acquéreur, ses intentions en matière d&apos;emploi, d&apos;investissement
          et de stratégie. Le CSE dispose d&apos;un délai d&apos;un mois (deux mois
          s&apos;il recourt à un expert) pour rendre son avis. Cet avis est
          consultatif&nbsp;: un avis négatif n&apos;empêche pas la cession, mais il
          doit être pris en compte. Le calendrier de consultation du CSE doit
          être intégré dans le planning de la LOI pour éviter tout retard.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Code civil, articles 1112 à 1112-2 &mdash; <em>Négociations précontractuelles (réforme du 10 février 2016)</em>.
        </li>
        <li>
          Code civil, articles 1304 et suivants &mdash; <em>Obligations conditionnelles</em>.
        </li>
        <li>
          Code du travail, articles L.&nbsp;2312-8 et suivants &mdash; <em>Information et consultation du CSE</em>.
        </li>
        <li>
          Cour de cassation, Chambre commerciale &mdash; <em>Jurisprudence relative à la rupture abusive des pourparlers</em>.
        </li>
        <li>
          Conseil National des Barreaux &mdash; <em>Guide des cessions d&apos;entreprises</em>.
        </li>
        <li>
          Bpifrance &mdash; <em>Reprendre une Entreprise&nbsp;: aspects juridiques de la LOI</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
