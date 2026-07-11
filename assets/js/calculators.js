(function (global) {
  'use strict';

  const IR_BRACKETS_2026 = [
    { limit: 40000, rate: 0 },
    { limit: 60000, rate: 0.10 },
    { limit: 80000, rate: 0.20 },
    { limit: 100000, rate: 0.30 },
    { limit: 180000, rate: 0.34 },
    { limit: Infinity, rate: 0.37 }
  ];

  function clampNumber(value, min = 0, max = Infinity) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return min;
    return Math.min(Math.max(parsed, min), max);
  }

  function progressiveTax(base, brackets) {
    let tax = 0;
    let previous = 0;
    const taxableBase = Math.max(0, base);

    for (const bracket of brackets) {
      if (taxableBase <= previous) break;
      const slice = Math.min(taxableBase, bracket.limit) - previous;
      tax += slice * bracket.rate;
      previous = bracket.limit;
    }
    return tax;
  }

  function calculateSalary2026({ monthlyGross, dependants = 0 }) {
    const gross = clampNumber(monthlyGross);
    const familyCount = Math.trunc(clampNumber(dependants, 0, 6));
    const annualGross = gross * 12;
    const monthlyCnss = Math.min(gross, 6000) * 0.0448;
    const monthlyAmo = gross * 0.0226;
    const professionalRate = annualGross <= 78000 ? 0.35 : 0.25;
    const professionalExpenses = annualGross <= 78000
      ? annualGross * professionalRate
      : Math.min(annualGross * professionalRate, 35000);
    const annualTaxableIncome = Math.max(
      0,
      annualGross - (monthlyCnss * 12) - (monthlyAmo * 12) - professionalExpenses
    );
    const annualIrBeforeFamily = progressiveTax(annualTaxableIncome, IR_BRACKETS_2026);
    const annualFamilyReduction = Math.min(annualIrBeforeFamily, familyCount * 600);
    const annualIr = Math.max(0, annualIrBeforeFamily - annualFamilyReduction);
    const monthlyIr = annualIr / 12;
    const monthlyNet = gross - monthlyCnss - monthlyAmo - monthlyIr;

    return {
      monthlyGross: gross,
      annualGross,
      monthlyCnss,
      monthlyAmo,
      professionalRate,
      annualProfessionalExpenses: professionalExpenses,
      annualTaxableIncome,
      annualIrBeforeFamily,
      annualFamilyReduction,
      annualIr,
      monthlyIr,
      monthlyNet,
      dependants: familyCount
    };
  }

  function solidarityRate(profit) {
    if (profit < 1000000) return 0;
    if (profit < 5000000) return 0.015;
    if (profit < 10000000) return 0.025;
    if (profit < 40000000) return 0.035;
    return 0.05;
  }

  function calculateCorporateTax2026({
    taxableProfit,
    companyType = 'standard',
    continuation35 = false,
    cmStandardBase = 0,
    cmReducedBase = 0,
    cmExempt = false,
    solidarityExempt = false
  }) {
    const profit = clampNumber(taxableProfit);
    const standardBase = clampNumber(cmStandardBase);
    const reducedBase = clampNumber(cmReducedBase);
    let isRate;

    if (companyType === 'credit') isRate = 0.40;
    else if (companyType === 'cfc-zai') isRate = 0.20;
    else if (profit >= 100000000 || continuation35) isRate = 0.35;
    else isRate = 0.20;

    const corporateTax = profit * isRate;
    const calculatedMinimumContribution = (standardBase * 0.0025) + (reducedBase * 0.0015);
    const minimumContribution = cmExempt ? 0 : Math.max(3000, calculatedMinimumContribution);
    const baseTaxDue = Math.max(corporateTax, minimumContribution);
    const cssRate = solidarityExempt ? 0 : solidarityRate(profit);
    const solidarityContribution = profit * cssRate;

    return {
      taxableProfit: profit,
      isRate,
      corporateTax,
      calculatedMinimumContribution,
      minimumContribution,
      baseTaxDue,
      cssRate,
      solidarityContribution,
      totalBeforeCredits: baseTaxDue + solidarityContribution,
      cmExempt: Boolean(cmExempt)
    };
  }

  function calculateVat({ amount, rate, mode = 'ht' }) {
    const inputAmount = clampNumber(amount);
    const vatRate = clampNumber(rate, 0, 1);
    if (mode === 'ttc') {
      const excludingTax = inputAmount / (1 + vatRate);
      return {
        mode,
        rate: vatRate,
        excludingTax,
        vat: inputAmount - excludingTax,
        includingTax: inputAmount
      };
    }
    const vat = inputAmount * vatRate;
    return {
      mode: 'ht',
      rate: vatRate,
      excludingTax: inputAmount,
      vat,
      includingTax: inputAmount + vat
    };
  }

  function calculateWithholding({ grossAmount, rate }) {
    const gross = clampNumber(grossAmount);
    const withholdingRate = clampNumber(rate, 0, 1);
    const withholding = gross * withholdingRate;
    return {
      grossAmount: gross,
      rate: withholdingRate,
      withholding,
      netPayable: gross - withholding
    };
  }

  function money(value) {
    return new Intl.NumberFormat('fr-MA', {
      style: 'currency',
      currency: 'MAD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  function percent(value) {
    return new Intl.NumberFormat('fr-MA', {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(value);
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function initSalaryCalculator() {
    const form = document.getElementById('salary-calculator');
    if (!form) return;

    const update = () => {
      const result = calculateSalary2026({
        monthlyGross: form.elements.monthlyGross.value,
        dependants: form.elements.dependants.value
      });
      setText('salary-net', money(result.monthlyNet));
      setText('salary-gross', money(result.monthlyGross));
      setText('salary-cnss', money(result.monthlyCnss));
      setText('salary-amo', money(result.monthlyAmo));
      setText('salary-ir', money(result.monthlyIr));
      setText('salary-taxable', money(result.annualTaxableIncome));
      setText('salary-expenses', `${money(result.annualProfessionalExpenses)} (${percent(result.professionalRate)})`);
      setText('salary-family', money(result.annualFamilyReduction));
    };

    form.addEventListener('input', update);
    form.addEventListener('submit', (event) => { event.preventDefault(); update(); });
    update();
  }

  function initCorporateCalculator() {
    const form = document.getElementById('corporate-calculator');
    if (!form) return;

    const continuationField = document.getElementById('continuation-field');
    const update = () => {
      const result = calculateCorporateTax2026({
        taxableProfit: form.elements.taxableProfit.value,
        companyType: form.elements.companyType.value,
        continuation35: form.elements.continuation35.checked,
        cmStandardBase: form.elements.cmStandardBase.value,
        cmReducedBase: form.elements.cmReducedBase.value,
        cmExempt: form.elements.cmExempt.checked,
        solidarityExempt: form.elements.solidarityExempt.checked
      });

      if (continuationField) {
        continuationField.hidden = form.elements.companyType.value !== 'standard'
          || clampNumber(form.elements.taxableProfit.value) >= 100000000;
      }
      setText('corporate-total', money(result.totalBeforeCredits));
      setText('corporate-rate', percent(result.isRate));
      setText('corporate-is', money(result.corporateTax));
      setText('corporate-cm', money(result.minimumContribution));
      setText('corporate-base-due', money(result.baseTaxDue));
      setText('corporate-css-rate', percent(result.cssRate));
      setText('corporate-css', money(result.solidarityContribution));
    };

    form.addEventListener('input', update);
    form.addEventListener('change', update);
    form.addEventListener('submit', (event) => { event.preventDefault(); update(); });
    update();
  }

  function initVatCalculator() {
    const form = document.getElementById('vat-calculator');
    if (!form) return;
    const update = () => {
      const result = calculateVat({
        amount: form.elements.amount.value,
        rate: Number(form.elements.rate.value) / 100,
        mode: form.elements.mode.value
      });
      setText('vat-ht', money(result.excludingTax));
      setText('vat-tax', money(result.vat));
      setText('vat-ttc', money(result.includingTax));
      setText('vat-rate', percent(result.rate));
    };
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    form.addEventListener('submit', (event) => { event.preventDefault(); update(); });
    update();
  }

  function initWithholdingCalculator() {
    const form = document.getElementById('withholding-calculator');
    if (!form) return;
    const update = () => {
      const result = calculateWithholding({
        grossAmount: form.elements.grossAmount.value,
        rate: Number(form.elements.rate.value) / 100
      });
      setText('withholding-gross', money(result.grossAmount));
      setText('withholding-rate', percent(result.rate));
      setText('withholding-tax', money(result.withholding));
      setText('withholding-net', money(result.netPayable));
    };
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    form.addEventListener('submit', (event) => { event.preventDefault(); update(); });
    update();
  }

  const api = {
    IR_BRACKETS_2026,
    progressiveTax,
    calculateSalary2026,
    calculateCorporateTax2026,
    solidarityRate,
    calculateVat,
    calculateWithholding
  };

  global.FirstAuditCalculators = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      initSalaryCalculator();
      initCorporateCalculator();
      initVatCalculator();
      initWithholdingCalculator();
    });
  }
})(typeof window !== 'undefined' ? window : globalThis);
