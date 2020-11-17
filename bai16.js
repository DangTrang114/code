/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
  var a = 1;
  for (i=start ; i < (end); i++){
      a=a*i;
  }
  return a;
}
 