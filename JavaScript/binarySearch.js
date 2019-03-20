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

// function binarySearch1(arr,target) {
//     if (arr.length === 0) return false;
//     let midIndex = Math.floor(arr.length / 2);
//     let el = arr[midIndex];
//     let leftHalf = arr.slice(0,midIndex);
//     let rightHalf = arr.slice(midIndex+1);

//     if (el > target) {
//         return binarySearch1(leftHalf,target);
//     } else if (el < target) {
//         return binarySearch1(rightHalf,target);

//     } else {
//         return true;
//     }
// }

console.log(binarySearch([1,2,3,4,5],4));
console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],7));