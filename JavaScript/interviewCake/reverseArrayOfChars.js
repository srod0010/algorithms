function reverse(arrayOfChars) {

    let i = 0;
    let j = arrayOfChars.length - 1;
    while (i < j) {
        let newBack = arrayOfChars[i];
        arrayOfChars[i] = arrayOfChars[j];
        arrayOfChars[j] = newBack;
        i++;
        j--;
    }

    return arrayOfChars;
}