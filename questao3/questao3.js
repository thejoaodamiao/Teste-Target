fetch("questao3/dados.json")
  .then((response) => response.json())
  .then((data) => {
    // Aqui, a variável 'data' contém o objeto JSON carregado do arquivo 'faturamento.json'
    // Agora você pode manipular os dados como desejar

    // Acessando o faturamento diário de cada dia do mês
    let faturamentoDiario = [];
    for (let i = 0; i < data.length; i++) {
      faturamentoDiario.push(data[i].valor);
    }

    let faturamentoSemZeros = faturamentoDiario.filter((valor) => valor !== 0);

    // Criando variáveis para armazenar o menor e maior faturamento e a soma do faturamento diário
    let menorFaturamento = faturamentoSemZeros[0];
    let maiorFaturamento = faturamentoSemZeros[0];
    let somaFaturamento = 0;

    // Percorrendo o faturamento diário para encontrar o menor e o maior valor
    for (let i = 0; i < faturamentoSemZeros.length; i++) {
      const valor = faturamentoSemZeros[i];

      if (valor < menorFaturamento) {
        menorFaturamento = valor;
      }

      if (valor > maiorFaturamento) {
        maiorFaturamento = valor;
      }

      somaFaturamento += valor;
    }

    // Calculando a média mensal do faturamento
    const mediaFaturamento = somaFaturamento / faturamentoDiario.length;

    // Calculando o número de dias em que o faturamento diário foi superior à média mensal
    let diasAcimaDaMedia = 0;

    for (let i = 0; i < faturamentoDiario.length; i++) {
      const valor = faturamentoDiario[i];

      if (valor > mediaFaturamento) {
        diasAcimaDaMedia++;
      }
    }

    // Exibindo os resultados
    console.log(
      "<<<<<<<<<<<<<<<<<<<<<Questão 3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    );
    console.log(`Menor faturamento diário: R$${menorFaturamento}`);
    console.log(`Maior faturamento diário: R$${maiorFaturamento.toFixed(2)}`);
    console.log(
      `Número de dias com faturamento diário acima da média mensal: ${diasAcimaDaMedia}`
    );
  })
  .catch((error) => console.error(error));

// Calcular o menor valor de faturamento diário
