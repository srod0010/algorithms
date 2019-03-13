function flatten(data) {
    if (!Array.isArray(data)) return [data];
    let flat = [];

    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            let level = flatten(data[i]);
            flat.push(...level);
            // for (num of level) {
            //     flat.push(num);
            // }
        } else {
            flat.push(data[i]);
        }
    }
    return flat;
}

// function flatten1(data) {
//         //alternate solution
//         //if data is not an array return [ data ]
//     if (!Array.isArray(data)) return [data];
//     let allEl = [];
        
//         //otherwise we have an array
//     data.forEach(el => {
//         //we are not sure if data is el or nested array, but either way we want to return flattened version
//         let flattened = flatten1(el);
//             //push with spread operator to ensure it is flat
//         allEl.push(...flattened);
//     });

//     return allEl;
// }

array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]];
console.log(flatten1(array_1)) // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]];
console.log(flatten1(array_2)); // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]


console.log(flatten1('base case')) // => [ 'base case' ]