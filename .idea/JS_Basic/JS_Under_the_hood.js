// javascript engine -- a software or piece of code whhich understand the execute javascript

//chrome--v8
//firefox --> spiderMonkey
// internet explorer--> chakara
// core/ javasccript core---> safari


// Js code executed with stack is called callstack

// execution context --> environment where Js code is read and executed
//global exection context--> whaever  code which is not a inside a function is in gec
//function execution context--> whatever code is availbe in context


// step-1--> gec is created and pushed in call stack

// Js executed  in two phases
// creation phase--> code is scanned and memory is created for functions and variables and value is initialised
//execution phase-->

//console.log('before a giving value', a); //undefined
//console.log(sum); //complete function

//console.log('Starting here');
//var a=20;
//console.log('after a giving a value a =',a);
//
//console.log('before a giving value b =',b);
//var b= 50;
//console.log('after a giving a value b=', b);
//

sum();

function sum(){
console.log('starting sum');
console.log(myName);// get undefined
var myName='kunal';
console.log(myName); // get value

//console.log(multipleSum);

multipleSum(3,2);
function multipleSum(a,b){
 var c =100;
 console.log(a+b * 2);

  }
  console.log('ending sum');
}
console.log('end');



