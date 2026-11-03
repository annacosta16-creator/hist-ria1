/*
 * A Trilha do Reencontro
 * História interativa: todas as fases de escolha têm exatamente duas opções.
 * Destinos especiais: "vitoria" e "derrota".
 */

const historia = {
  inicio: {
    numero: 1,
    titulo: "O desaparecimento",
    texto: "Seu animal de estimação desapareceu na floresta depois de um barulho estranho. Você precisa encontrá-lo antes do anoitecer.",
    opcoes: [
      { texto: "Examinar a mochila abandonada", destino: "mochila" },
      { texto: "Seguir pela trilha", destino: "trilha" }
    ]
  },

  mochila: {
    numero: 2,
    titulo: "A mochila abandonada",
    texto: "Você encontra uma garrafa de água e uma lanterna. Também há uma corda, que pode ser útil. Ao longe, ouve um latido.",
    aoEntrar: "Você guardou água, lanterna e corda na mochila.",
    opcoes: [
      { texto: "Seguir o som do latido", destino: "latido" },
      { texto: "Seguir o riacho", destino: "riacho" }
    ]
  },

  trilha: {
    numero: 2,
    titulo: "A trilha estreita",
    texto: "Você segue pela trilha e encontra marcas de patas na lama. Mais adiante, vê uma mochila abandonada perto de um tronco caído.",
    opcoes: [
      { texto: "Examinar a mochila", destino: "mochila" },
      { texto: "Seguir as pegadas sem parar", destino: "pegadas" }
    ]
  },

  latido: {
    numero: 3,
    titulo: "O som na floresta",
    texto: "Você segue o latido e encontra pegadas recentes. Um tronco caído bloqueia a passagem.",
    opcoes: [
      { texto: "Contornar o tronco pelos arbustos", destino: "arbustos" },
      { texto: "Usar a corda para mover o tronco", destino: "tronco" }
    ]
  },

  riacho: {
    numero: 3,
    titulo: "À margem do riacho",
    texto: "O riacho segue para dentro da floresta. Você vê pegadas na lama, mas a água torna o terreno escorregadio.",
    opcoes: [
      { texto: "Acompanhar as pegadas", destino: "pegadas" },
      { texto: "Procurar uma passagem mais alta", destino: "ponte" }
    ]
  },

  pegadas: {
    numero: 4,
    titulo: "Pegadas na lama",
    texto: "As pegadas levam a uma clareira. Você encontra pelos presos em galhos e percebe que o animal passou por ali.",
    opcoes: [
      { texto: "Seguir os pelos até a encosta", destino: "encosta" },
      { texto: "Voltar ao riacho e seguir a margem", destino: "riacho_busca" }
    ]
  },

  arbustos: {
    numero: 4,
    titulo: "Entre os arbustos",
    texto: "Você contorna o tronco por uma passagem estreita e encontra pelos presos nos galhos. A trilha leva a uma encosta íngreme.",
    opcoes: [
      { texto: "Procurar uma trilha segura", destino: "trilha_segura" },
      { texto: "Descer diretamente pela encosta", destino: "descida" }
    ]
  },

  tronco: {
    numero: 4,
    titulo: "O tronco bloqueia o caminho",
    texto: "Você prende a corda ao tronco e consegue abrir uma passagem, mas a corda se rompe quando tenta recuperá-la. Do outro lado, há uma trilha para a encosta.",
    aoEntrar: "A corda foi perdida e não pode mais ser usada.",
    opcoes: [
      { texto: "Seguir os pelos em direção à encosta", destino: "encosta" },
      { texto: "Procurar outra passagem perto do riacho", destino: "riacho_busca" }
    ]
  },

  encosta: {
    numero: 5,
    titulo: "A encosta íngreme",
    texto: "Você segue os pelos até uma encosta. Lá embaixo, ouve um ganido. O terreno está úmido e você não tem mais a corda.",
    opcoes: [
      { texto: "Procurar uma trilha segura", destino: "trilha_segura" },
      { texto: "Descer diretamente pela encosta", destino: "descida" }
    ]
  },

  descida: {
    numero: 5,
    titulo: "A descida arriscada",
    texto: "Você tenta descer depressa, mas o chão cede sob seus pés. Consegue voltar para uma área firme, porém perde tempo e precisa escolher outro caminho.",
    opcoes: [
      { texto: "Procurar uma trilha entre as árvores", destino: "trilha_segura" },
      { texto: "Voltar e seguir o riacho", destino: "riacho_busca" }
    ]
  },

  trilha_segura: {
    numero: 6,
    titulo: "A trilha escondida",
    texto: "Você desce com segurança. Encontra pegadas recentes e um pedaço de tecido parecido com a coleira do animal. O caminho se divide entre uma ponte e uma parte escura da floresta.",
    opcoes: [
      { texto: "Atravessar a ponte", destino: "ponte" },
      { texto: "Entrar na parte escura com a lanterna", destino: "floresta_escura" }
    ]
  },

  ponte: {
    numero: 6,
    titulo: "A ponte de madeira",
    texto: "A ponte range sobre o riacho. Você atravessa devagar e encontra pegadas do outro lado, próximas a uma entrada rochosa.",
    opcoes: [
      { texto: "Seguir as pegadas até as rochas", destino: "rochas" },
      { texto: "Acompanhar o riacho pela margem", destino: "riacho_busca" }
    ]
  },

  riacho_busca: {
    numero: 7,
    titulo: "O caminho da água",
    texto: "Você acompanha a margem e encontra marcas de patas perto de pedras. Um ganido fraco vem de uma área escura entre as árvores.",
    opcoes: [
      { texto: "Investigar a abertura entre as rochas", destino: "rochas" },
      { texto: "Seguir pela margem até uma clareira", destino: "clareira" }
    ]
  },

  floresta_escura: {
    numero: 7,
    titulo: "Os olhos na escuridão",
    texto: "A lanterna ilumina marcas de patas e você ouve um ganido. A luz está fraca. À frente, há uma abertura entre as rochas e um caminho até o riacho.",
    opcoes: [
      { texto: "Investigar a abertura entre as rochas", destino: "rochas" },
      { texto: "Descer até o riacho", destino: "riacho_busca" }
    ]
  },

  clareira: {
    numero: 8,
    titulo: "A clareira silenciosa",
    texto: "Na clareira, você encontra pelos e marcas de patas. O ganido parece vir de uma pequena gruta próxima.",
    opcoes: [
      { texto: "Entrar na gruta", destino: "rochas" },
      { texto: "Descansar e beber um pouco de água", destino: "descanso" }
    ]
  },

  descanso: {
    numero: 8,
    titulo: "Uma pausa necessária",
    texto: "Você bebe um pouco de água e recupera o fôlego. O som do animal continua vindo da região rochosa, então você retoma a busca.",
    opcoes: [
      { texto: "Seguir o som até as rochas", destino: "rochas" },
      { texto: "Voltar pela trilha para procurar ajuda", destino: "derrota" }
    ]
  },

  rochas: {
    numero: 8,
    titulo: "A passagem entre as rochas",
    texto: "Você entra em uma gruta e encontra pegadas e pelos semelhantes aos do seu animal. Um ganido fraco vem do fundo. Há um túnel escuro e uma saída lateral para a floresta.",
    opcoes: [
      { texto: "Seguir pelo túnel em direção ao ganido", destino: "tunel" },
      { texto: "Sair da gruta e procurar outra entrada", destino: "saida_gruta" }
    ]
  },

  saida_gruta: {
    numero: 9,
    titulo: "Do outro lado da gruta",
    texto: "Você sai da gruta e encontra rastros recentes que levam de volta à entrada do túnel. O animal parece estar muito perto.",
    opcoes: [
      { texto: "Entrar novamente e seguir o ganido", destino: "tunel" },
      { texto: "Continuar sozinho pela floresta", destino: "derrota" }
    ]
  },

  tunel: {
    numero: 9,
    titulo: "O reencontro está próximo",
    texto: "Você atravessa o túnel com a lanterna fraca e chega a uma clareira subterrânea. Seu animal está preso entre galhos caídos, mas está vivo e assustado.",
    opcoes: [
      { texto: "Usar a mochila para afastar os galhos menores", destino: "resgate_cuidadoso" },
      { texto: "Examinar a passagem com a lanterna", destino: "rota_segura" }
    ]
  },

  rota_segura: {
    numero: 10,
    titulo: "Uma rota de resgate",
    texto: "A luz fraca revela um espaço por onde você pode chegar ao animal sem mover os galhos maiores. Você se aproxima com cuidado e prepara o resgate.",
    opcoes: [
      { texto: "Acalmar o animal com água e libertá-lo cuidadosamente", destino: "vitoria" },
      { texto: "Puxá-lo rapidamente pelos galhos", destino: "derrota" }
    ]
  },

  resgate_cuidadoso: {
    numero: 10,
    titulo: "O resgate final",
    texto: "Você usa a mochila para afastar os galhos menores. O animal reconhece você, mas continua assustado. É hora de concluir o resgate.",
    opcoes: [
      { texto: "Acalmar o animal com água e libertá-lo cuidadosamente", destino: "vitoria", efeito: "usarAgua" },
      { texto: "Puxar o animal rapidamente pelos galhos", destino: "derrota" }
    ]
  }
};

