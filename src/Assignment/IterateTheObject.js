function solve(obj){
   // Iterate using for of loop
   for(let value of Object.values(obj)){
     console.log(value);
   }



  // Iterate using for in loop
  for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
  }
}