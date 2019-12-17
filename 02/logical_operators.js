let userSettings = {name: "Joe"};
let defaultSettings = {name: 'Default'};

console.log(userSettings || defaultSettings);
 
let car = null;
console.log(!car);


if (5 === 5 && 6 === 7) {
    console.log(true);
} else {
    console.log(false);
}


if (5 === 5 || 6 === 6) {
    console.log(true);
} else {
    console.log(false);
}


if (5 === 5 || 6 === 3) {
    console.log(true);
} else {
    console.log(false);
}