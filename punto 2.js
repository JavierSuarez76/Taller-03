//Completa la función operation para que realice las 4 operaciones básicas: suma, resta, multiplicacion y division. Dicha funcion debe tomar 3 argumentos: el operador, el primer valor y el segundo valor, además debe retornar el resultado.


    function operation(operator, firstValue, secondValue) {
       
        const operaciones = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => b !== 0 ? a / b : "Error"
        };
    
      
        if (operaciones.hasOwnProperty(operator)) {
          
            return operaciones[operator](firstValue, secondValue);
        } else {
           
            return "error";
        }
    }
    
console.log(operation('+', 5, 3));   
console.log(operation('-', 10, 7));  
console.log(operation('*', 4, 6));   




