function single_in_sorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (arr[i-1] !== el && arr[i+1] !== el) {
            return el;
        }
    }
}

console.log(single_in_sorted([1,1,2,2,3,3,4,5,5]));