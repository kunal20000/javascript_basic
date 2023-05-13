// BOM-->  browser object model

//console.log(clear);

console.log('starting Dom');
//console.warn('info');
//console.log('error occured');

//console.log([1,2,3,4,5]);
//console.table([1,2,3,4,5]);

//console.log(window.console);
//console.log(window.document);
//alert('Hi this is me');

//to get confirmation about something --> true or false

//let userChoice= confirm('Are you sure want to go back?');
//console.log('getting user input');
//console.log(userChoice);


// can be used to get input from user
//let value = prompt('Enter your name')

//console.log(value);

// console.log(window.document);
// console.log(document);

//document propertise

//console.log('URL', document.URL);
//console.log('Head', document.head);
//console.log('Title', document.title);
//console.log('Body', document.body);
//console.log('images', document.images); //Js  obj which has a bundle of key value pairs
//console.log('links', document.links);//Js  obj which has a bundle of key value pairs
//console.log('links', document.forms);//Js  obj which has a bundle of key value pairs
//console.log('links', document.scripts);//Js  obj which has a bundle of key value pairs

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

const anchorTagUsingClassNAme = document.getElementsByClassName('google');
console.log(anchorTagUsingClassNAme);

const anchorTagUsingQ = document.querySelector('.google');
console.log(anchorTagUsingQ);

const anchorTagUsingQAll = document.querySelectorAll('.google');
console.log(anchorTagUsingQAll);

const inputE1 = document.getElementsByTagName('input');
console.log(inputE1);

const inputE2 = document.querySelector('input[type="number"]');
console.log(inputE2);

// if element not present on DOM

const sectionEl1 = document.querySelector('section');// null
console.log(sectionEl1);
const sectionEl2 = document.getElementsByTagName('section');//[]
console.log(sectionEl2);
const sectionEl3 = document.getElementById('section');null
console.log(sectionEl3);
//const sectionEl4 = document.getElementByClassName('.kunal');
//console.log(sectionEl4);

//// select and modify the element

const mainElUsingTag = document.querySelector('main.container');
console.log(mainElUsingTag);

const mainElUsingClass = document.querySelector('.container');
console.log(mainElUsingClass);

const mainContainerElUsingById = document.getElementById('myContainer');
mainContainerElUsingById.innerText = 'Update Body Container';

// select all the list items and add City in front of them
// select all the li elements
// to loop through all the items
// add the city in front of its content

const liElUsingTagName = document.getElementsByTagName('li');
console.log(liElUsingTagName);

const liElUsingQueryAll = document.querySelectorAll('li');
console.log(liElUsingQueryAll[0]);

// node list ---> you can execute forEach method on this
liElUsingQueryAll.forEach((el)=>{
  //console.log('text', el.innerText);
  //console.log('city', el.innerText);
  el.textContent = 'city--> ${el.textContent}'
  el.style.color = 'blue';
  el.style.backgroundColor = '#ddd';
})

// liElUsingTagName.forEach(element => {

// });


// let str = 'bangalore'
// let updatedStr = 'city' + str
// 'city --> bangalore'
