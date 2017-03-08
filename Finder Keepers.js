/*
Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

function findElement(arr, func) {
  var args = Array.prototype.slice.call(arguments),
      array = args[0],
      fn = args[1],
      res;

  for (var i = 0; i < array.length; i++) {
    var num = array[i]; 
    if (fn(num)) {
      res = num;
      break;
    }
  }  
  
  return res;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
