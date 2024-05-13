const removeFromArray = function() {
    let baseArray = arguments[0];

    for (let indexArg = 1; indexArg < arguments.length; indexArg++) {
        let elementToCheck = arguments[indexArg];
        
        for (let indexBase = 0; indexBase < baseArray.length; indexBase++){
            let elementInBase = baseArray[indexBase];

            if (elementToCheck === elementInBase) {
                baseArray.splice(indexBase,1);
                indexBase--;
            }
        }
    }

    return baseArray;
};

// Do not edit below this line
module.exports = removeFromArray;
