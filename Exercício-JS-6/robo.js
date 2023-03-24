let numero = +prompt("Informe um numero para o robô multiplicar: ")

for (let contagem = 1; contagem < 21; contagem++) {
    let multplicacao = contagem * numero
    alert("Segue resultado das multiplicações: " +
    `${contagem} x ${numero} = ${multplicacao}`)
}
alert("Finalizando...")