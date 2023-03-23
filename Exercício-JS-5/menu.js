let opcao;

do {
    opcao = +prompt("Olá! Escolha uma das opções a seguir:" +
    "\n1-  Opção 1;" +
    "\n2-  Opção 2;" +
    "\n3-  Opção 3;" +
    "\n4-  Opção 4;" +
    "\n5-  Encerrar.")

    switch (opcao) {
        case 1:
            alert(`A opção escolhida foi ${opcao}.`);
            break
        case 2: 
        alert(`A opção escolhida foi ${opcao}.`);
        break
        case 3:
            alert(`A opção escolhida foi ${opcao}.`);
            break
        case 4:
            alert(`A opção escolhida foi ${opcao}.`);
            break
        case 5:
            alert("Você escolheu encerrar o processo.");
            break
        default:
            alert("Opção Inválida, escolha apenas uma das opções disponíveis.");
    }
} while (opcao !== 5);

alert("O Menu Interativo está sendo encerrado...")