const repeatString = function(string, num) {

    if(num < 0 ) {
        return "ERROR";
    }

    let return_string = "";

    for(let i = 0 ; i < num ; i++) {
        return_string += string;
    }

    return return_string

};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
