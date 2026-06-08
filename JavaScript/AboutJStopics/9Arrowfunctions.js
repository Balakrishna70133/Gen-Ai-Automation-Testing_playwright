// Arrow function is a short form for anonymous function
// let demo=()=>{
//     console.log("this is a anonymous function")
// };
// // ()=>{}

//     // create add arrow function
// let add=(a,b)=>{
//     return a+b;
// }
// console.log(add(2,3));

// // arrow function single parameter
// // when function is having simple parameter, the paranthesis becomes optinal
// let b=msg => {
//     console.log("msg");

// }
// b("Bala krishna");

// when there is only one statement in the block and if that is return statement
// then using {} will be the optional 
// create multiply arrow function

// let multiply=(a,b)=>{
//     console.log(a*b);
// }
// multiply(2, 3) 

// or in simple way example 
// let mul=(x, y) => x*y;
// let div=(x, y)=> x/y;
// let add=(x, y)=> x+y;
// let sub=(x, y)=> x-y;
// console.log(mul(6,3));
// console.log(div(16,4));

// (parameters)=>{statements}
//paranthesis is optional when there is only one parameter.
// {}  required when there are more than one statement.
// {} is optional when there is only one statement.

let a1 = (v) => {
    console.log("Hello !");
}

let arr = [10, 20, 30, 40, 50];
arr.forEach(v => console.log(v));