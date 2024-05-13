const repeatString = function(word, nbOfRepetition) {
    if (nbOfRepetition < 0) {
        return 'ERROR';
    }

    if (word === '') {
        return '';
    }

    let finalString = '';

    for (i = 0; i < nbOfRepetition; i++) {
        finalString += word;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
