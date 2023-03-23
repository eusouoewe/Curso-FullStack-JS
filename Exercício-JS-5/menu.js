let opcao;

do {
    opcao = +prompt("Olá! Escolha uma das opções a seguir:" +
    "\n1-  Opção 1;" +
    "\n2-  Opção 2;" +
    "\n3-  Opção 3;" +
    "\n4-  Opção 4;" +
    "\n5-  Encerrar.")
    alert(`A opção escolhida foi ${opcao}.`);
} while (opcao !== 5);

alert("O Menu Interativo está sendo encerrado...")