const telas = [
  document.getElementById("tela-inicial"),
  document.getElementById("tela-historia"),
  document.getElementById("tela-vitoria"),
  document.getElementById("tela-derrota")
];

const inventarioInicial = {
  agua: false,
  lanterna: false,
  corda: false,
  cordaPerdida: false
};

let inventario = { ...inventarioInicial };
let fasesVisitadas = new Set();

const tituloFase = document.getElementById("titulo-fase");
const textoFase = document.getElementById("texto-fase");
const numeroFase = document.getElementById("numero-fase");
const inventarioResumo = document.getElementById("inventario-resumo");
const areaOpcoes = document.getElementById("opcoes");
const mensagemRecursos = document.getElementById("mensagem-recursos");

function mostrarTela(idTela) {
  telas.forEach(tela => {
    tela.hidden = tela.id !== idTela;
  });
}

function iniciarJogo() {
  inventario = { ...inventarioInicial };
  fasesVisitadas = new Set();
  mensagemRecursos.textContent = "";
  mostrarFase("inicio");
}

function atualizarInventario() {
  const recursos = [];
  if (inventario.agua) recursos.push("água");
  if (inventario.lanterna) recursos.push("lanterna");
  if (inventario.corda) recursos.push("corda");
  if (recursos.length === 0) recursos.push("nenhum recurso coletado ainda");

  const observacoes = [];
  if (inventario.cordaPerdida) observacoes.push("corda perdida");
  inventarioResumo.textContent = `Recursos: ${recursos.join(", ")}` +
    (observacoes.length ? ` (${observacoes.join(", ")})` : "");
}

