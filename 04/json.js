/* A la notación de objetos de JS
se le conoce como JSON, el cual 
tiene como proposito transmitir
objetos JavaScrip.
La mayoría de las veces sería 
enviar o recibir un objeto JS
a alguna API, como una API RESTful
en la web.*/

//Convert to JSON

let car = {
    id: 123,
    style: 'convertible'
}; 

console.log(JSON.stringify(car));


//Convert Array to JSON
let carIds = [
    {carId: 123},
    {carId: 456},
    {carId: 789},
];

console.log(JSON.stringify(carIds));

//Parsing JSON

let jsonIn = 
`
[
    {"carId" : 123},
    {"carId" : 456},
    {"carId" : 789}
]
`;

let carIdx = JSON.parse(jsonIn);
console.log(carIdx);