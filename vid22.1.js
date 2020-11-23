// Given an array of arrays, flatten them into a single array
/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */
function flatten(arr) {
  // viết code ở đây.
  return arr.reduce(function(x,y){
      return x.concat(y);
  },[]);
}