const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// push serve para adicionar elementos sempre na última posição
let tamanho = arr.push("Boromir") 
console.log(arr)
console.log(tamanho)

// unshift serve para adicionar elementos sempre na primeira posição
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// pop serve para remver elementos sempre da última posição
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift serve para remover elementos sempre na primeira posição
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// pesquisar um elemento → includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

// pesquisar um elemento² → index of
const indice = arr.indexOf("Gandalf")
console.log(indice)

//cortar e concatenar arrays → slice e concat
const hobbits = arr.slice(0, 4)
const outros = arr.slice( -4)
console.log(arr)
console.log(hobbits)
console.log(outros)

const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//substituir elementos → splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// como iterar elementos → usando for, while, etc
for (let indice = 0; indice <sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + ` se encontra na posição ${indice}`)
}