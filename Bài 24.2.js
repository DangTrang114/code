/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
 */
function average(arr) {
  // your code here!
  arr.reduce((x,y)=>a=x+y);
  var TB=a/arr.length;
  return Math.round(TB);
}