alert ("Bem vindo à calculadora geométrica.");
let opcao = '' // opcao inicia vazia para ser inserida no prompt

while (opcao !== "6") {

    opcao = prompt(`Escolha uma das opções a seguir para calcular, ou sair.
    1- Calcular a área de um triângulo;
    2- Calcular a área de um retângulo;
    3- Calcular a área de um quadrado;
    4- Calcular a área de um trapézio;
    5- Calcular a área de um círculo;
    6- Sair da Calculadora Geométrica.`); // cada opcao executa uma funcao e somente a opcao 6 encerra o loop

    switch(opcao) {
        case "1": { // calcular area de triangulo
            let base, altura, areaTri, areaT;

            base = +prompt("Informe a base do Triângulo: ")
            altura = +prompt("Informe a altura do Triângulo: ")
            function areaTriangulo() {
                areaTri = base * altura / 2
                return areaTri
            }
            areaT = areaTriangulo()
            alert (`A Área do Triângulo é ${areaT}.` )
            break
        }
        case "2": { // calcular area de retangulo
            let base, altura, areaRet, areaR;

            base = +prompt("Informe a base do Retângulo: ")
            altura = +prompt("Informe a altura do Retângulo: ")
            function areaReatangulo() {
                areaRet = base * altura
                return areaRet
            }
            areaR = areaReatangulo()
            alert(`A Área do Retângulo é ${areaR}.`)
            break
        }
        case "3": { // calcular area de quadrado
            let lado, areaQua, areaQ;

            lado = +prompt("Informe o lado do Quadrado: ")
            function areaQuadrado() {
                areaQua = lado * lado
                return areaQua
            }
            areaQ = areaQuadrado()
            alert(`A Área do Quadrado é ${areaQ}`)
            break
        }
        case "4": { // calcular area de trapezio, impedindo que o a base maior tenha valor menor que a base menor

            let baseMaior, baseMenor, altura, areaTra, areaT;
            while (true) {
                baseMaior = +prompt("Informe a base maior do Trapézio: ")
                baseMenor = +prompt("Informe a base menor do Trapézio: ")
                if (baseMaior >= baseMenor) {
                    altura = +prompt("Informe a altura do Trapézio: ")
                    break
                } else {
                    alert("A base maior do Trapézio deve ser maior que a base menor. Por favor insira novamente as informações.")
                }
            }
            function areaTrapezio() {
                areaTra = (baseMaior + baseMenor) * altura / 2
                return areaTra
            }
            areaT = areaTrapezio()
            alert(`A Área do Trapézio é de ${areaT}`)
            break
        }
        case "5": { // calcular a area de um circulo
            let raio, areaC;
            raio = +prompt("Informe o raio do Círculo: ")
            function areaCirculo() {
                return Math.PI * (raio ** 2)
            }
            areaC = areaCirculo()
            alert(`A Área do Circulo é de ${areaC}`)
            break
        }
        case "6": {
            break
        }
        default: {
            alert("OPÇÃO INVÁLIDA. POR FAVOR SELECIONE UMA DAS OPÇÕES DISPONÍVEIS.")
        }
    }
}
alert("Volte novamente para realizar mais cálculos sempre que quiser!")