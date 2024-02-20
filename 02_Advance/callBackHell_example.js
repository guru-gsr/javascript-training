function add(a,b,callback) {
    setTimeout(function()
    {
        const result=a+b;
        console.log(result);
        callback(null,result);
    },2000);
}

function subtract(a,b,callback) {
    setTimeout(function () {
        const result=a-b;
        callback(null,result);
    },2000);
}


function multiply(a,b,callback) {
    setTimeout(function () {
        const result=a*b;
        callback(null,result);
        
    },2000)
    
}


function divide(a,b,callback) {
    setTimeout(function () {
        if(b==0) {
            callback(new Error("Division by zer is not allowed"));
        } else {
            const result=a/b;
            callback(null,result);
        }
    },2000);
    
}


  let result1=add(10,5,()=>{
    console.log("getting data of subtract....");
    subtract(result1,3 ,()=>{
        console.log("getting result ......");
    })
})


console.log(result1);


// add(10,5,function (err,result1) {
//     if(err){
//         console.error("Error",err);
//     }else{
//         subtract(result1,3,function (err,result2) {
//             if (err) {
//                 console.error("Error", err);
//             } else {
//                 multiply(result2,2,function (err,result3) {
//                    if (err) {
//                      console.error("error" ,err);
//                    } else {
//                     divide(result3,2,function (err,result4) {
//                         if (err) {
//                             console.error("error", err);
//                         } else {
//                             console.log("Final result", result4);
//                         }
//                     });
//                    }
                    
//                 });
//             }
//         });
//     }
// });