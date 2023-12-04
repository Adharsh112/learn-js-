function setUsername(username){
  
    this.username = username;
    console.log("called");
}

function createUser(username,userAge,emailId) {
    setUsername.call(this,username) // here the call is used to send the current execution context into the other function/setUsername function
    // this keyword should be used so that the  setUserName function will use the username and return the username to the create username function


    this.userAge = userAge;
    this.emailId = emailId;
}

const User = new createUser("Adharsh",19,"chai@google.com")

console.log(User);