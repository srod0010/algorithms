function valid_parens(str) {
    const brackets = {
        '(':')',
        '{':'}',
        '[':']'
    }
    const opens = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (brackets[char] === undefined && opens.length === 0) {
            // if closing bracket and no unclosed openings return false
            return false;
        }

        if (brackets[char]) {
            // if open bracket add it to stack
            opens.push(char);
        } else {
            // char is a closing bracket
            // pop off most recent opening and see if char is the correct closing
            let currentOpen = opens.pop();
            if (brackets[currentOpen] !== char) {
                // false if char is not correct closing bracket for most recent opening
                return false;
            }
        }
    }

    return opens.length === 0;
    // if there are no unclosed opening brackets we return true

}

console.log(valid_parens('([]){()}'))
console.log(valid_parens('[(]{)}'))