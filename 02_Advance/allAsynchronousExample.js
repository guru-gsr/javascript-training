 /*
        // Call Back HEll Example 

 function wakeUP(time,callback) {
    setTimeout(() => {
        console.log("I woked up and get Freshed");
         callback();
    }, 1000);
}
function doBreakfast(callback) {
    setTimeout(() => {
        console.log("I am done with my breakfast");
        callback();
    }, 500);
}
function goToCompany(callback) {
    setTimeout(() => {
        console.log("I reached company");
        callback();
    }, 1500);   
}

function workInCompany(callback) {
    setTimeout(() => {
        console.log("I completed my work at company");
        callback()
    }, 5000);
}

function leaveForHome(callback) {
    setTimeout(() => {
        console.log("I am leaving for home");
        callback();
    }, 1000);
}


console.log("waiting for task 1 to be complete");
wakeUP(7,()=>{
    console.log("waiting for task 2 to be complete");
    doBreakfast(()=>{
        console.log("waiting for task 3 to be complete");
        goToCompany(()=>{
            console.log("waiting for task 4 to be complete");
            workInCompany(()=>{
                console.log("waiting for task 5 to be complete");
                leaveForHome(()=>{
                    console.log("All tasks completed Go to bad and take rest.....");
                });
            });
        });
    });
});




*/


// promises example


/*
function wakeUP() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("I woked up and get Freshed");
             resolve(200);
        }, 1000);
    })
    
}


function doBreakfast() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("I am done with my breakfast");
            resolve(200);
        }, 500);
    })
    
}

function goToCompany() {
 return new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log("I reached company");
        resolve(200);
    }, 1500);   
 })
   
}

function workInCompany() {
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => {
            console.log("I completed my work at company");
            resolve(200);
        }, 5000);
    })
    
}

function leaveForHome() {

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("I am leaving for home");
            resolve(200);
        }, 1000);
    })
    
}

console.log("waiting for task 1 to be complete");
wakeUP().then(res =>{
    console.log(res);
    console.log("waiting for task 2 to be complete");

    return doBreakfast()
})
 .then(res =>{
  console.log(res);
  console.log("waiting for task 3 to be complete");

  return goToCompany()
 })
 .then(res =>{
    console.log(res);
    console.log("waiting for task 4 to be complete");

    return workInCompany();
 })
 .then(res =>{
    console.log(res);
    console.log("waiting for task 5 to be complete");

    return leaveForHome();
 })
 .then(res =>{
    console.log(res);
    console.log("all tasks completed");
 })

 */




 /// Async await example

 function wakeUP() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("I woked up and get Freshed");
             resolve(200);
        }, 1000);
    })
    
}


function doBreakfast() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("I am done with my breakfast");
            resolve(200);
        }, 500);
    })
    
}

function goToCompany() {
 return new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log("I reached company");
        resolve(200);
    }, 1500);   
 })
   
}

function workInCompany() {
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => {
            console.log("I completed my work at company");
            resolve(200);
        }, 5000);
    })
    
}

function leaveForHome() {

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("I am leaving for home");
            resolve(200);
        }, 1000);
    })
    
}


async function getAllData()
{   console.log("waiting for task 1 to be complete");

    await wakeUP();
    console.log("waiting for task 2 to be complete");

    await doBreakfast();
    console.log("waiting for task 3 to be complete");

    await goToCompany();
    console.log("waiting for task 4 to be complete");

    await workInCompany();
    console.log("waiting for task 5 to be complete");

    await leaveForHome();
    

}

getAllData();

/// adfjajfak