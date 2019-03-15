function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    let start = 0,
        boundary = arrayOfChars.length - 1;
    while (start < boundary) {
        let first = arrayOfChars[start],
            second = arrayOfChars[boundary];
        arrayOfChars[start] = second;
        arrayOfChars[boundary] = first;
        start++;
        boundary--;
    }

    return arrayOfChars;
}