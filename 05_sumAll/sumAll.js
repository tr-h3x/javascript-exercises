


const sumAll = function(start, end) {
    var lower = Math.min(start, end);
    var upper = Math.max(start, end);

    var total = 0;
     for (var i = lower; i <= upper; i++) {
         total += i;
     }
return (total);
};

console.log(sumAll(-10, 4));
/*fails terminal test bc it actually works with negative numbers

//https://stackoverflow.com/questions/30036206/return-sum-all-numbers-in-a-range



























// Do not edit below this line
//module.exports = sumAll;

/*
# Exercise 05 - sumAll

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop
*/