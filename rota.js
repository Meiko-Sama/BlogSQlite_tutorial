// Criação da biblioteca

const express = require("express");

const PORT = 3000; // Porta TCP do servidor HTTP da aplicação

const app = express();

const index = "<a href='/sobre'>Sobre< /a> <br> <a href='/info'>Info</a>";
const sobre = "Você está na página SOBRE  <br> <a href='/'>Voltar</a>";
const info = "Você está na página INFORMAÇÃO <br> <a href='/'>Voltar</a>";

// Método express.get necessita de dois parâmetros. Na ARROW FUNCTION, o primeiro
app.get("/", (req, res) => {
  res.send(index);
});

app.get("/sobre", (req, res) => {
  res.send(sobre);
});

app.get("/info", (req, res) => {
  res.send(info);
});

// O app.listen() precisa ser SEMPRE ser executado por último. (app.js)
app.listen(PORT, () => {
  console.log(`Servidor sendo executado na porta ${PORT}!`);
});
