const repeatString = function(inputString, repeatNumber) {
    let resultString = ""
    if (repeatNumber < 0) return "ERROR";
    for (let i = 0; i < repeatNumber; i++)
    {
        resultString += inputString;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
