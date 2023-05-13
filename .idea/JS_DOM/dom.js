// BOM-->  browser object model

//console.log(clear);

console.log('starting Dom');
//console.warn('info');
//console.log('error occured');

console.log([1,2,3,4,5]);
console.table([1,2,3,4,5]);

console.log(window.console);
console.log(window.document);
//alert('Hi this is me');

//to get confirmation about something --> true or false

let userChoice= confirm('Are you sure want to go back?');
//console.log('getting user input');
//console.log(userChoice);


// can be used to get input from user
let value = prompt('Enter your name')

console.log(value);

// console.log(window.document);
// console.log(document);

//document propertise

console.log('URL', document.URL);
console.log('Head', document.head);
console.log('Title', document.title);
console.log('Body', document.body);
console.log('images', document.images); //Js  obj which has a bundle of key value pairs
console.log('links', document.links);//Js  obj which has a bundle of key value pairs
console.log('links', document.forms);//Js  obj which has a bundle of key value pairs
console.log('links', document.scripts);//Js  obj which has a bundle of key value pairs

// selector in DOM

// select using id

//return single element
const googleLinkTag = document.getElementById('google-link');
console.log(googleLinkTag);

const googleLinkTagQ = document.querySelector('#google-link');
console.log(googleLinkTagQ);

/// select using  Tag name
// return HtmlElement collection

const anchorTag = document.getElementsByTagName('a');
console.log(anchorTag);


// query selector can be used to select any element using any of its attributes --> id, tagname, className
// query selector by default selects the first match only

const anchorTagQ = document.querySelector('a');
console.log(anchorTagQ);

// select using tagname
// returns HTMLelement collection

//const anchorTagUsingClassName =