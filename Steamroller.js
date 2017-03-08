/*
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
  var start = arr.slice(),
      end = arr.slice();
  
  (function checkItAgain (a) { // a --> array
    end = [];
    for (var i = 0; i < a.length; i++) {
      if (!Array.isArray(a[i]) && a[i] !== '') {
        end.push(a[i]);
        // <-- non array element added to 'end' array.
      }
      else {
        for (var j = 0; j < a[i].length; j++) {
          end.push(a[i][j]);
          // <-- all elements of array' element a[i] added to 'end' array
        }
      }
    }
    
    for (var k = 0; k < end.length; k++) {
      start = end.slice();
      // start array prepared for eventualy next loop throw checkItAgain function
      if (Array.isArray(end[k])) {
        // if 'array' element founded, start loop again...
        checkItAgain(start);
      }
    }
  })(start); // this ensure that this function will be called at least once
  
  return start;
}

steamrollArray([1, {}, [3, ['a',[[[[[[[4,[[[[[[[3,[[3,[[[4]]]]]]]]]]]]]]]]]]]]]]);
