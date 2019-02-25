// var add = function (a) {
//     return function(b) {
//         return a + b;
//     }
// }

// var addToFive = add(5);
// console.log(addToFive(7));

const ave = function(...n) {
    let tot = 0;
    for (let i = 0; i < n.length; i++) {
        tot += n[i];
    }

    return tot/n.length
}

// console.log(ave(1,2,3,4))

const spiceUp = function(fn, ...n) {
    let that = this;
    return function(...m) {
        return fn.call(that, ...n.concat(m))
    }
}

const doAvg = spiceUp(ave, 1,2,3);
// console.log(doAvg(2,3,4,5,6))