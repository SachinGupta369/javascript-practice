const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async Await task is completed :1');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('promise consume :2');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('SeconD Promise :3');
        resolve()
    },1000)
})
.then(function(){
    console.log('Asyn 2 Resolved :4');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve([user='Jai Shree Ram', pwd='Om Namaha Shivaya :5'])
    },1000)
})

promiseThree.then(function(jaishriram){
    console.log('Om Pravati Namaha :6',jaishriram);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'ram',pwd:'sita ram :7'})
        }else{
            reject('error toh aana hi tha :8')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log( user,' :9');
    return user.username
}).then(function(sachin){
    console.log(sachin);
})
.catch(function(){
    console.log('error hi error :10');
}).finally(()=>{
    console.log('this will execute anyhow :11');
    
})

const promiseFive = new Promise(function(resolve,reject){
   let error = true;
   if(!error){
    resolve({user:'om namaha shivaya', pwd:'om pravati namaha :12'})
   }else{
    reject('promiseFive :13')
   }
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
}
consumePromiseFive()

// async function allUsers(){
//     const response = await fetch('https://api.github.com/users/sachingupta369') 
//     const res = await response.json()
//     console.log(res,"last 1");
// }

// allUsers()

fetch('https://api.github.com/users/sachingupta369')
.then(function(response){
    return response.json()
}).then(function(res){
    console.log("f :final last",res);
})
.catch((error=>{console.log(error);
}))
