/*

Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

*/

function smallestCommons(arr) {
  var max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      range = [],
      flags = 1, // how many numbers from range are good dividers
      result;
  
  for (var i = min; i <= max; i++) {
    range.push(i);
  }
  
  // checking smallest common multiple --> CSCM
  loopCSCM:
  for (var num = max; flags < range.length; num += max) {
    result = num;
    // iteration throw range array
    for (var k = range.length-2; k >= 0; k--) {
      if (num % range[k] !== 0) {
        flags = 1;
        continue loopCSCM;
      }
      else {
        flags++;
      }
    } // end range iteration
  }

  return result;
}

smallestCommons([23,18]);