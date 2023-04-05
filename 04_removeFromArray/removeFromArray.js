const removeFromArray = function(nums, ...args) {
    return nums.filter(e => !args.includes(e))
};

// Do not edit below this line
module.exports = removeFromArray;
