// Declaration of function 
// function FumctionName(para1, para2)
// {

// }

function addTwoNumbers(number1, number2)
{
    let result=number1+number2;
    return result;
}

let ans=addTwoNumbers(5,4);
//console.log(ans);

/* using of rest operator when parameter list is unknown */

function myCartPrice(params) {
    return params;
}

console.log(myCartPrice(100,200,300,400));



/*passing objects to function*/

const myObj={
    name:"gsr",
    company:"Mindpath"
}

function objectHandle(getObj) {
    return getObj.name;
}

console.log(objectHandle(myObj));




/* passing array to function */
const myArray=[10,20,30,40];
function handleArrays(myArray) {
    return myArray[2];
} 
console.log(handleArrays(myArray));