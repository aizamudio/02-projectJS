/* Mostrar contenido de varias variables */

var nombre = "Alex";
var apellido = "Zamudio";
var texto = nombre + " " + apellido;
/* document.write(texto); */                            //No esta jalando
console.log(texto);                                     //Si funcionó

/* Mostrar contenido de un elemento de un array */

var amigos = ["Carlos", "Alejandro", "Cesar"];
/* document.write(amigos[0]); */                        //No esta jalando
console.log(amigos[0]);                                 //Si funcionó
alert(amigos);                                          //También funcionó, mandando una alerta en el navegador e imprimiendpo en pantalla


/* Determinar si un número es par o impar */

var residuo = 10 % 2;
console.log( residuo ); // 0 | 10 es par

var residuo = 7 % 2;
console.log( residuo ); // 1 | 7 es impar

var i = 0;


/* Ciclo que escribe números del 1 al 50 con for */

for(var i = 1; i <= 50; i++) {
    console.log( i );
  }

/* Ciclo que escribe números del 1 al 50 con while */

while (i <= 50){
   if( i % 2 !== 0 ) {
   console.log( i );
 }
 i++;
}

/* Ejemplo de for que imprimiría 8 veces "Hello World" */

for(var i = 0; i<=8; i++){
    console.log("Hello World");
  }

/* Ejemplo de while que imprimiría 8 veces "Hello World" */

var i = 0;

while(i <= 8) {
	console.log("Hello World");
	i++;
}

/* Mostrial los números pares del 0 al 100 */

for(var i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
      console.log( i );
    }
  }
  
/* Mostrar los números primos del 0 al 100 */


for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
  
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) {
      console.log(counter);
    }
  }

/* Potenciación */

var base = 2
var exponent = 3
var result

function power(base, exponent) {
  result = 1;

  for(var i = 0; i < exponent; i++) {
    result *= base;                       // Same as: result = result * base;
  }
  return result;
}
console.log(power(base, exponent))

/* Número mayor */
let number1 = 3;
let number2 = 8;

function getLergerInt(number1, number2) {
  if(number1 > number2) {
    return number1
  } else {
    return number2
  }
}
console.log(getLergerInt(number1, number2))

