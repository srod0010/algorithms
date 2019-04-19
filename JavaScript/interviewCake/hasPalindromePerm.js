function hasPalindromePermutation(theString) {
    let unpaired = new Set();

    for (char of theString) {
        if (unpaired.has(char)) {
            unpaired.delete(char)
        } else {
            unpaired.add(char);
        }
    }

    return unpaired.size <= 1;
}