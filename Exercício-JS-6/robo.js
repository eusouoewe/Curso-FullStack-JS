let numero = +prompt("Informe um numero para o robô multiplicar: ")
let multplicacao = ''

for (let contagem = 1; contagem < 21; contagem++) {
    multplicacao += "→ " + numero + " x " + contagem + " = " + (numero*contagem) + "\n"
}
alert(`Resultado da tabuada do numero ${numero}: \n\n` + multplicacao)