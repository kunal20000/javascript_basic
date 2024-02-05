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

