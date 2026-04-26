import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function AdvisoryBoardFR() {
  return (
    <article>
      <h1 className={h1Class}>Construire un Comité Consultatif pour votre Search Fund</h1>

      <div className={bodyClass}>
        <p>
          Le comité consultatif (advisory board) est un atout stratégique
          souvent sous-exploité par les searchers en France. Distinct du comité
          stratégique prévu par le pacte d&apos;actionnaires et du{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">
            conseil d&apos;administration
          </Link>{" "}
          formel, le comité consultatif est un cercle de conseillers bénévoles ou
          faiblement rémunérés, choisis par le dirigeant pour leur expertise
          sectorielle, leur réseau et leur capacité à servir de caisse de
          résonance sur les décisions clés. Ce guide détaille les profils à
          recruter, les modalités de compensation, la fréquence des réunions, le
          cadre juridique français et les différences fondamentales avec les
          organes formels de gouvernance.
        </p>
        <p>
          Pour la dimension formelle de la gouvernance, consultez notre article
          sur la{" "}
          <Link href="/learn/board-governance" className="text-apple-accent hover:underline">
            gouvernance d&apos;entreprise en France
          </Link>. Pour la recherche de vos investisseurs, reportez-vous à notre
          guide sur{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            comment trouver des investisseurs
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Pourquoi un comité consultatif&nbsp;?</h2>
      <div className={bodyClass}>
        <p>
          Le searcher qui reprend une PME se retrouve dans une situation
          paradoxale&nbsp;: il est le dirigeant de l&apos;entreprise mais il manque
          d&apos;expérience opérationnelle dans le secteur, il découvre les
          spécificités du marché français et il doit prendre des décisions
          structurantes dès les{" "}
          <Link href="/learn/first-100-days" className="text-apple-accent hover:underline">
            premiers 100 jours
          </Link>. Le comité consultatif comble ce déficit en apportant&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Expertise sectorielle&nbsp;:</strong> Des professionnels du
            secteur qui connaissent les codes, les acteurs, les tendances et les
            pièges. Un ancien dirigeant du secteur peut identifier en quelques
            minutes un risque qu&apos;il faudrait des mois au searcher pour détecter
            seul.
          </li>
          <li>
            <strong>Réseau opérationnel&nbsp;:</strong> Introductions auprès de
            clients potentiels, de partenaires stratégiques, de fournisseurs
            alternatifs, de candidats à l&apos;embauche. Dans le tissu économique
            français, le réseau personnel reste un levier d&apos;affaires puissant,
            surtout dans les métiers de services B2B et les filières industrielles.
          </li>
          <li>
            <strong>Regard extérieur&nbsp;:</strong> Les membres du comité
            consultatif ne sont pas impliqués dans la gestion quotidienne et
            n&apos;ont pas d&apos;enjeu capitalistique direct. Leur regard est plus
            objectif que celui des investisseurs, qui peuvent être influencés par
            la valorisation de leur participation.
          </li>
          <li>
            <strong>Soutien moral&nbsp;:</strong> La solitude du dirigeant de PME
            est une réalité, surtout en France où la culture entrepreneuriale est
            moins développée que dans les pays anglo-saxons. Le comité consultatif
            offre un espace de parole confidentiel où le searcher peut exprimer
            ses doutes et ses difficultés sans crainte de jugement.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Profils à recruter</h2>
      <div className={bodyClass}>
        <p>
          Un comité consultatif efficace réunit 3 à 5 membres aux profils
          complémentaires. L&apos;homogénéité est un piège&nbsp;: il faut rechercher
          la diversité d&apos;expériences, de compétences et de perspectives.
        </p>

        <h3 className={h3Class}>L&apos;expert sectoriel</h3>
        <p>
          Un ancien dirigeant ou cadre supérieur du secteur d&apos;activité de
          l&apos;entreprise acquise. Idéalement, il a dirigé une entreprise de taille
          comparable dans le même secteur et connaît les enjeux réglementaires,
          les dynamiques concurrentielles et les bonnes pratiques opérationnelles.
          En France, les associations professionnelles et les syndicats patronaux
          (MEDEF, CPME, fédérations de branche) sont d&apos;excellentes sources pour
          identifier ces profils.
        </p>

        <h3 className={h3Class}>Le financier / ex-banker</h3>
        <p>
          Un professionnel de la finance d&apos;entreprise, ancien banquier
          d&apos;affaires, directeur financier de PME-ETI, expert-comptable
          expérimenté, qui apporte son expertise sur la structuration
          financière, la gestion de trésorerie, les relations bancaires et les
          opérations de croissance externe. Ce profil est particulièrement
          précieux pour un searcher issu d&apos;un parcours non financier.
        </p>

        <h3 className={h3Class}>Le serial entrepreneur ou le dirigeant expérimenté</h3>
        <p>
          Un entrepreneur qui a déjà traversé les étapes de croissance et de
          cession d&apos;une PME. Son expérience du management de terrain, de la
          gestion des conflits sociaux, des négociations commerciales et du
          pilotage stratégique est inestimable. En France, le réseau des CCI
          (Chambres de Commerce et d&apos;Industrie), le réseau Réseau Entreprendre
          et les clubs de dirigeants (APM, Dirigeants Commerciaux de France)
          regorgent de profils de ce type.
        </p>

        <h3 className={h3Class}>Le spécialiste fonctionnel</h3>
        <p>
          Selon les besoins de l&apos;entreprise acquise, un expert dans un domaine
          fonctionnel clé&nbsp;: transformation digitale, ressources humaines,
          commercial et marketing, juridique et réglementaire, supply chain. Le
          choix dépend des faiblesses identifiées dans l&apos;entreprise lors de la
          due diligence et des chantiers prioritaires des premiers mois.
        </p>

        <h3 className={h3Class}>Le mentor ETA</h3>
        <p>
          Un autre searcher ayant déjà réalisé son acquisition, ou un investisseur
          de search fund expérimenté qui n&apos;a pas investi dans votre opération.
          Ce profil apporte une compréhension unique des enjeux spécifiques au
          modèle search fund&nbsp;: relation avec les investisseurs, gestion du
          step-up, préparation de la sortie. La communauté ETA française est
          encore restreinte mais en croissance&nbsp;; les événements organisés par
          les business schools (HEC, INSEAD, IESE) et les conférences spécialisées
          sont des lieux privilégiés pour identifier ces mentors.
        </p>
      </div>

      <h2 className={h2Class}>Compensation des membres du comité consultatif</h2>
      <div className={bodyClass}>
        <p>
          La rémunération des membres du comité consultatif varie considérablement
          selon le profil, l&apos;implication attendue et les moyens de l&apos;entreprise.
          En France, plusieurs formules coexistent.
        </p>

        <h3 className={h3Class}>Bénévolat</h3>
        <p>
          La formule la plus courante dans les search funds de petite taille.
          Les membres du comité acceptent de consacrer quelques heures par
          trimestre en contrepartie de la satisfaction intellectuelle, du réseau
          et de la visibilité que leur apporte cette participation. Le bénévolat
          fonctionne bien avec des profils retraités ou semi-retraités, des
          entrepreneurs établis qui aiment accompagner la relève, et des
          professionnels motivés par la relation personnelle avec le searcher.
        </p>

        <h3 className={h3Class}>Jetons de présence ou honoraires</h3>
        <p>
          Pour les profils les plus sollicités, une rémunération sous forme de
          jetons de présence (terme utilisé pour les administrateurs de SA, mais
          applicable par extension) ou d&apos;honoraires de conseil est
          envisageable. Les montants observés dans l&apos;écosystème français des
          PME se situent entre 1&nbsp;000 et 5&nbsp;000&nbsp;&euro; par an et par
          membre, versés sous forme de facture (si le membre est consultant) ou
          de note d&apos;honoraires.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Facture de conseil&nbsp;:</strong> Le membre du comité
            facture ses prestations via sa structure (société de conseil, SASU,
            micro-entreprise). Cette formule est la plus simple juridiquement et
            fiscalement.
          </li>
          <li>
            <strong>Prise en charge des frais&nbsp;:</strong> A minima, les frais
            de déplacement et de repas liés aux réunions du comité sont pris en
            charge par l&apos;entreprise. C&apos;est un geste de respect qui ne coûte
            presque rien mais qui est apprécié.
          </li>
        </ul>

        <h3 className={h3Class}>Participation au capital</h3>
        <p>
          Dans certains cas, les membres du comité consultatif les plus impliqués
          peuvent se voir proposer une participation minoritaire au capital, sous
          forme de BSPCE, d&apos;actions gratuites ou d&apos;un investissement en
          numéraire à des conditions préférentielles. Cette option aligne les
          intérêts mais doit être validée avec les investisseurs existants et
          encadrée par le pacte d&apos;actionnaires pour éviter toute dilution non
          prévue. Le montant est typiquement symbolique (0,5 à 2&nbsp;% du
          capital).
        </p>
      </div>

      <h2 className={h2Class}>Fréquence et format des réunions</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Rythme trimestriel recommandé</h3>
        <p>
          La fréquence idéale est trimestrielle, avec des réunions de 2 à 3 heures.
          Un rythme plus soutenu risque de lasser les membres bénévoles&nbsp;; un
          rythme plus espacé réduit la continuité et l&apos;engagement. Les réunions
          peuvent alterner entre présentiel (une fois par semestre, idéalement
          dans les locaux de l&apos;entreprise) et visioconférence.
        </p>

        <h3 className={h3Class}>Format type d&apos;une réunion</h3>
        <ol className={olClass}>
          <li>
            <strong>Tour de table (15 min)&nbsp;:</strong> Chaque membre partage
            ses observations depuis la dernière réunion. Ce moment informel
            permet de capter des signaux faibles que le dirigeant n&apos;a pas
            nécessairement perçus.
          </li>
          <li>
            <strong>Présentation du dirigeant (30 min)&nbsp;:</strong> Le
            searcher présente les faits marquants du trimestre, les résultats
            financiers et opérationnels, les réussites et les difficultés. Le
            format est moins formel que le reporting aux investisseurs , 
            l&apos;accent est mis sur les enjeux opérationnels concrets.
          </li>
          <li>
            <strong>Sujet approfondi (45 min)&nbsp;:</strong> Chaque réunion
            traite un sujet de fond&nbsp;: stratégie commerciale, organisation
            des équipes, projet de croissance externe, transformation digitale,
            gestion d&apos;une crise. Le dirigeant sollicite les avis et les
            recommandations des membres.
          </li>
          <li>
            <strong>Actions et prochaines étapes (15 min)&nbsp;:</strong> Les
            recommandations sont synthétisées, les actions à mener identifiées et
            les responsables désignés. Un compte-rendu est envoyé aux membres dans
            les 48 heures.
          </li>
        </ol>

        <h3 className={h3Class}>Consultations ad hoc</h3>
        <p>
          En dehors des réunions formelles, le dirigeant doit pouvoir contacter
          individuellement les membres du comité pour des questions ponctuelles.
          Cette disponibilité est l&apos;un des critères de sélection des membres&nbsp;:
          un conseiller brillant mais injoignable n&apos;apporte aucune valeur en
          situation d&apos;urgence. Il est recommandé de fixer un cadre explicite dès
          le départ&nbsp;: par exemple, 1 à 2 appels par mois de 20 minutes
          maximum, en plus des réunions trimestrielles.
        </p>
      </div>

      <h2 className={h2Class}>Cadre juridique en France</h2>
      <div className={bodyClass}>
        <p>
          Le comité consultatif n&apos;a pas de statut juridique propre en droit
          français. Contrairement au conseil d&apos;administration de la SA ou au
          comité de surveillance de la SAS (lorsqu&apos;il est prévu par les
          statuts), le comité consultatif est un organe purement informel, créé
          par la volonté du dirigeant.
        </p>

        <h3 className={h3Class}>Absence de responsabilité légale</h3>
        <p>
          Les membres du comité consultatif ne sont pas des mandataires sociaux
          et n&apos;engagent pas leur responsabilité au titre de la gestion de la
          société. Ils ne peuvent pas être qualifiés de dirigeants de fait, sauf
          s&apos;ils s&apos;immiscent de manière caractérisée dans la gestion effective de
          l&apos;entreprise (un risque à surveiller mais rarement matérialisé en
          pratique).
        </p>

        <h3 className={h3Class}>Formalisation recommandée</h3>
        <p>
          Bien que le comité consultatif soit informel, il est recommandé de
          formaliser la relation par une lettre de mission ou une convention de
          conseil couvrant les points suivants&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Objet et périmètre&nbsp;:</strong> Description du rôle du
            membre (conseil, introduction, expertise) et des limites de son
            intervention (pas de pouvoir de décision, pas de représentation de la
            société vis-à-vis des tiers).
          </li>
          <li>
            <strong>Confidentialité&nbsp;:</strong> Clause de confidentialité
            couvrant les informations financières, commerciales et stratégiques
            communiquées au membre. En France, la violation d&apos;une obligation de
            confidentialité engage la responsabilité civile du contrevenant et
            peut, dans certains cas, constituer une infraction pénale (abus de
            confiance, recel de violation du secret des affaires).
          </li>
          <li>
            <strong>Non-concurrence&nbsp;:</strong> Clause interdisant au membre
            du comité de participer à une activité concurrente ou de détourner
            des clients, des fournisseurs ou des collaborateurs de l&apos;entreprise.
            La durée et le périmètre de cette clause doivent être proportionnés
            pour être valides en droit français.
          </li>
          <li>
            <strong>Compensation&nbsp;:</strong> Modalités de rémunération (ou
            absence de rémunération) et prise en charge des frais. Si une
            rémunération est prévue, les modalités de facturation et de paiement
            doivent être précisées.
          </li>
          <li>
            <strong>Durée et résiliation&nbsp;:</strong> Durée du mandat
            (généralement un an renouvelable par tacite reconduction) et
            conditions de résiliation (préavis d&apos;un mois par l&apos;une ou l&apos;autre
            des parties).
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Comité consultatif vs comité stratégique vs conseil d&apos;administration</h2>
      <div className={bodyClass}>
        <p>
          La confusion entre ces trois organes est fréquente. Voici les
          différences fondamentales&nbsp;:
        </p>

        <h3 className={h3Class}>Le comité consultatif (advisory board)</h3>
        <ul className={ulClass}>
          <li>Organe informel, sans existence légale propre.</li>
          <li>Composé de conseillers choisis par le dirigeant.</li>
          <li>Rôle purement consultatif&nbsp;: avis, recommandations, introductions.</li>
          <li>Aucune responsabilité juridique des membres.</li>
          <li>Pas de pouvoir de décision ni de droit de veto.</li>
          <li>Rémunération faible ou nulle.</li>
        </ul>

        <h3 className={h3Class}>Le comité stratégique (SAS)</h3>
        <ul className={ulClass}>
          <li>Organe statutaire ou conventionnel (prévu par les statuts ou le pacte d&apos;actionnaires).</li>
          <li>Composé de représentants des investisseurs et du dirigeant.</li>
          <li>Rôle de contrôle et d&apos;orientation stratégique&nbsp;: avis conforme sur les décisions majeures.</li>
          <li>Responsabilité variable selon les statuts (potentielle qualification de dirigeant de fait).</li>
          <li>Pouvoir de veto sur certaines décisions prédéfinies.</li>
          <li>Rémunération possible (jetons de présence).</li>
        </ul>

        <h3 className={h3Class}>Le conseil d&apos;administration (SA)</h3>
        <ul className={ulClass}>
          <li>Organe légal obligatoire dans les SA.</li>
          <li>Composé de 3 à 18 administrateurs nommés par l&apos;assemblée générale.</li>
          <li>Rôle de gouvernance&nbsp;: définition de la stratégie, contrôle de la gestion, nomination du DG.</li>
          <li>Responsabilité civile et pénale des administrateurs.</li>
          <li>Pouvoir de décision complet dans les limites de ses attributions légales.</li>
          <li>Rémunération encadrée par la loi (politique de rémunération soumise au vote de l&apos;AG).</li>
        </ul>
      </div>

      <h2 className={h2Class}>Bonnes pratiques pour un comité consultatif performant</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>
            <strong>Définir les attentes dès le départ&nbsp;:</strong> Chaque
            membre doit comprendre clairement ce que l&apos;on attend de lui
            (présence aux réunions, disponibilité pour des appels ponctuels,
            introductions) et ce que l&apos;on n&apos;attend pas (implication
            opérationnelle quotidienne, reporting aux investisseurs).
          </li>
          <li>
            <strong>Renouveler régulièrement la composition&nbsp;:</strong> Les
            besoins du dirigeant évoluent avec la maturité de l&apos;entreprise. Un
            renouvellement partiel tous les 12 à 18 mois permet d&apos;adapter les
            compétences du comité aux enjeux du moment.
          </li>
          <li>
            <strong>Préparer les réunions&nbsp;:</strong> Envoyer un ordre du
            jour et un dossier de présentation au moins une semaine avant la
            réunion. Les membres du comité consacrent du temps bénévole ou
            faiblement rémunéré&nbsp;: respecter ce temps en étant organisé et
            efficace.
          </li>
          <li>
            <strong>Être transparent sur les difficultés&nbsp;:</strong> Le
            comité consultatif n&apos;est pas un espace de communication
            institutionnelle. C&apos;est un lieu de confiance où le dirigeant peut
            partager ses doutes et ses erreurs pour bénéficier de conseils
            sincères.
          </li>
          <li>
            <strong>Exprimer sa gratitude&nbsp;:</strong> Un remerciement
            personnalisé après chaque réunion, un cadeau symbolique en fin
            d&apos;année, une invitation à un événement d&apos;entreprise, ces
            gestes simples entretiennent la motivation des membres bénévoles.
          </li>
          <li>
            <strong>Mesurer l&apos;impact&nbsp;:</strong> À chaque réunion, faire le
            bilan des recommandations de la réunion précédente&nbsp;: lesquelles
            ont été suivies&nbsp;? Quel résultat&nbsp;? Ce suivi montre aux
            membres que leurs conseils sont pris au sérieux et entretient leur
            engagement.
          </li>
        </ul>
        <p>
          Le comité consultatif est un investissement en temps qui rapporte un
          retour considérable en termes de qualité de décision, de réseau et de
          sérénité pour le dirigeant. Dans l&apos;écosystème français des search
          funds, encore jeune et en structuration, les searchers qui construisent
          un comité consultatif solide disposent d&apos;un avantage compétitif réel
          par rapport à ceux qui s&apos;appuient uniquement sur leurs investisseurs
          pour être conseillés.
        </p>
      </div>
    </article>
  );
}
