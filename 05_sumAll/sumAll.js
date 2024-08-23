const sumAll = function(num1, num2) {

    let sum = 0;

    if(num1 < 0 || num2 < 0) {
        // returns error for negative values
        return "ERROR";
    }
    else if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        // Checks if the number is an integer, and, furthermore, if it's a number
        return "ERROR";
    }

    if(num1 > num2) {
        // num1 is always the smallest
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for(let i = num1 ; i <= num2 ; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
