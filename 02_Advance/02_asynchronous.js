// Asynchronous code one will not wait for other to complete their task


console.log("one");
console.log("Two");
console.log("Three");
console.log("Three");
console.log("Three");
console.log("Three");
console.log("Three");
console.log("Three");
console.log("Three");

// setTimeout(() => {
//     console.log("hello gsr");
// }, 5000);

setTimeout(greet,5000);   // setTimeOut is used to take time for execution 

function greet() {
    console.log("Good morning");
}

console.log("four");
console.log("five");
console.log("six");
console.log("seven");