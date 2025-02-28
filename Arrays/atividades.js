// **Soma dos N primeiros números**
//  - Crie uma função somaAteN(n) que recebe um número inteiro n e retorna a soma de todos os números de 1 até n.
//    - **Exemplo de uso:** somaAteN(5); // Retorna 15 (1+2+3+4+5)

//let soma (n = 0);

// let n = parseInt(prompt("Digite um número para a soma: "));
// let soma = 0;

// function somaAteN(n) {
//   for (let i = 0; i <= n; i++) {
//     soma += i;
//   }
//   console.log(`A soma dos números é de ${soma}`);
//   return soma;
// }

// somaAteN(n, soma);

function tabuada(numero) {
  let resultado = [];
  for (let i = 1; i < 11; i++) {
    resultado.push(i * numero);
  }
  return resultado;
}

const t = tabuada(9);

function media(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i];
  }
  console.log(`Comprimento da matriz ${matriz.length}`);
  return soma / matriz.length;
}

console.log(media(tabuada(4)));
