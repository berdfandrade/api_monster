
import itens from "./obj.js";

function gerarDrop() {
    
  const itensDrop = itens
  const quantidade = Math.floor(Math.random() * 5) + 1;
  const dropItens = {};

  for (let i = 0; i < quantidade; i++) {
    const keys = Object.keys(itensDrop);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    dropItens[randomKey] = itensDrop[randomKey];
  }

  return dropItens;
}

export default gerarDrop;
