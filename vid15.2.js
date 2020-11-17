/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 */
function first(arr, n) {
  var b=[];
 for(i=1;i<=n;i++){
 c=arr.shift();
 b.push(c);
 }
 return b;
}
// console.log(first([1, 2, 3], 2)); // expect [1, 2]