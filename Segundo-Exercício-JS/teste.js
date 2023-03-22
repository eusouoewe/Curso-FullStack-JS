const primVelString = prompt("Insira a velocidade do primeiro carro: ");
const secVelString = prompt("Insira a velocidade do segundo carro: ");

vel1 = Number(primVelString);
vel2 = Number(secVelString);

if (vel1 < vel2) {
    alert("O Carro 2 é mais rápido que o Carro 1");
} else if (vel1 > vel2) {
    alert("O Carro 1 é mais rápido que o Carro 2");
} else if (vel1 === vel2) {
    alert("A velocidade dos dois carros é igual");
}

