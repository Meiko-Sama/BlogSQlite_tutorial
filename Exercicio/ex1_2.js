// Para usar o prompt no node-js é preciso instalar esse lib 'prompt-sync'

let prompt = require("prompt-sync");
prompt = prompt();

// ---------------------------- !Caucular Desconto! ------------------------------------------------

// Os LET'S abaixos, estão sendo utilizados para armazenar duas variáveis, o preço e o desconto. Além de armazenar essas
// variáveis, está mandando um prompt com as mensagens de digitar o preço e o valor do desconto que o usuário quer
// calcular.

// let preco = parseFloat(prompt("Digite o valor do produto: "));
// let desc = parseFloat(prompt("Digite o desconto: "));

// A função é bem simples, estamos armazenando pelo CONST uma variavel chamada resultado, onde dentro dela está o calculo
// de como fazemos o desconto de um produto. Então no momento que o usuário colocar valor nasvariáveis PRECO e DESC, a
// variável RESULTADO vai substituir as váriaveis LET e colocar os valores que o usuário colocou e vai calcular o resultado
// da conta. No final existe um console.log que voltará o valor para usuário para mostrar qual foi o resultado da conta.

// function calcDesc(preco, desc) {
//   const resultado = preco - (preco * desc) / 100;
//   console.log("O valor com desconto é: ", resultado);

//   // console.log(`O valor com desconto é R$${resultado.toFixed(2)}`);
// }

// calcDesc(preco, desc);

// --------------- Temperatura Celsiu para Fahrenheit ---------------------------------------------------

// Os LET abaixo, esta sendo utilizado para armazenar uma variável, CELSIUS. Além de armazenar essa variável, está
// mandando um prompt com a mensagem de digitar o valor da temperatura EM CELSIUS para transformar esse graus Celsius em
// Fahrenheit

// let celsius = parseFloat(prompt(`Digite a temperatura em celsius: `));

// Essa função está pegando o valor em graus celsius que o usuário digitou, utilizando a const F (fahrenheit) para
// tranformar em graus Fahrenheit.O console.log está sendo utilizado para enviar ao usuário o resultado do calculo.

// function calcular() {
//     const fahrenheit = ( celsius * 9 /5 ) + 32;
//     console.log("O valor de Celsius para Fahrenheit é ", fahrenheit);
// }

// calcular(celsius);

// -------------------------  Juros Simples -----------------------------------------------------

// Existem três LET'S sendo utilizado para armazenar, CALCJUROS em que o usuário colocará o valor da conta desejada, TAXA em
// que o usuário deve inserir que obrigatoriamente deve ser em decimal (EXEMPLO: 0.05) e por último a de tempo que é a
// quantidade de tempo que a conta venceu.

let calcJuros = parseFloat(prompt(`Digite o valor da conta: `));
let taxa = parseFloat(prompt(`Digite a taxa: `));
let tempo = parseFloat(prompt(`Digite o tempo: `));

// A função também tem uma variável chamada conta, em que vai substituir as váriaveis Let pelo valor que o usuário inseriu
// e vai calcular o valor dos juros simples, além de retornar através do console.log e RETURN o valor da conta.

function Juros() {
  const conta = calcJuros * taxa * tempo;
  console.log("O juros é igual á: ", conta);
}

Juros(calcJuros, taxa, tempo);

// --------------------- Numeros maior, menor ou igual ------------------------------------------------------

// Essa aqui é um pouco diferente, nos LET'S vamos armazenar dois números e comparar qual deles é maior. A let num1 vai
// ser o primeiro número que o usuário vai digitar, enquanto num2 vai ser o segundo número que ela vai digitar.

// let num1 = parseFloat(prompt(`Digite o primeiro valor: `));
// let num2 = parseFloat(prompt(`Digite o segundo valor: `));

// Em vez de armazenar uma variável CONST, vamos utilizar o parâmetro IF (Se...), o primeiro IF diz que se o número 1 for
// MAIOR que o numero 2 ele vai mandar um prompt dizendo que o "valor número 1 é maior que o valor  número 2". ELSE IF
// (SENÃO SE...) o número 1 for menor que o número 2 vai mandar um prompt dizendo que "o valor número 2 é maior que o
// valor número 1". Ou ELSE (SENÃO), "Os dois valores são iguais". E depois ele volta a mensagem para o usuário.

