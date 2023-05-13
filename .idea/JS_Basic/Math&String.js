
// math functiion in javascript

console.log(Math);

console.log(Math.PI);// pi value
console.log(Math.SQRT2);


let no1 = 3.954;
let no2 = 3.554;
console.log(Math.round(no1));
console.log(Math.round(no2));

console.log(Math.ceil(no2));
console.log(Math.floor(no1));

console.log();

console.log('max no is', Math.max(6,7,8,9));
console.log('min no is', Math.min(4,5,2,7));

console.log(Math.pow(2,3));

console.log(Math.round(Math.random() *10));

console.log(Math.cos(Math.PI/4));
console.log(Math.tan(Math.PI/4));

console.log(Math.sqrt(20));

//// String///

let username = 'kunal';
let info = 'my name is kunal';
let role = 'Instructor';

let des1 = "it's kunal";
let des2 = 'it"s kunal';
let des3 = 'it\'s kunal';
let des4 = 'it\"s kunal';

console.log(username);
console.log(info);
console.log(role);
console.log(des1);
console.log(des2);

console.log('kunal is \n gretaest coder of all time');
console.log('kunal is \t cool boy');

let str = 'kunal';
console.log(str.length);

arr=[1,2,3,4,5];
arr[3]=101;// it prints the index number
console.log(arr);

str[3] = 'j'; // you can acees it string re immutable
console.log(str);

let city= 'delhi';
let country= 'india';
let pin = '416077';
let locality= 'koregaon';

let address = city +"  "+ country;
console.log(address);

console.log("a live in city "
+ city +
" a city in "
+ country +
" pin is "
+ pin +
" and locality is "
+ locality
);

// template literals --> ES6 feture
console.log(`a live in ${city} a city in ${country} pin is ${pin} and locality is ${locality}`);

let string = 'I am string';
console.log(string.length);


console.log(string.indexOf('a'));
console.log(string.lastIndexOf('a'));
console.log(string.includes('a', 3));

console.log(str.charAt(3));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let splitStr = str.split(" ");
console.log(splitStr);
let splitStr1 = str.split(""); // it seprate all character using " ";
console.log(splitStr1);

let newStr = str.substring(1,6); // it return start index to end index
console.log(newStr);
// substrings cant use -ve values however slicing can

let newStr1 = str.slice(1,6);// it also return start index to end index
console.log(newStr1);
let newStr2 = str.slice(-5,-3);
console.log(newStr2);

let replaceStr = str.replace('string', 'boolean');
console.log(replaceStr);

// ['str1', 'str2', 'str3']
