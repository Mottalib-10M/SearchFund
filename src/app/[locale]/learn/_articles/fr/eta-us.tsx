import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function ETAUSFR() {
  return (
    <article>
      <h1 className={h1Class}>
        ETA aux États-Unis&nbsp;: Le Berceau du Search Fund
      </h1>

      <div className={bodyClass}>
        <p>
          Les États-Unis sont le pays d&apos;origine du search fund et, après
          plus de quarante ans d&apos;évolution, ils demeurent le marché ETA le
          plus profond, le plus mature et le plus institutionnalisé au monde.
          Ce qui a commencé comme un concept expérimental à la Stanford
          Graduate School of Business en 1984 est devenu une classe d&apos;actifs
          bien établie, dotée d&apos;un écosystème robuste d&apos;investisseurs, de
          conseillers, de prêteurs et de programmes universitaires. Pour un
          entrepreneur-acquéreur français ou européen, comprendre les
          spécificités du marché américain est essentiel, non seulement
          pour y envisager une recherche, mais aussi pour en tirer des
          enseignements applicables à l&apos;écosystème européen. Si vous
          découvrez l&apos;ETA, commencez par notre{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            guide d&apos;introduction au search fund
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Origines&nbsp;: Stanford GSB et la naissance du modèle</h2>
      <div className={bodyClass}>
        <p>
          Le concept de search fund a été créé en 1984 par le professeur
          H. Irving Grousbeck à la Stanford Graduate School of Business. Son
          idée était simple mais révolutionnaire&nbsp;: permettre à de jeunes
          diplômés MBA de lever un petit fonds pour financer la recherche
          d&apos;une entreprise à acquérir, puis, une fois la cible identifiée,
          lever le capital d&apos;acquisition auprès du même groupe
          d&apos;investisseurs. Ce modèle en deux phases offrait un chemin
          inédit vers la direction générale et la propriété d&apos;entreprise
          pour des profils talentueux mais dépourvus de capital personnel
          significatif.
        </p>
        <p>
          Les premiers search funds étaient de véritables expérimentations.
          Une poignée de diplômés de Stanford ont testé l&apos;hypothèse selon
          laquelle des opérateurs jeunes, motivés et formés pouvaient
          identifier, acquérir et diriger des PME plus efficacement que leurs
          propriétaires vieillissants. Les premiers résultats ont été
          suffisamment encourageants pour attirer d&apos;autres candidats, et
          le modèle a commencé à se diffuser au sein du réseau Stanford.
        </p>
        <p>
          Harvard Business School a rapidement suivi, développant ses propres
          cours dédiés à l&apos;ETA et produisant des études de cas qui ont
          contribué à la légitimité académique du modèle. Les professeurs
          Richard Ruback et Royce Yudkoff, auteurs du célèbre <em>HBR Guide
          to Buying a Small Business</em>, ont joué un rôle déterminant dans
          la popularisation du concept auprès des étudiants HBS et au-delà.
        </p>
        <p>
          Au cours des décennies suivantes, le modèle a prouvé sa robustesse.
          Le Center for Entrepreneurial Studies de Stanford a suivi la
          performance des search funds depuis les années 1990, publiant des
          études biennales, dont la plus récente est l&apos;
          <Link href="/learn/stanford-2024-study" className="text-apple-accent hover:underline">
            étude Stanford 2024
          </Link>{" "}
          qui sont devenues la référence absolue du secteur. Les
          données ont montré de manière constante que les search funds
          produisent des rendements attractifs pour les investisseurs, avec
          des TRI historiques médians significativement supérieurs à ceux du
          capital-investissement traditionnel.
        </p>
      </div>

      <h2 className={h2Class}>L&apos;écosystème académique américain</h2>
      <div className={bodyClass}>
        <p>
          Les États-Unis bénéficient de l&apos;infrastructure académique la plus
          développée au monde pour l&apos;enseignement de l&apos;ETA. Cet
          écosystème constitue un avantage compétitif considérable pour les
          searchers américains.
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Stanford GSB&nbsp;:</strong> Le berceau du modèle. Stanford
            propose des cours dédiés à l&apos;ETA, maintient la base de données
            la plus complète sur les résultats des search funds et produit
            l&apos;étude biennale de référence. Le réseau Stanford reste le plus
            vaste et le plus influent de l&apos;ETA américaine.
          </li>
          <li>
            <strong>Harvard Business School&nbsp;:</strong> HBS a développé un
            programme ETA robuste avec des études de cas dédiées, des
            professeurs spécialisés et un réseau croissant d&apos;alumni
            searchers. Les searchers HBS bénéficient de l&apos;immense base
            d&apos;alumni et de la notoriété de l&apos;école.
          </li>
          <li>
            <strong>Wharton (UPenn)&nbsp;:</strong> Curriculum ETA solide avec
            un accent particulier sur la modélisation financière et la
            structuration de deals.
          </li>
          <li>
            <strong>Kellogg, Booth, Tuck, Darden&nbsp;:</strong> Ces écoles de
            premier plan offrent désormais des cours sur l&apos;ETA, des clubs
            étudiants dédiés et des programmes de mentorat avec d&apos;anciens
            searchers. La diffusion du modèle dans ces institutions a
            considérablement élargi le vivier de candidats.
          </li>
        </ul>
        <p>
          Pour un observateur européen, la densité de ce réseau académique est
          frappante. En France, HEC Paris et l&apos;INSEAD jouent un rôle
          similaire mais à une échelle encore plus modeste. La multiplication
          des programmes MBA américains proposant des cursus ETA a créé un
          effet de masse qui n&apos;a pas encore d&apos;équivalent en Europe.
        </p>
      </div>

      <h2 className={h2Class}>Les SBA Loans&nbsp;: un avantage structurel majeur</h2>
      <div className={bodyClass}>
        <p>
          L&apos;un des avantages les plus significatifs du marché américain est
          l&apos;existence des prêts garantis par la Small Business Administration
          (SBA). Le programme SBA 7(a) offre des garanties gouvernementales
          sur les prêts destinés à l&apos;acquisition de petites entreprises,
          avec des montants pouvant atteindre 5&nbsp;millions de dollars par
          prêt.
        </p>

        <h3 className={h3Class}>Caractéristiques des prêts SBA 7(a)</h3>
        <ul className={ulClass}>
          <li>
            <strong>Montant maximal&nbsp;:</strong> Jusqu&apos;à 5&nbsp;millions de
            dollars par prêt, avec possibilité de combiner plusieurs prêts
            SBA sur des structures distinctes.
          </li>
          <li>
            <strong>Garantie gouvernementale&nbsp;:</strong> La SBA garantit
            75&nbsp;% à 85&nbsp;% du prêt selon le montant, ce qui réduit
            considérablement le risque pour le prêteur et facilite l&apos;accès au
            crédit pour des acquéreurs sans historique entrepreneurial.
          </li>
          <li>
            <strong>Durée et taux&nbsp;:</strong> Les prêts SBA offrent
            typiquement des durées de 10 à 25 ans (selon la nature des
            actifs financés) à des taux compétitifs indexés sur le prime rate
            majoré d&apos;une marge.
          </li>
          <li>
            <strong>Apport personnel réduit&nbsp;:</strong> L&apos;apport en
            fonds propres requis est généralement de 10&nbsp;% à 20&nbsp;%
            du prix d&apos;acquisition, significativement inférieur aux
            exigences des banques commerciales classiques.
          </li>
          <li>
            <strong>Full standby du seller financing&nbsp;:</strong> Le
            crédit vendeur peut être structuré en full standby (aucun
            remboursement pendant la durée du prêt SBA), ce qui améliore la
            capacité de remboursement de l&apos;acquéreur dans les premières
            années.
          </li>
        </ul>
        <p>
          En comparaison, le marché européen ne dispose pas d&apos;un équivalent
          aussi puissant. En France, Bpifrance propose le prêt transmission
          (jusqu&apos;à 400&nbsp;000&nbsp;&euro; sans garantie personnelle) et des
          garanties de prêts bancaires, mais le montant et la couverture
          restent inférieurs au programme SBA. Cette différence structurelle
          explique en partie pourquoi le search fund autofinancé
          (<em>self-funded search</em>) est proportionnellement plus répandu
          aux États-Unis qu&apos;en Europe.
        </p>
      </div>

      <h2 className={h2Class}>Structures juridiques&nbsp;: LLC et C-Corp</h2>
      <div className={bodyClass}>
        <p>
          Le cadre juridique américain offre une flexibilité remarquable pour
          la structuration des search funds. Deux formes dominent le
          paysage&nbsp;:
        </p>

        <h3 className={h3Class}>La LLC (Limited Liability Company)</h3>
        <p>
          La LLC est la structure privilégiée pour de nombreux search funds
          autofinancés. Sa principale caractéristique est la transparence
          fiscale (<em>pass-through taxation</em>)&nbsp;: les bénéfices et
          les pertes de la société sont reportés directement sur la
          déclaration fiscale des associés, évitant la double imposition. La
          LLC offre une grande souplesse dans la répartition des droits
          économiques et de gouvernance entre les membres, ce qui facilite
          la structuration de mécanismes d&apos;intéressement pour le searcher.
        </p>

        <h3 className={h3Class}>La C-Corporation</h3>
        <p>
          La C-Corp est la structure de référence pour les search funds
          traditionnels (avec levée de capital de recherche). Elle émet des
          actions ordinaires et privilégiées, ce qui permet une structuration
          classique du capital entre investisseurs et searcher. La C-Corp est
          soumise à l&apos;impôt sur les sociétés au niveau fédéral (taux de
          21&nbsp;% depuis la réforme fiscale de 2017) et au niveau étatique,
          avec une seconde couche d&apos;imposition lors de la distribution de
          dividendes aux actionnaires.
        </p>
        <p>
          Le choix entre LLC et C-Corp dépend de plusieurs facteurs&nbsp;: la
          préférence fiscale des investisseurs, la complexité de la
          structure capitalistique souhaitée, l&apos;éligibilité aux avantages
          fiscaux (notamment le QSBS, Qualified Small Business Stock,
          qui permet une exonération significative des plus-values), et la
          perspective de sortie envisagée.
        </p>
        <p>
          Pour un Français habitué à la SAS (Société par Actions Simplifiée),
          la C-Corp présente des similitudes structurelles (émission
          d&apos;actions, gouvernance par conseil d&apos;administration), tandis que
          la LLC se rapproche davantage de la SARL en termes de
          transparence fiscale et de flexibilité contractuelle.
        </p>
      </div>

      <h2 className={h2Class}>L&apos;écosystème d&apos;investisseurs</h2>
      <div className={bodyClass}>
        <p>
          Le marché américain bénéficie de l&apos;écosystème d&apos;investisseurs ETA
          le plus profond et le plus diversifié au monde. Plusieurs catégories
          d&apos;investisseurs participent activement au financement des search
          funds&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Investisseurs institutionnels spécialisés&nbsp;:</strong>{" "}
            Des fonds comme Pacific Lake Partners, Relay Investments, Search
            Fund Partners et d&apos;autres sont exclusivement dédiés à
            l&apos;investissement dans les search funds. Ils apportent non
            seulement du capital, mais aussi du mentorat, de
            l&apos;accompagnement opérationnel et un réseau de contacts.
          </li>
          <li>
            <strong>Anciens searchers devenus investisseurs&nbsp;:</strong> Le
            réseau des anciens searchers qui réinvestissent dans la génération
            suivante est l&apos;une des forces les plus distinctives de
            l&apos;écosystème américain. Ces investisseurs-opérateurs apportent
            une expérience de terrain irremplaçable.
          </li>
          <li>
            <strong>Family offices&nbsp;:</strong> De nombreux family offices
            américains allouent une partie de leur portefeuille à l&apos;ETA, attirés
            par les rendements historiques et l&apos;alignement d&apos;intérêts
            inhérent au modèle.
          </li>
          <li>
            <strong>Professeurs et alumni de business schools&nbsp;:</strong>{" "}
            Les facultés de Stanford, HBS et Wharton incluent des professeurs
            qui investissent personnellement dans les search funds de leurs
            anciens étudiants, renforçant le lien entre le monde académique
            et la pratique.
          </li>
        </ul>
        <p>
          Cette profondeur de l&apos;écosystème investisseur américain n&apos;a pas
          d&apos;équivalent en Europe. Un searcher américain peut espérer lever
          son capital de recherche en quelques semaines auprès
          d&apos;investisseurs qui connaissent parfaitement le modèle. En France,
          la levée prend généralement plus de temps car le vivier
          d&apos;investisseurs spécialisés est encore en construction. C&apos;est
          néanmoins un écart qui se comble rapidement, grâce à l&apos;arrivée
          d&apos;investisseurs américains sur le marché européen et à
          l&apos;émergence d&apos;acteurs locaux.
        </p>
      </div>

      <h2 className={h2Class}>Rendements historiques du modèle américain</h2>
      <div className={bodyClass}>
        <p>
          Les données de Stanford, couvrant plus de 680 search funds lancés
          depuis 1984, montrent des rendements historiquement très attractifs.
          L&apos;étude 2024 rapporte des TRI médians et des multiples sur
          capital investi qui placent les search funds parmi les classes
          d&apos;actifs alternatives les plus performantes. Pour une analyse
          détaillée des rendements, consultez notre article sur les{" "}
          <Link href="/learn/search-fund-returns" className="text-apple-accent hover:underline">
            rendements des search funds
          </Link>.
        </p>
        <p>
          Plusieurs facteurs expliquent la robustesse des rendements
          américains&nbsp;: la profondeur du marché des PME (plus de
          6&nbsp;millions d&apos;entreprises employeuses aux États-Unis), la
          vague de départs à la retraite des baby-boomers qui crée un flux
          continu de cibles, les multiples d&apos;acquisition encore raisonnables
          dans le segment des PME, et l&apos;accès à un financement par dette
          favorable via les prêts SBA.
        </p>
        <p>
          Toutefois, la concurrence s&apos;intensifie. Avec plus de 100 nouveaux
          search funds lancés chaque année aux États-Unis, les multiples
          d&apos;acquisition sont sous pression haussière dans les secteurs les
          plus prisés (services B2B, santé, services technologiques). Cette
          dynamique concurrentielle est l&apos;une des raisons pour lesquelles
          un nombre croissant de searchers américains s&apos;intéressent aux
          marchés internationaux, et notamment européens, où la concurrence
          est moins intense.
        </p>
      </div>

      <h2 className={h2Class}>Taille du marché et dynamiques sectorielles</h2>
      <div className={bodyClass}>
        <p>
          Le marché américain des PME est d&apos;une ampleur considérable. On
          estime que plusieurs milliers d&apos;entreprises dont le propriétaire
          est en âge de partir à la retraite changent de mains chaque année.
          Ce flux de cessions est alimenté par le vieillissement de la
          génération des baby-boomers, qui possède une proportion très
          importante des PME américaines.
        </p>
        <p>
          Les secteurs les plus ciblés par les search funds américains sont
          les services aux entreprises (B2B), les services technologiques
          (SaaS, services informatiques gérés), la santé (cabinets dentaires,
          cliniques vétérinaires, services de soins à domicile), les services
          à la personne (sécurité, nettoyage, maintenance) et la
          distribution spécialisée. Ces secteurs partagent des
          caractéristiques communes&nbsp;: revenus récurrents ou prévisibles,
          faible intensité capitalistique, marges d&apos;EBITDA de 15&nbsp;% à
          30&nbsp;%, et forte fragmentation permettant des stratégies de
          croissance externe (buy-and-build).
        </p>
      </div>

      <h2 className={h2Class}>Leçons pour le marché européen</h2>
      <div className={bodyClass}>
        <p>
          L&apos;expérience américaine offre des enseignements précieux pour
          l&apos;écosystème ETA européen en développement&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>L&apos;importance de l&apos;écosystème&nbsp;:</strong> Le succès du
            modèle américain repose sur un cercle vertueux entre universités,
            investisseurs, searchers et conseillers. En Europe, la
            construction de cet écosystème est en cours, avec l&apos;IESE,
            l&apos;INSEAD et HEC Paris en tête de pont.
          </li>
          <li>
            <strong>Le rôle du financement public&nbsp;:</strong> Les prêts
            SBA ont joué un rôle catalytique aux États-Unis. En Europe,
            Bpifrance, la KfW allemande, l&apos;ICO espagnol et d&apos;autres
            institutions publiques développent des programmes similaires,
            mais leur impact reste à amplifier.
          </li>
          <li>
            <strong>La standardisation des pratiques&nbsp;:</strong> Aux
            États-Unis, les term sheets, les mécanismes de step-up et les
            structures de gouvernance sont largement standardisés. En
            Europe, la diversité juridique entre pays crée une complexité
            supplémentaire qui nécessite une expertise locale.
          </li>
          <li>
            <strong>La spécialisation sectorielle&nbsp;:</strong> Les
            searchers américains les plus performants se spécialisent tôt
            dans un secteur précis. Cette approche est transposable en
            Europe, où la fragmentation sectorielle offre des opportunités
            similaires.
          </li>
          <li>
            <strong>La patience institutionnelle&nbsp;:</strong> Le modèle
            américain a mis près de trente ans avant d&apos;atteindre sa masse
            critique. L&apos;écosystème européen, lancé dans les années 2010,
            suit une trajectoire comparable mais accélérée grâce aux
            enseignements transatlantiques.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Différences culturelles et opérationnelles</h2>
      <div className={bodyClass}>
        <p>
          Au-delà des aspects structurels, le marché américain présente des
          différences culturelles significatives par rapport à l&apos;Europe.
          La culture entrepreneuriale américaine valorise la prise de risque
          et le passage rapide à l&apos;action. Les processus de cession sont
          généralement plus rapides qu&apos;en France, avec des délais de due
          diligence plus courts et une moindre formalisation juridique dans
          certains cas.
        </p>
        <p>
          La relation entre acquéreur et cédant est aussi différente. Aux
          États-Unis, la transaction est souvent vue comme un événement
          commercial rationnel. En France et en Europe du Sud, la dimension
          émotionnelle de la transmission est plus prononcée , 
          l&apos;attachement du fondateur à &laquo;&nbsp;son&nbsp;&raquo;
          entreprise, à ses salariés et à son héritage nécessite une approche
          relationnelle plus fine de la part du searcher.
        </p>
        <p>
          Le droit du travail constitue une autre différence majeure. La
          flexibilité du marché du travail américain (<em>at-will
          employment</em>) contraste fortement avec la protection renforcée
          des salariés en Europe, notamment en France. Cette réalité
          influence les stratégies post-acquisition&nbsp;: là où un searcher
          américain peut restructurer rapidement une équipe sous-performante,
          un searcher français doit intégrer les contraintes du Code du
          travail et du dialogue social dans son plan de création de valeur.
        </p>
      </div>

      <h2 className={h2Class}>Le marché américain vu depuis l&apos;Europe</h2>
      <div className={bodyClass}>
        <p>
          Pour un entrepreneur français envisageant l&apos;ETA, le marché
          américain peut être à la fois une source d&apos;inspiration et un
          terrain d&apos;action. Plusieurs searchers européens ont
          conduit des recherches aux États-Unis, attirés par la profondeur du
          marché, la disponibilité du financement SBA et la taille du
          vivier de cibles. Toutefois, lancer un search fund aux États-Unis
          depuis l&apos;Europe implique des défis spécifiques&nbsp;: obtention
          d&apos;un visa de travail, construction d&apos;un réseau local,
          compréhension des nuances juridiques et fiscales étatiques, et
          adaptation à la culture d&apos;affaires américaine.
        </p>
        <p>
          À l&apos;inverse, un nombre croissant d&apos;investisseurs américains
          spécialisés dans l&apos;ETA déploient du capital en Europe. Cette
          convergence transatlantique est un signe de maturation du marché
          européen et crée des opportunités de collaboration et
          d&apos;apprentissage mutuel entre les deux écosystèmes.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business &mdash; <em>2024 Search Fund Study&nbsp;: Selected Observations</em>, 2024.
        </li>
        <li>
          U.S. Small Business Administration &mdash; <em>SBA 7(a) Loan Program Overview</em>, 2024.
        </li>
        <li>
          Harvard Business School, Ruback, R. &amp; Yudkoff, R., <em>HBR Guide to Buying a Small Business</em>.
        </li>
        <li>
          IESE Business School &mdash; <em>International Search Fund Study</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
