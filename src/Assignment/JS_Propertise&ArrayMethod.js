function arrayProperties(arr1, arr2) {
//    write your code here
   // arr1= ["apple","orange","mango"];
   // arr2 = ["pineapple","orange"];

   let arr3 = [...arr2,...arr1];
   arr3.push(arr2);
   console.log(arr3);
   arr3.pop();
   console.log(arr3.reverse());
   console.log(arr3.lastIndexOf("orange"));
    let res= arr3.slice(0,3);
   console.log(res.length);
   console.log(res.join());




}