// not in place version of quicksort

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift(); // select first element as pivot
    let left = array.filter(el => el <= pivot);
    let right = array.filter(el => el > pivot);

    // recursive calls to sort left and right;
    let sortedLeft = quicksort(left); 
    let sortedRight = quicksort(right);

    // concat because in js [3] + [4] = 34
    return sortedLeft.concat(pivot).concat(sortedRight);
    
}

console.log(quicksort([4,3,10,7,2,8,1]));