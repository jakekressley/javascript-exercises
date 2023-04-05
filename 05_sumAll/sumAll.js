const sumAll = function(start, end) {
    let sum = 0;
    if (!(start > 0 && end > 0)) return "ERROR";
    if (!(Number.isInteger(start) && Number.isInteger(end))) return "ERROR";
    if (start < end) {
        let i = start;
        while (i <= end) {
            sum += i;
            i++;
        }
        return sum;
    }
    else if (start > end) {
        let i = start;
        while(i >= 0) {
            sum += i;
            i--;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
