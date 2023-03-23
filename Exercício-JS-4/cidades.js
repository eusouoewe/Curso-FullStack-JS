const nome = prompt("Olá! Qual o seu nome? ")
let resposta = prompt("Você já visitou alguma cidade? (Sim/Não)");
let todasAsCidades = "";
let quantidadeDeCidades = 0;

while(resposta.toLowerCase() === "sim") {
    let nomeCidade = prompt("Qual o nome da Cidade Visitada? ");
    quantidadeDeCidades ++;
    todasAsCidades += nomeCidade + ", ";
    let novaResposta = prompt("Você visitou mais alguma cidade? (Sim/Não)");
    if(novaResposta.toLowerCase() === "nao") {
        alert(`${nome} já visitou um total de ${quantidadeDeCidades} cidades, e elas são: ${todasAsCidades.slice(0, -2)}`)
        break;
    }
}