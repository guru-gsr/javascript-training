// Going to learn about different types of loops

// 1. for loop
console.log("for Loop");
for(let i=0;i<5;i++)
{
    console.log("Mindpath technologies");
}


// 2. while loop 
let value=1;
console.log("while loop");
while (value<=100) {
    if(value%2===0)
    {
        console.log(value);
    }
    value++;
    
}


// Do while loop executes atleast 1 time 
console.log(" Do While loop");
let num=10;
do{
    console.log(num);
    num++;
}while(num<15);


// for-of loop used over string and Arrays . 
let str="Guru";
console.log("for-of loop ");
for(let val of str)
{
    console.log(val);
}


// for-in loop  preffered to use over objects having value in the form of key and value 
console.log("for-in loop");
let employee={
    name: "Guru",
    company: "Mindpath Technologies",
    age: 21,
    CGPA: 8.5,
    isPass: true,

};

for(let key in employee)
{
    console.log("key =" ,key , "  value=", employee[key]);
}
