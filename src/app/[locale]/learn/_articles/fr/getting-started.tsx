import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function GettingStartedFR() {
  return (
    <article>
      <h1 className={h1Class}>Qu&apos;est-ce qu&apos;un Search Fund&nbsp;? Guide Complet</h1>

      <div className={bodyClass}>
        <p>
          Le search fund &mdash; ou fonds de recherche &mdash; est un véhicule
          d&apos;investissement qui permet à un entrepreneur de lever des capitaux
          auprès d&apos;investisseurs pour financer la recherche, l&apos;acquisition et
          la direction opérationnelle d&apos;une PME rentable. Né en 1984 à la
          Stanford Graduate School of Business sous l&apos;impulsion du professeur
          H. Irving Grousbeck, le modèle s&apos;est largement diffusé en Amérique
          du Nord avant de traverser l&apos;Atlantique pour s&apos;installer durablement
          en Europe, et notamment en France, où il bénéficie d&apos;un terreau
          particulièrement fertile&nbsp;: 700&nbsp;000 entreprises à transmettre
          dans la prochaine décennie, un tissu dense de PME familiales et un
          écosystème académique de premier plan autour de{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            HEC Paris, l&apos;INSEAD et l&apos;ESSEC
          </Link>.
        </p>

        <p>
          Contrairement au capital-investissement classique, où des gérants
          professionnels déploient un fonds sur un portefeuille de sociétés, le
          search fund est dédié à l&apos;acquisition d&apos;une seule entreprise. Le
          searcher &mdash; l&apos;entrepreneur-acquéreur &mdash; ne se contente pas
          d&apos;être un investisseur financier&nbsp;: il devient le dirigeant
          opérationnel (Président ou Directeur Général) de la société acquise.
          C&apos;est ce modèle d&apos;owner-operator qui distingue le search fund des
          autres formes d&apos;
          <Link href="/learn/eta-europe" className="text-apple-accent hover:underline">
            Entrepreneurship Through Acquisition (ETA)
          </Link>{" "}
          et qui attire des profils ambitieux issus du conseil en stratégie, de
          la banque d&apos;affaires ou de l&apos;industrie.
        </p>
      </div>

      <h2 className={h2Class}>Origines et histoire du modèle</h2>
      <div className={bodyClass}>
        <p>
          Le concept de search fund a été formalisé à Stanford en 1984, lorsque
          le professeur Grousbeck a encadré les premiers étudiants MBA dans la
          création de véhicules dédiés à la recherche d&apos;une entreprise à
          acquérir. À l&apos;époque, l&apos;idée était révolutionnaire&nbsp;: permettre
          à de jeunes diplômés sans capital personnel significatif de devenir
          dirigeants-propriétaires d&apos;une PME en quelques années seulement.
        </p>
        <p>
          Entre 1984 et 2000, le modèle est resté confidentiel, limité à
          quelques dizaines de search funds liés aux réseaux de Stanford et de
          Harvard. C&apos;est à partir des années 2010 que l&apos;accélération s&apos;est
          produite, portée par la diffusion des études académiques (notamment
          l&apos;étude biennale de Stanford GSB), l&apos;intérêt croissant des family
          offices et l&apos;émergence de programmes dédiés dans les business schools
          européennes. L&apos;IESE Business School à Barcelone a été pionnière en
          Europe, suivie par HEC Paris, l&apos;INSEAD, la London Business School et
          l&apos;IE Business School.
        </p>
        <p>
          En France, les premiers search funds structurés sont apparus vers
          2015-2016, portés par des alumni INSEAD et HEC. Depuis, l&apos;écosystème
          s&apos;est considérablement étoffé&nbsp;: on estime qu&apos;une trentaine de
          search funds actifs opèrent en France en 2024, un chiffre en forte
          croissance annuelle. La chaire Entrepreneuriat de HEC Paris et le
          centre ETA de l&apos;INSEAD contribuent activement à la recherche et à la
          formation sur ce modèle.
        </p>
      </div>

      <h2 className={h2Class}>Économie du search fund</h2>
      <div className={bodyClass}>
        <p>
          L&apos;économie du search fund repose sur un alignement d&apos;intérêts entre
          le searcher et ses investisseurs. Le modèle se décompose en deux phases
          de financement distinctes&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Le capital de recherche (search capital)&nbsp;:</strong> Les
            investisseurs financent la phase de recherche, typiquement entre
            300&nbsp;000&nbsp;&euro; et 600&nbsp;000&nbsp;&euro; sur 18 à 24
            mois. Ce capital couvre la rémunération du searcher (généralement
            4&nbsp;000 à 6&nbsp;000&nbsp;&euro; mensuels en France), les frais
            juridiques, les déplacements, les outils de sourcing et les frais
            généraux. En contrepartie, chaque investisseur de la phase de
            recherche obtient un droit préférentiel de co-investir dans
            l&apos;acquisition (le &laquo;&nbsp;step-up&nbsp;&raquo;), généralement à un
            multiple de 1,5x de sa mise initiale.
          </li>
          <li>
            <strong>Le capital d&apos;acquisition&nbsp;:</strong> Une fois la cible
            identifiée et la{" "}
            <Link href="/learn/letter-of-intent" className="text-apple-accent hover:underline">
              lettre d&apos;intention signée
            </Link>, le searcher lève le capital nécessaire pour financer l&apos;acquisition.
            Ce capital provient des investisseurs de la phase de recherche (qui
            exercent leur step-up), de nouveaux investisseurs et de dette bancaire.
            En France, le{" "}
            <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
              financement d&apos;acquisition
            </Link>{" "}
            combine typiquement fonds propres (30-40%), prêt bancaire (40-50%),
            crédit vendeur (10-20%) et éventuellement prêt Bpifrance Transmission.
          </li>
        </ol>
        <p>
          Le searcher reçoit généralement 20 à 30&nbsp;% du capital ordinaire
          (common equity), acquis progressivement via un mécanisme de vesting sur
          quatre à cinq ans. Cette participation est structurée en trois
          tranches&nbsp;: un tiers au closing, un tiers après deux ans de
          direction, un tiers après quatre ans. Ce mécanisme garantit
          l&apos;alignement à long terme entre le searcher-dirigeant et ses
          investisseurs.
        </p>
      </div>

      <h2 className={h2Class}>Le cycle de vie d&apos;un search fund</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Phase 1&nbsp;: Préparation (3 à 6 mois)</h3>
        <p>
          Avant toute levée de fonds, le futur searcher consacre trois à six
          mois à sa préparation. Il étudie le modèle en profondeur, lit les
          études de Stanford et de l&apos;IESE, rencontre des searchers expérimentés
          et des investisseurs, et développe sa thèse d&apos;investissement&nbsp;:
          quels secteurs, quelle géographie, quelle taille de cible, quels
          critères financiers. Il prépare également les aspects pratiques&nbsp;:
          constitution de la structure juridique (SAS en France), rédaction du{" "}
          <Link href="/learn/writing-a-ppm" className="text-apple-accent hover:underline">
            mémorandum de placement privé (PPM)
          </Link>, modélisation financière et budget personnel.
        </p>

        <h3 className={h3Class}>Phase 2&nbsp;: Levée du capital de recherche (2 à 4 mois)</h3>
        <p>
          Le searcher présente son PPM aux investisseurs potentiels &mdash;
          family offices, investisseurs institutionnels spécialisés dans l&apos;ETA,
          anciens searchers devenus investisseurs. En France, le réseau des
          investisseurs search fund est encore en construction, mais il s&apos;étoffe
          rapidement grâce aux réseaux HEC et INSEAD et à l&apos;arrivée
          d&apos;investisseurs européens et américains spécialisés.
        </p>

        <h3 className={h3Class}>Phase 3&nbsp;: Recherche active (12 à 24 mois)</h3>
        <p>
          C&apos;est le cœur du processus. Le searcher identifie, contacte et évalue
          des centaines de cibles potentielles. En France, les canaux de sourcing
          incluent le réseau CRA (Cédants et Repreneurs d&apos;Affaires), Bpifrance
          Transmission, les plateformes comme Fusacq, l&apos;approche directe auprès
          des dirigeants, et les intermédiaires (experts-comptables, avocats
          d&apos;affaires, conseillers CCI). Le searcher analyse en moyenne 100 à
          200 dossiers, entre en discussion approfondie avec 20 à 30 cibles et
          soumet 3 à 5 lettres d&apos;intention avant de conclure une acquisition.
        </p>

        <h3 className={h3Class}>Phase 4&nbsp;: Acquisition et transition (3 à 6 mois)</h3>
        <p>
          Une fois la LOI signée, le searcher mène les{" "}
          <Link href="/learn/due-diligence-checklist" className="text-apple-accent hover:underline">
            due diligences
          </Link>{" "}
          (comptable, juridique, fiscale, sociale, opérationnelle), négocie le
          contrat de cession définitif (SPA ou protocole de cession), finalise le
          montage financier et prépare la transition managériale. En France, la
          consultation du CSE (Comité Social et Économique) est obligatoire avant
          toute cession de contrôle, ce qui allonge parfois le calendrier.
        </p>

        <h3 className={h3Class}>Phase 5&nbsp;: Direction opérationnelle (5 à 7 ans)</h3>
        <p>
          Le searcher prend les commandes de l&apos;entreprise en tant que Président
          ou Directeur Général. Il met en œuvre son plan de création de valeur&nbsp;:
          croissance organique, optimisation opérationnelle, développement
          commercial, digitalisation, et éventuellement croissance externe
          (buy-and-build). Cette phase dure généralement cinq à sept ans, au
          terme desquels une sortie est organisée.
        </p>
      </div>

      <h2 className={h2Class}>L&apos;écosystème du search fund en France</h2>
      <div className={bodyClass}>
        <p>
          La France dispose d&apos;un écosystème ETA en pleine structuration,
          soutenu par plusieurs piliers&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Grandes écoles de commerce&nbsp;:</strong> HEC Paris (chaire
            Entrepreneuriat, cours dédié à l&apos;ETA), INSEAD (ETA Club, réseau
            d&apos;alumni investisseurs), ESSEC, EDHEC et EM Lyon proposent
            désormais des modules sur l&apos;entrepreneuriat par acquisition.
          </li>
          <li>
            <strong>Réseaux d&apos;accompagnement&nbsp;:</strong> Le CRA (Cédants et
            Repreneurs d&apos;Affaires) compte plus de 130 consultants bénévoles qui
            accompagnent gratuitement cédants et repreneurs. Les CCI et CMA
            (Chambres de Métiers et de l&apos;Artisanat) offrent également un
            accompagnement structuré.
          </li>
          <li>
            <strong>Financement public&nbsp;:</strong> Bpifrance joue un rôle
            central avec le prêt transmission (jusqu&apos;à 400&nbsp;000&nbsp;&euro;
            sans garantie personnelle), la garantie de prêt bancaire et les
            dispositifs Initiative France. Le réseau France Active complète le
            dispositif pour les projets à impact social.
          </li>
          <li>
            <strong>Cadre juridique favorable&nbsp;:</strong> La SAS (Société par
            Actions Simplifiée) offre une flexibilité statutaire idéale pour les
            search funds, permettant la création de classes d&apos;actions, le
            vesting et des mécanismes de gouvernance sur mesure. Le pacte Dutreil
            offre une exonération de 75&nbsp;% des droits de transmission.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Profil type du searcher français</h2>
      <div className={bodyClass}>
        <p>
          Le profil type du searcher en France présente des caractéristiques
          spécifiques par rapport au modèle américain. L&apos;âge moyen est de 30 à
          38 ans (légèrement plus élevé qu&apos;aux États-Unis), avec un parcours
          typique incluant une grande école de commerce (HEC, INSEAD, ESSEC) ou
          d&apos;ingénieur (Polytechnique, Centrale, Mines), trois à huit ans
          d&apos;expérience en conseil en stratégie (McKinsey, BCG, Bain), en banque
          d&apos;affaires (Rothschild, Lazard) ou en direction opérationnelle, et
          une forte motivation pour l&apos;entrepreneuriat et la direction générale.
        </p>
        <p>
          Une particularité française est la présence significative de profils
          d&apos;ingénieurs, qui apportent une expertise technique précieuse dans
          l&apos;acquisition de PME industrielles ou technologiques. Le bilinguisme
          français-anglais est un atout majeur pour accéder aux investisseurs
          internationaux tout en ciblant des PME françaises.
        </p>
      </div>

      <h2 className={h2Class}>Le search fund comparé aux autres modèles</h2>
      <div className={bodyClass}>
        <p>
          Le search fund se distingue de plusieurs modèles voisins&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>vs. Private Equity (LBO)&nbsp;:</strong> Le PE acquiert un
            portefeuille de sociétés via des gérants professionnels. Le searcher
            acquiert une seule entreprise qu&apos;il dirige lui-même.
          </li>
          <li>
            <strong>vs. Management Buy-Out (MBO)&nbsp;:</strong> Le MBO est
            conduit par les cadres déjà en place. Le search fund implique un
            dirigeant externe.
          </li>
          <li>
            <strong>vs.{" "}
            <Link href="/learn/self-funded-vs-traditional" className="text-apple-accent hover:underline">
              Search fund autofinancé
            </Link>&nbsp;:</strong> Le modèle autofinancé dispense de la levée de
            capital de recherche mais exige un apport personnel plus important
            et offre moins de soutien institutionnel.
          </li>
          <li>
            <strong>vs. Création d&apos;entreprise&nbsp;:</strong> Le search fund
            acquiert une entreprise existante avec des clients, un chiffre
            d&apos;affaires et des salariés, réduisant considérablement le risque
            par rapport à la création ex nihilo.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Comment se lancer&nbsp;: les premières étapes</h2>
      <div className={bodyClass}>
        <ol className={olClass}>
          <li>
            <strong>Étudiez le modèle en profondeur&nbsp;:</strong> Lisez
            l&apos;étude Stanford GSB, les recherches IESE, et les ressources de la
            chaire Entrepreneuriat de HEC Paris.
          </li>
          <li>
            <strong>Développez votre thèse d&apos;investissement&nbsp;:</strong> Quels
            secteurs, quelle géographie, quelle taille de cible, quels critères
            financiers (EBITDA, croissance, récurrence du CA).
          </li>
          <li>
            <strong>Constituez votre réseau&nbsp;:</strong> Rencontrez des
            searchers, des investisseurs et des conseillers. Les événements
            organisés par HEC, l&apos;INSEAD, le CRA et Bpifrance sont d&apos;excellents
            points de départ.
          </li>
          <li>
            <strong>Choisissez votre structure juridique&nbsp;:</strong> En
            France, la{" "}
            <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
              SAS est la forme privilégiée
            </Link>{" "}
            pour sa flexibilité statutaire.
          </li>
          <li>
            <strong>Rédigez votre PPM et levez le capital de recherche&nbsp;:</strong>{" "}
            Présentez votre projet aux investisseurs avec un document structuré
            et professionnel.
          </li>
          <li>
            <strong>Lancez votre recherche&nbsp;:</strong> Systématisez votre
            approche de sourcing en combinant les canaux institutionnels (CRA,
            Bpifrance Transmission) et l&apos;approche directe.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Stanford Graduate School of Business &mdash; <em>2024 Search Fund Study</em>, 2024.
        </li>
        <li>
          HEC Paris, Chaire Entrepreneuriat &mdash; <em>Entrepreneuriat par Acquisition&nbsp;: état des lieux et perspectives</em>, 2024.
        </li>
        <li>
          INSEAD &mdash; <em>ETA &amp; Search Funds Research Hub</em>, 2024.
        </li>
        <li>
          IESE Business School &mdash; <em>International Search Fund Study</em>, 2024.
        </li>
        <li>
          Bpifrance &mdash; <em>Reprendre une Entreprise&nbsp;: Le Guide du Repreneur</em>, 2024.
        </li>
        <li>
          CRA (Cédants et Repreneurs d&apos;Affaires) &mdash; <em>Rapport Annuel sur la Transmission d&apos;Entreprise</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
