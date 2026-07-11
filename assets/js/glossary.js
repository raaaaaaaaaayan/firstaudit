(() => {
  const terms = [
    { term: "Acompte provisionnel", cat: "fiscal", def: "Paiement anticipé d’impôt imputable sur l’impôt définitif. En matière d’IS, quatre acomptes sont en principe versés avant l’expiration des 3e, 6e, 9e et 12e mois de l’exercice.", ex: "Pour un exercice calendaire, les repères ordinaires sont fin mars, fin juin, fin septembre et fin décembre." },
    { term: "Actif", cat: "comptable", def: "Ensemble des ressources économiques contrôlées par l’entreprise : immobilisations, stocks, créances et disponibilités notamment." },
    { term: "Actif circulant", cat: "comptable", def: "Partie de l’actif destinée à se transformer au cours du cycle d’exploitation : stocks, créances clients et autres créances." },
    { term: "Amortissement", cat: "comptable", def: "Répartition du montant amortissable d’une immobilisation sur sa durée d’utilisation estimée. Son traitement fiscal peut différer du plan comptable." },
    { term: "AMO", cat: "social", def: "Assurance maladie obligatoire de base. Pour les salariés du secteur privé, elle est notamment articulée avec les déclarations et cotisations gérées par la CNSS." },
    { term: "Auto-entrepreneur", cat: "juridique", def: "Régime simplifié applicable sur option à une personne physique qui respecte les conditions légales, dont des plafonds de chiffre d’affaires encaissé." },
    { term: "Balance", cat: "comptable", def: "État récapitulant les mouvements et soldes de tous les comptes sur une période. Le total des débits doit égaler le total des crédits." },
    { term: "Bénéfice", cat: "comptable", def: "Résultat positif lorsque les produits excèdent les charges. Le bénéfice comptable n’est pas automatiquement le bénéfice fiscal." },
    { term: "Besoin en fonds de roulement (BFR)", cat: "finance", def: "Besoin de financement créé par le décalage entre encaissements et décaissements d’exploitation. Il dépend notamment des stocks, clients et fournisseurs." },
    { term: "Bilan", cat: "comptable", def: "État de synthèse présentant, à une date donnée, l’actif de l’entreprise et les ressources qui le financent au passif." },
    { term: "Capital social", cat: "juridique", def: "Montant des apports inscrits dans les statuts. Pour une SARL marocaine, le capital est librement fixé par les associés sous réserve des règles applicables aux apports." },
    { term: "Charges déductibles", cat: "fiscal", def: "Charges admises en déduction du résultat fiscal lorsqu’elles satisfont les conditions de fond et de forme prévues par la loi, et ne sont pas expressément exclues." },
    { term: "Chiffre d’affaires", cat: "comptable", def: "Montant des ventes de biens et prestations réalisées pendant une période. Il faut préciser s’il est exprimé hors taxe, toutes taxes comprises, facturé ou encaissé." },
    { term: "CNSS", cat: "social", def: "Caisse nationale de sécurité sociale, organisme qui gère notamment l’affiliation, les déclarations de salaires et les cotisations du secteur privé." },
    { term: "Compte de produits et charges (CPC)", cat: "comptable", def: "État de synthèse qui explique la formation du résultat à travers les produits et charges d’exploitation, financiers et non courants." },
    { term: "Cotisation minimale", cat: "fiscal", def: "Minimum d’IS ou d’IR professionnel calculé sur une assiette de produits déterminée par le CGI. Elle ne se calcule pas directement sur le bénéfice fiscal." },
    { term: "Créance", cat: "comptable", def: "Droit de l’entreprise d’obtenir une somme ou une prestation d’un tiers. Une facture client non encaissée constitue généralement une créance." },
    { term: "Crédit de TVA", cat: "fiscal", def: "Excédent de TVA déductible sur la TVA due pour une période. Il peut être reporté ou remboursé lorsque les conditions légales sont réunies." },
    { term: "Débit et crédit", cat: "comptable", def: "Deux côtés d’une écriture en partie double. Leur effet dépend de la nature du compte : débiter une charge l’augmente, tandis que créditer un produit l’augmente." },
    { term: "Déclaration du résultat fiscal", cat: "fiscal", def: "Déclaration annuelle qui détermine le résultat imposable et accompagne les états et tableaux exigés. Pour une société, le délai dépend de la date de clôture." },
    { term: "Déficit fiscal", cat: "fiscal", def: "Résultat fiscal négatif reportable selon les limites et durées prévues par le CGI. La fraction liée aux amortissements suit un régime distinct." },
    { term: "Dette", cat: "comptable", def: "Obligation de payer ou de fournir une prestation à un tiers : fournisseur, banque, administration fiscale, organisme social ou associé." },
    { term: "Droit à déduction TVA", cat: "fiscal", def: "Droit de retrancher une TVA d’amont de la TVA due lorsque l’achat, la facture, l’affectation et les autres conditions du CGI sont respectés." },
    { term: "Droits d’enregistrement", cat: "fiscal", def: "Droits exigibles sur certains actes et conventions. Le taux, l’assiette et le délai varient selon la nature juridique de l’opération." },
    { term: "EBITDA", cat: "finance", def: "Indicateur financier international approchant la performance opérationnelle avant intérêts, impôts, dépréciations et amortissements. Il ne remplace pas un agrégat légal marocain." },
    { term: "Écriture comptable", cat: "comptable", def: "Enregistrement daté et justifié d’une opération dans des comptes, avec au moins un débit et un crédit de montants égaux." },
    { term: "Exercice comptable", cat: "comptable", def: "Période au titre de laquelle les comptes sont établis. Sa date d’ouverture et de clôture commande plusieurs échéances fiscales." },
    { term: "Exigibilité", cat: "fiscal", def: "Moment où l’administration peut réclamer le paiement d’un impôt. En TVA, elle doit être distinguée du fait générateur et dépend notamment du régime retenu." },
    { term: "Facture", cat: "comptable", def: "Pièce commerciale qui décrit une vente ou une prestation et porte les mentions exigées. Elle sert de preuve, mais ne suffit pas toujours à établir la déductibilité fiscale." },
    { term: "Fait générateur", cat: "fiscal", def: "Événement qui fait naître une obligation fiscale. Il ne coïncide pas nécessairement avec la date à laquelle la taxe devient exigible." },
    { term: "Fonds de roulement", cat: "finance", def: "Excédent des ressources stables sur les emplois stables. Il contribue au financement du besoin en fonds de roulement." },
    { term: "Grand livre", cat: "comptable", def: "Registre regroupant les écritures par compte afin de suivre leurs mouvements et leur solde." },
    { term: "Immobilisation", cat: "comptable", def: "Élément destiné à servir durablement à l’activité. Il est inscrit à l’actif plutôt que comptabilisé immédiatement comme une charge, sous réserve de sa nature." },
    { term: "Impôt sur le revenu (IR)", cat: "fiscal", def: "Impôt applicable aux revenus des personnes physiques et à certaines entités non soumises à l’IS. Le barème général 2026 va de l’exonération à un taux marginal de 37 %." },
    { term: "Impôt sur les sociétés (IS)", cat: "fiscal", def: "Impôt sur le bénéfice fiscal des sociétés et organismes concernés. En 2026, les taux normaux comprennent notamment 20 %, 35 % à partir de 100 millions de dirhams de bénéfice net sous réserve d’exclusions, et 40 % pour certaines institutions financières." },
    { term: "Journal comptable", cat: "comptable", def: "Registre chronologique des écritures. Des journaux auxiliaires peuvent distinguer ventes, achats, banque, caisse et opérations diverses." },
    { term: "Lettrage", cat: "comptable", def: "Rapprochement des écritures qui se compensent dans un compte de tiers, par exemple une facture client et son règlement." },
    { term: "Lettre de mission", cat: "juridique", def: "Contrat qui définit les travaux confiés au professionnel, les responsabilités de chaque partie, les honoraires et les modalités d’intervention." },
    { term: "Liasse fiscale", cat: "fiscal", def: "Ensemble des états comptables et tableaux fiscaux transmis avec la déclaration du résultat fiscal selon le régime applicable." },
    { term: "Marge brute", cat: "finance", def: "Différence entre un chiffre d’affaires et les coûts directement associés selon la méthode retenue. Sa définition doit être précisée pour permettre une comparaison utile." },
    { term: "Passif", cat: "comptable", def: "Partie du bilan qui présente les capitaux propres, dettes de financement, passif circulant et trésorerie-passif." },
    { term: "Plan comptable général des entreprises (PCGE)", cat: "comptable", def: "Cadre marocain de classement et de fonctionnement des comptes utilisé par les entreprises relevant du CGNC." },
    { term: "Plus-value", cat: "fiscal", def: "Gain constaté ou réalisé lors de la sortie d’un actif ou d’un droit. Son traitement dépend de la nature de l’actif et du régime fiscal applicable." },
    { term: "Prorata de déduction TVA", cat: "fiscal", def: "Coefficient limitant la TVA déductible lorsqu’un assujetti réalise à la fois des opérations ouvrant et n’ouvrant pas droit à déduction." },
    { term: "Provision", cat: "comptable", def: "Montant constaté pour couvrir une dépréciation ou un risque défini. Sa déduction fiscale exige des conditions plus strictes que sa seule comptabilisation." },
    { term: "Rapprochement bancaire", cat: "comptable", def: "Comparaison du compte banque en comptabilité avec le relevé bancaire pour expliquer les écarts et identifier les opérations manquantes ou en transit." },
    { term: "Résultat fiscal", cat: "fiscal", def: "Résultat obtenu à partir du résultat comptable après réintégrations, déductions, reports et autres retraitements prévus par le CGI." },
    { term: "Retenue à la source", cat: "fiscal", def: "Impôt ou taxe prélevé par le payeur lors du versement d’un revenu ou d’une opération. La nature du revenu, les parties et parfois une convention fiscale déterminent le traitement." },
    { term: "SARL", cat: "juridique", def: "Société à responsabilité limitée. La responsabilité des associés est en principe limitée à leurs apports et la société tient une comptabilité détaillée." },
    { term: "SAS", cat: "juridique", def: "Société par actions simplifiée offrant une organisation statutaire souple dans le cadre de la législation marocaine. La rédaction des statuts est déterminante." },
    { term: "Solde", cat: "comptable", def: "Différence entre le total des débits et le total des crédits d’un compte à une date donnée." },
    { term: "Taxe professionnelle", cat: "fiscal", def: "Taxe locale liée à l’exercice d’une activité professionnelle. Son assiette repose notamment sur la valeur locative des éléments imposables selon la loi applicable." },
    { term: "Taxe sur la valeur ajoutée (TVA)", cat: "fiscal", def: "Impôt indirect sur certaines opérations réalisées au Maroc et à l’importation. Une opération doit être qualifiée comme hors champ, exonérée ou taxable avant de choisir un taux." },
    { term: "TVA collectée", cat: "comptable", def: "TVA facturée aux clients et portée au crédit des comptes de TVA correspondants, avant prise en compte des règles d’exigibilité et retenues éventuelles." },
    { term: "TVA déductible", cat: "comptable", def: "TVA sur achats susceptible d’être imputée sur la TVA due lorsque toutes les conditions du droit à déduction sont réunies." },
    { term: "Trésorerie", cat: "finance", def: "Disponibilités et concours de trésorerie à court terme. Une entreprise bénéficiaire peut néanmoins connaître une tension de trésorerie si ses clients paient tard." },
    { term: "Valeur ajoutée", cat: "finance", def: "Richesse créée par l’activité après déduction des consommations de biens et services provenant de tiers, selon la présentation retenue." },
    { term: "Valeur nette comptable (VNC)", cat: "comptable", def: "Valeur d’origine d’un actif diminuée des amortissements et dépréciations comptabilisés. Elle sert notamment à mesurer le résultat comptable d’une cession." }
  ];

  const labels = { fiscal: "Fiscal", comptable: "Comptable", social: "Social", juridique: "Juridique", finance: "Finance" };
  const search = document.querySelector("#glossary-search");
  const results = document.querySelector("#glossary-results");
  const count = document.querySelector("#glossary-count");
  const total = document.querySelector("#term-total");
  const buttons = [...document.querySelectorAll("[data-glossary-filter]")];
  if (!search || !results || !count || !total) return;

  let category = "all";
  const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

  function render() {
    const query = normalize(search.value.trim());
    const filtered = terms.filter((item) => {
      const categoryMatch = category === "all" || item.cat === category;
      const textMatch = !query || normalize(`${item.term} ${item.def} ${item.ex || ""}`).includes(query);
      return categoryMatch && textMatch;
    });
    count.textContent = `${filtered.length} notion${filtered.length === 1 ? "" : "s"} affichée${filtered.length === 1 ? "" : "s"}`;
    total.textContent = String(terms.length);
    results.innerHTML = filtered.length ? filtered.map((item) => `
      <article class="term-card" data-cat="${escape(item.cat)}">
        <div class="term-card-head"><h2>${escape(item.term)}</h2><span class="term-tag">${escape(labels[item.cat])}</span></div>
        <p>${escape(item.def)}</p>
        ${item.ex ? `<p class="term-example"><strong>Repère :</strong> ${escape(item.ex)}</p>` : ""}
      </article>`).join("") : '<div class="empty-state"><strong>Aucun terme trouvé.</strong><p>Essayez un mot plus court ou retirez le filtre.</p></div>';
  }

  search.addEventListener("input", render);
  buttons.forEach((button) => button.addEventListener("click", () => {
    category = button.dataset.glossaryFilter;
    buttons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  }));

  const applySuggestion = (value) => {
    search.value = value;
    search.dispatchEvent(new Event("input", { bubbles: true }));
    document.querySelector("#termes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => search.focus(), 450);
  };

  document.querySelectorAll("[data-glossary-suggestion]").forEach((button) => {
    button.addEventListener("click", () => applySuggestion(button.dataset.glossarySuggestion));
  });

  document.querySelectorAll("[data-hero-term]").forEach((button) => {
    button.addEventListener("click", () => applySuggestion(button.dataset.heroTerm));
  });
  render();
})();
