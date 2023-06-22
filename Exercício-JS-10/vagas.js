const vagas =[]

function listarVagas () {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
    textoFinal += indice + ". "
    textoFinal += vaga.nome 
    textoFinal += " (" + vaga.candidatos.length + "candidatos) "
    return textoFinal
    })

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe uma nome para a vaga: ")
    const descricao = prompt("Informe uma descricao para a vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ") 
    const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescricao: " + descricao + "\nData Limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n -  " + candidato
    }, " ")
    alert("Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao + 
    "\nData Limite: " + vaga.dataLimite +
    "\nQuantidade de Candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos na vaga: " + candidatosEmTexto
    )
}

function inscreverCandidato () {
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o indice da vaga que o(a) canditato(a) deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
    "Deseja inscrever o(a) candidato(a)" + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + 
    "\nDescrição: " + vaga.descricao + 
    "\nData Limite: " + vaga.dataLimite 
    )

    if (confirmacao) { 
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga" + indice + "?\n" +
        "Nome: " + vaga.nome +
        "\nDescrição: "  + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite  
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

function exibirMenu() {
    const opcao = prompt("Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções: " +
    "\n1- Listar Vagas Disponíveis" +
    "\n2- Criar uma nova vaga" +
    "\n3- Visualizar uma nova vaga" +
    "\n4- Inscrever um(a) candidato(a)" +
    "\n5- Excluir uma vaga" +
    "\n6- Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""
    
    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("OPÇÃO INVÁLIDA.")
        } 
    } while (opcao !== "6")
}

executar()