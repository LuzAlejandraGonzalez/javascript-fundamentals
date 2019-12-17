/* function startCard(carId){
    let message = 'Starting...'
}

startCard(123); console.log(message); */

/*function startCard(carId){
    let message = 'Starting...';
    let startFn = function turnKey(){
        console.log(message);
    };
    startFn();
}
startCard(123); 
*/

function startCar(carId){
    let message = 'Starting...';
    let startFn = function turnKey(){
        let message = 'Override';
};
startFn();
console.log(message);
}
startCar(123);
