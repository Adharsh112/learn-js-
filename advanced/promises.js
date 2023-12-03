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
        let error = false;
        if(!error){
            resolve({userName: {firstName :"Adharsh", lastName : "Potharam"},age : "21"});
        }
        else{
            reject(`ERROR: Something went worng`);
        }
    })
})

promsieFour
.then(function(user){
    console.log("this promiseFour is consumed");
    console.log(user)
    return user.userName.firstName;
})
.then((firstName)=>{
    console.log(firstName);
})
.catch((error)=>{
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({user : "adharsh112", Name :"Adharsh potharam"})
        }
        else{
            reject(`This is an horrible error`);
        }
    },5000)
})

// this code is also same as async await
promiseFive.then((userDetails)=>{
   console.log(userDetails);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("I don't know if this promise is resolved or not")
})

// async and await

async function consumePromsiFive(){
    try {

    const response = await promiseFive
    console.log(response);

    } catch (error) {
        console.log(error);
    }
}

consumePromsiFive();


async function getAllUsers(){
  
   try {
    
    const response = await fetch('https;//jsonjsonplaceholderplaceholder.typicode.com/users');
    console.log(response)
    const data = await response.json();
    console.log(data);
   } catch (error) {
      console.log("E : ",error);
   }
}

getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

async function getAllUsers2(){
   
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}

getAllUsers2();
