/*Destructuring arrays permite
asignar facilmente los valores
dentro de una matriz a las
variables, 
*/

/* 
let carIds = [100, 200, 300];
let [car1, car2, ...theRest] = carIds; 
*/

/*
let cardIds = [100,200, 300];
let car1, car2, theRest;

[car1,car2, ...theRest] = cardIds;
*/

let cardIds = [100,200, 300];
let car1, car2, theRest;

[,car2, ...theRest] = cardIds;
console.log(car1,car2, theRest);