import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function SearchFundReturnsFR() {
  return (
    <article>
      <h1 className={h1Class}>Rendements des Search Funds&nbsp;: Données et Analyse</h1>

      <div className={bodyClass}>
        <p>
          Les rendements des search funds figurent parmi les plus élevés de
          l&apos;univers du capital-investissement, ce qui explique l&apos;intérêt
          croissant des investisseurs institutionnels et des family offices
          pour cette classe d&apos;actifs. Cependant, derrière les chiffres agrégés
          se cache une réalité plus nuancée, marquée par une forte dispersion
          des résultats et des facteurs de succès qu&apos;il convient de
          comprendre en profondeur. Cet article analyse les données de
          rendement issues des études Stanford et IESE, les compare aux
          autres classes d&apos;actifs et en tire les enseignements pour
          l&apos;investisseur actif sur le marché français et européen.
        </p>
      </div>

      <h2 className={h2Class}>Les données de référence&nbsp;: Stanford et IESE</h2>
      <div className={bodyClass}>
        <p>
          Les deux sources principales de données sur les rendements des
          search funds sont l&apos;étude biennale de la Stanford Graduate School
          of Business et l&apos;étude internationale de l&apos;IESE Business School.
          L&apos;
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            étude Stanford 2024
          </Link>{" "}
          couvre 681&nbsp;search funds traditionnels lancés entre 1984 et 2022,
          principalement en Amérique du Nord. L&apos;étude IESE élargit le
          périmètre aux search funds internationaux, avec une couverture
          croissante de l&apos;Europe et de l&apos;Amérique latine.
        </p>
        <p>
          Les deux études utilisent les mêmes métriques de rendement&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>TRI (Taux de Rendement Interne) ou IRR&nbsp;:</strong>{" "}
            Mesure le rendement annualisé du capital investi, en tenant compte
            du calendrier des flux de trésorerie. Il intègre la durée de
            détention et la valeur temporelle de l&apos;argent.
          </li>
          <li>
            <strong>MOIC (Multiple on Invested Capital)&nbsp;:</strong> Mesure
            le multiple de retour sur le capital total investi, sans
            considération de la durée. Un MOIC de 3x signifie que chaque euro
            investi a rapporté trois euros au total.
          </li>
        </ul>
        <p>
          Il est essentiel de distinguer les rendements moyens des rendements
          médians. Dans les search funds, la distribution est fortement
          asymétrique (positive skew)&nbsp;: quelques performances
          exceptionnelles tirent les moyennes vers le haut, tandis que la
          médiane reflète mieux l&apos;expérience &laquo;&nbsp;typique&nbsp;&raquo; d&apos;un
          investisseur sur un seul search fund.
        </p>
      </div>

      <h2 className={h2Class}>Rendements agrégés historiques</h2>
      <div className={bodyClass}>
        <p>
          D&apos;après les données cumulées de Stanford sur l&apos;ensemble des
          cohortes (1984-2022), les search funds traditionnels ayant réalisé
          une acquisition affichent les profils de rendement suivants&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>TRI moyen agrégé&nbsp;:</strong> de l&apos;ordre de 30 à
            35&nbsp;% par an, un chiffre remarquable qui place les search
            funds au sommet des classes d&apos;actifs en capital-investissement.
          </li>
          <li>
            <strong>TRI médian&nbsp;:</strong> de l&apos;ordre de 25 à 30&nbsp;%
            par an, ce qui reste exceptionnel et nettement supérieur aux
            rendements du private equity classique.
          </li>
          <li>
            <strong>MOIC moyen&nbsp;:</strong> de l&apos;ordre de 5 à 7x, tiré
            par quelques exits spectaculaires.
          </li>
          <li>
            <strong>MOIC médian&nbsp;:</strong> de l&apos;ordre de 2,4x à 2,8x,
            ce qui représente tout de même un doublement ou triplement du
            capital investi.
          </li>
        </ul>
        <p>
          Ces chiffres incluent les search funds qui ont réalisé une
          acquisition mais dont le résultat est négatif (perte partielle ou
          totale du capital). Ils excluent en revanche les search funds qui
          n&apos;ont pas abouti à une acquisition &mdash; dans ce cas, les
          investisseurs de la phase de recherche perdent typiquement leur
          mise initiale (300&nbsp;000 à 600&nbsp;000&nbsp;&euro;), mais cette
          perte est mitigée par le mécanisme de step-up sur les search funds
          qui réussissent.
        </p>
      </div>

      <h2 className={h2Class}>Dispersion des résultats&nbsp;: la réalité derrière les moyennes</h2>
      <div className={bodyClass}>
        <p>
          L&apos;un des aspects les plus importants de l&apos;investissement en search
          funds est la dispersion extrême des rendements. Les données Stanford
          montrent une distribution trimodale&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Quartile supérieur (top 25&nbsp;%)&nbsp;:</strong> Ces
            search funds génèrent des MOIC de 5x à plus de 20x, avec des TRI
            parfois supérieurs à 60&nbsp;%. Ce sont les performances qui
            tirent les moyennes agrégées vers le haut et qui rendent la
            classe d&apos;actifs si attractive.
          </li>
          <li>
            <strong>Quartiles intermédiaires (50&nbsp;% central)&nbsp;:</strong>{" "}
            Ces search funds génèrent des MOIC de 1x à 5x, avec des TRI de
            10 à 30&nbsp;%. Ce sont des performances solides, comparables ou
            supérieures au private equity classique.
          </li>
          <li>
            <strong>Quartile inférieur (bottom 25&nbsp;%)&nbsp;:</strong> Ces
            search funds se soldent par une perte partielle ou totale du
            capital. L&apos;étude Stanford recense environ 30 à 35&nbsp;% des
            acquisitions réalisées qui se traduisent par une perte pour les
            investisseurs.
          </li>
        </ol>
        <p>
          Cette dispersion a une conséquence directe pour la stratégie
          d&apos;investissement&nbsp;: la construction d&apos;un portefeuille
          diversifié de 10 à 15&nbsp;search funds est indispensable pour
          espérer capturer les rendements agrégés. Un investisseur qui ne
          participe qu&apos;à un ou deux search funds s&apos;expose à un risque
          binaire élevé.
        </p>
      </div>

      <h2 className={h2Class}>Comparaison avec les autres classes d&apos;actifs</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Search funds vs. Private Equity (LBO)</h3>
        <p>
          Le private equity classique (fonds LBO mid-market) affiche des TRI
          nets de l&apos;ordre de 12 à 18&nbsp;% par an sur les bonnes
          millésimes, selon les données de France Invest et de Cambridge
          Associates. Les search funds, avec un TRI médian de 25 à 30&nbsp;%,
          se situent nettement au-dessus. Cependant, la comparaison doit
          intégrer plusieurs facteurs&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Le PE bénéficie d&apos;une diversification intégrée (portefeuille de
            sociétés), tandis que le search fund est un pari concentré sur un
            seul actif.
          </li>
          <li>
            La liquidité du PE (via le marché secondaire) est supérieure à
            celle des search funds, qui sont des investissements illiquides sur
            cinq à sept ans minimum.
          </li>
          <li>
            Les frais de gestion du PE (2&nbsp;% de management fee +
            20&nbsp;% de carried interest) réduisent les rendements nets pour
            l&apos;investisseur. Les search funds n&apos;ont pas de frais de gestion
            mais le searcher reçoit 20 à 30&nbsp;% du capital ordinaire.
          </li>
        </ul>

        <h3 className={h3Class}>Search funds vs. Venture Capital</h3>
        <p>
          Le venture capital présente un profil de rendement qui partage
          certaines caractéristiques avec les search funds&nbsp;: forte
          dispersion, asymétrie positive et impact des
          &laquo;&nbsp;outliers&nbsp;&raquo;. Les meilleurs fonds de VC (top
          quartile) affichent des TRI de 20 à 30&nbsp;% ou plus, selon les
          données de la NVCA (National Venture Capital Association) et de
          France Invest. Toutefois, les différences structurelles sont
          majeures&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Le VC investit dans des entreprises en phase d&apos;amorçage avec
            un risque technologique et commercial élevé. Le search fund
            acquiert une entreprise rentable avec un historique de résultats.
          </li>
          <li>
            Le taux d&apos;échec en VC est considérablement plus élevé&nbsp;:
            on estime que 60 à 70&nbsp;% des investissements en VC ne
            restituent pas le capital investi. En search fund, ce taux est
            d&apos;environ 30 à 35&nbsp;%.
          </li>
          <li>
            Le VC est un jeu de puissance (power law) où un seul investissement
            peut faire le rendement de tout le fonds. Les search funds
            présentent une distribution moins extrême.
          </li>
        </ul>

        <h3 className={h3Class}>Search funds vs. Immobilier</h3>
        <p>
          Pour l&apos;investisseur français, l&apos;immobilier reste une classe
          d&apos;actifs de référence. Les rendements bruts de l&apos;immobilier
          locatif en France se situent entre 3 et 6&nbsp;% par an selon les
          zones et les typologies, d&apos;après les données de l&apos;IEIF (Institut
          de l&apos;Épargne Immobilière et Foncière). Les SCPI affichent des
          taux de distribution de l&apos;ordre de 4 à 5&nbsp;% par an. En termes
          de rendement pur, les search funds se situent très largement
          au-dessus, mais au prix d&apos;une illiquidité plus grande et d&apos;un
          risque de perte en capital plus élevé.
        </p>
      </div>

      <h2 className={h2Class}>Les facteurs de performance du quartile supérieur</h2>
      <div className={bodyClass}>
        <p>
          L&apos;analyse des search funds du quartile supérieur révèle plusieurs
          facteurs récurrents qui distinguent les meilleures performances&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Qualité du searcher&nbsp;:</strong> Les searchers qui
            génèrent les meilleurs rendements combinent une intelligence
            analytique forte, une capacité de leadership avérée, une
            résilience face à l&apos;adversité et une humilité opérationnelle.
            L&apos;expérience sectorielle antérieure est un plus, mais n&apos;est pas
            un prérequis absolu.
          </li>
          <li>
            <strong>Qualité de la cible&nbsp;:</strong> Les acquisitions
            performantes portent sur des entreprises présentant des revenus
            récurrents, une clientèle diversifiée, des barrières à
            l&apos;entrée (contrats longs, expertise technique, certifications)
            et une position de leader ou co-leader sur un marché de niche.
          </li>
          <li>
            <strong>Prix d&apos;acquisition raisonnable&nbsp;:</strong> Les
            meilleures performances s&apos;observent sur des acquisitions
            réalisées à des multiples de 3,5x à 5,5x l&apos;EBITDA, laissant
            une marge de création de valeur significative. Pour en savoir plus
            sur les{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              structures de capital et d&apos;equity
            </Link>, consultez notre guide dédié.
          </li>
          <li>
            <strong>Création de valeur opérationnelle&nbsp;:</strong> Les
            searchers qui génèrent les meilleurs rendements ne se contentent
            pas d&apos;un effet de levier financier. Ils créent de la valeur
            par la croissance organique (expansion commerciale, cross-selling,
            pricing), l&apos;amélioration des marges (optimisation des coûts,
            digitalisation) et la croissance externe (acquisitions
            complémentaires de type build-up).
          </li>
          <li>
            <strong>Board actif et investisseurs engagés&nbsp;:</strong> Les
            search funds qui performent le mieux bénéficient d&apos;investisseurs
            qui jouent un rôle de conseil actif, de mentorat et
            d&apos;ouverture de réseau.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Rendements européens&nbsp;: données IESE</h2>
      <div className={bodyClass}>
        <p>
          Les données spécifiques aux search funds européens sont encore
          limitées en termes de profondeur historique, l&apos;écosystème étant
          plus récent qu&apos;en Amérique du Nord. L&apos;étude IESE fournit
          néanmoins des indications précieuses. Les rendements des search
          funds européens, sur les cohortes disponibles, s&apos;inscrivent dans
          une fourchette comparable aux rendements nord-américains,
          avec toutefois quelques nuances&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Les multiples d&apos;acquisition en Europe tendent à être légèrement
            inférieurs à ceux pratiqués en Amérique du Nord, ce qui offre un
            potentiel de rendement intéressant pour les investisseurs
            européens.
          </li>
          <li>
            Le recours plus fréquent au financement bancaire en Europe
            (en particulier en France, avec le soutien de Bpifrance) permet
            un effet de levier financier plus important, qui peut amplifier
            les rendements sur fonds propres.
          </li>
          <li>
            Le marché des sorties en Europe est moins liquide qu&apos;en Amérique
            du Nord, ce qui peut allonger les durées de détention et
            comprimer les TRI (sans nécessairement affecter les MOIC).
          </li>
        </ul>
        <p>
          En France, les premières sorties de search funds structurés
          commencent à se matérialiser, offrant des points de données
          encore limités mais encourageants. L&apos;émergence de fonds
          secondaires et d&apos;acheteurs stratégiques familiarisés avec le
          modèle devrait progressivement améliorer la liquidité de la
          classe d&apos;actifs en Europe.
        </p>
      </div>

      <h2 className={h2Class}>Gestion du risque pour l&apos;investisseur</h2>
      <div className={bodyClass}>
        <p>
          Compte tenu de la dispersion des rendements, la gestion du risque
          est un enjeu central pour l&apos;investisseur en search funds.
          Plusieurs stratégies permettent de maîtriser ce risque&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Diversification du portefeuille&nbsp;:</strong> Investir
            dans 10 à 15&nbsp;search funds minimum permet de capturer les
            rendements agrégés et de compenser les pertes individuelles par
            les gains des meilleurs performeurs.
          </li>
          <li>
            <strong>Sélectivité rigoureuse&nbsp;:</strong> La qualité du
            sourcing et de la due diligence sur le searcher est le premier
            levier de gestion du risque. Les investisseurs expérimentés
            consacrent un temps significatif à l&apos;évaluation des candidats.
          </li>
          <li>
            <strong>Structuration protectrice&nbsp;:</strong> L&apos;utilisation
            d&apos;actions de préférence avec liquidation preference, de
            mécanismes anti-dilution et de clauses de gouvernance protège
            les investisseurs en cas de performance dégradée.
          </li>
          <li>
            <strong>Accompagnement actif&nbsp;:</strong> La participation au
            board, le mentorat et l&apos;ouverture de réseau constituent un
            levier de création de valeur et de prévention des difficultés.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Conclusion&nbsp;: un couple risque/rendement attractif</h2>
      <div className={bodyClass}>
        <p>
          Les données historiques confirment que les search funds offrent un
          couple risque/rendement parmi les plus attractifs de
          l&apos;investissement en capital. Le TRI médian de 25 à 30&nbsp;%,
          le MOIC médian de 2,4x à 2,8x et un taux de perte de l&apos;ordre de
          30 à 35&nbsp;% positionnent la classe d&apos;actifs de manière
          favorable par rapport au private equity, au venture capital et à
          l&apos;immobilier.
        </p>
        <p>
          Pour l&apos;investisseur français, le marché des search funds offre
          une opportunité de diversification attractive, à condition
          d&apos;adopter une approche disciplinée&nbsp;: portefeuille diversifié,
          sélection rigoureuse du searcher, accompagnement actif et patience
          sur la durée de détention. Pour approfondir votre analyse,
          consultez l&apos;
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            étude Stanford 2024
          </Link>{" "}
          et notre guide sur les{" "}
          <Link href="/learn/why-invest-in-search-funds" className="text-apple-accent hover:underline">
            raisons d&apos;investir dans les search funds
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business &mdash; <em>2024 Search Fund Study&nbsp;: Selected Observations</em>, 2024.
        </li>
        <li>
          IESE Business School &mdash; <em>International Search Fund Study</em>, 2024.
        </li>
        <li>
          France Invest &mdash; <em>Performance Nette des Fonds de Capital-Investissement en France</em>, 2024.
        </li>
        <li>
          Cambridge Associates &mdash; <em>Private Equity Index and Benchmark Statistics</em>, 2024.
        </li>
        <li>
          IEIF (Institut de l&apos;Épargne Immobilière et Foncière) &mdash; <em>Performances comparées des placements en France</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Baromètre de la Transmission d&apos;Entreprise</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
