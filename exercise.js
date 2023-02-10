function repeatHello(callback) {
    setInterval(() => {
        callback();
    }, 1000);
}

repeatHello(() => {
    console.log("Hello");
});

/*Le funzioni freccia vengono utilizzate in questa implementazione perché sono più concise e più leggibili.*/