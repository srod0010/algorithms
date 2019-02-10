// For this particular Kata we want to implement the memoization solution.This will be cool because it will
// let us keep using the tree recursion algorithm
// while still keeping it sufficiently optimized to get an answer very rapidly.

// The trick of the memoized version is that we will keep a cache data structure(most likely an associative array) where we will store the Fibonacci numbers as we calculate them.When a Fibonacci number is calculated, we first look it up in the cache,
//     if it 's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

// Refactor the
// function into a recursive Fibonacci
// function that using a memoized data structure avoids the deficiencies of tree recursion Can you make it so the memoization cache is private to this
// function ?

var fibonacci = (function () {
    var mem = [0, 1];
    return function (n) {
        if (mem[n] === undefined)
            mem[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return mem[n];
    };
})();