function tabuada(numero) {
  let resultado = [];
  for (let i = 1; i < 11; i++) {
    // console.log(i*numero)
    resultado.push(i * numero);
  }
  return resultado;
}

// let x = tabuada(10);
// console.log(x);

let x10 = tabuada(10);
let x3 = tabuada(3);

// Multiplicar o elemento i de x10 com o elemento i de x3
// for (let i = 0; i < 10; i++) {
//   console.log(x10[i] * x3[i]);
// }

// for (let i = 0; i < 10; i++) {
//   for (let j = 9; j >= 0; j--) {
//     console.log(x10[i] * x3[j]);
//   }
//   console.log();
// }

// Multiplicar o elemento 0 de x10 com o elemento 9 de x3

// let el1 = x10[0] * x3[9];
// let el2 = x10[1] * x3[8];
// let el3 = x10[2] * x3[7];
// let el4 = x10[3] * x3[6];

for (let i = 0; i < 10; i++) {
  //   console.log(x10[i], "X", x3[9 - i], "=", x10[i] * x3[9 - i]);
  console.log(`${x10[i]} *  ${x3[9 - i]} = ${x10[i] * x3[9 - i]}`);
}
