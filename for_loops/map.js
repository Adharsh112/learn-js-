const myNumber = [1,2,3,4,5,6,7,8];

let AfterSumNumbers = myNumber.map((item) => item+10);//implicit return 

console.log(AfterSumNumbers);

AfterSumNumbers = myNumber.map((item) =>{
    return item+20;
});//explicit return 

console.log(AfterSumNumbers);


// chaining 
// multiple map and filter functions can be performed on a array
// using '.' dot operators these functions will execute one by one and 
// send its output to the next function

let TheAns = myNumber.map((num)=> num *10)
                      .map((num)=> num/2)
                      .filter((num)=> num >20);

console.log(TheAns);



// reduce function

const myTotal = myNumber.reduce((acc,currval)=>{
    // console.log(`sum : ${acc} and cuurentValue is : ${currval}`); //currval is the current value in the array while running th function
    return acc + currval;
},0); //here 0 is the initial value of the accumulator 

console.log(myTotal);


const shoppingCart = [
    {
        course : "MERN 0-1",
        price : 3199
    },
    {
        course : "Advanced 1-100",
        price : 3999
    },
    {
        course : "completer 0 - 100 ",
        price : 4999
    }
]

const coursePriceSum = shoppingCart.reduce((accu,currval) => {

    console.log(`priceSum :- ${accu} and current value :- ${currval.price}`);
    
    return accu+currval.price;
},0)

console.log(coursePriceSum);