

function grandParent(){
   let a = 100;
    let d = 400;
   function parent()
   {
      let b = 130;
     function child()
     {
       let c = 20;
       console.log(c);
     }
     return child;
   }
  return parent;
}

const res = grandParent();
console.log(res); //parent fun
// parent got removed from stack
const resfun = res();
console.log(resfun);
resfun();


console.log("this is my log");

function test(){
   console.log("tstn is coming");
}
test();

// closures(parent) ---> b
// closures(grandParent) --> a


function addAndPrintNumber(){
  let no=0;
  function addNumber(noToAdd){
     no = no + noToAdd;
     return no;
  }
  return addNumber;
}

// if need to have a no please call addAndPrintNumber
//

const addNo = addAndPrintNumber(); //no
const res1 = addNo(20);
console.log(res1); //20
addNo(50); //70
addNo(60); // 130
addNo(2000); // 2130

const addNoAgain = addAndPrintNumber(); //no
addNoAgain(30);
addNoAgain(100);

