//use localeCompare()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers ?

//     Example :
//     "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// Don't modify the input
// For C: The result is freed.

function orderWeight(str) {
    let newStr = str.split(' ');
    let weights = [];
    for (let i = 0; i < newStr.length; i++) {
        if (Number(newStr[i])) {
            let currentWeight = newStr[i]
            // console.log('current weight is',currentWeight)

            let niceWeight = currentWeight.split('').reduce((a,b) => Number(a) + Number(b));
            weights.push([niceWeight,currentWeight])



        }
    }

    let finalWeights = weights.sort((a,b) => a[0] - b[0]);
    let obj = {}

    for (let i = 0; i < finalWeights.length; i++) {
        if (obj[finalWeights[i][0]] === undefined) {
            obj[finalWeights[i][0]] = [finalWeights[i][1]];
        } else {
            obj[finalWeights[i][0]].push(finalWeights[i][1])
        }

    
    }
    
    for (key in obj) {
        obj[key] = obj[key].sort();
    }

    let arr = Object.entries(obj).sort((a,b) => a - b).map(weight => weight[1]);
    let last = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            last.push(arr[i][j]);
        }
    }

    return last.join(' ');
    
}


// console.log(orderWeight("56 65 74 100 99 68 86 180 90"))

// "2000 10003 1234000 44444444 9999 11 11 22 123"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));



// function orderWeight(str) {
//      return strng
//          .split(" ")
//          .map(function (v) {
//              return {
//                  val: v,
//                  key: v.split("").reduce(function (prev, curr) {
//                      return parseInt(prev) + parseInt(curr);
//                  }, 0)
//              };
//          })
//          .sort(function (a, b) {
//              return a.key == b.key ?
//                  a.val.localeCompare(b.val) :
//                  (a.key - b.key);
//          })
//          .map(function (v) {
//              return v.val;
//          })
//          .join(" ");
// }