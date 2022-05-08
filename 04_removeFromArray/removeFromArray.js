
//const fruits = ["apple", "banana", "bread", "orange", "lemon"];

//console.log(fruits);
//console.log(fruits.splice(2,1)); //returns "bread"
//console.log(fruits); // returns all sans "bread"

//const removeItem = (arr, item) => {
   // let newArray = [...arr]
   // const index = newArray.findIndex((element) => element === item)
   // if(index !== -1) {
    //    newArray.splice(index, 1)
    //    return newArray
    //}
//}

//console.log(removeItem(fruits, "bread"))

///////////////////////////////////

const removeFromArray = function(arr, item) {
      newArray = [...arr];
      const index = newArray.findIndex((element) => element === item);
      if(index !== -1) {
          newArray.splice(index, 1);
          return newArray;
      }

}

console.log(removeFromArray([1, 2, 3, 4], 3));





//method 1//
//const removeFromArray = function(firstArray, toRemove) {
  //  return firstArray.filter(function(ele){ 
    //    return ele != toRemove; 
  //  });
    
//};

//console.log(removeFromArray([1, 2, 3, 4], 3));
//method works correctly --- deletes undefined value in array

//method 2
//const removeFromArray2 = function (array, num) {
  //  delete array[num - 1];
   // newArray = [...array];
    //return newArray;
//}

//console.log(removeFromArray2([1,2,3,4], 3));
//method nearly works, but leaves undefined value --- array is 4 values long instead of 3

//method3

//const removeFromArray = function(array, toRemove){
  //  let removed = array.splice((toRemove - 1), 1)
  //  console.log(removed);
  //  console.log(array.splice(removed, 1));

//};

//removeFromArray([1, 2, 3, 4], 3);

/////////////////////////////////////////////////

//function myFun(a,b, ...manyMoreArgs) {
  //  console.log(a);
    //console.log("b", b);
    //console.log("manyMoreArgs", manyMoreArgs);
//}

//myFun("one", "two", "three", "four", "five", "six");

//////////////////////////////////////////////////////

//function sortArguments() {
  //  let args = Array.from(arguments)
    //let sortedArgs = args.sort()
    //return sortedArgs
  //}
  //console.log(sortArguments(5, 3, 7, 1))
// Do not edit below this line
module.exports = removeFromArray;
