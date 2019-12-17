/*let y var son palabras reservadas
para la declaración de variables.
Si creamos una variable con la
palabra reservada let y tratamos
de hacer referencia antes de 
declararlo arrojará un error,
esto hace sentido ya que los programas
se ejecutan de arriba hacia abajo
y la variable no esta declarada.*/

/*
console.log(carId); //Cannot access 'carId' before initialization
let carId = 42;
*/ 

/*Sin embargo, si utilizamos
  la palabra reservadar var
  arrojara undefined.*/

/*console.log(CarId); 
var CarId = 42;
*/

/*if(true){
    var foo = 9;
}
console.log(foo); //9
*/

/*
La variable foo solo existe
dentro del bloque de código,
una vez que alcance la ejecución
el programa abandona ese bloque y
la variable foo ya no existe
*/
if(true){
    let foo = 9;
}
console.log(foo);
 //Error! foo is not defined