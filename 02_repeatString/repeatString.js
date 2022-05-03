//const repeatString = function repeatString( str, num) {
  //   while (num > 0) {
    //     if (num <= 0) {
      //       return "error";
        // } else {
          //  return str.repeat(num); 
      //      }
     //   }
 //

 const repeatString = function repeatString(str, num) {
     if (num > 0) {
         return str.repeat(num); 
     } else if (num <= 0) {
            return 'Number must be greater than 0';
        } else {
            return '';
        }
    
    
     }
console.log(repeatString("hey", 0));

// Do not edit below this line
module.exports = repeatString;
