function printAsyncName(callback, name) {
    let counter = 0;

    const intervalId = setInterval(() => {
        counter++;
        if (counter === 1) {
        callback();
        } else if (counter === 2) {
        console.log(name);
        clearInterval(intervalId);
        }
    }, 1000);
    }

    printAsyncName(() => {
    console.log("Hello");
    }, "Mirko");






