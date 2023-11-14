// finding perimeter of a rectangle

const perimeter = (length,breadth) => { 
    return 2*(length+breadth);
}
console.log(perimeter(3,4));

// volume of a rectangular prism 

const volume = (length,width,height)=>{
    return length*width*height;
}

console.log(volume(2,5,3));

// Area and circumference of the circle

const Area = (radius)=>{
    return Math.PI*radius*radius;
}

console.log("this is the area",Area(7));

const circumference = (radius)=>{
    return 2*Math.PI*radius;
}

console.log(`this is the circumference ${circumference(7)}`);


// temeperature convertions

const tempInFar = (tempC)=>{
    return (tempC *(9/5))+32
}

console.log(`the temperature in oF is ${ tempInFar(0)}`);

// returning max vaiable with out using math.Max function

const findMax = (num1,num2,num3) =>{
    if(num1> num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

console.log("the max number is ",findMax(0, 10, 5));

console.log("the max number is ",findMax(0, -10, -2));

// level 2

// swapping numbers 

const swapping = (num1,num2)=>{
    let temp = num1 ;
    num1 = num2;
    num2 = temp;
 return [num1,num2];
}

let num1 = 10;
let num2 = 13;
console.log(`before swapping num1 = ${num1} and num2 = ${num2}`);

console.log(swapping(num1,num2));

console.log(`before swapping num1 = ${num1} and num2 = ${num2}`);

// prime no count 

let even =0;
let odd = 0;

const evensAndOdds = (item)=>{
  for(let i =0 ;i<= 100 ;i++){
    if(i%2 == 0){
        even++;
    }
    else{
        odd++;
    }
  }
  return [even,odd];
}

console.log(evensAndOdds(100));