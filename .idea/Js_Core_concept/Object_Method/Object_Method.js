

const arr = ['val1', 'val2', 'val3'];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

arr.myProperty = 'value';
console.log(arr.myProperty);

const newArr = new Array(1,2,3);
console.log(newArr);

console.log(newArr instanceof Array);
console.log(newArr instanceof Object);

const obj = {
  username: "kunal"
}
console.log(obj);
obj.address = 'India'
obj.city = 'satara'
console.log(obj);

let a =100;
console.log(typeof a);
console.log(a+100);


function callTheFunPassed(callback){
  console.log('calling the function');
  console.log(callback instanceof Function);

  if(callback instanceof Function){
     callback();
  }else{
    console.log("please a pass a function  to be called");
  }
  console.log(5+5);
  console.log('');

}

callTheFunPassed(()=>{
 console.log("callback function");
})

callTheFunPassed(1);
console.log(callTheFunPassed instanceof Function);
console.log(callTheFunPassed instanceof Object);

callTheFunPassed.someProperty = 'someValue';
console.log(callTheFunPassed);

let userInfo = {
 username: "kunal",
 password: 2524,

};

let address = {
city: "satara",
pin: 425021,
};

const infoObj = {...userInfo, ...address};
console.log(infoObj);
console.log(userInfo);
console.log(address);


let createObj = Object.assign({}, userInfo, address);
console.log(createObj);

let admin = {
  role: 'admin'
}

// taken target object (1st argument)
// copied all the properties from multiple source objects into target object
// returned the modified target object

let completObj = Object.assign({}, admin, userInfo, address);
console.log(completObj);
console.log(admin);
console.log(completObj === admin);

// enumerating objects
// for in loop for Objects

let obj1 = {
   username: 'Abhinav',
      address: 'Delhi',
      role: 'Instructor',
      takingClass: true,
      noOfClass: 5
}

for(let myVal in obj1){
  console.log('key-->', myVal);
  console.log('val-->', obj1[myVal]);
}

// to access keys of an object

const keys = Object.keys(obj1);
console.log('keys-->', keys);

// to access the values

const values = Object.values(obj1);
console.log('values-->', values);

// to access key values together
// converts the key value pairs into separate arrays and push it into new array
// & return you the newly created array

const entriesInObj = Object.entries(obj1);
console.log(entriesInObj);

// vice versa of object.entries

const getObjFromArray = Object.fromEntries(entriesInObj);
console.log(getObjFromArray);

let arr2 = [100, 'hundred', true, [1,2,3], {value: 100}]
console.log(arr2);

// returns an object with objects
// tells information about each property on object

const propertyDesc = Object.getOwnPropertyDescriptors(obj1);
console.log(propertyDesc);

// accessing property of an object
console.log(obj1.username);

const username = "noOfClass";
console.log(obj1[username]);
console.log(obj1['role']);
console.log(obj1['address']);

let newObj = {};
newObj.newValue = 'value';
const pro2 = 'property2';
newObj[pro2] = 'value2';
newObj['property3'] = 'value3';
console.log(newObj);

const source1 = {
 property4 : 'value4'
}
Object.assign(newObj, source1, {property5: 5});

delete newObj.newValue;
delete newObj.property2;
console.log(newObj);

let user = {
    username: 'abhinav',
    address: 'Delhi'
}
user.username = 'kunal';
delete user.username;
//console.log(user);

console.log(user.username);
console.log(user.address);
console.log(user);

Object.defineProperty(user, "role", {
     value: 'Instructor',
     writable: true,
     configurable: true,
     enumerable: true
})


// writable -->
// config which allows us to override or update the value of a property
// default is false

// configurable
// allows us to delete the property if true
// default is false


// enumerable
// allows us to enumerate through the property of the object
// default is false


user.username = 'Suraj'
user.role = 'Student';

//delete user.username;
//delete user.role;
//console.log(user);


Object.defineProperties(user, {
    noOfClasses: {
        value: 5,
        writable: true,
        // enumerable: true,
        configurable: true
    },
    subject: {
        value: ['HTML', "CSS", "JS", "React"],
        writable: true,
        enumerable: true,
        configurable: true
    }
})

console.log(user);
let keys1 = Object.keys(user);
let values1 = Object.values(user);
console.log('keys --> ',keys1);
//console.log('values---> ', values1);

let propertyNames  = Object.getOwnPropertyNames(user);
let propertyDescriptor = Object.getOwnPropertyDescriptors(user);
console.log('propertyNames-->', propertyNames );
console.log('propertyDescriptor-->', propertyDescriptor);



// sealed

let user1 = {
    username: 'abhinav'
}

// user1.username = 'Ujjwal' //update a existing property
// user1.address = 'india' // add new property
// delete user1.username //deleting property
//
// Object.seal(user1);
//
//console.log(user1);

user1.username = 'Ujjwal' // updating existing property is possible
user1.address = 'India' //cant add new property
delete user1.username // cant delete a property as well

console.log(user1);
console.log(Object.isSealed(user1)); //check if an objct is sealed

Object.freeze(user1);
user.username = 'Ujjwal' // updating existing property is not possible
user.address = 'India' //cant add new property
delete user.username // cant delete a property as well

console.log(user1);
console.log(Object.isFrozen(user));