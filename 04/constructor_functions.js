/*Constructor Functions se usa
para crear instancias de objetos nuevos.
Se parece mucho a una función normal,
pero se comporta de manera muy diferente
 */

/*  function Car(){
     console.log(this)
 }
 let vehicle = new Car(); */

 function Car(id){
     this.carId = id;
     this.start = function(){
         console.log('start: ' + this.carId);
     };
 }

 let vehicle = new Car (123);
 vehicle.start();