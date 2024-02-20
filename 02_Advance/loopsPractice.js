let arr=[11,12,13,14,15];

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }


// arr.forEach((element) =>{
//     console.log(element);
// })

// for(let i of arr)
// {
//     console.log(i);
// }

// for(let i in arr)
// {
//     console.log(i ,  ":-> ",arr[i]);
// }


// let myMap=new Map();
// myMap.set("apple",5);
// myMap.set("Orange",6);
// myMap.set("banana",12);

// console.log(myMap.get("apple"));
// console.log(myMap.has("banana"));

// myMap.delete("orange");

// for(let [key,value] of myMap)
// {
//     console.log(key ,"=" , value);
// }


// let number=[10,20,30,40,50,60];
// let updatedNumber=number.filter(function(i){
//     return i>23;
// });

// console.log(updatedNumber);


// let sum=number.reduce(function(acc,curr){
//     return acc+curr;
// },0);

// console.log(sum);

// let date=new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getMonth());
// let newDate=date.setDate(date.getDate()+1);
//console.log(newDate.getDate());

// let currDate=new Date('2024-12-01');
// let unknownDate=new Date('2025-01-01');

// if(currDate.getTime() < unknownDate.getTime())
// {
//     console.log("unknown date is after currdate");
// }else{
//     console.log("unknown date is before currdate");

// }

var count=0;
function one(callback){
    console.log("function calll");
   var id= setInterval(() => {
        callback();
        //clearInterval();
   if(count===5){
    clearInterval(id);

   }
    }, 2000);
}

function two(){
    
    console.log("function two called ", count);
    count++;
}


one(two);