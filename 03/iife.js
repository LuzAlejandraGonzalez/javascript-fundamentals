/*Las expresiones de función
ejecutadas inmediatamente
(IIFE por su sigla en inglés)
son funciones que se ejecutan 
tan pronto como se definen.

se compone por dos partes.
La primera es la función anónima
con alcance léxico encerrado por
el  Operador de Agrupación ().
Esto impide accesar variables
fuera del IIFE, así cómo 
contaminar el alcance (scope)
global. 

La segunda parte crea la expresión
de función cuya ejecución es inmediata(),
siendo interpretado directamente
en el engine de JavaScript.
*/

let app = (function (){
    let cardId = 123;
    console.log('in function');
    return {};
}) ();

console.log(app);
