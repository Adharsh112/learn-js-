// console.log("this is all about objects");

const instaUser = {}
console.log(instaUser);

instaUser.name = "Adharsh";
instaUser.id = "afd@fgmail.com";
instaUser.followers = 200;
instaUser.follwing = 300;

console.log(instaUser);

const normalUser = {
    email :"adfd@gmail.com",

    fullname: {
        userFullName :{
            firstName : "Adharsh",
            lastName  :"Potharam"
        }
    }
}

console.log(normalUser);
console.log(normalUser.fullname.userFullName.firstName);

console.log(normalUser.fullname.userFullName.lastName);

const obj1 =  { 1 :'A', 2: 'B'};
const obj2 =  { 3 :'C' , 4: 'D'};

const obj3 = Object.assign({}, obj1,obj2);

console.log(obj3);

const db = [
    {
        id : "jatin",
        age : "22"
    },
    {
        id : "rajesh",
        age :"19"
    },
    {
        id : "Adharsh",
        age :"20"
    }

]

console.log(db);

console.log(Object.keys(instaUser));

console.log( Object.values(instaUser));

console.log( Object.entries(instaUser));

console.log(Object.hasOwnProperty("name"));



// destructoring

const Thedevs = { 
    
    courseName : "MERN from 0 -1",
    courseInstructor : "Harkirat singh",
    coursePrice : " 5000"
}

const {courseInstructor : instructor} = Thedevs;

console.log(instructor);

// {
//   this is JSON -(java script object notation ) this is how  data is recieved from apis
//   "name " : " Adharsh",
//    "age"  :  "Potharam",
//    "height" : "potharam"
// }