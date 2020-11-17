/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
function sum(numbers) {
   var tong =0;
   for (var number of numbers){
       tong=tong+number;
   }
   return tong;
}