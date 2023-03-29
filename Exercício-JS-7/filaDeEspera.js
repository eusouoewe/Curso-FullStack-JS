let fila = ["Carlos", "Marcos", "Domenico", "Maria", "Augusta", "Cassandra", "Filomena"]

let saudacao = "Bem vindo ao Consultório do Dr. MataTudo. \n\n Fila de espera: \n\n"

for (let contagem = 0; contagem < fila.length; contagem++) {
    let posicoes = fila[contagem]
    saudacao += `${contagem + 1}º- ${posicoes}\n`
}

alert(saudacao)

let opcao = ""

while (opcao !== "3") {
    opcao = prompt("Escolha uma das opções:" +
"\n\n1 - Novo Paciente" +
"\n2 - Consultar Paciente" +
"\n3 - Sair")

    switch (opcao) {
        case "1": {
            let novoCliente = prompt("Adicione o nome do novo paciente: ")
            fila.push(novoCliente)
            let adicionado = "Paciente Adicionado. Fila atualizada: \n\n"
            for (contagem = 0; contagem < fila.length; contagem++) {
                posicoes = fila[contagem]
                adicionado += `${contagem + 1}º- ${posicoes}\n`
            }
            alert(adicionado)
            break
        }
        case "2": {
            fila.shift()
            let pacienteConsultou = ""
            if (fila.length > 0) {
                pacienteConsultou = "Um paciente foi atendido. Lista Atualizada: \n\n"
                for (contagem = 0; contagem < fila.length; contagem++) {
                    posicoes = fila[contagem]
                    pacienteConsultou += `${contagem + 1}º- ${posicoes}\n`
                }
            } else {
                pacienteConsultou = "Não há mais pacientes na fila."
            }
            alert(pacienteConsultou)
            break
        }
        case "3": {
            alert("Você escolheu sair do Atendimento ao Paciente do Dr. MataTudo.")
            break
        }
        default: {
            alert("OPÇÃO INVÁLIDA! ESCOLHA UMA DAS OPÇÕES DISPONÍVEIS.")
        }
    } 
}

