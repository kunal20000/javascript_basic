let count =0;
let generateOrder = function() {
 let func = function(){
   count++;
   let ans =  "Total orders = " + count;
   return ans;

 }
 return func;
 }