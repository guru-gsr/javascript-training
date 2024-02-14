const a=10;  //global scope

function abc()
{
    let a=11;  // block or functional scope  
    console.log(a); 
}

abc();
console.log(a);