function getNumbersGreaterThan5(nums) {
    // write code here
    let res=[];
    for(let i=0;i<=nums.length;i++){
        if(nums[i]>5){
          res.push(nums[i]);
        }
    }
    return res;
    // return the output , do not use console.log here
}