

var object = {
    name : "kunal",
    age : 34
}
var object = new Object();


var object = Object.create(null);

function Person(name){
    this.name = name;
    this.age = 21

}

var object = new Person("sudheer")


// Es6 class

class Person{
    constructor(name){
        this.name = name;
    }
}
 var object = new Person("kunal");

 // call apply blind
// call
// call invoke a function with given this values and arguments provided one by one

var employee1 = {firstName: "john", lastName: "sapate" };
var employee2 = {firstName: "kunal", lastName:"sapate"};

function invite(greeting1, greeting2){
    console.log(greeting1 +" "+ this.firstName +" "+this.lastName+", "+ greeting2)
}

invite.call(employee1, "hello","how are you");
invite.call(employee2, "hello", "how are you");

// apply 
// in apply() method invoke a function with given this values and arguments passed as an array

var employe3 = {firstName:"kunal", lastName:"sapate"};
var employe4 = {firstName:"shubham", lastName:"jadhav"};

function invite(greeting1, greeting2){
    console.log(greeting1+" "+ this.firstName+" "+this.lastName+" ,"+ greeting2);
}

invite.apply(employe3,["hello", "how are you"]); // hello kunal sapate, how are you
invite.apply(employe4,["hello", "how are you"]); // hello shubham jadhav how are you

// bind 
//  returns a new function passing any number of arguments

var employe5 = {firstName:"omkar", lastName:"sapate"};
var employe6 = {firstName:"shubham", lastName:"sapate"};

function invite(greeting1, greeting2){
    console.log(greeting1 +" "+ this.firstName + " "+ this.lastName + " "+ greeting2);
}

var inviteEmployee1 =  invite.bind(employe5);
var inviteEmployee2 = invite.bind(employe6);
inviteEmployee1("hello", "how are you"); // hello omkar sapate how are you
inviteEmployee2("hello", "how are you"); // hello shubham sapate how are you


// convertin string into object

JSON.parse(text);

// converting object into string

JSON.stringify(object);


let arrayIntegers = [1,2,3,4,5,6];
let arrayIntegers1 = arrayIntegers.slice(0,2);

console.log(arrayIntegers1);

const handler = ()=> console.log("this is click handler function");
document.addEventListener("click", handler);

// HIGHER ORDER FUNCTION
const firstOrderFunction = ()=>
    console.log("Hello I am the first order function");
    const higherOrder = (ReturnFirstOrderFunction)=> ReturnFirstOrderFunction();
    higherOrder(firstOrderFunction);

    // hoisting exapmple
    console.log(message);
    var message = "The variable has been hoisted";


    //closure

    function welcome(name){
      var greetingInfo = function(message){
        console.log(message + " "+ name);

      };
      return greetingInfo;
    }
    var myFunc = welcome("john");
    myFunc("welcome ");
    myFunc("Hello Mr.");


// promise

const promise = new Promise(function(resolve,reject){
    //promise description
})

const promise1 = new Promise(
    (resolve)=>{
        setTimeout(()=>{
            resolve("I am promise");
        },5000);
    },
    (reject)=>{

    }
);

promise1.then((value)=>console.log(value));

const promise2 = new Promise(
    (resolve)=>{
        setTimeout(()=>{
            resolve("I am promise");
        },2000);
    },
    (reject)=>{}
);

promise2.then((value)=>console.log(value));

setTimeout(function(){
    console.log("good morning");
},2000);

setInterval(function(){
    console.log("I am here to rule");
},2000);

// current date in javascript 

var data = new Date();
console.log(data);


