const isLogged = true;

const promise1 = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
        resolve(Math.random());
        } else {
        reject("User not logged in");
        }
    });
    };

const promise2 = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 0.5) {
        resolve({name: "John", age: 24});
        } else {
        reject("Number is too low");
        }
    });
};

promise1(isLogged)
    .then((result) => {
    return promise2(result);
    })
    .then((finalResult) => {
    console.log(finalResult);
    })
    .catch((err) => {
    console.error(err);
    });

