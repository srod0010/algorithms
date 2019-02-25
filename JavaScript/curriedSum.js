function curriedSum(numArgs) {
   const numbers = [];

   return function _curriedSum(num) {
       numbers.push(num);

       if (numbers.length === numArgs) {
           return numbers.reduce((acc, el) => acc += el);
       } else {
           return _curriedSum;
       }
   }
}


const sum = curriedSum(3);
console.log(sum(3)(2)(1));