const ftoc = function(temp) {
  let newTemp = (temp - 32) * (5/9);
  let rounded = Math.round((newTemp + Number.EPSILON) * 10)/10;
  return rounded;
};

//console.log(ftoc(32));

const ctof = function(temp) {
  newTemp = ((temp * (9/5)) + 32);
  rounded = Math.round((newTemp + Number.EPSILON) * 10)/10;
  return rounded;
};

//console.log(ctof(0));



/*const ftoc = function(temp) {
  let newTemp = (temp - 32) * (5/9);
  return newTemp.toFixed(1);
};
console.log(ftoc(32));

const ctof = function(temp) {
  newTemp = ((temp * (9/5)) + 32);
  return newTemp.toFixed(1);
};
console.log(ctof(0));

//fails tests in .spec.js but prints to console as expected
//perhaps returning wrong object type
//TESTS PASSED --- required Math.round() !().toFixed(1)
*/
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
