import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function First100DaysFR() {
  return (
    <article>
      <h1 className={h1Class}>Les 100 Premiers Jours comme Dirigeant post-Acquisition</h1>

      <div className={bodyClass}>
        <p>
          Les 100 premiers jours après la reprise d&apos;une PME sont une période
          charnière qui conditionne la réussite à long terme de l&apos;opération. En
          France, cette transition s&apos;inscrit dans un cadre juridique et social
          spécifique, droit du travail protecteur, rôle central des
          instances représentatives du personnel, conventions collectives
          contraignantes, qui impose au nouveau dirigeant une approche
          méthodique et respectueuse des équilibres existants. Ce guide détaille
          les étapes clés de cette période cruciale, adaptées au contexte
          réglementaire et culturel français.
        </p>
        <p>
          Que vous soyez issu du conseil en stratégie, de la banque d&apos;affaires
          ou de l&apos;industrie, la prise de fonction comme Président ou Directeur
          Général d&apos;une PME française exige une compétence que votre parcours
          antérieur ne vous a pas nécessairement enseignée&nbsp;: la capacité à
          diriger une organisation existante, avec ses habitudes, ses fiertés et
          ses réticences au changement. Chaque décision prise, ou différée
          durant ces premières semaines façonnera votre crédibilité
          auprès des salariés, des clients et de vos investisseurs.
        </p>
      </div>

      <h2 className={h2Class}>Avant le jour J&nbsp;: préparer la transition</h2>
      <div className={bodyClass}>
        <p>
          La préparation de la prise de fonction commence bien avant le closing. Dès
          la signature du protocole de cession, plusieurs actions doivent être
          anticipées&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Information du CSE&nbsp;:</strong> En France, le Comité Social
            et Économique doit être informé et consulté avant toute cession de
            contrôle (article L. 2312-8 du Code du travail). Cette obligation
            s&apos;applique aux entreprises de 11 salariés et plus. Le non-respect
            de cette procédure peut entraîner la nullité de la cession. Prévoyez
            un calendrier de consultation intégré au rétroplanning de
            l&apos;opération.
          </li>
          <li>
            <strong>Droit d&apos;information des salariés&nbsp;:</strong> Depuis la
            loi Hamon de 2014, les salariés d&apos;entreprises de moins de 250
            salariés doivent être informés au moins deux mois avant la cession
            effective. Ce droit d&apos;information ne confère pas un droit de
            préemption, mais il doit être scrupuleusement respecté.
          </li>
          <li>
            <strong>Plan de transition avec le cédant&nbsp;:</strong> Négociez une
            période d&apos;accompagnement du cédant de 3 à 6 mois post-closing.
            Formalisez cette période dans le contrat de cession avec des
            objectifs précis&nbsp;: transfert des relations clients et
            fournisseurs clés, passation de la relation bancaire, transmission des
            savoirs tacites. Consultez notre guide sur le{" "}
            <Link href="/learn/management-transition-plan" className="text-apple-accent hover:underline">
              plan de transition managériale
            </Link>{" "}
            pour structurer cette phase.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Jours 1 à 30&nbsp;: écouter, observer, rassurer</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Semaines 1-2&nbsp;: immersion opérationnelle</h3>
        <p>
          Le premier mois est consacré à l&apos;écoute et à l&apos;observation. Vous
          héritez d&apos;une organisation vivante, avec ses codes, ses rituels et sa
          culture propre. Votre priorité absolue n&apos;est pas de diriger , 
          c&apos;est de comprendre.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Rencontrez chaque salarié individuellement.</strong> Dans une
            PME de 20 à 80 personnes, il est possible, et indispensable
            de consacrer 20 à 30 minutes à chaque collaborateur. Posez
            des questions ouvertes&nbsp;: &laquo;&nbsp;Qu&apos;est-ce qui
            fonctionne bien ici&nbsp;?&nbsp;&raquo;, &laquo;&nbsp;Qu&apos;est-ce
            que vous changeriez si vous le pouviez&nbsp;?&nbsp;&raquo;,
            &laquo;&nbsp;De quoi avez-vous besoin pour mieux travailler&nbsp;?&nbsp;&raquo;
          </li>
          <li>
            <strong>Accompagnez le cédant au quotidien.</strong> Passez du temps
            avec le dirigeant sortant pour comprendre les décisions quotidiennes,
            les relations informelles et les usages non écrits. Les PME françaises
            fonctionnent souvent sur un mode patriarcal où le dirigeant concentre
            de nombreuses décisions&nbsp;; il est essentiel d&apos;identifier ces
            zones de dépendance.
          </li>
          <li>
            <strong>Assistez à toutes les réunions.</strong> Réunions
            commerciales, points de production, comités de direction, réunions
            CSE, observez comment les décisions sont prises dans la
            réalité, au-delà de l&apos;organigramme formel.
          </li>
        </ul>

        <h3 className={h3Class}>Semaines 3-4&nbsp;: cartographie et diagnostic</h3>
        <ul className={ulClass}>
          <li>
            <strong>Cartographiez l&apos;organisation.</strong> Identifiez les
            lignes hiérarchiques, les processus de décision et les structures de
            pouvoir informelles. Dans de nombreuses PME, les dynamiques réelles
            diffèrent significativement de l&apos;organigramme officiel. Repérez
            les collaborateurs &laquo;&nbsp;pivots&nbsp;&raquo;, ceux vers
            qui les autres se tournent pour les questions techniques, les
            problèmes clients ou les arbitrages internes.
          </li>
          <li>
            <strong>Ne changez rien encore.</strong> Résistez à la tentation
            d&apos;implémenter des améliorations. Des changements prématurés
            signalent aux salariés que vous ne respectez pas ce qu&apos;ils ont
            construit. En France, où le sentiment d&apos;appartenance à
            l&apos;entreprise est culturellement fort, cette prudence est encore
            plus critique.
          </li>
          <li>
            <strong>Identifiez les conventions collectives applicables.</strong>{" "}
            Les conventions collectives (CCN) régissent une grande partie des
            conditions de travail en France&nbsp;: classifications, minima
            salariaux, primes, congés, préavis. Leur méconnaissance est une
            source fréquente de contentieux prud&apos;homal. Assurez-vous de
            maîtriser la ou les CCN applicables à votre entreprise.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Communication aux salariés</h2>
      <div className={bodyClass}>
        <p>
          La communication est le levier le plus puissant, et le plus
          sous-estimé, des premiers jours. Les salariés sont naturellement
          inquiets face au changement de propriétaire. Leurs préoccupations portent
          sur la pérennité de leur emploi, le maintien de leurs avantages acquis et
          la personnalité du nouveau dirigeant.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Organisez une communication collective dès J+1.</strong>{" "}
            Réunissez l&apos;ensemble des salariés pour vous présenter, expliquer
            votre parcours et votre projet. Soyez transparent sur vos intentions
            à court terme&nbsp;: rassurer sur la continuité est plus important
            que séduire avec des projets ambitieux.
          </li>
          <li>
            <strong>Instaurez un rythme de communication régulier.</strong> Une
            réunion d&apos;équipe hebdomadaire, même brève, crée de la
            transparence et de la prévisibilité. Partagez les bonnes nouvelles
            comme les défis.
          </li>
          <li>
            <strong>Respectez les instances représentatives.</strong> Le CSE
            n&apos;est pas un obstacle administratif, c&apos;est un
            interlocuteur légitime et un relais d&apos;information précieux.
            Établissez une relation constructive avec les élus du personnel dès
            le premier jour. Prévoyez des réunions régulières au-delà du minimum
            légal (six réunions annuelles dans les entreprises de moins de 300
            salariés).
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Jours 30 à 60&nbsp;: diagnostiquer et planifier</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Quick wins et premières actions</h3>
        <p>
          À la fin du premier mois, vous devriez avoir une compréhension solide de
          l&apos;entreprise telle qu&apos;elle fonctionne. Le deuxième mois est
          consacré à la traduction de vos observations en plan d&apos;action.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Identifiez les quick wins.</strong> Cherchez les améliorations
            à faible risque qui construiront votre crédibilité&nbsp;:
            renouvellement d&apos;équipements vétustes, résolution de problèmes
            administratifs récurrents, mise en place d&apos;outils qui simplifient
            le quotidien. Les meilleurs quick wins sont les demandes que les
            salariés formulaient depuis longtemps sans être entendus.
          </li>
          <li>
            <strong>Évaluez l&apos;équipe de direction.</strong> Déterminez qui
            sont vos relais de confiance, où se situent les lacunes et qui
            pourrait nécessiter un accompagnement ou un repositionnement. Évaluez
            chaque manager sur deux axes&nbsp;: performance actuelle et potentiel
            de développement.
          </li>
        </ul>

        <h3 className={h3Class}>Infrastructure financière et administrative</h3>
        <ul className={ulClass}>
          <li>
            <strong>Reprenez en main la relation bancaire.</strong> Présentez-vous
            aux directeurs d&apos;agence et aux chargés d&apos;affaires
            professionnels. Confirmez les conditions des lignes de crédit, des
            facilités de caisse et des garanties bancaires. Si le financement de
            l&apos;acquisition inclut un prêt bancaire, la qualité de la relation
            avec votre banquier est essentielle pour la suite.
          </li>
          <li>
            <strong>Vérifiez la conformité URSSAF.</strong> L&apos;URSSAF (Union
            de Recouvrement des cotisations de Sécurité Sociale et
            d&apos;Allocations Familiales) est l&apos;organisme qui collecte les
            cotisations sociales en France. Assurez-vous que l&apos;entreprise est
            à jour de ses obligations déclaratives et de paiement. Les arriérés de
            cotisations sociales constituent l&apos;un des risques les plus
            fréquents lors d&apos;une reprise, vérifiez que votre{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            a correctement identifié ce point.
          </li>
          <li>
            <strong>Installez un reporting financier mensuel.</strong> Beaucoup de
            PME françaises ne disposent pas de clôtures mensuelles fiables. Mettez
            en place un tableau de bord de gestion avec votre expert-comptable,
            incluant chiffre d&apos;affaires, marge brute, masse salariale,
            trésorerie et indicateurs opérationnels clés.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Jours 60 à 100&nbsp;: exécuter les premières initiatives</h2>
      <div className={bodyClass}>
        <p>
          La dernière phase des 100 premiers jours est celle de la mise en
          œuvre. Vous avez écouté, diagnostiqué et planifié, il est temps
          d&apos;agir, mais de façon mesurée et communiquée.
        </p>
        <h3 className={h3Class}>Prise en main opérationnelle</h3>
        <ul className={ulClass}>
          <li>
            <strong>Lancez 2 à 3 projets structurants.</strong> Choisissez des
            initiatives à fort impact visible&nbsp;: amélioration d&apos;un
            processus de production, refonte du suivi commercial, digitalisation
            d&apos;une tâche administrative. Limitez le nombre de chantiers
            simultanés pour éviter la dispersion et l&apos;épuisement des équipes.
          </li>
          <li>
            <strong>Formalisez votre plan de création de valeur.</strong> Rédigez
            un plan à 12 mois incluant les axes de croissance organique,
            d&apos;optimisation des coûts et d&apos;investissement. Partagez ce
            plan avec votre conseil d&apos;administration et votre équipe de
            direction.
          </li>
          <li>
            <strong>Renforcez votre équipe si nécessaire.</strong> Si la{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              due diligence
            </Link>{" "}
            ou votre diagnostic terrain a révélé des lacunes dans l&apos;équipe
            dirigeante, lancez les premiers recrutements. Respectez scrupuleusement
            le droit du travail français pour toute modification de contrat ou
            rupture&nbsp;: la procédure de licenciement est encadrée et tout
            manquement expose l&apos;entreprise à des contentieux
            prud&apos;homaux coûteux.
          </li>
        </ul>

        <h3 className={h3Class}>Relation avec les investisseurs</h3>
        <ul className={ulClass}>
          <li>
            <strong>Envoyez votre premier reporting investisseur.</strong> Un
            rapport mensuel structuré, résultats financiers, indicateurs
            opérationnels, faits marquants, prochaines étapes, installe
            la discipline et la confiance avec vos investisseurs. Soyez honnête
            sur les difficultés rencontrées.
          </li>
          <li>
            <strong>Organisez votre premier conseil d&apos;administration.</strong>{" "}
            Présentez votre diagnostic des 60 premiers jours, votre plan de
            création de valeur et les premiers résultats. Utilisez votre conseil
            comme ressource stratégique, pas comme simple instance de contrôle.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Les spécificités françaises à maîtriser</h2>
      <div className={bodyClass}>
        <p>
          Le cadre juridique et social français impose des contraintes que le
          nouveau dirigeant doit intégrer dès le premier jour&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Droit du travail&nbsp;:</strong> Le Code du travail français
            est l&apos;un des plus protecteurs au monde. Toute modification des
            conditions de travail (horaires, lieu, rémunération variable) requiert
            l&apos;accord individuel du salarié. Les licenciements doivent reposer
            sur une cause réelle et sérieuse et suivre une procédure stricte.
          </li>
          <li>
            <strong>Conventions collectives&nbsp;:</strong> Elles s&apos;imposent
            à l&apos;employeur et prévalent sur le contrat de travail lorsqu&apos;elles
            sont plus favorables au salarié. Vérifiez la CCN applicable et ses
            incidences sur les minima salariaux, les primes et les congés.
          </li>
          <li>
            <strong>Relations avec les IRP&nbsp;:</strong> Le CSE dispose de
            prérogatives étendues en matière d&apos;information et de consultation.
            Les décisions stratégiques (restructuration, plan social, modification
            significative des conditions de travail) requièrent une consultation
            préalable du CSE avec un avis motivé.
          </li>
          <li>
            <strong>Obligations URSSAF&nbsp;:</strong> Les cotisations sociales
            patronales représentent environ 40 à 45&nbsp;% du salaire brut. Le
            non-paiement ou le retard de paiement entraîne des majorations et peut
            déclencher un contrôle.
          </li>
          <li>
            <strong>Relation bancaire&nbsp;:</strong> En France, la relation
            bancaire est un actif stratégique pour une PME. Le banquier historique
            connaît l&apos;entreprise, son dirigeant et son secteur. Un changement
            brutal de banque peut déstabiliser les lignes de crédit et les
            garanties en place.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Erreurs fréquentes à éviter</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>
            <strong>Changer trop vite.</strong> La tentation de tout
            restructurer dès l&apos;arrivée est le piège le plus courant. Les
            salariés ont besoin de stabilité avant de pouvoir accueillir le
            changement.
          </li>
          <li>
            <strong>Négliger les relations humaines.</strong> Dans une PME
            française, le facteur humain prime sur les processus. Votre
            crédibilité se construit dans les interactions quotidiennes, pas
            dans les présentations PowerPoint.
          </li>
          <li>
            <strong>Ignorer les spécificités juridiques.</strong> Le droit du
            travail français ne pardonne pas l&apos;improvisation. Entourez-vous
            d&apos;un avocat en droit social dès le premier jour.
          </li>
          <li>
            <strong>S&apos;isoler.</strong> Le passage du conseil ou de la banque
            d&apos;affaires à la direction d&apos;une PME peut être déstabilisant.
            Appuyez-vous sur votre conseil d&apos;administration, vos investisseurs
            et le réseau{" "}
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
              ETA en France
            </Link>{" "}
            pour partager vos interrogations et bénéficier de retours
            d&apos;expérience.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Code du travail, Articles L. 2312-8 et suivants (information et consultation du CSE).
        </li>
        <li>
          Loi n&deg; 2014-856 du 31 juillet 2014 (loi Hamon) &mdash; <em>Droit d&apos;information des salariés en cas de cession</em>.
        </li>
        <li>
          INSEAD &mdash; <em>ETA &amp; Search Funds Research Hub</em>, 2024.
        </li>
        <li>
          Stanford Graduate School of Business &mdash; <em>2024 Search Fund Study</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Reprendre une Entreprise&nbsp;: Le Guide du Repreneur</em>, 2024.
        </li>
        <li>
          URSSAF &mdash; <em>Guide de l&apos;Employeur</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
