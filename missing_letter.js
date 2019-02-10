// #Find the missing letter

// Write a method that takes an array of consecutive(increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array.And it will be always exactly one letter be missing.The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a', 'b', 'c', 'd', 'f'] -> 'e'
// ['O', 'Q', 'R', 'S'] -> 'P'

function findMissingLetter(array) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let missing;

    for (let i = 0; i < array.length; i++) {
        let char1 = array[i].toLowerCase();
        let char2 = array[i+1].toLowerCase();
        let idx1 = alph.indexOf(char1);
        let idx2 = alph.indexOf(char2);

        if (idx2 === (idx1 + 2)) {
            missing = (idx2 - 1);
            break;
        }
    }
    
    if (alph.indexOf(array[0]) === -1) {
        return alph[missing].toUpperCase();

    }
    return alph[missing];
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));

