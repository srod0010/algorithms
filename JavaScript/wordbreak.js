//leetcode #139
// Given a non - empty string s and a dictionary wordDict containing a list of non - empty words, determine
// if s can be segmented into a space - separated sequence of one or more dictionary words.


var wordBreak = function (s, wordDict) {
    let tab = new Array(s.length + 1).fill(false);
    tab[0] = true
    for (let i = 0; i < s.length; i++) {
        if (!tab[i]) continue;
        for (let j = i + 1; j < tab.length; j++) {
            let word = s.slice(i, j);
            if (wordDict.includes(word)) tab[j] = true;
        }
    }

    return tab[tab.length - 1];
};