# SearchFundMarket — Final Polish Plan

## Vision
Ne plus produire de volume. Consolider ce qui existe à un niveau de qualité exceptionnel, puis ajouter UNIQUEMENT les 3 éléments vraiment différenciants qui manquent. Objectif : site prêt pour soumission Google, sans aucun risque de pénalité Helpful Content.

## Contexte
- 441 articles EN, 50 articles FR (30 pending), 147 directory entries, 5 calculators, 5 news articles
- Production massive terminée. STOP new mass content production.
- Priorité absolue : qualité, cohérence, indexation.

## Règles non-négociables
1. Zéro nouvel article avant validation qualité de l'existant
2. Mieux vaut retirer un article médiocre que le laisser en ligne
3. Toute nouvelle création doit apporter une valeur unique non trouvable ailleurs
4. Commit après chaque phase, jamais de push vers main sans validation user

═══════════════════════════════════════
PHASE A — AUDIT QUALITÉ (priorité absolue)
═══════════════════════════════════════

Objectif : identifier et corriger les articles qui risquent de pénaliser le site entier.

STEP A.1 — Audit automatique des 441 articles EN

Pour chaque article, produis un score sur 5 critères (1-5 chacun) :

1. Spécificité : contient-il des chiffres concrets, noms propres, exemples réels, années, pays spécifiques ?
2. Sources : au moins 3 sources académiques réelles (Stanford GSB, IESE, INSEAD, HBS, Yale SOM, etc.) avec URL vérifiable ?
3. Non-répétition : les paragraphes n'énoncent pas la même idée sous 3 angles différents
4. Ton naturel : absence de formules creuses type "In today's rapidly evolving landscape", "It's important to note", "In conclusion", "Navigating the complex world of..."
5. Valeur actionnable : un searcher réel apprend-il quelque chose de concret qu'il peut appliquer ?

Produis /QUALITY_AUDIT.md avec :
- Tableau des 441 articles avec score /25
- Liste des articles < 15/25 (à réécrire ou supprimer)
- Liste des articles 15-20/25 (à améliorer en priorité)
- Liste des articles > 20/25 (OK, laisser tel quel)
- Top 10 patterns de mauvaise qualité détectés (phrases creuses récurrentes, structures répétitives, sources manquantes)

STEP A.2 — Audit automatique des 50 articles FR (y compris les 30 pending)

Même critères + critère supplémentaire :
6. Localisation réelle : l'article cite-t-il BPI France, Dutreil, SAS/SARL, écoles françaises, exemples français — ou est-ce une traduction d'un article US avec dollars et SBA ?

Les articles FR qui sont des traductions brutes doivent être flaggés "LOC-FAIL" et retirés de la production jusqu'à localisation réelle.

STEP A.3 — Décision action par article

Pour chaque article flaggé, trois options possibles :
- REWRITE : article à réécrire substantiellement (score entre 10-15)
- ENRICH : article à améliorer à la marge (score 15-20)
- DELETE : article sans valeur unique, à supprimer et retourner 410 Gone (score < 10)

User review obligatoire sur la liste avant toute action.

STEP A.4 — Exécution corrections

Après validation user :
- Supprimer les articles DELETE, retirer du sitemap, 410 sur leurs URLs
- Réécrire les articles REWRITE par batch de 5, user review chaque batch
- Enrichir les articles ENRICH par batch de 10

Règle stricte : un article réécrit doit battre les top 3 résultats Google sur sa requête cible, sinon on le supprime plutôt que de le laisser médiocre.

═══════════════════════════════════════
PHASE B — CONSOLIDATION TECHNIQUE
═══════════════════════════════════════

Objectif : verrouiller la partie technique pour que Google adore le site.

STEP B.1 — Résoudre le blocage des 30 articles FR pending

- Libérer l'espace disque (node_modules, .next, .git objects)
- Valider build complète
- Commit les 30 articles FR restants après passage dans l'audit qualité A.2

STEP B.2 — Validation finale avant Google

Produis /PRE_LAUNCH_VALIDATION.md avec :
- Build propre (zéro erreur)
- Sitemap valide, toutes URLs 200
- hreflang réciproques corrects
- JSON-LD valide sur chaque type de page
- Pas de duplicate title/description
- Tous les articles ont : author, datePublished, dateModified, sources ≥3, internal links ≥5
- Core Web Vitals : Performance > 80, SEO > 95 sur 5 pages représentatives

Règle : aucune soumission Google tant qu'il reste des BLOCKERS ici.

STEP B.3 — Soumission Google + Bing

