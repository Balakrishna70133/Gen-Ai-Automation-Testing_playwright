// function calculator(a, b, operation) {
//     operation (a, b); // this will the function passed as operation with values
// }
// calculator(5, 6, function (x, y){
//     console.log("addition: " + (x + y));
// });
// calculator(5, 6, (x, y) => x + y);

// let num=[1, 2, 3, 4, 5];
// num.forEach(function(z){
//  console.log(num) ;
// });


// call back functions example
// setTimeout(() => {
//     console.log("this is after 1 second!")
//     setTimeout(() => {
//     console.log("this is after 3 seconds!")
    
// setTimeout(() => {
//     console.log("this is after 2 seconds!")
// }, 3000);    
// }, 2000);
// }, 1000);


// remember js executes code line by line but behaves asynchronous 
// it does not wait for the statements completion 
// to make asynchronous to synchronous behaviour 
// callback are introduced to handle this. but end up in call back hell

  // # why callbacks are introduced : to make js to behave synchronous and also 2nd reason is keep the logic outside and pass to the  function.

function waitfor1second(cb) {
    setTimeout(() => {
        console.log("wait for 1 second");
        cb();
        
    }, 1000);
}
function waitfor2seconds(){
    setTimeout(()=>{
        console.log("wait for 2 seconds")
    },2000);
}




function waitfor3seconds(cb1, cb2) {
    setTimeout(() => {
        console.log("wait for 3 seconds")
        cb1(cb2); 
    }, 3000);
}
waitfor3seconds(waitfor1second, waitfor2seconds)

// function waitfor2seconds(cb){
//     setTimeout(() =>{
//         console.log("wait for 2 seconds")
//         cb();
//     }, 2000);
// }
 
// waitfor3seconds(function (cb){
//     setTimeout(() => {
//         console.log("wait for 2 seconds")
//         cb();
//     }, 2000);
// },function waitfor1section() {
//     setTimeout(() => {
//         console.log("wait for 1 second")
        
//     }, 1000);
// });
// waitfor3seconds(waitfor2seconds, waitfor1second)


// create a function that takes callback and executes
// function calculator(a, b, operation){
//     return operation(a, b);
// }
// let result = calculator(12, 13, function (x, y){
//     return x + y
// });
// console.log(result);
// console.log(calculator(6, 6, function (x, y){
//     return x * y
// }));