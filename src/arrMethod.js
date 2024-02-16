// arr methods

// forEach

// const num = ['a','b','c','d','e','f','a','b','c','a'];
// let count = {};
// num.forEach(item => {
//    // console.log(array);
//    // console.log(item);
//    //console.log('a['+ index +']='+ item);
//    //sum += item;
//    if(count[item]){
//        count[item]++;
//    }else{
//        count[item]=1;
//    }
// })

// console.log(count);


//  map

const nums = [1,2,3,4,5];

const numsbersDouble = nums.map((value,index,arr)=>{
    return value*2;
});
console.log(numsbersDouble);

const multuplyIndex = nums.map((value, index)=>{
    return value*index;
})
console.log(multuplyIndex);

const products = 
   [
    {name: 'laptop',price: 1000,count: 5},
    {name: 'desktop',price: 1500, count: 2},
    {name: 'phone', price: 500, count: 10}
   ];
   
const totalPrice = products.map(total=>{
      return { name:total.name,
               totalValue: total.price* total.count
             };
   })
   
   console.log(totalPrice);

   const str = ['1','2','3','4'];

const numbers = str.map(item => Number(item));
console.log(numbers);

// filters

const numbers = [1,2,3,4,5];

const evenNumbers = numbers.filter(value=>{
    return value%2==0;
})

console.log(evenNumbers);

const person = 
    [
     { 
         name:"kunal",
         age: 24
     },
     {   
         name:'shubham',
         age: 12
     },
     {   
         name: "jay",
         age: 25
     }
    ];
    
    const adults = person.filter(person=> person.age>=18);
    console.log(adults);
    
    const numbersWithSame = [1,2,3,2,1,3,3,5,4,6];
    
    const sameNumber = numbersWithSame.filter((value,index,array)=>{
        return array.indexOf(value) === index;
    })
    console.log(sameNumber);
    

    //reduce

    const num =[10,2,3,39,5];

const total = num.reduce((accumulator,value,index,arr)=>{
    return accumulator + value;
})

console.log(total);

const max = num.reduce((accumulator,value)=>
{
    if(accumulator> value){
        return accumulator;
    }else{
        return value;
    }
})
console.log(max);

const store = 
[
    {  
        product:'laptop',
        value:1000,
        count:3
    },
    {
        product:'desktop',
        value: 1500,
        count: 4
    },
    {
        product: 'mobile',
        value: 500,
        count: 10
    }
];

const totalValueStore = store.reduce((accumulator,item)=>
     accumulator+ item.value * item.count,0 
     // 0 is the initial total
);
console.log(totalValueStore);

// fill

const num = [1,2,3,4,5];

const numbers = num.fill(0,1,4);
console.log(num);
console.log(numbers);

function fillInNumbers(n){
    return Array(n).fill(0).map((_,idx)=>idx+1);
}

console.log(fillInNumbers(10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]


