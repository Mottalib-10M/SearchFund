import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function WorkingWithAdvisorsFR() {
  return (
    <article>
      <h1 className={h1Class}>
        Travailler avec des Conseillers&nbsp;: Avocats et Experts-Comptables
      </h1>

      <div className={bodyClass}>
        <p>
          L&apos;acquisition d&apos;une PME en France est un processus complexe
          qui mobilise des compétences juridiques, comptables, fiscales et
          financières que même le repreneur le plus expérimenté ne maîtrise
          pas seul. Le choix de ses conseillers, avocats d&apos;affaires,
          experts-comptables, notaires, courtiers en cession, est l&apos;une
          des décisions les plus structurantes du parcours de reprise. Un bon
          conseil accélère la transaction, protège l&apos;acquéreur contre les
          risques cachés et optimise le montage juridique et fiscal. Un mauvais
          conseil peut faire échouer une opération, exposer le repreneur à des
          risques non identifiés, voire engager sa responsabilité personnelle.
        </p>
        <p>
          Ce guide passe en revue les différents professionnels qui
          interviennent dans le processus d&apos;acquisition d&apos;une PME en
          France, leurs rôles respectifs, les critères de sélection, les
          structures d&apos;honoraires et les bonnes pratiques pour gérer
          efficacement son équipe de conseillers. Il intègre les spécificités
          françaises en matière d&apos;organisation professionnelle (Ordre des
          experts-comptables, Ordre des avocats), de réglementation et de
          pratiques de marché.
        </p>
      </div>

      <h2 className={h2Class}>L&apos;avocat d&apos;affaires&nbsp;: pivot de la transaction</h2>
      <div className={bodyClass}>
        <p>
          L&apos;avocat d&apos;affaires est le premier conseil que le searcher
          doit identifier, idéalement bien avant d&apos;avoir trouvé une cible.
          En France, la profession d&apos;avocat est réglementée et les avocats
          spécialisés en fusions-acquisitions (M&amp;A) de PME constituent un
          segment bien identifié de la profession.
        </p>

        <h3 className={h3Class}>Quand engager un avocat</h3>
        <p>
          L&apos;avocat doit intervenir au plus tard à la rédaction de la{" "}
          <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
            lettre d&apos;intention (LOI)
          </Link>.
          Idéalement, le searcher a identifié son avocat pendant la phase de
          recherche, afin de pouvoir le mobiliser rapidement lorsqu&apos;une
          cible émerge. La LOI, bien qu&apos;elle ne constitue pas un contrat
          de vente définitif en droit français, produit des effets juridiques
          significatifs (obligation de bonne foi, clause d&apos;exclusivité,
          clause de confidentialité). Faire relire la LOI avant signature
          permet d&apos;éviter des erreurs coûteuses et difficiles à renégocier
          ultérieurement.
        </p>

        <h3 className={h3Class}>Rôle de l&apos;avocat dans le processus</h3>
        <p>
          De la LOI au closing, l&apos;avocat d&apos;affaires intervient à
          chaque étape critique&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Rédaction et négociation de la LOI&nbsp;:</strong> Structuration
            des clauses clés (prix, conditions suspensives, exclusivité,
            calendrier).
          </li>
          <li>
            <strong>Audit juridique (due diligence)&nbsp;:</strong> Analyse des
            contrats commerciaux, baux, contrats de travail, litiges en cours,
            propriété intellectuelle, conformité réglementaire. Cet audit
            s&apos;inscrit dans le cadre plus large de la{" "}
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              checklist de due diligence
            </Link>.
          </li>
          <li>
            <strong>Rédaction du protocole de cession&nbsp;:</strong> Le
            protocole (ou SPA, Share Purchase Agreement) est le contrat
            définitif de cession. Il comporte les déclarations et garanties du
            vendeur, la garantie d&apos;actif et de passif (GAP), les conditions
            de la clause d&apos;accompagnement, les ajustements de prix et les
            mécanismes d&apos;indemnisation.
          </li>
          <li>
            <strong>Garantie d&apos;actif et de passif (GAP)&nbsp;:</strong> Clause
            spécifique au droit français par laquelle le vendeur garantit
            l&apos;acquéreur contre l&apos;apparition de passifs non révélés.
            La rédaction de la GAP est un exercice technique qui nécessite
            une maîtrise fine du droit des affaires et de la jurisprudence.
          </li>
          <li>
            <strong>Closing et formalités post-cession&nbsp;:</strong> Signature
            des actes, enregistrement au greffe, notifications aux tiers,
            formalités Kbis, éventuelles autorisations réglementaires.
          </li>
        </ul>

        <h3 className={h3Class}>Critères de sélection</h3>
        <p>
          Le critère déterminant est l&apos;expérience en M&amp;A de PME-ETI.
          Un avocat spécialisé dans les fusions de grands groupes (CAC 40) ne
          sera pas le bon interlocuteur pour une acquisition de PME de 2 à
          15 millions d&apos;euros. Le searcher doit privilégier un avocat qui
          connaît les spécificités du segment&nbsp;: structure de financement
          avec crédit vendeur, intervention de Bpifrance, droit social des
          PME, clause d&apos;accompagnement du cédant.
        </p>
        <p>
          Questions à poser lors de la sélection&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Combien de transactions de PME (1 à 20 M&euro;) avez-vous
            accompagnées au cours des trois dernières années&nbsp;?
          </li>
          <li>
            Avez-vous déjà travaillé avec des search funds ou des repreneurs
            individuels&nbsp;?
          </li>
          <li>
            Quelle est votre approche de la garantie d&apos;actif et de
            passif&nbsp;?
          </li>
          <li>
            Travaillez-vous avec des experts-comptables et des banquiers que
            vous pouvez recommander&nbsp;?
          </li>
          <li>
            Quel est votre barème d&apos;honoraires pour une opération de cette
            taille&nbsp;?
          </li>
        </ul>

        <h3 className={h3Class}>Honoraires de l&apos;avocat</h3>
        <p>
          En France, les honoraires des avocats d&apos;affaires en M&amp;A de
          PME se structurent généralement selon trois modèles&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Forfait global&nbsp;:</strong> Un montant fixe couvrant
            l&apos;ensemble du processus, de la LOI au closing. Modèle
            privilégié par les repreneurs car il offre une visibilité
            budgétaire. Les fourchettes varient considérablement selon la
            taille et la complexité de l&apos;opération.
          </li>
          <li>
            <strong>Taux horaire&nbsp;:</strong> Facturation au temps passé,
            avec un taux variant selon l&apos;ancienneté de l&apos;associé ou du
            collaborateur. Ce modèle est plus courant dans les cabinets
            d&apos;envergure internationale.
          </li>
          <li>
            <strong>Mixte (forfait + success fee)&nbsp;:</strong> Un forfait
            réduit complété par une prime de succès (success fee) versée
            uniquement si la transaction aboutit. Ce modèle aligne les
            intérêts de l&apos;avocat et du repreneur.
          </li>
        </ul>
        <p>
          Il est essentiel de formaliser le mandat (convention d&apos;honoraires)
          dès le début de la mission, conformément aux obligations
          déontologiques de la profession.
        </p>
      </div>

      <h2 className={h2Class}>L&apos;expert-comptable&nbsp;: gardien des chiffres</h2>
      <div className={bodyClass}>
        <p>
          L&apos;expert-comptable est le second pilier de l&apos;équipe de
          conseillers du repreneur. En France, la profession est organisée par
          l&apos;Ordre des Experts-Comptables (OEC), institué par
          l&apos;ordonnance du 19 septembre 1945. Seuls les professionnels
          inscrits au tableau de l&apos;Ordre sont habilités à exercer la
          profession d&apos;expert-comptable et à engager leur responsabilité
          professionnelle sur les travaux comptables et d&apos;audit.
        </p>

        <h3 className={h3Class}>Rôle dans le processus d&apos;acquisition</h3>
        <p>
          L&apos;expert-comptable intervient à deux niveaux dans une
          acquisition de PME&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Audit d&apos;acquisition (due diligence financière)&nbsp;:</strong>{" "}
            L&apos;expert-comptable réalise ou pilote le{" "}
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              rapport de Quality of Earnings (QoE)
            </Link>,
            qui constitue le socle financier de la due diligence. Ce rapport
            analyse les comptes historiques (trois à cinq exercices), calcule
            l&apos;EBITDA normalisé en retraitant les éléments non récurrents
            et non représentatifs (rémunération du dirigeant, charges
            personnelles, loyers hors marché, CIR/CICE), et évalue la qualité
            et la récurrence du chiffre d&apos;affaires.
          </li>
          <li>
            <strong>Structuration fiscale et comptable&nbsp;:</strong>{" "}
            L&apos;expert-comptable conseille le repreneur sur le choix de la
            structure juridique d&apos;acquisition (holding de reprise,
            intégration fiscale, régime mère-fille), l&apos;optimisation de la
            déductibilité des intérêts d&apos;emprunt, l&apos;allocation du prix
            d&apos;acquisition et les obligations déclaratives post-cession.
          </li>
        </ol>

        <h3 className={h3Class}>L&apos;Ordre des Experts-Comptables&nbsp;: gage de qualité</h3>
        <p>
          L&apos;inscription à l&apos;Ordre est une garantie pour le repreneur&nbsp;:
          elle implique le respect d&apos;un code de déontologie, une obligation
          de formation continue, une assurance responsabilité civile
          professionnelle et une procédure disciplinaire en cas de manquement.
          Le repreneur peut vérifier l&apos;inscription d&apos;un expert-comptable
          sur l&apos;annuaire de l&apos;Ordre (annuaire.experts-comptables.org).
        </p>

        <h3 className={h3Class}>Critères de sélection</h3>
        <p>
          Comme pour l&apos;avocat, l&apos;expérience en reprise de PME est le
          critère primordial. Un expert-comptable habitué à la tenue comptable
          de petites structures n&apos;est pas nécessairement compétent pour
          réaliser un audit d&apos;acquisition ou structurer une holding de
          reprise. Le searcher doit rechercher un cabinet ayant une pratique
          avérée en matière de&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Audits d&apos;acquisition et rapports QoE pour des PME de taille
            comparable.
          </li>
          <li>
            Structuration de holdings de reprise (SAS ou SARL holding,
            intégration fiscale, régime mère-fille).
          </li>
          <li>
            Accompagnement post-acquisition (mise en place de reportings,
            tableaux de bord, optimisation de la trésorerie).
          </li>
        </ul>

        <h3 className={h3Class}>Honoraires de l&apos;expert-comptable</h3>
        <p>
          Les honoraires de l&apos;expert-comptable pour une mission d&apos;audit
          d&apos;acquisition sont généralement facturés au forfait, déterminé
          en fonction de la taille de la cible, de la complexité du dossier et
          du nombre d&apos;exercices analysés. La mission de structuration
          fiscale et d&apos;accompagnement post-cession fait l&apos;objet d&apos;une
          lettre de mission distincte, avec un honoraire annuel ou un forfait
          de mise en place.
        </p>
      </div>

      <h2 className={h2Class}>Le notaire&nbsp;: rôle spécifique en droit français</h2>
      <div className={bodyClass}>
        <p>
          Le notaire occupe une place particulière dans le paysage des
          conseillers en France, en raison de son statut d&apos;officier public
          ministériel. Son intervention n&apos;est pas systématiquement requise
          dans une cession de parts sociales ou d&apos;actions, mais elle
          devient nécessaire ou fortement recommandée dans plusieurs
          situations&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cession de fonds de commerce&nbsp;:</strong> La cession de
            fonds de commerce (par opposition à la cession de titres) implique
            des formalités notariales spécifiques, notamment la publication au
            BODACC (Bulletin Officiel des Annonces Civiles et Commerciales) et
            la séquestre du prix de cession pendant la période d&apos;opposition
            des créanciers.
          </li>
          <li>
            <strong>Immobilier&nbsp;:</strong> Si l&apos;acquisition inclut des
            biens immobiliers (locaux d&apos;exploitation, terrains) , 
            ce qui est fréquent dans les PME industrielles ou artisanales
            l&apos;intervention du notaire est obligatoire pour la
            publicité foncière.
          </li>
          <li>
            <strong>Pacte Dutreil&nbsp;:</strong> L&apos;utilisation du dispositif
            Dutreil (exonération partielle des droits de mutation en cas de
            transmission) nécessite des actes notariés pour formaliser les
            engagements collectifs et individuels de conservation.
          </li>
          <li>
            <strong>Donation-cession&nbsp;:</strong> Dans les schémas de
            transmission familiale où le cédant souhaite optimiser la
            fiscalité par une donation préalable, le notaire est
            incontournable.
          </li>
        </ul>

        <h3 className={h3Class}>Honoraires du notaire</h3>
        <p>
          Les émoluments du notaire sont en partie réglementés (émoluments
          proportionnels pour les actes soumis à tarif) et en partie libres
          (honoraires de conseil). Pour une cession de fonds de commerce ou
          une acquisition immobilière, les émoluments sont calculés selon un
          barème dégressif appliqué au prix de cession. Pour une mission de
          conseil (structuration patrimoniale, Dutreil), les honoraires sont
          librement négociés et formalisés dans une convention d&apos;honoraires.
        </p>
      </div>

      <h2 className={h2Class}>Le courtier en cession d&apos;entreprise</h2>
      <div className={bodyClass}>
        <p>
          Le courtier en cession d&apos;entreprise (ou intermédiaire en
          transmission) joue un rôle d&apos;intermédiation entre cédants et
          repreneurs. En France, cette profession n&apos;est pas réglementée au
          même titre que les avocats ou les experts-comptables, ce qui impose
          au repreneur une vigilance accrue dans le choix de son intermédiaire.
        </p>

        <h3 className={h3Class}>Types d&apos;intermédiaires</h3>
        <p>
          Le marché français de la transmission de PME fait intervenir
          plusieurs catégories d&apos;intermédiaires&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cabinets de cession spécialisés&nbsp;:</strong> Structures
            dédiées à la transmission de PME, souvent positionnées sur des
            segments de taille (1 à 5 M&euro;, 5 à 20 M&euro;) ou des
            secteurs d&apos;activité spécifiques. Ils travaillent en mandat de
            vente pour le compte du cédant.
          </li>
          <li>
            <strong>CCI (Chambres de Commerce et d&apos;Industrie)&nbsp;:</strong>{" "}
            Les CCI proposent des services d&apos;accompagnement à la
            transmission, incluant la mise en relation via la plateforme
            Transentreprise, des formations pour repreneurs et un
            accompagnement personnalisé. Ces services sont souvent accessibles
            à des tarifs préférentiels.
          </li>
          <li>
            <strong>CRA (Cédants et Repreneurs d&apos;Affaires)&nbsp;:</strong>{" "}
            Association nationale de bénévoles (anciens chefs d&apos;entreprise)
            qui accompagnent les cédants et repreneurs. Le CRA dispose
            d&apos;une base de données d&apos;entreprises à céder et organise des
            rencontres entre cédants et repreneurs.
          </li>
          <li>
            <strong>Banques d&apos;affaires et boutiques M&amp;A&nbsp;:</strong>{" "}
            Pour les opérations de taille supérieure (au-delà de 10 M&euro;),
            des banques d&apos;affaires ou des boutiques M&amp;A spécialisées
            interviennent avec des processus plus structurés (mémorandum
            d&apos;information, data room, process compétitif).
          </li>
        </ul>

        <h3 className={h3Class}>Mandats et honoraires des courtiers</h3>
        <p>
          Les courtiers en cession sont généralement mandatés par le vendeur
          et rémunérés par une commission de succès (success fee) calculée en
          pourcentage du prix de cession. La commission varie selon la taille
          de l&apos;opération et se situe typiquement entre 3&nbsp;% et
          8&nbsp;% du prix de cession pour les PME, avec un minimum
          forfaitaire. Certains intermédiaires facturent également un retainer
          (acompte mensuel) pour couvrir leurs frais de recherche.
        </p>
        <p>
          Pour le repreneur, la vigilance porte sur plusieurs points&nbsp;:
          s&apos;assurer que le mandat du courtier est exclusif ou non (ce qui
          peut limiter l&apos;accès à d&apos;autres cibles), vérifier les
          références de l&apos;intermédiaire, et comprendre les éventuels
          conflits d&apos;intérêts (le courtier représente le vendeur, pas
          l&apos;acheteur).
        </p>
      </div>

      <h2 className={h2Class}>Gérer son équipe de conseillers&nbsp;: bonnes pratiques</h2>
      <div className={bodyClass}>
        <p>
          Avoir de bons conseillers ne suffit pas&nbsp;: le repreneur doit
          savoir piloter son équipe de professionnels pour en tirer le
          meilleur parti. Voici les principes essentiels&nbsp;:
        </p>

        <h3 className={h3Class}>Centraliser la coordination</h3>
        <p>
          Le repreneur doit se positionner en chef d&apos;orchestre. Il est
          l&apos;unique point de convergence entre l&apos;avocat, l&apos;expert-comptable,
          le courtier, la banque et le cédant. Organiser des points d&apos;avancement
          réguliers, partager un calendrier commun et définir clairement les
          responsabilités de chacun évite les doublons, les angles morts et
          les retards.
        </p>

        <h3 className={h3Class}>Définir le périmètre de chaque mission</h3>
        <p>
          Les zones de chevauchement entre l&apos;avocat et l&apos;expert-comptable
          sont fréquentes (fiscalité de la holding, structuration du
          financement). Il est essentiel de définir dès le départ qui fait
          quoi, pour éviter les trous dans la raquette (aspects non couverts)
          comme les doublons (facturation de travaux redondants).
        </p>

        <h3 className={h3Class}>Négocier les honoraires en amont</h3>
        <p>
          Le repreneur doit obtenir des devis détaillés et les négocier avant
          le début des travaux. Les conventions d&apos;honoraires doivent
          préciser le périmètre de la mission, le montant (forfait ou
          estimation), les conditions de facturation et les modalités de
          résiliation. En cas de dépassement du budget, le conseiller doit
          en informer le repreneur avant de poursuivre les travaux.
        </p>

        <h3 className={h3Class}>Savoir challenger ses conseillers</h3>
        <p>
          Le repreneur ne doit pas suivre aveuglément les recommandations de
          ses conseillers. Chaque professionnel a ses propres biais&nbsp;:
          l&apos;avocat sera naturellement conservateur sur les risques
          juridiques, l&apos;expert-comptable focalisé sur les chiffres, le
          courtier pressé de conclure. Le rôle du repreneur est de synthétiser
          ces perspectives et de prendre des décisions éclairées.
        </p>
      </div>

      <h2 className={h2Class}>Erreurs fréquentes dans le choix des conseillers</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>
            <strong>Choisir sur le prix plutôt que sur la compétence&nbsp;:</strong>{" "}
            L&apos;honoraire le plus bas ne garantit pas le meilleur rapport
            qualité-prix. Un conseil inadapté peut coûter beaucoup plus cher
            en risques non identifiés, en négociations mal conduites ou en
            structuration fiscale sous-optimale.
          </li>
          <li>
            <strong>Engager les conseillers trop tard&nbsp;:</strong> Attendre
            d&apos;avoir signé une LOI pour chercher un avocat, ou ne faire
            intervenir l&apos;expert-comptable qu&apos;après le closing, expose
            le repreneur à des décisions irréversibles prises sans éclairage
            professionnel.
          </li>
          <li>
            <strong>Négliger la compatibilité relationnelle&nbsp;:</strong> Un
            processus d&apos;acquisition dure plusieurs mois et implique des
            moments de tension. Le repreneur doit s&apos;assurer qu&apos;il peut
            travailler efficacement avec chaque conseil, dans un climat de
            confiance et de réactivité.
          </li>
          <li>
            <strong>Ignorer les conflits d&apos;intérêts&nbsp;:</strong> Un avocat
            qui a déjà représenté le cédant ou le courtier dans d&apos;autres
            opérations peut avoir des loyautés partagées. Le repreneur doit
            poser la question directement et, en cas de doute, choisir un
            conseil indépendant.
          </li>
          <li>
            <strong>Ne pas formaliser les mandats&nbsp;:</strong> Travailler sans
            convention d&apos;honoraires signée expose le repreneur à des
            litiges sur la facturation et à une absence de recours en cas
            de prestation insuffisante.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Coordonner conseillers et cédant</h2>
      <div className={bodyClass}>
        <p>
          La relation avec le cédant est au cœur du processus de reprise en
          France. La dimension émotionnelle de la transmission y est
          particulièrement forte&nbsp;: le cédant cède souvent l&apos;œuvre
          d&apos;une vie, et sa préoccupation principale est la pérennité de
          l&apos;entreprise et la protection de ses salariés. Dans ce contexte,
          la gestion de l&apos;interaction entre les conseillers du repreneur
          et le cédant demande une attention particulière.
        </p>
        <p>
          Le repreneur doit veiller à ce que ses avocats adoptent un ton
          respectueux et constructif dans les négociations, même sur les points
          durs (garantie d&apos;actif et de passif, clause de non-concurrence,
          ajustements de prix). Une approche trop agressive de la part des
          conseils juridiques peut braquer un cédant et faire échouer une
          transaction qui était bien engagée sur le plan commercial. Le
          repreneur doit briefer ses conseils sur le profil du cédant, ses
          motivations et ses sensibilités avant chaque interaction directe.
        </p>
      </div>

      <h2 className={h2Class}>Le budget global de conseil&nbsp;: ordre de grandeur</h2>
      <div className={bodyClass}>
        <p>
          Le budget de conseil pour une acquisition de PME en France varie
          considérablement selon la taille de l&apos;opération, sa complexité
          et le nombre de professionnels mobilisés. À titre indicatif, les
          principaux postes de dépenses sont les suivants&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Avocat d&apos;affaires (LOI au closing)&nbsp;:</strong> Le
            montant dépend de la complexité de l&apos;opération et du cabinet
            retenu. Les cabinets de taille moyenne spécialisés en PME
            proposent généralement des forfaits plus accessibles que les
            grands cabinets internationaux.
          </li>
          <li>
            <strong>Expert-comptable (audit QoE + structuration)&nbsp;:</strong>{" "}
            Variable selon le nombre d&apos;exercices analysés et la taille
            de la cible.
          </li>
          <li>
            <strong>Notaire (si intervention requise)&nbsp;:</strong> Émoluments
            proportionnels au prix pour les actes tarifés, honoraires libres
            pour le conseil.
          </li>
          <li>
            <strong>Courtier (si mandat buy-side)&nbsp;:</strong> Commission
            de succès, généralement à la charge du vendeur dans les mandats
            sell-side.
          </li>
        </ul>
        <p>
          Ce budget doit être intégré dès le départ dans le plan de
          financement global de l&apos;opération. Il est courant que les frais
          de conseil représentent une proportion significative des coûts
          totaux de la transaction. Le searcher doit anticiper ces coûts et
          les inclure dans ses projections financières présentées aux
          investisseurs et aux banques.
        </p>
      </div>

      <h2 className={h2Class}>Pour aller plus loin</h2>
      <div className={bodyClass}>
        <p>
          Le choix et la gestion de ses conseillers sont des compétences clés
          pour tout repreneur de PME en France. Pour approfondir les sujets
          connexes, consultez nos autres guides&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
              Checklist de Due Diligence pour Acquisition de PME
            </Link>
          </li>
          <li>
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              Lettre d&apos;Intention (LOI)&nbsp;: Rédaction et Négociation
            </Link>
          </li>
          <li>
            <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
              ETA en France&nbsp;: Acquérir une Entreprise par Recherche Active
            </Link>
          </li>
          <li>
            <Link href="/learn/quality-of-earnings" className="text-apple-accent hover:underline">
              Quality of Earnings&nbsp;: Audit QoE à la Française
            </Link>
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Ordre des Experts-Comptables &mdash; <em>Guide de la Mission de Conseil en Reprise d&apos;Entreprise</em>, 2024.
        </li>
        <li>
          Conseil National des Barreaux &mdash; <em>Règlement Intérieur National de la Profession d&apos;Avocat (RIN)</em>, 2024.
        </li>
        <li>
          CCI France &mdash; <em>Guide du Repreneur d&apos;Entreprise</em>, 2024.
        </li>
        <li>
          CRA (Cédants et Repreneurs d&apos;Affaires) &mdash; <em>Rapport sur la Transmission d&apos;Entreprise en France</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Les Clés de la Reprise&nbsp;: Financement et Accompagnement</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
