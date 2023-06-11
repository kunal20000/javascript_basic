
Array.prototype.elementType = 'returns element type of array'
Array.prototype.maxLength = 100
let arr = [100, 200, 300, 400];
arr.push(10);
console.log(arr);
arr.elementType = "return element type of array";
console.log(arr.length);

console.log(arr.__proto__);
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log(arr.elementType);
//arr.puush();

let arr2 = ['abhinav', 'Suraj', 'Harsh'];
console.log(arr2);
console.log(arr2.elementType);


let arr3 = [true, '100', 100];
console.log(arr3.elementType);
console.log(arr3.maxLength);

Object.prototype.length = 300;

let obj = {
 address: 'india',
 //length: 30
}
console.log(obj);

let obj1 = {
    name: 'myname'
}

console.log(obj.length);
console.log(obj.__proto__);
console.log(obj1.length);

// protoyppe--> establishes a inheritance mechanism when we create anything in javascript  like array object function
// it works through something called as prototype chain which can be accessed using __proto__ property
// prototypical inheritance

// multiple inheritance and multi level inheritance

let person = {
    firstName: 'Abhinav',
    type: 'Person',
    getInfo: function(){
        console.log('I am a person');
    }
}

let player = {
    occupation: 'play',
    level: 'state',
    getPlayerInfo: function(){
        console.log('I am a player who can play at state level');
    }
}

let actor= {
    occupation: 'act',
    genre: 'Action',
    getActorInfo: function(){
        console.log('I am an actor who can act in action movies');
    }
}

// should not do --> not recommended
// player.__proto__ = person;
 console.log(player);
Object.setPrototypeOf(player, person);
console.log(player);
console.log(player.type);
player.getPlayerInfo();
player.getInfo();

actor.__proto__= person;
// 1st --> whose prototype needs to set
// 2nd --> what to set
Object.setPrototypeOf(actor, person);
console.log(actor.type);
console.log(actor.firstName);
actor.getInfo();

Object.setPrototypeOf(actor, player);
console.log(actor.level);
console.log(actor.occupation);
actor.getPlayerInfo();
actor.getActorInfo();


let cricketPlayer = {
    game:'cricket',
    skills: 'batting'
}
///cricketPlayer.__proto__ = player;

Object.setPrototypeOf(cricketPlayer, player);

console.log(cricketPlayer);
console.log(cricketPlayer.game);
console.log(cricketPlayer.skills);
console.log(cricketPlayer.level);
console.log(cricketPlayer.occupation);
console.log(cricketPlayer.type);
//console.log(cricketPlayer.__proto__);

let  protoTypeOfCric = Object.getPrototypeOf(cricketPlayer);
console.log(protoTypeOfCric);



//functional constructor

function person2(firstName, lastName){
 this.firstName = firstName;
 this.lastName = lastName;
}
person2.prototype.printFullName = function(){
 return `My full Name is ${this.firstName} ${this.lastName} I ${this.occupation} ${this.level} Games`
}

// why did we added printFullName in prototype

function Player(fName, lName, occupation, level){
//       this.fName = fName,
//       this.lName = lName
      // a way to call person and pass fNAme and lName
      // a way to pass the context for which we want firstname and last name
      person2.call(this, fName, lName);
      this.occupation = occupation;
      this.level = level;
}
Player.prototype = Object.create(person2.prototype);
// cricketplayer --> experties, game-> cricket

console.log(Player);

const person3 = new person2('kunal', 'sapate');
console.log(person3);
console.log(person3.printFullName());

const person4 = new person2('aswath', 'kumar');
console.log(person4);
console.log(person4.printFullName());

const player1 = new Player('pankaj', 'sapate', 'play', 'national');
console.log(player1);
console.log(player1.printFullName());

const player2 = new Player('Ujjwal', 'Kumar', 'coach', 'state');
console.log(player2);
console.log(player2.printFullName());

const player3 = new Player('Dinesh', 'Kumar', 'play', 'international');
console.log(player3);
console.log(player3.printFullName());

// extends
// property descriptors
let obj = {
    username: 'abhinav'
}

obj.address = 'india';
// obj = {
//     myname: 'abhi'
// }

// avoiding extending built in object
 let arr1 = {1,4,6,8};
 arr1.push(30);

