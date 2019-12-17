/*Permite tomar una matriz y
extender sus elementos para que
puedan asignarse a los parámetros*/

function startCars(car1, car2, car3, ...rest){
    console.log(rest);
}

let cardIds = [1,2,3,4,5,6];
startCars(...cardIds);