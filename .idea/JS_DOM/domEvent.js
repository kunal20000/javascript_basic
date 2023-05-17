const printAddButton = document.getElementById('print-address');
const printRoleButton = document.getElementById('print-role');
const printNameAndAddBtn = document.getElementById('prNameAndAdd');
const nameInput = document.getElementById('username');
const addressInput = document.getElementById('address');

//console.log(printAddButton);
//console.log(printRoleButton);
//console.log(printNameAndAddBtn);
//console.log(nameInput);
//console.log(addressInput);

function printAddress(){
console.log('my addres is satara');
}

function printRole(){
console.log('I am developer');
}

function hoveringOverEl(){
console.log('hovering');
}

function movingMouseOut(){
console.log('moving out');
}

//printAddButton.addEventListener('click', ()=>{
// console.log('my address is delhi');
//})
//
//printRoleButton.addEventListener('click', ()=>{
//console.log('kunal sapate');
//})

printAddButton.addEventListener('click',printAddress);
//printRoleButton.addEventListener('click', printRole);
printAddButton.addEventListener('mouseover', hoveringOverEl);
//printRoleButton.addEventListener('mouseover', movingMouseOut);

printRoleButton.onclick = printRole;
printRoleButton.onmouseover = hoveringOverEl;
printRoleButton.onmouseout = movingMouseOut;


// event listener or Event handler
function printName(){
 console.log('my name is kunal');
}

function printNameAndAdd(){
  console.log(`my name is ${nameInput.value} and my address is ${addressInput}`);
  nameInput.value='';
  addressInput.value='';

 // to call server and validate the username and password
}
console.log(nameInput);

printNameAndAddBtn.addEventListener('click', printNameAndAdd);