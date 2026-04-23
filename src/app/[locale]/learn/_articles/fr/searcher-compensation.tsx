import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function SearcherCompensationFR() {
  return (
    <article>
      <h1 className={h1Class}>Rémunération du Searcher-Dirigeant en France</h1>

      <div className={bodyClass}>
        <p>
          La rémunération du searcher qui devient dirigeant de la société acquise
          est un sujet central de l&apos;Entrepreneurship Through Acquisition (ETA)
          en France. Contrairement au modèle américain où la question se limite
          souvent au couple salaire + equity, le droit social et fiscal français
          impose de naviguer entre statut TNS (Travailleur Non Salarié) et
          assimilé salarié, charges sociales, flat tax sur les dividendes, plans
          d&apos;épargne retraite et mécanismes d&apos;intéressement au capital. Ce guide
          détaille l&apos;ensemble des composantes de la rémunération du
          searcher-dirigeant en France, depuis la phase de recherche jusqu&apos;à la
          sortie, en intégrant les spécificités du droit français des sociétés et
          de la fiscalité personnelle.
        </p>
        <p>
          La structuration de la rémunération ne peut être dissociée du choix de
          la{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            structure juridique du search fund
          </Link>{" "}
          ni de la stratégie d&apos;
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            optimisation fiscale
          </Link>{" "}
          retenue pour l&apos;ensemble de l&apos;opération.
        </p>
      </div>

      <h2 className={h2Class}>Phase de recherche&nbsp;: le financement du searcher</h2>
      <div className={bodyClass}>
        <p>
          Pendant la phase de recherche, le searcher français consacre entre 12 et
          24 mois à identifier, évaluer et négocier l&apos;acquisition d&apos;une PME. Il
          doit disposer d&apos;un revenu lui permettant de vivre décemment tout en
          maîtrisant la consommation du capital de recherche levé auprès de ses
          investisseurs.
        </p>

        <h3 className={h3Class}>Modalités pratiques</h3>
        <p>
          En France, le searcher se rémunère le plus souvent via une SASU
          (Société par Actions Simplifiée Unipersonnelle) constituée pour porter
          le véhicule de recherche. En tant que Président de SASU, il est affilié
          au régime général de la Sécurité sociale en qualité d&apos;assimilé salarié.
          Cette affiliation emporte des cotisations sociales plus élevées que le
          régime TNS (environ 65&nbsp;% du net contre 45&nbsp;% pour le TNS),
          mais ouvre droit à une couverture sociale complète&nbsp;: assurance
          maladie, retraite de base et complémentaire AGIRC-ARRCO, prévoyance.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Fourchette de rémunération&nbsp;:</strong> La rémunération
            brute mensuelle se situe généralement entre 3&nbsp;500&nbsp;&euro; et
            5&nbsp;500&nbsp;&euro; brut, soit un net avant impôt de
            2&nbsp;700&nbsp;&euro; à 4&nbsp;200&nbsp;&euro; environ. Ce niveau
            reflète un arbitrage entre le besoin de vivre dans une grande
            métropole française (Paris, Lyon, Bordeaux) et la nécessité de
            préserver le capital de recherche.
          </li>
          <li>
            <strong>Durée de la phase de recherche&nbsp;:</strong> Le capital de
            recherche levé (typiquement entre 150&nbsp;000&nbsp;&euro; et
            300&nbsp;000&nbsp;&euro;) doit couvrir la rémunération du searcher,
            les frais de fonctionnement (déplacements, abonnements aux bases de
            données, frais juridiques), et laisser une marge de sécurité pour les
            frais de transaction.
          </li>
          <li>
            <strong>Absence de chômage&nbsp;:</strong> Le Président de SAS
            assimilé salarié ne cotise pas à l&apos;assurance chômage (sauf adhésion
            volontaire à la GSC ou à APPI). En cas d&apos;échec de la recherche, le
            searcher ne bénéficie d&apos;aucun filet de sécurité au titre du chômage
            &mdash; un risque à intégrer dans la décision de se lancer.
          </li>
        </ul>

        <h3 className={h3Class}>Le searcher en portage salarial&nbsp;: une alternative</h3>
        <p>
          Certains searchers optent pour le portage salarial pendant la phase de
          recherche. Cette solution permet de bénéficier du régime général
          (y compris l&apos;assurance chômage) moyennant des frais de gestion de
          l&apos;ordre de 8 à 12&nbsp;% du chiffre d&apos;affaires. Le portage peut
          s&apos;avérer pertinent pour un searcher qui souhaite conserver ses droits
          au chômage en cas d&apos;échec, mais il complexifie la relation avec les
          investisseurs et n&apos;est pas toujours compatible avec la structure
          juridique du fonds de recherche.
        </p>
      </div>

      <h2 className={h2Class}>TNS vs assimilé salarié&nbsp;: le choix du statut social</h2>
      <div className={bodyClass}>
        <p>
          Le statut social du dirigeant est l&apos;un des arbitrages les plus
          structurants de la rémunération post-acquisition. Le choix dépend de la
          forme juridique de la société acquise et du rôle exact du searcher dans
          la gouvernance.
        </p>

        <h3 className={h3Class}>Assimilé salarié&nbsp;: le Président de SAS</h3>
        <p>
          Dans une SAS &mdash; la forme juridique la plus courante pour les
          search funds français &mdash; le Président (et le Directeur Général le
          cas échéant) relève du régime des assimilés salariés. Ce statut offre
          une protection sociale complète mais entraîne un coût global élevé.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cotisations sociales&nbsp;:</strong> Environ 75 à 80&nbsp;%
            du salaire net en charges patronales et salariales cumulées. Pour
            100&nbsp;&euro; nets versés au dirigeant, le coût total pour la
            société est de l&apos;ordre de 175 à 180&nbsp;&euro;.
          </li>
          <li>
            <strong>Retraite&nbsp;:</strong> Le Président de SAS cotise au régime
            de base de la Sécurité sociale et au régime complémentaire
            AGIRC-ARRCO. Les droits à la retraite sont identiques à ceux d&apos;un
            salarié cadre.
          </li>
          <li>
            <strong>Prévoyance et santé&nbsp;:</strong> Couverture maladie,
            maternité, invalidité et décès au régime général. La société peut
            compléter ces garanties par un contrat collectif de prévoyance et une
            mutuelle obligatoire.
          </li>
          <li>
            <strong>Bulletin de paie&nbsp;:</strong> Le Président de SAS rémunéré
            reçoit un bulletin de paie, ce qui simplifie les formalités et
            renforce la lisibilité de la rémunération pour les investisseurs et
            les banques.
          </li>
        </ul>

        <h3 className={h3Class}>TNS&nbsp;: le gérant majoritaire de SARL</h3>
        <p>
          Si la société acquise est une SARL et que le searcher en détient plus de
          50&nbsp;% des parts (directement ou via une holding), il est gérant
          majoritaire et relève du régime TNS (Sécurité sociale des indépendants,
          ex-RSI). Le coût social est significativement inférieur, mais la
          couverture sociale est moindre.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cotisations sociales&nbsp;:</strong> Environ 45&nbsp;% du
            revenu net. Pour 100&nbsp;&euro; nets, le coût total est de l&apos;ordre
            de 145&nbsp;&euro;, soit une économie de 30 à 35 points par rapport
            au statut assimilé salarié.
          </li>
          <li>
            <strong>Retraite&nbsp;:</strong> Régime de base identique au régime
            général, mais régime complémentaire spécifique (SSI), moins
            avantageux que l&apos;AGIRC-ARRCO en termes de droits acquis.
          </li>
          <li>
            <strong>Prévoyance réduite&nbsp;:</strong> Indemnités journalières
            maladie plus faibles, pas de prévoyance cadre automatique. Le
            dirigeant doit souscrire un contrat Madelin pour compléter sa
            couverture.
          </li>
          <li>
            <strong>Pas de bulletin de paie&nbsp;:</strong> La rémunération du
            gérant TNS n&apos;est pas formalisée par un bulletin de paie mais par une
            décision d&apos;assemblée générale et une déclaration sociale des
            indépendants (DSI).
          </li>
        </ul>

        <h3 className={h3Class}>Quel statut choisir&nbsp;?</h3>
        <p>
          Le choix entre TNS et assimilé salarié dépend de plusieurs facteurs&nbsp;:
          le niveau de rémunération souhaité, la capacité de la société à absorber
          les charges, l&apos;importance accordée à la retraite complémentaire et les
          perspectives de distribution de dividendes. En pratique, la majorité des
          search funds français privilégient la SAS (et donc le statut assimilé
          salarié) pour sa souplesse statutaire, quitte à accepter un coût social
          plus élevé.
        </p>
      </div>

      <h2 className={h2Class}>Rémunération post-acquisition&nbsp;: salaire du dirigeant</h2>
      <div className={bodyClass}>
        <p>
          Une fois l&apos;acquisition réalisée, le searcher devient Président (ou
          Directeur Général) de la société cible. Sa rémunération doit refléter à
          la fois les responsabilités d&apos;un dirigeant de PME et les contraintes de
          trésorerie de l&apos;entreprise, souvent alourdie par la dette
          d&apos;acquisition.
        </p>

        <h3 className={h3Class}>Fourchette de rémunération</h3>
        <p>
          La rémunération brute annuelle d&apos;un dirigeant de PME en France (CA de
          2 à 15&nbsp;M&euro;) se situe typiquement entre 80&nbsp;000&nbsp;&euro;
          et 180&nbsp;000&nbsp;&euro; brut par an, selon la taille de
          l&apos;entreprise, le secteur d&apos;activité et la localisation géographique.
          Les searchers se positionnent généralement dans la moitié inférieure de
          cette fourchette pendant les premières années, la création de valeur
          se matérialisant principalement via l&apos;equity.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Rémunération fixe&nbsp;:</strong> Le salaire fixe constitue
            la composante principale. Il est fixé par décision collective des
            associés (en SAS) ou en assemblée générale (en SARL) et doit rester
            dans les limites du marché pour ne pas être requalifié en
            distribution déguisée de bénéfices par l&apos;administration fiscale.
          </li>
          <li>
            <strong>Avantages en nature&nbsp;:</strong> Véhicule de fonction,
            téléphone, logement &mdash; ces avantages sont soumis à cotisations
            sociales et à l&apos;impôt sur le revenu (IR) mais permettent de compléter
            la rémunération de manière fiscalement efficiente dans certaines
            configurations.
          </li>
          <li>
            <strong>Prime variable&nbsp;:</strong> Un mécanisme de bonus annuel
            indexé sur des KPIs opérationnels (EBITDA, croissance du CA,
            satisfaction client) peut être mis en place. Le montant est
            typiquement de 15 à 30&nbsp;% du fixe et doit être encadré par le
            pacte d&apos;actionnaires validé avec les investisseurs.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Dividendes et flat tax&nbsp;: la rémunération du capital</h2>
      <div className={bodyClass}>
        <p>
          En complément du salaire, le dirigeant-actionnaire peut percevoir des
          dividendes au titre des bénéfices distribués par la société. Depuis la
          loi de finances 2018, les dividendes sont soumis au Prélèvement
          Forfaitaire Unique (PFU), communément appelé flat tax.
        </p>

        <h3 className={h3Class}>Le PFU (flat tax) à 30&nbsp;%</h3>
        <p>
          Le PFU s&apos;applique au taux global de 30&nbsp;%, décomposé en
          12,8&nbsp;% d&apos;impôt sur le revenu et 17,2&nbsp;% de prélèvements
          sociaux (CSG-CRDS). Ce taux forfaitaire remplace l&apos;ancien système
          d&apos;imposition au barème progressif avec abattement de 40&nbsp;%.
          Le contribuable conserve toutefois la possibilité d&apos;opter pour
          l&apos;imposition au barème progressif si cette option lui est plus
          favorable (revenus modestes ou déficits reportables).
        </p>

        <h3 className={h3Class}>Dividendes du gérant majoritaire TNS&nbsp;: attention aux cotisations sociales</h3>
        <p>
          Pour le gérant majoritaire de SARL, les dividendes perçus au-delà de
          10&nbsp;% du capital social, des primes d&apos;émission et des sommes
          versées en compte courant d&apos;associé sont soumis aux cotisations
          sociales TNS (environ 45&nbsp;%), en plus des prélèvements sociaux. Ce
          mécanisme annule en grande partie l&apos;avantage de la flat tax et rend
          l&apos;arbitrage salaire/dividendes plus complexe en SARL.
        </p>
        <p>
          En SAS, les dividendes ne sont jamais soumis aux cotisations sociales,
          quel que soit leur montant. C&apos;est l&apos;un des avantages souvent cités en
          faveur de la SAS pour le dirigeant souhaitant optimiser sa rémunération
          globale.
        </p>

        <h3 className={h3Class}>Arbitrage salaire / dividendes</h3>
        <p>
          L&apos;optimisation de la rémunération du dirigeant passe par un arbitrage
          entre salaire et dividendes, en tenant compte&nbsp;:
        </p>
        <ol className={olClass}>
          <li>Du taux marginal d&apos;imposition du dirigeant (barème IR ou PFU).</li>
          <li>Du taux d&apos;IS applicable à la société (15&nbsp;% jusqu&apos;à 42&nbsp;500&nbsp;&euro; de bénéfice, 25&nbsp;% au-delà).</li>
          <li>Du coût des cotisations sociales selon le statut (TNS ou assimilé salarié).</li>
          <li>Des droits à retraite et à prévoyance générés par le salaire.</li>
          <li>De l&apos;impact sur la capacité d&apos;emprunt personnel du dirigeant.</li>
        </ol>
        <p>
          En règle générale, il est conseillé de se verser un salaire suffisant
          pour valider ses trimestres de retraite et constituer des droits à la
          prévoyance, puis de compléter par des dividendes soumis au PFU. Un
          expert-comptable spécialisé en rémunération de dirigeants est
          indispensable pour affiner cet arbitrage au cas par cas.
        </p>
      </div>

      <h2 className={h2Class}>Equity et intéressement au capital</h2>
      <div className={bodyClass}>
        <p>
          La véritable création de richesse du searcher repose sur sa
          participation au capital de la société acquise. Le modèle classique du
          search fund prévoit un intéressement en equity pouvant aller jusqu&apos;à
          20-30&nbsp;% du capital, acquis progressivement selon un mécanisme de
          step-up. Pour le détail de la structuration du capital, consultez notre
          guide sur les{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            tables de capitalisation et l&apos;equity
          </Link>.
        </p>

        <h3 className={h3Class}>BSPCE&nbsp;: le mécanisme privilégié</h3>
        <p>
          Les Bons de Souscription de Parts de Créateur d&apos;Entreprise (BSPCE)
          sont le mécanisme d&apos;intéressement le plus avantageux fiscalement pour
          le dirigeant de SAS. Réservés aux sociétés de moins de 15 ans, ils
          permettent au bénéficiaire de souscrire des actions à un prix fixé à
          l&apos;avance (le prix d&apos;exercice). Le gain réalisé lors de la cession
          des actions est taxé au taux de 12,8&nbsp;% (plus 17,2&nbsp;% de
          prélèvements sociaux) si le dirigeant exerce ses fonctions depuis plus
          de 3 ans, soit un taux global de 30&nbsp;%.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Conditions d&apos;éligibilité&nbsp;:</strong> La société
            émettrice doit être une SAS (ou SA) soumise à l&apos;IS, avoir moins de
            15 ans, ne pas être cotée, et ne pas être détenue à plus de 25&nbsp;%
            par des personnes physiques (hors salariés et dirigeants).
          </li>
          <li>
            <strong>Vesting&nbsp;:</strong> Le plan de BSPCE prévoit
            classiquement un vesting sur 4 à 5 ans avec un cliff d&apos;un an, aligné
            sur les pratiques des investisseurs de search funds.
          </li>
          <li>
            <strong>Prix d&apos;exercice&nbsp;:</strong> Fixé sur la base de la
            valorisation au moment de l&apos;attribution, il doit correspondre à la
            valeur vénale des titres pour éviter une requalification en complément
            de rémunération par l&apos;administration fiscale.
          </li>
        </ul>

        <h3 className={h3Class}>Actions gratuites (AGA)</h3>
        <p>
          Alternative aux BSPCE, les attributions gratuites d&apos;actions permettent
          au dirigeant de recevoir des actions sans débourser le prix
          d&apos;exercice. Le gain d&apos;acquisition est taxé au barème progressif de
          l&apos;IR (après abattement de 50&nbsp;%) et soumis à une contribution
          salariale de 10&nbsp;%. Ce régime est moins favorable que les BSPCE mais
          peut être adapté lorsque les conditions d&apos;éligibilité aux BSPCE ne sont
          pas remplies (société de plus de 15 ans notamment).
        </p>

        <h3 className={h3Class}>Management package en private equity</h3>
        <p>
          Dans les opérations de taille plus importante ou impliquant des fonds de
          private equity, le management package combine actions ordinaires, actions
          de préférence, obligations convertibles et instruments dérivés. La
          structuration doit être validée par un expert indépendant pour éviter la
          requalification en rémunération &mdash; un risque contentieux majeur
          depuis la jurisprudence du Conseil d&apos;État de 2021. Le conseil d&apos;un
          avocat fiscaliste est indispensable.
        </p>
      </div>

      <h2 className={h2Class}>Plan d&apos;Épargne Retraite (PER)&nbsp;: un outil complémentaire</h2>
      <div className={bodyClass}>
        <p>
          Le Plan d&apos;Épargne Retraite (PER), issu de la loi PACTE de 2019,
          constitue un levier d&apos;optimisation de la rémunération du dirigeant.
          Les versements volontaires sont déductibles du revenu imposable dans la
          limite de 10&nbsp;% du bénéfice imposable plafonné à 8 PASS (Plafond
          Annuel de la Sécurité Sociale), soit environ 35&nbsp;000&nbsp;&euro; par
          an pour un dirigeant rémunéré au plafond.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>PER individuel&nbsp;:</strong> Ouvert à tout résident fiscal
            français, il permet des versements libres déductibles du revenu
            global. L&apos;effet fiscal est proportionnel au taux marginal
            d&apos;imposition&nbsp;: un dirigeant à 41&nbsp;% de TMI économise
            41&nbsp;&euro; d&apos;impôt pour 100&nbsp;&euro; versés.
          </li>
          <li>
            <strong>PER d&apos;entreprise obligatoire&nbsp;:</strong> La société peut
            mettre en place un PER d&apos;entreprise obligatoire (ancien article 83)
            avec des cotisations employeur déductibles du résultat imposable.
            C&apos;est un levier puissant si le searcher est le seul salarié cadre
            dirigeant de la société.
          </li>
          <li>
            <strong>Contrat Madelin (pour le TNS)&nbsp;:</strong> Le gérant
            majoritaire de SARL peut déduire les cotisations versées à un contrat
            Madelin (retraite, prévoyance, perte d&apos;emploi) dans des limites
            spécifiques. Ce dispositif est progressivement remplacé par le PER
            mais les anciens contrats restent en vigueur.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Rémunération optimale&nbsp;: la synthèse</h2>
      <div className={bodyClass}>
        <p>
          La rémunération optimale du searcher-dirigeant en France s&apos;articule
          autour de quatre piliers complémentaires&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Un salaire fixe maîtrisé&nbsp;:</strong> Suffisant pour
            valider les trimestres de retraite, constituer des droits à la
            prévoyance et satisfaire les exigences des banques pour les emprunts
            personnels. Typiquement entre 80&nbsp;000 et 130&nbsp;000&nbsp;&euro;
            brut annuel.
          </li>
          <li>
            <strong>Des dividendes soumis au PFU&nbsp;:</strong> Distribués
            lorsque la trésorerie de la société le permet, après service de la
            dette et constitution de réserves. Le PFU à 30&nbsp;% est
            généralement plus avantageux que le barème progressif pour un
            dirigeant dont le TMI est supérieur à 30&nbsp;%.
          </li>
          <li>
            <strong>Un plan de BSPCE ou d&apos;AGA&nbsp;:</strong> Pour aligner les
            intérêts du dirigeant avec ceux des investisseurs et concentrer la
            création de valeur sur le long terme. Le mécanisme de vesting incite
            à rester et à performer.
          </li>
          <li>
            <strong>Une épargne retraite défiscalisée&nbsp;:</strong> Via le PER
            individuel et/ou d&apos;entreprise, pour réduire l&apos;IR sur les tranches
            les plus élevées et préparer la retraite avec l&apos;avantage fiscal le
            plus important possible.
          </li>
        </ol>
        <p>
          Chaque situation est unique et nécessite un conseil personnalisé. Le
          coût d&apos;un expert-comptable et d&apos;un avocat fiscaliste est un
          investissement rentable&nbsp;: une structuration bien pensée peut
          représenter une économie de plusieurs dizaines de milliers d&apos;euros
          par an en cotisations sociales et en impôts. L&apos;erreur la plus fréquente
          des searchers débutants est de reproduire un schéma de rémunération
          salarié classique sans exploiter les marges de manoeuvre offertes par le
          statut de dirigeant.
        </p>
        <p>
          Pour approfondir les aspects juridiques de ces mécanismes, consultez
          notre guide sur la{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            structure juridique du search fund en France
          </Link>{" "}
          et notre article sur les{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            tables de capitalisation
          </Link>.
        </p>
      </div>
    </article>
  );
}
