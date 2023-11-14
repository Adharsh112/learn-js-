// we use for in loop for iterating through an object
// object traversal cannot be done using for of loop so we use for in loop
// here in for in loop it prints the keys of the objects 
// 

const pro_langes = {
    js :"made by oracle",
    cpp: "c++",
    golang : " by google",
    swift : " by apple"
}

for(const key in pro_langes){
    // console.log(`${key} is for ${pro_langes[key]}`);
}


let programming = ["cpp","java","js","golang"];

for (const key in programming) {
    
    console.log(programming[key]);
}