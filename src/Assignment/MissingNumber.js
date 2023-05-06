function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
// write code here


let expectedSum = ((upperBound + lowerBound) * (upperBound - lowerBound + 1)) / 2;
  let sum=0;
 for(let i=0;i<arrayOfIntegers.length;i++){
     sum+=arrayOfIntegers[i];
 }

 const missingNumber= expectedSum-sum;
  console.log(missingNumber);

}