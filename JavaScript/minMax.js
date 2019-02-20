// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

function minMax(arr) {
    if (arr.length < 2) {
        return [arr[0], arr[0]]
    }
    let min;
    let max;
    if (arr[0] <= arr[1]) {
        min = arr[0];
        max = arr[1];
    } else {
        min = arr[1];
        max = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
        let el = arr[i];

        if (el < min) {
            min = el;
        } else if (el > max) {
            max = el;
        }
    }
    return [min, max];
}


