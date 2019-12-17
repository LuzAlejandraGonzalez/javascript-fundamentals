

let promise = new Promise(
    function(resolve,reject){
        setTimeout(reject,100,'someValue');
    }
);

console.log(promise);