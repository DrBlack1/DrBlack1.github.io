//JavaScript event loop


function waitASecond(number){
    return new Promise((resolve,reject)=>{    //function witch is awaiting (time) before running
        setTimeout(()=>{
            if(number>5)
            resolve("resolved")
            if(number<5)
            reject('reject')
        },1000);
    }).catch((err)=>{
        console.log(err)
    });
}



// waitASecond()


async function process1(){
    let statusResolved = await waitASecond(2);
    let statusRejected = await waitASecond(2);
    let statusPending = waitASecond(9);
    console.log(statusResolved);
    console.log(statusRejected);
    console.log(statusPending);
    // "resolved"
}

process1()

const priceOfFlower = 0.62;
let numberOfFlower = 12;

let num=(priceOfFlower * numberOfFlower).toFixed(2);

if(num == 7.44){
    console.log("Making transaction");
}else{
    console.log("Transaction failed");
}