const nome = prompt("Olá! Qual o seu nome? ")
let quantidade = +prompt("Quanto dinheiro você tem? ")
let novaQuantidade = quantidade;
let opcao;

do {
    opcao = +prompt(`Saldo disponível: R$${novaQuantidade},00` +
    "\nVocê quer: " +
    "\n1- Depositar quantia;" +
    "\n2- Sacar quantia." +
    "\n3- Sair")
    if (opcao === 1) {
        depositar = +prompt("Quanto dinheiro você quer depositar? ")
        novaQuantidade += depositar;
    } else if (opcao === 2) {
        sacar = +prompt("Quanto dinheiro você quer sacar? ")
        novaQuantidade -= sacar;
    }
    alert(`Você agora tem R$${novaQuantidade},00`)
} while (opcao !== 3)

alert(`Você encerrou o Atendimento Financeiro com R$${novaQuantidade},00 na conta.`)