// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// this type of functions are executed immediately after runnin the program 
// these are written inside parenthesis (function)(execution);
// we need to put the semicolon to terminate the execution of this iife functions
// these IIFE functions are written so that the variables inside this function are protected from the outer pollution of globla vaiables

(function chai(){
  console.log(`DB IS CONNECTED`);
}
)();

((name) => {
  
    console.log(`DB IS CONNECTED 2 ${name}`);

})("Adharsh");  //semi colon is mandatory for terminate iife fucntions