function takeMultipleNumbersAndAdd (...theArgs){
    // write your code here
    let sum=0;
    for(const arg of theArgs){
        sum+=arg;
    }
    return sum;



}