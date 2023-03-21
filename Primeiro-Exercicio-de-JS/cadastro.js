let nome = prompt("insira seu nome: ")
let sobrenome = prompt("Insira seu sobrenome: ")
let estudo = prompt("Insira seu campo de estudo: ")
let nascimento = prompt("Insira seu ano de nascimento: ")

let data = new Date()
let ano = data.getFullYear()

let idade = ano - nascimento
alert("Olá, " + nome +" " + sobrenome + ", " + "que está estudando" +" " + estudo + " " + "e tem " + idade + " " + "anos.")