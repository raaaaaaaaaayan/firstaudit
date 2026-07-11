const assert = require('node:assert/strict');
const {
  calculateSalary2026,
  calculateCorporateTax2026,
  solidarityRate,
  calculateVat,
  calculateWithholding
} = require('../assets/js/calculators.js');

const closeTo = (actual, expected, tolerance = 0.001) => {
  assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} ≠ ${expected}`);
};

{
  const result = calculateSalary2026({ monthlyGross: 10000, dependants: 4 });
  closeTo(result.monthlyCnss, 268.8);
  closeTo(result.monthlyAmo, 226);
  closeTo(result.annualProfessionalExpenses, 30000);
  closeTo(result.annualTaxableIncome, 84062.4);
  closeTo(result.annualIrBeforeFamily, 7218.72);
  closeTo(result.annualFamilyReduction, 2400);
  closeTo(result.monthlyIr, 401.56);
  closeTo(result.monthlyNet, 9103.64);
}

{
  const result = calculateSalary2026({ monthlyGross: 5000, dependants: 0 });
  closeTo(result.monthlyCnss, 224);
  closeTo(result.monthlyAmo, 113);
  closeTo(result.annualProfessionalExpenses, 21000);
  closeTo(result.annualIr, 0);
  closeTo(result.monthlyNet, 4663);
}

{
  const result = calculateSalary2026({ monthlyGross: 30000, dependants: 0 });
  closeTo(result.annualProfessionalExpenses, 35000);
  closeTo(result.annualTaxableIncome, 313638.4);
  closeTo(result.monthlyIr, 7387.184, 0.001);
  closeTo(result.monthlyNet, 21666.016, 0.001);
}

{
  const result = calculateCorporateTax2026({
    taxableProfit: 2000000,
    cmStandardBase: 12000000
  });
  closeTo(result.isRate, 0.20);
  closeTo(result.corporateTax, 400000);
  closeTo(result.minimumContribution, 30000);
  closeTo(result.solidarityContribution, 30000);
  closeTo(result.totalBeforeCredits, 430000);
}

{
  const result = calculateCorporateTax2026({ taxableProfit: 100000000 });
  closeTo(result.isRate, 0.35);
  closeTo(result.corporateTax, 35000000);
  closeTo(result.solidarityContribution, 5000000);
}

{
  const result = calculateCorporateTax2026({
    taxableProfit: 5000000,
    continuation35: true,
    cmStandardBase: 0
  });
  closeTo(result.isRate, 0.35);
  closeTo(result.minimumContribution, 3000);
  closeTo(result.cssRate, 0.025);
}

{
  const loss = calculateCorporateTax2026({ taxableProfit: 0, cmStandardBase: 0 });
  closeTo(loss.minimumContribution, 3000);
  closeTo(loss.baseTaxDue, 3000);
  const exempt = calculateCorporateTax2026({ taxableProfit: 0, cmExempt: true });
  closeTo(exempt.minimumContribution, 0);
  closeTo(exempt.baseTaxDue, 0);
}

assert.equal(solidarityRate(999999.99), 0);
assert.equal(solidarityRate(1000000), 0.015);
assert.equal(solidarityRate(5000000), 0.025);
assert.equal(solidarityRate(10000000), 0.035);
assert.equal(solidarityRate(40000000), 0.05);

{
  const fromHt = calculateVat({ amount: 10000, rate: 0.20, mode: 'ht' });
  closeTo(fromHt.excludingTax, 10000);
  closeTo(fromHt.vat, 2000);
  closeTo(fromHt.includingTax, 12000);
  const fromTtc = calculateVat({ amount: 12000, rate: 0.20, mode: 'ttc' });
  closeTo(fromTtc.excludingTax, 10000);
  closeTo(fromTtc.vat, 2000);
}

{
  const result = calculateWithholding({ grossAmount: 25000, rate: 0.10 });
  closeTo(result.withholding, 2500);
  closeTo(result.netPayable, 22500);
}

console.log('Calculator tests passed');
