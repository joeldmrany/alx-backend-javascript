function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[0] = `income-${getCurrentYear()} : ${income}`;
  budget[1] = `gdp-${getCurrentYear()} : ${gdp}`;
  budget[2] = `capita-${getCurrentYear()} : ${capita}`;

  return budget;
}
