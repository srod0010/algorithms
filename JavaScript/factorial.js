function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n-1)
}

console.log(factorial(4))


function factorial1(n, cache = {}) {
    if(cache[n]) return cache[n];
    if (n === 0 || n === 1) {
        cache[n] = 1;
        return cache[n];
    }
   

    let ans = n * factorial1(n-1, cache);
    cache[n] = ans;
    return cache[n];
}

console.log(factorial1(5))