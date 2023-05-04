// create a function which will the givve the result bases on student marks

function calculateResult(marks){
   // if marks > 80 --> distinction
    // if marks > 60 and <80 ---> first
    if(marks<0){
     console.log("marks cant be less than 0");
     return;
    }
    if(marks>100){
    console.log('marks cant be more than 100');
    return;
    }

    if(marks<0 || marks>100){
     console.log('not a valid mark');
    }

    if(marks>80){
    console.log('Student passesd with distinction');
    }else if(marks>60){
     console.log('Student passesd with first division')
    }else if(marks>45){
    console.log('Student passed with second division');
    }else if(marks>30){
     console.log('Student passesd with third division');
    }else{
     console.log('Student failed');
    }

    if(marks>=80 && marks<100){
    console.log("Stuent extraordinary")
    }
    if(marks>=60 || marks<80){
    console.log('Student')
    }
}

calculateResult(60);
calculateResult(85);
calculateResult(35);
calculateResult(55);
calculateResult(25);
calculateResult(-25);
calculateResult(125);

//80-100 --> distinction

// loops --> to perform repeated tasks
// for loop

//for(initialization,condition check,statement to end the loop)
// step - 1 initialization --> happens only once
// 2. condition check- if true --> execute loop body --> else exit the loop
// 3. run the staement afterwards
// loop body


//for(var i=20;i>10;i-=2){
//console.log(i);
//}

//for(var i=20;i>10;){
//i--;
//console.log(i);
//}

//console.log('outside the loop', i);
// task -> how many multiples of 2 in 1024

//var a=0;
//while(a>0){
//console.log('a-->', a);
//a--;
//}
//
//do{
// console.log('a-->', a);
// a--;
//}
//while(a>0);
//
//console.log(a);
//
//const arr = [10, 40, 59, 57, 30];

//const user ={
// username: 'kunal',
// email: 'kunalsapate2000@gmail.com',
// instructor: true,
// noOfBatches: 1
//}

//for(let a in arr){ // a means it takes index
//console.log('index-->', a);// index of the array
//console.log('value-->', arr[a]);
//}

//for(let b in user){
// console.log('key-->', b);// index of the array
// console.log('value-->', user[b]);
//}
//console.log(user.username);

//const arr2 = [10, 40, 59, 57, 30];
// for in is for object and for of is for array

//for(let a of arr2){
//console.log(a);
//}


const arr = [10, 40, 29, 57, 30];
console.log(arr.length);

//Break and continue

// break--> exist the loop immadiately
// finding a value(59) in arr

for(let i=0;i<arr.length;i++){
 console.log(arr[i]);
 if(arr[i]==57){
  console.log('value found');
  break;
 }
}


// continue --> used to skip a iteration
// log only numbers greater than 30

for(let i=0;i<arr.length;i++){
 console.log('start', i);
if(arr[i]<30){
 continue;
}
console.log('element is', arr[i]);
}
