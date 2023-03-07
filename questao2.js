function buscarNum(numeroBuscado) {
  // Define as variáveis de início da sequência
  let valorAnterior = 0;
  let valorAtual = 1;

  // Loop para gerar os próximos valores da sequência
  while (valorAtual <= numeroBuscado) {
    // Verifica se o número buscado está na sequência
    if (valorAtual === numeroBuscado) {
      console.log(
        `O número ${numeroBuscado} pertence à sequência de Fibonacci!`
      );
      break;
    }

    // Gera o próximo valor da sequência
    const proximoValor = valorAnterior + valorAtual;
    valorAnterior = valorAtual;
    valorAtual = proximoValor;
  }

  // Caso o número não esteja na sequência
  if (valorAtual > numeroBuscado) {
    console.log(
      `O número ${numeroBuscado} não pertence à sequência de Fibonacci.`
    );
  }
}

// Define o número a ser buscado na sequência
const numeroBuscado = 13;

console.log("<<<<<<<<<<<<<<<<<<<<<Questão 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
buscarNum(numeroBuscado);
