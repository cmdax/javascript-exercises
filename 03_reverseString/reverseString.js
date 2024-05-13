const reverseString = function(word) {
    let reverseWord = '';

    for (let index = word.length-1; index >= 0; index--){
        reverseWord += word[index];
    }

    return reverseWord;

};

// Do not edit below this line
module.exports = reverseString;
