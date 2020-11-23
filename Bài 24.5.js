/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
  // your code here
  if (a<=0){
      return false;
  }
  if (b<=0){
      return false;
  }
  if (c<=0){
      return false;
  }
  if(a>b&&a>c){
      return a*a==b*b+c*c;
  }
  else{
      if(b>c&&b>a){
          return b*b==a*a+c*c;
      }
      else {
          return c*c==a*a+b*b;
      }
  }
}