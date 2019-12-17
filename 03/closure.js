/*Un closure o clausura es la combinación de una función
y el ámbito léxico en el que se declaró dicha función.
Es decir, los closures o clausuras son funciones que manejan
variables independientes. En otras palabras, la función
definida en el closure "recuerda" el ámbito en el que se
ha creado.*/

/*EJEMPLO:
En este ejemplo, hemos definido una función creaSumador(x)
que toma un argumento único x y devuelve una nueva función.
Esa nueva función toma un único argumento y,
devolviendo la suma de x + y.

En esencia, creaSumador es una fábrica de función:
crea funciones que pueden sumar un valor específico a su argumento.
En el ejemplo anterior utilizamos nuestra fábrica de función para
crear dos nuevas funciones: una que agrega 5 a su argumento
y otra que agrega 10.
suma5 y suma10 son ambos closures.
Comparten la misma definición de cuerpo de función,
pero almacenan diferentes entornos.
En el entorno suma5, x es 5. En lo que respecta a suma10, x es 10.*/

/* function creaSumador(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var suma5 = creaSumador(5);
  var suma10 = creaSumador(10);
  
  console.log(suma5(2));  // muestra 7
  console.log(suma10(2)); // muestra 12 
   */

   let app = (function(){
     let carId = 123;
     let getId = function(){
       return carId;
     };
     return{
       getId: getId
     };
   })();
   console.log(app.getId());
