let counter = 0;

function repeatHello(callback) {
    let id = setInterval(() => {
        callback(), counter++;
        if (counter === 5) {
            clearInterval(id);
    }}, 1000);
}

repeatHello(() => {
    console.log("Hello");
});
