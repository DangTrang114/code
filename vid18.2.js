// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  // your code here!
   return arr.filter(function(x){
      return x%2===0;
  });
}