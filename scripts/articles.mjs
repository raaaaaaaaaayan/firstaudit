import { backlogArticles } from './backlog-articles.mjs';

const launchArticles = [
  {
    slug: 'impot-societes-maroc-2026-taux-calcul',
    title: 'Impôt sur les sociétés au Maroc en 2026 : taux, calcul et cotisation minimale',
    description: 'Comprendre les taux d’IS 2026 au Maroc, la cotisation minimale, la contribution sociale de solidarité et les acomptes provisionnels.',
    category: 'fiscalite',
    label: 'Impôt sur les sociétés',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '9 min',
    intro: 'Le taux d’IS ne suffit pas pour estimer la charge fiscale d’une société marocaine. Il faut distinguer le résultat fiscal, la cotisation minimale, les régimes particuliers, la contribution sociale de solidarité et les acomptes.',
    takeaways: [
      'Le taux de droit commun est de 20 % lorsque le bénéfice fiscal est inférieur à 100 millions de dirhams.',
      'Le taux de 35 % concerne notamment les sociétés dont le bénéfice fiscal atteint ou dépasse 100 millions de dirhams, sous réserve des exclusions prévues par le CGI.',
      'Le taux de 40 % vise les établissements de crédit et organismes assimilés, Bank Al-Maghrib, la CDG ainsi que les entreprises d’assurance et de réassurance.',
      'L’IS calculé doit être comparé à la cotisation minimale lorsque celle-ci est exigible.'
    ],
    sections: [
      { title: 'Commencer par le résultat fiscal', paragraphs: [
        'L’impôt n’est pas calculé directement sur le chiffre d’affaires ni sur le résultat comptable affiché dans le CPC. Le résultat fiscal part du résultat comptable, puis tient compte des réintégrations et déductions prévues par le Code général des impôts.',
        'Une charge comptabilisée peut être non déductible fiscalement. À l’inverse, certaines déductions peuvent réduire la base imposable. Les déficits reportables et les amortissements différés doivent également être examinés avant d’appliquer un taux.'
      ]},
      { title: 'Les taux applicables en 2026', paragraphs: [
        'Depuis l’achèvement de la convergence prévue par la réforme, le CGI 2026 présente trois taux proportionnels principaux : 20 %, 35 % et 40 %. La qualification de l’activité et le niveau du bénéfice fiscal déterminent le taux applicable.',
        'Les avantages accordés à certaines activités ou implantations sont conditionnels. Une simple mention « export », « CFC » ou « zone industrielle » ne suffit pas : la date d’obtention du statut, la nature du revenu et la période d’avantage doivent être documentées.'
      ]},
      { title: 'Cotisation minimale et contribution sociale', paragraphs: [
        'La cotisation minimale repose sur des produits déterminés par l’article 144 du CGI et non sur le bénéfice fiscal. Son taux de droit commun est de 0,25 %, avec un taux particulier de 0,15 % pour certains produits. Pour une société soumise à l’IS, le minimum est en principe de 3 000 MAD lorsque la cotisation est exigible.',
        'La contribution sociale de solidarité sur les bénéfices et revenus s’applique selon des tranches lorsque le bénéfice atteint un million de dirhams. Elle doit être isolée dans l’estimation, car elle ne se confond ni avec l’IS ni avec la cotisation minimale.'
      ]},
      { title: 'La méthode de contrôle', paragraphs: [
        'Une estimation fiable suit cinq étapes : finaliser le résultat fiscal, qualifier le taux, calculer l’IS, calculer la cotisation minimale sur sa propre assiette, puis ajouter les contributions éventuellement dues. Les crédits d’impôt et retenues imputables sont examinés ensuite.',
        'Le calculateur IS de First Audit sépare volontairement le bénéfice fiscal de la base de cotisation minimale afin d’éviter l’erreur fréquente consistant à utiliser le même montant pour les deux calculs.'
      ]}
    ],
    faq: [
      ['Une société déficitaire paie-t-elle forcément zéro impôt ?', 'Non. Lorsque la cotisation minimale est exigible et qu’aucune exonération ne s’applique, un minimum peut rester dû même en l’absence de bénéfice fiscal.'],
      ['Le seuil de 100 millions s’apprécie-t-il sur le chiffre d’affaires ?', 'Non. Le taux de 35 % est lié au bénéfice net fiscal, pas au chiffre d’affaires.'],
      ['Les acomptes sont-ils une charge supplémentaire ?', 'Non. Les acomptes provisionnels constituent des paiements anticipés imputables sur l’IS de l’exercice concerné.']
    ],
    sources: [
      ['Code général des impôts 2026 — articles 19, 144, 170 et 267 à 273', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf'],
      ['Calculateur IS First Audit', '/simulateurs']
    ]
  },
  {
    slug: 'tva-maroc-2026-taux-exonerations',
    title: 'TVA au Maroc en 2026 : taux, exonérations et méthode de qualification',
    description: 'Guide pratique de la TVA marocaine en 2026 : champ d’application, taux de 10 % et 20 %, exonérations, droit à déduction et exigibilité.',
    category: 'fiscalite',
    label: 'TVA',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '10 min',
    intro: 'Avant de calculer une TVA, il faut qualifier l’opération. Une activité peut être hors champ, exonérée sans droit à déduction, exonérée avec droit à déduction ou taxable à un taux déterminé.',
    takeaways: [
      'Le taux normal est de 20 % et le taux réduit principal est de 10 % en 2026.',
      'Une exonération avec droit à déduction ne produit pas les mêmes effets qu’une exonération sans droit à déduction.',
      'La territorialité, le fait générateur et l’exigibilité doivent être vérifiés séparément.',
      'Le contrat, la facture et les pièces justificatives doivent refléter la qualification retenue.'
    ],
    sections: [
      { title: 'Champ, exonération et taux : trois questions différentes', paragraphs: [
        'La première question est de savoir si l’opération entre dans le champ de la TVA marocaine. Les opérations commerciales, industrielles, artisanales, certaines opérations immobilières, les professions libérales et les importations sont notamment visées par le CGI.',
        'Si l’opération est dans le champ, il faut ensuite rechercher une éventuelle exonération. Les articles 91 et 92 distinguent les exonérations sans droit à déduction de celles qui conservent ce droit. Ce n’est qu’en l’absence d’exonération que le taux applicable est déterminé.'
      ]},
      { title: 'Les taux de 10 % et 20 %', paragraphs: [
        'Le taux de 20 % constitue le taux normal. Le taux de 10 % s’applique à des biens et services précisément énumérés par l’article 99. Une analogie commerciale ne suffit pas pour appliquer le taux réduit : la nature exacte du produit ou du service doit correspondre au texte.',
        'Pour une opération taxable, le montant TTC est obtenu en multipliant le montant HT par un plus le taux. En sens inverse, la base HT est égale au TTC divisé par un plus le taux.'
      ]},
      { title: 'Droit à déduction et formalisme', paragraphs: [
        'La TVA récupérable dépend de l’affectation des achats à l’activité, de la qualité de la facture, du paiement et des exclusions prévues par le CGI. Une entreprise ayant des activités mixtes peut devoir appliquer un prorata.',
        'Certaines exonérations ou opérations d’investissement nécessitent des attestations, engagements ou demandes préalables. Le défaut de forme peut remettre en cause un avantage pourtant prévu sur le fond.'
      ]},
      { title: 'Exigibilité et déclaration', paragraphs: [
        'Le régime de droit commun repose sur l’encaissement, avec une option possible pour les débits. Les avances et acomptes peuvent donc rendre la taxe exigible avant la facture finale selon le régime retenu.',
        'La périodicité déclarative dépend notamment du chiffre d’affaires taxable et de la situation du contribuable. Les pièces de vente, les encaissements et la déclaration doivent être rapprochés avant dépôt.'
      ]}
    ],
    faq: [
      ['Une opération exonérée permet-elle toujours de récupérer la TVA sur les achats ?', 'Non. Il faut distinguer l’exonération sans droit à déduction de l’exonération avec droit à déduction.'],
      ['Le taux de 10 % peut-il être appliqué par défaut à un service essentiel ?', 'Non. Le taux réduit suppose que l’opération soit expressément visée par le CGI.'],
      ['Une facture suffit-elle à créer un droit à déduction ?', 'Non. Les conditions de fond, de forme, d’affectation et de paiement doivent également être réunies.']
    ],
    sources: [
      ['Code général des impôts 2026 — articles 87 à 125', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf'],
      ['Calculateur TVA First Audit', '/tva']
    ]
  },
  {
    slug: 'cloture-comptable-maroc-checklist',
    title: 'Clôture comptable au Maroc : checklist complète avant les états de synthèse',
    description: 'Checklist de clôture comptable au Maroc : pièces, rapprochements, stocks, immobilisations, cut-off, fiscalité et contrôle des états de synthèse.',
    category: 'comptabilite',
    label: 'Comptabilité',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '11 min',
    intro: 'Une clôture fiable ne consiste pas à éditer un bilan à la fin de l’année. Elle résulte d’une suite de contrôles documentés qui relient les pièces, les journaux, les comptes, la fiscalité et les états de synthèse.',
    takeaways: [
      'Chaque solde significatif doit être justifié par une pièce ou un état de rapprochement.',
      'Le cut-off rattache les charges et produits au bon exercice.',
      'L’inventaire physique et la revue des immobilisations ne doivent pas être traités après coup.',
      'La liasse fiscale est contrôlée après la cohérence comptable, pas à sa place.'
    ],
    sections: [
      { title: 'Sécuriser les pièces et les journaux', paragraphs: [
        'La première étape consiste à vérifier la complétude des achats, ventes, banques, caisses, paie et opérations diverses. Les séquences de factures, les périodes manquantes et les écritures manuelles inhabituelles doivent être identifiées.',
        'Un grand livre sans pièces n’est pas une clôture. Les factures, contrats, relevés, procès-verbaux et états auxiliaires doivent permettre de comprendre l’origine et la justification de chaque solde significatif.'
      ]},
      { title: 'Rapprocher les tiers et la trésorerie', paragraphs: [
        'Les comptes bancaires sont rapprochés des relevés à la date de clôture. Les chèques en circulation, virements en transit, commissions et intérêts non comptabilisés sont documentés.',
        'Les balances clients et fournisseurs sont rapprochées du grand livre. Les créances anciennes, litiges, acomptes, avoirs et soldes débiteurs fournisseurs nécessitent une analyse spécifique.'
      ]},
      { title: 'Inventaire, immobilisations et cut-off', paragraphs: [
        'Les stocks doivent faire l’objet d’un inventaire physique fiable, d’une valorisation cohérente et d’une revue de dépréciation. Les écarts avec la comptabilité sont expliqués et validés.',
        'Le fichier des immobilisations doit être rapproché des comptes, avec contrôle des acquisitions, mises en service, cessions et amortissements. Les charges constatées d’avance, produits constatés d’avance, charges à payer et produits à recevoir assurent le rattachement au bon exercice.'
      ]},
      { title: 'Passer du résultat comptable au résultat fiscal', paragraphs: [
        'Une fois la balance fiabilisée, le résultat fiscal est déterminé en identifiant les réintégrations, déductions, déficits et avantages documentés. La TVA, l’IS, l’IR salarial et les déclarations CNSS sont rapprochés de la comptabilité.',
        'Enfin, le bilan, le CPC, l’ESG, le tableau de financement et l’ETIC sont contrôlés entre eux. Les variations importantes et ratios inhabituels font l’objet d’une revue analytique avant validation.'
      ]}
    ],
    faq: [
      ['Faut-il attendre la fin de l’année pour préparer la clôture ?', 'Non. Les rapprochements mensuels et un pré-closing réduisent les corrections tardives et améliorent la qualité des comptes.'],
      ['Une balance équilibrée garantit-elle des comptes justes ?', 'Non. Elle prouve seulement l’égalité débit-crédit, pas la réalité, l’exhaustivité ni la bonne évaluation des opérations.'],
      ['Qui valide les estimations et provisions ?', 'La direction reste responsable des hypothèses. Le comptable ou l’expert-comptable les documente, les challenge et vérifie leur traduction comptable.']
    ],
    sources: [
      ['Secrétariat général du gouvernement — loi n° 9-88 relative aux obligations comptables des commerçants', 'https://www.sgg.gov.ma/'],
      ['Code général des impôts 2026', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf']
    ]
  },
  {
    slug: 'charges-non-deductibles-is-maroc',
    title: 'Charges non déductibles de l’IS au Maroc : les contrôles essentiels',
    description: 'Paiements en espèces, cadeaux, véhicules, amendes, provisions et pièces justificatives : les principaux risques de réintégration fiscale au Maroc.',
    category: 'fiscalite',
    label: 'IS',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '9 min',
    intro: 'Une dépense comptabilisée n’est pas automatiquement déductible. Elle doit être engagée dans l’intérêt de l’exploitation, réelle, justifiée, rattachée au bon exercice et conforme aux limitations du CGI.',
    takeaways: [
      'La pièce justificative doit identifier l’opération, le fournisseur et le bénéficiaire réel.',
      'Certains paiements en espèces entraînent une déductibilité partielle ou une sanction fiscale.',
      'Les amendes, pénalités et l’impôt sur les sociétés ne constituent pas des charges déductibles ordinaires.',
      'Une provision doit couvrir un risque ou une charge nettement précisée et probable.'
    ],
    sections: [
      { title: 'Les cinq conditions de base', paragraphs: [
        'Pour être admise, une charge doit se rattacher à l’activité, correspondre à une opération réelle, être appuyée par une pièce régulière, être comptabilisée dans le bon exercice et ne pas être exclue par une disposition particulière.',
        'Le libellé générique d’une facture ou l’absence d’éléments permettant d’identifier la prestation fragilise la déduction. Pour les prestations intellectuelles, il est prudent de conserver contrat, livrables, échanges et preuve du service rendu.'
      ]},
      { title: 'Paiements, cadeaux et véhicules', paragraphs: [
        'Le mode de paiement peut affecter la déductibilité et la TVA récupérable lorsque les seuils ou conditions prévus par le CGI ne sont pas respectés. La trace bancaire doit correspondre à la facture et au fournisseur.',
        'Les cadeaux publicitaires ne sont admis que dans les limites et conditions prévues par le texte. Les véhicules de tourisme font l’objet de plafonds fiscaux pour l’amortissement et la location ; la fraction excédentaire doit être retraitée.'
      ]},
      { title: 'Amendes, impôts et provisions', paragraphs: [
        'Les amendes et pénalités pour infraction à des dispositions légales ou réglementaires ne réduisent pas normalement le résultat fiscal. L’IS et la contribution sociale de solidarité font également l’objet de traitements spécifiques.',
        'Une provision ne doit pas servir de réserve générale. Le risque doit être individualisé, probable à la clôture et évalué avec une méthode documentée. Certaines provisions, notamment sur créances, exigent des diligences particulières.'
      ]},
      { title: 'Construire une piste de contrôle', paragraphs: [
        'Pour chaque catégorie sensible, l’entreprise peut conserver une fiche de contrôle indiquant le compte, le montant, la pièce, le mode de paiement, la justification professionnelle et le traitement fiscal retenu.',
        'Cette revue avant la déclaration permet d’éviter les réintégrations oubliées et de préparer les éléments de réponse en cas de contrôle.'
      ]}
    ],
    faq: [
      ['Une facture au nom de l’entreprise suffit-elle ?', 'Non. Elle doit correspondre à une dépense réelle, engagée dans l’intérêt de l’exploitation et correctement documentée.'],
      ['Une charge non déductible doit-elle être supprimée de la comptabilité ?', 'Non. Elle reste comptabilisée si elle est réelle, puis elle est réintégrée pour déterminer le résultat fiscal.'],
      ['Peut-on provisionner un risque simplement possible ?', 'La déductibilité fiscale exige un risque nettement précisé et probable, existant à la clôture, avec une estimation justifiable.']
    ],
    sources: [
      ['Code général des impôts 2026 — articles 10, 11 et 146', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf']
    ]
  },
  {
    slug: 'bulletin-paie-maroc-cnss-ir',
    title: 'Bulletin de paie au Maroc : comprendre le brut, la CNSS, l’AMO et l’IR',
    description: 'Lecture pratique du bulletin de paie marocain : salaire brut, cotisations CNSS et AMO, frais professionnels, IR, net et coût employeur.',
    category: 'social',
    label: 'Paie & CNSS',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '9 min',
    intro: 'Le net à payer ne se calcule pas avec un pourcentage unique du brut. La paie combine éléments imposables, indemnités, cotisations sociales, frais professionnels et barème progressif de l’impôt sur le revenu.',
    takeaways: [
      'La CNSS salariale de court terme est plafonnée, tandis que l’AMO salariale ne suit pas ce même plafond.',
      'Les frais professionnels réduisent la base de l’IR mais ne sont pas une retenue supplémentaire sur le net.',
      'La réduction pour personnes à charge s’impute sur l’impôt calculé.',
      'Le coût employeur comprend des cotisations patronales qui n’apparaissent pas dans le net du salarié.'
    ],
    sections: [
      { title: 'Du brut au brut imposable', paragraphs: [
        'Le bulletin commence par le salaire de base, les primes, heures supplémentaires, avantages et indemnités. Leur traitement dépend de leur nature et des conditions d’exonération éventuelles.',
        'Une indemnité présentée comme « non imposable » n’est pas automatiquement exonérée. Sa justification, son objet, son plafond et la situation du salarié doivent être vérifiés.'
      ]},
      { title: 'Cotisations salariales', paragraphs: [
        'Pour un salarié du secteur privé relevant du régime standard, la cotisation salariale CNSS de 4,48 % est calculée dans la limite d’une assiette mensuelle de 6 000 MAD. L’AMO salariale de 2,26 % est calculée sans ce plafond.',
        'Les régimes complémentaires, la CIMR, les assurances groupe ou les retenues conventionnelles doivent être ajoutés selon le contrat et la politique de l’employeur.'
      ]},
      { title: 'Base IR et réduction familiale', paragraphs: [
        'La base imposable tient compte des cotisations déductibles et de l’abattement pour frais professionnels. Le barème annuel progressif est ensuite appliqué, puis la réduction pour charges de famille est déduite de l’impôt dans la limite prévue.',
        'Pour une rémunération irrégulière, des primes annuelles ou une entrée en cours d’année, un calcul mensuel simplifié peut différer du traitement réel de paie.'
      ]},
      { title: 'Net salarié et coût employeur', paragraphs: [
        'Le net à payer correspond au brut et aux éléments nets, diminués des cotisations, de l’IR et des autres retenues autorisées. Le coût employeur ajoute les cotisations patronales et autres charges supportées par l’entreprise.',
        'Une revue de paie rapproche les contrats, temps de travail, bulletins, virements, déclarations CNSS, état 9421 et comptabilité.'
      ]}
    ],
    faq: [
      ['Pourquoi deux salariés avec le même brut peuvent-ils avoir un net différent ?', 'Le nombre de personnes à charge, les indemnités, les régimes complémentaires et les autres retenues peuvent différer.'],
      ['Les frais professionnels sont-ils versés au salarié ?', 'Non. Il s’agit ici d’un abattement utilisé pour calculer l’IR, pas d’un paiement séparé.'],
      ['Le simulateur remplace-t-il un bulletin de paie ?', 'Non. Il fournit une estimation standard et ne couvre pas tous les éléments contractuels ou exonérations.']
    ],
    sources: [
      ['Code général des impôts 2026 — articles 57, 59, 73 et 74', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf'],
      ['CNSS Maroc', 'https://www.cnss.ma/'],
      ['Simulateur salaire First Audit', '/salaire-net']
    ]
  },
  {
    slug: 'creer-sarl-maroc-etapes',
    title: 'Créer une SARL au Maroc : décisions, étapes et obligations après l’immatriculation',
    description: 'Guide de création d’une SARL au Maroc : associés, capital, statuts, siège, formalités, compte bancaire, fiscalité et organisation comptable.',
    category: 'entreprendre',
    label: 'Création d’entreprise',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '10 min',
    intro: 'La création ne se résume pas au certificat négatif et au registre de commerce. Les décisions prises avant les statuts déterminent la gouvernance, les pouvoirs, la fiscalité et la capacité de l’entreprise à fonctionner correctement.',
    takeaways: [
      'Les statuts doivent traduire l’accord réel entre les associés et les pouvoirs du gérant.',
      'Le siège social doit être justifié par un titre adapté à la situation.',
      'Les obligations comptables, fiscales, bancaires et sociales commencent dès la création.',
      'Le capital annoncé doit rester cohérent avec les besoins de démarrage et le plan de financement.'
    ],
    sections: [
      { title: 'Décider avant de rédiger', paragraphs: [
        'Les fondateurs doivent définir l’activité, les associés, les apports, la répartition du capital, la gérance, les règles de signature et les mécanismes de décision. Les activités réglementées exigent parfois une autorisation ou une qualification.',
        'Le choix entre SARL à associé unique et SARL pluripersonnelle dépend du projet. En présence de plusieurs associés, les règles de cession, de sortie et de résolution des désaccords méritent une attention particulière.'
      ]},
      { title: 'Dénomination, siège et statuts', paragraphs: [
        'Le certificat négatif réserve une dénomination, mais ne protège pas à lui seul une marque. Une recherche de marque distincte peut être utile lorsque le nom a une valeur commerciale.',
        'Le siège est établi par un bail, un contrat de domiciliation ou un autre titre valable. Les statuts précisent notamment l’objet, le capital, les apports, la durée, la gérance et les règles de décision.'
      ]},
      { title: 'Formalités et compte bancaire', paragraphs: [
        'Le dossier d’immatriculation réunit les actes et justificatifs nécessaires aux inscriptions juridiques, fiscales et sociales. Le guichet électronique DirectEntreprise centralise progressivement ces démarches.',
        'Après l’immatriculation, la banque applique ses propres contrôles de connaissance client. Les pouvoirs bancaires, moyens de paiement et règles de validation doivent être cohérents avec les statuts et procès-verbaux.'
      ]},
      { title: 'Les trente premiers jours', paragraphs: [
        'L’entreprise met en place la facturation, les mentions légales, la conservation des pièces, le plan comptable, les circuits d’achat et de paiement, ainsi que le calendrier déclaratif. Une embauche suppose également les formalités sociales correspondantes.',
        'Un budget de trésorerie et une liste des échéances évitent qu’une société nouvellement créée découvre ses obligations au moment du premier dépôt.'
      ]}
    ],
    faq: [
      ['Le certificat négatif suffit-il pour utiliser librement un nom ?', 'Non. Il concerne la dénomination commerciale dans le processus de création ; la protection d’une marque relève d’une démarche distincte.'],
      ['Une SARL doit-elle avoir un expert-comptable ?', 'Le recours dépend de l’organisation choisie, mais les comptes et déclarations restent sous la responsabilité de la société et doivent respecter les règles applicables.'],
      ['Peut-on créer sans avoir défini les pouvoirs du gérant ?', 'Les statuts prévoient des pouvoirs, mais il est préférable de définir aussi les limites internes, doubles validations et délégations nécessaires.']
    ],
    sources: [
      ['OMPIC — création et vie de l’entreprise', 'https://www.ompic.ma/'],
      ['DirectEntreprise', 'https://www.directentreprise.ma/'],
      ['Code général des impôts 2026', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf']
    ]
  },
  {
    slug: 'amortissements-comptables-fiscaux-maroc',
    title: 'Amortissements comptables et fiscaux au Maroc : méthode et points de vigilance',
    description: 'Coût d’entrée, date de mise en service, durée, valeur résiduelle, amortissement linéaire ou dégressif et retraitements fiscaux au Maroc.',
    category: 'comptabilite',
    label: 'Immobilisations',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '9 min',
    intro: 'L’amortissement répartit le coût d’un actif sur sa durée d’utilisation. Sa comptabilisation exige une base fiable, une date de mise en service documentée et une méthode cohérente avec la consommation des avantages économiques.',
    takeaways: [
      'La date d’achat et la date de mise en service ne sont pas toujours identiques.',
      'La durée comptable doit refléter l’utilisation attendue de l’actif.',
      'Les règles fiscales peuvent imposer des plafonds ou créer un retraitement sans modifier la réalité comptable.',
      'Le fichier des immobilisations doit être rapproché du grand livre et de l’inventaire physique.'
    ],
    sections: [
      { title: 'Déterminer le coût d’entrée', paragraphs: [
        'Le coût comprend le prix d’acquisition et les dépenses directement nécessaires pour mettre l’actif en état de fonctionner, selon les règles comptables applicables. Les remises et éléments récupérables sont traités de manière cohérente.',
        'La facture seule ne suffit pas toujours : frais accessoires, date de réception, procès-verbal de mise en service et financement peuvent influencer la comptabilisation.'
      ]},
      { title: 'Date, durée et méthode', paragraphs: [
        'L’amortissement commence lorsque l’actif est prêt à être utilisé. La durée est estimée en fonction de l’usage, de l’obsolescence et de la politique de renouvellement, puis revue lorsque les conditions changent significativement.',
        'La méthode linéaire convient à une consommation régulière. Une autre méthode peut être retenue lorsqu’elle représente mieux le rythme d’utilisation, à condition d’être justifiée et appliquée de façon cohérente.'
      ]},
      { title: 'Différences fiscales', paragraphs: [
        'La déductibilité fiscale suppose notamment une comptabilisation régulière et le respect des conditions du CGI. Certains actifs, comme les véhicules de tourisme, font l’objet de plafonds qui génèrent une réintégration de la fraction excédentaire.',
        'Le traitement fiscal ne doit pas conduire à effacer l’information comptable. La différence est suivie dans le tableau de passage du résultat comptable au résultat fiscal.'
      ]},
      { title: 'Contrôles de clôture', paragraphs: [
        'Le registre des immobilisations est rapproché des comptes de valeurs brutes, amortissements et dotations. Les actifs cédés, détruits, inutilisés ou introuvables sont analysés et documentés.',
        'Les factures récentes sont revues pour détecter les dépenses immobilisables comptabilisées en charges, et inversement les petits achats immobilisés sans justification.'
      ]}
    ],
    faq: [
      ['Peut-on amortir dès la date de facture ?', 'Seulement si cette date correspond à la mise en service. Sinon, le début de l’amortissement doit suivre la disponibilité réelle de l’actif.'],
      ['Une durée fiscale remplace-t-elle l’estimation comptable ?', 'La comptabilité reflète l’utilisation économique ; une différence fiscale éventuelle est traitée séparément.'],
      ['Un actif totalement amorti doit-il être supprimé ?', 'Non s’il est toujours détenu et utilisé. Il reste dans le fichier jusqu’à sa sortie effective.']
    ],
    sources: [
      ['Code général des impôts 2026 — article 10', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf'],
      ['Secrétariat général du gouvernement — loi n° 9-88', 'https://www.sgg.gov.ma/']
    ]
  },
  {
    slug: 'declaration-tva-maroc-delais-controles',
    title: 'Déclaration de TVA au Maroc : périodicité, délais et contrôles avant dépôt',
    description: 'Préparer une déclaration de TVA au Maroc : régime mensuel ou trimestriel, TVA collectée, déductible, crédit, rapprochements et justificatifs.',
    category: 'fiscalite',
    label: 'TVA',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '9 min',
    intro: 'Une déclaration de TVA fiable doit rapprocher les factures, les encaissements, les achats, les paiements et la comptabilité. Le dépôt sur SIMPL est la dernière étape du contrôle.',
    takeaways: [
      'La périodicité dépend du régime prévu par le CGI et de la situation du redevable.',
      'La TVA collectée doit être rattachée au fait générateur applicable.',
      'La déduction suppose une facture régulière, une dépense éligible et le respect des conditions de paiement.',
      'Un crédit de TVA doit être expliqué et suivi de période en période.'
    ],
    sections: [
      { title: 'Mensuelle ou trimestrielle', paragraphs: [
        'Le CGI prévoit une déclaration mensuelle notamment pour les redevables dont le chiffre d’affaires taxable atteint le seuil légal, ainsi que dans certaines situations particulières. Les autres redevables éligibles peuvent relever du régime trimestriel.',
        'La périodicité doit être confirmée à l’ouverture de l’exercice et lors d’un changement significatif d’activité ou de chiffre d’affaires.'
      ]},
      { title: 'Reconstituer la TVA collectée', paragraphs: [
        'La TVA sur ventes est rapprochée du journal de vente, des factures, avoirs et encaissements. Le régime de l’encaissement ou l’option pour les débits détermine la période d’exigibilité.',
        'Les acomptes, ventes au comptant, opérations exonérées, exportations et autoliquidations sont isolés pour éviter une agrégation trompeuse.'
      ]},
      { title: 'Sécuriser la TVA déductible', paragraphs: [
        'Les factures d’achat sont contrôlées sur le fond et la forme. La dépense doit être liée à l’exploitation et ne pas relever d’une exclusion. La preuve de paiement et la période de déduction sont vérifiées.',
        'Les immobilisations, régularisations de prorata et opérations comportant une retenue à la source TVA nécessitent un suivi distinct.'
      ]},
      { title: 'Rapprochements avant dépôt', paragraphs: [
        'Le solde de la déclaration est rapproché des comptes de TVA. Les variations inhabituelles, crédits anciens, taux effectifs et écarts avec le chiffre d’affaires comptable sont expliqués.',
        'Après dépôt, l’accusé de réception, le détail déclaré et la preuve de paiement sont archivés avec le dossier de contrôle de la période.'
      ]}
    ],
    faq: [
      ['Une facture de vente non encaissée génère-t-elle toujours de la TVA exigible ?', 'Cela dépend du régime d’exigibilité applicable, notamment de l’encaissement ou de l’option pour les débits.'],
      ['Peut-on déduire toute TVA figurant sur une facture ?', 'Non. L’achat doit être éligible, correctement facturé et satisfaire les conditions prévues par le CGI.'],
      ['Pourquoi rapprocher la TVA du chiffre d’affaires ?', 'Ce contrôle détecte des factures manquantes, mauvais taux, avoirs non intégrés ou décalages d’exigibilité non expliqués.']
    ],
    sources: [
      ['Code général des impôts 2026 — articles 95, 101 à 113 et 108 à 111', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf'],
      ['Calendrier fiscal First Audit', '/calendrier-fiscal']
    ]
  },
  {
    slug: 'audit-comptes-maroc-demarche',
    title: 'Audit des comptes au Maroc : démarche, preuves et rapport du commissaire aux comptes',
    description: 'Comprendre l’audit légal et contractuel au Maroc : acceptation, risques, contrôle interne, tests, circularisation, conclusions et rapport.',
    category: 'audit',
    label: 'Audit & assurance',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '10 min',
    intro: 'L’audit ne consiste pas à revérifier chaque écriture. Il apporte une assurance fondée sur l’analyse des risques, le contrôle interne, des tests ciblés et des éléments probants suffisants et appropriés.',
    takeaways: [
      'L’audit légal et l’audit contractuel n’ont pas exactement le même fondement ni le même destinataire.',
      'La direction reste responsable de l’établissement des comptes et du contrôle interne.',
      'L’auditeur planifie ses travaux selon les risques d’anomalies significatives.',
      'Le rapport dépend des anomalies identifiées, de leur importance et des limitations rencontrées.'
    ],
    sections: [
      { title: 'Définir la mission et l’indépendance', paragraphs: [
        'Avant d’accepter une mission, le professionnel examine son indépendance, ses compétences, les conditions de nomination et la possibilité d’obtenir les informations nécessaires. La lettre de mission précise le périmètre et les responsabilités.',
        'Dans un commissariat aux comptes, les textes applicables fixent la mission et les destinataires du rapport. Un audit contractuel répond à un besoin défini, par exemple une acquisition, un financement ou une revue ciblée.'
      ]},
      { title: 'Comprendre l’entreprise et ses risques', paragraphs: [
        'L’auditeur analyse l’activité, le modèle économique, les systèmes, la gouvernance, les estimations et les risques de fraude. Il identifie les cycles significatifs et les contrôles sur lesquels il peut éventuellement s’appuyer.',
        'La matérialité oriente la nature, le calendrier et l’étendue des travaux. Elle ne signifie pas que les petites erreurs sont ignorées ; leur nature et leur cumul sont aussi considérés.'
      ]},
      { title: 'Obtenir des éléments probants', paragraphs: [
        'Les procédures combinent inspection de documents, observation, confirmations externes, recalculs, analyses et entretiens. Les clients, banques, avocats ou fournisseurs peuvent être circularisés selon les risques.',
        'Les estimations comptables, écritures manuelles de clôture, opérations avec parties liées et événements postérieurs font généralement l’objet d’une attention renforcée.'
      ]},
      { title: 'Conclure et communiquer', paragraphs: [
        'Les anomalies sont discutées avec la direction et, selon le cas, avec les organes de gouvernance. L’auditeur évalue les corrections, les limitations et la cohérence d’ensemble des états financiers.',
        'Le rapport exprime la conclusion prévue par la mission. Des recommandations séparées peuvent porter sur le contrôle interne, sans transférer à l’auditeur la responsabilité de gérer l’entreprise.'
      ]}
    ],
    faq: [
      ['Un audit garantit-il l’absence totale de fraude ?', 'Non. Il fournit une assurance raisonnable, pas absolue, sur l’absence d’anomalies significatives.'],
      ['L’auditeur prépare-t-il les comptes qu’il certifie ?', 'La direction reste responsable des comptes. Les règles d’indépendance encadrent strictement les services complémentaires.'],
      ['Une recommandation de contrôle interne est-elle une réserve ?', 'Non. Une recommandation peut signaler une faiblesse sans modifier nécessairement l’opinion sur les états financiers.']
    ],
    sources: [
      ['Ordre des experts-comptables du Maroc', 'https://www.oec.ma/'],
      ['Secrétariat général du gouvernement — textes sur les sociétés commerciales', 'https://www.sgg.gov.ma/']
    ]
  },
  {
    slug: 'investissement-etranger-maroc-change-fiscalite',
    title: 'Investissement étranger au Maroc : change, fiscalité et documents à sécuriser',
    description: 'Investir au Maroc : financement en devises, compte bancaire, création de société, fiscalité, transfert des dividendes et traçabilité documentaire.',
    category: 'entreprendre',
    label: 'International',
    publishAt: '2026-07-11T07:00:00Z',
    readingTime: '11 min',
    intro: 'La garantie de transfert attachée à un investissement étranger repose sur la conformité de l’opération et la traçabilité des fonds. La structure juridique, la banque, le change, la fiscalité et la comptabilité doivent être pensés ensemble.',
    takeaways: [
      'L’origine étrangère du financement doit être traçable depuis l’entrée des fonds.',
      'Capital, compte courant d’associé et prêt n’ont pas les mêmes effets juridiques, fiscaux et financiers.',
      'Les transferts futurs exigent des documents sociaux, fiscaux, comptables et bancaires cohérents.',
      'Les conventions fiscales sont analysées opération par opération.'
    ],
    sections: [
      { title: 'Choisir le mode d’investissement', paragraphs: [
        'L’investisseur peut financer la société par capital, prime, compte courant ou prêt, selon le cadre autorisé. Chaque instrument influence les droits, la rémunération, le remboursement et la documentation attendue.',
        'Les statuts, conventions intragroupe et décisions sociales doivent correspondre aux flux bancaires réellement exécutés.'
      ]},
      { title: 'Préserver la traçabilité des devises', paragraphs: [
        'Les avis de crédit, messages bancaires, attestations et justificatifs de l’investisseur sont conservés dès l’entrée des fonds. Une régularisation tardive peut être plus complexe qu’un dossier correctement constitué au départ.',
        'La banque domiciliataire joue un rôle central dans l’exécution des opérations de change et demande les pièces prévues par l’instruction en vigueur.'
      ]},
      { title: 'Fiscalité et conventions', paragraphs: [
        'Les bénéfices de la société marocaine relèvent de la fiscalité marocaine. Les dividendes, intérêts, redevances et prestations transfrontalières peuvent supporter des retenues à la source, sous réserve d’une convention plus favorable et de ses conditions.',
        'Les prix appliqués entre entreprises liées doivent correspondre aux fonctions, actifs et risques. Les contrats et analyses économiques doivent être préparés avant un contrôle, pas reconstruits après.'
      ]},
      { title: 'Préparer les transferts futurs', paragraphs: [
        'Le transfert de dividendes suppose notamment des comptes approuvés, une décision régulière, la preuve des obligations fiscales et les documents bancaires requis. Le produit d’une cession ou le remboursement d’un financement exige sa propre chaîne documentaire.',
        'Un dossier permanent regroupant investissement initial, changements de capital, conventions, décisions et transferts simplifie les opérations futures.'
      ]}
    ],
    faq: [
      ['Une société marocaine détenue par un étranger est-elle une société étrangère ?', 'Non. Une société constituée au Maroc est une personne morale marocaine, même si son capital est détenu par un non-résident.'],
      ['Une convention fiscale supprime-t-elle automatiquement toute retenue ?', 'Non. Elle peut plafonner ou répartir le droit d’imposer, sous réserve de résidence, de bénéficiaire effectif et de justificatifs.'],
      ['Pourquoi conserver les justificatifs d’entrée de fonds ?', 'Ils permettent d’établir la nature et l’origine de l’investissement lors de transferts, remboursements ou cessions futurs.']
    ],
    sources: [
      ['Office des Changes — réglementation des opérations de change', 'https://www.oc.gov.ma/'],
      ['Code général des impôts 2026', 'https://www.finances.gov.ma/Publication/dgi/2025/CGI-2026-FR.pdf'],
      ['OMPIC', 'https://www.ompic.ma/']
    ]
  }
];

export const scheduledArticles = [...launchArticles, ...backlogArticles];
