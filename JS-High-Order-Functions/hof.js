function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) // somar (a, b = 3, 5)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(5, 3, function subtrair(j, k) {
    console.log("Realizando uma subtração.")
    return j - k
}))

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Banana", "Caqui", "Abacate"]

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(function (elemento, indice, array) {
    console.log(
        {elemento,
        indice,
        array
    })
})