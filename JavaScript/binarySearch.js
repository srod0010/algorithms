function binarySearch(arr, target) {
    if (arr.length === 0) return -1;
    let midIndex = Math.floor(arr.length / 2);
    let el = arr[midIndex];

    if (el === target) {
        return midIndex;
    } else if (el > target) {
        return binarySearch(arr.slice(0,midIndex),target);
    } else {
        let localMid = midIndex;
        let val = binarySearch(arr.slice(midIndex+1),target);
        return (val === -1) ? -1 : (localMid+val + 1);
    }
}

console.log(binarySearch([1,2,3,4,5],4));
console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],3));