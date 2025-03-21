/* INICIAR UM PROJETO NO NODE JS

npm init - Digite na "raiz" do projeto, serve para iniciar o projeto 

npm install ou npm i - são as instalações das bibliotecas do node onde ele chama de 'MODULE'

O npm init cria o arquivo chamado "package.json", este arquivo é usado pelo npm/node
para 'administrar' os módulos/bibliotecas/libs do projeto.

Para usar um projeto que usa o node, é só fazer download do projeto, abrir um terminal
ir para a porta do projeto e digitar esse comando "npm instal" sem parâmetro, neste 
processo o npm irá localizar o arquivo e vai instalar todas as dependências do projeto. 
Para rodar o projeto, após instalar as dependências, na raiz do projeto, digite: 
"node (arquivo do projeto).js"

--- GIT ---

 git clone <link do repositorio>

 Caso já exista uma pasta com o nome do repositorio e esta pasta esteja vazia, o cloneirá ser feito,
 caso a pasta contenha algum arquivo , o 'git clone' não ira funcionar, para este caso digite:
 "git clone <nome do repositorio> nome da pasta" onde "nome da pasta" precisa ser diferente da
 pasta do repositorio. Por padrão o git cria a pasta com o nome do repositorio

*/

// Criação da biblioteca

const express = require("express"); // importa livraria do EXPRESS
const sqlite3 = require("sqlite3"); // importa livraria do sqlite3

const PORT = 3000; // Porta TCP do servidor HTTP da aplicação

const app = express(); // Instância para o uso do EXPRESS

const db = new sqlite3.Database("user.db"); // Instância para o uso do SQlite3
db.serialize(() => {
  // Este método permite enviar comandos SQL em modo 'SEQUENCIAL'
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
  );
});

// Cria conexão com o banco de dados

const index =
  "<a href='/home'>Home</a> <br><a href='/sobre'>Sobre</a> <br> <a href='/login'>Login</a> <br> <a href='/cadastro'>Cadastro</a>";
const home = "Você está na página HOME <br> <a href='/'>Voltar</a>";
const sobre = "Você está na página SOBRE  <br> <a href='/'>Voltar</a>";
const login = "Você está na página de LOGIN <br> <a href='/'>Voltar</a>";
const cadastro = "Você está na página de CADASTRO  <br> <a href='/'>Voltar</a>";

// Método express.get necessita de dois parâmetros. Na ARROW FUNCTION, o
// primeiro são os dados do servidor (REQUISITION - 'req') o segundo, são os
// dados que serão enviados ao cliente (RESULT - 'res')

app.get("/", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:3000/
  res.send(index);
});

app.get("/home", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:3000/hom
  res.send(home);
});

app.get("/sobre", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:3000/sobre
  res.send(sobre);
});

app.get("/login", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:3000/login
  res.send(login);
});

app.get("/cadastro", (req, res) => {
  // Rota raiz do meu servidor, acesse o browser com o endereço http://localhost:3000/cadastro
  res.send(cadastro);
});

// O app.listen() precisa ser SEMPRE ser executado por último. (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
