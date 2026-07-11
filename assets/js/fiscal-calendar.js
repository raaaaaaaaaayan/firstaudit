(() => {
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const shortMonths = ["JAN", "FÉV", "MAR", "AVR", "MAI", "JUN", "JUL", "AOÛ", "SEP", "OCT", "NOV", "DÉC"];
  const previousMonth = (month) => month === 1 ? "décembre 2025" : `${months[month - 2].toLowerCase()} 2026`;
  const events = [];

  for (let month = 1; month <= 12; month += 1) {
    events.push({ month, order: 10, date: `10 ${shortMonths[month - 1]}`, type: "social", title: "CNSS / Damancom", desc: `Déclaration des salaires et paiement des cotisations de ${previousMonth(month)}. Confirmer le jour ouvré et le mandat bancaire dans Damancom.`, employees: true });
    events.push({ month, order: 29, date: `FIN ${shortMonths[month - 1]}`, type: "ir", title: "IR retenu sur salaires", desc: `Versement, dans le mois suivant, des retenues opérées sur les salaires de ${previousMonth(month)} (CGI, art. 174-I).`, employees: true });
    events.push({ month, order: 30, date: `FIN ${shortMonths[month - 1]}`, type: "tva", title: "TVA mensuelle", desc: `Télédéclaration et paiement de la TVA de ${previousMonth(month)} avant l’expiration du mois (CGI, art. 110 et 176).`, vat: "monthly", profiles: ["societe", "independant"] });
  }

  [1, 4, 7, 10].forEach((month, index) => {
    const quarter = index === 0 ? "4e trimestre 2025" : `${index}er trimestre 2026`.replace("2er", "2e").replace("3er", "3e");
    events.push({ month, order: 30, date: `FIN ${shortMonths[month - 1]}`, type: "tva", title: "TVA trimestrielle", desc: `Télédéclaration et paiement du ${quarter} avant l’expiration du premier mois suivant le trimestre (CGI, art. 111 et 176).`, vat: "quarterly", profiles: ["societe", "independant"] });
    events.push({ month, order: 31, date: `FIN ${shortMonths[month - 1]}`, type: "ae", title: "Auto-entrepreneur", desc: `Déclaration du chiffre d’affaires encaissé du ${quarter} et versement correspondant (CGI, art. 82 bis).`, profiles: ["ae"] });
  });

  events.push(
    { month: 2, order: 28, date: "AV. 1 MAR", type: "ir", title: "État annuel des salaires", desc: "Déclaration des traitements et salaires versés en 2025 par l’employeur (CGI, art. 79).", employees: true },
    { month: 2, order: 28, date: "AV. 1 MAR", type: "ir", title: "IR global — revenus non professionnels", desc: "Déclaration du revenu global 2025 pour les titulaires de revenus autres que professionnels, selon leur situation (CGI, art. 82).", profiles: ["independant"] },
    { month: 3, order: 30, date: "31 MAR", type: "is", title: "Résultat fiscal et solde IS", desc: "Pour une clôture au 31 décembre : déclaration du résultat fiscal 2025, états annexes et liquidation du solde dans les trois mois de la clôture (CGI, art. 20 et 170).", profiles: ["societe"] },
    { month: 3, order: 31, date: "31 MAR", type: "is", title: "1er acompte provisionnel IS", desc: "Premier acompte de l’exercice calendaire 2026, en principe égal à 25 % de l’impôt de référence (CGI, art. 170).", profiles: ["societe"] },
    { month: 3, order: 32, date: "AV. 1 AVR", type: "ir", title: "CPU — déclaration annuelle", desc: "Déclaration du chiffre d’affaires 2025 du contribuable relevant de la contribution professionnelle unique (CGI, art. 82 quater).", profiles: ["independant"] },
    { month: 4, order: 29, date: "AV. 1 MAI", type: "ir", title: "IR global — revenus professionnels", desc: "Déclaration du revenu global 2025 pour les titulaires de revenus professionnels au résultat net réel ou simplifié (CGI, art. 82).", profiles: ["independant"] },
    { month: 6, order: 29, date: "30 JUN", type: "is", title: "2e acompte provisionnel IS", desc: "Deuxième acompte pour une société dont l’exercice a ouvert le 1er janvier (CGI, art. 170).", profiles: ["societe"] },
    { month: 6, order: 30, date: "30 JUN", type: "is", title: "Approbation des comptes", desc: "Repère de six mois après la clôture pour l’assemblée annuelle d’une société clôturant au 31 décembre. Vérifier la forme sociale et les statuts.", profiles: ["societe"] },
    { month: 9, order: 30, date: "30 SEP", type: "is", title: "3e acompte provisionnel IS", desc: "Troisième acompte pour une société dont l’exercice a ouvert le 1er janvier (CGI, art. 170).", profiles: ["societe"] },
    { month: 12, order: 30, date: "31 DÉC", type: "is", title: "4e acompte provisionnel IS", desc: "Quatrième acompte pour une société dont l’exercice a ouvert le 1er janvier (CGI, art. 170).", profiles: ["societe"] }
  );

  const profile = document.querySelector("#calendar-profile");
  const vat = document.querySelector("#calendar-vat");
  const employees = document.querySelector("#calendar-employees");
  const reset = document.querySelector("#calendar-reset");
  const grid = document.querySelector("#calendar-grid");
  const count = document.querySelector("#calendar-count");
  if (!profile || !vat || !employees || !reset || !grid || !count) return;

  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
  const visible = (event) => {
    if (event.profiles && profile.value !== "all" && !event.profiles.includes(profile.value)) return false;
    if (event.vat && vat.value !== "all" && event.vat !== vat.value) return false;
    if (event.vat && vat.value === "none") return false;
    if (event.employees && employees.value !== "yes") return false;
    return true;
  };

  function render() {
    let total = 0;
    grid.innerHTML = months.map((name, index) => {
      const monthEvents = events.filter((event) => event.month === index + 1 && visible(event)).sort((a, b) => a.order - b.order);
      total += monthEvents.length;
      const isCurrent = new Date().getFullYear() === 2026 && new Date().getMonth() === index;
      return `<article class="month-card${isCurrent ? " is-current" : ""}"><div class="month-card-head"><h2>${escape(name)}</h2><span>${isCurrent ? "Ce mois · " : ""}${monthEvents.length} repère${monthEvents.length === 1 ? "" : "s"}</span></div><div class="deadline-list">${monthEvents.length ? monthEvents.map((event) => `<div class="deadline-item" data-type="${escape(event.type)}"><div class="deadline-date">${escape(event.date)}</div><div class="deadline-copy"><strong>${escape(event.title)}</strong><span>${escape(event.desc)}</span></div></div>`).join("") : '<div class="empty-state">Aucune échéance avec ces filtres.</div>'}</div></article>`;
    }).join("");
    count.textContent = `${total} échéance${total === 1 ? "" : "s"} principale${total === 1 ? "" : "s"} affichée${total === 1 ? "" : "s"}`;
  }

  [profile, vat, employees].forEach((field) => field.addEventListener("change", render));
  reset.addEventListener("click", () => {
    profile.value = "societe";
    vat.value = "monthly";
    employees.value = "yes";
    render();
  });
  render();
})();
