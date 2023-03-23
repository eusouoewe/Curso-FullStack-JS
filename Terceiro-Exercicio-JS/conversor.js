let medida = prompt("Insira aqui um valor em metros: ");

if (isNaN(medida)) {
    alert("Por favor, insira um número no campo de Medidas")
} else {
    parseFloat(medida);
    let valor = prompt("Escolha uma unidade de medida para converter o valor:" +
    "\nMilímetros (mm)" +
    "\nCentímetros (cm)" +
    "\nDecímetros (dm)" +
    "\nDecâmetros (dam)" +
    "\nHectômetros (hm)" +
    "\nQuilômetros (km)");

    let novaMedida;

    switch (valor) {
        case "mm":
            novaMedida = medida * 1000;
            alert(`A medida de ${medida} metros em Milímetros se tornou ${novaMedida}mm`);
            break;
        case "cm":
            novaMedida = medida * 100;
            alert(`A medida de ${medida} metros em Centímetros se tornou ${novaMedida}cm`);
            break;
        case "dm":
            novaMedida = medida * 10;
            alert(`A medida de ${medida} metros em Decímetros se tornou ${novaMedida}dm`);
            break;
        case "dam":
            novaMedida = medida / 10;
            alert(`A medida de ${medida} metros em Decâmetros se tornou ${novaMedida}dam`);
            break;
        case "hm":
            novaMedida = medida / 100;
            alert (`A medida de ${medida} metros em Hectômetros se tornou ${novaMedida}hm`);
            break;
        case "km":
            novaMedida = medida / 1000;
            alert(`A medida de ${medida} metros em Quilômetros se tornou ${novaMedida}km`);
            break;
        default:
            alert("Opção Inválida! Escoha uma das opções.");
    }
}