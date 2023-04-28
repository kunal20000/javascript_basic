console.log('start');

//var a;
//console.log(a); //undefined
//a = 10;
// -----
// ----
// ----
// ----
//var a; // wont throw error in case of var
//console.log(a);
//a=20
//console.log(a);
//console.log(my); //not defined
//console.log('end');

// var was used mostly before ES6 --> 2015

// two more ways to define a variable
// let and const
//let c = 30;
//console.log(c);


// const
//const a = 10;
//console.log(a);
// a=20; // cant do this as its constant
// const b; //will throw an error
// b=20

// primitive types
// --string
// --number --> limited to 2^53-1
// --boolean
// --null
// --undefined
// --BigInt
// --Symbol

//const val = true;
//console.log(val);
//
//const val2 = false;
//console.log(val2);

//let b;
//let b = undefined --> automatically
//console.log(b); //undefined

//let c = null;
//console.log(c);

//let d = undefined;
//console.log(d);

//let e = "";
//console.log(e);

//let bigVal = BigInt(123); //it takes log value BigInt
//console.log(bigVal);

// object
// array
// function
// object has key and value
// {
//     property/key: value
// }

//let instructor={
//name: 'abhinav',
//role: 'Instructor',
//birthplace: null,
//noOfClasses: 5,
//teaching: true
//}
//let student={
//    name: 'Syed',
//    role: 'student',
//    birthPlace: null,
//    noOfClasses: 6
//}

//console.log(instructor);
//console.log(student);

// // accessing properties/key of an object
// // using dot notation

//console.log(instructor.noOfClasses);
//console.log(student.birthPlace);
//console.log(student.teaching);

// using dynamic access
// obj['keyname']
//let property = 'role';
//console.log(instructor.role);
//console.log(instructor['role']);
//console.log(instructor[property]);



// Array
//const num = [156, 234, 308, 41]
// index starting from 0
//const names = ['abhinav', 'aswath', 'ujjwal', 'syed'];
//console.log(num);
//console.log(names);
//console.log(names[3]); // syed
//console.log(num[2]);
//const values = ['abhinav', 67, true, null, {name: 'Abhinav'}]
//console.log(values[3]);
//console.log(values[4].name); // Abhinav,


//const a = 'something';
//const b = [1,2.3];
//const c = {
//    name: 'Abhi'
//};
//const d = 3.14; //floating value
//const e= 100; //integer value
//const f = undefined;
//const g = BigInt(23);
//const h = '';
//const i = null;



//console.log(typeof a);
//console.log(typeof b);
//console.log(typeof c);
//console.log(typeof d);
//console.log(typeof e);
//console.log(typeof f);
//console.log(typeof g);
//console.log(typeof h);

// --------------------------------------------
// Type conversion

//const a= 10
// const b = "10"
//const b = "10abh" // not convertable hence NAN --> not a number
//const c = false;
//const d = true;
//console.log( a, typeof a);
//console.log( b, typeof b);
//console.log( c, typeof c);
//console.log(Number(b), typeof(b));
//console.log(Number(c));
//console.log(Number(d));


//
//const num = 10;
//const myNUmbers=[1,2,3,4,5,6];
//console.log(num, String(num));
//console.log(c, String(c));
//console.log(d, String(d));
//console.log(myNUmbers, String(myNUmbers));

//const marks1 = "28.23dff";
//const marks2 = "28erer";

//console.log(Number(marks1),Number(marks2));

// will parse the string and extract no and also always show integer value
//console.log(parseInt(marks1), parseInt(marks2));
//console.log(parseFloat(marks1), parseFloat(marks2));

//*/
// --------------------------------------------
// Type coersion --> automatic type conversion if their is arithmatic operation
// JS execute left to right
// +, -, *, /

const a = "10";
const b = "22";

console.log(a+b);// addition but concatination
console.log(Number(a)+Number(b)); //it converts in number and add them

console.log(a-b);
console.log(Number(a)-Number(b));// will be automatically by Js

console.log(a*b);
console.log(a/b);

const x =10;
const y = "20";
const z= 10;

console.log(x+y+z);//left t0 right
console.log(z+x+y);// right to left
console.log(x+y+z);
console.log(y+x+z);
// its depend upon 1st type its string or number then work accordingly
console..log("1"--"1");