// function maiorNumero(num1, num2) {
//     if (num1 > num2) {
//         console.log("O primeiro valor é maior que o segundo valor!");
//     } else if (num1 < num2) {
//         console.log("O segundo valor é maior que o primeiro valor!");
//     } else {
//         console.log("Os dois números são iguais");
//     }
// }

// maiorNumero(num1, num2);

// -------------------------- Classificacao -----------------------------------------------------

// O LET utilizado aqui é para armazenar a idade inserida pelo usuário.

// let idade = parseInt(prompt(`Digite a sua idade: `));

// Essa função utilizará IF, ELSE IF e ELSE para classificar se ele é uma crianca, adolescente ou adulto. No IF, se a
// variável IDADE for menor que 12 mandará um prompt dizendo que é "Crianca". No ELSE IF, se a variável IDADE for menor
// que 18 mandará um prompt dizendo que é "Adolescente". No ELSE , se a variável IDADE for MAIOR que 18 mandará um prompt
// dizendo que é "Adulto".

// function classificacao(idade) {
//     if (idade < 12) {
//         console.log("Criança");
//     } else if (idade < 18) {
//         console.log("Adolescente");
//     } else {
//         console.log("Adulto");
//     }
// }

// classificacao(idade);

// ----------------------------- Notas -----------------------------------------------------

// O LET está guardando a variável validNota, onde o usuário vai inserir o valor da nota.

// let validNota = parseFloat(prompt("Digite o valor da nota: "))

// A função também utiliza IF e ELSE, mas usamos novos parâmetros o && (e). Se a nota for MAIOR e IGUAL a 0 E for MENOR
// e IGUAL a 10 a nota é válida (true), se não cumprir esses parâmetros ele invalida(false) a nota. (OBS: A nota deve ser
// em número inteiro, não pode ser em decimal).

// function nota(validNota) {
//     if (validNota >=0 && validNota <=10) {
//         return True
//     } else {
//         return false
//     }
// }

// validNota(nota);

// -------------------------------- Media -----------------------------------------------------

//Existem duas variáveis, verifyMedia e verifyFalta, ela armazena a média do usuário e aquantidade a falta.

// let verifyMedia = parseFloat(prompt(`Digite sua média: `));
// let verifyFalta = parseFloat(prompt(`Digite a quantidade de falta: `));

// A função utiliza IF e ELSE, SE a média for MAIOR e IGUAL a 7 E for MENOR e IGUAL a 10, mas também a FALTA for menor que
// 25% ele manda um prompt que o usuário está aprovado, SE NÃO o usuário é DESAPROVADO.

// function aprovacao(verifyMedia) {
//     if (verifyMedia >=7 && verifyMedia <=10 && verifyFalta < 25) {
//         console.log("Aprovado");
//     } else {
//         console.log("Desaprovado");
//     }
// }

// aprovacao(verifyMedia, verifyFalta);

// ------------------------------------ Intervalo ---------------------------------------------------

// Existem 3 LET'S VALOR, MIN e MAX. O usuário digitará o VALOR que estará entre o intervalo, depois o intervalo MINIMO e
// depois o intervalo MAXIMO.

// let valor = parseFloat(prompt(`Digite o valor desejado: `));
// let min = parseFloat(prompt(`Digite o valor minimo: `));
// let max = parseFloat(prompt(`Digite o valor maximo: `));

// Na function também utilizamos IF e ELSE, SE o valor que o usuário digitar for MAIOR ou IGUAL o valor mínimo do intervalo
// E for MENOR e IGUAL ao valor máximo do intervalo, o valor é válido. SE NÃO o valor está invalido.

// function intervalo(valor, min, max) {
//     if(valor >= min && valor <= max) {
//         console.log("Valor está validado");
//     } else {
//         console.log("Valor está invalido");
//     }
// }

// intervalo(valor, min, max);

// -------------------------------- Usuarios Admin ---------------------------------------------

// Nós armazenamos duas variáveis onde o usuário digitará o nome do usuário (USER) que deseja entrar e a senha do usuário (senha).

// let user = prompt(`Digite o usuario: `);
// let senha = parseFloat(prompt(`Digite a senha: `));

// Nessa atividade a pessoa só será aprovada SE o nome do usuário(USER) for IGUAL á "admin" (tudo em minúsculo) e a senha
// for IGUAL"1234", SE NÃO for igualzinho ele não terá autorização para entrar

// function login(user, senha) {
//     if(user === "admin" && senha === 1234) {
//         console.log("Login efetuado");
//     } else {
//         console.log("Não autorizado");
//     }
// }

// login(user, senha);
