function twoSum(arr, target) {
    let adder = {}
    
    for (let i = 0; i < array.length; i++) {
        let key = (targetSum - array[i])
        if (adder[key]) {
            return [key, array[i]].sort((a, b) => a - b)
        } else {
            adder[array[i]] = true;
        }
    }
    
    return [];

}