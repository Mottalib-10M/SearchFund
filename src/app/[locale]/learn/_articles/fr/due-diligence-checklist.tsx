import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function DueDiligenceFR() {
  return (
    <article>
      <h1 className={h1Class}>Checklist de Due Diligence pour Acquisition de PME</h1>

      <div className={bodyClass}>
        <p>
          La due diligence, ou audit d&apos;acquisition, est
          l&apos;étape la plus critique du processus d&apos;acquisition d&apos;une PME
          par un searcher. C&apos;est pendant cette phase que l&apos;acquéreur
          vérifie la réalité des informations communiquées par le cédant,
          identifie les risques cachés et confirme (ou infirme) la
          valorisation proposée dans la{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            lettre d&apos;intention
          </Link>.
          En France, la due diligence d&apos;une PME présente des
          particularités liées au cadre comptable (Plan Comptable Général),
          au droit du travail, à la fiscalité et aux réglementations
          sectorielles.
        </p>
        <p>
          Ce guide fournit une checklist structurée des principaux domaines
          d&apos;audit, adaptée au contexte juridique et réglementaire français.
          Il ne remplace pas le recours à des professionnels qualifiés
          (expert-comptable, avocat, auditeur fiscal) mais permet au searcher
          de piloter efficacement le processus et de poser les bonnes
          questions.
        </p>
      </div>

      <h2 className={h2Class}>Audit comptable et financier</h2>
      <div className={bodyClass}>
        <p>
          L&apos;audit comptable constitue le socle de la due diligence. En
          France, les comptes des PME sont établis selon le Plan Comptable
          Général (PCG), régi par le règlement ANC n°&nbsp;2014-03. L&apos;audit
          doit couvrir les trois à cinq derniers exercices et se concentrer
          sur les points suivants&nbsp;:
        </p>

        <h3 className={h3Class}>Analyse des comptes annuels</h3>
        <ul className={ulClass}>
          <li>
            <strong>Bilan&nbsp;:</strong> Vérification de la réalité et de la
            valorisation des actifs (immobilisations corporelles et
            incorporelles, stocks, créances clients), identification des
            passifs non comptabilisés (provisions sous-estimées, engagements
            hors bilan), analyse du besoin en fonds de roulement (BFR)
            normatif.
          </li>
          <li>
            <strong>Compte de résultat&nbsp;:</strong> Analyse de la
            composition du chiffre d&apos;affaires (récurrence, concentration
            clients, saisonnalité), évolution des marges brutes et
            opérationnelles, identification des éléments non récurrents
            (charges exceptionnelles, produits non répétables).
          </li>
          <li>
            <strong>EBITDA retraité&nbsp;:</strong> Calcul d&apos;un EBITDA
            normatif en retraitant les éléments non récurrents, la
            rémunération excessive ou insuffisante du dirigeant, les loyers
            hors marché (si les murs appartiennent au dirigeant), les charges
            personnelles du dirigeant et les dépenses d&apos;investissement de
            maintenance sous-estimées.
          </li>
          <li>
            <strong>Trésorerie&nbsp;:</strong> Analyse des flux de trésorerie
            historiques, vérification de la trésorerie disponible à la date de
            closing, identification des dettes bancaires et des engagements de
            crédit-bail.
          </li>
        </ul>

        <h3 className={h3Class}>Rapports du commissaire aux comptes</h3>
        <p>
          Si la société dispose d&apos;un commissaire aux comptes (CAC) , 
          obligation pour les sociétés dépassant deux des trois seuils
          suivants&nbsp;: 4&nbsp;000&nbsp;000&nbsp;&euro; de total bilan,
          8&nbsp;000&nbsp;000&nbsp;&euro; de chiffre d&apos;affaires,
          50&nbsp;salariés, les rapports de certification doivent être
          analysés attentivement. Les réserves, observations et vérifications
          spécifiques signalées par le CAC sont des indicateurs précieux de
          zones de risque.
        </p>

        <h3 className={h3Class}>Qualité de l&apos;information financière</h3>
        <p>
          Les PME françaises présentent fréquemment des limites en matière de
          reporting financier&nbsp;: absence de comptabilité analytique,
          situations intermédiaires non fiabilisées, confusion entre charges
          personnelles et professionnelles du dirigeant. Le searcher doit
          évaluer la qualité du système d&apos;information comptable et anticiper
          les investissements nécessaires pour améliorer le pilotage financier
          après l&apos;acquisition.
        </p>
      </div>

      <h2 className={h2Class}>Audit juridique</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Statuts et gouvernance</h3>
        <ul className={ulClass}>
          <li>
            Vérification des statuts à jour, des procès-verbaux d&apos;assemblées
            générales et des décisions du Président ou du gérant.
          </li>
          <li>
            Identification des conventions réglementées (article L.&nbsp;227-10
            du Code de commerce pour les SAS), contrats entre la société
            et ses dirigeants ou actionnaires significatifs.
          </li>
          <li>
            Analyse du registre des mouvements de titres et de la table de
            capitalisation.
          </li>
          <li>
            Vérification de l&apos;absence de pactes d&apos;actionnaires préexistants
            ou de nantissements de titres.
          </li>
        </ul>

        <h3 className={h3Class}>Contrats commerciaux</h3>
        <ul className={ulClass}>
          <li>
            Revue des contrats clients significatifs (conditions de résiliation,
            clauses de changement de contrôle, durée restante).
          </li>
          <li>
            Revue des contrats fournisseurs clés et des conditions de
            dépendance fournisseur.
          </li>
          <li>
            Analyse des contrats de sous-traitance et des engagements de
            volume.
          </li>
          <li>
            Vérification des contrats d&apos;assurance (responsabilité civile
            professionnelle, multirisque, homme-clé).
          </li>
        </ul>

        <h3 className={h3Class}>Baux commerciaux</h3>
        <p>
          Les baux commerciaux (articles L.&nbsp;145-1 et suivants du Code de
          commerce) sont des actifs stratégiques pour de nombreuses PME. La due
          diligence doit examiner&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            La durée restante du bail et les conditions de renouvellement.
          </li>
          <li>
            Le montant du loyer par rapport au marché (un loyer hors marché
            peut cacher un avantage ou un désavantage significatif).
          </li>
          <li>
            Les clauses de destination (activités autorisées dans les locaux).
          </li>
          <li>
            Les clauses de cession du bail (agrément du bailleur en cas de
            cession du fonds de commerce).
          </li>
          <li>
            L&apos;existence éventuelle d&apos;un bail conclu avec le dirigeant-cédant
            (risque de conflit d&apos;intérêts, nécessité de renégocier les
            conditions).
          </li>
        </ul>

        <h3 className={h3Class}>Litiges en cours</h3>
        <p>
          L&apos;audit juridique doit recenser tous les litiges en cours ou
          potentiels&nbsp;: contentieux prud&apos;homal, litiges commerciaux,
          contentieux fiscal, actions en responsabilité. L&apos;avocat de
          l&apos;acquéreur doit évaluer le risque financier associé à chaque
          litige et vérifier que les provisions comptabilisées sont
          suffisantes.
        </p>
      </div>

      <h2 className={h2Class}>Audit fiscal</h2>
      <div className={bodyClass}>
        <p>
          L&apos;audit fiscal est particulièrement critique en France, où la
          complexité du système fiscal et l&apos;activisme de l&apos;administration
          fiscale créent des risques significatifs. L&apos;auditeur fiscal doit
          examiner&nbsp;:
        </p>

        <h3 className={h3Class}>Impôt sur les sociétés (IS)</h3>
        <ul className={ulClass}>
          <li>
            Vérification des déclarations fiscales des trois à quatre derniers
            exercices non prescrits (le délai de prescription fiscale est de
            trois ans en matière d&apos;IS, article L.&nbsp;169 du Livre des
            procédures fiscales).
          </li>
          <li>
            Identification des risques de redressement&nbsp;: charges non
            déductibles, provisions non justifiées, prix de transfert
            intragroupe (le cas échéant), déficits reportables.
          </li>
          <li>
            Analyse des avis de vérification fiscale passés et de leurs
            conclusions.
          </li>
        </ul>

        <h3 className={h3Class}>TVA</h3>
        <ul className={ulClass}>
          <li>
            Vérification de la conformité des déclarations de TVA (TVA
            collectée, TVA déductible, régime applicable).
          </li>
          <li>
            Analyse des opérations exonérées, des opérations
            intracommunautaires et de l&apos;autoliquidation.
          </li>
          <li>
            Vérification du respect des obligations de facturation (mentions
            obligatoires, facturation électronique progressive selon le
            calendrier réglementaire français).
          </li>
        </ul>

        <h3 className={h3Class}>Contribution Économique Territoriale (CET)</h3>
        <p>
          La CET comprend la Cotisation Foncière des Entreprises (CFE) et la
          Cotisation sur la Valeur Ajoutée des Entreprises (CVAE). L&apos;auditeur
          vérifie l&apos;exactitude des bases déclaratives et l&apos;absence de risque
          de rappel.
        </p>

        <h3 className={h3Class}>Autres taxes</h3>
        <ul className={ulClass}>
          <li>
            Taxe sur les salaires (si la société n&apos;est pas assujettie à la
            TVA sur la totalité de son chiffre d&apos;affaires).
          </li>
          <li>
            Taxe d&apos;apprentissage et contribution à la formation
            professionnelle.
          </li>
          <li>
            Droits d&apos;enregistrement sur les actes passés par la société.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Audit social</h2>
      <div className={bodyClass}>
        <p>
          L&apos;audit social est souvent le domaine le plus complexe et le plus
          risqué de la due diligence d&apos;une PME française. Le droit du travail
          français, riche en obligations et en protections, crée des risques
          spécifiques que le searcher doit impérativement identifier avant
          l&apos;acquisition.
        </p>

        <h3 className={h3Class}>Conventions collectives</h3>
        <p>
          L&apos;identification de la convention collective applicable
          (métallurgie, syntec, commerce de gros, etc.) est fondamentale.
          La convention détermine les grilles salariales minimales, les
          classifications des postes, les primes obligatoires, les congés
          supplémentaires, les indemnités de licenciement majorées et les
          dispositifs de prévoyance et de complémentaire santé. L&apos;auditeur
          doit vérifier que la société applique correctement la convention
          en vigueur et identifier les écarts éventuels.
        </p>

        <h3 className={h3Class}>Comité Social et Économique (CSE)</h3>
        <ul className={ulClass}>
          <li>
            Vérification de l&apos;existence et du bon fonctionnement du CSE
            (obligatoire dans les entreprises de 11 salariés et plus).
          </li>
          <li>
            Analyse des procès-verbaux des réunions du CSE (identification de
            contentieux sociaux latents, demandes des salariés, alertes
            signalées par les élus).
          </li>
          <li>
            Vérification que les consultations obligatoires ont été menées
            (orientations stratégiques, situation économique, politique
            sociale).
          </li>
        </ul>

        <h3 className={h3Class}>URSSAF et conformité sociale</h3>
        <ul className={ulClass}>
          <li>
            Analyse des derniers contrôles URSSAF et de leurs conclusions
            (redressements, observations, lettres d&apos;observation).
          </li>
          <li>
            Vérification de la conformité des bulletins de paie (mentions
            obligatoires, calcul des cotisations, respect des plafonds).
          </li>
          <li>
            Identification des salariés en situation atypique&nbsp;: contrats
            aidés, travailleurs détachés, intérimaires, freelances requalifiables
            en salariés.
          </li>
          <li>
            Analyse des contrats de travail des salariés clés (clauses de
            non-concurrence, golden parachute, rémunérations différées).
          </li>
        </ul>

        <h3 className={h3Class}>Contentieux prud&apos;homal</h3>
        <p>
          Le risque prud&apos;homal est l&apos;un des principaux passifs sociaux des
          PME françaises. L&apos;auditeur doit recenser les procédures en cours,
          évaluer le risque financier de chaque contentieux et vérifier que
          les provisions sont suffisantes. Les litiges liés aux heures
          supplémentaires, au harcèlement, aux licenciements économiques et
          aux ruptures conventionnelles contestées sont les plus fréquents.
        </p>
      </div>

      <h2 className={h2Class}>Audit environnemental</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Installations Classées pour la Protection de l&apos;Environnement (ICPE)</h3>
        <p>
          Si la société exploite des installations soumises à la réglementation
          ICPE (articles L.&nbsp;511-1 et suivants du Code de l&apos;environnement),
          l&apos;audit doit vérifier&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            L&apos;existence et la validité des autorisations préfectorales.
          </li>
          <li>
            La conformité des installations aux prescriptions techniques.
          </li>
          <li>
            L&apos;absence de pollution des sols (diagnostic environnemental si
            nécessaire, bases de données BASOL et SIS).
          </li>
          <li>
            Les obligations de remise en état en cas de cessation d&apos;activité.
          </li>
        </ul>

        <h3 className={h3Class}>Réglementation environnementale générale</h3>
        <ul className={ulClass}>
          <li>
            Gestion des déchets (tri, traçabilité, filières de traitement).
          </li>
          <li>
            Conformité aux normes d&apos;émissions (air, eau, bruit).
          </li>
          <li>
            Obligations liées à la Responsabilité Élargie du Producteur (REP)
            si applicable.
          </li>
          <li>
            Bilan carbone et obligations de reporting extra-financier (pour les
            entreprises concernées par la CSRD).
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Audit RGPD et conformité numérique</h2>
      <div className={bodyClass}>
        <p>
          Le Règlement Général sur la Protection des Données (RGPD, Règlement
          (UE) 2016/679) impose des obligations strictes à toute entreprise
          traitant des données personnelles. L&apos;audit RGPD d&apos;une PME
          française doit examiner&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            L&apos;existence d&apos;un registre des traitements (article 30 du RGPD).
          </li>
          <li>
            La conformité des traitements de données (bases légales,
            information des personnes, durées de conservation).
          </li>
          <li>
            La sécurité des systèmes d&apos;information (mesures techniques et
            organisationnelles, procédures de notification de violation de
            données).
          </li>
          <li>
            Les transferts de données hors UE (clauses contractuelles types,
            décisions d&apos;adéquation).
          </li>
          <li>
            La désignation d&apos;un Délégué à la Protection des Données (DPO) si
            obligatoire.
          </li>
          <li>
            L&apos;absence de plaintes ou de contrôles de la CNIL (Commission
            Nationale de l&apos;Informatique et des Libertés).
          </li>
        </ul>
        <p>
          Le non-respect du RGPD expose la société à des sanctions pouvant
          atteindre 4&nbsp;% du chiffre d&apos;affaires mondial ou
          20&nbsp;000&nbsp;000&nbsp;&euro;, selon le montant le plus élevé. Ce
          risque doit être évalué et, le cas échéant, pris en compte dans la{" "}
          <Link href="/learn/business-valuation" className="text-apple-accent hover:underline">
            valorisation de l&apos;entreprise
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Organisation de la due diligence</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Data room</h3>
        <p>
          La data room est l&apos;espace (physique ou virtuel) dans lequel le
          cédant met à disposition les documents nécessaires à la due
          diligence. En France, les PME ne disposent pas toujours d&apos;une
          documentation structurée, et le searcher doit souvent établir une
          liste précise des documents requis (request list) et accompagner le
          cédant dans la constitution de la data room.
        </p>

        <h3 className={h3Class}>Équipe d&apos;audit</h3>
        <p>
          Le searcher constitue une équipe d&apos;audit comprenant
          typiquement&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Un expert-comptable ou un cabinet d&apos;audit pour l&apos;audit comptable
            et financier.
          </li>
          <li>
            Un avocat d&apos;affaires pour l&apos;audit juridique et la rédaction du
            SPA.
          </li>
          <li>
            Un avocat fiscaliste pour l&apos;audit fiscal.
          </li>
          <li>
            Un avocat en droit social ou un consultant RH pour l&apos;audit social.
          </li>
          <li>
            Un bureau d&apos;études environnementales pour l&apos;audit environnemental
            (si pertinent).
          </li>
        </ul>

        <h3 className={h3Class}>Coûts de la due diligence</h3>
        <p>
          Les coûts de due diligence pour l&apos;acquisition d&apos;une PME française
          varient significativement selon la taille et la complexité de la
          cible. Pour une PME type de search fund (2 à 15&nbsp;M&euro; de
          chiffre d&apos;affaires), il faut prévoir entre 30&nbsp;000 et
          80&nbsp;000&nbsp;&euro; de frais d&apos;audit (comptable, juridique,
          fiscal, social). Ces coûts doivent être budgétés dès la phase de
          recherche et sont généralement supportés par la holding
          d&apos;acquisition.
        </p>
      </div>

      <h2 className={h2Class}>Red flags&nbsp;: signaux d&apos;alerte majeurs</h2>
      <div className={bodyClass}>
        <p>
          Certains résultats de due diligence constituent des signaux
          d&apos;alerte qui peuvent justifier la rupture des négociations ou une
          renégociation significative du prix&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Écarts significatifs entre l&apos;EBITDA communiqué et l&apos;EBITDA
            retraité.
          </li>
          <li>
            Concentration excessive du chiffre d&apos;affaires sur un nombre
            restreint de clients.
          </li>
          <li>
            Litiges en cours dont le risque financier n&apos;a pas été provisionné.
          </li>
          <li>
            Non-conformité majeure en matière d&apos;ICPE, de droit du travail ou
            de RGPD.
          </li>
          <li>
            Découverte de conventions réglementées non approuvées.
          </li>
          <li>
            Dépendance critique au dirigeant-cédant sans plan de transition.
          </li>
          <li>
            Trésorerie insuffisante pour couvrir le BFR post-closing.
          </li>
        </ul>
        <p>
          La capacité du searcher à identifier, évaluer et traiter ces signaux
          est un facteur clé de succès dans le processus d&apos;acquisition. Pour
          la planification post-acquisition, consultez notre guide sur les{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            100 premiers jours
          </Link>{" "}
          en tant que dirigeant.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Autorité des Normes Comptables (ANC), Règlement n°&nbsp;2014-03 &mdash; <em>Plan Comptable Général</em>.
        </li>
        <li>
          Code de commerce, articles L.&nbsp;227-10 et suivants &mdash; <em>Conventions réglementées dans les SAS</em>.
        </li>
        <li>
          Code du travail, articles L.&nbsp;2312-8 et suivants &mdash; <em>Attributions du CSE</em>.
        </li>
        <li>
          Code de l&apos;environnement, articles L.&nbsp;511-1 et suivants &mdash; <em>Installations Classées (ICPE)</em>.
        </li>
        <li>
          Règlement (UE) 2016/679 &mdash; <em>Règlement Général sur la Protection des Données (RGPD)</em>.
        </li>
        <li>
          Livre des procédures fiscales, article L.&nbsp;169 &mdash; <em>Prescription en matière d&apos;IS</em>.
        </li>
        <li>
          Compagnie Nationale des Commissaires aux Comptes (CNCC) &mdash; <em>Guide de l&apos;audit d&apos;acquisition</em>.
        </li>
      </ul>
    </article>
  );
}
