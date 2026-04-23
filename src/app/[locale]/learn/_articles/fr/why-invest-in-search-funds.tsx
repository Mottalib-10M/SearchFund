import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function WhyInvestFR() {
  return (
    <article>
      <h1 className={h1Class}>Pourquoi Investir dans les Search Funds&nbsp;?</h1>

      <div className={bodyClass}>
        <p>
          Les search funds se sont imposés discrètement comme l&apos;une des
          classes d&apos;actifs les plus attractives des marchés privés. Avec un
          TRI (taux de rendement interne) brut agrégé supérieur à 35&nbsp;%
          sur quatre décennies, le modèle a surperformé le capital-risque, le
          private equity et les marchés publics sur une base ajustée au risque.
          Pourtant, le modèle reste relativement méconnu en dehors d&apos;un cercle
          restreint d&apos;investisseurs institutionnels et individuels. Ce guide
          s&apos;adresse aux investisseurs potentiels &mdash; family offices,
          particuliers à haut patrimoine, ex-dirigeants, allocataires
          institutionnels &mdash; et présente le profil de rendement, les
          caractéristiques de risque, la construction de portefeuille et les
          avantages fiscaux spécifiques au contexte français.
        </p>
      </div>

      <h2 className={h2Class}>Le track record&nbsp;: des rendements remarquables</h2>
      <div className={bodyClass}>
        <p>
          Les données les plus complètes sur les rendements des search funds
          proviennent des études biennales publiées par la Stanford Graduate
          School of Business, complétées par les recherches de l&apos;IESE
          Business School et de l&apos;INSEAD. Les statistiques clés de
          l&apos;étude{" "}
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            Stanford 2024
          </Link>{" "}
          sont édifiantes&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>TRI brut agrégé de 35,1&nbsp;%</strong> sur l&apos;ensemble
            des investissements en search funds depuis 1984, y compris les pertes
            totales et les dépréciations.
          </li>
          <li>
            <strong>Multiple agrégé du capital investi de 4,5x</strong> &mdash;
            signifiant que les investisseurs ont récupéré en moyenne
            4,50&nbsp;&euro; pour chaque euro investi.
          </li>
          <li>
            <strong>Environ 63&nbsp;% des searchers réalisent une
            acquisition.</strong> Parmi ceux qui acquièrent, le rendement médian
            est de 2,4x le capital investi.
          </li>
          <li>
            <strong>Taux de perte maîtrisé&nbsp;:</strong> Environ 33&nbsp;% des
            acquisitions produisent des rendements inférieurs à 1x, mais les
            pertes totales (rendement de 0x) sont relativement rares car les
            entreprises sous-jacentes disposent d&apos;actifs réels et de flux de
            trésorerie.
          </li>
        </ul>
        <p>
          Ces rendements ne sont pas tirés par quelques valeurs aberrantes. Pour
          une analyse approfondie de la performance historique, consultez notre
          guide sur les{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            rendements des search funds
          </Link>. Contrairement au capital-risque, où les rendements sont
          fortement concentrés sur un petit nombre de succès spectaculaires,
          les search funds offrent une distribution de rendements plus équilibrée&nbsp;:
          la médiane et la moyenne sont toutes deux attractives.
        </p>
      </div>

      <h2 className={h2Class}>Les données européennes&nbsp;: l&apos;étude IESE</h2>
      <div className={bodyClass}>
        <p>
          L&apos;IESE Business School de Barcelone publie régulièrement une étude
          sur les search funds internationaux, avec un focus particulier sur
          l&apos;Europe. Les données européennes confirment la viabilité du modèle
          sur le continent, tout en révélant des caractéristiques
          spécifiques&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Les search funds européens acquièrent des entreprises à des multiples
            d&apos;EBITDA légèrement inférieurs à leurs homologues américains,
            offrant une marge de sécurité supplémentaire.
          </li>
          <li>
            La durée moyenne de la phase de recherche est légèrement plus longue
            en Europe (18 à 24 mois contre 15 à 20 mois aux États-Unis), en
            raison d&apos;un marché de la transmission moins intermédié.
          </li>
          <li>
            Les rendements européens, bien qu&apos;encore basés sur un échantillon
            plus restreint, sont comparables aux rendements américains historiques
            des premières cohortes.
          </li>
        </ul>
        <p>
          L&apos;écosystème européen bénéficie d&apos;un avantage structurel
          majeur&nbsp;: la vague de départs à la retraite des dirigeants de PME
          (baby-boomers) crée un flux massif d&apos;entreprises à transmettre.
          En France, on estime que 700&nbsp;000 entreprises changeront de mains
          dans les dix prochaines années, dont une proportion significative de
          PME rentables sans repreneur identifié.
        </p>
      </div>

      <h2 className={h2Class}>Profil risque-rendement&nbsp;: comparaison avec le PE et le VC</h2>
      <div className={bodyClass}>
        <p>
          Les search funds occupent une position distinctive dans le paysage des
          marchés privés. Comparés au private equity et au capital-risque, ils
          offrent plusieurs avantages structurels&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Valorisations d&apos;entrée plus basses&nbsp;:</strong> Les
            search funds acquièrent des entreprises à 3x à 6x l&apos;EBITDA,
            contre 8x à 12x pour le PE mid-market et davantage pour les LBO
            large-cap. Des multiples d&apos;entrée plus bas offrent une marge de
            sécurité plus importante et plus de levier de création de valeur.
          </li>
          <li>
            <strong>Cash flow réel dès le jour un&nbsp;:</strong> Contrairement
            au capital-risque, où les sociétés en portefeuille sont
            généralement déficitaires, les acquisitions search fund portent sur
            des entreprises établies et rentables avec des clients récurrents.
          </li>
          <li>
            <strong>Alignement dirigeant-investisseur&nbsp;:</strong> Le searcher
            devient le dirigeant opérationnel de l&apos;entreprise acquise. Cet
            alignement &laquo;&nbsp;skin in the game&nbsp;&raquo; est
            structurellement supérieur au modèle PE classique où des gérants
            professionnels supervisent un portefeuille de sociétés à distance.
          </li>
          <li>
            <strong>Diversification du portefeuille&nbsp;:</strong> Pour un
            investisseur qui constitue un portefeuille de 10 à 15 search funds,
            la diversification réduit significativement le risque de perte
            totale. La{" "}
            <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
              structure économique du modèle
            </Link>{" "}
            permet de limiter l&apos;exposition initiale au capital de recherche
            (30&nbsp;000 à 50&nbsp;000&nbsp;&euro; par fonds) avant de
            décider d&apos;investir dans l&apos;acquisition.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Construction de portefeuille</h2>
      <div className={bodyClass}>
        <p>
          L&apos;approche la plus efficace pour investir dans les search funds
          repose sur la construction d&apos;un portefeuille diversifié. Voici les
          principes clés&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Diversifiez sur 10 à 15 search funds minimum&nbsp;:</strong>{" "}
            La distribution des rendements des search funds présente une variance
            élevée. Un portefeuille concentré sur 2 ou 3 search funds expose
            l&apos;investisseur à un risque binaire important. À partir de 10
            search funds, la loi des grands nombres commence à jouer en votre
            faveur.
          </li>
          <li>
            <strong>Investissez dans les deux phases&nbsp;:</strong> Le capital
            de recherche offre le step-up (1,5x), tandis que le capital
            d&apos;acquisition expose directement à la performance de
            l&apos;entreprise. La combinaison des deux maximise le rendement
            ajusté au risque.
          </li>
          <li>
            <strong>Diversifiez par géographie et par secteur&nbsp;:</strong>{" "}
            Investir dans des search funds en France, en Espagne, en Italie et
            dans les pays nordiques réduit l&apos;exposition à un cycle
            économique national unique. De même, la diversification sectorielle
            protège contre les chocs sectoriels.
          </li>
          <li>
            <strong>Sélectionnez les searchers avec rigueur&nbsp;:</strong> La
            qualité du searcher est le principal déterminant du rendement.
            Évaluez le parcours professionnel, la thèse d&apos;investissement,
            la motivation et la capacité d&apos;exécution. Les investisseurs les
            plus expérimentés consacrent plus de temps à la sélection des
            searchers qu&apos;à l&apos;analyse des deals eux-mêmes.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Les avantages fiscaux français</h2>
      <div className={bodyClass}>
        <p>
          Le système fiscal français offre plusieurs dispositifs
          particulièrement avantageux pour les investisseurs dans les search
          funds. Ces dispositifs, sous réserve des conditions d&apos;éligibilité,
          peuvent significativement améliorer le rendement net d&apos;impôt
          de l&apos;investissement.
        </p>

        <h3 className={h3Class}>PEA-PME</h3>
        <p>
          Le Plan d&apos;Épargne en Actions dédié aux PME et ETI (PEA-PME)
          permet d&apos;investir jusqu&apos;à 225&nbsp;000&nbsp;&euro; dans des
          PME et ETI européennes avec une fiscalité allégée&nbsp;: après cinq ans
          de détention, les plus-values et dividendes sont exonérés d&apos;impôt
          sur le revenu (seuls les prélèvements sociaux de 17,2&nbsp;% restent
          dus). Pour qu&apos;un investissement en search fund soit éligible au
          PEA-PME, la société d&apos;acquisition doit respecter les critères de
          taille (moins de 5&nbsp;000 salariés, chiffre d&apos;affaires
          inférieur à 1,5 milliard d&apos;euros ou total de bilan inférieur à
          2 milliards d&apos;euros) et avoir son siège dans l&apos;Union
          européenne.
        </p>

        <h3 className={h3Class}>Réduction IR-PME (dispositif Madelin)</h3>
        <p>
          Le dispositif IR-PME accorde une réduction d&apos;impôt sur le revenu
          égale à 25&nbsp;% du montant investi dans le capital de PME éligibles,
          dans la limite de 50&nbsp;000&nbsp;&euro; pour un contribuable
          célibataire et 100&nbsp;000&nbsp;&euro; pour un couple. Ce dispositif
          est particulièrement pertinent pour les investissements dans la phase
          de recherche d&apos;un search fund, sous réserve que la société holding
          du searcher respecte les conditions d&apos;éligibilité (PME au sens
          communautaire, moins de 7 ans d&apos;existence pour le taux majoré,
          siège dans l&apos;UE).
        </p>

        <h3 className={h3Class}>Pacte Dutreil</h3>
        <p>
          Le pacte Dutreil, bien que principalement conçu pour la transmission
          familiale, peut dans certaines configurations bénéficier aux
          investisseurs search fund. Il permet une exonération de 75&nbsp;% de
          la valeur des titres transmis par donation ou succession, sous
          condition d&apos;un engagement collectif de conservation des titres
          (deux ans minimum) suivi d&apos;un engagement individuel de
          conservation (quatre ans). Pour un investisseur qui envisage de
          transmettre sa participation search fund à ses héritiers, le pacte
          Dutreil peut réduire considérablement la charge fiscale.
        </p>

        <h3 className={h3Class}>Report et sursis d&apos;imposition des plus-values</h3>
        <p>
          Le dispositif de report d&apos;imposition des plus-values de cession
          de titres (article 150-0 B ter du CGI) permet de réinvestir le produit
          d&apos;une cession dans une nouvelle opération sans imposition
          immédiate, sous réserve de réinvestir au moins 60&nbsp;% du produit
          de cession dans une activité économique dans un délai de deux ans. Ce
          mécanisme est pertinent pour les investisseurs qui réalisent une
          plus-value sur un search fund et souhaitent réinvestir dans un
          nouveau search fund.
        </p>
      </div>

      <h2 className={h2Class}>Les risques à considérer</h2>
      <div className={bodyClass}>
        <p>
          L&apos;investissement en search fund n&apos;est pas exempt de risques.
          Une analyse lucide des facteurs de risque est indispensable&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Risque de non-acquisition&nbsp;:</strong> Environ 37&nbsp;%
            des searchers ne parviennent pas à réaliser une acquisition. Le
            capital de recherche est alors partiellement ou totalement perdu.
            C&apos;est pourquoi la diversification sur un portefeuille de search
            funds est essentielle.
          </li>
          <li>
            <strong>Risque opérationnel&nbsp;:</strong> Le searcher est un
            dirigeant primo-accédant qui reprend une entreprise existante. Les
            erreurs de gestion, les conflits avec les équipes ou une intégration
            ratée peuvent détruire de la valeur. Les études montrent que la
            qualité du searcher est le premier facteur de succès.
          </li>
          <li>
            <strong>Risque d&apos;illiquidité&nbsp;:</strong> Les participations
            dans les search funds sont illiquides. L&apos;horizon
            d&apos;investissement typique est de 5 à 8 ans, et il n&apos;existe
            pas de marché secondaire structuré.
          </li>
          <li>
            <strong>Risque de concentration&nbsp;:</strong> Chaque search fund
            acquiert une seule entreprise. L&apos;investisseur est donc exposé au
            risque spécifique de cette entreprise (secteur, clients, réglementation).
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Pourquoi le moment est propice en France</h2>
      <div className={bodyClass}>
        <p>
          Plusieurs facteurs convergent pour faire de la France un terrain
          particulièrement favorable à l&apos;investissement en search funds&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            La vague de départs à la retraite des dirigeants baby-boomers crée
            un flux massif de PME à transmettre, souvent à des valorisations
            raisonnables par rapport aux marchés anglo-saxons.
          </li>
          <li>
            L&apos;écosystème académique (HEC, INSEAD, ESSEC) forme une
            génération de searchers de qualité et structure le marché.
          </li>
          <li>
            Les dispositifs fiscaux (PEA-PME, IR-PME, Dutreil) améliorent
            significativement le rendement net de l&apos;investissement.
          </li>
          <li>
            La SAS offre une flexibilité juridique idéale pour structurer les
            search funds (actions de préférence, vesting, gouvernance sur mesure).
          </li>
          <li>
            Le soutien de Bpifrance (prêt transmission, garanties) facilite le
            montage financier des acquisitions et réduit le risque pour les
            investisseurs equity.
          </li>
        </ul>
        <p>
          Pour en savoir plus sur l&apos;écosystème des investisseurs, consultez
          notre guide sur{" "}
          <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
            comment trouver des investisseurs search fund en France
          </Link>. Pour comprendre la mécanique financière du modèle, consultez
          notre guide sur les{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            cap tables et la distribution du capital
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business &mdash; <em>2024 Search Fund Study</em>, 2024.
        </li>
        <li>
          IESE Business School &mdash; <em>International Search Fund Study</em>, 2024.
        </li>
        <li>
          INSEAD &mdash; <em>ETA &amp; Search Funds Research Hub</em>, 2024.
        </li>
        <li>
          Direction Générale des Finances Publiques &mdash; <em>Bulletin Officiel des Finances Publiques (BOFiP)</em>&nbsp;: PEA-PME, IR-PME, article 150-0 B ter CGI.
        </li>
        <li>
          France Invest &mdash; <em>Activité du Capital-Investissement en France</em>, rapport annuel 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Reprendre une Entreprise&nbsp;: Le Guide du Repreneur</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
