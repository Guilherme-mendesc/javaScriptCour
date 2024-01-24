// Exercicoos sobre IMC do Usario

// Resultado Calculo| Resultado Usuario
// Se IMC for:
// abaixo de 17       | Muito Abaixo do peso
// entre 17 e 18.49   | Abaixo do peso
// entre 18.5 e 24.99 | Peso Normal
// entre 25 e 29.99   | Acima do peso Normal
// entre 30 e 34.99   | Obesidade 1
// entre 35 e 39.99   | Obesidade 2

const peso = 500;
const altura =1.7;
const imc = Number (peso/(altura*altura)).toFixed(2);

//console.log( typeof imc);

switch(true){
    case imc <17:
        console.log("Muito Abaixo do peso")
        break;

    case imc >= 17 && imc <= 18.5:
        console.log("Abaixo do peso")
        break;
    case imc >= 18.5 && imc <= 24.99:
        console.log("Peso Normal")
        break;
    case  imc >= 25 && imc <= 29.99:
        console.log("Acima do Peso Normal")
        break;
    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade 1")
        break;
    case imc >= 35 && imc <= 39.99:
        console.log("Obesidade 2")
        break;

    default:
        console.log("Voce esta fora dos paramentros")
        break;
}