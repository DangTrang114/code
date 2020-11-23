/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
  // your code here
  var a=[];
  a.push(Math.sin(number).toFixed(3));
  a.push(Math.cos(number).toFixed(3));
  a.push(Math.tan(number).toFixed(3));
  return a;
}
