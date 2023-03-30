// adicionando imoveis para ja ter uma base a ser apresentada
const imovel1 = {
    nomeDoProprietario: "Jose da Silva",
    quantidadeDeQuartos: 4,
    quantidadeDeBanheiros: 2,
    garagem: "Não"
}
const imovel2 = {
    nomeDoProprietario: "Maria dos Santos",
    quantidadeDeQuartos: 3,
    quantidadeDeBanheiros: 1,
    garagem: "Sim"
}
const imovel3 = {
    nomeDoProprietario: "Marcos Felix",
    quantidadeDeQuartos: 8,
    quantidadeDeBanheiros: 4,
    garagem: "Sim"
}

const cadastrados = [imovel1, imovel2, imovel3]
alert("Olá, bem vindo ao cadastreseuimovel.com")

let opcao = ''

//definindo condicoes e funções para cada opção escolhida
while (opcao !== "3") {
    opcao = prompt(`Quantidade de Imóveis cadastrados: ${cadastrados.length}\n
    O que você gostaria de fazer?\n
    1- Cadastrar um Imóvel;
    2- Mostrar os Imóveis cadastrados;
    3- Sair do Site.`)

    switch(opcao) {
        //este caso adicionará um novo imovel ao array com informações de objeto
        case "1": {
            let novoImovel = {}
            novoImovel.nomeDoProprietario = prompt("Qual o nome do Proprietario? ")
            novoImovel.quantidadeDeQuartos = prompt("Quantos quartos o imóvel tem? ")
            novoImovel.quantidadeDeBanheiros = prompt("Quantos banheiros o imóvel tem? ")
            novoImovel.garagem = prompt("Tem Garagem? ")

            cadastrados.push(novoImovel)
            alert(`Imóvel adicionado! Agora temos ${cadastrados.length} imóveis cadastrados.`)
            break
        }
        //este caso mostrará os imóveis e suas informações
        case "2": {
            for (let contagem = 0; contagem < cadastrados.length; contagem++) {
                alert(`Estes são nossos imóveis cadastrados: 
                ${contagem + 1}º imóvel: 
                Nome do proprietário: ${cadastrados[contagem].nomeDoProprietario}
                Quantidade de Quartos: ${cadastrados[contagem].quantidadeDeQuartos}
                Quantidade de Banheiros: ${cadastrados[contagem].quantidadeDeBanheiros}
                Tem Garagem: ${cadastrados[contagem].garagem}`)
            }
        }
        break
        case "3": {
            break
        }
        //este caso impede digitação incorreta de uma opção
        default: {
            alert("OPÇÃO INVÁLIDA, ESCOLHA UMA DAS OPÇÕES DISPONÍVEIS")
            break
        }
    }
}

//este caso encerrará o programa
alert("Até a próxima!")