/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
function multiply(arr) {
  var tich = 1;
  for (var ar of arr){
      tich = tich*ar;
  }
  return tich;
}