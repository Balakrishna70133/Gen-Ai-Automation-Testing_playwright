// IIFE - immediately invoked function expression
function addnumbers(a, b) {
    console.log(a+b);
}
addnumbers(5, 4);


// IIFE : we can write a file then and there execute there itself is called IIFE. # this is interview question
//***/ # this will be an interview question  IIFE- immediately invoked function expression and will use this to make JS directly executable 
// it is a function that is executed immediately after it is defined
// it is also known as self-invoking function 
// syntax:(function definition)(parameters);
// IIFE is used as driver for that specific JS file
// it is used to execute the code immediately after it is defined 


// syntax: (function definition ();



(function(a, b){
    console.log(a+b);
})(12, 13);