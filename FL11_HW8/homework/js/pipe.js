function addOne(n) {
    return n + 1;
}

function pipe(n, ...functions) {
    for (let i = 0; i < functions.length; i++) {
        let func = functions[i];
        n = func(n);
    }
    return n;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));