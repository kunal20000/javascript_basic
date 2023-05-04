console.log("function");
//Hoisting in JS

//console.log(x); //undefined
console.log(printMyName);// he print all function
//console.log(calculate); //undefined

printMyName(); // he prints the output of function
//calculate();


var x =10;
console.log(x); //Type error is not a function


function printMyName(){
console.log('Printing name');
}

//var calculate = function(){
//console.log('name');
//}
//calculate();

//GEC created
// Phase 1---> creation/ memory creation/code scanning


//x-->10
// printMyName--> function(){
//console.log('printing name');
//}
///calculate--> function(){
//console.log('name');
//}

// Phase-2  execution phase

// res
//undefined
//functon(){
//console.log('printing name')
//}
//undefined
//printing name
//10


//console.log(a);

//console.log('start');

//console.log(a);// reference error
//Scenario-1;
// if a is not present in the code hence not created in the execution phase
// a will be reference error "a is not defined"

//console.log(a);
//let a =10;
//scenario-2
// a is defined and availble in memory but we cant access it
// and it gives error ref error "cant acces before "initilization"
// temporal dead zone

let a =10;
console.log('after denining a');
console.log(a);
a=20;
console.log(a);

const b =30;
//b=60;

function sum(x,y){
console.log(x+y);
}
sum(2,7);

let multiply= function(x,y){
console.log(x*y);
}

multiply(6,7);
multiply("6","8");

//first class citizen in JS
// store function in variable
// we can pass function as arguments to function
//we can also receive function as arguments

let calculate = function(value, fun){
  console.log(value);
  fun(value)
}
function square(no){
console.log(no*no);
}
calculate(10, square)

