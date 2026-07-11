const CGI = ['Code général des impôts 2026', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf'];
const SGG = ['Secrétariat général du gouvernement — textes législatifs marocains', 'https://www.sgg.gov.ma/'];
const CNSS = ['CNSS Maroc', 'https://www.cnss.ma/'];
const OMPIC = ['OMPIC', 'https://www.ompic.ma/'];

export const backlogArticles = [
  {
    slug: 'acomptes-provisionnels-is-maroc',
    title: 'Acomptes provisionnels d’IS au Maroc : calcul, échéances et régularisation',
    description: 'Comment calculer les quatre acomptes provisionnels d’IS au Maroc, gérer une baisse de résultat et régulariser le solde après clôture.',
    category: 'fiscalite', label: 'Impôt sur les sociétés', publishAt: '2026-07-14T07:00:00Z', readingTime: '8 min',
    intro: 'Les acomptes provisionnels étalent le paiement de l’IS au cours de l’exercice. Leur suivi doit distinguer la base de calcul, les quatre échéances et la liquidation définitive après clôture.',
    takeaways: ['Quatre acomptes de 25 % sont en principe calculés sur l’impôt de référence.', 'Les dates dépendent de l’ouverture et de la durée de l’exercice.', 'La dispense ou réduction d’acompte suppose une estimation documentée et le respect des conditions légales.'],
    sections: [
      { title: 'Déterminer l’impôt de référence', paragraphs: ['La base habituelle correspond à l’IS dû au titre du dernier exercice clos, après les règles d’imputation prévues par le CGI. Une société nouvelle ou ayant changé de durée d’exercice doit vérifier les dispositions particulières.', 'Chaque acompte représente en principe un quart de cette référence. Le calcul est conservé avec la déclaration antérieure, les crédits imputés et les preuves de paiement.'] },
      { title: 'Piloter les quatre échéances', paragraphs: ['Les acomptes sont versés avant l’expiration de chaque période de trois mois de l’exercice. Une société clôturant à une date différente du 31 décembre doit donc utiliser son propre calendrier.', 'Un tableau de trésorerie distingue l’échéance fiscale, la date de préparation, la validation interne et le paiement effectif. Ce suivi évite de confondre un ordre de virement avec un paiement exécuté.'] },
      { title: 'Réduire ou régulariser', paragraphs: ['Lorsque l’entreprise estime que l’impôt final sera inférieur aux acomptes déjà versés, le CGI prévoit des mécanismes encadrés. Une estimation trop optimiste peut entraîner compléments et majorations.', 'Après clôture, la liquidation compare l’IS définitif aux acomptes. Le solde est payé dans le délai de déclaration, tandis qu’un excédent suit les règles d’imputation ou de restitution applicables.'] }
    ],
    faq: [['Les acomptes sont-ils calculés sur le chiffre d’affaires ?', 'Non. Ils reposent sur l’impôt de référence, pas directement sur le chiffre d’affaires.'], ['Une société déficitaire est-elle toujours dispensée ?', 'La situation doit être analysée au regard de l’impôt de référence, de la cotisation minimale et des règles de dispense.'], ['Un acompte payé en retard peut-il être régularisé ?', 'Oui, mais le retard peut produire des majorations et pénalités selon le CGI.']],
    sources: [CGI, ['Calculateur IS First Audit', '/simulateurs']]
  },
  {
    slug: 'cotisation-minimale-is-maroc',
    title: 'Cotisation minimale au Maroc : assiette, taux, exonération et erreur à éviter',
    description: 'Calcul de la cotisation minimale au Maroc : produits retenus, taux de 0,25 % ou 0,15 %, minimum d’IS et période d’exonération.',
    category: 'fiscalite', label: 'Cotisation minimale', publishAt: '2026-07-17T07:00:00Z', readingTime: '8 min',
    intro: 'La cotisation minimale n’est pas un pourcentage du bénéfice. Elle utilise une assiette propre composée de produits déterminés par le CGI et sert de plancher lorsque l’impôt calculé est plus faible.',
    takeaways: ['L’assiette ne se confond ni avec le bénéfice fiscal ni avec le seul chiffre d’affaires.', 'Le taux de droit commun est de 0,25 %, avec 0,15 % pour certains produits.', 'L’exonération de début d’activité est limitée et conditionnelle.'],
    sections: [
      { title: 'Construire la bonne assiette', paragraphs: ['L’article 144 vise notamment le chiffre d’affaires et autres produits d’exploitation, les produits financiers, ainsi que les subventions, dons et primes reçus selon les règles prévues.', 'Les comptes sont regroupés par nature, puis rapprochés de la balance et des déclarations de TVA. Utiliser le résultat fiscal comme base est une erreur de méthode.'] },
      { title: 'Appliquer taux et minimum', paragraphs: ['Le taux de droit commun de 0,25 % s’applique à la base correspondante. Un taux de 0,15 % concerne une liste déterminée de produits à faible marge. Pour les sociétés soumises à l’IS, un minimum de 3 000 MAD est en principe prévu lorsque la cotisation est exigible.', 'Le montant obtenu est comparé à l’IS calculé. Le plus élevé détermine l’impôt de base avant contributions, crédits et retenues imputables.'] },
      { title: 'Vérifier l’exonération', paragraphs: ['Les sociétés autres que concessionnaires de service public peuvent bénéficier d’une exonération temporaire pendant les trente-six premiers mois suivant le début d’exploitation, sans dépasser soixante mois après la constitution.', 'La date de constitution et la date réelle de début d’exploitation doivent être documentées. L’exonération de cotisation minimale ne signifie pas nécessairement exonération d’IS.'] }
    ],
    faq: [['Une société en perte paie-t-elle la cotisation minimale ?', 'Oui si elle est exigible et qu’aucune exonération ne s’applique.'], ['La TVA est-elle incluse dans la base ?', 'La base est déterminée selon les produits hors taxe visés par le CGI.'], ['Le minimum de 3 000 MAD s’applique-t-il aux personnes physiques ?', 'Les minimums et règles diffèrent selon l’IS ou l’IR professionnel ; il faut qualifier le contribuable.']],
    sources: [CGI, ['Calculateur IS First Audit', '/simulateurs']]
  },
  {
    slug: 'retenue-source-dividendes-honoraires-maroc',
    title: 'Retenue à la source au Maroc : dividendes, honoraires et non-résidents',
    description: 'Identifier la retenue à la source applicable au Maroc selon le revenu, le bénéficiaire, le payeur et une éventuelle convention fiscale.',
    category: 'fiscalite', label: 'Retenue à la source', publishAt: '2026-07-21T07:00:00Z', readingTime: '10 min',
    intro: 'Il n’existe pas un taux unique de retenue à la source. La réponse dépend de la nature du revenu, de la qualité du bénéficiaire, du statut du payeur et, pour l’international, de la convention fiscale applicable.',
    takeaways: ['Le revenu doit être qualifié avant tout calcul.', 'Une retenue peut être libératoire ou imputable.', 'Une convention plus favorable exige une preuve de résidence et le respect de ses conditions.'],
    sections: [
      { title: 'Qualifier le revenu et les parties', paragraphs: ['Dividende, intérêt, honoraire, loyer, redevance et prestation d’un non-résident relèvent de règles distinctes. Le contrat, la facture et la réalité du service servent à retenir la bonne qualification.', 'Le bénéficiaire personne physique ou morale, résident ou non-résident, ainsi que la catégorie du payeur peuvent modifier l’obligation et le taux.'] },
      { title: 'Libératoire ou imputable', paragraphs: ['Une retenue libératoire constitue l’impôt définitif sur le revenu concerné. Une retenue imputable est un acompte que le bénéficiaire déduit de son impôt, avec les conséquences déclaratives prévues.', 'Le payeur remet une attestation et conserve le calcul, la preuve du versement et les informations permettant au bénéficiaire d’exercer son droit à imputation.'] },
      { title: 'Paiements internationaux', paragraphs: ['Le droit interne prévoit notamment une retenue sur certains produits bruts versés à des non-résidents. Une convention fiscale peut plafonner le taux ou attribuer différemment le droit d’imposer.', 'Avant paiement, l’entreprise vérifie la résidence fiscale, le bénéficiaire effectif, l’existence d’un établissement stable et la documentation bancaire.'] }
    ],
    faq: [['Peut-on appliquer systématiquement 10 % ?', 'Non. Plusieurs revenus ont d’autres taux ou aucune retenue selon les parties et les conditions.'], ['La convention s’applique-t-elle sans justificatif ?', 'Non. L’entreprise doit pouvoir démontrer que les conditions conventionnelles sont réunies.'], ['La retenue est-elle calculée sur le TTC ?', 'L’assiette dépend de la retenue concernée ; la TVA et l’impôt sur le revenu ne doivent pas être confondus.']],
    sources: [CGI, ['Calculateur de retenue First Audit', '/retenue-source']]
  },
  {
    slug: 'retenue-source-tva-maroc-75-100',
    title: 'Retenue à la source TVA au Maroc : quand retenir 75 % ou 100 % ?',
    description: 'Comprendre la retenue à la source TVA marocaine : prestations de services, attestation de régularité fiscale, taux de 75 % ou 100 % et déclaration.',
    category: 'fiscalite', label: 'TVA', publishAt: '2026-07-24T07:00:00Z', readingTime: '9 min',
    intro: 'La retenue à la source TVA sécurise le recouvrement de la taxe dans certaines opérations. Elle ne doit pas être confondue avec une retenue d’IS ou d’IR sur le revenu du fournisseur.',
    takeaways: ['La nature de l’achat et la qualité des parties déterminent le mécanisme.', 'L’attestation de régularité fiscale peut modifier la fraction de TVA retenue.', 'La facture, le paiement au fournisseur et le versement au Trésor doivent être rapprochés.'],
    sections: [
      { title: 'Identifier une opération concernée', paragraphs: ['Le CGI distingue notamment certaines acquisitions de biens d’équipement et travaux, ainsi que des prestations de services réalisées par des fournisseurs de services. Des exclusions et catégories de payeurs sont prévues.', 'L’entreprise documente la nature réelle de l’opération et évite de se fonder uniquement sur le libellé de facture. Un contrat mixte peut nécessiter une ventilation.'] },
      { title: 'Attestation et fraction retenue', paragraphs: ['Pour certaines prestations, la présentation d’une attestation de régularité fiscale valide peut conduire à retenir 75 % de la TVA facturée ; à défaut, la retenue peut atteindre 100 %. D’autres opérations relèvent directement d’une retenue intégrale.', 'La date de validité, l’identité du fournisseur et la concordance avec la facture sont archivées. Le montant net payé doit correspondre au traitement déclaré.'] },
      { title: 'Comptabiliser et déclarer', paragraphs: ['La retenue ne supprime pas la facture ni la TVA facturée. Elle modifie le circuit de paiement : une partie est versée au fournisseur et la fraction retenue au Trésor selon le calendrier applicable.', 'Les comptes de TVA, dettes fournisseur et retenues à verser sont rapprochés. Une attestation de retenue est transmise au fournisseur pour justifier le traitement.'] }
    ],
    faq: [['La retenue TVA est-elle une réduction du prix ?', 'Non. Il s’agit d’une modalité de recouvrement d’une partie ou de toute la TVA.'], ['L’attestation fiscale dispense-t-elle toujours de retenue ?', 'Non. Elle peut modifier le pourcentage dans certains cas, mais la qualification complète reste nécessaire.'], ['Peut-on retenir 75 % du montant TTC ?', 'Le pourcentage vise la TVA concernée, pas automatiquement le total TTC.']],
    sources: [CGI]
  },
  {
    slug: 'autoliquidation-tva-maroc-services-non-resident',
    title: 'Autoliquidation de la TVA au Maroc : services de non-résidents et écritures',
    description: 'Mécanisme d’autoliquidation TVA au Maroc pour les services de non-résidents : qualification, facture, déclaration, déduction et comptabilité.',
    category: 'fiscalite', label: 'TVA internationale', publishAt: '2026-07-28T07:00:00Z', readingTime: '9 min',
    intro: 'Lorsqu’un service utilisé au Maroc est fourni par un non-résident sans établissement au Maroc, le client marocain peut devoir déclarer lui-même la TVA selon le mécanisme applicable.',
    takeaways: ['La territorialité du service doit être vérifiée avant l’autoliquidation.', 'La TVA collectée et la TVA déductible sont deux analyses distinctes.', 'Le contrat, la facture étrangère et la preuve de paiement doivent être conservés.'],
    sections: [
      { title: 'Qualifier le service importé', paragraphs: ['L’analyse commence par la nature du service, le lieu d’utilisation ou d’exploitation et le statut du fournisseur. Logiciels, publicité, conseil, licences et services numériques peuvent avoir des traitements différents selon les faits.', 'La présence d’un établissement stable ou d’un représentant fiscal peut modifier le circuit. La devise de facturation ne décide pas à elle seule de la territorialité.'] },
      { title: 'Déclarer la taxe', paragraphs: ['Lorsque l’autoliquidation s’applique, le client calcule la TVA sur la base imposable et la porte dans sa déclaration comme taxe due. Le taux dépend de la nature du service.', 'La conversion en dirhams, la date d’exigibilité et les éventuels acomptes sont documentés de manière cohérente avec le paiement et la comptabilité.'] },
      { title: 'Examiner le droit à déduction', paragraphs: ['La taxe autoliquidée peut être déductible si l’achat est affecté à des opérations ouvrant droit à déduction et si les conditions de fond et de forme sont remplies.', 'Une déduction simultanée ne signifie pas que l’opération peut être ignorée : les montants doivent apparaître correctement dans la déclaration et dans les comptes.'] }
    ],
    faq: [['Autoliquidation signifie-t-elle absence de TVA ?', 'Non. Le client déclare la taxe à la place du fournisseur selon le mécanisme prévu.'], ['La TVA est-elle toujours récupérable ?', 'Non. Le droit à déduction dépend de l’activité, de l’affectation et des exclusions.'], ['Un abonnement SaaS étranger peut-il être concerné ?', 'Oui selon l’utilisation au Maroc, le statut du fournisseur et les règles applicables aux services numériques.']],
    sources: [CGI]
  },
  {
    slug: 'tva-export-services-maroc',
    title: 'TVA sur l’export de services au Maroc : conditions, facturation et preuves',
    description: 'Exonération de TVA sur les services exportés depuis le Maroc : bénéficiaire étranger, utilisation hors Maroc, devises, facture et justificatifs.',
    category: 'fiscalite', label: 'Export', publishAt: '2026-07-31T07:00:00Z', readingTime: '9 min',
    intro: 'Facturer un client étranger ne suffit pas toujours à qualifier un export de services. Il faut vérifier le bénéficiaire, le lieu d’utilisation du service et les conditions documentaires prévues par le CGI.',
    takeaways: ['La résidence du client n’est qu’un élément de la qualification.', 'Le service doit être exploité ou utilisé hors du territoire selon les conditions applicables.', 'Les devises et justificatifs bancaires sécurisent le dossier d’export.'],
    sections: [
      { title: 'Établir la réalité de l’export', paragraphs: ['L’entreprise identifie le client, le bénéficiaire effectif et l’endroit où le service produit ses effets. Une prestation réalisée pour une société étrangère mais utilisée par son établissement marocain peut ne pas suivre le régime attendu.', 'Le contrat, les livrables, les accès et la correspondance commerciale doivent être cohérents avec une utilisation à l’étranger.'] },
      { title: 'Facturer et encaisser', paragraphs: ['La facture mentionne le fondement du traitement TVA retenu et respecte les mentions générales. La monnaie, les modalités de paiement et le compte bancaire sont conformes à la réglementation de change.', 'Les avis de crédit et preuves de rapatriement sont rapprochés des factures. Les avoirs, remboursements et compensations sont documentés.'] },
      { title: 'Droit à déduction et remboursement', paragraphs: ['L’exonération avec droit à déduction permet en principe de conserver la récupération de la TVA sur les achats affectés aux opérations éligibles. Un crédit peut ainsi apparaître.', 'Le remboursement ou le régime suspensif répond à des conditions et formalités propres. L’entreprise prépare un dossier par période plutôt que de reconstituer les preuves tardivement.'] }
    ],
    faq: [['Un paiement en euros prouve-t-il l’export ?', 'Non. Il constitue un justificatif utile mais la nature et l’utilisation du service restent déterminantes.'], ['Faut-il facturer 0 % ?', 'Une exonération n’est pas un taux zéro ; la facture doit indiquer le régime et son fondement.'], ['La TVA sur les achats reste-t-elle déductible ?', 'En cas d’exonération avec droit à déduction, oui sous réserve des conditions habituelles.']],
    sources: [CGI, ['Office des Changes', 'https://www.oc.gov.ma/']]
  },
  {
    slug: 'comptabilite-immobilisations-maroc',
    title: 'Comptabilité des immobilisations au Maroc : acquisition, suivi et sortie',
    description: 'Gérer les immobilisations au Maroc : distinction charge-actif, coût d’entrée, registre, amortissement, inventaire, cession et mise au rebut.',
    category: 'comptabilite', label: 'Immobilisations', publishAt: '2026-08-04T07:00:00Z', readingTime: '10 min',
    intro: 'Une immobilisation est suivie depuis la décision d’investissement jusqu’à sa sortie. La qualité du registre conditionne l’amortissement, l’inventaire, la fiscalité et la fiabilité du bilan.',
    takeaways: ['Le seuil interne ne remplace pas l’analyse de la nature et de la durée d’utilisation.', 'Chaque actif doit avoir une fiche et une localisation.', 'Une cession ou mise au rebut exige des pièces et une écriture de sortie complète.'],
    sections: [
      { title: 'Distinguer charge et immobilisation', paragraphs: ['Une dépense procurant des avantages au-delà de l’exercice et contrôlée par l’entreprise peut relever d’une immobilisation. Les coûts d’entretien courant restent généralement en charges, tandis qu’une amélioration significative peut être capitalisée.', 'La politique comptable précise les seuils pratiques sans contourner la substance économique. Les composants significatifs peuvent nécessiter des durées distinctes.'] },
      { title: 'Tenir le registre', paragraphs: ['La fiche d’actif reprend la désignation, le fournisseur, la facture, le coût, la date de mise en service, la méthode, la durée, la localisation et le responsable. Un identifiant physique facilite l’inventaire.', 'Le total des fiches est rapproché des comptes de valeurs brutes et d’amortissements. Les écarts sont analysés avant la clôture.'] },
      { title: 'Cession, perte et mise au rebut', paragraphs: ['La sortie comptable élimine la valeur brute et les amortissements cumulés, puis constate le résultat de cession. Le prix, la TVA et les conditions fiscales sont vérifiés séparément.', 'Une mise au rebut exige une preuve d’autorisation et de destruction ou d’enlèvement. Un actif introuvable ne doit pas être supprimé sans investigation.'] }
    ],
    faq: [['Un ordinateur bon marché est-il toujours une charge ?', 'Pas automatiquement. La nature, l’usage, la durée et la politique comptable documentée doivent être considérés.'], ['L’inventaire physique est-il nécessaire ?', 'Oui, il confirme l’existence, l’état et la localisation des actifs.'], ['Une immobilisation vendue reste-t-elle amortie jusqu’à la fin de l’année ?', 'L’amortissement et la sortie sont calculés jusqu’à la date pertinente selon la méthode appliquée.']],
    sources: [CGI, SGG]
  },
  {
    slug: 'pieces-justificatives-achats-maroc-article-146',
    title: 'Pièces justificatives des achats au Maroc : sécuriser la déduction fiscale',
    description: 'Factures d’achat au Maroc : mentions, réalité de l’opération, fournisseur, paiement, livraison et conservation au regard de l’article 146 du CGI.',
    category: 'comptabilite', label: 'Contrôle documentaire', publishAt: '2026-08-07T07:00:00Z', readingTime: '8 min',
    intro: 'La facture est le point de départ de la preuve, pas toujours son aboutissement. Une dépense importante doit pouvoir être reliée au fournisseur, au contrat, à la livraison, au paiement et à l’usage professionnel.',
    takeaways: ['L’identité fiscale du fournisseur et les mentions de facture doivent être contrôlées.', 'La preuve du service rendu complète la facture pour les prestations.', 'Le mode de paiement et la piste bancaire doivent être cohérents.'],
    sections: [
      { title: 'Contrôler la facture', paragraphs: ['La facture identifie les parties, la date, la nature, les quantités, les prix, la TVA et les références requises. Les incohérences ou descriptions vagues sont corrigées avant paiement.', 'L’entreprise vérifie que le fournisseur correspond à celui qui a réellement livré le bien ou exécuté la prestation. Une simple apparence documentaire ne sécurise pas une opération fictive.'] },
      { title: 'Prouver la réalité', paragraphs: ['Pour un achat de biens, bon de commande, réception, entrée en stock et affectation sont rapprochés. Pour un service, contrat, livrable, compte rendu ou correspondance démontrent l’exécution.', 'Le valideur interne atteste le service fait sans être la même personne que celle qui initie le paiement lorsque l’organisation le permet.'] },
      { title: 'Payer et conserver', paragraphs: ['La référence du virement reprend la facture et le bénéficiaire bancaire concorde avec le fournisseur. Les paiements en espèces sont contrôlés au regard des limitations fiscales.', 'Les pièces sont archivées pendant la durée légale, de façon lisible et accessible. Un index par fournisseur et période accélère les contrôles.'] }
    ],
    faq: [['Un ticket de caisse suffit-il toujours ?', 'Non. La nature et le montant de la dépense peuvent exiger une facture complète identifiant l’entreprise.'], ['Une facture PDF est-elle acceptable ?', 'Elle doit garantir lisibilité, intégrité, identification et conservation selon les règles applicables.'], ['Pourquoi conserver le contrat si la facture existe ?', 'Le contrat et les livrables prouvent la réalité, le périmètre et l’intérêt professionnel de la dépense.']],
    sources: [CGI]
  },
  {
    slug: 'rapprochement-bancaire-maroc-methode',
    title: 'Rapprochement bancaire : méthode de contrôle pour une comptabilité fiable',
    description: 'Réaliser un rapprochement bancaire : solde relevé, solde comptable, opérations en transit, frais, chèques, écarts et validation mensuelle.',
    category: 'comptabilite', label: 'Trésorerie', publishAt: '2026-08-11T07:00:00Z', readingTime: '7 min',
    intro: 'Le rapprochement bancaire explique la différence entre le solde de la banque et celui de la comptabilité à une date donnée. Réalisé chaque mois, il détecte les omissions et anomalies rapidement.',
    takeaways: ['Chaque compte bancaire possède son propre rapprochement.', 'Les opérations anciennes en transit doivent être investiguées.', 'Le rapprochement doit être préparé, revu et archivé avec le relevé.'],
    sections: [
      { title: 'Partir de deux soldes fiables', paragraphs: ['Le préparateur relève le solde final du relevé bancaire et le solde du compte comptable à la même date. Il vérifie que tous les journaux de la période sont comptabilisés.', 'Les mouvements sont pointés un à un ou via un outil. Les écritures non rapprochées forment la liste des écarts à expliquer.'] },
      { title: 'Classer les écarts', paragraphs: ['Les chèques non débités, virements en transit et remises non créditées sont des décalages possibles. Les frais, intérêts ou prélèvements absents de la comptabilité doivent être enregistrés.', 'Un écart ancien, un montant dupliqué ou un bénéficiaire inhabituel est escaladé. Le rapprochement ne doit pas servir à reporter indéfiniment une anomalie.'] },
      { title: 'Valider et superviser', paragraphs: ['Le solde rapproché doit aboutir au même montant après prise en compte des éléments en suspens. Le préparateur signe et date, puis un responsable effectue une revue indépendante.', 'Le dossier comprend le relevé, l’état de rapprochement, les justificatifs des principaux suspens et les écritures de correction.'] }
    ],
    faq: [['Un relevé bancaire importé remplace-t-il le rapprochement ?', 'Non. L’import enregistre ou propose des mouvements ; le rapprochement vérifie leur exhaustivité et leur concordance.'], ['Que faire d’un chèque ancien non débité ?', 'Contacter les parties, vérifier sa validité et documenter la décision comptable appropriée.'], ['Pourquoi rapprocher un compte sans mouvement ?', 'Pour confirmer l’absence de mouvement et l’exactitude du solde.']],
    sources: [SGG]
  },
  {
    slug: 'etats-synthese-maroc-bilan-cpc-etic',
    title: 'États de synthèse au Maroc : bilan, CPC, ESG, tableau de financement et ETIC',
    description: 'Comprendre les cinq états de synthèse marocains, leurs liens et les contrôles de cohérence à effectuer avant approbation des comptes.',
    category: 'comptabilite', label: 'États financiers', publishAt: '2026-08-14T07:00:00Z', readingTime: '9 min',
    intro: 'Les états de synthèse forment un ensemble cohérent. Le bilan et le CPC ne suffisent pas à eux seuls lorsque le modèle normal exige également l’ESG, le tableau de financement et l’ETIC.',
    takeaways: ['Le bilan présente la situation patrimoniale à la clôture.', 'Le CPC explique la formation du résultat.', 'L’ETIC complète les chiffres par les méthodes et informations nécessaires à leur compréhension.'],
    sections: [
      { title: 'Bilan et compte de produits et charges', paragraphs: ['Le bilan présente les actifs, passifs et capitaux propres à une date donnée. Les soldes comparatifs, amortissements, provisions et échéances sont contrôlés avant édition.', 'Le CPC regroupe produits et charges par nature pour expliquer le résultat d’exploitation, financier, non courant et net. Les variations significatives font l’objet d’une analyse.'] },
      { title: 'ESG et tableau de financement', paragraphs: ['L’état des soldes de gestion développe la formation des marges, de la valeur ajoutée et de la capacité d’autofinancement. Il facilite l’analyse économique au-delà du résultat net.', 'Le tableau de financement rapproche les ressources et emplois de l’exercice et explique la variation du fonds de roulement et du besoin en fonds de roulement.'] },
      { title: 'ETIC et cohérence globale', paragraphs: ['L’ETIC décrit notamment les principes, méthodes, détails de postes et engagements nécessaires. Une information significative ne doit pas être omise sous prétexte qu’elle n’apparaît pas dans une case du bilan.', 'Les totaux et variations sont rapprochés entre états. Les comptes approuvés, la liasse fiscale et les documents déposés doivent utiliser la même version validée.'] }
    ],
    faq: [['Toutes les entreprises produisent-elles exactement les mêmes tableaux ?', 'Les obligations dépendent notamment du modèle comptable applicable et de la taille de l’entreprise.'], ['L’ETIC est-elle facultative ?', 'Non lorsqu’elle fait partie des états requis ; elle complète les données chiffrées.'], ['Le bilan peut-il être modifié après approbation ?', 'Toute correction d’une version approuvée exige une analyse juridique, comptable et fiscale formalisée.']],
    sources: [SGG]
  },
  {
    slug: 'ir-professionnel-rnr-rns-cpu-maroc',
    title: 'IR professionnel au Maroc : comparer RNR, RNS et contribution professionnelle unique',
    description: 'Régimes de l’IR professionnel au Maroc : résultat net réel, résultat net simplifié, contribution professionnelle unique, seuils et obligations.',
    category: 'fiscalite', label: 'Impôt sur le revenu', publishAt: '2026-08-18T07:00:00Z', readingTime: '10 min',
    intro: 'Le régime professionnel ne se choisit pas uniquement pour payer moins. Il détermine la méthode de calcul, les obligations comptables, les déclarations et la capacité à justifier le revenu.',
    takeaways: ['Le RNR repose sur une comptabilité complète et un résultat fiscal.', 'Le RNS simplifie certaines obligations sous conditions.', 'La CPU calcule l’impôt à partir du chiffre d’affaires avec des règles propres.'],
    sections: [
      { title: 'Résultat net réel', paragraphs: ['Le RNR détermine le bénéfice imposable à partir des produits et charges comptabilisés, corrigés fiscalement. Il convient notamment aux activités dépassant les seuils ou ayant une organisation plus structurée.', 'La tenue comptable, l’inventaire, les pièces justificatives et les états sont essentiels pour défendre le résultat déclaré.'] },
      { title: 'Résultat net simplifié', paragraphs: ['Le RNS s’adresse aux contribuables éligibles dans les limites prévues. Il simplifie la détermination et certains documents sans supprimer l’obligation de justifier les recettes et dépenses.', 'L’éligibilité est contrôlée par activité et chiffre d’affaires. Un dépassement ou une option peut modifier le régime pour les périodes suivantes.'] },
      { title: 'Contribution professionnelle unique', paragraphs: ['La CPU applique un taux au chiffre d’affaires selon la catégorie d’activité, auquel s’ajoute un droit complémentaire destiné à la couverture sociale selon les règles en vigueur.', 'Avant d’opter, l’entrepreneur compare la marge réelle, les besoins de financement, les clients, la TVA et la protection sociale.'] }
    ],
    faq: [['Le régime le plus simple est-il toujours le moins coûteux ?', 'Non. Le niveau de marge et les charges réelles peuvent modifier fortement la comparaison.'], ['Peut-on changer de régime chaque année ?', 'Les options, seuils et délais prévus par le CGI encadrent les changements.'], ['La CPU remplace-t-elle la TVA ?', 'Non. L’IR professionnel et la TVA sont deux impôts distincts.']],
    sources: [CGI]
  },
  {
    slug: 'auto-entrepreneur-maroc-fiscalite-obligations',
    title: 'Auto-entrepreneur au Maroc : fiscalité, plafonds et obligations pratiques',
    description: 'Guide du régime auto-entrepreneur au Maroc : activités, plafonds de chiffre d’affaires, IR, facturation, compte bancaire et passage en société.',
    category: 'entreprendre', label: 'Auto-entrepreneur', publishAt: '2026-08-21T07:00:00Z', readingTime: '9 min',
    intro: 'Le statut d’auto-entrepreneur facilite le démarrage d’une activité individuelle, mais il ne convient pas à tous les projets. Les plafonds, la marge, les risques et les besoins d’investissement doivent être comparés.',
    takeaways: ['Les plafonds diffèrent entre activités commerciales, industrielles ou artisanales et prestations de services.', 'L’impôt est calculé sur le chiffre d’affaires encaissé selon la catégorie.', 'Le patrimoine et la responsabilité du porteur de projet doivent être évalués.'],
    sections: [
      { title: 'Vérifier l’éligibilité', paragraphs: ['L’activité doit être autorisée dans le cadre du régime et le chiffre d’affaires annuel rester sous le plafond correspondant. Certaines professions et activités réglementées sont exclues ou soumises à d’autres conditions.', 'Le porteur de projet vérifie aussi ses engagements avec un employeur, ses autorisations et son besoin de recruter ou de s’associer.'] },
      { title: 'Déclarer le chiffre d’affaires', paragraphs: ['L’impôt est déterminé à partir du chiffre d’affaires encaissé avec les taux prévus pour les catégories concernées. Les déclarations et paiements suivent la périodicité du régime.', 'Un registre simple des factures, encaissements et dépenses reste indispensable pour piloter l’activité et justifier les montants.'] },
      { title: 'Savoir quand évoluer', paragraphs: ['Un dépassement durable, un investissement important, l’entrée d’associés, l’embauche ou l’exposition à des risques peuvent justifier le passage à une société ou à un autre régime.', 'La transition se prépare : contrats, clientèle, actifs, compte bancaire, TVA et protection sociale ne doivent pas être transférés de manière improvisée.'] }
    ],
    faq: [['Le plafond porte-t-il sur le bénéfice ?', 'Non. Il porte sur le chiffre d’affaires selon la catégorie d’activité.'], ['Un auto-entrepreneur peut-il facturer une société ?', 'Oui si l’activité et la relation sont réelles, indépendantes et conformes ; il faut éviter une relation salariale déguisée.'], ['Faut-il conserver les dépenses ?', 'Oui pour la gestion, la preuve de l’activité et les contrôles, même si l’impôt repose sur le chiffre d’affaires.']],
    sources: [CGI, ['Portail Auto-Entrepreneur', 'https://www.ae.gov.ma/']]
  },
  {
    slug: 'revenus-fonciers-maroc-ir-location',
    title: 'Revenus fonciers au Maroc : IR sur les loyers et obligations du bailleur',
    description: 'Fiscalité des revenus locatifs au Maroc : revenu brut, abattement, retenue, déclaration, charges, indivision et location professionnelle.',
    category: 'fiscalite', label: 'Revenus fonciers', publishAt: '2026-08-25T07:00:00Z', readingTime: '9 min',
    intro: 'Le traitement d’un loyer dépend du bien, du bailleur, du locataire et de l’usage. Habitation nue, local équipé, activité hôtelière et location professionnelle ne doivent pas être confondus.',
    takeaways: ['La qualification du revenu précède le calcul de l’IR.', 'Le locataire professionnel peut avoir des obligations de retenue selon le cas.', 'Les loyers, charges récupérées et périodes de vacance doivent être documentés.'],
    sections: [
      { title: 'Qualifier le bien et le bail', paragraphs: ['Le contrat indique la nature des locaux, leur usage, les équipements, les charges et les services éventuels. Une location assortie de prestations peut relever d’une autre catégorie fiscale.', 'Le propriétaire personne physique, l’indivision ou la société ne suivent pas nécessairement le même régime.'] },
      { title: 'Déterminer le revenu imposable', paragraphs: ['Le revenu brut comprend les loyers et certains avantages ou dépenses mis à la charge du locataire, après les règles prévues. L’abattement et le taux sont appliqués selon le régime en vigueur.', 'Les loyers impayés, abandons et dépôts de garantie sont traités selon leur nature réelle et les pièces disponibles.'] },
      { title: 'Retenue et déclaration', paragraphs: ['Lorsqu’une retenue est exigée du locataire, celui-ci la verse et remet l’attestation correspondante. Le bailleur conserve les montants bruts et retenus pour sa déclaration.', 'Un tableau annuel rapproche baux, encaissements, attestations, taxe locale et déclarations.'] }
    ],
    faq: [['Un dépôt de garantie est-il immédiatement un revenu ?', 'Pas s’il reste remboursable ; son traitement change s’il est acquis au bailleur.'], ['Une location vide est-elle toujours hors TVA ?', 'La TVA dépend de la nature civile ou commerciale de l’opération, des équipements et services ; une analyse du bail est nécessaire.'], ['Le loyer non encaissé est-il déclaré ?', 'Le traitement dépend du régime et des circonstances ; les impayés doivent être documentés.']],
    sources: [CGI]
  },
  {
    slug: 'charges-sociales-patronales-maroc-cout-employeur',
    title: 'Charges sociales patronales au Maroc : calculer le coût total d’un salarié',
    description: 'Du salaire brut au coût employeur au Maroc : CNSS patronale, AMO, allocations familiales, formation professionnelle et avantages.',
    category: 'social', label: 'Paie & CNSS', publishAt: '2026-08-28T07:00:00Z', readingTime: '8 min',
    intro: 'Le budget d’embauche doit comparer le net souhaité, le brut contractuel et le coût total supporté par l’entreprise. Les cotisations n’utilisent pas toutes la même assiette ni le même plafond.',
    takeaways: ['Certaines cotisations sont plafonnées à 6 000 MAD, d’autres non.', 'Les avantages et indemnités peuvent entrer dans les assiettes selon leur nature.', 'Le coût complet inclut aussi congés, équipements, assurance et gestion.'],
    sections: [
      { title: 'Partir du brut contractuel', paragraphs: ['Le salaire de base, les primes récurrentes, variables, avantages et indemnités sont inventoriés. Leur caractère soumis ou exonéré est analysé séparément pour la CNSS et l’IR.', 'Un net garanti nécessite un mécanisme contractuel prudent car le barème et la situation personnelle peuvent évoluer.'] },
      { title: 'Ajouter les cotisations patronales', paragraphs: ['Le régime standard comprend notamment la part patronale des prestations sociales, l’AMO, les allocations familiales et la taxe de formation professionnelle, avec des plafonds différents.', 'Le calcul est effectué par rubrique, pas avec un taux global appliqué au brut. Les plafonds sont contrôlés mois par mois.'] },
      { title: 'Budgéter le coût complet', paragraphs: ['Au-delà des cotisations, l’entreprise prévoit congés payés, matériel, logiciels, espace, médecine du travail, assurance et coûts de recrutement.', 'Un tableau annuel intègre les primes et révisions salariales afin de comparer le coût réel au budget.'] }
    ],
    faq: [['Le coût employeur est-il brut plus un taux fixe ?', 'Non. Les assiettes et plafonds diffèrent selon les cotisations et les éléments de rémunération.'], ['Les allocations familiales sont-elles retenues au salarié ?', 'Non. La cotisation correspondante est supportée par l’employeur dans le régime standard.'], ['Une indemnité exonérée d’IR est-elle toujours exonérée de CNSS ?', 'Pas automatiquement ; les conditions sociales et fiscales doivent être vérifiées séparément.']],
    sources: [CNSS, CGI, ['Simulateur salaire First Audit', '/salaire-net']]
  },
  {
    slug: 'damancom-declaration-cnss-maroc',
    title: 'Damancom et déclaration CNSS : contrôles avant télédéclaration',
    description: 'Préparer la déclaration CNSS sur Damancom : salariés, jours, salaires, plafonds, rapprochement paie-comptabilité et preuve de paiement.',
    category: 'social', label: 'CNSS', publishAt: '2026-09-01T07:00:00Z', readingTime: '8 min',
    intro: 'La télédéclaration CNSS transforme les données de paie en obligation sociale. Une erreur d’identité, de jours ou d’assiette peut affecter les droits du salarié et créer un risque pour l’employeur.',
    takeaways: ['Le fichier du personnel doit être fiabilisé avant la paie.', 'Les assiettes déclarées sont rapprochées des bulletins et de la comptabilité.', 'L’accusé et le paiement sont archivés chaque mois.'],
    sections: [
      { title: 'Fiabiliser les salariés', paragraphs: ['Les numéros d’immatriculation, CIN, dates d’entrée et de sortie, contrats et situations d’absence sont contrôlés. Un salarié non immatriculé fait l’objet des démarches nécessaires sans attendre la clôture.', 'Les mouvements du mois sont validés par les ressources humaines et la direction avant génération de la paie.'] },
      { title: 'Contrôler jours et assiettes', paragraphs: ['Les jours déclarés, salaires soumis et plafonds sont rapprochés de chaque bulletin. Les primes, rappels et indemnités sont examinés selon leur nature.', 'Un état de contrôle totalise par rubrique le journal de paie, le bordereau Damancom et les comptes de charges et dettes sociales.'] },
      { title: 'Déclarer, payer et corriger', paragraphs: ['Après dépôt, l’accusé de réception et le bordereau sont conservés. Le paiement est suivi jusqu’au débit bancaire effectif.', 'Toute anomalie détectée est corrigée via la procédure appropriée et documentée dans le dossier du mois.'] }
    ],
    faq: [['La paie comptabilisée prouve-t-elle que la CNSS est déclarée ?', 'Non. Il faut conserver la télédéclaration acceptée et la preuve de paiement.'], ['Peut-on corriger un salarié après dépôt ?', 'Des procédures de régularisation existent ; il faut agir rapidement et conserver l’historique.'], ['Pourquoi rapprocher les jours ?', 'Ils influencent les droits sociaux et permettent de détecter entrées, sorties ou absences mal traitées.']],
    sources: [CNSS]
  },
  {
    slug: 'assemblee-generale-approbation-comptes-maroc',
    title: 'Assemblée générale annuelle au Maroc : approbation des comptes et documents',
    description: 'Préparer l’assemblée générale annuelle : comptes, rapport de gestion, convocation, affectation du résultat, procès-verbal et dépôt.',
    category: 'entreprendre', label: 'Droit des sociétés', publishAt: '2026-09-04T07:00:00Z', readingTime: '9 min',
    intro: 'L’approbation des comptes transforme une clôture comptable en décision sociale. Les documents, délais et règles de majorité dépendent de la forme de société et de ses statuts.',
    takeaways: ['Les associés doivent recevoir une information suffisante avant de voter.', 'L’affectation du résultat respecte les pertes antérieures, réserves et règles de distribution.', 'Le procès-verbal doit correspondre exactement aux comptes approuvés.'],
    sections: [
      { title: 'Préparer le dossier', paragraphs: ['La direction finalise les états de synthèse, le rapport de gestion lorsqu’il est requis, les projets de résolutions et les rapports du commissaire aux comptes le cas échéant.', 'Les conventions réglementées, événements importants et continuité d’exploitation sont recensés avant la convocation.'] },
      { title: 'Convoquer et délibérer', paragraphs: ['Le mode, le délai et le contenu de la convocation suivent la loi et les statuts. Les droits d’information des associés doivent être respectés.', 'L’assemblée examine les comptes, la gestion, l’affectation du résultat et les autres résolutions inscrites. Les présences, pouvoirs, votes et réserves sont consignés.'] },
      { title: 'Formaliser après l’assemblée', paragraphs: ['Le procès-verbal est signé, conservé au registre et utilisé pour les dépôts ou formalités. Les dividendes ne sont payés qu’après une décision régulière et les contrôles fiscaux correspondants.', 'La version déposée, la liasse fiscale et les comptes internes doivent rester cohérents.'] }
    ],
    faq: [['Peut-on distribuer tout le bénéfice ?', 'Il faut tenir compte des pertes, réserves, capitaux propres, trésorerie et règles légales avant toute distribution.'], ['Une signature informelle des associés suffit-elle ?', 'Non. La décision doit respecter les formes, pouvoirs et preuves prévus par la loi et les statuts.'], ['Les comptes fiscaux et sociaux peuvent-ils différer ?', 'Le résultat fiscal comporte des retraitements, mais les états de synthèse approuvés et la déclaration doivent être rapprochés.']],
    sources: [SGG, CGI]
  },
  {
    slug: 'commissaire-aux-comptes-maroc-nomination',
    title: 'Commissaire aux comptes au Maroc : nomination, mission et indépendance',
    description: 'Quand nommer un commissaire aux comptes au Maroc, comment se déroule sa mission et quelles responsabilités restent à la direction.',
    category: 'audit', label: 'Audit légal', publishAt: '2026-09-08T07:00:00Z', readingTime: '9 min',
    intro: 'La nomination d’un commissaire aux comptes dépend de la forme sociale, des seuils et de situations particulières. Sa mission légale est distincte de la tenue comptable et du conseil courant.',
    takeaways: ['Les règles de nomination doivent être vérifiées selon la forme et les chiffres à jour.', 'Le commissaire aux comptes doit rester indépendant.', 'La direction demeure responsable des comptes et du contrôle interne.'],
    sections: [
      { title: 'Vérifier l’obligation', paragraphs: ['Les sociétés anonymes sont soumises à des règles propres. Pour d’autres formes, des seuils, demandes d’associés ou décisions volontaires peuvent entraîner une nomination.', 'Le chiffre d’affaires, la structure du groupe, l’activité réglementée et les statuts sont examinés avant chaque assemblée annuelle.'] },
      { title: 'Nommer régulièrement', paragraphs: ['L’organe compétent nomme le commissaire aux comptes pour la durée légale, après vérification de son inscription, de son indépendance et des incompatibilités.', 'La lettre de mission organise les échanges sans réduire les obligations définies par la loi.'] },
      { title: 'Comprendre la mission', paragraphs: ['Le commissaire planifie l’audit, évalue les risques, obtient des preuves et émet son rapport. Il réalise également les communications ou vérifications spécifiques prévues par les textes.', 'Il ne prend pas les décisions de gestion et ne garantit pas la viabilité future. Les recommandations de contrôle interne restent à mettre en œuvre par l’entreprise.'] }
    ],
    faq: [['Une société peut-elle nommer volontairement un commissaire ?', 'Oui, sous réserve de respecter les règles de nomination et de mission applicables.'], ['Le comptable peut-il être commissaire aux comptes de la même société ?', 'Les règles d’indépendance et incompatibilités interdisent de cumuler des fonctions compromettant l’objectivité.'], ['L’absence de réserve signifie-t-elle absence de toute erreur ?', 'Non. L’opinion fournit une assurance raisonnable sur les anomalies significatives.']],
    sources: [SGG, ['Ordre des experts-comptables du Maroc', 'https://www.oec.ma/']]
  },
  {
    slug: 'controle-fiscal-maroc-preparation',
    title: 'Contrôle fiscal au Maroc : préparer les pièces et sécuriser les réponses',
    description: 'Préparer un contrôle fiscal au Maroc : avis, interlocuteurs, comptabilité, pièces, délais, réponses, traçabilité et assistance professionnelle.',
    category: 'fiscalite', label: 'Contrôle fiscal', publishAt: '2026-09-11T07:00:00Z', readingTime: '10 min',
    intro: 'Un contrôle fiscal se prépare avant l’avis de vérification. Une comptabilité rapprochée, des pièces accessibles et des positions documentées réduisent le risque de réponses improvisées.',
    takeaways: ['L’avis et son périmètre sont lus avec précision.', 'Les remises de documents et échanges sont tracés.', 'Une réponse factuelle distingue les faits, les pièces et l’argument juridique.'],
    sections: [
      { title: 'Organiser dès la réception', paragraphs: ['L’entreprise identifie les impôts, exercices, dates et modalités mentionnés. Elle nomme un interlocuteur et informe l’expert-comptable ou conseil compétent.', 'Un espace de travail sépare les pièces demandées, les analyses internes et les versions transmises. Aucun document n’est modifié après coup.'] },
      { title: 'Tester la cohérence du dossier', paragraphs: ['La balance, les journaux, états de synthèse, liasses, TVA, paie et banques sont rapprochés. Les variations, comptes d’attente, marges inhabituelles et opérations liées sont expliqués.', 'Les factures sensibles, contrats, preuves de paiement et livrables sont regroupés. Les lacunes sont identifiées honnêtement et traitées selon la procédure adéquate.'] },
      { title: 'Répondre et préserver les droits', paragraphs: ['Chaque demande reçoit une réponse datée, précise et accompagnée d’un inventaire des pièces. Les désaccords sont analysés au regard des textes et des faits.', 'Les délais de réponse et voies de recours sont suivis dans un calendrier. Une position engageante est validée avant envoi.'] }
    ],
    faq: [['Faut-il transmettre plus que ce qui est demandé ?', 'Il faut répondre complètement au périmètre demandé sans créer de volume non maîtrisé ; l’assistance d’un professionnel est utile.'], ['Peut-on reconstituer une pièce manquante ?', 'On peut rechercher des duplicatas et preuves tierces, mais jamais fabriquer ou antidater un document.'], ['Un contrôle porte-t-il seulement sur la comptabilité ?', 'Il peut examiner déclarations, contrats, flux, obligations et cohérence économique selon son périmètre.']],
    sources: [CGI]
  },
  {
    slug: 'due-diligence-acquisition-entreprise-maroc',
    title: 'Due diligence au Maroc : checklist financière, fiscale, sociale et juridique',
    description: 'Préparer une acquisition d’entreprise au Maroc : qualité des résultats, dette, fiscalité, CNSS, contrats, litiges, prix et garanties.',
    category: 'audit', label: 'Transaction', publishAt: '2026-09-15T07:00:00Z', readingTime: '11 min',
    intro: 'Une due diligence ne remplace pas la négociation ; elle transforme les risques identifiés en questions de prix, conditions suspensives, garanties et plan d’intégration.',
    takeaways: ['La qualité du résultat est différente du résultat comptable publié.', 'La dette nette et le besoin en fonds de roulement influencent le prix.', 'Les risques fiscaux et sociaux survivent souvent au changement d’actionnaire.'],
    sections: [
      { title: 'Comprendre la performance', paragraphs: ['Les revenus sont analysés par client, produit et récurrence. Les éléments exceptionnels, transactions avec parties liées et dépenses personnelles sont retraités pour obtenir une performance normalisée.', 'La marge, les coûts fixes, les investissements nécessaires et la conversion en trésorerie sont comparés sur plusieurs exercices.'] },
      { title: 'Mesurer dette et besoins', paragraphs: ['Les emprunts, comptes courants, leasing, dettes fiscales, engagements et passifs hors bilan sont recensés. Les soldes bancaires sont confirmés.', 'Un niveau normal de stock, clients et fournisseurs est estimé pour éviter qu’une baisse temporaire du besoin en fonds de roulement gonfle artificiellement la trésorerie au closing.'] },
      { title: 'Transformer les risques en protections', paragraphs: ['Les contrôles fiscaux, déclarations, CNSS, contrats, propriété des actifs et litiges sont examinés. Les limites d’information sont clairement signalées.', 'Les conclusions alimentent l’ajustement de prix, les garanties d’actif et de passif, les conditions suspensives et le plan des cent premiers jours.'] }
    ],
    faq: [['Une due diligence garantit-elle l’absence de passif caché ?', 'Non. Elle réduit le risque dans les limites du périmètre, du temps et des informations accessibles.'], ['Faut-il auditer une petite cible ?', 'La profondeur est adaptée au montant et aux risques, mais une petite taille n’élimine pas les passifs fiscaux ou sociaux.'], ['Le rapport fixe-t-il le prix ?', 'Il fournit les analyses qui éclairent la valorisation et la négociation ; le prix reste une décision des parties.']],
    sources: [CGI, SGG, CNSS]
  },
  {
    slug: 'budget-tresorerie-entreprise-maroc',
    title: 'Budget de trésorerie : construire un prévisionnel utile à la décision',
    description: 'Méthode de budget de trésorerie : encaissements, décaissements, TVA, paie, investissements, financement, scénarios et suivi réel-prévisionnel.',
    category: 'entreprendre', label: 'Pilotage financier', publishAt: '2026-09-18T07:00:00Z', readingTime: '8 min',
    intro: 'Une entreprise rentable peut manquer de trésorerie. Le budget traduit les ventes, achats, impôts, salaires et investissements en dates réelles d’encaissement et de décaissement.',
    takeaways: ['Le chiffre d’affaires n’est pas un encaissement.', 'La TVA et les échéances fiscales doivent être modélisées séparément.', 'Des scénarios révèlent le besoin de financement avant la crise.'],
    sections: [
      { title: 'Partir des flux réels', paragraphs: ['Les ventes sont ventilées par délai client et probabilité d’encaissement. Les achats suivent les conditions fournisseurs, commandes et besoins de stock.', 'Les salaires, charges sociales, impôts, loyers, dettes et investissements sont positionnés à leur date de paiement probable.'] },
      { title: 'Intégrer fiscalité et financement', paragraphs: ['La TVA collectée et déductible, les acomptes d’IS, retenues et échéances sociales créent des décalages propres. Ils ne doivent pas être estimés comme un simple pourcentage mensuel.', 'Les lignes de crédit, remboursements, intérêts et apports sont intégrés avec leurs conditions et limites.'] },
      { title: 'Suivre et décider', paragraphs: ['Chaque semaine ou mois, le réalisé est comparé au prévisionnel. Les écarts de volume, prix, délai et date sont expliqués, puis le reste de l’année est réestimé.', 'Un scénario central, prudent et stressé permet de définir seuils d’alerte, actions de recouvrement et besoins de financement.'] }
    ],
    faq: [['Quelle durée prévoir ?', 'Un horizon glissant de treize semaines est utile pour l’opérationnel, complété par une vue mensuelle sur douze mois.'], ['Faut-il inclure la TVA ?', 'Oui, car elle affecte les encaissements et décaissements même si elle n’est pas un produit ou une charge ordinaire.'], ['Un budget doit-il rester fixe ?', 'Non. Le budget initial sert de référence, mais un forecast actualisé guide les décisions courantes.']],
    sources: [['Contacter First Audit pour un modèle adapté', '/#contact']]
  }
];
