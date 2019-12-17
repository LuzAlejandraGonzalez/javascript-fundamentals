/*Los rest parameter son una
caracteristica moderna de JS
la cual permite que una función
almacene múltiples argumentos en
única matriz

SINTAXIS:
function(a, b, ...theArgs) {
  // ...
}
*/

function sendCars(...carIds){
    carIds.forEach(id => console.log(id));
}
sendCars('Monday', 1,2,3);

/*Las comas después de un 
elemento rest no estan 
permitidas.*/

