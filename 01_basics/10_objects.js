// declaration of objects

const mySym=Symbol("mykey1"); //symbol declaration

const jsUser={
    name:"Guru",
    age:21,
    company:"Mindpath",
    city: "Indore",
    lastLoginDays:["Monday", "Tuesday","WEdnesday","Thursday"],
    email:"guru@mindpath.com",
    [mySym]:"Key1"

}

console.log(jsUser.email);  // not preferred b/c "name" like string will not be accessed through this
console.log(jsUser["name"]); // accessing data og jsUser object


jsUser.name="Gurusharan";   // overiding the value

//Object.freeze(jsUser);     // freeezing the object after this we cannot change the value


jsUser.greeting=function () {      /// function declaration
    console.log(`Hello , ${this.name}`);
    
}
console.log(jsUser.greeting());