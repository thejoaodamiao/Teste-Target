function inverterStr(str) {
  // Criando uma variável para armazenar a string invertida
  let strInvertida = "";

  // Percorrendo a string de trás para frente e concatenando os caracteres na variável strInvertida
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }
  return strInvertida;
}

// Definindo a string a ser invertida
const str = "hello world";

// Imprimindo a string invertida no console
console.log("<<<<<<<<<<<<<<<<<<<<<Questão 5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(inverterStr(str));
