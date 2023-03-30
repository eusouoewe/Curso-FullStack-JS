let pessoa = {
    nome: "Ewerton",
    idade: 26,
    dizerOla() {
        console.log(`"Olá, Mundo! meu nome é ${this.nome}`);
    }
}

console.log(pessoa)

pessoa.dizerOla()