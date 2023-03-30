function dividir(num) {
    console.log(num);
    if (num % 2 === 0) {
        dividir (num / 2)
    } else {
        return num
    }
}

dividir() // a função se repete até a condição se tornar falsa, o que para o processo

function dobrar(num) {
    console.log(num)
    dobrar(num * 2)
}

// dobrar() // é preciso tomar cuidado com a recursão para que não cause erros ou bugs

function fatorial(num) {
    console.log(`Número: ${num}`);
    if (num === 0 || num ===1) { // caso base
        return 1
    } else {
        console.log(`${num} x !${num - 1}`); 
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))