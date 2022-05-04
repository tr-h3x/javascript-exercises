const reverseString = function(str) {
    splitString = str.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    return joinArray;

};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
