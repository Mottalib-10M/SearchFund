import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function WritingAPPMFR() {
  return (
    <article>
      <h1 className={h1Class}>Rédiger un PPM (Mémorandum de Placement Privé)</h1>

      <div className={bodyClass}>
        <p>
          Le Private Placement Memorandum (PPM), ou mémorandum de
          placement privé, est le document fondateur du search fund.
          C&apos;est à travers ce document que le searcher présente son projet,
          sa thèse d&apos;investissement, les conditions financières de la levée
          et les facteurs de risque aux investisseurs potentiels. En France,
          la rédaction d&apos;un PPM obéit à des contraintes réglementaires
          spécifiques liées au droit de l&apos;Autorité des marchés financiers
          (AMF) et au cadre européen des placements privés.
        </p>
        <p>
          Ce guide détaille la structure, le contenu et les aspects
          réglementaires d&apos;un PPM adapté au marché français. Il s&apos;adresse
          aux searchers en phase de préparation de leur levée de capital de
          recherche et aux conseils juridiques qui les accompagnent. Pour une
          vue d&apos;ensemble du processus, consultez notre{" "}
          <Link href="/learn/getting-started" className="text-apple-accent hover:underline">
            guide complet du search fund
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Cadre réglementaire en France</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Placement privé vs. offre au public</h3>
        <p>
          En France, toute offre de titres financiers est soit une offre au
          public (soumise à l&apos;obligation de prospectus visé par l&apos;AMF), soit
          un placement privé (exempté de cette obligation). Les search funds
          relèvent systématiquement du placement privé, ce qui simplifie
          considérablement le cadre documentaire.
        </p>
        <p>
          Le Règlement européen Prospectus (Règlement (UE) 2017/1129) et le
          Code monétaire et financier (articles L.&nbsp;411-1 et suivants)
          définissent les exemptions applicables. Un placement est considéré
          comme privé lorsqu&apos;il remplit l&apos;une des conditions suivantes&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            L&apos;offre s&apos;adresse exclusivement à des investisseurs qualifiés au
            sens de l&apos;article L.&nbsp;411-2 du Code monétaire et financier
            (établissements de crédit, entreprises d&apos;investissement, organismes
            de placement collectif, etc.).
          </li>
          <li>
            L&apos;offre s&apos;adresse à un nombre restreint de personnes (moins de
            150 personnes physiques ou morales, autres que des investisseurs
            qualifiés, par État membre).
          </li>
          <li>
            Le montant total de l&apos;offre ne dépasse pas 8&nbsp;000&nbsp;000&nbsp;&euro;
            sur une période de douze mois.
          </li>
          <li>
            La valeur nominale unitaire des titres est d&apos;au moins
            100&nbsp;000&nbsp;&euro;.
          </li>
        </ul>
        <p>
          Dans la pratique, un search fund français coche généralement
          plusieurs de ces exemptions simultanément&nbsp;: le nombre
          d&apos;investisseurs est limité (typiquement 10 à 20), le montant total
          de la levée de recherche est inférieur à 8&nbsp;000&nbsp;000&nbsp;&euro;
          et les investisseurs sont souvent des investisseurs qualifiés (family
          offices, anciens searchers, fonds spécialisés).
        </p>

        <h3 className={h3Class}>Obligations persistantes</h3>
        <p>
          L&apos;exemption de prospectus ne dispense pas le searcher de toute
          obligation. Le PPM doit être sincère et complet&nbsp;: toute omission
          ou inexactitude significative engage la responsabilité civile du
          searcher envers les investisseurs. Le Code civil (article 1112-1)
          impose un devoir d&apos;information précontractuelle&nbsp;: chaque partie
          doit communiquer les informations dont elle sait le caractère
          déterminant pour le consentement de l&apos;autre.
        </p>
      </div>

      <h2 className={h2Class}>Structure type du PPM</h2>
      <div className={bodyClass}>
        <p>
          Un PPM de search fund français suit généralement la structure
          suivante, adaptée des standards anglo-saxons au contexte juridique
          et culturel français&nbsp;:
        </p>

        <h3 className={h3Class}>1. Page de garde et avertissements</h3>
        <p>
          La page de garde identifie la société émettrice (la SAS du searcher),
          le type de titres offerts (actions ordinaires, actions de préférence,
          BSA), le montant cible de la levée et la date du document. Elle est
          suivie d&apos;un avertissement juridique (disclaimer) précisant que le
          document ne constitue pas une offre au public au sens du Règlement
          Prospectus, que les titres n&apos;ont pas fait l&apos;objet d&apos;un visa de
          l&apos;AMF, et que l&apos;investissement comporte des risques pouvant
          entraîner la perte totale du capital investi.
        </p>

        <h3 className={h3Class}>2. Résumé exécutif</h3>
        <p>
          Le résumé exécutif (executive summary) présente en deux à trois
          pages l&apos;essentiel du projet&nbsp;: qui est le searcher, quelle est
          sa thèse d&apos;investissement, combien lève-t-il et à quelles
          conditions. C&apos;est le document que les investisseurs liront en
          premier, et souvent le seul qu&apos;ils liront intégralement avant de
          décider s&apos;ils souhaitent approfondir. Il doit être concis,
          percutant et impeccablement rédigé.
        </p>

        <h3 className={h3Class}>3. Profil du searcher</h3>
        <p>
          Cette section détaille le parcours professionnel et académique du
          searcher, ses compétences clés, sa motivation pour l&apos;entrepreneuriat
          par acquisition et sa capacité à diriger une PME. En France, les
          investisseurs accordent une attention particulière à la formation
          (grande école de commerce ou d&apos;ingénieur), à l&apos;expérience sectorielle
          et aux références professionnelles. Le searcher doit également
          indiquer son engagement personnel (temps plein, apport en capital,
          rémunération pendant la phase de recherche).
        </p>

        <h3 className={h3Class}>4. Thèse d&apos;investissement</h3>
        <p>
          La thèse d&apos;investissement est le cœur intellectuel du PPM. Elle
          définit les critères de recherche du searcher&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Secteurs cibles&nbsp;:</strong> Services aux entreprises
            (B2B), logiciels, santé, services techniques, distribution
            spécialisée, etc.
          </li>
          <li>
            <strong>Géographie&nbsp;:</strong> France métropolitaine, Belgique
            francophone, Suisse romande, ou un périmètre plus restreint
            (Île-de-France, Auvergne-Rhône-Alpes, etc.).
          </li>
          <li>
            <strong>Taille de cible&nbsp;:</strong> Chiffre d&apos;affaires
            (typiquement 2 à 15&nbsp;M&euro;), EBITDA (0,5 à 3&nbsp;M&euro;),
            effectif (15 à 100 salariés).
          </li>
          <li>
            <strong>Critères financiers&nbsp;:</strong> Croissance historique,
            récurrence du chiffre d&apos;affaires, marges, intensité capitalistique.
          </li>
          <li>
            <strong>Critères qualitatifs&nbsp;:</strong> Position de marché,
            qualité du management intermédiaire, dépendance au dirigeant,
            potentiel de croissance.
          </li>
        </ul>

        <h3 className={h3Class}>5. Conditions de l&apos;investissement</h3>
        <p>
          Cette section décrit les termes économiques de la levée&nbsp;: montant
          total recherché, ticket minimum par investisseur, type de titres
          émis, step-up (droit préférentiel de co-investir dans l&apos;acquisition),
          participation du searcher au capital (vesting sur quatre à cinq ans),
          gouvernance (composition du comité consultatif, droits d&apos;information,
          droits de veto). Les conditions doivent être présentées de manière
          claire et synthétique, idéalement sous forme de term sheet annexée
          au PPM. Pour les détails de structuration, voir notre guide sur les{" "}
          <Link href="/learn/cap-tables-equity" className="text-apple-accent hover:underline">
            tables de capitalisation
          </Link>.
        </p>

        <h3 className={h3Class}>6. Budget de la phase de recherche</h3>
        <p>
          Le budget détaillé de la phase de recherche (18 à 24 mois) doit être
          présenté avec transparence. Les principaux postes comprennent&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            Rémunération du searcher (4&nbsp;000 à 6&nbsp;000&nbsp;&euro;/mois
            en France).
          </li>
          <li>
            Charges sociales et frais de gestion de la SAS.
          </li>
          <li>
            Frais juridiques (constitution de la SAS, pacte d&apos;actionnaires,
            BSA).
          </li>
          <li>
            Outils de sourcing (abonnements aux bases de données, CRM, Infogreffe).
          </li>
          <li>
            Déplacements et frais de représentation.
          </li>
          <li>
            Provision pour frais de due diligence préliminaire.
          </li>
          <li>
            Marge de sécurité (10 à 15&nbsp;% du budget total).
          </li>
        </ul>

        <h3 className={h3Class}>7. Facteurs de risque</h3>
        <p>
          La section des facteurs de risque est juridiquement critique. Elle
          doit être exhaustive, spécifique et honnête. Les risques
          spécifiquement français à mentionner incluent&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Risque de non-acquisition&nbsp;:</strong> La phase de
            recherche peut ne pas aboutir à une acquisition, entraînant la
            perte totale du capital de recherche.
          </li>
          <li>
            <strong>Risque réglementaire&nbsp;:</strong> Évolution de la
            législation fiscale (Dutreil, intégration fiscale, flat tax),
            sociale (droit du travail, conventions collectives) ou
            environnementale (ICPE, RGPD).
          </li>
          <li>
            <strong>Risque de dépendance au dirigeant&nbsp;:</strong> La
            performance de la société acquise dépendra largement du searcher
            en tant que dirigeant unique.
          </li>
          <li>
            <strong>Risque de liquidité&nbsp;:</strong> Les titres d&apos;une SAS
            non cotée ne bénéficient d&apos;aucun marché secondaire organisé.
            La sortie des investisseurs dépend de la capacité du searcher à
            organiser une cession ou un rachat.
          </li>
          <li>
            <strong>Risque de marché&nbsp;:</strong> L&apos;environnement
            économique français et européen peut affecter la valorisation des
            cibles et les conditions de financement.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Rédaction et présentation</h2>
      <div className={bodyClass}>
        <h3 className={h3Class}>Langue</h3>
        <p>
          Le choix de la langue dépend du profil des investisseurs ciblés. Si
          le searcher vise des investisseurs internationaux (ce qui est fréquent
          dans l&apos;écosystème search fund), le PPM sera rédigé en anglais. Si le
          cercle d&apos;investisseurs est principalement français, une rédaction en
          français est préférable. Certains searchers produisent deux
          versions. Dans tous les cas, la documentation juridique (statuts,
          pacte d&apos;actionnaires) sera rédigée en français conformément au droit
          applicable.
        </p>

        <h3 className={h3Class}>Ton et style</h3>
        <p>
          Le PPM doit trouver l&apos;équilibre entre rigueur professionnelle et
          accessibilité. Il ne s&apos;agit pas d&apos;un prospectus AMF&nbsp;: le
          document doit refléter la personnalité du searcher tout en
          respectant les standards du private equity. La mise en page doit
          être sobre et professionnelle. Les graphiques et tableaux doivent
          être utilisés avec parcimonie et uniquement lorsqu&apos;ils apportent
          une information significative.
        </p>

        <h3 className={h3Class}>Longueur</h3>
        <p>
          Un PPM de search fund compte typiquement 25 à 40 pages, annexes
          comprises (term sheet, CV détaillé du searcher, budget, calendrier
          indicatif). Au-delà, le document perd en efficacité&nbsp;: les
          investisseurs expérimentés apprécient la concision et la capacité de
          synthèse, qui reflètent les qualités managériales du searcher.
        </p>
      </div>

      <h2 className={h2Class}>Processus de distribution</h2>
      <div className={bodyClass}>
        <p>
          La distribution du PPM aux investisseurs potentiels doit respecter
          le cadre du placement privé. Concrètement&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Identification des investisseurs&nbsp;:</strong> Le searcher
            constitue une liste ciblée d&apos;investisseurs potentiels , 
            family offices, investisseurs ETA spécialisés, business angels
            qualifiés, anciens searchers. Le réseau des{" "}
            <Link href="/learn/finding-investors" className="text-apple-accent hover:underline">
              investisseurs search fund
            </Link>{" "}
            en France est encore de taille modeste, ce qui rend le réseau
            personnel et les recommandations essentiels.
          </li>
          <li>
            <strong>Approche initiale&nbsp;:</strong> Un teaser d&apos;une à deux
            pages est envoyé en premier. Si l&apos;investisseur manifeste son
            intérêt, le PPM complet est partagé, généralement après signature
            d&apos;un accord de confidentialité (NDA).
          </li>
          <li>
            <strong>Réunions d&apos;investisseurs&nbsp;:</strong> Le searcher
            organise des réunions individuelles ou en petit groupe pour
            présenter son projet et répondre aux questions. En France, les
            investisseurs apprécient un format structuré avec présentation
            PowerPoint suivie d&apos;une session de questions-réponses.
          </li>
          <li>
            <strong>Clôture de la levée&nbsp;:</strong> Une fois le montant
            cible atteint, les investisseurs signent le bulletin de
            souscription, le pacte d&apos;actionnaires et libèrent leurs fonds.
          </li>
        </ol>
      </div>

      <h2 className={h2Class}>Erreurs fréquentes dans les PPM français</h2>
      <div className={bodyClass}>
        <ul className={ulClass}>
          <li>
            <strong>Thèse trop large&nbsp;:</strong> &laquo;&nbsp;Je cherche une
            PME rentable en France&nbsp;&raquo; n&apos;est pas une thèse
            d&apos;investissement. Les investisseurs veulent voir une réflexion
            approfondie sur les secteurs, la taille et les critères.
          </li>
          <li>
            <strong>Sous-estimation des risques&nbsp;:</strong> Un PPM qui
            minimise les facteurs de risque perd en crédibilité. Les
            investisseurs expérimentés savent que le taux d&apos;échec (non-acquisition)
            est significatif.
          </li>
          <li>
            <strong>Absence de term sheet claire&nbsp;:</strong> Les conditions
            économiques doivent être synthétisées dans un document d&apos;une à
            deux pages, facilement comparable aux standards du marché.
          </li>
          <li>
            <strong>Oubli des disclaimers juridiques&nbsp;:</strong> Même en
            placement privé, les avertissements juridiques sont indispensables
            pour protéger le searcher et les investisseurs.
          </li>
          <li>
            <strong>Budget irréaliste&nbsp;:</strong> Un budget trop serré
            (moins de 300&nbsp;000&nbsp;&euro; sur 18 mois en France) ou trop
            généreux (plus de 700&nbsp;000&nbsp;&euro;) soulèvera des questions.
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Règlement (UE) 2017/1129 du Parlement européen et du Conseil &mdash; <em>Règlement Prospectus</em>.
        </li>
        <li>
          Code monétaire et financier, articles L.&nbsp;411-1 et suivants &mdash; <em>Offre au public de titres financiers</em>.
        </li>
        <li>
          Autorité des marchés financiers (AMF) &mdash; <em>Guide de l&apos;investisseur en capital-investissement</em>.
        </li>
        <li>
          Code civil, article 1112-1 &mdash; <em>Devoir d&apos;information précontractuelle</em>.
        </li>
        <li>
          Stanford Graduate School of Business &mdash; <em>Search Fund Primer</em>, 2024.
        </li>
        <li>
          HEC Paris, Chaire Entrepreneuriat &mdash; <em>Rédiger un mémorandum de placement&nbsp;: bonnes pratiques</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
