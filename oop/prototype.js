let myName = {
    name :"Adharsh",
    age : 20,
    married : false
}

// prototype is basically an object in javascript to which every other object and function is connected 
// prototype is used to add additional functionalities to all objects and functions
// protoype is used to implement inheritence in javascript

// saymyname() function is added to the prototype object so it is accessable by every other object
Object.prototype.saymyname = ()=>{
    console.log("your name is Adharsh");
}


let yourName = {
    name :"Adharsh",
    age : 20,
    married : false
}

// accessing the functionalities added to the prototype
console.log(myName.saymyname());
console.log(yourName.saymyname());


yourName.sayYourName = ()=>{
    console.log("your name is also Adharsh");
}


console.log(yourName);

// console.log(myName.sayYourName());  this will give error because siblings can not acces each other's properties

//inheritence

const userDetails = {
    name : "Adharsh",
    age : 20
}

const Teacher = {
    Tname: "Hitesh",
    makeVideos : true
}

const TeachingSupport = {
    makeAssignments : "javaScript Assignments",
    isAvailable :true,
    fullTime : true,

     __proto__:userDetails //we use __proto__ to inherit the userDetails to Teachingsupport object
}

console.log(TeachingSupport.name);

// the inheritence can be done out of th object like this 
// Teacher.__proto__ = userDetails; // Teacher is inherit the values of users

// NOW THE MODERN WAY OF IMPLEMENTING INHERITENCE

Object.setPrototypeOf(Teacher,userDetails) //setPrototypeOf(child,parent)

console.log(Teacher.name);


let anotherUsername = "ChaiAurCode    "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);

    console.log(`true length is :${this.trim().length}`);
}

anotherUsername.trueLength();

"Adharsh".trueLength();