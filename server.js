import express from "express";
import gerarMonstro from "./monstro.js";
import cors from 'cors'
const app = express();

app.use(express());
app.use(cors())


app.get("/", (req, res) => {
  res.send({"Mensagem" : "Use a rota /monstro, para gerar um monstro!"});
});

app.get("/monstro", (req, res) => {
  const monstroGerado = gerarMonstro();
  res.send(monstroGerado);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
