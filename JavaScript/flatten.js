function flatten(data) {
    if (!Array.isArray(data)) return [data];
    let flat = [];

    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            let level = flatten(data[i]);
            for (num of level) {
                flat.push(num);
            }
        } else {
            flat.push(data[i]);
        }
    }
    return flat;
}

array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]];
console.log(flatten(array_1)) // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]];
console.log(flatten(array_2)); // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]


console.log(flatten('base case')) // => [ 'base case' ]