function mostrarFinal(destino) {
  if (destino === "vitoria") {
    mostrarTela("tela-vitoria");
  } else {
    mostrarTela("tela-derrota");
  }
}

function mostrarFase(idFase) {
  if (idFase === "vitoria" || idFase === "derrota") {
    mostrarFinal(idFase);
    return;
  }

  const fase = historia[idFase];
  if (!fase) {
    console.error(`Destino inexistente: ${idFase}`);
    mensagemRecursos.textContent = "Ocorreu um erro de caminho. Reinicie o jogo.";
    return;
  }

  mostrarTela("tela-historia");
  fasesVisitadas.add(idFase);

  if (idFase === "mochila") {
    inventario.agua = true;
    inventario.lanterna = true;
    inventario.corda = true;
  }

  if (idFase === "tronco" && inventario.corda) {
    inventario.corda = false;
    inventario.cordaPerdida = true;
  }

  tituloFase.textContent = fase.titulo;
  textoFase.textContent = fase.texto;
  numeroFase.textContent = `Fase ${fase.numero}`;
  atualizarInventario();

  areaOpcoes.replaceChildren();
  mensagemRecursos.textContent = fase.aoEntrar || "";

  fase.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = opcao.texto;
    botao.addEventListener("click", () => {
      if (opcao.efeito === "usarAgua" && inventario.agua) {
        inventario.agua = false;
        mensagemRecursos.textContent = "Você usou um pouco da água para acalmar o animal.";
      }
      mostrarFase(opcao.destino);
    });
    areaOpcoes.appendChild(botao);
  });
}

document.getElementById("botao-iniciar").addEventListener("click", iniciarJogo);
document.getElementById("botao-voltar-vitoria").addEventListener("click", () => mostrarTela("tela-inicial"));
document.getElementById("botao-reiniciar").addEventListener("click", () => mostrarTela("tela-inicial"));

// Pequenas verificações para facilitar futuras alterações na história.
function validarHistoria() {
  const destinosEspeciais = new Set(["vitoria", "derrota"]);
  const erros = [];

  for (const [id, fase] of Object.entries(historia)) {
    if (fase.opcoes.length !== 2) {
      erros.push(`A fase "${id}" precisa ter exatamente duas opções.`);
    }
    for (const opcao of fase.opcoes) {
      if (!destinosEspeciais.has(opcao.destino) && !historia[opcao.destino]) {
        erros.push(`A fase "${id}" aponta para o destino inexistente "${opcao.destino}".`);
      }
    }
  }

  if (erros.length) {
    console.error("Problemas na história:", erros);
  } else {
    console.info("História validada: destinos existentes e duas opções por fase.");
  }
}

validarHistoria();