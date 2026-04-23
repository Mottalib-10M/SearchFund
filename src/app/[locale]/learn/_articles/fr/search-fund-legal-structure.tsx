import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function LegalStructureFR() {
  return (
    <article>
      <h1 className={h1Class}>Structure Juridique du Search Fund&nbsp;: SAS, SARL et Holdings</h1>

      <div className={bodyClass}>
        <p>
          Le choix de la structure juridique est l&apos;une des décisions les plus
          structurantes pour un searcher en France. Contrairement aux États-Unis
          où la LLC (Limited Liability Company) s&apos;impose comme le véhicule par
          défaut, le droit français offre un éventail de formes sociales dont
          chacune présente des avantages et des contraintes spécifiques. Le
          searcher doit arbitrer entre souplesse statutaire, régime fiscal,
          protection du patrimoine personnel et capacité à accueillir des
          investisseurs institutionnels &mdash; le tout dans le respect du Code
          de commerce et du droit des sociétés.
        </p>
        <p>
          Ce guide détaille les principales formes juridiques utilisées dans
          le cadre d&apos;un search fund en France, les mécanismes de gouvernance
          associés et les outils juridiques qui permettent d&apos;aligner les
          intérêts du searcher et de ses investisseurs sur le long terme. Il
          s&apos;adresse aux entrepreneurs-acquéreurs en phase de préparation, aux
          investisseurs souhaitant comprendre les montages français et aux
          conseils juridiques accompagnant des opérations d&apos;
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            Entrepreneurship Through Acquisition en France
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>SAS&nbsp;: la forme privilégiée du search fund français</h2>
      <div className={bodyClass}>
        <p>
          La Société par Actions Simplifiée (SAS), régie par les articles
          L.&nbsp;227-1 à L.&nbsp;227-20 du Code de commerce, s&apos;est imposée
          comme la forme juridique de référence pour les search funds en France.
          Sa popularité repose sur une liberté statutaire sans équivalent dans
          le droit français des sociétés.
        </p>

        <h3 className={h3Class}>Avantages de la SAS pour un search fund</h3>
        <ul className={ulClass}>
          <li>
            <strong>Liberté contractuelle maximale&nbsp;:</strong> Les statuts de
            la SAS peuvent être rédigés presque entièrement sur mesure. Le Code
            de commerce impose très peu de règles impératives, laissant aux
            associés la liberté d&apos;organiser la gouvernance, les droits de vote,
            les conditions de cession et les mécanismes d&apos;intéressement comme
            ils l&apos;entendent.
          </li>
          <li>
            <strong>Création de catégories d&apos;actions&nbsp;:</strong> La SAS permet
            la création d&apos;actions de préférence (articles L.&nbsp;228-11 et
            suivants du Code de commerce), essentielles pour structurer le
            step-up des investisseurs de la phase de recherche, les droits
            préférentiels de liquidation et les mécanismes de ratchet.
          </li>
          <li>
            <strong>Absence de commissaire aux apports obligatoire&nbsp;:</strong>{" "}
            Pour les apports en numéraire (ce qui est le cas standard du search
            fund), aucun commissaire aux apports n&apos;est requis, ce qui simplifie
            et accélère la constitution.
          </li>
          <li>
            <strong>Président unique&nbsp;:</strong> La SAS est dirigée par un
            Président, personne physique ou morale. Le searcher occupe
            naturellement cette fonction, ce qui concentre le pouvoir
            opérationnel entre ses mains tout en permettant aux investisseurs
            de conserver un contrôle via le pacte d&apos;actionnaires.
          </li>
          <li>
            <strong>Pas de capital minimum&nbsp;:</strong> Le capital social peut
            être fixé à 1&nbsp;&euro;, ce qui offre une flexibilité totale pour
            structurer les augmentations de capital successives (recherche puis
            acquisition).
          </li>
        </ul>

        <h3 className={h3Class}>Limites à connaître</h3>
        <p>
          La SAS ne peut pas faire appel public à l&apos;épargne. Les cessions
          d&apos;actions sont soumises aux droits d&apos;enregistrement au taux de
          0,1&nbsp;% (contre 3&nbsp;% pour les parts de SARL), ce qui constitue
          un avantage fiscal notable lors des opérations de cession. En
          revanche, le Président de SAS relève du régime général de la Sécurité
          sociale (assimilé salarié), ce qui engendre des charges sociales plus
          élevées que le régime TNS (Travailleur Non Salarié) du gérant
          majoritaire de SARL.
        </p>
      </div>

      <h2 className={h2Class}>SARL&nbsp;: une alternative pour les petits montages</h2>
      <div className={bodyClass}>
        <p>
          La Société à Responsabilité Limitée (SARL), régie par les articles
          L.&nbsp;223-1 et suivants du Code de commerce, reste une option pour
          les search funds autofinancés de taille modeste, notamment lorsque le
          searcher privilégie le statut de gérant majoritaire TNS pour réduire
          ses charges sociales personnelles.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Régime TNS du gérant majoritaire&nbsp;:</strong> Les
            cotisations sociales sont significativement inférieures à celles du
            régime assimilé salarié de la SAS, ce qui peut être déterminant
            pendant la phase de recherche où les ressources sont limitées.
          </li>
          <li>
            <strong>Encadrement légal plus strict&nbsp;:</strong> Contrairement
            à la SAS, la SARL est soumise à un cadre légal plus rigide&nbsp;:
            impossibilité de créer des catégories de parts sociales
            différenciées, obligation de vote proportionnel au capital,
            agrément obligatoire pour les cessions à des tiers (article
            L.&nbsp;223-14).
          </li>
          <li>
            <strong>Droits d&apos;enregistrement de 3&nbsp;%&nbsp;:</strong> Les
            cessions de parts de SARL sont soumises à un droit
            d&apos;enregistrement de 3&nbsp;% (après abattement), nettement
            supérieur au 0,1&nbsp;% applicable aux actions de SAS. Ce surcoût
            fiscal rend la SARL moins attractive pour les opérations impliquant
            des cessions multiples.
          </li>
        </ul>
        <p>
          En pratique, la SARL est rarement utilisée pour les search funds
          institutionnels en France. Les investisseurs expérimentés en ETA
          s&apos;attendent à une SAS, dont la flexibilité est indispensable pour
          structurer les mécanismes d&apos;alignement et de gouvernance propres au
          modèle.
        </p>
      </div>

      <h2 className={h2Class}>La holding&nbsp;: architecture à deux niveaux</h2>
      <div className={bodyClass}>
        <p>
          La plupart des search funds français utilisent une architecture à
          deux niveaux&nbsp;: une société holding (généralement une SAS) qui
          détient les participations dans la société opérationnelle (la cible
          acquise). Ce montage présente plusieurs avantages fiscaux et
          juridiques majeurs.
        </p>

        <h3 className={h3Class}>Avantages du montage holding</h3>
        <ul className={ulClass}>
          <li>
            <strong>Régime fiscal mère-fille&nbsp;:</strong> Prévu par les
            articles 145 et 216 du Code général des impôts (CGI), ce régime
            permet à la holding de bénéficier d&apos;une quasi-exonération
            d&apos;impôt sur les dividendes reçus de la filiale (exonération de
            95&nbsp;% du montant brut des dividendes, seule une quote-part de
            frais et charges de 5&nbsp;% étant réintégrée dans le résultat
            imposable).
          </li>
          <li>
            <strong>Intégration fiscale&nbsp;:</strong> Si la holding détient au
            moins 95&nbsp;% de la filiale, le régime d&apos;intégration fiscale
            (articles 223 A et suivants du CGI) permet de compenser les
            résultats bénéficiaires de la filiale avec les charges de la
            holding (notamment les intérêts d&apos;emprunt), réduisant ainsi la
            base imposable du groupe.
          </li>
          <li>
            <strong>Effet de levier fiscal&nbsp;:</strong> Les intérêts de la
            dette d&apos;acquisition contractée par la holding sont déductibles du
            résultat fiscal du groupe intégré, ce qui optimise significativement
            le coût net du{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              financement d&apos;acquisition
            </Link>.
          </li>
          <li>
            <strong>Protection patrimoniale&nbsp;:</strong> La holding isole les
            participations et les flux financiers, offrant une couche de
            protection supplémentaire au searcher et aux investisseurs.
          </li>
        </ul>

        <h3 className={h3Class}>Structuration type</h3>
        <p>
          Le montage classique se présente ainsi&nbsp;: le searcher et les
          investisseurs sont associés de la holding (HoldCo). HoldCo acquiert
          100&nbsp;% (ou une majorité qualifiée) de la société opérationnelle
          (OpCo). Le financement bancaire est contracté au niveau de HoldCo,
          remboursé par les remontées de dividendes d&apos;OpCo vers HoldCo grâce
          au régime mère-fille. Le searcher exerce ses fonctions de Président
          d&apos;OpCo et de HoldCo.
        </p>
      </div>

      <h2 className={h2Class}>Pacte d&apos;actionnaires&nbsp;: le pilier de la gouvernance</h2>
      <div className={bodyClass}>
        <p>
          Le pacte d&apos;actionnaires est un contrat extrastatutaire qui
          complète les statuts de la SAS. Dans un search fund, il régit les
          relations entre le searcher et ses investisseurs avec un niveau de
          détail que les statuts ne permettent pas toujours d&apos;atteindre. Le
          pacte n&apos;est pas publié au greffe du tribunal de commerce, ce qui
          garantit sa confidentialité.
        </p>
        <h3 className={h3Class}>Clauses essentielles du pacte</h3>
        <ul className={ulClass}>
          <li>
            <strong>Clause d&apos;agrément&nbsp;:</strong> Toute cession d&apos;actions
            à un tiers est soumise à l&apos;agrément préalable des autres associés,
            protégeant ainsi l&apos;intuitu personae du search fund.
          </li>
          <li>
            <strong>Droit de préemption&nbsp;:</strong> En cas de cession, les
            associés existants disposent d&apos;un droit prioritaire de rachat aux
            mêmes conditions que celles proposées par le tiers acquéreur.
          </li>
          <li>
            <strong>Tag-along (droit de sortie conjointe)&nbsp;:</strong> Si le
            searcher ou un investisseur majoritaire vend ses actions, les
            autres associés peuvent exiger d&apos;être inclus dans la cession aux
            mêmes conditions.
          </li>
          <li>
            <strong>Drag-along (obligation de sortie forcée)&nbsp;:</strong>{" "}
            Au-delà d&apos;un seuil (généralement 75 ou 80&nbsp;% du capital), le
            cédant peut contraindre les minoritaires à céder leurs actions,
            facilitant ainsi la sortie du fonds.
          </li>
          <li>
            <strong>Clause de non-concurrence&nbsp;:</strong> Le searcher
            s&apos;engage à consacrer l&apos;intégralité de son temps professionnel à
            la direction de la société acquise pendant la durée du pacte.
          </li>
          <li>
            <strong>Mécanisme de vesting&nbsp;:</strong> La participation du
            searcher (généralement 20 à 30&nbsp;% du capital ordinaire) est
            acquise progressivement sur quatre à cinq ans, avec un cliff
            initial et des paliers trimestriels ou annuels.
          </li>
          <li>
            <strong>Clauses de good leaver / bad leaver&nbsp;:</strong> En cas
            de départ du searcher, ces clauses déterminent les conditions de
            rachat de ses actions&nbsp;: au prix de marché (good leaver) ou à
            la valeur nominale (bad leaver).
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>BSA et BSPCE&nbsp;: intéresser le searcher au capital</h2>
      <div className={bodyClass}>
        <p>
          Les Bons de Souscription d&apos;Actions (BSA) et les Bons de
          Souscription de Parts de Créateur d&apos;Entreprise (BSPCE) sont deux
          instruments juridiques permettant d&apos;intéresser le searcher et les
          membres clés de l&apos;équipe de direction au capital de la société.
        </p>

        <h3 className={h3Class}>BSPCE (article 163 bis G du CGI)</h3>
        <p>
          Les BSPCE sont un dispositif fiscal spécifiquement français, réservé
          aux sociétés de moins de quinze ans, soumises à l&apos;IS et dont le
          capital est détenu à 25&nbsp;% au moins par des personnes physiques.
          Leur avantage réside dans un régime fiscal favorable&nbsp;: le gain
          d&apos;exercice est imposé au taux forfaitaire de 12,8&nbsp;% (prélèvement
          forfaitaire unique) plus 17,2&nbsp;% de prélèvements sociaux, soit
          30&nbsp;% au total (flat tax), à condition que le bénéficiaire exerce
          son activité dans la société depuis au moins trois ans.
        </p>
        <p>
          Dans le cadre d&apos;un search fund, les BSPCE peuvent être attribués au
          searcher dès la constitution de la holding, avec un calendrier
          d&apos;exercice (vesting schedule) aligné sur le plan de création de
          valeur. Toutefois, l&apos;éligibilité aux BSPCE dépend du respect strict
          des conditions légales, ce qui nécessite une analyse au cas par cas
          avec un avocat fiscaliste.
        </p>

        <h3 className={h3Class}>BSA</h3>
        <p>
          Les BSA offrent une flexibilité plus large que les BSPCE&nbsp;: ils
          peuvent être émis par toute SAS sans condition d&apos;âge ou de
          détention du capital. Le BSA confère à son titulaire le droit de
          souscrire des actions à un prix fixé à l&apos;avance (le prix
          d&apos;exercice), pendant une période déterminée. Le régime fiscal est
          celui des plus-values mobilières classiques, avec possibilité
          d&apos;application de la flat tax à 30&nbsp;%. Les BSA sont couramment
          utilisés dans les{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            tables de capitalisation des search funds
          </Link>{" "}
          pour structurer le step-up des investisseurs de la phase de
          recherche.
        </p>
      </div>

      <h2 className={h2Class}>Constitution de la SAS&nbsp;: étapes pratiques</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>
            <strong>Rédaction des statuts&nbsp;:</strong> Avec l&apos;assistance
            d&apos;un avocat spécialisé en droit des sociétés et en M&amp;A, le
            searcher rédige des statuts adaptés au modèle search fund&nbsp;:
            catégories d&apos;actions, conditions de cession, pouvoirs du
            Président, modalités d&apos;augmentation de capital.
          </li>
          <li>
            <strong>Signature du pacte d&apos;actionnaires&nbsp;:</strong> Le pacte
            est négocié simultanément aux statuts et signé par l&apos;ensemble
            des investisseurs et le searcher avant la libération du capital de
            recherche.
          </li>
          <li>
            <strong>Dépôt du capital social&nbsp;:</strong> Les fonds sont
            déposés sur un compte bancaire bloqué auprès d&apos;un établissement
            de crédit ou d&apos;un notaire.
          </li>
          <li>
            <strong>Immatriculation au RCS&nbsp;:</strong> La société est
            immatriculée au Registre du Commerce et des Sociétés via le
            guichet unique de l&apos;INPI (formalites.entreprises.gouv.fr),
            procédure dématérialisée depuis le 1er janvier 2023.
          </li>
          <li>
            <strong>Publication de l&apos;annonce légale&nbsp;:</strong> Une annonce
            de constitution doit être publiée dans un journal d&apos;annonces
            légales habilité dans le département du siège social.
          </li>
          <li>
            <strong>Ouverture du compte bancaire professionnel&nbsp;:</strong>{" "}
            Le compte bloqué est débloqué après immatriculation, et le
            searcher peut commencer à utiliser le capital de recherche.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Régime fiscal mère-fille en détail</h2>
      <div className={bodyClass}>
        <p>
          Le régime mère-fille est un pilier de l&apos;
          <Link href="/learn/tax-optimization" className="text-apple-accent hover:underline">
            optimisation fiscale
          </Link>{" "}
          des search funds structurés en holding. Pour en bénéficier, trois
          conditions cumulatives doivent être remplies&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            La holding doit détenir au moins 5&nbsp;% du capital de la filiale
            (condition largement satisfaite dans un search fund où la holding
            détient généralement 100&nbsp;%).
          </li>
          <li>
            Les titres doivent être conservés pendant au moins deux ans.
          </li>
          <li>
            La holding et la filiale doivent être soumises à l&apos;IS.
          </li>
        </ol>
        <p>
          Lorsque ces conditions sont réunies, les dividendes versés par la
          filiale à la holding sont exonérés d&apos;IS, à l&apos;exception d&apos;une
          quote-part de frais et charges de 5&nbsp;%. Concrètement, sur
          100&nbsp;000&nbsp;&euro; de dividendes remontés, seuls
          5&nbsp;000&nbsp;&euro; seront réintégrés dans le résultat imposable de
          la holding, générant un IS effectif de seulement
          1&nbsp;250&nbsp;&euro; (au taux de 25&nbsp;%). Ce mécanisme permet de
          financer le remboursement de la dette d&apos;acquisition de manière
          fiscalement efficace.
        </p>
      </div>

      <h2 className={h2Class}>Erreurs courantes à éviter</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>
            <strong>Choisir une SARL par défaut&nbsp;:</strong> L&apos;économie sur
            les charges sociales du gérant TNS ne compense pas la perte de
            flexibilité pour structurer l&apos;actionnariat. Les investisseurs
            institutionnels refuseront généralement d&apos;investir dans une SARL.
          </li>
          <li>
            <strong>Négliger le pacte d&apos;actionnaires&nbsp;:</strong> Les
            statuts seuls ne suffisent pas à encadrer la relation entre le
            searcher et ses investisseurs. Le pacte est indispensable pour
            les clauses de vesting, de good/bad leaver et de sortie.
          </li>
          <li>
            <strong>Sous-estimer les coûts juridiques&nbsp;:</strong> La
            rédaction de statuts sur mesure, d&apos;un pacte d&apos;actionnaires et
            de BSA/BSPCE par un avocat spécialisé représente un investissement
            significatif (10&nbsp;000 à 25&nbsp;000&nbsp;&euro;), à prévoir dans
            le budget de la phase de recherche.
          </li>
          <li>
            <strong>Ignorer l&apos;intégration fiscale&nbsp;:</strong> Ne pas
            constituer de holding par souci de simplicité peut coûter très
            cher sur le plan fiscal, en privant le montage de la déductibilité
            des intérêts et du régime mère-fille.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Code de commerce, Livre II, Titre II, Chapitre VII &mdash; <em>Dispositions relatives aux SAS</em>.
        </li>
        <li>
          Code général des impôts, articles 145, 216 &mdash; <em>Régime fiscal des sociétés mères et filiales</em>.
        </li>
        <li>
          Code général des impôts, article 163 bis G &mdash; <em>Bons de souscription de parts de créateur d&apos;entreprise</em>.
        </li>
        <li>
          Bpifrance Création &mdash; <em>Choisir son statut juridique&nbsp;: SAS ou SARL&nbsp;?</em>, 2024.
        </li>
        <li>
          Conseil National des Barreaux &mdash; <em>Guide pratique du pacte d&apos;actionnaires</em>.
        </li>
        <li>
          HEC Paris, Chaire Entrepreneuriat &mdash; <em>Structuration juridique de l&apos;ETA en France</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
