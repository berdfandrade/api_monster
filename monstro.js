import gerarDrop from "./itens.js";

class Monstro {
  constructor(nome, ataque, defesa, temperamento, level, hp, stamina, especie, itens) {
    this.nome = nome;
    this.ataque = ataque;
    this.defesa = defesa;
    this.temperamento = temperamento;
    this.level = level;
    this.hp = hp;
    this.stamina = stamina;
    this.especie = especie;
    this.itens = itens
  }
}

function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function gerarNomeMonstro() {
  const vogais = ["a", "e", "i", "o", "u"];
  const consoantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var nomeMonstro = "";

  var tamanhoNome = Math.floor(Math.random() * 3) + 2;

  for (let i = 0; i < tamanhoNome; i++) {
    if (Math.random() < 0.5) {
      nomeMonstro += consoantes[Math.floor(Math.random() * consoantes.length)];
    }
    nomeMonstro += vogais[Math.floor(Math.random() * vogais.length)];
  }

  return capitalizar(nomeMonstro);
}

function escolherEspecieMonstro() {
  const especies = [
    "Dragão",
    "Ogro",
    "Espectro",
    "Gigante",
    "Vampiro",
    "Quimera",
    "Goblin",
    "Minotauro",
    "Gárgula",
    "Sereia",
    "Lobisomem",
    "Cíclope",
    "Kraken",
    "Elemental",
    "Harpia",
    "Grifo",
    "Basilisco",
    "Centauro",
    "Succubus",
    "Yeti",
  ];

  const randomIndex = Math.floor(Math.random() * especies.length);
  const especieAleatoria = especies[randomIndex];

  return especieAleatoria;
}

function gerarStatsMonstro() {
  const level = Math.floor(Math.random() * 99) + 1;
  const hp = level * 100;
  const stamina = level * 50;
  const ataque = level * 30;
  const defesa = level * 20;

  return {
    level: level,
    hp: hp,
    stamina: stamina,
    ataque: ataque,
    defesa: defesa,
  };
}

function escolherTemperamento() {
  const temperamentos = [
    "Agressivo",
    "Cauteloso",
    "Brincalhão",
    "Tímido",
    "Feroz",
    "Pacífico",
    "Astuto",
    "Imprevisível",
    "Curioso",
    "Sarcástico",
  ];

  const randomIndex = Math.floor(Math.random() * temperamentos.length);
  const tempperamentoEscolhido = temperamentos[randomIndex];
  return tempperamentoEscolhido;
}


function gerarMonstro() {
    const stats = gerarStatsMonstro();
    const levelGerado = stats.level;
    const hpGerado = stats.hp;
    const staminaGerado = stats.stamina;
    const ataqueGerado = stats.ataque;
    const defesaGerado = stats.defesa;
    const nomeGerado = gerarNomeMonstro();
    const especieGerada = escolherEspecieMonstro();
    const temperamentoGerado = escolherTemperamento();
    const itens = gerarDrop()
  
    const monstroGerado = new Monstro(
      nomeGerado,
      ataqueGerado,
      defesaGerado,
      temperamentoGerado,
      levelGerado,
      hpGerado,
      staminaGerado,
      especieGerada,
      itens
    );
  
    return monstroGerado;
  }
  

  export default gerarMonstro;
  