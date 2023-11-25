const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    //DB calls

    setTimeout(function(){
        console.log("async task is complete");
        resolve();
    },1000);
});

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("async task2")
        resolve();
    },2000)

}).then(function(){
    console.log(" promise 2 is consumed");
})

const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
         resolve({username : "Adharsh",email: "example@gmail.com"})
    })
})
promiseThree.then(function(user){
     console.log(user);
})

const promsieFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            
        }
    })
})

promsieFour.then(function(user){
    console.log("this promiseFour is consumed");
    console.log(user)
})