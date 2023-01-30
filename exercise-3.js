/*let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore.push(newNumber);
console.log(numberStore);*/

let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore = [...numberStore, newNumber];
console.log(numberStore);