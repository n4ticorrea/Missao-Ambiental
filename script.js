const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce defende o meio ambiente",
        alternativas: [
            "Sim",
            "Nao"
        ]
    },
    {
        enunciado: "Qual lixo devemos jogar restos de alimentos",
        alternativas: [
            "Organico",
            "Metal"
        ]
    },
    {
        enunciado: "O que se pode fazer para ajudar o meio ambiente",
        alternativas: [
            "Uso indevido de agua e de energia",
            "Preservar as arvores, separar os lixos adequadamente, reduzir o consumo de agua e energia"
        ]
    },
    {
        enunciado: "O que devemos fazer para acabar com o desmatamento de floretsas e a poluiçao da agua",
        alternativas: [
            "Plantar arvores e evitar a jogar lixos nas ruas e rios",
            "Queimar matos secos, jogar lixos nas ruas"
        ]
    },
    {
        enunciado: "Como e o nome dos lixos reciclaves",
        alternativas: [
            "Metais, vidro, plasticos, papeis e papeloes",
            "Metais, plasticos, vidros, pilhas e baterias, lixo organico, lixo radioativo, lixo hospitalar, residuos solidos nao reciclaveis, papeis e madeiras"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
