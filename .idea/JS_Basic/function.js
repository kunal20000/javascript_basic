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

function myNumber(){
console.log(1);
}
myNumber();//calling / invoking

function myString(){
console.log('Kunal, Gaurav, Pranay');
console.log('Ujjwal');
console.log('Aswath');
console.log('Punit');
}
myString();

function avgOfThreeNo(no1,no2,no3){
   const sum= no1+no2+no3;
   console.log(sum, typeof sum);
   // type coersion
   const avg = no1+no2+no3/3; //type of arithmatic operation its converts string to number iis called type coersion
   console.log('avg is', avg);
   console.log('type of avg is', typeof avg);



}
//avgOfThreeNo(10, 30, '40');
avgOfThreeNo('10',30,'40');
//avgOfThreeNo(30,40,50);

5*5 --> 55555
"5"*5 --> 55555
"5"*"5" --> 55555


