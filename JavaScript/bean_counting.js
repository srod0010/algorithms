function beanCounting(str, letter) {
   return charCount(str, letter)
}


// console.log(beanCounting('BBBeans'))


function charCount(str,letter) {
    let count = 0;
    for (char of str) {
        if (char == letter) count++;
    }

    return count;
}

console.log(beanCounting('hello','h'))