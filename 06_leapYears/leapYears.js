const leapYears = function(year) {
    let divisibleBy4 = (year % 4 == 0);
    let divisibleBy100 = (year % 100 == 0);
    let divisibleBy400 = (year % 400 == 0);

    if (divisibleBy4) {
        if (divisibleBy100 && divisibleBy400) {
            return true;
        } else if (divisibleBy100) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
