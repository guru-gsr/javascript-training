function task1() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve("success task1");
        }, 2000);
    });
}


function task2() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve("success task2" );
        }, 2500);
    });
}

function task3() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve("success task3");
        }, 1000);
    });
}


async function getAllData()
{  
    console.log("Getting data 1");
    await task1();
    console.log("Getting data 2");

    await task2();
    console.log("Getting data 3");

    await task3()
}

getAllData();