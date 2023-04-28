console.log('function');


// function = set of code designed to perform any particular task are functions
// it also helps you acheive reusability / DRY principle


// 1 2 3 4 5
// --> average of 5 no and multiply the result with 1st no
// --> average of 5 no and divide the res with 1st no


// function declaration / function creation
// function --> keyword
// printMyName ---> function name
// inside curley braces --> function body
// while defining the function we accept function parameters
// while calling the function we pass arguments

//function myNumber(){
//console.log(1);
//}
//myNumber();//calling / invoking
//
//function myString(){
//console.log('Kunal, Gaurav, Pranay');
//console.log('Ujjwal');
//console.log('Aswath');
//console.log('Punit');
//}
//myString();
//
//function avgOfThreeNo(no1,no2,no3){
//   const sum= no1+no2+no3;
//   console.log(sum, typeof sum);
//   // type coersion
//   const avg = no1+no2+no3/3; //type of arithmatic operation its converts string to number iis called type coersion
//   console.log('avg is', avg);
//   console.log('type of avg is', typeof avg);



//}
//avgOfThreeNo(10, 30, '40');
//avgOfThreeNo('10',30,'40');
//avgOfThreeNo(30,40,50);

//5*5 --> 55555
//"5"*5 --> 55555
//"5"*"5" --> 55555

//function expression

//const  multiplication = function(no1, no2){
//console.log('no1 is', no1);
//console.log('no2 is', no2);
//const res = no1*no2;
//console.log('multiplication is', result);
//
//}

// "abc"*"abc" --> NAN
//

//multiplication();
// will this log or nor
// --> yes
// --> no
//multiplication(10,20);

// Q1- divide 10,5 the no and multiply the result by 10
// Q2- divide 20, 5 no and give me the square of the result

//const division = function(no1, no2){
//console.log('start');
//const res = no1/no2;
//console.log('result is' res);
//return res;
//console.log('end');
//
//}

// return keyword to return anything from a function
// after writing return statement no code will be executed in the func
// if function doesn't return anything then it return by default undefined

// const ans1 = division(10,5);
// console.log('ans1 is ', ans1*10);
// const ans2 = division(20,5);
// console.log('ans2 is ',ans2**2);

function addition(no1,no2){
console.log('start');
const result = no1+no2;
console.log(result);
return;
  // return
    console.log('result is ', result);
    console.log('result is ', result);
    console.log('result is ', result);
    console.log('result is ', result);
    console.log('result is ', result);
    // return
}

const res = addition(50,60);
console.log(res);
//addition(1,2);










