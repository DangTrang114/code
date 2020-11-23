// Sort an array from shortest string to longest

function lengthSort(arr) {
  // Write code here...
  return arr.sort(function(x,y){
     return x.length - y.length; 
  });
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length