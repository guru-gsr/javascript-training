// function sum(a,b,callMult){
//     let res=a+b;
//     console.log(a+b);
//     callMult(res,a);
// }
// function Multiply(a,b)
// {
//     console.log(a*b);
// }

// function calculator(a,b,callSum)
// {
//     callSum(a,b,Multiply);
// }

// calculator(3,4,sum);


function goMaheshwar(time,callBack)
{
    if(time<4)
    {
        console.log("I want to go maheshwar");
        
    }
    else{
        callBack(callNikhil);
    }
}

function goSilicon(callBike)
{
    console.log("I am at It park");
    callBike(7);
}

function callNikhil(a) {
    console.log("I want to go silicon at", a);
}

function whereToGo()
{
   goMaheshwar(7,goSilicon);
}

whereToGo();