let numero = parseInt(prompt("Digite um número primo: "));

function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    7 % 2 === 0;
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(ehPrimo(numero));

let n = parseInt(prompt("Digite um número: "));

function contagemRegressiva(n) {
  let contagem = [];
  for (let i = n; i >= 0; i--) {
    console.log("A contagem é: ", i);
    contagem.push(i);
  }
  return contagem;
}
console.log(contagemRegressiva(n));

let frase = prompt("Por favor digite a frase para ser invertida: ");
let fraseInvertida = "";

function invertePalavra(frase) {
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida = fraseInvertida + frase[i];
  }
  return fraseInvertida;
}

console.log(invertePalavra(frase));

// A variavel frase serve aqui para armazenar a frase que o usuário escreveu, enquanto a variável fraseInvertida ela armazena uma string vazia. Utilizamos a função inverteFrase para contar os carcateres que tem na palavra, por isso utilizamos i (indice/index) e o .length(ira contar quantos caracteres tem na palavra). O -1 serve para transformar ele em indice, então em vez de ser 1,2,3,4 e 5 se transforma em 0, 1, 2, 3 e 4. Assim fazemos uma conta, onde fraseInvertida + frase e o indice dela é igual a frase invertida.
