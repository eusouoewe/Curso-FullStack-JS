let baralho = ["Sete de Paus", "Quatro de Copas", "Dama de Espadas", "Três de Copas", "Oito de Espadas", "Seis de Ouros", "Nove de Ouros", "Valete de Paus", "Rei de Espadas", "Seis de Paus"]

let saudacao = "Olá, vamos jogar! Atualmente estas são as cartas no baralho, de cima para baixo: \n\n"

for (quantidade = 0; quantidade < baralho.length; quantidade++) {
    let posicoes = baralho[quantidade]
    saudacao += `${posicoes}\n`
}

alert(saudacao)

opcao = ""

while (opcao !== "3") {
    opcao = prompt("Escolha uma das opções a seguir: " +
    "\n\n1 - Adicionar uma carta ao topo do baralho;" +
"\n2 - Retirar uma Carta do topo do baralho;" +
"\n3 - Parar de jogar.")
    switch (opcao) {
        case "1": {
            novaCarta = prompt("Qual o nome da nova carta? ")
            baralho.unshift(novaCarta)
            let adicionada = "Foi inserida uma nova Carta. O monte de cartas está da seguinte forma: \n\n"
            for (quantidade = 0; quantidade < baralho.length; quantidade++) {
                let posicoes = baralho[quantidade]
                adicionada += `${posicoes}\n`
            }
            alert(adicionada)
            break
        }
        case "2": {
            let removida = ""
            baralho.shift()
            if (baralho.length <= 0) {
                removida = "Não há mais cartas no monte! Adicione novas cartas ou jogue mais tarde."
            } else {
                removida = "Uma carta foi retirada. O monte de cartas está da seguinte forma: \n\n"
                for (quantidade = 0; quantidade < baralho.length; quantidade++) {
                    let posicoes = baralho[quantidade]
                    removida += `${posicoes}\n`
                }
            }
            alert(removida)
            break
        }
        case "3": {
            alert("Espero que possamos jogar novamente em breve!")
            break
        }
        default: {
            alert("OPÇÃO INVÁLIDA! ESCOLHA UMA DAS OPÇÕES DISPONÍVEIS.")
        }
    }
}