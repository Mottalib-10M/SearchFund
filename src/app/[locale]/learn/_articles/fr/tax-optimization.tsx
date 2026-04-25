import { h1Class, h2Class, h3Class, bodyClass, ulClass, olClass } from "../shared-styles";
import Link from "next/link";

export default function TaxOptimizationFR() {
  return (
    <article>
      <h1 className={h1Class}>Optimisation Fiscale&nbsp;: Pacte Dutreil et Holdings en France</h1>

      <div className={bodyClass}>
        <p>
          La fiscalité française des transmissions d&apos;entreprise est un
          domaine à la fois complexe et riche en opportunités. Pour un
          searcher, la maîtrise des mécanismes fiscaux applicables à
          l&apos;acquisition, à la détention et à la cession de PME constitue un
          avantage compétitif décisif, tant pour optimiser le coût
          d&apos;entrée que pour maximiser le rendement net pour les investisseurs
          lors de la sortie.
        </p>
        <p>
          Ce guide couvre les principaux dispositifs fiscaux français
          pertinents pour les opérations de search fund&nbsp;: le pacte Dutreil,
          le mécanisme d&apos;apport-cession (article 150-0 B ter du CGI), la
          structuration en holding, l&apos;intégration fiscale et le régime
          mère-fille. Chaque dispositif est présenté avec ses conditions
          d&apos;éligibilité, ses avantages et ses limites pratiques. Pour la
          dimension juridique des montages, consultez notre guide sur la{" "}
          <Link href="/learn/search-fund-legal-structure" className="text-apple-accent hover:underline">
            structure juridique du search fund
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Le pacte Dutreil&nbsp;: exonération de 75&nbsp;% des droits de transmission</h2>
      <div className={bodyClass}>
        <p>
          Le pacte Dutreil (articles 787 B et 787 C du Code général des impôts)
          est le dispositif phare de la transmission d&apos;entreprise en France.
          Initialement conçu pour faciliter la transmission familiale, il
          bénéficie également aux transmissions à titre gratuit (donations) dans
          le cadre d&apos;opérations impliquant un engagement collectif de
          conservation des titres. Son intérêt pour l&apos;écosystème search fund
          se manifeste principalement dans deux situations&nbsp;: lorsque le
          cédant organise sa transmission en amont et lorsque le searcher
          structure la sortie de son investissement.
        </p>

        <h3 className={h3Class}>Conditions d&apos;éligibilité</h3>
        <p>
          Le dispositif Dutreil impose le respect de plusieurs conditions
          cumulatives&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Engagement collectif de conservation&nbsp;:</strong> Un
            engagement collectif portant sur au moins 17&nbsp;% des droits
            financiers et 34&nbsp;% des droits de vote (pour les sociétés non
            cotées) doit être souscrit par au moins deux associés. Cet
            engagement doit être en cours au moment de la transmission et
            avoir été conclu depuis au moins deux ans.
          </li>
          <li>
            <strong>Engagement individuel de conservation&nbsp;:</strong> Chaque
            bénéficiaire de la transmission doit s&apos;engager individuellement à
            conserver les titres pendant au moins quatre ans à compter de
            l&apos;expiration de l&apos;engagement collectif.
          </li>
          <li>
            <strong>Exercice d&apos;une fonction de direction&nbsp;:</strong> L&apos;un
            des signataires de l&apos;engagement collectif ou l&apos;un des bénéficiaires
            de la transmission doit exercer une fonction de direction effective
            (Président, Directeur Général ou gérant) pendant la durée de
            l&apos;engagement collectif et les trois ans suivant la transmission.
          </li>
          <li>
            <strong>Activité éligible&nbsp;:</strong> La société doit exercer
            une activité industrielle, commerciale, artisanale, agricole ou
            libérale. Les sociétés dont l&apos;activité est principalement la
            gestion de leur propre patrimoine mobilier ou immobilier sont
            exclues.
          </li>
        </ol>

        <h3 className={h3Class}>Effets du pacte Dutreil</h3>
        <p>
          Lorsque toutes les conditions sont réunies, la valeur des titres
          transmis bénéficie d&apos;une exonération de 75&nbsp;% de leur valeur pour
          le calcul des droits de mutation à titre gratuit. Cette exonération
          se cumule avec les abattements de droit commun (100&nbsp;000&nbsp;&euro;
          par parent et par enfant en ligne directe tous les quinze ans) et la
          réduction de 50&nbsp;% pour les donations en pleine propriété réalisées
          avant les 70 ans du donateur.
        </p>
        <p>
          Prenons un exemple concret&nbsp;: pour une entreprise valorisée à
          2&nbsp;000&nbsp;000&nbsp;&euro;, le pacte Dutreil réduit l&apos;assiette
          taxable à 500&nbsp;000&nbsp;&euro; (75&nbsp;% d&apos;exonération). Après
          application de l&apos;abattement de 100&nbsp;000&nbsp;&euro; en ligne
          directe, la base imposable n&apos;est plus que de
          400&nbsp;000&nbsp;&euro;, ce qui réduit considérablement les droits de
          donation par rapport à une transmission sans Dutreil.
        </p>
      </div>

      <h2 className={h2Class}>Apport-cession&nbsp;: article 150-0 B ter du CGI</h2>
      <div className={bodyClass}>
        <p>
          Le mécanisme d&apos;apport-cession est un outil puissant de
          réinvestissement fiscal. Il permet à un cédant (typiquement le
          dirigeant-vendeur d&apos;une PME) d&apos;apporter ses titres à une société
          holding avant la cession, bénéficiant ainsi d&apos;un report
          d&apos;imposition sur la plus-value réalisée.
        </p>

        <h3 className={h3Class}>Mécanisme</h3>
        <ol className={olClass}>
          <li>
            Le cédant crée une holding (ou utilise une holding existante) et
            lui apporte les titres de la société opérationnelle.
          </li>
          <li>
            La plus-value d&apos;apport est placée en report d&apos;imposition
            (article 150-0 B ter du CGI).
          </li>
          <li>
            La holding cède les titres de la société opérationnelle au
            searcher (ou à sa holding d&apos;acquisition).
          </li>
          <li>
            Si la cession intervient moins de trois ans après l&apos;apport, le
            report est maintenu à condition que la holding réinvestisse au
            moins 60&nbsp;% du produit de cession dans une activité économique
            éligible dans un délai de deux ans.
          </li>
          <li>
            Si la cession intervient plus de trois ans après l&apos;apport, aucune
            condition de réinvestissement n&apos;est requise pour maintenir le
            report.
          </li>
        </ol>

        <h3 className={h3Class}>Intérêt pour le search fund</h3>
        <p>
          Ce mécanisme est particulièrement pertinent du côté du cédant. Un
          dirigeant qui cède sa PME à un searcher peut optimiser sa fiscalité
          personnelle en structurant la transaction via un apport-cession. Pour
          le searcher, comprendre ce mécanisme est un atout dans la
          négociation&nbsp;: proposer un schéma d&apos;apport-cession au cédant
          peut faciliter l&apos;accord sur le prix et les conditions de cession, le
          cédant bénéficiant d&apos;un différé d&apos;imposition significatif.
        </p>
        <p>
          Le searcher lui-même pourra utiliser ce dispositif à la sortie&nbsp;:
          après cinq à sept ans de direction, lorsqu&apos;il revend la société
          acquise, l&apos;apport-cession lui permettra de réinvestir le produit de
          cession dans un nouveau projet entrepreneurial tout en différant
          l&apos;imposition de sa plus-value.
        </p>
      </div>

      <h2 className={h2Class}>Holding à l&apos;IS&nbsp;: optimisation de la détention</h2>
      <div className={bodyClass}>
        <p>
          La constitution d&apos;une holding soumise à l&apos;impôt sur les sociétés
          (IS) est le socle de toute optimisation fiscale en search fund. La
          holding n&apos;est pas seulement un véhicule juridique&nbsp;: c&apos;est un
          outil fiscal à part entière dont les avantages se déploient à chaque
          étape du cycle de vie du search fund.
        </p>

        <h3 className={h3Class}>Phase d&apos;acquisition</h3>
        <ul className={ulClass}>
          <li>
            Les intérêts de la dette d&apos;acquisition contractée par la holding
            sont déductibles de son résultat fiscal. Combinée à l&apos;intégration
            fiscale, cette déductibilité permet de réduire significativement
            la charge fiscale du groupe.
          </li>
          <li>
            Les frais d&apos;acquisition (honoraires d&apos;avocats, audits, frais de
            conseil) sont déductibles au niveau de la holding.
          </li>
        </ul>

        <h3 className={h3Class}>Phase de détention</h3>
        <ul className={ulClass}>
          <li>
            Le régime mère-fille (articles 145 et 216 du CGI) permet de
            remonter les dividendes de la filiale vers la holding en
            quasi-franchise d&apos;IS (seule une quote-part de 5&nbsp;% est
            réintégrée).
          </li>
          <li>
            La trésorerie excédentaire peut être gérée au niveau de la
            holding, permettant des arbitrages fiscaux entre distribution,
            réinvestissement et remboursement de dette.
          </li>
        </ul>

        <h3 className={h3Class}>Phase de cession</h3>
        <ul className={ulClass}>
          <li>
            Les plus-values de cession de titres de participation détenus
            depuis plus de deux ans bénéficient d&apos;une exonération d&apos;IS, sous
            réserve d&apos;une quote-part de frais et charges de 12&nbsp;% du
            montant brut de la plus-value réintégrée dans le résultat
            imposable (soit un IS effectif d&apos;environ 3&nbsp;% de la
            plus-value au taux normal d&apos;IS de 25&nbsp;%).
          </li>
          <li>
            Le produit de cession reste dans la holding, permettant un
            réinvestissement sans imposition immédiate à l&apos;IR (l&apos;imposition
            n&apos;intervient qu&apos;à la distribution aux associés personnes
            physiques).
          </li>
        </ul>
      </div>

      <h2 className={h2Class}>Intégration fiscale&nbsp;: le groupe fiscal mère-fille</h2>
      <div className={bodyClass}>
        <p>
          L&apos;intégration fiscale (articles 223 A et suivants du CGI) est un
          régime optionnel qui permet à une société mère (la holding) de se
          constituer seule redevable de l&apos;IS pour l&apos;ensemble du groupe formé
          avec ses filiales détenues à 95&nbsp;% au moins, directement ou
          indirectement.
        </p>
        <p>
          Le principal avantage est la compensation des résultats&nbsp;: les
          charges de la holding (notamment les intérêts d&apos;emprunt) viennent
          en déduction des bénéfices de la filiale opérationnelle. Dans un
          montage type de search fund, la holding emprunte pour financer
          l&apos;acquisition et les intérêts de cette dette réduisent le résultat
          imposable du groupe intégré.
        </p>

        <h3 className={h3Class}>Conditions et formalités</h3>
        <ul className={ulClass}>
          <li>
            La holding doit détenir au moins 95&nbsp;% du capital de la filiale
            de manière continue.
          </li>
          <li>
            L&apos;option doit être exercée au plus tard à l&apos;expiration du délai
            de dépôt de la déclaration de résultats de l&apos;exercice précédant
            celui d&apos;application du régime.
          </li>
          <li>
            Toutes les sociétés du périmètre doivent clôturer à la même date.
          </li>
          <li>
            L&apos;option est valable pour cinq exercices renouvelables.
          </li>
        </ul>

        <h3 className={h3Class}>Limites de déductibilité des intérêts</h3>
        <p>
          La déductibilité des charges financières est encadrée par l&apos;article
          212 bis du CGI, qui transpose la directive ATAD (Anti-Tax Avoidance
          Directive) en droit français. Les charges financières nettes
          (intérêts versés diminués des intérêts reçus) sont déductibles dans
          la limite du plus élevé des deux montants suivants&nbsp;: 30&nbsp;% de
          l&apos;EBITDA fiscal du groupe, ou 3&nbsp;000&nbsp;000&nbsp;&euro;. Ce
          plafond est rarement atteint pour les acquisitions de PME réalisées
          par des search funds, mais il doit être vérifié dans le cadre de la
          modélisation financière.
        </p>
      </div>

      <h2 className={h2Class}>Plus-values de cession&nbsp;: flat tax et abattements</h2>
      <div className={bodyClass}>
        <p>
          La fiscalité des plus-values de cession de titres est un paramètre
          déterminant pour le rendement net des investisseurs d&apos;un search fund.
          Deux régimes coexistent pour les personnes physiques&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Prélèvement Forfaitaire Unique (PFU / flat tax)&nbsp;:</strong>{" "}
            Le gain net de cession est imposé au taux forfaitaire de 30&nbsp;%
            (12,8&nbsp;% d&apos;IR + 17,2&nbsp;% de prélèvements sociaux). Ce
            régime est simple et prévisible, ce qui facilite la modélisation
            des rendements.
          </li>
          <li>
            <strong>Option pour le barème progressif de l&apos;IR&nbsp;:</strong>{" "}
            Les contribuables peuvent opter pour l&apos;imposition au barème
            progressif avec application d&apos;un abattement pour durée de
            détention (pour les titres acquis avant le 1er janvier 2018)&nbsp;:
            50&nbsp;% entre deux et huit ans de détention, 65&nbsp;% au-delà de
            huit ans. Pour les titres de PME de moins de dix ans, un
            abattement renforcé s&apos;applique&nbsp;: 50&nbsp;% entre un et quatre
            ans, 65&nbsp;% entre quatre et huit ans, 85&nbsp;% au-delà de huit
            ans.
          </li>
        </ul>
        <p>
          Le choix entre flat tax et barème progressif dépend du taux marginal
          d&apos;imposition de l&apos;investisseur et de la durée de détention des
          titres. Un conseiller fiscal doit systématiquement réaliser une
          simulation comparative avant la cession.
        </p>
      </div>

      <h2 className={h2Class}>Droits d&apos;enregistrement&nbsp;: un coût à ne pas négliger</h2>
      <div className={bodyClass}>
        <p>
          Les droits d&apos;enregistrement varient significativement selon la forme
          juridique de la cible et le type de transaction (cession de parts ou
          de fonds de commerce)&nbsp;:
        </p>
        <ul className={ulClass}>
          <li>
            <strong>Cession d&apos;actions (SAS, SA)&nbsp;:</strong> 0,1&nbsp;% du
            prix de cession, sans plafond. C&apos;est l&apos;un des avantages décisifs
            de la SAS par rapport à la SARL.
          </li>
          <li>
            <strong>Cession de parts sociales (SARL)&nbsp;:</strong> 3&nbsp;%
            après application d&apos;un abattement égal à 23&nbsp;000&nbsp;&euro;
            rapporté au prorata des parts cédées.
          </li>
          <li>
            <strong>Cession de fonds de commerce&nbsp;:</strong> Barème
            progressif&nbsp;: 0&nbsp;% jusqu&apos;à 23&nbsp;000&nbsp;&euro;,
            3&nbsp;% entre 23&nbsp;000 et 200&nbsp;000&nbsp;&euro;, 5&nbsp;%
            au-delà.
          </li>
        </ul>
        <p>
          Pour un search fund acquérant une SAS valorisée à
          3&nbsp;000&nbsp;000&nbsp;&euro;, les droits d&apos;enregistrement
          s&apos;élèveront à seulement 3&nbsp;000&nbsp;&euro;. La même opération
          sur une SARL coûterait environ 89&nbsp;310&nbsp;&euro; en droits
          d&apos;enregistrement, une différence qui justifie parfois de
          transformer la cible en SAS avant la cession.
        </p>
      </div>

      <h2 className={h2Class}>Montage fiscal type d&apos;un search fund français</h2>
      <div className={bodyClass}>
        <p>
          En synthèse, le montage fiscal optimal pour un search fund en France
          combine les éléments suivants&nbsp;:
        </p>
        <ol className={olClass}>
          <li>
            <strong>Création d&apos;une holding SAS&nbsp;:</strong> Le searcher et
            ses investisseurs sont associés de la holding.
          </li>
          <li>
            <strong>Acquisition de 100&nbsp;% de la cible par la holding&nbsp;:</strong>{" "}
            La holding contracte la dette bancaire d&apos;acquisition.
          </li>
          <li>
            <strong>Intégration fiscale&nbsp;:</strong> La holding opte pour
            le régime d&apos;intégration fiscale avec la filiale opérationnelle.
          </li>
          <li>
            <strong>Régime mère-fille&nbsp;:</strong> Les dividendes remontent
            en quasi-franchise d&apos;IS pour rembourser la dette.
          </li>
          <li>
            <strong>Sortie&nbsp;:</strong> Cession des titres de la filiale par
            la holding avec exonération de la plus-value (quote-part de
            12&nbsp;% réintégrée).
          </li>
          <li>
            <strong>Distribution ou réinvestissement&nbsp;:</strong> Le produit
            reste dans la holding pour réinvestissement, ou est distribué aux
            associés avec application de la flat tax (30&nbsp;%).
          </li>
        </ol>
        <p>
          Ce schéma, classique dans l&apos;univers du{" "}
          <Link href="/learn/acquisition-financing" className="text-apple-accent hover:underline">
            financement d&apos;acquisition
          </Link>, permet de maximiser l&apos;efficience fiscale à chaque étape du cycle
          de vie du search fund tout en restant pleinement conforme au droit
          fiscal français. Il est impératif de faire valider chaque montage par
          un avocat fiscaliste et un expert-comptable spécialisé en{" "}
          <Link href="/learn/eta-france" className="text-apple-accent hover:underline">
            ETA en France
          </Link>.
        </p>
      </div>

      <h2 className={h2Class}>Sources</h2>
      <ul className={ulClass}>
        <li>
          Code général des impôts, articles 787 B et 787 C &mdash; <em>Pacte Dutreil</em>.
        </li>
        <li>
          Code général des impôts, article 150-0 B ter &mdash; <em>Report d&apos;imposition en cas d&apos;apport de titres</em>.
        </li>
        <li>
          Code général des impôts, articles 145, 216 &mdash; <em>Régime des sociétés mères et filiales</em>.
        </li>
        <li>
          Code général des impôts, articles 223 A et suivants &mdash; <em>Intégration fiscale</em>.
        </li>
        <li>
          Direction générale des Finances publiques (DGFiP) &mdash; <em>BOFiP-Impôts, doctrine fiscale applicable aux transmissions d&apos;entreprise</em>.
        </li>
        <li>
          Bpifrance Création &mdash; <em>Guide de la transmission-reprise d&apos;entreprise</em>, 2024.
        </li>
      </ul>
    </article>
  );
}
