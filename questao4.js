function calcularPercentualRepresentacao(faturamento) {
  let total = 0;

  // Calcula o faturamento total
  for (let estado in faturamento) {
    total += faturamento[estado];
  }

  // Calcula o percentual de representação de cada estado
  for (let estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}

//Faturamentos definidos
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

console.log("<<<<<<<<<<<<<<<<<<<<<Questão 4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
calcularPercentualRepresentacao(faturamento);
