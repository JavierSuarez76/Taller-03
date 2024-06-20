/* Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada:

Calificación	           Equivalente en letras
Entre 4,8 <= 5,0	       E = Excelente
Entre 4,5 < 4,8	           MB = Muy bueno
Entre 4.0 < 4.4	           B = Bueno
Entre 3,5 < 4,0	           A = Aprobado
Entre 0 < 3,5	           R = reprobado */

function calcularPromedio(nota1, nota2, nota3) {
    
    let promedio = (nota1 + nota2 + nota3) / 3;
    let letra;


    if (promedio >= 4.8 && promedio <= 5.0) {
        letra = "E ";
    } else if (promedio >= 4.5 && promedio < 4.8) {
        letra = "MB";
    } else if (promedio >= 4.0 && promedio < 4.5) {
        letra = "B";
    } else if (promedio >= 3.5 && promedio < 4.0) {
        letra = "A";
    } else if (promedio >= 0 && promedio < 3.5) {
        letra = "R";
    } else {
        letra = "error";
    }

    return letra;
}

let nota1 = 4.5;
let nota2 = 3.8;
let nota3 = 4.2;

let resultado = calcularPromedio(nota1, nota2, nota3);
console.log(`Prom= ${resultado}`);