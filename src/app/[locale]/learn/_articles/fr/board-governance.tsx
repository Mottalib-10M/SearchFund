import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function BoardGovernanceFR() {
  return (
    <article>
      <h1 className={h1Class}>Gouvernance d&apos;Entreprise&nbsp;: SA, SAS et Conseil d&apos;Administration</h1>

      <div className={bodyClass}>
        <p>
          La gouvernance d&apos;entreprise après une acquisition dans le cadre d&apos;un
          search fund est un sujet souvent sous-estimé par les searchers
          débutants. En France, les règles de gouvernance sont étroitement liées à
          la forme juridique choisie, SA, SAS ou SARL, et les
          investisseurs attendent une structuration qui protège leurs intérêts tout
          en laissant au dirigeant-acquéreur la latitude opérationnelle nécessaire
          pour créer de la valeur. Ce guide détaille les mécanismes de gouvernance
          post-acquisition, le rôle du comité stratégique, les meilleures
          pratiques inspirées de l&apos;IFA (Institut Français des Administrateurs) et
          les spécificités du droit français des sociétés.
        </p>
        <p>
          Pour les aspects juridiques de la structure, consultez notre guide sur
          la{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            structure juridique du search fund
          </Link>. Pour la dimension relationnelle avec les investisseurs,
          reportez-vous à notre article sur les{" "}
          <Link href="/learn/investor-relations" className="text-apple-accent hover:underline">
            relations investisseurs
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>SAS&nbsp;: la liberté statutaire au service de la gouvernance</h2>
      <div className={bodyClass}>
        <p>
          La Société par Actions Simplifiée n&apos;impose aucun organe de gouvernance
          obligatoire au-delà du Président. Pas de conseil d&apos;administration, pas
          de commissaire aux comptes obligatoire sous certains seuils, pas de
          contrainte sur les modalités de prise de décision collective. Cette
          liberté est à la fois un avantage et un risque&nbsp;: tout repose sur la
          qualité de la rédaction des statuts et du pacte d&apos;actionnaires.
        </p>

        <h3 className={h3Class}>Le Président&nbsp;: seul organe obligatoire</h3>
        <p>
          Le Président de SAS est le seul représentant légal de la société. Il
          dispose de pouvoirs étendus vis-à-vis des tiers, les limitations
          statutaires sont inopposables aux tiers de bonne foi. Dans un search
          fund, le searcher occupe naturellement cette fonction. Son pouvoir est
          toutefois encadré en interne par les clauses du pacte d&apos;actionnaires,
          qui prévoient des décisions soumises à l&apos;accord préalable des
          investisseurs.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Pouvoirs légaux&nbsp;:</strong> Représentation de la société
            en toutes circonstances, signature des actes engageant la société,
            pouvoir de direction générale. Le Président est également responsable
            de la publication des comptes annuels.
          </li>
          <li>
            <strong>Limitations internes&nbsp;:</strong> Le pacte d&apos;actionnaires
            prévoit généralement des seuils au-delà desquels le Président doit
            obtenir l&apos;accord du comité stratégique ou de l&apos;assemblée des
            associés&nbsp;: investissements supérieurs à un certain montant,
            recrutement de cadres dirigeants, endettement, distribution de
            dividendes, cession d&apos;actifs significatifs.
          </li>
          <li>
            <strong>Directeur Général&nbsp;:</strong> Les statuts peuvent prévoir
            la nomination d&apos;un ou plusieurs Directeurs Généraux disposant des
            mêmes pouvoirs de représentation que le Président. Cette option est
            utile dans les search funds en binôme ou lorsqu&apos;un investisseur
            souhaite disposer d&apos;un pouvoir de signature.
          </li>
        </ul>

        <h3 className={h3Class}>Le comité stratégique&nbsp;: l&apos;équivalent du board</h3>
        <p>
          En l&apos;absence de conseil d&apos;administration obligatoire, les search funds
          structurés en SAS mettent en place un comité stratégique (parfois appelé
          comité de surveillance ou advisory committee). Cet organe n&apos;a pas
          d&apos;existence légale propre, il est créé par les statuts ou le
          pacte d&apos;actionnaires, mais il joue un rôle central dans la
          gouvernance effective de la société.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Composition&nbsp;:</strong> Typiquement 3 à 5 membres&nbsp;:
            le Président (searcher), 2 à 3 représentants des investisseurs
            principaux et, idéalement, un membre indépendant apportant une
            expertise sectorielle. Pour recruter ce dernier, consultez notre guide
            sur la construction d&apos;un{" "}
            <Link href="/learn/advisory-board" className="text-apple-accent hover:underline">
              comité consultatif
            </Link>.
          </li>
          <li>
            <strong>Attributions&nbsp;:</strong> Le comité stratégique émet des
            avis (consultatifs ou conformes selon les statuts) sur les décisions
            stratégiques&nbsp;: budget annuel, plan d&apos;investissement, recrutement
            de cadres clés, opérations de croissance externe, endettement
            significatif, modification de la politique de rémunération du
            dirigeant.
          </li>
          <li>
            <strong>Fréquence des réunions&nbsp;:</strong> Trimestrielle en
            rythme de croisière, avec possibilité de réunions extraordinaires en
            cas de décision urgente. Les premières années post-acquisition, un
            rythme mensuel est souvent pratiqué pour accompagner le dirigeant dans
            sa prise de fonction.
          </li>
          <li>
            <strong>Formalisme&nbsp;:</strong> Même sans obligation légale, il est
            recommandé de formaliser les réunions par un procès-verbal signé,
            d&apos;établir un ordre du jour en amont et de distribuer un dossier de
            présentation (le board package) au moins cinq jours avant la réunion.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>SA&nbsp;: le conseil d&apos;administration obligatoire</h2>
      <div className={bodyClass}>
        <p>
          La Société Anonyme (SA) est la forme juridique traditionnelle des
          grandes entreprises françaises, mais elle reste pertinente pour certaines
          opérations de search fund, notamment lorsque la cible est
          elle-même une SA ou lorsque la taille de l&apos;opération justifie une
          gouvernance plus formalisée. La SA impose un conseil d&apos;administration
          composé de 3 à 18 membres, avec des règles strictes de fonctionnement.
        </p>

        <h3 className={h3Class}>Modes de gouvernance de la SA</h3>
        <p>
          La SA française offre deux modes de gouvernance alternatifs&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>SA à conseil d&apos;administration&nbsp;:</strong> Un conseil
            d&apos;administration (CA) nomme un Président du CA et un Directeur
            Général (ou un Président-Directeur Général cumulant les deux
            fonctions). Le CA définit les orientations stratégiques, contrôle la
            gestion et délibère sur les questions majeures. Le Directeur Général
            assure la direction opérationnelle.
          </li>
          <li>
            <strong>SA à directoire et conseil de surveillance&nbsp;:</strong> Le
            conseil de surveillance (3 à 18 membres) contrôle la gestion assurée
            par le directoire (1 à 5 membres). Ce mode est parfois préféré dans
            les search funds car il sépare clairement le pouvoir de contrôle
            (investisseurs au conseil de surveillance) et le pouvoir de direction
            (searcher au directoire).
          </li>
        </ol>

        <h3 className={h3Class}>Obligations spécifiques de la SA</h3>
        <ul className={ulClass}>
          <li>
            <strong>Commissaire aux comptes obligatoire&nbsp;:</strong> Toute SA
            doit nommer au moins un commissaire aux comptes, quelle que soit sa
            taille. Ce coût supplémentaire (entre 10&nbsp;000 et
            30&nbsp;000&nbsp;&euro; par an pour une PME) est à intégrer dans le
            business plan.
          </li>
          <li>
            <strong>Capital minimum&nbsp;:</strong> Le capital social minimum
            d&apos;une SA est de 37&nbsp;000&nbsp;&euro; (contre 1&nbsp;&euro; pour
            la SAS), avec libération d&apos;au moins 50&nbsp;% à la constitution.
          </li>
          <li>
            <strong>Assemblées générales&nbsp;:</strong> Les règles de
            convocation, de quorum et de majorité sont fixées par la loi et ne
            peuvent être que marginalement aménagées dans les statuts.
          </li>
          <li>
            <strong>Administrateurs&nbsp;:</strong> Les administrateurs d&apos;une SA
            doivent être des personnes physiques (sauf cas du représentant
            permanent d&apos;une personne morale). Le mandat est de 6 ans maximum
            renouvelable. Un administrateur ne peut exercer plus de 5 mandats
            simultanés dans des SA ayant leur siège en France.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Rôle des investisseurs dans la gouvernance</h2>
      <div className={bodyClass}>
        <p>
          Dans un search fund, les investisseurs détiennent généralement la
          majorité du capital post-acquisition. Leur rôle dans la gouvernance est
          double&nbsp;: protéger leur investissement et accompagner le dirigeant
          dans la création de valeur. L&apos;équilibre entre ces deux objectifs est
          déterminant pour le succès de l&apos;opération.
        </p>

        <h3 className={h3Class}>Droits de gouvernance des investisseurs</h3>
        <p>
          Le pacte d&apos;actionnaires prévoit typiquement les droits suivants au
          bénéfice des investisseurs&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Droit de veto&nbsp;:</strong> Sur les décisions stratégiques
            majeures (investissements au-delà d&apos;un seuil, endettement,
            recrutement de cadres dirigeants, modification des statuts, cession
            d&apos;actifs significatifs, distribution de dividendes).
          </li>
          <li>
            <strong>Droit d&apos;information renforcé&nbsp;:</strong> Reporting
            mensuel ou trimestriel, accès aux comptes, droit d&apos;audit. Les
            investisseurs de search fund attendent une transparence totale sur la
            performance opérationnelle et financière.
          </li>
          <li>
            <strong>Clauses de sortie&nbsp;:</strong> Droit de sortie conjointe
            (tag-along), obligation de sortie conjointe (drag-along), clause de
            rachat forcé en cas de faute du dirigeant, mécanismes de liquidité
            prédéfinis.
          </li>
          <li>
            <strong>Remplacement du dirigeant&nbsp;:</strong> Le pacte
            d&apos;actionnaires prévoit les conditions dans lesquelles les
            investisseurs peuvent révoquer le Président et nommer un remplaçant.
            Ce pouvoir est le levier ultime de la gouvernance, il doit
            être exercé avec discernement.
          </li>
        </ul>

        <h3 className={h3Class}>Les investisseurs comme partenaires stratégiques</h3>
        <p>
          Au-delà de leur rôle de contrôle, les meilleurs investisseurs de search
          fund apportent une valeur ajoutée opérationnelle considérable&nbsp;:
          expertise sectorielle, réseau de contacts (clients potentiels,
          partenaires, talents), expérience de situations de crise, capacité à
          financer la croissance future. Le searcher doit sélectionner ses
          investisseurs non seulement sur le montant de leur ticket mais sur la
          qualité de leur accompagnement. Pour approfondir ce sujet, consultez
          notre guide sur la{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            recherche d&apos;investisseurs
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Meilleures pratiques de l&apos;IFA pour les PME</h2>
      <div className={bodyClass}>
        <p>
          L&apos;Institut Français des Administrateurs (IFA) publie des
          recommandations de gouvernance adaptées aux PME et ETI, particulièrement
          pertinentes pour les sociétés issues d&apos;opérations de search fund. Ces
          recommandations, bien que non contraignantes, constituent une référence
          de marché.
        </p>

        <h3 className={h3Class}>Principes clés</h3>
        <ul className={ulClass}>
          <li>
            <strong>Séparation des fonctions&nbsp;:</strong> L&apos;IFA recommande
            de distinguer le rôle de Président du comité stratégique (un
            investisseur) et celui de Directeur Général (le searcher). Cette
            séparation renforce le contrôle sans entraver la direction
            opérationnelle.
          </li>
          <li>
            <strong>Évaluation annuelle du dirigeant&nbsp;:</strong> Le comité
            stratégique doit procéder à une évaluation formelle de la performance
            du dirigeant une fois par an, sur la base de critères objectifs
            définis en amont (KPIs financiers, opérationnels, stratégiques). Cette
            évaluation conditionne la rémunération variable et le vesting de
            l&apos;equity.
          </li>
          <li>
            <strong>Administrateur indépendant&nbsp;:</strong> Même dans les
            structures de petite taille, la présence d&apos;au moins un membre
            indépendant dans le comité stratégique est recommandée. L&apos;indépendant
            apporte un regard extérieur, facilite la résolution des conflits entre
            le dirigeant et les investisseurs, et renforce la crédibilité de la
            gouvernance auprès des partenaires (banques, fournisseurs, clients
            clés).
          </li>
          <li>
            <strong>Formation continue&nbsp;:</strong> L&apos;IFA recommande que les
            membres du comité stratégique bénéficient d&apos;une formation sur le
            secteur d&apos;activité, les enjeux réglementaires et les évolutions du
            marché. Pour un comité de search fund, une journée d&apos;immersion dans
            l&apos;entreprise en début de mandat est particulièrement utile.
          </li>
        </ul>

        <h3 className={h3Class}>Le board package&nbsp;: support de la réunion</h3>
        <p>
          La qualité de la gouvernance dépend largement de la qualité de
          l&apos;information fournie au comité stratégique. Le board package, envoyé
          au moins cinq jours avant chaque réunion, doit comprendre&nbsp;:
        </p>
        <ol className={olClass}>
          <li>Un tableau de bord synthétique&nbsp;: CA, EBITDA, trésorerie, dette nette, principaux KPIs opérationnels.</li>
          <li>Un commentaire de gestion&nbsp;: explication des écarts par rapport au budget, faits marquants du trimestre, points d&apos;attention.</li>
          <li>Un point sur les projets stratégiques&nbsp;: avancement des chantiers en cours, décisions à prendre.</li>
          <li>Les comptes détaillés&nbsp;: bilan, compte de résultat, tableau de flux de trésorerie.</li>
          <li>Un point RH&nbsp;: effectifs, recrutements, départs, climat social.</li>
        </ol>
      </div>

      <h2 className={h2Class}>Évolution de la gouvernance dans le temps</h2>
      <div className={bodyClass}>
        <p>
          La gouvernance d&apos;un search fund n&apos;est pas figée&nbsp;: elle doit
          évoluer avec la maturité de l&apos;entreprise et la confiance établie entre
          le dirigeant et les investisseurs.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Année 1&nbsp;:</strong> Gouvernance rapprochée. Réunions
            mensuelles du comité stratégique, reporting détaillé, implication
            forte des investisseurs dans les décisions clés. Le dirigeant est en
            phase d&apos;apprentissage et bénéficie de l&apos;accompagnement maximal.
          </li>
          <li>
            <strong>Années 2-3&nbsp;:</strong> Transition vers un rythme
            trimestriel. Le dirigeant a fait ses preuves, les processus sont en
            place, la confiance est établie. Les seuils de décision autonome du
            Président sont progressivement relevés.
          </li>
          <li>
            <strong>Années 4-5&nbsp;:</strong> Gouvernance de croisière. Le
            comité stratégique se concentre sur les orientations stratégiques de
            long terme (croissance externe, préparation de la sortie). Le
            dirigeant dispose d&apos;une large autonomie opérationnelle.
          </li>
          <li>
            <strong>Phase de sortie&nbsp;:</strong> Réactivation d&apos;une
            gouvernance rapprochée pour piloter le processus de cession&nbsp;:
            sélection des conseils, data room, négociation, due diligence des
            acquéreurs potentiels.
          </li>
        </ul>
        <p>
          Une gouvernance bien structurée est un facteur de valorisation au moment
          de la sortie. Les acquéreurs, fonds de private equity, groupes
          industriels ou autres search funds, valorisent les entreprises
          dotées d&apos;une gouvernance professionnelle, de processus documentés et
          d&apos;un reporting fiable. C&apos;est un investissement qui se rentabilise
          à chaque étape du cycle de vie du search fund.
        </p>
      </div>
    </article>
  );
}
