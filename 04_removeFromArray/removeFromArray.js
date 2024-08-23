const removeFromArray = function(array, ...rest) {

    let modifiedArray = array.map((x) => x);

    outer:
    for(let i = 0 ; i < modifiedArray.length ; ) {
        for(let j = 0 ; j < rest.length ; j++) {
            if(modifiedArray[i] === rest[j]) {
                modifiedArray.splice(i, 1);
                continue outer;
            }
        }
        i++;
    }

    return modifiedArray; // modified array

};

// Do not edit below this line
module.exports = removeFromArray;
