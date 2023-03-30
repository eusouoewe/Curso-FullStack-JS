// function somar(a, b) {
//     return a + b;
// }

// let operacao = somar

// console.log(operacao(4, 5));

// operacao = function(a, b) {
//     return a - b;
// }

// console.log(operacao(4, 5));

olaMundo();
oiMundo();

function olaMundo() { // são "movidas" pro topo do arquivo
    console.log("Olá, Mundo!")
}

const oiMundo = function() { // são sempre realizadas quando o arquivo chega nela
    console.log("Oi, Mundo!")
}