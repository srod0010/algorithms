//solution is nlogn
//TODO reimplement using heap

// Find the kth largest element in an unsorted array.Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

//     Input: [3, 2, 1, 5, 6, 4] and k = 2
// Output: 5

var findKthLargest = function (nums, k) {
    nums.sort((a, b) => a - b);
    return nums[nums.length - k]
};