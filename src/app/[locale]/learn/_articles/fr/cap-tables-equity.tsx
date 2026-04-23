import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function CapTablesEquityFR() {
  return (
    <article>
      <h1 className={h1Class}>Économie du Search Fund&nbsp;: Cap Table et Distribution</h1>

      <div className={bodyClass}>
        <p>
          Comprendre l&apos;économie d&apos;un search fund est essentiel aussi bien
          pour le searcher que pour ses investisseurs. La structure capitalistique
          &mdash; communément appelée &laquo;&nbsp;cap table&nbsp;&raquo; &mdash;
          détermine comment la valeur est répartie entre les différentes parties
          prenantes tout au long de la vie du fonds&nbsp;: phase de recherche,
          acquisition et exploitation opérationnelle. Ce guide détaille la
          mécanique de la cap table d&apos;un search fund traditionnel, explique le
          mécanisme de step-up, présente un exemple chiffré et adapte l&apos;ensemble
          au cadre juridique français de la SAS.
        </p>
      </div>

      <h2 className={h2Class}>Comment fonctionne le capital dans un search fund</h2>
      <div className={bodyClass}>
        <p>
          Un search fund traditionnel comporte deux levées de fonds distinctes&nbsp;:
          le capital de recherche et le capital d&apos;acquisition. Chaque phase
          crée une couche spécifique de capital, et la participation du searcher
          s&apos;articule comme un mécanisme d&apos;intéressement conçu pour
          aligner les intérêts de toutes les parties.
        </p>

        <h3 className={h3Class}>Le capital de recherche (search capital)</h3>
        <p>
          La levée initiale de 300&nbsp;000 à 600&nbsp;000&nbsp;&euro; finance la
          rémunération du searcher, les déplacements, les frais juridiques et
          comptables, les outils de sourcing et les frais généraux pendant 18 à
          24 mois. Ce capital est levé auprès de 10 à 20 investisseurs qui
          souscrivent des &laquo;&nbsp;unités&nbsp;&raquo; (typiquement
          30&nbsp;000 à 50&nbsp;000&nbsp;&euro; par unité). Les investisseurs
          du capital de recherche reçoivent un droit préférentiel de co-investir
          lors de l&apos;acquisition.
        </p>

        <h3 className={h3Class}>Le mécanisme de step-up</h3>
        <p>
          Lorsqu&apos;une cible d&apos;acquisition est identifiée, le capital de
          recherche se convertit en capital d&apos;acquisition à un multiple
          préférentiel &mdash; le step-up &mdash; typiquement fixé à 1,5x. Cela
          signifie que pour chaque euro de capital de recherche investi,
          l&apos;investisseur reçoit 1,50&nbsp;&euro; de capital d&apos;acquisition.
          Le step-up rémunère les investisseurs de la phase de recherche pour le
          risque supérieur qu&apos;ils ont accepté en finançant la phase
          pré-acquisition, période pendant laquelle il n&apos;y a aucune
          certitude qu&apos;une acquisition sera réalisée. Dans certaines
          configurations, le step-up peut atteindre 2,0x, notamment dans des
          environnements de levée de fonds compétitifs.
        </p>

        <h3 className={h3Class}>Le capital d&apos;acquisition</h3>
        <p>
          La part equity du financement de l&apos;acquisition est proposée en
          priorité aux investisseurs existants (droit de suite ou right of first
          refusal), puis à de nouveaux investisseurs. Le montant total de
          l&apos;equity dépend de la valeur d&apos;entreprise et du levier
          d&apos;endettement utilisé. En France, la structuration typique d&apos;un{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            financement d&apos;acquisition
          </Link>{" "}
          se décompose ainsi&nbsp;: fonds propres (30 à 50&nbsp;% du prix),
          dette bancaire (40 à 50&nbsp;%), et éventuellement crédit vendeur
          (10 à 20&nbsp;%) ou prêt Bpifrance Transmission.
        </p>

        <h3 className={h3Class}>Le preferred return (rendement préférentiel)</h3>
        <p>
          La plupart des structures de search fund prévoient un preferred return
          en faveur des investisseurs &mdash; un rendement minimum que les
          investisseurs doivent recevoir avant que le searcher ne puisse
          bénéficier de certaines tranches de sa participation. Ce rendement
          préférentiel est typiquement fixé à 8 à 10&nbsp;% par an (rendement
          composé) sur le capital d&apos;acquisition investi. Le preferred return
          protège les investisseurs en s&apos;assurant que le searcher ne
          bénéficie pleinement de son intéressement que si les investisseurs
          ont d&apos;abord obtenu un rendement satisfaisant.
        </p>
      </div>

      <h2 className={h2Class}>La participation du searcher (carried interest)</h2>
      <div className={bodyClass}>
        <p>
          Le searcher reçoit généralement 20 à 30&nbsp;% du capital ordinaire
          de la société acquise, structuré comme un intéressement (carried
          interest). Cette participation est acquise progressivement via un
          mécanisme de vesting en trois tranches&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Tranche 1 (un tiers)&nbsp;:</strong> Acquise au closing de
            l&apos;acquisition. Cette tranche rémunère le searcher pour le
            travail réalisé pendant la phase de recherche et la réalisation de
            l&apos;acquisition.
          </li>
          <li>
            <strong>Tranche 2 (un tiers)&nbsp;:</strong> Acquise progressivement
            sur 3 à 4 ans de direction opérationnelle de l&apos;entreprise
            (vesting linéaire). Cette tranche incite le searcher à rester et à
            s&apos;engager dans la durée.
          </li>
          <li>
            <strong>Tranche 3 (un tiers)&nbsp;:</strong> Acquise sous condition
            de performance &mdash; typiquement l&apos;atteinte d&apos;un TRI
            minimum pour les investisseurs (souvent 25 à 35&nbsp;%). Cette
            tranche aligne le searcher sur la création de valeur pour les
            investisseurs.
          </li>
        </ul>
        <p>
          Ce mécanisme en trois tranches garantit un alignement à chaque étape
          du processus&nbsp;: trouver une bonne acquisition (tranche 1),
          l&apos;exploiter avec excellence (tranche 2), et générer des
          rendements attractifs pour les investisseurs (tranche 3).
        </p>
      </div>

      <h2 className={h2Class}>Exemple chiffré&nbsp;: cap table d&apos;un search fund</h2>
      <div className={bodyClass}>
        <p>
          Prenons l&apos;exemple d&apos;un searcher qui lève
          500&nbsp;000&nbsp;&euro; de capital de recherche auprès de 15
          investisseurs, puis acquiert une entreprise pour une valeur
          d&apos;entreprise de 6&nbsp;M&euro; avec 3,6&nbsp;M&euro; de dette
          bancaire et 2,4&nbsp;M&euro; de fonds propres. Le step-up est fixé
          à 1,5x et le searcher reçoit 25&nbsp;% de carried interest.
        </p>
        <h3 className={h3Class}>Phase de recherche</h3>
        <ul className={ulClass}>
          <li>15 investisseurs souscrivent un total de 500&nbsp;000&nbsp;&euro;</li>
          <li>Chaque investisseur détient des unités de capital de recherche donnant droit au step-up et au co-investissement</li>
        </ul>
        <h3 className={h3Class}>Conversion au moment de l&apos;acquisition</h3>
        <ul className={ulClass}>
          <li>Capital de recherche converti&nbsp;: 500&nbsp;000 &times; 1,5 = 750&nbsp;000&nbsp;&euro; de capital d&apos;acquisition reconnu</li>
          <li>Capital d&apos;acquisition supplémentaire nécessaire&nbsp;: 2&nbsp;400&nbsp;000 - 750&nbsp;000 = 1&nbsp;650&nbsp;000&nbsp;&euro;</li>
          <li>Les investisseurs existants exercent leur droit de suite pour une partie, le solde est souscrit par de nouveaux investisseurs</li>
        </ul>
        <h3 className={h3Class}>Répartition post-acquisition</h3>
        <ul className={ulClass}>
          <li>Investisseurs (ensemble)&nbsp;: 75&nbsp;% du capital ordinaire</li>
          <li>Searcher (carried interest)&nbsp;: 25&nbsp;% du capital ordinaire, acquis progressivement via le vesting</li>
        </ul>
        <p>
          Si l&apos;entreprise est revendue après 5 ans pour 15&nbsp;M&euro;
          (valeur d&apos;entreprise), après remboursement de la dette résiduelle,
          le capital distribuable aux actionnaires serait substantiel, avec un
          partage 75/25 entre les investisseurs et le searcher (sous réserve de
          l&apos;acquisition complète des trois tranches de vesting et du
          respect du preferred return).
        </p>
      </div>

      <h2 className={h2Class}>Adaptation au droit français&nbsp;: la SAS</h2>
      <div className={bodyClass}>
        <p>
          En France, la Société par Actions Simplifiée (SAS) est la forme
          juridique privilégiée pour structurer un search fund, en raison de sa
          flexibilité statutaire incomparable. Voici comment les mécanismes du
          search fund se traduisent en droit français&nbsp;:
        </p>

        <h3 className={h3Class}>Actions de préférence</h3>
        <p>
          La SAS permet la création de catégories d&apos;actions (actions de
          préférence) aux droits différenciés&nbsp;: droits financiers renforcés
          (dividende prioritaire, clause de liquidation préférentielle), droits
          de vote multiple ou supprimés, et droits d&apos;information spécifiques.
          Les actions de préférence sont l&apos;instrument juridique français qui
          permet de reproduire la structure de preferred equity utilisée dans
          les search funds anglo-saxons. Elles sont régies par les articles
          L. 228-11 et suivants du Code de commerce.
        </p>

        <h3 className={h3Class}>BSA et BSPCE</h3>
        <p>
          Les Bons de Souscription d&apos;Actions (BSA) et les Bons de
          Souscription de Parts de Créateur d&apos;Entreprise (BSPCE)
          constituent les instruments privilégiés pour structurer
          l&apos;intéressement du searcher en droit français.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>BSA&nbsp;:</strong> Permettent au searcher de souscrire des
            actions à un prix d&apos;exercice fixé à l&apos;avance (strike
            price). Le calendrier d&apos;exercice reproduit le mécanisme de
            vesting (exercice progressif sur 4 à 5 ans). Les BSA sont
            utilisables quelle que soit l&apos;ancienneté de la société.
          </li>
          <li>
            <strong>BSPCE&nbsp;:</strong> Réservés aux sociétés de moins de 15
            ans, les BSPCE bénéficient d&apos;un régime fiscal avantageux pour
            le bénéficiaire&nbsp;: les gains sont imposés comme des plus-values
            de cession de valeurs mobilières (flat tax à 30&nbsp;% ou option
            pour le barème progressif). Pour un search fund structuré via une
            SAS nouvellement créée, les BSPCE sont l&apos;instrument optimal
            d&apos;intéressement du searcher.
          </li>
        </ul>

        <h3 className={h3Class}>Le vesting en droit français</h3>
        <p>
          Le droit français ne connaît pas le concept de vesting tel qu&apos;il
          existe en common law. En pratique, le vesting est reproduit par des
          clauses statutaires ou un pacte d&apos;actionnaires prévoyant&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Un calendrier d&apos;acquisition progressive des droits (émission
            échelonnée de BSA/BSPCE ou levée progressive de clauses
            d&apos;inaliénabilité).
          </li>
          <li>
            Des clauses de good leaver / bad leaver déterminant les conditions
            de rachat des titres en cas de départ du searcher &mdash; volontaire
            ou non &mdash; avant la fin de la période de vesting.
          </li>
          <li>
            Un mécanisme d&apos;accélération (acceleration) en cas de changement
            de contrôle ou de cession totale de l&apos;entreprise avant la fin
            du vesting.
          </li>
        </ul>
        <p>
          Le pacte d&apos;actionnaires est le document clé qui organise ces
          mécanismes en droit français. Il doit être rédigé avec l&apos;assistance
          d&apos;un avocat spécialisé en droit des sociétés et private equity pour
          garantir la validité et l&apos;opposabilité de chaque clause.
        </p>
      </div>

      <h2 className={h2Class}>Scénarios de dilution</h2>
      <div className={bodyClass}>
        <p>
          La dilution intervient à chaque augmentation de capital. Dans un search
          fund, les principaux événements dilutifs sont&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>La conversion du capital de recherche&nbsp;:</strong> Le
            step-up de 1,5x signifie que les investisseurs de la phase de
            recherche reçoivent plus d&apos;actions que leur investissement
            initial ne le justifierait à la valeur nominale, ce qui dilue
            mécaniquement les investisseurs d&apos;acquisition.
          </li>
          <li>
            <strong>L&apos;émission des BSA/BSPCE du searcher&nbsp;:</strong>{" "}
            La création du pool d&apos;intéressement (20 à 30&nbsp;% du capital
            post-acquisition) dilue l&apos;ensemble des investisseurs. Cette
            dilution est anticipée et acceptée comme le coût de
            l&apos;alignement du searcher.
          </li>
          <li>
            <strong>Les augmentations de capital ultérieures&nbsp;:</strong> Si
            l&apos;entreprise a besoin de capitaux supplémentaires (pour financer
            une stratégie de{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              croissance externe
            </Link>{" "}
            par exemple), une nouvelle augmentation de capital diluera les
            actionnaires existants.
          </li>
        </ol>
        <p>
          Pour protéger les investisseurs contre une dilution excessive, les
          pactes d&apos;actionnaires prévoient généralement des clauses
          anti-dilution (ratchet) et des droits de souscription préférentiels
          lors des augmentations de capital futures. En droit français, le droit
          préférentiel de souscription (DPS) est un droit légal de chaque
          actionnaire, sauf renonciation expresse.
        </p>
      </div>

      <h2 className={h2Class}>Le waterfall de sortie (exit waterfall)</h2>
      <div className={bodyClass}>
        <p>
          L&apos;exit waterfall &mdash; la cascade de distribution du produit de
          cession &mdash; est le mécanisme qui détermine comment le prix de vente
          est réparti entre les différentes catégories d&apos;actionnaires lors de
          la sortie. Voici l&apos;ordre de distribution typique&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Remboursement de la dette&nbsp;:</strong> La dette bancaire
            et le crédit vendeur sont remboursés en priorité absolue.
          </li>
          <li>
            <strong>Preferred return aux investisseurs&nbsp;:</strong> Les
            investisseurs reçoivent leur rendement préférentiel (typiquement 8
            à 10&nbsp;% par an, composé).
          </li>
          <li>
            <strong>Remboursement du capital investi&nbsp;:</strong> Les
            investisseurs récupèrent leur capital d&apos;acquisition investi.
          </li>
          <li>
            <strong>Distribution du surplus&nbsp;:</strong> Le solde est réparti
            entre les investisseurs (75&nbsp;%) et le searcher (25&nbsp;%) selon
            la{" "}
            <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
              structure juridique
            </Link>{" "}
            convenue. Le searcher ne bénéficie de cette distribution qu&apos;à
            hauteur des tranches de vesting acquises.
          </li>
        </ol>
        <p>
          En droit français, cette cascade est organisée par la clause de
          liquidation préférentielle (liquidation preference) intégrée dans les
          statuts de la SAS (via les actions de préférence) ou dans le pacte
          d&apos;actionnaires. Il est essentiel de distinguer la liquidation
          préférentielle &laquo;&nbsp;non participating&nbsp;&raquo; (les
          investisseurs choisissent entre leur préférence et leur quote-part)
          de la liquidation préférentielle
          &laquo;&nbsp;participating&nbsp;&raquo; (les investisseurs reçoivent
          leur préférence puis participent au solde pro rata).
        </p>
      </div>

      <h2 className={h2Class}>Comparaison avec le modèle autofinancé</h2>
      <div className={bodyClass}>
        <p>
          Dans un search fund autofinancé (self-funded search), la cap table
          diffère significativement&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Pas de capital de recherche ni de step-up &mdash; le searcher
            finance sa propre recherche sur ses économies ou un revenu parallèle.
          </li>
          <li>
            Le searcher peut conserver une part plus importante du capital (40 à
            60&nbsp;%) car il assume l&apos;intégralité du risque de la phase de
            recherche.
          </li>
          <li>
            Le financement de l&apos;acquisition repose davantage sur la dette
            (prêt bancaire, crédit vendeur, prêt Bpifrance) et moins sur
            l&apos;equity.
          </li>
          <li>
            La gouvernance est plus légère&nbsp;: moins d&apos;investisseurs au
            capital signifie moins de contraintes de reporting et de
            consultation.
          </li>
        </ul>
        <p>
          Le choix entre search fund traditionnel et autofinancé dépend du profil
          du searcher, de son patrimoine personnel, de son appétence pour le
          risque et de sa volonté de s&apos;entourer d&apos;investisseurs
          expérimentés. Pour une analyse complète de cette alternative, consultez
          notre guide{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            sur le financement d&apos;un search fund
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Points de vigilance pour le searcher français</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>
            <strong>Faites rédiger vos statuts et votre pacte par un avocat
            spécialisé&nbsp;:</strong> La transposition des mécanismes
            anglo-saxons (step-up, vesting, preferred return, waterfall) en
            droit français requiert une expertise pointue en droit des sociétés
            et en private equity. Un mauvais drafting peut avoir des
            conséquences fiscales et juridiques lourdes.
          </li>
          <li>
            <strong>Anticipez la fiscalité des BSPCE/BSA&nbsp;:</strong> Le
            régime fiscal des BSPCE est avantageux mais soumis à des conditions
            strictes. Vérifiez l&apos;éligibilité de votre structure avec un
            conseil fiscal avant l&apos;émission.
          </li>
          <li>
            <strong>Prévoyez les clauses de sortie dès le jour un&nbsp;:</strong>{" "}
            Le pacte d&apos;actionnaires doit prévoir les mécanismes de sortie
            (tag-along, drag-along, droit de sortie conjointe, clause de
            liquidité) pour éviter les situations de blocage.
          </li>
          <li>
            <strong>Documentez la valorisation à chaque étape&nbsp;:</strong>{" "}
            L&apos;administration fiscale française peut remettre en cause les
            valorisations retenues pour l&apos;émission d&apos;actions de
            préférence ou de BSPCE. Faites réaliser une valorisation
            indépendante à chaque événement dilutif.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business &mdash; <em>2024 Search Fund Study</em>, 2024.
        </li>
        <li>
          Code de commerce &mdash; Articles L. 228-11 et suivants (actions de préférence), L. 225-177 et suivants (BSA).
        </li>
        <li>
          Code général des impôts &mdash; Article 163 bis G (BSPCE).
        </li>
        <li>
          HEC Paris, Chaire Entrepreneuriat &mdash; <em>Entrepreneuriat par Acquisition&nbsp;: état des lieux et perspectives</em>, 2024.
        </li>
        <li>
          IESE Business School &mdash; <em>International Search Fund Study</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Guide du Financement de la Reprise d&apos;Entreprise</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
