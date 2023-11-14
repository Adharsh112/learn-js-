console.time()
for( let i =0 ;i< 100;i++){
    // console.log(i);
}

console.timeEnd();


const arr = [1,3,3,4,5];

// for of loop

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello Adharsh";
for(const greet of greetings){
    // if(greet === ' '){
    //     continue;       //this will remove spaces from the string
    // }
    console.log(`Each character is ${greet}`);
}

// maps

// maps can be iterated by using for of loop 
// maps are not iteratble by fo each loop

const map = new Map(); //her m is capital while initializing


map.set("In", "India");
map.set("91" ,"India");
map.set("102" , "United States Of America");

for(const keys of map){
    console.log(keys); // this will give the entire map elements
}

for(const [keys,values] of map){
    console.log(keys, ":-", values); //this will only give the keys and values from the map as wanted
}