Exécuter LAUNCH_CHECKLIST.md existant.
- EN indexable immédiatement
- FR indexable seulement si 50 articles FR ont passé audit qualité A.2
- ES/IT/PT restent noindex jusqu'à avoir 20+ articles localisés de qualité

═══════════════════════════════════════
PHASE C — LES 3 AJOUTS VRAIMENT DIFFÉRENCIANTS
═══════════════════════════════════════

Ces 3 éléments sont les SEULS nouveaux développements à faire. Ils adressent des gaps que personne n'a couvert sur internet. Pas d'autres ajouts avant que ces 3 soient live et excellents.

STEP C.1 — La page "ETA Journey" (priorité 1)

Page unique : /the-eta-journey (et /fr/le-parcours-eta, etc.)

C'est LA page signature du site. Une représentation visuelle interactive du parcours complet d'un searcher, de "Am I ready?" à "Exit".

Architecture :
- 6 phases : Prepare / Fundraise / Search / Acquire / Operate / Exit
- Chaque phase expand en cliquant, révélant :
  * 5-10 articles clés du site liés à cette phase (liens internes)
  * Les calculateurs pertinents à cette étape
  * Les templates/documents pertinents (quand ils existeront)
  * Une citation courte d'un vrai searcher/investor sur cette étape
  * Les pitfalls typiques à éviter

Design recommandé : scrollytelling timeline verticale élégante, avec Framer Motion pour les animations. Pas trop "gamifié", style Financial Times / Stripe Atlas.

Règles techniques :
- Page entièrement indexable (tout en HTML, pas juste JS)
- JSON-LD HowTo ou Course schema pour signaler à Google un guide structuré
- URL courte et mémorable
- Internal linking massif (cette page linke vers 60-100 articles du site)
- Partageable : OG image custom, title optimisé pour CTR
- Mobile-first : testable sur iPhone avant desktop

Versions à produire : EN en premier, puis FR. Pas les autres langues tant que EN+FR pas validés.

User review obligatoire avant mise en ligne.

STEP C.2 — Les 3 templates téléchargeables essentiels (priorité 2)

Seulement 3 pour commencer, pas 10. Mais ces 3 doivent être les meilleurs d'internet.

1. Search Fund PPM Template (Private Placement Memorandum)
2. Letter of Intent (LOI) Template for SMB acquisition
3. Due Diligence Checklist Template (8 dimensions)

Pour chaque template :
- Page dédiée /templates/[slug] avec :
  * 2500-4000 mots expliquant clause par clause le template
  * Contextualisation : quand l'utiliser, erreurs fréquentes, variantes
  * Téléchargement en Word + PDF (email capture optionnel, pas obligatoire)
  * Versions juridictionnelles : US, UK, France minimum
  * Disclaimer juridique ferme (ce n'est pas un conseil juridique)
  * JSON-LD HowTo schema
- Ces templates doivent être réels et vérifiés par une source académique (Stanford Primer en fournit des exemples publics, Yale SOM aussi). Ne rien inventer.

Objectif SEO : les requêtes "LOI template small business", "PPM template search fund", "due diligence checklist acquisition" ont un gros volume et intention commerciale forte.

STEP C.3 — Page pilier "How to value a small business" (priorité 3)

Tu as découvert dans ton keyword research que cette requête a un volume massif. Il faut une page exceptionnelle dessus.

Structure :
- URL : /how-to-value-a-small-business (EN) et /fr/comment-valoriser-pme (FR)
- Long-form article de 4000-5000 mots
- Intégration en live du Valuation Calculator existant au milieu de la page
- Couvre : SDE vs EBITDA, multiples par secteur avec tableaux réels, DCF simplifié, precedent transactions, asset-based, comparable companies
- Sources : Stanford, IESE, BVR benchmarks, Pepperdine studies
- Case studies : 3-5 exemples réels (sourcés Acquiring Minds, IESE cases, etc.)
- FAQ section (10 questions réelles de People Also Ask)
- JSON-LD FAQPage + Article schema

Objectif : ranker top 3 sur "how to value a small business" en 12 mois.

═══════════════════════════════════════
EXECUTION RULES
═══════════════════════════════════════

1. Phases A, B, C dans l'ordre strict. Pas de saut.
2. User review obligatoire à la fin de chaque STEP.
3. Commit après chaque STEP sur branche batch-articles.
4. Aucune nouvelle production massive de contenu, même si tentation.
5. Quality > quantity absolument. Mieux vaut 300 excellents articles que 441 mixtes.
6. Si un article, une page, un template n'apporte pas une valeur unique non trouvable ailleurs, il n'existe pas.
7. Indexation Google seulement après Phase A et B complètes.

Acknowledge this plan before starting Phase A.