let heroes=["ironman", "hulk" ,"shaktiman", "thor","batman"]; // Array creation
console.log(heroes);
console.log(heroes.length);

let arr=[10,20,30,40,50];
console.log(arr);

for(let i of heroes)             // iterating over array
{
    console.log(i);
}

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


// practice question 

let itemsPrice=[250,645,300,900,50];
//apply 10% off over each item

for(let i=0;i<itemsPrice.length;i++)
{
    let dicountedValue=(itemsPrice[i]/10);
    itemsPrice[i]=itemsPrice[i]-dicountedValue;
}

console.log(itemsPrice);


// Array Methods

let marvelHero=["spiderMan", "ironMan", "thor", "antMan","hulk"];
console.log(marvelHero);
marvelHero.push("BAtman");  // push the batman at the end of marvelHero array changes the original array
console.log("element push");
console.log(marvelHero);  

marvelHero.pop()   // pop the last element of array and return the deleted item
console.log("element pop");

console.log(marvelHero);

let cricHero=["Hitman", "King" ,"MSD", "MAster"];
let updatedArray=marvelHero.concat(cricHero);
console.log("Two arrays conacatenated");

console.log(updatedArray);


updatedArray.unshift("ra-one");
console.log("Using unshift() method  adding at start element");
console.log(updatedArray);


updatedArray.shift();
console.log("Using shift() method removing first element");
console.log(updatedArray);


