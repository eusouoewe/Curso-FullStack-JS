function dobro(x) {
    alert(`O dobro de ${x} é ${x * 2}`);
}

// dobro(5)
// dobro(55)

// dobro()

function dizerOla(nome = "mundo") {
    alert(`Olá, ${nome}!`)
}

// dizerOla("Ewerton")
// dizerOla();

function soma(a, b, c, d, e) {
    alert(`O resultado da soma é ${a + b + c + d + e}!`);
}

// soma(12, 50, 10, 11, 6)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

// function novoUsuario(nome, tipo = "admin", email, senha) {
//     const usuario = {
//         nome, // mesmo que nome: nome
//         email,
//         senha,
//         tipo
//     }
//     console.log(usuario)
// }


// criarUsuario("Ewerton", "ewerton@email.com", 12345)
// novoUsuario("Ewerton", "ewerton@email.com", 12345)

function muitosParametros(nome, telefone, endereco, dataAniversario, email, senha) {

}

function objetoComParametros(usuario) {
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", "endereco", "dataAniversario", "email", "senha")

const DadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    dataAniversario: ""
}

objetoComParametros(DadosDoUsuario)