Array.prototype.squareAndSort = function() {
  // write your code here
  const numbers = this.filter(element=> typeof element === 'number');
  const squareArray = numbers.map(number=> number**2);
  return squareArray.sort((a,b)=> a-b);

};