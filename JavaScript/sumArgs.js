function sum(...nums) {
    return nums.reduce((acc, el) => {
        return acc + el;
    })
}

function sum1() {
    const args = Array.from(arguments);
    return args.reduce((acc, el) => acc += el);
}
// console.log(sum1(1,2,3,4));
