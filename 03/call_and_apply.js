/*El método apply() invoca una
determinada función asignando
explícitamente el objeto this
y un array o similar
(array like object) como parámetros
(argumentos) para dicha función.

Aunque la sintaxis de apply es
casi idéntica a call(),
la diferencia fundamental es que
call() acepta una lista de
argumentos, mientras que apply()
acepta un simple array con los
argumentos.
*/

//CALL
let u = {
    carIdx: 123,
    getIdx: function() {
        return this.carIdx;
    }
};

let nCar = {carIdx: 456};
console.log(u.getIdx.call(nCar)); //456

//APPLY
let o = {
    cardId:123,
    getId: function(prefix){
        return prefix + this.cardId;
    }
};
let newCar = { cardId: 456};
console.log(o.getId.apply(newCar, ['ID: ']));