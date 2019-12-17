/*La expresión de función flecha tiene una sintaxis más corta
que una expresión de función convencional y no vincula sus propios
this, arguments, super, o new.target.
Las funciones flecha siempre son anónimas.
Estas funciones son funciones no relacionadas
con métodos y no pueden ser usadas como constructores.*/

/*SINTAXIS BÁSICA:
(param1, param2, …, paramN) => { sentencias }
(param1, param2, …, paramN) => expresion
Equivalente a: () => { return expresion; } 

Los paréntesis son opcionales cuando sólo dispone de un argumento: singleParam => { statements } 
(singleParam) => { sentencias } singleParam => { sentencias }

Una función sin argumentos requiere paréntesis: 
() => { sentencias }
*/

let getId = (prefix, suffix) => prefix + 123 + suffix;

console.log(getId('ID: ', '!')); //ID: 123!

let getIdx = (prefix, suffix) => {
  return prefix + 123 + suffix;
};
console.log(getIdx('ID: ' ,'!')); //ID: 123!

let Id = _ =>123;
console.log(Id() );