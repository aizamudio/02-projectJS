/* Tipos de datos */
//Numerico
var edad = 19;

// String
var nombre = "Alex";
var apellido = "Zamudio";

//Array
var amigos = ["Carlos", "Alejandro", "Cesar"];

//Objeto
var objeto = {color:"black", size:12}

//Bolean
var boleano = false;

//Undefined
var falconmasters;

//Null
var numero = null;

 /* Operadores */
 //En lugar de números, se pueden emplear tambien variables numéricas

 // + Adicion 
var resultado = 4 + 3; //7

// - Substracción
var resultado = 4 - 3; // 1

// * Multiplicación
var resultado = 4 * 3; // 12

// / División 
var resultado = 4 / 2; // 2

// % Módulo
var resultado = 4 % 2; // 0 (Residuo de la división)

// ++ Incremento
var resultado = 4++; // 5                   /* Para aumentar de uno en uno */
let aumentarCinco = aumentarCinco +=5;      /* Para aunemtar por ejemplo, de 5 en 5 */

// -- Decremento
 var resultado = 4--; // 3

/* typeoff */
//Devuelve el tipo de datos d euna variable

typeof NaN;         //Number
typeof ' ';         //String
typeof undefined;	// "undefined"

/* Type coercion */
//Convierte un tipo de datos a otro
//- String
//- Number
//- Boolean

String(123);	    // Explícito - '123'
123 + '';	        // Implícito - '123'
Number('123');	    // Explícito
+ '123';	        // Implícito
1 - '1';	        // Implícito
2 * '2';	        // Implícito
Boolean(1);	        // Explícito
//if(1) { ... }	    // Implícito - Contexto lógico
!!2;	            // Implícito - Operador lógico
2 || 'Hello World';	// Implícito - Operador lógico

/* Vincular un archivo JavaScript a un html */

<html>
  <head>
    <script type="text/javascript" src="./ejemplos-sesion-2.js"></script>
  </head>
</html>

/* Ejemplo de uso de if, el uso de else es necesario  */

var time = 13;
var greeting;

if (time >= 0 && time < 12) {
  greeting = "Good morning";
} else if (time >= 12 && time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time < 24) {
  greeting = "Good evening";
} else {
  greeting = "Unknown hour";
}
console.log(greeting) // Unknown hour

/* Ejemplo de uso de switch */

var day = 2;
var text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";
}
console.log(text); // Tuesday

/* Ejemplo de operador ternario */

var speed = 120;
var message = speed > 100 ? "You're going too fast!" : "Under the limit";
console.log(message);

/* Definición simple de una función */

var resultado;
var num1 = 10;
var num2 = 5;
function suma(num1, num2){
resultado = num1 + num2;
}
console.log("El resultado es " + resultado);
  
/* Ejemplo de una función recursiva */

var factorial = function fac(number) {
    return number < 2 ? 1 : number * fac(number - 1)
  }
  console.log(factorial(5)); // 120
  
/* Ejemplo de llamado de una función */

/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Llamar funciones</title>
        <script>                            //Definición de la función
            function diHola() {
                alert("Hola");
            }
        </script>
    </head>
    <body>
        <input type="button"
            value=""Di hola"
            onclick="diHola()" />             //Llamado de la función
    </body>
</html>
*/

/* alert(): Muestra un mensaje al usuario. */
alert("Este es un mensaje");

/* eval(): Recibe y evalúa una expresión como otro código fuente. */
eval(alert("La suma de 5 y 7 es igual a " + (5+7)) );

/* confirm(): Muestra un cuadro de diálogo al usuario cuya respuesta la guarda en una variable con el valor de true o false. */
var confirma = confirm("¿Guardar los datos?");


/* Ejemplo de función llamando a otra función */

//Función 1
var name = "Alex";
var birthYear = 1978;
var year;

function calculateAge(birthYear) {
  var age = 2020 - birthYear;
  return age;
}
/* var ageJohn = calculateAge(1995); */

/* console.log(ageJohn); // 25 */

function yearsUntilRetirement(year, name) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(name + ' retires in ' + retirement + ' years.');
}                                                                         /* revisar después por que no funciona */

/* Convertir esta función en una IIFE */

function logName() {
  var name = "John Doe"; 
  console.log(name); 
}                                     //Modo normal
(function() {
  var name = "John Doe"; 
  console.log(name);
})();                                //IIFE - Se encierra la función en un parentesis, se hace anónima y al final agregamos ();

/* Recorrer un arreglo con ForEach y desplegar su contenido */

colors.forEach(function(elemento, indice, array){
  console.log(elemento, indice);
 })

/* Recorrer un arreglo con ForEach y desplegar su contenido */

//let colors;
//for (var i=0; i<colors.lenght; i++;){
//  console.log(colors[i] + " " + i);
// }

/* Para ver el tamaño del arreglo */
console.log(arreglo_numeros.length);


