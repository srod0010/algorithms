function reverseWords(message) {
    reverseWord(message, 0, message.length - 1);

    let currentStart = 0;
    for (let i = 0; i <= message.length; i++) {
        if (message[i] === ' ' || i == message.length) {
            reverseWord(message, currentStart, i - 1);
            currentStart = i + 1;
        }
    }

    return message;
}


function reverseWord(message, start, end) {
    while (start < end) {
        let temp = message[end];
        message[end] = message[start];
        message[start] = temp;
        start++;
        end--;
    }

    return message;
}