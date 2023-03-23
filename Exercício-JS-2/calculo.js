const nomePrimeiroPersonagem = prompt("Insira o nome do Atacante: ");
const poderDeAtaqueString = prompt("insira o poder de ataque do Atacante: ");
const nomeSegundoPersonagem = prompt("Insira o nome do Defensor");
let pontosDeVidaString = prompt("Insira os pontos de vida do Defensor");
const poderDeDefesaString = prompt("Insira o poder de defesa do Defensor: ");
const escudo = prompt("O Defensor possui um escudo? ");

const poderDeAtaque = Number(poderDeAtaqueString);
let pontosDeVida = Number(pontosDeVidaString);
const poderDeDefesa = Number(poderDeDefesaString);

let diferenca = poderDeAtaque - poderDeDefesa;
let novosPontosDeVida = pontosDeVida - diferenca;

if (poderDeAtaque > poderDeDefesa && escudo === "nao") {
    alert("O Defensor " + nomeSegundoPersonagem + " sofreu " + diferenca + " pontos de dano e seus novos pontos de vida são " + novosPontosDeVida +
    "\n Dados dos personagens:" +
    "\n Primeiro Personagem: " + nomePrimeiroPersonagem + ";" +
    "\n Segundo Personagem: " + nomeSegundoPersonagem + ";" +
    "\n Pontos de vida de " + nomeSegundoPersonagem + " antes do ataque: " + pontosDeVida +
    "\n Dano causado: " + diferenca +
    "\n Pontos de vida de " + nomeSegundoPersonagem + " depois do ataque: " + novosPontosDeVida);

} else if (poderDeAtaque > poderDeDefesa && escudo === "sim") {
    let novoPoderDeAtaque = poderDeAtaque / 2;
    let novaDiferenca = novoPoderDeAtaque - poderDeDefesa
    novosPontosDeVida = pontosDeVida - novaDiferenca
    alert("O Defensor " + nomeSegundoPersonagem + " sofreu " + novaDiferenca + " pontos de dano e seus novos pontos de vida são " + novosPontosDeVida +
    "\n Dados dos personagens:" +
    "\n Primeiro Personagem: " + nomePrimeiroPersonagem + ";" +
    "\n Segundo Personagem: " + nomeSegundoPersonagem + ";" +
    "\n Pontos de vida de " + nomeSegundoPersonagem + " antes do ataque: " + pontosDeVida +
    "\n Dano causado: " + novaDiferenca +
    "\n Pontos de vida de " + nomeSegundoPersonagem + " depois do ataque: " + novosPontosDeVida);

} else if (poderDeAtaque <= poderDeDefesa) {
    diferenca = 0;
    alert("Não foi subtraído nada da vida do Defensor " + nomeSegundoPersonagem + " pois o poder de ataque de " + nomePrimeiroPersonagem + " não é maior que a Defesa." +
    "\n Dados dos personagens:" +
    "\n Primeiro Personagem: " + nomePrimeiroPersonagem + ";" +
    "\n Segundo Personagem: " + nomeSegundoPersonagem + ";" +
    "\n Pontos de vida de " + nomeSegundoPersonagem + " antes do ataque: " + pontosDeVida +
    "\n Dano causado: " + diferenca +
    "\n Pontos de vida de " + nomeSegundoPersonagem + " depois do ataque: " + novosPontosDeVida)
}