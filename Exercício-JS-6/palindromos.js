let palavra = prompt("Escreva uma palavra. Ela será analisada e informaremos se ela é um palíndromo: ")

let palindromo  = "";

for (let contagem = palavra.toLowerCase().length - 1; contagem >= 0; contagem--) {
    palindromo += palavra[contagem];
}

if (palavra.toLowerCase() === palindromo.toLowerCase()){
    alert(`A palavra ${palavra.toLowerCase()} é um palíndromo.`);
} else {
    alert(`A palavra ${palavra.toLowerCase()} não é um palíndromo.` +
    `\nPalavra normal: ${palavra.toLowerCase()}` +
    `\nPalavra ao crontrário: ${palindromo.toLowerCase()}`);  
}