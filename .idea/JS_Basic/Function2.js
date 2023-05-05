console.log("function");
//Hoisting in JS

//console.log(x); //undefined
//console.log(printMyName);// he print all function
//console.log(calculate); //undefined

//printMyName(); // he prints the output of function
//calculate();


//var x =10;
//console.log(x); //Type error is not a function


//function printMyName(){
//console.log('Printing name');
//}

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

//let a =10;
//console.log('after denining a');
//console.log(a);
//a=20;
//console.log(a);

//const b =30;
//b=60;

//function sum(x,y){
//console.log(x+y);
//}
//sum(2,7);
//
//let multiply= function(x,y){
//console.log(x*y);
//}
//
//multiply(6,7);
//multiply("6","8");

//first class citizen in JS
// store function in variable
// we can pass function as arguments to function
//we can also receive function as arguments

//let calculate = function(value, fun){
//  console.log(value);
//  fun(value)
//}
//function square(no){
//console.log(no*no);
//}
//calculate(10, square)


const userinfo = {
  name: 'abhinav',
  teaching: true,
  printNameAndProfession: function(){
    console.log("printing name and profession");
  }
}

// userInfo.name

userinfo.printNameAndProfession();

let calculate = function(no , fun){
console.log(no);
console.log(fun);
let a =100;
let b =40;

let multi =a*b;
//fun(multi)
}
//
//let no = 30;
//let fun = function(value){
//console.log('value received is', value);
//}

function square(no){
console.log(no*no);
}

calculate(10,square);// square is callback function

calculate(30, function(value){
console.log('value received is', value);
})//callback function anonyms function


// calculate --> higher order function -->
// when a function takes a function as argument
// when a function return a function from it
// or both


function returnFun(){
let a =10;
return function(){
 console.log('calculating result');
}
//console.log(a);
//return a;
}

let result  = returnFun();
console.log(result); // the whole function printed
result();



// first class function
// anonyms functions // this function has not name
// higher order functions --> only possible because of first class fun
// callback functions

// Arrow function

let printName = (myName) =>{
 let a=100;
 let b = 100;
 console.log(a+b);
 console.log('myNameIs', myName);
}

printName('kunal');
printName('Aswath');

let getValue1 = ()=> 100


let result1 = getValue1();
console.log(result1);

let getValue2 = (num, douFun)=>{
// return douFun;
//
// let res = douFun(num);
// return res;
 return douFun(num); //return 40
}


let result2= getValue2(20,(no)=> 2*no);

//let res = getValue2(20,(no)=>{
//  return 2*no;
//})
console.log(res);




// let a = 30
// let myFync = function(){

// }
