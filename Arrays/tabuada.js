function tabuada(numero) {
  let resultado = [];
  for (let i = 1; i < 11; i++) {
    resultado.push(i * numero);
  }
  return resultado;
}

let x = tabuada(10);
console.log(x);
