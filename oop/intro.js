// object literal

const user = {
    username: "Adharsh",
    loginCount: 8,
    singnedIn: true,

    getUserDeatails: function(){
        // console.log("Got user details from database");
        // console.log(`username : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDeatails());
console.log(this);


// constructor function

// const promisOne = new Promise();
// const date = new Date();

// console.log(date);

function user1(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this;   
}
//  in this case userTwo will overwrite the values of userOne so to avoid this problem we use new keyword to create completely new instances 
// const userOne = user1("Adharsh",4,true); 
// const userTwo = user1("Rajesh",5,false);

const userOne = new user1("Adharsh",4,true); 
const userTwo = new user1("Rajesh",5,false);

console.log(userOne.constructor);
console.log(userTwo);