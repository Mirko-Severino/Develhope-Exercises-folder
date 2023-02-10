const number = 15;

let promise = new Promise((resolve, reject) => {
    if(number > 10) {
        resolve(number);
    } else {
        reject(number);
    }});

promise.then((number) => {
    console.log(`The number is ${number}`);
}).catch((number) => {
    console.log(`Il numero non è valido`);
});