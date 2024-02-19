



function async()
{
    return new Promise(function (resolve,reject)
    {
          setTimeout(function() {
            console.log("data1");
            resolve("Success");
          },4000);
    });
}



function async2() {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            console.log("data 2");
            resolve("done buddy");
        }, 4000);
    });
    
}


function async3()
{
    return new Promise(function (resolve,reject) { 
       setTimeout(() => {
          console.log("data 3");
          resolve("done doneeeeee");
       }, 4000);
    });
}

console.log("fetching data 1----");
let p1=async();
 p1.then((res)=>{
    console.log(res);
    console.log("fetching data 2---");
    let p2=async2();
    p2.then((res) =>{
       console.log(res);
       console.log("fetching data 3-----");
 let p3=async3();
 p3.then((res)=>{
    console.log("res");
 })
    })
    
 });



 
 //console.log(ans);

 