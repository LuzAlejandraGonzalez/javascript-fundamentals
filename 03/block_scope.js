/*block scope se refiere a la
vida útil de las variables
que existen dentro de un bloque
de código(llaves {}), puede
ser para cualquier instrucción
o cualquier conjunto de llaves que
no sea una función.
*/

/* if(5===5){
    var message = 'Equal';
}
console.log(message); //Error */

let message = 'Outside';
if(5===5){
    let message = 'Equal';
    console.log(message);
}
console.log(message);