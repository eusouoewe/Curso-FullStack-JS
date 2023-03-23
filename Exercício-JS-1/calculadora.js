let primeiroNumString = prompt("Insira o primeiro dígito a ser calculado: ")
let segundoNumString = prompt("Insira o segundo dígito a ser calculado: ")

let primeiroNumero = Number(primeiroNumString)
let segundoNumero = Number(segundoNumString)

let adicao = primeiroNumero + segundoNumero
let subtracao = primeiroNumero - segundoNumero
let multiplicacao = primeiroNumero * segundoNumero
let divisao = primeiroNumero / segundoNumero

alert("Resultado da Adição entre " + primeiroNumero + " e " + segundoNumero + ": " + adicao + "\nResultado da Subtração entre " + primeiroNumero + " e " + segundoNumero + ": " +subtracao + "\nResultado da Multiplicação entre " + primeiroNumero + " e " + segundoNumero + ": " + multiplicacao + "\nResultado da Divisão entre " + primeiroNumero + " e " + segundoNumero + ": " + divisao)