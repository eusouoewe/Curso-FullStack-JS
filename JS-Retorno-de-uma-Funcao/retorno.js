function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(8, 15)

console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco, // preco: preco
        estoque: 1
    }
    return produto
}

const notebook = criarProduto

console.log(criarProduto("Notebook Intel core i3 8GB", 2500))

function areaRetangular(base, altura) {
    const area = base * altura
    return area
}

function areaQuadrada (lado) {
    return areaRetangular(lado, lado)
}

// console.log(areaRetangular(3, 5))

// console.log(areaQuadrada(9))

function ola() {
    let texto = "................................"
    return texto
    texto = "Olá, mundo!"
    console.log(texto)
}

console.log(ola())

function maioridade (idade) {
    if (idade >= 18) {
        return "Maior de Idade!"
    } else {
        return "Menor de Idade!"
    }
}

console.log(maioridade(29))
console.log(maioridade(12))