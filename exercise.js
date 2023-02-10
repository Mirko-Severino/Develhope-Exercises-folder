const isLogged = true;


let firstPromise = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
        const randomNumber = Math.random();
        resolve(randomNumber);
        } else {
        reject(new Error("Not"));
        }
    });
};

firstPromise(isLogged)
    .then((randomNumber) => {
        console.log(`The number is ${randomNumber}`);
    }).catch((error) => {
        console.log(error);
    }
);


let number = 0.6;

let secondPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
        resolve({ name: "John", age: 24 });
            } else {
        reject(new Error("Number is not greater than 0.5"));
        }
    });
    };

secondPromise(number)
    .then((object) => {
        console.log(object);
    }
    ).catch((error) => {
        console.log(error);
    }
);