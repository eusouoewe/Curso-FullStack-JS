let vagas = [
    {vaga: "Office Boy", quantidade: 41},
    {vaga: "Auxiliar de Limpeza", quantidade: 19},
    {vaga: "Auxiliar Administrativo", quantidade: 11},
    {vaga: "Gerente de Produção", quantidade: 4}
]

alert("Bem vindo ao SVE - Sistema de Vagas de Emprego")
let opcao; // opcao inicia vazia para ser inserida no prompt

while (opcao !== 6) {
    opcao = prompt(`Escolha uma das opções a seguir:
    
    1- Listar Vagas Dispoíveis;
    2- Criar uma nova vaga;
    3- Visualizar uma vaga;
    4- Inscrever um candidato em uma vaga;
    5- Excluir uma vaga;
    6- Sair.`)

    switch (opcao) {
        case "1": { // ver vagas disponíveis
            for (let indice = 0; indice < vagas.length; indice++) {
                alert(`${indice + 1}- ${vagas[vaga]}`
            }
        }
        case "2": { // criar uma nova vaga

        }
        case "3": { // visualizar uma vaga específica

        }
        case "4": { // Inscrever um candidato em uma vaga

        }
        case "5": { // excluir uma vaga

        }
        case "6": { //encerra o programa
            break
        }
        default: {
            alert("OPÇÃO INVÁLIDA, POR FAVOR SELECIONE UMA DAS OPÇÕES DISPONÍVEIS.")
        }
    }
}
alert("Até a próxima!")