let str="Mindpath";

console.log(str.length);  // gives the length of the string
console.log(str[3]);      // returns the value from string  at index which is passed 

let upperString=str.toUpperCase();   // converts to uppercase 
let lowerString=str.toLowerCase();   // converts to lowercase

console.log(upperString);
console.log(lowerString);


console.log(str.slice(1,4));    // gives the substring

let str1="Mindpath";
let str2="Technologies";

console.log(str1.concat(str2));  // joins the 2 strings

console.log(str2.replace("s","ss"));  // replaces the value in string

console.log(str1.charAt(4));  // return the value at index 4