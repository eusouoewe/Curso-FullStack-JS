const resultado = prompt("Escolha uma alternativa: \n1) \n2) \n3)")
const resultadoNuerico = parseFloat(resultado)

switch (resultadoNuerico) {
    case 1:
        alert("O resultado é '1'");
        break
    case 2:
        alert("O resultado é '2'");
        break
    case 3:
        alert("O resultado é '3'");
        break
    default:
        alert("finalizando...");
}