function reverseString(n) {
    //Write Code Here
    let reversedString ="";
    for(let i=n.length-1;i>=0;i--){
        reversedString+=n.charAt(i);
    }
  return reversedString;
}