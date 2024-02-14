// about conditional statements

let age=26;
console.log(" age = ", age);

// if statement
console.log("if -statement ");
if(age > 18)
{
    console.log("Can vote");
}


// if-else statement
console.log("if-else statement ");

let currAge=17 ;
console.log(" current age = ", currAge);

if (currAge > 18) {

    console.log("Can Apply for driving licence ");

    
} else {
    console.log("Your age ", currAge , " is less than 18 you cannot apply for Driving licence");

}



// even odd check program 
console.log("Even odd check using if else");
let num1=15;
if(num1%2===0)
{
    console.log("your num ",num1 ,"is even");
}
else{
    console.log("your num ",num1 ,"is odd");

}



console.log("else-if statement");
let OSmarks=80;
let DBMSmarks=90;
let OOPSmarks=95;

console.log("OS marks= ", OSmarks );
console.log("DBMS marks= ", DBMSmarks );
console.log("OOPS marks= ", OOPSmarks );

let percentage=((OSmarks+DBMSmarks+OOPSmarks)/300)*100 ;

if(percentage > 90)
{
    console.log("your percentage =" , percentage ," & your greade is A");
}
else if(percentage < 90 && percentage > 75 )
{
    console.log("your percentage =" , percentage ," & your greade is B");
}
else{
    console.log("your percentage =" , percentage ," & your greade is C");

}



// ternary operators

console.log("ternary operators");
let result= percentage>80 ? "pass" :" fail";
console.log(result);



// Switch -statemnts
console.log("switch case statement");
let fruit="papaya";

switch (fruit) {
    case "Banana":
        console.log("Fruit is banana");
        break;

    case "Apple":
        console.log("Fruit is Apple");
        break;

    case "Mango":
        console.log("Fruit is Mango");
        break;

    default:
        console.log("No matching fruit");

        break;
}